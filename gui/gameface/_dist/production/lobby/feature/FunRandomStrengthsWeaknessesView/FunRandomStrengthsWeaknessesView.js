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
            9803: (e, t, r) => {
                'use strict';
                var a = {};
                r.r(a),
                    r.d(a, { mouse: () => x, off: () => v, on: () => h, onResize: () => g, onScaleUpdated: () => c });
                var n = {};
                r.r(n),
                    r.d(n, {
                        events: () => a,
                        getMouseGlobalPosition: () => L,
                        getSize: () => S,
                        graphicsQuality: () => p,
                        playSound: () => w,
                        setRTPC: () => E,
                    });
                var i = {};
                r.r(i), r.d(i, { getBgUrl: () => _, getTextureUrl: () => M });
                var l = {};
                r.r(l),
                    r.d(l, {
                        addModelObserver: () => k,
                        addPreloadTexture: () => P,
                        children: () => i,
                        displayStatus: () => T,
                        displayStatusIs: () => Y,
                        events: () => A,
                        extraSize: () => Z,
                        forceTriggerMouseMove: () => J,
                        freezeTextureBeforeResize: () => U,
                        getBrowserTexturePath: () => $,
                        getDisplayStatus: () => K,
                        getScale: () => N,
                        getSize: () => j,
                        getViewGlobalPosition: () => C,
                        isEventHandled: () => Q,
                        isFocused: () => q,
                        pxToRem: () => B,
                        remToPx: () => V,
                        resize: () => z,
                        sendEvent: () => I,
                        setAnimateWindow: () => F,
                        setEventHandled: () => X,
                        setInputPaddingsRem: () => G,
                        setSidePaddingsRem: () => D,
                        whenTutorialReady: () => ee,
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
                const g = d('clientResized'),
                    c = d('self.onScaleUpdated'),
                    h = (e, t) => engine.on(e, t),
                    v = (e, t) => engine.off(e, t),
                    f = { down: d('mousedown'), up: d('mouseup'), move: d('mousemove') },
                    x = (function () {
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
                                e.enabled && m(!0);
                            },
                            disableOutside() {
                                e.enabled && m(!1);
                            },
                        });
                    })();
                function w(e) {
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
                function L(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const p = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    b = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    y = Object.keys(b).reduce((e, t) => ((e[t] = () => w(b[t])), e), {}),
                    H = { play: Object.assign({}, y, { sound: w }), setRTPC: E };
                function M(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function _(e, t, r) {
                    return `url(${M(e, t, r)})`;
                }
                const T = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    A = {
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
                    W = ['args'],
                    O = (e, t) => {
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
                    I = {
                        close(e) {
                            O('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            O(64);
                        },
                        move(e) {
                            O(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function P(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function G(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function $(e, t, r, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, a);
                }
                function k(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function D(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function j(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function z(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function C(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: V(t.x), y: V(t.y) };
                }
                function U() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function N() {
                    return viewEnv.getScale();
                }
                function B(e) {
                    return viewEnv.pxToRem(e);
                }
                function V(e) {
                    return viewEnv.remToPx(e);
                }
                function F(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function q() {
                    return viewEnv.isFocused();
                }
                function X() {
                    return viewEnv.setEventHandled();
                }
                function Q() {
                    return viewEnv.isEventHandled();
                }
                function J() {
                    viewEnv.forceTriggerMouseMove();
                }
                function K() {
                    return viewEnv.getShowingStatus();
                }
                const Y = Object.keys(T).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === T[t]), e), {}),
                    Z = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    ee = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : A.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    te = { view: l, client: n, sound: H },
                    re = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var ae;
                function ne(e, t, r) {
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
                })(ae || (ae = {}));
                const ie = te.client.getSize('rem'),
                    le = ie.width,
                    oe = ie.height,
                    se = Object.assign({ width: le, height: oe }, ne(le, oe, re)),
                    ue = (0, o.createContext)(se),
                    de = ['children'],
                    me = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    a,
                                    n = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                                return n;
                            })(e, de);
                        const a = (0, o.useContext)(ue),
                            n = a.extraLarge,
                            i = a.large,
                            l = a.medium,
                            s = a.small,
                            d = a.extraSmall,
                            m = a.extraLargeWidth,
                            g = a.largeWidth,
                            c = a.mediumWidth,
                            h = a.smallWidth,
                            v = a.extraSmallWidth,
                            f = a.extraLargeHeight,
                            x = a.largeHeight,
                            w = a.mediumHeight,
                            E = a.smallHeight,
                            S = a.extraSmallHeight,
                            L = { extraLarge: f, large: x, medium: w, small: E, extraSmall: S };
                        if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                            if (r.extraLarge && n) return t;
                            if (r.large && i) return t;
                            if (r.medium && l) return t;
                            if (r.small && s) return t;
                            if (r.extraSmall && d) return t;
                        } else {
                            if (r.extraLargeWidth && m) return u(t, r, L);
                            if (r.largeWidth && g) return u(t, r, L);
                            if (r.mediumWidth && c) return u(t, r, L);
                            if (r.smallWidth && h) return u(t, r, L);
                            if (r.extraSmallWidth && v) return u(t, r, L);
                            if (
                                !(
                                    r.extraLargeWidth ||
                                    r.largeWidth ||
                                    r.mediumWidth ||
                                    r.smallWidth ||
                                    r.extraSmallWidth
                                )
                            ) {
                                if (r.extraLargeHeight && f) return t;
                                if (r.largeHeight && x) return t;
                                if (r.mediumHeight && w) return t;
                                if (r.smallHeight && E) return t;
                                if (r.extraSmallHeight && S) return t;
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
                    const t = (0, o.useContext)(ue),
                        r = (0, o.useState)(t),
                        a = r[0],
                        n = r[1],
                        i = (0, o.useCallback)((e, t) => {
                            const r = te.view.pxToRem(e),
                                a = te.view.pxToRem(t);
                            n(Object.assign({ width: r, height: a }, ne(r, a, re)));
                        }, []),
                        l = (0, o.useCallback)(() => {
                            const e = te.client.getSize('px');
                            i(e.width, e.height);
                        }, [i]);
                    ((e) => {
                        const t = (0, o.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    })(() => {
                        te.client.events.on('clientResized', i), te.client.events.on('self.onScaleUpdated', l);
                    }),
                        (0, o.useEffect)(
                            () => () => {
                                te.client.events.off('clientResized', i),
                                    te.client.events.off('self.onScaleUpdated', l);
                            },
                            [i, l],
                        );
                    const u = (0, o.useMemo)(() => Object.assign({}, a), [a]);
                    return s().createElement(ue.Provider, { value: u }, e);
                };
                var ce = r(6483),
                    he = r.n(ce),
                    ve = r(926),
                    fe = r.n(ve);
                let xe, we, Ee;
                !(function (e) {
                    (e[(e.ExtraSmall = re.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = re.small.width)] = 'Small'),
                        (e[(e.Medium = re.medium.width)] = 'Medium'),
                        (e[(e.Large = re.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = re.extraLarge.width)] = 'ExtraLarge');
                })(xe || (xe = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = re.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = re.small.width)] = 'Small'),
                            (e[(e.Medium = re.medium.width)] = 'Medium'),
                            (e[(e.Large = re.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = re.extraLarge.width)] = 'ExtraLarge');
                    })(we || (we = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = re.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = re.small.height)] = 'Small'),
                            (e[(e.Medium = re.medium.height)] = 'Medium'),
                            (e[(e.Large = re.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = re.extraLarge.height)] = 'ExtraLarge');
                    })(Ee || (Ee = {}));
                const Se = () => {
                        const e = (0, o.useContext)(ue),
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
                                        return we.ExtraLarge;
                                    case e.largeWidth:
                                        return we.Large;
                                    case e.mediumWidth:
                                        return we.Medium;
                                    case e.smallWidth:
                                        return we.Small;
                                    case e.extraSmallWidth:
                                        return we.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), we.ExtraSmall;
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
                    Le = ['children', 'className'];
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
                const be = {
                        [we.ExtraSmall]: '',
                        [we.Small]: fe().SMALL_WIDTH,
                        [we.Medium]: `${fe().SMALL_WIDTH} ${fe().MEDIUM_WIDTH}`,
                        [we.Large]: `${fe().SMALL_WIDTH} ${fe().MEDIUM_WIDTH} ${fe().LARGE_WIDTH}`,
                        [we.ExtraLarge]: `${fe().SMALL_WIDTH} ${fe().MEDIUM_WIDTH} ${fe().LARGE_WIDTH} ${fe().EXTRA_LARGE_WIDTH}`,
                    },
                    ye = {
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
                    Me = (e) => {
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
                            })(e, Le);
                        const n = Se(),
                            i = n.mediaWidth,
                            l = n.mediaHeight,
                            o = n.mediaSize;
                        return s().createElement('div', pe({ className: he()(r, be[i], ye[l], He[o]) }, a), t);
                    },
                    _e = ['children'],
                    Te = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    a,
                                    n = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                                return n;
                            })(e, _e);
                        return s().createElement(ge, null, s().createElement(Me, r, t));
                    };
                var Re = r(493),
                    Ae = r.n(Re),
                    We = r(3403);
                function Oe(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, r, a) => t(null == e ? void 0 : e.value, r, a));
                }
                function Ie() {
                    return !1;
                }
                console.log;
                var Pe = r(9174);
                function Ge(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a;
                }
                const $e = (e) => (0 === e ? window : window.subViews.get(e)),
                    ke = ((e, t) => {
                        const r = (0, o.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: a, children: n, mocks: i }) {
                                const l = (0, o.useRef)([]),
                                    u = (e, r, a) => {
                                        var n;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = $e,
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
                                                            s = te.view.addModelObserver(o, t, !0);
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
                                                                                    return Ge(e, t);
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
                                                                                          ? Ge(e, t)
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
                                                                })(n.keys());
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
                                                              null != (n = null == a ? void 0 : a.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            s = (t) =>
                                                'mocks' === e ? (null == a ? void 0 : a.getter(t)) : o.readByPath(t),
                                            u = (e) => l.current.push(e),
                                            d = (({ observableModel: e }) => {
                                                const t = {
                                                    root: e.object(),
                                                    strengths: e.array('parameters.strengths', []),
                                                    weaknesses: e.array('parameters.weaknesses', []),
                                                };
                                                return Object.assign({}, t, { computes: {} });
                                            })({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (t, r) => {
                                                        const a = null != r ? r : s(t),
                                                            n = Pe.LO.box(a, { equals: Ie });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, Pe.aD)((e) => n.set(e)),
                                                                    t,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (t, r) => {
                                                        const a = null != r ? r : s(t),
                                                            n = Pe.LO.box(a, { equals: Ie });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, Pe.aD)((e) => n.set(e)),
                                                                    t,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (t, r) => {
                                                        const a = s(r);
                                                        if (Array.isArray(t)) {
                                                            const n = t.reduce(
                                                                (e, t) => ((e[t] = Pe.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, Pe.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                n[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        r,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = t,
                                                                i = Object.entries(n),
                                                                l = i.reduce(
                                                                    (e, [t, r]) => ((e[r] = Pe.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, Pe.aD)((e) => {
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
                                            m = { mode: e, model: d, externalModel: o, cleanup: u };
                                        return {
                                            model: d,
                                            controls: 'mocks' === e && a ? a.controls(m) : t(m),
                                            externalModel: o,
                                            mode: e,
                                        };
                                    },
                                    d = (0, o.useRef)(!1),
                                    m = (0, o.useState)(e),
                                    g = m[0],
                                    c = m[1],
                                    h = (0, o.useState)(() => u(e, a, i)),
                                    v = h[0],
                                    f = h[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        d.current ? f(u(g, a, i)) : (d.current = !0);
                                    }, [i, g, a]),
                                    (0, o.useEffect)(() => {
                                        c(e);
                                    }, [e]),
                                    (0, o.useEffect)(
                                        () => () => {
                                            v.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [v],
                                    ),
                                    s().createElement(r.Provider, { value: v }, n)
                                );
                            },
                            () => (0, o.useContext)(r),
                        ];
                    })(0, function () {}),
                    De = ke[0],
                    je = ke[1],
                    ze = 'App_title_5f',
                    Ce = 'App_itemList_8c',
                    Ue =
                        R.images.fun_random.gui.maps.icons.feature.asset_packs.sub_modes.auto_shoot_guns
                            .strengths_weakness,
                    Ne = R.strings.fun_random.strengths_weaknesses,
                    Be = ({ parameterName: e, icon: t, kind: r, className: a, classNames: n }) =>
                        e && t && r
                            ? s().createElement(
                                  'div',
                                  { className: he()('Advantage_base_66', a) },
                                  s().createElement('span', {
                                      className: he()('Advantage_icon_0f', null == n ? void 0 : n.icon),
                                      style: { backgroundImage: `url('${Ue.$dyn(r).$dyn(t)}')` },
                                  }),
                                  s().createElement(
                                      'span',
                                      { className: he()('Advantage_text_c2', null == n ? void 0 : n.text) },
                                      Ne.$dyn(r).$dyn(e),
                                  ),
                              )
                            : null;
                function Ve() {
                    return (
                        (Ve =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                                }
                                return e;
                            }),
                        Ve.apply(this, arguments)
                    );
                }
                const Fe = R.strings.fun_random.strengths_weaknesses,
                    qe = (0, We.Pi)(() => {
                        const e = je().model,
                            t = e.strengths.get(),
                            r = e.weaknesses.get();
                        if (!t.length || !r.length) return null;
                        const a = (0, o.useRef)(null),
                            n = Se().mediaSize;
                        return (
                            (0, o.useEffect)(() => {
                                ((e) => {
                                    let t,
                                        r = null;
                                    r = requestAnimationFrame(() => {
                                        r = requestAnimationFrame(() => {
                                            (r = null),
                                                (t = (() => {
                                                    const e = a.current.getBoundingClientRect(),
                                                        t = te.view.getSize('rem'),
                                                        r = t.width,
                                                        n = t.height,
                                                        i = viewEnv.pxToRem(e.width),
                                                        l = viewEnv.pxToRem(e.height);
                                                    te.view.setSidePaddingsRem({
                                                        left: r - i,
                                                        right: 0,
                                                        top: 0,
                                                        bottom: n - l,
                                                    });
                                                })());
                                        });
                                    });
                                })();
                            }, [n]),
                            s().createElement(
                                'div',
                                { ref: a, className: 'App_base_8a' },
                                s().createElement(
                                    'div',
                                    { className: 'App_panel_34' },
                                    s().createElement('span', { className: ze }, Fe.strengths()),
                                    s().createElement(
                                        'div',
                                        { className: Ce },
                                        Oe(t, (e) =>
                                            s().createElement(
                                                Be,
                                                Ve({ key: e.parameterName }, e, { kind: 'strength' }),
                                            ),
                                        ),
                                    ),
                                    s().createElement('div', { className: 'App_separator_2e' }),
                                    s().createElement('span', { className: ze }, Fe.weaknesses()),
                                    s().createElement(
                                        'div',
                                        { className: Ce },
                                        Oe(r, (e) =>
                                            s().createElement(
                                                Be,
                                                Ve({ key: e.parameterName }, e, { kind: 'weakness' }),
                                            ),
                                        ),
                                    ),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    Ae().render(
                        s().createElement(De, null, s().createElement(Te, null, s().createElement(qe, null))),
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
        (a.j = 127),
        (() => {
            var e = { 127: 0 };
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
    var n = a.O(void 0, [503], () => a(9803));
    n = a.O(n);
})();
