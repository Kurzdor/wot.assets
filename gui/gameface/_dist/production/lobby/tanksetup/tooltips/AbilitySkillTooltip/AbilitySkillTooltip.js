(() => {
    var u,
        e = {
            3532: (u) => {
                u.exports = {
                    BLACK_REAL: '#000000',
                    WHITE_REAL: '#FFFFFF',
                    WHITE: '#F2F2F7',
                    WHITE_ORANGE: '#FEFEEC',
                    WHITE_SPANISH: '#E9E2BF',
                    PAR: '#8C8C7E',
                    PAR_SECONDARY: '#595950',
                    PAR_TERTIARY: '#37362E',
                    INFO_RED: '#FF0000',
                    RED: '#FF2717',
                    RED_DARK: '#B70000',
                    YELLOW: '#FEAB34',
                    ORANGE: '#EE7000',
                    CREAM: '#FFDD99',
                    BROWN: '#CBAC77',
                    GREEN_BRIGHT: '#80D43A',
                    GREEN: '#7AB300',
                    GREEN_DARK: '#497212',
                    BLUE_BOOSTER: '#CCFFFF',
                    BLUE_TEAMKILLER: '#09E2FF',
                    CRED: '#CED9D9',
                    GOLD: '#FFC363',
                    BOND: '#C9C9B6',
                    PROM: '#A29B70',
                };
            },
            9887: (u) => {
                u.exports = {
                    XS: '4rem',
                    SM: '8rem',
                    SMp: '10rem',
                    MD: '16rem',
                    MDp: '20rem',
                    LG: '32rem',
                    XL: '64rem',
                };
            },
            1667: (u, e, t) => {
                'use strict';
                var r = {};
                t.r(r), t.d(r, { mouse: () => o, onResize: () => B });
                var A = {};
                t.r(A),
                    t.d(A, {
                        events: () => r,
                        getMouseGlobalPosition: () => m,
                        getSize: () => C,
                        graphicsQuality: () => s,
                    });
                var E = {};
                t.r(E), t.d(E, { getBgUrl: () => d, getTextureUrl: () => c });
                var F = {};
                t.r(F),
                    t.d(F, {
                        addModelObserver: () => M,
                        addPreloadTexture: () => S,
                        children: () => E,
                        displayStatus: () => g,
                        displayStatusIs: () => K,
                        events: () => _,
                        extraSize: () => U,
                        forceTriggerMouseMove: () => $,
                        freezeTextureBeforeResize: () => N,
                        getBrowserTexturePath: () => L,
                        getDisplayStatus: () => V,
                        getScale: () => W,
                        getSize: () => H,
                        getViewGlobalPosition: () => P,
                        isEventHandled: () => z,
                        isFocused: () => k,
                        pxToRem: () => I,
                        remToPx: () => G,
                        resize: () => O,
                        sendEvent: () => w,
                        setAnimateWindow: () => j,
                        setEventHandled: () => X,
                        setInputPaddingsRem: () => y,
                        setSidePaddingsRem: () => T,
                        whenTutorialReady: () => q,
                    });
                var a = t(6483),
                    n = t.n(a);
                function D(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                function i(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                const B = D('clientResized'),
                    l = { down: D('mousedown'), up: D('mouseup'), move: D('mousemove') };
                const o = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && i(!1);
                    }
                    function t() {
                        u.enabled && i(!0);
                    }
                    function r() {
                        u.enabled
                            ? u.listeners < 1
                                ? ((u.initialized = !1),
                                  document.body.removeEventListener('mouseenter', e),
                                  document.body.removeEventListener('mouseleave', t))
                                : u.initialized ||
                                  ((u.initialized = !0),
                                  document.body.addEventListener('mouseenter', e),
                                  document.body.addEventListener('mouseleave', t))
                            : i(!1);
                    }
                    const A = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let A = !0;
                                    const E = `mouse${e}`,
                                        F = l[e]((u) => t([u, 'outside']));
                                    function a(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(E, a),
                                        r(),
                                        () => {
                                            A &&
                                                (F(),
                                                window.removeEventListener(E, a),
                                                (u.listeners -= 1),
                                                r(),
                                                (A = !1));
                                        }
                                    );
                                };
                            })(t)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, A, {
                        disable() {
                            (u.enabled = !1), r();
                        },
                        enable() {
                            (u.enabled = !0), r();
                        },
                        enableOutside() {
                            u.enabled && i(!0);
                        },
                        disableOutside() {
                            u.enabled && i(!1);
                        },
                    });
                })();
                function C(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function m(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function c(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function d(u, e, t) {
                    return `url(${c(u, e, t)})`;
                }
                const g = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    _ = {
                        onTextureFrozen: D('self.onTextureFrozen'),
                        onTextureReady: D('self.onTextureReady'),
                        onDomBuilt: D('self.onDomBuilt'),
                        onLoaded: D('self.onLoaded'),
                        onDisplayChanged: D('self.onShowingStatusChanged'),
                        onFocusUpdated: D('self.onFocusChanged'),
                        children: {
                            onAdded: D('children.onAdded'),
                            onLoaded: D('children.onLoaded'),
                            onRemoved: D('children.onRemoved'),
                            onAttached: D('children.onAttached'),
                            onTextureReady: D('children.onTextureReady'),
                            onRequestPosition: D('children.requestPosition'),
                        },
                    },
                    h = ['args'];
                const p = 2,
                    x = 16,
                    f = 32,
                    v = 64,
                    b = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const A = e.args,
                                E = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        A = {},
                                        E = Object.keys(u);
                                    for (r = 0; r < E.length; r++) (t = E[r]), e.indexOf(t) >= 0 || (A[t] = u[t]);
                                    return A;
                                })(e, h);
                            return void 0 !== A
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, E, {
                                          arguments:
                                              ((r = A),
                                              Object.entries(r).map(([u, e]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof e) {
                                                      case 'number':
                                                          return { __Type: t, name: u, number: e };
                                                      case 'boolean':
                                                          return { __Type: t, name: u, bool: e };
                                                      default:
                                                          return { __Type: t, name: u, string: e.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, E));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    w = {
                        close(u) {
                            b('popover' === u ? p : f);
                        },
                        minimize() {
                            b(v);
                        },
                        move(u) {
                            b(x, { isMouseEvent: !0, on: u });
                        },
                    };
                function S(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function y(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function L(u, e, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, r);
                }
                function M(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function T(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function H(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function O(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function P(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: G(e.x), y: G(e.y) };
                }
                function N() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function W() {
                    return viewEnv.getScale();
                }
                function I(u) {
                    return viewEnv.pxToRem(u);
                }
                function G(u) {
                    return viewEnv.remToPx(u);
                }
                function j(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function k() {
                    return viewEnv.isFocused();
                }
                function X() {
                    return viewEnv.setEventHandled();
                }
                function z() {
                    return viewEnv.isEventHandled();
                }
                function $() {
                    viewEnv.forceTriggerMouseMove();
                }
                function V() {
                    return viewEnv.getShowingStatus();
                }
                const K = Object.keys(g).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === g[e]), u), {}),
                    U = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    q = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : _.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    Y = { view: F, client: A };
                var Q = t(6179),
                    Z = t.n(Q);
                function J() {
                    const u = (0, Q.useRef)(0);
                    var e;
                    return (
                        (e = () => {
                            window.cancelAnimationFrame(u.current);
                        }),
                        (0, Q.useEffect)(() => e, []),
                        (0, Q.useMemo)(
                            () => ({
                                run: (e) => {
                                    window.cancelAnimationFrame(u.current),
                                        (u.current = window.requestAnimationFrame(() => {
                                            u.current = window.requestAnimationFrame(() => {
                                                e(), (u.current = 0);
                                            });
                                        }));
                                },
                                clear: () => {
                                    window.cancelAnimationFrame(u.current), (u.current = 0);
                                },
                                get isRunning() {
                                    return 0 !== u.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                const uu = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    eu = ['children', 'className', 'theme'];
                function tu() {
                    return (
                        (tu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        tu.apply(this, arguments)
                    );
                }
                const ru = Z().forwardRef(function (u, e) {
                    let t = u.children,
                        r = u.className,
                        A = u.theme,
                        E = void 0 === A ? 'default' : A,
                        F = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                A = {},
                                E = Object.keys(u);
                            for (r = 0; r < E.length; r++) (t = E[r]), e.indexOf(t) >= 0 || (A[t] = u[t]);
                            return A;
                        })(u, eu);
                    const a = J(),
                        D = Z().useRef(null);
                    var i;
                    return (
                        (i = () => {
                            a.run(() => {
                                const u = D.current;
                                if (!u) return;
                                const e = u.scrollWidth,
                                    t = u.scrollHeight;
                                Y.view.resize(e, t);
                                const r = window.getComputedStyle(u);
                                Y.view.setSidePaddingsRem({
                                    left: parseInt(r.getPropertyValue('padding-left'), 10),
                                    top: parseInt(r.getPropertyValue('padding-top'), 10),
                                    right: parseInt(r.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, Q.useEffect)(i, []),
                        Z().createElement(
                            'div',
                            tu({}, F, {
                                className: n()(uu.base, uu[`base__theme-${E}`], r),
                                ref: function (u) {
                                    (D.current = u), 'function' == typeof e ? e(u) : e && (e.current = u);
                                },
                            }),
                            Z().createElement('div', { className: uu.decorator }, t),
                        )
                    );
                });
                var Au = t(493),
                    Eu = t.n(Au);
                const Fu = 33,
                    au = 0,
                    nu = !0,
                    Du = 'play';
                const iu = [
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
                function Bu() {
                    return (
                        (Bu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        Bu.apply(this, arguments)
                    );
                }
                const lu = (0, Q.memo)(function (u) {
                        let e = u.width,
                            t = u.height,
                            r = u.getImageSource,
                            A = u.frameCount,
                            E = u.onAnimate,
                            F = u.frameTime,
                            a = void 0 === F ? Fu : F,
                            n = u.initialFrameIndex,
                            D = void 0 === n ? au : n,
                            i = u.lastFrameIndex,
                            B = void 0 === i ? A - 1 : i,
                            l = u.loop,
                            o = void 0 === l ? nu : l,
                            C = u.state,
                            m = void 0 === C ? Du : C,
                            s = u.onAnimationDone,
                            c = u.onAnimationComplete,
                            d = u.poster,
                            g = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    A = {},
                                    E = Object.keys(u);
                                for (r = 0; r < E.length; r++) (t = E[r]), e.indexOf(t) >= 0 || (A[t] = u[t]);
                                return A;
                            })(u, iu);
                        const _ = (0, Q.useRef)(null);
                        return (
                            (0, Q.useEffect)(() => {
                                const u = _.current;
                                if (!u) return;
                                const e = u.getContext('2d'),
                                    t = (t) => {
                                        e.clearRect(0, 0, u.width, u.height), e.drawImage(t.img, -t.x, -t.y);
                                    };
                                switch (m) {
                                    case 'play':
                                        return (function () {
                                            const u = mu(D, B, r),
                                                e = ou(D, B),
                                                A = window.setInterval(() => {
                                                    const r = e(),
                                                        F = u.get(r);
                                                    F
                                                        ? (null == E || E(r, F),
                                                          t(F),
                                                          r === B &&
                                                              (null == c || c(),
                                                              o || (null == s || s(), window.clearInterval(A))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, a);
                                            return () => window.clearInterval(A);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const u = 0 === D && d ? { path: d, x: 0, y: 0 } : r(D),
                                                e = new Image();
                                            e.src = u.path;
                                            const A = () => t(Cu(u, e));
                                            return (
                                                e.addEventListener('load', A), () => e.removeEventListener('load', A)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [a, r, D, B, o, E, c, s, d, m]),
                            Z().createElement('canvas', Bu({}, g, { width: e, height: t, ref: _ }))
                        );
                    }),
                    ou = (u, e) => {
                        let t = u;
                        return () => {
                            const r = t;
                            return (t += 1), t > e && (t = u), r;
                        };
                    },
                    Cu = (u, e) => Object.assign({}, u, { img: e }),
                    mu = (u, e, t) => {
                        const r = new Map(),
                            A = {};
                        for (let E = u; E <= e; E++) {
                            const u = t(E),
                                e = A[u.path];
                            if (e) r.set(E, Cu(u, e));
                            else {
                                const e = new Image();
                                (A[u.path] = e),
                                    (e.src = u.path),
                                    (e.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${E})`,
                                            u.path,
                                            `(${u.x},${u.y})`,
                                        );
                                    }),
                                    r.set(E, Cu(u, e));
                            }
                        }
                        return r;
                    };
                var su = t(9887),
                    cu = t.n(su);
                const du = (u, e, t) =>
                        e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                            ? (e.extraLargeHeight && t.extraLarge) ||
                              (e.largeHeight && t.large) ||
                              (e.mediumHeight && t.medium) ||
                              (e.smallHeight && t.small) ||
                              (e.extraSmallHeight && t.extraSmall)
                                ? u
                                : null
                            : u,
                    gu = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var _u;
                function hu(u, e, t) {
                    const r = (function (u, e) {
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
                        })(u, t),
                        A = (function (u, e) {
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
                        })(e, t),
                        E = Math.min(r, A);
                    return {
                        extraLarge: E === t.extraLarge.weight,
                        large: E === t.large.weight,
                        medium: E === t.medium.weight,
                        small: E === t.small.weight,
                        extraSmall: E === t.extraSmall.weight,
                        extraLargeWidth: r === t.extraLarge.weight,
                        largeWidth: r === t.large.weight,
                        mediumWidth: r === t.medium.weight,
                        smallWidth: r === t.small.weight,
                        extraSmallWidth: r === t.extraSmall.weight,
                        extraLargeHeight: A === t.extraLarge.weight,
                        largeHeight: A === t.large.weight,
                        mediumHeight: A === t.medium.weight,
                        smallHeight: A === t.small.weight,
                        extraSmallHeight: A === t.extraSmall.weight,
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
                })(_u || (_u = {}));
                const pu = Y.client.getSize('rem'),
                    xu = pu.width,
                    fu = pu.height,
                    vu = Object.assign({ width: xu, height: fu }, hu(xu, fu, gu)),
                    bu = (0, Q.createContext)(vu),
                    wu = ['children'];
                const Su = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                A = {},
                                E = Object.keys(u);
                            for (r = 0; r < E.length; r++) (t = E[r]), e.indexOf(t) >= 0 || (A[t] = u[t]);
                            return A;
                        })(u, wu);
                    const r = (0, Q.useContext)(bu),
                        A = r.extraLarge,
                        E = r.large,
                        F = r.medium,
                        a = r.small,
                        n = r.extraSmall,
                        D = r.extraLargeWidth,
                        i = r.largeWidth,
                        B = r.mediumWidth,
                        l = r.smallWidth,
                        o = r.extraSmallWidth,
                        C = r.extraLargeHeight,
                        m = r.largeHeight,
                        s = r.mediumHeight,
                        c = r.smallHeight,
                        d = r.extraSmallHeight,
                        g = { extraLarge: C, large: m, medium: s, small: c, extraSmall: d };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && A) return e;
                        if (t.large && E) return e;
                        if (t.medium && F) return e;
                        if (t.small && a) return e;
                        if (t.extraSmall && n) return e;
                    } else {
                        if (t.extraLargeWidth && D) return du(e, t, g);
                        if (t.largeWidth && i) return du(e, t, g);
                        if (t.mediumWidth && B) return du(e, t, g);
                        if (t.smallWidth && l) return du(e, t, g);
                        if (t.extraSmallWidth && o) return du(e, t, g);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && C) return e;
                            if (t.largeHeight && m) return e;
                            if (t.mediumHeight && s) return e;
                            if (t.smallHeight && c) return e;
                            if (t.extraSmallHeight && d) return e;
                        }
                    }
                    return null;
                };
                Su.defaultProps = {
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
                (0, Q.memo)(Su);
                const yu = (u) => {
                    const e = (0, Q.useRef)(!1);
                    e.current || (u(), (e.current = !0));
                };
                (0, Q.memo)(({ children: u }) => {
                    const e = (0, Q.useContext)(bu),
                        t = (0, Q.useState)(e),
                        r = t[0],
                        A = t[1],
                        E = (0, Q.useCallback)((u, e) => {
                            const t = Y.view.pxToRem(u),
                                r = Y.view.pxToRem(e);
                            A(Object.assign({ width: t, height: r }, hu(t, r, gu)));
                        }, []);
                    yu(() => {
                        engine.on('clientResized', E);
                    }),
                        (0, Q.useEffect)(() => () => engine.off('clientResized', E), [E]);
                    const F = (0, Q.useMemo)(() => Object.assign({}, r), [r]);
                    return Z().createElement(bu.Provider, { value: F }, u);
                });
                let Lu, Mu, Ru;
                !(function (u) {
                    (u[(u.ExtraSmall = gu.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = gu.small.width)] = 'Small'),
                        (u[(u.Medium = gu.medium.width)] = 'Medium'),
                        (u[(u.Large = gu.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = gu.extraLarge.width)] = 'ExtraLarge');
                })(Lu || (Lu = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = gu.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = gu.small.width)] = 'Small'),
                            (u[(u.Medium = gu.medium.width)] = 'Medium'),
                            (u[(u.Large = gu.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = gu.extraLarge.width)] = 'ExtraLarge');
                    })(Mu || (Mu = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = gu.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = gu.small.height)] = 'Small'),
                            (u[(u.Medium = gu.medium.height)] = 'Medium'),
                            (u[(u.Large = gu.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = gu.extraLarge.height)] = 'ExtraLarge');
                    })(Ru || (Ru = {}));
                const Tu = () => {
                        const u = (0, Q.useContext)(bu),
                            e = u.width,
                            t = u.height,
                            r = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return Lu.ExtraLarge;
                                    case u.large:
                                        return Lu.Large;
                                    case u.medium:
                                        return Lu.Medium;
                                    case u.small:
                                        return Lu.Small;
                                    case u.extraSmall:
                                        return Lu.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), Lu.ExtraSmall;
                                }
                            })(u),
                            A = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return Mu.ExtraLarge;
                                    case u.largeWidth:
                                        return Mu.Large;
                                    case u.mediumWidth:
                                        return Mu.Medium;
                                    case u.smallWidth:
                                        return Mu.Small;
                                    case u.extraSmallWidth:
                                        return Mu.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), Mu.ExtraSmall;
                                }
                            })(u),
                            E = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return Ru.ExtraLarge;
                                    case u.largeHeight:
                                        return Ru.Large;
                                    case u.mediumHeight:
                                        return Ru.Medium;
                                    case u.smallHeight:
                                        return Ru.Small;
                                    case u.extraSmallHeight:
                                        return Ru.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), Ru.ExtraSmall;
                                }
                            })(u);
                        return { mediaSize: r, mediaWidth: A, mediaHeight: E, remScreenWidth: e, remScreenHeight: t };
                    },
                    Hu = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Ou = (u) => u.includes('_') && ((u) => Hu.includes(u))(u.split('_').at(-1)),
                    Pu = [Lu.ExtraLarge, Lu.Large, Lu.Medium, Lu.Small, Lu.ExtraSmall],
                    Nu = (u, e) =>
                        Object.keys(u).reduce((t, r) => {
                            if (r in t) return t;
                            if (Ou(r)) {
                                const A = r.split('_').slice(0, -1).join('_');
                                if (A in t) return t;
                                const E = Pu.indexOf(e),
                                    F = (-1 !== E ? Hu.slice(E) : [])
                                        .map((u) => A + '_' + u)
                                        .find((e) => void 0 !== u[e]),
                                    a = F ? u[F] : void 0;
                                return (t[A] = void 0 !== a ? a : u[A]), t;
                            }
                            const A = u[r];
                            return (
                                void 0 === A ||
                                    ((u, e) => Hu.some((t) => void 0 !== e[`${u}_${t}`]))(r, u) ||
                                    (t[r] = A),
                                t
                            );
                        }, {}),
                    Wu = (u, e = Nu) => {
                        const t = (
                            (u, e = Nu) =>
                            (t) => {
                                const r = Tu().mediaSize,
                                    A = (0, Q.useMemo)(() => e(t, r), [t, r]);
                                return Z().createElement(u, A);
                            }
                        )(u, e);
                        return Z().memo((e) =>
                            Object.keys(e).some((u) => Ou(u) && void 0 !== e[u])
                                ? Z().createElement(t, e)
                                : Z().createElement(u, e),
                        );
                    },
                    Iu = {
                        mt__XS: 'Box_mt__XS_0c',
                        mt__SM: 'Box_mt__SM_eb',
                        mt__SMp: 'Box_mt__SMp_cf',
                        mt__MD: 'Box_mt__MD_25',
                        mt__MDp: 'Box_mt__MDp_49',
                        mt__LG: 'Box_mt__LG_e8',
                        mt__XL: 'Box_mt__XL_83',
                        mr__XS: 'Box_mr__XS_7c',
                        mr__SM: 'Box_mr__SM_08',
                        mr__SMp: 'Box_mr__SMp_06',
                        mr__MD: 'Box_mr__MD_4a',
                        mr__MDp: 'Box_mr__MDp_b6',
                        mr__LG: 'Box_mr__LG_d0',
                        mr__XL: 'Box_mr__XL_db',
                        mb__XS: 'Box_mb__XS_bb',
                        mb__SM: 'Box_mb__SM_83',
                        mb__SMp: 'Box_mb__SMp_04',
                        mb__MD: 'Box_mb__MD_ed',
                        mb__MDp: 'Box_mb__MDp_65',
                        mb__LG: 'Box_mb__LG_c8',
                        mb__XL: 'Box_mb__XL_f8',
                        ml__XS: 'Box_ml__XS_8a',
                        ml__SM: 'Box_ml__SM_e6',
                        ml__SMp: 'Box_ml__SMp_fb',
                        ml__MD: 'Box_ml__MD_2b',
                        ml__MDp: 'Box_ml__MDp_c7',
                        ml__LG: 'Box_ml__LG_39',
                        ml__XL: 'Box_ml__XL_4a',
                    },
                    Gu = [
                        'className',
                        'width',
                        'height',
                        'm',
                        'mt',
                        'mr',
                        'mb',
                        'ml',
                        'column',
                        'row',
                        'flexDirection',
                        'flexStart',
                        'center',
                        'flexEnd',
                        'spaceBetween',
                        'spaceAround',
                        'justifyContent',
                        'alignItems',
                        'alignSelf',
                        'wrap',
                        'flexWrap',
                        'grow',
                        'shrink',
                        'flex',
                        'style',
                        'children',
                    ];
                function ju() {
                    return (
                        (ju =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        ju.apply(this, arguments)
                    );
                }
                Object.keys(cu());
                const ku = {
                        XL: { mt: Iu.mt__XL, mr: Iu.mr__XL, mb: Iu.mb__XL, ml: Iu.ml__XL },
                        LG: { mt: Iu.mt__LG, mr: Iu.mr__LG, mb: Iu.mb__LG, ml: Iu.ml__LG },
                        MDp: { mt: Iu.mt__MDp, mr: Iu.mr__MDp, mb: Iu.mb__MDp, ml: Iu.ml__MDp },
                        MD: { mt: Iu.mt__MD, mr: Iu.mr__MD, mb: Iu.mb__MD, ml: Iu.ml__MD },
                        SMp: { mt: Iu.mt__SMp, mr: Iu.mr__SMp, mb: Iu.mb__SMp, ml: Iu.ml__SMp },
                        SM: { mt: Iu.mt__SM, mr: Iu.mr__SM, mb: Iu.mb__SM, ml: Iu.ml__SM },
                        XS: { mt: Iu.mt__XS, mr: Iu.mr__XS, mb: Iu.mb__XS, ml: Iu.ml__XS },
                    },
                    Xu = (Object.keys(ku), ['mt', 'mr', 'mb', 'ml']),
                    zu = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    $u = Wu((u) => {
                        let e = u.className,
                            t = u.width,
                            r = u.height,
                            A = u.m,
                            E = u.mt,
                            F = void 0 === E ? A : E,
                            a = u.mr,
                            D = void 0 === a ? A : a,
                            i = u.mb,
                            B = void 0 === i ? A : i,
                            l = u.ml,
                            o = void 0 === l ? A : l,
                            C = u.column,
                            m = u.row,
                            s = u.flexDirection,
                            c = void 0 === s ? (C ? 'column' : m && 'row') || void 0 : s,
                            d = u.flexStart,
                            g = u.center,
                            _ = u.flexEnd,
                            h = u.spaceBetween,
                            p = u.spaceAround,
                            x = u.justifyContent,
                            f =
                                void 0 === x
                                    ? (d ? 'flex-start' : g && 'center') ||
                                      (_ && 'flex-end') ||
                                      (h && 'space-between') ||
                                      (p && 'space-around') ||
                                      void 0
                                    : x,
                            v = u.alignItems,
                            b = void 0 === v ? (d ? 'flex-start' : g && 'center') || (_ && 'flex-end') || void 0 : v,
                            w = u.alignSelf,
                            S = u.wrap,
                            y = u.flexWrap,
                            L = void 0 === y ? (S ? 'wrap' : void 0) : y,
                            M = u.grow,
                            R = u.shrink,
                            T = u.flex,
                            H = void 0 === T ? (M || R ? `${M ? 1 : 0} ${R ? 1 : 0} auto` : void 0) : T,
                            O = u.style,
                            P = u.children,
                            N = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    A = {},
                                    E = Object.keys(u);
                                for (r = 0; r < E.length; r++) (t = E[r]), e.indexOf(t) >= 0 || (A[t] = u[t]);
                                return A;
                            })(u, Gu);
                        const W = (0, Q.useMemo)(() => {
                                const u = { mt: F, mr: D, mb: B, ml: o },
                                    e = ((u) =>
                                        Xu.reduce((e, t) => {
                                            const r = u[t];
                                            return r && 'number' != typeof r ? e.concat(ku[!0 === r ? 'MD' : r][t]) : e;
                                        }, []))(u),
                                    A = ((u) =>
                                        Xu.reduce((e, t) => {
                                            const r = u[t];
                                            return 'number' == typeof r && (e[zu[t]] = r + 'rem'), e;
                                        }, {}))(u);
                                return {
                                    computedStyle: Object.assign({}, O, A, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: H,
                                        alignSelf: w,
                                        display: c || b ? 'flex' : void 0,
                                        flexDirection: c,
                                        flexWrap: L,
                                        justifyContent: f,
                                        alignItems: b,
                                    }),
                                    computedClassNames: e,
                                };
                            }, [t, r, F, D, B, o, O, H, w, c, L, f, b]),
                            I = W.computedStyle,
                            G = W.computedClassNames;
                        return Z().createElement('div', ju({ className: n()(Iu.base, ...G, e), style: I }, N), P);
                    });
                let Vu;
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(Vu || (Vu = {}));
                const Ku = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    Uu = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    qu = (u, e, t = Vu.left) => u.split(e).reduce(t === Vu.left ? Ku : Uu, []),
                    Yu = (() => {
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
                    Qu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Zu = (u, e = Vu.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return Qu.includes(t)
                            ? Yu(u)
                            : ((u, e = Vu.left) => {
                                  let t = [];
                                  const r =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      A = u.replace(/&nbsp;/g, ' ');
                                  return qu(A, /( )/, e).forEach((u) => (t = t.concat(qu(u, r, Vu.left)))), t;
                              })(u, e);
                    },
                    Ju = 'FormatText_base_d0',
                    ue = ({ binding: u, text: e = '', classMix: t, alignment: r = Vu.left }) =>
                        null === e
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : Z().createElement(
                                  Q.Fragment,
                                  null,
                                  e.split('\n').map((e, A) =>
                                      Z().createElement(
                                          'div',
                                          { className: n()(Ju, t), key: `${e}-${A}` },
                                          ((u, e, t) =>
                                              u
                                                  .split(/%\((.*?)\)(?:[sd])?/g)
                                                  .map((u) => (t && u in t ? t[u] : Zu(u, e))))(e, r, u).map((u, e) =>
                                              Z().createElement(Q.Fragment, { key: `${e}-${u}` }, u),
                                          ),
                                      ),
                                  ),
                              );
                var ee = t(3532),
                    te = t.n(ee);
                const re = {
                        'paragraph-P10': 'Text_paragraph-P10_2c',
                        'paragraph-P12': 'Text_paragraph-P12_22',
                        'paragraph-P14': 'Text_paragraph-P14_a7',
                        'paragraph-P16': 'Text_paragraph-P16_90',
                        'paragraph-P18': 'Text_paragraph-P18_50',
                        'paragraph-P24': 'Text_paragraph-P24_33',
                        'heading-H14': 'Text_heading-H14_8b',
                        'heading-H15': 'Text_heading-H15_9e',
                        'heading-H18': 'Text_heading-H18_b7',
                        'heading-H20R': 'Text_heading-H20R_f6',
                        'heading-H22': 'Text_heading-H22_27',
                        'heading-H24R': 'Text_heading-H24R_be',
                        'heading-H24': 'Text_heading-H24_0c',
                        'heading-H28': 'Text_heading-H28_78',
                        'heading-H36': 'Text_heading-H36_32',
                        'heading-H56': 'Text_heading-H56_c3',
                        'heading-H73': 'Text_heading-H73_8f',
                        'heading-H144': 'Text_heading-H144_a9',
                        BLACK_REAL: 'Text_BLACK_REAL_30',
                        WHITE_REAL: 'Text_WHITE_REAL_bc',
                        WHITE: 'Text_WHITE_62',
                        WHITE_ORANGE: 'Text_WHITE_ORANGE_54',
                        WHITE_SPANISH: 'Text_WHITE_SPANISH_df',
                        PAR: 'Text_PAR_15',
                        PAR_SECONDARY: 'Text_PAR_SECONDARY_5d',
                        PAR_TERTIARY: 'Text_PAR_TERTIARY_c9',
                        INFO_RED: 'Text_INFO_RED_30',
                        RED: 'Text_RED_66',
                        RED_DARK: 'Text_RED_DARK_d8',
                        YELLOW: 'Text_YELLOW_ed',
                        ORANGE: 'Text_ORANGE_be',
                        CREAM: 'Text_CREAM_57',
                        BROWN: 'Text_BROWN_18',
                        GREEN_BRIGHT: 'Text_GREEN_BRIGHT_3f',
                        GREEN: 'Text_GREEN_e3',
                        GREEN_DARK: 'Text_GREEN_DARK_f1',
                        BLUE_BOOSTER: 'Text_BLUE_BOOSTER_21',
                        BLUE_TEAMKILLER: 'Text_BLUE_TEAMKILLER_ab',
                        CRED: 'Text_CRED_f7',
                        GOLD: 'Text_GOLD_28',
                        BOND: 'Text_BOND_be',
                        PROM: 'Text_PROM_65',
                    },
                    Ae = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Ee() {
                    return (
                        (Ee =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        Ee.apply(this, arguments)
                    );
                }
                Object.keys(cu());
                const Fe = Object.keys(te()),
                    ae = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    ne = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    De = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    ie = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    Be =
                        (Object.keys(ie),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': ae,
                            'heading-H36': ae,
                            'heading-H28': ne,
                            'heading-H24': ne,
                            'heading-H24R': ne,
                            'heading-H22': ne,
                            'heading-H20R': ne,
                            'heading-H18': ne,
                            'heading-H15': De,
                            'heading-H14': De,
                            'paragraph-P24': ne,
                            'paragraph-P18': ne,
                            'paragraph-P16': ne,
                            'paragraph-P14': De,
                            'paragraph-P12': De,
                            'paragraph-P10': De,
                        }),
                    le =
                        (Object.keys(Be),
                        (u) =>
                            u
                                ? ((u) => Fe.includes(u))(u)
                                    ? { colorClassName: re[u] }
                                    : { colorStyle: { color: u } }
                                : {}),
                    oe = Wu((u) => {
                        let e = u.text,
                            t = u.variant,
                            r = u.className,
                            A = u.color,
                            E = u.m,
                            F = u.mt,
                            a = void 0 === F ? E : F,
                            D = u.mr,
                            i = void 0 === D ? E : D,
                            B = u.mb,
                            l = void 0 === B ? E : B,
                            o = u.ml,
                            C = void 0 === o ? E : o,
                            m = u.style,
                            s = u.format,
                            c = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    A = {},
                                    E = Object.keys(u);
                                for (r = 0; r < E.length; r++) (t = E[r]), e.indexOf(t) >= 0 || (A[t] = u[t]);
                                return A;
                            })(u, Ae);
                        const d = (0, Q.useMemo)(() => {
                                const u = le(A),
                                    e = u.colorClassName,
                                    t = u.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, m, r), colorClassName: e };
                            }, [m, A]),
                            g = d.computedStyle,
                            _ = d.colorClassName;
                        return Z().createElement(
                            $u,
                            Ee(
                                {
                                    className: n()(re.base, t && re[t], _, r),
                                    style: g,
                                    mt: !0 === a ? Be[t || 'paragraph-P16'].mt : a,
                                    mr: !0 === i ? Be[t || 'paragraph-P16'].mr : i,
                                    mb: !0 === l ? Be[t || 'paragraph-P16'].mb : l,
                                    ml: !0 === C ? Be[t || 'paragraph-P16'].ml : C,
                                },
                                c,
                            ),
                            void 0 !== s ? Z().createElement(ue, Ee({}, s, { text: e })) : e,
                        );
                    });
                function Ce() {}
                const me = Ce;
                function se() {
                    return !1;
                }
                console.log;
                var ce = t(3403),
                    de = t(9174);
                function ge(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return _e(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return _e(u, e);
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var r = 0;
                        return function () {
                            return r >= u.length ? { done: !0 } : { done: !1, value: u[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function _e(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, r = new Array(e); t < e; t++) r[t] = u[t];
                    return r;
                }
                const he = (u) => (0 === u ? window : window.subViews.get(u));
                const pe = ((u, e) => {
                        const t = (0, Q.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: A, children: E, mocks: F }) {
                                const a = (0, Q.useRef)([]),
                                    n = (t, r, A) => {
                                        var E;
                                        const F = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = he,
                                                context: r = 'model',
                                            } = {}) {
                                                const A = new Map();
                                                function E(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? A.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = A.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const F = (u) => {
                                                    const A = t(e),
                                                        E = r.split('.').reduce((u, e) => u[e], A);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? E
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, E);
                                                };
                                                return {
                                                    subscribe: (t, E) => {
                                                        const a = 'string' == typeof E ? `${r}.${E}` : r,
                                                            n = Y.view.addModelObserver(a, e, !0);
                                                        return A.set(n, t), u && t(F(E)), n;
                                                    },
                                                    readByPath: F,
                                                    createCallback: (u, e) => {
                                                        const t = F(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = F(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var u, t = ge(A.keys()); !(u = t()).done; ) E(u.value, e);
                                                    },
                                                    unsubscribe: E,
                                                };
                                            })(r),
                                            n =
                                                'real' === t
                                                    ? F
                                                    : Object.assign({}, F, {
                                                          readByPath:
                                                              null != (E = null == A ? void 0 : A.getter)
                                                                  ? E
                                                                  : () => {},
                                                      }),
                                            D = (u) =>
                                                'mocks' === t ? (null == A ? void 0 : A.getter(u)) : n.readByPath(u),
                                            i = (u) => a.current.push(u),
                                            B = u({
                                                mode: t,
                                                readByPath: D,
                                                externalModel: n,
                                                observableModel: {
                                                    array: (u, e) => {
                                                        const r = null != e ? e : D(u),
                                                            A = de.LO.box(r, { equals: se });
                                                        return (
                                                            'real' === t &&
                                                                n.subscribe(
                                                                    (0, de.aD)((u) => A.set(u)),
                                                                    u,
                                                                ),
                                                            A
                                                        );
                                                    },
                                                    object: (u, e) => {
                                                        const r = null != e ? e : D(u),
                                                            A = de.LO.box(r, { equals: se });
                                                        return (
                                                            'real' === t &&
                                                                n.subscribe(
                                                                    (0, de.aD)((u) => A.set(u)),
                                                                    u,
                                                                ),
                                                            A
                                                        );
                                                    },
                                                    primitives: (u, e) => {
                                                        const r = D(e);
                                                        if (Array.isArray(u)) {
                                                            const A = u.reduce(
                                                                (u, e) => ((u[e] = de.LO.box(r[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    n.subscribe(
                                                                        (0, de.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                A[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                A
                                                            );
                                                        }
                                                        {
                                                            const A = u,
                                                                E = Object.entries(A),
                                                                F = E.reduce(
                                                                    (u, [e, t]) => ((u[t] = de.LO.box(r[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    n.subscribe(
                                                                        (0, de.aD)((u) => {
                                                                            E.forEach(([e, t]) => {
                                                                                F[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                F
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: i,
                                            }),
                                            l = { mode: t, model: B, externalModel: n, cleanup: i };
                                        return {
                                            model: B,
                                            controls: 'mocks' === t && A ? A.controls(l) : e(l),
                                            externalModel: n,
                                            mode: t,
                                        };
                                    },
                                    D = (0, Q.useRef)(!1),
                                    i = (0, Q.useState)(r),
                                    B = i[0],
                                    l = i[1],
                                    o = (0, Q.useState)(() => n(r, A, F)),
                                    C = o[0],
                                    m = o[1];
                                return (
                                    (0, Q.useEffect)(() => {
                                        D.current ? m(n(B, A, F)) : (D.current = !0);
                                    }, [F, B, A]),
                                    (0, Q.useEffect)(() => {
                                        l(r);
                                    }, [r]),
                                    (0, Q.useEffect)(
                                        () => () => {
                                            C.externalModel.dispose(), a.current.forEach((u) => u());
                                        },
                                        [C],
                                    ),
                                    Z().createElement(t.Provider, { value: C }, E)
                                );
                            },
                            () => (0, Q.useContext)(t),
                        ];
                    })(({ observableModel: u }) => {
                        const e = { root: u.object() };
                        return Object.assign({}, e, { computes: {} });
                    }, Ce),
                    xe = pe[0],
                    fe = pe[1],
                    ve = 'AbilityStat_base_b7',
                    be = 'AbilityStat_firstColumn_20',
                    we = 'AbilityStat_statData_ea',
                    Se = 'AbilityStat_statImage_81',
                    ye = 'AbilityStat_statDescription_35',
                    Le = ({ data: u, image: e, description: t }) =>
                        Z().createElement(
                            'div',
                            { className: ve },
                            Z().createElement(
                                'div',
                                { className: be },
                                Z().createElement('div', { className: we }, u),
                                Z().createElement('div', { className: Se, style: { backgroundImage: `url(${e})` } }),
                            ),
                            Z().createElement(oe, { className: ye, text: t }),
                        ),
                    Me = 'App_base_eb',
                    Re = 'App_titleWrapper_3f',
                    Te = 'App_title_7b',
                    He = 'App_subTitle_bc',
                    Oe = 'App_imgWrapper_49',
                    Pe = 'App_image_b5',
                    Ne = 'App_statsWrapper_f7',
                    We = 'App_statsDecorator_b9',
                    Ie = 'App_statsDecorator__top_7e',
                    Ge = 'App_statsDecorator__bottom_5b',
                    je = 'App_statsTitle_b4',
                    ke = 'App_statBlock_31',
                    Xe = 'App_statSeparator_d1',
                    ze = 'App_descriptionWrapper_4a',
                    $e = 'App_separatorWrapper_a7',
                    Ve = 'App_separator_0f',
                    Ke = 'App_additionalWrapper_6a',
                    Ue = 'App_altShineCanvas_9e',
                    qe = 'App_altImage_21';
                var Ye;
                !(function (u) {
                    (u.Negative = 'negative'), (u.Positive = 'positive');
                })(Ye || (Ye = {}));
                const Qe = R.strings.tank_setup.tooltips.abilityTooltip,
                    Ze = R.strings.tank_setup.kpi.bonus,
                    Je = R.strings.common.common,
                    ut = R.images.gui.maps.icons.vehParams.small,
                    et = {
                        width: 50,
                        height: 45,
                        frameCount: 110,
                        chunk: { count: 1, rows: 10, columns: 11 },
                        getChunkPath:
                            ((tt = 'R.images.gui.maps.icons.sequence.altBtn_shine.sprite_'), (u) => `${tt}${u}`),
                    };
                var tt;
                const rt = (0, ce.Pi)(() => {
                    const u = fe().model.root.get(),
                        e = (function (u) {
                            const e = u.chunk,
                                t = e.rows * e.columns;
                            return (r) => {
                                const A = r % t,
                                    E = (A % e.columns) * u.width,
                                    F = Math.trunc(A / e.columns) * u.height;
                                return { path: u.getChunkPath(Math.trunc(r / t)), x: E, y: F };
                            };
                        })(et);
                    return Z().createElement(
                        'div',
                        { className: Me },
                        Z().createElement(
                            'div',
                            { className: Re },
                            Z().createElement(oe, { className: Te, text: u.userString }),
                            Z().createElement(oe, { className: He, text: Qe.subtitle() }),
                        ),
                        Z().createElement(
                            'div',
                            { className: Oe },
                            Z().createElement('div', {
                                className: Pe,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.roleSkills.c_180x180.$dyn(u.iconName)})`,
                                },
                            }),
                        ),
                        Z().createElement(
                            'div',
                            { className: Ne },
                            Z().createElement('div', { className: n()(We, Ie) }),
                            Z().createElement(oe, { className: je, text: Qe.statsTitle() }),
                            Z().createElement(
                                'div',
                                { className: ke },
                                Z().createElement(
                                    'div',
                                    null,
                                    Z().createElement(Le, {
                                        data: Z().createElement(oe, { text: String(u.reuseCount) }),
                                        image: ut.reuseCount(),
                                        description: Qe.abilityDescription.reuseCount(),
                                    }),
                                    Z().createElement(Le, {
                                        data: Z().createElement(oe, { text: String(u.duration) }),
                                        image: ut.duration(),
                                        description: Qe.abilityDescription.duration(),
                                    }),
                                    Z().createElement(Le, {
                                        data: Z().createElement(oe, { text: String(u.cooldown) }),
                                        image: ut.cooldown(),
                                        description: Qe.abilityDescription.cooldown(),
                                    }),
                                    Z().createElement('div', { className: Xe }),
                                    u.bonuses.items.map(({ value: u }) =>
                                        ((u) => {
                                            const e = u.values[0].value,
                                                t = e.value < 0 ? Ye.Negative : Ye.Positive,
                                                r = e.value > 0 ? Je.plus() : '',
                                                A = Ze.valueTypes.$dyn(e.valueKey) || Je.percent(),
                                                E = `${r}${e.value}${A}`,
                                                F = e.specValue > 0 ? Je.plus() : '',
                                                a = Ze.specValueTypes.$dyn(e.valueKey) || Je.percent(),
                                                n = 0 !== e.specValue ? `${F}${e.specValue}${a}` : '',
                                                D = `${E}${n && Je.slash() + n}`,
                                                i = Ze.$dyn(t),
                                                B = i ? i.$dyn(e.valueKey) : '';
                                            return Z().createElement(Le, {
                                                key: `abilityStatLLine_${e.valueKey}`,
                                                data: Z().createElement(oe, { text: D }),
                                                image: String(ut.$dyn(e.valueKey)),
                                                description: String(B),
                                            });
                                        })(u),
                                    ),
                                ),
                            ),
                            Z().createElement('div', { className: n()(We, Ge) }),
                        ),
                        Z().createElement(
                            'div',
                            { className: ze },
                            Z().createElement(oe, { className: He, text: u.description }),
                        ),
                        Z().createElement('div', { className: $e }, Z().createElement('div', { className: Ve })),
                        Z().createElement(
                            'div',
                            { className: Ke },
                            u.lightAdditional &&
                                Z().createElement(lu, {
                                    onAnimationDone: me,
                                    width: et.width,
                                    height: et.height,
                                    frameCount: et.frameCount,
                                    getImageSource: e,
                                    frameTime: 20,
                                    className: Ue,
                                }),
                            Z().createElement('div', { className: qe }),
                            Z().createElement(oe, { className: He, text: Qe.footer() }),
                        ),
                    );
                });
                engine.whenReady.then(() => {
                    Eu().render(
                        Z().createElement(xe, null, Z().createElement(ru, null, Z().createElement(rt, null))),
                        document.getElementById('root'),
                    );
                });
            },
        },
        t = {};
    function r(u) {
        var A = t[u];
        if (void 0 !== A) return A.exports;
        var E = (t[u] = { exports: {} });
        return e[u](E, E.exports, r), E.exports;
    }
    (r.m = e),
        (u = []),
        (r.O = (e, t, A, E) => {
            if (!t) {
                var F = 1 / 0;
                for (i = 0; i < u.length; i++) {
                    for (var [t, A, E] = u[i], a = !0, n = 0; n < t.length; n++)
                        (!1 & E || F >= E) && Object.keys(r.O).every((u) => r.O[u](t[n]))
                            ? t.splice(n--, 1)
                            : ((a = !1), E < F && (F = E));
                    if (a) {
                        u.splice(i--, 1);
                        var D = A();
                        void 0 !== D && (e = D);
                    }
                }
                return e;
            }
            E = E || 0;
            for (var i = u.length; i > 0 && u[i - 1][2] > E; i--) u[i] = u[i - 1];
            u[i] = [t, A, E];
        }),
        (r.n = (u) => {
            var e = u && u.__esModule ? () => u.default : () => u;
            return r.d(e, { a: e }), e;
        }),
        (r.d = (u, e) => {
            for (var t in e) r.o(e, t) && !r.o(u, t) && Object.defineProperty(u, t, { enumerable: !0, get: e[t] });
        }),
        (r.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (u) {
                if ('object' == typeof window) return window;
            }
        })()),
        (r.o = (u, e) => Object.prototype.hasOwnProperty.call(u, e)),
        (r.r = (u) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(u, '__esModule', { value: !0 });
        }),
        (r.j = 931),
        (() => {
            var u = { 931: 0 };
            r.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var A,
                        E,
                        [F, a, n] = t,
                        D = 0;
                    if (F.some((e) => 0 !== u[e])) {
                        for (A in a) r.o(a, A) && (r.m[A] = a[A]);
                        if (n) var i = n(r);
                    }
                    for (e && e(t); D < F.length; D++) (E = F[D]), r.o(u, E) && u[E] && u[E][0](), (u[E] = 0);
                    return r.O(i);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var A = r.O(void 0, [727], () => r(1667));
    A = r.O(A);
})();
