(() => {
    'use strict';
    var e,
        t = {
            3495: (e, t, r) => {
                r.d(t, { Y: () => m });
                var i = r(3138),
                    n = r(6179),
                    a = r(1043),
                    l = r(5262);
                const u = i.O.client.getSize('rem'),
                    o = u.width,
                    d = u.height,
                    s = Object.assign({ width: o, height: d }, (0, l.T)(o, d, a.j)),
                    m = (0, n.createContext)(s);
            },
            1039: (e, t, r) => {
                var i = r(6179),
                    n = r.n(i),
                    a = r(6536),
                    l = r(3495),
                    u = r(1043),
                    o = r(5262),
                    d = r(3138);
                (0, i.memo)(({ children: e }) => {
                    const t = (0, i.useContext)(l.Y),
                        r = (0, i.useState)(t),
                        s = r[0],
                        m = r[1],
                        g = (0, i.useCallback)((e, t) => {
                            const r = d.O.view.pxToRem(e),
                                i = d.O.view.pxToRem(t);
                            m(Object.assign({ width: r, height: i }, (0, o.T)(r, i, u.j)));
                        }, []);
                    (0, a.Z)(() => {
                        engine.on('clientResized', g);
                    }),
                        (0, i.useEffect)(() => () => engine.off('clientResized', g), [g]);
                    const h = (0, i.useMemo)(() => Object.assign({}, s), [s]);
                    return n().createElement(l.Y.Provider, { value: h }, e);
                });
            },
            6010: (e, t, r) => {
                var i = r(6179),
                    n = r(7382),
                    a = r(3495);
                const l = ['children'],
                    u = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    i,
                                    n = {},
                                    a = Object.keys(e);
                                for (i = 0; i < a.length; i++) (r = a[i]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                                return n;
                            })(e, l);
                        const u = (0, i.useContext)(a.Y),
                            o = u.extraLarge,
                            d = u.large,
                            s = u.medium,
                            m = u.small,
                            g = u.extraSmall,
                            h = u.extraLargeWidth,
                            c = u.largeWidth,
                            v = u.mediumWidth,
                            w = u.smallWidth,
                            f = u.extraSmallWidth,
                            x = u.extraLargeHeight,
                            E = u.largeHeight,
                            S = u.mediumHeight,
                            p = u.smallHeight,
                            L = u.extraSmallHeight,
                            H = { extraLarge: x, large: E, medium: S, small: p, extraSmall: L };
                        if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                            if (r.extraLarge && o) return t;
                            if (r.large && d) return t;
                            if (r.medium && s) return t;
                            if (r.small && m) return t;
                            if (r.extraSmall && g) return t;
                        } else {
                            if (r.extraLargeWidth && h) return (0, n.H)(t, r, H);
                            if (r.largeWidth && c) return (0, n.H)(t, r, H);
                            if (r.mediumWidth && v) return (0, n.H)(t, r, H);
                            if (r.smallWidth && w) return (0, n.H)(t, r, H);
                            if (r.extraSmallWidth && f) return (0, n.H)(t, r, H);
                            if (
                                !(
                                    r.extraLargeWidth ||
                                    r.largeWidth ||
                                    r.mediumWidth ||
                                    r.smallWidth ||
                                    r.extraSmallWidth
                                )
                            ) {
                                if (r.extraLargeHeight && x) return t;
                                if (r.largeHeight && E) return t;
                                if (r.mediumHeight && S) return t;
                                if (r.smallHeight && p) return t;
                                if (r.extraSmallHeight && L) return t;
                            }
                        }
                        return null;
                    };
                (u.defaultProps = {
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
                    (0, i.memo)(u);
            },
            7382: (e, t, r) => {
                r.d(t, { H: () => i });
                const i = (e, t, r) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && r.extraLarge) ||
                          (t.largeHeight && r.large) ||
                          (t.mediumHeight && r.medium) ||
                          (t.smallHeight && r.small) ||
                          (t.extraSmallHeight && r.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, r) => {
                r.d(t, { YN: () => i.Y }), r(6010), r(1039);
                var i = r(3495);
            },
            1043: (e, t, r) => {
                r.d(t, { j: () => i });
                const i = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, r) => {
                var i;
                function n(e, t, r) {
                    const i = (function (e, t) {
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
                        a = Math.min(i, n);
                    return {
                        extraLarge: a === r.extraLarge.weight,
                        large: a === r.large.weight,
                        medium: a === r.medium.weight,
                        small: a === r.small.weight,
                        extraSmall: a === r.extraSmall.weight,
                        extraLargeWidth: i === r.extraLarge.weight,
                        largeWidth: i === r.large.weight,
                        mediumWidth: i === r.medium.weight,
                        smallWidth: i === r.small.weight,
                        extraSmallWidth: i === r.extraSmall.weight,
                        extraLargeHeight: n === r.extraLarge.weight,
                        largeHeight: n === r.large.weight,
                        mediumHeight: n === r.medium.weight,
                        smallHeight: n === r.small.weight,
                        extraSmallHeight: n === r.extraSmall.weight,
                    };
                }
                r.d(t, { T: () => n }),
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
                    })(i || (i = {}));
            },
            7515: (e, t, r) => {
                r.d(t, { u: () => i });
                const i = (e, t, r) => (r < e ? e : r > t ? t : r);
            },
            527: (e, t, r) => {
                r.r(t), r.d(t, { mouse: () => u, onResize: () => a });
                var i = r(2472),
                    n = r(1176);
                const a = (0, i.E)('clientResized'),
                    l = { down: (0, i.E)('mousedown'), up: (0, i.E)('mouseup'), move: (0, i.E)('mousemove') },
                    u = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, n.R)(!1);
                        }
                        function r() {
                            e.enabled && (0, n.R)(!0);
                        }
                        function i() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', r))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', r))
                                : (0, n.R)(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (t, r) => (
                                (t[r] = (function (t) {
                                    return (r) => {
                                        e.listeners += 1;
                                        let n = !0;
                                        const a = `mouse${t}`,
                                            u = l[t]((e) => r([e, 'outside']));
                                        function o(e) {
                                            r([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, o),
                                            i(),
                                            () => {
                                                n &&
                                                    (u(),
                                                    window.removeEventListener(a, o),
                                                    (e.listeners -= 1),
                                                    i(),
                                                    (n = !1));
                                            }
                                        );
                                    };
                                })(r)),
                                t
                            ),
                            {},
                        );
                        return Object.assign({}, a, {
                            disable() {
                                (e.enabled = !1), i();
                            },
                            enable() {
                                (e.enabled = !0), i();
                            },
                            enableOutside() {
                                e.enabled && (0, n.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, n.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, t, r) => {
                r.r(t),
                    r.d(t, {
                        events: () => i,
                        getMouseGlobalPosition: () => a,
                        getSize: () => n,
                        graphicsQuality: () => l,
                    });
                var i = r(527);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const l = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, r) => {
                function i(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                r.d(t, { R: () => i });
            },
            2472: (e, t, r) => {
                function i(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                r.d(t, { E: () => i });
            },
            3138: (e, t, r) => {
                r.d(t, { O: () => n });
                var i = r(5959);
                const n = { view: r(7641), client: i };
            },
            3722: (e, t, r) => {
                function i(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function n(e, t, r) {
                    return `url(${i(e, t, r)})`;
                }
                r.r(t), r.d(t, { getBgUrl: () => n, getTextureUrl: () => i });
            },
            6112: (e, t, r) => {
                r.d(t, { W: () => i });
                const i = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, r) => {
                r.d(t, { U: () => n });
                var i = r(2472);
                const n = {
                    onTextureFrozen: (0, i.E)('self.onTextureFrozen'),
                    onTextureReady: (0, i.E)('self.onTextureReady'),
                    onDomBuilt: (0, i.E)('self.onDomBuilt'),
                    onLoaded: (0, i.E)('self.onLoaded'),
                    onDisplayChanged: (0, i.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, i.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, i.E)('children.onAdded'),
                        onLoaded: (0, i.E)('children.onLoaded'),
                        onRemoved: (0, i.E)('children.onRemoved'),
                        onAttached: (0, i.E)('children.onAttached'),
                        onTextureReady: (0, i.E)('children.onTextureReady'),
                        onRequestPosition: (0, i.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, r) => {
                r.r(t),
                    r.d(t, {
                        addModelObserver: () => s,
                        addPreloadTexture: () => u,
                        children: () => i,
                        displayStatus: () => n.W,
                        displayStatusIs: () => y,
                        events: () => a.U,
                        extraSize: () => T,
                        forceTriggerMouseMove: () => H,
                        freezeTextureBeforeResize: () => v,
                        getBrowserTexturePath: () => d,
                        getDisplayStatus: () => b,
                        getScale: () => w,
                        getSize: () => g,
                        getViewGlobalPosition: () => c,
                        isEventHandled: () => L,
                        isFocused: () => S,
                        pxToRem: () => f,
                        remToPx: () => x,
                        resize: () => h,
                        sendEvent: () => l.qP,
                        setAnimateWindow: () => E,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => W,
                    });
                var i = r(3722),
                    n = r(6112),
                    a = r(6538),
                    l = r(8566);
                function u(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function d(e, t, r, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, i);
                }
                function s(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function g(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function h(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function c(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: x(t.x), y: x(t.y) };
                }
                function v() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function w() {
                    return viewEnv.getScale();
                }
                function f(e) {
                    return viewEnv.pxToRem(e);
                }
                function x(e) {
                    return viewEnv.remToPx(e);
                }
                function E(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function S() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function L() {
                    return viewEnv.isEventHandled();
                }
                function H() {
                    viewEnv.forceTriggerMouseMove();
                }
                function b() {
                    return viewEnv.getShowingStatus();
                }
                const y = Object.keys(n.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === n.W[t]), e),
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
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, r) => {
                r.d(t, { qP: () => a });
                const i = ['args'],
                    n = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                l = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        i,
                                        n = {},
                                        a = Object.keys(e);
                                    for (i = 0; i < a.length; i++) (r = a[i]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                                    return n;
                                })(t, i);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, l, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, l));
                        }
                        return viewEnv.handleViewEvent({ __Type: r, type: e });
                        var n;
                    },
                    a = {
                        close(e) {
                            n('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            n(64);
                        },
                        move(e) {
                            n(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            6536: (e, t, r) => {
                r.d(t, { Z: () => n });
                var i = r(6179);
                const n = (e) => {
                    const t = (0, i.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            5415: (e, t, r) => {
                r.d(t, { GS: () => d });
                var i = r(6179),
                    n = r(7739),
                    a = r(1043);
                let l, u, o;
                !(function (e) {
                    (e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = a.j.small.width)] = 'Small'),
                        (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                        (e[(e.Large = a.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge');
                })(l || (l = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.width)] = 'Small'),
                            (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                            (e[(e.Large = a.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge');
                    })(u || (u = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = a.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.height)] = 'Small'),
                            (e[(e.Medium = a.j.medium.height)] = 'Medium'),
                            (e[(e.Large = a.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.height)] = 'ExtraLarge');
                    })(o || (o = {}));
                const d = () => {
                    const e = (0, i.useContext)(n.YN),
                        t = e.width,
                        r = e.height,
                        a = ((e) => {
                            switch (!0) {
                                case e.extraLarge:
                                    return l.ExtraLarge;
                                case e.large:
                                    return l.Large;
                                case e.medium:
                                    return l.Medium;
                                case e.small:
                                    return l.Small;
                                case e.extraSmall:
                                    return l.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), l.ExtraSmall;
                            }
                        })(e),
                        d = ((e) => {
                            switch (!0) {
                                case e.extraLargeWidth:
                                    return u.ExtraLarge;
                                case e.largeWidth:
                                    return u.Large;
                                case e.mediumWidth:
                                    return u.Medium;
                                case e.smallWidth:
                                    return u.Small;
                                case e.extraSmallWidth:
                                    return u.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), u.ExtraSmall;
                            }
                        })(e),
                        s = ((e) => {
                            switch (!0) {
                                case e.extraLargeHeight:
                                    return o.ExtraLarge;
                                case e.largeHeight:
                                    return o.Large;
                                case e.mediumHeight:
                                    return o.Medium;
                                case e.smallHeight:
                                    return o.Small;
                                case e.extraSmallHeight:
                                    return o.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), o.ExtraSmall;
                            }
                        })(e);
                    return { mediaSize: a, mediaWidth: d, mediaHeight: s, remScreenWidth: t, remScreenHeight: r };
                };
            },
            2557: (e, t, r) => {
                var i = r(7515),
                    n = r(5415),
                    a = r(6179),
                    l = r.n(a);
                const u = ['src', 'className', 'autoplay', 'loop', 'setPlayer', 'onClick', 'videoWidth', 'videoHeight'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                l().memo(function (e) {
                    let t = e.src,
                        r = e.className,
                        d = e.autoplay,
                        s = e.loop,
                        m = void 0 !== s && s,
                        g = e.setPlayer,
                        h = e.onClick,
                        c = e.videoWidth,
                        v = e.videoHeight,
                        w = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                i,
                                n = {},
                                a = Object.keys(e);
                            for (i = 0; i < a.length; i++) (r = a[i]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                            return n;
                        })(e, u);
                    const f = (0, a.useRef)(null),
                        x = (0, n.GS)(),
                        E = x.remScreenWidth,
                        S = x.remScreenHeight,
                        p = (0, a.useMemo)(() => {
                            const e = ((e, t, r, i) => {
                                const n = e / t;
                                return r / i > n
                                    ? { width: r, height: Math.round(r / n) }
                                    : { width: Math.round(i * n), height: i };
                            })(c, v, E, S);
                            return e ? { width: `${e.width}rem`, height: `${e.height}rem` } : {};
                        }, [S, E, v, c]);
                    return (
                        (0, a.useEffect)(() => {
                            if (g && f.current) {
                                const e = () => {
                                        let e = 0;
                                        const r = (function (r) {
                                                let i = 0;
                                                return [
                                                    function r() {
                                                        (() => {
                                                            if (f.current) {
                                                                const r = f.current,
                                                                    i = r.currentTime,
                                                                    n = r.duration;
                                                                e !== i &&
                                                                    (t.changeTimeHandlers.forEach((e) =>
                                                                        e({ currentTime: i, duration: n }),
                                                                    ),
                                                                    (e = i));
                                                            }
                                                        })(),
                                                            (i = requestAnimationFrame(r));
                                                    },
                                                    function () {
                                                        cancelAnimationFrame(i);
                                                    },
                                                ];
                                            })(),
                                            i = r[0],
                                            n = r[1];
                                        return i(), n;
                                    },
                                    t = { changeTimeHandlers: [], changeTimeLoop: e() },
                                    r = (e) => (
                                        t.changeTimeHandlers.push(e),
                                        () => {
                                            const r = t.changeTimeHandlers,
                                                i = r.indexOf(e);
                                            i < 0
                                                ? console.warn(
                                                      "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                  )
                                                : r.splice(i, 1);
                                        }
                                    ),
                                    n = (e) => {
                                        f.current && (f.current.currentTime = (0, i.u)(0, f.current.duration, e));
                                    },
                                    a = () => {
                                        var e;
                                        return null == (e = f.current) ? void 0 : e.pause();
                                    },
                                    l = () => {
                                        a(), n(0);
                                    },
                                    u = () => {
                                        (t.changeTimeHandlers = []), null == t.changeTimeLoop || t.changeTimeLoop();
                                    };
                                return (
                                    g({
                                        on: (e, t) => {
                                            var r;
                                            return (
                                                null == (r = f.current) || r.addEventListener(e, t),
                                                () => {
                                                    var r;
                                                    return null == (r = f.current)
                                                        ? void 0
                                                        : r.removeEventListener(e, t);
                                                }
                                            );
                                        },
                                        off: (e, t) => {
                                            var r;
                                            return (
                                                null == (r = f.current) || r.removeEventListener(e, t),
                                                () => {
                                                    var r;
                                                    return null == (r = f.current)
                                                        ? void 0
                                                        : r.removeEventListener(e, t);
                                                }
                                            );
                                        },
                                        play: () => {
                                            var e;
                                            return null == (e = f.current) ? void 0 : e.play();
                                        },
                                        pause: a,
                                        stop: l,
                                        cleanup: u,
                                        getCurrentTime: () => {
                                            var e;
                                            return null == (e = f.current) ? void 0 : e.currentTime;
                                        },
                                        getDuration: () => {
                                            var e;
                                            return null == (e = f.current) ? void 0 : e.duration;
                                        },
                                        setCurrentTime: n,
                                        domRef: f.current,
                                        onChangeTime: r,
                                    }),
                                    () => {
                                        u(), g(void 0);
                                    }
                                );
                            }
                        }, [g]),
                        (0, a.useEffect)(() => {
                            if (f.current)
                                return (
                                    d && f.current.play(),
                                    () => {
                                        f.current && f.current.pause();
                                    }
                                );
                        }, []),
                        l().createElement(
                            'video',
                            o({ src: t, className: r, loop: m, ref: f, onClick: h, style: p }, w, {
                                onError: w.onError,
                            }),
                        )
                    );
                });
            },
        },
        r = {};
    function i(e) {
        var n = r[e];
        if (void 0 !== n) return n.exports;
        var a = (r[e] = { exports: {} });
        return t[e](a, a.exports, i), a.exports;
    }
    (i.m = t),
        (e = []),
        (i.O = (t, r, n, a) => {
            if (!r) {
                var l = 1 / 0;
                for (s = 0; s < e.length; s++) {
                    for (var [r, n, a] = e[s], u = !0, o = 0; o < r.length; o++)
                        (!1 & a || l >= a) && Object.keys(i.O).every((e) => i.O[e](r[o]))
                            ? r.splice(o--, 1)
                            : ((u = !1), a < l && (l = a));
                    if (u) {
                        e.splice(s--, 1);
                        var d = n();
                        void 0 !== d && (t = d);
                    }
                }
                return t;
            }
            a = a || 0;
            for (var s = e.length; s > 0 && e[s - 1][2] > a; s--) e[s] = e[s - 1];
            e[s] = [r, n, a];
        }),
        (i.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return i.d(t, { a: t }), t;
        }),
        (i.d = (e, t) => {
            for (var r in t) i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }),
        (i.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (i.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (i.j = 897),
        (() => {
            var e = { 897: 0 };
            i.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var n,
                        a,
                        [l, u, o] = r,
                        d = 0;
                    if (l.some((t) => 0 !== e[t])) {
                        for (n in u) i.o(u, n) && (i.m[n] = u[n]);
                        if (o) var s = o(i);
                    }
                    for (t && t(r); d < l.length; d++) (a = l[d]), i.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return i.O(s);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
        })();
    var n = i.O(void 0, [503], () => i(2557));
    n = i.O(n);
})();
