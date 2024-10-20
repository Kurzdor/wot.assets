(() => {
    var u,
        e = {
            926: (u) => {
                u.exports = {
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
            5591: (u, e, A) => {
                'use strict';
                var t = {};
                A.r(t),
                    A.d(t, { mouse: () => d, off: () => s, on: () => o, onResize: () => C, onScaleUpdated: () => l });
                var F = {};
                A.r(F),
                    A.d(F, {
                        events: () => t,
                        getMouseGlobalPosition: () => f,
                        getSize: () => h,
                        graphicsQuality: () => x,
                        playSound: () => m,
                        setRTPC: () => g,
                    });
                var E = {};
                A.r(E), A.d(E, { getBgUrl: () => b, getTextureUrl: () => S });
                var D = {};
                A.r(D),
                    A.d(D, {
                        addModelObserver: () => z,
                        addPreloadTexture: () => $,
                        children: () => E,
                        displayStatus: () => L,
                        displayStatusIs: () => tu,
                        events: () => y,
                        extraSize: () => Fu,
                        forceTriggerMouseMove: () => eu,
                        freezeTextureBeforeResize: () => q,
                        getBrowserTexturePath: () => k,
                        getDisplayStatus: () => Au,
                        getScale: () => X,
                        getSize: () => U,
                        getViewGlobalPosition: () => V,
                        isEventHandled: () => uu,
                        isFocused: () => J,
                        pxToRem: () => Q,
                        remToPx: () => Z,
                        resize: () => N,
                        sendEvent: () => O,
                        setAnimateWindow: () => Y,
                        setEventHandled: () => K,
                        setInputPaddingsRem: () => G,
                        setSidePaddingsRem: () => j,
                        whenTutorialReady: () => Eu,
                    });
                var r = A(6179),
                    n = A.n(r);
                const a = (u, e, A) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && A.extraLarge) ||
                          (e.largeHeight && A.large) ||
                          (e.mediumHeight && A.medium) ||
                          (e.smallHeight && A.small) ||
                          (e.extraSmallHeight && A.extraSmall)
                            ? u
                            : null
                        : u;
                function i(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                function B(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                const C = i('clientResized'),
                    l = i('self.onScaleUpdated'),
                    o = (u, e) => engine.on(u, e),
                    s = (u, e) => engine.off(u, e),
                    c = { down: i('mousedown'), up: i('mouseup'), move: i('mousemove') };
                const d = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && B(!1);
                    }
                    function A() {
                        u.enabled && B(!0);
                    }
                    function t() {
                        u.enabled
                            ? u.listeners < 1
                                ? ((u.initialized = !1),
                                  document.body.removeEventListener('mouseenter', e),
                                  document.body.removeEventListener('mouseleave', A))
                                : u.initialized ||
                                  ((u.initialized = !0),
                                  document.body.addEventListener('mouseenter', e),
                                  document.body.addEventListener('mouseleave', A))
                            : B(!1);
                    }
                    const F = ['down', 'up', 'move'].reduce(
                        (e, A) => (
                            (e[A] = (function (e) {
                                return (A) => {
                                    u.listeners += 1;
                                    let F = !0;
                                    const E = `mouse${e}`,
                                        D = c[e]((u) => A([u, 'outside']));
                                    function r(u) {
                                        A([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(E, r),
                                        t(),
                                        () => {
                                            F &&
                                                (D(),
                                                window.removeEventListener(E, r),
                                                (u.listeners -= 1),
                                                t(),
                                                (F = !1));
                                        }
                                    );
                                };
                            })(A)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, F, {
                        disable() {
                            (u.enabled = !1), t();
                        },
                        enable() {
                            (u.enabled = !0), t();
                        },
                        enableOutside() {
                            u.enabled && B(!0);
                        },
                        disableOutside() {
                            u.enabled && B(!1);
                        },
                    });
                })();
                function m(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function g(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((A) => {
                        console.error(`setRTPC('${u}', '${e}'): `, A);
                    });
                }
                function h(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function f(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const x = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    v = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    p = Object.keys(v).reduce((u, e) => ((u[e] = () => m(v[e])), u), {}),
                    w = { play: Object.assign({}, p, { sound: m }), setRTPC: g };
                function S(u, e, A = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, A);
                }
                function b(u, e, A) {
                    return `url(${S(u, e, A)})`;
                }
                const L = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    y = {
                        onTextureFrozen: i('self.onTextureFrozen'),
                        onTextureReady: i('self.onTextureReady'),
                        onDomBuilt: i('self.onDomBuilt'),
                        onLoaded: i('self.onLoaded'),
                        onDisplayChanged: i('self.onShowingStatusChanged'),
                        onFocusUpdated: i('self.onFocusChanged'),
                        children: {
                            onAdded: i('children.onAdded'),
                            onLoaded: i('children.onLoaded'),
                            onRemoved: i('children.onRemoved'),
                            onAttached: i('children.onAttached'),
                            onTextureReady: i('children.onTextureReady'),
                            onRequestPosition: i('children.requestPosition'),
                        },
                    },
                    H = ['args'];
                const M = 2,
                    _ = 16,
                    T = 32,
                    I = 64,
                    W = (u, e) => {
                        const A = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const F = e.args,
                                E = (function (u, e) {
                                    if (null == u) return {};
                                    var A = {};
                                    for (var t in u)
                                        if ({}.hasOwnProperty.call(u, t)) {
                                            if (e.indexOf(t) >= 0) continue;
                                            A[t] = u[t];
                                        }
                                    return A;
                                })(e, H);
                            return void 0 !== F
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: A, type: u }, E, {
                                          arguments:
                                              ((t = F),
                                              Object.entries(t).map(([u, e]) => {
                                                  const A = 'GFValueProxy';
                                                  switch (typeof e) {
                                                      case 'number':
                                                          return { __Type: A, name: u, number: e };
                                                      case 'boolean':
                                                          return { __Type: A, name: u, bool: e };
                                                      default:
                                                          return { __Type: A, name: u, string: e.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: A, type: u }, E));
                        }
                        return viewEnv.handleViewEvent({ __Type: A, type: u });
                        var t;
                    },
                    O = {
                        close(u) {
                            W('popover' === u ? M : T);
                        },
                        minimize() {
                            W(I);
                        },
                        move(u) {
                            W(_, { isMouseEvent: !0, on: u });
                        },
                    },
                    P = 15;
                function $(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function G(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, P);
                }
                function k(u, e, A, t = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, A, t);
                }
                function z(u, e, A) {
                    return viewEnv.addDataChangedCallback(u, e, A);
                }
                function j(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, P);
                }
                function U(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function N(u, e, A = 'px') {
                    return 'rem' === A ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function V(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: Z(e.x), y: Z(e.y) };
                }
                function q() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function X() {
                    return viewEnv.getScale();
                }
                function Q(u) {
                    return viewEnv.pxToRem(u);
                }
                function Z(u) {
                    return viewEnv.remToPx(u);
                }
                function Y(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function J() {
                    return viewEnv.isFocused();
                }
                function K() {
                    return viewEnv.setEventHandled();
                }
                function uu() {
                    return viewEnv.isEventHandled();
                }
                function eu() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Au() {
                    return viewEnv.getShowingStatus();
                }
                const tu = Object.keys(L).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === L[e]), u), {}),
                    Fu = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    Eu = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : y.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    Du = { view: D, client: F, sound: w };
                const ru = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var nu;
                function au(u, e, A) {
                    const t = (function (u, e) {
                            switch (!0) {
                                case u >= e.extraLarge.width:
                                    return e.extraLarge.weight;
                                case u >= e.large.width && u < e.extraLarge.width:
                                    return e.large.weight;
                                case u >= e.medium.width && u < e.large.width:
                                    return e.medium.weight;
                                case u >= e.small.width && u < e.medium.width:
                                    return e.small.weight;
                                default:
                                    return e.extraSmall.weight;
                            }
                        })(u, A),
                        F = (function (u, e) {
                            switch (!0) {
                                case u >= e.extraLarge.height:
                                    return e.extraLarge.weight;
                                case u >= e.large.height && u < e.extraLarge.height:
                                    return e.large.weight;
                                case u >= e.medium.height && u < e.large.height:
                                    return e.medium.weight;
                                case u >= e.small.height && u < e.medium.height:
                                    return e.small.weight;
                                default:
                                    return e.extraSmall.weight;
                            }
                        })(e, A),
                        E = Math.min(t, F);
                    return {
                        extraLarge: E === A.extraLarge.weight,
                        large: E === A.large.weight,
                        medium: E === A.medium.weight,
                        small: E === A.small.weight,
                        extraSmall: E === A.extraSmall.weight,
                        extraLargeWidth: t === A.extraLarge.weight,
                        largeWidth: t === A.large.weight,
                        mediumWidth: t === A.medium.weight,
                        smallWidth: t === A.small.weight,
                        extraSmallWidth: t === A.extraSmall.weight,
                        extraLargeHeight: F === A.extraLarge.weight,
                        largeHeight: F === A.large.weight,
                        mediumHeight: F === A.medium.weight,
                        smallHeight: F === A.small.weight,
                        extraSmallHeight: F === A.extraSmall.weight,
                    };
                }
                !(function (u) {
                    (u.extraLarge = 'extraLarge'),
                        (u.large = 'large'),
                        (u.medium = 'medium'),
                        (u.small = 'small'),
                        (u.extraSmall = 'extraSmall'),
                        (u.extraLargeWidth = 'extraLargeWidth'),
                        (u.largeWidth = 'largeWidth'),
                        (u.mediumWidth = 'mediumWidth'),
                        (u.smallWidth = 'smallWidth'),
                        (u.extraSmallWidth = 'extraSmallWidth'),
                        (u.extraLargeHeight = 'extraLargeHeight'),
                        (u.largeHeight = 'largeHeight'),
                        (u.mediumHeight = 'mediumHeight'),
                        (u.smallHeight = 'smallHeight'),
                        (u.extraSmallHeight = 'extraSmallHeight');
                })(nu || (nu = {}));
                const iu = Du.client.getSize('rem'),
                    Bu = iu.width,
                    Cu = iu.height,
                    lu = Object.assign({ width: Bu, height: Cu }, au(Bu, Cu, ru)),
                    ou = (0, r.createContext)(lu),
                    su = ['children'];
                const cu = (u) => {
                    let e = u.children,
                        A = (function (u, e) {
                            if (null == u) return {};
                            var A = {};
                            for (var t in u)
                                if ({}.hasOwnProperty.call(u, t)) {
                                    if (e.indexOf(t) >= 0) continue;
                                    A[t] = u[t];
                                }
                            return A;
                        })(u, su);
                    const t = (0, r.useContext)(ou),
                        F = t.extraLarge,
                        E = t.large,
                        D = t.medium,
                        n = t.small,
                        i = t.extraSmall,
                        B = t.extraLargeWidth,
                        C = t.largeWidth,
                        l = t.mediumWidth,
                        o = t.smallWidth,
                        s = t.extraSmallWidth,
                        c = t.extraLargeHeight,
                        d = t.largeHeight,
                        m = t.mediumHeight,
                        g = t.smallHeight,
                        h = t.extraSmallHeight,
                        f = { extraLarge: c, large: d, medium: m, small: g, extraSmall: h };
                    if (A.extraLarge || A.large || A.medium || A.small || A.extraSmall) {
                        if (A.extraLarge && F) return e;
                        if (A.large && E) return e;
                        if (A.medium && D) return e;
                        if (A.small && n) return e;
                        if (A.extraSmall && i) return e;
                    } else {
                        if (A.extraLargeWidth && B) return a(e, A, f);
                        if (A.largeWidth && C) return a(e, A, f);
                        if (A.mediumWidth && l) return a(e, A, f);
                        if (A.smallWidth && o) return a(e, A, f);
                        if (A.extraSmallWidth && s) return a(e, A, f);
                        if (
                            !(A.extraLargeWidth || A.largeWidth || A.mediumWidth || A.smallWidth || A.extraSmallWidth)
                        ) {
                            if (A.extraLargeHeight && c) return e;
                            if (A.largeHeight && d) return e;
                            if (A.mediumHeight && m) return e;
                            if (A.smallHeight && g) return e;
                            if (A.extraSmallHeight && h) return e;
                        }
                    }
                    return null;
                };
                cu.defaultProps = {
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
                (0, r.memo)(cu);
                const du = (u) => {
                        const e = (0, r.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    mu = ({ children: u }) => {
                        const e = (0, r.useContext)(ou),
                            A = (0, r.useState)(e),
                            t = A[0],
                            F = A[1],
                            E = (0, r.useCallback)((u, e) => {
                                const A = Du.view.pxToRem(u),
                                    t = Du.view.pxToRem(e);
                                F(Object.assign({ width: A, height: t }, au(A, t, ru)));
                            }, []),
                            D = (0, r.useCallback)(() => {
                                const u = Du.client.getSize('px');
                                E(u.width, u.height);
                            }, [E]);
                        du(() => {
                            Du.client.events.on('clientResized', E), Du.client.events.on('self.onScaleUpdated', D);
                        }),
                            (0, r.useEffect)(
                                () => () => {
                                    Du.client.events.off('clientResized', E),
                                        Du.client.events.off('self.onScaleUpdated', D);
                                },
                                [E, D],
                            );
                        const a = (0, r.useMemo)(() => Object.assign({}, t), [t]);
                        return n().createElement(ou.Provider, { value: a }, u);
                    };
                var gu = A(6483),
                    hu = A.n(gu),
                    fu = A(926),
                    xu = A.n(fu);
                let vu, pu, wu;
                !(function (u) {
                    (u[(u.ExtraSmall = ru.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = ru.small.width)] = 'Small'),
                        (u[(u.Medium = ru.medium.width)] = 'Medium'),
                        (u[(u.Large = ru.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = ru.extraLarge.width)] = 'ExtraLarge');
                })(vu || (vu = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = ru.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = ru.small.width)] = 'Small'),
                            (u[(u.Medium = ru.medium.width)] = 'Medium'),
                            (u[(u.Large = ru.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = ru.extraLarge.width)] = 'ExtraLarge');
                    })(pu || (pu = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = ru.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = ru.small.height)] = 'Small'),
                            (u[(u.Medium = ru.medium.height)] = 'Medium'),
                            (u[(u.Large = ru.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = ru.extraLarge.height)] = 'ExtraLarge');
                    })(wu || (wu = {}));
                const Su = () => {
                        const u = (0, r.useContext)(ou),
                            e = u.width,
                            A = u.height,
                            t = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return vu.ExtraLarge;
                                    case u.large:
                                        return vu.Large;
                                    case u.medium:
                                        return vu.Medium;
                                    case u.small:
                                        return vu.Small;
                                    case u.extraSmall:
                                        return vu.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), vu.ExtraSmall;
                                }
                            })(u),
                            F = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return pu.ExtraLarge;
                                    case u.largeWidth:
                                        return pu.Large;
                                    case u.mediumWidth:
                                        return pu.Medium;
                                    case u.smallWidth:
                                        return pu.Small;
                                    case u.extraSmallWidth:
                                        return pu.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), pu.ExtraSmall;
                                }
                            })(u),
                            E = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return wu.ExtraLarge;
                                    case u.largeHeight:
                                        return wu.Large;
                                    case u.mediumHeight:
                                        return wu.Medium;
                                    case u.smallHeight:
                                        return wu.Small;
                                    case u.extraSmallHeight:
                                        return wu.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), wu.ExtraSmall;
                                }
                            })(u);
                        return { mediaSize: t, mediaWidth: F, mediaHeight: E, remScreenWidth: e, remScreenHeight: A };
                    },
                    bu = ['children', 'className'];
                function Lu() {
                    return (
                        (Lu = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var A = arguments[e];
                                      for (var t in A) ({}).hasOwnProperty.call(A, t) && (u[t] = A[t]);
                                  }
                                  return u;
                              }),
                        Lu.apply(null, arguments)
                    );
                }
                const yu = {
                        [pu.ExtraSmall]: '',
                        [pu.Small]: xu().SMALL_WIDTH,
                        [pu.Medium]: `${xu().SMALL_WIDTH} ${xu().MEDIUM_WIDTH}`,
                        [pu.Large]: `${xu().SMALL_WIDTH} ${xu().MEDIUM_WIDTH} ${xu().LARGE_WIDTH}`,
                        [pu.ExtraLarge]: `${xu().SMALL_WIDTH} ${xu().MEDIUM_WIDTH} ${xu().LARGE_WIDTH} ${xu().EXTRA_LARGE_WIDTH}`,
                    },
                    Hu = {
                        [wu.ExtraSmall]: '',
                        [wu.Small]: xu().SMALL_HEIGHT,
                        [wu.Medium]: `${xu().SMALL_HEIGHT} ${xu().MEDIUM_HEIGHT}`,
                        [wu.Large]: `${xu().SMALL_HEIGHT} ${xu().MEDIUM_HEIGHT} ${xu().LARGE_HEIGHT}`,
                        [wu.ExtraLarge]: `${xu().SMALL_HEIGHT} ${xu().MEDIUM_HEIGHT} ${xu().LARGE_HEIGHT} ${xu().EXTRA_LARGE_HEIGHT}`,
                    },
                    Mu = {
                        [vu.ExtraSmall]: '',
                        [vu.Small]: xu().SMALL,
                        [vu.Medium]: `${xu().SMALL} ${xu().MEDIUM}`,
                        [vu.Large]: `${xu().SMALL} ${xu().MEDIUM} ${xu().LARGE}`,
                        [vu.ExtraLarge]: `${xu().SMALL} ${xu().MEDIUM} ${xu().LARGE} ${xu().EXTRA_LARGE}`,
                    },
                    _u = (u) => {
                        let e = u.children,
                            A = u.className,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var A = {};
                                for (var t in u)
                                    if ({}.hasOwnProperty.call(u, t)) {
                                        if (e.indexOf(t) >= 0) continue;
                                        A[t] = u[t];
                                    }
                                return A;
                            })(u, bu);
                        const F = Su(),
                            E = F.mediaWidth,
                            D = F.mediaHeight,
                            r = F.mediaSize;
                        return n().createElement('div', Lu({ className: hu()(A, yu[E], Hu[D], Mu[r]) }, t), e);
                    },
                    Tu = ['children'];
                const Ru = (u) => {
                    let e = u.children,
                        A = (function (u, e) {
                            if (null == u) return {};
                            var A = {};
                            for (var t in u)
                                if ({}.hasOwnProperty.call(u, t)) {
                                    if (e.indexOf(t) >= 0) continue;
                                    A[t] = u[t];
                                }
                            return A;
                        })(u, Tu);
                    return n().createElement(mu, null, n().createElement(_u, A, e));
                };
                var Iu = A(493),
                    Wu = A.n(Iu),
                    Ou = A(6295),
                    Pu = A.n(Ou),
                    $u = A(1281);
                let Gu;
                function ku(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(Gu || (Gu = {}));
                const zu = (u) => u.replace(/&nbsp;/g, ' '),
                    ju = (u, e, A) => {
                        if (A % 2) {
                            const A = u.pop();
                            return [...u, A + e];
                        }
                        return [...u, e];
                    },
                    Uu = (u, e, A) => {
                        if (0 === A) return [e];
                        if (A % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const A = u.pop();
                            return [...u, A + e];
                        }
                    },
                    Nu = (u, e, A = Gu.left) => u.split(e).reduce(A === Gu.left ? ju : Uu, []),
                    Vu = (() => {
                        const u = new RegExp(
                            /[\(\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[ %\+\x2D-9A-Za-\{\}\xA0\xC0-\u0237\u2013\u2014\u2026]+[\)\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3002\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\uFF01\uFF0C\uFF1A\uFF1B\uFF1F\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu
                                .source +
                                '|' +
                                /[\(\xAB\u201C\u275D][\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?|[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[\)\xBB\u201D\u275E][\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu
                                    .source +
                                '|' +
                                /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[ \):;\u2022\u3001\u3002\u300A-\u300D\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]|[\(,1A-Za-\{\}\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu
                                    .source +
                                '|' +
                                /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu
                                    .source,
                            'gum',
                        );
                        return (e) =>
                            e
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(u);
                    })(),
                    qu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Xu = (u, e = Gu.left) => {
                        const A = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (qu.includes(A)) return Vu(u);
                        if ('ja' === A) {
                            return (0, $u.D4)()
                                .parse(u)
                                .map((u) => zu(u));
                        }
                        return ((u, e = Gu.left) => {
                            let A = [];
                            const t =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                F = zu(u);
                            return Nu(F, /( )/, e).forEach((u) => (A = A.concat(Nu(u, t, Gu.left)))), A;
                        })(u, e);
                    },
                    Qu = 'FormatText_base_d0',
                    Zu = ({ binding: u, text: e = '', classMix: A, alignment: t = Gu.left, formatWithBrackets: F }) => {
                        if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                        const E = F && u ? ku(e, u) : e;
                        return n().createElement(
                            r.Fragment,
                            null,
                            E.split('\n').map((e, F) =>
                                n().createElement(
                                    'div',
                                    { className: hu()(Qu, A), key: `${e}-${F}` },
                                    ((u, e, A) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (A && u in A ? A[u] : Xu(u, e))))(
                                        e,
                                        t,
                                        u,
                                    ).map((u, e) => n().createElement(r.Fragment, { key: `${e}-${u}` }, u)),
                                ),
                            ),
                        );
                    };
                function Yu(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                const Ju = {
                    playHighlight() {
                        Yu('highlight');
                    },
                    playClick() {
                        Yu('play');
                    },
                    playYes() {
                        Yu('yes1');
                    },
                };
                var Ku = A(3403),
                    ue = A(7030);
                const ee = { from: { opacity: 0 }, to: { opacity: 1 }, delay: 100, config: { duration: 300 } };
                function Ae() {
                    return !1;
                }
                console.log;
                var te = A(9174);
                function Fe(u, e) {
                    var A = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (A) return (A = A.call(u)).next.bind(A);
                    if (
                        Array.isArray(u) ||
                        (A = (function (u, e) {
                            if (u) {
                                if ('string' == typeof u) return Ee(u, e);
                                var A = {}.toString.call(u).slice(8, -1);
                                return (
                                    'Object' === A && u.constructor && (A = u.constructor.name),
                                    'Map' === A || 'Set' === A
                                        ? Array.from(u)
                                        : 'Arguments' === A || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A)
                                          ? Ee(u, e)
                                          : void 0
                                );
                            }
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        A && (u = A);
                        var t = 0;
                        return function () {
                            return t >= u.length ? { done: !0 } : { done: !1, value: u[t++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Ee(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var A = 0, t = Array(e); A < e; A++) t[A] = u[A];
                    return t;
                }
                const De = (u) => (0 === u ? window : window.subViews.get(u));
                const re = ((u, e) => {
                        const A = (0, r.createContext)({});
                        return [
                            function ({ mode: t = 'real', options: F, children: E, mocks: D }) {
                                const a = (0, r.useRef)([]),
                                    i = (A, t, F) => {
                                        var E;
                                        const D = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: A = De,
                                                context: t = 'model',
                                            } = {}) {
                                                const F = new Map();
                                                function E(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? F.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, A) => {
                                                        A.forEach((e) => {
                                                            const A = F.get(e);
                                                            void 0 !== A && A(u);
                                                        });
                                                    });
                                                });
                                                const D = (u) => {
                                                    const F = A(e),
                                                        E = t.split('.').reduce((u, e) => u[e], F);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? E
                                                        : u.split('.').reduce((u, e) => {
                                                              const A = u[e];
                                                              return 'function' == typeof A ? A.bind(u) : A;
                                                          }, E);
                                                };
                                                return {
                                                    subscribe: (A, E) => {
                                                        const r = 'string' == typeof E ? `${t}.${E}` : t,
                                                            n = Du.view.addModelObserver(r, e, !0);
                                                        return F.set(n, A), u && A(D(E)), n;
                                                    },
                                                    readByPath: D,
                                                    createCallback: (u, e) => {
                                                        const A = D(e);
                                                        return (...e) => {
                                                            A(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = D(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var u, A = Fe(F.keys()); !(u = A()).done; ) E(u.value, e);
                                                    },
                                                    unsubscribe: E,
                                                };
                                            })(t),
                                            r =
                                                'real' === A
                                                    ? D
                                                    : Object.assign({}, D, {
                                                          readByPath:
                                                              null != (E = null == F ? void 0 : F.getter)
                                                                  ? E
                                                                  : () => {},
                                                      }),
                                            n = (u) =>
                                                'mocks' === A ? (null == F ? void 0 : F.getter(u)) : r.readByPath(u),
                                            i = (u) => a.current.push(u),
                                            B = u({
                                                mode: A,
                                                readByPath: n,
                                                externalModel: r,
                                                observableModel: {
                                                    array: (u, e) => {
                                                        const t = null != e ? e : n(u),
                                                            F = te.LO.box(t, { equals: Ae });
                                                        return (
                                                            'real' === A &&
                                                                r.subscribe(
                                                                    (0, te.aD)((u) => F.set(u)),
                                                                    u,
                                                                ),
                                                            F
                                                        );
                                                    },
                                                    object: (u, e) => {
                                                        const t = null != e ? e : n(u),
                                                            F = te.LO.box(t, { equals: Ae });
                                                        return (
                                                            'real' === A &&
                                                                r.subscribe(
                                                                    (0, te.aD)((u) => F.set(u)),
                                                                    u,
                                                                ),
                                                            F
                                                        );
                                                    },
                                                    primitives: (u, e) => {
                                                        const t = n(e);
                                                        if (Array.isArray(u)) {
                                                            const F = u.reduce(
                                                                (u, e) => ((u[e] = te.LO.box(t[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === A &&
                                                                    r.subscribe(
                                                                        (0, te.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                F[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                F
                                                            );
                                                        }
                                                        {
                                                            const F = u,
                                                                E = Object.entries(F),
                                                                D = E.reduce(
                                                                    (u, [e, A]) => ((u[A] = te.LO.box(t[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === A &&
                                                                    r.subscribe(
                                                                        (0, te.aD)((u) => {
                                                                            E.forEach(([e, A]) => {
                                                                                D[A].set(u[e]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                D
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: i,
                                            }),
                                            C = { mode: A, model: B, externalModel: r, cleanup: i };
                                        return {
                                            model: B,
                                            controls: 'mocks' === A && F ? F.controls(C) : e(C),
                                            externalModel: r,
                                            mode: A,
                                        };
                                    },
                                    B = (0, r.useRef)(!1),
                                    C = (0, r.useState)(t),
                                    l = C[0],
                                    o = C[1],
                                    s = (0, r.useState)(() => i(t, F, D)),
                                    c = s[0],
                                    d = s[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        B.current ? d(i(l, F, D)) : (B.current = !0);
                                    }, [D, l, F]),
                                    (0, r.useEffect)(() => {
                                        o(t);
                                    }, [t]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            c.externalModel.dispose(), a.current.forEach((u) => u());
                                        },
                                        [c],
                                    ),
                                    n().createElement(A.Provider, { value: c }, E)
                                );
                            },
                            () => (0, r.useContext)(A),
                        ];
                    })(
                        ({ observableModel: u }) => ({ root: u.object() }),
                        ({ externalModel: u }) => ({ openTournaments: u.createCallbackNoArgs('onOpenTournaments') }),
                    ),
                    ne = re[0],
                    ae = re[1],
                    ie = 'App_base_79',
                    Be = 'App_layer_fb',
                    Ce = 'App_layer__logo_90',
                    le = 'App_base__extended_1f',
                    oe = 'App_layer__scene_6d',
                    se = 'App_layer__shadow_6c',
                    ce = 'App_particles_a8',
                    de = 'App_content_60',
                    me = 'App_heading_ae',
                    ge = 'App_text_a5',
                    he = 33,
                    fe = 0,
                    xe = !0,
                    ve = 'play';
                const pe = [
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
                function we() {
                    return (
                        (we = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var A = arguments[e];
                                      for (var t in A) ({}).hasOwnProperty.call(A, t) && (u[t] = A[t]);
                                  }
                                  return u;
                              }),
                        we.apply(null, arguments)
                    );
                }
                const Se = (0, r.memo)(function (u) {
                        let e = u.width,
                            A = u.height,
                            t = u.getImageSource,
                            F = u.frameCount,
                            E = u.onAnimate,
                            D = u.frameTime,
                            a = void 0 === D ? he : D,
                            i = u.initialFrameIndex,
                            B = void 0 === i ? fe : i,
                            C = u.lastFrameIndex,
                            l = void 0 === C ? F - 1 : C,
                            o = u.loop,
                            s = void 0 === o ? xe : o,
                            c = u.state,
                            d = void 0 === c ? ve : c,
                            m = u.onAnimationDone,
                            g = u.onAnimationComplete,
                            h = u.poster,
                            f = (function (u, e) {
                                if (null == u) return {};
                                var A = {};
                                for (var t in u)
                                    if ({}.hasOwnProperty.call(u, t)) {
                                        if (e.indexOf(t) >= 0) continue;
                                        A[t] = u[t];
                                    }
                                return A;
                            })(u, pe);
                        const x = (0, r.useRef)(null);
                        return (
                            (0, r.useEffect)(() => {
                                const u = x.current;
                                if (!u) return;
                                const e = u.getContext('2d'),
                                    A = (A) => {
                                        e.clearRect(0, 0, u.width, u.height), e.drawImage(A.img, -A.x, -A.y);
                                    };
                                switch (d) {
                                    case 'play':
                                        return (function () {
                                            const u = ye(B, l, t),
                                                e = be(B, l),
                                                F = window.setInterval(() => {
                                                    const t = e(),
                                                        D = u.get(t);
                                                    D
                                                        ? (null == E || E(t, D),
                                                          A(D),
                                                          t === l &&
                                                              (null == g || g(),
                                                              s || (null == m || m(), window.clearInterval(F))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, a);
                                            return () => window.clearInterval(F);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const u = 0 === B && h ? { path: h, x: 0, y: 0 } : t(B),
                                                e = new Image();
                                            e.src = u.path;
                                            const F = () => A(Le(u, e));
                                            return (
                                                e.addEventListener('load', F), () => e.removeEventListener('load', F)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [a, t, B, l, s, E, g, m, h, d]),
                            n().createElement('canvas', we({}, f, { width: e, height: A, ref: x }))
                        );
                    }),
                    be = (u, e) => {
                        let A = u;
                        return () => {
                            const t = A;
                            return (A += 1), A > e && (A = u), t;
                        };
                    },
                    Le = (u, e) => Object.assign({}, u, { img: e }),
                    ye = (u, e, A) => {
                        const t = new Map(),
                            F = {};
                        for (let E = u; E <= e; E++) {
                            const u = A(E),
                                e = F[u.path];
                            if (e) t.set(E, Le(u, e));
                            else {
                                const e = new Image();
                                (F[u.path] = e),
                                    (e.src = u.path),
                                    (e.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${E})`,
                                            u.path,
                                            `(${u.x},${u.y})`,
                                        );
                                    }),
                                    t.set(E, Le(u, e));
                            }
                        }
                        return t;
                    };
                function He() {
                    return (
                        (He = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var A = arguments[e];
                                      for (var t in A) ({}).hasOwnProperty.call(A, t) && (u[t] = A[t]);
                                  }
                                  return u;
                              }),
                        He.apply(null, arguments)
                    );
                }
                const Me = {
                        width: 280,
                        height: 170,
                        frameCount: 136,
                        chunk: { count: 1, rows: 20, columns: 7 },
                        getChunkPath: () => 'R.images.gui.maps.icons.comp7.banner.particles_sequence',
                    },
                    _e = (function (u) {
                        const e = u.chunk,
                            A = e.rows * e.columns;
                        return (t) => {
                            const F = t % A,
                                E = (F % e.columns) * u.width,
                                D = Math.trunc(F / e.columns) * u.height;
                            return { path: u.getChunkPath(Math.trunc(t / A)), x: E, y: D };
                        };
                    })(Me),
                    Te = ({ api: u, className: e }) =>
                        n().createElement(
                            Se,
                            He({}, u.props, {
                                width: Me.width,
                                height: Me.height,
                                frameCount: Me.frameCount,
                                getImageSource: _e,
                                className: e,
                                frameTime: 40,
                                loop: !1,
                            }),
                        ),
                    Re = R.strings.comp7.tournamentsWidget,
                    Ie = (0, Ku.Pi)(() => {
                        const u = ae(),
                            e = u.model,
                            A = u.controls,
                            t = e.root.get(),
                            F = t.state,
                            E = t.isExtended,
                            D = (function (u = {}, e = []) {
                                var A, t, F, E;
                                const D = (0, r.useState)(null != (A = u.state) ? A : ve),
                                    n = D[0],
                                    a = D[1],
                                    i = (0, r.useState)(null != (t = u.initialFrameIndex) ? t : fe),
                                    B = i[0],
                                    C = i[1],
                                    l = (0, r.useState)(null != (F = u.frameTime) ? F : he),
                                    o = l[0],
                                    s = l[1],
                                    c = (0, r.useState)(null != (E = u.loop) ? E : xe),
                                    d = c[0],
                                    m = c[1],
                                    g = (0, r.useRef)(B),
                                    h = (0, r.useCallback)((u) => {
                                        C(u), a('play');
                                    }, []),
                                    f = (0, r.useCallback)((u) => {
                                        C(u), a('stop');
                                    }, []),
                                    x = (0, r.useCallback)(() => {
                                        C(0), a('stop');
                                    }, []),
                                    v = (0, r.useCallback)(() => a('play'), []),
                                    p = (0, r.useCallback)(() => {
                                        C(g.current + 1), a('stop');
                                    }, []);
                                return {
                                    props: {
                                        state: n,
                                        initialFrameIndex: B,
                                        frameTime: o,
                                        loop: d,
                                        onAnimate: (0, r.useCallback)((e, A) => {
                                            (g.current = e), null == u.onAnimate || u.onAnimate(e, A);
                                        }, e),
                                        onAnimationDone: (0, r.useCallback)(() => {
                                            x();
                                        }, e),
                                    },
                                    enableLoop: (0, r.useCallback)(() => m(!0), []),
                                    disableLoop: (0, r.useCallback)(() => m(!1), []),
                                    setState: a,
                                    setInitialFrameIndex: C,
                                    setFrameTime: s,
                                    goAndPlay: h,
                                    goAndStop: f,
                                    stop: x,
                                    play: v,
                                    pause: p,
                                };
                            })();
                        var a;
                        (a = () => {
                            D.stop();
                        }),
                            (0, r.useEffect)(a, []);
                        const i = (0, ue.useSpring)(ee);
                        return n().createElement(
                            ue.animated.div,
                            {
                                style: i,
                                className: Pu()(ie, E && le),
                                onClick: () => {
                                    Ju.playClick(), A.openTournaments();
                                },
                                onMouseEnter: () => {
                                    Ju.playHighlight(), D.play();
                                },
                                onMouseLeave: () => {
                                    D.stop();
                                },
                            },
                            n().createElement('div', { className: Pu()(Be, se) }),
                            n().createElement('div', { className: Pu()(Be, Ce) }),
                            n().createElement('div', { className: Pu()(Be, oe) }),
                            n().createElement(Te, { api: D, className: ce }),
                            n().createElement(
                                'div',
                                { className: de },
                                n().createElement(Zu, { text: Re.heading(), classMix: me }),
                                n().createElement(Zu, { text: `${Re.text.$dyn(F)}`, classMix: ge }),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    Wu().render(
                        n().createElement(Ru, null, n().createElement(ne, null, n().createElement(Ie, null))),
                        document.getElementById('root'),
                    );
                });
            },
        },
        A = {};
    function t(u) {
        var F = A[u];
        if (void 0 !== F) return F.exports;
        var E = (A[u] = { exports: {} });
        return e[u](E, E.exports, t), E.exports;
    }
    (t.m = e),
        (u = []),
        (t.O = (e, A, F, E) => {
            if (!A) {
                var D = 1 / 0;
                for (i = 0; i < u.length; i++) {
                    for (var [A, F, E] = u[i], r = !0, n = 0; n < A.length; n++)
                        (!1 & E || D >= E) && Object.keys(t.O).every((u) => t.O[u](A[n]))
                            ? A.splice(n--, 1)
                            : ((r = !1), E < D && (D = E));
                    if (r) {
                        u.splice(i--, 1);
                        var a = F();
                        void 0 !== a && (e = a);
                    }
                }
                return e;
            }
            E = E || 0;
            for (var i = u.length; i > 0 && u[i - 1][2] > E; i--) u[i] = u[i - 1];
            u[i] = [A, F, E];
        }),
        (t.n = (u) => {
            var e = u && u.__esModule ? () => u.default : () => u;
            return t.d(e, { a: e }), e;
        }),
        (t.d = (u, e) => {
            for (var A in e) t.o(e, A) && !t.o(u, A) && Object.defineProperty(u, A, { enumerable: !0, get: e[A] });
        }),
        (t.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (u) {
                if ('object' == typeof window) return window;
            }
        })()),
        (t.o = (u, e) => Object.prototype.hasOwnProperty.call(u, e)),
        (t.r = (u) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(u, '__esModule', { value: !0 });
        }),
        (t.j = 848),
        (() => {
            var u = { 848: 0 };
            t.O.j = (e) => 0 === u[e];
            var e = (e, A) => {
                    var F,
                        E,
                        [D, r, n] = A,
                        a = 0;
                    if (D.some((e) => 0 !== u[e])) {
                        for (F in r) t.o(r, F) && (t.m[F] = r[F]);
                        if (n) var i = n(t);
                    }
                    for (e && e(A); a < D.length; a++) (E = D[a]), t.o(u, E) && u[E] && u[E][0](), (u[E] = 0);
                    return t.O(i);
                },
                A = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            A.forEach(e.bind(null, 0)), (A.push = e.bind(null, A.push.bind(A)));
        })();
    var F = t.O(void 0, [926], () => t(5591));
    F = t.O(F);
})();
