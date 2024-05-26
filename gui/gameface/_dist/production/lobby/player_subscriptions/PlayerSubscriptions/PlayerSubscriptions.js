(() => {
    var __webpack_modules__ = {
            495: (u, e, t) => {
                'use strict';
                t.d(e, { Y: () => E });
                var r = t(67),
                    n = t(179),
                    i = t(43),
                    a = t(262);
                const s = r.O.client.getSize('rem'),
                    o = s.width,
                    c = s.height,
                    l = Object.assign({ width: o, height: c }, (0, a.T)(o, c, i.j)),
                    E = (0, n.createContext)(l);
            },
            39: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => l });
                var r = t(179),
                    n = t.n(r),
                    i = t(536),
                    a = t(495),
                    s = t(43),
                    o = t(262),
                    c = t(67);
                const l = (0, r.memo)(({ children: u }) => {
                    const e = (0, r.useContext)(a.Y),
                        t = (0, r.useState)(e),
                        l = t[0],
                        E = t[1],
                        A = (0, r.useCallback)((u, e) => {
                            const t = c.O.view.pxToRem(u),
                                r = c.O.view.pxToRem(e);
                            E(Object.assign({ width: t, height: r }, (0, o.T)(t, r, s.j)));
                        }, []);
                    (0, i.Z)(() => {
                        engine.on('clientResized', A);
                    }),
                        (0, r.useEffect)(() => () => engine.off('clientResized', A), [A]);
                    const F = (0, r.useMemo)(() => Object.assign({}, l), [l]);
                    return n().createElement(a.Y.Provider, { value: F }, u);
                });
            },
            10: (u, e, t) => {
                'use strict';
                var r = t(179),
                    n = t(382),
                    i = t(495);
                const a = ['children'];
                const s = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                n = {},
                                i = Object.keys(u);
                            for (r = 0; r < i.length; r++) (t = i[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                            return n;
                        })(u, a);
                    const s = (0, r.useContext)(i.Y),
                        o = s.extraLarge,
                        c = s.large,
                        l = s.medium,
                        E = s.small,
                        A = s.extraSmall,
                        F = s.extraLargeWidth,
                        _ = s.largeWidth,
                        m = s.mediumWidth,
                        D = s.smallWidth,
                        d = s.extraSmallWidth,
                        B = s.extraLargeHeight,
                        C = s.largeHeight,
                        p = s.mediumHeight,
                        g = s.smallHeight,
                        h = s.extraSmallHeight,
                        b = { extraLarge: B, large: C, medium: p, small: g, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && o) return e;
                        if (t.large && c) return e;
                        if (t.medium && l) return e;
                        if (t.small && E) return e;
                        if (t.extraSmall && A) return e;
                    } else {
                        if (t.extraLargeWidth && F) return (0, n.H)(e, t, b);
                        if (t.largeWidth && _) return (0, n.H)(e, t, b);
                        if (t.mediumWidth && m) return (0, n.H)(e, t, b);
                        if (t.smallWidth && D) return (0, n.H)(e, t, b);
                        if (t.extraSmallWidth && d) return (0, n.H)(e, t, b);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && B) return e;
                            if (t.largeHeight && C) return e;
                            if (t.mediumHeight && p) return e;
                            if (t.smallHeight && g) return e;
                            if (t.extraSmallHeight && h) return e;
                        }
                    }
                    return null;
                };
                s.defaultProps = {
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
                (0, r.memo)(s);
            },
            382: (u, e, t) => {
                'use strict';
                t.d(e, { H: () => r });
                const r = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
            },
            739: (u, e, t) => {
                'use strict';
                t.d(e, { YN: () => n.Y, ZN: () => r.Z });
                t(10);
                var r = t(39),
                    n = t(495);
            },
            43: (u, e, t) => {
                'use strict';
                t.d(e, { j: () => r });
                const r = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            262: (u, e, t) => {
                'use strict';
                var r;
                function n(u, e, t) {
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
                        n = (function (u, e) {
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
                        i = Math.min(r, n);
                    return {
                        extraLarge: i === t.extraLarge.weight,
                        large: i === t.large.weight,
                        medium: i === t.medium.weight,
                        small: i === t.small.weight,
                        extraSmall: i === t.extraSmall.weight,
                        extraLargeWidth: r === t.extraLarge.weight,
                        largeWidth: r === t.large.weight,
                        mediumWidth: r === t.medium.weight,
                        smallWidth: r === t.small.weight,
                        extraSmallWidth: r === t.extraSmall.weight,
                        extraLargeHeight: n === t.extraLarge.weight,
                        largeHeight: n === t.large.weight,
                        mediumHeight: n === t.medium.weight,
                        smallHeight: n === t.small.weight,
                        extraSmallHeight: n === t.extraSmall.weight,
                    };
                }
                t.d(e, { T: () => n }),
                    (function (u) {
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
                    })(r || (r = {}));
            },
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
            532: (u) => {
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
            887: (u) => {
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
            44: (u, e, t) => {
                'use strict';
                t.d(e, { e1: () => E, f8: () => l, s_: () => a, wB: () => A, yR: () => s });
                var r = t(649),
                    n = t(728),
                    i = t(364);
                const a = 1e3,
                    s = 60,
                    o = 60 * s,
                    c = 24 * o;
                Date.now();
                function l(u = 0) {
                    let e = u;
                    const t = Math.trunc(e / c);
                    e -= t * c;
                    const r = Math.trunc(e / o);
                    e -= r * o;
                    const n = Math.trunc(e / s);
                    return (e -= n * s), { days: t, hours: r, minutes: n, seconds: e };
                }
                const E = (u, e, t) => {
                        switch (e) {
                            case n.U.SHORT_DATE:
                                return t
                                    ? i.Z5.getDateFormat(u, i.kH.SHORT_FORMAT)
                                    : i.cy.getTimeFormat('%d.%m.%y', u, !0);
                            case n.U.SHORT_TIME:
                                return t
                                    ? i.Z5.getTimeFormat(u, i.lf.SHORT_FORMAT)
                                    : i.cy.getTimeFormat('%I:%M %p', u, !0);
                            case n.U.SHORT_DATE_TIME:
                                if (t) {
                                    return `${i.Z5.getDateFormat(u, i.kH.SHORT_FORMAT)}, ${i.Z5.getTimeFormat(u, i.lf.SHORT_FORMAT)}`;
                                }
                                return i.cy.getTimeFormat('%d.%m.%y, %I:%M %p', u, !0);
                            case n.U.FULL_DATE:
                                return t
                                    ? i.Z5.getDateFormat(u, i.kH.LONG_FORMAT)
                                    : i.cy.getTimeFormat('%B %d, %Y', u, !0);
                            case n.U.FULL_DATE_TIME:
                                if (t) {
                                    return `${i.Z5.getDateFormat(u, i.kH.LONG_FORMAT)}, ${i.Z5.getTimeFormat(u, i.lf.SHORT_FORMAT)}`;
                                }
                                return i.cy.getTimeFormat('%B %d, %Y, %I:%M %p', u, !0);
                            case n.U.MONTH:
                                return i.cy.getTimeFormat('%B', u, !0);
                            case n.U.MONTH_DATE:
                                return i.cy.getTimeFormat('%B %e', u, !0);
                            case n.U.DATE_MONTH:
                                return i.cy.getTimeFormat('%e %B', u, !0);
                            case n.U.MONTH_YEAR:
                                return i.cy.getTimeFormat('%B %Y', u, !0);
                            case n.U.WEEK_DAY:
                                return i.cy.getTimeFormat('%A', u, !0);
                            case n.U.WEEK_DAY_TIME:
                                if (t) {
                                    return `${i.cy.getTimeFormat('%A', u, !0)} ${i.Z5.getTimeFormat(u, i.lf.SHORT_FORMAT)}`;
                                }
                                return i.cy.getTimeFormat('%A, %I:%M %p', u, !0);
                            case n.U.YEAR:
                                return i.cy.getTimeFormat('%Y', u, !0);
                            case n.U.DATE_YEAR:
                                return i.cy.getTimeFormat('%d, %Y', u, !0);
                        }
                    },
                    A = (u, e = !0) =>
                        u.days > 7 && e
                            ? (0, r.WU)(R.strings.common.duration.days(), { days: u.days })
                            : u.days >= 1
                              ? 0 === u.hours
                                  ? (0, r.WU)(R.strings.common.duration.days(), { days: u.days })
                                  : `${(0, r.WU)(R.strings.common.duration.days(), { days: u.days })} ${(0, r.WU)(R.strings.common.duration.hours(), { hours: u.hours })}`
                              : u.hours >= 1
                                ? 0 === u.minutes
                                    ? (0, r.WU)(R.strings.common.duration.hours(), { hours: u.hours })
                                    : `${(0, r.WU)(R.strings.common.duration.hours(), { hours: u.hours })} ${(0, r.WU)(R.strings.common.duration.minutes(), { minutes: u.minutes })}`
                                : (0, r.WU)(R.strings.common.duration.minutes(), { minutes: u.minutes || 1 });
            },
            67: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => X });
                var r = {};
                t.r(r), t.d(r, { mouse: () => E, onResize: () => c });
                var n = {};
                t.r(n),
                    t.d(n, {
                        events: () => r,
                        getMouseGlobalPosition: () => F,
                        getSize: () => A,
                        graphicsQuality: () => _,
                    });
                var i = {};
                t.r(i), t.d(i, { getBgUrl: () => D, getTextureUrl: () => m });
                var a = {};
                function s(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                function o(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => x,
                        addPreloadTexture: () => w,
                        children: () => i,
                        displayStatus: () => d,
                        displayStatusIs: () => $,
                        events: () => B,
                        extraSize: () => z,
                        forceTriggerMouseMove: () => G,
                        freezeTextureBeforeResize: () => O,
                        getBrowserTexturePath: () => T,
                        getDisplayStatus: () => j,
                        getScale: () => H,
                        getSize: () => y,
                        getViewGlobalPosition: () => R,
                        isEventHandled: () => U,
                        isFocused: () => I,
                        pxToRem: () => N,
                        remToPx: () => k,
                        resize: () => L,
                        sendEvent: () => f,
                        setAnimateWindow: () => P,
                        setEventHandled: () => W,
                        setInputPaddingsRem: () => S,
                        setSidePaddingsRem: () => M,
                        whenTutorialReady: () => Y,
                    });
                const c = s('clientResized'),
                    l = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const E = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && o(!1);
                    }
                    function t() {
                        u.enabled && o(!0);
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
                            : o(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let n = !0;
                                    const i = `mouse${e}`,
                                        a = l[e]((u) => t([u, 'outside']));
                                    function s(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        r(),
                                        () => {
                                            n &&
                                                (a(),
                                                window.removeEventListener(i, s),
                                                (u.listeners -= 1),
                                                r(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(t)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, n, {
                        disable() {
                            (u.enabled = !1), r();
                        },
                        enable() {
                            (u.enabled = !0), r();
                        },
                        enableOutside() {
                            u.enabled && o(!0);
                        },
                        disableOutside() {
                            u.enabled && o(!1);
                        },
                    });
                })();
                function A(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function F(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const _ = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function m(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function D(u, e, t) {
                    return `url(${m(u, e, t)})`;
                }
                const d = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    B = {
                        onTextureFrozen: s('self.onTextureFrozen'),
                        onTextureReady: s('self.onTextureReady'),
                        onDomBuilt: s('self.onDomBuilt'),
                        onLoaded: s('self.onLoaded'),
                        onDisplayChanged: s('self.onShowingStatusChanged'),
                        onFocusUpdated: s('self.onFocusChanged'),
                        children: {
                            onAdded: s('children.onAdded'),
                            onLoaded: s('children.onLoaded'),
                            onRemoved: s('children.onRemoved'),
                            onAttached: s('children.onAttached'),
                            onTextureReady: s('children.onTextureReady'),
                            onRequestPosition: s('children.requestPosition'),
                        },
                    },
                    C = ['args'];
                const p = 2,
                    g = 16,
                    h = 32,
                    b = 64,
                    v = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        i = Object.keys(u);
                                    for (r = 0; r < i.length; r++) (t = i[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                    return n;
                                })(e, C);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((r = n),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    f = {
                        close(u) {
                            v('popover' === u ? p : h);
                        },
                        minimize() {
                            v(b);
                        },
                        move(u) {
                            v(g, { isMouseEvent: !0, on: u });
                        },
                    };
                function w(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function S(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function T(u, e, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, r);
                }
                function x(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function M(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function y(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function L(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function R(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: k(e.x), y: k(e.y) };
                }
                function O() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function H() {
                    return viewEnv.getScale();
                }
                function N(u) {
                    return viewEnv.pxToRem(u);
                }
                function k(u) {
                    return viewEnv.remToPx(u);
                }
                function P(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function I() {
                    return viewEnv.isFocused();
                }
                function W() {
                    return viewEnv.setEventHandled();
                }
                function U() {
                    return viewEnv.isEventHandled();
                }
                function G() {
                    viewEnv.forceTriggerMouseMove();
                }
                function j() {
                    return viewEnv.getShowingStatus();
                }
                const $ = Object.keys(d).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === d[e]), u), {}),
                    z = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    Y = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : B.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    X = { view: a, client: n };
            },
            902: (u, e, t) => {
                'use strict';
                t.d(e, { F: () => r });
                const r = (u = 1) => {
                    const e = new Error().stack;
                    let t,
                        r = R.invalid('resId');
                    return (
                        e &&
                            ((t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (r = window.subViews[t].id)),
                        { caller: t, stack: e, resId: r }
                    );
                };
            },
            71: (u, e, t) => {
                'use strict';
                t.d(e, { M: () => r });
                const r = (u, e) => u.split('.').reduce((u, e) => u && u[e], e);
            },
            344: (u, e, t) => {
                'use strict';
                t.d(e, { DA: () => n.D, au: () => i, tT: () => n.t });
                t(790);
                var r = t(469),
                    n = (t(133), t(579), t(360));
                t(56);
                const i = r.Z;
            },
            536: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => n });
                var r = t(179);
                const n = (u) => {
                    const e = (0, r.useRef)(!1);
                    e.current || (u(), (e.current = !0));
                };
            },
            469: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => a });
                var r = t(44),
                    n = t(179);
                const i = () => {},
                    a = (u = 0, e, t = 0, a = i) => {
                        const s = (0, n.useState)(u),
                            o = s[0],
                            c = s[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (u > 0) {
                                    c(u);
                                    const n = Date.now(),
                                        i = e || (u > 2 * r.yR ? r.yR : 1),
                                        s = setInterval(() => {
                                            const e = u - Math.floor((Date.now() - n) / r.s_);
                                            null !== t && e <= t ? (c(t), a && a(), clearInterval(s)) : c(e);
                                        }, i * r.s_);
                                    return () => {
                                        clearInterval(s);
                                    };
                                }
                            }, [u, e, t, a]),
                            o
                        );
                    };
            },
            133: (u, e, t) => {
                'use strict';
                t(179);
            },
            415: (u, e, t) => {
                'use strict';
                t.d(e, { Aq: () => o, GS: () => c, cJ: () => a, fd: () => s });
                var r = t(179),
                    n = t(739),
                    i = t(43);
                let a, s, o;
                !(function (u) {
                    (u[(u.ExtraSmall = i.j.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = i.j.small.width)] = 'Small'),
                        (u[(u.Medium = i.j.medium.width)] = 'Medium'),
                        (u[(u.Large = i.j.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = i.j.extraLarge.width)] = 'ExtraLarge');
                })(a || (a = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = i.j.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = i.j.small.width)] = 'Small'),
                            (u[(u.Medium = i.j.medium.width)] = 'Medium'),
                            (u[(u.Large = i.j.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = i.j.extraLarge.width)] = 'ExtraLarge');
                    })(s || (s = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = i.j.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = i.j.small.height)] = 'Small'),
                            (u[(u.Medium = i.j.medium.height)] = 'Medium'),
                            (u[(u.Large = i.j.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = i.j.extraLarge.height)] = 'ExtraLarge');
                    })(o || (o = {}));
                const c = () => {
                    const u = (0, r.useContext)(n.YN),
                        e = u.width,
                        t = u.height,
                        i = ((u) => {
                            switch (!0) {
                                case u.extraLarge:
                                    return a.ExtraLarge;
                                case u.large:
                                    return a.Large;
                                case u.medium:
                                    return a.Medium;
                                case u.small:
                                    return a.Small;
                                case u.extraSmall:
                                    return a.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), a.ExtraSmall;
                            }
                        })(u),
                        c = ((u) => {
                            switch (!0) {
                                case u.extraLargeWidth:
                                    return s.ExtraLarge;
                                case u.largeWidth:
                                    return s.Large;
                                case u.mediumWidth:
                                    return s.Medium;
                                case u.smallWidth:
                                    return s.Small;
                                case u.extraSmallWidth:
                                    return s.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), s.ExtraSmall;
                            }
                        })(u),
                        l = ((u) => {
                            switch (!0) {
                                case u.extraLargeHeight:
                                    return o.ExtraLarge;
                                case u.largeHeight:
                                    return o.Large;
                                case u.mediumHeight:
                                    return o.Medium;
                                case u.smallHeight:
                                    return o.Small;
                                case u.extraSmallHeight:
                                    return o.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), o.ExtraSmall;
                            }
                        })(u);
                    return { mediaSize: i, mediaWidth: c, mediaHeight: l, remScreenWidth: e, remScreenHeight: t };
                };
            },
            360: (u, e, t) => {
                'use strict';
                t.d(e, { D: () => l, t: () => E });
                var r = t(902),
                    n = t(71),
                    i = t(536),
                    a = t(364),
                    s = t(332),
                    o = t(179);
                const c = a.Sw.instance;
                let l;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(l || (l = {}));
                const E = (u = 'model', e = l.Deep) => {
                    const t = (0, o.useState)(0),
                        a = (t[0], t[1]),
                        E = (0, o.useMemo)(() => (0, r.F)(), []),
                        A = E.caller,
                        F = E.resId,
                        _ = (0, o.useMemo)(
                            () => (window.__feature && window.__feature !== A ? `subViews.${A}.${u}` : u),
                            [A, u],
                        ),
                        m = (0, o.useState)(() =>
                            ((u) => {
                                const e = (0, n.M)(u, window);
                                for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                return (0, s.os)(e) ? e.value : e;
                            })((0, s.Gd)(_)),
                        ),
                        D = m[0],
                        d = m[1],
                        B = (0, o.useRef)(-1);
                    return (
                        (0, i.Z)(() => {
                            if (
                                ('boolean' == typeof e &&
                                    ((e = e ? l.Deep : l.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                e !== l.None)
                            ) {
                                const t = (u) => {
                                        (0, s.kJ)(u) && e === l.Deep
                                            ? (u === D && a((u) => u + 1), d(u))
                                            : d(Object.assign([], u));
                                    },
                                    r = (0, s.U0)(u);
                                B.current = c.addCallback(r, t, F, e === l.Deep);
                            }
                        }),
                        (0, o.useEffect)(() => {
                            if (e !== l.None)
                                return () => {
                                    c.removeCallback(B.current, F);
                                };
                        }, [F, e]),
                        D
                    );
                };
            },
            56: (u, e, t) => {
                'use strict';
                var r = t(364);
                t(179);
                r.Sw.instance;
            },
            790: (u, e, t) => {
                'use strict';
                t(179);
            },
            579: (u, e, t) => {
                'use strict';
                t(67), t(179);
            },
            521: (u, e, t) => {
                'use strict';
                let r, n;
                t.d(e, { n: () => r }),
                    (function (u) {
                        (u[(u.NONE = -1)] = 'NONE'),
                            (u[(u.ALT = 165)] = 'ALT'),
                            (u[(u.ENTER = 13)] = 'ENTER'),
                            (u[(u.ESCAPE = 27)] = 'ESCAPE'),
                            (u[(u.SPACE = 32)] = 'SPACE'),
                            (u[(u.END = 35)] = 'END'),
                            (u[(u.HOME = 36)] = 'HOME'),
                            (u[(u.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
                            (u[(u.ARROW_UP = 38)] = 'ARROW_UP'),
                            (u[(u.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
                            (u[(u.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
                            (u[(u.NUM_PLUS = 107)] = 'NUM_PLUS'),
                            (u[(u.NUM_MINUS = 109)] = 'NUM_MINUS'),
                            (u[(u.PLUS = 187)] = 'PLUS'),
                            (u[(u.MINUS = 189)] = 'MINUS'),
                            (u[(u.PAGE_UP = 33)] = 'PAGE_UP'),
                            (u[(u.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
                            (u[(u.BACKSPACE = 8)] = 'BACKSPACE'),
                            (u[(u.DELETE = 46)] = 'DELETE'),
                            (u[(u.TAB = 9)] = 'TAB'),
                            (u[(u.KEY_N = 78)] = 'KEY_N'),
                            (u[(u.KEY_1 = 49)] = 'KEY_1'),
                            (u[(u.KEY_2 = 50)] = 'KEY_2'),
                            (u[(u.KEY_3 = 51)] = 'KEY_3'),
                            (u[(u.KEY_4 = 52)] = 'KEY_4'),
                            (u[(u.KEY_5 = 53)] = 'KEY_5'),
                            (u[(u.KEY_6 = 54)] = 'KEY_6'),
                            (u[(u.KEY_7 = 55)] = 'KEY_7'),
                            (u[(u.KEY_8 = 56)] = 'KEY_8'),
                            (u[(u.KEY_9 = 57)] = 'KEY_9'),
                            (u[(u.CAPS_LOCK = 20)] = 'CAPS_LOCK'),
                            (u[(u.INSERT = 45)] = 'INSERT'),
                            (u[(u.F1 = 112)] = 'F1'),
                            (u[(u.F2 = 113)] = 'F2'),
                            (u[(u.F3 = 114)] = 'F3'),
                            (u[(u.F4 = 115)] = 'F4'),
                            (u[(u.F5 = 116)] = 'F5'),
                            (u[(u.F6 = 117)] = 'F6'),
                            (u[(u.F7 = 118)] = 'F7'),
                            (u[(u.F8 = 119)] = 'F8'),
                            (u[(u.F9 = 120)] = 'F9'),
                            (u[(u.F10 = 121)] = 'F10'),
                            (u[(u.F11 = 122)] = 'F11'),
                            (u[(u.F12 = 123)] = 'F12'),
                            (u[(u.SELECT = 93)] = 'SELECT'),
                            (u[(u.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                            (u[(u.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                            (u[(u.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                            (u[(u.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                            (u[(u.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                            (u[(u.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                            (u[(u.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                            (u[(u.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                            (u[(u.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                            (u[(u.NUMPAD_9 = 105)] = 'NUMPAD_9'),
                            (u[(u.NUM_DECIMAL = 110)] = 'NUM_DECIMAL'),
                            (u[(u.STAR = 106)] = 'STAR'),
                            (u[(u.NUM_SLASH = 111)] = 'NUM_SLASH'),
                            (u[(u.FORWARD_SLASH = 191)] = 'FORWARD_SLASH'),
                            (u[(u.COMMA = 188)] = 'COMMA'),
                            (u[(u.DASH = 189)] = 'DASH'),
                            (u[(u.PERIOD = 190)] = 'PERIOD');
                    })(r || (r = {})),
                    (function (u) {
                        (u.ALT = 'Alt'),
                            (u.ALT_GRAPH = 'AltGraph'),
                            (u.CAPS_LOCK = 'CapsLock'),
                            (u.CONTROL = 'Control'),
                            (u.FN = 'Fn'),
                            (u.FN_LOCK = 'FnLock'),
                            (u.META = 'Meta'),
                            (u.NUM_LOCK = 'NumLock'),
                            (u.SCROLL_LOCK = 'ScrollLock'),
                            (u.SHIFT = 'Shift'),
                            (u.SYMBOL = 'Symbol'),
                            (u.SYMBOL_LOCK = 'SymbolLock');
                    })(n || (n = {}));
            },
            727: (u, e, t) => {
                'use strict';
                function r(u) {
                    engine.call('PlaySound', u);
                }
                t.d(e, { G: () => r });
            },
            649: (u, e, t) => {
                'use strict';
                let r;
                function n(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                t.d(e, { Uw: () => E, WU: () => n, v2: () => r }),
                    (function (u) {
                        (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                    })(r || (r = {}));
                const i = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    a = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    s = (u, e, t = r.left) => u.split(e).reduce(t === r.left ? i : a, []),
                    o = (() => {
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
                    c = ['zh_cn', 'zh_sg', 'zh_tw'],
                    l = (u, e = r.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return c.includes(t)
                            ? o(u)
                            : ((u, e = r.left) => {
                                  let t = [];
                                  const n =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      i = u.replace(/&nbsp;/g, ' ');
                                  return s(i, /( )/, e).forEach((u) => (t = t.concat(s(u, n, r.left)))), t;
                              })(u, e);
                    },
                    E = (u, e, t) => u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : l(u, e)));
            },
            728: (u, e, t) => {
                'use strict';
                let r;
                t.d(e, { U: () => r }),
                    (function (u) {
                        (u.SHORT_DATE = 'short-date'),
                            (u.SHORT_TIME = 'short-time'),
                            (u.SHORT_DATE_TIME = 'short-date-time'),
                            (u.FULL_DATE = 'full-date'),
                            (u.FULL_DATE_TIME = 'full-date-time'),
                            (u.MONTH = 'month'),
                            (u.MONTH_DATE = 'month-date'),
                            (u.DATE_MONTH = 'date-month'),
                            (u.MONTH_YEAR = 'month-year'),
                            (u.WEEK_DAY = 'week-day'),
                            (u.WEEK_DAY_TIME = 'week-day-time'),
                            (u.YEAR = 'year'),
                            (u.DATE_YEAR = 'date-year');
                    })(r || (r = {}));
            },
            358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => i });
                var r = t(67);
                class n {
                    constructor() {
                        (this._callbacks = void 0),
                            (this._updateHandler = void 0),
                            (this._views = void 0),
                            (this.clearViewCallbacks = (u) => {
                                this._views[u] &&
                                    (this._views[u].forEach((u) => {
                                        delete this._callbacks[u];
                                    }),
                                    delete this._views[u]);
                            }),
                            (this._callbacks = {}),
                            (this._views = {}),
                            (this._updateHandler = void 0);
                    }
                    static get instance() {
                        return window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(u, e, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = r.O.view.addModelObserver(u, t, n);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(i) : (this._views[t] = [i])))
                                : console.error("Can't add callback for model:", u),
                            i
                        );
                    }
                    removeCallback(u, e = 0) {
                        let t = !1;
                        return (
                            void 0 !== u &&
                                void 0 !== this._callbacks[u] &&
                                ((t = viewEnv.removeDataChangedCallback(u, e)), delete this._callbacks[u]),
                            t || console.error("Can't remove callback by id:", u),
                            t
                        );
                    }
                    _emmitDataChanged(u, e, t) {
                        t.forEach((t) => {
                            const r = this._callbacks[t];
                            void 0 !== r && r(u, e);
                        });
                    }
                }
                n.__instance = void 0;
                const i = n;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(364);
                class ViewModel {
                    constructor(path, watchingFields = []) {
                        (this.dataTracker = void 0),
                            (this.modelPath = void 0),
                            (this.callbacks = void 0),
                            (this.data = void 0),
                            (this._notifyObservers = () => {
                                (this.data = eval(this.modelPath)),
                                    this.callbacks.forEach((u) => {
                                        u(this.data);
                                    });
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                this._addCallback(path),
                                    watchingFields.forEach((u) => {
                                        this._addCallback(path + '.' + u);
                                    }),
                                    this._notifyObservers();
                            });
                    }
                    subscribe(u) {
                        this.callbacks.add(u), null !== this.data && void 0 !== this.data && u(this.data);
                    }
                    unsubscribe(u) {
                        this.callbacks.delete(u);
                    }
                    destroy() {
                        this.dataTracker.clear(), this.callbacks.clear();
                    }
                    _addCallback(u) {
                        this.dataTracker.addCallback(u, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            364: (u, e, t) => {
                'use strict';
                t.d(e, { Sw: () => i.Z, kH: () => A, Z5: () => a, lf: () => E, cy: () => s, ry: () => B });
                class r {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let r = u.target;
                                    do {
                                        if (r === e) return;
                                        r = r.parentNode;
                                    } while (r);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return r.__instance || (r.__instance = new r()), r.__instance;
                    }
                    register(u, e) {
                        this.addMouseListener(), this.entries.push({ container: u, callback: e });
                    }
                    unregister(u, e) {
                        const t = u,
                            r = e;
                        (this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== r)),
                            this.removeMouseListener();
                    }
                    addMouseListener() {
                        this._listenMouse ||
                            (document.addEventListener('mousedown', this.onMouseDown), (this._listenMouse = !0));
                    }
                    removeMouseListener() {
                        this._listenMouse &&
                            0 === this.entries.length &&
                            (document.removeEventListener('mousedown', this.onMouseDown), (this._listenMouse = !1));
                    }
                }
                r.__instance = void 0;
                const n = r;
                var i = t(358);
                const a = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    s = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    };
                let o;
                !(function (u) {
                    (u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                        (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                        (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                        (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (u[(u.MOVE = 16)] = 'MOVE'),
                        (u[(u.CLOSE = 32)] = 'CLOSE'),
                        (u[(u.MINIMIZE = 64)] = 'MINIMIZE');
                })(o || (o = {}));
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var F = t(521),
                    _ = t(67);
                const m = ['args'];
                function D(u, e, t, r, n, i, a) {
                    try {
                        var s = u[i](a),
                            o = s.value;
                    } catch (u) {
                        return void t(u);
                    }
                    s.done ? e(o) : Promise.resolve(o).then(r, n);
                }
                const d = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    B = (function () {
                        var u,
                            e =
                                ((u = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((u) => {
                                            engine.on('Ready', u);
                                        })
                                    );
                                }),
                                function () {
                                    var e = this,
                                        t = arguments;
                                    return new Promise(function (r, n) {
                                        var i = u.apply(e, t);
                                        function a(u) {
                                            D(i, r, n, a, s, 'next', u);
                                        }
                                        function s(u) {
                                            D(i, r, n, a, s, 'throw', u);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    C = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        i = Object.keys(u);
                                    for (r = 0; r < i.length; r++) (t = i[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                    return n;
                                })(e, m);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([u, e]) => {
                                                  const t = { __Type: 'GFValueProxy', name: u };
                                                  switch (typeof e) {
                                                      case 'number':
                                                          t.number = e;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = e;
                                                          break;
                                                      default:
                                                          t.string = e.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, i));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    p = () => C(o.CLOSE),
                    g = (u, e) => {
                        u.keyCode === F.n.ESCAPE && e();
                    };
                var h = t(572);
                const b = n.instance,
                    v = {
                        DataTracker: i.Z,
                        ViewModel: h.Z,
                        ViewEventType: o,
                        NumberFormatType: c,
                        RealFormatType: l,
                        TimeFormatType: E,
                        DateFormatType: A,
                        makeGlobalBoundingBox: d,
                        sendMoveEvent: (u) => C(o.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => C(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            C(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, r, n = R.invalid('resId'), i) => {
                            const a = _.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                c = s.x,
                                l = s.y,
                                E = s.width,
                                A = s.height,
                                F = {
                                    x: _.O.view.pxToRem(c) + a.x,
                                    y: _.O.view.pxToRem(l) + a.y,
                                    width: _.O.view.pxToRem(E),
                                    height: _.O.view.pxToRem(A),
                                };
                            C(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: e,
                                bbox: d(F),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => g(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            g(u, p);
                        },
                        handleViewEvent: C,
                        onBindingsReady: B,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const r in e)
                                if (Object.prototype.hasOwnProperty.call(e, r)) {
                                    const n = Object.prototype.toString.call(e[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = e[r];
                                        t[r] = [];
                                        for (let e = 0; e < n.length; e++) t[r].push({ value: u(n[e].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = u(e[r]))
                                            : (t[r] = e[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: b,
                        SystemLocale: a,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = v;
            },
            332: (u, e, t) => {
                'use strict';
                t.d(e, { Gd: () => o, U0: () => c, kJ: () => a, os: () => i });
                var r = t(902),
                    n = t(71);
                const i = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    a = (u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name,
                    s = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    o = (u) =>
                        ((u, e) =>
                            u.split('.').reduce((u, t) => {
                                const r = (0, n.M)(`${u}.${t}`, window);
                                return i(r) ? e(u, t, r) : `${u}.${t}`;
                            }))(u, (u, e) => `${u}.${e}.value`),
                    c = (u) => {
                        const e = ((u) => {
                                const e = (0, r.F)(),
                                    t = e.caller,
                                    n = e.resId,
                                    i = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: i, modelPath: s(i, u || ''), resId: n };
                            })(),
                            t = e.modelPrefix,
                            a = u.split('.');
                        if (a.length > 0) {
                            const u = [a[0]];
                            return (
                                a.reduce((e, r) => {
                                    const a = (0, n.M)(s(t, `${e}.${r}`), window);
                                    return i(a) ? (u.push(a.id), `${e}.${r}.value`) : (u.push(r), `${e}.${r}`);
                                }),
                                u.reduce((u, e) => u + '.' + e)
                            );
                        }
                        return '';
                    };
            },
            321: (u, e, t) => {
                'use strict';
                var r = t(739),
                    n = t(179),
                    i = t.n(n),
                    a = t(483),
                    s = t.n(a),
                    o = t(926),
                    c = t.n(o),
                    l = t(415);
                const E = ['children', 'className'];
                function A() {
                    return (
                        (A =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        A.apply(this, arguments)
                    );
                }
                const F = {
                        [l.fd.ExtraSmall]: '',
                        [l.fd.Small]: c().SMALL_WIDTH,
                        [l.fd.Medium]: `${c().SMALL_WIDTH} ${c().MEDIUM_WIDTH}`,
                        [l.fd.Large]: `${c().SMALL_WIDTH} ${c().MEDIUM_WIDTH} ${c().LARGE_WIDTH}`,
                        [l.fd.ExtraLarge]:
                            `${c().SMALL_WIDTH} ${c().MEDIUM_WIDTH} ${c().LARGE_WIDTH} ${c().EXTRA_LARGE_WIDTH}`,
                    },
                    _ = {
                        [l.Aq.ExtraSmall]: '',
                        [l.Aq.Small]: c().SMALL_HEIGHT,
                        [l.Aq.Medium]: `${c().SMALL_HEIGHT} ${c().MEDIUM_HEIGHT}`,
                        [l.Aq.Large]: `${c().SMALL_HEIGHT} ${c().MEDIUM_HEIGHT} ${c().LARGE_HEIGHT}`,
                        [l.Aq.ExtraLarge]:
                            `${c().SMALL_HEIGHT} ${c().MEDIUM_HEIGHT} ${c().LARGE_HEIGHT} ${c().EXTRA_LARGE_HEIGHT}`,
                    },
                    m = {
                        [l.cJ.ExtraSmall]: '',
                        [l.cJ.Small]: c().SMALL,
                        [l.cJ.Medium]: `${c().SMALL} ${c().MEDIUM}`,
                        [l.cJ.Large]: `${c().SMALL} ${c().MEDIUM} ${c().LARGE}`,
                        [l.cJ.ExtraLarge]: `${c().SMALL} ${c().MEDIUM} ${c().LARGE} ${c().EXTRA_LARGE}`,
                    },
                    D = (u) => {
                        let e = u.children,
                            t = u.className,
                            r = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    i = Object.keys(u);
                                for (r = 0; r < i.length; r++) (t = i[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, E);
                        const n = (0, l.GS)(),
                            a = n.mediaWidth,
                            o = n.mediaHeight,
                            c = n.mediaSize;
                        return i().createElement('div', A({ className: s()(t, F[a], _[o], m[c]) }, r), e);
                    },
                    d = ['children'];
                const B = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                n = {},
                                i = Object.keys(u);
                            for (r = 0; r < i.length; r++) (t = i[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                            return n;
                        })(u, d);
                    return i().createElement(r.ZN, null, i().createElement(D, t, e));
                };
                var C = t(493),
                    p = t.n(C);
                const g = (u, e, t) => (t < u ? u : t > e ? e : t),
                    h = (u) => {
                        let e,
                            t = null;
                        return (
                            (t = requestAnimationFrame(() => {
                                t = requestAnimationFrame(() => {
                                    (t = null), (e = u());
                                });
                            })),
                            () => {
                                'function' == typeof e && e(), null !== t && cancelAnimationFrame(t);
                            }
                        );
                    };
                var b = t(67);
                function v(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return f(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return f(u, e);
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
                function f(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, r = new Array(e); t < e; t++) r[t] = u[t];
                    return r;
                }
                const w = [];
                function S(u) {
                    const e = (0, n.useRef)(u);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            e.current = u;
                        }),
                        (0, n.useCallback)((...u) => (0, e.current)(...u), w)
                    );
                }
                function T(u, e, t) {
                    const r = (0, n.useMemo)(
                        () =>
                            (function (u, e, t, r) {
                                let n,
                                    i = !1,
                                    a = 0;
                                function s() {
                                    n && clearTimeout(n);
                                }
                                function o(...o) {
                                    const c = this,
                                        l = Date.now() - a;
                                    function E() {
                                        (a = Date.now()), t.apply(c, o);
                                    }
                                    i ||
                                        (r && !n && E(),
                                        s(),
                                        void 0 === r && l > u
                                            ? E()
                                            : !0 !== e &&
                                              (n = setTimeout(
                                                  r
                                                      ? function () {
                                                            n = void 0;
                                                        }
                                                      : E,
                                                  void 0 === r ? u - l : u,
                                              )));
                                }
                                return (
                                    'boolean' != typeof e && ((r = t), (t = e), (e = void 0)),
                                    (o.cancel = function () {
                                        s(), (i = !0);
                                    }),
                                    o
                                );
                            })(t, u),
                        e,
                    );
                    return (0, n.useEffect)(() => r.cancel, [r]), r;
                }
                var x = t(30);
                let M;
                !(function (u) {
                    (u[(u.Next = -1)] = 'Next'), (u[(u.Prev = 1)] = 'Prev');
                })(M || (M = {}));
                const y = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    L = (({
                        getContainerSize: u,
                        getBounds: e,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: i,
                        triggerMouseMoveOnUpdate: a = !1,
                    }) => {
                        const s = (u, t) => {
                            const r = e(u),
                                n = r[0],
                                i = r[1];
                            return g(n, i, t);
                        };
                        return (o = {}) => {
                            const c = o.settings,
                                l = void 0 === c ? y : c,
                                E = (0, n.useRef)(null),
                                A = (0, n.useRef)(null),
                                F = (() => {
                                    const u = (0, n.useMemo)(() => ({}), []),
                                        e = (e) => (u[e] || (u[e] = new Map()), u[e]),
                                        t = (u, t) => {
                                            e(u).set(t, t);
                                        },
                                        r = (u, t) => {
                                            e(u).delete(t);
                                        },
                                        i = (u, ...t) => {
                                            for (var r, n = v(e(u).values()); !(r = n()).done; ) (0, r.value)(...t);
                                        };
                                    return (0, n.useMemo)(() => ({ on: t, off: r, trigger: i }), []);
                                })(),
                                _ = T(
                                    () => {
                                        b.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                m = (0, x.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (u) => {
                                        const e = E.current;
                                        e && (t(e, u), F.trigger('change', u), a && _());
                                    },
                                    onRest: (u) => F.trigger('rest', u),
                                    onStart: (u) => F.trigger('start', u),
                                    onPause: (u) => F.trigger('pause', u),
                                })),
                                D = m[0],
                                d = m[1],
                                B = (0, n.useCallback)(
                                    (u, e, t) => {
                                        var r;
                                        const n = D.scrollPosition.get(),
                                            i = (null != (r = D.scrollPosition.goal) ? r : 0) - n;
                                        return s(u, e * t + i + n);
                                    },
                                    [D.scrollPosition],
                                ),
                                C = (0, n.useCallback)(
                                    (u, { immediate: e = !1, reset: t = !0 } = {}) => {
                                        const r = E.current;
                                        r &&
                                            d.start({
                                                scrollPosition: s(r, u),
                                                immediate: e,
                                                reset: t,
                                                config: l.animationConfig,
                                                from: { scrollPosition: s(r, D.scrollPosition.get()) },
                                            });
                                    },
                                    [d, l.animationConfig, D.scrollPosition],
                                ),
                                p = (0, n.useCallback)(
                                    (u) => {
                                        const e = E.current,
                                            t = A.current;
                                        if (!e || !t) return;
                                        const r = ((u, e) => {
                                                switch (e.type) {
                                                    case 'proportional':
                                                        return i(u) / e.factor;
                                                    case 'fixed':
                                                        return e.value;
                                                }
                                            })(t, l.step),
                                            n = B(e, u, r);
                                        C(n);
                                    },
                                    [C, B, l.step],
                                ),
                                g = (0, n.useCallback)(
                                    (u) => {
                                        0 !== u.deltaY && p(r(u)),
                                            E.current && F.trigger('mouseWheel', u, D.scrollPosition, e(E.current));
                                    },
                                    [D.scrollPosition, p, F],
                                ),
                                f = ((u, e = []) => {
                                    const t = (0, n.useRef)(),
                                        r = (0, n.useCallback)((...e) => {
                                            t.current && t.current(), (t.current = u(...e));
                                        }, e);
                                    return (
                                        (0, n.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        h(() => {
                                            const u = E.current;
                                            u &&
                                                (C(s(u, D.scrollPosition.goal), { immediate: !0 }),
                                                F.trigger('resizeHandled'));
                                        }),
                                    [C, D.scrollPosition.goal],
                                ),
                                w = S(() => {
                                    const u = E.current;
                                    if (!u) return;
                                    const e = s(u, D.scrollPosition.goal);
                                    e !== D.scrollPosition.goal && C(e, { immediate: !0 }),
                                        F.trigger('recalculateContent');
                                });
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('resize', f),
                                    () => {
                                        window.removeEventListener('resize', f);
                                    }
                                ),
                                [f],
                            );
                            return (0, n.useMemo)(
                                () => ({
                                    getWrapperSize: () => (A.current ? i(A.current) : void 0),
                                    getContainerSize: () => (E.current ? u(E.current) : void 0),
                                    getBounds: () =>
                                        E.current
                                            ? e(E.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: l.step.clampedArrowStepTimeout,
                                    clampPosition: s,
                                    handleMouseWheel: g,
                                    applyScroll: C,
                                    applyStepTo: p,
                                    contentRef: E,
                                    wrapperRef: A,
                                    scrollPosition: d,
                                    animationScroll: D,
                                    recalculateContent: w,
                                    events: { on: F.on, off: F.off },
                                }),
                                [D.scrollPosition, C, p, F.off, F.on, w, g, d, l.step.clampedArrowStepTimeout],
                            );
                        };
                    })({
                        getBounds: (u) => [0, u.scrollHeight - u.offsetHeight],
                        getContainerSize: (u) => u.scrollHeight,
                        getWrapperSize: (u) => u.offsetHeight,
                        setScrollPosition: (u, e) => {
                            u.scrollTop = e.value.scrollPosition;
                        },
                        getDirection: (u) => (u.deltaY > 1 ? M.Next : M.Prev),
                    });
                var O = t(727);
                const H = 'VerticalBar_base_f3',
                    N = 'VerticalBar_base__nonActive_42',
                    k = 'VerticalBar_topButton_d7',
                    P = 'VerticalBar_bottomButton_06',
                    I = 'VerticalBar_track_df',
                    W = 'VerticalBar_thumb_32',
                    U = 'VerticalBar_rail_43',
                    G = 'disable',
                    j = () => {},
                    $ = { pending: !1, offset: 0 },
                    z = (u) => {
                        var e;
                        return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                    },
                    Y = (u, e) => {
                        u.contentRef.current && e(u.contentRef.current);
                    },
                    X = (u, e) => Math.max(20, u.offsetHeight * e),
                    K = (0, n.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = z, onDrag: r = j }) => {
                        const a = (0, n.useRef)(null),
                            o = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            E = (0, n.useRef)(null),
                            A = u.stepTimeout || 100,
                            F = (0, n.useState)($),
                            _ = F[0],
                            m = F[1],
                            D = (0, n.useCallback)(
                                (u) => {
                                    m(u),
                                        E.current && r({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: E.current });
                                },
                                [r],
                            ),
                            d = S(() => {
                                const e = E.current,
                                    t = l.current,
                                    r = u.getWrapperSize(),
                                    n = u.getContainerSize();
                                if (!(r && n && e && t)) return;
                                const i = Math.min(1, r / n);
                                return (
                                    (e.style.height = `${X(t, i)}px`),
                                    e.classList.add(W),
                                    a.current && (1 === i ? a.current.classList.add(N) : a.current.classList.remove(N)),
                                    i
                                );
                            }),
                            B = S(() => {
                                const e = l.current,
                                    t = E.current,
                                    r = u.getWrapperSize(),
                                    n = u.getContainerSize();
                                if (!(r && e && t && n)) return;
                                const i = u.animationScroll.scrollPosition.get(),
                                    a = Math.min(1, r / n),
                                    s = g(0, 1, i / (n - r)),
                                    A = (e.offsetHeight - X(e, a)) * s;
                                (t.style.transform = `translateY(${0 | A}px)`),
                                    ((u) => {
                                        if (o.current && c.current && l.current && E.current) {
                                            if (0 === u)
                                                return o.current.classList.add(G), void c.current.classList.remove(G);
                                            if (
                                                ((e = l.current),
                                                (t = E.current),
                                                u - (e.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return o.current.classList.remove(G), void c.current.classList.add(G);
                                            var e, t;
                                            o.current.classList.remove(G), c.current.classList.remove(G);
                                        }
                                    })(A);
                            }),
                            C = S(() => {
                                Y(u, () => {
                                    d(), B();
                                });
                            });
                        (0, n.useEffect)(() => h(C)),
                            (0, n.useEffect)(() => {
                                const e = () => {
                                    Y(u, () => {
                                        B();
                                    });
                                };
                                let t = j;
                                const r = () => {
                                    t(), (t = h(C));
                                };
                                return (
                                    u.events.on('recalculateContent', C),
                                    u.events.on('rest', e),
                                    u.events.on('change', e),
                                    u.events.on('resizeHandled', r),
                                    () => {
                                        t(),
                                            u.events.off('recalculateContent', C),
                                            u.events.off('rest', e),
                                            u.events.off('change', e),
                                            u.events.off('resizeHandled', r);
                                    }
                                );
                            }, [u]),
                            (0, n.useEffect)(() => {
                                if (!_.pending) return;
                                const e = (e) => {
                                        Y(u, (t) => {
                                            const n = l.current,
                                                i = E.current,
                                                a = u.getContainerSize();
                                            if (!n || !i || !a) return;
                                            const s = e.screenY - _.offset - n.getBoundingClientRect().y,
                                                o = (s / n.offsetHeight) * a;
                                            u.scrollPosition.start({
                                                scrollPosition: u.clampPosition(t, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: i, thumbOffset: s, contentOffset: o });
                                        });
                                    },
                                    t = () => {
                                        window.removeEventListener('mousemove', e), D($);
                                    };
                                return (
                                    window.addEventListener('mousemove', e),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', e),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [u, _.offset, _.pending, r, D]);
                        const p = (function (u, e, t = []) {
                                const r = (0, n.useRef)(0),
                                    i = (0, n.useCallback)(() => window.clearInterval(r.current), t || []);
                                (0, n.useEffect)(() => i, [i]);
                                const a = (null != t ? t : []).concat([e]);
                                return [
                                    (0, n.useCallback)((t) => {
                                        (r.current = window.setInterval(() => u(t, !0), e)), u(t, !1);
                                    }, a),
                                    i,
                                ];
                            })((e) => u.applyStepTo(e), A, [u]),
                            b = p[0],
                            v = p[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', v, !0),
                                () => document.removeEventListener('mouseup', v, !0)
                            ),
                            [v],
                        );
                        const f = (u) => {
                            u.target.classList.contains(G) || (0, O.G)('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: s()(H, e.base), ref: a, onWheel: u.handleMouseWheel },
                            i().createElement('div', {
                                className: s()(k, e.topButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(G) || 0 !== u.button || ((0, O.G)('play'), b(M.Next));
                                },
                                ref: o,
                                onMouseEnter: f,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: s()(I, e.track),
                                    onMouseDown: (e) => {
                                        const r = E.current;
                                        if (r && 0 === e.button)
                                            if (((0, O.G)('play'), e.target === r))
                                                D({ pending: !0, offset: e.screenY - r.getBoundingClientRect().y });
                                            else {
                                                ((e) => {
                                                    E.current &&
                                                        Y(u, (r) => {
                                                            if (!r) return;
                                                            const n = t(u),
                                                                i = u.clampPosition(r, r.scrollTop + n * e);
                                                            u.applyScroll(i);
                                                        });
                                                })(e.screenY > r.getBoundingClientRect().y ? M.Prev : M.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: f,
                                },
                                i().createElement('div', { ref: E, className: e.thumb }),
                                i().createElement('div', { className: s()(U, e.rail) }),
                            ),
                            i().createElement('div', {
                                className: s()(P, e.bottomButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(G) || 0 !== u.button || ((0, O.G)('play'), b(M.Prev));
                                },
                                onMouseUp: v,
                                ref: c,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    V = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    q = ({
                        children: u,
                        api: e,
                        className: t,
                        barClassNames: r,
                        areaClassName: a,
                        scrollClassName: o,
                        scrollClassNames: c,
                        getStepByRailClick: l,
                        onDrag: E,
                    }) => {
                        const A = (0, n.useMemo)(() => {
                                const u = r || {};
                                return Object.assign({}, u, { base: s()(V.base, u.base) });
                            }, [r]),
                            F = (0, n.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                        return i().createElement(
                            'div',
                            { className: s()(V.defaultScroll, t), onWheel: e.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: s()(V.area, a) },
                                i().createElement(Z, { className: o, classNames: c, api: F }, u),
                            ),
                            i().createElement(K, { getStepByRailClick: l, api: e, onDrag: E, classNames: A }),
                        );
                    },
                    Z = ({ className: u, classNames: e, children: t, api: r }) => (
                        (0, n.useEffect)(() => h(r.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: s()(V.base, u), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: s()(V.content, null == e ? void 0 : e.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                Z.Default = q;
                const Q = {
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
                    J = [
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
                function uu() {
                    return (
                        (uu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        uu.apply(this, arguments)
                    );
                }
                class eu extends i().PureComponent {
                    constructor(...u) {
                        super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, O.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                u && u(e), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, O.G)(this.props.soundClick);
                            }),
                            (this._onMouseUp = (u) => (e) => {
                                u && u(e), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const u = this.props,
                            e = u.caption,
                            t = u.onClick,
                            r = u.goto,
                            n = u.side,
                            a = u.type,
                            o = u.classNames,
                            c = u.onMouseEnter,
                            l = u.onMouseLeave,
                            E = u.onMouseDown,
                            A = u.onMouseUp,
                            F =
                                (u.soundClick,
                                u.soundHover,
                                (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        i = Object.keys(u);
                                    for (r = 0; r < i.length; r++) (t = i[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                    return n;
                                })(u, J)),
                            _ = s()(Q.base, Q[`base__${a}`], Q[`base__${n}`], null == o ? void 0 : o.base),
                            m = s()(Q.icon, Q[`icon__${a}`], Q[`icon__${n}`], null == o ? void 0 : o.icon),
                            D = s()(Q.glow, null == o ? void 0 : o.glow),
                            d = s()(Q.caption, Q[`caption__${a}`], null == o ? void 0 : o.caption),
                            B = s()(Q.goto, null == o ? void 0 : o.goto);
                        return i().createElement(
                            'div',
                            uu(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(c),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(E),
                                    onMouseUp: this._onMouseUp(A),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                F,
                            ),
                            'info' !== a && i().createElement('div', { className: Q.shine }),
                            i().createElement('div', { className: m }, i().createElement('div', { className: D })),
                            i().createElement('div', { className: d }, e),
                            r && i().createElement('div', { className: B }, r),
                        );
                    }
                }
                eu.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var tu = t(344),
                    ru = t(521);
                t(364);
                const nu = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function iu(u = ru.n.NONE, e = nu, t = !1) {
                    (0, n.useEffect)(() => {
                        if (u !== ru.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === u) {
                                if (b.O.view.isEventHandled()) return;
                                b.O.view.setEventHandled(), e(r), t && r.stopPropagation();
                            }
                        }
                    }, [e, u, t]);
                }
                const au = (u) => () => u();
                var su = t(59),
                    ou = t(16);
                const cu = 'PlayerSubscriptionsApp_base_8c',
                    lu = 'PlayerSubscriptionsApp_background_a5',
                    Eu = 'PlayerSubscriptionsApp_back_cf',
                    Au = 'PlayerSubscriptionsApp_main_11',
                    Fu = 'PlayerSubscriptionsApp_header_d0',
                    _u = 'PlayerSubscriptionsApp_title_d8',
                    mu = 'PlayerSubscriptionsApp_subtitle_c2',
                    Du = 'PlayerSubscriptionsApp_scrollArea_39',
                    du = 'PlayerSubscriptionsApp_subscriptions_31',
                    Bu = 'PlayerSubscriptionsApp_subscriptions__empty_76',
                    Cu = 'PlayerSubscriptionsApp_error_41',
                    pu = 'PlayerSubscriptionsApp_alertIcon_55',
                    gu = 'PlayerSubscriptionsApp_errorCaption_14';
                function hu() {
                    return (
                        (hu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        hu.apply(this, arguments)
                    );
                }
                const bu = {
                        back: R.strings.player_subscriptions.back(),
                        backTo: R.strings.player_subscriptions.backTo(),
                        title: R.strings.player_subscriptions.title(),
                        subtitle: R.strings.player_subscriptions.subtitle(),
                        noSubscriptions: R.strings.player_subscriptions.noSubscriptions(),
                    },
                    vu = [ou.h.TwoThirds, ou.h.OneThird, ou.h.OneThird, ou.h.TwoThirds],
                    fu = () => {
                        const u = (0, tu.tT)(),
                            e = u.warningTitle,
                            t = u.onBack,
                            r = u.onButtonClick,
                            n = u.onCardClick,
                            a = (0, tu.tT)('model.subscriptions', tu.DA.Shallow),
                            o = 0 === a.length || e;
                        var c;
                        return (
                            (c = () => t()),
                            iu(ru.n.ESCAPE, c),
                            i().createElement(
                                'div',
                                { className: cu },
                                i().createElement(
                                    'div',
                                    { className: lu },
                                    i().createElement(
                                        'div',
                                        { className: Eu },
                                        i().createElement(eu, {
                                            caption: bu.back,
                                            type: 'back',
                                            side: 'left',
                                            onClick: au(t),
                                            goto: bu.backTo,
                                        }),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: Au },
                                        i().createElement(
                                            'div',
                                            { className: Fu },
                                            i().createElement('h1', { className: _u }, bu.title),
                                            i().createElement('div', { className: mu }, bu.subtitle),
                                        ),
                                        i().createElement(
                                            q,
                                            { className: Du, api: L() },
                                            i().createElement(
                                                'div',
                                                { className: s()(du, o && Bu) },
                                                o &&
                                                    i().createElement(
                                                        'div',
                                                        { className: Cu },
                                                        i().createElement('div', { className: pu }),
                                                        i().createElement(
                                                            'div',
                                                            { className: gu },
                                                            e || bu.noSubscriptions,
                                                        ),
                                                    ),
                                                !e &&
                                                    a.map((u, e, t) => {
                                                        const a =
                                                            ((s = e),
                                                            (o = t.length) % 2 != 0 && 0 === s
                                                                ? ou.h.Full
                                                                : vu[(o % 2 == 0 ? s : s - 1) % 4]);
                                                        var s, o;
                                                        return i().createElement(
                                                            su.ZP,
                                                            hu(
                                                                { onButtonClick: r, onCardClick: n, key: e, size: a },
                                                                u.value,
                                                            ),
                                                        );
                                                    }),
                                            ),
                                        ),
                                    ),
                                ),
                            )
                        );
                    };
                engine.whenReady.then(() => {
                    p().render(
                        i().createElement(B, null, i().createElement(fu, null)),
                        document.getElementById('root'),
                    );
                });
            },
            59: (u, e, t) => {
                'use strict';
                t.d(e, { ZP: () => mu, j2: () => Fu });
                var r = t(483),
                    n = t.n(r),
                    i = t(179),
                    a = t.n(i),
                    s = t(649);
                const o = 'FormatText_base_d0',
                    c = ({ binding: u, text: e = '', classMix: t, alignment: r = s.v2.left }) =>
                        null === e
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : a().createElement(
                                  i.Fragment,
                                  null,
                                  e.split('\n').map((e, c) =>
                                      a().createElement(
                                          'div',
                                          { className: n()(o, t), key: `${e}-${c}` },
                                          (0, s.Uw)(e, r, u).map((u, e) =>
                                              a().createElement(i.Fragment, { key: `${e}-${u}` }, u),
                                          ),
                                      ),
                                  ),
                              );
                var l = t(344);
                const E = {};
                let A;
                !(function (u) {
                    (u.WotSubscription = 'WotSubscription'), (u.ExternalSubscription = 'ExternalSubscription');
                })(A || (A = {}));
                var F = t(44),
                    _ = t(727),
                    m = t(728),
                    D = t(16);
                const d = {
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
                let B, C;
                !(function (u) {
                    (u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost');
                })(B || (B = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium');
                    })(C || (C = {}));
                const p = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: r,
                    disabled: s,
                    mixClass: o,
                    soundHover: c,
                    soundClick: l,
                    onMouseEnter: E,
                    onMouseMove: A,
                    onMouseDown: F,
                    onMouseUp: m,
                    onMouseLeave: D,
                    onClick: C,
                }) => {
                    const p = (0, i.useRef)(null),
                        g = (0, i.useState)(t),
                        h = g[0],
                        b = g[1],
                        v = (0, i.useState)(!1),
                        f = v[0],
                        w = v[1],
                        S = (0, i.useState)(!1),
                        T = S[0],
                        x = S[1],
                        M = (0, i.useCallback)(() => {
                            s || (p.current && (p.current.focus(), b(!0)));
                        }, [s]),
                        y = (0, i.useCallback)(
                            (u) => {
                                h && null !== p.current && !p.current.contains(u.target) && b(!1);
                            },
                            [h],
                        ),
                        L = (0, i.useCallback)(
                            (u) => {
                                s || (C && C(u));
                            },
                            [s, C],
                        ),
                        O = (0, i.useCallback)(
                            (u) => {
                                s || (null !== c && (0, _.G)(c), E && E(u), x(!0));
                            },
                            [s, c, E],
                        ),
                        H = (0, i.useCallback)(
                            (u) => {
                                A && A(u);
                            },
                            [A],
                        ),
                        N = (0, i.useCallback)(
                            (u) => {
                                s || (m && m(u), w(!1));
                            },
                            [s, m],
                        ),
                        k = (0, i.useCallback)(
                            (u) => {
                                s || (null !== l && (0, _.G)(l), F && F(u), t && M(), w(!0));
                            },
                            [s, l, F, M, t],
                        ),
                        P = (0, i.useCallback)(
                            (u) => {
                                s || (D && D(u), w(!1));
                            },
                            [s, D],
                        ),
                        I = n()(
                            d.base,
                            d[`base__${r}`],
                            {
                                [d.base__disabled]: s,
                                [d[`base__${e}`]]: e,
                                [d.base__focus]: h,
                                [d.base__highlightActive]: f,
                                [d.base__firstHover]: T,
                            },
                            o,
                        ),
                        W = n()(d.state, d.state__default);
                    return (
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mousedown', y),
                                () => {
                                    document.removeEventListener('mousedown', y);
                                }
                            ),
                            [y],
                        ),
                        (0, i.useEffect)(() => {
                            b(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: p,
                                className: I,
                                onMouseEnter: O,
                                onMouseMove: H,
                                onMouseUp: N,
                                onMouseDown: k,
                                onMouseLeave: P,
                                onClick: L,
                            },
                            r !== B.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: d.back }),
                                    a().createElement('span', { className: d.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: W },
                                a().createElement('span', { className: d.stateDisabled }),
                                a().createElement('span', { className: d.stateHighlightHover }),
                                a().createElement('span', { className: d.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: d.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                p.defaultProps = { type: B.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const g = (0, i.memo)(p),
                    h = {
                        base: 'SubscriptionItem_base_e8',
                        subscriptionImage: 'SubscriptionItem_subscriptionImage_4d',
                        base__rewardsClaimed: 'SubscriptionItem_base__rewardsClaimed_21',
                        activateButtonLight: 'SubscriptionItem_activateButtonLight_ce',
                        base__oneThird: 'SubscriptionItem_base__oneThird_74',
                        base__twoThirds: 'SubscriptionItem_base__twoThirds_16',
                        subscriptionText: 'SubscriptionItem_subscriptionText_39',
                        refreshTimer: 'SubscriptionItem_refreshTimer_47',
                        footerText: 'SubscriptionItem_footerText_84',
                        footerDescription: 'SubscriptionItem_footerDescription_e3',
                        cardFooter: 'SubscriptionItem_cardFooter_ff',
                        activateButton: 'SubscriptionItem_activateButton_3e',
                        activateButton_manage: 'SubscriptionItem_activateButton_manage_db',
                        activateButton_internal: 'SubscriptionItem_activateButton_internal_d4',
                        cancelledLight: 'SubscriptionItem_cancelledLight_3d',
                        claimedText: 'SubscriptionItem_claimedText_23',
                        subscriptionHeader: 'SubscriptionItem_subscriptionHeader_1a',
                        subscriptionDescription: 'SubscriptionItem_subscriptionDescription_b6',
                        ctaContainer: 'SubscriptionItem_ctaContainer_71',
                        ctaContainer_row: 'SubscriptionItem_ctaContainer_row_ba',
                        linkIcon: 'SubscriptionItem_linkIcon_83',
                        rewardsClaimed: 'SubscriptionItem_rewardsClaimed_d3',
                        claimedText_internal: 'SubscriptionItem_claimedText_internal_ec',
                        claimedText_light: 'SubscriptionItem_claimedText_light_0c',
                        claimedIcon: 'SubscriptionItem_claimedIcon_64',
                        claimedIcon_internal: 'SubscriptionItem_claimedIcon_internal_a6',
                        warningIcon: 'SubscriptionItem_warningIcon_07',
                        footerTitle: 'SubscriptionItem_footerTitle_a0',
                        spinner: 'SubscriptionItem_spinner_9b',
                        'pending-spin': 'SubscriptionItem_pending-spin_4f',
                        spinner__visible: 'SubscriptionItem_spinner__visible_bf',
                        wotSubscriptionStatus_glow: 'SubscriptionItem_wotSubscriptionStatus_glow_c3',
                        wotSubscriptionStatus_icon_active: 'SubscriptionItem_wotSubscriptionStatus_icon_active_75',
                        wotSubscriptionStatus_icon_inactive: 'SubscriptionItem_wotSubscriptionStatus_icon_inactive_52',
                        wotSubscriptionStatus_text: 'SubscriptionItem_wotSubscriptionStatus_text_fe',
                        wotSubscriptionStatus_active: 'SubscriptionItem_wotSubscriptionStatus_active_d8',
                        wotSubscriptionStatus_inactive: 'SubscriptionItem_wotSubscriptionStatus_inactive_0f',
                        wotSubscriptionStatusContainer: 'SubscriptionItem_wotSubscriptionStatusContainer_b8',
                    },
                    b = ({
                        size: u,
                        redirectButtonClickHandler: e,
                        isPendingRedirect: t,
                        buttonClickHandler: r,
                        has3rdPartyRewardsToClaim: i,
                        hasDepotRewardsToClaim: s,
                    }) => {
                        const o = !i && !s;
                        return a().createElement(
                            a().Fragment,
                            null,
                            (i || o) && a().createElement('div', { className: h.activateButtonLight }),
                            o
                                ? a().createElement(
                                      'div',
                                      { className: h.rewardsClaimed },
                                      a().createElement('div', { className: h.claimedIcon }),
                                      a().createElement(
                                          'div',
                                          { className: h.claimedText },
                                          u === D.h.Full ? Fu.received : Fu.receivedShort,
                                      ),
                                  )
                                : a().createElement(
                                      g,
                                      {
                                          type: i ? 'main' : 'primary',
                                          size: u === D.h.OneThird ? 'small' : 'medium',
                                          mixClass: h.activateButton,
                                          disabled: t,
                                          onClick: i ? e : r,
                                      },
                                      i &&
                                          a().createElement('span', {
                                              className: n()(h.spinner, t && h.spinner__visible),
                                          }),
                                      ((u, e) =>
                                          u
                                              ? e === D.h.Full
                                                  ? Fu.claimRewards
                                                  : Fu.claimRewardsShort
                                              : e === D.h.Full
                                                ? Fu.selectRewards
                                                : Fu.selectRewardsShort)(i, u),
                                      i && !t
                                          ? a().createElement('img', {
                                                src: R.images.gui.maps.icons.player_subscriptions.link_icon(),
                                                className: h.linkIcon,
                                            })
                                          : '',
                                  ),
                        );
                    };
                let v, f;
                !(function (u) {
                    (u.Timer = 'timer'), (u.Countdown = 'countdown'), (u.Cooldown = 'cooldown'), (u.None = 'none');
                })(v || (v = {})),
                    (function (u) {
                        (u.Description = 'description'),
                            (u.Short = 'short'),
                            (u.Long = 'long'),
                            (u.Extended = 'extended');
                    })(f || (f = {}));
                var w = t(67);
                const S = 'Countdown_base_fe',
                    T = 'Countdown_icon_8b',
                    x = 'Countdown_description_8d',
                    M = (u) => u.toString().padStart(2, '0'),
                    y = R.images.gui.maps.icons.components.countdown,
                    L = (u, e) => {
                        const t = 2 === e ? y.big : y;
                        switch (u) {
                            case v.Timer:
                                return t.clock();
                            case v.Countdown:
                                return t.hourglass();
                            case v.Cooldown:
                                return t.lock();
                        }
                    },
                    O = (0, i.memo)(
                        ({
                            duration: u,
                            icon: e = v.Timer,
                            style: t = f.Description,
                            onTimeReached: r,
                            className: o = '',
                            classNames: E = {},
                            labelFormat: A = '',
                        }) => {
                            const _ = t !== f.Description ? 1 : void 0,
                                m = (0, l.au)(u, _),
                                D = (() => {
                                    const u = (0, i.useState)(w.O.view.getScale()),
                                        e = u[0],
                                        t = u[1];
                                    return (
                                        (0, i.useEffect)(() => {
                                            const u = () => {
                                                t(w.O.view.getScale());
                                            };
                                            return (
                                                window.addEventListener('resize', u),
                                                () => {
                                                    window.removeEventListener('resize', u);
                                                }
                                            );
                                        }, []),
                                        e
                                    );
                                })();
                            r && r[m] && r[m]();
                            const d = ((u, e) => {
                                switch (e) {
                                    case f.Description:
                                        return (0, F.wB)(u);
                                    case f.Short:
                                        return `${M(u.minutes)}:${M(u.seconds)}`;
                                    case f.Long:
                                        return `${M(u.hours)}:${M(u.minutes)}:${M(u.seconds)}`;
                                    case f.Extended:
                                        return `${(0, s.WU)(R.strings.common.duration.days(), { days: u.days })} | ${M(u.hours)}:${M(u.minutes)}:${M(u.seconds)}`;
                                }
                            })((0, F.f8)(m), t);
                            return a().createElement(
                                'div',
                                { className: n()(S, o) },
                                e !== v.None &&
                                    a().createElement('div', {
                                        className: n()(T, E.icon),
                                        style: { backgroundImage: `url('${L(e, D)}')` },
                                    }),
                                A
                                    ? a().createElement(
                                          'div',
                                          { className: n()(x, E.text) },
                                          a().createElement(c, { text: A, binding: { timerText: d } }),
                                      )
                                    : a().createElement('div', { className: n()(x, E.text) }, d),
                            );
                        },
                    ),
                    H = ({ refreshTime: u }) => {
                        const e = (0, i.useState)(!0),
                            t = e[0],
                            r = e[1],
                            n = u - Math.floor(Date.now() / 1e3),
                            s = n > 0 ? n : 0;
                        return t
                            ? a().createElement(
                                  'div',
                                  { className: h.refreshTimer },
                                  a().createElement('span', { className: h.timerLabel }, Fu.timerLabel),
                                  a().createElement(O, {
                                      duration: s,
                                      style: f.Description,
                                      onTimeReached: { 0: () => r(!1) },
                                  }),
                              )
                            : null;
                    };
                var N = t(887),
                    k = t.n(N),
                    P = t(415);
                const I = ['xl', 'lg', 'md', 'sm', 'xs'],
                    W = (u) => u.includes('_') && ((u) => I.includes(u))(u.split('_').at(-1)),
                    U = [P.cJ.ExtraLarge, P.cJ.Large, P.cJ.Medium, P.cJ.Small, P.cJ.ExtraSmall],
                    G = (u, e) =>
                        Object.keys(u).reduce((t, r) => {
                            if (r in t) return t;
                            if (W(r)) {
                                const n = r.split('_').slice(0, -1).join('_');
                                if (n in t) return t;
                                const i = U.indexOf(e),
                                    a = (-1 !== i ? I.slice(i) : [])
                                        .map((u) => n + '_' + u)
                                        .find((e) => void 0 !== u[e]),
                                    s = a ? u[a] : void 0;
                                return (t[n] = void 0 !== s ? s : u[n]), t;
                            }
                            const n = u[r];
                            return (
                                void 0 === n ||
                                    ((u, e) => I.some((t) => void 0 !== e[`${u}_${t}`]))(r, u) ||
                                    (t[r] = n),
                                t
                            );
                        }, {}),
                    j = (u, e = G) => {
                        const t = (
                            (u, e = G) =>
                            (t) => {
                                const r = (0, P.GS)().mediaSize,
                                    n = (0, i.useMemo)(() => e(t, r), [t, r]);
                                return a().createElement(u, n);
                            }
                        )(u, e);
                        return a().memo((e) =>
                            Object.keys(e).some((u) => W(u) && void 0 !== e[u])
                                ? a().createElement(t, e)
                                : a().createElement(u, e),
                        );
                    },
                    $ = {
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
                    z = [
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
                function Y() {
                    return (
                        (Y =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        Y.apply(this, arguments)
                    );
                }
                Object.keys(k());
                const X = {
                        XL: { mt: $.mt__XL, mr: $.mr__XL, mb: $.mb__XL, ml: $.ml__XL },
                        LG: { mt: $.mt__LG, mr: $.mr__LG, mb: $.mb__LG, ml: $.ml__LG },
                        MDp: { mt: $.mt__MDp, mr: $.mr__MDp, mb: $.mb__MDp, ml: $.ml__MDp },
                        MD: { mt: $.mt__MD, mr: $.mr__MD, mb: $.mb__MD, ml: $.ml__MD },
                        SMp: { mt: $.mt__SMp, mr: $.mr__SMp, mb: $.mb__SMp, ml: $.ml__SMp },
                        SM: { mt: $.mt__SM, mr: $.mr__SM, mb: $.mb__SM, ml: $.ml__SM },
                        XS: { mt: $.mt__XS, mr: $.mr__XS, mb: $.mb__XS, ml: $.ml__XS },
                    },
                    K = (Object.keys(X), ['mt', 'mr', 'mb', 'ml']),
                    V = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    q = j((u) => {
                        let e = u.className,
                            t = u.width,
                            r = u.height,
                            s = u.m,
                            o = u.mt,
                            c = void 0 === o ? s : o,
                            l = u.mr,
                            E = void 0 === l ? s : l,
                            A = u.mb,
                            F = void 0 === A ? s : A,
                            _ = u.ml,
                            m = void 0 === _ ? s : _,
                            D = u.column,
                            d = u.row,
                            B = u.flexDirection,
                            C = void 0 === B ? (D ? 'column' : d && 'row') || void 0 : B,
                            p = u.flexStart,
                            g = u.center,
                            h = u.flexEnd,
                            b = u.spaceBetween,
                            v = u.spaceAround,
                            f = u.justifyContent,
                            w =
                                void 0 === f
                                    ? (p ? 'flex-start' : g && 'center') ||
                                      (h && 'flex-end') ||
                                      (b && 'space-between') ||
                                      (v && 'space-around') ||
                                      void 0
                                    : f,
                            S = u.alignItems,
                            T = void 0 === S ? (p ? 'flex-start' : g && 'center') || (h && 'flex-end') || void 0 : S,
                            x = u.alignSelf,
                            M = u.wrap,
                            y = u.flexWrap,
                            L = void 0 === y ? (M ? 'wrap' : void 0) : y,
                            R = u.grow,
                            O = u.shrink,
                            H = u.flex,
                            N = void 0 === H ? (R || O ? `${R ? 1 : 0} ${O ? 1 : 0} auto` : void 0) : H,
                            k = u.style,
                            P = u.children,
                            I = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    i = Object.keys(u);
                                for (r = 0; r < i.length; r++) (t = i[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, z);
                        const W = (0, i.useMemo)(() => {
                                const u = { mt: c, mr: E, mb: F, ml: m },
                                    e = ((u) =>
                                        K.reduce((e, t) => {
                                            const r = u[t];
                                            return r && 'number' != typeof r ? e.concat(X[!0 === r ? 'MD' : r][t]) : e;
                                        }, []))(u),
                                    n = ((u) =>
                                        K.reduce((e, t) => {
                                            const r = u[t];
                                            return 'number' == typeof r && (e[V[t]] = r + 'rem'), e;
                                        }, {}))(u);
                                return {
                                    computedStyle: Object.assign({}, k, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: N,
                                        alignSelf: x,
                                        display: C || T ? 'flex' : void 0,
                                        flexDirection: C,
                                        flexWrap: L,
                                        justifyContent: w,
                                        alignItems: T,
                                    }),
                                    computedClassNames: e,
                                };
                            }, [t, r, c, E, F, m, k, N, x, C, L, w, T]),
                            U = W.computedStyle,
                            G = W.computedClassNames;
                        return a().createElement('div', Y({ className: n()($.base, ...G, e), style: U }, I), P);
                    });
                var Z = t(532),
                    Q = t.n(Z);
                const J = {
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
                    uu = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function eu() {
                    return (
                        (eu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        eu.apply(this, arguments)
                    );
                }
                Object.keys(k());
                const tu = Object.keys(Q()),
                    ru = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    nu = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    iu = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    au = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    su =
                        (Object.keys(au),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': ru,
                            'heading-H36': ru,
                            'heading-H28': nu,
                            'heading-H24': nu,
                            'heading-H24R': nu,
                            'heading-H22': nu,
                            'heading-H20R': nu,
                            'heading-H18': nu,
                            'heading-H15': iu,
                            'heading-H14': iu,
                            'paragraph-P24': nu,
                            'paragraph-P18': nu,
                            'paragraph-P16': nu,
                            'paragraph-P14': iu,
                            'paragraph-P12': iu,
                            'paragraph-P10': iu,
                        }),
                    ou =
                        (Object.keys(su),
                        (u) =>
                            u
                                ? ((u) => tu.includes(u))(u)
                                    ? { colorClassName: J[u] }
                                    : { colorStyle: { color: u } }
                                : {}),
                    cu = j((u) => {
                        let e = u.text,
                            t = u.variant,
                            r = u.className,
                            s = u.color,
                            o = u.m,
                            l = u.mt,
                            E = void 0 === l ? o : l,
                            A = u.mr,
                            F = void 0 === A ? o : A,
                            _ = u.mb,
                            m = void 0 === _ ? o : _,
                            D = u.ml,
                            d = void 0 === D ? o : D,
                            B = u.style,
                            C = u.format,
                            p = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    i = Object.keys(u);
                                for (r = 0; r < i.length; r++) (t = i[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, uu);
                        const g = (0, i.useMemo)(() => {
                                const u = ou(s),
                                    e = u.colorClassName,
                                    t = u.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, B, r), colorClassName: e };
                            }, [B, s]),
                            h = g.computedStyle,
                            b = g.colorClassName;
                        return a().createElement(
                            q,
                            eu(
                                {
                                    className: n()(J.base, t && J[t], b, r),
                                    style: h,
                                    mt: !0 === E ? su[t || 'paragraph-P16'].mt : E,
                                    mr: !0 === F ? su[t || 'paragraph-P16'].mr : F,
                                    mb: !0 === m ? su[t || 'paragraph-P16'].mb : m,
                                    ml: !0 === d ? su[t || 'paragraph-P16'].ml : d,
                                },
                                p,
                            ),
                            void 0 !== C ? a().createElement(c, eu({}, C, { text: e })) : e,
                        );
                    });
                function lu() {
                    return (
                        (lu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        lu.apply(this, arguments)
                    );
                }
                const Eu = ({
                        size: u,
                        redirectButtonClickHandler: e,
                        isPendingRedirect: t,
                        buttonClickHandler: r,
                        subscriptionState: i,
                    }) => {
                        const s = {
                                type: 'main',
                                size: u === D.h.Full ? 'medium' : 'small',
                                disabled: t,
                                mixClass: h.activateButton,
                                onClick: r,
                            },
                            o = i === D.Q.Active || i === D.Q.Cancelled;
                        return a().createElement(
                            'div',
                            { className: h.ctaContainer_row },
                            a().createElement(
                                g,
                                lu({}, s, { onClick: i === D.Q.Active ? e : r, type: o ? 'ghost' : 'main' }),
                                i === D.Q.Active &&
                                    a().createElement('span', { className: n()(h.spinner, t && h.spinner__visible) }),
                                i === D.Q.Inactive || i === D.Q.Trial
                                    ? a().createElement(
                                          a().Fragment,
                                          null,
                                          a().createElement(cu, { text: Fu.subscribe }),
                                          i === D.Q.Trial &&
                                              a().createElement('img', {
                                                  src: R.images.gui.maps.icons.player_subscriptions.link_icon(),
                                                  className: h.linkIcon,
                                              }),
                                      )
                                    : a().createElement(
                                          a().Fragment,
                                          null,
                                          a().createElement(cu, { text: Fu.manage }),
                                          a().createElement('img', {
                                              src: R.images.gui.maps.icons.player_subscriptions.link_icon(),
                                              className: h.linkIcon,
                                          }),
                                      ),
                            ),
                        );
                    },
                    Au = {
                        [D.Q.Active]: {
                            icon: R.images.gui.maps.icons.player_subscriptions.icons.check(),
                            glow: R.images.gui.maps.icons.player_subscriptions.icons.check_glow(),
                            accentClassName: h.wotSubscriptionStatus_active,
                            iconClassName: h.wotSubscriptionStatus_icon_active,
                        },
                        [D.Q.Cancelled]: {
                            icon: R.images.gui.maps.icons.player_subscriptions.icons.alert(),
                            glow: R.images.gui.maps.icons.player_subscriptions.icons.alert_glow(),
                            accentClassName: h.wotSubscriptionStatus_inactive,
                            iconClassName: h.wotSubscriptionStatus_icon_inactive,
                        },
                        [D.Q.Error]: {
                            icon: R.images.gui.maps.icons.player_subscriptions.icons.alert(),
                            glow: '',
                            accentClassName: h.wotSubscriptionStatus_inactive,
                            iconClassName: h.wotSubscriptionStatus_icon_inactive,
                        },
                        [D.Q.Inactive]: {
                            icon: R.images.gui.maps.icons.player_subscriptions.icons.alert(),
                            glow: R.images.gui.maps.icons.player_subscriptions.icons.alert_glow(),
                            accentClassName: h.wotSubscriptionStatus_inactive,
                            iconClassName: h.wotSubscriptionStatus_icon_inactive,
                        },
                        [D.Q.Trial]: {
                            icon: R.images.gui.maps.icons.player_subscriptions.icons.check(),
                            glow: R.images.gui.maps.icons.player_subscriptions.icons.check_glow(),
                            accentClassName: h.wotSubscriptionStatus_active,
                            iconClassName: h.wotSubscriptionStatus_icon_active,
                        },
                    },
                    Fu = {
                        claimRewards: R.strings.player_subscriptions.subscriptionItem.button.claimRewards(),
                        claimRewardsShort: R.strings.player_subscriptions.subscriptionItem.button.claimRewardsShort(),
                        selectRewards: R.strings.player_subscriptions.subscriptionItem.button.selectRewards(),
                        selectRewardsShort: R.strings.player_subscriptions.subscriptionItem.button.selectRewardsShort(),
                        received: R.strings.player_subscriptions.subscriptionItem.button.received(),
                        receivedShort: R.strings.player_subscriptions.subscriptionItem.button.receivedShort(),
                        timerLabel: R.strings.player_subscriptions.subscriptionItem.timerLabel(),
                        activate: R.strings.player_subscriptions.subscriptionItem.button.activate(),
                        active: R.strings.player_subscriptions.subscriptionItem.active(),
                        manage: R.strings.player_subscriptions.subscriptionItem.button.manage(),
                        cancelled: R.strings.player_subscriptions.subscriptionItem.cancelled(),
                        error: R.strings.player_subscriptions.subscriptionItem.error(),
                        restartSubscription: R.strings.player_subscriptions.subscriptionItem.button.subscribe(),
                        nextCharge: R.strings.player_subscriptions.subscriptionItem.nextCharge(),
                        activeUntil: R.strings.player_subscriptions.subscriptionItem.activeUntil(),
                        errorMessage: R.strings.player_subscriptions.subscriptionItem.errorMessage(),
                        trial: R.strings.player_subscriptions.subscriptionItem.trial(),
                        nextTrialCharge: R.strings.player_subscriptions.subscriptionItem.nextTrialCharge(),
                        subscribe: R.strings.player_subscriptions.subscriptionItem.button.subscribe(),
                    },
                    _u = {
                        [D.Q.Error]: { status: Fu.error, substatus: Fu.errorMessage },
                        [D.Q.Cancelled]: { status: Fu.cancelled, substatus: Fu.activeUntil },
                        [D.Q.Active]: { status: Fu.active, substatus: Fu.nextCharge },
                        [D.Q.Trial]: { status: Fu.trial, substatus: Fu.nextTrialCharge },
                    },
                    mu = (function (u, e, t, r = l.DA.Deep) {
                        const n = (n) => {
                            const i = n.path || e || void 0,
                                s = (i && E[i]) || !1,
                                o = (0, l.tT)(i, s ? l.DA.None : r),
                                c = Object.assign({}, t(o, n), n);
                            return a().createElement(u, c);
                        };
                        var i;
                        return (n.displayName = `WithModel(${((i = u), i.displayName || i.name || 'Component')})`), n;
                    })(
                        ({
                            refreshTime: u,
                            id: e,
                            name: t,
                            description: r,
                            size: s,
                            imageUriSmall: o,
                            imageUriMedium: l,
                            imageUriLarge: E,
                            onButtonClick: d,
                            onCardClick: B,
                            subscriptionType: C,
                            wotSubscriptionState: p,
                            has3rdPartyRewardsToClaim: g,
                            hasDepotRewardsToClaim: v,
                        }) => {
                            const f = (0, i.useState)(!1),
                                w = f[0],
                                S = f[1],
                                T = p,
                                x = !g && !v,
                                M = n()(
                                    h.base,
                                    s === D.h.OneThird && h.base__oneThird,
                                    s === D.h.TwoThirds && h.base__twoThirds,
                                    x && h.base__rewardsClaimed,
                                ),
                                y = (u) => {
                                    w ||
                                        (u.stopPropagation(),
                                        (0, _.G)('yes1'),
                                        d({ subscriptionId: e }),
                                        S(!0),
                                        setTimeout(() => S(!1), 1e3));
                                },
                                L = (u) => {
                                    u.stopPropagation(), (0, _.G)('yes1'), d({ subscriptionId: e });
                                },
                                R = (0, i.useCallback)(() => {
                                    (0, _.G)('highlight');
                                }, []);
                            return a().createElement(
                                'div',
                                {
                                    className: M,
                                    style: {
                                        '--imageUriSmall': `url(${o})`,
                                        '--imageUriMedium': `url(${l})`,
                                        '--imageUriLarge': `url(${E})`,
                                    },
                                    onClick: () => {
                                        w ||
                                            ((0, _.G)('yes1'),
                                            B({ subscriptionId: e }),
                                            S(!0),
                                            setTimeout(() => S(!1), 1e3));
                                    },
                                    onMouseEnter: R,
                                },
                                C === A.WotSubscription &&
                                    T !== D.Q.Inactive &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement('img', {
                                            className: h.wotSubscriptionStatus_glow,
                                            alt: '',
                                            src: Au[p].glow,
                                        }),
                                        a().createElement(
                                            'div',
                                            { className: h.wotSubscriptionStatusContainer },
                                            a().createElement('img', {
                                                className: Au[p].iconClassName,
                                                alt: '',
                                                src: Au[p].icon,
                                            }),
                                            a().createElement(
                                                'span',
                                                { className: Au[p].accentClassName },
                                                _u[T].status,
                                            ),
                                            ' ',
                                            a().createElement(c, {
                                                classMix: h.wotSubscriptionStatus_text,
                                                text: _u[T].substatus,
                                                binding: { chargeDate: (0, F.e1)(u, m.U.SHORT_DATE, !0) },
                                            }),
                                        ),
                                    ),
                                C === A.ExternalSubscription && a().createElement(H, { refreshTime: u }),
                                s === D.h.Full &&
                                    a().createElement(
                                        'div',
                                        { className: h.subscriptionText },
                                        a().createElement('div', { className: h.subscriptionHeader }, t),
                                        a().createElement('div', { className: h.subscriptionDescription }, r),
                                    ),
                                a().createElement('div', { className: h.subscriptionImage }),
                                a().createElement(
                                    'div',
                                    { className: h.cardFooter },
                                    s !== D.h.Full &&
                                        a().createElement(
                                            'div',
                                            { className: h.footerText },
                                            a().createElement('div', { className: h.footerTitle }, t),
                                            a().createElement('div', { className: h.footerDescription }, r),
                                        ),
                                    T !== D.Q.Error &&
                                        a().createElement(
                                            'div',
                                            { className: h.ctaContainer },
                                            C === A.WotSubscription
                                                ? a().createElement(Eu, {
                                                      subscriptionState: T,
                                                      buttonClickHandler: L,
                                                      isPendingRedirect: w,
                                                      redirectButtonClickHandler: y,
                                                      size: s,
                                                  })
                                                : a().createElement(b, {
                                                      buttonClickHandler: L,
                                                      has3rdPartyRewardsToClaim: g,
                                                      isPendingRedirect: w,
                                                      hasDepotRewardsToClaim: v,
                                                      redirectButtonClickHandler: y,
                                                      size: s,
                                                  }),
                                        ),
                                ),
                            );
                        },
                        null,
                        (u, e) => Object.assign({}, e, u),
                    );
            },
            16: (u, e, t) => {
                'use strict';
                let r, n;
                t.d(e, { Q: () => n, h: () => r }),
                    (function (u) {
                        (u.Full = 'Full'), (u.OneThird = 'OneThird'), (u.TwoThirds = 'TwoThirds');
                    })(r || (r = {})),
                    (function (u) {
                        (u.Inactive = 'Inactive'),
                            (u.Active = 'Active'),
                            (u.Cancelled = 'Cancelled'),
                            (u.Error = 'Error'),
                            (u.Trial = 'Trial');
                    })(n || (n = {}));
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(u) {
        var e = __webpack_module_cache__[u];
        if (void 0 !== e) return e.exports;
        var t = (__webpack_module_cache__[u] = { exports: {} });
        return __webpack_modules__[u](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (u, e, t, r) => {
            if (!e) {
                var n = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [e, t, r] = deferred[o], i = !0, a = 0; a < e.length; a++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[a]))
                            ? e.splice(a--, 1)
                            : ((i = !1), r < n && (n = r));
                    if (i) {
                        deferred.splice(o--, 1);
                        var s = t();
                        void 0 !== s && (u = s);
                    }
                }
                return u;
            }
            r = r || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > r; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [e, t, r];
        }),
        (__webpack_require__.n = (u) => {
            var e = u && u.__esModule ? () => u.default : () => u;
            return __webpack_require__.d(e, { a: e }), e;
        }),
        (__webpack_require__.d = (u, e) => {
            for (var t in e)
                __webpack_require__.o(e, t) &&
                    !__webpack_require__.o(u, t) &&
                    Object.defineProperty(u, t, { enumerable: !0, get: e[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (u) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (u, e) => Object.prototype.hasOwnProperty.call(u, e)),
        (__webpack_require__.r = (u) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(u, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 138),
        (() => {
            var u = { 138: 0, 846: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var r,
                        n,
                        [i, a, s] = t,
                        o = 0;
                    if (i.some((e) => 0 !== u[e])) {
                        for (r in a) __webpack_require__.o(a, r) && (__webpack_require__.m[r] = a[r]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (e && e(t); o < i.length; o++)
                        (n = i[o]), __webpack_require__.o(u, n) && u[n] && u[n][0](), (u[n] = 0);
                    return __webpack_require__.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [559], () => __webpack_require__(321));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
