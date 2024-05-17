(() => {
    var __webpack_modules__ = {
            3495: (u, e, t) => {
                'use strict';
                t.d(e, { Y: () => c });
                var a = t(3138),
                    n = t(6179),
                    r = t(1043),
                    i = t(5262);
                const s = a.O.client.getSize('rem'),
                    l = s.width,
                    o = s.height,
                    E = Object.assign({ width: l, height: o }, (0, i.T)(l, o, r.j)),
                    c = (0, n.createContext)(E);
            },
            1039: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => E });
                var a = t(3138),
                    n = t(6536),
                    r = t(6179),
                    i = t.n(r),
                    s = t(3495),
                    l = t(1043),
                    o = t(5262);
                const E = ({ children: u }) => {
                    const e = (0, r.useContext)(s.Y),
                        t = (0, r.useState)(e),
                        E = t[0],
                        c = t[1],
                        A = (0, r.useCallback)((u, e) => {
                            const t = a.O.view.pxToRem(u),
                                n = a.O.view.pxToRem(e);
                            c(Object.assign({ width: t, height: n }, (0, o.T)(t, n, l.j)));
                        }, []),
                        F = (0, r.useCallback)(() => {
                            const u = a.O.client.getSize('px');
                            A(u.width, u.height);
                        }, [A]);
                    (0, n.Z)(() => {
                        a.O.client.events.on('clientResized', A), a.O.client.events.on('self.onScaleUpdated', F);
                    }),
                        (0, r.useEffect)(
                            () => () => {
                                a.O.client.events.off('clientResized', A),
                                    a.O.client.events.off('self.onScaleUpdated', F);
                            },
                            [A, F],
                        );
                    const m = (0, r.useMemo)(() => Object.assign({}, E), [E]);
                    return i().createElement(s.Y.Provider, { value: m }, u);
                };
            },
            6010: (u, e, t) => {
                'use strict';
                var a = t(6179),
                    n = t(7382),
                    r = t(3495);
                const i = ['children'];
                const s = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(u);
                            for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                            return n;
                        })(u, i);
                    const s = (0, a.useContext)(r.Y),
                        l = s.extraLarge,
                        o = s.large,
                        E = s.medium,
                        c = s.small,
                        A = s.extraSmall,
                        F = s.extraLargeWidth,
                        m = s.largeWidth,
                        D = s.mediumWidth,
                        d = s.smallWidth,
                        C = s.extraSmallWidth,
                        B = s.extraLargeHeight,
                        h = s.largeHeight,
                        g = s.mediumHeight,
                        _ = s.smallHeight,
                        f = s.extraSmallHeight,
                        v = { extraLarge: B, large: h, medium: g, small: _, extraSmall: f };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && l) return e;
                        if (t.large && o) return e;
                        if (t.medium && E) return e;
                        if (t.small && c) return e;
                        if (t.extraSmall && A) return e;
                    } else {
                        if (t.extraLargeWidth && F) return (0, n.H)(e, t, v);
                        if (t.largeWidth && m) return (0, n.H)(e, t, v);
                        if (t.mediumWidth && D) return (0, n.H)(e, t, v);
                        if (t.smallWidth && d) return (0, n.H)(e, t, v);
                        if (t.extraSmallWidth && C) return (0, n.H)(e, t, v);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && B) return e;
                            if (t.largeHeight && h) return e;
                            if (t.mediumHeight && g) return e;
                            if (t.smallHeight && _) return e;
                            if (t.extraSmallHeight && f) return e;
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
                (0, a.memo)(s);
            },
            7382: (u, e, t) => {
                'use strict';
                t.d(e, { H: () => a });
                const a = (u, e, t) =>
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
            7739: (u, e, t) => {
                'use strict';
                t.d(e, { YN: () => n.Y, ZN: () => a.Z });
                t(6010);
                var a = t(1039),
                    n = t(3495);
            },
            1043: (u, e, t) => {
                'use strict';
                t.d(e, { j: () => a });
                const a = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (u, e, t) => {
                'use strict';
                var a;
                function n(u, e, t) {
                    const a = (function (u, e) {
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
                        r = Math.min(a, n);
                    return {
                        extraLarge: r === t.extraLarge.weight,
                        large: r === t.large.weight,
                        medium: r === t.medium.weight,
                        small: r === t.small.weight,
                        extraSmall: r === t.extraSmall.weight,
                        extraLargeWidth: a === t.extraLarge.weight,
                        largeWidth: a === t.large.weight,
                        mediumWidth: a === t.medium.weight,
                        smallWidth: a === t.small.weight,
                        extraSmallWidth: a === t.extraSmall.weight,
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
                    })(a || (a = {}));
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
            527: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, { mouse: () => E, off: () => l, on: () => s, onResize: () => r, onScaleUpdated: () => i });
                var a = t(2472),
                    n = t(1176);
                const r = (0, a.E)('clientResized'),
                    i = (0, a.E)('self.onScaleUpdated'),
                    s = (u, e) => engine.on(u, e),
                    l = (u, e) => engine.off(u, e),
                    o = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const E = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && (0, n.R)(!1);
                    }
                    function t() {
                        u.enabled && (0, n.R)(!0);
                    }
                    function a() {
                        u.enabled
                            ? u.listeners < 1
                                ? ((u.initialized = !1),
                                  document.body.removeEventListener('mouseenter', e),
                                  document.body.removeEventListener('mouseleave', t))
                                : u.initialized ||
                                  ((u.initialized = !0),
                                  document.body.addEventListener('mouseenter', e),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, n.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let n = !0;
                                    const r = `mouse${e}`,
                                        i = o[e]((u) => t([u, 'outside']));
                                    function s(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, s),
                                        a(),
                                        () => {
                                            n &&
                                                (i(),
                                                window.removeEventListener(r, s),
                                                (u.listeners -= 1),
                                                a(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(t)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            (u.enabled = !1), a();
                        },
                        enable() {
                            (u.enabled = !0), a();
                        },
                        enableOutside() {
                            u.enabled && (0, n.R)(!0);
                        },
                        disableOutside() {
                            u.enabled && (0, n.R)(!1);
                        },
                    });
                })();
            },
            5959: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, {
                        events: () => a,
                        getMouseGlobalPosition: () => r,
                        getSize: () => n,
                        graphicsQuality: () => i,
                    });
                var a = t(527);
                function n(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (u, e, t) => {
                'use strict';
                function a(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => a });
            },
            2472: (u, e, t) => {
                'use strict';
                function a(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => a });
            },
            3138: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => n });
                var a = t(5959);
                const n = { view: t(7641), client: a };
            },
            3722: (u, e, t) => {
                'use strict';
                function a(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function n(u, e, t) {
                    return `url(${a(u, e, t)})`;
                }
                t.r(e), t.d(e, { getBgUrl: () => n, getTextureUrl: () => a });
            },
            6112: (u, e, t) => {
                'use strict';
                t.d(e, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => n });
                var a = t(2472);
                const n = {
                    onTextureFrozen: (0, a.E)('self.onTextureFrozen'),
                    onTextureReady: (0, a.E)('self.onTextureReady'),
                    onDomBuilt: (0, a.E)('self.onDomBuilt'),
                    onLoaded: (0, a.E)('self.onLoaded'),
                    onDisplayChanged: (0, a.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, a.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, a.E)('children.onAdded'),
                        onLoaded: (0, a.E)('children.onLoaded'),
                        onRemoved: (0, a.E)('children.onRemoved'),
                        onAttached: (0, a.E)('children.onAttached'),
                        onTextureReady: (0, a.E)('children.onTextureReady'),
                        onRequestPosition: (0, a.E)('children.requestPosition'),
                    },
                };
            },
            7641: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => s,
                        children: () => a,
                        displayStatus: () => n.W,
                        displayStatusIs: () => w,
                        events: () => r.U,
                        extraSize: () => b,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => D,
                        getBrowserTexturePath: () => o,
                        getDisplayStatus: () => p,
                        getScale: () => d,
                        getSize: () => A,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => f,
                        isFocused: () => g,
                        pxToRem: () => C,
                        remToPx: () => B,
                        resize: () => F,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => h,
                        setEventHandled: () => _,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => c,
                        whenTutorialReady: () => S,
                    });
                var a = t(3722),
                    n = t(6112),
                    r = t(6538),
                    i = t(8566);
                function s(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function l(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function o(u, e, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, a);
                }
                function E(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function c(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function A(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function F(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function m(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: B(e.x), y: B(e.y) };
                }
                function D() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function d() {
                    return viewEnv.getScale();
                }
                function C(u) {
                    return viewEnv.pxToRem(u);
                }
                function B(u) {
                    return viewEnv.remToPx(u);
                }
                function h(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function g() {
                    return viewEnv.isFocused();
                }
                function _() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function p() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(n.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === n.W[e]), u),
                        {},
                    ),
                    b = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    S = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : r.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                'use strict';
                t.d(e, { qP: () => o });
                const a = ['args'];
                const n = 2,
                    r = 16,
                    i = 32,
                    s = 64,
                    l = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(u);
                                    for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                    return n;
                                })(e, a);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([u, e]) => {
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
                        var n;
                    },
                    o = {
                        close(u) {
                            l('popover' === u ? n : i);
                        },
                        minimize() {
                            l(s);
                        },
                        move(u) {
                            l(r, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            6536: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => n });
                var a = t(6179);
                const n = (u) => {
                    const e = (0, a.useRef)(!1);
                    e.current || (u(), (e.current = !0));
                };
            },
            5415: (u, e, t) => {
                'use strict';
                t.d(e, { Aq: () => l, GS: () => o, cJ: () => i, fd: () => s });
                var a = t(6179),
                    n = t(7739),
                    r = t(1043);
                let i, s, l;
                !(function (u) {
                    (u[(u.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = r.j.small.width)] = 'Small'),
                        (u[(u.Medium = r.j.medium.width)] = 'Medium'),
                        (u[(u.Large = r.j.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge');
                })(i || (i = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = r.j.small.width)] = 'Small'),
                            (u[(u.Medium = r.j.medium.width)] = 'Medium'),
                            (u[(u.Large = r.j.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge');
                    })(s || (s = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = r.j.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = r.j.small.height)] = 'Small'),
                            (u[(u.Medium = r.j.medium.height)] = 'Medium'),
                            (u[(u.Large = r.j.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = r.j.extraLarge.height)] = 'ExtraLarge');
                    })(l || (l = {}));
                const o = () => {
                    const u = (0, a.useContext)(n.YN),
                        e = u.width,
                        t = u.height,
                        r = ((u) => {
                            switch (!0) {
                                case u.extraLarge:
                                    return i.ExtraLarge;
                                case u.large:
                                    return i.Large;
                                case u.medium:
                                    return i.Medium;
                                case u.small:
                                    return i.Small;
                                case u.extraSmall:
                                    return i.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), i.ExtraSmall;
                            }
                        })(u),
                        o = ((u) => {
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
                        E = ((u) => {
                            switch (!0) {
                                case u.extraLargeHeight:
                                    return l.ExtraLarge;
                                case u.largeHeight:
                                    return l.Large;
                                case u.mediumHeight:
                                    return l.Medium;
                                case u.smallHeight:
                                    return l.Small;
                                case u.extraSmallHeight:
                                    return l.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), l.ExtraSmall;
                            }
                        })(u);
                    return { mediaSize: r, mediaWidth: o, mediaHeight: E, remScreenWidth: e, remScreenHeight: t };
                };
            },
            5521: (u, e, t) => {
                'use strict';
                let a, n;
                t.d(e, { n: () => a }),
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
                            (u[(u.KEY_9 = 57)] = 'KEY_9');
                    })(a || (a = {})),
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
            3649: (u, e, t) => {
                'use strict';
                t.d(e, { Uw: () => m, WU: () => r, uF: () => i, v2: () => n });
                var a = t(1281);
                let n;
                function r(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                function i(u, e) {
                    return u.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                        const t = 0 === u.indexOf('%') ? 2 : 1;
                        return String(e[u.slice(t, -t)]);
                    });
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(n || (n = {}));
                const s = (u) => u.replace(/&nbsp;/g, ' '),
                    l = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    o = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    E = (u, e, t = n.left) => u.split(e).reduce(t === n.left ? l : o, []),
                    c = (() => {
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
                    A = ['zh_cn', 'zh_sg', 'zh_tw'],
                    F = (u, e = n.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (A.includes(t)) return c(u);
                        if ('ja' === t) {
                            return (0, a.D4)()
                                .parse(u)
                                .map((u) => s(u));
                        }
                        return ((u, e = n.left) => {
                            let t = [];
                            const a =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = s(u);
                            return E(r, /( )/, e).forEach((u) => (t = t.concat(E(u, a, n.left)))), t;
                        })(u, e);
                    },
                    m = (u, e, t) => u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : F(u, e)));
            },
            1358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
                var a = t(3138);
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
                        const r = a.O.view.addModelObserver(u, t, n);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", u),
                            r
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
                            const a = this._callbacks[t];
                            void 0 !== a && a(u, e);
                        });
                    }
                }
                n.__instance = void 0;
                const r = n;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9916);
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
            9916: (u, e, t) => {
                'use strict';
                t.d(e, { ry: () => C, Eu: () => B });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let a = u.target;
                                    do {
                                        if (a === e) return;
                                        a = a.parentNode;
                                    } while (a);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(u, e) {
                        this.addMouseListener(), this.entries.push({ container: u, callback: e });
                    }
                    unregister(u, e) {
                        const t = u,
                            a = e;
                        (this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== a)),
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
                a.__instance = void 0;
                const n = a;
                var r = t(1358);
                var i = t(8613);
                let s;
                !(function (u) {
                    (u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                        (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                        (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                        (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (u[(u.MOVE = 16)] = 'MOVE'),
                        (u[(u.CLOSE = 32)] = 'CLOSE'),
                        (u[(u.MINIMIZE = 64)] = 'MINIMIZE');
                })(s || (s = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    o = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(5521),
                    F = t(3138);
                const m = ['args'];
                function D(u, e, t, a, n, r, i) {
                    try {
                        var s = u[r](i),
                            l = s.value;
                    } catch (u) {
                        return void t(u);
                    }
                    s.done ? e(l) : Promise.resolve(l).then(a, n);
                }
                const d = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    C = (function () {
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
                                    return new Promise(function (a, n) {
                                        var r = u.apply(e, t);
                                        function i(u) {
                                            D(r, a, n, i, s, 'next', u);
                                        }
                                        function s(u) {
                                            D(r, a, n, i, s, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    B = () =>
                        new Promise((u) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    u();
                                });
                            });
                        }),
                    h = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                r = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(u);
                                    for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                    return n;
                                })(e, m);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, r, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var a;
                    },
                    g = () => h(s.CLOSE),
                    _ = (u, e) => {
                        u.keyCode === A.n.ESCAPE && e();
                    };
                var f = t(7572);
                const v = n.instance,
                    p = {
                        DataTracker: r.Z,
                        ViewModel: f.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: o,
                        TimeFormatType: E,
                        DateFormatType: c,
                        makeGlobalBoundingBox: d,
                        sendMoveEvent: (u) => h(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => h(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            h(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, a, n = R.invalid('resId'), r) => {
                            const i = F.O.view.getViewGlobalPosition(),
                                l = t.getBoundingClientRect(),
                                o = l.x,
                                E = l.y,
                                c = l.width,
                                A = l.height,
                                m = {
                                    x: F.O.view.pxToRem(o) + i.x,
                                    y: F.O.view.pxToRem(E) + i.y,
                                    width: F.O.view.pxToRem(c),
                                    height: F.O.view.pxToRem(A),
                                };
                            h(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: e,
                                bbox: d(m),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => _(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            _(u, g);
                        },
                        handleViewEvent: h,
                        onBindingsReady: C,
                        onLayoutReady: B,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const a in e)
                                if (Object.prototype.hasOwnProperty.call(e, a)) {
                                    const n = Object.prototype.toString.call(e[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = e[a];
                                        t[a] = [];
                                        for (let e = 0; e < n.length; e++) t[a].push({ value: u(n[e].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = u(e[a]))
                                            : (t[a] = e[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: v,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = p;
            },
            8613: (u, e, t) => {
                'use strict';
                t.d(e, { Z5: () => a, cy: () => n });
                const a = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    n = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    };
            },
            6511: (u, e, t) => {
                'use strict';
                var a = t(6179),
                    n = t.n(a),
                    r = t(493),
                    i = t.n(r),
                    s = t(7739),
                    l = t(6483),
                    o = t.n(l),
                    E = t(926),
                    c = t.n(E),
                    A = t(5415);
                const F = ['children', 'className'];
                function m() {
                    return (
                        (m =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        m.apply(this, arguments)
                    );
                }
                const D = {
                        [A.fd.ExtraSmall]: '',
                        [A.fd.Small]: c().SMALL_WIDTH,
                        [A.fd.Medium]: `${c().SMALL_WIDTH} ${c().MEDIUM_WIDTH}`,
                        [A.fd.Large]: `${c().SMALL_WIDTH} ${c().MEDIUM_WIDTH} ${c().LARGE_WIDTH}`,
                        [A.fd.ExtraLarge]:
                            `${c().SMALL_WIDTH} ${c().MEDIUM_WIDTH} ${c().LARGE_WIDTH} ${c().EXTRA_LARGE_WIDTH}`,
                    },
                    d = {
                        [A.Aq.ExtraSmall]: '',
                        [A.Aq.Small]: c().SMALL_HEIGHT,
                        [A.Aq.Medium]: `${c().SMALL_HEIGHT} ${c().MEDIUM_HEIGHT}`,
                        [A.Aq.Large]: `${c().SMALL_HEIGHT} ${c().MEDIUM_HEIGHT} ${c().LARGE_HEIGHT}`,
                        [A.Aq.ExtraLarge]:
                            `${c().SMALL_HEIGHT} ${c().MEDIUM_HEIGHT} ${c().LARGE_HEIGHT} ${c().EXTRA_LARGE_HEIGHT}`,
                    },
                    C = {
                        [A.cJ.ExtraSmall]: '',
                        [A.cJ.Small]: c().SMALL,
                        [A.cJ.Medium]: `${c().SMALL} ${c().MEDIUM}`,
                        [A.cJ.Large]: `${c().SMALL} ${c().MEDIUM} ${c().LARGE}`,
                        [A.cJ.ExtraLarge]: `${c().SMALL} ${c().MEDIUM} ${c().LARGE} ${c().EXTRA_LARGE}`,
                    },
                    B = (u) => {
                        let e = u.children,
                            t = u.className,
                            a = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, F);
                        const r = (0, A.GS)(),
                            i = r.mediaWidth,
                            s = r.mediaHeight,
                            l = r.mediaSize;
                        return n().createElement('div', m({ className: o()(t, D[i], d[s], C[l]) }, a), e);
                    },
                    h = ['children'];
                const g = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(u);
                            for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                            return n;
                        })(u, h);
                    return n().createElement(s.ZN, null, n().createElement(B, t, e));
                };
                var _ = t(1235),
                    f = t(9155),
                    v = t(907);
                engine.whenReady.then(() => {
                    document.documentElement.setAttribute('keep-esc-propagation', ''),
                        i().render(
                            n().createElement(
                                g,
                                null,
                                n().createElement(
                                    f.k,
                                    null,
                                    n().createElement(v.g, null),
                                    n().createElement(_.L, null),
                                ),
                            ),
                            document.getElementById('root'),
                        );
                });
            },
            9155: (u, e, t) => {
                'use strict';
                t.d(e, { k: () => D, t: () => d });
                var a = t(4969),
                    n = t(9174),
                    r = t(3946);
                function i() {
                    return !1;
                }
                console.log;
                var s = t(6179),
                    l = t.n(s),
                    o = t(3138);
                function E(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return c(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return c(u, e);
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var a = 0;
                        return function () {
                            return a >= u.length ? { done: !0 } : { done: !1, value: u[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function c(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, a = new Array(e); t < e; t++) a[t] = u[t];
                    return a;
                }
                const A = (u) => (0 === u ? window : window.subViews.get(u));
                var F = t(2290);
                const m = ((u, e) => {
                        const t = (0, s.createContext)({});
                        return [
                            function ({ mode: a = 'real', options: r, children: c, mocks: F }) {
                                const m = (0, s.useRef)([]),
                                    D = (t, a, r) => {
                                        var s;
                                        const l = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = A,
                                                context: a = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function r(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? n.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = n.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const i = (u) => {
                                                    const n = t(e),
                                                        r = a.split('.').reduce((u, e) => u[e], n);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? r
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (t, r) => {
                                                        const s = 'string' == typeof r ? `${a}.${r}` : a,
                                                            l = o.O.view.addModelObserver(s, e, !0);
                                                        return n.set(l, t), u && t(i(r)), l;
                                                    },
                                                    readByPath: i,
                                                    createCallback: (u, e) => {
                                                        const t = i(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = i(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var u, t = E(n.keys()); !(u = t()).done; ) r(u.value, e);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(a),
                                            c =
                                                'real' === t
                                                    ? l
                                                    : Object.assign({}, l, {
                                                          readByPath:
                                                              null != (s = null == r ? void 0 : r.getter)
                                                                  ? s
                                                                  : () => {},
                                                      }),
                                            F = (u) =>
                                                'mocks' === t ? (null == r ? void 0 : r.getter(u)) : c.readByPath(u),
                                            D = (u) => m.current.push(u),
                                            d = u({
                                                mode: t,
                                                readByPath: F,
                                                externalModel: c,
                                                observableModel: {
                                                    array: (u, e) => {
                                                        const a = null != e ? e : F(u),
                                                            r = n.LO.box(a, { equals: i });
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, n.aD)((u) => r.set(u)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (u, e) => {
                                                        const a = null != e ? e : F(u),
                                                            r = n.LO.box(a, { equals: i });
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, n.aD)((u) => r.set(u)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (u, e) => {
                                                        const a = F(e);
                                                        if (Array.isArray(u)) {
                                                            const r = u.reduce(
                                                                (u, e) => ((u[e] = n.LO.box(a[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    c.subscribe(
                                                                        (0, n.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                r[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = u,
                                                                i = Object.entries(r),
                                                                s = i.reduce(
                                                                    (u, [e, t]) => ((u[t] = n.LO.box(a[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    c.subscribe(
                                                                        (0, n.aD)((u) => {
                                                                            i.forEach(([e, t]) => {
                                                                                s[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: D,
                                            }),
                                            C = { mode: t, model: d, externalModel: c, cleanup: D };
                                        return {
                                            model: d,
                                            controls: 'mocks' === t && r ? r.controls(C) : e(C),
                                            externalModel: c,
                                            mode: t,
                                        };
                                    },
                                    d = (0, s.useRef)(!1),
                                    C = (0, s.useState)(a),
                                    B = C[0],
                                    h = C[1],
                                    g = (0, s.useState)(() => D(a, r, F)),
                                    _ = g[0],
                                    f = g[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        d.current ? f(D(B, r, F)) : (d.current = !0);
                                    }, [F, B, r]),
                                    (0, s.useEffect)(() => {
                                        h(a);
                                    }, [a]),
                                    (0, s.useEffect)(
                                        () => () => {
                                            _.externalModel.dispose(), m.current.forEach((u) => u());
                                        },
                                        [_],
                                    ),
                                    l().createElement(t.Provider, { value: _ }, c)
                                );
                            },
                            () => (0, s.useContext)(t),
                        ];
                    })(
                        ({ observableModel: u }) => {
                            const e = {
                                    deathCamHUD: u.object('deathCamHUD'),
                                    marker: u.object('marker'),
                                    valueWidth: n.LO.box('unset'),
                                    leaderVisible: n.LO.box(!1),
                                    tableVisible: n.LO.box(!1),
                                },
                                t = (0, r.Om)(() => {
                                    const u = Object.assign({}, e.marker.get());
                                    return (
                                        [
                                            'phase',
                                            'isAdvanced',
                                            'isKillerUnspotted',
                                            'impactMode',
                                            'isMarkerVisible',
                                            'phaseDuration',
                                            'phaseTimePassed',
                                            'isSimplified',
                                        ].forEach((e) => delete u[e]),
                                        u
                                    );
                                }),
                                i = (0, r.Om)(() => {
                                    const u = e.marker.get(),
                                        t = u.isKillerUnspotted,
                                        n = u.impactMode,
                                        r = u.shellType,
                                        i = u.shellIcon,
                                        s = u.armorNominal,
                                        l = u.caliberRule,
                                        o = u.angleRicochet;
                                    return {
                                        isKillerUnspotted: t,
                                        impactMode: n,
                                        shellType: r,
                                        shellIcon: i,
                                        armorNominal: s,
                                        is3CaliberRuleApplied: l === a.fE.ThreeCaliber,
                                        angleRicochet: o,
                                    };
                                }),
                                s = (0, r.Om)(() =>
                                    (0, F.uz)(
                                        t(),
                                        i().impactMode,
                                        e.marker.get().phase,
                                        e.marker.get().isKillerUnspotted,
                                        e.marker.get().isSimplified,
                                    ),
                                ),
                                l = n.LO.box(s()),
                                o = (0, r.Om)(() => {
                                    const u = e.marker.get();
                                    return {
                                        angleRicochet: u.angleRicochet,
                                        angleFailure: u.angleFailure,
                                        angleImpact: u.angleImpact,
                                    };
                                }),
                                E = (0, r.Om)(() => {
                                    const u = e.marker.get();
                                    return {
                                        phaseTimePassed: u.phaseTimePassed,
                                        phaseDuration: u.phaseDuration,
                                        isAdvanced: e.marker.get().isAdvanced,
                                    };
                                }),
                                c = (0, r.Om)(() => e.marker.get().isMarkerVisible),
                                A = (0, r.Om)(() => c() || e.leaderVisible.get()),
                                m = (0, r.Om)(() => !!c() && e.tableVisible.get()),
                                D = (0, r.Om)(() => s().length),
                                d = (0, r.Om)((u) => s()[u]),
                                C = (0, r.Om)((u, e) => d(u).animationParams[e]),
                                B = (0, r.Om)((u) => d(u).fullHeight),
                                h = (0, r.Om)((u) => d(u).basicHeight),
                                g = (0, r.Om)((u) => d(u).sections.length),
                                _ = (0, r.Om)((u, e) => d(u).sections[e]),
                                f = (0, r.Om)((u, e) => _(u, e).lines.length),
                                v = (0, r.Om)((u, e) => _(u, e).fullHeight),
                                p = (0, r.Om)((u, e, t) => _(u, e).lines[t]),
                                w = (0, r.Om)(() =>
                                    s().some((u) =>
                                        u.sections.some((u) => u.lines.some((u) => 'angleImpact' === u.name)),
                                    ),
                                ),
                                b = (0, r.Om)((u, e) => _(u, e).hasTopSeparator);
                            return Object.assign({}, e, {
                                table: l,
                                computes: {
                                    table: {
                                        getLeaderVisibility: A,
                                        getProgressProps: E,
                                        getData: t,
                                        getCardsCount: D,
                                        getHasAngleIndicator: w,
                                        getVisibility: m,
                                    },
                                    card: {
                                        getAnimationParams: C,
                                        getFullHeight: B,
                                        getBasicHeight: h,
                                        getSectionsCount: g,
                                    },
                                    section: {
                                        getHeight: v,
                                        getLinesCount: f,
                                        getLine: p,
                                        getAngles: o,
                                        getHasTopSeparator: b,
                                    },
                                    getCommonDataLineProps: i,
                                },
                            });
                        },
                        ({ model: u }) =>
                            (function (u) {
                                const e = {};
                                for (const t in u)
                                    if (Object.prototype.hasOwnProperty.call(u, t)) {
                                        const a = u[t];
                                        e[t] = (0, n.aD)(a);
                                    }
                                return e;
                            })({
                                setValueWidth: (e) => u.valueWidth.set(e),
                                setTableVisibility: (e) => u.tableVisible.set(e),
                                setLeaderVisibility: (e) => u.leaderVisible.set(e),
                            }),
                    ),
                    D = m[0],
                    d = m[1];
            },
            1235: (u, e, t) => {
                'use strict';
                t.d(e, { L: () => k });
                var a = t(6179),
                    n = t.n(a),
                    r = t(3403),
                    i = t(9155),
                    s = t(6483),
                    l = t.n(s);
                const o = 'DeathCamUIView_base_93',
                    E = 'DeathCamUIView_cinemaBar_87',
                    c = 'DeathCamUIView_cinemaBar__visible_ab',
                    A = 'DeathCamUIView_notificationWrapper_92',
                    F = 'DeathReasonNotification_base_ad',
                    m = 'DeathReasonNotification_base__visible_ab',
                    D = 'DeathReasonNotification_contentContainer_d2',
                    d = 'DeathReasonNotification_destructionContainer_d2',
                    C = 'DeathReasonNotification_icon_7f';
                var B = t(4969);
                const h = R.atlases.deathCam,
                    g = R.strings.death_cam.hints,
                    _ = (0, r.Pi)(() => {
                        const u = (0, i.t)().model,
                            e = u.deathCamHUD.get().isFinalPhase,
                            t = u.deathCamHUD.get().impactMode,
                            a = l()(F, e && m),
                            r = t || B.pE.penetration,
                            s = h[r === B.pE.penetration ? 'shellPenetrationEffective' : r]();
                        return n().createElement(
                            'div',
                            { className: a },
                            n().createElement(
                                'div',
                                { className: D },
                                n().createElement(
                                    'div',
                                    { className: d },
                                    g.death_reason.destroyed(),
                                    n().createElement('div', {
                                        className: C,
                                        style: { backgroundImage: `url('${s}')` },
                                    }),
                                    g.death_reason[r](),
                                ),
                            ),
                        );
                    }),
                    f = 'HintContainer_base_53',
                    v = 'HintContainer_background_9b',
                    p = 'HintContainer_content_21',
                    w = 'HintContainer_divider_12',
                    b = 'Hint_base_e2',
                    S = 'Hint_description_a5',
                    x = 'Hint_counter_be',
                    L = {
                        base: 'HintButton_base_19',
                        btnOuter: 'HintButton_btnOuter_f9',
                        btnOuter__blink: 'HintButton_btnOuter__blink_e7',
                        animationContainer: 'HintButton_animationContainer_c5',
                        buttonContainer: 'HintButton_buttonContainer_2a',
                        btnInner: 'HintButton_btnInner_e4',
                        btnInner__blink: 'HintButton_btnInner__blink_75',
                    };
                var y = t(7030);
                const I = ({ btnText: u, hasBlinkAnimation: e = !1, isBlinking: t = !1 }) => {
                    const r = (0, a.useState)(!1),
                        i = r[0],
                        s = r[1],
                        o = l()(L.btnOuter, L.btnOuter__blink),
                        E = l()(L.btnInner, L.btnInner__blink),
                        c = (0, y.useSpring)({
                            loop: !0,
                            reset: i,
                            from: { opacity: 0, transform: 'scale(1)' },
                            to: i
                                ? [
                                      { opacity: 0, transform: 'scale(1)', config: { duration: 150 } },
                                      { opacity: 1, transform: 'scale(1)', config: { duration: 150 } },
                                      { opacity: 0, transform: 'scale(1.4)', config: { duration: 250 } },
                                  ]
                                : { opacity: 0, transform: 'scale(1)' },
                            delay: 700,
                        });
                    return (
                        (0, a.useEffect)(() => {
                            s(!!t);
                        }, [t]),
                        n().createElement(
                            'div',
                            { className: L.base },
                            n().createElement(
                                'div',
                                { className: L.btnContainer },
                                n().createElement(
                                    'div',
                                    { className: L.btnOuter },
                                    n().createElement('div', { className: L.btnInner }, u),
                                ),
                            ),
                            e &&
                                t &&
                                n().createElement(
                                    y.animated.div,
                                    { className: L.animationContainer, style: c },
                                    n().createElement(
                                        'div',
                                        { className: o },
                                        n().createElement('div', { className: E }, u),
                                    ),
                                ),
                        )
                    );
                };
                var H = t(3649);
                const O = 'FormatText_base_d0',
                    T = ({
                        binding: u,
                        text: e = '',
                        classMix: t,
                        alignment: r = H.v2.left,
                        formatWithBrackets: i,
                    }) => {
                        if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                        const s = i && u ? (0, H.WU)(e, u) : e;
                        return n().createElement(
                            a.Fragment,
                            null,
                            s.split('\n').map((e, i) =>
                                n().createElement(
                                    'div',
                                    { className: l()(O, t), key: `${e}-${i}` },
                                    (0, H.Uw)(e, r, u).map((u, e) =>
                                        n().createElement(a.Fragment, { key: `${e}-${u}` }, u),
                                    ),
                                ),
                            ),
                        );
                    },
                    P = ({ btnText: u, description: e, remainingTime: t = 0 }) => {
                        const a = t.toFixed(2).toString().padStart(5, '0'),
                            r = { duration: n().createElement('div', { className: x }, a) };
                        return n().createElement(
                            'div',
                            { className: b },
                            n().createElement(I, { btnText: u }),
                            n().createElement('div', { className: S }, n().createElement(T, { text: e, binding: r })),
                        );
                    },
                    M = (0, r.Pi)(() => {
                        const u = (0, i.t)().model,
                            e = u.deathCamHUD.get().barsVisible,
                            t = u.deathCamHUD.get().remainingTime,
                            a = u.marker.get().isSimplified
                                ? R.strings.death_cam.hints.camera_flow.pauseSimplified()
                                : R.strings.death_cam.hints.camera_flow.pause(),
                            r = e ? a : R.strings.death_cam.hints.camera_flow.resume();
                        return n().createElement(
                            'div',
                            { className: f },
                            n().createElement('div', { className: v }),
                            n().createElement(
                                'div',
                                { className: p },
                                n().createElement(P, {
                                    btnText: R.strings.death_cam.hints.skip.buttonText(),
                                    description: R.strings.death_cam.hints.skip.label(),
                                }),
                                n().createElement('div', { className: w }),
                                n().createElement(P, {
                                    btnText: R.strings.death_cam.hints.camera_flow.buttonText(),
                                    description: r,
                                    remainingTime: t,
                                }),
                            ),
                        );
                    }),
                    k = (0, r.Pi)(() => {
                        const u = (0, i.t)().model.deathCamHUD.get().barsVisible,
                            e = l()(E, u && c);
                        return n().createElement(
                            'div',
                            { className: o },
                            n().createElement('div', { className: e }),
                            n().createElement('div', { className: A }, n().createElement(_, null)),
                            n().createElement(M, null),
                            n().createElement('div', { className: e }),
                        );
                    });
            },
            907: (u, e, t) => {
                'use strict';
                t.d(e, { g: () => lu });
                var a = t(6179),
                    n = t.n(a),
                    r = t(3403),
                    i = t(5415),
                    s = t(9155);
                const l = 'MarkerView_base_1b',
                    o = 'MarkerView_base__hidden_c2';
                var E = t(1433);
                const c = (u) => u * u,
                    A = 'Leader_base_ea';
                var F = t(7030);
                const m = (0, r.Pi)(() => {
                        const u = (0, s.t)(),
                            e = u.model.computes.table,
                            t = u.controls.setTableVisibility,
                            r = e.getLeaderVisibility(),
                            i = (0, a.useRef)(null),
                            l = (0, a.useState)(viewEnv.getScale()),
                            o = l[0],
                            m = l[1];
                        var D, d;
                        (D = () => m(viewEnv.getScale())),
                            (d = []),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', D), () => window.removeEventListener('resize', D)
                                ),
                                d,
                            ),
                            ((u, e) => {
                                (0, a.useEffect)(() => {
                                    let e = null;
                                    return (
                                        (e = requestAnimationFrame(() => {
                                            e = requestAnimationFrame(() => {
                                                (e = null), u();
                                            });
                                        })),
                                        () => {
                                            null !== e && cancelAnimationFrame(e);
                                        }
                                    );
                                }, e);
                            })(() => {
                                var u;
                                const e = null == (u = i.current) ? void 0 : u.getContext('2d');
                                if (!e) return;
                                const t = E.SA * o,
                                    a = E.Cb * o,
                                    n = E.oP * o,
                                    r = E.ut * o,
                                    s = E.lG * o;
                                e.clearRect(0, 0, E.d2, E.Cb), (e.fillStyle = 'white');
                                const l = e.createLinearGradient(t, a, n, r);
                                l.addColorStop(0, 'rgba(255, 255, 255, 0)'),
                                    l.addColorStop(0.1, 'white'),
                                    l.addColorStop(1, 'white'),
                                    (e.strokeStyle = l),
                                    e.moveTo(t, a),
                                    e.lineTo(n, r),
                                    e.moveTo(n, r),
                                    e.arc(n, r, s, 0, 2 * Math.PI),
                                    e.stroke(),
                                    e.fill();
                            }, []);
                        const C = (0, F.useSpring)({
                            from: { width: '0rem' },
                            to: { width: r ? `${E.d2}rem` : '0rem' },
                            config: { duration: E.zn, easing: c },
                            onRest: () => t(r),
                        });
                        return n().createElement(
                            F.animated.div,
                            { style: C, className: A },
                            n().createElement('canvas', { ref: i, width: E.d2 * o, height: E.Cb * o }),
                        );
                    }),
                    D = (u, e) => {
                        const t = [];
                        for (let a = 0; a < u; a++) t.push(e(a));
                        return t;
                    };
                var d = t(6483),
                    C = t.n(d);
                const B = 'Section_base_d7',
                    h = 'Section_base__separator_9d';
                var g = t(9916);
                const _ = 31,
                    f = Math.ceil(42),
                    v = (u) => (Math.PI * u) / 180,
                    p = 'ImpactIndicator_base_bd',
                    w = 'ImpactIndicator_shadowedOverlay_5d';
                function b(u, e, t, a, n, r, i) {
                    try {
                        var s = u[r](i),
                            l = s.value;
                    } catch (u) {
                        return void t(u);
                    }
                    s.done ? e(l) : Promise.resolve(l).then(a, n);
                }
                const S = (0, r.Pi)(() => {
                        const u = (0, s.t)().model.computes.section.getAngles(),
                            e = u.angleRicochet,
                            t = u.angleFailure,
                            r = u.angleImpact,
                            l = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            E = ((0, i.GS)().mediaSize === i.cJ.ExtraSmall ? 0.9 : 1) * viewEnv.getScale(),
                            c = 48 * E,
                            A = 84 * E,
                            F = (function () {
                                var u,
                                    a =
                                        ((u = function* () {
                                            if ((yield (0, g.Eu)(), !l.current || !o.current)) return;
                                            const u = l.current.getContext('2d'),
                                                a = o.current.getContext('2d');
                                            if (!u || !a) return;
                                            (u.canvas.width = c),
                                                (u.canvas.height = A),
                                                (a.canvas.width = c),
                                                (a.canvas.height = A),
                                                u.scale(E, E),
                                                a.scale(E, E),
                                                u.clearRect(0, 0, c, A),
                                                a.clearRect(0, 0, c, A),
                                                (u.strokeStyle = 'white'),
                                                (u.fillStyle = 'white'),
                                                (a.strokeStyle = 'white'),
                                                (a.fillStyle = 'white');
                                            const n = v(e),
                                                i = v(t),
                                                s = v(r);
                                            ((u, e) => {
                                                u.save(),
                                                    u.beginPath(),
                                                    (u.fillStyle = '#4c4c4c'),
                                                    u.moveTo(6, f),
                                                    u.arc(6, f, _, v(-90), -e),
                                                    u.moveTo(6, f),
                                                    u.arc(6, f, _, v(90), e, !0),
                                                    u.fill(),
                                                    u.restore();
                                            })(u, n),
                                                ((u, e, t) => {
                                                    u.save(),
                                                        u.beginPath(),
                                                        (u.fillStyle = '#7b7b7b'),
                                                        u.moveTo(6, f),
                                                        u.arc(6, f, _, -e, -t),
                                                        u.moveTo(6, f),
                                                        u.arc(6, f, _, e, t, !0),
                                                        u.fill(),
                                                        u.restore();
                                                })(u, n, i),
                                                ((u, e) => {
                                                    u.save(),
                                                        u.beginPath(),
                                                        (u.fillStyle = '#bfbfbf'),
                                                        u.moveTo(6, f),
                                                        u.arc(6, f, _, -e, e),
                                                        u.fill(),
                                                        u.restore();
                                                })(u, i),
                                                ((u, e) => {
                                                    u.save(),
                                                        (u.fillStyle = '#dcdcdc'),
                                                        u.beginPath(),
                                                        u.moveTo(6, f),
                                                        u.arc(6, f, _, v(0), e),
                                                        u.fill(),
                                                        u.restore();
                                                })(a, s),
                                                ((u) => {
                                                    u.fillRect(4, f, 34, 1);
                                                })(a),
                                                ((u, e) => {
                                                    u.save();
                                                    const t = Math.cos(e),
                                                        a = Math.sin(e);
                                                    u.transform(t, a, -a, t, 6, f),
                                                        ((u) => {
                                                            for (let e = 0; e < 7.75; e++)
                                                                u.fillRect(4 * e, 0, 2, 1), u.moveTo(4 * e + 2, 0);
                                                        })(u),
                                                        ((u) => {
                                                            const e = 0.75;
                                                            u.save(),
                                                                u.translate(33, 0),
                                                                u.beginPath(),
                                                                u.moveTo(0, 0),
                                                                u.lineTo(3, -0.75),
                                                                u.lineTo(6, -0.75),
                                                                u.lineTo(6, e),
                                                                u.lineTo(3, e),
                                                                u.lineTo(0, 0),
                                                                u.moveTo(7, -0.75),
                                                                u.lineTo(9, -0.75),
                                                                u.lineTo(9, e),
                                                                u.lineTo(7, e),
                                                                u.fill(),
                                                                u.restore();
                                                        })(u),
                                                        u.restore();
                                                })(a, s),
                                                ((u) => {
                                                    u.save();
                                                    const e = f - 33,
                                                        t = 66 / 9,
                                                        a = e + 0.5,
                                                        n = a + 1.5,
                                                        r = e + 4.5,
                                                        i = r + 1;
                                                    u.fillRect(3, e, 1.5, 66),
                                                        u.beginPath(),
                                                        (u.lineWidth = 0.5),
                                                        [...new Array(9)].map((e, s) => {
                                                            u.moveTo(0, s * t + a),
                                                                u.lineTo(3, s * t + n),
                                                                u.moveTo(1.5, s * t + r),
                                                                u.lineTo(3, s * t + i);
                                                        }),
                                                        u.stroke(),
                                                        u.restore();
                                                })(a);
                                        }),
                                        function () {
                                            var e = this,
                                                t = arguments;
                                            return new Promise(function (a, n) {
                                                var r = u.apply(e, t);
                                                function i(u) {
                                                    b(r, a, n, i, s, 'next', u);
                                                }
                                                function s(u) {
                                                    b(r, a, n, i, s, 'throw', u);
                                                }
                                                i(void 0);
                                            });
                                        });
                                return function () {
                                    return a.apply(this, arguments);
                                };
                            })();
                        return (
                            F(),
                            n().createElement(
                                'div',
                                { className: p },
                                n().createElement('canvas', { ref: l, width: c, height: A }),
                                n().createElement('canvas', { ref: o, width: c, height: A, className: w }),
                            )
                        );
                    }),
                    x = 'Icon_base_c6';
                var L = t(3138);
                let y;
                !(function (u) {
                    (u.Small = 'small'), (u.Medium = 'medium');
                })(y || (y = {}));
                const I = R.atlases.deathCam,
                    H = ({ name: u, value: e, impactMode: t, isKillerUnspotted: r }) => {
                        const i =
                                (() => {
                                    const u = (0, a.useState)(L.O.view.getScale()),
                                        e = u[0],
                                        t = u[1];
                                    return (
                                        (0, a.useEffect)(() => {
                                            const u = () => {
                                                t(L.O.view.getScale());
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
                                })() > 1
                                    ? y.Medium
                                    : y.Small,
                            s = R.images.gui.maps.icons.shell.$dyn(i);
                        if ('angleImpact' === u) return n().createElement(S, null);
                        {
                            var l;
                            let a = u;
                            return 'shellType' === u
                                ? n().createElement('div', {
                                      className: x,
                                      style: { backgroundImage: `url(${s.$dyn(e.toString())})` },
                                  })
                                : ('deathReason' === u
                                      ? (a = e)
                                      : 'shellDamageBurst' === u || 'shellDamageEffective' === u
                                        ? (a = t)
                                        : 'shootDistance' === u && r && (a = 'unspotted'),
                                  n().createElement('div', {
                                      className: x,
                                      style: { backgroundImage: `url(${null == (l = I[a]) ? void 0 : l.call(I)})` },
                                  }));
                        }
                    };
                var O = t(4969),
                    T = t(3649);
                const P = R.strings.death_cam.marker,
                    M = ['shellArmorAngleGain', 'shellDamageRandomizationFactor', 'damageDistanceModifier'],
                    k = ['shootDistance'];
                O.kb.crew, O.kb.detonation, O.kb.ignition;
                var N;
                !(function (u) {
                    (u.ARMOR_PIERCING = 'ARMOR_PIERCING'),
                        (u.ARMOR_PIERCING_CR = 'ARMOR_PIERCING_CR'),
                        (u.ARMOR_PIERCING_HE = 'ARMOR_PIERCING_HE'),
                        (u.HOLLOW_CHARGE = 'HOLLOW_CHARGE'),
                        (u.HIGH_EXPLOSIVE = 'HIGH_EXPLOSIVE');
                })(N || (N = {}));
                const G = {
                        [O.gC.armorPiercing]: N.ARMOR_PIERCING,
                        [O.gC.armorPiercingPremium]: N.ARMOR_PIERCING,
                        [O.gC.armorPiercingCr]: N.ARMOR_PIERCING_CR,
                        [O.gC.armorPiercingCrPremium]: N.ARMOR_PIERCING_CR,
                        [O.gC.highExplosive]: N.HIGH_EXPLOSIVE,
                        [O.gC.highExplosivePremium]: N.HIGH_EXPLOSIVE,
                        [O.gC.highExplosiveModern]: N.HIGH_EXPLOSIVE,
                        [O.gC.highExplosiveSpg]: N.HIGH_EXPLOSIVE,
                        [O.gC.highExplosiveSpgStun]: N.HIGH_EXPLOSIVE,
                        [O.gC.highExplosiveModernPremium]: N.HIGH_EXPLOSIVE,
                        [O.gC.hollowCharge]: N.HOLLOW_CHARGE,
                        [O.gC.hollowChargePremium]: N.HOLLOW_CHARGE,
                    },
                    Q = (u, e = !1) => {
                        const t = R.strings.item_types.shell[e ? 'kindsAbbreviation' : 'kinds'],
                            a = G[u];
                        return t[a] ? t[a]() : (console.error('No text for shell type', u), '');
                    },
                    W = {
                        base: 'DataLine_base_16',
                        iconContainer__impactAngle: 'DataLine_iconContainer__impactAngle_26',
                        iconContainer: 'DataLine_iconContainer_c8',
                        iconContainer__wide: 'DataLine_iconContainer__wide_20',
                        value: 'DataLine_value_b2',
                        value__unspottedDetailed: 'DataLine_value__unspottedDetailed_4c',
                        value__unspottedSimple: 'DataLine_value__unspottedSimple_78',
                        orangeGlow: 'DataLine_orangeGlow_c3',
                        glowElement: 'DataLine_glowElement_16',
                        redGlow: 'DataLine_redGlow_46',
                        major: 'DataLine_major_1a',
                        extraHeader: 'DataLine_extraHeader_51',
                        extraHeader_icon: 'DataLine_extraHeader_icon_2e',
                        headIconShell: 'DataLine_headIconShell_d5',
                        headIconTank: 'DataLine_headIconTank_dc',
                        additionalShellInfo: 'DataLine_additionalShellInfo_25',
                    },
                    j = 'ColoredText_unit_3b',
                    U = ({ text: u }) => {
                        const e = /{colorTagOpen}([^{]*){colorTagClose}/g,
                            t = u.split(e);
                        if (t.length <= 1) return n().createElement(n().Fragment, null, u);
                        const a = [],
                            r = e.exec(u).pop();
                        return (
                            t.forEach((u) =>
                                a.push(u === r ? n().createElement('div', { className: j, key: u }, u) : u),
                            ),
                            n().createElement(n().Fragment, null, a)
                        );
                    };
                var V = t(2290);
                const z = (0, r.Pi)(({ cardId: u, sectionId: e, lineId: t, isAdvancedLinesVisible: a }) => {
                        const r = (0, s.t)().model,
                            i = r.valueWidth,
                            l = r.computes,
                            o = l.section,
                            c = l.table,
                            A = l.getCommonDataLineProps,
                            F = o.getLine(u, e, t),
                            m = F.name,
                            D = F.value,
                            d = F.effects,
                            B = F.height,
                            h = A(),
                            g = h.isKillerUnspotted,
                            _ = h.impactMode,
                            f = h.shellType,
                            v = h.shellIcon,
                            p = h.armorNominal,
                            w = h.is3CaliberRuleApplied,
                            b = h.angleRicochet,
                            S = d.has(E.Qm.HeadIconShell) || d.has(E.Qm.HeadIconTank),
                            x = S ? B - E.h - E.YF : B,
                            L = C()(W.base, [[...d].map((u) => W[u])]),
                            I = C()(
                                W.iconContainer,
                                'angleImpact' === m && W.iconContainer__impactAngle,
                                c.getHasAngleIndicator() && W.iconContainer__wide,
                            ),
                            N = C()(
                                W.value,
                                'shootDistance' === m &&
                                    g &&
                                    (model.marker.isSimplified ? W.value__unspottedSimple : W.value__unspottedDetailed),
                            ),
                            G = (({ name: u, value: e, impactMode: t, armorNominal: a, isKillerUnspotted: n }) => {
                                var r;
                                const i = () => {
                                    const e = P.paramName,
                                        t = u;
                                    return e[t] ? e[t]() : (console.error('No text for Parameter Name', u), '');
                                };
                                switch (u) {
                                    case 'deathReason': {
                                        const u = P.paramName.deathReason,
                                            t = e;
                                        return u[t] ? u[t]() : (console.error('No text for death reason', e), '');
                                    }
                                    case 'shellType':
                                        return Q(e);
                                    case 'armorRelative':
                                        var s;
                                        return 0 === a ? (null != (s = P.paramName.nonArmored()) ? s : '') : i();
                                    case 'shellDamageEffective':
                                        return null != (r = P.paramName.shellDamageEffective[t]()) ? r : '';
                                    case 'caliberRule':
                                        return e === O.fE.TwoCaliber
                                            ? P.paramName.is2CaliberRuleApplied()
                                            : P.paramName.is3CaliberRuleApplied();
                                    case 'shootDistance':
                                        return n ? P.paramName.shootDistanceUnspotted() : P.paramName.shootDistance();
                                    default:
                                        return i();
                                }
                            })({ name: m, value: D, impactMode: _, armorNominal: p, isKillerUnspotted: g }),
                            j = R.images.gui.maps.icons.shell.$dyn(y.Small);
                        return n().createElement(
                            n().Fragment,
                            null,
                            S &&
                                n().createElement(
                                    'div',
                                    { className: C()(W.extraHeader, L) },
                                    n().createElement('div', { className: W.extraHeader_icon }),
                                ),
                            n().createElement(
                                'div',
                                { className: L, style: { height: `${x}rem` } },
                                (0, V.f8)(d) &&
                                    !(d.has(E.Qm.Advanced) && !a) &&
                                    n().createElement('div', { className: W.glowElement }),
                                n().createElement(
                                    'div',
                                    { className: I },
                                    d.has(E.Qm.Icon) &&
                                        n().createElement(H, {
                                            name: m,
                                            value: 'shellType' === m ? v : D,
                                            impactMode: _,
                                            isKillerUnspotted: g,
                                        }),
                                ),
                                !['shellType', 'deathReason'].includes(m) &&
                                    n().createElement(
                                        'div',
                                        { className: N, style: { width: i.get() } },
                                        ((u, e, t, a, n, r, i, s) => {
                                            let l = String(e);
                                            'number' == typeof e &&
                                                (M.includes(u) && e > 0
                                                    ? (l = (0, T.uF)(P.value.signPositive(), { value: e }))
                                                    : e < 0 &&
                                                      (l = (0, T.uF)(P.value.signNegative(), { value: Math.abs(e) })));
                                            let o = String(l);
                                            if (
                                                ('angleRicochet' === u && e >= 90) ||
                                                ('angleRicochet' === u && E.HE.includes(n) && a === O.pE.penetration) ||
                                                ('angleRicochet' === u && i)
                                            )
                                                o = P.value.notAffected();
                                            else if (t && 'damageDistanceModifier' === u) o = P.value.unspotted();
                                            else {
                                                if (t && k.includes(u)) return '';
                                                'shellPenetrationEffective' === u && a !== O.pE.penetration
                                                    ? (o = P.value.failed())
                                                    : ('armorRelative' === u && 0 === r) ||
                                                        ('angleFailure' === u && e >= s)
                                                      ? (o = P.value.dashes())
                                                      : 'angleImpact' === u
                                                        ? (o = P.value.angle.exact())
                                                        : 'angleRicochet' === u || 'angleFailure' === u
                                                          ? (o = P.value.angle.more())
                                                          : 'caliberRule' === u
                                                            ? (o = P.value.applied())
                                                            : 'deathReason' === u && (o = P.paramName.deathReason[e]());
                                            }
                                            return (0, T.uF)(o, { value: l });
                                        })(m, D, g, _, f, p, w, b),
                                    ),
                                n().createElement(U, { text: G }),
                                d.has(E.Qm.AdditionalShellInfo) &&
                                    n().createElement(
                                        'div',
                                        {
                                            className: W.additionalShellInfo,
                                            style: { backgroundImage: `url(${j.$dyn(v)})` },
                                        },
                                        Q(f, !0),
                                    ),
                            ),
                        );
                    }),
                    $ = (0, r.Pi)(({ cardId: u, sectionId: e, isAdvancedLinesVisible: t }) => {
                        const a = (0, s.t)().model.computes.section,
                            r = a.getLinesCount(u, e),
                            i = a.getHasTopSeparator(u, e),
                            l = a.getHeight(u, e),
                            o = C()(B, t && 0 !== e && i && h);
                        return n().createElement(
                            'div',
                            { key: `${u}:${e}`, className: o, style: { height: `${l}rem` } },
                            D(r, (a) =>
                                n().createElement(z, {
                                    key: `${u}:${e}:${a}`,
                                    cardId: u,
                                    sectionId: e,
                                    lineId: a,
                                    isAdvancedLinesVisible: t,
                                }),
                            ),
                        );
                    }),
                    q = 'CardAnimation_card_3d',
                    K = (0, r.Pi)(({ cardId: u, bottomToTop: e = !1, isExpanding: t }) => {
                        const r = (0, s.t)(),
                            i = r.model,
                            l = i.marker,
                            o = i.computes,
                            E = o.table,
                            c = o.card,
                            A = r.controls.setLeaderVisibility,
                            m = E.getVisibility(),
                            d = l.get().isAdvanced && !l.get().isSimplified,
                            C = m && d === t ? 'advanced' : 'basic',
                            B = c.getAnimationParams(u, C),
                            h = B.dimensionsIncreaseDelay,
                            g = B.contentIncreaseDelay,
                            _ = B.contentDecreaseDelay,
                            f = B.dimensionsDecreaseDelay,
                            v = B.duration;
                        let p = 0;
                        m && (p = d ? c.getFullHeight(u) : c.getBasicHeight(u));
                        const w = t ? g : _,
                            b = t ? h : f,
                            S = (0, a.useState)(m && t),
                            x = S[0],
                            L = S[1],
                            R = m ? 0 : c.getFullHeight(u),
                            y = (0, a.useRef)(!0);
                        (0, a.useEffect)(
                            () => () => {
                                y.current = !1;
                            },
                            [],
                        );
                        const I = (0, F.useSpring)({
                                clipPath: e
                                    ? `inset(${R}rem 0 0)`
                                    : `polygon(0rem 0rem, 100% 0rem, 100% ${p - 0.1}rem, 0rem ${p - 0.1}rem)`,
                                delay: w,
                                config: { duration: v },
                                onRest: () => y.current && L(d),
                                onStart: () => d && t && L(!0),
                            }).clipPath,
                            H = (0, F.useSpring)({
                                height: `${p}rem`,
                                delay: b,
                                config: { duration: v },
                                onRest: () => !e && A(m),
                            }).height;
                        return n().createElement(
                            F.animated.div,
                            { style: { clipPath: I, height: H } },
                            n().createElement(
                                'div',
                                { className: q },
                                D(c.getSectionsCount(u), (e) =>
                                    n().createElement($, {
                                        key: `${u}:${e}`,
                                        cardId: u,
                                        sectionId: e,
                                        isAdvancedLinesVisible: x,
                                    }),
                                ),
                            ),
                        );
                    }),
                    Y = 'CardContainer_base_da',
                    X = 'CardContainer_base__empty_d1',
                    Z = 'CardContainer_children_7a',
                    J = 'CardContainer_border_d6',
                    uu = 'CardContainer_background_49',
                    eu = ({ isEmpty: u, children: e }) =>
                        n().createElement(
                            'div',
                            { className: C()(Y, u && X) },
                            n().createElement('div', { className: J }),
                            n().createElement('div', { className: uu }),
                            n().createElement('div', { className: Z }, e),
                        ),
                    tu = 'Progress_base_42',
                    au = 'Progress_bar_72',
                    nu = 'Progress_ending_c8',
                    ru = (0, r.Pi)(({ isVisible: u = !0 }) => {
                        var e, t;
                        const r = (0, s.t)().model.computes.table.getProgressProps(),
                            i = r.phaseTimePassed,
                            l = r.phaseDuration,
                            o = r.isAdvanced,
                            c = (0, a.useRef)(null),
                            A = viewEnv.pxToRem(null != (e = null == (t = c.current) ? void 0 : t.scrollWidth) ? e : 0),
                            m = A - 8,
                            D = l ? (A * i) / l : m,
                            d = (0, F.useSpring)({
                                pause: o,
                                from: { width: `${D}rem` },
                                to: { width: `${m}rem` },
                                config: { duration: l - i },
                            }).width,
                            C = (0, F.useSpring)({ opacity: Number(u), config: { duration: E.zn } }).opacity;
                        return n().createElement(
                            F.animated.div,
                            { className: tu, style: { opacity: C }, ref: c },
                            n().createElement(F.animated.div, { className: au, style: { width: d } }),
                            n().createElement('div', { className: nu }),
                        );
                    }),
                    iu = 'DataTable_top_8f',
                    su = (0, r.Pi)(() => {
                        const u = (0, s.t)(),
                            e = u.model,
                            t = e.marker,
                            r = e.computes,
                            i = r.table,
                            l = r.card,
                            o = u.controls.setValueWidth,
                            c = t.get().isAdvanced,
                            A = i.getVisibility(),
                            F = (0, a.useRef)(null),
                            m = (0, a.useRef)(null),
                            d = (0, a.useRef)(0),
                            C = (0, a.useMemo)(() => Number(A) + Number(c) >= d.current, [A, c]),
                            B = (0, a.useState)(!1),
                            h = B[0],
                            g = B[1],
                            _ = (0, a.useState)(!1),
                            f = _[0],
                            v = _[1];
                        !f && o('unset'),
                            (0, a.useEffect)(() => {
                                d.current = Number(A) + Number(c);
                            }, [A, c]),
                            (0, a.useEffect)(() => {
                                const u = setTimeout(() => g(A), A ? E.zn : 0);
                                return () => clearTimeout(u);
                            }, [A]),
                            (0, a.useEffect)(
                                () =>
                                    ((u) => {
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
                                    })(() => {
                                        var u, e;
                                        const t = Array.from(
                                            null !=
                                                (u =
                                                    null == (e = F.current)
                                                        ? void 0
                                                        : e.getElementsByClassName(W.value))
                                                ? u
                                                : [],
                                        );
                                        var a;
                                        o(
                                            `${((a = t), viewEnv.pxToRem(a.sort((u, e) => e.scrollWidth - u.scrollWidth)[0].scrollWidth))}rem`,
                                        ),
                                            v(!0);
                                    }),
                                [o, A],
                            );
                        const p = l.getFullHeight(0);
                        return n().createElement(
                            'div',
                            {
                                ref: F,
                                style: { marginTop: f ? E.ut - p + 'rem' : void 0, marginLeft: `${E.oP + 4}rem` },
                            },
                            n().createElement(
                                'div',
                                { className: iu, style: { height: `${p}rem` } },
                                n().createElement(ru, { isVisible: h }),
                                n().createElement(
                                    eu,
                                    null,
                                    n().createElement(K, { cardId: 0, bottomToTop: !0, isExpanding: C }),
                                ),
                            ),
                            n().createElement(
                                'div',
                                { ref: m },
                                D(i.getCardsCount() - 1, (u) => {
                                    const e = u + 1;
                                    return n().createElement(
                                        eu,
                                        { isEmpty: !(Boolean(l.getBasicHeight(e)) || c), key: u },
                                        n().createElement(K, { cardId: e, isExpanding: C }),
                                    );
                                }),
                            ),
                        );
                    }),
                    lu = (0, r.Pi)(() => {
                        const u = (0, i.GS)().mediaSize,
                            e = (0, s.t)().model;
                        return n().createElement(
                            'div',
                            {
                                className: l,
                                'data-bind-class-toggle': o + ': !{{model.marker.base.isVisible}}',
                                'data-bind-style-left': `parseFloat({{model.marker.base.posx}} + ${E.DC})+"rem"`,
                                'data-bind-style-top': `parseFloat({{model.marker.base.posy}} + ${E.xS})+"rem"`,
                            },
                            n().createElement(m, null),
                            n().createElement(su, { key: e.marker.get().phase + u }),
                        );
                    });
            },
            1433: (u, e, t) => {
                'use strict';
                t.d(e, {
                    Ac: () => D,
                    Cb: () => r,
                    DC: () => i,
                    HE: () => C,
                    Qm: () => d,
                    SA: () => n,
                    YF: () => F,
                    d2: () => c,
                    h: () => m,
                    lG: () => E,
                    oP: () => l,
                    ut: () => o,
                    xS: () => s,
                    zn: () => A,
                });
                var a = t(4969);
                const n = 15,
                    r = 150,
                    i = -n,
                    s = -r,
                    l = n + 64,
                    o = r - 64,
                    E = 2,
                    c = l + E + 2,
                    A = 300,
                    F = 1,
                    m = 16,
                    D = {
                        small: { head: m, major: 38, inner: 19, sectionPadding: 10 },
                        big: { head: m, major: 44, inner: 28, sectionPadding: 5 },
                    };
                let d;
                !(function (u) {
                    (u.OrangeGlow = 'orangeGlow'),
                        (u.RedGlow = 'redGlow'),
                        (u.Icon = 'icon'),
                        (u.Advanced = 'advanced'),
                        (u.Major = 'major'),
                        (u.HeadIconShell = 'headIconShell'),
                        (u.HeadIconTank = 'headIconTank'),
                        (u.AdditionalShellInfo = 'additionalShellInfo');
                })(d || (d = {}));
                const C = [
                        a.gC.highExplosive,
                        a.gC.highExplosiveModern,
                        a.gC.highExplosiveModernPremium,
                        a.gC.highExplosivePremium,
                        a.gC.highExplosiveSpg,
                        a.gC.highExplosiveSpgStun,
                    ],
                    B = [a.gC.hollowCharge, a.gC.hollowChargePremium];
            },
            2290: (u, e, t) => {
                'use strict';
                t.d(e, { f8: () => l, uz: () => h });
                var a = t(4969),
                    n = t(1433),
                    r = t(1043),
                    i = t(5262);
                const s = {
                        [a.pE.penetration]: {
                            [a.nz.killer]: [
                                [
                                    [
                                        {
                                            name: 'shellType',
                                            effects: new Set([n.Qm.Major, n.Qm.Icon, n.Qm.HeadIconShell]),
                                        },
                                    ],
                                ],
                                [
                                    [
                                        { name: 'shellCaliber', effects: new Set([n.Qm.Major, n.Qm.Icon]) },
                                        { name: 'caliberRule', effects: new Set([n.Qm.OrangeGlow, n.Qm.Advanced]) },
                                    ],
                                ],
                                [
                                    [
                                        { name: 'shellDamageBasic', effects: new Set([n.Qm.Advanced]) },
                                        { name: 'shellVelocityBasic', effects: new Set([n.Qm.Advanced]) },
                                    ],
                                ],
                            ],
                            [a.nz.trajectory]: [
                                [
                                    [
                                        {
                                            name: 'shootDistance',
                                            effects: new Set([n.Qm.Major, n.Qm.Icon, n.Qm.HeadIconShell]),
                                        },
                                    ],
                                ],
                                [
                                    [{ name: 'shellPenetrationEffective', effects: new Set([n.Qm.Major, n.Qm.Icon]) }],
                                    [{ name: 'shellPenetrationBasic', effects: new Set([n.Qm.Advanced]) }],
                                ],
                                [[{ name: 'shellType', effects: new Set([n.Qm.Major, n.Qm.Icon]) }]],
                            ],
                            [a.nz.impact]: [
                                [
                                    [
                                        {
                                            name: 'shellPenetrationEffective',
                                            effects: new Set([n.Qm.Icon, n.Qm.Major, n.Qm.HeadIconShell]),
                                        },
                                    ],
                                ],
                                [
                                    [
                                        {
                                            name: 'armorRelative',
                                            effects: new Set([n.Qm.Major, n.Qm.Icon, n.Qm.HeadIconTank]),
                                        },
                                    ],
                                    [
                                        { name: 'armorNominal', effects: new Set([n.Qm.Advanced]) },
                                        { name: 'shellArmorAngleGain', effects: new Set([n.Qm.Advanced]) },
                                    ],
                                    [
                                        { name: 'angleImpact', effects: new Set([n.Qm.Icon, n.Qm.Advanced]) },
                                        { name: 'angleFailure', effects: new Set([n.Qm.Advanced]) },
                                        {
                                            name: 'angleRicochet',
                                            effects: new Set([n.Qm.Advanced, n.Qm.AdditionalShellInfo]),
                                        },
                                    ],
                                ],
                                [
                                    [
                                        {
                                            name: 'shellDamageEffective',
                                            effects: new Set([
                                                n.Qm.Major,
                                                n.Qm.Icon,
                                                n.Qm.Advanced,
                                                n.Qm.HeadIconShell,
                                            ]),
                                        },
                                    ],
                                    [
                                        { name: 'shellDamageBasic', effects: new Set([n.Qm.Advanced]) },
                                        { name: 'shellDamageRandomizationFactor', effects: new Set([n.Qm.Advanced]) },
                                        { name: 'damageDistanceModifier', effects: new Set([n.Qm.Advanced]) },
                                    ],
                                ],
                                [[{ name: 'deathReason', effects: new Set([n.Qm.RedGlow, n.Qm.Icon, n.Qm.Major]) }]],
                            ],
                        },
                        [a.pE.legacyHE]: {
                            [a.nz.killer]: [
                                [
                                    [
                                        {
                                            name: 'shellType',
                                            effects: new Set([n.Qm.Icon, n.Qm.Major, n.Qm.HeadIconShell]),
                                        },
                                    ],
                                ],
                                [
                                    [{ name: 'shellCaliber', effects: new Set([n.Qm.Major, n.Qm.Icon]) }],
                                    [
                                        { name: 'shellDamageBasic', effects: new Set([n.Qm.Advanced]) },
                                        { name: 'shellVelocityBasic', effects: new Set([n.Qm.Advanced]) },
                                    ],
                                ],
                            ],
                            [a.nz.trajectory]: [
                                [
                                    [
                                        {
                                            name: 'shootDistance',
                                            effects: new Set([n.Qm.Major, n.Qm.Icon, n.Qm.HeadIconShell]),
                                        },
                                    ],
                                ],
                                [
                                    [{ name: 'shellPenetrationEffective', effects: new Set([n.Qm.Major, n.Qm.Icon]) }],
                                    [{ name: 'shellPenetrationBasic', effects: new Set([n.Qm.Advanced]) }],
                                    [{ name: 'shellType', effects: new Set([n.Qm.Major, n.Qm.Icon]) }],
                                ],
                            ],
                            [a.nz.impact]: [
                                [
                                    [
                                        {
                                            name: 'shellPenetrationEffective',
                                            effects: new Set([n.Qm.Major, n.Qm.Icon, n.Qm.HeadIconShell]),
                                        },
                                    ],
                                ],
                                [
                                    [
                                        {
                                            name: 'shellDamageEffective',
                                            effects: new Set([n.Qm.Major, n.Qm.Icon, n.Qm.HeadIconShell]),
                                        },
                                    ],
                                    [{ name: 'shellDamageBurst', effects: new Set([n.Qm.Advanced]) }],
                                    [
                                        { name: 'shellDamageRandomizationFactor', effects: new Set([n.Qm.Advanced]) },
                                        { name: 'shellDamageLossDistance', effects: new Set([n.Qm.Advanced]) },
                                        { name: 'shellDamageLossProtectionHe', effects: new Set([n.Qm.Advanced]) },
                                        {
                                            name: 'shellDamageLossProtectionSpallLiner',
                                            effects: new Set([n.Qm.Advanced]),
                                        },
                                    ],
                                ],
                                [[{ name: 'deathReason', effects: new Set([n.Qm.RedGlow, n.Qm.Icon, n.Qm.Major]) }]],
                            ],
                        },
                        [a.pE.modernHE]: {
                            [a.nz.killer]: [
                                [
                                    [
                                        {
                                            name: 'shellType',
                                            effects: new Set([n.Qm.Major, n.Qm.Icon, n.Qm.HeadIconShell]),
                                        },
                                    ],
                                ],
                                [
                                    [{ name: 'shellCaliber', effects: new Set([n.Qm.Major, n.Qm.Icon]) }],
                                    [
                                        { name: 'shellDamageBasic', effects: new Set([n.Qm.Advanced]) },
                                        { name: 'shellVelocityBasic', effects: new Set([n.Qm.Advanced]) },
                                    ],
                                ],
                            ],
                            [a.nz.trajectory]: [
                                [
                                    [
                                        {
                                            name: 'shootDistance',
                                            effects: new Set([n.Qm.Major, n.Qm.Icon, n.Qm.HeadIconShell]),
                                        },
                                    ],
                                ],
                                [
                                    [{ name: 'shellPenetrationEffective', effects: new Set([n.Qm.Major, n.Qm.Icon]) }],
                                    [{ name: 'shellPenetrationBasic', effects: new Set([n.Qm.Advanced]) }],
                                    [{ name: 'shellType', effects: new Set([n.Qm.Major, n.Qm.Icon]) }],
                                ],
                            ],
                            [a.nz.impact]: [
                                [
                                    [
                                        {
                                            name: 'shellPenetrationEffective',
                                            effects: new Set([n.Qm.Major, n.Qm.Icon, n.Qm.HeadIconShell]),
                                        },
                                    ],
                                ],
                                [
                                    [
                                        {
                                            name: 'shellDamageEffective',
                                            effects: new Set([n.Qm.Major, n.Qm.Icon, n.Qm.HeadIconShell]),
                                        },
                                    ],
                                    [{ name: 'shellDamageBurst', effects: new Set([n.Qm.Advanced]) }],
                                    [
                                        { name: 'shellDamageRandomizationFactor', effects: new Set([n.Qm.Advanced]) },
                                        { name: 'shellDamageLossProtectionHe', effects: new Set([n.Qm.Advanced]) },
                                        {
                                            name: 'shellDamageLossProtectionSpallLiner',
                                            effects: new Set([n.Qm.Advanced]),
                                        },
                                    ],
                                ],
                                [[{ name: 'deathReason', effects: new Set([n.Qm.RedGlow, n.Qm.Icon, n.Qm.Major]) }]],
                            ],
                        },
                    },
                    l = (u) => u.has(n.Qm.OrangeGlow) || u.has(n.Qm.RedGlow),
                    o = ['deathReason', 'armorNominal'],
                    E = ['angleRicochet', 'angleFailure', 'angleImpact'],
                    c = () => (0, i.T)(viewEnv.getClientSizeRem().width, viewEnv.getClientSizeRem().height, r.j),
                    A = (u) => {
                        const e = u.map((u) => ({
                                hasTopSeparator: u.hasTopSeparator,
                                fullHeight: 0,
                                basicHeight: 0,
                                lines: u.lines.map((e) =>
                                    ((u, e) => {
                                        const t = !c().extraSmall,
                                            a = n.Ac[t ? 'big' : 'small'];
                                        return u.effects.has(n.Qm.HeadIconShell) || u.effects.has(n.Qm.HeadIconTank)
                                            ? Object.assign({}, u, { height: a.head + a.major + 1 })
                                            : u.effects.has(n.Qm.Major) || l(u.effects) || e
                                              ? Object.assign({}, u, { height: a.major })
                                              : Object.assign({}, u, { height: a.inner });
                                    })(e, 1 === u.lines.length),
                                ),
                            })),
                            t = g(e);
                        return {
                            sections: t,
                            fullHeight: f(t, !0),
                            basicHeight: f(t, !1),
                            animationParams: {
                                basic: {
                                    proportion: 0,
                                    contentIncreaseDelay: 0,
                                    contentDecreaseDelay: 0,
                                    dimensionsIncreaseDelay: 0,
                                    dimensionsDecreaseDelay: 0,
                                    duration: 0,
                                },
                                advanced: {
                                    proportion: 0,
                                    contentIncreaseDelay: 0,
                                    contentDecreaseDelay: 0,
                                    dimensionsIncreaseDelay: 0,
                                    dimensionsDecreaseDelay: 0,
                                    duration: 0,
                                },
                            },
                        };
                    },
                    F = (u, e, t) => {
                        const a = t.slice(0, e + 1).reduce((u, e) => u + e.animationParams.basic.duration, 0),
                            r = t.slice(0, e + 1).reduce((u, e) => u + e.animationParams.advanced.duration, 0),
                            i = n.zn - a,
                            s = n.zn - r;
                        return (
                            (u.animationParams.basic.contentDecreaseDelay = i),
                            (u.animationParams.basic.dimensionsDecreaseDelay = i + n.zn),
                            (u.animationParams.advanced.contentDecreaseDelay = s),
                            (u.animationParams.advanced.dimensionsDecreaseDelay = s + n.zn),
                            u
                        );
                    },
                    m = (u, e, t) => {
                        const a = (u) =>
                                t[e - 1].animationParams[u].duration +
                                t[e - 1].animationParams[u].dimensionsIncreaseDelay,
                            r = Math.round(0 === e ? 0 : a('basic')),
                            i = Math.round(0 === e ? 0 : a('advanced')),
                            s = r + n.zn,
                            l = i + n.zn;
                        return (
                            (u.animationParams.basic.dimensionsIncreaseDelay = r),
                            (u.animationParams.basic.contentIncreaseDelay = s),
                            (u.animationParams.advanced.dimensionsIncreaseDelay = i),
                            (u.animationParams.advanced.contentIncreaseDelay = l),
                            u
                        );
                    },
                    D = (u) => {
                        const e = u.reduce((u, e) => u + e.fullHeight, 0),
                            t = u.reduce((u, e) => u + e.basicHeight, 0),
                            a = e - t;
                        return u
                            .map((u) => {
                                const e = u.fullHeight - u.basicHeight,
                                    r = u.basicHeight / t,
                                    i = a ? e / a : 1;
                                return (
                                    (u.animationParams.basic.proportion = r),
                                    (u.animationParams.basic.duration = r * n.zn),
                                    (u.animationParams.advanced.proportion = i),
                                    (u.animationParams.advanced.duration = i * n.zn),
                                    u
                                );
                            })
                            .map(m)
                            .map(F);
                    },
                    d = (u) => u.filter((u) => 0 !== u.lines.length),
                    C = (u) =>
                        u.reduce(
                            (u, e) =>
                                e.lines.every((u) => !l(u.effects))
                                    ? (u.push(e), u)
                                    : (0 === u.length && u.push({ hasTopSeparator: !1, lines: [] }),
                                      e.lines.forEach((t, a) => {
                                          l(t.effects)
                                              ? (0 === u[u.length - 1].lines.length
                                                    ? u[u.length - 1].lines.push(t)
                                                    : u.push({ hasTopSeparator: !1, lines: [t] }),
                                                a !== e.lines.length - 1 && u.push({ hasTopSeparator: !1, lines: [] }))
                                              : u[u.length - 1].lines.push(t);
                                      }),
                                      u),
                            [],
                        ),
                    B = (u) => 0 !== u.length,
                    h = (u, e, t, r, i) => {
                        const l = (t) => (
                                (('shootDistance' === t.name && r) ||
                                    ('shellPenetrationEffective' === t.name && e !== a.pE.penetration) ||
                                    ('armorRelative' === t.name && 0 === u.armorNominal)) &&
                                    t.effects.add(n.Qm.OrangeGlow),
                                (('shellPenetrationEffective' === t.name && e === a.pE.penetration) ||
                                    'shellDamageEffective' === t.name) &&
                                    t.effects.add(n.Qm.RedGlow).add(n.Qm.Major),
                                t
                            ),
                            c = (e) => ({ name: e.name, value: u[e.name], effects: new Set([...e.effects]) }),
                            F = s[e][t]
                                .map((e) =>
                                    e.map((e, s) => ({
                                        hasTopSeparator: Boolean(s),
                                        lines: e
                                            .filter((e) =>
                                                ((u, e, t, r, i) => {
                                                    if (t === a.nz.trajectory)
                                                        if (r) {
                                                            if (
                                                                'shellPenetrationEffective' === e.name ||
                                                                'shellPenetrationBasic' === e.name
                                                            )
                                                                return !1;
                                                        } else 'shellType' === e.name && e.effects.add(n.Qm.Advanced);
                                                    return 'caliberRule' === e.name
                                                        ? u[e.name] !== a.fE.None
                                                        : (!E.includes(e.name) || 0 !== u.armorNominal) &&
                                                              !(
                                                                  'damageDistanceModifier' === e.name &&
                                                                  (!u.hasDistanceFalloff ||
                                                                      (0 === u.damageDistanceModifier && !i))
                                                              ) &&
                                                              !(
                                                                  'shellArmorAngleGain' === e.name &&
                                                                  0 === u.armorNominal
                                                              ) &&
                                                              (u[e.name] || !o.includes(e.name));
                                                })(u, e, t, i, r),
                                            )
                                            .map(c)
                                            .map(l),
                                    })),
                                )
                                .map(d)
                                .map(C)
                                .filter(B)
                                .map(A),
                            m = F[0],
                            h = F.slice(1);
                        return [...D([m]), ...D(h)];
                    },
                    g = (u) => {
                        const e = !c().extraSmall ? 'big' : 'small';
                        return u.map((u) =>
                            Object.assign({}, u, {
                                fullHeight: _(u.lines, e, u.hasTopSeparator),
                                basicHeight: _(
                                    u.lines.filter((u) => !u.effects.has(n.Qm.Advanced)),
                                    e,
                                    u.hasTopSeparator,
                                ),
                            }),
                        );
                    },
                    _ = (u, e, t) => {
                        const a = Number(t);
                        return 1 === u.length &&
                            (u[0].effects.has(n.Qm.HeadIconTank) || u[0].effects.has(n.Qm.HeadIconShell))
                            ? a + n.h + n.YF + n.Ac[e].major
                            : 1 === u.length
                              ? a + n.Ac[e].major
                              : 0 === u.length
                                ? 0
                                : a + u.length * n.Ac[e].inner + 2 * n.Ac[e].sectionPadding;
                    },
                    f = (u, e) => {
                        const t = u.reduce((u, t) => u + t[e ? 'fullHeight' : 'basicHeight'], 0);
                        return t ? t + 2 * n.YF : 0;
                    };
            },
            4969: (u, e, t) => {
                'use strict';
                let a, n, r, i, s;
                t.d(e, { fE: () => r, gC: () => s, kb: () => i, nz: () => a, pE: () => n }),
                    (function (u) {
                        (u.killer = 'killer'), (u.trajectory = 'trajectory'), (u.impact = 'impact');
                    })(a || (a = {})),
                    (function (u) {
                        (u.penetration = 'penetration'), (u.legacyHE = 'legacyHE'), (u.modernHE = 'modernHE');
                    })(n || (n = {})),
                    (function (u) {
                        (u.None = 'None'), (u.TwoCaliber = 'TwoCaliber'), (u.ThreeCaliber = 'ThreeCaliber');
                    })(r || (r = {})),
                    (function (u) {
                        (u.hp = ''), (u.ignition = 'ignition'), (u.detonation = 'detonation'), (u.crew = 'crew');
                    })(i || (i = {})),
                    (function (u) {
                        (u.armorPiercing = 'ARMOR_PIERCING'),
                            (u.armorPiercingCr = 'ARMOR_PIERCING_CR'),
                            (u.armorPiercingCrPremium = 'ARMOR_PIERCING_CR_PREMIUM'),
                            (u.armorPiercingPremium = 'ARMOR_PIERCING_PREMIUM'),
                            (u.highExplosive = 'HIGH_EXPLOSIVE'),
                            (u.highExplosiveModern = 'HIGH_EXPLOSIVE_MODERN'),
                            (u.highExplosiveModernPremium = 'HIGH_EXPLOSIVE_MODERN_PREMIUM'),
                            (u.highExplosivePremium = 'HIGH_EXPLOSIVE_PREMIUM'),
                            (u.highExplosiveSpg = 'HIGH_EXPLOSIVE_SPG'),
                            (u.highExplosiveSpgStun = 'HIGH_EXPLOSIVE_SPG_STUN'),
                            (u.hollowCharge = 'HOLLOW_CHARGE'),
                            (u.hollowChargePremium = 'HOLLOW_CHARGE_PREMIUM');
                    })(s || (s = {}));
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
        (__webpack_require__.O = (u, e, t, a) => {
            if (!e) {
                var n = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [e, t, a] = deferred[l], r = !0, i = 0; i < e.length; i++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(l--, 1);
                        var s = t();
                        void 0 !== s && (u = s);
                    }
                }
                return u;
            }
            a = a || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > a; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [e, t, a];
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
        (__webpack_require__.j = 199),
        (() => {
            var u = { 199: 0, 474: 0, 230: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var a,
                        n,
                        [r, i, s] = t,
                        l = 0;
                    if (r.some((e) => 0 !== u[e])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (s) var o = s(__webpack_require__);
                    }
                    for (e && e(t); l < r.length; l++)
                        (n = r[l]), __webpack_require__.o(u, n) && u[n] && u[n][0](), (u[n] = 0);
                    return __webpack_require__.O(o);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [532], () => __webpack_require__(6511));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
