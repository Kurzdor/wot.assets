(() => {
    var __webpack_modules__ = {
            3495: (e, t, r) => {
                'use strict';
                r.d(t, { Y: () => u });
                var a = r(3138),
                    n = r(6179),
                    i = r(1043),
                    s = r(5262);
                const o = a.O.client.getSize('rem'),
                    l = o.width,
                    c = o.height,
                    d = Object.assign({ width: l, height: c }, (0, s.T)(l, c, i.j)),
                    u = (0, n.createContext)(d);
            },
            1039: (e, t, r) => {
                'use strict';
                r.d(t, { Z: () => d });
                var a = r(3138),
                    n = r(6536),
                    i = r(6179),
                    s = r.n(i),
                    o = r(3495),
                    l = r(1043),
                    c = r(5262);
                const d = ({ children: e }) => {
                    const t = (0, i.useContext)(o.Y),
                        r = (0, i.useState)(t),
                        d = r[0],
                        u = r[1],
                        _ = (0, i.useCallback)((e, t) => {
                            const r = a.O.view.pxToRem(e),
                                n = a.O.view.pxToRem(t);
                            u(Object.assign({ width: r, height: n }, (0, c.T)(r, n, l.j)));
                        }, []),
                        h = (0, i.useCallback)(() => {
                            const e = a.O.client.getSize('px');
                            _(e.width, e.height);
                        }, [_]);
                    (0, n.Z)(() => {
                        a.O.client.events.on('clientResized', _), a.O.client.events.on('self.onScaleUpdated', h);
                    }),
                        (0, i.useEffect)(
                            () => () => {
                                a.O.client.events.off('clientResized', _),
                                    a.O.client.events.off('self.onScaleUpdated', h);
                            },
                            [_, h],
                        );
                    const m = (0, i.useMemo)(() => Object.assign({}, d), [d]);
                    return s().createElement(o.Y.Provider, { value: m }, e);
                };
            },
            6010: (e, t, r) => {
                'use strict';
                var a = r(6179),
                    n = r(7382),
                    i = r(3495);
                const s = ['children'];
                const o = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                a,
                                n = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                            return n;
                        })(e, s);
                    const o = (0, a.useContext)(i.Y),
                        l = o.extraLarge,
                        c = o.large,
                        d = o.medium,
                        u = o.small,
                        _ = o.extraSmall,
                        h = o.extraLargeWidth,
                        m = o.largeWidth,
                        g = o.mediumWidth,
                        v = o.smallWidth,
                        E = o.extraSmallWidth,
                        w = o.extraLargeHeight,
                        b = o.largeHeight,
                        f = o.mediumHeight,
                        p = o.smallHeight,
                        L = o.extraSmallHeight,
                        x = { extraLarge: w, large: b, medium: f, small: p, extraSmall: L };
                    if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                        if (r.extraLarge && l) return t;
                        if (r.large && c) return t;
                        if (r.medium && d) return t;
                        if (r.small && u) return t;
                        if (r.extraSmall && _) return t;
                    } else {
                        if (r.extraLargeWidth && h) return (0, n.H)(t, r, x);
                        if (r.largeWidth && m) return (0, n.H)(t, r, x);
                        if (r.mediumWidth && g) return (0, n.H)(t, r, x);
                        if (r.smallWidth && v) return (0, n.H)(t, r, x);
                        if (r.extraSmallWidth && E) return (0, n.H)(t, r, x);
                        if (
                            !(r.extraLargeWidth || r.largeWidth || r.mediumWidth || r.smallWidth || r.extraSmallWidth)
                        ) {
                            if (r.extraLargeHeight && w) return t;
                            if (r.largeHeight && b) return t;
                            if (r.mediumHeight && f) return t;
                            if (r.smallHeight && p) return t;
                            if (r.extraSmallHeight && L) return t;
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
                (0, a.memo)(o);
            },
            7382: (e, t, r) => {
                'use strict';
                r.d(t, { H: () => a });
                const a = (e, t, r) =>
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
                'use strict';
                r.d(t, { YN: () => n.Y, ZN: () => a.Z });
                r(6010);
                var a = r(1039),
                    n = r(3495);
            },
            1043: (e, t, r) => {
                'use strict';
                r.d(t, { j: () => a });
                const a = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, r) => {
                'use strict';
                var a;
                function n(e, t, r) {
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
                    })(a || (a = {}));
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
            8246: (e, t, r) => {
                'use strict';
                r.d(t, { U: () => o });
                var a = r(3138);
                function n(e, t) {
                    var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (r) return (r = r.call(e)).next.bind(r);
                    if (
                        Array.isArray(e) ||
                        (r = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return i(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === r && e.constructor && (r = e.constructor.name);
                            if ('Map' === r || 'Set' === r) return Array.from(e);
                            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return i(e, t);
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
                function i(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a;
                }
                const s = (e) => (0 === e ? window : window.subViews.get(e));
                function o({ initializer: e = !0, rootId: t = 0, getRoot: r = s, context: i = 'model' } = {}) {
                    const o = new Map();
                    function l(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? o.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, r) => {
                            r.forEach((t) => {
                                const r = o.get(t);
                                void 0 !== r && r(e);
                            });
                        });
                    });
                    const c = (e) => {
                        const a = r(t),
                            n = i.split('.').reduce((e, t) => e[t], a);
                        return 'string' != typeof e || 0 === e.length
                            ? n
                            : e.split('.').reduce((e, t) => {
                                  const r = e[t];
                                  return 'function' == typeof r ? r.bind(e) : r;
                              }, n);
                    };
                    return {
                        subscribe: (r, n) => {
                            const s = 'string' == typeof n ? `${i}.${n}` : i,
                                l = a.O.view.addModelObserver(s, t, !0);
                            return o.set(l, r), e && r(c(n)), l;
                        },
                        readByPath: c,
                        createCallback: (e, t) => {
                            const r = c(t);
                            return (...t) => {
                                r(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = c(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (var e, r = n(o.keys()); !(e = r()).done; ) {
                                l(e.value, t);
                            }
                        },
                        unsubscribe: l,
                    };
                }
            },
            3215: (e, t, r) => {
                'use strict';
                r.d(t, { q: () => l });
                var a = r(4598),
                    n = r(9174),
                    i = r(6179),
                    s = r.n(i),
                    o = r(8246);
                const l = () => (e, t) => {
                    const r = (0, i.createContext)({});
                    return [
                        function ({ mode: l = 'real', options: c, children: d, mocks: u }) {
                            const _ = (0, i.useRef)([]),
                                h = (r, i, s) => {
                                    var l;
                                    const c = o.U(i),
                                        d =
                                            'real' === r
                                                ? c
                                                : Object.assign({}, c, {
                                                      readByPath:
                                                          null != (l = null == s ? void 0 : s.getter) ? l : () => {},
                                                  }),
                                        u = (e) =>
                                            'mocks' === r ? (null == s ? void 0 : s.getter(e)) : d.readByPath(e),
                                        h = (e) => _.current.push(e),
                                        m = e({
                                            mode: r,
                                            readByPath: u,
                                            externalModel: d,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const i = null != t ? t : u(e),
                                                        s = n.LO.box(i, { equals: a.jv });
                                                    return (
                                                        'real' === r &&
                                                            d.subscribe(
                                                                (0, n.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const i = null != t ? t : u(e),
                                                        s = n.LO.box(i, { equals: a.jv });
                                                    return (
                                                        'real' === r &&
                                                            d.subscribe(
                                                                (0, n.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const a = u(t);
                                                    if (Array.isArray(e)) {
                                                        const i = e.reduce(
                                                            (e, t) => ((e[t] = n.LO.box(a[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === r &&
                                                                d.subscribe(
                                                                    (0, n.aD)((t) => {
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
                                                            s = Object.entries(i),
                                                            o = s.reduce(
                                                                (e, [t, r]) => ((e[r] = n.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === r &&
                                                                d.subscribe(
                                                                    (0, n.aD)((e) => {
                                                                        s.forEach(([t, r]) => {
                                                                            o[r].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: h,
                                        }),
                                        g = { mode: r, model: m, externalModel: d, cleanup: h };
                                    return {
                                        model: m,
                                        controls: 'mocks' === r && s ? s.controls(g) : t(g),
                                        externalModel: d,
                                        mode: r,
                                    };
                                },
                                m = (0, i.useRef)(!1),
                                g = (0, i.useState)(l),
                                v = g[0],
                                E = g[1],
                                w = (0, i.useState)(() => h(l, c, u)),
                                b = w[0],
                                f = w[1];
                            return (
                                (0, i.useEffect)(() => {
                                    m.current ? f(h(v, c, u)) : (m.current = !0);
                                }, [u, v, c]),
                                (0, i.useEffect)(() => {
                                    E(l);
                                }, [l]),
                                (0, i.useEffect)(
                                    () => () => {
                                        b.externalModel.dispose(), _.current.forEach((e) => e());
                                    },
                                    [b],
                                ),
                                s().createElement(r.Provider, { value: b }, d)
                            );
                        },
                        () => (0, i.useContext)(r),
                    ];
                };
            },
            7522: (e, t, r) => {
                'use strict';
                r.d(t, { Z: () => a });
                const a = {
                    linear: (e) => e,
                    easeInQuad: (e) => e * e,
                    easeOutQuad: (e) => e * (2 - e),
                    easeInOutQuad: (e) => (e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1),
                    easeInCubic: (e) => e * e * e,
                    easeOutCubic: (e) => --e * e * e + 1,
                    easeInOutCubic: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                    easeInQuart: (e) => e * e * e * e,
                    easeOutQuart: (e) => 1 - --e * e * e * e,
                    easeInOutQuart: (e) => (e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e),
                    easeInQuint: (e) => e * e * e * e * e,
                    easeOutQuint: (e) => 1 + --e * e * e * e * e,
                    easeInOutQuint: (e) => (e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e),
                    easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
                    easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
                    easeInOutCirc(e) {
                        const t = Math.sqrt,
                            r = Math.pow;
                        return e < 0.5 ? (1 - t(1 - r(2 * e, 2))) / 2 : (t(1 - r(-2 * e + 2, 2)) + 1) / 2;
                    },
                    easeOutBack(e) {
                        const t = 1.70158;
                        return 1 + 2.70158 * Math.pow(e - 1, 3) + t * Math.pow(e - 1, 2);
                    },
                    bezier: (e, t, r, a) => (n) =>
                        (1 - n) * (1 - n) * (1 - n) * e +
                        3 * (1 - n) * (1 - n) * n * t +
                        3 * (1 - n) * n * n * r +
                        n * n * n * a,
                };
            },
            527: (e, t, r) => {
                'use strict';
                r.r(t),
                    r.d(t, { mouse: () => d, off: () => l, on: () => o, onResize: () => i, onScaleUpdated: () => s });
                var a = r(2472),
                    n = r(1176);
                const i = (0, a.E)('clientResized'),
                    s = (0, a.E)('self.onScaleUpdated'),
                    o = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    c = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const d = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function r() {
                        e.enabled && (0, n.R)(!0);
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
                            : (0, n.R)(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (t, r) => (
                            (t[r] = (function (t) {
                                return (r) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const i = `mouse${t}`,
                                        s = c[t]((e) => r([e, 'outside']));
                                    function o(e) {
                                        r([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, o),
                                        a(),
                                        () => {
                                            n &&
                                                (s(),
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
                    return Object.assign({}, i, {
                        disable() {
                            (e.enabled = !1), a();
                        },
                        enable() {
                            (e.enabled = !0), a();
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
                'use strict';
                r.r(t),
                    r.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => s,
                        getSize: () => i,
                        graphicsQuality: () => o,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    });
                var a = r(527),
                    n = r(2493);
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, r) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                r.d(t, { R: () => a });
            },
            2493: (e, t, r) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function n(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((r) => {
                        console.error(`setRTPC('${e}', '${t}'): `, r);
                    });
                }
                r.d(t, { E: () => n, G: () => a });
            },
            2472: (e, t, r) => {
                'use strict';
                function a(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                r.d(t, { E: () => a });
            },
            3138: (e, t, r) => {
                'use strict';
                r.d(t, { O: () => i });
                var a = r(5959),
                    n = r(514);
                const i = { view: r(7641), client: a, sound: n.ZP };
            },
            514: (e, t, r) => {
                'use strict';
                r.d(t, { ZP: () => s });
                var a = r(5959);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(n).reduce((e, t) => ((e[t] = () => (0, a.playSound)(n[t])), e), {}),
                    s = { play: Object.assign({}, i, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            3722: (e, t, r) => {
                'use strict';
                function a(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function n(e, t, r) {
                    return `url(${a(e, t, r)})`;
                }
                r.r(t), r.d(t, { getBgUrl: () => n, getTextureUrl: () => a });
            },
            6112: (e, t, r) => {
                'use strict';
                r.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, r) => {
                'use strict';
                r.d(t, { U: () => n });
                var a = r(2472);
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
            7641: (e, t, r) => {
                'use strict';
                r.r(t),
                    r.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => o,
                        children: () => a,
                        displayStatus: () => n.W,
                        displayStatusIs: () => S,
                        events: () => i.U,
                        extraSize: () => O,
                        forceTriggerMouseMove: () => x,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => y,
                        getScale: () => v,
                        getSize: () => _,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => L,
                        isFocused: () => f,
                        pxToRem: () => E,
                        remToPx: () => w,
                        resize: () => h,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => u,
                        whenTutorialReady: () => T,
                    });
                var a = r(3722),
                    n = r(6112),
                    i = r(6538),
                    s = r(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, r, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, a);
                }
                function d(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function u(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function h(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function m(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: w(t.x), y: w(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function v() {
                    return viewEnv.getScale();
                }
                function E(e) {
                    return viewEnv.pxToRem(e);
                }
                function w(e) {
                    return viewEnv.remToPx(e);
                }
                function b(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function L() {
                    return viewEnv.isEventHandled();
                }
                function x() {
                    viewEnv.forceTriggerMouseMove();
                }
                function y() {
                    return viewEnv.getShowingStatus();
                }
                const S = Object.keys(n.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === n.W[t]), e),
                        {},
                    ),
                    O = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    T = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, r) => {
                'use strict';
                r.d(t, { qP: () => c });
                const a = ['args'];
                const n = 2,
                    i = 16,
                    s = 32,
                    o = 64,
                    l = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        a,
                                        n = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                                    return n;
                                })(t, a);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, s, {
                                          arguments:
                                              ((n = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: r, type: e });
                        var n;
                    },
                    c = {
                        close(e) {
                            l('popover' === e ? n : s);
                        },
                        minimize() {
                            l(o);
                        },
                        move(e) {
                            l(i, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, r) => {
                'use strict';
                function a() {}
                r.d(t, { ZT: () => a, jv: () => n });
                function n() {
                    return !1;
                }
                console.log;
            },
            6536: (e, t, r) => {
                'use strict';
                r.d(t, { Z: () => n });
                var a = r(6179);
                const n = (e) => {
                    const t = (0, a.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            5415: (e, t, r) => {
                'use strict';
                r.d(t, { Aq: () => l, GS: () => c, cJ: () => s, fd: () => o });
                var a = r(6179),
                    n = r(7739),
                    i = r(1043);
                let s, o, l;
                !(function (e) {
                    (e[(e.ExtraSmall = i.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = i.j.small.width)] = 'Small'),
                        (e[(e.Medium = i.j.medium.width)] = 'Medium'),
                        (e[(e.Large = i.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = i.j.extraLarge.width)] = 'ExtraLarge');
                })(s || (s = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = i.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = i.j.small.width)] = 'Small'),
                            (e[(e.Medium = i.j.medium.width)] = 'Medium'),
                            (e[(e.Large = i.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = i.j.extraLarge.width)] = 'ExtraLarge');
                    })(o || (o = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = i.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = i.j.small.height)] = 'Small'),
                            (e[(e.Medium = i.j.medium.height)] = 'Medium'),
                            (e[(e.Large = i.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = i.j.extraLarge.height)] = 'ExtraLarge');
                    })(l || (l = {}));
                const c = () => {
                    const e = (0, a.useContext)(n.YN),
                        t = e.width,
                        r = e.height,
                        i = ((e) => {
                            switch (!0) {
                                case e.extraLarge:
                                    return s.ExtraLarge;
                                case e.large:
                                    return s.Large;
                                case e.medium:
                                    return s.Medium;
                                case e.small:
                                    return s.Small;
                                case e.extraSmall:
                                    return s.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), s.ExtraSmall;
                            }
                        })(e),
                        c = ((e) => {
                            switch (!0) {
                                case e.extraLargeWidth:
                                    return o.ExtraLarge;
                                case e.largeWidth:
                                    return o.Large;
                                case e.mediumWidth:
                                    return o.Medium;
                                case e.smallWidth:
                                    return o.Small;
                                case e.extraSmallWidth:
                                    return o.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), o.ExtraSmall;
                            }
                        })(e),
                        d = ((e) => {
                            switch (!0) {
                                case e.extraLargeHeight:
                                    return l.ExtraLarge;
                                case e.largeHeight:
                                    return l.Large;
                                case e.mediumHeight:
                                    return l.Medium;
                                case e.smallHeight:
                                    return l.Small;
                                case e.extraSmallHeight:
                                    return l.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), l.ExtraSmall;
                            }
                        })(e);
                    return { mediaSize: i, mediaWidth: c, mediaHeight: d, remScreenWidth: t, remScreenHeight: r };
                };
            },
            5521: (e, t, r) => {
                'use strict';
                let a, n;
                r.d(t, { n: () => a }),
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
                            (e[(e.KEY_9 = 57)] = 'KEY_9');
                    })(a || (a = {})),
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
                    })(n || (n = {}));
            },
            1358: (e, t, r) => {
                'use strict';
                r.d(t, { Z: () => i });
                var a = r(3138);
                class n {
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
                        return window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, r = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = a.O.view.addModelObserver(e, r, n);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  r > 0 && (this._views[r] ? this._views[r].push(i) : (this._views[r] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
                        );
                    }
                    removeCallback(e, t = 0) {
                        let r = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((r = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            r || console.error("Can't remove callback by id:", e),
                            r
                        );
                    }
                    _emmitDataChanged(e, t, r) {
                        r.forEach((r) => {
                            const a = this._callbacks[r];
                            void 0 !== a && a(e, t);
                        });
                    }
                }
                n.__instance = void 0;
                const i = n;
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
            9916: (e, t, r) => {
                'use strict';
                r.d(t, { B3: () => l, Z5: () => s.Z5, B0: () => o, ry: () => E });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: r }) => {
                                    let a = e.target;
                                    do {
                                        if (a === t) return;
                                        a = a.parentNode;
                                    } while (a);
                                    r();
                                });
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const r = e,
                            a = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== r || t !== a)),
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
                var i = r(1358);
                var s = r(8613);
                let o;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(o || (o = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = r(5521),
                    h = r(3138);
                const m = ['args'];
                function g(e, t, r, a, n, i, s) {
                    try {
                        var o = e[i](s),
                            l = o.value;
                    } catch (e) {
                        return void r(e);
                    }
                    o.done ? t(l) : Promise.resolve(l).then(a, n);
                }
                const v = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    E = (function () {
                        var e,
                            t =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var t = this,
                                        r = arguments;
                                    return new Promise(function (a, n) {
                                        var i = e.apply(t, r);
                                        function s(e) {
                                            g(i, a, n, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            g(i, a, n, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    w = (e, t) => {
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
                                })(t, m);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, i, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([e, t]) => {
                                                  const r = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          r.number = t;
                                                          break;
                                                      case 'boolean':
                                                          r.bool = t;
                                                          break;
                                                      default:
                                                          r.string = t.toString();
                                                  }
                                                  return r;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: r, type: e });
                        var a;
                    },
                    b = () => w(o.CLOSE),
                    f = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var p = r(7572);
                const L = n.instance,
                    x = {
                        DataTracker: i.Z,
                        ViewModel: p.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: u,
                        makeGlobalBoundingBox: v,
                        sendMoveEvent: (e) => w(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: () => w(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, r = 0) => {
                            w(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: r, args: t });
                        },
                        sendShowPopOverEvent: (e, t, r, a, n = R.invalid('resId'), i) => {
                            const s = h.O.view.getViewGlobalPosition(),
                                l = r.getBoundingClientRect(),
                                c = l.x,
                                d = l.y,
                                u = l.width,
                                _ = l.height,
                                m = {
                                    x: h.O.view.pxToRem(c) + s.x,
                                    y: h.O.view.pxToRem(d) + s.y,
                                    width: h.O.view.pxToRem(u),
                                    height: h.O.view.pxToRem(_),
                                };
                            w(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: t,
                                bbox: v(m),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => f(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, b);
                        },
                        handleViewEvent: w,
                        onBindingsReady: E,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(t) {
                            const r = {};
                            if ('object' != typeof t) return t;
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const n = Object.prototype.toString.call(t[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = t[a];
                                        r[a] = [];
                                        for (let t = 0; t < n.length; t++) r[a].push({ value: e(n[t].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (r[a] = e(t[a]))
                                            : (r[a] = t[a]);
                                }
                            return r;
                        },
                        ClickOutsideManager: L,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = x;
            },
            8613: (e, t, r) => {
                'use strict';
                r.d(t, { Z5: () => a, cy: () => n });
                const a = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    n = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, r) => userLocale.getTimeFormat(e, t, void 0 === r || r),
                        getTimeString: (e, t, r) => userLocale.getTimeString(e, t, void 0 === r || r),
                    };
            },
            1988: (e, t, r) => {
                'use strict';
                var a = r(6179),
                    n = r.n(a),
                    i = r(493),
                    s = r.n(i),
                    o = r(3138),
                    l = r(5521);
                r(9916);
                const c = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function d(e = l.n.NONE, t = c, r = !1, n = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== l.n.NONE)
                            return (
                                window.addEventListener('keydown', a, r),
                                () => {
                                    window.removeEventListener('keydown', a, r);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (!n && o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), t(a), r && a.stopPropagation();
                            }
                        }
                    }, [t, e, r, n]);
                }
                var u = r(7739),
                    _ = r(6483),
                    h = r.n(_),
                    m = r(926),
                    g = r.n(m),
                    v = r(5415);
                const E = ['children', 'className'];
                function w() {
                    return (
                        (w =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                                }
                                return e;
                            }),
                        w.apply(this, arguments)
                    );
                }
                const b = {
                        [v.fd.ExtraSmall]: '',
                        [v.fd.Small]: g().SMALL_WIDTH,
                        [v.fd.Medium]: `${g().SMALL_WIDTH} ${g().MEDIUM_WIDTH}`,
                        [v.fd.Large]: `${g().SMALL_WIDTH} ${g().MEDIUM_WIDTH} ${g().LARGE_WIDTH}`,
                        [v.fd.ExtraLarge]:
                            `${g().SMALL_WIDTH} ${g().MEDIUM_WIDTH} ${g().LARGE_WIDTH} ${g().EXTRA_LARGE_WIDTH}`,
                    },
                    f = {
                        [v.Aq.ExtraSmall]: '',
                        [v.Aq.Small]: g().SMALL_HEIGHT,
                        [v.Aq.Medium]: `${g().SMALL_HEIGHT} ${g().MEDIUM_HEIGHT}`,
                        [v.Aq.Large]: `${g().SMALL_HEIGHT} ${g().MEDIUM_HEIGHT} ${g().LARGE_HEIGHT}`,
                        [v.Aq.ExtraLarge]:
                            `${g().SMALL_HEIGHT} ${g().MEDIUM_HEIGHT} ${g().LARGE_HEIGHT} ${g().EXTRA_LARGE_HEIGHT}`,
                    },
                    p = {
                        [v.cJ.ExtraSmall]: '',
                        [v.cJ.Small]: g().SMALL,
                        [v.cJ.Medium]: `${g().SMALL} ${g().MEDIUM}`,
                        [v.cJ.Large]: `${g().SMALL} ${g().MEDIUM} ${g().LARGE}`,
                        [v.cJ.ExtraLarge]: `${g().SMALL} ${g().MEDIUM} ${g().LARGE} ${g().EXTRA_LARGE}`,
                    },
                    L = (e) => {
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
                            })(e, E);
                        const i = (0, v.GS)(),
                            s = i.mediaWidth,
                            o = i.mediaHeight,
                            l = i.mediaSize;
                        return n().createElement('div', w({ className: h()(r, b[s], f[o], p[l]) }, a), t);
                    },
                    x = ['children'];
                const y = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                a,
                                n = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                            return n;
                        })(e, x);
                    return n().createElement(u.ZN, null, n().createElement(L, r, t));
                };
                var S = r(3403);
                let O;
                !(function (e) {
                    (e[(e.SUMMARY = 0)] = 'SUMMARY'), (e[(e.ACHIEVEMENTS = 1)] = 'ACHIEVEMENTS');
                })(O || (O = {}));
                var T = r(7522),
                    k = r(7030);
                const M = (0, a.lazy)(() => Promise.all([r.e(549), r.e(36), r.e(154)]).then(r.bind(r, 7910))),
                    P = (0, a.lazy)(() => Promise.all([r.e(549), r.e(36), r.e(805)]).then(r.bind(r, 9390))),
                    A = { [O.SUMMARY]: M, [O.ACHIEVEMENTS]: P },
                    R = n().memo(({ viewType: e }) => {
                        const t = A[e],
                            r = (0, k.useTransition)(e, {
                                from: { opacity: 0 },
                                enter: { opacity: 1 },
                                config: { duration: 500, easing: T.Z.easeInQuad },
                            });
                        return t
                            ? n().createElement(
                                  a.Suspense,
                                  { fallback: n().createElement('div', null) },
                                  r((e) => n().createElement(k.animated.div, { style: e }, n().createElement(t, null))),
                              )
                            : (console.error('Unknown view type for render', e), null);
                    }),
                    C = 'App_base_eb';
                const H = (0, r(3215).q)()(
                        ({ observableModel: e }) => {
                            const t = {
                                root: e.object(),
                                summaryModel: e.object('summaryModel'),
                                achievementsModel: e.object('achievementsModel'),
                            };
                            return Object.assign({}, t);
                        },
                        ({ externalModel: e }) => ({ close: e.createCallbackNoArgs('onClose') }),
                    ),
                    W = H[0],
                    I = H[1],
                    D = (0, S.Pi)(() => {
                        const e = I(),
                            t = e.model,
                            r = e.controls,
                            a = t.root.get(),
                            i = a.viewType,
                            s = a.isOtherPlayer;
                        var o;
                        return (
                            (o = r.close),
                            d(l.n.ESCAPE, o),
                            s
                                ? n().createElement('div', { className: C }, n().createElement(R, { viewType: i }))
                                : n().createElement(
                                      y,
                                      null,
                                      n().createElement('div', { className: C }, n().createElement(R, { viewType: i })),
                                  )
                        );
                    });
                engine.whenReady.then(() => {
                    s().render(n().createElement(W, null, n().createElement(D, null)), document.getElementById('root'));
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred,
        inProgress,
        dataWebpackPrefix,
        loadStylesheet,
        installedCssChunks;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var r = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](r, r.exports, __webpack_require__), r.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, r, a) => {
            if (!t) {
                var n = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, r, a] = deferred[l], i = !0, s = 0; s < t.length; s++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((i = !1), a < n && (n = a));
                    if (i) {
                        deferred.splice(l--, 1);
                        var o = r();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > a; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, r, a];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var r in t)
                __webpack_require__.o(t, r) &&
                    !__webpack_require__.o(e, r) &&
                    Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }),
        (__webpack_require__.f = {}),
        (__webpack_require__.e = (e) =>
            Promise.all(Object.keys(__webpack_require__.f).reduce((t, r) => (__webpack_require__.f[r](e, t), t), []))),
        (__webpack_require__.u = (e) =>
            36 === e
                ? 'chunks/lobby/9fe03d2224fbb366a6f5.js'
                : 154 === e
                  ? 'chunks/lobby/637c2be724677b7f929b.js'
                  : 805 === e
                    ? 'chunks/lobby/3b022902bdccd604e902.js'
                    : void 0),
        (__webpack_require__.miniCssF = (e) =>
            154 === e
                ? 'chunks/lobby/637c2be724677b7f929b.css'
                : 805 === e
                  ? 'chunks/lobby/3b022902bdccd604e902.css'
                  : 'lobby/achievements/AchievementsMainView/AchievementsMainView.css'),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (inProgress = {}),
        (dataWebpackPrefix = 'gameface:'),
        (__webpack_require__.l = (e, t, r, a) => {
            if (inProgress[e]) inProgress[e].push(t);
            else {
                var n, i;
                if (void 0 !== r)
                    for (var s = document.getElementsByTagName('script'), o = 0; o < s.length; o++) {
                        var l = s[o];
                        if (l.getAttribute('src') == e || l.getAttribute('data-webpack') == dataWebpackPrefix + r) {
                            n = l;
                            break;
                        }
                    }
                n ||
                    ((i = !0),
                    ((n = document.createElement('script')).charset = 'utf-8'),
                    (n.timeout = 120),
                    __webpack_require__.nc && n.setAttribute('nonce', __webpack_require__.nc),
                    n.setAttribute('data-webpack', dataWebpackPrefix + r),
                    (n.src = e)),
                    (inProgress[e] = [t]);
                var c = (t, r) => {
                        (n.onerror = n.onload = null), clearTimeout(d);
                        var a = inProgress[e];
                        if (
                            (delete inProgress[e],
                            n.parentNode && n.parentNode.removeChild(n),
                            a && a.forEach((e) => e(r)),
                            t)
                        )
                            return t(r);
                    },
                    d = setTimeout(c.bind(null, void 0, { type: 'timeout', target: n }), 12e4);
                (n.onerror = c.bind(null, n.onerror)),
                    (n.onload = c.bind(null, n.onload)),
                    i && document.head.appendChild(n);
            }
        }),
        (__webpack_require__.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 73),
        (() => {
            var e;
            __webpack_require__.g.importScripts && (e = __webpack_require__.g.location + '');
            var t = __webpack_require__.g.document;
            if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
                var r = t.getElementsByTagName('script');
                r.length && (e = r[r.length - 1].src);
            }
            if (!e) throw new Error('Automatic publicPath is not supported in this browser');
            (e = e
                .replace(/#.*$/, '')
                .replace(/\?.*$/, '')
                .replace(/\/[^\/]+$/, '/')),
                (__webpack_require__.p = e + '../../../');
        })(),
        (loadStylesheet = (e) =>
            new Promise((t, r) => {
                var a = __webpack_require__.miniCssF(e),
                    n = __webpack_require__.p + a;
                if (
                    ((e, t) => {
                        for (var r = document.getElementsByTagName('link'), a = 0; a < r.length; a++) {
                            var n = (s = r[a]).getAttribute('data-href') || s.getAttribute('href');
                            if ('stylesheet' === s.rel && (n === e || n === t)) return s;
                        }
                        var i = document.getElementsByTagName('style');
                        for (a = 0; a < i.length; a++) {
                            var s;
                            if ((n = (s = i[a]).getAttribute('data-href')) === e || n === t) return s;
                        }
                    })(a, n)
                )
                    return t();
                ((e, t, r, a) => {
                    var n = document.createElement('link');
                    (n.rel = 'stylesheet'),
                        (n.type = 'text/css'),
                        (n.onerror = n.onload =
                            (i) => {
                                if (((n.onerror = n.onload = null), 'load' === i.type)) r();
                                else {
                                    var s = i && ('load' === i.type ? 'missing' : i.type),
                                        o = (i && i.target && i.target.href) || t,
                                        l = new Error('Loading CSS chunk ' + e + ' failed.\n(' + o + ')');
                                    (l.code = 'CSS_CHUNK_LOAD_FAILED'),
                                        (l.type = s),
                                        (l.request = o),
                                        n.parentNode.removeChild(n),
                                        a(l);
                                }
                            }),
                        (n.href = t),
                        document.head.appendChild(n);
                })(e, n, t, r);
            })),
        (installedCssChunks = { 73: 0 }),
        (__webpack_require__.f.miniCss = (e, t) => {
            installedCssChunks[e]
                ? t.push(installedCssChunks[e])
                : 0 !== installedCssChunks[e] &&
                  { 154: 1, 805: 1 }[e] &&
                  t.push(
                      (installedCssChunks[e] = loadStylesheet(e).then(
                          () => {
                              installedCssChunks[e] = 0;
                          },
                          (t) => {
                              throw (delete installedCssChunks[e], t);
                          },
                      )),
                  );
        }),
        (() => {
            var e = { 73: 0 };
            (__webpack_require__.f.j = (t, r) => {
                var a = __webpack_require__.o(e, t) ? e[t] : void 0;
                if (0 !== a)
                    if (a) r.push(a[2]);
                    else {
                        var n = new Promise((r, n) => (a = e[t] = [r, n]));
                        r.push((a[2] = n));
                        var i = __webpack_require__.p + __webpack_require__.u(t),
                            s = new Error();
                        __webpack_require__.l(
                            i,
                            (r) => {
                                if (__webpack_require__.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                                    var n = r && ('load' === r.type ? 'missing' : r.type),
                                        i = r && r.target && r.target.src;
                                    (s.message = 'Loading chunk ' + t + ' failed.\n(' + n + ': ' + i + ')'),
                                        (s.name = 'ChunkLoadError'),
                                        (s.type = n),
                                        (s.request = i),
                                        a[1](s);
                                }
                            },
                            'chunk-' + t,
                            t,
                        );
                    }
            }),
                (__webpack_require__.O.j = (t) => 0 === e[t]);
            var t = (t, r) => {
                    var a,
                        n,
                        [i, s, o] = r,
                        l = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (o) var c = o(__webpack_require__);
                    }
                    for (t && t(r); l < i.length; l++)
                        (n = i[l]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(c);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [549], () => __webpack_require__(1988));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
