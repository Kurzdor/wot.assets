(() => {
    var __webpack_modules__ = {
            3495: (e, t, r) => {
                'use strict';
                r.d(t, { Y: () => u });
                var a = r(3138),
                    i = r(6179),
                    n = r(1043),
                    s = r(5262);
                const o = a.O.client.getSize('rem'),
                    l = o.width,
                    c = o.height,
                    d = Object.assign({ width: l, height: c }, (0, s.T)(l, c, n.j)),
                    u = (0, i.createContext)(d);
            },
            1039: (e, t, r) => {
                'use strict';
                r.d(t, { Z: () => d });
                var a = r(3138),
                    i = r(6536),
                    n = r(6179),
                    s = r.n(n),
                    o = r(3495),
                    l = r(1043),
                    c = r(5262);
                const d = ({ children: e }) => {
                    const t = (0, n.useContext)(o.Y),
                        r = (0, n.useState)(t),
                        d = r[0],
                        u = r[1],
                        _ = (0, n.useCallback)((e, t) => {
                            const r = a.O.view.pxToRem(e),
                                i = a.O.view.pxToRem(t);
                            u(Object.assign({ width: r, height: i }, (0, c.T)(r, i, l.j)));
                        }, []),
                        h = (0, n.useCallback)(() => {
                            const e = a.O.client.getSize('px');
                            _(e.width, e.height);
                        }, [_]);
                    (0, i.Z)(() => {
                        a.O.client.events.on('clientResized', _), a.O.client.events.on('self.onScaleUpdated', h);
                    }),
                        (0, n.useEffect)(
                            () => () => {
                                a.O.client.events.off('clientResized', _),
                                    a.O.client.events.off('self.onScaleUpdated', h);
                            },
                            [_, h],
                        );
                    const m = (0, n.useMemo)(() => Object.assign({}, d), [d]);
                    return s().createElement(o.Y.Provider, { value: m }, e);
                };
            },
            6010: (e, t, r) => {
                'use strict';
                var a = r(6179),
                    i = r(7382),
                    n = r(3495);
                const s = ['children'];
                const o = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    r[a] = e[a];
                                }
                            return r;
                        })(e, s);
                    const o = (0, a.useContext)(n.Y),
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
                        f = o.largeHeight,
                        b = o.mediumHeight,
                        p = o.smallHeight,
                        L = o.extraSmallHeight,
                        x = { extraLarge: w, large: f, medium: b, small: p, extraSmall: L };
                    if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                        if (r.extraLarge && l) return t;
                        if (r.large && c) return t;
                        if (r.medium && d) return t;
                        if (r.small && u) return t;
                        if (r.extraSmall && _) return t;
                    } else {
                        if (r.extraLargeWidth && h) return (0, i.H)(t, r, x);
                        if (r.largeWidth && m) return (0, i.H)(t, r, x);
                        if (r.mediumWidth && g) return (0, i.H)(t, r, x);
                        if (r.smallWidth && v) return (0, i.H)(t, r, x);
                        if (r.extraSmallWidth && E) return (0, i.H)(t, r, x);
                        if (
                            !(r.extraLargeWidth || r.largeWidth || r.mediumWidth || r.smallWidth || r.extraSmallWidth)
                        ) {
                            if (r.extraLargeHeight && w) return t;
                            if (r.largeHeight && f) return t;
                            if (r.mediumHeight && b) return t;
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
                r.d(t, { YN: () => i.Y, ZN: () => a.Z });
                r(6010);
                var a = r(1039),
                    i = r(3495);
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
                function i(e, t, r) {
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
                        i = (function (e, t) {
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
                        n = Math.min(a, i);
                    return {
                        extraLarge: n === r.extraLarge.weight,
                        large: n === r.large.weight,
                        medium: n === r.medium.weight,
                        small: n === r.small.weight,
                        extraSmall: n === r.extraSmall.weight,
                        extraLargeWidth: a === r.extraLarge.weight,
                        largeWidth: a === r.large.weight,
                        mediumWidth: a === r.medium.weight,
                        smallWidth: a === r.small.weight,
                        extraSmallWidth: a === r.extraSmall.weight,
                        extraLargeHeight: i === r.extraLarge.weight,
                        largeHeight: i === r.large.weight,
                        mediumHeight: i === r.medium.weight,
                        smallHeight: i === r.small.weight,
                        extraSmallHeight: i === r.extraSmall.weight,
                    };
                }
                r.d(t, { T: () => i }),
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
                function i(e, t) {
                    var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (r) return (r = r.call(e)).next.bind(r);
                    if (
                        Array.isArray(e) ||
                        (r = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return n(e, t);
                                var r = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === r && e.constructor && (r = e.constructor.name),
                                    'Map' === r || 'Set' === r
                                        ? Array.from(e)
                                        : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                                          ? n(e, t)
                                          : void 0
                                );
                            }
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
                function n(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = Array(t); r < t; r++) a[r] = e[r];
                    return a;
                }
                const s = (e) => (0 === e ? window : window.subViews.get(e));
                function o({ initializer: e = !0, rootId: t = 0, getRoot: r = s, context: n = 'model' } = {}) {
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
                            i = n.split('.').reduce((e, t) => e[t], a);
                        return 'string' != typeof e || 0 === e.length
                            ? i
                            : e.split('.').reduce((e, t) => {
                                  const r = e[t];
                                  return 'function' == typeof r ? r.bind(e) : r;
                              }, i);
                    };
                    return {
                        subscribe: (r, i) => {
                            const s = 'string' == typeof i ? `${n}.${i}` : n,
                                l = a.O.view.addModelObserver(s, t, !0);
                            return o.set(l, r), e && r(c(i)), l;
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
                            for (var e, r = i(o.keys()); !(e = r()).done; ) {
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
                    i = r(9174),
                    n = r(6179),
                    s = r.n(n),
                    o = r(8246);
                const l = () => (e, t) => {
                    const r = (0, n.createContext)({});
                    return [
                        function ({ mode: l = 'real', options: c, children: d, mocks: u }) {
                            const _ = (0, n.useRef)([]),
                                h = (r, n, s) => {
                                    var l;
                                    const c = o.U(n),
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
                                                    const n = null != t ? t : u(e),
                                                        s = i.LO.box(n, { equals: a.jv });
                                                    return (
                                                        'real' === r &&
                                                            d.subscribe(
                                                                (0, i.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const n = null != t ? t : u(e),
                                                        s = i.LO.box(n, { equals: a.jv });
                                                    return (
                                                        'real' === r &&
                                                            d.subscribe(
                                                                (0, i.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const a = u(t);
                                                    if (Array.isArray(e)) {
                                                        const n = e.reduce(
                                                            (e, t) => ((e[t] = i.LO.box(a[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === r &&
                                                                d.subscribe(
                                                                    (0, i.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            n[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            n
                                                        );
                                                    }
                                                    {
                                                        const n = e,
                                                            s = Object.entries(n),
                                                            o = s.reduce(
                                                                (e, [t, r]) => ((e[r] = i.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === r &&
                                                                d.subscribe(
                                                                    (0, i.aD)((e) => {
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
                                m = (0, n.useRef)(!1),
                                g = (0, n.useState)(l),
                                v = g[0],
                                E = g[1],
                                w = (0, n.useState)(() => h(l, c, u)),
                                f = w[0],
                                b = w[1];
                            return (
                                (0, n.useEffect)(() => {
                                    m.current ? b(h(v, c, u)) : (m.current = !0);
                                }, [u, v, c]),
                                (0, n.useEffect)(() => {
                                    E(l);
                                }, [l]),
                                (0, n.useEffect)(
                                    () => () => {
                                        f.externalModel.dispose(), _.current.forEach((e) => e());
                                    },
                                    [f],
                                ),
                                s().createElement(r.Provider, { value: f }, d)
                            );
                        },
                        () => (0, n.useContext)(r),
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
                    bezier: (e, t, r, a) => (i) =>
                        (1 - i) * (1 - i) * (1 - i) * e +
                        3 * (1 - i) * (1 - i) * i * t +
                        3 * (1 - i) * i * i * r +
                        i * i * i * a,
                };
            },
            527: (e, t, r) => {
                'use strict';
                r.r(t),
                    r.d(t, { mouse: () => d, off: () => l, on: () => o, onResize: () => n, onScaleUpdated: () => s });
                var a = r(2472),
                    i = r(1176);
                const n = (0, a.E)('clientResized'),
                    s = (0, a.E)('self.onScaleUpdated'),
                    o = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    c = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const d = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, i.R)(!1);
                    }
                    function r() {
                        e.enabled && (0, i.R)(!0);
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
                            : (0, i.R)(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (t, r) => (
                            (t[r] = (function (t) {
                                return (r) => {
                                    e.listeners += 1;
                                    let i = !0;
                                    const n = `mouse${t}`,
                                        s = c[t]((e) => r([e, 'outside']));
                                    function o(e) {
                                        r([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(n, o),
                                        a(),
                                        () => {
                                            i &&
                                                (s(),
                                                window.removeEventListener(n, o),
                                                (e.listeners -= 1),
                                                a(),
                                                (i = !1));
                                        }
                                    );
                                };
                            })(r)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, n, {
                        disable() {
                            (e.enabled = !1), a();
                        },
                        enable() {
                            (e.enabled = !0), a();
                        },
                        enableOutside() {
                            e.enabled && (0, i.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, i.R)(!1);
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
                        getSize: () => n,
                        graphicsQuality: () => o,
                        playSound: () => i.G,
                        setRTPC: () => i.E,
                    });
                var a = r(527),
                    i = r(2493);
                function n(e = 'px') {
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
                function i(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((r) => {
                        console.error(`setRTPC('${e}', '${t}'): `, r);
                    });
                }
                r.d(t, { E: () => i, G: () => a });
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
                r.d(t, { O: () => n });
                var a = r(5959),
                    i = r(514);
                const n = { view: r(7641), client: a, sound: i.ZP };
            },
            514: (e, t, r) => {
                'use strict';
                r.d(t, { ZP: () => s });
                var a = r(5959);
                const i = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    n = Object.keys(i).reduce((e, t) => ((e[t] = () => (0, a.playSound)(i[t])), e), {}),
                    s = { play: Object.assign({}, n, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            3722: (e, t, r) => {
                'use strict';
                function a(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function i(e, t, r) {
                    return `url(${a(e, t, r)})`;
                }
                r.r(t), r.d(t, { getBgUrl: () => i, getTextureUrl: () => a });
            },
            6112: (e, t, r) => {
                'use strict';
                r.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, r) => {
                'use strict';
                r.d(t, { U: () => i });
                var a = r(2472);
                const i = {
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
                        addModelObserver: () => u,
                        addPreloadTexture: () => l,
                        children: () => a,
                        displayStatus: () => i.W,
                        displayStatusIs: () => O,
                        events: () => n.U,
                        extraSize: () => T,
                        forceTriggerMouseMove: () => S,
                        freezeTextureBeforeResize: () => v,
                        getBrowserTexturePath: () => d,
                        getDisplayStatus: () => y,
                        getScale: () => E,
                        getSize: () => h,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => x,
                        isFocused: () => p,
                        pxToRem: () => w,
                        remToPx: () => f,
                        resize: () => m,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => L,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => k,
                    });
                var a = r(3722),
                    i = r(6112),
                    n = r(6538),
                    s = r(8566);
                const o = 15;
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, o);
                }
                function d(e, t, r, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, a);
                }
                function u(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, o);
                }
                function h(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: f(t.x), y: f(t.y) };
                }
                function v() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function E() {
                    return viewEnv.getScale();
                }
                function w(e) {
                    return viewEnv.pxToRem(e);
                }
                function f(e) {
                    return viewEnv.remToPx(e);
                }
                function b(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function L() {
                    return viewEnv.setEventHandled();
                }
                function x() {
                    return viewEnv.isEventHandled();
                }
                function S() {
                    viewEnv.forceTriggerMouseMove();
                }
                function y() {
                    return viewEnv.getShowingStatus();
                }
                const O = Object.keys(i.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === i.W[t]), e),
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
                    k = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : n.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, r) => {
                'use strict';
                r.d(t, { qP: () => c });
                const a = ['args'];
                const i = 2,
                    n = 16,
                    s = 32,
                    o = 64,
                    l = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var r = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            r[a] = e[a];
                                        }
                                    return r;
                                })(t, a);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, s, {
                                          arguments:
                                              ((i = n),
                                              Object.entries(i).map(([e, t]) => {
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
                        var i;
                    },
                    c = {
                        close(e) {
                            l('popover' === e ? i : s);
                        },
                        minimize() {
                            l(o);
                        },
                        move(e) {
                            l(n, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, r) => {
                'use strict';
                function a() {}
                r.d(t, { ZT: () => a, jv: () => i });
                function i() {
                    return !1;
                }
                console.log;
            },
            6536: (e, t, r) => {
                'use strict';
                r.d(t, { Z: () => i });
                var a = r(6179);
                const i = (e) => {
                    const t = (0, a.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            5415: (e, t, r) => {
                'use strict';
                r.d(t, { Aq: () => l, GS: () => c, cJ: () => s, fd: () => o });
                var a = r(6179),
                    i = r(7739),
                    n = r(1043);
                let s, o, l;
                !(function (e) {
                    (e[(e.ExtraSmall = n.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = n.j.small.width)] = 'Small'),
                        (e[(e.Medium = n.j.medium.width)] = 'Medium'),
                        (e[(e.Large = n.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = n.j.extraLarge.width)] = 'ExtraLarge');
                })(s || (s = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = n.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = n.j.small.width)] = 'Small'),
                            (e[(e.Medium = n.j.medium.width)] = 'Medium'),
                            (e[(e.Large = n.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = n.j.extraLarge.width)] = 'ExtraLarge');
                    })(o || (o = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = n.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = n.j.small.height)] = 'Small'),
                            (e[(e.Medium = n.j.medium.height)] = 'Medium'),
                            (e[(e.Large = n.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = n.j.extraLarge.height)] = 'ExtraLarge');
                    })(l || (l = {}));
                const c = () => {
                    const e = (0, a.useContext)(i.YN),
                        t = e.width,
                        r = e.height,
                        n = ((e) => {
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
                    return { mediaSize: n, mediaWidth: c, mediaHeight: d, remScreenWidth: t, remScreenHeight: r };
                };
            },
            5521: (e, t, r) => {
                'use strict';
                let a, i;
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
                    })(i || (i = {}));
            },
            1358: (e, t, r) => {
                'use strict';
                r.d(t, { Z: () => n });
                var a = r(3138);
                class i {
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
                        return window.__dataTracker || (window.__dataTracker = new i()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, r = 0, i = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const n = a.O.view.addModelObserver(e, r, i);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = t),
                                  r > 0 && (this._views[r] ? this._views[r].push(n) : (this._views[r] = [n])))
                                : console.error("Can't add callback for model:", e),
                            n
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
                i.__instance = void 0;
                const n = i;
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
                const i = a;
                var n = r(1358);
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
                function g(e, t, r, a, i, n, s) {
                    try {
                        var o = e[n](s),
                            l = o.value;
                    } catch (e) {
                        return void r(e);
                    }
                    o.done ? t(l) : Promise.resolve(l).then(a, i);
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
                                    return new Promise(function (a, i) {
                                        var n = e.apply(t, r);
                                        function s(e) {
                                            g(n, a, i, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            g(n, a, i, s, o, 'throw', e);
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
                            const i = t.args,
                                n = (function (e, t) {
                                    if (null == e) return {};
                                    var r = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            r[a] = e[a];
                                        }
                                    return r;
                                })(t, m);
                            void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, n, {
                                          arguments:
                                              ((a = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, n));
                        } else viewEnv.handleViewEvent({ __Type: r, type: e });
                        var a;
                    },
                    f = () => w(o.CLOSE),
                    b = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var p = r(7572);
                const L = i.instance,
                    x = {
                        DataTracker: n.Z,
                        ViewModel: p.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: u,
                        makeGlobalBoundingBox: v,
                        sendMoveEvent: (e) => w(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => w(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, r = 0) => {
                            w(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: r, args: t });
                        },
                        sendShowPopOverEvent: (e, t, r, a, i = R.invalid('resId'), n) => {
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
                                targetID: i,
                                direction: t,
                                bbox: v(m),
                                on: !0,
                                args: n,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => b(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, f);
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
                                    const i = Object.prototype.toString.call(t[a]);
                                    if (i.startsWith('[object CoherentArrayProxy]')) {
                                        const i = t[a];
                                        r[a] = [];
                                        for (let t = 0; t < i.length; t++) r[a].push({ value: e(i[t].value) });
                                    } else
                                        i.startsWith('[object class BW::WULF::ViewModel')
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
                r.d(t, { Z5: () => a, cy: () => i });
                const a = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    i = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, r) => userLocale.getTimeFormat(e, t, void 0 === r || r),
                        getTimeString: (e, t, r) => userLocale.getTimeString(e, t, void 0 === r || r),
                    };
            },
            1988: (e, t, r) => {
                'use strict';
                var a = r(6179),
                    i = r.n(a),
                    n = r(493),
                    s = r.n(n),
                    o = r(3138),
                    l = r(5521);
                r(9916);
                const c = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function d(e = l.n.NONE, t = c, r = !1, i = !1) {
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
                                if (!i && o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), t(a), r && a.stopPropagation();
                            }
                        }
                    }, [t, e, r, i]);
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
                        (w = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var r = arguments[t];
                                      for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
                                  }
                                  return e;
                              }),
                        w.apply(null, arguments)
                    );
                }
                const f = {
                        [v.fd.ExtraSmall]: '',
                        [v.fd.Small]: g().SMALL_WIDTH,
                        [v.fd.Medium]: `${g().SMALL_WIDTH} ${g().MEDIUM_WIDTH}`,
                        [v.fd.Large]: `${g().SMALL_WIDTH} ${g().MEDIUM_WIDTH} ${g().LARGE_WIDTH}`,
                        [v.fd.ExtraLarge]:
                            `${g().SMALL_WIDTH} ${g().MEDIUM_WIDTH} ${g().LARGE_WIDTH} ${g().EXTRA_LARGE_WIDTH}`,
                    },
                    b = {
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
                                var r = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        r[a] = e[a];
                                    }
                                return r;
                            })(e, E);
                        const n = (0, v.GS)(),
                            s = n.mediaWidth,
                            o = n.mediaHeight,
                            l = n.mediaSize;
                        return i().createElement('div', w({ className: h()(r, f[s], b[o], p[l]) }, a), t);
                    },
                    x = ['children'];
                const S = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    r[a] = e[a];
                                }
                            return r;
                        })(e, x);
                    return i().createElement(u.ZN, null, i().createElement(L, r, t));
                };
                var y = r(3403);
                let O;
                !(function (e) {
                    (e[(e.SUMMARY = 0)] = 'SUMMARY'), (e[(e.ACHIEVEMENTS = 1)] = 'ACHIEVEMENTS');
                })(O || (O = {}));
                var T = r(7522),
                    k = r(7030);
                const M = (0, a.lazy)(() => Promise.all([r.e(549), r.e(36), r.e(154)]).then(r.bind(r, 7910))),
                    P = (0, a.lazy)(() => Promise.all([r.e(549), r.e(36), r.e(805)]).then(r.bind(r, 9390))),
                    A = { [O.SUMMARY]: M, [O.ACHIEVEMENTS]: P },
                    R = i().memo(({ viewType: e }) => {
                        const t = A[e],
                            r = (0, k.useTransition)(e, {
                                from: { opacity: 0 },
                                enter: { opacity: 1 },
                                config: { duration: 500, easing: T.Z.easeInQuad },
                            });
                        return t
                            ? i().createElement(
                                  a.Suspense,
                                  { fallback: i().createElement('div', null) },
                                  r((e) => i().createElement(k.animated.div, { style: e }, i().createElement(t, null))),
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
                    D = (0, y.Pi)(() => {
                        const e = I(),
                            t = e.model,
                            r = e.controls,
                            a = t.root.get(),
                            n = a.viewType,
                            s = a.isOtherPlayer;
                        var o;
                        return (
                            (o = r.close),
                            d(l.n.ESCAPE, o),
                            s
                                ? i().createElement('div', { className: C }, i().createElement(R, { viewType: n }))
                                : i().createElement(
                                      S,
                                      null,
                                      i().createElement('div', { className: C }, i().createElement(R, { viewType: n })),
                                  )
                        );
                    });
                engine.whenReady.then(() => {
                    s().render(i().createElement(W, null, i().createElement(D, null)), document.getElementById('root'));
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
                var i = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, r, a] = deferred[l], n = !0, s = 0; s < t.length; s++)
                        (!1 & a || i >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((n = !1), a < i && (i = a));
                    if (n) {
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
                ? 'chunks/lobby/53e17685a523667086e1.js'
                : 154 === e
                  ? 'chunks/lobby/b32df91cab295b949e71.js'
                  : 805 === e
                    ? 'chunks/lobby/191af3737001c5487ff4.js'
                    : void 0),
        (__webpack_require__.miniCssF = (e) =>
            154 === e
                ? 'chunks/lobby/b32df91cab295b949e71.css'
                : 805 === e
                  ? 'chunks/lobby/191af3737001c5487ff4.css'
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
                var i, n;
                if (void 0 !== r)
                    for (var s = document.getElementsByTagName('script'), o = 0; o < s.length; o++) {
                        var l = s[o];
                        if (l.getAttribute('src') == e || l.getAttribute('data-webpack') == dataWebpackPrefix + r) {
                            i = l;
                            break;
                        }
                    }
                i ||
                    ((n = !0),
                    ((i = document.createElement('script')).charset = 'utf-8'),
                    (i.timeout = 120),
                    __webpack_require__.nc && i.setAttribute('nonce', __webpack_require__.nc),
                    i.setAttribute('data-webpack', dataWebpackPrefix + r),
                    (i.src = e)),
                    (inProgress[e] = [t]);
                var c = (t, r) => {
                        (i.onerror = i.onload = null), clearTimeout(d);
                        var a = inProgress[e];
                        if (
                            (delete inProgress[e],
                            i.parentNode && i.parentNode.removeChild(i),
                            a && a.forEach((e) => e(r)),
                            t)
                        )
                            return t(r);
                    },
                    d = setTimeout(c.bind(null, void 0, { type: 'timeout', target: i }), 12e4);
                (i.onerror = c.bind(null, i.onerror)),
                    (i.onload = c.bind(null, i.onload)),
                    n && document.head.appendChild(i);
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
                    i = __webpack_require__.p + a;
                if (
                    ((e, t) => {
                        for (var r = document.getElementsByTagName('link'), a = 0; a < r.length; a++) {
                            var i = (s = r[a]).getAttribute('data-href') || s.getAttribute('href');
                            if ('stylesheet' === s.rel && (i === e || i === t)) return s;
                        }
                        var n = document.getElementsByTagName('style');
                        for (a = 0; a < n.length; a++) {
                            var s;
                            if ((i = (s = n[a]).getAttribute('data-href')) === e || i === t) return s;
                        }
                    })(a, i)
                )
                    return t();
                ((e, t, r, a) => {
                    var i = document.createElement('link');
                    (i.rel = 'stylesheet'),
                        (i.type = 'text/css'),
                        (i.onerror = i.onload =
                            (n) => {
                                if (((i.onerror = i.onload = null), 'load' === n.type)) r();
                                else {
                                    var s = n && ('load' === n.type ? 'missing' : n.type),
                                        o = (n && n.target && n.target.href) || t,
                                        l = new Error('Loading CSS chunk ' + e + ' failed.\n(' + o + ')');
                                    (l.code = 'CSS_CHUNK_LOAD_FAILED'),
                                        (l.type = s),
                                        (l.request = o),
                                        i.parentNode.removeChild(i),
                                        a(l);
                                }
                            }),
                        (i.href = t),
                        document.head.appendChild(i);
                })(e, i, t, r);
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
                        var i = new Promise((r, i) => (a = e[t] = [r, i]));
                        r.push((a[2] = i));
                        var n = __webpack_require__.p + __webpack_require__.u(t),
                            s = new Error();
                        __webpack_require__.l(
                            n,
                            (r) => {
                                if (__webpack_require__.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                                    var i = r && ('load' === r.type ? 'missing' : r.type),
                                        n = r && r.target && r.target.src;
                                    (s.message = 'Loading chunk ' + t + ' failed.\n(' + i + ': ' + n + ')'),
                                        (s.name = 'ChunkLoadError'),
                                        (s.type = i),
                                        (s.request = n),
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
                        i,
                        [n, s, o] = r,
                        l = 0;
                    if (n.some((t) => 0 !== e[t])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (o) var c = o(__webpack_require__);
                    }
                    for (t && t(r); l < n.length; l++)
                        (i = n[l]), __webpack_require__.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return __webpack_require__.O(c);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [549], () => __webpack_require__(1988));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
