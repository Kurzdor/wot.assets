(() => {
    'use strict';
    var __webpack_modules__ = {
            3495: (e, u, t) => {
                t.d(u, { Y: () => E });
                var a = t(3138),
                    n = t(6179),
                    r = t(1043),
                    i = t(5262);
                const o = a.O.client.getSize('rem'),
                    l = o.width,
                    s = o.height,
                    c = Object.assign({ width: l, height: s }, (0, i.T)(l, s, r.j)),
                    E = (0, n.createContext)(c);
            },
            1039: (e, u, t) => {
                t(3138), t(6536), t(6179), t(3495), t(1043), t(5262);
            },
            6010: (e, u, t) => {
                var a = t(6179),
                    n = t(7382),
                    r = t(3495);
                const i = ['children'];
                const o = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, i);
                    const o = (0, a.useContext)(r.Y),
                        l = o.extraLarge,
                        s = o.large,
                        c = o.medium,
                        E = o.small,
                        m = o.extraSmall,
                        d = o.extraLargeWidth,
                        A = o.largeWidth,
                        F = o.mediumWidth,
                        h = o.smallWidth,
                        D = o.extraSmallWidth,
                        g = o.extraLargeHeight,
                        C = o.largeHeight,
                        B = o.mediumHeight,
                        _ = o.smallHeight,
                        f = o.extraSmallHeight,
                        v = { extraLarge: g, large: C, medium: B, small: _, extraSmall: f };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && l) return u;
                        if (t.large && s) return u;
                        if (t.medium && c) return u;
                        if (t.small && E) return u;
                        if (t.extraSmall && m) return u;
                    } else {
                        if (t.extraLargeWidth && d) return (0, n.H)(u, t, v);
                        if (t.largeWidth && A) return (0, n.H)(u, t, v);
                        if (t.mediumWidth && F) return (0, n.H)(u, t, v);
                        if (t.smallWidth && h) return (0, n.H)(u, t, v);
                        if (t.extraSmallWidth && D) return (0, n.H)(u, t, v);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && g) return u;
                            if (t.largeHeight && C) return u;
                            if (t.mediumHeight && B) return u;
                            if (t.smallHeight && _) return u;
                            if (t.extraSmallHeight && f) return u;
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
            7382: (e, u, t) => {
                t.d(u, { H: () => a });
                const a = (e, u, t) =>
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
                t.d(u, { YN: () => a.Y });
                t(6010), t(1039);
                var a = t(3495);
            },
            1043: (e, u, t) => {
                t.d(u, { j: () => a });
                const a = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, u, t) => {
                var a;
                function n(e, u, t) {
                    const a = (function (e, u) {
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
                        n = (function (e, u) {
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
                t.d(u, { T: () => n }),
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
            527: (e, u, t) => {
                t.r(u),
                    t.d(u, { mouse: () => c, off: () => l, on: () => o, onResize: () => r, onScaleUpdated: () => i });
                var a = t(2472),
                    n = t(1176);
                const r = (0, a.E)('clientResized'),
                    i = (0, a.E)('self.onScaleUpdated'),
                    o = (e, u) => engine.on(e, u),
                    l = (e, u) => engine.off(e, u),
                    s = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, n.R)(!0);
                    }
                    function a() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', u),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', u),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, n.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const r = `mouse${u}`,
                                        i = s[u]((e) => t([e, 'outside']));
                                    function o(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, o),
                                        a(),
                                        () => {
                                            n &&
                                                (i(),
                                                window.removeEventListener(r, o),
                                                (e.listeners -= 1),
                                                a(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
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
            5959: (e, u, t) => {
                t.r(u),
                    t.d(u, {
                        events: () => a,
                        getMouseGlobalPosition: () => r,
                        getSize: () => n,
                        graphicsQuality: () => i,
                    });
                var a = t(527);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => a });
            },
            2472: (e, u, t) => {
                function a(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => a });
            },
            3138: (e, u, t) => {
                t.d(u, { O: () => n });
                var a = t(5959);
                const n = { view: t(7641), client: a };
            },
            3722: (e, u, t) => {
                function a(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function n(e, u, t) {
                    return `url(${a(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => n, getTextureUrl: () => a });
            },
            6112: (e, u, t) => {
                t.d(u, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                t.d(u, { U: () => n });
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
            7641: (e, u, t) => {
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => a,
                        displayStatus: () => n.W,
                        displayStatusIs: () => w,
                        events: () => r.U,
                        extraSize: () => b,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => s,
                        getDisplayStatus: () => p,
                        getScale: () => h,
                        getSize: () => m,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => f,
                        isFocused: () => B,
                        pxToRem: () => D,
                        remToPx: () => g,
                        resize: () => d,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => _,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => S,
                    });
                var a = t(3722),
                    n = t(6112),
                    r = t(6538),
                    i = t(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function s(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: g(u.x), y: g(u.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function h() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function g(e) {
                    return viewEnv.remToPx(e);
                }
                function C(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function B() {
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
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === n.W[u]), e),
                        {},
                    ),
                    b = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                t.d(u, { qP: () => s });
                const a = ['args'];
                const n = 2,
                    r = 16,
                    i = 32,
                    o = 64,
                    l = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, a);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    s = {
                        close(e) {
                            l('popover' === e ? n : i);
                        },
                        minimize() {
                            l(o);
                        },
                        move(e) {
                            l(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            6536: (e, u, t) => {
                t(6179);
            },
            5415: (e, u, t) => {
                t.d(u, { GS: () => s, cJ: () => i });
                var a = t(6179),
                    n = t(7739),
                    r = t(1043);
                let i, o, l;
                !(function (e) {
                    (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = r.j.small.width)] = 'Small'),
                        (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                        (e[(e.Large = r.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge');
                })(i || (i = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.width)] = 'Small'),
                            (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                            (e[(e.Large = r.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge');
                    })(o || (o = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = r.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.height)] = 'Small'),
                            (e[(e.Medium = r.j.medium.height)] = 'Medium'),
                            (e[(e.Large = r.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.height)] = 'ExtraLarge');
                    })(l || (l = {}));
                const s = () => {
                    const e = (0, a.useContext)(n.YN),
                        u = e.width,
                        t = e.height,
                        r = ((e) => {
                            switch (!0) {
                                case e.extraLarge:
                                    return i.ExtraLarge;
                                case e.large:
                                    return i.Large;
                                case e.medium:
                                    return i.Medium;
                                case e.small:
                                    return i.Small;
                                case e.extraSmall:
                                    return i.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), i.ExtraSmall;
                            }
                        })(e),
                        s = ((e) => {
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
                        c = ((e) => {
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
                    return { mediaSize: r, mediaWidth: s, mediaHeight: c, remScreenWidth: u, remScreenHeight: t };
                };
            },
            5521: (e, u, t) => {
                let a, n;
                t.d(u, { n: () => a }),
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
            3649: (e, u, t) => {
                t.d(u, { uF: () => n });
                t(1281);
                let a;
                function n(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(a || (a = {}));
                (() => {
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
                })();
            },
            1358: (e, u, t) => {
                t.d(u, { Z: () => r });
                var a = t(3138);
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
                    addCallback(e, u, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = a.O.view.addModelObserver(e, t, n);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
                            const a = this._callbacks[t];
                            void 0 !== a && a(e, u);
                        });
                    }
                }
                n.__instance = void 0;
                const r = n;
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
            9916: (e, u, t) => {
                t.d(u, { ry: () => D, Eu: () => g });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let a = e.target;
                                    do {
                                        if (a === u) return;
                                        a = a.parentNode;
                                    } while (a);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            a = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== a)),
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
                    s = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(5521),
                    d = t(3138);
                const A = ['args'];
                function F(e, u, t, a, n, r, i) {
                    try {
                        var o = e[r](i),
                            l = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(l) : Promise.resolve(l).then(a, n);
                }
                const h = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    D = (function () {
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
                                    return new Promise(function (a, n) {
                                        var r = e.apply(u, t);
                                        function i(e) {
                                            F(r, a, n, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            F(r, a, n, i, o, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    g = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    C = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, A);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    B = () => C(o.CLOSE),
                    _ = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    };
                var f = t(7572);
                const v = n.instance,
                    p = {
                        DataTracker: r.Z,
                        ViewModel: f.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: s,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: h,
                        sendMoveEvent: (e) => C(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: B,
                        sendClosePopOverEvent: () => C(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            C(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, n = R.invalid('resId'), r) => {
                            const i = d.O.view.getViewGlobalPosition(),
                                l = t.getBoundingClientRect(),
                                s = l.x,
                                c = l.y,
                                E = l.width,
                                m = l.height,
                                A = {
                                    x: d.O.view.pxToRem(s) + i.x,
                                    y: d.O.view.pxToRem(c) + i.y,
                                    width: d.O.view.pxToRem(E),
                                    height: d.O.view.pxToRem(m),
                                };
                            C(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: h(A),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => _(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            _(e, B);
                        },
                        handleViewEvent: C,
                        onBindingsReady: D,
                        onLayoutReady: g,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const a in u)
                                if (Object.prototype.hasOwnProperty.call(u, a)) {
                                    const n = Object.prototype.toString.call(u[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = u[a];
                                        t[a] = [];
                                        for (let u = 0; u < n.length; u++) t[a].push({ value: e(n[u].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = e(u[a]))
                                            : (t[a] = u[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: v,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = p;
            },
            8613: (e, u, t) => {
                t.d(u, { Z5: () => a, cy: () => n });
                const a = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    n = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
            },
            9155: (e, u, t) => {
                t.d(u, { t: () => F });
                var a = t(4969),
                    n = t(9174),
                    r = t(3946);
                function i() {
                    return !1;
                }
                console.log;
                var o = t(6179),
                    l = t.n(o),
                    s = t(3138);
                function c(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return E(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return E(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function E(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const m = (e) => (0 === e ? window : window.subViews.get(e));
                var d = t(2290);
                const A = ((e, u) => {
                        const t = (0, o.createContext)({});
                        return [
                            function ({ mode: a = 'real', options: r, children: E, mocks: d }) {
                                const A = (0, o.useRef)([]),
                                    F = (t, a, r) => {
                                        var o;
                                        const l = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = m,
                                                context: a = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function r(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = n.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const i = (e) => {
                                                    const n = t(u),
                                                        r = a.split('.').reduce((e, u) => e[u], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (t, r) => {
                                                        const o = 'string' == typeof r ? `${a}.${r}` : a,
                                                            l = s.O.view.addModelObserver(o, u, !0);
                                                        return n.set(l, t), e && t(i(r)), l;
                                                    },
                                                    readByPath: i,
                                                    createCallback: (e, u) => {
                                                        const t = i(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = i(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = c(n.keys()); !(e = t()).done; ) r(e.value, u);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(a),
                                            E =
                                                'real' === t
                                                    ? l
                                                    : Object.assign({}, l, {
                                                          readByPath:
                                                              null != (o = null == r ? void 0 : r.getter)
                                                                  ? o
                                                                  : () => {},
                                                      }),
                                            d = (e) =>
                                                'mocks' === t ? (null == r ? void 0 : r.getter(e)) : E.readByPath(e),
                                            F = (e) => A.current.push(e),
                                            h = e({
                                                mode: t,
                                                readByPath: d,
                                                externalModel: E,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const a = null != u ? u : d(e),
                                                            r = n.LO.box(a, { equals: i });
                                                        return (
                                                            'real' === t &&
                                                                E.subscribe(
                                                                    (0, n.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const a = null != u ? u : d(e),
                                                            r = n.LO.box(a, { equals: i });
                                                        return (
                                                            'real' === t &&
                                                                E.subscribe(
                                                                    (0, n.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const a = d(u);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, u) => ((e[u] = n.LO.box(a[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    E.subscribe(
                                                                        (0, n.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                r[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = e,
                                                                i = Object.entries(r),
                                                                o = i.reduce(
                                                                    (e, [u, t]) => ((e[t] = n.LO.box(a[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    E.subscribe(
                                                                        (0, n.aD)((e) => {
                                                                            i.forEach(([u, t]) => {
                                                                                o[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: F,
                                            }),
                                            D = { mode: t, model: h, externalModel: E, cleanup: F };
                                        return {
                                            model: h,
                                            controls: 'mocks' === t && r ? r.controls(D) : u(D),
                                            externalModel: E,
                                            mode: t,
                                        };
                                    },
                                    h = (0, o.useRef)(!1),
                                    D = (0, o.useState)(a),
                                    g = D[0],
                                    C = D[1],
                                    B = (0, o.useState)(() => F(a, r, d)),
                                    _ = B[0],
                                    f = B[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        h.current ? f(F(g, r, d)) : (h.current = !0);
                                    }, [d, g, r]),
                                    (0, o.useEffect)(() => {
                                        C(a);
                                    }, [a]),
                                    (0, o.useEffect)(
                                        () => () => {
                                            _.externalModel.dispose(), A.current.forEach((e) => e());
                                        },
                                        [_],
                                    ),
                                    l().createElement(t.Provider, { value: _ }, E)
                                );
                            },
                            () => (0, o.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = {
                                    deathCamHUD: e.object('deathCamHUD'),
                                    marker: e.object('marker'),
                                    valueWidth: n.LO.box('unset'),
                                    leaderVisible: n.LO.box(!1),
                                    tableVisible: n.LO.box(!1),
                                },
                                t = (0, r.Om)(() => {
                                    const e = Object.assign({}, u.marker.get());
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
                                        ].forEach((u) => delete e[u]),
                                        e
                                    );
                                }),
                                i = (0, r.Om)(() => {
                                    const e = u.marker.get(),
                                        t = e.isKillerUnspotted,
                                        n = e.impactMode,
                                        r = e.shellType,
                                        i = e.shellIcon,
                                        o = e.armorNominal,
                                        l = e.caliberRule,
                                        s = e.angleRicochet;
                                    return {
                                        isKillerUnspotted: t,
                                        impactMode: n,
                                        shellType: r,
                                        shellIcon: i,
                                        armorNominal: o,
                                        is3CaliberRuleApplied: l === a.fE.ThreeCaliber,
                                        angleRicochet: s,
                                    };
                                }),
                                o = (0, r.Om)(() =>
                                    (0, d.uz)(
                                        t(),
                                        i().impactMode,
                                        u.marker.get().phase,
                                        u.marker.get().isKillerUnspotted,
                                        u.marker.get().isSimplified,
                                    ),
                                ),
                                l = n.LO.box(o()),
                                s = (0, r.Om)(() => {
                                    const e = u.marker.get();
                                    return {
                                        angleRicochet: e.angleRicochet,
                                        angleFailure: e.angleFailure,
                                        angleImpact: e.angleImpact,
                                    };
                                }),
                                c = (0, r.Om)(() => {
                                    const e = u.marker.get();
                                    return {
                                        phaseTimePassed: e.phaseTimePassed,
                                        phaseDuration: e.phaseDuration,
                                        isAdvanced: u.marker.get().isAdvanced,
                                    };
                                }),
                                E = (0, r.Om)(() => u.marker.get().isMarkerVisible),
                                m = (0, r.Om)(() => E() || u.leaderVisible.get()),
                                A = (0, r.Om)(() => !!E() && u.tableVisible.get()),
                                F = (0, r.Om)(() => o().length),
                                h = (0, r.Om)((e) => o()[e]),
                                D = (0, r.Om)((e, u) => h(e).animationParams[u]),
                                g = (0, r.Om)((e) => h(e).fullHeight),
                                C = (0, r.Om)((e) => h(e).basicHeight),
                                B = (0, r.Om)((e) => h(e).sections.length),
                                _ = (0, r.Om)((e, u) => h(e).sections[u]),
                                f = (0, r.Om)((e, u) => _(e, u).lines.length),
                                v = (0, r.Om)((e, u) => _(e, u).fullHeight),
                                p = (0, r.Om)((e, u, t) => _(e, u).lines[t]),
                                w = (0, r.Om)(() =>
                                    o().some((e) =>
                                        e.sections.some((e) => e.lines.some((e) => 'angleImpact' === e.name)),
                                    ),
                                ),
                                b = (0, r.Om)((e, u) => _(e, u).hasTopSeparator);
                            return Object.assign({}, u, {
                                table: l,
                                computes: {
                                    table: {
                                        getLeaderVisibility: m,
                                        getProgressProps: c,
                                        getData: t,
                                        getCardsCount: F,
                                        getHasAngleIndicator: w,
                                        getVisibility: A,
                                    },
                                    card: {
                                        getAnimationParams: D,
                                        getFullHeight: g,
                                        getBasicHeight: C,
                                        getSectionsCount: B,
                                    },
                                    section: {
                                        getHeight: v,
                                        getLinesCount: f,
                                        getLine: p,
                                        getAngles: s,
                                        getHasTopSeparator: b,
                                    },
                                    getCommonDataLineProps: i,
                                },
                            });
                        },
                        ({ model: e }) =>
                            (function (e) {
                                const u = {};
                                for (const t in e)
                                    if (Object.prototype.hasOwnProperty.call(e, t)) {
                                        const a = e[t];
                                        u[t] = (0, n.aD)(a);
                                    }
                                return u;
                            })({
                                setValueWidth: (u) => e.valueWidth.set(u),
                                setTableVisibility: (u) => e.tableVisible.set(u),
                                setLeaderVisibility: (u) => e.leaderVisible.set(u),
                            }),
                    ),
                    F = (A[0], A[1]);
            },
            907: (e, u, t) => {
                var a = t(6179),
                    n = t.n(a),
                    r = t(3403),
                    i = t(5415),
                    o = t(9155);
                const l = 'MarkerView_base_1b',
                    s = 'MarkerView_base__hidden_c2';
                var c = t(1433);
                const E = (e) => e * e,
                    m = 'Leader_base_ea';
                var d = t(7030);
                const A = (0, r.Pi)(() => {
                        const e = (0, o.t)(),
                            u = e.model.computes.table,
                            t = e.controls.setTableVisibility,
                            r = u.getLeaderVisibility(),
                            i = (0, a.useRef)(null),
                            l = (0, a.useState)(viewEnv.getScale()),
                            s = l[0],
                            A = l[1];
                        var F, h;
                        (F = () => A(viewEnv.getScale())),
                            (h = []),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', F), () => window.removeEventListener('resize', F)
                                ),
                                h,
                            ),
                            ((e, u) => {
                                (0, a.useEffect)(() => {
                                    let u = null;
                                    return (
                                        (u = requestAnimationFrame(() => {
                                            u = requestAnimationFrame(() => {
                                                (u = null), e();
                                            });
                                        })),
                                        () => {
                                            null !== u && cancelAnimationFrame(u);
                                        }
                                    );
                                }, u);
                            })(() => {
                                var e;
                                const u = null == (e = i.current) ? void 0 : e.getContext('2d');
                                if (!u) return;
                                const t = c.SA * s,
                                    a = c.Cb * s,
                                    n = c.oP * s,
                                    r = c.ut * s,
                                    o = c.lG * s;
                                u.clearRect(0, 0, c.d2, c.Cb), (u.fillStyle = 'white');
                                const l = u.createLinearGradient(t, a, n, r);
                                l.addColorStop(0, 'rgba(255, 255, 255, 0)'),
                                    l.addColorStop(0.1, 'white'),
                                    l.addColorStop(1, 'white'),
                                    (u.strokeStyle = l),
                                    u.moveTo(t, a),
                                    u.lineTo(n, r),
                                    u.moveTo(n, r),
                                    u.arc(n, r, o, 0, 2 * Math.PI),
                                    u.stroke(),
                                    u.fill();
                            }, []);
                        const D = (0, d.useSpring)({
                            from: { width: '0rem' },
                            to: { width: r ? `${c.d2}rem` : '0rem' },
                            config: { duration: c.zn, easing: E },
                            onRest: () => t(r),
                        });
                        return n().createElement(
                            d.animated.div,
                            { style: D, className: m },
                            n().createElement('canvas', { ref: i, width: c.d2 * s, height: c.Cb * s }),
                        );
                    }),
                    F = (e, u) => {
                        const t = [];
                        for (let a = 0; a < e; a++) t.push(u(a));
                        return t;
                    };
                var h = t(6483),
                    D = t.n(h);
                const g = 'Section_base_d7',
                    C = 'Section_base__separator_9d';
                var B = t(9916);
                const _ = 31,
                    f = Math.ceil(42),
                    v = (e) => (Math.PI * e) / 180,
                    p = 'ImpactIndicator_base_bd',
                    w = 'ImpactIndicator_shadowedOverlay_5d';
                function b(e, u, t, a, n, r, i) {
                    try {
                        var o = e[r](i),
                            l = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(l) : Promise.resolve(l).then(a, n);
                }
                const S = (0, r.Pi)(() => {
                        const e = (0, o.t)().model.computes.section.getAngles(),
                            u = e.angleRicochet,
                            t = e.angleFailure,
                            r = e.angleImpact,
                            l = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            c = ((0, i.GS)().mediaSize === i.cJ.ExtraSmall ? 0.9 : 1) * viewEnv.getScale(),
                            E = 48 * c,
                            m = 84 * c,
                            d = (function () {
                                var e,
                                    a =
                                        ((e = function* () {
                                            if ((yield (0, B.Eu)(), !l.current || !s.current)) return;
                                            const e = l.current.getContext('2d'),
                                                a = s.current.getContext('2d');
                                            if (!e || !a) return;
                                            (e.canvas.width = E),
                                                (e.canvas.height = m),
                                                (a.canvas.width = E),
                                                (a.canvas.height = m),
                                                e.scale(c, c),
                                                a.scale(c, c),
                                                e.clearRect(0, 0, E, m),
                                                a.clearRect(0, 0, E, m),
                                                (e.strokeStyle = 'white'),
                                                (e.fillStyle = 'white'),
                                                (a.strokeStyle = 'white'),
                                                (a.fillStyle = 'white');
                                            const n = v(u),
                                                i = v(t),
                                                o = v(r);
                                            ((e, u) => {
                                                e.save(),
                                                    e.beginPath(),
                                                    (e.fillStyle = '#4c4c4c'),
                                                    e.moveTo(6, f),
                                                    e.arc(6, f, _, v(-90), -u),
                                                    e.moveTo(6, f),
                                                    e.arc(6, f, _, v(90), u, !0),
                                                    e.fill(),
                                                    e.restore();
                                            })(e, n),
                                                ((e, u, t) => {
                                                    e.save(),
                                                        e.beginPath(),
                                                        (e.fillStyle = '#7b7b7b'),
                                                        e.moveTo(6, f),
                                                        e.arc(6, f, _, -u, -t),
                                                        e.moveTo(6, f),
                                                        e.arc(6, f, _, u, t, !0),
                                                        e.fill(),
                                                        e.restore();
                                                })(e, n, i),
                                                ((e, u) => {
                                                    e.save(),
                                                        e.beginPath(),
                                                        (e.fillStyle = '#bfbfbf'),
                                                        e.moveTo(6, f),
                                                        e.arc(6, f, _, -u, u),
                                                        e.fill(),
                                                        e.restore();
                                                })(e, i),
                                                ((e, u) => {
                                                    e.save(),
                                                        (e.fillStyle = '#dcdcdc'),
                                                        e.beginPath(),
                                                        e.moveTo(6, f),
                                                        e.arc(6, f, _, v(0), u),
                                                        e.fill(),
                                                        e.restore();
                                                })(a, o),
                                                ((e) => {
                                                    e.fillRect(4, f, 34, 1);
                                                })(a),
                                                ((e, u) => {
                                                    e.save();
                                                    const t = Math.cos(u),
                                                        a = Math.sin(u);
                                                    e.transform(t, a, -a, t, 6, f),
                                                        ((e) => {
                                                            for (let u = 0; u < 7.75; u++)
                                                                e.fillRect(4 * u, 0, 2, 1), e.moveTo(4 * u + 2, 0);
                                                        })(e),
                                                        ((e) => {
                                                            const u = 0.75;
                                                            e.save(),
                                                                e.translate(33, 0),
                                                                e.beginPath(),
                                                                e.moveTo(0, 0),
                                                                e.lineTo(3, -0.75),
                                                                e.lineTo(6, -0.75),
                                                                e.lineTo(6, u),
                                                                e.lineTo(3, u),
                                                                e.lineTo(0, 0),
                                                                e.moveTo(7, -0.75),
                                                                e.lineTo(9, -0.75),
                                                                e.lineTo(9, u),
                                                                e.lineTo(7, u),
                                                                e.fill(),
                                                                e.restore();
                                                        })(e),
                                                        e.restore();
                                                })(a, o),
                                                ((e) => {
                                                    e.save();
                                                    const u = f - 33,
                                                        t = 66 / 9,
                                                        a = u + 0.5,
                                                        n = a + 1.5,
                                                        r = u + 4.5,
                                                        i = r + 1;
                                                    e.fillRect(3, u, 1.5, 66),
                                                        e.beginPath(),
                                                        (e.lineWidth = 0.5),
                                                        [...new Array(9)].map((u, o) => {
                                                            e.moveTo(0, o * t + a),
                                                                e.lineTo(3, o * t + n),
                                                                e.moveTo(1.5, o * t + r),
                                                                e.lineTo(3, o * t + i);
                                                        }),
                                                        e.stroke(),
                                                        e.restore();
                                                })(a);
                                        }),
                                        function () {
                                            var u = this,
                                                t = arguments;
                                            return new Promise(function (a, n) {
                                                var r = e.apply(u, t);
                                                function i(e) {
                                                    b(r, a, n, i, o, 'next', e);
                                                }
                                                function o(e) {
                                                    b(r, a, n, i, o, 'throw', e);
                                                }
                                                i(void 0);
                                            });
                                        });
                                return function () {
                                    return a.apply(this, arguments);
                                };
                            })();
                        return (
                            d(),
                            n().createElement(
                                'div',
                                { className: p },
                                n().createElement('canvas', { ref: l, width: E, height: m }),
                                n().createElement('canvas', { ref: s, width: E, height: m, className: w }),
                            )
                        );
                    }),
                    x = 'Icon_base_c6';
                var y = t(3138);
                let P;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium');
                })(P || (P = {}));
                const O = R.atlases.deathCam,
                    L = ({ name: e, value: u, impactMode: t, isKillerUnspotted: r }) => {
                        const i =
                                (() => {
                                    const e = (0, a.useState)(y.O.view.getScale()),
                                        u = e[0],
                                        t = e[1];
                                    return (
                                        (0, a.useEffect)(() => {
                                            const e = () => {
                                                t(y.O.view.getScale());
                                            };
                                            return (
                                                window.addEventListener('resize', e),
                                                () => {
                                                    window.removeEventListener('resize', e);
                                                }
                                            );
                                        }, []),
                                        u
                                    );
                                })() > 1
                                    ? P.Medium
                                    : P.Small,
                            o = R.images.gui.maps.icons.shell.$dyn(i);
                        if ('angleImpact' === e) return n().createElement(S, null);
                        {
                            var l;
                            let a = e;
                            return 'shellType' === e
                                ? n().createElement('div', {
                                      className: x,
                                      style: { backgroundImage: `url(${o.$dyn(u.toString())})` },
                                  })
                                : ('deathReason' === e
                                      ? (a = u)
                                      : 'shellDamageBurst' === e || 'shellDamageEffective' === e
                                        ? (a = t)
                                        : 'shootDistance' === e && r && (a = 'unspotted'),
                                  n().createElement('div', {
                                      className: x,
                                      style: { backgroundImage: `url(${null == (l = O[a]) ? void 0 : l.call(O)})` },
                                  }));
                        }
                    };
                var I = t(4969),
                    T = t(3649);
                const H = R.strings.death_cam.marker,
                    M = ['shellArmorAngleGain', 'shellDamageRandomizationFactor', 'damageDistanceModifier'],
                    k = ['shootDistance'];
                I.kb.crew, I.kb.detonation, I.kb.ignition;
                var N;
                !(function (e) {
                    (e.ARMOR_PIERCING = 'ARMOR_PIERCING'),
                        (e.ARMOR_PIERCING_CR = 'ARMOR_PIERCING_CR'),
                        (e.ARMOR_PIERCING_HE = 'ARMOR_PIERCING_HE'),
                        (e.HOLLOW_CHARGE = 'HOLLOW_CHARGE'),
                        (e.HIGH_EXPLOSIVE = 'HIGH_EXPLOSIVE');
                })(N || (N = {}));
                const Q = {
                        [I.gC.armorPiercing]: N.ARMOR_PIERCING,
                        [I.gC.armorPiercingPremium]: N.ARMOR_PIERCING,
                        [I.gC.armorPiercingCr]: N.ARMOR_PIERCING_CR,
                        [I.gC.armorPiercingCrPremium]: N.ARMOR_PIERCING_CR,
                        [I.gC.highExplosive]: N.HIGH_EXPLOSIVE,
                        [I.gC.highExplosivePremium]: N.HIGH_EXPLOSIVE,
                        [I.gC.highExplosiveModern]: N.HIGH_EXPLOSIVE,
                        [I.gC.highExplosiveSpg]: N.HIGH_EXPLOSIVE,
                        [I.gC.highExplosiveSpgStun]: N.HIGH_EXPLOSIVE,
                        [I.gC.highExplosiveModernPremium]: N.HIGH_EXPLOSIVE,
                        [I.gC.hollowCharge]: N.HOLLOW_CHARGE,
                        [I.gC.hollowChargePremium]: N.HOLLOW_CHARGE,
                    },
                    j = (e, u = !1) => {
                        const t = R.strings.item_types.shell[u ? 'kindsAbbreviation' : 'kinds'],
                            a = Q[e];
                        return t[a] ? t[a]() : (console.error('No text for shell type', e), '');
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
                    G = 'ColoredText_unit_3b',
                    V = ({ text: e }) => {
                        const u = /{colorTagOpen}([^{]*){colorTagClose}/g,
                            t = e.split(u);
                        if (t.length <= 1) return n().createElement(n().Fragment, null, e);
                        const a = [],
                            r = u.exec(e).pop();
                        return (
                            t.forEach((e) =>
                                a.push(e === r ? n().createElement('div', { className: G, key: e }, e) : e),
                            ),
                            n().createElement(n().Fragment, null, a)
                        );
                    };
                var z = t(2290);
                const U = (0, r.Pi)(({ cardId: e, sectionId: u, lineId: t, isAdvancedLinesVisible: a }) => {
                        const r = (0, o.t)().model,
                            i = r.valueWidth,
                            l = r.computes,
                            s = l.section,
                            E = l.table,
                            m = l.getCommonDataLineProps,
                            d = s.getLine(e, u, t),
                            A = d.name,
                            F = d.value,
                            h = d.effects,
                            g = d.height,
                            C = m(),
                            B = C.isKillerUnspotted,
                            _ = C.impactMode,
                            f = C.shellType,
                            v = C.shellIcon,
                            p = C.armorNominal,
                            w = C.is3CaliberRuleApplied,
                            b = C.angleRicochet,
                            S = h.has(c.Qm.HeadIconShell) || h.has(c.Qm.HeadIconTank),
                            x = S ? g - c.h - c.YF : g,
                            y = D()(W.base, [[...h].map((e) => W[e])]),
                            O = D()(
                                W.iconContainer,
                                'angleImpact' === A && W.iconContainer__impactAngle,
                                E.getHasAngleIndicator() && W.iconContainer__wide,
                            ),
                            N = D()(
                                W.value,
                                'shootDistance' === A &&
                                    B &&
                                    (model.marker.isSimplified ? W.value__unspottedSimple : W.value__unspottedDetailed),
                            ),
                            Q = (({ name: e, value: u, impactMode: t, armorNominal: a, isKillerUnspotted: n }) => {
                                var r;
                                const i = () => {
                                    const u = H.paramName,
                                        t = e;
                                    return u[t] ? u[t]() : (console.error('No text for Parameter Name', e), '');
                                };
                                switch (e) {
                                    case 'deathReason': {
                                        const e = H.paramName.deathReason,
                                            t = u;
                                        return e[t] ? e[t]() : (console.error('No text for death reason', u), '');
                                    }
                                    case 'shellType':
                                        return j(u);
                                    case 'armorRelative':
                                        var o;
                                        return 0 === a ? (null != (o = H.paramName.nonArmored()) ? o : '') : i();
                                    case 'shellDamageEffective':
                                        return null != (r = H.paramName.shellDamageEffective[t]()) ? r : '';
                                    case 'caliberRule':
                                        return u === I.fE.TwoCaliber
                                            ? H.paramName.is2CaliberRuleApplied()
                                            : H.paramName.is3CaliberRuleApplied();
                                    case 'shootDistance':
                                        return n ? H.paramName.shootDistanceUnspotted() : H.paramName.shootDistance();
                                    default:
                                        return i();
                                }
                            })({ name: A, value: F, impactMode: _, armorNominal: p, isKillerUnspotted: B }),
                            G = R.images.gui.maps.icons.shell.$dyn(P.Small);
                        return n().createElement(
                            n().Fragment,
                            null,
                            S &&
                                n().createElement(
                                    'div',
                                    { className: D()(W.extraHeader, y) },
                                    n().createElement('div', { className: W.extraHeader_icon }),
                                ),
                            n().createElement(
                                'div',
                                { className: y, style: { height: `${x}rem` } },
                                (0, z.f8)(h) &&
                                    !(h.has(c.Qm.Advanced) && !a) &&
                                    n().createElement('div', { className: W.glowElement }),
                                n().createElement(
                                    'div',
                                    { className: O },
                                    h.has(c.Qm.Icon) &&
                                        n().createElement(L, {
                                            name: A,
                                            value: 'shellType' === A ? v : F,
                                            impactMode: _,
                                            isKillerUnspotted: B,
                                        }),
                                ),
                                !['shellType', 'deathReason'].includes(A) &&
                                    n().createElement(
                                        'div',
                                        { className: N, style: { width: i.get() } },
                                        ((e, u, t, a, n, r, i, o) => {
                                            let l = String(u);
                                            'number' == typeof u &&
                                                (M.includes(e) && u > 0
                                                    ? (l = (0, T.uF)(H.value.signPositive(), { value: u }))
                                                    : u < 0 &&
                                                      (l = (0, T.uF)(H.value.signNegative(), { value: Math.abs(u) })));
                                            let s = String(l);
                                            if (
                                                ('angleRicochet' === e && u >= 90) ||
                                                ('angleRicochet' === e && c.HE.includes(n) && a === I.pE.penetration) ||
                                                ('angleRicochet' === e && i)
                                            )
                                                s = H.value.notAffected();
                                            else if (t && 'damageDistanceModifier' === e) s = H.value.unspotted();
                                            else {
                                                if (t && k.includes(e)) return '';
                                                'shellPenetrationEffective' === e && a !== I.pE.penetration
                                                    ? (s = H.value.failed())
                                                    : ('armorRelative' === e && 0 === r) ||
                                                        ('angleFailure' === e && u >= o)
                                                      ? (s = H.value.dashes())
                                                      : 'angleImpact' === e
                                                        ? (s = H.value.angle.exact())
                                                        : 'angleRicochet' === e || 'angleFailure' === e
                                                          ? (s = H.value.angle.more())
                                                          : 'caliberRule' === e
                                                            ? (s = H.value.applied())
                                                            : 'deathReason' === e && (s = H.paramName.deathReason[u]());
                                            }
                                            return (0, T.uF)(s, { value: l });
                                        })(A, F, B, _, f, p, w, b),
                                    ),
                                n().createElement(V, { text: Q }),
                                h.has(c.Qm.AdditionalShellInfo) &&
                                    n().createElement(
                                        'div',
                                        {
                                            className: W.additionalShellInfo,
                                            style: { backgroundImage: `url(${G.$dyn(v)})` },
                                        },
                                        j(f, !0),
                                    ),
                            ),
                        );
                    }),
                    K = (0, r.Pi)(({ cardId: e, sectionId: u, isAdvancedLinesVisible: t }) => {
                        const a = (0, o.t)().model.computes.section,
                            r = a.getLinesCount(e, u),
                            i = a.getHasTopSeparator(e, u),
                            l = a.getHeight(e, u),
                            s = D()(g, t && 0 !== u && i && C);
                        return n().createElement(
                            'div',
                            { key: `${e}:${u}`, className: s, style: { height: `${l}rem` } },
                            F(r, (a) =>
                                n().createElement(U, {
                                    key: `${e}:${u}:${a}`,
                                    cardId: e,
                                    sectionId: u,
                                    lineId: a,
                                    isAdvancedLinesVisible: t,
                                }),
                            ),
                        );
                    }),
                    q = 'CardAnimation_card_3d',
                    $ = (0, r.Pi)(({ cardId: e, bottomToTop: u = !1, isExpanding: t }) => {
                        const r = (0, o.t)(),
                            i = r.model,
                            l = i.marker,
                            s = i.computes,
                            c = s.table,
                            E = s.card,
                            m = r.controls.setLeaderVisibility,
                            A = c.getVisibility(),
                            h = l.get().isAdvanced && !l.get().isSimplified,
                            D = A && h === t ? 'advanced' : 'basic',
                            g = E.getAnimationParams(e, D),
                            C = g.dimensionsIncreaseDelay,
                            B = g.contentIncreaseDelay,
                            _ = g.contentDecreaseDelay,
                            f = g.dimensionsDecreaseDelay,
                            v = g.duration;
                        let p = 0;
                        A && (p = h ? E.getFullHeight(e) : E.getBasicHeight(e));
                        const w = t ? B : _,
                            b = t ? C : f,
                            S = (0, a.useState)(A && t),
                            x = S[0],
                            y = S[1],
                            P = A ? 0 : E.getFullHeight(e),
                            R = (0, a.useRef)(!0);
                        (0, a.useEffect)(
                            () => () => {
                                R.current = !1;
                            },
                            [],
                        );
                        const O = (0, d.useSpring)({
                                clipPath: u
                                    ? `inset(${P}rem 0 0)`
                                    : `polygon(0rem 0rem, 100% 0rem, 100% ${p - 0.1}rem, 0rem ${p - 0.1}rem)`,
                                delay: w,
                                config: { duration: v },
                                onRest: () => R.current && y(h),
                                onStart: () => h && t && y(!0),
                            }).clipPath,
                            L = (0, d.useSpring)({
                                height: `${p}rem`,
                                delay: b,
                                config: { duration: v },
                                onRest: () => !u && m(A),
                            }).height;
                        return n().createElement(
                            d.animated.div,
                            { style: { clipPath: O, height: L } },
                            n().createElement(
                                'div',
                                { className: q },
                                F(E.getSectionsCount(e), (u) =>
                                    n().createElement(K, {
                                        key: `${e}:${u}`,
                                        cardId: e,
                                        sectionId: u,
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
                    ee = 'CardContainer_background_49',
                    ue = ({ isEmpty: e, children: u }) =>
                        n().createElement(
                            'div',
                            { className: D()(Y, e && X) },
                            n().createElement('div', { className: J }),
                            n().createElement('div', { className: ee }),
                            n().createElement('div', { className: Z }, u),
                        ),
                    te = 'Progress_base_42',
                    ae = 'Progress_bar_72',
                    ne = 'Progress_ending_c8',
                    re = (0, r.Pi)(({ isVisible: e = !0 }) => {
                        var u, t;
                        const r = (0, o.t)().model.computes.table.getProgressProps(),
                            i = r.phaseTimePassed,
                            l = r.phaseDuration,
                            s = r.isAdvanced,
                            E = (0, a.useRef)(null),
                            m = viewEnv.pxToRem(null != (u = null == (t = E.current) ? void 0 : t.scrollWidth) ? u : 0),
                            A = m - 8,
                            F = l ? (m * i) / l : A,
                            h = (0, d.useSpring)({
                                pause: s,
                                from: { width: `${F}rem` },
                                to: { width: `${A}rem` },
                                config: { duration: l - i },
                            }).width,
                            D = (0, d.useSpring)({ opacity: Number(e), config: { duration: c.zn } }).opacity;
                        return n().createElement(
                            d.animated.div,
                            { className: te, style: { opacity: D }, ref: E },
                            n().createElement(d.animated.div, { className: ae, style: { width: h } }),
                            n().createElement('div', { className: ne }),
                        );
                    }),
                    ie = 'DataTable_top_8f',
                    oe = (0, r.Pi)(() => {
                        const e = (0, o.t)(),
                            u = e.model,
                            t = u.marker,
                            r = u.computes,
                            i = r.table,
                            l = r.card,
                            s = e.controls.setValueWidth,
                            E = t.get().isAdvanced,
                            m = i.getVisibility(),
                            d = (0, a.useRef)(null),
                            A = (0, a.useRef)(null),
                            h = (0, a.useRef)(0),
                            D = (0, a.useMemo)(() => Number(m) + Number(E) >= h.current, [m, E]),
                            g = (0, a.useState)(!1),
                            C = g[0],
                            B = g[1],
                            _ = (0, a.useState)(!1),
                            f = _[0],
                            v = _[1];
                        !f && s('unset'),
                            (0, a.useEffect)(() => {
                                h.current = Number(m) + Number(E);
                            }, [m, E]),
                            (0, a.useEffect)(() => {
                                const e = setTimeout(() => B(m), m ? c.zn : 0);
                                return () => clearTimeout(e);
                            }, [m]),
                            (0, a.useEffect)(
                                () =>
                                    ((e) => {
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
                                    })(() => {
                                        var e, u;
                                        const t = Array.from(
                                            null !=
                                                (e =
                                                    null == (u = d.current)
                                                        ? void 0
                                                        : u.getElementsByClassName(W.value))
                                                ? e
                                                : [],
                                        );
                                        var a;
                                        s(
                                            `${((a = t), viewEnv.pxToRem(a.sort((e, u) => u.scrollWidth - e.scrollWidth)[0].scrollWidth))}rem`,
                                        ),
                                            v(!0);
                                    }),
                                [s, m],
                            );
                        const p = l.getFullHeight(0);
                        return n().createElement(
                            'div',
                            {
                                ref: d,
                                style: { marginTop: f ? c.ut - p + 'rem' : void 0, marginLeft: `${c.oP + 4}rem` },
                            },
                            n().createElement(
                                'div',
                                { className: ie, style: { height: `${p}rem` } },
                                n().createElement(re, { isVisible: C }),
                                n().createElement(
                                    ue,
                                    null,
                                    n().createElement($, { cardId: 0, bottomToTop: !0, isExpanding: D }),
                                ),
                            ),
                            n().createElement(
                                'div',
                                { ref: A },
                                F(i.getCardsCount() - 1, (e) => {
                                    const u = e + 1;
                                    return n().createElement(
                                        ue,
                                        { isEmpty: !(Boolean(l.getBasicHeight(u)) || E), key: e },
                                        n().createElement($, { cardId: u, isExpanding: D }),
                                    );
                                }),
                            ),
                        );
                    });
                (0, r.Pi)(() => {
                    const e = (0, i.GS)().mediaSize,
                        u = (0, o.t)().model;
                    return n().createElement(
                        'div',
                        {
                            className: l,
                            'data-bind-class-toggle': s + ': !{{model.marker.base.isVisible}}',
                            'data-bind-style-left': `parseFloat({{model.marker.base.posx}} + ${c.DC})+"rem"`,
                            'data-bind-style-top': `parseFloat({{model.marker.base.posy}} + ${c.xS})+"rem"`,
                        },
                        n().createElement(A, null),
                        n().createElement(oe, { key: u.marker.get().phase + e }),
                    );
                });
            },
            1433: (e, u, t) => {
                t.d(u, {
                    Ac: () => F,
                    Cb: () => r,
                    DC: () => i,
                    HE: () => D,
                    Qm: () => h,
                    SA: () => n,
                    YF: () => d,
                    d2: () => E,
                    h: () => A,
                    lG: () => c,
                    oP: () => l,
                    ut: () => s,
                    xS: () => o,
                    zn: () => m,
                });
                var a = t(4969);
                const n = 15,
                    r = 150,
                    i = -n,
                    o = -r,
                    l = n + 64,
                    s = r - 64,
                    c = 2,
                    E = l + c + 2,
                    m = 300,
                    d = 1,
                    A = 16,
                    F = {
                        small: { head: A, major: 38, inner: 19, sectionPadding: 10 },
                        big: { head: A, major: 44, inner: 28, sectionPadding: 5 },
                    };
                let h;
                !(function (e) {
                    (e.OrangeGlow = 'orangeGlow'),
                        (e.RedGlow = 'redGlow'),
                        (e.Icon = 'icon'),
                        (e.Advanced = 'advanced'),
                        (e.Major = 'major'),
                        (e.HeadIconShell = 'headIconShell'),
                        (e.HeadIconTank = 'headIconTank'),
                        (e.AdditionalShellInfo = 'additionalShellInfo');
                })(h || (h = {}));
                const D = [
                        a.gC.highExplosive,
                        a.gC.highExplosiveModern,
                        a.gC.highExplosiveModernPremium,
                        a.gC.highExplosivePremium,
                        a.gC.highExplosiveSpg,
                        a.gC.highExplosiveSpgStun,
                    ],
                    g = [a.gC.hollowCharge, a.gC.hollowChargePremium];
            },
            2290: (e, u, t) => {
                t.d(u, { f8: () => l, uz: () => C });
                var a = t(4969),
                    n = t(1433),
                    r = t(1043),
                    i = t(5262);
                const o = {
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
                    l = (e) => e.has(n.Qm.OrangeGlow) || e.has(n.Qm.RedGlow),
                    s = ['deathReason', 'armorNominal'],
                    c = ['angleRicochet', 'angleFailure', 'angleImpact'],
                    E = () => (0, i.T)(viewEnv.getClientSizeRem().width, viewEnv.getClientSizeRem().height, r.j),
                    m = (e) => {
                        const u = e.map((e) => ({
                                hasTopSeparator: e.hasTopSeparator,
                                fullHeight: 0,
                                basicHeight: 0,
                                lines: e.lines.map((u) =>
                                    ((e, u) => {
                                        const t = !E().extraSmall,
                                            a = n.Ac[t ? 'big' : 'small'];
                                        return e.effects.has(n.Qm.HeadIconShell) || e.effects.has(n.Qm.HeadIconTank)
                                            ? Object.assign({}, e, { height: a.head + a.major + 1 })
                                            : e.effects.has(n.Qm.Major) || l(e.effects) || u
                                              ? Object.assign({}, e, { height: a.major })
                                              : Object.assign({}, e, { height: a.inner });
                                    })(u, 1 === e.lines.length),
                                ),
                            })),
                            t = B(u);
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
                    d = (e, u, t) => {
                        const a = t.slice(0, u + 1).reduce((e, u) => e + u.animationParams.basic.duration, 0),
                            r = t.slice(0, u + 1).reduce((e, u) => e + u.animationParams.advanced.duration, 0),
                            i = n.zn - a,
                            o = n.zn - r;
                        return (
                            (e.animationParams.basic.contentDecreaseDelay = i),
                            (e.animationParams.basic.dimensionsDecreaseDelay = i + n.zn),
                            (e.animationParams.advanced.contentDecreaseDelay = o),
                            (e.animationParams.advanced.dimensionsDecreaseDelay = o + n.zn),
                            e
                        );
                    },
                    A = (e, u, t) => {
                        const a = (e) =>
                                t[u - 1].animationParams[e].duration +
                                t[u - 1].animationParams[e].dimensionsIncreaseDelay,
                            r = Math.round(0 === u ? 0 : a('basic')),
                            i = Math.round(0 === u ? 0 : a('advanced')),
                            o = r + n.zn,
                            l = i + n.zn;
                        return (
                            (e.animationParams.basic.dimensionsIncreaseDelay = r),
                            (e.animationParams.basic.contentIncreaseDelay = o),
                            (e.animationParams.advanced.dimensionsIncreaseDelay = i),
                            (e.animationParams.advanced.contentIncreaseDelay = l),
                            e
                        );
                    },
                    F = (e) => {
                        const u = e.reduce((e, u) => e + u.fullHeight, 0),
                            t = e.reduce((e, u) => e + u.basicHeight, 0),
                            a = u - t;
                        return e
                            .map((e) => {
                                const u = e.fullHeight - e.basicHeight,
                                    r = e.basicHeight / t,
                                    i = a ? u / a : 1;
                                return (
                                    (e.animationParams.basic.proportion = r),
                                    (e.animationParams.basic.duration = r * n.zn),
                                    (e.animationParams.advanced.proportion = i),
                                    (e.animationParams.advanced.duration = i * n.zn),
                                    e
                                );
                            })
                            .map(A)
                            .map(d);
                    },
                    h = (e) => e.filter((e) => 0 !== e.lines.length),
                    D = (e) =>
                        e.reduce(
                            (e, u) =>
                                u.lines.every((e) => !l(e.effects))
                                    ? (e.push(u), e)
                                    : (0 === e.length && e.push({ hasTopSeparator: !1, lines: [] }),
                                      u.lines.forEach((t, a) => {
                                          l(t.effects)
                                              ? (0 === e[e.length - 1].lines.length
                                                    ? e[e.length - 1].lines.push(t)
                                                    : e.push({ hasTopSeparator: !1, lines: [t] }),
                                                a !== u.lines.length - 1 && e.push({ hasTopSeparator: !1, lines: [] }))
                                              : e[e.length - 1].lines.push(t);
                                      }),
                                      e),
                            [],
                        ),
                    g = (e) => 0 !== e.length,
                    C = (e, u, t, r, i) => {
                        const l = (t) => (
                                (('shootDistance' === t.name && r) ||
                                    ('shellPenetrationEffective' === t.name && u !== a.pE.penetration) ||
                                    ('armorRelative' === t.name && 0 === e.armorNominal)) &&
                                    t.effects.add(n.Qm.OrangeGlow),
                                (('shellPenetrationEffective' === t.name && u === a.pE.penetration) ||
                                    'shellDamageEffective' === t.name) &&
                                    t.effects.add(n.Qm.RedGlow).add(n.Qm.Major),
                                t
                            ),
                            E = (u) => ({ name: u.name, value: e[u.name], effects: new Set([...u.effects]) }),
                            d = o[u][t]
                                .map((u) =>
                                    u.map((u, o) => ({
                                        hasTopSeparator: Boolean(o),
                                        lines: u
                                            .filter((u) =>
                                                ((e, u, t, r, i) => {
                                                    if (t === a.nz.trajectory)
                                                        if (r) {
                                                            if (
                                                                'shellPenetrationEffective' === u.name ||
                                                                'shellPenetrationBasic' === u.name
                                                            )
                                                                return !1;
                                                        } else 'shellType' === u.name && u.effects.add(n.Qm.Advanced);
                                                    return 'caliberRule' === u.name
                                                        ? e[u.name] !== a.fE.None
                                                        : (!c.includes(u.name) || 0 !== e.armorNominal) &&
                                                              !(
                                                                  'damageDistanceModifier' === u.name &&
                                                                  (!e.hasDistanceFalloff ||
                                                                      (0 === e.damageDistanceModifier && !i))
                                                              ) &&
                                                              !(
                                                                  'shellArmorAngleGain' === u.name &&
                                                                  0 === e.armorNominal
                                                              ) &&
                                                              (e[u.name] || !s.includes(u.name));
                                                })(e, u, t, i, r),
                                            )
                                            .map(E)
                                            .map(l),
                                    })),
                                )
                                .map(h)
                                .map(D)
                                .filter(g)
                                .map(m),
                            A = d[0],
                            C = d.slice(1);
                        return [...F([A]), ...F(C)];
                    },
                    B = (e) => {
                        const u = !E().extraSmall ? 'big' : 'small';
                        return e.map((e) =>
                            Object.assign({}, e, {
                                fullHeight: _(e.lines, u, e.hasTopSeparator),
                                basicHeight: _(
                                    e.lines.filter((e) => !e.effects.has(n.Qm.Advanced)),
                                    u,
                                    e.hasTopSeparator,
                                ),
                            }),
                        );
                    },
                    _ = (e, u, t) => {
                        const a = Number(t);
                        return 1 === e.length &&
                            (e[0].effects.has(n.Qm.HeadIconTank) || e[0].effects.has(n.Qm.HeadIconShell))
                            ? a + n.h + n.YF + n.Ac[u].major
                            : 1 === e.length
                              ? a + n.Ac[u].major
                              : 0 === e.length
                                ? 0
                                : a + e.length * n.Ac[u].inner + 2 * n.Ac[u].sectionPadding;
                    },
                    f = (e, u) => {
                        const t = e.reduce((e, t) => e + t[u ? 'fullHeight' : 'basicHeight'], 0);
                        return t ? t + 2 * n.YF : 0;
                    };
            },
            4969: (e, u, t) => {
                let a, n, r, i, o;
                t.d(u, { fE: () => r, gC: () => o, kb: () => i, nz: () => a, pE: () => n }),
                    (function (e) {
                        (e.killer = 'killer'), (e.trajectory = 'trajectory'), (e.impact = 'impact');
                    })(a || (a = {})),
                    (function (e) {
                        (e.penetration = 'penetration'), (e.legacyHE = 'legacyHE'), (e.modernHE = 'modernHE');
                    })(n || (n = {})),
                    (function (e) {
                        (e.None = 'None'), (e.TwoCaliber = 'TwoCaliber'), (e.ThreeCaliber = 'ThreeCaliber');
                    })(r || (r = {})),
                    (function (e) {
                        (e.hp = ''), (e.ignition = 'ignition'), (e.detonation = 'detonation'), (e.crew = 'crew');
                    })(i || (i = {})),
                    (function (e) {
                        (e.armorPiercing = 'ARMOR_PIERCING'),
                            (e.armorPiercingCr = 'ARMOR_PIERCING_CR'),
                            (e.armorPiercingCrPremium = 'ARMOR_PIERCING_CR_PREMIUM'),
                            (e.armorPiercingPremium = 'ARMOR_PIERCING_PREMIUM'),
                            (e.highExplosive = 'HIGH_EXPLOSIVE'),
                            (e.highExplosiveModern = 'HIGH_EXPLOSIVE_MODERN'),
                            (e.highExplosiveModernPremium = 'HIGH_EXPLOSIVE_MODERN_PREMIUM'),
                            (e.highExplosivePremium = 'HIGH_EXPLOSIVE_PREMIUM'),
                            (e.highExplosiveSpg = 'HIGH_EXPLOSIVE_SPG'),
                            (e.highExplosiveSpgStun = 'HIGH_EXPLOSIVE_SPG_STUN'),
                            (e.hollowCharge = 'HOLLOW_CHARGE'),
                            (e.hollowChargePremium = 'HOLLOW_CHARGE_PREMIUM');
                    })(o || (o = {}));
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
        (__webpack_require__.O = (e, u, t, a) => {
            if (!u) {
                var n = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [u, t, a] = deferred[l], r = !0, i = 0; i < u.length; i++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(l--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > a; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [u, t, a];
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
        (__webpack_require__.j = 230),
        (() => {
            var e = { 230: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        n,
                        [r, i, o] = t,
                        l = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (o) var s = o(__webpack_require__);
                    }
                    for (u && u(t); l < r.length; l++)
                        (n = r[l]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(s);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [532], () => __webpack_require__(907));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
