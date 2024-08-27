(() => {
    var __webpack_modules__ = {
            3495: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => d });
                var n = t(3138),
                    r = t(6179),
                    o = t(1043),
                    a = t(5262);
                const s = n.O.client.getSize('rem'),
                    i = s.width,
                    l = s.height,
                    c = Object.assign({ width: i, height: l }, (0, a.T)(i, l, o.j)),
                    d = (0, r.createContext)(c);
            },
            1039: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => c });
                var n = t(6179),
                    r = t.n(n),
                    o = t(6536),
                    a = t(3495),
                    s = t(1043),
                    i = t(5262),
                    l = t(3138);
                const c = (0, n.memo)(({ children: e }) => {
                    const u = (0, n.useContext)(a.Y),
                        t = (0, n.useState)(u),
                        c = t[0],
                        d = t[1],
                        E = (0, n.useCallback)((e, u) => {
                            const t = l.O.view.pxToRem(e),
                                n = l.O.view.pxToRem(u);
                            d(Object.assign({ width: t, height: n }, (0, i.T)(t, n, s.j)));
                        }, []);
                    (0, o.Z)(() => {
                        engine.on('clientResized', E);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', E), [E]);
                    const m = (0, n.useMemo)(() => Object.assign({}, c), [c]);
                    return r().createElement(a.Y.Provider, { value: m }, e);
                });
            },
            6010: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    r = t(7382),
                    o = t(3495);
                const a = ['children'],
                    s = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, a);
                        const s = (0, n.useContext)(o.Y),
                            i = s.extraLarge,
                            l = s.large,
                            c = s.medium,
                            d = s.small,
                            E = s.extraSmall,
                            m = s.extraLargeWidth,
                            _ = s.largeWidth,
                            A = s.mediumWidth,
                            F = s.smallWidth,
                            D = s.extraSmallWidth,
                            B = s.extraLargeHeight,
                            C = s.largeHeight,
                            p = s.mediumHeight,
                            g = s.smallHeight,
                            b = s.extraSmallHeight,
                            v = { extraLarge: B, large: C, medium: p, small: g, extraSmall: b };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && i) return u;
                            if (t.large && l) return u;
                            if (t.medium && c) return u;
                            if (t.small && d) return u;
                            if (t.extraSmall && E) return u;
                        } else {
                            if (t.extraLargeWidth && m) return (0, r.H)(u, t, v);
                            if (t.largeWidth && _) return (0, r.H)(u, t, v);
                            if (t.mediumWidth && A) return (0, r.H)(u, t, v);
                            if (t.smallWidth && F) return (0, r.H)(u, t, v);
                            if (t.extraSmallWidth && D) return (0, r.H)(u, t, v);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && B) return u;
                                if (t.largeHeight && C) return u;
                                if (t.mediumHeight && p) return u;
                                if (t.smallHeight && g) return u;
                                if (t.extraSmallHeight && b) return u;
                            }
                        }
                        return null;
                    };
                (s.defaultProps = {
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
                    (0, n.memo)(s);
            },
            7382: (e, u, t) => {
                'use strict';
                t.d(u, { H: () => n });
                const n = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, u, t) => {
                'use strict';
                t.d(u, { YN: () => r.Y, ZN: () => n.Z }), t(6010);
                var n = t(1039),
                    r = t(3495);
            },
            1043: (e, u, t) => {
                'use strict';
                t.d(u, { j: () => n });
                const n = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, u, t) => {
                'use strict';
                var n;
                function r(e, u, t) {
                    const n = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.width:
                                    return u.extraLarge.weight;
                                case e >= u.large.width && e < u.extraLarge.width:
                                    return u.large.weight;
                                case e >= u.medium.width && e < u.large.width:
                                    return u.medium.weight;
                                case e >= u.small.width && e < u.medium.width:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(e, t),
                        r = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.height:
                                    return u.extraLarge.weight;
                                case e >= u.large.height && e < u.extraLarge.height:
                                    return u.large.weight;
                                case e >= u.medium.height && e < u.large.height:
                                    return u.medium.weight;
                                case e >= u.small.height && e < u.medium.height:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(u, t),
                        o = Math.min(n, r);
                    return {
                        extraLarge: o === t.extraLarge.weight,
                        large: o === t.large.weight,
                        medium: o === t.medium.weight,
                        small: o === t.small.weight,
                        extraSmall: o === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
                        extraLargeHeight: r === t.extraLarge.weight,
                        largeHeight: r === t.large.weight,
                        mediumHeight: r === t.medium.weight,
                        smallHeight: r === t.small.weight,
                        extraSmallHeight: r === t.extraSmall.weight,
                    };
                }
                t.d(u, { T: () => r }),
                    (function (e) {
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
                    })(n || (n = {}));
            },
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
            7515: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => n });
                const n = (e, u, t) => (t < e ? e : t > u ? u : t);
            },
            527: (e, u, t) => {
                'use strict';
                t.r(u), t.d(u, { mouse: () => s, onResize: () => o });
                var n = t(2472),
                    r = t(1176);
                const o = (0, n.E)('clientResized'),
                    a = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    s = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, r.R)(!0);
                        }
                        function n() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', u),
                                      document.body.removeEventListener('mouseleave', t))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', u),
                                      document.body.addEventListener('mouseleave', t))
                                : (0, r.R)(!1);
                        }
                        const o = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const o = `mouse${u}`,
                                            s = a[u]((e) => t([e, 'outside']));
                                        function i(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(o, i),
                                            n(),
                                            () => {
                                                r &&
                                                    (s(),
                                                    window.removeEventListener(o, i),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                u
                            ),
                            {},
                        );
                        return Object.assign({}, o, {
                            disable() {
                                (e.enabled = !1), n();
                            },
                            enable() {
                                (e.enabled = !0), n();
                            },
                            enableOutside() {
                                e.enabled && (0, r.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, r.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => o,
                        getSize: () => r,
                        graphicsQuality: () => a,
                    });
                var n = t(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const a = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            2472: (e, u, t) => {
                'use strict';
                function n(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => n });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => r });
                var n = t(5959);
                const r = { view: t(7641), client: n };
            },
            3722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => r });
                var n = t(2472);
                const r = {
                    onTextureFrozen: (0, n.E)('self.onTextureFrozen'),
                    onTextureReady: (0, n.E)('self.onTextureReady'),
                    onDomBuilt: (0, n.E)('self.onDomBuilt'),
                    onLoaded: (0, n.E)('self.onLoaded'),
                    onDisplayChanged: (0, n.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, n.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, n.E)('children.onAdded'),
                        onLoaded: (0, n.E)('children.onLoaded'),
                        onRemoved: (0, n.E)('children.onRemoved'),
                        onAttached: (0, n.E)('children.onAttached'),
                        onTextureReady: (0, n.E)('children.onTextureReady'),
                        onRequestPosition: (0, n.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => s,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => f,
                        events: () => o.U,
                        extraSize: () => x,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => h,
                        getScale: () => F,
                        getSize: () => E,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => b,
                        isFocused: () => p,
                        pxToRem: () => D,
                        remToPx: () => B,
                        resize: () => m,
                        sendEvent: () => a.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => g,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => w,
                    });
                var n = t(3722),
                    r = t(6112),
                    o = t(6538),
                    a = t(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function _(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: B(u.x), y: B(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function B(e) {
                    return viewEnv.remToPx(e);
                }
                function C(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function g() {
                    return viewEnv.setEventHandled();
                }
                function b() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function h() {
                    return viewEnv.getShowingStatus();
                }
                const f = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    x = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    w = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => o });
                const n = ['args'],
                    r = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const o = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        o = Object.keys(e);
                                    for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, n);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((r = o),
                                              Object.entries(r).map(([e, u]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof u) {
                                                      case 'number':
                                                          return { __Type: t, name: e, number: u };
                                                      case 'boolean':
                                                          return { __Type: t, name: e, bool: u };
                                                      default:
                                                          return { __Type: t, name: e, string: u.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    o = {
                        close(e) {
                            r('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            r(64);
                        },
                        move(e) {
                            r(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            6536: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var n = t(6179);
                const r = (e) => {
                    const u = (0, n.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
            },
            5415: (e, u, t) => {
                'use strict';
                t.d(u, { Aq: () => i, GS: () => l, cJ: () => a, fd: () => s });
                var n = t(6179),
                    r = t(7739),
                    o = t(1043);
                let a, s, i;
                !(function (e) {
                    (e[(e.ExtraSmall = o.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = o.j.small.width)] = 'Small'),
                        (e[(e.Medium = o.j.medium.width)] = 'Medium'),
                        (e[(e.Large = o.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = o.j.extraLarge.width)] = 'ExtraLarge');
                })(a || (a = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = o.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = o.j.small.width)] = 'Small'),
                            (e[(e.Medium = o.j.medium.width)] = 'Medium'),
                            (e[(e.Large = o.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = o.j.extraLarge.width)] = 'ExtraLarge');
                    })(s || (s = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = o.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = o.j.small.height)] = 'Small'),
                            (e[(e.Medium = o.j.medium.height)] = 'Medium'),
                            (e[(e.Large = o.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = o.j.extraLarge.height)] = 'ExtraLarge');
                    })(i || (i = {}));
                const l = () => {
                    const e = (0, n.useContext)(r.YN),
                        u = e.width,
                        t = e.height,
                        o = ((e) => {
                            switch (!0) {
                                case e.extraLarge:
                                    return a.ExtraLarge;
                                case e.large:
                                    return a.Large;
                                case e.medium:
                                    return a.Medium;
                                case e.small:
                                    return a.Small;
                                case e.extraSmall:
                                    return a.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), a.ExtraSmall;
                            }
                        })(e),
                        l = ((e) => {
                            switch (!0) {
                                case e.extraLargeWidth:
                                    return s.ExtraLarge;
                                case e.largeWidth:
                                    return s.Large;
                                case e.mediumWidth:
                                    return s.Medium;
                                case e.smallWidth:
                                    return s.Small;
                                case e.extraSmallWidth:
                                    return s.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), s.ExtraSmall;
                            }
                        })(e),
                        c = ((e) => {
                            switch (!0) {
                                case e.extraLargeHeight:
                                    return i.ExtraLarge;
                                case e.largeHeight:
                                    return i.Large;
                                case e.mediumHeight:
                                    return i.Medium;
                                case e.smallHeight:
                                    return i.Small;
                                case e.extraSmallHeight:
                                    return i.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), i.ExtraSmall;
                            }
                        })(e);
                    return { mediaSize: o, mediaWidth: l, mediaHeight: c, remScreenWidth: u, remScreenHeight: t };
                };
            },
            5521: (e, u, t) => {
                'use strict';
                let n, r;
                t.d(u, { n: () => n }),
                    (function (e) {
                        (e[(e.NONE = -1)] = 'NONE'),
                            (e[(e.ALT = 165)] = 'ALT'),
                            (e[(e.ENTER = 13)] = 'ENTER'),
                            (e[(e.ESCAPE = 27)] = 'ESCAPE'),
                            (e[(e.SPACE = 32)] = 'SPACE'),
                            (e[(e.END = 35)] = 'END'),
                            (e[(e.HOME = 36)] = 'HOME'),
                            (e[(e.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
                            (e[(e.ARROW_UP = 38)] = 'ARROW_UP'),
                            (e[(e.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
                            (e[(e.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
                            (e[(e.NUM_PLUS = 107)] = 'NUM_PLUS'),
                            (e[(e.NUM_MINUS = 109)] = 'NUM_MINUS'),
                            (e[(e.PLUS = 187)] = 'PLUS'),
                            (e[(e.MINUS = 189)] = 'MINUS'),
                            (e[(e.PAGE_UP = 33)] = 'PAGE_UP'),
                            (e[(e.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
                            (e[(e.BACKSPACE = 8)] = 'BACKSPACE'),
                            (e[(e.DELETE = 46)] = 'DELETE'),
                            (e[(e.TAB = 9)] = 'TAB'),
                            (e[(e.KEY_N = 78)] = 'KEY_N'),
                            (e[(e.KEY_1 = 49)] = 'KEY_1'),
                            (e[(e.KEY_2 = 50)] = 'KEY_2'),
                            (e[(e.KEY_3 = 51)] = 'KEY_3'),
                            (e[(e.KEY_4 = 52)] = 'KEY_4'),
                            (e[(e.KEY_5 = 53)] = 'KEY_5'),
                            (e[(e.KEY_6 = 54)] = 'KEY_6'),
                            (e[(e.KEY_7 = 55)] = 'KEY_7'),
                            (e[(e.KEY_8 = 56)] = 'KEY_8'),
                            (e[(e.KEY_9 = 57)] = 'KEY_9'),
                            (e[(e.CAPS_LOCK = 20)] = 'CAPS_LOCK'),
                            (e[(e.INSERT = 45)] = 'INSERT'),
                            (e[(e.F1 = 112)] = 'F1'),
                            (e[(e.F2 = 113)] = 'F2'),
                            (e[(e.F3 = 114)] = 'F3'),
                            (e[(e.F4 = 115)] = 'F4'),
                            (e[(e.F5 = 116)] = 'F5'),
                            (e[(e.F6 = 117)] = 'F6'),
                            (e[(e.F7 = 118)] = 'F7'),
                            (e[(e.F8 = 119)] = 'F8'),
                            (e[(e.F9 = 120)] = 'F9'),
                            (e[(e.F10 = 121)] = 'F10'),
                            (e[(e.F11 = 122)] = 'F11'),
                            (e[(e.F12 = 123)] = 'F12'),
                            (e[(e.SELECT = 93)] = 'SELECT'),
                            (e[(e.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                            (e[(e.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                            (e[(e.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                            (e[(e.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                            (e[(e.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                            (e[(e.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                            (e[(e.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                            (e[(e.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                            (e[(e.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                            (e[(e.NUMPAD_9 = 105)] = 'NUMPAD_9'),
                            (e[(e.NUM_DECIMAL = 110)] = 'NUM_DECIMAL'),
                            (e[(e.STAR = 106)] = 'STAR'),
                            (e[(e.NUM_SLASH = 111)] = 'NUM_SLASH'),
                            (e[(e.FORWARD_SLASH = 191)] = 'FORWARD_SLASH'),
                            (e[(e.COMMA = 188)] = 'COMMA'),
                            (e[(e.DASH = 189)] = 'DASH'),
                            (e[(e.PERIOD = 190)] = 'PERIOD');
                    })(n || (n = {})),
                    (function (e) {
                        (e.ALT = 'Alt'),
                            (e.ALT_GRAPH = 'AltGraph'),
                            (e.CAPS_LOCK = 'CapsLock'),
                            (e.CONTROL = 'Control'),
                            (e.FN = 'Fn'),
                            (e.FN_LOCK = 'FnLock'),
                            (e.META = 'Meta'),
                            (e.NUM_LOCK = 'NumLock'),
                            (e.SCROLL_LOCK = 'ScrollLock'),
                            (e.SHIFT = 'Shift'),
                            (e.SYMBOL = 'Symbol'),
                            (e.SYMBOL_LOCK = 'SymbolLock');
                    })(r || (r = {}));
            },
            7727: (e, u, t) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e);
                }
                t.d(u, { G: () => n });
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => o });
                var n = t(3138);
                class r {
                    constructor() {
                        (this._callbacks = void 0),
                            (this._updateHandler = void 0),
                            (this._views = void 0),
                            (this.clearViewCallbacks = (e) => {
                                this._views[e] &&
                                    (this._views[e].forEach((e) => {
                                        delete this._callbacks[e];
                                    }),
                                    delete this._views[e]);
                            }),
                            (this._callbacks = {}),
                            (this._views = {}),
                            (this._updateHandler = void 0);
                    }
                    static get instance() {
                        return window.__dataTracker || (window.__dataTracker = new r()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, u, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const o = n.O.view.addModelObserver(e, t, r);
                        return (
                            o > 0
                                ? ((this._callbacks[o] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(o) : (this._views[t] = [o])))
                                : console.error("Can't add callback for model:", e),
                            o
                        );
                    }
                    removeCallback(e, u = 0) {
                        let t = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((t = viewEnv.removeDataChangedCallback(e, u)), delete this._callbacks[e]),
                            t || console.error("Can't remove callback by id:", e),
                            t
                        );
                    }
                    _emmitDataChanged(e, u, t) {
                        t.forEach((t) => {
                            const n = this._callbacks[t];
                            void 0 !== n && n(e, u);
                        });
                    }
                }
                r.__instance = void 0;
                const o = r;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4179);
                class ViewModel {
                    constructor(path, watchingFields = []) {
                        (this.dataTracker = void 0),
                            (this.modelPath = void 0),
                            (this.callbacks = void 0),
                            (this.data = void 0),
                            (this._notifyObservers = () => {
                                (this.data = eval(this.modelPath)),
                                    this.callbacks.forEach((e) => {
                                        e(this.data);
                                    });
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                this._addCallback(path),
                                    watchingFields.forEach((e) => {
                                        this._addCallback(path + '.' + e);
                                    }),
                                    this._notifyObservers();
                            });
                    }
                    subscribe(e) {
                        this.callbacks.add(e), null !== this.data && void 0 !== this.data && e(this.data);
                    }
                    unsubscribe(e) {
                        this.callbacks.delete(e);
                    }
                    destroy() {
                        this.dataTracker.clear(), this.callbacks.clear();
                    }
                    _addCallback(e) {
                        this.dataTracker.addCallback(e, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            4179: (e, u, t) => {
                'use strict';
                t.d(u, { kH: () => m, B3: () => c, Z5: () => a, lf: () => E, cy: () => s, B0: () => i, ry: () => C });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let n = e.target;
                                    do {
                                        if (n === u) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            n = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== n)),
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
                n.__instance = void 0;
                const r = n;
                var o = t(1358);
                const a = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
                let i;
                var l;
                ((l = i || (i = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE');
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    A = t(3138);
                const F = ['args'];
                function D(e, u, t, n, r, o, a) {
                    try {
                        var s = e[o](a),
                            i = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(i) : Promise.resolve(i).then(n, r);
                }
                const B = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    C = (function () {
                        var e,
                            u =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var u = this,
                                        t = arguments;
                                    return new Promise(function (n, r) {
                                        var o = e.apply(u, t);
                                        function a(e) {
                                            D(o, n, r, a, s, 'next', e);
                                        }
                                        function s(e) {
                                            D(o, n, r, a, s, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    p = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                o = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        o = Object.keys(e);
                                    for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, F);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, u]) => {
                                                  const t = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof u) {
                                                      case 'number':
                                                          t.number = u;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = u;
                                                          break;
                                                      default:
                                                          t.string = u.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    g = () => p(i.CLOSE),
                    b = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var v = t(7572);
                const h = r.instance,
                    f = {
                        DataTracker: o.Z,
                        ViewModel: v.Z,
                        ViewEventType: i,
                        NumberFormatType: c,
                        RealFormatType: d,
                        TimeFormatType: E,
                        DateFormatType: m,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (e) => p(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => p(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            p(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), o) => {
                            const a = A.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                d = s.width,
                                E = s.height,
                                m = {
                                    x: A.O.view.pxToRem(l) + a.x,
                                    y: A.O.view.pxToRem(c) + a.y,
                                    width: A.O.view.pxToRem(d),
                                    height: A.O.view.pxToRem(E),
                                };
                            p(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: B(m),
                                on: !0,
                                args: o,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => b(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, g);
                        },
                        handleViewEvent: p,
                        onBindingsReady: C,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const r = Object.prototype.toString.call(u[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < r.length; u++) t[n].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: h,
                        SystemLocale: a,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = f;
            },
            831: (e, u, t) => {
                'use strict';
                var n = {};
                t.r(n),
                    t.d(n, {
                        Area: () => vu,
                        Bar: () => pu,
                        DefaultScroll: () => bu,
                        Direction: () => cu,
                        defaultSettings: () => du,
                        useHorizontalScrollApi: () => mu,
                    });
                var r = {};
                t.r(r), t.d(r, { Area: () => Lu, Bar: () => Ru, Default: () => Ou, useVerticalScrollApi: () => hu });
                var o = t(7739),
                    a = t(6179),
                    s = t.n(a),
                    i = t(6483),
                    l = t.n(i),
                    c = t(926),
                    d = t.n(c),
                    E = t(5415);
                const m = ['children', 'className'];
                function _() {
                    return (
                        (_ =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        _.apply(this, arguments)
                    );
                }
                const A = {
                        [E.fd.ExtraSmall]: '',
                        [E.fd.Small]: d().SMALL_WIDTH,
                        [E.fd.Medium]: `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH}`,
                        [E.fd.Large]: `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH} ${d().LARGE_WIDTH}`,
                        [E.fd.ExtraLarge]:
                            `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH} ${d().LARGE_WIDTH} ${d().EXTRA_LARGE_WIDTH}`,
                    },
                    F = {
                        [E.Aq.ExtraSmall]: '',
                        [E.Aq.Small]: d().SMALL_HEIGHT,
                        [E.Aq.Medium]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT}`,
                        [E.Aq.Large]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT} ${d().LARGE_HEIGHT}`,
                        [E.Aq.ExtraLarge]:
                            `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT} ${d().LARGE_HEIGHT} ${d().EXTRA_LARGE_HEIGHT}`,
                    },
                    D = {
                        [E.cJ.ExtraSmall]: '',
                        [E.cJ.Small]: d().SMALL,
                        [E.cJ.Medium]: `${d().SMALL} ${d().MEDIUM}`,
                        [E.cJ.Large]: `${d().SMALL} ${d().MEDIUM} ${d().LARGE}`,
                        [E.cJ.ExtraLarge]: `${d().SMALL} ${d().MEDIUM} ${d().LARGE} ${d().EXTRA_LARGE}`,
                    },
                    B = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, m);
                        const r = (0, E.GS)(),
                            o = r.mediaWidth,
                            a = r.mediaHeight,
                            i = r.mediaSize;
                        return s().createElement('div', _({ className: l()(t, A[o], F[a], D[i]) }, n), u);
                    },
                    C = ['children'],
                    p = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, C);
                        return s().createElement(o.ZN, null, s().createElement(B, t, u));
                    };
                var g = t(493),
                    b = t.n(g),
                    v = t(7727);
                const h = {
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
                    f = [
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
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        x.apply(this, arguments)
                    );
                }
                class w extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, v.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, v.G)(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                e && e(u), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            t = e.onClick,
                            n = e.goto,
                            r = e.side,
                            o = e.type,
                            a = e.classNames,
                            i = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            E = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        o = Object.keys(e);
                                    for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(e, f)),
                            _ = l()(h.base, h[`base__${o}`], h[`base__${r}`], null == a ? void 0 : a.base),
                            A = l()(h.icon, h[`icon__${o}`], h[`icon__${r}`], null == a ? void 0 : a.icon),
                            F = l()(h.glow, null == a ? void 0 : a.glow),
                            D = l()(h.caption, h[`caption__${o}`], null == a ? void 0 : a.caption),
                            B = l()(h.goto, null == a ? void 0 : a.goto);
                        return s().createElement(
                            'div',
                            x(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(d),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                m,
                            ),
                            'info' !== o && s().createElement('div', { className: h.shine }),
                            s().createElement('div', { className: A }, s().createElement('div', { className: F })),
                            s().createElement('div', { className: D }, u),
                            n && s().createElement('div', { className: B }, n),
                        );
                    }
                }
                w.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const y = (e, u) => {
                    let t;
                    const n = setTimeout(() => {
                        t = e();
                    }, u);
                    return () => {
                        'function' == typeof t && t(), clearTimeout(n);
                    };
                };
                var T = t(3138),
                    N = t(5521),
                    S = t(4179);
                const k = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function O(e = N.n.NONE, u = k, t = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== N.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (T.O.view.isEventHandled()) return;
                                T.O.view.setEventHandled(), u(n), t && n.stopPropagation();
                            }
                        }
                    }, [u, e, t]);
                }
                var L = t(3403),
                    I = t(4999);
                let M;
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(M || (M = {}));
                const P = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    H = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    G = (e, u, t = M.left) => e.split(u).reduce(t === M.left ? P : H, []),
                    W = (() => {
                        const e = new RegExp(
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
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    U = ['zh_cn', 'zh_sg', 'zh_tw'];
                let z;
                !(function (e) {
                    (e.SHORT_DATE = 'short-date'),
                        (e.SHORT_TIME = 'short-time'),
                        (e.SHORT_DATE_TIME = 'short-date-time'),
                        (e.FULL_DATE = 'full-date'),
                        (e.FULL_DATE_TIME = 'full-date-time'),
                        (e.MONTH = 'month'),
                        (e.MONTH_DATE = 'month-date'),
                        (e.DATE_MONTH = 'date-month'),
                        (e.MONTH_YEAR = 'month-year'),
                        (e.WEEK_DAY = 'week-day'),
                        (e.WEEK_DAY_TIME = 'week-day-time'),
                        (e.YEAR = 'year'),
                        (e.DATE_YEAR = 'date-year');
                })(z || (z = {})),
                    Date.now();
                const j = (0, a.memo)(({ datetime: e, format: u = z.SHORT_DATE, localize: t = !0 }) =>
                        ((e, u, t) => {
                            switch (u) {
                                case z.SHORT_DATE:
                                    return t
                                        ? S.Z5.getDateFormat(e, S.kH.SHORT_FORMAT)
                                        : S.cy.getTimeFormat('%d.%m.%y', e, !0);
                                case z.SHORT_TIME:
                                    return t
                                        ? S.Z5.getTimeFormat(e, S.lf.SHORT_FORMAT)
                                        : S.cy.getTimeFormat('%I:%M %p', e, !0);
                                case z.SHORT_DATE_TIME:
                                    return t
                                        ? `${S.Z5.getDateFormat(e, S.kH.SHORT_FORMAT)}, ${S.Z5.getTimeFormat(e, S.lf.SHORT_FORMAT)}`
                                        : S.cy.getTimeFormat('%d.%m.%y, %I:%M %p', e, !0);
                                case z.FULL_DATE:
                                    return t
                                        ? S.Z5.getDateFormat(e, S.kH.LONG_FORMAT)
                                        : S.cy.getTimeFormat('%B %d, %Y', e, !0);
                                case z.FULL_DATE_TIME:
                                    return t
                                        ? `${S.Z5.getDateFormat(e, S.kH.LONG_FORMAT)}, ${S.Z5.getTimeFormat(e, S.lf.SHORT_FORMAT)}`
                                        : S.cy.getTimeFormat('%B %d, %Y, %I:%M %p', e, !0);
                                case z.MONTH:
                                    return S.cy.getTimeFormat('%B', e, !0);
                                case z.MONTH_DATE:
                                    return S.cy.getTimeFormat('%B %e', e, !0);
                                case z.DATE_MONTH:
                                    return S.cy.getTimeFormat('%e %B', e, !0);
                                case z.MONTH_YEAR:
                                    return S.cy.getTimeFormat('%B %Y', e, !0);
                                case z.WEEK_DAY:
                                    return S.cy.getTimeFormat('%A', e, !0);
                                case z.WEEK_DAY_TIME:
                                    return t
                                        ? `${S.cy.getTimeFormat('%A', e, !0)} ${S.Z5.getTimeFormat(e, S.lf.SHORT_FORMAT)}`
                                        : S.cy.getTimeFormat('%A, %I:%M %p', e, !0);
                                case z.YEAR:
                                    return S.cy.getTimeFormat('%Y', e, !0);
                                case z.DATE_YEAR:
                                    return S.cy.getTimeFormat('%d, %Y', e, !0);
                            }
                        })(e, u, t),
                    ),
                    $ = ({ binding: e, text: u = '', classMix: t, alignment: n = M.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : s().createElement(
                                  a.Fragment,
                                  null,
                                  u.split('\n').map((u, r) =>
                                      s().createElement(
                                          'div',
                                          { className: l()('FormatText_base_d0', t), key: `${u}-${r}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = M.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return U.includes(t)
                                                                ? W(e)
                                                                : ((e, u = M.left) => {
                                                                      let t = [];
                                                                      const n =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          r = e.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          G(r, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(G(e, n, M.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(e, u);
                                                        })(e, u),
                                              ))(u, n, e).map((e, u) =>
                                              s().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              ),
                    K = {
                        base: 'BoxDescription_base_17',
                        headerWrapper: 'BoxDescription_headerWrapper_65',
                        headerHolder: 'BoxDescription_headerHolder_27',
                        headerName: 'BoxDescription_headerName_c9',
                        headerDescription: 'BoxDescription_headerDescription_42',
                        boxIcon: 'BoxDescription_boxIcon_d3',
                        boxIcon__tier1: 'BoxDescription_boxIcon__tier1_85',
                        boxIcon__tier2: 'BoxDescription_boxIcon__tier2_10',
                        boxIcon__tier3: 'BoxDescription_boxIcon__tier3_4d',
                        boxIcon__tier4: 'BoxDescription_boxIcon__tier4_53',
                        infoBoxes: 'BoxDescription_infoBoxes_32',
                        headerDescriptionDivider: 'BoxDescription_headerDescriptionDivider_c9',
                        autoOpenContainer: 'BoxDescription_autoOpenContainer_97',
                        autoOpenText: 'BoxDescription_autoOpenText_a8',
                        icon: 'BoxDescription_icon_72',
                        description: 'BoxDescription_description_32',
                    },
                    V = R.strings.gui_lootboxes,
                    Y = R.strings.lootboxes,
                    q = R.images.gui.maps.icons.components.countdown.big.clock(),
                    X = s().memo(
                        ({ userName: e, tier: u, count: t, descriptionKey: n, autoOpenTime: r, isInfinite: o }) =>
                            s().createElement(
                                'div',
                                { className: K.base },
                                s().createElement(
                                    'div',
                                    { className: K.headerWrapper },
                                    Y.userName.$dyn(e) &&
                                        s().createElement(
                                            'div',
                                            { className: K.headerHolder },
                                            s().createElement($, { text: Y.userName.$dyn(e), classMix: K.headerName }),
                                        ),
                                    s().createElement(
                                        'div',
                                        { className: K.headerDescription },
                                        s().createElement('div', { className: l()(K.boxIcon, K[`boxIcon__tier${u}`]) }),
                                        V.tier.$dyn(`tier_${u}`) &&
                                            s().createElement($, {
                                                text: V.tier.$dyn(`tier_${u}`),
                                                classMix: K.infoBoxes,
                                            }),
                                        t > 0 &&
                                            !o &&
                                            s().createElement(
                                                s().Fragment,
                                                null,
                                                s().createElement('div', { className: K.headerDescriptionDivider }),
                                                s().createElement($, {
                                                    text: V.optional.count(),
                                                    binding: { count: t },
                                                    classMix: K.infoBoxes,
                                                }),
                                            ),
                                    ),
                                ),
                                r > 0 &&
                                    s().createElement(
                                        'div',
                                        { className: K.autoOpenContainer },
                                        s().createElement('div', {
                                            className: K.icon,
                                            style: { backgroundImage: `url('${q}')` },
                                        }),
                                        s().createElement($, {
                                            text: Y.autoOpenView.dateOpen(),
                                            binding: {
                                                date: s().createElement(j, { datetime: r, format: z.FULL_DATE_TIME }),
                                            },
                                            classMix: K.autoOpenText,
                                        }),
                                    ),
                                Y.desctiptions.$dyn(n) &&
                                    s().createElement($, { text: Y.desctiptions.$dyn(n), classMix: K.description }),
                            ),
                    ),
                    Z = {
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
                let Q, J;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Q || (Q = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(J || (J = {}));
                const ee = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: r,
                    mixClass: o,
                    soundHover: i,
                    soundClick: c,
                    onMouseEnter: d,
                    onMouseMove: E,
                    onMouseDown: m,
                    onMouseUp: _,
                    onMouseLeave: A,
                    onClick: F,
                }) => {
                    const D = (0, a.useRef)(null),
                        B = (0, a.useState)(t),
                        C = B[0],
                        p = B[1],
                        g = (0, a.useState)(!1),
                        b = g[0],
                        h = g[1],
                        f = (0, a.useState)(!1),
                        x = f[0],
                        w = f[1],
                        y = (0, a.useCallback)(() => {
                            r || (D.current && (D.current.focus(), p(!0)));
                        }, [r]),
                        T = (0, a.useCallback)(
                            (e) => {
                                C && null !== D.current && !D.current.contains(e.target) && p(!1);
                            },
                            [C],
                        ),
                        N = (0, a.useCallback)(
                            (e) => {
                                r || (F && F(e));
                            },
                            [r, F],
                        ),
                        S = (0, a.useCallback)(
                            (e) => {
                                r || (null !== i && (0, v.G)(i), d && d(e), w(!0));
                            },
                            [r, i, d],
                        ),
                        k = (0, a.useCallback)(
                            (e) => {
                                E && E(e);
                            },
                            [E],
                        ),
                        O = (0, a.useCallback)(
                            (e) => {
                                r || (_ && _(e), h(!1));
                            },
                            [r, _],
                        ),
                        L = (0, a.useCallback)(
                            (e) => {
                                r || (null !== c && (0, v.G)(c), m && m(e), t && y(), h(!0));
                            },
                            [r, c, m, y, t],
                        ),
                        I = (0, a.useCallback)(
                            (e) => {
                                r || (A && A(e), h(!1));
                            },
                            [r, A],
                        ),
                        M = l()(
                            Z.base,
                            Z[`base__${n}`],
                            {
                                [Z.base__disabled]: r,
                                [Z[`base__${u}`]]: u,
                                [Z.base__focus]: C,
                                [Z.base__highlightActive]: b,
                                [Z.base__firstHover]: x,
                            },
                            o,
                        ),
                        P = l()(Z.state, Z.state__default);
                    return (
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', T),
                                () => {
                                    document.removeEventListener('mousedown', T);
                                }
                            ),
                            [T],
                        ),
                        (0, a.useEffect)(() => {
                            p(t);
                        }, [t]),
                        s().createElement(
                            'div',
                            {
                                ref: D,
                                className: M,
                                onMouseEnter: S,
                                onMouseMove: k,
                                onMouseUp: O,
                                onMouseDown: L,
                                onMouseLeave: I,
                                onClick: N,
                            },
                            n !== Q.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: Z.back }),
                                    s().createElement('span', { className: Z.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: P },
                                s().createElement('span', { className: Z.stateDisabled }),
                                s().createElement('span', { className: Z.stateHighlightHover }),
                                s().createElement('span', { className: Z.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                ee.defaultProps = { type: Q.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const ue = (0, a.memo)(ee),
                    te = 'BoxRadioButtons_base_7a',
                    ne = 'BoxRadioButtons_button_27';
                let re, oe, ae;
                !(function (e) {
                    (e.Simple = 'simpleKey'), (e.Lockpick = 'lockpick');
                })(re || (re = {})),
                    (function (e) {
                        (e.One = 'one'), (e.All = 'all');
                    })(oe || (oe = {})),
                    (function (e) {
                        (e.Normal = 'normal'), (e.Key = 'key'), (e.MasterKey = 'masterKey');
                    })(ae || (ae = {}));
                const se = { keyID: 0, keyType: re.Simple, count: 1, iconName: '', userName: '', openProbability: 0 },
                    ie = (e, u) => {
                        const t = {};
                        return (
                            e.forEach((e) => {
                                const n = u.find((u) => u.keyID === e);
                                n && (t[n.keyID] = Object.assign({}, n));
                            }),
                            t
                        );
                    },
                    le = (e) => {
                        var u, t;
                        return (
                            (null == (u = e.find((e) => e.count > 0)) ? void 0 : u.keyID) ||
                            (null == (t = e[0]) ? void 0 : t.keyID)
                        );
                    },
                    ce = [
                        'children',
                        'contentId',
                        'args',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onClick',
                        'ignoreShowDelay',
                        'ignoreMouseClick',
                        'decoratorId',
                        'isEnabled',
                        'targetId',
                        'onShow',
                        'onHide',
                    ];
                function de(e) {
                    return Object.entries(e || {}).map(([e, u]) => {
                        const t = { __Type: 'GFValueProxy', name: e };
                        switch (typeof u) {
                            case 'number':
                                t.number = u;
                                break;
                            case 'boolean':
                                t.bool = u;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = u.toString();
                        }
                        return t;
                    });
                }
                const Ee = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: S.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    me = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            m = e.decoratorId,
                            _ = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            B = void 0 === D ? 0 : D,
                            C = e.onShow,
                            p = e.onHide,
                            g = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, ce);
                        const b = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, a.useMemo)(
                                () =>
                                    B ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            n = R.invalid('resId');
                                        return (
                                            u &&
                                                ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (n = window.subViews[t].id)),
                                            { caller: t, stack: u, resId: n }
                                        );
                                    })().resId,
                                [B],
                            ),
                            h = (0, a.useCallback)(() => {
                                (b.current.isVisible && b.current.timeoutId) ||
                                    (Ee(t, _, { isMouseEvent: !0, on: !0, arguments: de(n) }, v),
                                    C && C(),
                                    (b.current.isVisible = !0));
                            }, [t, _, n, v, C]),
                            f = (0, a.useCallback)(() => {
                                if (b.current.isVisible || b.current.timeoutId) {
                                    const e = b.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (b.current.timeoutId = 0)),
                                        Ee(t, _, { on: !1 }, v),
                                        b.current.isVisible && p && p(),
                                        (b.current.isVisible = !1);
                                }
                            }, [t, _, v, p]),
                            x = (0, a.useCallback)((e) => {
                                b.current.isVisible &&
                                    ((b.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (b.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(b.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = b.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', x, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', x, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && f();
                            }, [F, f]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        window.removeEventListener('mouseleave', f), f();
                                    }
                                ),
                                [f],
                            ),
                            F
                                ? (0, a.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((w = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((b.current.timeoutId = window.setTimeout(h, c ? 100 : 400)),
                                                          r && r(e),
                                                          w && w(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  f(), null == o || o(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === E && f(), null == i || i(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === E && f(), null == s || s(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          g,
                                      ),
                                  )
                                : u
                        );
                        var w;
                    },
                    _e = ['children'];
                function Ae() {
                    return (
                        (Ae =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ae.apply(this, arguments)
                    );
                }
                const Fe = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, _e);
                        return s().createElement(
                            me,
                            Ae(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                t,
                            ),
                            u,
                        );
                    },
                    De = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Be() {
                    return (
                        (Be =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Be.apply(this, arguments)
                    );
                }
                const Ce = R.views.common.tooltip_window.simple_tooltip_content,
                    pe = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            r = e.note,
                            o = e.alert,
                            i = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, De);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: n, note: r, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, n, r, i]);
                        return s().createElement(
                            me,
                            Be(
                                {
                                    contentId:
                                        ((d = null == i ? void 0 : i.hasHtmlContent),
                                        d ? Ce.SimpleTooltipHtmlContent('resId') : Ce.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    };
                function ge() {
                    return (
                        (ge =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ge.apply(this, arguments)
                    );
                }
                const be = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = s().createElement('div', { className: t }, e);
                        if (u.header || u.body) return s().createElement(pe, u, n);
                        const r = u.contentId,
                            o = u.args,
                            a = null == o ? void 0 : o.contentId;
                        return r || a
                            ? s().createElement(me, ge({}, u, { contentId: r || a }), n)
                            : s().createElement(Fe, u, n);
                    },
                    ve = {
                        base: 'CheckButton_base_48',
                        base__disabled: 'CheckButton_base__disabled_9f',
                        border: 'CheckButton_border_74',
                        border__normal: 'CheckButton_border__normal_25',
                        'button-hover': 'CheckButton_button-hover_86',
                        border__checked: 'CheckButton_border__checked_c6',
                        bg: 'CheckButton_bg_67',
                        bg__normal: 'CheckButton_bg__normal_59',
                        bg__checked: 'CheckButton_bg__checked_2b',
                        bg__disabled: 'CheckButton_bg__disabled_b2',
                        content__disabled: 'CheckButton_content__disabled_52',
                        check: 'CheckButton_check_36',
                    };
                var he;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Checked = 'checked'), (e.Disabled = 'disabled');
                })(he || (he = {}));
                const fe = s().memo(
                        ({
                            content: e = '',
                            isDisabled: u = !1,
                            isChecked: t = !1,
                            classNames: n = '',
                            handleButtonClick: r,
                        }) => {
                            if (u)
                                return s().createElement(
                                    'div',
                                    { className: l()(ve.base, ve.base__disabled, n) },
                                    s().createElement('div', { className: l()(ve.bg, ve.bg__disabled) }),
                                    s().createElement('div', { className: l()(ve.content, ve.content__disabled) }, e),
                                );
                            const o = t ? he.Checked : he.Normal;
                            return s().createElement(
                                'div',
                                { className: l()(ve.base, n), onClick: r },
                                s().createElement('div', { className: l()(ve.bg, ve[`bg__${o}`]) }),
                                s().createElement('div', { className: l()(ve.border, ve[`border__${o}`]) }),
                                o === he.Checked ? s().createElement('div', { className: ve.check }) : '',
                                s().createElement('div', { className: l()(ve.content) }, e),
                            );
                        },
                    ),
                    xe = {
                        base: 'MasterKeyButtonGroup_base_be',
                        divider: 'MasterKeyButtonGroup_divider_76',
                        divider__second: 'MasterKeyButtonGroup_divider__second_1d',
                        openButton: 'MasterKeyButtonGroup_openButton_b9',
                        openButton__single: 'MasterKeyButtonGroup_openButton__single_38',
                        buttonsGroup: 'MasterKeyButtonGroup_buttonsGroup_aa',
                        keyIcon: 'MasterKeyButtonGroup_keyIcon_73',
                    },
                    we = R.strings.gui_lootboxes,
                    ye = ({
                        onOpenBox: e,
                        handleBuyKeys: u,
                        availableKeys: t,
                        isOpenBoxDisabled: n = !1,
                        isBuyAvailable: r = !1,
                        customButtonClassName: o = '',
                        customWrapperClassName: i = '',
                    }) => {
                        var c;
                        const d = (0, a.useMemo)(() => Object.values(t), [t]),
                            E = (0, a.useState)(oe.One),
                            m = E[0],
                            _ = E[1],
                            A = (0, a.useState)(le(d)),
                            F = A[0],
                            D = A[1],
                            B = (0, a.useState)(1),
                            C = B[0],
                            p = B[1],
                            g = ((e) => {
                                const u = {};
                                return (
                                    e.forEach((e) => {
                                        u[e.keyID] = {
                                            itemsCount: e.count,
                                            itemsMinCount: 1,
                                            itemsMaxCount: 1 === e.keyID ? 15 : 20,
                                        };
                                    }),
                                    u
                                );
                            })(d.length ? d : [se]),
                            b = !d.length || d.every((e) => !e.count);
                        (0, a.useEffect)(() => {
                            p(
                                ((e, u, t) => {
                                    switch (e) {
                                        case oe.One:
                                            return u[t].itemsMinCount;
                                        case oe.All:
                                            return u[t].itemsCount >= u[t].itemsMaxCount
                                                ? u[t].itemsMaxCount
                                                : u[t].itemsCount;
                                        default:
                                            return u[t].itemsMinCount;
                                    }
                                })(m, g, t[F].keyID),
                            ),
                                g[F].itemsCount || D(le(d));
                        }, [t, d, g, m, F]),
                            (0, a.useEffect)(() => {
                                g[F].itemsCount <= 1 && _(oe.One);
                            }, [g, F]);
                        const v = (0, a.useCallback)(() => {
                            e(C, F), t[F].count - 1 <= 0 && D(le(d));
                        }, [t, d, e, F, C]);
                        return s().createElement(
                            'div',
                            { className: l()(xe.base, i) },
                            s().createElement('div', { className: xe.divider }),
                            s().createElement(
                                'div',
                                { className: l()(xe.buttonsGroup, xe.openTypeButtonsGroup) },
                                d.map((e) => {
                                    return s().createElement(
                                        be,
                                        {
                                            key: `currency-key-tooltip-${e.keyID}`,
                                            tooltipArgs: {
                                                contentId:
                                                    R.views.gui_lootboxes.lobby.gui_lootboxes.tooltips.LootboxKeyTooltip(
                                                        'resId',
                                                    ),
                                                args: { keyID: e.keyID, isActionTooltip: !0 },
                                            },
                                        },
                                        s().createElement(fe, {
                                            key: e.keyID,
                                            content:
                                                ((u = e.iconName),
                                                s().createElement('div', {
                                                    className: xe.keyIcon,
                                                    style: {
                                                        backgroundImage: `url(R.images.gui_lootboxes.gui.maps.storage.currencyKey.${u})`,
                                                    },
                                                })),
                                            classNames: o,
                                            handleButtonClick: () => {
                                                return (u = e.keyID), void D(u);
                                                var u;
                                            },
                                            isChecked: F === e.keyID,
                                            isDisabled: !e.count,
                                        }),
                                    );
                                    var u;
                                }),
                            ),
                            s().createElement('div', { className: l()(xe.divider, xe.divider__second) }),
                            s().createElement(
                                'div',
                                { className: l()(xe.buttonsGroup, xe.countButtonsGroup) },
                                s().createElement(fe, {
                                    content: s().createElement($, {
                                        text: we.optional.openCount.numberCount(),
                                        binding: { count: g[F].itemsMinCount },
                                    }),
                                    classNames: o,
                                    handleButtonClick: () => {
                                        _(oe.One);
                                    },
                                    isChecked: m === oe.One,
                                    isDisabled: !t[F].count,
                                }),
                                s().createElement(fe, {
                                    content:
                                        (null == (c = g[F]) ? void 0 : c.itemsCount) < g[F].itemsMaxCount
                                            ? s().createElement($, { text: we.optional.openCount.all() })
                                            : s().createElement($, {
                                                  text: we.optional.openCount.numberCount(),
                                                  binding: { count: g[F].itemsMaxCount },
                                              }),
                                    classNames: o,
                                    handleButtonClick: () => {
                                        _(oe.All);
                                    },
                                    isChecked: m === oe.All,
                                    isDisabled: g[F].itemsCount <= 1,
                                }),
                            ),
                            s().createElement(
                                ue,
                                {
                                    mixClass: xe.openButton,
                                    size: J.medium,
                                    type: Q.main,
                                    onClick: b ? u : v,
                                    disabled: b ? !r : n,
                                },
                                s().createElement($, { text: b ? we.optional.buyBox() : we.optional.openBox() }),
                            ),
                        );
                    },
                    Te = {
                        base: 'NormalButtonGroup_base_17',
                        divider: 'NormalButtonGroup_divider_78',
                        divider__second: 'NormalButtonGroup_divider__second_58',
                        openButton: 'NormalButtonGroup_openButton_85',
                        buttonsGroup: 'NormalButtonGroup_buttonsGroup_39',
                    },
                    Ne = R.strings.gui_lootboxes,
                    Se = s().memo(
                        ({
                            boxCount: e,
                            onOpenBox: u,
                            isOpenBoxDisabled: t = !1,
                            customButtonClassName: n = '',
                            customWrapperClassName: r = '',
                        }) => {
                            const o = (0, a.useState)(oe.One),
                                i = o[0],
                                c = o[1],
                                d = (0, a.useState)(1),
                                E = d[0],
                                m = d[1];
                            (0, a.useEffect)(() => {
                                m(Math.min(E, 10));
                            }, [E]),
                                (0, a.useEffect)(() => {
                                    switch (i) {
                                        case oe.One:
                                            m(1);
                                            break;
                                        case oe.All:
                                            m(e >= 10 ? 10 : e);
                                            break;
                                        default:
                                            m(1);
                                    }
                                }, [e, i]);
                            const _ = (0, a.useCallback)(() => {
                                u(E);
                            }, [u, E]);
                            return s().createElement(
                                'div',
                                { className: l()(Te.base, r) },
                                s().createElement(
                                    'div',
                                    { className: l()(Te.buttonsGroup, Te.countButtonsGroup) },
                                    s().createElement(fe, {
                                        content: s().createElement($, {
                                            text: Ne.optional.openCount.numberCount(),
                                            binding: { count: 1 },
                                        }),
                                        classNames: n,
                                        handleButtonClick: () => {
                                            c(oe.One);
                                        },
                                        isChecked: i === oe.One,
                                    }),
                                    s().createElement(fe, {
                                        content:
                                            e < 10
                                                ? s().createElement($, { text: Ne.optional.openCount.all() })
                                                : s().createElement($, {
                                                      text: Ne.optional.openCount.numberCount(),
                                                      binding: { count: 10 },
                                                  }),
                                        classNames: n,
                                        handleButtonClick: () => {
                                            c(oe.All);
                                        },
                                        isChecked: i === oe.All,
                                        isDisabled: e <= 1,
                                    }),
                                ),
                                s().createElement(
                                    ue,
                                    {
                                        mixClass: Te.openButton,
                                        size: J.medium,
                                        type: Q.main,
                                        onClick: _,
                                        disabled: t || !e,
                                    },
                                    s().createElement($, { text: Ne.optional.openBox() }),
                                ),
                            );
                        },
                    ),
                    Re = R.strings.gui_lootboxes,
                    ke = s().memo(
                        ({
                            onOpenBox: e,
                            onBuyBox: u,
                            count: t,
                            disabled: n,
                            isOpenBoxDisabled: r,
                            isBuyAvailable: o = !1,
                            allKeys: i = [],
                            currentLootboxKeysIDs: l = [],
                        }) => {
                            const c = (0, a.useState)(ie(l, i)),
                                d = c[0],
                                E = c[1],
                                m = (0, a.useCallback)(() => {
                                    u && u();
                                }, [u]),
                                _ = (0, a.useCallback)(
                                    (u, t) => {
                                        e(u, t);
                                    },
                                    [e],
                                ),
                                A = (0, a.useCallback)(
                                    (u) => {
                                        e(u);
                                    },
                                    [e],
                                );
                            return (
                                (0, a.useEffect)(() => {
                                    E(ie(l, i));
                                }, [i, l]),
                                n
                                    ? s().createElement(
                                          'div',
                                          { className: te },
                                          s().createElement(
                                              'div',
                                              { className: 'BoxRadioButtons_warningText_71' },
                                              Re.entryPointWidget.disabledTooltip.body(),
                                          ),
                                      )
                                    : s().createElement(
                                          'div',
                                          { className: te },
                                          l.length
                                              ? ((e) =>
                                                    Object.keys(e).length
                                                        ? s().createElement(ye, {
                                                              availableKeys: e,
                                                              customButtonClassName: ne,
                                                              isOpenBoxDisabled: r,
                                                              onOpenBox: _,
                                                              handleBuyKeys: m,
                                                              isBuyAvailable: o,
                                                          })
                                                        : s().createElement(
                                                              ue,
                                                              {
                                                                  size: J.medium,
                                                                  type: Q.main,
                                                                  onClick: m,
                                                                  disabled: !o,
                                                              },
                                                              s().createElement($, { text: Re.optional.buyBox() }),
                                                          ))(d)
                                              : s().createElement(Se, {
                                                    boxCount: t,
                                                    customButtonClassName: ne,
                                                    isOpenBoxDisabled: r,
                                                    onOpenBox: A,
                                                }),
                                      )
                            );
                        },
                    );
                var Oe = t(7635);
                const Le = 'lootboxStageRotation',
                    Ie = {
                        start: { startTime: 0.3, endTime: 1.3 },
                        idle: { startTime: 1.3, endTime: 4.15 },
                        hide: { startTime: 4.25, endTime: 4.4 },
                        open: { startTime: 4.75, endTime: 7.3 },
                    },
                    Me = {
                        start: { startTime: 0.3, endTime: 1.3 },
                        idle: { startTime: 1.3, endTime: 4.15 },
                        hide: { startTime: 4.25, endTime: 4.4 },
                        open: { startTime: 7.4, endTime: 10.23 },
                    },
                    Pe = R.sounds.lootboxes_drop(),
                    He = {
                        1: R.sounds.lootboxes_open_standart(),
                        2: R.sounds.lootboxes_open_bronze(),
                        3: R.sounds.lootboxes_open_silver(),
                        4: R.sounds.lootboxes_open_gold(),
                    },
                    Ge = {
                        base: 'BoxRewards_base_05',
                        content: 'BoxRewards_content_b6',
                        frame: 'BoxRewards_frame_30',
                        frame__bottom: 'BoxRewards_frame__bottom_4e',
                        frameContent: 'BoxRewards_frameContent_f1',
                        corner: 'BoxRewards_corner_88',
                        corner__topLeft: 'BoxRewards_corner__topLeft_e5',
                        corner__topRight: 'BoxRewards_corner__topRight_dd',
                        corner__bottomLeft: 'BoxRewards_corner__bottomLeft_11',
                        corner__bottomRight: 'BoxRewards_corner__bottomRight_7a',
                        possibleRewardsInfoWrapper: 'BoxRewards_possibleRewardsInfoWrapper_8e',
                        possibleRewardsHeader: 'BoxRewards_possibleRewardsHeader_42',
                        possibleRewardsImagesWrapper: 'BoxRewards_possibleRewardsImagesWrapper_d8',
                        reward: 'BoxRewards_reward_a7',
                        noMarginRight: 'BoxRewards_noMarginRight_ec',
                        rewardIcon: 'BoxRewards_rewardIcon_18',
                        rewardIcon__vehicle: 'BoxRewards_rewardIcon__vehicle_5d',
                        rewardIcon__premium: 'BoxRewards_rewardIcon__premium_91',
                        rewardIcon__currency: 'BoxRewards_rewardIcon__currency_8e',
                        rewardIcon__vehicleCustomizations: 'BoxRewards_rewardIcon__vehicleCustomizations_ca',
                        rewardIcon__crew: 'BoxRewards_rewardIcon__crew_53',
                        rewardIcon__boosters: 'BoxRewards_rewardIcon__boosters_cd',
                        rewardIcon__equipments: 'BoxRewards_rewardIcon__equipments_17',
                        rewardIcon__accountCustomizations: 'BoxRewards_rewardIcon__accountCustomizations_8d',
                        rewardIcon__featureItems: 'BoxRewards_rewardIcon__featureItems_a3',
                        rewardIcon__lootboxStageRotation: 'BoxRewards_rewardIcon__lootboxStageRotation_db',
                        rewardName: 'BoxRewards_rewardName_19',
                        stage: 'BoxRewards_stage_ae',
                        stage__1: 'BoxRewards_stage__1_51',
                        stage__2: 'BoxRewards_stage__2_9d',
                        stage__3: 'BoxRewards_stage__3_2e',
                    };
                function We(e) {
                    return e;
                }
                function Ue() {
                    return !1;
                }
                console.log;
                var ze = t(9174);
                function je(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const $e = (e) => (0 === e ? window : window.subViews.get(e));
                function Ke(e) {
                    var u;
                    return e && 'value' in e && null != (u = e.constructor) && u.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function Ve(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                var Ye = t(3946);
                const qe = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: n, children: r, mocks: o }) {
                                const i = (0, a.useRef)([]),
                                    l = (e, t, n) => {
                                        var r;
                                        const o = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = $e,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function o(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = r.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const a = (e) => {
                                                    const r = t(u),
                                                        o = n.split('.').reduce((e, u) => e[u], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? o
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, o);
                                                };
                                                return {
                                                    subscribe: (t, o) => {
                                                        const s = 'string' == typeof o ? `${n}.${o}` : n,
                                                            i = T.O.view.addModelObserver(s, u, !0);
                                                        return r.set(i, t), e && t(a(o)), i;
                                                    },
                                                    readByPath: a,
                                                    createCallback: (e, u) => {
                                                        const t = a(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = a(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                t = (function (e, u) {
                                                                    var t =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (t) return (t = t.call(e)).next.bind(t);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (t = (function (e, u) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return je(e, u);
                                                                                var t = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === t &&
                                                                                        e.constructor &&
                                                                                        (t = e.constructor.name),
                                                                                    'Map' === t || 'Set' === t
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === t ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                t,
                                                                                            )
                                                                                          ? je(e, u)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (u && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        t && (e = t);
                                                                        var n = 0;
                                                                        return function () {
                                                                            return n >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[n++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(r.keys());
                                                            !(e = t()).done;

                                                        )
                                                            o(e.value, u);
                                                    },
                                                    unsubscribe: o,
                                                };
                                            })(t),
                                            a =
                                                'real' === e
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (r = null == n ? void 0 : n.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            s = (u) =>
                                                'mocks' === e ? (null == n ? void 0 : n.getter(u)) : a.readByPath(u),
                                            l = (e) => i.current.push(e),
                                            c = (({ observableModel: e }) => {
                                                const u = Object.assign({}, e.primitives(['isShowTriggerHint']), {
                                                        root: e.object(),
                                                        lootboxes: e.array('lootboxes'),
                                                        lootboxKeys: e.array('lootboxKeys'),
                                                    }),
                                                    t = (0, Ye.Om)(
                                                        () =>
                                                            Ve(u.lootboxes.get(), (e) =>
                                                                Object.assign({}, e, {
                                                                    bonusGroups: Ve(e.bonusGroups, We),
                                                                }),
                                                            ),
                                                        { equals: Ue },
                                                    ),
                                                    n = (0, Ye.Om)(
                                                        () => {
                                                            const e = (function (e, u) {
                                                                for (let t = 0; t < e.length; t++) {
                                                                    const n = Ke(e[t]);
                                                                    if (u(n, t, e)) return n;
                                                                }
                                                            })(
                                                                u.lootboxes.get(),
                                                                (e) => e.boxID === u.root.get().currentLootboxID,
                                                            );
                                                            return e
                                                                ? Object.assign({}, e, {
                                                                      bonusGroups: Ve(e.bonusGroups, (u) => ({
                                                                          value: u,
                                                                          stage: u === Le ? e.progressionStage : 0,
                                                                      })),
                                                                      unlockKeyIDs: Ve(e.unlockKeyIDs, (e) => e),
                                                                  })
                                                                : void 0;
                                                        },
                                                        { equals: Ue },
                                                    );
                                                return Object.assign({}, u, {
                                                    computes: {
                                                        getLootboxes: t,
                                                        getCurrentLootbox: n,
                                                        getLootboxKeys: () => Ve(u.lootboxKeys.get(), (e) => e),
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: a,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const n = null != t ? t : s(u),
                                                            r = ze.LO.box(n, { equals: Ue });
                                                        return (
                                                            'real' === e &&
                                                                a.subscribe(
                                                                    (0, ze.aD)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const n = null != t ? t : s(u),
                                                            r = ze.LO.box(n, { equals: Ue });
                                                        return (
                                                            'real' === e &&
                                                                a.subscribe(
                                                                    (0, ze.aD)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const n = s(t);
                                                        if (Array.isArray(u)) {
                                                            const r = u.reduce(
                                                                (e, u) => ((e[u] = ze.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    a.subscribe(
                                                                        (0, ze.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                r[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = u,
                                                                o = Object.entries(r),
                                                                s = o.reduce(
                                                                    (e, [u, t]) => ((e[t] = ze.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    a.subscribe(
                                                                        (0, ze.aD)((e) => {
                                                                            o.forEach(([u, t]) => {
                                                                                s[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: l,
                                            }),
                                            d = { mode: e, model: c, externalModel: a, cleanup: l };
                                        return {
                                            model: c,
                                            controls: 'mocks' === e && n ? n.controls(d) : u(d),
                                            externalModel: a,
                                            mode: e,
                                        };
                                    },
                                    c = (0, a.useRef)(!1),
                                    d = (0, a.useState)(e),
                                    E = d[0],
                                    m = d[1],
                                    _ = (0, a.useState)(() => l(e, n, o)),
                                    A = _[0],
                                    F = _[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        c.current ? F(l(E, n, o)) : (c.current = !0);
                                    }, [o, E, n]),
                                    (0, a.useEffect)(() => {
                                        m(e);
                                    }, [e]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            A.externalModel.dispose(), i.current.forEach((e) => e());
                                        },
                                        [A],
                                    ),
                                    s().createElement(t.Provider, { value: A }, r)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        openLootBoxes: e.createCallback((e) => e, 'openLootBoxes'),
                        close: e.createCallbackNoArgs('onClose'),
                        onError: e.createCallback((e) => ({ errorFilePath: e }), 'onError'),
                        buyBox: e.createCallbackNoArgs('buyBox'),
                        showBonusProbabilities: e.createCallbackNoArgs('showBonusProbabilities'),
                        openningFinished: e.createCallbackNoArgs('openningFinished'),
                        lootboxSelected: e.createCallback((e) => e, 'onLootboxSelected'),
                        changeAnimationEnabledSetting: e.createCallback((e) => e, 'changeAnimationEnabledSetting'),
                        hideTriggerHint: e.createCallbackNoArgs('hideTriggerHint'),
                        showLootBoxInfoPage: e.createCallbackNoArgs('showLootBoxInfoPage'),
                    })),
                    Xe = qe[0],
                    Ze = qe[1],
                    Qe = R.strings.gui_lootboxes,
                    Je = (e, u) =>
                        e === Le
                            ? {
                                  contentId:
                                      R.views.gui_lootboxes.lobby.gui_lootboxes.tooltips.LootboxRotationTooltip(
                                          'resId',
                                      ),
                                  args: { lootBoxID: `${u}` },
                              }
                            : {
                                  contentId:
                                      R.views.gui_lootboxes.lobby.gui_lootboxes.tooltips.BonusGroupTooltip('resId'),
                                  args: { bonusGroup: e, lootBoxID: `${u}` },
                              },
                    eu = s().memo(({ bonusGroups: e, lootBoxID: u }) => {
                        const t = Ze().controls;
                        return s().createElement(
                            'div',
                            { className: Ge.base },
                            s().createElement(
                                'div',
                                { className: Ge.possibleRewardsInfoWrapper },
                                s().createElement(
                                    'div',
                                    { className: Ge.frame },
                                    s().createElement('div', { className: l()(Ge.corner, Ge.corner__topLeft) }),
                                    s().createElement(
                                        'div',
                                        { className: Ge.frameContent },
                                        s().createElement(
                                            'div',
                                            { className: Ge.possibleRewardsHeader },
                                            Qe.optional.possibleRewardsTitle(),
                                        ),
                                    ),
                                    s().createElement('div', { className: l()(Ge.corner, Ge.corner__topRight) }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Ge.possibleRewardsImagesWrapper },
                                    e.map(({ value: e, stage: t }, n) => {
                                        var r;
                                        return s().createElement(
                                            be,
                                            { key: `${e}_${n}`, tooltipArgs: Object.assign({}, Je(e, u)) },
                                            s().createElement(
                                                'div',
                                                { className: l()(Ge.reward, (n + 1) % 3 == 0 && Ge.noMarginRight) },
                                                s().createElement(
                                                    'div',
                                                    { className: l()(Ge.rewardIcon, Ge[`rewardIcon__${e}`]) },
                                                    t > 0 &&
                                                        s().createElement('div', {
                                                            className: l()(Ge.stage, Ge[`stage__${t}`]),
                                                        }),
                                                ),
                                                s().createElement($, {
                                                    text: null != (r = Qe.possibleRewards.$dyn(e)) ? r : '',
                                                    classMix: Ge.rewardName,
                                                }),
                                            ),
                                        );
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: l()(Ge.frame, Ge.frame__bottom) },
                                    s().createElement('div', { className: l()(Ge.corner, Ge.corner__bottomLeft) }),
                                    s().createElement(
                                        'div',
                                        { className: Ge.frameContent },
                                        s().createElement(
                                            me,
                                            {
                                                contentId:
                                                    R.views.gui_lootboxes.lobby.gui_lootboxes.tooltips.ProbabilityButtonTooltip(
                                                        'resId',
                                                    ),
                                            },
                                            s().createElement(
                                                'div',
                                                null,
                                                s().createElement(Oe.N, {
                                                    title: R.strings.gui_lootboxes.optional.openProbabilityOverlay(),
                                                    onClick: t.showBonusProbabilities,
                                                }),
                                            ),
                                        ),
                                    ),
                                    s().createElement('div', { className: l()(Ge.corner, Ge.corner__bottomRight) }),
                                ),
                            ),
                        );
                    }),
                    uu = R.strings.gui_lootboxes,
                    tu = s().memo(({ buyBox: e }) => {
                        const u = (0, a.useState)(!1),
                            t = u[0],
                            n = u[1];
                        return s().createElement(
                            'div',
                            {
                                className: 'BuyButton_base_ac',
                                onMouseEnter: () => {
                                    n(!0);
                                },
                                onMouseLeave: () => {
                                    n(!1);
                                },
                                onClick: e,
                            },
                            s().createElement('div', {
                                className: l()(
                                    'BuyButton_buyButtonIcon_84',
                                    t && 'BuyButton_buyButtonIcon__hovered_61',
                                ),
                            }),
                            s().createElement($, {
                                classMix: l()('BuyButton_buyButtonText_9d', t && 'BuyButton_buyButtonText__hovered_3e'),
                                text: uu.optional.buy(),
                            }),
                        );
                    }),
                    nu = (e) => {
                        let u,
                            t = null;
                        return (
                            (t = requestAnimationFrame(() => {
                                t = requestAnimationFrame(() => {
                                    (t = null), (u = e());
                                });
                            })),
                            () => {
                                'function' == typeof u && u(), null !== t && cancelAnimationFrame(t);
                            }
                        );
                    };
                var ru = t(7515);
                const ou = [];
                function au(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), ou)
                    );
                }
                function su(e, u, t = []) {
                    const n = (0, a.useRef)(0),
                        r = (0, a.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, a.useEffect)(() => r, [r]);
                    const o = (null != t ? t : []).concat([u]);
                    return [
                        (0, a.useCallback)((t) => {
                            (n.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, o),
                        r,
                    ];
                }
                function iu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                var lu = t(7030);
                let cu;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(cu || (cu = {}));
                const du = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Eu = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: o = !1,
                    }) => {
                        const s = (e, t) => {
                            const n = u(e),
                                r = n[0],
                                o = n[1];
                            return (0, ru.u)(r, o, t);
                        };
                        return (i = {}) => {
                            const l = i.settings,
                                c = void 0 === l ? du : l,
                                d = (0, a.useRef)(null),
                                E = (0, a.useRef)(null),
                                m = (() => {
                                    const e = (0, a.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        r = (e, ...t) => {
                                            for (
                                                var n,
                                                    r = (function (e, u) {
                                                        var t =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (t) return (t = t.call(e)).next.bind(t);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (t = (function (e, u) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return iu(e, u);
                                                                    var t = Object.prototype.toString
                                                                        .call(e)
                                                                        .slice(8, -1);
                                                                    return (
                                                                        'Object' === t &&
                                                                            e.constructor &&
                                                                            (t = e.constructor.name),
                                                                        'Map' === t || 'Set' === t
                                                                            ? Array.from(e)
                                                                            : 'Arguments' === t ||
                                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                    t,
                                                                                )
                                                                              ? iu(e, u)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (u && e && 'number' == typeof e.length)
                                                        ) {
                                                            t && (e = t);
                                                            var n = 0;
                                                            return function () {
                                                                return n >= e.length
                                                                    ? { done: !0 }
                                                                    : { done: !1, value: e[n++] };
                                                            };
                                                        }
                                                        throw new TypeError(
                                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                        );
                                                    })(u(e).values());
                                                !(n = r()).done;

                                            )
                                                (0, n.value)(...t);
                                        };
                                    return (0, a.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                                })(),
                                _ = (function (e, u, t) {
                                    const n = (0, a.useMemo)(
                                        () =>
                                            (function (e, u, t, n) {
                                                let r,
                                                    o = !1,
                                                    a = 0;
                                                function s() {
                                                    r && clearTimeout(r);
                                                }
                                                function i(...i) {
                                                    const l = this,
                                                        c = Date.now() - a;
                                                    function d() {
                                                        (a = Date.now()), t.apply(l, i);
                                                    }
                                                    o ||
                                                        (n && !r && d(),
                                                        s(),
                                                        void 0 === n && c > e
                                                            ? d()
                                                            : !0 !== u &&
                                                              (r = setTimeout(
                                                                  n
                                                                      ? function () {
                                                                            r = void 0;
                                                                        }
                                                                      : d,
                                                                  void 0 === n ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                                                    (i.cancel = function () {
                                                        s(), (o = !0);
                                                    }),
                                                    i
                                                );
                                            })(t, e),
                                        u,
                                    );
                                    return (0, a.useEffect)(() => n.cancel, [n]), n;
                                })(
                                    () => {
                                        T.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                A = (0, lu.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = d.current;
                                        u && (t(u, e), m.trigger('change', e), o && _());
                                    },
                                    onRest: (e) => m.trigger('rest', e),
                                    onStart: (e) => m.trigger('start', e),
                                    onPause: (e) => m.trigger('pause', e),
                                })),
                                F = A[0],
                                D = A[1],
                                B = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = F.scrollPosition.get(),
                                            o = (null != (n = F.scrollPosition.goal) ? n : 0) - r;
                                        return s(e, u * t + o + r);
                                    },
                                    [F.scrollPosition],
                                ),
                                C = (0, a.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = d.current;
                                        n &&
                                            D.start({
                                                scrollPosition: s(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: s(n, F.scrollPosition.get()) },
                                            });
                                    },
                                    [D, c.animationConfig, F.scrollPosition],
                                ),
                                p = (0, a.useCallback)(
                                    (e) => {
                                        const u = d.current,
                                            t = E.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return r(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, c.step),
                                            o = B(u, e, n);
                                        C(o);
                                    },
                                    [C, B, c.step],
                                ),
                                g = (0, a.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && p(n(e)),
                                            d.current && m.trigger('mouseWheel', e, F.scrollPosition, u(d.current));
                                    },
                                    [F.scrollPosition, p, m],
                                ),
                                b = ((e, u = []) => {
                                    const t = (0, a.useRef)(),
                                        n = (0, a.useCallback)((...u) => {
                                            t.current && t.current(), (t.current = e(...u));
                                        }, u);
                                    return (
                                        (0, a.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        nu(() => {
                                            const e = d.current;
                                            e &&
                                                (C(s(e, F.scrollPosition.goal), { immediate: !0 }),
                                                m.trigger('resizeHandled'));
                                        }),
                                    [C, F.scrollPosition.goal],
                                ),
                                v = au(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const u = s(e, F.scrollPosition.goal);
                                    u !== F.scrollPosition.goal && C(u, { immediate: !0 }),
                                        m.trigger('recalculateContent');
                                });
                            return (
                                (0, a.useEffect)(
                                    () => (
                                        window.addEventListener('resize', b),
                                        () => {
                                            window.removeEventListener('resize', b);
                                        }
                                    ),
                                    [b],
                                ),
                                (0, a.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (E.current ? r(E.current) : void 0),
                                        getContainerSize: () => (d.current ? e(d.current) : void 0),
                                        getBounds: () =>
                                            d.current
                                                ? u(d.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: c.step.clampedArrowStepTimeout,
                                        clampPosition: s,
                                        handleMouseWheel: g,
                                        applyScroll: C,
                                        applyStepTo: p,
                                        contentRef: d,
                                        wrapperRef: E,
                                        scrollPosition: D,
                                        animationScroll: F,
                                        recalculateContent: v,
                                        events: { on: m.on, off: m.off },
                                    }),
                                    [F.scrollPosition, C, p, m.off, m.on, v, g, D, c.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    mu = Eu({
                        getBounds: (e) => {
                            var u, t;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (u = null == (t = e.parentElement) ? void 0 : t.offsetWidth) ? u : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, u) => {
                            e.style.transform = `translateX(-${u.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? cu.Next : cu.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    _u = 'HorizontalBar_base__nonActive_82',
                    Au = 'disable',
                    Fu = { pending: !1, offset: 0 },
                    Du = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Bu = () => {},
                    Cu = (e, u) => Math.max(20, e.offsetWidth * u),
                    pu = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Du, onDrag: n = Bu }) => {
                        const r = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            d = (0, a.useRef)(null),
                            E = e.stepTimeout || 100,
                            m = (0, a.useState)(Fu),
                            _ = m[0],
                            A = m[1],
                            F = (0, a.useCallback)(
                                (e) => {
                                    A(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            D = () => {
                                const u = c.current,
                                    t = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    l = (0, ru.u)(0, 1, a / (r - n)),
                                    E = (u.offsetWidth - Cu(u, s)) * l;
                                (t.style.transform = `translateX(${0 | E}px)`),
                                    ((e) => {
                                        if (o.current && i.current && c.current && d.current) {
                                            if (0 === e)
                                                return o.current.classList.add(Au), void i.current.classList.remove(Au);
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return o.current.classList.remove(Au), void i.current.classList.add(Au);
                                            var u, t;
                                            o.current.classList.remove(Au), i.current.classList.remove(Au);
                                        }
                                    })(E);
                            },
                            B = au(() => {
                                (() => {
                                    const u = d.current,
                                        t = c.current,
                                        n = e.getWrapperSize(),
                                        o = e.getContainerSize();
                                    if (!(o && u && n && t)) return;
                                    const a = Math.min(1, n / o);
                                    (u.style.width = `${Cu(t, a)}px`),
                                        (u.style.display = 'flex'),
                                        r.current &&
                                            (1 === a ? r.current.classList.add(_u) : r.current.classList.remove(_u));
                                })(),
                                    D();
                            });
                        (0, a.useEffect)(() => nu(B)),
                            (0, a.useEffect)(
                                () =>
                                    nu(() => {
                                        const u = () => {
                                            D();
                                        };
                                        let t = Bu;
                                        const n = () => {
                                            t(), (t = nu(B));
                                        };
                                        return (
                                            e.events.on('recalculateContent', B),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', B),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!_.pending) return;
                                const u = (u) => {
                                        var t;
                                        const r = e.contentRef.current;
                                        if (!r) return;
                                        const o = c.current,
                                            a = d.current;
                                        if (!r || !o || !a) return;
                                        const s = u.screenX - _.offset - o.getBoundingClientRect().x,
                                            i = (s / o.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: a, thumbOffset: s, contentOffset: i });
                                    },
                                    t = () => {
                                        window.removeEventListener('mousemove', u), F(Fu);
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [e, _.offset, _.pending, n, F]);
                        const C = su((u) => e.applyStepTo(u), E, [e]),
                            p = C[0],
                            g = C[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', g, !0),
                                () => document.removeEventListener('mouseup', g, !0)
                            ),
                            [g],
                        );
                        const b = (e) => {
                            e.target.classList.contains(Au) || (0, v.G)('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: l()('HorizontalBar_base_49', u.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: l()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Au) || 0 !== e.button || ((0, v.G)('play'), p(cu.Next));
                                },
                                onMouseUp: g,
                                ref: o,
                                onMouseEnter: b,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: l()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const n = d.current;
                                        n &&
                                            0 === u.button &&
                                            ((0, v.G)('play'),
                                            u.target === n
                                                ? F({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const n = d.current,
                                                          r = e.contentRef.current;
                                                      if (!n || !r) return;
                                                      const o = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + o * u);
                                                  })(u.screenX > n.getBoundingClientRect().x ? cu.Prev : cu.Next));
                                    },
                                    ref: c,
                                    onMouseEnter: b,
                                },
                                s().createElement('div', { ref: d, className: l()('HorizontalBar_thumb_fd', u.thumb) }),
                                s().createElement('div', { className: l()('HorizontalBar_rail_32', u.rail) }),
                            ),
                            s().createElement('div', {
                                className: l()('HorizontalBar_rightButton_03', u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Au) || 0 !== e.button || ((0, v.G)('play'), p(cu.Prev));
                                },
                                onMouseUp: g,
                                ref: i,
                                onMouseEnter: b,
                            }),
                        );
                    }),
                    gu = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    bu = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: o,
                        scrollClassName: i,
                        getStepByRailClick: c,
                        onDrag: d,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: l()(gu.base, e.base) });
                            }, [n]),
                            m = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: l()(gu.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: l()(gu.defaultScrollArea, r) },
                                s().createElement(vu, { className: i, api: m, classNames: o }, e),
                            ),
                            s().createElement(pu, { getStepByRailClick: c, api: u, onDrag: d, classNames: E }),
                        );
                    },
                    vu = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, a.useEffect)(() => nu(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: l()(gu.base, u) },
                            s().createElement(
                                'div',
                                {
                                    className: l()(gu.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: l()(gu.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (vu.Bar = pu),
                    (vu.Default = bu),
                    (vu.SeniorityAwards = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, a.useEffect)(() => nu(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: l()(gu.base, u) },
                            s().createElement(
                                'div',
                                { className: l()(gu.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                s().createElement(
                                    'div',
                                    { className: l()(gu.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    ));
                const hu = Eu({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? cu.Next : cu.Prev),
                    }),
                    fu = 'VerticalBar_base__nonActive_42',
                    xu = 'disable',
                    wu = () => {},
                    yu = { pending: !1, offset: 0 },
                    Tu = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Nu = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Su = (e, u) => Math.max(20, e.offsetHeight * u),
                    Ru = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Tu, onDrag: n = wu }) => {
                        const r = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            d = (0, a.useRef)(null),
                            E = e.stepTimeout || 100,
                            m = (0, a.useState)(yu),
                            _ = m[0],
                            A = m[1],
                            F = (0, a.useCallback)(
                                (e) => {
                                    A(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            D = au(() => {
                                const u = d.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(n && o && u && t)) return;
                                const a = Math.min(1, n / o);
                                return (
                                    (u.style.height = `${Su(t, a)}px`),
                                    u.classList.add('VerticalBar_thumb_32'),
                                    r.current &&
                                        (1 === a ? r.current.classList.add(fu) : r.current.classList.remove(fu)),
                                    a
                                );
                            }),
                            B = au(() => {
                                const u = c.current,
                                    t = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    l = (0, ru.u)(0, 1, a / (r - n)),
                                    E = (u.offsetHeight - Su(u, s)) * l;
                                (t.style.transform = `translateY(${0 | E}px)`),
                                    ((e) => {
                                        if (o.current && i.current && c.current && d.current) {
                                            if (0 === e)
                                                return o.current.classList.add(xu), void i.current.classList.remove(xu);
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return o.current.classList.remove(xu), void i.current.classList.add(xu);
                                            var u, t;
                                            o.current.classList.remove(xu), i.current.classList.remove(xu);
                                        }
                                    })(E);
                            }),
                            C = au(() => {
                                Nu(e, () => {
                                    D(), B();
                                });
                            });
                        (0, a.useEffect)(() => nu(C)),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    Nu(e, () => {
                                        B();
                                    });
                                };
                                let t = wu;
                                const n = () => {
                                    t(), (t = nu(C));
                                };
                                return (
                                    e.events.on('recalculateContent', C),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', C),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!_.pending) return;
                                const u = (u) => {
                                        Nu(e, (t) => {
                                            const r = c.current,
                                                o = d.current,
                                                a = e.getContainerSize();
                                            if (!r || !o || !a) return;
                                            const s = u.screenY - _.offset - r.getBoundingClientRect().y,
                                                i = (s / r.offsetHeight) * a;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: o, thumbOffset: s, contentOffset: i });
                                        });
                                    },
                                    t = () => {
                                        window.removeEventListener('mousemove', u), F(yu);
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [e, _.offset, _.pending, n, F]);
                        const p = su((u) => e.applyStepTo(u), E, [e]),
                            g = p[0],
                            b = p[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', b, !0),
                                () => document.removeEventListener('mouseup', b, !0)
                            ),
                            [b],
                        );
                        const h = (e) => {
                            e.target.classList.contains(xu) || (0, v.G)('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: l()('VerticalBar_base_f3', u.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: l()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(xu) || 0 !== e.button || ((0, v.G)('play'), g(cu.Next));
                                },
                                ref: o,
                                onMouseEnter: h,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: l()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const n = d.current;
                                        var r;
                                        n &&
                                            0 === u.button &&
                                            ((0, v.G)('play'),
                                            u.target === n
                                                ? F({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y })
                                                : ((r = u.screenY > n.getBoundingClientRect().y ? cu.Prev : cu.Next),
                                                  d.current &&
                                                      Nu(e, (u) => {
                                                          if (!u) return;
                                                          const n = t(e),
                                                              o = e.clampPosition(u, u.scrollTop + n * r);
                                                          e.applyScroll(o);
                                                      })));
                                    },
                                    ref: c,
                                    onMouseEnter: h,
                                },
                                s().createElement('div', { ref: d, className: u.thumb }),
                                s().createElement('div', { className: l()('VerticalBar_rail_43', u.rail) }),
                            ),
                            s().createElement('div', {
                                className: l()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(xu) || 0 !== e.button || ((0, v.G)('play'), g(cu.Prev));
                                },
                                onMouseUp: b,
                                ref: i,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    ku = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Ou = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: o,
                        scrollClassNames: i,
                        getStepByRailClick: c,
                        onDrag: d,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: l()(ku.base, e.base) });
                            }, [n]),
                            m = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: l()(ku.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: l()(ku.area, r) },
                                s().createElement(Lu, { className: o, classNames: i, api: m }, e),
                            ),
                            s().createElement(Ru, { getStepByRailClick: c, api: u, onDrag: d, classNames: E }),
                        );
                    },
                    Lu = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, a.useEffect)(() => nu(n.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: l()(ku.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: l()(ku.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                Lu.Default = Ou;
                const Iu = { Vertical: r, Horizontal: n },
                    Mu = { type: 'idle' },
                    Pu = {
                        base: 'Carousel_base_51',
                        prev: 'Carousel_prev_37',
                        next: 'Carousel_next_a6',
                        prev__disabled: 'Carousel_prev__disabled_3e',
                        next__disabled: 'Carousel_next__disabled_c0',
                        carousel: 'Carousel_carousel_2d',
                        horizontalWrapper: 'Carousel_horizontalWrapper_fa',
                        horizontalContent: 'Carousel_horizontalContent_49',
                        scroll: 'Carousel_scroll_8a',
                    },
                    Hu = ({ count: e, customFontSize: u, maximum: t }) => {
                        const n = 0.6 * (null != u ? u : 16) + 'rem';
                        return s().createElement(
                            'div',
                            { className: 'FormatCount_base_01', style: { fontSize: `${null != u ? u : 16}rem` } },
                            t && e >= t.maxCount
                                ? s().createElement('div', null, null == t ? void 0 : t.maxCountText)
                                : s().createElement(
                                      s().Fragment,
                                      null,
                                      s().createElement('div', { style: { width: n } }, '×'),
                                      e,
                                  ),
                        );
                    },
                    Gu = {
                        base: 'LootboxCard_base_54',
                        base__disabled: 'LootboxCard_base__disabled_9a',
                        disabledOverlay: 'LootboxCard_disabledOverlay_e8',
                        disabledOverlay__layout: 'LootboxCard_disabledOverlay__layout_d9',
                        disabledOverlay__img: 'LootboxCard_disabledOverlay__img_12',
                        border: 'LootboxCard_border_a8',
                        base__selected: 'LootboxCard_base__selected_1b',
                        icon: 'LootboxCard_icon_a4',
                        infinite: 'LootboxCard_infinite_85',
                        count: 'LootboxCard_count_f7',
                        text: 'LootboxCard_text_fc',
                        innerText: 'LootboxCard_innerText_fc',
                        hover: 'LootboxCard_hover_da',
                        disabled: 'LootboxCard_disabled_db',
                        check: 'LootboxCard_check_4f',
                    },
                    Wu = (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                    Uu = R.strings.lootboxes,
                    zu = s().memo(
                        ({
                            descriptionKey: e,
                            iconName: u,
                            isOpenEnabled: t,
                            count: n,
                            boxID: r,
                            isSelected: o = !1,
                            isInfinite: i = !1,
                            onSelect: c,
                        }) => {
                            var d;
                            const m = (0, a.useState)(!1),
                                _ = m[0],
                                A = m[1],
                                F = (0, a.useState)(''),
                                D = F[0],
                                B = F[1],
                                C = (0, E.GS)().mediaSize,
                                p = null != (d = Uu.userName.$dyn(e)) ? d : Uu.userName.default(),
                                g = l()(
                                    Gu.base,
                                    o && Gu.base__selected,
                                    !t && Gu.base__disabled,
                                    _ && Gu.base__hovered,
                                ),
                                b = C < E.cJ.Medium ? 'c_96x64' : 'c_160x106',
                                h = (0, lu.useTransition)(_, {
                                    key: _,
                                    from: { opacity: 0 },
                                    enter: { opacity: 1 },
                                    leave: { opacity: 0 },
                                    delay: 0,
                                    config: { duration: 300, easing: Wu },
                                }),
                                f = (0, lu.useSpring)({
                                    from: { x: 0, opacity: 0 },
                                    to: { x: 0, opacity: 1 },
                                    delay: 0,
                                    config: { duration: 300, easing: Wu },
                                }),
                                x = (0, a.useCallback)(
                                    (e, u) =>
                                        u
                                            ? s().createElement('div', { className: Gu.infinite })
                                            : e > 0
                                              ? s().createElement(
                                                    'div',
                                                    { className: Gu.count },
                                                    s().createElement(Hu, { count: e }),
                                                )
                                              : '',
                                    [],
                                ),
                                w = (0, a.useCallback)(
                                    (e) => {
                                        e
                                            ? B(
                                                  `url('R.images.gui_lootboxes.gui.maps.lootboxes.${b}.${u}') no-repeat center / 100%`,
                                              )
                                            : (B(
                                                  `url('R.images.gui_lootboxes.gui.maps.lootboxes.${b}.default') no-repeat center / 100%`,
                                              ),
                                              console.warn('No resource icon for lootbox', u));
                                    },
                                    [u, b],
                                );
                            var y, T;
                            return (
                                (y = `R.images.gui_lootboxes.gui.maps.lootboxes.${b}.${u}`),
                                (T = w),
                                (0, a.useEffect)(() => {
                                    const e = () => T(!0),
                                        u = () => T(!1),
                                        t = new Image();
                                    return (
                                        t.addEventListener('load', e),
                                        t.addEventListener('error', u),
                                        (t.src = y),
                                        () => {
                                            t.removeEventListener('load', e), t.removeEventListener('error', u);
                                        }
                                    );
                                }, [y, T]),
                                s().createElement(
                                    'div',
                                    {
                                        className: g,
                                        onClick: () => {
                                            t && (c(r), (0, v.G)(R.sounds.tabs()));
                                        },
                                        onMouseEnter: () => {
                                            A(!0);
                                        },
                                        onMouseLeave: () => {
                                            A(!1);
                                        },
                                    },
                                    s().createElement('div', { className: Gu.border }),
                                    !t &&
                                        s().createElement(
                                            'div',
                                            { className: Gu.disabledOverlay },
                                            s().createElement('div', {
                                                className: l()(Gu.disabledOverlay, Gu.disabledOverlay__layout),
                                            }),
                                            s().createElement('div', {
                                                className: l()(Gu.disabledOverlay, Gu.disabledOverlay__img),
                                            }),
                                        ),
                                    s().createElement(
                                        be,
                                        {
                                            tooltipArgs: {
                                                contentId:
                                                    R.views.gui_lootboxes.lobby.gui_lootboxes.tooltips.LootboxTooltip(
                                                        'resId',
                                                    ),
                                                args: { lootBoxID: r },
                                            },
                                        },
                                        s().createElement('div', { className: Gu.icon, style: { background: D } }),
                                    ),
                                    x(n, i),
                                    s().createElement(
                                        'div',
                                        { className: Gu.text },
                                        s().createElement($, { text: p, classMix: Gu.innerText }),
                                    ),
                                    t &&
                                        !o &&
                                        h(
                                            (e, u) =>
                                                u &&
                                                s().createElement(lu.animated.div, { className: Gu.hover, style: e }),
                                        ),
                                    !t &&
                                        s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement('div', { className: Gu.hover }),
                                            s().createElement('div', { className: Gu.disabled }),
                                        ),
                                    o && s().createElement('div', { className: Gu.check, style: f }),
                                )
                            );
                        },
                    );
                function ju() {
                    return (
                        (ju =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ju.apply(this, arguments)
                    );
                }
                const $u = (0, L.Pi)(({ disabled: e, onChange: u }) => {
                    const t = mu();
                    !(function (e, u) {
                        const t = e.contentRef,
                            n = e.wrapperRef,
                            r = e.scrollPosition,
                            o = e.clampPosition,
                            s = e.animationScroll,
                            i = e.events,
                            l = (0, a.useState)(Mu),
                            c = l[0],
                            d = l[1];
                        (0, a.useEffect)(() => {
                            const e = t.current;
                            e && (e.style.cursor = 'dragging' === c.type ? 'move' : 'grab');
                        }, [t, c.type]),
                            (0, a.useEffect)(() => {
                                if ('dragging' !== c.type) return;
                                const e = T.O.client.events.mouse.move(([e, a]) => {
                                        const i = t.current,
                                            l = n.current;
                                        if (!i || !l) return;
                                        if ('inside' === a && e.clientX < 0) return;
                                        const d = 'inside' === a ? e.clientX : e.clientX - l.offsetLeft,
                                            E = c.positionFrom - d,
                                            m = c.previousScrollPosition + E;
                                        r.start(
                                            Object.assign(
                                                {
                                                    scrollPosition: o(i, m),
                                                    from: { scrollPosition: s.scrollPosition.get() },
                                                },
                                                u,
                                            ),
                                        );
                                    }),
                                    a = T.O.client.events.mouse.up(function () {
                                        d({ type: 'scrollingToEnd' });
                                    });
                                return () => {
                                    e(), a();
                                };
                            }, [s.scrollPosition, o, t, c, r, n, u]),
                            (0, a.useEffect)(() => {
                                if ('scrollingToEnd' !== c.type) return;
                                const e = () => {
                                    d(Mu);
                                };
                                return s.scrollPosition.idle && e(), i.on('rest', e), () => i.off('rest', e);
                            }, [s.scrollPosition, c.type, i]),
                            (0, a.useEffect)(() => {
                                const e = t.current;
                                if (!e) return;
                                const u = (e) => {
                                    d({
                                        type: 'dragging',
                                        positionFrom: e.screenX,
                                        previousScrollPosition: s.scrollPosition.get(),
                                    });
                                };
                                return e.addEventListener('mousedown', u), () => e.removeEventListener('mousedown', u);
                            }, [s.scrollPosition, t]);
                    })(t);
                    const n = Ze().model,
                        r = n.root.get().currentLootboxID,
                        o = n.computes.getLootboxes(),
                        i = su((e) => t.applyStepTo(e), t.stepTimeout, [t]),
                        c = i[0],
                        d = i[1],
                        E = (0, a.useCallback)(
                            (t) => {
                                e || u(t);
                            },
                            [e, u],
                        ),
                        m = o.length > 4,
                        _ = (0, a.useState)(!1),
                        A = _[0],
                        F = _[1],
                        D = (0, a.useState)(!0),
                        B = D[0],
                        C = D[1];
                    return (
                        (0, a.useEffect)(() => {
                            const e = (e) => {
                                const u = t.getContainerSize() - t.getWrapperSize();
                                F(e.value.scrollPosition > 0), C(e.value.scrollPosition < u);
                            };
                            return (
                                t.events.on('rest', e),
                                () => {
                                    t.events.off('rest', e);
                                }
                            );
                        }, [t, t.events]),
                        s().createElement(
                            'div',
                            { className: Pu.base },
                            m &&
                                s().createElement('div', {
                                    className: l()(Pu.prev, !A && Pu.prev__disabled),
                                    onMouseDown: () => {
                                        A && c(cu.Next);
                                    },
                                    onMouseUp: d,
                                }),
                            s().createElement(
                                'div',
                                { className: Pu.carousel },
                                s().createElement(
                                    Iu.Horizontal.Area,
                                    {
                                        api: t,
                                        classNames: {
                                            content: Pu.horizontalContent,
                                            wrapper: m ? '' : Pu.horizontalWrapper,
                                        },
                                        className: Pu.scroll,
                                    },
                                    Ve(o, (e) =>
                                        s().createElement(
                                            'div',
                                            { key: e.boxID, className: Pu.lootboxCard },
                                            s().createElement(
                                                zu,
                                                ju({}, e, { isSelected: e.boxID === r, onSelect: E }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                            m &&
                                s().createElement('div', {
                                    className: l()(Pu.next, !B && Pu.next__disabled),
                                    onMouseDown: () => {
                                        B && c(cu.Prev);
                                    },
                                    onMouseUp: d,
                                }),
                        )
                    );
                });
                var Ku = t(6620);
                const Vu = (0, L.Pi)(({ keysWidth: e }) => {
                    const u = Ze().controls,
                        t = (0, a.useState)(!1),
                        n = t[0],
                        r = t[1],
                        o = (0, a.useCallback)(() => {
                            u.hideTriggerHint(), r(!0);
                        }, [u]);
                    return s().createElement(
                        'div',
                        {
                            className: l()('TriggerHint_base_e5', n && 'TriggerHint_base__hidden_4e'),
                            style: { width: `${Math.max(e, 220)}rem` },
                        },
                        s().createElement('div', { className: 'TriggerHint_selection_13', onMouseEnter: o }),
                        s().createElement(
                            'div',
                            { className: 'TriggerHint_info_36' },
                            s().createElement(
                                'div',
                                { className: 'TriggerHint_arrowHolder_c0' },
                                s().createElement('div', { className: 'TriggerHint_arrow_6c' }),
                            ),
                            s().createElement(
                                'div',
                                null,
                                s().createElement($, {
                                    text: R.strings.gui_lootboxes.triggerHint.title(),
                                    classMix: 'TriggerHint_text_59',
                                }),
                            ),
                        ),
                    );
                });
                var Yu;
                !(function (e) {
                    (e[(e.HUNDRED = 2)] = 'HUNDRED'),
                        (e[(e.THOUSAND = 6)] = 'THOUSAND'),
                        (e[(e.TEN_THOUSAND = 15)] = 'TEN_THOUSAND'),
                        (e[(e.HUNDRED_THOUSAND = 20)] = 'HUNDRED_THOUSAND');
                })(Yu || (Yu = {}));
                const qu = (0, L.Pi)(() => {
                    const e = Ze().model,
                        u = e.root.get().isShowTriggerHint,
                        t = e.computes.getLootboxKeys(),
                        n = ((e) => {
                            let u = 0;
                            return (
                                e.forEach((e) => {
                                    u += ((e) => {
                                        const u = 60,
                                            t = u + Yu.HUNDRED,
                                            n = u + Yu.THOUSAND,
                                            r = u + Yu.TEN_THOUSAND,
                                            o = u + Yu.HUNDRED_THOUSAND;
                                        return e < 10 ? u : e < 100 ? t : e < 1e3 ? n : e < 1e4 ? r : e < 1e5 ? o : u;
                                    })(e.count);
                                }),
                                u
                            );
                        })(t);
                    return s().createElement(
                        'div',
                        { className: 'CurrencyKeyList_base_2d' },
                        s().createElement(
                            'div',
                            { className: 'CurrencyKeyList_wrapper_1e' },
                            t.map((e) => {
                                const u = R.images.gui_lootboxes.gui.maps.storage.currencyKey.$dyn(
                                    `${((t = e.iconName), t.replace(/-/g, '_'))}`,
                                );
                                var t;
                                return s().createElement(
                                    'div',
                                    { key: `currency-key-${e.keyID}` },
                                    s().createElement(
                                        be,
                                        {
                                            tooltipArgs: {
                                                contentId:
                                                    R.views.gui_lootboxes.lobby.gui_lootboxes.tooltips.LootboxKeyTooltip(
                                                        'resId',
                                                    ),
                                                args: { keyID: e.keyID, isShowCount: !1 },
                                            },
                                        },
                                        s().createElement(Ku.s, { icon: u, count: e.count }),
                                    ),
                                );
                            }),
                        ),
                        u && s().createElement(Vu, { keysWidth: n }),
                    );
                });
                let Xu;
                var Zu;
                ((Zu = Xu || (Xu = {})).Heavy = 'heavyTank'),
                    (Zu.Medium = 'mediumTank'),
                    (Zu.Light = 'lightTank'),
                    (Zu.Spg = 'SPG'),
                    (Zu.AtSpg = 'AT-SPG'),
                    R.strings.gui_lootboxes.time.days(),
                    R.strings.gui_lootboxes.time.hours(),
                    R.strings.gui_lootboxes.time.minutes(),
                    R.strings.gui_lootboxes.time.seconds();
                const Qu = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
                    Ju = (e) => {
                        const u = [...new Set(Ve(e, (e) => ((e) => Qu[e] || '')(e)))];
                        return u.length > 1 ? `${u[0]}-${u[1]}` : `${u[0]}`;
                    },
                    et = ({ value: e, className: u }) =>
                        s().createElement(
                            'div',
                            { className: l()('Counter_base_82', u) },
                            s().createElement('div', { className: 'Counter_text_79' }, e),
                        ),
                    ut = ({ onClick: e }) =>
                        s().createElement('div', {
                            className: l()('InfoIcon_base_6d', e && 'InfoIcon_base__clickable_f2'),
                            onClick: e,
                        }),
                    tt = 'GuaranteedRewardCount_text_94',
                    nt = ({ onInfoClick: e, boxesCount: u, levelsRange: t }) =>
                        s().createElement(
                            'div',
                            { className: 'GuaranteedRewardCount_base_6e' },
                            s().createElement(
                                'div',
                                { className: tt },
                                s().createElement($, {
                                    text: R.strings.gui_lootboxes.guaranteedReward.boxesLeft(),
                                    binding: { level: Ju(t) },
                                }),
                            ),
                            s().createElement(et, { value: u }),
                            s().createElement(
                                'div',
                                { className: tt },
                                s().createElement(
                                    'div',
                                    { className: 'GuaranteedRewardCount_icon_e8' },
                                    s().createElement(ut, { onClick: e }),
                                ),
                            ),
                        );
                var rt = t(7568);
                const ot = 'GuaranteedRewardNext_particles_6d',
                    at = (e) =>
                        `R.images.gui.maps.icons.newYear.sequence.blue_particles_small.atmosphere_big_idle_${e.toString().padStart(5, '0')}`,
                    st = (e) =>
                        `R.images.gui.maps.icons.newYear.sequence.blue_particles_small.atmosphere_big_idle_${((e + 75) % 120).toString().padStart(5, '0')}`,
                    it = (e) =>
                        `R.images.gui.maps.icons.newYear.sequence.blue_particles_small.atmosphere_big_idle_${((e + 50) % 120).toString().padStart(5, '0')}`,
                    lt = ({ levelsRange: e, onInfoClick: u }) =>
                        s().createElement(
                            'div',
                            { className: 'GuaranteedRewardNext_base_da' },
                            s().createElement(rt.At, {
                                width: 320,
                                height: 120,
                                frameCount: 120,
                                frameTime: 50,
                                getSrcByFrame: at,
                                className: l()(ot, 'GuaranteedRewardNext_particles__left_b6'),
                            }),
                            s().createElement(rt.At, {
                                width: 400,
                                height: 180,
                                frameCount: 120,
                                getSrcByFrame: st,
                                className: l()(ot, 'GuaranteedRewardNext_particles__center_3a'),
                            }),
                            s().createElement(rt.At, {
                                width: 320,
                                height: 120,
                                frameCount: 120,
                                frameTime: 50,
                                getSrcByFrame: it,
                                className: l()(ot, 'GuaranteedRewardNext_particles__right_b7'),
                            }),
                            s().createElement(
                                'div',
                                { className: 'GuaranteedRewardNext_text_f7' },
                                s().createElement(
                                    'div',
                                    { className: 'GuaranteedRewardNext_shineContainer_46' },
                                    s().createElement('div', { className: 'GuaranteedRewardNext_shine_02' }),
                                ),
                                s().createElement($, {
                                    text: R.strings.gui_lootboxes.guaranteedReward.next(),
                                    binding: { level: Ju(e) },
                                }),
                                s().createElement(
                                    'div',
                                    { className: 'GuaranteedRewardNext_icon_23' },
                                    s().createElement(ut, { onClick: u }),
                                ),
                            ),
                        );
                let ct;
                !(function (e) {
                    (e[(e.Hidden = 0)] = 'Hidden'),
                        (e[(e.NextGuaranteed = 1)] = 'NextGuaranteed'),
                        (e[(e.CountBeforeGuaranteed = 2)] = 'CountBeforeGuaranteed');
                })(ct || (ct = {}));
                const dt = s().memo(function ({ boxesCount: e, levelsRange: u, lootBoxID: t, onInfoClick: n }) {
                        const r = e < 1 ? ct.Hidden : 1 === e ? ct.NextGuaranteed : ct.CountBeforeGuaranteed;
                        return s().createElement(
                            'div',
                            null,
                            r === ct.CountBeforeGuaranteed &&
                                s().createElement('div', { className: 'GuaranteedReward_shine_c9' }),
                            s().createElement(
                                me,
                                {
                                    contentId:
                                        R.views.gui_lootboxes.lobby.gui_lootboxes.tooltips.GuaranteedRewardTooltip(
                                            'resId',
                                        ),
                                    args: { lootBoxID: t },
                                    isEnabled: r !== ct.Hidden,
                                },
                                s().createElement(
                                    'div',
                                    null,
                                    (() => {
                                        switch (r) {
                                            case ct.CountBeforeGuaranteed:
                                                return s().createElement(nt, {
                                                    boxesCount: e,
                                                    levelsRange: u,
                                                    onInfoClick: n,
                                                });
                                            case ct.NextGuaranteed:
                                                return s().createElement(lt, { levelsRange: u, onInfoClick: n });
                                            default:
                                                return null;
                                        }
                                    })(),
                                ),
                            ),
                        );
                    }),
                    Et = R.strings.gui_lootboxes,
                    mt = s().memo(({ isShopAvailable: e, handleToHangar: u, handleToShop: t }) =>
                        s().createElement(
                            'div',
                            { className: 'NoBoxes_base_a6' },
                            s().createElement('div', { className: 'NoBoxes_noBoxVignette_e2' }),
                            s().createElement(
                                'div',
                                { className: 'NoBoxes_noBox_22' },
                                s().createElement(
                                    'div',
                                    { className: 'NoBoxes_noBoxHeader_e2' },
                                    Et.openBoxScreen.noLootboxesMain(),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'NoBoxes_noBoxSubText_2d' },
                                    e
                                        ? Et.openBoxScreen.noLootboxesShopSecondary()
                                        : Et.openBoxScreen.noLootboxesSecondary(),
                                ),
                                e
                                    ? s().createElement(
                                          ue,
                                          {
                                              mixClass: 'NoBoxes_noBoxBuyButton_c3',
                                              size: J.medium,
                                              type: Q.main,
                                              onClick: t,
                                          },
                                          Et.footer.button.buy(),
                                      )
                                    : s().createElement(
                                          ue,
                                          {
                                              mixClass: 'NoBoxes_noBoxButton_cc',
                                              size: J.medium,
                                              type: Q.primary,
                                              onClick: u,
                                          },
                                          Et.openBoxScreen.backBtnMain(),
                                      ),
                            ),
                        ),
                    );
                let _t, At;
                !(function (e) {
                    (e.STORAGE_VIEWING = 'STORAGE_VIEWING'),
                        (e.REQUEST_TO_OPEN = 'REQUEST_TO_OPEN'),
                        (e.OPENING = 'OPENING'),
                        (e.LOSE_OPENING = 'LOSE_OPENING'),
                        (e.OPENING_ERROR = 'OPENING_ERROR'),
                        (e.UNIQUE_REWARDING = 'UNIQUE_REWARDING'),
                        (e.REWARDING = 'REWARDING');
                })(_t || (_t = {})),
                    (function (e) {
                        (e[(e.TO_HANGAR = 0)] = 'TO_HANGAR'),
                            (e[(e.TO_SHOP = 1)] = 'TO_SHOP'),
                            (e[(e.TO_NY_CUSTOMIZATION = 2)] = 'TO_NY_CUSTOMIZATION'),
                            (e[(e.TO_SHARDS = 3)] = 'TO_SHARDS'),
                            (e[(e.TO_REFERRAL = 4)] = 'TO_REFERRAL');
                    })(At || (At = {}));
                const Ft = {
                        StorageViewing: _t.STORAGE_VIEWING,
                        RequestToOpen: _t.REQUEST_TO_OPEN,
                        Opening: _t.OPENING,
                        OpeningError: _t.OPENING_ERROR,
                        UniqueRewarding: _t.UNIQUE_REWARDING,
                        Rewarding: _t.REWARDING,
                        LoseOpening: _t.LOSE_OPENING,
                    },
                    Dt = 'open',
                    Bt = 'openStop',
                    Ct = 'hide',
                    pt = 'start',
                    gt = 'idle',
                    bt = 'idleStop',
                    vt = 'init';
                let ht;
                !(function (e) {
                    (e[(e.Key = 0)] = 'Key'), (e[(e.Lockpick = 1)] = 'Lockpick');
                })(ht || (ht = {}));
                var ft = t(2557);
                const xt = ({
                        currentVideoState: e,
                        currentLootbox: u,
                        mixClass: t,
                        onPause: n,
                        onError: r,
                        currentOpenState: o,
                    }) => {
                        const i = (0, ft.nn)(),
                            c = i[0],
                            d = i[1],
                            E = (0, a.useRef)(Object.assign({}, Ie)),
                            m = (null == u ? void 0 : u.videoRes) || '';
                        (0, a.useEffect)(() => {
                            o === Ft.Opening && (E.current = Ie), o === Ft.LoseOpening && (E.current = Me);
                        }, [o]),
                            (0, a.useEffect)(() => {
                                const e = c.current;
                                e &&
                                    e.onChangeTime((u) => {
                                        u.currentTime >= E.current.start.endTime &&
                                            u.currentTime < E.current.idle.startTime &&
                                            (e.cleanup(), e.pause(), e.setCurrentTime(E.current.start.endTime)),
                                            u.currentTime >= E.current.idle.endTime &&
                                                u.currentTime < E.current.hide.startTime &&
                                                (e.setCurrentTime(E.current.idle.endTime), e.pause()),
                                            u.currentTime >= E.current.hide.endTime &&
                                                u.currentTime < E.current.open.startTime &&
                                                (e.setCurrentTime(E.current.hide.endTime), e.pause()),
                                            u.currentTime >= E.current.open.endTime &&
                                                (e.setCurrentTime(E.current.open.endTime), e.pause());
                                    });
                            }, [c]),
                            (0, a.useEffect)(() => {
                                const u = c.current;
                                if (u)
                                    switch (e) {
                                        case vt:
                                            u.pause(), u.setCurrentTime(E.current.start.startTime);
                                            break;
                                        case pt:
                                            u.setCurrentTime(E.current.start.startTime), u.play();
                                            break;
                                        case gt:
                                            u.setCurrentTime(E.current.idle.startTime), u.play();
                                            break;
                                        case bt:
                                            u.pause(), u.setCurrentTime(E.current.idle.endTime);
                                            break;
                                        case Bt:
                                            u.pause(), u.setCurrentTime(E.current.open.startTime);
                                            break;
                                        case Dt:
                                            u.setCurrentTime(E.current.open.startTime), u.play();
                                            break;
                                        case Ct:
                                            u.setCurrentTime(E.current.hide.startTime), u.play();
                                    }
                            }, [c, e]);
                        const _ = (0, a.useCallback)(() => {
                                n(e);
                            }, [e, n]),
                            A = (0, a.useCallback)(() => {
                                r && r(`[Lootbox] ${null == u ? void 0 : u.iconName}`);
                            }, [null == u ? void 0 : u.iconName, r]);
                        return s().createElement(ft.nk, {
                            className: l()('VideoBg_video_63', 'VideoBg_video__visible_06', t),
                            src: m,
                            autoplay: !1,
                            loop: !1,
                            setPlayer: d,
                            videoWidth: 1920,
                            videoHeight: 1080,
                            onPause: _,
                            onError: A,
                        });
                    },
                    wt = 'App_imageBox_fd',
                    yt = 'App_imageBox__visible_fe',
                    Tt = R.strings.menu,
                    Nt = R.strings.gui_lootboxes.openBoxScreen,
                    St = (0, L.Pi)(() => {
                        var e;
                        const u = Ze(),
                            t = u.model,
                            n = u.controls,
                            r = (0, E.GS)().mediaSize,
                            o = t.root.get(),
                            i = o.currentLootboxID,
                            c = o.currentState,
                            d = o.isAnimationEnabled,
                            m = o.isBuyAvailable,
                            _ = o.returnPlace,
                            A = o.isShowInfoButton,
                            F = t.computes.getLootboxKeys(),
                            D = t.computes.getCurrentLootbox(),
                            B = t.computes.getLootboxes(),
                            C = c !== Ft.StorageViewing,
                            p = !(null != D && D.isOpenEnabled),
                            g = null != (e = null == D ? void 0 : D.bonusGroups) ? e : [],
                            b = (0, a.useState)(),
                            h = b[0],
                            f = b[1],
                            x = (0, a.useState)(0),
                            T = x[0],
                            S = x[1],
                            k = (0, a.useState)(i),
                            L = k[0],
                            M = k[1],
                            P = (0, a.useState)(d),
                            H = P[0],
                            G = P[1],
                            W = (0, a.useState)(!1),
                            U = W[0],
                            z = W[1],
                            j = (0, a.useState)(Ft.Opening),
                            $ = j[0],
                            K = j[1],
                            V = (0, a.useMemo)(() => {
                                if (D)
                                    return r >= E.cJ.Large
                                        ? {
                                              backgroundImage: `url('R.images.gui_lootboxes.gui.maps.storage.eventBanner.${D.category}_1920')`,
                                          }
                                        : r >= E.cJ.Medium
                                          ? {
                                                backgroundImage: `url('R.images.gui_lootboxes.gui.maps.storage.eventBanner.${D.category}_1600')`,
                                            }
                                          : {
                                                backgroundImage: `url('R.images.gui_lootboxes.gui.maps.storage.eventBanner.${D.category}')`,
                                            };
                            }, [D, r]);
                        var Y;
                        (Y = n.close),
                            O(N.n.ESCAPE, Y),
                            (0, a.useEffect)(() => {
                                c !== Ft.StorageViewing || (h && h !== vt && i !== T) || (f(pt), S(0), z(!1));
                            }, [i, c, h, T]),
                            (0, a.useEffect)(() => {
                                c === Ft.Opening && (K(c), f(Dt)), c === Ft.LoseOpening && (K(c), f(Dt));
                            }, [c]),
                            (0, a.useEffect)(
                                () =>
                                    (c !== Ft.Opening && c !== Ft.LoseOpening) || (H && f(Dt), H)
                                        ? c === Ft.Rewarding || c === Ft.UniqueRewarding
                                            ? y(() => {
                                                  f(vt);
                                              }, 350)
                                            : void 0
                                        : (z(!0),
                                          y(() => {
                                              n.openningFinished();
                                          }, 350)),
                                [n, c, H],
                            ),
                            (0, a.useEffect)(() => {
                                c === Ft.StorageViewing && D && H && (0, v.G)(Pe),
                                    (c === Ft.Opening || c === Ft.LoseOpening) && D && H && (0, v.G)(He[D.tier]);
                            }, [D, c, H]),
                            (0, a.useEffect)(() => {
                                h === bt && f(gt), h === Bt && f(Dt);
                            }, [h, f]),
                            (0, a.useEffect)(() => {
                                M((null == D ? void 0 : D.boxID) || 0), (null != D && D.videoRes) || G(!1);
                            }, [D]);
                        const q = (0, a.useCallback)(
                                (e, u) => {
                                    void 0 !== u
                                        ? n.openLootBoxes({ lootBoxID: i, count: e, keyID: u })
                                        : n.openLootBoxes({ lootBoxID: i, count: e });
                                },
                                [n, i],
                            ),
                            Z = (0, a.useCallback)(() => {
                                n.buyBox();
                            }, [n]),
                            Q = (0, a.useCallback)(
                                (e) => {
                                    e &&
                                        (e === pt && f(gt),
                                        e === gt && f(c === Ft.Opening || c === Ft.LoseOpening ? Bt : bt),
                                        e === Dt && n.openningFinished(),
                                        e === Ct && i !== T && (n.lootboxSelected({ lootBoxID: T }), M(T)));
                                },
                                [n, i, c, T],
                            ),
                            J = (0, a.useCallback)(
                                (e) => {
                                    e !== i && (H ? f(Ct) : (n.lootboxSelected({ lootBoxID: e }), M(e)), S(e));
                                },
                                [i, H, n],
                            ),
                            ee = (0, a.useCallback)(
                                (e) => {
                                    n.onError(e), G(!1);
                                },
                                [n, G],
                            );
                        return s().createElement(
                            'div',
                            { className: 'App_base_10' },
                            s().createElement('div', { className: 'App_bg_10' }),
                            s().createElement(
                                'div',
                                { className: 'App_close_4b' },
                                s().createElement(w, {
                                    caption: Tt.viewHeader.backBtn.label(),
                                    type: 'back',
                                    side: 'left',
                                    goto: Nt.backBtn.$num(_),
                                    onClick: n.close,
                                }),
                            ),
                            D
                                ? s().createElement(
                                      s().Fragment,
                                      null,
                                      s().createElement('div', { className: 'App_vignette_b8' }),
                                      s().createElement(
                                          'div',
                                          { className: 'App_descriptionWrapper_c6' },
                                          s().createElement(X, {
                                              userName: D.userName,
                                              tier: D.tier,
                                              count: D.count,
                                              descriptionKey: D.descriptionKey,
                                              autoOpenTime: D.autoOpenTime,
                                              isInfinite: D.isInfinite,
                                          }),
                                      ),
                                      D.category &&
                                          s().createElement('div', { className: 'App_eventImage_77', style: V }),
                                      s().createElement(
                                          'div',
                                          { className: 'App_possibleRewardsWrapper_6e' },
                                          s().createElement(eu, { bonusGroups: g, lootBoxID: i }),
                                      ),
                                      s().createElement(
                                          'div',
                                          { className: 'App_guaranteedReward_b0' },
                                          s().createElement(dt, {
                                              boxesCount: D.guaranteedReward.boxesUntilGuaranteedReward,
                                              levelsRange: D.guaranteedReward.levelsRange,
                                              lootBoxID: i,
                                          }),
                                      ),
                                      s().createElement(
                                          'div',
                                          { className: 'App_openButtonsWrapper_fc' },
                                          s().createElement(ke, {
                                              onOpenBox: q,
                                              onBuyBox: n.buyBox,
                                              count: D.count,
                                              disabled: p,
                                              isOpenBoxDisabled: c !== Ft.StorageViewing || p,
                                              allKeys: F,
                                              currentLootboxKeysIDs: D.unlockKeyIDs,
                                              isBuyAvailable: m,
                                          }),
                                      ),
                                      A &&
                                          s().createElement(
                                              'div',
                                              { className: 'App_info_5d' },
                                              s().createElement(w, {
                                                  caption: R.strings.gui_lootboxes.lootboxesWithKeys.about(),
                                                  type: 'info',
                                                  side: 'left',
                                                  onClick: n.showLootBoxInfoPage,
                                              }),
                                          ),
                                      H && null != D && D.videoRes
                                          ? s().createElement(
                                                'div',
                                                { className: 'App_videoWrapper_22' },
                                                s().createElement(xt, {
                                                    key: i,
                                                    currentVideoState: h,
                                                    currentLootbox: D,
                                                    onPause: Q,
                                                    onError: ee,
                                                    currentOpenState: $,
                                                }),
                                            )
                                          : s().createElement(
                                                'div',
                                                { className: 'App_imagesWrapper_af' },
                                                B.map(({ iconName: e, boxID: u }) =>
                                                    s().createElement(
                                                        s().Fragment,
                                                        { key: u },
                                                        s().createElement('div', {
                                                            className: l()(wt, L === u && yt),
                                                            style: {
                                                                backgroundImage: `url('R.images.gui_lootboxes.gui.maps.storage.boxes.${e}')`,
                                                            },
                                                        }),
                                                        s().createElement('div', {
                                                            className: l()(wt, L === u && U && yt),
                                                            style: {
                                                                backgroundImage: `url('R.images.gui_lootboxes.gui.maps.storage.boxes.${e}_open')`,
                                                            },
                                                        }),
                                                    ),
                                                ),
                                            ),
                                      B.length > 0 &&
                                          s().createElement(
                                              'div',
                                              { className: 'App_carousel_53' },
                                              s().createElement($u, { onChange: J, disabled: C }),
                                          ),
                                      s().createElement(I.E, {
                                          mixClass: 'App_animationControl_ba',
                                          isActiveAnimation: H,
                                          onClick: () => {
                                              G(!H), n.changeAnimationEnabledSetting({ enabled: !H });
                                          },
                                          disabled: c !== Ft.StorageViewing && !(null != D && D.videoRes),
                                      }),
                                  )
                                : s().createElement(mt, {
                                      isShopAvailable: m,
                                      handleToHangar: n.close,
                                      handleToShop: Z,
                                  }),
                            m &&
                                s().createElement(
                                    'div',
                                    { className: 'App_buyButtonWrapper_6b' },
                                    s().createElement(tu, { buyBox: Z }),
                                ),
                            s().createElement(
                                'div',
                                { className: 'App_currencyWrapper_bb' },
                                s().createElement(qu, null),
                            ),
                        );
                    }),
                    Rt = {
                        getter:
                            ((kt = {
                                lootboxes: [
                                    {
                                        videoRes: 'video://videos/event_loot_boxes/referral/standart.webm',
                                        descriptionKey: 'event_premium',
                                        userName: 'event_premium',
                                        iconName: 'event_premium',
                                        isOpenEnabled: !0,
                                        tier: 4,
                                        count: 8,
                                        boxType: 'event_premium',
                                        boxID: 230315,
                                    },
                                    {
                                        videoRes: 'event_loot_boxes/bd2023/standart',
                                        descriptionKey: 'tanks_birthday_2023_VI',
                                        userName: 'tanks_birthday_2023_VI',
                                        iconName: 'tanks_birthday_2023_VI',
                                        isOpenEnabled: !0,
                                        tier: 1,
                                        count: 66,
                                        boxType: 'tanks_birthday_2023_VI',
                                        boxID: 310004,
                                    },
                                    {
                                        videoRes: 'event_loot_boxes/bd2023/standart',
                                        descriptionKey: 'tanks_birthday_2023_IX',
                                        userName: 'tanks_birthday_2023_IX',
                                        iconName: 'tanks_birthday_2023_IX',
                                        isOpenEnabled: !0,
                                        tier: 1,
                                        count: 55,
                                        boxType: 'tanks_birthday_2023_IX',
                                        boxID: 310003,
                                    },
                                    {
                                        videoRes: 'event_loot_boxes/bd2023/bronze',
                                        descriptionKey: 'tanks_birthday_2023_X',
                                        userName: 'tanks_birthday_2023_X',
                                        iconName: 'tanks_birthday_2023_X',
                                        isOpenEnabled: !0,
                                        tier: 2,
                                        count: 44,
                                        boxType: 'tanks_birthday_2023_X',
                                        boxID: 310002,
                                    },
                                    {
                                        videoRes: 'event_loot_boxes/bd2023/silver',
                                        descriptionKey: 'tanks_birthday_2023_premium',
                                        userName: 'tanks_birthday_2023_premium',
                                        iconName: 'tanks_birthday_2023_premium',
                                        isOpenEnabled: !0,
                                        tier: 3,
                                        count: 33,
                                        boxType: 'tanks_birthday_2023_premium',
                                        boxID: 310001,
                                    },
                                    {
                                        videoRes: 'video://videos/event_loot_boxes/bd2023/silver.webm',
                                        descriptionKey: 'event_premium',
                                        userName: 'event_premium',
                                        iconName: 'event_premium',
                                        isOpenEnabled: !1,
                                        tier: 3,
                                        count: 19,
                                        boxType: 'event_premium',
                                        boxID: 230316,
                                    },
                                    {
                                        videoRes: 'video://videos/event_loot_boxes/bd2023/bronze.webm',
                                        descriptionKey: 'event_premium',
                                        userName: 'event_premium',
                                        iconName: 'event_premium',
                                        isOpenEnabled: !0,
                                        tier: 2,
                                        count: 9,
                                        boxType: 'event_premium',
                                        boxID: 230317,
                                    },
                                    {
                                        videoRes: 'video://videos/event_loot_boxes/bd2023/gold.webm',
                                        descriptionKey: 'event_premium',
                                        userName: 'event_premium',
                                        iconName: 'event_premium',
                                        isOpenEnabled: !1,
                                        tier: 1,
                                        count: 5,
                                        boxType: 'event_premium',
                                        boxID: 230318,
                                    },
                                    {
                                        videoRes: 'video://videos/event_loot_boxes/bd2023/standart.webm',
                                        descriptionKey: 'event_premium',
                                        userName: 'event_premium',
                                        iconName: 'event_premium',
                                        isOpenEnabled: !0,
                                        tier: 4,
                                        count: 200,
                                        boxType: 'event_premium',
                                        boxID: 230319,
                                    },
                                    {
                                        videoRes: 'video://videos/event_loot_boxes/referral/gold.webm',
                                        descriptionKey: 'event_premium',
                                        userName: 'event_premium',
                                        iconName: 'event_premium',
                                        isOpenEnabled: !0,
                                        tier: 4,
                                        count: 1234,
                                        boxType: 'event_premium',
                                        boxID: 230314,
                                    },
                                    {
                                        videoRes: 'video://videos/event_loot_boxes/lootbox_prem.webm',
                                        descriptionKey: 'event_premium',
                                        userName: 'event_premium',
                                        iconName: 'event_premium',
                                        isOpenEnabled: !0,
                                        tier: 1,
                                        count: 1,
                                        boxType: 'event_premium',
                                        boxID: 230313,
                                    },
                                ],
                                groupRewards: [],
                                currentState: Ft.StorageViewing,
                                currentLootboxID: 230315,
                                isAnimationEnabled: !0,
                                isBuyAvailable: !0,
                            }),
                            (e) => (e ? e.split('.').reduce((e, u) => e[u], kt) : kt)),
                        controls: ({ model: e }) =>
                            (function (e) {
                                const u = {};
                                for (const t in e)
                                    if (Object.prototype.hasOwnProperty.call(e, t)) {
                                        const n = e[t];
                                        u[t] = (0, ze.aD)(n);
                                    }
                                return u;
                            })({
                                openLootBoxes: (e) => {
                                    console.log('Call openLootBoxes() with', JSON.stringify(e));
                                },
                                close: () => {
                                    console.log('Call close()');
                                },
                                buyBox: () => {
                                    console.log('Call buyBox()');
                                },
                                openningFinished: () => {
                                    console.log('Call openningFinished()');
                                },
                                lootboxSelected: (u) => {
                                    console.log('Call lootboxSelected() with', JSON.stringify(u)),
                                        e.root.set(Object.assign({}, e.root.get(), { currentLootboxID: u.lootBoxID }));
                                },
                            }),
                    };
                var kt;
                engine.whenReady.then(() => {
                    b().render(
                        s().createElement(
                            Xe,
                            { mocks: Rt, mode: 'real' },
                            s().createElement(p, null, s().createElement(St, null)),
                        ),
                        document.getElementById('root'),
                    );
                });
            },
            4999: (e, u, t) => {
                'use strict';
                t.d(u, { E: () => l });
                var n = t(6483),
                    r = t.n(n),
                    o = t(7727),
                    a = t(6179),
                    s = t.n(a);
                const i = 'AnimationControls_flexColumnCenter_62',
                    l = ({
                        mixClass: e,
                        isActiveAnimation: u,
                        onClick: t,
                        soundHover: n = R.sounds.highlight(),
                        soundClick: a = R.sounds.play(),
                        disabled: l = !1,
                    }) => {
                        const c = r()(
                            'AnimationControls_base_71',
                            i,
                            e,
                            !u && 'AnimationControls_base__disabledAnimadion_89',
                            l && 'AnimationControls_base__disabled_ec',
                        );
                        return s().createElement(
                            'div',
                            {
                                className: c,
                                onClick: () => {
                                    l || ((0, o.G)(a), t());
                                },
                                onMouseEnter: () => {
                                    l || (0, o.G)(n);
                                },
                            },
                            s().createElement(
                                'div',
                                { className: i },
                                s().createElement('div', { className: 'AnimationControls_icon_05' }),
                                s().createElement(
                                    'div',
                                    { className: 'AnimationControls_text_20' },
                                    u
                                        ? R.strings.gui_lootboxes.shared.animationControlsOffText()
                                        : R.strings.gui_lootboxes.shared.animationControlsText(),
                                ),
                            ),
                        );
                    };
            },
            7635: (e, u, t) => {
                'use strict';
                t.d(u, { N: () => i });
                var n = t(6483),
                    r = t.n(n),
                    o = t(6179),
                    a = t.n(o);
                const s = 'BacklitTransparentButton_corners_4b',
                    i = ({ title: e, onClick: u }) =>
                        a().createElement(
                            'div',
                            { className: 'BacklitTransparentButton_base_ec', onClick: u },
                            a().createElement('div', { className: 'BacklitTransparentButton_background_13' }),
                            a().createElement(
                                'div',
                                { className: 'BacklitTransparentButton_content_f5' },
                                a().createElement('div', { className: 'BacklitTransparentButton_icon_e6' }),
                                a().createElement('div', { className: 'BacklitTransparentButton_title_29' }, e),
                            ),
                            a().createElement(
                                'div',
                                { className: 'BacklitTransparentButton_cornersHolder_67' },
                                a().createElement('div', { className: s }),
                                a().createElement('div', {
                                    className: r()(s, 'BacklitTransparentButton_corners__right_96'),
                                }),
                            ),
                        );
            },
            7568: (e, u, t) => {
                'use strict';
                t.d(u, { At: () => i });
                var n = t(6179),
                    r = t.n(n);
                const o = [
                    'width',
                    'height',
                    'getSrcByFrame',
                    'frameCount',
                    'onAnimate',
                    'frameTime',
                    'initialFrameIndex',
                    'loop',
                    'state',
                    'onAnimationComplete',
                ];
                function a() {
                    return (
                        (a =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        a.apply(this, arguments)
                    );
                }
                const s = () => {},
                    i = (0, n.memo)((e) => {
                        let u = e.width,
                            t = e.height,
                            i = e.getSrcByFrame,
                            l = e.frameCount,
                            c = e.onAnimate,
                            d = void 0 === c ? s : c,
                            E = e.frameTime,
                            m = void 0 === E ? 33 : E,
                            _ = e.initialFrameIndex,
                            A = void 0 === _ ? 0 : _,
                            F = e.loop,
                            D = void 0 === F || F,
                            B = e.state,
                            C = void 0 === B ? 'play' : B,
                            p = e.onAnimationComplete,
                            g = void 0 === p ? s : p,
                            b = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, o);
                        const v = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const e = v.current;
                                if (!e) return;
                                const n = l - 1,
                                    r = e.getContext('2d'),
                                    o = (n) => {
                                        r.clearRect(0, 0, e.width, e.height), r.drawImage(n, 0, 0, u, t);
                                    };
                                if ('stop' === C) {
                                    const e = i(0),
                                        u = new Image();
                                    u.src = e;
                                    const t = () => o(u);
                                    return u.addEventListener('load', t), () => u.removeEventListener('load', t);
                                }
                                const a = ((e, u) => {
                                        const t = [];
                                        for (let n = 0; n < e; n++) {
                                            const e = new Image();
                                            (e.src = u(n)), t.push(e);
                                        }
                                        return t;
                                    })(l, i),
                                    s = ((e, u = 0) => {
                                        let t = u;
                                        return () => {
                                            const u = t;
                                            return (t += 1), t > e && (t = 0), u;
                                        };
                                    })(n, A),
                                    c = setInterval(() => {
                                        const e = s(),
                                            u = a[e];
                                        o(a[e]), d(e, u), e === n && (g(), D || clearInterval(c));
                                    }, m);
                                return () => clearInterval(c);
                            }, [l, m, i, t, A, D, d, g, C, u]),
                            r().createElement('canvas', a({}, b, { width: u, height: t, ref: v }))
                        );
                    });
            },
            6620: (e, u, t) => {
                'use strict';
                t.d(u, { s: () => T });
                var n = t(6179),
                    r = t.n(n);
                let o, a, s, i, l, c, d;
                var E, m, _, A;
                !(function (e) {
                    (e.Items = 'items'),
                        (e.Equipment = 'equipment'),
                        (e.Xp = 'xp'),
                        (e.XpFactor = 'xpFactor'),
                        (e.Blueprints = 'blueprints'),
                        (e.BlueprintsAny = 'blueprintsAny'),
                        (e.Goodies = 'goodies'),
                        (e.Berths = 'berths'),
                        (e.Slots = 'slots'),
                        (e.Tokens = 'tokens'),
                        (e.CrewSkins = 'crewSkins'),
                        (e.CrewBooks = 'crewBooks'),
                        (e.Customizations = 'customizations'),
                        (e.CreditsFactor = 'creditsFactor'),
                        (e.Currency = 'currency'),
                        (e.TankmenXp = 'tankmenXP'),
                        (e.TankmenXpFactor = 'tankmenXPFactor'),
                        (e.FreeXpFactor = 'freeXPFactor'),
                        (e.BattleToken = 'battleToken'),
                        (e.PremiumUniversal = 'premium_universal'),
                        (e.Gold = 'gold'),
                        (e.Credits = 'credits'),
                        (e.Crystal = 'crystal'),
                        (e.FreeXp = 'freeXP'),
                        (e.Premium = 'premium'),
                        (e.PremiumPlus = 'premium_plus'),
                        (e.BattlePassPoints = 'battlePassPoints'),
                        (e.BattlePassSelectToken = 'battlePassSelectToken'),
                        (e.StyleProgressToken = 'styleProgressToken'),
                        (e.TmanToken = 'tmanToken'),
                        (e.NaturalCover = 'naturalCover'),
                        (e.BpCoin = 'bpcoin'),
                        (e.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (e.BattleBadge = 'dossier_badge'),
                        (e.NewYearAlbumsAccess = 'newYearAlbumsAccess'),
                        (e.NewYearFillers = 'ny22Fillers'),
                        (e.NewYearInvoice = 'newYearInvoice'),
                        (e.NewYearToyFragments = 'ny22ToyFragments'),
                        (e.NewYearSlot = 'newYearSlot'),
                        (e.BonusX5 = 'battle_bonus_x5'),
                        (e.CrewBonusX3 = 'crew_bonus_x3'),
                        (e.Vehicles = 'vehicles'),
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.CollectionItem = 'collectionItem'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.Comp7TokenCouponReward = 'comp7TokenCouponReward'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.CosmicLootboxSilver = 'lootBoxToken'),
                        (e.CosmicLootboxCommon = 'cosmic_2024_2');
                })(o || (o = {})),
                    (function (e) {
                        (e.Gold = 'gold'),
                            (e.Credits = 'credits'),
                            (e.Crystal = 'crystal'),
                            (e.Premium = 'premium'),
                            (e.PremiumPlus = 'premium_plus'),
                            (e.Vehicles = 'vehicles'),
                            (e.Customizations = 'customizations'),
                            (e.Blueprints = 'blueprints'),
                            (e.BlueprintsAny = 'blueprintsAny'),
                            (e.BlueprintsFinal = 'finalBlueprints'),
                            (e.Goodies = 'goodies'),
                            (e.CrewSkins = 'crewSkins'),
                            (e.Xp = 'xp'),
                            (e.XpFactor = 'xpFactor'),
                            (e.FreeXp = 'freeXP'),
                            (e.FreeXPFactor = 'freeXPFactor'),
                            (e.TankmenXP = 'tankmenXP'),
                            (e.TankmenXPFactor = 'tankmenXPFactor'),
                            (e.DailyXPFactor = 'dailyXPFactor'),
                            (e.CreditsFactor = 'creditsFactor'),
                            (e.Items = 'items'),
                            (e.StrBonus = 'strBonus'),
                            (e.Groups = 'groups'),
                            (e.Berths = 'berths'),
                            (e.Slots = 'slots'),
                            (e.Meta = 'meta'),
                            (e.Tokens = 'tokens'),
                            (e.Dossier = 'dossier'),
                            (e.OneOf = 'oneof'),
                            (e.PremiumUniversal = 'premium_universal'),
                            (e.BadgesGroup = 'badgesGroup'),
                            (e.Entitlements = 'entitlements'),
                            (e.RankedDailyBattles = 'rankedDailyBattles'),
                            (e.RankedBonusBattles = 'rankedBonusBattles'),
                            (e.BattlePassPoints = 'battlePassPoints'),
                            (e.BattleBadge = 'dossier_badge'),
                            (e.BattleAchievement = 'dossier_achievement');
                    })(a || (a = {})),
                    ((A = s || (s = {})).Big = 'big'),
                    (A.Small = 'small'),
                    (A.Mini = 'mini'),
                    (A.S600x450 = 's600x450'),
                    (A.S400x300 = 's400x300'),
                    (A.S296x222 = 's296x222'),
                    (A.S232x174 = 's232x174'),
                    (A.S180x135 = 's180x135'),
                    (A.S128x100 = 's128x100'),
                    (A.S80x80 = 's80x80'),
                    (A.S48x48 = 's48x48'),
                    ((_ = i || (i = {})).MULTI = 'multi'),
                    (_.CURRENCY = 'currency'),
                    (_.PREMIUM_PLUS = 'premium_plus'),
                    (_.NUMBER = 'number'),
                    (_.STRING = 'string'),
                    ((m = l || (l = {})).BATTLE_BOOSTER = 'battleBooster'),
                    (m.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                    (m.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                    (m.EQUIPMENT_PLUS = 'equipmentPlus'),
                    (m.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                    (m.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                    (m.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                    (m.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                    (m.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                    (m.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                    (m.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                    (m.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                    (m.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                    ((c || (c = {})).BATTLE_BOOSTER = 'battleBooster'),
                    ((E = d || (d = {})).BATTLE_BOOSTER = 'battleBooster'),
                    (E.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                    (E.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                    (E.EQUIPMENT_PLUS = 'equipmentPlus'),
                    (E.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                    (E.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                    (E.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                    (E.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                    (E.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                    (E.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                    (E.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                    (E.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                    (E.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                var F = t(4179);
                class D extends r().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? F.B3.GOLD : F.B3.INTEGRAL;
                        const u = F.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                let B, C, p, g, b, v, h, f;
                var x, w, y;
                (D.defaultProps = { format: 'integral' }),
                    o.Items,
                    o.Equipment,
                    o.Xp,
                    o.XpFactor,
                    o.Blueprints,
                    o.BlueprintsAny,
                    o.Goodies,
                    o.Berths,
                    o.Slots,
                    o.Tokens,
                    o.CrewSkins,
                    o.CrewBooks,
                    o.Customizations,
                    o.CreditsFactor,
                    o.TankmenXp,
                    o.TankmenXpFactor,
                    o.FreeXpFactor,
                    o.BattleToken,
                    o.PremiumUniversal,
                    o.NaturalCover,
                    o.BpCoin,
                    o.BattlePassSelectToken,
                    o.BattlaPassFinalAchievement,
                    o.BattleBadge,
                    o.BonusX5,
                    o.CrewBonusX3,
                    o.NewYearFillers,
                    o.NewYearInvoice,
                    o.EpicSelectToken,
                    o.Comp7TokenWeeklyReward,
                    o.Comp7TokenCouponReward,
                    o.BattleBoosterGift,
                    o.CosmicLootboxCommon,
                    o.CosmicLootboxSilver,
                    o.Gold,
                    o.Credits,
                    o.Crystal,
                    o.FreeXp,
                    o.BattlePassPoints,
                    o.PremiumPlus,
                    o.Premium,
                    ((y = B || (B = {})).Active = 'active'),
                    (y.Paused = 'paused'),
                    (y.Completed = 'completed'),
                    (y.NotStarted = 'notStarted'),
                    (y.Disabled = 'disabled'),
                    (function (e) {
                        (e.Default = 'default'), (e.Marathon = 'marathon'), (e.Resource = 'resource');
                    })(C || (C = {})),
                    (function (e) {
                        (e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium');
                    })(p || (p = {})),
                    (function (e) {
                        (e.ACTIVE = 'active'), (e.COMPLETED = 'completed'), (e.NOT_CHOSEN = 'notChosen');
                    })(g || (g = {})),
                    ((w = b || (b = {})).AwaitSeason = 'awaitSeason'),
                    (w.Bought = 'bought'),
                    (w.Free = 'free'),
                    (w.Completed = 'completed'),
                    (w.CompletedRightNow = 'completedRightNow'),
                    (w.SwitchedChapterRightNow = 'switchedChapterRightNow'),
                    (w.NoVehiclesBase = 'noVehiclesBase'),
                    (w.ChapterNotChosen = 'chapterNotChosen'),
                    (function (e) {
                        (e.None = ''),
                            (e.ShowLevel = 'show'),
                            (e.HideLevel = 'hide'),
                            (e.HideLevelWithDelay = 'hideWithDelay');
                    })(v || (v = {})),
                    ((x = h || (h = {})).style = 'style'),
                    (x.tankman = 'tankman'),
                    (function (e) {
                        (e.Default = 'default'), (e.Marathon = 'marathon'), (e.Resource = 'resource');
                    })(f || (f = {})),
                    h.style,
                    h.tankman;
                const T = ({ icon: e, count: u }) =>
                    r().createElement(
                        'div',
                        { className: 'CurrencyKey_base_53' },
                        r().createElement('div', {
                            className: 'CurrencyKey_icon_85',
                            style: { backgroundImage: `url(${e})` },
                        }),
                        r().createElement(
                            'div',
                            { className: 'CurrencyKey_value_29' },
                            ((e = 0) => e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '))(u),
                        ),
                    );
            },
            2557: (e, u, t) => {
                'use strict';
                t.d(u, { nk: () => c, nn: () => l });
                var n = t(7515),
                    r = t(5415),
                    o = t(6179),
                    a = t.n(o);
                const s = ['src', 'className', 'autoplay', 'loop', 'setPlayer', 'onClick', 'videoWidth', 'videoHeight'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = () => {
                        const e = (0, o.useRef)(),
                            u = (0, o.useCallback)((u) => (e.current = u), []);
                        return (
                            (0, o.useEffect)(
                                () => () => {
                                    var u;
                                    null == (u = e.current) || u.cleanup();
                                },
                                [],
                            ),
                            [e, u]
                        );
                    },
                    c = a().memo(function (e) {
                        let u = e.src,
                            t = e.className,
                            l = e.autoplay,
                            c = e.loop,
                            d = void 0 !== c && c,
                            E = e.setPlayer,
                            m = e.onClick,
                            _ = e.videoWidth,
                            A = e.videoHeight,
                            F = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, s);
                        const D = (0, o.useRef)(null),
                            B = (0, r.GS)(),
                            C = B.remScreenWidth,
                            p = B.remScreenHeight,
                            g = (0, o.useMemo)(() => {
                                const e = ((e, u, t, n) => {
                                    const r = e / u;
                                    return t / n > r
                                        ? { width: t, height: Math.round(t / r) }
                                        : { width: Math.round(n * r), height: n };
                                })(_, A, C, p);
                                return e ? { width: `${e.width}rem`, height: `${e.height}rem` } : {};
                            }, [p, C, A, _]);
                        return (
                            (0, o.useEffect)(() => {
                                if (E && D.current) {
                                    const e = () => {
                                            let e = 0;
                                            const t = (function (t) {
                                                    let n = 0;
                                                    return [
                                                        function t() {
                                                            (() => {
                                                                if (D.current) {
                                                                    const t = D.current,
                                                                        n = t.currentTime,
                                                                        r = t.duration;
                                                                    e !== n &&
                                                                        (u.changeTimeHandlers.forEach((e) =>
                                                                            e({ currentTime: n, duration: r }),
                                                                        ),
                                                                        (e = n));
                                                                }
                                                            })(),
                                                                (n = requestAnimationFrame(t));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(n);
                                                        },
                                                    ];
                                                })(),
                                                n = t[0],
                                                r = t[1];
                                            return n(), r;
                                        },
                                        u = { changeTimeHandlers: [], changeTimeLoop: e() },
                                        t = (e) => (
                                            u.changeTimeHandlers.push(e),
                                            () => {
                                                const t = u.changeTimeHandlers,
                                                    n = t.indexOf(e);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : t.splice(n, 1);
                                            }
                                        ),
                                        r = (e) => {
                                            D.current && (D.current.currentTime = (0, n.u)(0, D.current.duration, e));
                                        },
                                        o = () => {
                                            var e;
                                            return null == (e = D.current) ? void 0 : e.pause();
                                        },
                                        a = () => {
                                            o(), r(0);
                                        },
                                        s = () => {
                                            (u.changeTimeHandlers = []), null == u.changeTimeLoop || u.changeTimeLoop();
                                        };
                                    return (
                                        E({
                                            on: (e, u) => {
                                                var t;
                                                return (
                                                    null == (t = D.current) || t.addEventListener(e, u),
                                                    () => {
                                                        var t;
                                                        return null == (t = D.current)
                                                            ? void 0
                                                            : t.removeEventListener(e, u);
                                                    }
                                                );
                                            },
                                            off: (e, u) => {
                                                var t;
                                                return (
                                                    null == (t = D.current) || t.removeEventListener(e, u),
                                                    () => {
                                                        var t;
                                                        return null == (t = D.current)
                                                            ? void 0
                                                            : t.removeEventListener(e, u);
                                                    }
                                                );
                                            },
                                            play: () => {
                                                var e;
                                                return null == (e = D.current) ? void 0 : e.play();
                                            },
                                            pause: o,
                                            stop: a,
                                            cleanup: s,
                                            getCurrentTime: () => {
                                                var e;
                                                return null == (e = D.current) ? void 0 : e.currentTime;
                                            },
                                            getDuration: () => {
                                                var e;
                                                return null == (e = D.current) ? void 0 : e.duration;
                                            },
                                            setCurrentTime: r,
                                            domRef: D.current,
                                            onChangeTime: t,
                                        }),
                                        () => {
                                            s(), E(void 0);
                                        }
                                    );
                                }
                            }, [E]),
                            (0, o.useEffect)(() => {
                                if (D.current)
                                    return (
                                        l && D.current.play(),
                                        () => {
                                            D.current && D.current.pause();
                                        }
                                    );
                            }, []),
                            a().createElement(
                                'video',
                                i({ src: u, className: t, loop: d, ref: D, onClick: m, style: g }, F, {
                                    onError: F.onError,
                                }),
                            )
                        );
                    });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, n] = deferred[i], o = !0, a = 0; a < u.length; a++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[a]))
                            ? u.splice(a--, 1)
                            : ((o = !1), n < r && (r = n));
                    if (o) {
                        deferred.splice(i--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, n];
        }),
        (__webpack_require__.n = (e) => {
            var u = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(u, { a: u }), u;
        }),
        (__webpack_require__.d = (e, u) => {
            for (var t in u)
                __webpack_require__.o(u, t) &&
                    !__webpack_require__.o(e, t) &&
                    Object.defineProperty(e, t, { enumerable: !0, get: u[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (e, u) => Object.prototype.hasOwnProperty.call(e, u)),
        (__webpack_require__.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 334),
        (() => {
            var e = { 334: 0, 989: 0, 578: 0, 802: 0, 251: 0, 897: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [o, a, s] = t,
                        i = 0;
                    if (o.some((u) => 0 !== e[u])) {
                        for (n in a) __webpack_require__.o(a, n) && (__webpack_require__.m[n] = a[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); i < o.length; i++)
                        (r = o[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(831));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
