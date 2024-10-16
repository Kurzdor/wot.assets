(() => {
    'use strict';
    var __webpack_modules__ = {
            3495: (e, t, i) => {
                i.d(t, { Y: () => u });
                var n = i(3138),
                    a = i(6179),
                    s = i(1043),
                    r = i(5262);
                const o = n.O.client.getSize('rem'),
                    l = o.width,
                    _ = o.height,
                    c = Object.assign({ width: l, height: _ }, (0, r.T)(l, _, s.j)),
                    u = (0, a.createContext)(c);
            },
            1039: (e, t, i) => {
                i(3138), i(6536), i(6179), i(3495), i(1043), i(5262);
            },
            6010: (e, t, i) => {
                var n = i(6179),
                    a = i(7382),
                    s = i(3495);
                const r = ['children'];
                const o = (e) => {
                    let t = e.children,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var i = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    i[n] = e[n];
                                }
                            return i;
                        })(e, r);
                    const o = (0, n.useContext)(s.Y),
                        l = o.extraLarge,
                        _ = o.large,
                        c = o.medium,
                        u = o.small,
                        d = o.extraSmall,
                        h = o.extraLargeWidth,
                        m = o.largeWidth,
                        g = o.mediumWidth,
                        b = o.smallWidth,
                        v = o.extraSmallWidth,
                        p = o.extraLargeHeight,
                        f = o.largeHeight,
                        w = o.mediumHeight,
                        S = o.smallHeight,
                        E = o.extraSmallHeight,
                        x = { extraLarge: p, large: f, medium: w, small: S, extraSmall: E };
                    if (i.extraLarge || i.large || i.medium || i.small || i.extraSmall) {
                        if (i.extraLarge && l) return t;
                        if (i.large && _) return t;
                        if (i.medium && c) return t;
                        if (i.small && u) return t;
                        if (i.extraSmall && d) return t;
                    } else {
                        if (i.extraLargeWidth && h) return (0, a.H)(t, i, x);
                        if (i.largeWidth && m) return (0, a.H)(t, i, x);
                        if (i.mediumWidth && g) return (0, a.H)(t, i, x);
                        if (i.smallWidth && b) return (0, a.H)(t, i, x);
                        if (i.extraSmallWidth && v) return (0, a.H)(t, i, x);
                        if (
                            !(i.extraLargeWidth || i.largeWidth || i.mediumWidth || i.smallWidth || i.extraSmallWidth)
                        ) {
                            if (i.extraLargeHeight && p) return t;
                            if (i.largeHeight && f) return t;
                            if (i.mediumHeight && w) return t;
                            if (i.smallHeight && S) return t;
                            if (i.extraSmallHeight && E) return t;
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
            7382: (e, t, i) => {
                i.d(t, { H: () => n });
                const n = (e, t, i) =>
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
                i.d(t, { j: () => n });
                const n = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, i) => {
                var n;
                function a(e, t, i) {
                    const n = (function (e, t) {
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
                        s = Math.min(n, a);
                    return {
                        extraLarge: s === i.extraLarge.weight,
                        large: s === i.large.weight,
                        medium: s === i.medium.weight,
                        small: s === i.small.weight,
                        extraSmall: s === i.extraSmall.weight,
                        extraLargeWidth: n === i.extraLarge.weight,
                        largeWidth: n === i.large.weight,
                        mediumWidth: n === i.medium.weight,
                        smallWidth: n === i.small.weight,
                        extraSmallWidth: n === i.extraSmall.weight,
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
                    })(n || (n = {}));
            },
            8089: (e, t, i) => {
                var n = i(6179),
                    a = i.n(n),
                    s = i(6483),
                    r = i.n(s),
                    o = i(7727),
                    l = i(7476);
                const _ = [
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
                function c() {
                    return (
                        (c = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var i = arguments[t];
                                      for (var n in i) ({}).hasOwnProperty.call(i, n) && (e[n] = i[n]);
                                  }
                                  return e;
                              }),
                        c.apply(null, arguments)
                    );
                }
                class u extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, o.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, o.G)(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (t) => {
                                e && e(t), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            t = e.caption,
                            i = e.onClick,
                            n = e.goto,
                            s = e.side,
                            o = e.type,
                            u = e.classNames,
                            d = e.onMouseEnter,
                            h = e.onMouseLeave,
                            m = e.onMouseDown,
                            g = e.onMouseUp,
                            b =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var i = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (t.indexOf(n) >= 0) continue;
                                            i[n] = e[n];
                                        }
                                    return i;
                                })(e, _)),
                            v = r()(l.Z.base, l.Z[`base__${o}`], l.Z[`base__${s}`], null == u ? void 0 : u.base),
                            p = r()(l.Z.icon, l.Z[`icon__${o}`], l.Z[`icon__${s}`], null == u ? void 0 : u.icon),
                            f = r()(l.Z.glow, null == u ? void 0 : u.glow),
                            w = r()(l.Z.caption, l.Z[`caption__${o}`], null == u ? void 0 : u.caption),
                            S = r()(l.Z.goto, null == u ? void 0 : u.goto);
                        return a().createElement(
                            'div',
                            c(
                                {
                                    className: v,
                                    onMouseEnter: this._onMouseEnter(d),
                                    onMouseLeave: this._onMouseLeave(h),
                                    onMouseDown: this._onMouseDown(m),
                                    onMouseUp: this._onMouseUp(g),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: i,
                                },
                                b,
                            ),
                            'info' !== o && a().createElement('div', { className: l.Z.shine }),
                            a().createElement('div', { className: p }, a().createElement('div', { className: f })),
                            a().createElement('div', { className: w }, t),
                            n && a().createElement('div', { className: S }, n),
                        );
                    }
                }
                u.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
            },
            8246: (e, t, i) => {
                i.d(t, { U: () => o });
                var n = i(3138);
                function a(e, t) {
                    var i = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (i) return (i = i.call(e)).next.bind(i);
                    if (
                        Array.isArray(e) ||
                        (i = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return s(e, t);
                                var i = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === i && e.constructor && (i = e.constructor.name),
                                    'Map' === i || 'Set' === i
                                        ? Array.from(e)
                                        : 'Arguments' === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                                          ? s(e, t)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        i && (e = i);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var i = 0, n = Array(t); i < t; i++) n[i] = e[i];
                    return n;
                }
                const r = (e) => (0 === e ? window : window.subViews.get(e));
                function o({ initializer: e = !0, rootId: t = 0, getRoot: i = r, context: s = 'model' } = {}) {
                    const o = new Map();
                    function l(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? o.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, i) => {
                            i.forEach((t) => {
                                const i = o.get(t);
                                void 0 !== i && i(e);
                            });
                        });
                    });
                    const _ = (e) => {
                        const n = i(t),
                            a = s.split('.').reduce((e, t) => e[t], n);
                        return 'string' != typeof e || 0 === e.length
                            ? a
                            : e.split('.').reduce((e, t) => {
                                  const i = e[t];
                                  return 'function' == typeof i ? i.bind(e) : i;
                              }, a);
                    };
                    return {
                        subscribe: (i, a) => {
                            const r = 'string' == typeof a ? `${s}.${a}` : s,
                                l = n.O.view.addModelObserver(r, t, !0);
                            return o.set(l, i), e && i(_(a)), l;
                        },
                        readByPath: _,
                        createCallback: (e, t) => {
                            const i = _(t);
                            return (...t) => {
                                i(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = _(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (var e, i = a(o.keys()); !(e = i()).done; ) {
                                l(e.value, t);
                            }
                        },
                        unsubscribe: l,
                    };
                }
            },
            3215: (e, t, i) => {
                i.d(t, { q: () => l });
                var n = i(4598),
                    a = i(9174),
                    s = i(6179),
                    r = i.n(s),
                    o = i(8246);
                const l = () => (e, t) => {
                    const i = (0, s.createContext)({});
                    return [
                        function ({ mode: l = 'real', options: _, children: c, mocks: u }) {
                            const d = (0, s.useRef)([]),
                                h = (i, s, r) => {
                                    var l;
                                    const _ = o.U(s),
                                        c =
                                            'real' === i
                                                ? _
                                                : Object.assign({}, _, {
                                                      readByPath:
                                                          null != (l = null == r ? void 0 : r.getter) ? l : () => {},
                                                  }),
                                        u = (e) =>
                                            'mocks' === i ? (null == r ? void 0 : r.getter(e)) : c.readByPath(e),
                                        h = (e) => d.current.push(e),
                                        m = e({
                                            mode: i,
                                            readByPath: u,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const s = null != t ? t : u(e),
                                                        r = a.LO.box(s, { equals: n.jv });
                                                    return (
                                                        'real' === i &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const s = null != t ? t : u(e),
                                                        r = a.LO.box(s, { equals: n.jv });
                                                    return (
                                                        'real' === i &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const n = u(t);
                                                    if (Array.isArray(e)) {
                                                        const s = e.reduce(
                                                            (e, t) => ((e[t] = a.LO.box(n[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === i &&
                                                                c.subscribe(
                                                                    (0, a.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            s[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            s
                                                        );
                                                    }
                                                    {
                                                        const s = e,
                                                            r = Object.entries(s),
                                                            o = r.reduce(
                                                                (e, [t, i]) => ((e[i] = a.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === i &&
                                                                c.subscribe(
                                                                    (0, a.aD)((e) => {
                                                                        r.forEach(([t, i]) => {
                                                                            o[i].set(e[t]);
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
                                        g = { mode: i, model: m, externalModel: c, cleanup: h };
                                    return {
                                        model: m,
                                        controls: 'mocks' === i && r ? r.controls(g) : t(g),
                                        externalModel: c,
                                        mode: i,
                                    };
                                },
                                m = (0, s.useRef)(!1),
                                g = (0, s.useState)(l),
                                b = g[0],
                                v = g[1],
                                p = (0, s.useState)(() => h(l, _, u)),
                                f = p[0],
                                w = p[1];
                            return (
                                (0, s.useEffect)(() => {
                                    m.current ? w(h(b, _, u)) : (m.current = !0);
                                }, [u, b, _]),
                                (0, s.useEffect)(() => {
                                    v(l);
                                }, [l]),
                                (0, s.useEffect)(
                                    () => () => {
                                        f.externalModel.dispose(), d.current.forEach((e) => e());
                                    },
                                    [f],
                                ),
                                r().createElement(i.Provider, { value: f }, c)
                            );
                        },
                        () => (0, s.useContext)(i),
                    ];
                };
            },
            527: (e, t, i) => {
                i.r(t),
                    i.d(t, { mouse: () => c, off: () => l, on: () => o, onResize: () => s, onScaleUpdated: () => r });
                var n = i(2472),
                    a = i(1176);
                const s = (0, n.E)('clientResized'),
                    r = (0, n.E)('self.onScaleUpdated'),
                    o = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    _ = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function i() {
                        e.enabled && (0, a.R)(!0);
                    }
                    function n() {
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
                    const s = ['down', 'up', 'move'].reduce(
                        (t, i) => (
                            (t[i] = (function (t) {
                                return (i) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const s = `mouse${t}`,
                                        r = _[t]((e) => i([e, 'outside']));
                                    function o(e) {
                                        i([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(s, o),
                                        n(),
                                        () => {
                                            a &&
                                                (r(),
                                                window.removeEventListener(s, o),
                                                (e.listeners -= 1),
                                                n(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(i)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, s, {
                        disable() {
                            (e.enabled = !1), n();
                        },
                        enable() {
                            (e.enabled = !0), n();
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
                        events: () => n,
                        getMouseGlobalPosition: () => r,
                        getSize: () => s,
                        graphicsQuality: () => o,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    });
                var n = i(527),
                    a = i(2493);
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, i) => {
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                i.d(t, { R: () => n });
            },
            2493: (e, t, i) => {
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function a(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((i) => {
                        console.error(`setRTPC('${e}', '${t}'): `, i);
                    });
                }
                i.d(t, { E: () => a, G: () => n });
            },
            2472: (e, t, i) => {
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                i.d(t, { E: () => n });
            },
            3138: (e, t, i) => {
                i.d(t, { O: () => s });
                var n = i(5959),
                    a = i(514);
                const s = { view: i(7641), client: n, sound: a.ZP };
            },
            514: (e, t, i) => {
                i.d(t, { ZP: () => r });
                var n = i(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    s = Object.keys(a).reduce((e, t) => ((e[t] = () => (0, n.playSound)(a[t])), e), {}),
                    r = { play: Object.assign({}, s, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, t, i) => {
                function n(e, t, i = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, i);
                }
                function a(e, t, i) {
                    return `url(${n(e, t, i)})`;
                }
                i.r(t), i.d(t, { getBgUrl: () => a, getTextureUrl: () => n });
            },
            6112: (e, t, i) => {
                i.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, i) => {
                i.d(t, { U: () => a });
                var n = i(2472);
                const a = {
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
            7641: (e, t, i) => {
                i.r(t),
                    i.d(t, {
                        addModelObserver: () => u,
                        addPreloadTexture: () => l,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => y,
                        events: () => s.U,
                        extraSize: () => R,
                        forceTriggerMouseMove: () => T,
                        freezeTextureBeforeResize: () => b,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => O,
                        getScale: () => v,
                        getSize: () => h,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => x,
                        isFocused: () => S,
                        pxToRem: () => p,
                        remToPx: () => f,
                        resize: () => m,
                        sendEvent: () => r.qP,
                        setAnimateWindow: () => w,
                        setEventHandled: () => E,
                        setInputPaddingsRem: () => _,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => L,
                    });
                var n = i(3722),
                    a = i(6112),
                    s = i(6538),
                    r = i(8566);
                const o = 15;
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, o);
                }
                function c(e, t, i, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, i, n);
                }
                function u(e, t, i) {
                    return viewEnv.addDataChangedCallback(e, t, i);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, o);
                }
                function h(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, i = 'px') {
                    return 'rem' === i ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: f(t.x), y: f(t.y) };
                }
                function b() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function v() {
                    return viewEnv.getScale();
                }
                function p(e) {
                    return viewEnv.pxToRem(e);
                }
                function f(e) {
                    return viewEnv.remToPx(e);
                }
                function w(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function S() {
                    return viewEnv.isFocused();
                }
                function E() {
                    return viewEnv.setEventHandled();
                }
                function x() {
                    return viewEnv.isEventHandled();
                }
                function T() {
                    viewEnv.forceTriggerMouseMove();
                }
                function O() {
                    return viewEnv.getShowingStatus();
                }
                const y = Object.keys(a.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
                        {},
                    ),
                    R = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    L = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, i) => {
                i.d(t, { qP: () => _ });
                const n = ['args'];
                const a = 2,
                    s = 16,
                    r = 32,
                    o = 64,
                    l = (e, t) => {
                        const i = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const s = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var i = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (t.indexOf(n) >= 0) continue;
                                            i[n] = e[n];
                                        }
                                    return i;
                                })(t, n);
                            return void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: i, type: e }, r, {
                                          arguments:
                                              ((a = s),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: i, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: i, type: e });
                        var a;
                    },
                    _ = {
                        close(e) {
                            l('popover' === e ? a : r);
                        },
                        minimize() {
                            l(o);
                        },
                        move(e) {
                            l(s, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, i) => {
                i.d(t, { jv: () => n });
                function n() {
                    return !1;
                }
                console.log;
            },
            6536: (e, t, i) => {
                i(6179);
            },
            3815: (e, t, i) => {
                i(6179);
            },
            8526: (e, t, i) => {
                i(3138), i(5521), i(9916), i(6179);
            },
            2039: (e, t, i) => {
                i.d(t, { k: () => a });
                var n = i(6179);
                const a = (e) => {
                    (0, n.useEffect)(() => e, []);
                };
            },
            1396: (e, t, i) => {
                i.d(t, { K: () => r });
                var n = i(6179),
                    a = i(2039);
                const s = 0;
                function r() {
                    const e = (0, n.useRef)(s);
                    return (
                        (0, a.k)(() => {
                            window.clearTimeout(e.current);
                        }),
                        (0, n.useMemo)(
                            () => ({
                                run: (t, i) => {
                                    window.clearTimeout(e.current),
                                        (e.current = window.setTimeout(() => {
                                            (e.current = s), t();
                                        }, i));
                                },
                                clear: () => {
                                    window.clearTimeout(e.current), (e.current = s);
                                },
                                get isRunning() {
                                    return e.current !== s;
                                },
                            }),
                            [],
                        )
                    );
                }
            },
            5521: (e, t, i) => {
                let n, a;
                i.d(t, { n: () => n }),
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
                    })(a || (a = {}));
            },
            9480: (e, t, i) => {
                i.d(t, { G: () => o, U2: () => a, UI: () => r, hX: () => l, u4: () => c, v: () => _ });
                var n = i(8968);
                function a(e, t) {
                    var i;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (i = e[t]) ? void 0 : i.value;
                }
                const s = a;
                function r(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, i, n) => t(null == e ? void 0 : e.value, i, n));
                }
                function o(e, t) {
                    if (Array.isArray(e)) return e.some(t);
                    for (let i = 0; i < e.length; i++) {
                        if (t(s(e, i), i, e)) return !0;
                    }
                    return !1;
                }
                function l(e, t) {
                    if (Array.isArray(e)) return e.filter(t);
                    const i = [];
                    for (let a = 0; a < e.length; a++) {
                        var n;
                        const s = null == (n = e[a]) ? void 0 : n.value;
                        t(s, a, e) && i.push(s);
                    }
                    return i;
                }
                function _(e, t) {
                    return (function (e, t, i) {
                        const n = [];
                        for (let a = 0; a < e.length; a++) {
                            const r = s(e, a);
                            t(r, a, e) && n.push(i(r, a, e));
                        }
                        return n;
                    })(e, n.C, t);
                }
                function c(e, t, i) {
                    if (Array.isArray(e)) return e.reduce(t, i);
                    let n = i;
                    for (let i = 0; i < e.length; i++) {
                        n = t(n, s(e, i), i, e);
                    }
                    return n;
                }
            },
            8968: (e, t, i) => {
                function n(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                i.d(t, { C: () => n });
            },
            7727: (e, t, i) => {
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                i.d(t, { G: () => n });
            },
            1358: (e, t, i) => {
                i.d(t, { Z: () => s });
                var n = i(3138);
                class a {
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
                        return window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, i = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const s = n.O.view.addModelObserver(e, i, a);
                        return (
                            s > 0
                                ? ((this._callbacks[s] = t),
                                  i > 0 && (this._views[i] ? this._views[i].push(s) : (this._views[i] = [s])))
                                : console.error("Can't add callback for model:", e),
                            s
                        );
                    }
                    removeCallback(e, t = 0) {
                        let i = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((i = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            i || console.error("Can't remove callback by id:", e),
                            i
                        );
                    }
                    _emmitDataChanged(e, t, i) {
                        i.forEach((i) => {
                            const n = this._callbacks[i];
                            void 0 !== n && n(e, t);
                        });
                    }
                }
                a.__instance = void 0;
                const s = a;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
            9916: (e, t, i) => {
                i.d(t, { ry: () => v });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: i }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    i();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const i = e,
                            n = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== i || t !== n)),
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
                const a = n;
                var s = i(1358);
                var r = i(8613);
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
                    _ = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = i(5521),
                    h = i(3138);
                const m = ['args'];
                function g(e, t, i, n, a, s, r) {
                    try {
                        var o = e[s](r),
                            l = o.value;
                    } catch (e) {
                        return void i(e);
                    }
                    o.done ? t(l) : Promise.resolve(l).then(n, a);
                }
                const b = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    v = (function () {
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
                                        i = arguments;
                                    return new Promise(function (n, a) {
                                        var s = e.apply(t, i);
                                        function r(e) {
                                            g(s, n, a, r, o, 'next', e);
                                        }
                                        function o(e) {
                                            g(s, n, a, r, o, 'throw', e);
                                        }
                                        r(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    p = (e, t) => {
                        const i = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var i = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (t.indexOf(n) >= 0) continue;
                                            i[n] = e[n];
                                        }
                                    return i;
                                })(t, m);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: i, type: e }, s, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, t]) => {
                                                  const i = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          i.number = t;
                                                          break;
                                                      case 'boolean':
                                                          i.bool = t;
                                                          break;
                                                      default:
                                                          i.string = t.toString();
                                                  }
                                                  return i;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: i, type: e }, s));
                        } else viewEnv.handleViewEvent({ __Type: i, type: e });
                        var n;
                    },
                    f = () => p(o.CLOSE),
                    w = (e, t) => {
                        e.keyCode === d.n.ESCAPE && t();
                    };
                var S = i(7572);
                const E = a.instance,
                    x = {
                        DataTracker: s.Z,
                        ViewModel: S.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: _,
                        TimeFormatType: c,
                        DateFormatType: u,
                        makeGlobalBoundingBox: b,
                        sendMoveEvent: (e) => p(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => p(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, i = 0) => {
                            p(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: i, args: t });
                        },
                        sendShowPopOverEvent: (e, t, i, n, a = R.invalid('resId'), s) => {
                            const r = h.O.view.getViewGlobalPosition(),
                                l = i.getBoundingClientRect(),
                                _ = l.x,
                                c = l.y,
                                u = l.width,
                                d = l.height,
                                m = {
                                    x: h.O.view.pxToRem(_) + r.x,
                                    y: h.O.view.pxToRem(c) + r.y,
                                    width: h.O.view.pxToRem(u),
                                    height: h.O.view.pxToRem(d),
                                };
                            p(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: b(m),
                                on: !0,
                                args: s,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => w(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            w(e, f);
                        },
                        handleViewEvent: p,
                        onBindingsReady: v,
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
                            const i = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const a = Object.prototype.toString.call(t[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[n];
                                        i[n] = [];
                                        for (let t = 0; t < a.length; t++) i[n].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (i[n] = e(t[n]))
                                            : (i[n] = t[n]);
                                }
                            return i;
                        },
                        ClickOutsideManager: E,
                        SystemLocale: r.Z5,
                        UserLocale: r.cy,
                    };
                window.ViewEnvHelper = x;
            },
            8613: (e, t, i) => {
                i.d(t, { Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, i) => userLocale.getTimeFormat(e, t, void 0 === i || i),
                        getTimeString: (e, t, i) => userLocale.getTimeString(e, t, void 0 === i || i),
                    };
            },
            1820: (e, t, i) => {
                let n, a;
                !(function (e) {
                    (e.Waiting = 'waiting'), (e.Active = 'active'), (e.InEffect = 'in'), (e.Rollback = 'rollback');
                })(n || (n = {})),
                    (function (e) {
                        (e.Ready = 'ready'),
                            (e.DragStart = 'start'),
                            (e.Drag = 'drag'),
                            (e.Drop = 'drop'),
                            (e.DropExit = 'exit');
                    })(a || (a = {}));
            },
            4301: (e, t, i) => {
                i.d(t, { j2: () => n });
                i(4231);
                const n = (e) => e.imageSource === R.images.gui.maps.icons.tanksetup.panel.empty();
            },
            7626: (e, t, i) => {
                i.d(t, { YR: () => n });
                i(6179), i(9152), i(7727), i(1820);
                const n = (e) => `panel-${e}-section`;
            },
            4231: (e, t, i) => {
                let n;
                !(function (e) {
                    (e.Hangar = 'hangar'),
                        (e.Setup = 'setup'),
                        (e.Compare = 'compare'),
                        (e.Battle = 'battle'),
                        (e.Respawn = 'respawn'),
                        (e.Prebattle = 'prebattle');
                })(n || (n = {}));
            },
            3220: (e, t, i) => {
                i.d(t, { t: () => c });
                var n = i(3215),
                    a = i(9480),
                    s = i(3946),
                    r = i(4598),
                    o = i(4301),
                    l = i(7626);
                const _ = (0, n.q)()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    ammunitionPanel: e.object('ammunitionPanel'),
                                    roleSkillSlot: e.object('roleSkillSlot'),
                                    vehicleInfo: e.object('vehicleInfo'),
                                    sectionGroups: e.array('ammunitionPanel.sectionGroups'),
                                    lastSlotAction: e.object('lastSlotAction'),
                                },
                                i = (0, s.Om)(() => t.sectionGroups.get().length),
                                n = (0, s.Om)(
                                    (e) => {
                                        const i = a.U2(t.sectionGroups.get(), e);
                                        if (!i) throw Error(`No ammunition section group found with index: ${e}`);
                                        return Object.assign({}, i, {
                                            sections: a.UI(i.sections, (e) =>
                                                Object.assign({}, e, {
                                                    slots: a.UI(e.slots, (e) => Object.assign({}, e)),
                                                }),
                                            ),
                                            setupSelector: Object.assign({}, i.setupSelector, {
                                                states: a.UI(i.setupSelector.states, (e) => e),
                                            }),
                                        });
                                    },
                                    { equals: r.jv },
                                ),
                                _ = (0, s.Om)(() => a.u4(t.sectionGroups.get(), (e, t) => e + t.sections.length, 0)),
                                c = (0, s.Om)((e) => n(e).sections.length),
                                u = (0, s.Om)(
                                    (e, t) => {
                                        const i = n(e),
                                            s = a.U2(i.sections, t);
                                        if (!s) throw Error(`No ammunition section found with index: ${t}`);
                                        return s;
                                    },
                                    { equals: r.jv },
                                ),
                                d = (0, s.Om)((e, t) => u(e, t).slots.length),
                                h = (0, s.Om)((e, t) => {
                                    const i = u(e, t).slots;
                                    return a.hX(i, (e) => Boolean(e) && !(0, o.j2)(e)).length;
                                }),
                                m = (0, s.Om)((e, t) => {
                                    const i = u(e, t).slots;
                                    return a.G(i, (e) => e.intCD > 0);
                                }),
                                g = (0, s.Om)(
                                    (e, t, i) => {
                                        const n = u(e, t),
                                            s = a.U2(n.slots, i);
                                        if (!s) throw Error(`No ammunition slot found with index: ${i}`);
                                        return s;
                                    },
                                    { equals: r.jv },
                                ),
                                b = (0, s.Om)(
                                    (e) => {
                                        const t = n(e).sections;
                                        return a.v(t, (e) => (0, l.YR)(e.type));
                                    },
                                    { equals: r.jv },
                                ),
                                v = (0, s.Om)(
                                    (e, t, i) => {
                                        const n = g(e, t, i);
                                        if (!n) throw Error(`No ammunition slot found with index: ${i}`);
                                        if (!n.specializations) throw Error('Selected slot have no specializations');
                                        return Object.assign({}, n.specializations, {
                                            specializations: a.UI(n.specializations.specializations, (e) =>
                                                Object.assign({}, e),
                                            ),
                                        });
                                    },
                                    { equals: r.jv },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    groups: { length: i, group: n },
                                    sections: { allSectionsLength: _, length: c, section: u, IDs: b },
                                    slots: { length: d, filteredLength: h, slot: g, existFilled: m },
                                    specializations: v,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            sectionSelect: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSectionSelect',
                            ),
                            dragDropSwap: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onDragDropSwap',
                            ),
                            slotClear: e.createCallback((e) => Object.assign({}, e), 'ammunitionPanel.onSlotClear'),
                            sectionResized: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSectionResized',
                            ),
                            changeSetupIndex: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onChangeSetupIndex',
                            ),
                            specializationSelect: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSpecializationSelect',
                            ),
                            escKeyDown: e.createCallbackNoArgs('onEscKeyDown'),
                        }),
                    ),
                    c = (_[0], _[1]);
            },
            1922: (e, t, i) => {
                i(6483), i(7739), i(6179), i(1960);
                let n;
                !(function (e) {
                    (e.None = ''),
                        (e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge');
                })(n || (n = {}));
            },
            9152: (e, t, i) => {
                i(6483), i(8089), i(4598), i(3815), i(8526), i(5521), i(7727), i(6179), i(1922);
            },
            5918: (e, t, i) => {
                var n = i(4888),
                    a = i(7383),
                    s = i(1396),
                    r = i(3403),
                    o = i(6179),
                    l = i.n(o),
                    _ = i(2558),
                    c = i(8934),
                    u = i(3220),
                    d = i(5958);
                const h = 'BackEffects_shine_f6',
                    m = 'BackEffects_sparks_55',
                    g = 'BackEffects_nut_79',
                    b = 'BackEffects_wrench_5a',
                    v = { enterActive: 'BackEffects_shine__enterActive_54' },
                    p = { enterActive: 'BackEffects_sparks__enterActive_79' },
                    f = { enterActive: 'BackEffects_nut__enterActive_b8' },
                    w = { enterActive: 'BackEffects_wrench__enterActive_ca' },
                    S = [n.dZ, n.sH],
                    E = l().memo(({ in: e, actionType: t }) =>
                        l().createElement(
                            l().Fragment,
                            null,
                            l().createElement(
                                c.Z,
                                { in: e, timeout: d.Dp, classNames: v },
                                l().createElement('div', { className: h }),
                            ),
                            l().createElement(
                                c.Z,
                                { in: e, timeout: d.IG, classNames: p },
                                l().createElement('div', { className: m }),
                            ),
                            S.includes(t) &&
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    l().createElement(
                                        c.Z,
                                        { in: e, timeout: d.wx, classNames: f },
                                        l().createElement('div', { className: g }),
                                    ),
                                    l().createElement(
                                        c.Z,
                                        { in: e, timeout: d.Kz, classNames: w },
                                        l().createElement('div', { className: b }),
                                    ),
                                ),
                        ),
                    ),
                    x = 'ColorMask_base_60',
                    T = 'ColorMask_base__enterActive_62',
                    O = ({ inProp: e, maskImage: t }) =>
                        l().createElement(
                            c.Z,
                            { in: e, timeout: d.Qj, classNames: { enterActive: T } },
                            l().createElement('div', { className: x, style: { maskImage: `url(${t})` } }),
                        ),
                    y = {
                        base__exitLeft: 'SlotTransitions_base__exitLeft_d8',
                        'animation-left': 'SlotTransitions_animation-left_27',
                        base__exitLeftFade: 'SlotTransitions_base__exitLeftFade_53',
                        'animation-fade': 'SlotTransitions_animation-fade_ce',
                        base__enterRight: 'SlotTransitions_base__enterRight_bb',
                        'animation-right': 'SlotTransitions_animation-right_31',
                        base__enterRightFade: 'SlotTransitions_base__enterRightFade_63',
                        base__exitRight: 'SlotTransitions_base__exitRight_b9',
                        base__enterLeft: 'SlotTransitions_base__enterLeft_e9',
                        base__exitRightSwap: 'SlotTransitions_base__exitRightSwap_64',
                        'animation-right-long': 'SlotTransitions_animation-right-long_bd',
                        base__enterRightSwap: 'SlotTransitions_base__enterRightSwap_5e',
                        base__enterLeftSwap: 'SlotTransitions_base__enterLeftSwap_da',
                        'animation-left-long': 'SlotTransitions_animation-left-long_ec',
                        base__exitLeftSwap: 'SlotTransitions_base__exitLeftSwap_c3',
                        base__exitFade: 'SlotTransitions_base__exitFade_4c',
                        base__enterFade: 'SlotTransitions_base__enterFade_77',
                        base: 'SlotTransitions_base_6d',
                        base__enter: 'SlotTransitions_base__enter_54',
                        base__enterFitting: 'SlotTransitions_base__enterFitting_c7',
                        baseShells__exitLeft: 'SlotTransitions_baseShells__exitLeft_1e',
                        'animation-left-shells': 'SlotTransitions_animation-left-shells_0d',
                        baseShells__enterRight: 'SlotTransitions_baseShells__enterRight_66',
                        'animation-right-shells': 'SlotTransitions_animation-right-shells_7c',
                        baseShells__exitRight: 'SlotTransitions_baseShells__exitRight_e4',
                        baseShells__enterLeft: 'SlotTransitions_baseShells__enterLeft_94',
                        baseShells__exitRightSwap: 'SlotTransitions_baseShells__exitRightSwap_fd',
                        'animation-right-long-shells': 'SlotTransitions_animation-right-long-shells_41',
                        baseShells__enterRightSwap: 'SlotTransitions_baseShells__enterRightSwap_41',
                        baseShells__enterLeftSwap: 'SlotTransitions_baseShells__enterLeftSwap_19',
                        'animation-left-long-shells': 'SlotTransitions_animation-left-long-shells_00',
                        baseShells__exitLeftSwap: 'SlotTransitions_baseShells__exitLeftSwap_04',
                        baseShells__exitFade: 'SlotTransitions_baseShells__exitFade_1b',
                        baseShells__enterFade: 'SlotTransitions_baseShells__enterFade_72',
                        baseOptDevices__exitLeft: 'SlotTransitions_baseOptDevices__exitLeft_fe',
                        baseOptDevices__exitLeftFade: 'SlotTransitions_baseOptDevices__exitLeftFade_8a',
                        baseOptDevices__enterRight: 'SlotTransitions_baseOptDevices__enterRight_5d',
                        baseOptDevices__enterRightFade: 'SlotTransitions_baseOptDevices__enterRightFade_2c',
                        baseOptDevices__exitRight: 'SlotTransitions_baseOptDevices__exitRight_72',
                        baseOptDevices__enterLeft: 'SlotTransitions_baseOptDevices__enterLeft_0f',
                        baseOptDevices__exitRightSwap: 'SlotTransitions_baseOptDevices__exitRightSwap_09',
                        baseOptDevices__enterRightSwap: 'SlotTransitions_baseOptDevices__enterRightSwap_04',
                        baseOptDevices__enterLeftSwap: 'SlotTransitions_baseOptDevices__enterLeftSwap_52',
                        baseOptDevices__exitLeftSwap: 'SlotTransitions_baseOptDevices__exitLeftSwap_e9',
                        baseOptDevices__enterFitting: 'SlotTransitions_baseOptDevices__enterFitting_8b',
                        'animation-fitting': 'SlotTransitions_animation-fitting_24',
                        baseOptDevices__exitFittingRemove: 'SlotTransitions_baseOptDevices__exitFittingRemove_fc',
                        'animation-fitting-remove': 'SlotTransitions_animation-fitting-remove_e0',
                        baseOptDevices__exitActiveFitting: 'SlotTransitions_baseOptDevices__exitActiveFitting_d0',
                        baseOptDevices__exitDestroy: 'SlotTransitions_baseOptDevices__exitDestroy_c9',
                        'animation-destroy': 'SlotTransitions_animation-destroy_12',
                        baseOptDevices__enterDestroy: 'SlotTransitions_baseOptDevices__enterDestroy_19',
                        baseOptDevices__exitDemount: 'SlotTransitions_baseOptDevices__exitDemount_e3',
                        'animation-bright-up': 'SlotTransitions_animation-bright-up_8e',
                        'animation-demount': 'SlotTransitions_animation-demount_d8',
                        baseOptDevices__enterDemount: 'SlotTransitions_baseOptDevices__enterDemount_8a',
                        baseOptDevices__exitFade: 'SlotTransitions_baseOptDevices__exitFade_10',
                        baseOptDevices__enterFade: 'SlotTransitions_baseOptDevices__enterFade_cf',
                        baseOptDevices__enterDemountFade: 'SlotTransitions_baseOptDevices__enterDemountFade_57',
                        baseConsumables__exitLeft: 'SlotTransitions_baseConsumables__exitLeft_d9',
                        baseConsumables__exitLeftFade: 'SlotTransitions_baseConsumables__exitLeftFade_4f',
                        baseConsumables__enterRight: 'SlotTransitions_baseConsumables__enterRight_02',
                        baseConsumables__enterRightFade: 'SlotTransitions_baseConsumables__enterRightFade_c6',
                        baseConsumables__exitRight: 'SlotTransitions_baseConsumables__exitRight_39',
                        baseConsumables__enterLeft: 'SlotTransitions_baseConsumables__enterLeft_97',
                        baseConsumables__exitRightSwap: 'SlotTransitions_baseConsumables__exitRightSwap_8a',
                        baseConsumables__enterRightSwap: 'SlotTransitions_baseConsumables__enterRightSwap_28',
                        baseConsumables__enterLeftSwap: 'SlotTransitions_baseConsumables__enterLeftSwap_8e',
                        baseConsumables__exitLeftSwap: 'SlotTransitions_baseConsumables__exitLeftSwap_0e',
                        baseConsumables__enterFitting: 'SlotTransitions_baseConsumables__enterFitting_13',
                        baseConsumables__exitFittingRemove: 'SlotTransitions_baseConsumables__exitFittingRemove_01',
                        baseConsumables__exitActiveFitting: 'SlotTransitions_baseConsumables__exitActiveFitting_10',
                        baseConsumables__exitFade: 'SlotTransitions_baseConsumables__exitFade_5b',
                        baseConsumables__enterFade: 'SlotTransitions_baseConsumables__enterFade_bd',
                        baseBattleAbilities__exitLeft: 'SlotTransitions_baseBattleAbilities__exitLeft_52',
                        baseBattleAbilities__exitLeftFade: 'SlotTransitions_baseBattleAbilities__exitLeftFade_a9',
                        baseBattleAbilities__enterRight: 'SlotTransitions_baseBattleAbilities__enterRight_7b',
                        baseBattleAbilities__enterRightFade: 'SlotTransitions_baseBattleAbilities__enterRightFade_d3',
                        baseBattleAbilities__exitRight: 'SlotTransitions_baseBattleAbilities__exitRight_fc',
                        baseBattleAbilities__enterLeft: 'SlotTransitions_baseBattleAbilities__enterLeft_97',
                        baseBattleAbilities__exitRightSwap: 'SlotTransitions_baseBattleAbilities__exitRightSwap_7d',
                        baseBattleAbilities__enterRightSwap: 'SlotTransitions_baseBattleAbilities__enterRightSwap_e5',
                        baseBattleAbilities__enterLeftSwap: 'SlotTransitions_baseBattleAbilities__enterLeftSwap_ca',
                        baseBattleAbilities__exitLeftSwap: 'SlotTransitions_baseBattleAbilities__exitLeftSwap_c0',
                        baseBattleAbilities__enterFitting: 'SlotTransitions_baseBattleAbilities__enterFitting_de',
                        baseBattleAbilities__exitFittingRemove:
                            'SlotTransitions_baseBattleAbilities__exitFittingRemove_bc',
                        baseBattleAbilities__exitActiveFitting:
                            'SlotTransitions_baseBattleAbilities__exitActiveFitting_3d',
                        baseBattleAbilities__exitFade: 'SlotTransitions_baseBattleAbilities__exitFade_21',
                        baseBattleAbilities__enterFade: 'SlotTransitions_baseBattleAbilities__enterFade_15',
                        baseBattleBoosters__enterFitting: 'SlotTransitions_baseBattleBoosters__enterFitting_56',
                        baseBattleBoosters__exitFittingRemove:
                            'SlotTransitions_baseBattleBoosters__exitFittingRemove_e5',
                        baseBattleBoosters__exitActiveFitting:
                            'SlotTransitions_baseBattleBoosters__exitActiveFitting_f1',
                    },
                    R = { enter: y.base__enter, exit: y.base__enter };
                (0, r.Pi)(
                    ({
                        children: e,
                        slotIndex: t,
                        uniqueKey: i,
                        slotType: r,
                        isEmpty: h = !1,
                        imageSource: m,
                        itemInstalledSetupIndex: g,
                    }) => {
                        const b = (0, u.t)().model.lastSlotAction.get(),
                            v = b.leftID,
                            p = b.rightID,
                            f = b.leftIntCD,
                            w = b.rightIntCD,
                            S = b.actionType,
                            x = b.intCD,
                            T = (0, o.useState)(!0),
                            L = T[0],
                            k = T[1],
                            C = (0, o.useState)(!0),
                            D = C[0],
                            F = C[1],
                            A = (0, o.useState)(m),
                            P = A[0],
                            M = A[1],
                            B = (0, o.useState)(i),
                            I = B[0],
                            N = B[1],
                            H = (0, o.useState)(g),
                            W = H[0],
                            j = H[1],
                            U = (0, s.K)(),
                            G = (0, s.K)(),
                            $ = [n._2, n.dZ, n.sH],
                            q = (x === i || x === I) && W !== g && $.includes(S),
                            z = -1 === f || -1 === w,
                            K = r ? `base${r[0].toUpperCase() + r.slice(1)}` : 'base',
                            V = d.Sr[S] || 0;
                        (0, o.useEffect)(() => {
                            h || M(m);
                        }, [h, m]);
                        const Z = (0, o.useCallback)(
                                (e) => {
                                    const i = Object.assign({}, R);
                                    switch (S) {
                                        case n.Xo: {
                                            const e = v === t ? d.mI.RIGHT : d.mI.LEFT,
                                                n = p - v != 1 ? d.mI.SWAP : '';
                                            (i.enterDone = y[`${K}__enter${e}${n}`]),
                                                (i.exit = y[`${K}__exit${e}${n}`]),
                                                z &&
                                                    (h
                                                        ? (i.enterDone = y[`${K}__enter${d.mI.FADE}`])
                                                        : (i.exit = y[`${K}__exit${d.mI.FADE}`]));
                                            break;
                                        }
                                        case n._2:
                                            (i.enterDone = y[`${K}__enter${d.mI.DESTROY}`]),
                                                (i.exit = y[`${K}__exit${d.mI.DESTROY}`]),
                                                U.run(() => k(!0), d.YJ),
                                                F(!0);
                                            break;
                                        case n.sH:
                                        case n.dZ:
                                            (i.enter = y[`${K}__enter${d.mI.DEMOUNT}${d.mI.FADE}`]),
                                                (i.exit = y[`${K}__exit${d.mI.DEMOUNT}`]),
                                                U.run(() => k(!0), d.Ij);
                                            break;
                                        case n.eC:
                                        case n.FR:
                                            if (r !== a.g9) {
                                                const e = S === n.eC ? d.mI.FITTING : d.mI.FITTING_REMOVE;
                                                (i.enter = y[`${K}__enter${e}`]),
                                                    (i.exit = y[`${K}__exit${e}`]),
                                                    (i.exitActive = y[`${K}__exitActive${d.mI.FITTING}`]);
                                            } else
                                                (i.enterDone = y[`${K}__enter${d.mI.FADE}`]),
                                                    (i.exit = y[`${K}__exit${d.mI.FADE}`]);
                                            break;
                                        default:
                                            return e;
                                    }
                                    return l().cloneElement(e, { classNames: i, timeout: V });
                                },
                                [S, V, v, t, p, K, z, h, U, r],
                            ),
                            Y = (0, o.useCallback)(
                                (e) => {
                                    G.run(() => {
                                        (e.className = ''), e.classList.add(y.base), N(i), j(g);
                                    }, V);
                                },
                                [G, V, i, g],
                            ),
                            X = (0, o.useCallback)(() => {
                                k(!1), F(!1);
                            }, []);
                        return l().createElement(
                            l().Fragment,
                            null,
                            l().createElement(
                                _.Z,
                                { component: null, childFactory: Z },
                                l().createElement(
                                    c.Z,
                                    {
                                        key: i,
                                        timeout: V,
                                        classNames: R,
                                        onEntered: Y,
                                        onExiting: X,
                                        unmountOnExit: !0,
                                    },
                                    l().createElement('div', { className: y.base }, e),
                                ),
                            ),
                            q &&
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    l().createElement(E, { in: L, actionType: S }),
                                    l().createElement(O, { inProp: D, maskImage: P }),
                                ),
                        );
                    },
                );
            },
            5958: (e, t, i) => {
                i.d(t, {
                    Dp: () => o,
                    IG: () => l,
                    Ij: () => s,
                    Kz: () => c,
                    Qj: () => u,
                    Sr: () => h,
                    YJ: () => r,
                    mI: () => d,
                    wx: () => _,
                });
                var n = i(4888);
                const a = 1600,
                    s = 900,
                    r = 900,
                    o = 200,
                    l = 400,
                    _ = 600,
                    c = 600,
                    u = 1200;
                let d;
                !(function (e) {
                    (e.RIGHT = 'Right'),
                        (e.LEFT = 'Left'),
                        (e.SWAP = 'Swap'),
                        (e.FITTING = 'Fitting'),
                        (e.FITTING_REMOVE = 'FittingRemove'),
                        (e.FADE = 'Fade'),
                        (e.DESTROY = 'Destroy'),
                        (e.DEMOUNT = 'Demount');
                })(d || (d = {}));
                const h = { [n.Xo]: 200, [n.FR]: 250, [n.eC]: 250, [n._2]: 1400, [n.dZ]: a, [n.sH]: a, [n.Fd]: a };
            },
            4888: (e, t, i) => {
                i.d(t, { FR: () => a, Fd: () => o, Xo: () => s, _2: () => _, dZ: () => r, eC: () => n, sH: () => l });
                const n = 'select',
                    a = 'undo',
                    s = 'swap',
                    r = 'demount',
                    o = 'demount_from_setup',
                    l = 'demount_from_setups',
                    _ = 'destroy';
            },
            7383: (e, t, i) => {
                i.d(t, { g9: () => n });
                const n = 'shells';
            },
            7476: (e, t, i) => {
                i.d(t, { Z: () => n });
                const n = {
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
                };
            },
            1960: () => {},
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var i = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](i, i.exports, __webpack_require__), i.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, i, n) => {
            if (!t) {
                var a = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, i, n] = deferred[l], s = !0, r = 0; r < t.length; r++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[r]))
                            ? t.splice(r--, 1)
                            : ((s = !1), n < a && (a = n));
                    if (s) {
                        deferred.splice(l--, 1);
                        var o = i();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > n; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, i, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var i in t)
                __webpack_require__.o(t, i) &&
                    !__webpack_require__.o(e, i) &&
                    Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (__webpack_require__.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 197),
        (() => {
            var e = { 197: 0, 490: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, i) => {
                    var n,
                        a,
                        [s, r, o] = i,
                        l = 0;
                    if (s.some((t) => 0 !== e[t])) {
                        for (n in r) __webpack_require__.o(r, n) && (__webpack_require__.m[n] = r[n]);
                        if (o) var _ = o(__webpack_require__);
                    }
                    for (t && t(i); l < s.length; l++)
                        (a = s[l]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(_);
                },
                i = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(5918));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
