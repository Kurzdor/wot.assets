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
            104: (e, t, r) => {
                'use strict';
                var a = {};
                r.r(a),
                    r.d(a, { mouse: () => w, off: () => f, on: () => h, onResize: () => m, onScaleUpdated: () => g });
                var n = {};
                r.r(n),
                    r.d(n, {
                        events: () => a,
                        getMouseGlobalPosition: () => b,
                        getSize: () => S,
                        graphicsQuality: () => L,
                        playSound: () => x,
                        setRTPC: () => E,
                    });
                var i = {};
                r.r(i), r.d(i, { getBgUrl: () => M, getTextureUrl: () => _ });
                var l = {};
                r.r(l),
                    r.d(l, {
                        addModelObserver: () => k,
                        addPreloadTexture: () => C,
                        children: () => i,
                        displayStatus: () => T,
                        displayStatusIs: () => re,
                        events: () => W,
                        extraSize: () => ae,
                        forceTriggerMouseMove: () => ee,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => j,
                        getDisplayStatus: () => te,
                        getScale: () => q,
                        getSize: () => N,
                        getViewGlobalPosition: () => V,
                        isEventHandled: () => Z,
                        isFocused: () => K,
                        pxToRem: () => X,
                        remToPx: () => Q,
                        resize: () => B,
                        sendEvent: () => $,
                        setAnimateWindow: () => J,
                        setEventHandled: () => Y,
                        setInputPaddingsRem: () => z,
                        setSidePaddingsRem: () => U,
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
                const w = (function () {
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
                function x(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function E(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((r) => {
                        console.error(`setRTPC('${e}', '${t}'): `, r);
                    });
                }
                function S(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function b(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const L = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    p = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    y = Object.keys(p).reduce((e, t) => ((e[t] = () => x(p[t])), e), {}),
                    H = { play: Object.assign({}, y, { sound: x }), setRTPC: E };
                function _(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function M(e, t, r) {
                    return `url(${_(e, t, r)})`;
                }
                const T = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    W = {
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
                    A = ['args'];
                const P = 2,
                    O = 16,
                    I = 32,
                    G = 64,
                    D = (e, t) => {
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
                                })(t, A);
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
                    $ = {
                        close(e) {
                            D('popover' === e ? P : I);
                        },
                        minimize() {
                            D(G);
                        },
                        move(e) {
                            D(O, { isMouseEvent: !0, on: e });
                        },
                    };
                function C(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function z(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function j(e, t, r, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, a);
                }
                function k(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function U(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function N(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function B(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function V(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: Q(t.x), y: Q(t.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function q() {
                    return viewEnv.getScale();
                }
                function X(e) {
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
                const re = Object.keys(T).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === T[t]), e), {}),
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
                            window.isDomBuilt ? e() : W.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ie = { view: l, client: n, sound: H };
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
                        w = a.largeHeight,
                        x = a.mediumHeight,
                        E = a.smallHeight,
                        S = a.extraSmallHeight,
                        b = { extraLarge: v, large: w, medium: x, small: E, extraSmall: S };
                    if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                        if (r.extraLarge && n) return t;
                        if (r.large && i) return t;
                        if (r.medium && l) return t;
                        if (r.small && s) return t;
                        if (r.extraSmall && d) return t;
                    } else {
                        if (r.extraLargeWidth && c) return u(t, r, b);
                        if (r.largeWidth && m) return u(t, r, b);
                        if (r.mediumWidth && g) return u(t, r, b);
                        if (r.smallWidth && h) return u(t, r, b);
                        if (r.extraSmallWidth && f) return u(t, r, b);
                        if (
                            !(r.extraLargeWidth || r.largeWidth || r.mediumWidth || r.smallWidth || r.extraSmallWidth)
                        ) {
                            if (r.extraLargeHeight && v) return t;
                            if (r.largeHeight && w) return t;
                            if (r.mediumHeight && x) return t;
                            if (r.smallHeight && E) return t;
                            if (r.extraSmallHeight && S) return t;
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
                    we = ({ children: e }) => {
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
                var xe = r(483),
                    Ee = r.n(xe),
                    Se = r(926),
                    be = r.n(Se);
                let Le, pe, ye;
                !(function (e) {
                    (e[(e.ExtraSmall = le.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = le.small.width)] = 'Small'),
                        (e[(e.Medium = le.medium.width)] = 'Medium'),
                        (e[(e.Large = le.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = le.extraLarge.width)] = 'ExtraLarge');
                })(Le || (Le = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = le.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = le.small.width)] = 'Small'),
                            (e[(e.Medium = le.medium.width)] = 'Medium'),
                            (e[(e.Large = le.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = le.extraLarge.width)] = 'ExtraLarge');
                    })(pe || (pe = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = le.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = le.small.height)] = 'Small'),
                            (e[(e.Medium = le.medium.height)] = 'Medium'),
                            (e[(e.Large = le.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = le.extraLarge.height)] = 'ExtraLarge');
                    })(ye || (ye = {}));
                const He = () => {
                        const e = (0, o.useContext)(ge),
                            t = e.width,
                            r = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return Le.ExtraLarge;
                                    case e.large:
                                        return Le.Large;
                                    case e.medium:
                                        return Le.Medium;
                                    case e.small:
                                        return Le.Small;
                                    case e.extraSmall:
                                        return Le.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), Le.ExtraSmall;
                                }
                            })(e),
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return pe.ExtraLarge;
                                    case e.largeWidth:
                                        return pe.Large;
                                    case e.mediumWidth:
                                        return pe.Medium;
                                    case e.smallWidth:
                                        return pe.Small;
                                    case e.extraSmallWidth:
                                        return pe.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), pe.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return ye.ExtraLarge;
                                    case e.largeHeight:
                                        return ye.Large;
                                    case e.mediumHeight:
                                        return ye.Medium;
                                    case e.smallHeight:
                                        return ye.Small;
                                    case e.extraSmallHeight:
                                        return ye.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), ye.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: n, mediaHeight: i, remScreenWidth: t, remScreenHeight: r };
                    },
                    _e = ['children', 'className'];
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
                const Te = {
                        [pe.ExtraSmall]: '',
                        [pe.Small]: be().SMALL_WIDTH,
                        [pe.Medium]: `${be().SMALL_WIDTH} ${be().MEDIUM_WIDTH}`,
                        [pe.Large]: `${be().SMALL_WIDTH} ${be().MEDIUM_WIDTH} ${be().LARGE_WIDTH}`,
                        [pe.ExtraLarge]: `${be().SMALL_WIDTH} ${be().MEDIUM_WIDTH} ${be().LARGE_WIDTH} ${be().EXTRA_LARGE_WIDTH}`,
                    },
                    Re = {
                        [ye.ExtraSmall]: '',
                        [ye.Small]: be().SMALL_HEIGHT,
                        [ye.Medium]: `${be().SMALL_HEIGHT} ${be().MEDIUM_HEIGHT}`,
                        [ye.Large]: `${be().SMALL_HEIGHT} ${be().MEDIUM_HEIGHT} ${be().LARGE_HEIGHT}`,
                        [ye.ExtraLarge]: `${be().SMALL_HEIGHT} ${be().MEDIUM_HEIGHT} ${be().LARGE_HEIGHT} ${be().EXTRA_LARGE_HEIGHT}`,
                    },
                    We = {
                        [Le.ExtraSmall]: '',
                        [Le.Small]: be().SMALL,
                        [Le.Medium]: `${be().SMALL} ${be().MEDIUM}`,
                        [Le.Large]: `${be().SMALL} ${be().MEDIUM} ${be().LARGE}`,
                        [Le.ExtraLarge]: `${be().SMALL} ${be().MEDIUM} ${be().LARGE} ${be().EXTRA_LARGE}`,
                    },
                    Ae = (e) => {
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
                        const n = He(),
                            i = n.mediaWidth,
                            l = n.mediaHeight,
                            o = n.mediaSize;
                        return s().createElement('div', Me({ className: Ee()(r, Te[i], Re[l], We[o]) }, a), t);
                    },
                    Pe = ['children'];
                const Oe = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                a,
                                n = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                            return n;
                        })(e, Pe);
                    return s().createElement(we, null, s().createElement(Ae, r, t));
                };
                var Ie = r(493),
                    Ge = r.n(Ie);
                function De() {
                    const e = (0, o.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, o.useEffect)(() => t, []),
                        (0, o.useMemo)(
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
                }
                var $e = r(403);
                function Ce() {
                    return !1;
                }
                console.log;
                var ze = r(174);
                function je(e, t) {
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
                const Ue = (e) => (0 === e ? window : window.subViews.get(e));
                var Ne = r(946);
                const Be = ((e, t) => {
                        const r = (0, o.createContext)({});
                        return [
                            function ({ mode: a = 'real', options: n, children: i, mocks: l }) {
                                const u = (0, o.useRef)([]),
                                    d = (r, a, n) => {
                                        var i;
                                        const l = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = Ue,
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
                                                        for (var e, r = je(n.keys()); !(e = r()).done; ) i(e.value, t);
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
                                                            n = ze.LO.box(a, { equals: Ce });
                                                        return (
                                                            'real' === r &&
                                                                o.subscribe(
                                                                    (0, ze.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const a = null != t ? t : s(e),
                                                            n = ze.LO.box(a, { equals: Ce });
                                                        return (
                                                            'real' === r &&
                                                                o.subscribe(
                                                                    (0, ze.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const a = s(t);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, t) => ((e[t] = ze.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === r &&
                                                                    o.subscribe(
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
                                                                l = i.reduce(
                                                                    (e, [t, r]) => ((e[r] = ze.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === r &&
                                                                    o.subscribe(
                                                                        (0, ze.aD)((e) => {
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
                                    w = f[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        c.current ? w(d(g, n, l)) : (c.current = !0);
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
                            return {
                                computes: {
                                    vehicleCombatParams: (0, Ne.Om)(() =>
                                        Object.entries(t.root.get()).map(([e, t]) => {
                                            return {
                                                type: e,
                                                sectionValues:
                                                    ((r = t),
                                                    Array.from(
                                                        { length: 5 },
                                                        (e, t) => (Math.max(0, Math.min(20, r - 20 * t)) / 20) * 100,
                                                    )),
                                            };
                                            var r;
                                        }),
                                    ),
                                },
                            };
                        },
                        ({ externalModel: e }) => ({
                            openTechTreeWindow: e.createCallbackNoArgs('onClick'),
                            updateViewHeight: e.createCallback((e) => ({ height: e }), 'onResized'),
                        }),
                    ),
                    Ve = Be[0],
                    Fe = Be[1];
                function qe(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const Xe = 'Button_base_8c',
                    Qe = 'Button_glow_a6',
                    Je = 'Button_label_3d',
                    Ke = (0, $e.Pi)(() => {
                        const e = Fe().controls;
                        return s().createElement(
                            'div',
                            {
                                className: Xe,
                                onClick: () => {
                                    qe('play'), e.openTechTreeWindow();
                                },
                                onMouseEnter: () => {
                                    qe('highlight');
                                },
                            },
                            s().createElement('div', { className: Qe }),
                            s().createElement('div', { className: Je }, R.strings.battle_royale.button.modules()),
                        );
                    }),
                    Ye = 'Section_base_bd',
                    Ze = 'Section_defaultSection_8c',
                    et = 'Section_filledSection_7e',
                    tt = 'Section_filledSection__fullSection_09',
                    rt = ({ filledSectionWidth: e }) => {
                        const t = e % 100 == 0;
                        return s().createElement(
                            'div',
                            { className: Ye, style: { width: '20%' } },
                            s().createElement('div', { className: Ze }),
                            e > 0 &&
                                s().createElement('div', { className: Ee()(et, t && tt), style: { width: `${e}%` } }),
                        );
                    },
                    at = 'Parameter_base_c0',
                    nt = 'Parameter_paramType_40',
                    it = 'Parameter_iconContainer_93',
                    lt = 'Parameter_wrapper_b9',
                    ot = 'Parameter_type_20',
                    st = 'Parameter_text_db',
                    ut = 'Parameter_paramValuesContainer_e5',
                    dt = R.images.gui.maps.icons.battleRoyale.techParams,
                    ct = R.strings.battle_royale.techParams.type,
                    mt = ({ parameter: e }) => {
                        const t = e.type,
                            r = e.sectionValues;
                        return s().createElement(
                            'div',
                            { className: at },
                            s().createElement(
                                'div',
                                { className: nt },
                                s().createElement(
                                    'div',
                                    { className: it },
                                    s().createElement(
                                        'div',
                                        { className: lt },
                                        s().createElement('div', {
                                            className: ot,
                                            style: { backgroundImage: `url(${dt.$dyn(t)})` },
                                        }),
                                    ),
                                    s().createElement('div', { className: st }, ct.$dyn(t)),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: ut },
                                r.map((e, t) => s().createElement(rt, { filledSectionWidth: e, key: t })),
                            ),
                        );
                    },
                    gt = 'App_base_e7',
                    ht = 'App_container_87',
                    ft = (0, $e.Pi)(() => {
                        const e = s().useRef(null),
                            t = Fe(),
                            r = t.controls,
                            a = t.model,
                            n = De();
                        var i;
                        return (
                            (i = () => {
                                ie.view.setSidePaddingsRem({ left: 50, right: 0, top: 0, bottom: 0 });
                            }),
                            (0, o.useEffect)(i, []),
                            s().useLayoutEffect(() => {
                                const t = () => {
                                    n.run(() => {
                                        const t = e.current;
                                        t && r.updateViewHeight(viewEnv.pxToRem(t.offsetHeight));
                                    });
                                };
                                return (
                                    t(),
                                    engine.on('clientResized', t),
                                    () => {
                                        engine.off('clientResized', t);
                                    }
                                );
                            }, [r, n]),
                            s().createElement(
                                'div',
                                { className: gt, ref: e },
                                s().createElement(
                                    'div',
                                    { className: ht },
                                    a.computes
                                        .vehicleCombatParams()
                                        .map((e, t) => s().createElement(mt, { parameter: e, key: t })),
                                ),
                                s().createElement(Ke, null),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    Ge().render(
                        s().createElement(Ve, null, s().createElement(Oe, null, s().createElement(ft, null))),
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
        (a.j = 706),
        (() => {
            var e = { 706: 0 };
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
    var n = a.O(void 0, [695], () => a(104));
    n = a.O(n);
})();
