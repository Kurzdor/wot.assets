(() => {
    'use strict';
    var e,
        t = {
            3495: (e, t, i) => {
                i.d(t, { Y: () => s });
                var r = i(3138),
                    a = i(6179),
                    n = i(1043),
                    l = i(5262);
                const o = r.O.client.getSize('rem'),
                    d = o.width,
                    g = o.height,
                    u = Object.assign({ width: d, height: g }, (0, l.T)(d, g, n.j)),
                    s = (0, a.createContext)(u);
            },
            1039: (e, t, i) => {
                i(3138), i(6536), i(6179), i(3495), i(1043), i(5262);
            },
            6010: (e, t, i) => {
                var r = i(6179),
                    a = i(7382),
                    n = i(3495);
                const l = ['children'];
                const o = (e) => {
                    let t = e.children,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var i = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (t.indexOf(r) >= 0) continue;
                                    i[r] = e[r];
                                }
                            return i;
                        })(e, l);
                    const o = (0, r.useContext)(n.Y),
                        d = o.extraLarge,
                        g = o.large,
                        u = o.medium,
                        s = o.small,
                        m = o.extraSmall,
                        h = o.extraLargeWidth,
                        c = o.largeWidth,
                        v = o.mediumWidth,
                        w = o.smallWidth,
                        f = o.extraSmallWidth,
                        x = o.extraLargeHeight,
                        E = o.largeHeight,
                        S = o.mediumHeight,
                        y = o.smallHeight,
                        p = o.extraSmallHeight,
                        L = { extraLarge: x, large: E, medium: S, small: y, extraSmall: p };
                    if (i.extraLarge || i.large || i.medium || i.small || i.extraSmall) {
                        if (i.extraLarge && d) return t;
                        if (i.large && g) return t;
                        if (i.medium && u) return t;
                        if (i.small && s) return t;
                        if (i.extraSmall && m) return t;
                    } else {
                        if (i.extraLargeWidth && h) return (0, a.H)(t, i, L);
                        if (i.largeWidth && c) return (0, a.H)(t, i, L);
                        if (i.mediumWidth && v) return (0, a.H)(t, i, L);
                        if (i.smallWidth && w) return (0, a.H)(t, i, L);
                        if (i.extraSmallWidth && f) return (0, a.H)(t, i, L);
                        if (
                            !(i.extraLargeWidth || i.largeWidth || i.mediumWidth || i.smallWidth || i.extraSmallWidth)
                        ) {
                            if (i.extraLargeHeight && x) return t;
                            if (i.largeHeight && E) return t;
                            if (i.mediumHeight && S) return t;
                            if (i.smallHeight && y) return t;
                            if (i.extraSmallHeight && p) return t;
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
                (0, r.memo)(o);
            },
            7382: (e, t, i) => {
                i.d(t, { H: () => r });
                const r = (e, t, i) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && i.extraLarge) ||
                          (t.largeHeight && i.large) ||
                          (t.mediumHeight && i.medium) ||
                          (t.smallHeight && i.small) ||
                          (t.extraSmallHeight && i.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, i) => {
                i(6010), i(1039), i(3495);
            },
            1043: (e, t, i) => {
                i.d(t, { j: () => r });
                const r = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, i) => {
                var r;
                function a(e, t, i) {
                    const r = (function (e, t) {
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
                        })(e, i),
                        a = (function (e, t) {
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
                        })(t, i),
                        n = Math.min(r, a);
                    return {
                        extraLarge: n === i.extraLarge.weight,
                        large: n === i.large.weight,
                        medium: n === i.medium.weight,
                        small: n === i.small.weight,
                        extraSmall: n === i.extraSmall.weight,
                        extraLargeWidth: r === i.extraLarge.weight,
                        largeWidth: r === i.large.weight,
                        mediumWidth: r === i.medium.weight,
                        smallWidth: r === i.small.weight,
                        extraSmallWidth: r === i.extraSmall.weight,
                        extraLargeHeight: a === i.extraLarge.weight,
                        largeHeight: a === i.large.weight,
                        mediumHeight: a === i.medium.weight,
                        smallHeight: a === i.small.weight,
                        extraSmallHeight: a === i.extraSmall.weight,
                    };
                }
                i.d(t, { T: () => a }),
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
                    })(r || (r = {}));
            },
            527: (e, t, i) => {
                i.r(t),
                    i.d(t, { mouse: () => u, off: () => d, on: () => o, onResize: () => n, onScaleUpdated: () => l });
                var r = i(2472),
                    a = i(1176);
                const n = (0, r.E)('clientResized'),
                    l = (0, r.E)('self.onScaleUpdated'),
                    o = (e, t) => engine.on(e, t),
                    d = (e, t) => engine.off(e, t),
                    g = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const u = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function i() {
                        e.enabled && (0, a.R)(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', i))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', i))
                            : (0, a.R)(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (t, i) => (
                            (t[i] = (function (t) {
                                return (i) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const n = `mouse${t}`,
                                        l = g[t]((e) => i([e, 'outside']));
                                    function o(e) {
                                        i([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(n, o),
                                        r(),
                                        () => {
                                            a &&
                                                (l(),
                                                window.removeEventListener(n, o),
                                                (e.listeners -= 1),
                                                r(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(i)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, n, {
                        disable() {
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
                        },
                        enableOutside() {
                            e.enabled && (0, a.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, a.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, i) => {
                i.r(t),
                    i.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => l,
                        getSize: () => n,
                        graphicsQuality: () => o,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    });
                var r = i(527),
                    a = i(2493);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function l(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, i) => {
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                i.d(t, { R: () => r });
            },
            2493: (e, t, i) => {
                function r(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function a(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((i) => {
                        console.error(`setRTPC('${e}', '${t}'): `, i);
                    });
                }
                i.d(t, { E: () => a, G: () => r });
            },
            2472: (e, t, i) => {
                function r(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                i.d(t, { E: () => r });
            },
            3138: (e, t, i) => {
                i.d(t, { O: () => n });
                var r = i(5959),
                    a = i(514);
                const n = { view: i(7641), client: r, sound: a.ZP };
            },
            514: (e, t, i) => {
                i.d(t, { ZP: () => l });
                var r = i(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    n = Object.keys(a).reduce((e, t) => ((e[t] = () => (0, r.playSound)(a[t])), e), {}),
                    l = { play: Object.assign({}, n, { sound: r.playSound }), setRTPC: r.setRTPC };
            },
            3722: (e, t, i) => {
                function r(e, t, i = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, i);
                }
                function a(e, t, i) {
                    return `url(${r(e, t, i)})`;
                }
                i.r(t), i.d(t, { getBgUrl: () => a, getTextureUrl: () => r });
            },
            6112: (e, t, i) => {
                i.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, i) => {
                i.d(t, { U: () => a });
                var r = i(2472);
                const a = {
                    onTextureFrozen: (0, r.E)('self.onTextureFrozen'),
                    onTextureReady: (0, r.E)('self.onTextureReady'),
                    onDomBuilt: (0, r.E)('self.onDomBuilt'),
                    onLoaded: (0, r.E)('self.onLoaded'),
                    onDisplayChanged: (0, r.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, r.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, r.E)('children.onAdded'),
                        onLoaded: (0, r.E)('children.onLoaded'),
                        onRemoved: (0, r.E)('children.onRemoved'),
                        onAttached: (0, r.E)('children.onAttached'),
                        onTextureReady: (0, r.E)('children.onTextureReady'),
                        onRequestPosition: (0, r.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, i) => {
                i.r(t),
                    i.d(t, {
                        addModelObserver: () => s,
                        addPreloadTexture: () => d,
                        children: () => r,
                        displayStatus: () => a.W,
                        displayStatusIs: () => P,
                        events: () => n.U,
                        extraSize: () => T,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => w,
                        getBrowserTexturePath: () => u,
                        getDisplayStatus: () => H,
                        getScale: () => f,
                        getSize: () => h,
                        getViewGlobalPosition: () => v,
                        isEventHandled: () => L,
                        isFocused: () => y,
                        pxToRem: () => x,
                        remToPx: () => E,
                        resize: () => c,
                        sendEvent: () => l.qP,
                        setAnimateWindow: () => S,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => g,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => W,
                    });
                var r = i(3722),
                    a = i(6112),
                    n = i(6538),
                    l = i(8566);
                const o = 15;
                function d(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function g(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, o);
                }
                function u(e, t, i, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, i, r);
                }
                function s(e, t, i) {
                    return viewEnv.addDataChangedCallback(e, t, i);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, o);
                }
                function h(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function c(e, t, i = 'px') {
                    return 'rem' === i ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function v(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: E(t.x), y: E(t.y) };
                }
                function w() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function f() {
                    return viewEnv.getScale();
                }
                function x(e) {
                    return viewEnv.pxToRem(e);
                }
                function E(e) {
                    return viewEnv.remToPx(e);
                }
                function S(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function y() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function L() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function H() {
                    return viewEnv.getShowingStatus();
                }
                const P = Object.keys(a.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
                        {},
                    ),
                    T = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    W = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : n.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, i) => {
                i.d(t, { qP: () => g });
                const r = ['args'];
                const a = 2,
                    n = 16,
                    l = 32,
                    o = 64,
                    d = (e, t) => {
                        const i = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                l = (function (e, t) {
                                    if (null == e) return {};
                                    var i = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (t.indexOf(r) >= 0) continue;
                                            i[r] = e[r];
                                        }
                                    return i;
                                })(t, r);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: i, type: e }, l, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([e, t]) => {
                                                  const i = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: i, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: i, name: e, bool: t };
                                                      default:
                                                          return { __Type: i, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: i, type: e }, l));
                        }
                        return viewEnv.handleViewEvent({ __Type: i, type: e });
                        var a;
                    },
                    g = {
                        close(e) {
                            d('popover' === e ? a : l);
                        },
                        minimize() {
                            d(o);
                        },
                        move(e) {
                            d(n, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            6536: (e, t, i) => {
                i(6179);
            },
            5415: (e, t, i) => {
                i(6179), i(7739);
                var r = i(1043);
                let a, n, l;
                !(function (e) {
                    (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = r.j.small.width)] = 'Small'),
                        (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                        (e[(e.Large = r.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge');
                })(a || (a = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.width)] = 'Small'),
                            (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                            (e[(e.Large = r.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge');
                    })(n || (n = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = r.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.height)] = 'Small'),
                            (e[(e.Medium = r.j.medium.height)] = 'Medium'),
                            (e[(e.Large = r.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.height)] = 'ExtraLarge');
                    })(l || (l = {}));
            },
            9690: (e, t, i) => {
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            6845: (e, t, i) => {
                i(6483), i(5415), i(9690), i(6179), i(3905);
            },
            3905: (e, t, i) => {
                let r, a, n;
                !(function (e) {
                    (e.EntryPoint = 'ENTRY_POINT'),
                        (e.InfoPage = 'INFO_PAGE'),
                        (e.Rewards = 'REWARDS'),
                        (e.HasBoxesView = 'HAS_BOXES_VIEW');
                })(r || (r = {})),
                    (function (e) {
                        (e.Videos = 'videos'),
                            (e.Images = 'images'),
                            (e.Texts = 'texts'),
                            (e.DynamicVideos = 'dynamicVideos'),
                            (e.DynamicImages = 'dynamicImages'),
                            (e.DynamicTexts = 'dynamicTexts');
                    })(a || (a = {})),
                    (function (e) {
                        e.InfoPage = 'infoPage';
                    })(n || (n = {}));
            },
        },
        i = {};
    function r(e) {
        var a = i[e];
        if (void 0 !== a) return a.exports;
        var n = (i[e] = { exports: {} });
        return t[e](n, n.exports, r), n.exports;
    }
    (r.m = t),
        (e = []),
        (r.O = (t, i, a, n) => {
            if (!i) {
                var l = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [i, a, n] = e[u], o = !0, d = 0; d < i.length; d++)
                        (!1 & n || l >= n) && Object.keys(r.O).every((e) => r.O[e](i[d]))
                            ? i.splice(d--, 1)
                            : ((o = !1), n < l && (l = n));
                    if (o) {
                        e.splice(u--, 1);
                        var g = a();
                        void 0 !== g && (t = g);
                    }
                }
                return t;
            }
            n = n || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > n; u--) e[u] = e[u - 1];
            e[u] = [i, a, n];
        }),
        (r.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return r.d(t, { a: t }), t;
        }),
        (r.d = (e, t) => {
            for (var i in t) r.o(t, i) && !r.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
        }),
        (r.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (r.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (r.j = 35),
        (() => {
            var e = { 35: 0 };
            r.O.j = (t) => 0 === e[t];
            var t = (t, i) => {
                    var a,
                        n,
                        [l, o, d] = i,
                        g = 0;
                    if (l.some((t) => 0 !== e[t])) {
                        for (a in o) r.o(o, a) && (r.m[a] = o[a]);
                        if (d) var u = d(r);
                    }
                    for (t && t(i); g < l.length; g++) (n = l[g]), r.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return r.O(u);
                },
                i = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i)));
        })();
    var a = r.O(void 0, [866], () => r(6845));
    a = r.O(a);
})();
