(() => {
    'use strict';
    var e,
        t = {
            3495: (e, t, n) => {
                n.d(t, { Y: () => d });
                var a = n(3138),
                    r = n(6179),
                    i = n(1043),
                    o = n(5262);
                const l = a.O.client.getSize('rem'),
                    s = l.width,
                    c = l.height,
                    u = Object.assign({ width: s, height: c }, (0, o.T)(s, c, i.j)),
                    d = (0, r.createContext)(u);
            },
            1039: (e, t, n) => {
                n(3138), n(6536), n(6179), n(3495), n(1043), n(5262);
            },
            6010: (e, t, n) => {
                var a = n(6179),
                    r = n(7382),
                    i = n(3495);
                const o = ['children'];
                const l = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, o);
                    const l = (0, a.useContext)(i.Y),
                        s = l.extraLarge,
                        c = l.large,
                        u = l.medium,
                        d = l.small,
                        g = l.extraSmall,
                        m = l.extraLargeWidth,
                        h = l.largeWidth,
                        p = l.mediumWidth,
                        v = l.smallWidth,
                        f = l.extraSmallWidth,
                        b = l.extraLargeHeight,
                        w = l.largeHeight,
                        S = l.mediumHeight,
                        y = l.smallHeight,
                        x = l.extraSmallHeight,
                        O = { extraLarge: b, large: w, medium: S, small: y, extraSmall: x };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && s) return t;
                        if (n.large && c) return t;
                        if (n.medium && u) return t;
                        if (n.small && d) return t;
                        if (n.extraSmall && g) return t;
                    } else {
                        if (n.extraLargeWidth && m) return (0, r.H)(t, n, O);
                        if (n.largeWidth && h) return (0, r.H)(t, n, O);
                        if (n.mediumWidth && p) return (0, r.H)(t, n, O);
                        if (n.smallWidth && v) return (0, r.H)(t, n, O);
                        if (n.extraSmallWidth && f) return (0, r.H)(t, n, O);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && b) return t;
                            if (n.largeHeight && w) return t;
                            if (n.mediumHeight && S) return t;
                            if (n.smallHeight && y) return t;
                            if (n.extraSmallHeight && x) return t;
                        }
                    }
                    return null;
                };
                l.defaultProps = {
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
                (0, a.memo)(l);
            },
            7382: (e, t, n) => {
                n.d(t, { H: () => a });
                const a = (e, t, n) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && n.extraLarge) ||
                          (t.largeHeight && n.large) ||
                          (t.mediumHeight && n.medium) ||
                          (t.smallHeight && n.small) ||
                          (t.extraSmallHeight && n.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, n) => {
                n.d(t, { YN: () => a.Y });
                n(6010), n(1039);
                var a = n(3495);
            },
            1043: (e, t, n) => {
                n.d(t, { j: () => a });
                const a = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, n) => {
                var a;
                function r(e, t, n) {
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
                        })(e, n),
                        r = (function (e, t) {
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
                        })(t, n),
                        i = Math.min(a, r);
                    return {
                        extraLarge: i === n.extraLarge.weight,
                        large: i === n.large.weight,
                        medium: i === n.medium.weight,
                        small: i === n.small.weight,
                        extraSmall: i === n.extraSmall.weight,
                        extraLargeWidth: a === n.extraLarge.weight,
                        largeWidth: a === n.large.weight,
                        mediumWidth: a === n.medium.weight,
                        smallWidth: a === n.small.weight,
                        extraSmallWidth: a === n.extraSmall.weight,
                        extraLargeHeight: r === n.extraLarge.weight,
                        largeHeight: r === n.large.weight,
                        mediumHeight: r === n.medium.weight,
                        smallHeight: r === n.small.weight,
                        extraSmallHeight: r === n.extraSmall.weight,
                    };
                }
                n.d(t, { T: () => r }),
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
                    })(a || (a = {}));
            },
            8246: (e, t, n) => {
                n.d(t, { U: () => l });
                var a = n(3138);
                function r(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return i(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                          ? i(e, t)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function i(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const o = (e) => (0 === e ? window : window.subViews.get(e));
                function l({ initializer: e = !0, rootId: t = 0, getRoot: n = o, context: i = 'model' } = {}) {
                    const l = new Map();
                    function s(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? l.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, n) => {
                            n.forEach((t) => {
                                const n = l.get(t);
                                void 0 !== n && n(e);
                            });
                        });
                    });
                    const c = (e) => {
                        const a = n(t),
                            r = i.split('.').reduce((e, t) => e[t], a);
                        return 'string' != typeof e || 0 === e.length
                            ? r
                            : e.split('.').reduce((e, t) => {
                                  const n = e[t];
                                  return 'function' == typeof n ? n.bind(e) : n;
                              }, r);
                    };
                    return {
                        subscribe: (n, r) => {
                            const o = 'string' == typeof r ? `${i}.${r}` : i,
                                s = a.O.view.addModelObserver(o, t, !0);
                            return l.set(s, n), e && n(c(r)), s;
                        },
                        readByPath: c,
                        createCallback: (e, t) => {
                            const n = c(t);
                            return (...t) => {
                                n(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = c(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (var e, n = r(l.keys()); !(e = n()).done; ) {
                                s(e.value, t);
                            }
                        },
                        unsubscribe: s,
                    };
                }
            },
            3215: (e, t, n) => {
                n.d(t, { q: () => s });
                var a = n(4598),
                    r = n(9174),
                    i = n(6179),
                    o = n.n(i),
                    l = n(8246);
                const s = () => (e, t) => {
                    const n = (0, i.createContext)({});
                    return [
                        function ({ mode: s = 'real', options: c, children: u, mocks: d }) {
                            const g = (0, i.useRef)([]),
                                m = (n, i, o) => {
                                    var s;
                                    const c = l.U(i),
                                        u =
                                            'real' === n
                                                ? c
                                                : Object.assign({}, c, {
                                                      readByPath:
                                                          null != (s = null == o ? void 0 : o.getter) ? s : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === n ? (null == o ? void 0 : o.getter(e)) : u.readByPath(e),
                                        m = (e) => g.current.push(e),
                                        h = e({
                                            mode: n,
                                            readByPath: d,
                                            externalModel: u,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const i = null != t ? t : d(e),
                                                        o = r.LO.box(i, { equals: a.jv });
                                                    return (
                                                        'real' === n &&
                                                            u.subscribe(
                                                                (0, r.aD)((e) => o.set(e)),
                                                                e,
                                                            ),
                                                        o
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const i = null != t ? t : d(e),
                                                        o = r.LO.box(i, { equals: a.jv });
                                                    return (
                                                        'real' === n &&
                                                            u.subscribe(
                                                                (0, r.aD)((e) => o.set(e)),
                                                                e,
                                                            ),
                                                        o
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const a = d(t);
                                                    if (Array.isArray(e)) {
                                                        const i = e.reduce(
                                                            (e, t) => ((e[t] = r.LO.box(a[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === n &&
                                                                u.subscribe(
                                                                    (0, r.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            i[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                    {
                                                        const i = e,
                                                            o = Object.entries(i),
                                                            l = o.reduce(
                                                                (e, [t, n]) => ((e[n] = r.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === n &&
                                                                u.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        o.forEach(([t, n]) => {
                                                                            l[n].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            l
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: m,
                                        }),
                                        p = { mode: n, model: h, externalModel: u, cleanup: m };
                                    return {
                                        model: h,
                                        controls: 'mocks' === n && o ? o.controls(p) : t(p),
                                        externalModel: u,
                                        mode: n,
                                    };
                                },
                                h = (0, i.useRef)(!1),
                                p = (0, i.useState)(s),
                                v = p[0],
                                f = p[1],
                                b = (0, i.useState)(() => m(s, c, d)),
                                w = b[0],
                                S = b[1];
                            return (
                                (0, i.useEffect)(() => {
                                    h.current ? S(m(v, c, d)) : (h.current = !0);
                                }, [d, v, c]),
                                (0, i.useEffect)(() => {
                                    f(s);
                                }, [s]),
                                (0, i.useEffect)(
                                    () => () => {
                                        w.externalModel.dispose(), g.current.forEach((e) => e());
                                    },
                                    [w],
                                ),
                                o().createElement(n.Provider, { value: w }, u)
                            );
                        },
                        () => (0, i.useContext)(n),
                    ];
                };
            },
            527: (e, t, n) => {
                n.r(t),
                    n.d(t, { mouse: () => u, off: () => s, on: () => l, onResize: () => i, onScaleUpdated: () => o });
                var a = n(2472),
                    r = n(1176);
                const i = (0, a.E)('clientResized'),
                    o = (0, a.E)('self.onScaleUpdated'),
                    l = (e, t) => engine.on(e, t),
                    s = (e, t) => engine.off(e, t),
                    c = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const u = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, r.R)(!0);
                    }
                    function a() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', n))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', n))
                            : (0, r.R)(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const i = `mouse${t}`,
                                        o = c[t]((e) => n([e, 'outside']));
                                    function l(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, l),
                                        a(),
                                        () => {
                                            r &&
                                                (o(),
                                                window.removeEventListener(i, l),
                                                (e.listeners -= 1),
                                                a(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, i, {
                        disable() {
                            (e.enabled = !1), a();
                        },
                        enable() {
                            (e.enabled = !0), a();
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
            5959: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => o,
                        getSize: () => i,
                        graphicsQuality: () => l,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var a = n(527),
                    r = n(2493);
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const l = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, n) => {
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => a });
            },
            2493: (e, t, n) => {
                function a(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function r(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => r, G: () => a });
            },
            2472: (e, t, n) => {
                function a(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => a });
            },
            3138: (e, t, n) => {
                n.d(t, { O: () => i });
                var a = n(5959),
                    r = n(514);
                const i = { view: n(7641), client: a, sound: r.ZP };
            },
            514: (e, t, n) => {
                n.d(t, { ZP: () => o });
                var a = n(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, a.playSound)(r[t])), e), {}),
                    o = { play: Object.assign({}, i, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            3722: (e, t, n) => {
                function a(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function r(e, t, n) {
                    return `url(${a(e, t, n)})`;
                }
                n.r(t), n.d(t, { getBgUrl: () => r, getTextureUrl: () => a });
            },
            6112: (e, t, n) => {
                n.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                n.d(t, { U: () => r });
                var a = n(2472);
                const r = {
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
            7641: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => s,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => j,
                        events: () => i.U,
                        extraSize: () => C,
                        forceTriggerMouseMove: () => E,
                        freezeTextureBeforeResize: () => v,
                        getBrowserTexturePath: () => u,
                        getDisplayStatus: () => k,
                        getScale: () => f,
                        getSize: () => m,
                        getViewGlobalPosition: () => p,
                        isEventHandled: () => O,
                        isFocused: () => y,
                        pxToRem: () => b,
                        remToPx: () => w,
                        resize: () => h,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => S,
                        setEventHandled: () => x,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => g,
                        whenTutorialReady: () => P,
                    });
                var a = n(3722),
                    r = n(6112),
                    i = n(6538),
                    o = n(8566);
                const l = 15;
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, l);
                }
                function u(e, t, n, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, a);
                }
                function d(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function g(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, l);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function h(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function p(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: w(t.x), y: w(t.y) };
                }
                function v() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function f() {
                    return viewEnv.getScale();
                }
                function b(e) {
                    return viewEnv.pxToRem(e);
                }
                function w(e) {
                    return viewEnv.remToPx(e);
                }
                function S(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function y() {
                    return viewEnv.isFocused();
                }
                function x() {
                    return viewEnv.setEventHandled();
                }
                function O() {
                    return viewEnv.isEventHandled();
                }
                function E() {
                    viewEnv.forceTriggerMouseMove();
                }
                function k() {
                    return viewEnv.getShowingStatus();
                }
                const j = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    C = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    P = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                n.d(t, { qP: () => c });
                const a = ['args'];
                const r = 2,
                    i = 16,
                    o = 32,
                    l = 64,
                    s = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            n[a] = e[a];
                                        }
                                    return n;
                                })(t, a);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, o, {
                                          arguments:
                                              ((r = i),
                                              Object.entries(r).map(([e, t]) => {
                                                  const n = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: n, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: n, name: e, bool: t };
                                                      default:
                                                          return { __Type: n, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    c = {
                        close(e) {
                            s('popover' === e ? r : o);
                        },
                        minimize() {
                            s(l);
                        },
                        move(e) {
                            s(i, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, n) => {
                n.d(t, { jv: () => r, yR: () => a });
                function a(e) {
                    return e;
                }
                function r() {
                    return !1;
                }
                console.log;
            },
            6536: (e, t, n) => {
                n(6179);
            },
            9480: (e, t, n) => {
                function a(e, t) {
                    var n;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (n = e[t]) ? void 0 : n.value;
                }
                n.d(t, { U2: () => a, UI: () => o, dF: () => s, hX: () => l, u4: () => c });
                const r = a;
                function i(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function o(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, n, a) => t(null == e ? void 0 : e.value, n, a));
                }
                function l(e, t) {
                    if (Array.isArray(e)) return e.filter(t);
                    const n = [];
                    for (let r = 0; r < e.length; r++) {
                        var a;
                        const i = null == (a = e[r]) ? void 0 : a.value;
                        t(i, r, e) && n.push(i);
                    }
                    return n;
                }
                function s(e, t) {
                    for (let n = e.length - 1; n >= 0; n--) {
                        const a = i(e[n]);
                        if (t(a, n, e)) return a;
                    }
                }
                function c(e, t, n) {
                    if (Array.isArray(e)) return e.reduce(t, n);
                    let a = n;
                    for (let n = 0; n < e.length; n++) {
                        a = t(a, r(e, n), n, e);
                    }
                    return a;
                }
            },
            1922: (e, t, n) => {
                n.d(t, { GS: () => o, cJ: () => i });
                n(6483);
                var a = n(7739),
                    r = n(6179);
                n(1960);
                let i;
                !(function (e) {
                    (e.None = ''),
                        (e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge');
                })(i || (i = {}));
                const o = () => {
                    const e = (0, r.useContext)(a.YN);
                    return e.extraSmall
                        ? i.Tiny
                        : e.small
                          ? i.Small
                          : e.medium || 1080 === e.height
                            ? i.Medium
                            : e.large
                              ? i.Large
                              : e.extraLarge
                                ? i.Huge
                                : i.None;
                };
            },
            3522: (e, t, n) => {
                n.d(t, { _: () => d });
                var a = n(4598),
                    r = n(9480),
                    i = n(3946),
                    o = n(1922);
                const l = [
                        'qualityFuel',
                        'excellentFuel',
                        'ration',
                        'chocolate',
                        'cocacola',
                        'hotCoffee',
                        'ration_uk',
                        'ration_czech',
                        'ration_china',
                        'ration_japan',
                        'ration_poland',
                        'ration_sweden',
                        'ration_italy',
                    ],
                    s = [
                        'smallRepairkit',
                        'smallMedkit',
                        'handExtinguishers',
                        'largeRepairkit',
                        'builtinRepairkit',
                        'largeMedkit',
                        'autoExtinguishers',
                        ...l,
                    ],
                    c = [
                        'smallRepairkit',
                        'largeRepairkit',
                        'builtinRepairkit',
                        'smallMedkit',
                        'largeMedkit',
                        'handExtinguishers',
                        'autoExtinguishers',
                        ...l,
                    ],
                    u = (e) =>
                        r.UI(e, (e) =>
                            Object.assign({}, e, {
                                price: Object.assign({}, e.price, {
                                    price: r.UI(e.price.price, (e) => Object.assign({}, e)),
                                    defPrice: r.UI(e.price.defPrice, (e) => Object.assign({}, e)),
                                    discount: r.UI(e.price.discount, (e) => Object.assign({}, e)),
                                }),
                                oldStylePrice: Object.assign({}, e.price, {
                                    price: r.UI(e.price.price, (e) => ({ value: Object.assign({}, e) })),
                                    defPrice: r.UI(e.price.defPrice, (e) => ({ value: Object.assign({}, e) })),
                                    discount: r.UI(e.price.discount, (e) => ({ value: Object.assign({}, e) })),
                                }),
                            }),
                        ),
                    d = (e) => {
                        const t = {
                                root: e.object(),
                                tankSetup: e.object('tankSetup'),
                                vehicleInfo: e.object('vehicleInfo'),
                                lastSlotAction: e.object('lastSlotAction'),
                                optDevices: {
                                    slots: e.array('tankSetup.optDevicesSetup.slots'),
                                    setup: e.object('tankSetup.optDevicesSetup'),
                                    filter: e.array('tankSetup.optDevicesSetup.filter'),
                                    tabs: e.array('tankSetup.optDevicesSetup.tabs'),
                                    specialCurrency: e.array('tankSetup.optDevicesSetup.specialCurrency'),
                                },
                                consumables: {
                                    consumables: e.object('tankSetup.consumablesSetup'),
                                    slots: e.array('tankSetup.consumablesSetup.slots'),
                                },
                                boosters: {
                                    tabs: e.object('tankSetup.battleBoostersSetup.tabs'),
                                    slots: e.array('tankSetup.battleBoostersSetup.slots'),
                                },
                            },
                            n = (0, i.Om)(
                                () =>
                                    ((e) => {
                                        const t = u(e);
                                        return r.UI(t, (e) =>
                                            Object.assign({}, e, {
                                                bonuses: Object.assign({}, e.bonuses, {
                                                    items: r.UI(e.bonuses.items, (e) =>
                                                        Object.assign({}, e, {
                                                            values: r.UI(e.values, (e) => Object.assign({}, e)),
                                                        }),
                                                    ),
                                                }),
                                                specializations: Object.assign({}, e.specializations, {
                                                    specializations: r.UI(e.specializations.specializations, (e) =>
                                                        Object.assign({}, e),
                                                    ),
                                                }),
                                            }),
                                        );
                                    })(t.optDevices.slots.get()),
                                { equals: a.jv },
                            ),
                            l = (0, i.Om)(() => n().length),
                            d = (0, i.Om)(
                                (e) => {
                                    const t = r.U2(n(), e);
                                    if (!t) throw Error(`No optional device found with index: ${e}`);
                                    return t;
                                },
                                { equals: a.jv },
                            ),
                            g = (0, i.Om)((e) => d(e).bonuses.items.length, { equals: a.jv }),
                            m = (0, i.Om)(
                                (e, t) => {
                                    const n = d(e),
                                        a = r.U2(n.bonuses.items, t);
                                    if (!a) throw Error(`No bonus defPrice found with index: ${t}`);
                                    return Object.assign({}, a);
                                },
                                { equals: a.jv },
                            ),
                            h = (0, i.Om)((e) => {
                                const t = g(e);
                                return d(e).effect ? (1 === t ? 2 : 1) : 0;
                            }),
                            p = (0, i.Om)((e, t, n) => {
                                const a = g(e),
                                    r = h(e);
                                let i = r ? n - r : n,
                                    o = null;
                                for (let e = 0; e <= t; e++) {
                                    if (!i) return null;
                                    (o = a > 2 ? 1 : 2 === a ? (i > 2 ? 2 : 1) : i), (i -= o);
                                }
                                return o;
                            }),
                            v = (0, i.Om)(
                                (e, t) => {
                                    const n = m(e, t);
                                    return r.dF(n.values, ({ valueKey: e }) => e === n.localeName);
                                },
                                { equals: a.jv },
                            ),
                            f = (0, i.Om)(
                                (e, n) =>
                                    ((e, t, n) => {
                                        const a = n !== o.cJ.Tiny || t ? s : c,
                                            i = u(e),
                                            l = r.u4(
                                                i,
                                                (e, t) => {
                                                    const n = a.indexOf(t.itemName);
                                                    return (e[-1 === n ? Math.max(e.length, c.length) : n] = t), e;
                                                },
                                                [],
                                            );
                                        return r.hX(l, (e) => Boolean(e));
                                    })(t.consumables.slots.get(), e, n),
                                { equals: a.jv },
                            ),
                            b = (0, i.Om)((e, t) => f(e, t).length),
                            w = (0, i.Om)(
                                (e, t, n) => {
                                    const a = r.U2(f(t, n), e);
                                    if (!a) throw Error(`No consumable found with index: ${a}`);
                                    return Object.assign({}, a);
                                },
                                { equals: a.jv },
                            ),
                            S = (0, i.Om)(
                                () => {
                                    return (e = t.boosters.slots.get()), u(e);
                                    var e;
                                },
                                { equals: a.jv },
                            ),
                            y = (0, i.Om)(() => S().length),
                            x = (0, i.Om)(
                                (e) => {
                                    const t = r.U2(S(), e);
                                    if (!t) throw Error(`No battle booster found with index: ${e}`);
                                    return Object.assign({}, t);
                                },
                                { equals: a.jv },
                            );
                        return {
                            model: t,
                            computes: {
                                optDevices: {
                                    slotsLength: l,
                                    device: d,
                                    bonusesLength: g,
                                    bonus: m,
                                    bonusEffectLinesCount: h,
                                    bonusVisibleLinesCount: p,
                                    bonusValue: v,
                                },
                                consumables: { length: b, consumable: w },
                                boosters: { length: y, booster: x },
                            },
                        };
                    };
            },
            3028: (e, t, n) => {
                n.d(t, { t: () => c });
                var a = n(3215),
                    r = n(4598),
                    i = n(9480),
                    o = n(3946),
                    l = n(3522);
                const s = (0, a.q)()(
                        ({ observableModel: e }) => {
                            const t = (0, l._)(e),
                                n = t.model,
                                a = t.computes,
                                s = e.object('tankSetup.shellsSetup'),
                                c = e.array('tankSetup.shellsSetup.slots'),
                                u = e.object('ammunitionPanel'),
                                d = e.array('ammunitionPanel.sectionGroups'),
                                g = e.object('optionalDevicesAssistant'),
                                m = e.array('optionalDevicesAssistant.optionalDevicesAssistantItems'),
                                h = () => i.UI(m.get(), (e) => Object.assign({}, e, { items: i.UI(e.items, r.yR) })),
                                p = (0, o.Om)(() => h().sort((e, t) => t.popularity - e.popularity)),
                                v = (0, o.Om)(
                                    (e) => {
                                        const t = i.U2(c.get(), e);
                                        if (!t) throw Error(`No shell found with index: ${e}`);
                                        return Object.assign({}, t);
                                    },
                                    { equals: r.jv },
                                ),
                                f = (0, o.Om)(() => c.get().length),
                                b = (0, o.Om)(() => i.UI(c.get(), (e) => e.intCD), { equals: r.jv }),
                                w = (0, o.Om)((e) => v(e).specifications.length),
                                S = (0, o.Om)(
                                    (e, t) => {
                                        const n = v(e),
                                            a = i.U2(n.specifications, t);
                                        if (!a) throw Error(`No shell specification found with index: ${t}`);
                                        return Object.assign({}, a);
                                    },
                                    { equals: r.jv },
                                ),
                                y = (0, o.Om)(
                                    (e, t) => {
                                        const n = v(e),
                                            a = i.U2(n.price.price, t);
                                        if (!a) throw Error(`No shell price found with index: ${t}`);
                                        return Object.assign({}, a);
                                    },
                                    { equals: r.jv },
                                ),
                                x = (0, o.Om)(
                                    (e, t) => {
                                        const n = v(e),
                                            a = i.U2(n.price.defPrice, t);
                                        if (!a) throw Error(`No shell defPrice found with index: ${t}`);
                                        return Object.assign({}, a);
                                    },
                                    { equals: r.jv },
                                ),
                                O = (0, o.Om)((e) => v(e).price.price.length),
                                E = (0, o.Om)((e) => v(e).price.defPrice.length),
                                k = (0, o.Om)(() => {
                                    const e = u.get().selectedSlot,
                                        t = i.U2(d.get(), 0);
                                    if (!t) throw Error('No section group found');
                                    const n = i.U2(t.sections, 0);
                                    if (!n) throw Error('No section found');
                                    const a = i.U2(n.slots, e);
                                    if (!a) throw Error(`No slot found with index: ${e}`);
                                    const r = i.U2(a.specializations.specializations, 0);
                                    return null == r ? void 0 : r.name;
                                });
                            return Object.assign({}, e.primitives(['show', 'isReady']), n, {
                                shellsSetup: s,
                                shellsSlots: c,
                                ammunitionPanel: u,
                                sectionGroups: d,
                                optionalDevicesAssistant: g,
                                computes: Object.assign({}, a, {
                                    getOptionalDevicesAssistantItems: h,
                                    sortedOptionalDevicesAssistantItems: p,
                                    shells: {
                                        length: f,
                                        shell: v,
                                        specificationsLength: w,
                                        specification: S,
                                        price: y,
                                        priceLength: O,
                                        defPriceLength: E,
                                        defPrice: x,
                                        ids: b,
                                    },
                                    selectedSlotSpecialization: k,
                                }),
                            });
                        },
                        ({ externalModel: e }) => ({
                            onHintShown: e.createCallback(
                                () => ({ value: !0 }),
                                'optionalDevicesAssistant.onHintShown',
                            ),
                            close: e.createCallbackNoArgs('onClose'),
                            animationEnded: e.createCallbackNoArgs('onAnimationEnd'),
                            viewRendered: e.createCallbackNoArgs('onViewRendered'),
                            resized: e.createCallback((e) => Object.assign({}, e), 'onResized'),
                            filterChanged: e.createCallback(
                                (e) => Object.assign({}, e),
                                'tankSetup.optDevicesSetup.onFilterChanged',
                            ),
                            filterReset: e.createCallbackNoArgs('tankSetup.optDevicesSetup.onFilterReset'),
                            moreCurrencyGot: e.createCallbackNoArgs(
                                'tankSetup.optDevicesSetup.specialCurrency.onGetMoreCurrency',
                            ),
                            introPassed: e.createCallbackNoArgs('tankSetup.optDevicesSetup.onIntroPassed'),
                            optDevices: {
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.optDevicesSetup.onSlotAction',
                                ),
                                changeTab: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.optDevicesSetup.onTabChanged',
                                ),
                                confirmDeal: e.createCallbackNoArgs('tankSetup.optDevicesSetup.onDealConfirmed'),
                                cancelDeal: e.createCallbackNoArgs('tankSetup.optDevicesSetup.onDealCancelled'),
                                changeAutoRenewal: e.createCallback(
                                    (e) => ({ value: e }),
                                    'tankSetup.optDevicesSetup.onAutoRenewalChanged',
                                ),
                            },
                            shells: {
                                confirmDeal: e.createCallbackNoArgs('tankSetup.shellsSetup.onDealConfirmed'),
                                cancelDeal: e.createCallbackNoArgs('tankSetup.shellsSetup.onDealCancelled'),
                                changeAutoRenewal: e.createCallback(
                                    (e) => ({ value: e }),
                                    'tankSetup.shellsSetup.onAutoRenewalChanged',
                                ),
                                updateSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.shellsSetup.onShellUpdate',
                                ),
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.shellsSetup.onSlotAction',
                                ),
                            },
                            consumables: {
                                confirmDeal: e.createCallbackNoArgs('tankSetup.consumablesSetup.onDealConfirmed'),
                                cancelDeal: e.createCallbackNoArgs('tankSetup.consumablesSetup.onDealCancelled'),
                                changeAutoRenewal: e.createCallback(
                                    (e) => ({ value: e }),
                                    'tankSetup.consumablesSetup.onAutoRenewalChanged',
                                ),
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.consumablesSetup.onSlotAction',
                                ),
                            },
                            boosters: {
                                confirmDeal: e.createCallbackNoArgs('tankSetup.battleBoostersSetup.onDealConfirmed'),
                                cancelDeal: e.createCallbackNoArgs('tankSetup.battleBoostersSetup.onDealCancelled'),
                                changeAutoRenewal: e.createCallback(
                                    (e) => ({ value: e }),
                                    'tankSetup.battleBoostersSetup.onAutoRenewalChanged',
                                ),
                                changeTab: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.battleBoostersSetup.onTabChanged',
                                ),
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.battleBoostersSetup.onSlotAction',
                                ),
                            },
                        }),
                    ),
                    c = (s[0], s[1]);
            },
            5096: (e, t, n) => {
                var a = n(6483),
                    r = n.n(a),
                    i = n(3403),
                    o = n(6179),
                    l = n.n(o),
                    s = n(1922),
                    c = n(3028);
                const u = {
                    base: 'WeaponOccupancy_base_19',
                    base__incomplete: 'WeaponOccupancy_base__incomplete_e0',
                    tip: 'WeaponOccupancy_tip_18',
                    occupancy: 'WeaponOccupancy_occupancy_6e',
                    occupancy__incomplete: 'WeaponOccupancy_occupancy__incomplete_e1',
                    occupancy__large: 'WeaponOccupancy_occupancy__large_37',
                    occupancy__huge: 'WeaponOccupancy_occupancy__huge_a5',
                };
                (0, i.Pi)(({ isDetailed: e = !1, isShortened: t = !1 }) => {
                    const n = (0, s.GS)(),
                        a = (0, c.t)().model.shellsSetup.get(),
                        i = a.installedCount,
                        o = a.maxCount,
                        d = i === o,
                        g = R.strings.tank_setup.shells,
                        m = d ? g.ammunitionFull() : g.ammunitionIncomplete();
                    return l().createElement(
                        'div',
                        { className: r()(u.base, !d && u.base__incomplete) },
                        !t && l().createElement('div', { className: u.tip }, m),
                        e
                            ? `${i}/${o}`
                            : l().createElement(
                                  'div',
                                  { className: r()(u.occupancy, !d && u.occupancy__incomplete, u[`occupancy__${n}`]) },
                                  `${i}/${o}`,
                              ),
                    );
                });
            },
            1960: () => {},
        },
        n = {};
    function a(e) {
        var r = n[e];
        if (void 0 !== r) return r.exports;
        var i = (n[e] = { exports: {} });
        return t[e](i, i.exports, a), i.exports;
    }
    (a.m = t),
        (e = []),
        (a.O = (t, n, r, i) => {
            if (!n) {
                var o = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [n, r, i] = e[u], l = !0, s = 0; s < n.length; s++)
                        (!1 & i || o >= i) && Object.keys(a.O).every((e) => a.O[e](n[s]))
                            ? n.splice(s--, 1)
                            : ((l = !1), i < o && (o = i));
                    if (l) {
                        e.splice(u--, 1);
                        var c = r();
                        void 0 !== c && (t = c);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
            e[u] = [n, r, i];
        }),
        (a.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return a.d(t, { a: t }), t;
        }),
        (a.d = (e, t) => {
            for (var n in t) a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
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
        (a.j = 553),
        (() => {
            var e = { 553: 0 };
            a.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        i,
                        [o, l, s] = n,
                        c = 0;
                    if (o.some((t) => 0 !== e[t])) {
                        for (r in l) a.o(l, r) && (a.m[r] = l[r]);
                        if (s) var u = s(a);
                    }
                    for (t && t(n); c < o.length; c++) (i = o[c]), a.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return a.O(u);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var r = a.O(void 0, [727], () => a(5096));
    r = a.O(r);
})();
