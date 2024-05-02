(() => {
    'use strict';
    var __webpack_modules__ = {
            3457: (e, t, a) => {
                var i = a(6483),
                    r = a.n(i),
                    n = a(7727),
                    s = a(6179),
                    o = a.n(s),
                    l = a(6880),
                    _ = a(2106);
                const d = ({
                    children: e,
                    size: t,
                    isFocused: a,
                    type: i,
                    disabled: d,
                    mixClass: u,
                    soundHover: c,
                    soundClick: h,
                    onMouseEnter: m,
                    onMouseMove: g,
                    onMouseDown: v,
                    onMouseUp: w,
                    onMouseLeave: E,
                    onClick: b,
                }) => {
                    const f = (0, s.useRef)(null),
                        p = (0, s.useState)(a),
                        x = p[0],
                        O = p[1],
                        y = (0, s.useState)(!1),
                        L = y[0],
                        T = y[1],
                        k = (0, s.useState)(!1),
                        S = k[0],
                        C = k[1],
                        P = (0, s.useCallback)(() => {
                            d || (f.current && (f.current.focus(), O(!0)));
                        }, [d]),
                        M = (0, s.useCallback)(
                            (e) => {
                                x && null !== f.current && !f.current.contains(e.target) && O(!1);
                            },
                            [x],
                        ),
                        H = (0, s.useCallback)(
                            (e) => {
                                d || (b && b(e));
                            },
                            [d, b],
                        ),
                        W = (0, s.useCallback)(
                            (e) => {
                                d || (null !== c && (0, n.G)(c), m && m(e), C(!0));
                            },
                            [d, c, m],
                        ),
                        A = (0, s.useCallback)(
                            (e) => {
                                g && g(e);
                            },
                            [g],
                        ),
                        N = (0, s.useCallback)(
                            (e) => {
                                d || (w && w(e), T(!1));
                            },
                            [d, w],
                        ),
                        D = (0, s.useCallback)(
                            (e) => {
                                d || (null !== h && (0, n.G)(h), v && v(e), a && P(), T(!0));
                            },
                            [d, h, v, P, a],
                        ),
                        B = (0, s.useCallback)(
                            (e) => {
                                d || (E && E(e), T(!1));
                            },
                            [d, E],
                        ),
                        F = r()(
                            l.Z.base,
                            l.Z[`base__${i}`],
                            {
                                [l.Z.base__disabled]: d,
                                [l.Z[`base__${t}`]]: t,
                                [l.Z.base__focus]: x,
                                [l.Z.base__highlightActive]: L,
                                [l.Z.base__firstHover]: S,
                            },
                            u,
                        ),
                        U = r()(l.Z.state, l.Z.state__default);
                    return (
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mousedown', M),
                                () => {
                                    document.removeEventListener('mousedown', M);
                                }
                            ),
                            [M],
                        ),
                        (0, s.useEffect)(() => {
                            O(a);
                        }, [a]),
                        o().createElement(
                            'div',
                            {
                                ref: f,
                                className: F,
                                onMouseEnter: W,
                                onMouseMove: A,
                                onMouseUp: N,
                                onMouseDown: D,
                                onMouseLeave: B,
                                onClick: H,
                            },
                            i !== _.L.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: l.Z.back }),
                                    o().createElement('span', { className: l.Z.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: U },
                                o().createElement('span', { className: l.Z.stateDisabled }),
                                o().createElement('span', { className: l.Z.stateHighlightHover }),
                                o().createElement('span', { className: l.Z.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: l.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                d.defaultProps = { type: _.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                (0, s.memo)(d);
            },
            2106: (e, t, a) => {
                let i, r;
                a.d(t, { L: () => i }),
                    (function (e) {
                        (e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost');
                    })(i || (i = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(r || (r = {}));
            },
            3495: (e, t, a) => {
                a.d(t, { Y: () => u });
                var i = a(3138),
                    r = a(6179),
                    n = a(1043),
                    s = a(5262);
                const o = i.O.client.getSize('rem'),
                    l = o.width,
                    _ = o.height,
                    d = Object.assign({ width: l, height: _ }, (0, s.T)(l, _, n.j)),
                    u = (0, r.createContext)(d);
            },
            1039: (e, t, a) => {
                a(3138), a(6536), a(6179), a(3495), a(1043), a(5262);
            },
            6010: (e, t, a) => {
                var i = a(6179),
                    r = a(7382),
                    n = a(3495);
                const s = ['children'];
                const o = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                i,
                                r = {},
                                n = Object.keys(e);
                            for (i = 0; i < n.length; i++) (a = n[i]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, s);
                    const o = (0, i.useContext)(n.Y),
                        l = o.extraLarge,
                        _ = o.large,
                        d = o.medium,
                        u = o.small,
                        c = o.extraSmall,
                        h = o.extraLargeWidth,
                        m = o.largeWidth,
                        g = o.mediumWidth,
                        v = o.smallWidth,
                        w = o.extraSmallWidth,
                        E = o.extraLargeHeight,
                        b = o.largeHeight,
                        f = o.mediumHeight,
                        p = o.smallHeight,
                        x = o.extraSmallHeight,
                        O = { extraLarge: E, large: b, medium: f, small: p, extraSmall: x };
                    if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                        if (a.extraLarge && l) return t;
                        if (a.large && _) return t;
                        if (a.medium && d) return t;
                        if (a.small && u) return t;
                        if (a.extraSmall && c) return t;
                    } else {
                        if (a.extraLargeWidth && h) return (0, r.H)(t, a, O);
                        if (a.largeWidth && m) return (0, r.H)(t, a, O);
                        if (a.mediumWidth && g) return (0, r.H)(t, a, O);
                        if (a.smallWidth && v) return (0, r.H)(t, a, O);
                        if (a.extraSmallWidth && w) return (0, r.H)(t, a, O);
                        if (
                            !(a.extraLargeWidth || a.largeWidth || a.mediumWidth || a.smallWidth || a.extraSmallWidth)
                        ) {
                            if (a.extraLargeHeight && E) return t;
                            if (a.largeHeight && b) return t;
                            if (a.mediumHeight && f) return t;
                            if (a.smallHeight && p) return t;
                            if (a.extraSmallHeight && x) return t;
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
                (0, i.memo)(o);
            },
            7382: (e, t, a) => {
                a.d(t, { H: () => i });
                const i = (e, t, a) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && a.extraLarge) ||
                          (t.largeHeight && a.large) ||
                          (t.mediumHeight && a.medium) ||
                          (t.smallHeight && a.small) ||
                          (t.extraSmallHeight && a.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, a) => {
                a(6010), a(1039), a(3495);
            },
            1043: (e, t, a) => {
                a.d(t, { j: () => i });
                const i = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, a) => {
                var i;
                function r(e, t, a) {
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
                        })(e, a),
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
                        })(t, a),
                        n = Math.min(i, r);
                    return {
                        extraLarge: n === a.extraLarge.weight,
                        large: n === a.large.weight,
                        medium: n === a.medium.weight,
                        small: n === a.small.weight,
                        extraSmall: n === a.extraSmall.weight,
                        extraLargeWidth: i === a.extraLarge.weight,
                        largeWidth: i === a.large.weight,
                        mediumWidth: i === a.medium.weight,
                        smallWidth: i === a.small.weight,
                        extraSmallWidth: i === a.extraSmall.weight,
                        extraLargeHeight: r === a.extraLarge.weight,
                        largeHeight: r === a.large.weight,
                        mediumHeight: r === a.medium.weight,
                        smallHeight: r === a.small.weight,
                        extraSmallHeight: r === a.extraSmall.weight,
                    };
                }
                a.d(t, { T: () => r }),
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
            7078: (e, t, a) => {
                a(6179), a(2056);
            },
            2056: (e, t, a) => {
                a(9916), a(6179);
            },
            527: (e, t, a) => {
                a.r(t),
                    a.d(t, { mouse: () => d, off: () => l, on: () => o, onResize: () => n, onScaleUpdated: () => s });
                var i = a(2472),
                    r = a(1176);
                const n = (0, i.E)('clientResized'),
                    s = (0, i.E)('self.onScaleUpdated'),
                    o = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    _ = { down: (0, i.E)('mousedown'), up: (0, i.E)('mouseup'), move: (0, i.E)('mousemove') };
                const d = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function a() {
                        e.enabled && (0, r.R)(!0);
                    }
                    function i() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', a))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', a))
                            : (0, r.R)(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (t, a) => (
                            (t[a] = (function (t) {
                                return (a) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const n = `mouse${t}`,
                                        s = _[t]((e) => a([e, 'outside']));
                                    function o(e) {
                                        a([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(n, o),
                                        i(),
                                        () => {
                                            r &&
                                                (s(),
                                                window.removeEventListener(n, o),
                                                (e.listeners -= 1),
                                                i(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(a)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, n, {
                        disable() {
                            (e.enabled = !1), i();
                        },
                        enable() {
                            (e.enabled = !0), i();
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
            5959: (e, t, a) => {
                a.r(t),
                    a.d(t, {
                        events: () => i,
                        getMouseGlobalPosition: () => n,
                        getSize: () => r,
                        graphicsQuality: () => s,
                    });
                var i = a(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, a) => {
                function i(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                a.d(t, { R: () => i });
            },
            2472: (e, t, a) => {
                function i(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                a.d(t, { E: () => i });
            },
            3138: (e, t, a) => {
                a.d(t, { O: () => r });
                var i = a(5959);
                const r = { view: a(7641), client: i };
            },
            3722: (e, t, a) => {
                function i(e, t, a = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, a);
                }
                function r(e, t, a) {
                    return `url(${i(e, t, a)})`;
                }
                a.r(t), a.d(t, { getBgUrl: () => r, getTextureUrl: () => i });
            },
            6112: (e, t, a) => {
                a.d(t, { W: () => i });
                const i = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, a) => {
                a.d(t, { U: () => r });
                var i = a(2472);
                const r = {
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
            7641: (e, t, a) => {
                a.r(t),
                    a.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => o,
                        children: () => i,
                        displayStatus: () => r.W,
                        displayStatusIs: () => L,
                        events: () => n.U,
                        extraSize: () => T,
                        forceTriggerMouseMove: () => O,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => _,
                        getDisplayStatus: () => y,
                        getScale: () => v,
                        getSize: () => c,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => x,
                        isFocused: () => f,
                        pxToRem: () => w,
                        remToPx: () => E,
                        resize: () => h,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => u,
                        whenTutorialReady: () => k,
                    });
                var i = a(3722),
                    r = a(6112),
                    n = a(6538),
                    s = a(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function _(e, t, a, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, a, i);
                }
                function d(e, t, a) {
                    return viewEnv.addDataChangedCallback(e, t, a);
                }
                function u(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function c(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function h(e, t, a = 'px') {
                    return 'rem' === a ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function m(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: E(t.x), y: E(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function v() {
                    return viewEnv.getScale();
                }
                function w(e) {
                    return viewEnv.pxToRem(e);
                }
                function E(e) {
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
                function x() {
                    return viewEnv.isEventHandled();
                }
                function O() {
                    viewEnv.forceTriggerMouseMove();
                }
                function y() {
                    return viewEnv.getShowingStatus();
                }
                const L = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
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
            8566: (e, t, a) => {
                a.d(t, { qP: () => _ });
                const i = ['args'];
                const r = 2,
                    n = 16,
                    s = 32,
                    o = 64,
                    l = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        i,
                                        r = {},
                                        n = Object.keys(e);
                                    for (i = 0; i < n.length; i++) (a = n[i]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                    return r;
                                })(t, i);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, s, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, t]) => {
                                                  const a = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: a, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: a, name: e, bool: t };
                                                      default:
                                                          return { __Type: a, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: a, type: e });
                        var r;
                    },
                    _ = {
                        close(e) {
                            l('popover' === e ? r : s);
                        },
                        minimize() {
                            l(o);
                        },
                        move(e) {
                            l(n, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            6536: (e, t, a) => {
                a(6179);
            },
            5521: (e, t, a) => {
                let i, r;
                a.d(t, { n: () => i }),
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
                    })(i || (i = {})),
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
            7727: (e, t, a) => {
                function i(e) {
                    engine.call('PlaySound', e);
                }
                a.d(t, { G: () => i });
            },
            1358: (e, t, a) => {
                a.d(t, { Z: () => n });
                var i = a(3138);
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
                    addCallback(e, t, a = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const n = i.O.view.addModelObserver(e, a, r);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = t),
                                  a > 0 && (this._views[a] ? this._views[a].push(n) : (this._views[a] = [n])))
                                : console.error("Can't add callback for model:", e),
                            n
                        );
                    }
                    removeCallback(e, t = 0) {
                        let a = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((a = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            a || console.error("Can't remove callback by id:", e),
                            a
                        );
                    }
                    _emmitDataChanged(e, t, a) {
                        a.forEach((a) => {
                            const i = this._callbacks[a];
                            void 0 !== i && i(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const n = r;
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
            9916: (e, t, a) => {
                a.d(t, { ry: () => w });
                class i {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: a }) => {
                                    let i = e.target;
                                    do {
                                        if (i === t) return;
                                        i = i.parentNode;
                                    } while (i);
                                    a();
                                });
                            });
                    }
                    static get instance() {
                        return i.__instance || (i.__instance = new i()), i.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const a = e,
                            i = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== a || t !== i)),
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
                i.__instance = void 0;
                const r = i;
                var n = a(1358);
                var s = a(8613);
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
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var c = a(5521),
                    h = a(3138);
                const m = ['args'];
                function g(e, t, a, i, r, n, s) {
                    try {
                        var o = e[n](s),
                            l = o.value;
                    } catch (e) {
                        return void a(e);
                    }
                    o.done ? t(l) : Promise.resolve(l).then(i, r);
                }
                const v = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    w = (function () {
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
                                        a = arguments;
                                    return new Promise(function (i, r) {
                                        var n = e.apply(t, a);
                                        function s(e) {
                                            g(n, i, r, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            g(n, i, r, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    E = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                n = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        i,
                                        r = {},
                                        n = Object.keys(e);
                                    for (i = 0; i < n.length; i++) (a = n[i]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                    return r;
                                })(t, m);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, n, {
                                          arguments:
                                              ((i = r),
                                              Object.entries(i).map(([e, t]) => {
                                                  const a = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          a.number = t;
                                                          break;
                                                      case 'boolean':
                                                          a.bool = t;
                                                          break;
                                                      default:
                                                          a.string = t.toString();
                                                  }
                                                  return a;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, n));
                        } else viewEnv.handleViewEvent({ __Type: a, type: e });
                        var i;
                    },
                    b = () => E(o.CLOSE),
                    f = (e, t) => {
                        e.keyCode === c.n.ESCAPE && t();
                    };
                var p = a(7572);
                const x = r.instance,
                    O = {
                        DataTracker: n.Z,
                        ViewModel: p.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: _,
                        TimeFormatType: d,
                        DateFormatType: u,
                        makeGlobalBoundingBox: v,
                        sendMoveEvent: (e) => E(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: () => E(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, a = 0) => {
                            E(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: a, args: t });
                        },
                        sendShowPopOverEvent: (e, t, a, i, r = R.invalid('resId'), n) => {
                            const s = h.O.view.getViewGlobalPosition(),
                                l = a.getBoundingClientRect(),
                                _ = l.x,
                                d = l.y,
                                u = l.width,
                                c = l.height,
                                m = {
                                    x: h.O.view.pxToRem(_) + s.x,
                                    y: h.O.view.pxToRem(d) + s.y,
                                    width: h.O.view.pxToRem(u),
                                    height: h.O.view.pxToRem(c),
                                };
                            E(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: i || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: v(m),
                                on: !0,
                                args: n,
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
                        handleViewEvent: E,
                        onBindingsReady: w,
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
                            const a = {};
                            if ('object' != typeof t) return t;
                            for (const i in t)
                                if (Object.prototype.hasOwnProperty.call(t, i)) {
                                    const r = Object.prototype.toString.call(t[i]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[i];
                                        a[i] = [];
                                        for (let t = 0; t < r.length; t++) a[i].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (a[i] = e(t[i]))
                                            : (a[i] = t[i]);
                                }
                            return a;
                        },
                        ClickOutsideManager: x,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = O;
            },
            8613: (e, t, a) => {
                a.d(t, { Z5: () => i, cy: () => r });
                const i = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, a) => userLocale.getTimeFormat(e, t, void 0 === a || a),
                        getTimeString: (e, t, a) => userLocale.getTimeString(e, t, void 0 === a || a),
                    };
            },
            1922: (e, t, a) => {
                a(6483), a(7739), a(6179), a(1960);
                let i;
                !(function (e) {
                    (e.None = ''),
                        (e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge');
                })(i || (i = {}));
            },
            4814: (e, t, a) => {
                a(6179), a(1922), a(6483), a(3457), a(7078);
            },
            6880: (e, t, a) => {
                a.d(t, { Z: () => i });
                const i = {
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
            },
            1960: () => {},
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var a = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](a, a.exports, __webpack_require__), a.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, a, i) => {
            if (!t) {
                var r = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, a, i] = deferred[l], n = !0, s = 0; s < t.length; s++)
                        (!1 & i || r >= i) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((n = !1), i < r && (r = i));
                    if (n) {
                        deferred.splice(l--, 1);
                        var o = a();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            i = i || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > i; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, a, i];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var a in t)
                __webpack_require__.o(t, a) &&
                    !__webpack_require__.o(e, a) &&
                    Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
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
        (__webpack_require__.j = 723),
        (() => {
            var e = { 723: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var i,
                        r,
                        [n, s, o] = a,
                        l = 0;
                    if (n.some((t) => 0 !== e[t])) {
                        for (i in s) __webpack_require__.o(s, i) && (__webpack_require__.m[i] = s[i]);
                        if (o) var _ = o(__webpack_require__);
                    }
                    for (t && t(a); l < n.length; l++)
                        (r = n[l]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(_);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(4814));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
