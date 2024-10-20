(() => {
    var __webpack_modules__ = {
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
            44: (u, e, t) => {
                'use strict';
                t.d(e, { UI: () => l, f8: () => E, s_: () => a, wB: () => A, yR: () => s });
                var n = t(649),
                    r = (t(916), t(613));
                const i = 24,
                    a = 1e3,
                    s = 60,
                    o = 60 * s,
                    c = i * o,
                    l = (Date.now(), r.Ew.getRegionalDateTime);
                r.Ew.getFormattedDateTime;
                function E(u = 0) {
                    let e = u;
                    const t = Math.trunc(e / c);
                    e -= t * c;
                    const n = Math.trunc(e / o);
                    e -= n * o;
                    const r = Math.trunc(e / s);
                    return (e -= r * s), { days: t, hours: n, minutes: r, seconds: e };
                }
                const A = (u, e = !0) =>
                    u.days > 7 && e
                        ? (0, n.WU)(R.strings.common.duration.days(), { days: u.days })
                        : u.days >= 1
                          ? 0 === u.hours
                              ? (0, n.WU)(R.strings.common.duration.days(), { days: u.days })
                              : `${(0, n.WU)(R.strings.common.duration.days(), { days: u.days })} ${(0, n.WU)(R.strings.common.duration.hours(), { hours: u.hours })}`
                          : u.hours >= 1
                            ? 0 === u.minutes
                                ? (0, n.WU)(R.strings.common.duration.hours(), { hours: u.hours })
                                : `${(0, n.WU)(R.strings.common.duration.hours(), { hours: u.hours })} ${(0, n.WU)(R.strings.common.duration.minutes(), { minutes: u.minutes })}`
                            : (0, n.WU)(R.strings.common.duration.minutes(), { minutes: u.minutes || 1 });
            },
            768: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => tu });
                var n = {};
                t.r(n),
                    t.d(n, { mouse: () => D, off: () => A, on: () => E, onResize: () => c, onScaleUpdated: () => l });
                var r = {};
                t.r(r),
                    t.d(r, {
                        events: () => n,
                        getMouseGlobalPosition: () => C,
                        getSize: () => m,
                        graphicsQuality: () => _,
                        playSound: () => d,
                        setRTPC: () => B,
                    });
                var i = {};
                t.r(i), t.d(i, { getBgUrl: () => v, getTextureUrl: () => b });
                var a = {};
                function s(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                function o(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => N,
                        addPreloadTexture: () => O,
                        children: () => i,
                        displayStatus: () => f,
                        displayStatusIs: () => J,
                        events: () => w,
                        extraSize: () => uu,
                        forceTriggerMouseMove: () => X,
                        freezeTextureBeforeResize: () => $,
                        getBrowserTexturePath: () => I,
                        getDisplayStatus: () => Q,
                        getScale: () => z,
                        getSize: () => W,
                        getViewGlobalPosition: () => G,
                        isEventHandled: () => Z,
                        isFocused: () => K,
                        pxToRem: () => V,
                        remToPx: () => j,
                        resize: () => U,
                        sendEvent: () => R,
                        setAnimateWindow: () => q,
                        setEventHandled: () => Y,
                        setInputPaddingsRem: () => P,
                        setSidePaddingsRem: () => H,
                        whenTutorialReady: () => eu,
                    });
                const c = s('clientResized'),
                    l = s('self.onScaleUpdated'),
                    E = (u, e) => engine.on(u, e),
                    A = (u, e) => engine.off(u, e),
                    F = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const D = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && o(!1);
                    }
                    function t() {
                        u.enabled && o(!0);
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
                            : o(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let r = !0;
                                    const i = `mouse${e}`,
                                        a = F[e]((u) => t([u, 'outside']));
                                    function s(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        n(),
                                        () => {
                                            r &&
                                                (a(),
                                                window.removeEventListener(i, s),
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
                    return Object.assign({}, r, {
                        disable() {
                            (u.enabled = !1), n();
                        },
                        enable() {
                            (u.enabled = !0), n();
                        },
                        enableOutside() {
                            u.enabled && o(!0);
                        },
                        disableOutside() {
                            u.enabled && o(!1);
                        },
                    });
                })();
                function d(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function B(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                function m(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function C(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const _ = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    h = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    g = Object.keys(h).reduce((u, e) => ((u[e] = () => d(h[e])), u), {}),
                    p = { play: Object.assign({}, g, { sound: d }), setRTPC: B };
                function b(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function v(u, e, t) {
                    return `url(${b(u, e, t)})`;
                }
                const f = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    w = {
                        onTextureFrozen: s('self.onTextureFrozen'),
                        onTextureReady: s('self.onTextureReady'),
                        onDomBuilt: s('self.onDomBuilt'),
                        onLoaded: s('self.onLoaded'),
                        onDisplayChanged: s('self.onShowingStatusChanged'),
                        onFocusUpdated: s('self.onFocusChanged'),
                        children: {
                            onAdded: s('children.onAdded'),
                            onLoaded: s('children.onLoaded'),
                            onRemoved: s('children.onRemoved'),
                            onAttached: s('children.onAttached'),
                            onTextureReady: s('children.onTextureReady'),
                            onRequestPosition: s('children.requestPosition'),
                        },
                    },
                    S = ['args'];
                const y = 2,
                    x = 16,
                    T = 32,
                    L = 64,
                    M = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var n in u)
                                        if ({}.hasOwnProperty.call(u, n)) {
                                            if (e.indexOf(n) >= 0) continue;
                                            t[n] = u[n];
                                        }
                                    return t;
                                })(e, S);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    R = {
                        close(u) {
                            M('popover' === u ? y : T);
                        },
                        minimize() {
                            M(L);
                        },
                        move(u) {
                            M(x, { isMouseEvent: !0, on: u });
                        },
                    },
                    k = 15;
                function O(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function P(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, k);
                }
                function I(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function N(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function H(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, k);
                }
                function W(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function U(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function G(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: j(e.x), y: j(e.y) };
                }
                function $() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function z() {
                    return viewEnv.getScale();
                }
                function V(u) {
                    return viewEnv.pxToRem(u);
                }
                function j(u) {
                    return viewEnv.remToPx(u);
                }
                function q(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function K() {
                    return viewEnv.isFocused();
                }
                function Y() {
                    return viewEnv.setEventHandled();
                }
                function Z() {
                    return viewEnv.isEventHandled();
                }
                function X() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Q() {
                    return viewEnv.getShowingStatus();
                }
                const J = Object.keys(f).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === f[e]), u), {}),
                    uu = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    eu = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : w.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    tu = { view: a, client: r, sound: p };
            },
            902: (u, e, t) => {
                'use strict';
                t.d(e, { F: () => n });
                const n = (u = 1) => {
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
                };
            },
            71: (u, e, t) => {
                'use strict';
                t.d(e, { M: () => n });
                const n = (u, e) => u.split('.').reduce((u, e) => u && u[e], e);
            },
            344: (u, e, t) => {
                'use strict';
                t.d(e, { DA: () => r.D, au: () => i, tT: () => r.t });
                var n = t(469),
                    r = (t(133), t(790), t(579), t(360));
                t(56);
                const i = n.Z;
            },
            536: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
                var n = t(179);
                const r = (u) => {
                    const e = (0, n.useRef)(!1);
                    e.current || (u(), (e.current = !0));
                };
            },
            469: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => a });
                var n = t(44),
                    r = t(179);
                const i = () => {},
                    a = (u = 0, e, t = 0, a = i) => {
                        const s = (0, r.useState)(u),
                            o = s[0],
                            c = s[1];
                        return (
                            (0, r.useEffect)(() => {
                                if (u > 0) {
                                    c(u);
                                    const r = Date.now(),
                                        i = e || (u > 2 * n.yR ? n.yR : 1),
                                        s = setInterval(() => {
                                            const e = u - Math.floor((Date.now() - r) / n.s_);
                                            null !== t && e <= t ? (c(t), a && a(), clearInterval(s)) : c(e);
                                        }, i * n.s_);
                                    return () => {
                                        clearInterval(s);
                                    };
                                }
                            }, [u, e, t, a]),
                            o
                        );
                    };
            },
            133: (u, e, t) => {
                'use strict';
                t(179);
            },
            360: (u, e, t) => {
                'use strict';
                t.d(e, { D: () => l, t: () => E });
                var n = t(902),
                    r = t(71),
                    i = t(536),
                    a = t(916),
                    s = t(332),
                    o = t(179);
                const c = a.Sw.instance;
                let l;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(l || (l = {}));
                const E = (u = 'model', e = l.Deep) => {
                    const t = (0, o.useState)(0),
                        a = (t[0], t[1]),
                        E = (0, o.useMemo)(() => (0, n.F)(), []),
                        A = E.caller,
                        F = E.resId,
                        D = (0, o.useMemo)(
                            () => (window.__feature && window.__feature !== A ? `subViews.${A}.${u}` : u),
                            [A, u],
                        ),
                        d = (0, o.useState)(() =>
                            ((u) => {
                                const e = (0, r.M)(u, window);
                                for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                return (0, s.os)(e) ? e.value : e;
                            })((0, s.Gd)(D)),
                        ),
                        B = d[0],
                        m = d[1],
                        C = (0, o.useRef)(-1);
                    return (
                        (0, i.Z)(() => {
                            if (
                                ('boolean' == typeof e &&
                                    ((e = e ? l.Deep : l.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                e !== l.None)
                            ) {
                                const t = (u) => {
                                        (0, s.kJ)(u) && e === l.Deep
                                            ? (u === B && a((u) => u + 1), m(u))
                                            : m(Object.assign([], u));
                                    },
                                    n = (0, s.U0)(u);
                                C.current = c.addCallback(n, t, F, e === l.Deep);
                            }
                        }),
                        (0, o.useEffect)(() => {
                            if (e !== l.None)
                                return () => {
                                    c.removeCallback(C.current, F);
                                };
                        }, [F, e]),
                        B
                    );
                };
            },
            56: (u, e, t) => {
                'use strict';
                var n = t(916);
                t(179);
                n.Sw.instance;
            },
            790: (u, e, t) => {
                'use strict';
                t(179);
            },
            579: (u, e, t) => {
                'use strict';
                t(768), t(179);
            },
            521: (u, e, t) => {
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
            727: (u, e, t) => {
                'use strict';
                function n(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                t.d(e, { G: () => n });
            },
            649: (u, e, t) => {
                'use strict';
                t.d(e, { Uw: () => F, WU: () => i, v2: () => r });
                var n = t(281);
                let r;
                function i(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(r || (r = {}));
                const a = (u) => u.replace(/&nbsp;/g, ' '),
                    s = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    o = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    c = (u, e, t = r.left) => u.split(e).reduce(t === r.left ? s : o, []),
                    l = (() => {
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
                    E = ['zh_cn', 'zh_sg', 'zh_tw'],
                    A = (u, e = r.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (E.includes(t)) return l(u);
                        if ('ja' === t) {
                            return (0, n.D4)()
                                .parse(u)
                                .map((u) => a(u));
                        }
                        return ((u, e = r.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                i = a(u);
                            return c(i, /( )/, e).forEach((u) => (t = t.concat(c(u, n, r.left)))), t;
                        })(u, e);
                    },
                    F = (u, e, t) => u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : A(u, e)));
            },
            358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => i });
                var n = t(768);
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
                        const i = n.O.view.addModelObserver(u, t, r);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(i) : (this._views[t] = [i])))
                                : console.error("Can't add callback for model:", u),
                            i
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
                const i = r;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(916);
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
            916: (u, e, t) => {
                'use strict';
                t.d(e, { Sw: () => i.Z, ry: () => m });
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
                var i = t(358);
                var a = t(613);
                let s;
                !(function (u) {
                    (u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                        (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                        (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                        (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (u[(u.MOVE = 16)] = 'MOVE'),
                        (u[(u.CLOSE = 32)] = 'CLOSE'),
                        (u[(u.MINIMIZE = 64)] = 'MINIMIZE');
                })(s || (s = {}));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    l = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(521),
                    F = t(768);
                const D = ['args'];
                function d(u, e, t, n, r, i, a) {
                    try {
                        var s = u[i](a),
                            o = s.value;
                    } catch (u) {
                        return void t(u);
                    }
                    s.done ? e(o) : Promise.resolve(o).then(n, r);
                }
                const B = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    m = (function () {
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
                                        var i = u.apply(e, t);
                                        function a(u) {
                                            d(i, n, r, a, s, 'next', u);
                                        }
                                        function s(u) {
                                            d(i, n, r, a, s, 'throw', u);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    C = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var n in u)
                                        if ({}.hasOwnProperty.call(u, n)) {
                                            if (e.indexOf(n) >= 0) continue;
                                            t[n] = u[n];
                                        }
                                    return t;
                                })(e, D);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, i));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    _ = () => C(s.CLOSE),
                    h = (u, e) => {
                        u.keyCode === A.n.ESCAPE && e();
                    };
                var g = t(572);
                const p = r.instance,
                    b = {
                        DataTracker: i.Z,
                        ViewModel: g.Z,
                        ViewEventType: s,
                        NumberFormatType: o,
                        RealFormatType: c,
                        TimeFormatType: l,
                        DateFormatType: E,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (u) => C(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: _,
                        sendClosePopOverEvent: () => C(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            C(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, r = R.invalid('resId'), i) => {
                            const a = F.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                c = o.x,
                                l = o.y,
                                E = o.width,
                                A = o.height,
                                D = {
                                    x: F.O.view.pxToRem(c) + a.x,
                                    y: F.O.view.pxToRem(l) + a.y,
                                    width: F.O.view.pxToRem(E),
                                    height: F.O.view.pxToRem(A),
                                };
                            C(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: e,
                                bbox: B(D),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => h(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            h(u, _);
                        },
                        handleViewEvent: C,
                        onBindingsReady: m,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
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
                        ClickOutsideManager: p,
                        SystemLocale: a.Z5,
                        UserLocale: a.cy,
                    };
                window.ViewEnvHelper = b;
            },
            613: (u, e, t) => {
                'use strict';
                t.d(e, { Ew: () => i, Z5: () => n, cy: () => r });
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
                    i = {
                        getRegionalDateTime: (u, e, t = !0) => regionalDateTime.getRegionalDateTime(u, e, t),
                        getFormattedDateTime: (u, e, t = !0) => regionalDateTime.getFormattedDateTime(u, e, t),
                    };
            },
            332: (u, e, t) => {
                'use strict';
                t.d(e, { Gd: () => o, U0: () => c, kJ: () => a, os: () => i });
                var n = t(902),
                    r = t(71);
                const i = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    a = (u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name,
                    s = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    o = (u) =>
                        ((u, e) =>
                            u.split('.').reduce((u, t) => {
                                const n = (0, r.M)(`${u}.${t}`, window);
                                return i(n) ? e(u, t, n) : `${u}.${t}`;
                            }))(u, (u, e) => `${u}.${e}.value`),
                    c = (u) => {
                        const e = ((u) => {
                                const e = (0, n.F)(),
                                    t = e.caller,
                                    r = e.resId,
                                    i = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: i, modelPath: s(i, u || ''), resId: r };
                            })(),
                            t = e.modelPrefix,
                            a = u.split('.');
                        if (a.length > 0) {
                            const u = [a[0]];
                            return (
                                a.reduce((e, n) => {
                                    const a = (0, r.M)(s(t, `${e}.${n}`), window);
                                    return i(a) ? (u.push(a.id), `${e}.${n}.value`) : (u.push(n), `${e}.${n}`);
                                }),
                                u.reduce((u, e) => u + '.' + e)
                            );
                        }
                        return '';
                    };
            },
            556: (u, e, t) => {
                'use strict';
                var n = t(179),
                    r = t.n(n);
                const i = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                var a = t(768);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var o;
                function c(u, e, t) {
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
                        i = Math.min(n, r);
                    return {
                        extraLarge: i === t.extraLarge.weight,
                        large: i === t.large.weight,
                        medium: i === t.medium.weight,
                        small: i === t.small.weight,
                        extraSmall: i === t.extraSmall.weight,
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
                !(function (u) {
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
                })(o || (o = {}));
                const l = a.O.client.getSize('rem'),
                    E = l.width,
                    A = l.height,
                    F = Object.assign({ width: E, height: A }, c(E, A, s)),
                    D = (0, n.createContext)(F),
                    d = ['children'];
                const B = (u) => {
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
                        })(u, d);
                    const r = (0, n.useContext)(D),
                        a = r.extraLarge,
                        s = r.large,
                        o = r.medium,
                        c = r.small,
                        l = r.extraSmall,
                        E = r.extraLargeWidth,
                        A = r.largeWidth,
                        F = r.mediumWidth,
                        B = r.smallWidth,
                        m = r.extraSmallWidth,
                        C = r.extraLargeHeight,
                        _ = r.largeHeight,
                        h = r.mediumHeight,
                        g = r.smallHeight,
                        p = r.extraSmallHeight,
                        b = { extraLarge: C, large: _, medium: h, small: g, extraSmall: p };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && a) return e;
                        if (t.large && s) return e;
                        if (t.medium && o) return e;
                        if (t.small && c) return e;
                        if (t.extraSmall && l) return e;
                    } else {
                        if (t.extraLargeWidth && E) return i(e, t, b);
                        if (t.largeWidth && A) return i(e, t, b);
                        if (t.mediumWidth && F) return i(e, t, b);
                        if (t.smallWidth && B) return i(e, t, b);
                        if (t.extraSmallWidth && m) return i(e, t, b);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && C) return e;
                            if (t.largeHeight && _) return e;
                            if (t.mediumHeight && h) return e;
                            if (t.smallHeight && g) return e;
                            if (t.extraSmallHeight && p) return e;
                        }
                    }
                    return null;
                };
                B.defaultProps = {
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
                (0, n.memo)(B);
                var m = t(536);
                const C = ({ children: u }) => {
                    const e = (0, n.useContext)(D),
                        t = (0, n.useState)(e),
                        i = t[0],
                        o = t[1],
                        l = (0, n.useCallback)((u, e) => {
                            const t = a.O.view.pxToRem(u),
                                n = a.O.view.pxToRem(e);
                            o(Object.assign({ width: t, height: n }, c(t, n, s)));
                        }, []),
                        E = (0, n.useCallback)(() => {
                            const u = a.O.client.getSize('px');
                            l(u.width, u.height);
                        }, [l]);
                    (0, m.Z)(() => {
                        a.O.client.events.on('clientResized', l), a.O.client.events.on('self.onScaleUpdated', E);
                    }),
                        (0, n.useEffect)(
                            () => () => {
                                a.O.client.events.off('clientResized', l),
                                    a.O.client.events.off('self.onScaleUpdated', E);
                            },
                            [l, E],
                        );
                    const A = (0, n.useMemo)(() => Object.assign({}, i), [i]);
                    return r().createElement(D.Provider, { value: A }, u);
                };
                var _ = t(483),
                    h = t.n(_),
                    g = t(926),
                    p = t.n(g);
                let b, v, f;
                !(function (u) {
                    (u[(u.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = s.small.width)] = 'Small'),
                        (u[(u.Medium = s.medium.width)] = 'Medium'),
                        (u[(u.Large = s.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                })(b || (b = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = s.small.width)] = 'Small'),
                            (u[(u.Medium = s.medium.width)] = 'Medium'),
                            (u[(u.Large = s.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                    })(v || (v = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = s.small.height)] = 'Small'),
                            (u[(u.Medium = s.medium.height)] = 'Medium'),
                            (u[(u.Large = s.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge');
                    })(f || (f = {}));
                const w = () => {
                        const u = (0, n.useContext)(D),
                            e = u.width,
                            t = u.height,
                            r = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return b.ExtraLarge;
                                    case u.large:
                                        return b.Large;
                                    case u.medium:
                                        return b.Medium;
                                    case u.small:
                                        return b.Small;
                                    case u.extraSmall:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(u),
                            i = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return v.ExtraLarge;
                                    case u.largeWidth:
                                        return v.Large;
                                    case u.mediumWidth:
                                        return v.Medium;
                                    case u.smallWidth:
                                        return v.Small;
                                    case u.extraSmallWidth:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(u),
                            a = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return f.ExtraLarge;
                                    case u.largeHeight:
                                        return f.Large;
                                    case u.mediumHeight:
                                        return f.Medium;
                                    case u.smallHeight:
                                        return f.Small;
                                    case u.extraSmallHeight:
                                        return f.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), f.ExtraSmall;
                                }
                            })(u);
                        return { mediaSize: r, mediaWidth: i, mediaHeight: a, remScreenWidth: e, remScreenHeight: t };
                    },
                    S = ['children', 'className'];
                function y() {
                    return (
                        (y = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        y.apply(null, arguments)
                    );
                }
                const x = {
                        [v.ExtraSmall]: '',
                        [v.Small]: p().SMALL_WIDTH,
                        [v.Medium]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH}`,
                        [v.Large]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH}`,
                        [v.ExtraLarge]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH} ${p().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [f.ExtraSmall]: '',
                        [f.Small]: p().SMALL_HEIGHT,
                        [f.Medium]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT}`,
                        [f.Large]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT}`,
                        [f.ExtraLarge]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT} ${p().EXTRA_LARGE_HEIGHT}`,
                    },
                    L = {
                        [b.ExtraSmall]: '',
                        [b.Small]: p().SMALL,
                        [b.Medium]: `${p().SMALL} ${p().MEDIUM}`,
                        [b.Large]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE}`,
                        [b.ExtraLarge]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE} ${p().EXTRA_LARGE}`,
                    },
                    M = (u) => {
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
                            })(u, S);
                        const i = w(),
                            a = i.mediaWidth,
                            s = i.mediaHeight,
                            o = i.mediaSize;
                        return r().createElement('div', y({ className: h()(t, x[a], T[s], L[o]) }, n), e);
                    },
                    k = ['children'];
                const O = (u) => {
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
                        })(u, k);
                    return r().createElement(C, null, r().createElement(M, t, e));
                };
                var P = t(493),
                    I = t.n(P);
                const N = (u, e, t) => (t < u ? u : t > e ? e : t),
                    H = (u) => {
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
                    };
                function W(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (u) {
                                if ('string' == typeof u) return U(u, e);
                                var t = {}.toString.call(u).slice(8, -1);
                                return (
                                    'Object' === t && u.constructor && (t = u.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(u)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? U(u, e)
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
                function U(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, n = Array(e); t < e; t++) n[t] = u[t];
                    return n;
                }
                const G = [];
                function $(u) {
                    const e = (0, n.useRef)(u);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            e.current = u;
                        }),
                        (0, n.useCallback)((...u) => (0, e.current)(...u), G)
                    );
                }
                function z(u, e, t) {
                    const r = (0, n.useMemo)(
                        () =>
                            (function (u, e, t, n) {
                                let r,
                                    i = !1,
                                    a = 0;
                                function s() {
                                    r && clearTimeout(r);
                                }
                                function o(...o) {
                                    const c = this,
                                        l = Date.now() - a;
                                    function E() {
                                        (a = Date.now()), t.apply(c, o);
                                    }
                                    i ||
                                        (n && !r && E(),
                                        s(),
                                        void 0 === n && l > u
                                            ? E()
                                            : !0 !== e &&
                                              (r = setTimeout(
                                                  n
                                                      ? function () {
                                                            r = void 0;
                                                        }
                                                      : E,
                                                  void 0 === n ? u - l : u,
                                              )));
                                }
                                return (
                                    'boolean' != typeof e && ((n = t), (t = e), (e = void 0)),
                                    (o.cancel = function () {
                                        s(), (i = !0);
                                    }),
                                    o
                                );
                            })(t, u),
                        e,
                    );
                    return (0, n.useEffect)(() => r.cancel, [r]), r;
                }
                var V = t(30);
                let j;
                !(function (u) {
                    (u[(u.Next = -1)] = 'Next'), (u[(u.Prev = 1)] = 'Prev');
                })(j || (j = {}));
                const q = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    K = (({
                        getContainerSize: u,
                        getBounds: e,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: i,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const o = (u, t) => {
                            const n = e(u),
                                r = n[0],
                                i = n[1];
                            return i <= r ? 0 : N(r, i, t);
                        };
                        return (c = {}) => {
                            const l = c.settings,
                                E = void 0 === l ? q : l,
                                A = (0, n.useRef)(null),
                                F = (0, n.useRef)(null),
                                D = (() => {
                                    const u = (0, n.useMemo)(() => ({}), []),
                                        e = (e) => (u[e] || (u[e] = new Map()), u[e]),
                                        t = (u, t) => {
                                            e(u).set(t, t);
                                        },
                                        r = (u, t) => {
                                            e(u).delete(t);
                                        },
                                        i = (u, ...t) => {
                                            for (var n, r = W(e(u).values()); !(n = r()).done; ) (0, n.value)(...t);
                                        };
                                    return (0, n.useMemo)(() => ({ on: t, off: r, trigger: i }), []);
                                })(),
                                d = z(
                                    () => {
                                        a.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                B = (0, V.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (u) => {
                                        const e = A.current;
                                        e && (t(e, u), D.trigger('change', u), s && d());
                                    },
                                    onRest: (u) => D.trigger('rest', u),
                                    onStart: (u) => D.trigger('start', u),
                                    onPause: (u) => D.trigger('pause', u),
                                })),
                                m = B[0],
                                C = B[1],
                                _ = (0, n.useCallback)(
                                    (u, e, t) => {
                                        var n;
                                        const r = m.scrollPosition.get(),
                                            i = (null != (n = m.scrollPosition.goal) ? n : 0) - r;
                                        return o(u, e * t + i + r);
                                    },
                                    [m.scrollPosition],
                                ),
                                h = (0, n.useCallback)(
                                    (u, { immediate: e = !1, reset: t = !0 } = {}) => {
                                        const n = A.current;
                                        n &&
                                            C.start({
                                                scrollPosition: o(n, u),
                                                immediate: e,
                                                reset: t,
                                                config: E.animationConfig,
                                                from: { scrollPosition: o(n, m.scrollPosition.get()) },
                                            });
                                    },
                                    [C, E.animationConfig, m.scrollPosition],
                                ),
                                g = (0, n.useCallback)(
                                    (u) => {
                                        const e = A.current,
                                            t = F.current;
                                        if (!e || !t) return;
                                        const n = ((u, e) => {
                                                switch (e.type) {
                                                    case 'proportional':
                                                        return i(u) / e.factor;
                                                    case 'fixed':
                                                        return e.value;
                                                }
                                            })(t, E.step),
                                            r = _(e, u, n);
                                        h(r);
                                    },
                                    [h, _, E.step],
                                ),
                                p = (0, n.useCallback)(
                                    (u) => {
                                        0 !== u.deltaY && g(r(u)),
                                            A.current && D.trigger('mouseWheel', u, m.scrollPosition, e(A.current));
                                    },
                                    [m.scrollPosition, g, D],
                                ),
                                b = ((u, e = []) => {
                                    const t = (0, n.useRef)(),
                                        r = (0, n.useCallback)((...e) => {
                                            t.current && t.current(), (t.current = u(...e));
                                        }, e);
                                    return (
                                        (0, n.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        H(() => {
                                            const u = A.current;
                                            u &&
                                                (h(o(u, m.scrollPosition.goal), { immediate: !0 }),
                                                D.trigger('resizeHandled'));
                                        }),
                                    [h, m.scrollPosition.goal],
                                ),
                                v = $(() => {
                                    const u = A.current;
                                    if (!u) return;
                                    const e = o(u, m.scrollPosition.goal);
                                    e !== m.scrollPosition.goal && h(e, { immediate: !0 }),
                                        D.trigger('recalculateContent');
                                });
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('resize', b),
                                    () => {
                                        window.removeEventListener('resize', b);
                                    }
                                ),
                                [b],
                            );
                            return (0, n.useMemo)(
                                () => ({
                                    getWrapperSize: () => (F.current ? i(F.current) : void 0),
                                    getContainerSize: () => (A.current ? u(A.current) : void 0),
                                    getBounds: () =>
                                        A.current
                                            ? e(A.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: E.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: p,
                                    applyScroll: h,
                                    applyStepTo: g,
                                    contentRef: A,
                                    wrapperRef: F,
                                    scrollPosition: C,
                                    animationScroll: m,
                                    recalculateContent: v,
                                    events: { on: D.on, off: D.off },
                                }),
                                [m.scrollPosition, h, g, D.off, D.on, v, p, C, E.step.clampedArrowStepTimeout],
                            );
                        };
                    })({
                        getBounds: (u) => [0, u.scrollHeight - u.offsetHeight],
                        getContainerSize: (u) => u.scrollHeight,
                        getWrapperSize: (u) => u.offsetHeight,
                        setScrollPosition: (u, e) => {
                            u.scrollTop = e.value.scrollPosition;
                        },
                        getDirection: (u) => (u.deltaY > 1 ? j.Next : j.Prev),
                    });
                var Y = t(727);
                const Z = 'VerticalBar_base_f3',
                    X = 'VerticalBar_base__nonActive_42',
                    Q = 'VerticalBar_topButton_d7',
                    J = 'VerticalBar_bottomButton_06',
                    uu = 'VerticalBar_track_df',
                    eu = 'VerticalBar_thumb_32',
                    tu = 'VerticalBar_rail_43',
                    nu = 'disable',
                    ru = () => {},
                    iu = { pending: !1, offset: 0 },
                    au = (u) => {
                        var e;
                        return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                    },
                    su = (u, e) => {
                        u.contentRef.current && e(u.contentRef.current);
                    },
                    ou = (u, e) => Math.max(20, u.offsetHeight * e),
                    cu = (0, n.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = au, onDrag: i = ru }) => {
                        const s = (0, n.useRef)(null),
                            o = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            E = (0, n.useRef)(null),
                            A = u.stepTimeout || 100,
                            F = (0, n.useState)(iu),
                            D = F[0],
                            d = F[1],
                            B = (0, n.useCallback)(
                                (u) => {
                                    d(u),
                                        E.current && i({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: E.current });
                                },
                                [i],
                            ),
                            m = $(() => {
                                const e = E.current,
                                    t = l.current,
                                    n = u.getWrapperSize(),
                                    r = u.getContainerSize();
                                if (!(n && r && e && t)) return;
                                const i = Math.min(1, n / r);
                                return (
                                    (e.style.height = `${ou(t, i)}px`),
                                    (e.style.display = 'flex'),
                                    s.current && (1 === i ? s.current.classList.add(X) : s.current.classList.remove(X)),
                                    i
                                );
                            }),
                            C = $(() => {
                                const e = l.current,
                                    t = E.current,
                                    n = u.getWrapperSize(),
                                    r = u.getContainerSize();
                                if (!(n && e && t && r)) return;
                                const i = u.animationScroll.scrollPosition.get(),
                                    a = Math.min(1, n / r),
                                    s = N(0, 1, i / (r - n)),
                                    A = (e.offsetHeight - ou(e, a)) * s;
                                (t.style.transform = `translateY(${0 | A}px)`),
                                    ((u) => {
                                        if (o.current && c.current && l.current && E.current) {
                                            if (0 === Math.round(u))
                                                return o.current.classList.add(nu), void c.current.classList.remove(nu);
                                            if (
                                                ((e = l.current),
                                                (t = E.current),
                                                u - (e.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return o.current.classList.remove(nu), void c.current.classList.add(nu);
                                            var e, t;
                                            o.current.classList.remove(nu), c.current.classList.remove(nu);
                                        }
                                    })(A);
                            }),
                            _ = $(() => {
                                su(u, () => {
                                    m(), C();
                                });
                            });
                        (0, n.useEffect)(() => H(_)),
                            (0, n.useEffect)(() => {
                                const e = () => {
                                    su(u, () => {
                                        C();
                                    });
                                };
                                let t = ru;
                                const n = () => {
                                    t(), (t = H(_));
                                };
                                return (
                                    u.events.on('recalculateContent', _),
                                    u.events.on('rest', e),
                                    u.events.on('change', e),
                                    u.events.on('resizeHandled', n),
                                    () => {
                                        t(),
                                            u.events.off('recalculateContent', _),
                                            u.events.off('rest', e),
                                            u.events.off('change', e),
                                            u.events.off('resizeHandled', n);
                                    }
                                );
                            }, [u]),
                            (0, n.useEffect)(() => {
                                if (!D.pending) return;
                                const e = a.O.client.events.mouse.up(() => {
                                        B(iu);
                                    }),
                                    t = a.O.client.events.mouse.move(([e]) => {
                                        su(u, (t) => {
                                            const n = l.current,
                                                r = E.current,
                                                a = u.getContainerSize();
                                            if (!n || !r || !a) return;
                                            const s = e.screenY - D.offset - n.getBoundingClientRect().y,
                                                o = (s / n.offsetHeight) * a;
                                            u.scrollPosition.start({
                                                scrollPosition: u.clampPosition(t, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                i({ type: 'dragging', thumb: r, thumbOffset: s, contentOffset: o });
                                        });
                                    });
                                return () => {
                                    e(), t();
                                };
                            }, [u, D.offset, D.pending, i, B]);
                        const g = (function (u, e, t = []) {
                                const r = (0, n.useRef)(0),
                                    i = (0, n.useCallback)(() => window.clearInterval(r.current), t || []);
                                (0, n.useEffect)(() => i, [i]);
                                const a = (null != t ? t : []).concat([e]);
                                return [
                                    (0, n.useCallback)((t) => {
                                        (r.current = window.setInterval(() => u(t, !0), e)), u(t, !1);
                                    }, a),
                                    i,
                                ];
                            })((e) => u.applyStepTo(e), A, [u]),
                            p = g[0],
                            b = g[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', b, !0),
                                () => document.removeEventListener('mouseup', b, !0)
                            ),
                            [b],
                        );
                        const v = (u) => {
                            u.target.classList.contains(nu) || (0, Y.G)('highlight');
                        };
                        return r().createElement(
                            'div',
                            { className: h()(Z, e.base), ref: s, onWheel: u.handleMouseWheel },
                            r().createElement('div', {
                                className: h()(Q, e.topButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(nu) || 0 !== u.button || ((0, Y.G)('play'), p(j.Next));
                                },
                                ref: o,
                                onMouseEnter: v,
                            }),
                            r().createElement(
                                'div',
                                {
                                    className: h()(uu, e.track),
                                    onMouseDown: (e) => {
                                        const n = E.current;
                                        if (n && 0 === e.button)
                                            if (((0, Y.G)('play'), e.target === n))
                                                B({ pending: !0, offset: e.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((e) => {
                                                    E.current &&
                                                        su(u, (n) => {
                                                            if (!n) return;
                                                            const r = t(u),
                                                                i = u.clampPosition(n, n.scrollTop + r * e);
                                                            u.applyScroll(i);
                                                        });
                                                })(e.screenY > n.getBoundingClientRect().y ? j.Prev : j.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: v,
                                },
                                r().createElement('div', { ref: E, className: h()(eu, e.thumb) }),
                                r().createElement('div', { className: h()(tu, e.rail) }),
                            ),
                            r().createElement('div', {
                                className: h()(J, e.bottomButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(nu) || 0 !== u.button || ((0, Y.G)('play'), p(j.Prev));
                                },
                                onMouseUp: b,
                                ref: c,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    lu = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Eu = ({
                        children: u,
                        api: e,
                        className: t,
                        barClassNames: i,
                        areaClassName: a,
                        scrollClassName: s,
                        scrollClassNames: o,
                        getStepByRailClick: c,
                        onDrag: l,
                    }) => {
                        const E = (0, n.useMemo)(() => {
                                const u = i || {};
                                return Object.assign({}, u, { base: h()(lu.base, u.base) });
                            }, [i]),
                            A = (0, n.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                        return r().createElement(
                            'div',
                            { className: h()(lu.defaultScroll, t), onWheel: e.handleMouseWheel },
                            r().createElement(
                                'div',
                                { className: h()(lu.area, a) },
                                r().createElement(Au, { className: s, classNames: o, api: A }, u),
                            ),
                            r().createElement(cu, { getStepByRailClick: c, api: e, onDrag: l, classNames: E }),
                        );
                    },
                    Au = ({ className: u, classNames: e, children: t, api: i }) => (
                        (0, n.useEffect)(() => H(i.recalculateContent)),
                        r().createElement(
                            'div',
                            { className: h()(lu.base, u), ref: i.wrapperRef, onWheel: i.handleMouseWheel },
                            r().createElement(
                                'div',
                                { className: h()(lu.content, null == e ? void 0 : e.content), ref: i.contentRef },
                                t,
                            ),
                        )
                    );
                Au.Default = Eu;
                const Fu = {
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
                    Du = [
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
                function du() {
                    return (
                        (du = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        du.apply(null, arguments)
                    );
                }
                class Bu extends r().PureComponent {
                    constructor(...u) {
                        super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, Y.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                u && u(e), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, Y.G)(this.props.soundClick);
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
                            i = u.side,
                            a = u.type,
                            s = u.classNames,
                            o = u.onMouseEnter,
                            c = u.onMouseLeave,
                            l = u.onMouseDown,
                            E = u.onMouseUp,
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
                                })(u, Du)),
                            F = h()(Fu.base, Fu[`base__${a}`], Fu[`base__${i}`], null == s ? void 0 : s.base),
                            D = h()(Fu.icon, Fu[`icon__${a}`], Fu[`icon__${i}`], null == s ? void 0 : s.icon),
                            d = h()(Fu.glow, null == s ? void 0 : s.glow),
                            B = h()(Fu.caption, Fu[`caption__${a}`], null == s ? void 0 : s.caption),
                            m = h()(Fu.goto, null == s ? void 0 : s.goto);
                        return r().createElement(
                            'div',
                            du(
                                {
                                    className: F,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(l),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                A,
                            ),
                            'info' !== a && r().createElement('div', { className: Fu.shine }),
                            r().createElement('div', { className: D }, r().createElement('div', { className: d })),
                            r().createElement('div', { className: B }, e),
                            n && r().createElement('div', { className: m }, n),
                        );
                    }
                }
                Bu.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var mu = t(521);
                t(916);
                const Cu = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function _u(u = mu.n.NONE, e = Cu, t = !1, r = !1) {
                    (0, n.useEffect)(() => {
                        if (u !== mu.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === u) {
                                if (!r && a.O.view.isEventHandled()) return;
                                a.O.view.setEventHandled(), e(n), t && n.stopPropagation();
                            }
                        }
                    }, [e, u, t, r]);
                }
                const hu = (u) => () => u();
                var gu = t(525),
                    pu = t(16);
                const bu = 'PlayerSubscriptionsApp_base_8c',
                    vu = 'PlayerSubscriptionsApp_background_a5',
                    fu = 'PlayerSubscriptionsApp_back_cf',
                    wu = 'PlayerSubscriptionsApp_main_11',
                    Su = 'PlayerSubscriptionsApp_header_d0',
                    yu = 'PlayerSubscriptionsApp_title_d8',
                    xu = 'PlayerSubscriptionsApp_subtitle_c2',
                    Tu = 'PlayerSubscriptionsApp_scrollArea_39',
                    Lu = 'PlayerSubscriptionsApp_subscriptions_31',
                    Mu = 'PlayerSubscriptionsApp_subscriptions__empty_76',
                    Ru = 'PlayerSubscriptionsApp_error_41',
                    ku = 'PlayerSubscriptionsApp_alertIcon_55',
                    Ou = 'PlayerSubscriptionsApp_errorCaption_14';
                var Pu = t(344);
                function Iu() {
                    return (
                        (Iu = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        Iu.apply(null, arguments)
                    );
                }
                const Nu = {
                        back: R.strings.player_subscriptions.back(),
                        backTo: R.strings.player_subscriptions.backTo(),
                        title: R.strings.player_subscriptions.title(),
                        subtitle: R.strings.player_subscriptions.subtitle(),
                        noSubscriptions: R.strings.player_subscriptions.noSubscriptions(),
                    },
                    Hu = [pu.h.TwoThirds, pu.h.OneThird, pu.h.OneThird, pu.h.TwoThirds],
                    Wu = () => {
                        const u = (0, Pu.tT)(),
                            e = u.warningTitle,
                            t = u.onBack,
                            n = u.onButtonClick,
                            i = u.onCardClick,
                            a = (0, Pu.tT)('model.subscriptions', Pu.DA.Shallow),
                            s = 0 === a.length || e;
                        var o;
                        return (
                            (o = () => t()),
                            _u(mu.n.ESCAPE, o),
                            r().createElement(
                                'div',
                                { className: bu },
                                r().createElement(
                                    'div',
                                    { className: vu },
                                    r().createElement(
                                        'div',
                                        { className: fu },
                                        r().createElement(Bu, {
                                            caption: Nu.back,
                                            type: 'back',
                                            side: 'left',
                                            onClick: hu(t),
                                            goto: Nu.backTo,
                                        }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: wu },
                                        r().createElement(
                                            'div',
                                            { className: Su },
                                            r().createElement('h1', { className: yu }, Nu.title),
                                            r().createElement('div', { className: xu }, Nu.subtitle),
                                        ),
                                        r().createElement(
                                            Eu,
                                            { className: Tu, api: K() },
                                            r().createElement(
                                                'div',
                                                { className: h()(Lu, s && Mu) },
                                                s &&
                                                    r().createElement(
                                                        'div',
                                                        { className: Ru },
                                                        r().createElement('div', { className: ku }),
                                                        r().createElement(
                                                            'div',
                                                            { className: Ou },
                                                            e || Nu.noSubscriptions,
                                                        ),
                                                    ),
                                                !e &&
                                                    a.map((u, e, t) => {
                                                        const a =
                                                            ((s = e),
                                                            (o = t.length) % 2 != 0 && 0 === s
                                                                ? pu.h.Full
                                                                : Hu[(o % 2 == 0 ? s : s - 1) % 4]);
                                                        var s, o;
                                                        return r().createElement(
                                                            gu.ZP,
                                                            Iu(
                                                                { onButtonClick: n, onCardClick: i, key: e, size: a },
                                                                u.value,
                                                            ),
                                                        );
                                                    }),
                                            ),
                                        ),
                                    ),
                                ),
                            )
                        );
                    };
                engine.whenReady.then(() => {
                    I().render(
                        r().createElement(O, null, r().createElement(Wu, null)),
                        document.getElementById('root'),
                    );
                });
            },
            525: (u, e, t) => {
                'use strict';
                t.d(e, { ZP: () => U, j2: () => W });
                var n = t(483),
                    r = t.n(n),
                    i = t(649),
                    a = t(179),
                    s = t.n(a);
                const o = 'FormatText_base_d0',
                    c = ({
                        binding: u,
                        text: e = '',
                        classMix: t,
                        alignment: n = i.v2.left,
                        formatWithBrackets: c,
                    }) => {
                        if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                        const l = c && u ? (0, i.WU)(e, u) : e;
                        return s().createElement(
                            a.Fragment,
                            null,
                            l.split('\n').map((e, c) =>
                                s().createElement(
                                    'div',
                                    { className: r()(o, t), key: `${e}-${c}` },
                                    (0, i.Uw)(e, n, u).map((u, e) =>
                                        s().createElement(a.Fragment, { key: `${e}-${u}` }, u),
                                    ),
                                ),
                            ),
                        );
                    };
                var l = t(344);
                const E = {};
                let A, F, D;
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
                })(A || (A = {})),
                    (function (u) {
                        (u.WotSubscription = 'WotSubscription'), (u.ExternalSubscription = 'ExternalSubscription');
                    })(F || (F = {})),
                    (function (u) {
                        (u.Inactive = 'Inactive'), (u.Active = 'Active'), (u.Cancelled = 'Cancelled');
                    })(D || (D = {}));
                var d = t(44),
                    B = t(727),
                    m = t(16);
                const C = {
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
                let _, h;
                !(function (u) {
                    (u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost');
                })(_ || (_ = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium'), (u.large = 'large');
                    })(h || (h = {}));
                const g = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: n,
                    disabled: i,
                    mixClass: o,
                    soundHover: c,
                    soundClick: l,
                    onMouseEnter: E,
                    onMouseMove: A,
                    onMouseDown: F,
                    onMouseUp: D,
                    onMouseLeave: d,
                    onClick: m,
                }) => {
                    const h = (0, a.useRef)(null),
                        g = (0, a.useState)(t),
                        p = g[0],
                        b = g[1],
                        v = (0, a.useState)(!1),
                        f = v[0],
                        w = v[1];
                    return (
                        (0, a.useEffect)(() => {
                            function u(u) {
                                p && null !== h.current && !h.current.contains(u.target) && b(!1);
                            }
                            return (
                                document.addEventListener('mousedown', u),
                                () => {
                                    document.removeEventListener('mousedown', u);
                                }
                            );
                        }, [p]),
                        (0, a.useEffect)(() => {
                            b(t);
                        }, [t]),
                        s().createElement(
                            'div',
                            {
                                ref: h,
                                className: r()(
                                    C.base,
                                    C[`base__${n}`],
                                    i && C.base__disabled,
                                    e && C[`base__${e}`],
                                    p && C.base__focus,
                                    f && C.base__highlightActive,
                                    o,
                                ),
                                onMouseEnter: function (u) {
                                    i || (null !== c && (0, B.G)(c), E && E(u));
                                },
                                onMouseMove: function (u) {
                                    A && A(u);
                                },
                                onMouseUp: function (u) {
                                    i || (D && D(u), w(!1));
                                },
                                onMouseDown: function (u) {
                                    i ||
                                        (null !== l && (0, B.G)(l),
                                        F && F(u),
                                        t && (i || (h.current && (h.current.focus(), b(!0)))),
                                        w(!0));
                                },
                                onMouseLeave: function (u) {
                                    i || (d && d(u), w(!1));
                                },
                                onClick: function (u) {
                                    i || (m && m(u));
                                },
                            },
                            n !== _.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: C.back }),
                                    s().createElement('span', { className: C.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: r()(C.state, C.state__default) },
                                s().createElement('span', { className: C.stateDisabled }),
                                s().createElement('span', { className: C.stateHighlightHover }),
                                s().createElement('span', { className: C.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: C.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                g.defaultProps = { type: _.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const p = g,
                    b = {
                        base: 'SubscriptionItem_base_e8',
                        subscriptionImage: 'SubscriptionItem_subscriptionImage_4d',
                        base__rewardsClaimed: 'SubscriptionItem_base__rewardsClaimed_21',
                        activateButtonLight: 'SubscriptionItem_activateButtonLight_ce',
                        base__oneThird: 'SubscriptionItem_base__oneThird_74',
                        base__twoThirds: 'SubscriptionItem_base__twoThirds_16',
                        subscriptionText: 'SubscriptionItem_subscriptionText_39',
                        refreshTimer: 'SubscriptionItem_refreshTimer_47',
                        footerText: 'SubscriptionItem_footerText_84',
                        footerDescription: 'SubscriptionItem_footerDescription_e3',
                        cardFooter: 'SubscriptionItem_cardFooter_ff',
                        activateButton: 'SubscriptionItem_activateButton_3e',
                        activateButton_manage: 'SubscriptionItem_activateButton_manage_db',
                        activateButton_internal: 'SubscriptionItem_activateButton_internal_d4',
                        cancelledLight: 'SubscriptionItem_cancelledLight_3d',
                        claimedText: 'SubscriptionItem_claimedText_23',
                        subscriptionHeader: 'SubscriptionItem_subscriptionHeader_1a',
                        subscriptionDescription: 'SubscriptionItem_subscriptionDescription_b6',
                        ctaContainer: 'SubscriptionItem_ctaContainer_71',
                        ctaContainer_row: 'SubscriptionItem_ctaContainer_row_ba',
                        linkIcon: 'SubscriptionItem_linkIcon_83',
                        rewardsClaimed: 'SubscriptionItem_rewardsClaimed_d3',
                        claimedText_internal: 'SubscriptionItem_claimedText_internal_ec',
                        claimedText_light: 'SubscriptionItem_claimedText_light_0c',
                        claimedIcon: 'SubscriptionItem_claimedIcon_64',
                        claimedIcon_internal: 'SubscriptionItem_claimedIcon_internal_a6',
                        warningIcon: 'SubscriptionItem_warningIcon_07',
                        footerTitle: 'SubscriptionItem_footerTitle_a0',
                        spinner: 'SubscriptionItem_spinner_9b',
                        'pending-spin': 'SubscriptionItem_pending-spin_4f',
                        spinner__visible: 'SubscriptionItem_spinner__visible_bf',
                        wotSubscriptionStatus_glow: 'SubscriptionItem_wotSubscriptionStatus_glow_c3',
                        wotSubscriptionStatus_icon_active: 'SubscriptionItem_wotSubscriptionStatus_icon_active_75',
                        wotSubscriptionStatus_icon_inactive: 'SubscriptionItem_wotSubscriptionStatus_icon_inactive_52',
                        wotSubscriptionStatus_text: 'SubscriptionItem_wotSubscriptionStatus_text_fe',
                        wotSubscriptionStatus_active: 'SubscriptionItem_wotSubscriptionStatus_active_d8',
                        wotSubscriptionStatus_inactive: 'SubscriptionItem_wotSubscriptionStatus_inactive_0f',
                        wotSubscriptionStatusContainer: 'SubscriptionItem_wotSubscriptionStatusContainer_b8',
                    },
                    v = ({
                        size: u,
                        redirectButtonClickHandler: e,
                        isPendingRedirect: t,
                        buttonClickHandler: n,
                        has3rdPartyRewardsToClaim: i,
                        hasDepotRewardsToClaim: a,
                    }) => {
                        const o = !i && !a;
                        return s().createElement(
                            s().Fragment,
                            null,
                            (i || o) && s().createElement('div', { className: b.activateButtonLight }),
                            o
                                ? s().createElement(
                                      'div',
                                      { className: b.rewardsClaimed },
                                      s().createElement('div', { className: b.claimedIcon }),
                                      s().createElement(
                                          'div',
                                          { className: b.claimedText },
                                          u === m.h.Full ? W.received : W.receivedShort,
                                      ),
                                  )
                                : s().createElement(
                                      p,
                                      {
                                          type: i ? 'main' : 'primary',
                                          size: u === m.h.OneThird ? 'small' : 'medium',
                                          mixClass: b.activateButton,
                                          disabled: t,
                                          onClick: i ? e : n,
                                      },
                                      i &&
                                          s().createElement('span', {
                                              className: r()(b.spinner, t && b.spinner__visible),
                                          }),
                                      ((u, e) =>
                                          u
                                              ? e === m.h.Full
                                                  ? W.claimRewards
                                                  : W.claimRewardsShort
                                              : e === m.h.Full
                                                ? W.selectRewards
                                                : W.selectRewardsShort)(i, u),
                                      i && !t
                                          ? s().createElement('img', {
                                                src: R.images.gui.maps.icons.player_subscriptions.link_icon(),
                                                className: b.linkIcon,
                                            })
                                          : '',
                                  ),
                        );
                    };
                let f, w;
                !(function (u) {
                    (u.Timer = 'timer'), (u.Countdown = 'countdown'), (u.Cooldown = 'cooldown'), (u.None = 'none');
                })(f || (f = {})),
                    (function (u) {
                        (u.Description = 'description'),
                            (u.Short = 'short'),
                            (u.Long = 'long'),
                            (u.Extended = 'extended');
                    })(w || (w = {}));
                var S = t(768);
                const y = 'Countdown_base_fe',
                    x = 'Countdown_icon_8b',
                    T = 'Countdown_description_8d',
                    L = (u) => u.toString().padStart(2, '0'),
                    M = R.images.gui.maps.icons.components.countdown,
                    k = (u, e) => {
                        const t = 2 === e ? M.big : M;
                        switch (u) {
                            case f.Timer:
                                return t.clock();
                            case f.Countdown:
                                return t.hourglass();
                            case f.Cooldown:
                                return t.lock();
                        }
                    },
                    O = (0, a.memo)(
                        ({
                            duration: u,
                            icon: e = f.Timer,
                            style: t = w.Description,
                            onTimeReached: n,
                            className: o = '',
                            classNames: c = {},
                        }) => {
                            const E = t !== w.Description ? 1 : void 0,
                                A = (0, l.au)(u, E),
                                F = (() => {
                                    const u = (0, a.useState)(S.O.view.getScale()),
                                        e = u[0],
                                        t = u[1];
                                    return (
                                        (0, a.useEffect)(() => {
                                            const u = () => {
                                                t(S.O.view.getScale());
                                            };
                                            return (
                                                window.addEventListener('resize', u),
                                                () => {
                                                    window.removeEventListener('resize', u);
                                                }
                                            );
                                        }, []),
                                        e
                                    );
                                })();
                            n && n[A] && n[A]();
                            const D = ((u, e) => {
                                switch (e) {
                                    case w.Description:
                                        return (0, d.wB)(u);
                                    case w.Short:
                                        return `${L(u.minutes)}:${L(u.seconds)}`;
                                    case w.Long:
                                        return `${L(u.hours)}:${L(u.minutes)}:${L(u.seconds)}`;
                                    case w.Extended:
                                        return `${(0, i.WU)(R.strings.common.duration.days(), { days: u.days })} | ${L(u.hours)}:${L(u.minutes)}:${L(u.seconds)}`;
                                }
                            })((0, d.f8)(A), t);
                            return s().createElement(
                                'div',
                                { className: r()(y, o) },
                                e !== f.None &&
                                    s().createElement('div', {
                                        className: r()(x, c.icon),
                                        style: { backgroundImage: `url('${k(e, F)}')` },
                                    }),
                                s().createElement('div', { className: r()(T, c.text) }, D),
                            );
                        },
                    ),
                    P = ({ refreshTime: u }) => {
                        const e = (0, a.useState)(!0),
                            t = e[0],
                            n = e[1],
                            r = u - Math.floor(Date.now() / 1e3),
                            i = r > 0 ? r : 0;
                        return t
                            ? s().createElement(
                                  'div',
                                  { className: b.refreshTimer },
                                  s().createElement('span', { className: b.timerLabel }, W.timerLabel),
                                  s().createElement(O, {
                                      duration: i,
                                      style: w.Description,
                                      onTimeReached: { 0: () => n(!1) },
                                  }),
                              )
                            : null;
                    };
                function I() {
                    return (
                        (I = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        I.apply(null, arguments)
                    );
                }
                const N = ({
                        size: u,
                        redirectButtonClickHandler: e,
                        isPendingRedirect: t,
                        buttonClickHandler: n,
                        subscriptionState: i,
                    }) => {
                        const a = {
                            type: 'main',
                            size: u === m.h.Full ? 'medium' : 'small',
                            disabled: t,
                            mixClass: b.activateButton,
                            onClick: n,
                        };
                        return s().createElement(
                            'div',
                            { className: b.ctaContainer_row },
                            s().createElement(
                                p,
                                I({}, a, { onClick: i === D.Active ? e : n, type: i === D.Active ? 'ghost' : 'main' }),
                                i === D.Active &&
                                    s().createElement('span', { className: r()(b.spinner, t && b.spinner__visible) }),
                                i === D.Inactive ? W.subscribe : W.manage,
                            ),
                        );
                    },
                    H = {
                        [D.Active]: {
                            icon: R.images.gui.maps.icons.player_subscriptions.icons.check(),
                            glow: R.images.gui.maps.icons.player_subscriptions.icons.check_glow(),
                            accentClassName: b.wotSubscriptionStatus_active,
                            iconClassName: b.wotSubscriptionStatus_icon_active,
                        },
                        [D.Cancelled]: {
                            icon: R.images.gui.maps.icons.player_subscriptions.icons.alert(),
                            glow: R.images.gui.maps.icons.player_subscriptions.icons.alert_glow(),
                            accentClassName: b.wotSubscriptionStatus_inactive,
                            iconClassName: b.wotSubscriptionStatus_icon_inactive,
                        },
                        [D.Inactive]: {
                            icon: R.images.gui.maps.icons.player_subscriptions.icons.alert(),
                            glow: R.images.gui.maps.icons.player_subscriptions.icons.alert_glow(),
                            accentClassName: b.wotSubscriptionStatus_inactive,
                            iconClassName: b.wotSubscriptionStatus_icon_inactive,
                        },
                    },
                    W = {
                        claimRewards: R.strings.player_subscriptions.subscriptionItem.button.claimRewards(),
                        claimRewardsShort: R.strings.player_subscriptions.subscriptionItem.button.claimRewardsShort(),
                        selectRewards: R.strings.player_subscriptions.subscriptionItem.button.selectRewards(),
                        selectRewardsShort: R.strings.player_subscriptions.subscriptionItem.button.selectRewardsShort(),
                        received: R.strings.player_subscriptions.subscriptionItem.button.received(),
                        receivedShort: R.strings.player_subscriptions.subscriptionItem.button.receivedShort(),
                        timerLabel: R.strings.player_subscriptions.subscriptionItem.timerLabel(),
                        activate: R.strings.player_subscriptions.subscriptionItem.button.activate(),
                        active: R.strings.player_subscriptions.subscriptionItem.active(),
                        manage: R.strings.player_subscriptions.subscriptionItem.button.manage(),
                        cancelled: R.strings.player_subscriptions.subscriptionItem.cancelled(),
                        restartSubscription: R.strings.player_subscriptions.subscriptionItem.button.subscribe(),
                        nextCharge: R.strings.player_subscriptions.subscriptionItem.nextCharge(),
                        activeUntil: R.strings.player_subscriptions.subscriptionItem.activeUntil(),
                        subscribe: R.strings.player_subscriptions.subscriptionItem.button.subscribe(),
                    },
                    U = (function (u, e, t, n = l.DA.Deep) {
                        const r = (r) => {
                            const i = r.path || e || void 0,
                                a = (i && E[i]) || !1,
                                o = (0, l.tT)(i, a ? l.DA.None : n),
                                c = Object.assign({}, t(o, r), r);
                            return s().createElement(u, c);
                        };
                        var i;
                        return (r.displayName = `WithModel(${((i = u), i.displayName || i.name || 'Component')})`), r;
                    })(
                        ({
                            refreshTime: u,
                            id: e,
                            name: t,
                            description: n,
                            size: i,
                            imageUriSmall: o,
                            imageUriMedium: l,
                            imageUriLarge: E,
                            onButtonClick: C,
                            onCardClick: _,
                            subscriptionType: h,
                            wotSubscriptionState: g,
                            has3rdPartyRewardsToClaim: p,
                            hasDepotRewardsToClaim: f,
                        }) => {
                            const w = (0, a.useState)(!1),
                                S = w[0],
                                y = w[1],
                                x = !p && !f,
                                T = r()(
                                    b.base,
                                    i === m.h.OneThird && b.base__oneThird,
                                    i === m.h.TwoThirds && b.base__twoThirds,
                                    x && b.base__rewardsClaimed,
                                ),
                                L = (u) => {
                                    S ||
                                        (u.stopPropagation(),
                                        (0, B.G)('yes1'),
                                        C({ subscriptionId: e }),
                                        y(!0),
                                        setTimeout(() => y(!1), 1e3));
                                },
                                M = (u) => {
                                    u.stopPropagation(), (0, B.G)('yes1'), C({ subscriptionId: e });
                                },
                                R = (0, a.useCallback)(() => {
                                    (0, B.G)('highlight');
                                }, []);
                            return s().createElement(
                                'div',
                                {
                                    className: T,
                                    style: {
                                        '--imageUriSmall': `url(${o})`,
                                        '--imageUriMedium': `url(${l})`,
                                        '--imageUriLarge': `url(${E})`,
                                    },
                                    onClick: () => {
                                        S ||
                                            ((0, B.G)('yes1'),
                                            _({ subscriptionId: e }),
                                            y(!0),
                                            setTimeout(() => y(!1), 1e3));
                                    },
                                    onMouseEnter: R,
                                },
                                h === F.WotSubscription &&
                                    (g === D.Active || g === D.Cancelled) &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement('img', {
                                            className: b.wotSubscriptionStatus_glow,
                                            alt: '',
                                            src: H[g].glow,
                                        }),
                                        s().createElement(
                                            'div',
                                            { className: b.wotSubscriptionStatusContainer },
                                            s().createElement('img', {
                                                className: H[g].iconClassName,
                                                alt: '',
                                                src: H[g].icon,
                                            }),
                                            s().createElement(
                                                'span',
                                                { className: H[g].accentClassName },
                                                g === D.Active ? W.active : W.cancelled,
                                            ),
                                            ' ',
                                            s().createElement(c, {
                                                classMix: b.wotSubscriptionStatus_text,
                                                text: g === D.Active ? W.nextCharge : W.activeUntil,
                                                binding: { chargeDate: (0, d.UI)(u, A.ShortDate) },
                                            }),
                                        ),
                                    ),
                                h === F.ExternalSubscription && s().createElement(P, { refreshTime: u }),
                                i === m.h.Full &&
                                    s().createElement(
                                        'div',
                                        { className: b.subscriptionText },
                                        s().createElement('div', { className: b.subscriptionHeader }, t),
                                        s().createElement('div', { className: b.subscriptionDescription }, n),
                                    ),
                                s().createElement('div', { className: b.subscriptionImage }),
                                s().createElement(
                                    'div',
                                    { className: b.cardFooter },
                                    i !== m.h.Full &&
                                        s().createElement(
                                            'div',
                                            { className: b.footerText },
                                            s().createElement('div', { className: b.footerTitle }, t),
                                            s().createElement('div', { className: b.footerDescription }, n),
                                        ),
                                    s().createElement(
                                        'div',
                                        { className: b.ctaContainer },
                                        h === F.WotSubscription
                                            ? s().createElement(N, {
                                                  subscriptionState: g,
                                                  buttonClickHandler: M,
                                                  isPendingRedirect: S,
                                                  redirectButtonClickHandler: L,
                                                  size: i,
                                              })
                                            : s().createElement(v, {
                                                  buttonClickHandler: M,
                                                  has3rdPartyRewardsToClaim: p,
                                                  isPendingRedirect: S,
                                                  hasDepotRewardsToClaim: f,
                                                  redirectButtonClickHandler: L,
                                                  size: i,
                                              }),
                                    ),
                                ),
                            );
                        },
                        null,
                        (u, e) => Object.assign({}, e, u),
                    );
            },
            16: (u, e, t) => {
                'use strict';
                let n;
                t.d(e, { h: () => n }),
                    (function (u) {
                        (u.Full = 'Full'), (u.OneThird = 'OneThird'), (u.TwoThirds = 'TwoThirds');
                    })(n || (n = {}));
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
                for (o = 0; o < deferred.length; o++) {
                    for (var [e, t, n] = deferred[o], i = !0, a = 0; a < e.length; a++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[a]))
                            ? e.splice(a--, 1)
                            : ((i = !1), n < r && (r = n));
                    if (i) {
                        deferred.splice(o--, 1);
                        var s = t();
                        void 0 !== s && (u = s);
                    }
                }
                return u;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [e, t, n];
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
        (__webpack_require__.j = 138),
        (() => {
            var u = { 138: 0, 846: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        r,
                        [i, a, s] = t,
                        o = 0;
                    if (i.some((e) => 0 !== u[e])) {
                        for (n in a) __webpack_require__.o(a, n) && (__webpack_require__.m[n] = a[n]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (e && e(t); o < i.length; o++)
                        (r = i[o]), __webpack_require__.o(u, r) && u[r] && u[r][0](), (u[r] = 0);
                    return __webpack_require__.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [559], () => __webpack_require__(556));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
