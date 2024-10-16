(() => {
    var __webpack_modules__ = {
            3457: (u, e, t) => {
                'use strict';
                t.d(e, { u5: () => E });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7727),
                    s = t(6179),
                    o = t.n(s),
                    i = t(6880),
                    l = t(2106);
                const c = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: n,
                    disabled: c,
                    mixClass: E,
                    soundHover: d,
                    soundClick: A,
                    onMouseEnter: F,
                    onMouseMove: m,
                    onMouseDown: D,
                    onMouseUp: _,
                    onMouseLeave: B,
                    onClick: C,
                }) => {
                    const g = (0, s.useRef)(null),
                        p = (0, s.useState)(t),
                        h = p[0],
                        f = p[1],
                        v = (0, s.useState)(!1),
                        b = v[0],
                        w = v[1];
                    return (
                        (0, s.useEffect)(() => {
                            function u(u) {
                                h && null !== g.current && !g.current.contains(u.target) && f(!1);
                            }
                            return (
                                document.addEventListener('mousedown', u),
                                () => {
                                    document.removeEventListener('mousedown', u);
                                }
                            );
                        }, [h]),
                        (0, s.useEffect)(() => {
                            f(t);
                        }, [t]),
                        o().createElement(
                            'div',
                            {
                                ref: g,
                                className: r()(
                                    i.Z.base,
                                    i.Z[`base__${n}`],
                                    c && i.Z.base__disabled,
                                    e && i.Z[`base__${e}`],
                                    h && i.Z.base__focus,
                                    b && i.Z.base__highlightActive,
                                    E,
                                ),
                                onMouseEnter: function (u) {
                                    c || (null !== d && (0, a.G)(d), F && F(u));
                                },
                                onMouseMove: function (u) {
                                    m && m(u);
                                },
                                onMouseUp: function (u) {
                                    c || (_ && _(u), w(!1));
                                },
                                onMouseDown: function (u) {
                                    c ||
                                        (null !== A && (0, a.G)(A),
                                        D && D(u),
                                        t && (c || (g.current && (g.current.focus(), f(!0)))),
                                        w(!0));
                                },
                                onMouseLeave: function (u) {
                                    c || (B && B(u), w(!1));
                                },
                                onClick: function (u) {
                                    c || (C && C(u));
                                },
                            },
                            n !== l.L.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: i.Z.back }),
                                    o().createElement('span', { className: i.Z.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: r()(i.Z.state, i.Z.state__default) },
                                o().createElement('span', { className: i.Z.stateDisabled }),
                                o().createElement('span', { className: i.Z.stateHighlightHover }),
                                o().createElement('span', { className: i.Z.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: i.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const E = c;
            },
            2106: (u, e, t) => {
                'use strict';
                let n, r;
                t.d(e, { L: () => n }),
                    (function (u) {
                        (u.main = 'main'),
                            (u.primary = 'primary'),
                            (u.primaryGreen = 'primaryGreen'),
                            (u.primaryRed = 'primaryRed'),
                            (u.secondary = 'secondary'),
                            (u.ghost = 'ghost');
                    })(n || (n = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium'), (u.large = 'large');
                    })(r || (r = {}));
            },
            3495: (u, e, t) => {
                'use strict';
                t.d(e, { Y: () => E });
                var n = t(3138),
                    r = t(6179),
                    a = t(1043),
                    s = t(5262);
                const o = n.O.client.getSize('rem'),
                    i = o.width,
                    l = o.height,
                    c = Object.assign({ width: i, height: l }, (0, s.T)(i, l, a.j)),
                    E = (0, r.createContext)(c);
            },
            1039: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => c });
                var n = t(3138),
                    r = t(6536),
                    a = t(6179),
                    s = t.n(a),
                    o = t(3495),
                    i = t(1043),
                    l = t(5262);
                const c = ({ children: u }) => {
                    const e = (0, a.useContext)(o.Y),
                        t = (0, a.useState)(e),
                        c = t[0],
                        E = t[1],
                        d = (0, a.useCallback)((u, e) => {
                            const t = n.O.view.pxToRem(u),
                                r = n.O.view.pxToRem(e);
                            E(Object.assign({ width: t, height: r }, (0, l.T)(t, r, i.j)));
                        }, []),
                        A = (0, a.useCallback)(() => {
                            const u = n.O.client.getSize('px');
                            d(u.width, u.height);
                        }, [d]);
                    (0, r.Z)(() => {
                        n.O.client.events.on('clientResized', d), n.O.client.events.on('self.onScaleUpdated', A);
                    }),
                        (0, a.useEffect)(
                            () => () => {
                                n.O.client.events.off('clientResized', d),
                                    n.O.client.events.off('self.onScaleUpdated', A);
                            },
                            [d, A],
                        );
                    const F = (0, a.useMemo)(() => Object.assign({}, c), [c]);
                    return s().createElement(o.Y.Provider, { value: F }, u);
                };
            },
            6010: (u, e, t) => {
                'use strict';
                var n = t(6179),
                    r = t(7382),
                    a = t(3495);
                const s = ['children'];
                const o = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t = {};
                            for (var n in u)
                                if ({}.hasOwnProperty.call(u, n)) {
                                    if (e.indexOf(n) >= 0) continue;
                                    t[n] = u[n];
                                }
                            return t;
                        })(u, s);
                    const o = (0, n.useContext)(a.Y),
                        i = o.extraLarge,
                        l = o.large,
                        c = o.medium,
                        E = o.small,
                        d = o.extraSmall,
                        A = o.extraLargeWidth,
                        F = o.largeWidth,
                        m = o.mediumWidth,
                        D = o.smallWidth,
                        _ = o.extraSmallWidth,
                        B = o.extraLargeHeight,
                        C = o.largeHeight,
                        g = o.mediumHeight,
                        p = o.smallHeight,
                        h = o.extraSmallHeight,
                        f = { extraLarge: B, large: C, medium: g, small: p, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return e;
                        if (t.large && l) return e;
                        if (t.medium && c) return e;
                        if (t.small && E) return e;
                        if (t.extraSmall && d) return e;
                    } else {
                        if (t.extraLargeWidth && A) return (0, r.H)(e, t, f);
                        if (t.largeWidth && F) return (0, r.H)(e, t, f);
                        if (t.mediumWidth && m) return (0, r.H)(e, t, f);
                        if (t.smallWidth && D) return (0, r.H)(e, t, f);
                        if (t.extraSmallWidth && _) return (0, r.H)(e, t, f);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && B) return e;
                            if (t.largeHeight && C) return e;
                            if (t.mediumHeight && g) return e;
                            if (t.smallHeight && p) return e;
                            if (t.extraSmallHeight && h) return e;
                        }
                    }
                    return null;
                };
                o.defaultProps = {
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
                (0, n.memo)(o);
            },
            7382: (u, e, t) => {
                'use strict';
                t.d(e, { H: () => n });
                const n = (u, e, t) =>
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
                t.d(e, { YN: () => r.Y, ZN: () => n.Z });
                t(6010);
                var n = t(1039),
                    r = t(3495);
            },
            1043: (u, e, t) => {
                'use strict';
                t.d(e, { j: () => n });
                const n = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (u, e, t) => {
                'use strict';
                var n;
                function r(u, e, t) {
                    const n = (function (u, e) {
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
                        r = (function (u, e) {
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
                        a = Math.min(n, r);
                    return {
                        extraLarge: a === t.extraLarge.weight,
                        large: a === t.large.weight,
                        medium: a === t.medium.weight,
                        small: a === t.small.weight,
                        extraSmall: a === t.extraSmall.weight,
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
                t.d(e, { T: () => r }),
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
                    })(n || (n = {}));
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
                    t.d(e, { mouse: () => c, off: () => i, on: () => o, onResize: () => a, onScaleUpdated: () => s });
                var n = t(2472),
                    r = t(1176);
                const a = (0, n.E)('clientResized'),
                    s = (0, n.E)('self.onScaleUpdated'),
                    o = (u, e) => engine.on(u, e),
                    i = (u, e) => engine.off(u, e),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && (0, r.R)(!1);
                    }
                    function t() {
                        u.enabled && (0, r.R)(!0);
                    }
                    function n() {
                        u.enabled
                            ? u.listeners < 1
                                ? ((u.initialized = !1),
                                  document.body.removeEventListener('mouseenter', e),
                                  document.body.removeEventListener('mouseleave', t))
                                : u.initialized ||
                                  ((u.initialized = !0),
                                  document.body.addEventListener('mouseenter', e),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, r.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${e}`,
                                        s = l[e]((u) => t([u, 'outside']));
                                    function o(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, o),
                                        n(),
                                        () => {
                                            r &&
                                                (s(),
                                                window.removeEventListener(a, o),
                                                (u.listeners -= 1),
                                                n(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(t)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
                        disable() {
                            (u.enabled = !1), n();
                        },
                        enable() {
                            (u.enabled = !0), n();
                        },
                        enableOutside() {
                            u.enabled && (0, r.R)(!0);
                        },
                        disableOutside() {
                            u.enabled && (0, r.R)(!1);
                        },
                    });
                })();
            },
            5959: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, {
                        events: () => n,
                        getMouseGlobalPosition: () => s,
                        getSize: () => a,
                        graphicsQuality: () => o,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var n = t(527),
                    r = t(2493);
                function a(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (u, e, t) => {
                'use strict';
                function n(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => n });
            },
            2493: (u, e, t) => {
                'use strict';
                function n(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function r(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                t.d(e, { E: () => r, G: () => n });
            },
            2472: (u, e, t) => {
                'use strict';
                function n(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => n });
            },
            3138: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => a });
                var n = t(5959),
                    r = t(514);
                const a = { view: t(7641), client: n, sound: r.ZP };
            },
            514: (u, e, t) => {
                'use strict';
                t.d(e, { ZP: () => o, hY: () => s });
                var n = t(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(r).reduce((u, e) => ((u[e] = () => (0, n.playSound)(r[e])), u), {}),
                    s = Object.assign({}, a, { sound: n.playSound }),
                    o = { play: s, setRTPC: n.setRTPC };
            },
            3722: (u, e, t) => {
                'use strict';
                function n(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function r(u, e, t) {
                    return `url(${n(u, e, t)})`;
                }
                t.r(e), t.d(e, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (u, e, t) => {
                'use strict';
                t.d(e, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => r });
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
            7641: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => w,
                        events: () => a.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => D,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => b,
                        getScale: () => _,
                        getSize: () => A,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => f,
                        isFocused: () => p,
                        pxToRem: () => B,
                        remToPx: () => C,
                        resize: () => F,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => x,
                    });
                var n = t(3722),
                    r = t(6112),
                    a = t(6538),
                    s = t(8566);
                const o = 15;
                function i(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function l(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, o);
                }
                function c(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function E(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function d(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, o);
                }
                function A(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function F(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function m(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: C(e.x), y: C(e.y) };
                }
                function D() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function _() {
                    return viewEnv.getScale();
                }
                function B(u) {
                    return viewEnv.pxToRem(u);
                }
                function C(u) {
                    return viewEnv.remToPx(u);
                }
                function g(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function b() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(r.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === r.W[e]), u),
                        {},
                    ),
                    y = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    x = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : a.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                'use strict';
                t.d(e, { qP: () => l });
                const n = ['args'];
                const r = 2,
                    a = 16,
                    s = 32,
                    o = 64,
                    i = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                s = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var n in u)
                                        if ({}.hasOwnProperty.call(u, n)) {
                                            if (e.indexOf(n) >= 0) continue;
                                            t[n] = u[n];
                                        }
                                    return t;
                                })(e, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, s, {
                                          arguments:
                                              ((r = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    l = {
                        close(u) {
                            i('popover' === u ? r : s);
                        },
                        minimize() {
                            i(o);
                        },
                        move(u) {
                            i(a, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            6536: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
                var n = t(6179);
                const r = (u) => {
                    const e = (0, n.useRef)(!1);
                    e.current || (u(), (e.current = !0));
                };
            },
            5415: (u, e, t) => {
                'use strict';
                t.d(e, { Aq: () => i, GS: () => l, cJ: () => s, fd: () => o });
                var n = t(6179),
                    r = t(7739),
                    a = t(1043);
                let s, o, i;
                !(function (u) {
                    (u[(u.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = a.j.small.width)] = 'Small'),
                        (u[(u.Medium = a.j.medium.width)] = 'Medium'),
                        (u[(u.Large = a.j.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge');
                })(s || (s = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = a.j.small.width)] = 'Small'),
                            (u[(u.Medium = a.j.medium.width)] = 'Medium'),
                            (u[(u.Large = a.j.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge');
                    })(o || (o = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = a.j.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = a.j.small.height)] = 'Small'),
                            (u[(u.Medium = a.j.medium.height)] = 'Medium'),
                            (u[(u.Large = a.j.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = a.j.extraLarge.height)] = 'ExtraLarge');
                    })(i || (i = {}));
                const l = () => {
                    const u = (0, n.useContext)(r.YN),
                        e = u.width,
                        t = u.height,
                        a = ((u) => {
                            switch (!0) {
                                case u.extraLarge:
                                    return s.ExtraLarge;
                                case u.large:
                                    return s.Large;
                                case u.medium:
                                    return s.Medium;
                                case u.small:
                                    return s.Small;
                                case u.extraSmall:
                                    return s.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), s.ExtraSmall;
                            }
                        })(u),
                        l = ((u) => {
                            switch (!0) {
                                case u.extraLargeWidth:
                                    return o.ExtraLarge;
                                case u.largeWidth:
                                    return o.Large;
                                case u.mediumWidth:
                                    return o.Medium;
                                case u.smallWidth:
                                    return o.Small;
                                case u.extraSmallWidth:
                                    return o.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), o.ExtraSmall;
                            }
                        })(u),
                        c = ((u) => {
                            switch (!0) {
                                case u.extraLargeHeight:
                                    return i.ExtraLarge;
                                case u.largeHeight:
                                    return i.Large;
                                case u.mediumHeight:
                                    return i.Medium;
                                case u.smallHeight:
                                    return i.Small;
                                case u.extraSmallHeight:
                                    return i.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), i.ExtraSmall;
                            }
                        })(u);
                    return { mediaSize: a, mediaWidth: l, mediaHeight: c, remScreenWidth: e, remScreenHeight: t };
                };
            },
            5521: (u, e, t) => {
                'use strict';
                let n, r;
                t.d(e, { n: () => n }),
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
                    })(n || (n = {})),
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
                    })(r || (r = {}));
            },
            9690: (u, e, t) => {
                'use strict';
                t.d(e, { HG: () => s });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const a = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    s = (u) =>
                        a
                            ? `${u}`
                            : (function (u) {
                                  let e = '';
                                  for (let t = r.length - 1; t >= 0; t--) for (; u >= r[t]; ) (e += n[t]), (u -= r[t]);
                                  return e;
                              })(u);
            },
            7727: (u, e, t) => {
                'use strict';
                function n(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                t.d(e, { G: () => n });
            },
            1358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => a });
                var n = t(3138);
                class r {
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
                        return window.__dataTracker || (window.__dataTracker = new r()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(u, e, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(u, t, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", u),
                            a
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
                            const n = this._callbacks[t];
                            void 0 !== n && n(u, e);
                        });
                    }
                }
                r.__instance = void 0;
                const a = r;
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
                t.d(e, { Gr: () => l, Z5: () => s.Z5, B0: () => o, ry: () => _ });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let n = u.target;
                                    do {
                                        if (n === e) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(u, e) {
                        this.addMouseListener(), this.entries.push({ container: u, callback: e });
                    }
                    unregister(u, e) {
                        const t = u,
                            n = e;
                        (this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== n)),
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
                var a = t(1358);
                var s = t(8613);
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
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    A = t(3138);
                const F = ['args'];
                function m(u, e, t, n, r, a, s) {
                    try {
                        var o = u[a](s),
                            i = o.value;
                    } catch (u) {
                        return void t(u);
                    }
                    o.done ? e(i) : Promise.resolve(i).then(n, r);
                }
                const D = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    _ = (function () {
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
                                    return new Promise(function (n, r) {
                                        var a = u.apply(e, t);
                                        function s(u) {
                                            m(a, n, r, s, o, 'next', u);
                                        }
                                        function o(u) {
                                            m(a, n, r, s, o, 'throw', u);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    B = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var n in u)
                                        if ({}.hasOwnProperty.call(u, n)) {
                                            if (e.indexOf(n) >= 0) continue;
                                            t[n] = u[n];
                                        }
                                    return t;
                                })(e, F);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    C = () => B(o.CLOSE),
                    g = (u, e) => {
                        u.keyCode === d.n.ESCAPE && e();
                    };
                var p = t(7572);
                const h = r.instance,
                    f = {
                        DataTracker: a.Z,
                        ViewModel: p.Z,
                        ViewEventType: o,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (u) => B(o.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => B(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            B(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, r = R.invalid('resId'), a) => {
                            const s = A.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                E = i.width,
                                d = i.height,
                                F = {
                                    x: A.O.view.pxToRem(l) + s.x,
                                    y: A.O.view.pxToRem(c) + s.y,
                                    width: A.O.view.pxToRem(E),
                                    height: A.O.view.pxToRem(d),
                                };
                            B(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: e,
                                bbox: D(F),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => g(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            g(u, C);
                        },
                        handleViewEvent: B,
                        onBindingsReady: _,
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
                            for (const n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    const r = Object.prototype.toString.call(e[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = e[n];
                                        t[n] = [];
                                        for (let e = 0; e < r.length; e++) t[n].push({ value: u(r[e].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = u(e[n]))
                                            : (t[n] = e[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: h,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = f;
            },
            8613: (u, e, t) => {
                'use strict';
                t.d(e, { Ew: () => a, Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    r = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    },
                    a = {
                        getRegionalDateTime: (u, e, t = !0) => regionalDateTime.getRegionalDateTime(u, e, t),
                        getFormattedDateTime: (u, e, t = !0) => regionalDateTime.getFormattedDateTime(u, e, t),
                    };
            },
            3703: (u, e, t) => {
                'use strict';
                var n = {};
                t.r(n),
                    t.d(n, {
                        Area: () => uu,
                        Bar: () => K,
                        DefaultScroll: () => J,
                        Direction: () => M,
                        defaultSettings: () => N,
                        useHorizontalScrollApi: () => I,
                    });
                var r = {};
                t.r(r), t.d(r, { Area: () => Bu, Bar: () => mu, Default: () => _u, useVerticalScrollApi: () => eu });
                var a = t(7739),
                    s = t(6179),
                    o = t.n(s),
                    i = t(6483),
                    l = t.n(i),
                    c = t(926),
                    E = t.n(c),
                    d = t(5415);
                const A = ['children', 'className'];
                function F() {
                    return (
                        (F = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        F.apply(null, arguments)
                    );
                }
                const m = {
                        [d.fd.ExtraSmall]: '',
                        [d.fd.Small]: E().SMALL_WIDTH,
                        [d.fd.Medium]: `${E().SMALL_WIDTH} ${E().MEDIUM_WIDTH}`,
                        [d.fd.Large]: `${E().SMALL_WIDTH} ${E().MEDIUM_WIDTH} ${E().LARGE_WIDTH}`,
                        [d.fd.ExtraLarge]:
                            `${E().SMALL_WIDTH} ${E().MEDIUM_WIDTH} ${E().LARGE_WIDTH} ${E().EXTRA_LARGE_WIDTH}`,
                    },
                    D = {
                        [d.Aq.ExtraSmall]: '',
                        [d.Aq.Small]: E().SMALL_HEIGHT,
                        [d.Aq.Medium]: `${E().SMALL_HEIGHT} ${E().MEDIUM_HEIGHT}`,
                        [d.Aq.Large]: `${E().SMALL_HEIGHT} ${E().MEDIUM_HEIGHT} ${E().LARGE_HEIGHT}`,
                        [d.Aq.ExtraLarge]:
                            `${E().SMALL_HEIGHT} ${E().MEDIUM_HEIGHT} ${E().LARGE_HEIGHT} ${E().EXTRA_LARGE_HEIGHT}`,
                    },
                    _ = {
                        [d.cJ.ExtraSmall]: '',
                        [d.cJ.Small]: E().SMALL,
                        [d.cJ.Medium]: `${E().SMALL} ${E().MEDIUM}`,
                        [d.cJ.Large]: `${E().SMALL} ${E().MEDIUM} ${E().LARGE}`,
                        [d.cJ.ExtraLarge]: `${E().SMALL} ${E().MEDIUM} ${E().LARGE} ${E().EXTRA_LARGE}`,
                    },
                    B = (u) => {
                        let e = u.children,
                            t = u.className,
                            n = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, A);
                        const r = (0, d.GS)(),
                            a = r.mediaWidth,
                            s = r.mediaHeight,
                            i = r.mediaSize;
                        return o().createElement('div', F({ className: l()(t, m[a], D[s], _[i]) }, n), e);
                    },
                    C = ['children'];
                const g = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t = {};
                            for (var n in u)
                                if ({}.hasOwnProperty.call(u, n)) {
                                    if (e.indexOf(n) >= 0) continue;
                                    t[n] = u[n];
                                }
                            return t;
                        })(u, C);
                    return o().createElement(a.ZN, null, o().createElement(B, t, e));
                };
                var p = t(493),
                    h = t.n(p);
                const f = (u) => {
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
                    },
                    v = (u, e, t) => (t < u ? u : t > e ? e : t);
                var b = t(3138);
                const w = [];
                function y(u) {
                    const e = (0, s.useRef)(u);
                    return (
                        (0, s.useLayoutEffect)(() => {
                            e.current = u;
                        }),
                        (0, s.useCallback)((...u) => (0, e.current)(...u), w)
                    );
                }
                function x(u, e, t = []) {
                    const n = (0, s.useRef)(0),
                        r = (0, s.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, s.useEffect)(() => r, [r]);
                    const a = (null != t ? t : []).concat([e]);
                    return [
                        (0, s.useCallback)((t) => {
                            (n.current = window.setInterval(() => u(t, !0), e)), u(t, !1);
                        }, a),
                        r,
                    ];
                }
                var S = t(7727);
                function T(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (u) {
                                if ('string' == typeof u) return P(u, e);
                                var t = {}.toString.call(u).slice(8, -1);
                                return (
                                    'Object' === t && u.constructor && (t = u.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(u)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? P(u, e)
                                          : void 0
                                );
                            }
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var n = 0;
                        return function () {
                            return n >= u.length ? { done: !0 } : { done: !1, value: u[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function P(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, n = Array(e); t < e; t++) n[t] = u[t];
                    return n;
                }
                function k(u, e, t) {
                    const n = (0, s.useMemo)(
                        () =>
                            (function (u, e, t, n) {
                                let r,
                                    a = !1,
                                    s = 0;
                                function o() {
                                    r && clearTimeout(r);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function E() {
                                        (s = Date.now()), t.apply(l, i);
                                    }
                                    a ||
                                        (n && !r && E(),
                                        o(),
                                        void 0 === n && c > u
                                            ? E()
                                            : !0 !== e &&
                                              (r = setTimeout(
                                                  n
                                                      ? function () {
                                                            r = void 0;
                                                        }
                                                      : E,
                                                  void 0 === n ? u - c : u,
                                              )));
                                }
                                return (
                                    'boolean' != typeof e && ((n = t), (t = e), (e = void 0)),
                                    (i.cancel = function () {
                                        o(), (a = !0);
                                    }),
                                    i
                                );
                            })(t, u),
                        e,
                    );
                    return (0, s.useEffect)(() => n.cancel, [n]), n;
                }
                var L = t(7030);
                let M;
                !(function (u) {
                    (u[(u.Next = -1)] = 'Next'), (u[(u.Prev = 1)] = 'Prev');
                })(M || (M = {}));
                const N = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    O = ({
                        getContainerSize: u,
                        getBounds: e,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: a = !1,
                    }) => {
                        const o = (u, t) => {
                            const n = e(u),
                                r = n[0],
                                a = n[1];
                            return a <= r ? 0 : v(r, a, t);
                        };
                        return (i = {}) => {
                            const l = i.settings,
                                c = void 0 === l ? N : l,
                                E = (0, s.useRef)(null),
                                d = (0, s.useRef)(null),
                                A = (() => {
                                    const u = (0, s.useMemo)(() => ({}), []),
                                        e = (e) => (u[e] || (u[e] = new Map()), u[e]),
                                        t = (u, t) => {
                                            e(u).set(t, t);
                                        },
                                        n = (u, t) => {
                                            e(u).delete(t);
                                        },
                                        r = (u, ...t) => {
                                            for (var n, r = T(e(u).values()); !(n = r()).done; ) (0, n.value)(...t);
                                        };
                                    return (0, s.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                                })(),
                                F = k(
                                    () => {
                                        b.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                m = (0, L.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (u) => {
                                        const e = E.current;
                                        e && (t(e, u), A.trigger('change', u), a && F());
                                    },
                                    onRest: (u) => A.trigger('rest', u),
                                    onStart: (u) => A.trigger('start', u),
                                    onPause: (u) => A.trigger('pause', u),
                                })),
                                D = m[0],
                                _ = m[1],
                                B = (0, s.useCallback)(
                                    (u, e, t) => {
                                        var n;
                                        const r = D.scrollPosition.get(),
                                            a = (null != (n = D.scrollPosition.goal) ? n : 0) - r;
                                        return o(u, e * t + a + r);
                                    },
                                    [D.scrollPosition],
                                ),
                                C = (0, s.useCallback)(
                                    (u, { immediate: e = !1, reset: t = !0 } = {}) => {
                                        const n = E.current;
                                        n &&
                                            _.start({
                                                scrollPosition: o(n, u),
                                                immediate: e,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: o(n, D.scrollPosition.get()) },
                                            });
                                    },
                                    [_, c.animationConfig, D.scrollPosition],
                                ),
                                g = (0, s.useCallback)(
                                    (u) => {
                                        const e = E.current,
                                            t = d.current;
                                        if (!e || !t) return;
                                        const n = ((u, e) => {
                                                switch (e.type) {
                                                    case 'proportional':
                                                        return r(u) / e.factor;
                                                    case 'fixed':
                                                        return e.value;
                                                }
                                            })(t, c.step),
                                            a = B(e, u, n);
                                        C(a);
                                    },
                                    [C, B, c.step],
                                ),
                                p = (0, s.useCallback)(
                                    (u) => {
                                        0 !== u.deltaY && g(n(u)),
                                            E.current && A.trigger('mouseWheel', u, D.scrollPosition, e(E.current));
                                    },
                                    [D.scrollPosition, g, A],
                                ),
                                h = ((u, e = []) => {
                                    const t = (0, s.useRef)(),
                                        n = (0, s.useCallback)((...e) => {
                                            t.current && t.current(), (t.current = u(...e));
                                        }, e);
                                    return (
                                        (0, s.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        f(() => {
                                            const u = E.current;
                                            u &&
                                                (C(o(u, D.scrollPosition.goal), { immediate: !0 }),
                                                A.trigger('resizeHandled'));
                                        }),
                                    [C, D.scrollPosition.goal],
                                ),
                                v = y(() => {
                                    const u = E.current;
                                    if (!u) return;
                                    const e = o(u, D.scrollPosition.goal);
                                    e !== D.scrollPosition.goal && C(e, { immediate: !0 }),
                                        A.trigger('recalculateContent');
                                });
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('resize', h),
                                    () => {
                                        window.removeEventListener('resize', h);
                                    }
                                ),
                                [h],
                            );
                            return (0, s.useMemo)(
                                () => ({
                                    getWrapperSize: () => (d.current ? r(d.current) : void 0),
                                    getContainerSize: () => (E.current ? u(E.current) : void 0),
                                    getBounds: () =>
                                        E.current
                                            ? e(E.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: p,
                                    applyScroll: C,
                                    applyStepTo: g,
                                    contentRef: E,
                                    wrapperRef: d,
                                    scrollPosition: _,
                                    animationScroll: D,
                                    recalculateContent: v,
                                    events: { on: A.on, off: A.off },
                                }),
                                [D.scrollPosition, C, g, A.off, A.on, v, p, _, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    I = O({
                        getBounds: (u) => {
                            var e, t;
                            return [
                                0,
                                u.offsetWidth -
                                    (null != (e = null == (t = u.parentElement) ? void 0 : t.offsetWidth) ? e : 0),
                            ];
                        },
                        getContainerSize: (u) => u.offsetWidth,
                        getWrapperSize: (u) => u.offsetWidth,
                        setScrollPosition: (u, e) => {
                            u.style.transform = `translateX(-${e.value.scrollPosition}px)`;
                        },
                        getDirection: (u) => (u.deltaY > 1 ? M.Next : M.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    H = 'HorizontalBar_base_49',
                    G = 'HorizontalBar_base__nonActive_82',
                    W = 'HorizontalBar_leftButton_5f',
                    $ = 'HorizontalBar_rightButton_03',
                    U = 'HorizontalBar_track_0d',
                    z = 'HorizontalBar_thumb_fd',
                    q = 'HorizontalBar_rail_32',
                    V = 'disable',
                    j = { pending: !1, offset: 0 },
                    Y = (u) => {
                        var e;
                        return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                    },
                    X = () => {},
                    Z = (u, e) => Math.max(20, u.offsetWidth * e),
                    K = (0, s.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = Y, onDrag: n = X }) => {
                        const r = (0, s.useRef)(null),
                            a = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            E = (0, s.useRef)(null),
                            d = u.stepTimeout || 100,
                            A = (0, s.useState)(j),
                            F = A[0],
                            m = A[1],
                            D = (0, s.useCallback)(
                                (u) => {
                                    m(u),
                                        E.current && n({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: E.current });
                                },
                                [n],
                            ),
                            _ = () => {
                                const e = c.current,
                                    t = E.current,
                                    n = u.getWrapperSize(),
                                    r = u.getContainerSize();
                                if (!(n && e && t && r)) return;
                                const s = u.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    l = v(0, 1, s / (r - n)),
                                    d = (e.offsetWidth - Z(e, o)) * l;
                                (t.style.transform = `translateX(${0 | d}px)`),
                                    ((u) => {
                                        if (a.current && i.current && c.current && E.current) {
                                            if (0 === u)
                                                return a.current.classList.add(V), void i.current.classList.remove(V);
                                            if (
                                                ((e = c.current),
                                                (t = E.current),
                                                u - (e.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return a.current.classList.remove(V), void i.current.classList.add(V);
                                            var e, t;
                                            a.current.classList.remove(V), i.current.classList.remove(V);
                                        }
                                    })(d);
                            },
                            B = y(() => {
                                (() => {
                                    const e = E.current,
                                        t = c.current,
                                        n = u.getWrapperSize(),
                                        a = u.getContainerSize();
                                    if (!(a && e && n && t)) return;
                                    const s = Math.min(1, n / a);
                                    (e.style.width = `${Z(t, s)}px`),
                                        (e.style.display = 'flex'),
                                        r.current &&
                                            (1 === s ? r.current.classList.add(G) : r.current.classList.remove(G));
                                })(),
                                    _();
                            });
                        (0, s.useEffect)(() => f(B)),
                            (0, s.useEffect)(
                                () =>
                                    f(() => {
                                        const e = () => {
                                            _();
                                        };
                                        let t = X;
                                        const n = () => {
                                            t(), (t = f(B));
                                        };
                                        return (
                                            u.events.on('recalculateContent', B),
                                            u.events.on('rest', e),
                                            u.events.on('change', e),
                                            u.events.on('resizeHandled', n),
                                            () => {
                                                t(),
                                                    u.events.off('recalculateContent', B),
                                                    u.events.off('rest', e),
                                                    u.events.off('change', e),
                                                    u.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [u],
                            ),
                            (0, s.useEffect)(() => {
                                if (!F.pending) return;
                                const e = b.O.client.events.mouse.move(([e, t]) => {
                                        var r;
                                        const a = u.contentRef.current,
                                            s = u.wrapperRef.current;
                                        if (!a || !s) return;
                                        const o = c.current,
                                            i = E.current;
                                        if (!o || !i) return;
                                        if ('inside' === t && e.clientX < 0) return;
                                        const l = e.clientX - F.offset - o.getBoundingClientRect().x,
                                            d = (l / o.offsetWidth) * (null != (r = u.getContainerSize()) ? r : 0);
                                        u.scrollPosition.start({
                                            scrollPosition: u.clampPosition(a, d),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: u.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: d });
                                    }),
                                    t = b.O.client.events.mouse.up(() => {
                                        e(), D(j);
                                    });
                                return () => {
                                    e(), t();
                                };
                            }, [u, F.offset, F.pending, n, D]);
                        const C = x((e) => u.applyStepTo(e), d, [u]),
                            g = C[0],
                            p = C[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', p, !0),
                                () => document.removeEventListener('mouseup', p, !0)
                            ),
                            [p],
                        );
                        const h = (u) => {
                            u.target.classList.contains(V) || (0, S.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: l()(H, e.base), ref: r, onWheel: u.handleMouseWheel },
                            o().createElement('div', {
                                className: l()(W, e.leftButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(V) || 0 !== u.button || ((0, S.G)('play'), g(M.Next));
                                },
                                onMouseUp: p,
                                ref: a,
                                onMouseEnter: h,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: l()(U, e.track),
                                    onMouseDown: (e) => {
                                        const n = E.current;
                                        if (n && 0 === e.button)
                                            if (((0, S.G)('play'), e.target === n))
                                                D({ pending: !0, offset: e.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((e) => {
                                                    const n = E.current,
                                                        r = u.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = t(u);
                                                    u.applyScroll(u.animationScroll.scrollPosition.get() + a * e);
                                                })(e.screenX > n.getBoundingClientRect().x ? M.Prev : M.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: h,
                                },
                                o().createElement('div', { ref: E, className: l()(z, e.thumb) }),
                                o().createElement('div', { className: l()(q, e.rail) }),
                            ),
                            o().createElement('div', {
                                className: l()($, e.rightButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(V) || 0 !== u.button || ((0, S.G)('play'), g(M.Prev));
                                },
                                onMouseUp: p,
                                ref: i,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    Q = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    J = ({
                        children: u,
                        api: e,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: a,
                        scrollClassName: i,
                        getStepByRailClick: c,
                        onDrag: E,
                    }) => {
                        const d = (0, s.useMemo)(() => {
                                const u = n || {};
                                return Object.assign({}, u, { base: l()(Q.base, u.base) });
                            }, [n]),
                            A = (0, s.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                        return o().createElement(
                            'div',
                            { className: l()(Q.defaultScroll, t), onWheel: e.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(Q.defaultScrollArea, r) },
                                o().createElement(uu, { className: i, api: A, classNames: a }, u),
                            ),
                            o().createElement(K, { getStepByRailClick: c, api: e, onDrag: E, classNames: d }),
                        );
                    },
                    uu = ({ api: u, className: e, classNames: t, children: n }) => (
                        (0, s.useEffect)(() => f(u.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: l()(Q.base, e) },
                            o().createElement(
                                'div',
                                {
                                    className: l()(Q.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: u.handleMouseWheel,
                                    ref: u.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: l()(Q.content, null == t ? void 0 : t.content), ref: u.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (uu.Bar = K), (uu.Default = J);
                const eu = O({
                        getBounds: (u) => [0, u.scrollHeight - u.offsetHeight],
                        getContainerSize: (u) => u.scrollHeight,
                        getWrapperSize: (u) => u.offsetHeight,
                        setScrollPosition: (u, e) => {
                            u.scrollTop = e.value.scrollPosition;
                        },
                        getDirection: (u) => (u.deltaY > 1 ? M.Next : M.Prev),
                    }),
                    tu = 'VerticalBar_base_f3',
                    nu = 'VerticalBar_base__nonActive_42',
                    ru = 'VerticalBar_topButton_d7',
                    au = 'VerticalBar_bottomButton_06',
                    su = 'VerticalBar_track_df',
                    ou = 'VerticalBar_thumb_32',
                    iu = 'VerticalBar_rail_43',
                    lu = 'disable',
                    cu = () => {},
                    Eu = { pending: !1, offset: 0 },
                    du = (u) => {
                        var e;
                        return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                    },
                    Au = (u, e) => {
                        u.contentRef.current && e(u.contentRef.current);
                    },
                    Fu = (u, e) => Math.max(20, u.offsetHeight * e),
                    mu = (0, s.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = du, onDrag: n = cu }) => {
                        const r = (0, s.useRef)(null),
                            a = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            E = (0, s.useRef)(null),
                            d = u.stepTimeout || 100,
                            A = (0, s.useState)(Eu),
                            F = A[0],
                            m = A[1],
                            D = (0, s.useCallback)(
                                (u) => {
                                    m(u),
                                        E.current && n({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: E.current });
                                },
                                [n],
                            ),
                            _ = y(() => {
                                const e = E.current,
                                    t = c.current,
                                    n = u.getWrapperSize(),
                                    a = u.getContainerSize();
                                if (!(n && a && e && t)) return;
                                const s = Math.min(1, n / a);
                                return (
                                    (e.style.height = `${Fu(t, s)}px`),
                                    (e.style.display = 'flex'),
                                    r.current &&
                                        (1 === s ? r.current.classList.add(nu) : r.current.classList.remove(nu)),
                                    s
                                );
                            }),
                            B = y(() => {
                                const e = c.current,
                                    t = E.current,
                                    n = u.getWrapperSize(),
                                    r = u.getContainerSize();
                                if (!(n && e && t && r)) return;
                                const s = u.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    l = v(0, 1, s / (r - n)),
                                    d = (e.offsetHeight - Fu(e, o)) * l;
                                (t.style.transform = `translateY(${0 | d}px)`),
                                    ((u) => {
                                        if (a.current && i.current && c.current && E.current) {
                                            if (0 === Math.round(u))
                                                return a.current.classList.add(lu), void i.current.classList.remove(lu);
                                            if (
                                                ((e = c.current),
                                                (t = E.current),
                                                u - (e.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return a.current.classList.remove(lu), void i.current.classList.add(lu);
                                            var e, t;
                                            a.current.classList.remove(lu), i.current.classList.remove(lu);
                                        }
                                    })(d);
                            }),
                            C = y(() => {
                                Au(u, () => {
                                    _(), B();
                                });
                            });
                        (0, s.useEffect)(() => f(C)),
                            (0, s.useEffect)(() => {
                                const e = () => {
                                    Au(u, () => {
                                        B();
                                    });
                                };
                                let t = cu;
                                const n = () => {
                                    t(), (t = f(C));
                                };
                                return (
                                    u.events.on('recalculateContent', C),
                                    u.events.on('rest', e),
                                    u.events.on('change', e),
                                    u.events.on('resizeHandled', n),
                                    () => {
                                        t(),
                                            u.events.off('recalculateContent', C),
                                            u.events.off('rest', e),
                                            u.events.off('change', e),
                                            u.events.off('resizeHandled', n);
                                    }
                                );
                            }, [u]),
                            (0, s.useEffect)(() => {
                                if (!F.pending) return;
                                const e = b.O.client.events.mouse.up(() => {
                                        D(Eu);
                                    }),
                                    t = b.O.client.events.mouse.move(([e]) => {
                                        Au(u, (t) => {
                                            const r = c.current,
                                                a = E.current,
                                                s = u.getContainerSize();
                                            if (!r || !a || !s) return;
                                            const o = e.screenY - F.offset - r.getBoundingClientRect().y,
                                                i = (o / r.offsetHeight) * s;
                                            u.scrollPosition.start({
                                                scrollPosition: u.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: o, contentOffset: i });
                                        });
                                    });
                                return () => {
                                    e(), t();
                                };
                            }, [u, F.offset, F.pending, n, D]);
                        const g = x((e) => u.applyStepTo(e), d, [u]),
                            p = g[0],
                            h = g[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const w = (u) => {
                            u.target.classList.contains(lu) || (0, S.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: l()(tu, e.base), ref: r, onWheel: u.handleMouseWheel },
                            o().createElement('div', {
                                className: l()(ru, e.topButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(lu) || 0 !== u.button || ((0, S.G)('play'), p(M.Next));
                                },
                                ref: a,
                                onMouseEnter: w,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: l()(su, e.track),
                                    onMouseDown: (e) => {
                                        const n = E.current;
                                        if (n && 0 === e.button)
                                            if (((0, S.G)('play'), e.target === n))
                                                D({ pending: !0, offset: e.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((e) => {
                                                    E.current &&
                                                        Au(u, (n) => {
                                                            if (!n) return;
                                                            const r = t(u),
                                                                a = u.clampPosition(n, n.scrollTop + r * e);
                                                            u.applyScroll(a);
                                                        });
                                                })(e.screenY > n.getBoundingClientRect().y ? M.Prev : M.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: w,
                                },
                                o().createElement('div', { ref: E, className: l()(ou, e.thumb) }),
                                o().createElement('div', { className: l()(iu, e.rail) }),
                            ),
                            o().createElement('div', {
                                className: l()(au, e.bottomButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(lu) || 0 !== u.button || ((0, S.G)('play'), p(M.Prev));
                                },
                                onMouseUp: h,
                                ref: i,
                                onMouseEnter: w,
                            }),
                        );
                    }),
                    Du = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    _u = ({
                        children: u,
                        api: e,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: a,
                        scrollClassNames: i,
                        getStepByRailClick: c,
                        onDrag: E,
                    }) => {
                        const d = (0, s.useMemo)(() => {
                                const u = n || {};
                                return Object.assign({}, u, { base: l()(Du.base, u.base) });
                            }, [n]),
                            A = (0, s.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                        return o().createElement(
                            'div',
                            { className: l()(Du.defaultScroll, t), onWheel: e.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(Du.area, r) },
                                o().createElement(Bu, { className: a, classNames: i, api: A }, u),
                            ),
                            o().createElement(mu, { getStepByRailClick: c, api: e, onDrag: E, classNames: d }),
                        );
                    },
                    Bu = ({ className: u, classNames: e, children: t, api: n }) => (
                        (0, s.useEffect)(() => f(n.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: l()(Du.base, u), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(Du.content, null == e ? void 0 : e.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                Bu.Default = _u;
                const Cu = { Vertical: r, Horizontal: n },
                    gu = {
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
                    pu = [
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
                function hu() {
                    return (
                        (hu = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        hu.apply(null, arguments)
                    );
                }
                class fu extends o().PureComponent {
                    constructor(...u) {
                        super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, S.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                u && u(e), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, S.G)(this.props.soundClick);
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
                            n = u.goto,
                            r = u.side,
                            a = u.type,
                            s = u.classNames,
                            i = u.onMouseEnter,
                            c = u.onMouseLeave,
                            E = u.onMouseDown,
                            d = u.onMouseUp,
                            A =
                                (u.soundClick,
                                u.soundHover,
                                (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var n in u)
                                        if ({}.hasOwnProperty.call(u, n)) {
                                            if (e.indexOf(n) >= 0) continue;
                                            t[n] = u[n];
                                        }
                                    return t;
                                })(u, pu)),
                            F = l()(gu.base, gu[`base__${a}`], gu[`base__${r}`], null == s ? void 0 : s.base),
                            m = l()(gu.icon, gu[`icon__${a}`], gu[`icon__${r}`], null == s ? void 0 : s.icon),
                            D = l()(gu.glow, null == s ? void 0 : s.glow),
                            _ = l()(gu.caption, gu[`caption__${a}`], null == s ? void 0 : s.caption),
                            B = l()(gu.goto, null == s ? void 0 : s.goto);
                        return o().createElement(
                            'div',
                            hu(
                                {
                                    className: F,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(E),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                A,
                            ),
                            'info' !== a && o().createElement('div', { className: gu.shine }),
                            o().createElement('div', { className: m }, o().createElement('div', { className: D })),
                            o().createElement('div', { className: _ }, e),
                            n && o().createElement('div', { className: B }, n),
                        );
                    }
                }
                fu.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var vu = t(5521),
                    bu = t(9916);
                const wu = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function yu(u = vu.n.NONE, e = wu, t = !1, n = !1) {
                    (0, s.useEffect)(() => {
                        if (u !== vu.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === u) {
                                if (!n && b.O.view.isEventHandled()) return;
                                b.O.view.setEventHandled(), e(r), t && r.stopPropagation();
                            }
                        }
                    }, [e, u, t, n]);
                }
                var xu = t(3403);
                function Su() {
                    return !1;
                }
                console.log;
                var Tu = t(9174);
                function Pu(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (u) {
                                if ('string' == typeof u) return ku(u, e);
                                var t = {}.toString.call(u).slice(8, -1);
                                return (
                                    'Object' === t && u.constructor && (t = u.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(u)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? ku(u, e)
                                          : void 0
                                );
                            }
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var n = 0;
                        return function () {
                            return n >= u.length ? { done: !0 } : { done: !1, value: u[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function ku(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, n = Array(e); t < e; t++) n[t] = u[t];
                    return n;
                }
                const Ru = (u) => (0 === u ? window : window.subViews.get(u));
                function Lu(u, e) {
                    var t;
                    if (!(e >= u.length)) return Array.isArray(u) ? u[e] : null == (t = u[e]) ? void 0 : t.value;
                }
                const Mu = Lu;
                function Nu(u) {
                    var e;
                    return u && 'value' in u && null != (e = u.constructor) && e.name.includes('ArrayItem')
                        ? null == u
                            ? void 0
                            : u.value
                        : u;
                }
                function Ou(u, e) {
                    return Array.isArray(u) ? u.map(e) : u.map((u, t, n) => e(null == u ? void 0 : u.value, t, n));
                }
                function Iu(u, e, t) {
                    if (Array.isArray(u)) return u.reduce(e, t);
                    let n = t;
                    for (let t = 0; t < u.length; t++) {
                        n = e(n, Mu(u, t), t, u);
                    }
                    return n;
                }
                var Hu = t(3946),
                    Gu = t(3905),
                    Wu = t(1281);
                let $u;
                function Uu(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                function zu(u, e) {
                    return u.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                        const t = 0 === u.indexOf('%') ? 2 : 1;
                        return String(e[u.slice(t, -t)]);
                    });
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })($u || ($u = {}));
                const qu = (u) => u.replace(/&nbsp;/g, ' '),
                    Vu = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    ju = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    Yu = (u, e, t = $u.left) => u.split(e).reduce(t === $u.left ? Vu : ju, []),
                    Xu = (() => {
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
                    Zu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Ku = (u, e = $u.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (Zu.includes(t)) return Xu(u);
                        if ('ja' === t) {
                            return (0, Wu.D4)()
                                .parse(u)
                                .map((u) => qu(u));
                        }
                        return ((u, e = $u.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = qu(u);
                            return Yu(r, /( )/, e).forEach((u) => (t = t.concat(Yu(u, n, $u.left)))), t;
                        })(u, e);
                    },
                    Qu = {
                        ENTRY_POINT: {
                            icon: { emptyIconBrightness: 0.3, boxesIconBrightness: 0.3 },
                            shine: {
                                opacityCustom: 0.15,
                                opacityCustomNewBox: 0.4,
                                opacityDiff: 0.15,
                                animationDuration: '40s',
                            },
                        },
                        HAS_BOXES_VIEW: {
                            hasIdle: !0,
                            vignette: { isEnabled: !0, opacity: 0.4 },
                            tabsGuaranteedCount: 10,
                            accentCount: 5,
                            hoverZone: {
                                width: '38%',
                                height: '39%',
                                horizontalOffset: '30.8%',
                                verticalOffset: '39%',
                            },
                            backgroundColor: '#111',
                        },
                        INFO_PAGE: { hasDescription: !0 },
                        REWARDS: { accentCount: 5 },
                    },
                    Ju = {
                        DEFAULT_CONFIG: Qu,
                        anniversaryCN: {
                            ENTRY_POINT: { icon: { emptyIconBrightness: 0.2 } },
                            HAS_BOXES_VIEW: { hasIdle: !1, tabsGuaranteedCount: 5 },
                            INFO_PAGE: { hasDescription: !0 },
                        },
                    },
                    ue = (u, e) => {
                        const t = Ju[((n = u), n.replace(/_\w/g, (u) => u[1].toUpperCase()))];
                        var n;
                        return t
                            ? ((u, e) => {
                                  const t = (u, e) => {
                                      const n = Object.assign({}, u);
                                      for (const u in n) {
                                          var r, a;
                                          e &&
                                              u in e &&
                                              ('object' == typeof n[u]
                                                  ? (n[u] = t(n[u], null != (r = e[u]) ? r : n[u]))
                                                  : (n[u] = null != (a = e[u]) ? a : n[u]));
                                      }
                                      return n;
                                  };
                                  return t(u, e);
                              })(Qu[e], t[e])
                            : Qu[e];
                    },
                    ee = (u, e) => {
                        let t = u;
                        const n = e.split('.');
                        for (let u = 0; u < n.length; u++) {
                            if (!t) return '';
                            if (('string' != typeof t && (t = t.$dyn(n[u])), 'string' == typeof t)) return t;
                        }
                        return '';
                    },
                    te = (u, e) => {
                        let t = u;
                        const n = e.split('.');
                        for (let u = 0; u < n.length && t; u++) {
                            const e = t.$dyn(n[u]);
                            (e && 'object' != typeof e) || (t = e);
                        }
                        return t;
                    },
                    ne = (u, e) => {
                        if (e.includes('.dynamic.')) {
                            const t = e.replace('dynamic.', '');
                            return te(u, t);
                        }
                        return ee(u, e);
                    },
                    re = ({ type: u, filePath: e, eventName: t }, n = !1) => {
                        const r = ((u, e, t) => {
                                const n = 'gui.maps.icons.lootBoxSystem.customizable',
                                    r = 'lootbox.customizable';
                                switch (u) {
                                    case Gu._g.Images:
                                    case Gu._g.DynamicImages:
                                        return {
                                            parent: R.images,
                                            path: `${n}.${t}.${e}`,
                                            defaultPath: `${n}.default.${e}`,
                                        };
                                    case Gu._g.Videos:
                                    case Gu._g.DynamicVideos:
                                        return {
                                            parent: R.videos,
                                            path: `${r}.${t}.${e}`,
                                            defaultPath: `${r}.default.${e}`,
                                        };
                                    case Gu._g.Texts:
                                    case Gu._g.DynamicTexts:
                                        return {
                                            parent: R.strings,
                                            path: `lootbox_${t}.${e}`,
                                            defaultPath: `lootbox_system.${e}`,
                                        };
                                    default:
                                        return (
                                            console.error(`Unreachable code: unknown ResourceType ${u}`),
                                            { parent: '', path: '', defaultPath: '' }
                                        );
                                }
                            })(u, e, t),
                            a = r.parent,
                            s = r.path,
                            o = r.defaultPath;
                        return a
                            ? { eventResource: n ? te(a, s) : ne(a, s), defaultResource: n ? te(a, o) : ne(a, o) }
                            : null;
                    },
                    ae = ({ type: u, filePath: e, eventName: t }) => {
                        const n = re({ type: u, filePath: e, eventName: t });
                        if (!n || (!n.eventResource && !n.defaultResource))
                            return console.info(`Unreachable code: unknown resource (${u} ${t} ${e})`), '';
                        const r = n.eventResource,
                            a = n.defaultResource;
                        return r || a;
                    },
                    se = (u, e) =>
                        Object.keys(u).reduce((t, n) => {
                            const r = u[n];
                            return r
                                ? ((t[n] = ((u, e, t) =>
                                      Object.keys(u).reduce(
                                          (n, r) => ((n[r] = ae({ type: e, filePath: u[r], eventName: t })), n),
                                          {},
                                      ))(r, n, e)),
                                  t)
                                : t;
                        }, {}),
                    oe = (u, e, t) => (u || e ? u || e : (console.warn(`Not found ${t}`), '')),
                    ie = (u, e, t) =>
                        Object.keys(u).reduce((n, r) => {
                            const a = u[r];
                            return (
                                (n[r] = ((u, e, t) => {
                                    const n = `resource type: ${u}, path: ${e}`,
                                        r = re({ type: u, filePath: e, eventName: t }, !0);
                                    return ((u, e, t) => ({
                                        dynOpt: (n, r = 'default') => {
                                            const a =
                                                    (null == e ? void 0 : e.$dyn(n)) ||
                                                    (null == e ? void 0 : e.$dyn(r)),
                                                s = null == u ? void 0 : u.$dyn(r);
                                            return oe(a, s, t);
                                        },
                                        dyn: (n) => {
                                            const r = null == e ? void 0 : e.$dyn(n),
                                                a = null == u ? void 0 : u.$dyn(n);
                                            return oe(r, a, t);
                                        },
                                        plural: (n, r) => {
                                            const a = null == e ? void 0 : e.$plural(n, r),
                                                s = null == u ? void 0 : u.$plural(n, r);
                                            return oe(a, s, t);
                                        },
                                    }))(
                                        null == r ? void 0 : r.defaultResource,
                                        null == r ? void 0 : r.eventResource,
                                        n,
                                    );
                                })(e, a, t)),
                                n
                            );
                        }, {}),
                    le = {
                        images: {
                            background: 'infopage.background',
                            mask: 'infopage.mask',
                            checkmark: 'infopage.checkmark',
                            previewIcon: 'common.previewIcon',
                            externalLink: 'common.externalLinkWhite',
                            externalLinkSmall: 'common.externalLinkSmall',
                            shadowLeft: 'infopage.shadowLeft',
                            shadowMiddle: 'infopage.shadowMiddle',
                            shadowRight: 'infopage.shadowRight',
                            tabShine: 'infopage.tabShine',
                        },
                        texts: {
                            backButton: 'common.backButton',
                            titleGuaranteed: 'infoPage.footer.title.guaranteed',
                            descriptionGuaranteed: 'infoPage.footer.description.guaranteed',
                            titleCompensation: 'infoPage.footer.title.compensation',
                            descriptionCompensation: 'infoPage.footer.description.compensation',
                            titleAutoOpen: 'infoPage.footer.title.autoOpen',
                            descriptionAutoOpen: 'infoPage.footer.description.autoOpen',
                            headerTitle: 'eventName.upperCase',
                            headerSubtitle: 'infoPage.header.subtitle',
                            headerDescription: 'infoPage.header.description',
                            lootListLink: 'infoPage.header.lootListLink',
                            headerShopButton: 'infoPage.header.shopButton',
                            headerShopButtonCn: 'infoPage.header.shopButtonCn',
                            headerVideoButtonText: 'infoPage.header.videoButtonText',
                            rewardsMultiplier: 'common.rewards.multiplier',
                            rewardsDivider: 'infoPage.rewards.divider',
                            rewardsPercent: 'infoPage.rewards.percent',
                        },
                    },
                    ce = {
                        dynamicTexts: {
                            boxNames: 'common.boxCategory.lowerCase',
                            rewardsPremiumDay: 'infoPage.rewards.premiumDay',
                        },
                    },
                    Ee = ((u, e) => {
                        const t = (0, s.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: r, children: a, mocks: i }) {
                                const l = (0, s.useRef)([]),
                                    c = (t, n, r) => {
                                        var a;
                                        const s = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = Ru,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function a(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? r.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = r.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const s = (u) => {
                                                    const r = t(e),
                                                        a = n.split('.').reduce((u, e) => u[e], r);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? a
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const o = 'string' == typeof a ? `${n}.${a}` : n,
                                                            i = b.O.view.addModelObserver(o, e, !0);
                                                        return r.set(i, t), u && t(s(a)), i;
                                                    },
                                                    readByPath: s,
                                                    createCallback: (u, e) => {
                                                        const t = s(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = s(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var u, t = Pu(r.keys()); !(u = t()).done; ) a(u.value, e);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(n),
                                            o =
                                                'real' === t
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (a = null == r ? void 0 : r.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            i = (u) =>
                                                'mocks' === t ? (null == r ? void 0 : r.getter(u)) : o.readByPath(u),
                                            c = (u) => l.current.push(u),
                                            E = u({
                                                mode: t,
                                                readByPath: i,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (u, e) => {
                                                        const n = null != e ? e : i(u),
                                                            r = Tu.LO.box(n, { equals: Su });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, Tu.aD)((u) => r.set(u)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (u, e) => {
                                                        const n = null != e ? e : i(u),
                                                            r = Tu.LO.box(n, { equals: Su });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, Tu.aD)((u) => r.set(u)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (u, e) => {
                                                        const n = i(e);
                                                        if (Array.isArray(u)) {
                                                            const r = u.reduce(
                                                                (u, e) => ((u[e] = Tu.LO.box(n[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, Tu.aD)((e) => {
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
                                                                a = Object.entries(r),
                                                                s = a.reduce(
                                                                    (u, [e, t]) => ((u[t] = Tu.LO.box(n[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, Tu.aD)((u) => {
                                                                            a.forEach(([e, t]) => {
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
                                                cleanup: c,
                                            }),
                                            d = { mode: t, model: E, externalModel: o, cleanup: c };
                                        return {
                                            model: E,
                                            controls: 'mocks' === t && r ? r.controls(d) : e(d),
                                            externalModel: o,
                                            mode: t,
                                        };
                                    },
                                    E = (0, s.useRef)(!1),
                                    d = (0, s.useState)(n),
                                    A = d[0],
                                    F = d[1],
                                    m = (0, s.useState)(() => c(n, r, i)),
                                    D = m[0],
                                    _ = m[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        E.current ? _(c(A, r, i)) : (E.current = !0);
                                    }, [i, A, r]),
                                    (0, s.useEffect)(() => {
                                        F(n);
                                    }, [n]),
                                    (0, s.useEffect)(
                                        () => () => {
                                            D.externalModel.dispose(), l.current.forEach((u) => u());
                                        },
                                        [D],
                                    ),
                                    o().createElement(t.Provider, { value: D }, a)
                                );
                            },
                            () => (0, s.useContext)(t),
                        ];
                    })(
                        ({ observableModel: u }) => {
                            const e = u.object().get().eventName,
                                t = {
                                    root: u.object(),
                                    boxes: u.array('boxes'),
                                    hasDescription: Tu.LO.box(ue(e, Gu.N7.InfoPage).hasDescription),
                                    sticky: Tu.LO.box(!1),
                                    activeCategory: Tu.LO.box(''),
                                },
                                n = (0, Hu.Om)((u) => {
                                    const e = [];
                                    return (
                                        Ou(u, (u) => {
                                            if (Gu.fR.includes(u.name)) {
                                                const t = (function (u, e) {
                                                    for (let t = 0; t < u.length; t++) if (e(Mu(u, t), t, u)) return t;
                                                })(e, (e) => e.name === u.name);
                                                if (void 0 !== t)
                                                    return void (function (u, e, t) {
                                                        if (Array.isArray(u)) return (u[e] = t), u;
                                                        throw new Error('Mutate CoherentArrayProxy is not available');
                                                    })(
                                                        e,
                                                        t,
                                                        Object.assign({}, e[t], {
                                                            value: `${e[t].value} %(divider) ${u.value}`,
                                                        }),
                                                    );
                                            }
                                            !(function (u, e) {
                                                if (Array.isArray(u)) return u.push(e), u;
                                                throw new Error('Mutate CoherentArrayProxy is not available');
                                            })(e, u);
                                        }),
                                        e
                                    );
                                }),
                                r = (0, Hu.Om)(
                                    (u) =>
                                        (function (u, e) {
                                            for (let t = 0; t < u.length; t++) {
                                                const n = Nu(u[t]);
                                                if (e(n, t, u)) return n;
                                            }
                                        })(t.boxes.get(), (e) => e.category === u),
                                    { equals: Su },
                                ),
                                a = (0, Hu.Om)(
                                    (u) => {
                                        var e;
                                        const t = null == (e = r(u)) ? void 0 : e.slots;
                                        return t
                                            ? Ou(t, (u) => ({
                                                  probability: u.probability,
                                                  bonuses: n(u.bonuses.items),
                                              }))
                                            : [];
                                    },
                                    { equals: Su },
                                ),
                                s = (0, Hu.Om)(
                                    (u) => {
                                        var e;
                                        return null == (e = r(u)) ? void 0 : e.guaranteedLimit;
                                    },
                                    { equals: Su },
                                ),
                                o = (0, Hu.Om)(() => se(le, e)),
                                i = (0, Hu.Om)(() =>
                                    ((u, e) =>
                                        Object.keys(u).reduce((t, n) => {
                                            const r = u[n];
                                            return r ? ((t[n] = ie(r, n, e)), t) : t;
                                        }, {}))(ce, e),
                                ),
                                l = (0, Hu.Om)(() => t.boxes.get().length > 1);
                            return Object.assign({}, t, {
                                computes: {
                                    getSlots: a,
                                    getGuaranteed: s,
                                    resources: o,
                                    dynamicResources: i,
                                    displayTabs: l,
                                },
                            });
                        },
                        ({ externalModel: u, model: e, cleanup: t }) => {
                            const n = (0, Tu.aD)((u) => {
                                e.activeCategory.get() !== u && e.activeCategory.set(u);
                            });
                            return (
                                t(
                                    (0, Tu.EH)(() => {
                                        const u = e.root.get().chosenCategory;
                                        n(u);
                                    }),
                                ),
                                {
                                    showShop: u.createCallbackNoArgs('onShowShop'),
                                    showVideo: u.createCallbackNoArgs('onShowVideo'),
                                    showLootList: u.createCallbackNoArgs('onShowLootList'),
                                    close: u.createCallbackNoArgs('onClose'),
                                    showPreview: u.createCallback((u) => u, 'onPreview'),
                                    saveCategory: u.createCallback((u) => ({ chosenCategory: u }), 'onChosenCategory'),
                                    setSticky: (0, Tu.aD)((u) => e.sticky.set(u)),
                                }
                            );
                        },
                    ),
                    de = Ee[0],
                    Ae = Ee[1],
                    Fe = 'App_base_c9',
                    me = 'App_shadow_a6',
                    De = 'App_scroll_6c',
                    _e = 'App_scrollBar_3d',
                    Be = 'App_scrollArea_97',
                    Ce = 'App_content_2e',
                    ge = 'App_stickyTabs_0e',
                    pe = 'App_stickyTabs__show_3d',
                    he = 'App_backButton_60',
                    fe = 'FormatText_base_d0',
                    ve = ({ binding: u, text: e = '', classMix: t, alignment: n = $u.left, formatWithBrackets: r }) => {
                        if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                        const a = r && u ? Uu(e, u) : e;
                        return o().createElement(
                            s.Fragment,
                            null,
                            a.split('\n').map((e, r) =>
                                o().createElement(
                                    'div',
                                    { className: l()(fe, t), key: `${e}-${r}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : Ku(u, e))))(
                                        e,
                                        n,
                                        u,
                                    ).map((u, e) => o().createElement(s.Fragment, { key: `${e}-${u}` }, u)),
                                ),
                            ),
                        );
                    },
                    be = 'TextBlock_base_ce',
                    we = 'TextBlock_title_d5',
                    ye = 'TextBlock_description_3c',
                    xe = ({ title: u, description: e, className: t }) =>
                        o().createElement(
                            'div',
                            { className: l()(be, t) },
                            o().createElement('div', { className: we }, u),
                            o().createElement('div', { className: ye }, e),
                        ),
                    Se = 'Footer_base_4c',
                    Te = 'Footer_text_07',
                    Pe = 'Footer_textBlock_8e',
                    ke = (0, xu.Pi)(() => {
                        const u = Ae().model,
                            e = u.computes.resources().texts,
                            t = u.boxes.get(),
                            n = u.computes.getGuaranteed;
                        return o().createElement(
                            'div',
                            { className: Se },
                            o().createElement(
                                'div',
                                { className: Te },
                                o().createElement(xe, {
                                    title: e.titleGuaranteed,
                                    description: o().createElement(ve, {
                                        text: e.descriptionGuaranteed,
                                        binding: Iu(t, (u, e, t) => ((u[`guaranteed${t}`] = n(e.category)), u), {}),
                                    }),
                                    className: Pe,
                                }),
                                o().createElement(xe, {
                                    title: e.titleCompensation,
                                    description: e.descriptionCompensation,
                                    className: Pe,
                                }),
                                o().createElement(xe, {
                                    title: e.titleAutoOpen,
                                    description: e.descriptionAutoOpen,
                                    className: Pe,
                                }),
                            ),
                        );
                    });
                let Re;
                !(function (u) {
                    (u.DayMonthNumeric = 'dayMonthNumeric'),
                        (u.DayMonthFull = 'dayMonthFull'),
                        (u.DayMonthFullTime = 'dayMonthFullTime'),
                        (u.DayMonthAbbreviated = 'dayMonthAbbreviated'),
                        (u.DayMonthAbbreviatedTime = 'dayMonthAbbreviatedTime'),
                        (u.ShortDate = 'shortDate'),
                        (u.ShortTime = 'ShortTime'),
                        (u.ShortDateTime = 'ShortDateTime'),
                        (u.FullDate = 'fullDate'),
                        (u.FullTime = 'fullTime'),
                        (u.FullDateTime = 'fullDateTime');
                })(Re || (Re = {}));
                var Le = t(8613);
                Date.now();
                const Me = Le.Ew.getRegionalDateTime;
                Le.Ew.getFormattedDateTime;
                var Ne = t(514),
                    Oe = t(1579),
                    Ie = t(4037);
                const He = {
                        entryHover: 'gui_lb_icon_hover',
                        boxMouseEnter: 'gui_lb_highlight_on',
                        boxMouseLeave: 'gui_lb_highlight_off',
                        boxAppear: 'gui_lb_appear',
                        purchaseHover: 'gui_lb_buy_more',
                        purchaseClick: 'gui_lb_ingame_shop_box_buy',
                        rareAnimation: 'gui_lb_rare_reward_fx',
                        epicAnimation: 'gui_lb_epic_reward_fx',
                        rewardAppear: 'gui_lb_reward_item_default',
                        multiRewardAppear: 'gui_random_reward_appear',
                        compensationAppear: 'gui_reward_screen_compensation',
                        open: 'gui_lb_video_default_open',
                        openRare: 'gui_lb_video_default_rare_open',
                        switch: 'gui_lb_type_switch',
                        statsOpen: 'gui_lb_stats_open',
                        statsClose: 'gui_lb_stats_close',
                        infoPageTabHover: 'gui_lb_infopage_box_highlight',
                        infoPageTabClick: 'gui_lb_infopage_box_click',
                    },
                    Ge = {
                        overlayRareVideo: 'gui_lb_video_special_appear',
                        open: 'gui_lb_video_special_open',
                        openRare: 'gui_lb_video_special_rare_open',
                    },
                    We = Object.assign({}, He, Ge),
                    $e = 'VideoButton_base_ec',
                    Ue = 'VideoButton_videoIcon_61',
                    ze = 'VideoButton_videoText_97',
                    qe = (0, xu.Pi)(({ onClick: u }) => {
                        const e = Ae().model.computes.resources().texts;
                        return o().createElement(
                            'div',
                            {
                                className: $e,
                                onMouseEnter: () => {
                                    Ne.hY.highlight();
                                },
                                onClick: () => {
                                    Ne.hY.click(), u();
                                },
                            },
                            o().createElement('div', { className: Ue }),
                            o().createElement('div', { className: ze }, e.headerVideoButtonText),
                        );
                    }),
                    Ve = 'LootListLink_base_86',
                    je = 'LootListLink_text_34',
                    Ye = 'LootListLink_icon_ae',
                    Xe = ({ text: u, icon: e, onClick: t }) =>
                        o().createElement(
                            'div',
                            { className: Ve, onClick: t },
                            o().createElement('div', { className: je }, u),
                            o().createElement('div', { className: Ye, style: { backgroundImage: `url(${e})` } }),
                        ),
                    Ze = 'Header_base_5e',
                    Ke = 'Header_text_ce',
                    Qe = 'Header_title_df',
                    Je = 'Header_subtitle_07',
                    ut = 'Header_description_3f',
                    et = 'Header_lootListLink_4f',
                    tt = 'Header_shopButton_76',
                    nt = 'Header_videoButton_07',
                    rt = (0, xu.Pi)(() => {
                        const u = Ae(),
                            e = u.model,
                            t = u.controls,
                            n = e.root.get(),
                            r = n.hasVideoButton,
                            a = n.hasShopButton,
                            s = n.startDate,
                            i = n.endDate,
                            l = n.useExternal,
                            c = n.hasLootListLink,
                            E = e.hasDescription.get(),
                            d = e.computes.resources(),
                            A = d.images,
                            F = d.texts,
                            m = () => {
                                Ne.hY.sound(We.purchaseClick), t.showShop();
                            };
                        return o().createElement(
                            'div',
                            { className: Ze },
                            o().createElement(
                                'div',
                                { className: Ke },
                                o().createElement('div', { className: Qe }, F.headerTitle),
                                o().createElement(
                                    'div',
                                    { className: Je },
                                    o().createElement(ve, {
                                        text: F.headerSubtitle,
                                        binding: { from: `${Me(s, Re.FullDate)}`, to: `${Me(i, Re.FullDate)}` },
                                    }),
                                ),
                                E &&
                                    o().createElement(
                                        'div',
                                        { className: ut },
                                        o().createElement(ve, { text: F.headerDescription }),
                                    ),
                                c &&
                                    o().createElement(
                                        'div',
                                        { className: et },
                                        o().createElement(Xe, {
                                            text: F.lootListLink,
                                            icon: A.externalLinkSmall,
                                            onClick: t.showLootList,
                                        }),
                                    ),
                                a &&
                                    o().createElement(
                                        'div',
                                        { className: tt },
                                        l
                                            ? o().createElement(Ie.n, {
                                                  text: F.headerShopButtonCn,
                                                  icon: A.externalLink,
                                                  soundHover: We.purchaseHover,
                                                  onClick: m,
                                              })
                                            : o().createElement(Oe.X, {
                                                  text: F.headerShopButton,
                                                  onClick: m,
                                                  soundHover: We.purchaseHover,
                                              }),
                                    ),
                            ),
                            r &&
                                o().createElement(
                                    'div',
                                    { className: nt },
                                    o().createElement(qe, { onClick: t.showVideo }),
                                ),
                        );
                    }),
                    at = [
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
                function st(u) {
                    return Object.entries(u || {}).map(([u, e]) => {
                        const t = { __Type: 'GFValueProxy', name: u };
                        switch (typeof e) {
                            case 'number':
                                t.number = e;
                                break;
                            case 'boolean':
                                t.bool = e;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = e.toString();
                        }
                        return t;
                    });
                }
                const ot = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: bu.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    it = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            n = u.args,
                            r = u.onMouseEnter,
                            a = u.onMouseLeave,
                            o = u.onMouseDown,
                            i = u.onClick,
                            l = u.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = u.ignoreMouseClick,
                            d = void 0 !== E && E,
                            A = u.decoratorId,
                            F = void 0 === A ? 0 : A,
                            m = u.isEnabled,
                            D = void 0 === m || m,
                            _ = u.targetId,
                            B = void 0 === _ ? 0 : _,
                            C = u.onShow,
                            g = u.onHide,
                            p = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, at);
                        const h = (0, s.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, s.useMemo)(
                                () =>
                                    B ||
                                    ((u = 1) => {
                                        const e = new Error().stack;
                                        let t,
                                            n = R.invalid('resId');
                                        return (
                                            e &&
                                                ((t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (n = window.subViews[t].id)),
                                            { caller: t, stack: e, resId: n }
                                        );
                                    })().resId,
                                [B],
                            ),
                            v = (0, s.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (ot(t, F, { isMouseEvent: !0, on: !0, arguments: st(n) }, f),
                                    C && C(),
                                    (h.current.isVisible = !0));
                            }, [t, F, n, f, C]),
                            b = (0, s.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const u = h.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (h.current.timeoutId = 0)),
                                        ot(t, F, { on: !1 }, f),
                                        h.current.isVisible && g && g(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, F, f, g]),
                            w = (0, s.useCallback)((u) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(h.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        (0, s.useEffect)(() => {
                            const u = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', w, { capture: !0 }),
                                        u && window.clearTimeout(u);
                                }
                            );
                        }, []),
                            (0, s.useEffect)(() => {
                                !1 === D && b();
                            }, [D, b]),
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        window.removeEventListener('mouseleave', b), b();
                                    }
                                ),
                                [b],
                            );
                        return D
                            ? (0, s.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((h.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      r && r(u),
                                                      y && y(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              b(), null == a || a(e), null == u || u(e);
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              !1 === d && b(), null == i || i(e), null == u || u(e);
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              !1 === d && b(), null == o || o(e), null == u || u(e);
                                          })(e.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : e;
                        var y;
                    },
                    lt = 'Shadow_base_33',
                    ct = 'Shadow_shadowSlice_18',
                    Et = 'Shadow_shadowSlice__middle_53',
                    dt = (0, xu.Pi)(() => {
                        const u = Ae().model.computes.resources().images;
                        return o().createElement(
                            'div',
                            { className: lt },
                            o().createElement('img', { className: ct, src: u.shadowLeft }),
                            o().createElement('img', { className: l()(Et, ct), src: u.shadowMiddle }),
                            o().createElement('img', { className: ct, src: u.shadowRight }),
                        );
                    }),
                    At = 'Tab_base_e0',
                    Ft = 'Tab_image_a6',
                    mt = 'Tab_box_45',
                    Dt = 'Tab_base__hover_8d',
                    _t = 'Tab_base__active_b1',
                    Bt = 'Tab_title_ac',
                    Ct = 'Tab_shine_96',
                    gt = R.images.gui.maps.icons.quests.bonuses.s600x450,
                    pt = (0, xu.Pi)(({ category: u }) => {
                        const e = Ae(),
                            t = e.model,
                            n = e.controls,
                            r = t.computes.resources().images,
                            a = t.computes.dynamicResources().dynamicTexts,
                            i = t.activeCategory.get() === u,
                            c = t.sticky.get(),
                            E = (0, s.useState)(!1),
                            d = E[0],
                            A = E[1],
                            F = () => {
                                i || (Ne.hY.sound(We.infoPageTabClick), n.saveCategory(u));
                            },
                            m = () => {
                                i || Ne.hY.sound(We.infoPageTabHover), A(!0);
                            };
                        return o().createElement(
                            'div',
                            { className: l()(At, d && Dt, i && _t) },
                            o().createElement(
                                'div',
                                { className: Ft },
                                o().createElement('div', {
                                    className: mt,
                                    style: { backgroundImage: `url(${gt.$dyn(`lootBox_${u}`)})` },
                                    onMouseEnter: m,
                                    onMouseLeave: () => A(!1),
                                    onClick: F,
                                }),
                            ),
                            o().createElement('div', {
                                className: Ct,
                                style: { backgroundImage: `url(${r.tabShine})` },
                            }),
                            !c &&
                                o().createElement(
                                    'div',
                                    { className: Bt, onMouseEnter: m, onMouseLeave: () => A(!1), onClick: F },
                                    a.boxNames.dynOpt(u),
                                ),
                        );
                    }),
                    ht = 'Tabs_base_0f',
                    ft = 'Tabs_tabs_60',
                    vt = (0, xu.Pi)(({ className: u, forwardRef: e }) => {
                        const t = Ae().model.boxes.get();
                        return o().createElement(
                            'div',
                            { className: l()(ht, u), ref: e },
                            o().createElement(
                                'div',
                                { className: l()(ft) },
                                Ou(t, (u) =>
                                    o().createElement(
                                        it,
                                        {
                                            contentId: R.views.lobby.lootbox_system.tooltips.BoxTooltip('resId'),
                                            args: { boxCategory: u.category },
                                            key: u.category,
                                        },
                                        o().createElement('div', null, o().createElement(pt, { category: u.category })),
                                    ),
                                ),
                            ),
                            o().createElement(dt, null),
                        );
                    }),
                    bt = 'Divider_base_7b',
                    wt = 'Divider_base__first_e4',
                    yt = ({ isFirst: u = !1 }) => o().createElement('div', { className: l()(bt, u && wt) });
                let xt, St, Tt, Pt, kt, Rt, Lt, Mt;
                !(function (u) {
                    (u.Items = 'items'),
                        (u.Equipment = 'equipment'),
                        (u.Xp = 'xp'),
                        (u.XpFactor = 'xpFactor'),
                        (u.Blueprints = 'blueprints'),
                        (u.BlueprintsAny = 'blueprintsAny'),
                        (u.Goodies = 'goodies'),
                        (u.Berths = 'berths'),
                        (u.Slots = 'slots'),
                        (u.Tokens = 'tokens'),
                        (u.CrewSkins = 'crewSkins'),
                        (u.CrewBooks = 'crewBooks'),
                        (u.Customizations = 'customizations'),
                        (u.CreditsFactor = 'creditsFactor'),
                        (u.Tankman = 'tankman'),
                        (u.Tankwoman = 'tankwoman'),
                        (u.TankmenXp = 'tankmenXP'),
                        (u.TankmenXpFactor = 'tankmenXPFactor'),
                        (u.FreeXpFactor = 'freeXPFactor'),
                        (u.BattleToken = 'battleToken'),
                        (u.PremiumUniversal = 'premium_universal'),
                        (u.Gold = 'gold'),
                        (u.Credits = 'credits'),
                        (u.Crystal = 'crystal'),
                        (u.FreeXp = 'freeXP'),
                        (u.Premium = 'premium'),
                        (u.PremiumPlus = 'premium_plus'),
                        (u.BattlePassPoints = 'battlePassPoints'),
                        (u.BattlePassSelectToken = 'battlePassSelectToken'),
                        (u.StyleProgressToken = 'styleProgressToken'),
                        (u.TmanToken = 'tmanToken'),
                        (u.NaturalCover = 'naturalCover'),
                        (u.BpCoin = 'bpcoin'),
                        (u.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (u.BattleBadge = 'dossier_badge'),
                        (u.NewYearInvoice = 'newYearInvoice'),
                        (u.NewYearSlot = 'newYearSlot'),
                        (u.BonusX5 = 'battle_bonus_x5'),
                        (u.CrewBonusX3 = 'crew_bonus_x3'),
                        (u.Vehicles = 'vehicles'),
                        (u.EpicSelectToken = 'epicSelectToken'),
                        (u.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (u.DeluxeGift = 'deluxe_gift'),
                        (u.BattleBoosterGift = 'battleBooster_gift'),
                        (u.OptionalDevice = 'optionalDevice'),
                        (u.EquipCoin = 'equipCoin'),
                        (u.LootBox = 'lootBox'),
                        (u.BrCoin = 'brcoin');
                })(xt || (xt = {})),
                    (function (u) {
                        (u.Gold = 'gold'),
                            (u.Credits = 'credits'),
                            (u.Crystal = 'crystal'),
                            (u.Premium = 'premium'),
                            (u.PremiumPlus = 'premium_plus'),
                            (u.Vehicles = 'vehicles'),
                            (u.Customizations = 'customizations'),
                            (u.Blueprints = 'blueprints'),
                            (u.BlueprintsAny = 'blueprintsAny'),
                            (u.BlueprintsFinal = 'finalBlueprints'),
                            (u.Goodies = 'goodies'),
                            (u.CrewSkins = 'crewSkins'),
                            (u.Xp = 'xp'),
                            (u.XpFactor = 'xpFactor'),
                            (u.FreeXp = 'freeXP'),
                            (u.FreeXPFactor = 'freeXPFactor'),
                            (u.TankmenXP = 'tankmenXP'),
                            (u.TankmenXPFactor = 'tankmenXPFactor'),
                            (u.DailyXPFactor = 'dailyXPFactor'),
                            (u.CreditsFactor = 'creditsFactor'),
                            (u.Items = 'items'),
                            (u.StrBonus = 'strBonus'),
                            (u.Groups = 'groups'),
                            (u.Berths = 'berths'),
                            (u.Slots = 'slots'),
                            (u.Meta = 'meta'),
                            (u.Tokens = 'tokens'),
                            (u.Dossier = 'dossier'),
                            (u.OneOf = 'oneof'),
                            (u.PremiumUniversal = 'premium_universal'),
                            (u.BadgesGroup = 'badgesGroup'),
                            (u.Entitlements = 'entitlements'),
                            (u.RankedDailyBattles = 'rankedDailyBattles'),
                            (u.RankedBonusBattles = 'rankedBonusBattles'),
                            (u.BattlePassPoints = 'battlePassPoints'),
                            (u.BattleBadge = 'dossier_badge'),
                            (u.BattleAchievement = 'dossier_achievement'),
                            (u.EquipCoin = 'equipCoin');
                    })(St || (St = {})),
                    (function (u) {
                        (u.Big = 'big'),
                            (u.Small = 'small'),
                            (u.Mini = 'mini'),
                            (u.S600x450 = 's600x450'),
                            (u.S400x300 = 's400x300'),
                            (u.S296x222 = 's296x222'),
                            (u.S232x174 = 's232x174'),
                            (u.S180x135 = 's180x135'),
                            (u.S128x100 = 's128x100'),
                            (u.S80x80 = 's80x80'),
                            (u.S64x64 = 's64x64'),
                            (u.S48x48 = 's48x48');
                    })(Tt || (Tt = {})),
                    (function (u) {
                        (u.MULTI = 'multi'),
                            (u.CURRENCY = 'currency'),
                            (u.PREMIUM_PLUS = 'premium_plus'),
                            (u.NUMBER = 'number'),
                            (u.STRING = 'string');
                    })(Pt || (Pt = {})),
                    (function (u) {
                        (u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (u.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (u.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(kt || (kt = {})),
                    (function (u) {
                        u.BATTLE_BOOSTER = 'battleBooster';
                    })(Rt || (Rt = {})),
                    (function (u) {
                        (u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (u.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (u.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(Lt || (Lt = {})),
                    (function (u) {
                        (u[(u.Engraving = 0)] = 'Engraving'), (u[(u.Background = 1)] = 'Background');
                    })(Mt || (Mt = {}));
                var Nt = t(3633),
                    Ot = t(6845);
                const It = (u) => {
                        switch (u) {
                            case Tt.S600x450:
                                return 'c_600x450';
                            case Tt.S180x135:
                                return 'c_180x135';
                            default:
                                return u;
                        }
                    },
                    Ht = (u, e = Tt.S180x135, t = !1) => {
                        const n = t ? u.compensation : u,
                            r = n.name,
                            a = n.icon,
                            s = n.value,
                            o = u.id,
                            i = u.isRent;
                        switch (r) {
                            case 'vehicles':
                                return i
                                    ? `R.images.gui.maps.icons.quests.bonuses.${e}.vehicles_rent`
                                    : a
                                      ? `R.images.gui.maps.shop.vehicles.${It(e)}.${a}`
                                      : `R.images.gui.maps.icons.quests.bonuses.${e}.vehicles`;
                            case 'customizations': {
                                const u = ee(
                                    R.images,
                                    `R.images.gui.maps.icons.quests.bonuses.${e}.${a}${o ? '_' + o : ''}`,
                                );
                                return u || `R.images.gui.maps.icons.quests.bonuses.${e}.${a}`;
                            }
                            case 'basic':
                            case 'plus':
                            case 'premium':
                            case 'premium_plus':
                            case 'items':
                            case 'tokens':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${a}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                            case 'randomNationalBlueprint':
                                return `R.images.gui.maps.icons.blueprints.fragment.${e}.${a}`;
                            case 'crewBooks':
                            case 'randomNationalBrochure':
                            case 'randomNationalGuide':
                            case 'randomNationalCrewBook':
                                return `R.images.gui.maps.icons.crewBooks.books.${e}.${a}`;
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${It(e)}.${a}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${It(e)}.${a}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.credits`;
                            case 'crystal':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.crystal`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.freeXP`;
                            case 'tmanToken':
                            case 'battlePassSelectToken': {
                                const u = ee(R.images, `gui.maps.icons.quests.bonuses.${e}.${a}_${s}`);
                                return u || `R.images.gui.maps.icons.quests.bonuses.${e}.${a}`;
                            }
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.style_3d`;
                            case 'lootBox': {
                                const u = ee(R.images, `gui.maps.icons.quests.bonuses.${e}.lootBox_${a}`);
                                return u || `R.images.gui.maps.icons.quests.bonuses.${e}.lootBox_default`;
                            }
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${It(e)}.${a}`;
                        }
                    },
                    Gt = ['style', 'style_3d'],
                    Wt = (u) => {
                        const e = u.name,
                            t = u.icon;
                        switch (e) {
                            case xt.Vehicles:
                                return !0;
                            case xt.Customizations:
                                return Gt.includes(t);
                            default:
                                return !1;
                        }
                    };
                let $t;
                !(function (u) {
                    (u.Disable = 'disable'), (u.Active = 'active'), (u.Default = 'default');
                })($t || ($t = {}));
                const Ut = {
                        base: 'Title_base_21',
                        title: 'Title_title_15',
                        name: 'Title_name_7a',
                        name__aligned: 'Title_name__aligned_a7',
                        base__credits: 'Title_base__credits_b5',
                        base__equipCoin: 'Title_base__equipCoin_a4',
                        base__freeXP: 'Title_base__freeXP_1b',
                        base__crystal: 'Title_base__crystal_67',
                        base__gold: 'Title_base__gold_af',
                        base__premium_plus: 'Title_base__premium_plus_b9',
                        pluralText: 'Title_pluralText_b8',
                        label: 'Title_label_db',
                    },
                    zt = (0, xu.Pi)(({ reward: u, className: e }) => {
                        const t = Ae().model,
                            n = t.computes.resources().texts,
                            r = t.computes.dynamicResources().dynamicTexts,
                            a = u.name,
                            s = u.value,
                            i = u.label,
                            c = a === xt.PremiumPlus,
                            E = a === xt.TmanToken,
                            d = s
                                .split(' %(divider) ')
                                .sort((u, e) => Number(u) - Number(e))
                                .join(' %(divider) ');
                        return o().createElement(
                            'div',
                            { className: l()(Ut.base, Ut[`base__${a}`], e) },
                            s &&
                                !E &&
                                o().createElement(
                                    'div',
                                    { className: Ut.title },
                                    o().createElement(ve, {
                                        text: ((A = d), A.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&nbsp;')),
                                        binding: {
                                            divider: o().createElement(
                                                'span',
                                                { className: Ut.label },
                                                n.rewardsDivider,
                                            ),
                                        },
                                        classMix: l()(Ut.name, c && Ut.name__aligned),
                                    }),
                                    c &&
                                        o().createElement(
                                            'span',
                                            { className: Ut.pluralText },
                                            r.rewardsPremiumDay.plural('premiumDay', Number(s.split(' ').at(-1))),
                                        ),
                                ),
                            o().createElement(ve, { text: i, classMix: Ut.label }),
                        );
                        var A;
                    }),
                    qt = 'Reward_base_30',
                    Vt = 'Reward_rewardImage_eb',
                    jt = 'Reward_icon_96',
                    Yt = 'Reward_icon__semiTransparent_e8',
                    Xt = 'Reward_icon__hovered_70',
                    Zt = 'Reward_overlay_d4',
                    Kt = 'Reward_count_b2',
                    Qt = 'Reward_checkmark_51',
                    Jt = 'Reward_loupeButton_26',
                    un = 'Reward_loupeIcon_93',
                    en = 'Reward_tankName_0b',
                    tn = (0, xu.Pi)(({ reward: u }) => {
                        const e = Ae(),
                            t = e.model,
                            n = e.controls,
                            r = u.name,
                            a = u.id,
                            i = u.tooltipId,
                            c = u.tooltipContentId,
                            E = u.count,
                            d = u.overlayType,
                            A = u.styleID,
                            F = u.isInHangar,
                            m = u.icon,
                            D = t.computes.resources(),
                            _ = D.images,
                            B = D.texts,
                            C = (0, s.useState)(!1),
                            g = C[0],
                            p = C[1],
                            h = r === xt.Vehicles;
                        return o().createElement(
                            'div',
                            { className: qt },
                            o().createElement(
                                it,
                                { ignoreShowDelay: !0, contentId: Number(c), args: { tooltipId: i, boxCategory: m } },
                                o().createElement(
                                    'div',
                                    {
                                        className: Vt,
                                        onMouseEnter: () => {
                                            Wt(u) && p(!0);
                                        },
                                        onMouseLeave: () => p(!1),
                                    },
                                    o().createElement('div', {
                                        className: l()(jt, F && Yt, g && Xt),
                                        style: { backgroundImage: `url(${Ht(u)})` },
                                    }),
                                    d &&
                                        o().createElement('div', {
                                            className: Zt,
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${Tt.S180x135}.${d}_overlay)`,
                                            },
                                        }),
                                    F &&
                                        o().createElement('div', {
                                            className: Qt,
                                            style: { backgroundImage: `url(${_.checkmark})` },
                                        }),
                                    E > 1 &&
                                        o().createElement(
                                            'div',
                                            { className: Kt },
                                            zu(B.rewardsMultiplier, { count: E }),
                                        ),
                                    Wt(u) &&
                                        o().createElement(Nt.k, {
                                            className: Jt,
                                            icon: { img: _.previewIcon, className: un },
                                            onClick: () => {
                                                n.saveCategory(t.activeCategory.get()),
                                                    n.showPreview({ bonusType: r, bonusId: a || '', styleID: A });
                                            },
                                        }),
                                ),
                            ),
                            h
                                ? o().createElement(Ot.U, {
                                      reward: u,
                                      style: { nameHeight: '14rem' },
                                      className: en,
                                      usagePlace: Gu.qA.InfoPage,
                                  })
                                : o().createElement(zt, { reward: u }),
                        );
                    }),
                    nn = 'RewardBlock_base_ab',
                    rn = 'RewardBlock_rewardBlock_1b',
                    an = 'RewardBlock_dropProbability_44',
                    sn = 'RewardBlock_rewards_5c',
                    on = (0, xu.Pi)(({ probability: u, bonuses: e }) => {
                        const t = Ae().model.computes.resources().texts,
                            n = bu.Z5.getRealFormat(u, bu.Gr.WO_ZERO_DIGITS);
                        return o().createElement(
                            'div',
                            { className: nn },
                            o().createElement(
                                'div',
                                { className: rn },
                                o().createElement(
                                    'div',
                                    { className: an },
                                    o().createElement('div', null, zu(t.rewardsPercent, { probability: n })),
                                ),
                                o().createElement(
                                    'div',
                                    { className: sn },
                                    Ou(e, (u, e) => o().createElement(tn, { key: e, reward: u })),
                                ),
                            ),
                            o().createElement(yt, null),
                        );
                    }),
                    ln = { base: 'Rewards_base_bf', tabs__hide: 'Rewards_tabs__hide_90' },
                    cn = (0, xu.Pi)(({ scrollApi: u }) => {
                        const e = Ae(),
                            t = e.model,
                            n = e.controls,
                            r = t.activeCategory.get(),
                            a = t.computes.getSlots(r),
                            i = t.computes.displayTabs(),
                            c = t.sticky.get(),
                            E = (0, s.useRef)(null);
                        return (
                            (0, s.useEffect)(() => {
                                const e = (u) => {
                                    n.setSticky(Boolean(E.current && u.value.scrollPosition >= E.current.offsetTop));
                                };
                                return (
                                    u.events.on('change', e),
                                    () => {
                                        u.events.off('change', e);
                                    }
                                );
                            }, [n, u.events]),
                            o().createElement(
                                'div',
                                { className: ln.base },
                                i
                                    ? o().createElement(vt, {
                                          className: l()(ln.tabs, c && ln.tabs__hide),
                                          forwardRef: E,
                                      })
                                    : o().createElement(yt, { isFirst: !0 }),
                                o().createElement(
                                    'div',
                                    null,
                                    Ou(a, ({ probability: u, bonuses: e }, t) =>
                                        o().createElement(on, { key: t, probability: u, bonuses: e }),
                                    ),
                                ),
                            )
                        );
                    }),
                    En = (0, xu.Pi)(() => {
                        const u = Ae(),
                            e = u.model,
                            t = u.controls,
                            n = e.computes.resources(),
                            r = n.images,
                            a = n.texts,
                            s = eu(),
                            i = e.sticky.get();
                        var c;
                        return (
                            (c = t.close),
                            yu(vu.n.ESCAPE, c),
                            o().createElement(
                                'div',
                                { className: Fe, style: { backgroundImage: `url(${r.background})` } },
                                o().createElement(
                                    'div',
                                    { className: me, style: { maskImage: `url(${r.mask})` } },
                                    o().createElement(
                                        Cu.Vertical.Default,
                                        {
                                            api: s,
                                            className: De,
                                            barClassNames: { base: _e },
                                            scrollClassNames: { content: Be },
                                        },
                                        o().createElement(
                                            'div',
                                            { className: Ce },
                                            o().createElement(rt, null),
                                            o().createElement(cn, { scrollApi: s }),
                                            o().createElement(ke, null),
                                        ),
                                    ),
                                ),
                                o().createElement('div', { className: l()(ge, i && pe) }, o().createElement(vt, null)),
                                o().createElement(
                                    'div',
                                    { className: he },
                                    o().createElement(fu, {
                                        caption: a.backButton,
                                        type: 'back',
                                        side: 'left',
                                        onClick: t.close,
                                    }),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    h().render(
                        o().createElement(de, null, o().createElement(g, null, o().createElement(En, null))),
                        document.getElementById('root'),
                    );
                });
            },
            4037: (u, e, t) => {
                'use strict';
                t.d(e, { n: () => c });
                var n = t(3457),
                    r = t(2106),
                    a = t(6179),
                    s = t.n(a);
                const o = 'BigButtonIco_button_a6',
                    i = 'BigButtonIco_text_94',
                    l = 'BigButtonIco_icon_10',
                    c = ({ text: u, icon: e, onClick: t, soundHover: a = null }) =>
                        s().createElement(
                            n.u5,
                            { type: r.L.main, soundHover: a, onClick: t, mixClass: o },
                            s().createElement(
                                'span',
                                { className: i },
                                u,
                                s().createElement('span', { className: l, style: { backgroundImage: `url(${e})` } }),
                            ),
                        );
            },
            1579: (u, e, t) => {
                'use strict';
                t.d(e, { X: () => l });
                var n = t(3457),
                    r = t(2106),
                    a = t(6179),
                    s = t.n(a);
                const o = 'BigButton_button_76',
                    i = 'BigButton_text_35',
                    l = ({ text: u, onClick: e, soundHover: t = null }) =>
                        s().createElement(
                            n.u5,
                            { type: r.L.main, soundHover: t, onClick: e, mixClass: o },
                            s().createElement('span', { className: i }, u),
                        );
            },
            3633: (u, e, t) => {
                'use strict';
                t.d(e, { k: () => c });
                var n = t(6483),
                    r = t.n(n),
                    a = t(514),
                    s = t(6179),
                    o = t.n(s);
                const i = 'LoupeButton_base_bb',
                    l = 'LoupeButton_icon_07',
                    c = ({ onClick: u, icon: e, className: t = '' }) =>
                        o().createElement(
                            'div',
                            {
                                className: r()(i, t),
                                onMouseEnter: () => {
                                    a.hY.highlight();
                                },
                                onClick: u,
                            },
                            o().createElement('div', {
                                className: r()(l, e.className),
                                style: { backgroundImage: `url(${e.img})` },
                            }),
                        );
            },
            6845: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => d });
                var n = t(6483),
                    r = t.n(n),
                    a = t(5415),
                    s = t(9690),
                    o = t(6179),
                    i = t.n(o),
                    l = t(3905);
                const c = { base: 'TankName_base_14', type: 'TankName_type_49' },
                    E = (u, e, t) => ({
                        backgroundImage: `url(${`R.images.gui.maps.icons.vehicleTypes.${t ? 'c_48x48' : 'c_24x24'}.${`${u.replace('-', '_')}${e ? '_elite' : ''}`}`})`,
                    }),
                    d = ({ reward: u, style: e, className: t = '', usagePlace: n }) => {
                        const o = (0, a.GS)().mediaSize,
                            d = u.label,
                            A = u.level,
                            F = u.type,
                            m = u.isElite,
                            D = u.vehicleShortName;
                        return i().createElement(
                            'div',
                            { className: r()(c.base, t), style: { fontSize: e.nameHeight } },
                            void 0 !== A && i().createElement('div', { className: c.level }, (0, s.HG)(A)),
                            void 0 !== F &&
                                void 0 !== m &&
                                i().createElement('div', { className: c.type, style: E(F, m, o >= a.cJ.Medium) }),
                            i().createElement('div', null, n === l.qA.InfoPage ? D : d),
                        );
                    };
            },
            3905: (u, e, t) => {
                'use strict';
                t.d(e, { N7: () => r, _g: () => a, fR: () => n, qA: () => s });
                const n = ['gold', 'credits', 'premium_plus', 'freeXP', 'crystal', 'equipCoin'];
                let r, a, s;
                !(function (u) {
                    (u.EntryPoint = 'ENTRY_POINT'),
                        (u.InfoPage = 'INFO_PAGE'),
                        (u.Rewards = 'REWARDS'),
                        (u.HasBoxesView = 'HAS_BOXES_VIEW');
                })(r || (r = {})),
                    (function (u) {
                        (u.Videos = 'videos'),
                            (u.Images = 'images'),
                            (u.Texts = 'texts'),
                            (u.DynamicVideos = 'dynamicVideos'),
                            (u.DynamicImages = 'dynamicImages'),
                            (u.DynamicTexts = 'dynamicTexts');
                    })(a || (a = {})),
                    (function (u) {
                        u.InfoPage = 'infoPage';
                    })(s || (s = {}));
            },
            6880: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => n });
                const n = {
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
        (__webpack_require__.O = (u, e, t, n) => {
            if (!e) {
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [e, t, n] = deferred[i], a = !0, s = 0; s < e.length; s++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[s]))
                            ? e.splice(s--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(i--, 1);
                        var o = t();
                        void 0 !== o && (u = o);
                    }
                }
                return u;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [e, t, n];
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
        (__webpack_require__.j = 686),
        (() => {
            var u = { 686: 0, 8: 0, 212: 0, 79: 0, 35: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        r,
                        [a, s, o] = t,
                        i = 0;
                    if (a.some((e) => 0 !== u[e])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (e && e(t); i < a.length; i++)
                        (r = a[i]), __webpack_require__.o(u, r) && u[r] && u[r][0](), (u[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [866], () => __webpack_require__(3703));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
