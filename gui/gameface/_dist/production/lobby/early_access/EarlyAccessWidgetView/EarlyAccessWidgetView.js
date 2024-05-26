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
            559: (e, t, r) => {
                'use strict';
                var a = {};
                r.r(a), r.d(a, { mouse: () => h, onResize: () => g });
                var n = {};
                r.r(n),
                    r.d(n, {
                        events: () => a,
                        getMouseGlobalPosition: () => f,
                        getSize: () => v,
                        graphicsQuality: () => x,
                    });
                var i = {};
                r.r(i), r.d(i, { getBgUrl: () => E, getTextureUrl: () => w });
                var l = {};
                r.r(l),
                    r.d(l, {
                        addModelObserver: () => I,
                        addPreloadTexture: () => A,
                        children: () => i,
                        displayStatus: () => L,
                        displayStatusIs: () => X,
                        events: () => S,
                        extraSize: () => q,
                        forceTriggerMouseMove: () => F,
                        freezeTextureBeforeResize: () => $,
                        getBrowserTexturePath: () => _,
                        getDisplayStatus: () => N,
                        getScale: () => j,
                        getSize: () => D,
                        getViewGlobalPosition: () => P,
                        isEventHandled: () => V,
                        isFocused: () => U,
                        pxToRem: () => z,
                        remToPx: () => C,
                        resize: () => G,
                        sendEvent: () => W,
                        setAnimateWindow: () => k,
                        setEventHandled: () => B,
                        setInputPaddingsRem: () => R,
                        setSidePaddingsRem: () => O,
                        whenTutorialReady: () => Q,
                    });
                var o = r(6179),
                    u = r.n(o);
                const s = (e, t, r) =>
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
                    c = { down: d('mousedown'), up: d('mouseup'), move: d('mousemove') };
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
                                        l = c[t]((e) => r([e, 'outside']));
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
                function w(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function E(e, t, r) {
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
                    b = ['args'];
                const H = 2,
                    p = 16,
                    y = 32,
                    M = 64,
                    T = (e, t) => {
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
                                })(t, b);
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
                            T('popover' === e ? H : y);
                        },
                        minimize() {
                            T(M);
                        },
                        move(e) {
                            T(p, { isMouseEvent: !0, on: e });
                        },
                    };
                function A(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function R(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function _(e, t, r, a = 1) {
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
                    return 'rem' === e ? t : { x: C(t.x), y: C(t.y) };
                }
                function $() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function j() {
                    return viewEnv.getScale();
                }
                function z(e) {
                    return viewEnv.pxToRem(e);
                }
                function C(e) {
                    return viewEnv.remToPx(e);
                }
                function k(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function U() {
                    return viewEnv.isFocused();
                }
                function B() {
                    return viewEnv.setEventHandled();
                }
                function V() {
                    return viewEnv.isEventHandled();
                }
                function F() {
                    viewEnv.forceTriggerMouseMove();
                }
                function N() {
                    return viewEnv.getShowingStatus();
                }
                const X = Object.keys(L).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === L[t]), e), {}),
                    q = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    Q = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : S.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    J = { view: l, client: n };
                const K = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var Y;
                function Z(e, t, r) {
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
                })(Y || (Y = {}));
                const ee = J.client.getSize('rem'),
                    te = ee.width,
                    re = ee.height,
                    ae = Object.assign({ width: te, height: re }, Z(te, re, K)),
                    ne = (0, o.createContext)(ae),
                    ie = ['children'];
                const le = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                a,
                                n = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                            return n;
                        })(e, ie);
                    const a = (0, o.useContext)(ne),
                        n = a.extraLarge,
                        i = a.large,
                        l = a.medium,
                        u = a.small,
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
                        L = a.extraSmallHeight,
                        S = { extraLarge: f, large: x, medium: w, small: E, extraSmall: L };
                    if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                        if (r.extraLarge && n) return t;
                        if (r.large && i) return t;
                        if (r.medium && l) return t;
                        if (r.small && u) return t;
                        if (r.extraSmall && d) return t;
                    } else {
                        if (r.extraLargeWidth && m) return s(t, r, S);
                        if (r.largeWidth && g) return s(t, r, S);
                        if (r.mediumWidth && c) return s(t, r, S);
                        if (r.smallWidth && h) return s(t, r, S);
                        if (r.extraSmallWidth && v) return s(t, r, S);
                        if (
                            !(r.extraLargeWidth || r.largeWidth || r.mediumWidth || r.smallWidth || r.extraSmallWidth)
                        ) {
                            if (r.extraLargeHeight && f) return t;
                            if (r.largeHeight && x) return t;
                            if (r.mediumHeight && w) return t;
                            if (r.smallHeight && E) return t;
                            if (r.extraSmallHeight && L) return t;
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
                (0, o.memo)(le);
                const oe = (e) => {
                        const t = (0, o.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    ue = (0, o.memo)(({ children: e }) => {
                        const t = (0, o.useContext)(ne),
                            r = (0, o.useState)(t),
                            a = r[0],
                            n = r[1],
                            i = (0, o.useCallback)((e, t) => {
                                const r = J.view.pxToRem(e),
                                    a = J.view.pxToRem(t);
                                n(Object.assign({ width: r, height: a }, Z(r, a, K)));
                            }, []);
                        oe(() => {
                            engine.on('clientResized', i);
                        }),
                            (0, o.useEffect)(() => () => engine.off('clientResized', i), [i]);
                        const l = (0, o.useMemo)(() => Object.assign({}, a), [a]);
                        return u().createElement(ne.Provider, { value: l }, e);
                    });
                var se = r(6483),
                    de = r.n(se),
                    me = r(926),
                    ge = r.n(me);
                let ce, he, ve;
                !(function (e) {
                    (e[(e.ExtraSmall = K.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = K.small.width)] = 'Small'),
                        (e[(e.Medium = K.medium.width)] = 'Medium'),
                        (e[(e.Large = K.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = K.extraLarge.width)] = 'ExtraLarge');
                })(ce || (ce = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = K.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = K.small.width)] = 'Small'),
                            (e[(e.Medium = K.medium.width)] = 'Medium'),
                            (e[(e.Large = K.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = K.extraLarge.width)] = 'ExtraLarge');
                    })(he || (he = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = K.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = K.small.height)] = 'Small'),
                            (e[(e.Medium = K.medium.height)] = 'Medium'),
                            (e[(e.Large = K.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = K.extraLarge.height)] = 'ExtraLarge');
                    })(ve || (ve = {}));
                const fe = () => {
                        const e = (0, o.useContext)(ne),
                            t = e.width,
                            r = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return ce.ExtraLarge;
                                    case e.large:
                                        return ce.Large;
                                    case e.medium:
                                        return ce.Medium;
                                    case e.small:
                                        return ce.Small;
                                    case e.extraSmall:
                                        return ce.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), ce.ExtraSmall;
                                }
                            })(e),
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return he.ExtraLarge;
                                    case e.largeWidth:
                                        return he.Large;
                                    case e.mediumWidth:
                                        return he.Medium;
                                    case e.smallWidth:
                                        return he.Small;
                                    case e.extraSmallWidth:
                                        return he.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), he.ExtraSmall;
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
                        return { mediaSize: a, mediaWidth: n, mediaHeight: i, remScreenWidth: t, remScreenHeight: r };
                    },
                    xe = ['children', 'className'];
                function we() {
                    return (
                        (we =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                                }
                                return e;
                            }),
                        we.apply(this, arguments)
                    );
                }
                const Ee = {
                        [he.ExtraSmall]: '',
                        [he.Small]: ge().SMALL_WIDTH,
                        [he.Medium]: `${ge().SMALL_WIDTH} ${ge().MEDIUM_WIDTH}`,
                        [he.Large]: `${ge().SMALL_WIDTH} ${ge().MEDIUM_WIDTH} ${ge().LARGE_WIDTH}`,
                        [he.ExtraLarge]: `${ge().SMALL_WIDTH} ${ge().MEDIUM_WIDTH} ${ge().LARGE_WIDTH} ${ge().EXTRA_LARGE_WIDTH}`,
                    },
                    Le = {
                        [ve.ExtraSmall]: '',
                        [ve.Small]: ge().SMALL_HEIGHT,
                        [ve.Medium]: `${ge().SMALL_HEIGHT} ${ge().MEDIUM_HEIGHT}`,
                        [ve.Large]: `${ge().SMALL_HEIGHT} ${ge().MEDIUM_HEIGHT} ${ge().LARGE_HEIGHT}`,
                        [ve.ExtraLarge]: `${ge().SMALL_HEIGHT} ${ge().MEDIUM_HEIGHT} ${ge().LARGE_HEIGHT} ${ge().EXTRA_LARGE_HEIGHT}`,
                    },
                    Se = {
                        [ce.ExtraSmall]: '',
                        [ce.Small]: ge().SMALL,
                        [ce.Medium]: `${ge().SMALL} ${ge().MEDIUM}`,
                        [ce.Large]: `${ge().SMALL} ${ge().MEDIUM} ${ge().LARGE}`,
                        [ce.ExtraLarge]: `${ge().SMALL} ${ge().MEDIUM} ${ge().LARGE} ${ge().EXTRA_LARGE}`,
                    },
                    be = (e) => {
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
                            })(e, xe);
                        const n = fe(),
                            i = n.mediaWidth,
                            l = n.mediaHeight,
                            o = n.mediaSize;
                        return u().createElement('div', we({ className: de()(r, Ee[i], Le[l], Se[o]) }, a), t);
                    },
                    He = ['children'];
                const pe = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                a,
                                n = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                            return n;
                        })(e, He);
                    return u().createElement(ue, null, u().createElement(be, r, t));
                };
                var ye = r(493),
                    Me = r.n(ye),
                    Te = r(3403);
                function We() {
                    return !1;
                }
                console.log;
                var Ae = r(9174);
                function Re(e, t) {
                    var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (r) return (r = r.call(e)).next.bind(r);
                    if (
                        Array.isArray(e) ||
                        (r = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return _e(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === r && e.constructor && (r = e.constructor.name);
                            if ('Map' === r || 'Set' === r) return Array.from(e);
                            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                                return _e(e, t);
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
                function _e(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a;
                }
                const Ie = (e) => (0 === e ? window : window.subViews.get(e));
                const Oe = ((e, t) => {
                        const r = (0, o.createContext)({});
                        return [
                            function ({ mode: a = 'real', options: n, children: i, mocks: l }) {
                                const s = (0, o.useRef)([]),
                                    d = (r, a, n) => {
                                        var i;
                                        const l = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = Ie,
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
                                                            u = J.view.addModelObserver(o, t, !0);
                                                        return n.set(u, r), e && r(l(i)), u;
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
                                                        for (var e, r = Re(n.keys()); !(e = r()).done; ) i(e.value, t);
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
                                            u = (e) =>
                                                'mocks' === r ? (null == n ? void 0 : n.getter(e)) : o.readByPath(e),
                                            d = (e) => s.current.push(e),
                                            m = e({
                                                mode: r,
                                                readByPath: u,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const a = null != t ? t : u(e),
                                                            n = Ae.LO.box(a, { equals: We });
                                                        return (
                                                            'real' === r &&
                                                                o.subscribe(
                                                                    (0, Ae.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const a = null != t ? t : u(e),
                                                            n = Ae.LO.box(a, { equals: We });
                                                        return (
                                                            'real' === r &&
                                                                o.subscribe(
                                                                    (0, Ae.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const a = u(t);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, t) => ((e[t] = Ae.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === r &&
                                                                    o.subscribe(
                                                                        (0, Ae.aD)((t) => {
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
                                                                    (e, [t, r]) => ((e[r] = Ae.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === r &&
                                                                    o.subscribe(
                                                                        (0, Ae.aD)((e) => {
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
                                            g = { mode: r, model: m, externalModel: o, cleanup: d };
                                        return {
                                            model: m,
                                            controls: 'mocks' === r && n ? n.controls(g) : t(g),
                                            externalModel: o,
                                            mode: r,
                                        };
                                    },
                                    m = (0, o.useRef)(!1),
                                    g = (0, o.useState)(a),
                                    c = g[0],
                                    h = g[1],
                                    v = (0, o.useState)(() => d(a, n, l)),
                                    f = v[0],
                                    x = v[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        m.current ? x(d(c, n, l)) : (m.current = !0);
                                    }, [l, c, n]),
                                    (0, o.useEffect)(() => {
                                        h(a);
                                    }, [a]),
                                    (0, o.useEffect)(
                                        () => () => {
                                            f.externalModel.dispose(), s.current.forEach((e) => e());
                                        },
                                        [f],
                                    ),
                                    u().createElement(r.Provider, { value: f }, i)
                                );
                            },
                            () => (0, o.useContext)(r),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = { root: e.object() };
                            return Object.assign({}, t);
                        },
                        ({ externalModel: e }) => ({ action: e.createCallbackNoArgs('onAction') }),
                    ),
                    De = Oe[0],
                    Ge = Oe[1],
                    Pe = 'App_base_ae',
                    $e = (0, Te.Pi)(() => {
                        const e = Ge().controls,
                            t = (0, o.useCallback)(() => {
                                e.action();
                            }, [e]);
                        return u().createElement('div', { className: Pe, onClick: t }, 'Привет Early Access!');
                    });
                engine.whenReady.then(() => {
                    Me().render(
                        u().createElement(De, null, u().createElement(pe, null, u().createElement($e, null))),
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
                    for (var [r, n, i] = e[d], o = !0, u = 0; u < r.length; u++)
                        (!1 & i || l >= i) && Object.keys(a.O).every((e) => a.O[e](r[u]))
                            ? r.splice(u--, 1)
                            : ((o = !1), i < l && (l = i));
                    if (o) {
                        e.splice(d--, 1);
                        var s = n();
                        void 0 !== s && (t = s);
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
        (a.j = 859),
        (() => {
            var e = { 859: 0 };
            a.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var n,
                        i,
                        [l, o, u] = r,
                        s = 0;
                    if (l.some((t) => 0 !== e[t])) {
                        for (n in o) a.o(o, n) && (a.m[n] = o[n]);
                        if (u) var d = u(a);
                    }
                    for (t && t(r); s < l.length; s++) (i = l[s]), a.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return a.O(d);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
        })();
    var n = a.O(void 0, [617], () => a(559));
    n = a.O(n);
})();
