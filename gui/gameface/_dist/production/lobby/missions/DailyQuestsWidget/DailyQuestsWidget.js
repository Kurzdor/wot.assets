(() => {
    'use strict';
    var __webpack_modules__ = {
            8374: (u, e, t) => {
                t.d(e, { s_: () => a, dV: () => o, yR: () => r });
                t(3649);
                let n;
                !(function (u) {
                    (u.SHORT_DATE = 'short-date'),
                        (u.SHORT_TIME = 'short-time'),
                        (u.SHORT_DATE_TIME = 'short-date-time'),
                        (u.FULL_DATE = 'full-date'),
                        (u.FULL_DATE_TIME = 'full-date-time'),
                        (u.MONTH = 'month'),
                        (u.MONTH_DATE = 'month-date'),
                        (u.DATE_MONTH = 'date-month'),
                        (u.MONTH_YEAR = 'month-year'),
                        (u.WEEK_DAY = 'week-day'),
                        (u.WEEK_DAY_TIME = 'week-day-time'),
                        (u.YEAR = 'year'),
                        (u.DATE_YEAR = 'date-year');
                })(n || (n = {}));
                t(4179);
                const a = 1e3,
                    r = 60,
                    o = 60 * r;
                Date.now();
            },
            527: (u, e, t) => {
                t.r(e), t.d(e, { mouse: () => i, onResize: () => r });
                var n = t(2472),
                    a = t(1176);
                const r = (0, n.E)('clientResized'),
                    o = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const i = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && (0, a.R)(!1);
                    }
                    function t() {
                        u.enabled && (0, a.R)(!0);
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
                            : (0, a.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${e}`,
                                        i = o[e]((u) => t([u, 'outside']));
                                    function s(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, s),
                                        n(),
                                        () => {
                                            a &&
                                                (i(),
                                                window.removeEventListener(r, s),
                                                (u.listeners -= 1),
                                                n(),
                                                (a = !1));
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
                            u.enabled && (0, a.R)(!0);
                        },
                        disableOutside() {
                            u.enabled && (0, a.R)(!1);
                        },
                    });
                })();
            },
            5959: (u, e, t) => {
                t.r(e),
                    t.d(e, {
                        events: () => n,
                        getMouseGlobalPosition: () => r,
                        getSize: () => a,
                        graphicsQuality: () => o,
                    });
                var n = t(527);
                function a(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (u, e, t) => {
                function n(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => n });
            },
            2472: (u, e, t) => {
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
                t.d(e, { O: () => a });
                var n = t(5959);
                const a = { view: t(7641), client: n };
            },
            3722: (u, e, t) => {
                function n(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function a(u, e, t) {
                    return `url(${n(u, e, t)})`;
                }
                t.r(e), t.d(e, { getBgUrl: () => a, getTextureUrl: () => n });
            },
            6112: (u, e, t) => {
                t.d(e, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                t.d(e, { U: () => a });
                var n = t(2472);
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
            7641: (u, e, t) => {
                t.r(e),
                    t.d(e, {
                        addModelObserver: () => l,
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => w,
                        events: () => r.U,
                        extraSize: () => f,
                        forceTriggerMouseMove: () => g,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => E,
                        getDisplayStatus: () => v,
                        getScale: () => D,
                        getSize: () => A,
                        getViewGlobalPosition: () => d,
                        isEventHandled: () => h,
                        isFocused: () => B,
                        pxToRem: () => m,
                        remToPx: () => C,
                        resize: () => _,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => b,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => c,
                        whenTutorialReady: () => M,
                    });
                var n = t(3722),
                    a = t(6112),
                    r = t(6538),
                    o = t(8566);
                function i(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function s(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function E(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function l(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function c(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function A(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function d(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: C(e.x), y: C(e.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function m(u) {
                    return viewEnv.pxToRem(u);
                }
                function C(u) {
                    return viewEnv.remToPx(u);
                }
                function p(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function B() {
                    return viewEnv.isFocused();
                }
                function b() {
                    return viewEnv.setEventHandled();
                }
                function h() {
                    return viewEnv.isEventHandled();
                }
                function g() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(a.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === a.W[e]), u),
                        {},
                    ),
                    f = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    M = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : r.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                t.d(e, { qP: () => E });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    o = 32,
                    i = 64,
                    s = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                o = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(u);
                                    for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                    return a;
                                })(e, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, o, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var a;
                    },
                    E = {
                        close(u) {
                            s('popover' === u ? a : o);
                        },
                        minimize() {
                            s(i);
                        },
                        move(u) {
                            s(r, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            7902: (u, e, t) => {
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
            8071: (u, e, t) => {
                t.d(e, { M: () => n });
                const n = (u, e) => u.split('.').reduce((u, e) => u && u[e], e);
            },
            4649: (u, e, t) => {
                t.d(e, { au: () => m, tT: () => D, eI: () => s });
                var n = t(6179);
                var a = t(8374);
                const r = () => {},
                    o = (u = 0, e, t = 0, o = r) => {
                        const i = (0, n.useState)(u),
                            s = i[0],
                            E = i[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (u > 0) {
                                    E(u);
                                    const n = Date.now(),
                                        r = e || (u > 2 * a.yR ? a.yR : 1),
                                        i = setInterval(() => {
                                            const e = u - Math.floor((Date.now() - n) / a.s_);
                                            null !== t && e <= t ? (E(t), o && o(), clearInterval(i)) : E(e);
                                        }, r * a.s_);
                                    return () => {
                                        clearInterval(i);
                                    };
                                }
                            }, [u, e, t, o]),
                            s
                        );
                    };
                var i = t(3138);
                const s = () => {
                    const u = i.O.view.getSize('rem'),
                        e = (0, n.useState)({ height: u.height, width: u.width }),
                        t = e[0],
                        a = e[1];
                    return (
                        (0, n.useEffect)(() => {
                            const u = (u) => {
                                a(u);
                            };
                            return (
                                engine.on('screenResized', u),
                                () => {
                                    engine.off('screenResized', u);
                                }
                            );
                        }, []),
                        t
                    );
                };
                var E = t(7902),
                    l = t(8071),
                    c = t(6536),
                    A = t(4179),
                    _ = t(7332);
                const d = A.Sw.instance;
                let F;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(F || (F = {}));
                const D = (u = 'model', e = F.Deep) => {
                        const t = (0, n.useState)(0),
                            a = (t[0], t[1]),
                            r = (0, n.useMemo)(() => (0, E.F)(), []),
                            o = r.caller,
                            i = r.resId,
                            s = (0, n.useMemo)(
                                () => (window.__feature && window.__feature !== o ? `subViews.${o}.${u}` : u),
                                [o, u],
                            ),
                            A = (0, n.useState)(() =>
                                ((u) => {
                                    const e = (0, l.M)(u, window);
                                    for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                    return (0, _.os)(e) ? e.value : e;
                                })((0, _.Gd)(s)),
                            ),
                            D = A[0],
                            m = A[1],
                            C = (0, n.useRef)(-1);
                        return (
                            (0, c.Z)(() => {
                                if (
                                    ('boolean' == typeof e &&
                                        ((e = e ? F.Deep : F.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    e !== F.None)
                                ) {
                                    const t = (u) => {
                                            (0, _.kJ)(u) && e === F.Deep
                                                ? (u === D && a((u) => u + 1), m(u))
                                                : m(Object.assign([], u));
                                        },
                                        n = (0, _.U0)(u);
                                    C.current = d.addCallback(n, t, i, e === F.Deep);
                                }
                            }),
                            (0, n.useEffect)(() => {
                                if (e !== F.None)
                                    return () => {
                                        d.removeCallback(C.current, i);
                                    };
                            }, [i, e]),
                            D
                        );
                    },
                    m = (A.Sw.instance, o);
            },
            6536: (u, e, t) => {
                t.d(e, { Z: () => a });
                var n = t(6179);
                const a = (u) => {
                    const e = (0, n.useRef)(!1);
                    e.current || (u(), (e.current = !0));
                };
            },
            5521: (u, e, t) => {
                let n, a;
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
                            (u[(u.KEY_9 = 57)] = 'KEY_9'),
                            (u[(u.CAPS_LOCK = 20)] = 'CAPS_LOCK'),
                            (u[(u.INSERT = 45)] = 'INSERT'),
                            (u[(u.F1 = 112)] = 'F1'),
                            (u[(u.F2 = 113)] = 'F2'),
                            (u[(u.F3 = 114)] = 'F3'),
                            (u[(u.F4 = 115)] = 'F4'),
                            (u[(u.F5 = 116)] = 'F5'),
                            (u[(u.F6 = 117)] = 'F6'),
                            (u[(u.F7 = 118)] = 'F7'),
                            (u[(u.F8 = 119)] = 'F8'),
                            (u[(u.F9 = 120)] = 'F9'),
                            (u[(u.F10 = 121)] = 'F10'),
                            (u[(u.F11 = 122)] = 'F11'),
                            (u[(u.F12 = 123)] = 'F12'),
                            (u[(u.SELECT = 93)] = 'SELECT'),
                            (u[(u.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                            (u[(u.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                            (u[(u.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                            (u[(u.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                            (u[(u.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                            (u[(u.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                            (u[(u.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                            (u[(u.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                            (u[(u.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                            (u[(u.NUMPAD_9 = 105)] = 'NUMPAD_9'),
                            (u[(u.NUM_DECIMAL = 110)] = 'NUM_DECIMAL'),
                            (u[(u.STAR = 106)] = 'STAR'),
                            (u[(u.NUM_SLASH = 111)] = 'NUM_SLASH'),
                            (u[(u.FORWARD_SLASH = 191)] = 'FORWARD_SLASH'),
                            (u[(u.COMMA = 188)] = 'COMMA'),
                            (u[(u.DASH = 189)] = 'DASH'),
                            (u[(u.PERIOD = 190)] = 'PERIOD');
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
                    })(a || (a = {}));
            },
            3649: (u, e, t) => {
                let n;
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(n || (n = {}));
                (() => {
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
                })();
            },
            1358: (u, e, t) => {
                t.d(e, { Z: () => r });
                var n = t(3138);
                class a {
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
                        return window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(u, e, t = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(u, t, a);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", u),
                            r
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
                a.__instance = void 0;
                const r = a;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4179);
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
            4179: (u, e, t) => {
                t.d(e, { Sw: () => r.Z, B0: () => s, ry: () => C });
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
                const a = n;
                var r = t(1358);
                const o = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    i = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    };
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
                const E = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    d = t(3138);
                const F = ['args'];
                function D(u, e, t, n, a, r, o) {
                    try {
                        var i = u[r](o),
                            s = i.value;
                    } catch (u) {
                        return void t(u);
                    }
                    i.done ? e(s) : Promise.resolve(s).then(n, a);
                }
                const m = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    C = (function () {
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
                                    return new Promise(function (n, a) {
                                        var r = u.apply(e, t);
                                        function o(u) {
                                            D(r, n, a, o, i, 'next', u);
                                        }
                                        function i(u) {
                                            D(r, n, a, o, i, 'throw', u);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    p = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                r = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(u);
                                    for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                    return a;
                                })(e, F);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, r, {
                                          arguments:
                                              ((n = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    B = () => p(s.CLOSE),
                    b = (u, e) => {
                        u.keyCode === _.n.ESCAPE && e();
                    };
                var h = t(7572);
                const g = a.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: h.Z,
                        ViewEventType: s,
                        NumberFormatType: E,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: A,
                        makeGlobalBoundingBox: m,
                        sendMoveEvent: (u) => p(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: B,
                        sendClosePopOverEvent: () => p(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            p(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, a = R.invalid('resId'), r) => {
                            const o = d.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                E = i.x,
                                l = i.y,
                                c = i.width,
                                A = i.height,
                                _ = {
                                    x: d.O.view.pxToRem(E) + o.x,
                                    y: d.O.view.pxToRem(l) + o.y,
                                    width: d.O.view.pxToRem(c),
                                    height: d.O.view.pxToRem(A),
                                };
                            p(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: e,
                                bbox: m(_),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => b(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            b(u, B);
                        },
                        handleViewEvent: p,
                        onBindingsReady: C,
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
                                    const a = Object.prototype.toString.call(e[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = e[n];
                                        t[n] = [];
                                        for (let e = 0; e < a.length; e++) t[n].push({ value: u(a[e].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = u(e[n]))
                                            : (t[n] = e[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: g,
                        SystemLocale: o,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = v;
            },
            7332: (u, e, t) => {
                t.d(e, { Gd: () => s, U0: () => E, kJ: () => o, os: () => r });
                var n = t(7902),
                    a = t(8071);
                const r = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    o = (u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name,
                    i = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    s = (u) =>
                        ((u, e) =>
                            u.split('.').reduce((u, t) => {
                                const n = (0, a.M)(`${u}.${t}`, window);
                                return r(n) ? e(u, t, n) : `${u}.${t}`;
                            }))(u, (u, e) => `${u}.${e}.value`),
                    E = (u) => {
                        const e = ((u) => {
                                const e = (0, n.F)(),
                                    t = e.caller,
                                    a = e.resId,
                                    r = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: r, modelPath: i(r, u || ''), resId: a };
                            })(),
                            t = e.modelPrefix,
                            o = u.split('.');
                        if (o.length > 0) {
                            const u = [o[0]];
                            return (
                                o.reduce((e, n) => {
                                    const o = (0, a.M)(i(t, `${e}.${n}`), window);
                                    return r(o) ? (u.push(o.id), `${e}.${n}.value`) : (u.push(n), `${e}.${n}`);
                                }),
                                u.reduce((u, e) => u + '.' + e)
                            );
                        }
                        return '';
                    };
            },
            6267: (u, e, t) => {
                var n = t(3138),
                    a = t(4649),
                    r = t(6179),
                    o = t.n(r),
                    i = t(493),
                    s = t.n(i),
                    E = t(6483),
                    l = t.n(E);
                let c, A, _, d, F;
                !(function (u) {
                    (u.Init = 'init'),
                        (u.Appear = 'appear'),
                        (u.ForceComplete = 'force-complete'),
                        (u.Complete = 'complete'),
                        (u.ForceDisappear = 'force-disappear'),
                        (u.Disappear = 'disappear');
                })(c || (c = {})),
                    (function (u) {
                        (u[(u.Micro = 0)] = 'Micro'), (u[(u.Mini = 1)] = 'Mini'), (u[(u.Normal = 2)] = 'Normal');
                    })(A || (A = {})),
                    (function (u) {
                        (u[(u.Micro = 155)] = 'Micro'), (u[(u.Mini = 190)] = 'Mini'), (u[(u.Normal = 340)] = 'Normal');
                    })(_ || (_ = {})),
                    (function (u) {
                        (u[(u.Mini = 65)] = 'Mini'), (u[(u.Normal = 186)] = 'Normal');
                    })(d || (d = {})),
                    (function (u) {
                        (u[(u.None = 0)] = 'None'), (u[(u.List = 1)] = 'List'), (u[(u.Bonus = 2)] = 'Bonus');
                    })(F || (F = {}));
                const D = (u) => ({
                        backgroundImage: `url(${R.images.gui.maps.icons.missions.icons[`c_32_${u}_silver`]()})`,
                    }),
                    m = (u) => u.every((u) => u.value.completed),
                    C = (u) => (u === A.Normal ? ue : u === A.Micro ? oe : (A.Mini, re)),
                    p = (u) => u.map((u) => u.value.currentProgress).join('-'),
                    B = 'QuestList_base_4a',
                    b = 'QuestList_base__horizontal_ea';
                class h extends o().Component {
                    constructor(...u) {
                        super(...u),
                            (this.state = { animateDisappear: !1 }),
                            (this.appearFinishedCount = 0),
                            (this.indicateCompleteFinishedQuests = Array.from(
                                Array(this.props.quests.length),
                                () => !1,
                            )),
                            (this.disappearFinishedCount = 0),
                            (this.currentProgressHash = ''),
                            (this.handleAnimationEvent = (u, e) => {
                                const t = this.props,
                                    n = t.quests,
                                    a = t.indicateCompleteQuests,
                                    r = t.onDisappear,
                                    o = t.onAppear;
                                var i, s;
                                u === c.Appear &&
                                    (this.appearFinishedCount++,
                                    this.appearFinishedCount > n.length && (this.appearFinishedCount = 1),
                                    this.appearFinishedCount === n.length && o()),
                                    u === c.Complete &&
                                        ((this.indicateCompleteFinishedQuests[e - 1] = !0),
                                        m(n) &&
                                            ((i = a),
                                            (s = this.indicateCompleteFinishedQuests),
                                            i.every((u, e) => !u.value || s[e])) &&
                                            this.setState({ animateDisappear: !0 })),
                                    u === c.Disappear &&
                                        (this.disappearFinishedCount++,
                                        this.disappearFinishedCount === n.length && r());
                            });
                    }
                    componentDidUpdate(u) {
                        this.props.animateDisappear !== u.animateDisappear &&
                            this.setState({ animateDisappear: this.props.animateDisappear }),
                            (this.currentProgressHash = p(this.props.quests));
                    }
                    render() {
                        const u = this.props,
                            e = u.quests,
                            t = u.indicateCompleteQuests,
                            n = u.cardType,
                            a = u.innerRef,
                            r = u.onClick,
                            i = u.onMouseEnter,
                            s = this.state.animateDisappear,
                            E = C(n),
                            c = n === A.Micro || n === A.Mini;
                        return o().createElement(
                            'div',
                            { className: l()(B, { [b]: c }), ref: a },
                            e.map((u, n) =>
                                o().createElement(E, {
                                    position: n + 1,
                                    maxPosition: e.length,
                                    key: u.value.id,
                                    quest: u.value,
                                    onAnimationEvent: this.handleAnimationEvent,
                                    animateComplete: !this.indicateCompleteFinishedQuests[n] && t[n].value,
                                    animateDisappear: s,
                                    onClick: r,
                                    onMouseEnter: i,
                                    disableProgressbarDelta: this.currentProgressHash === p(this.props.quests),
                                }),
                            ),
                        );
                    }
                }
                const g = h,
                    v = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let w, f;
                !(function (u) {
                    (u.Small = 'small'), (u.Medium = 'medium'), (u.Big = 'big'), (u.Default = 'big');
                })(w || (w = {})),
                    (function (u) {
                        (u[(u.Simple = 0)] = 'Simple'), (u[(u.Growing = 1)] = 'Growing');
                    })(f || (f = {}));
                const M = ({ size: u = w.Default }) =>
                        o().createElement('div', { className: l()(v.background, v[`background__${u}`]) }),
                    S = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    y = ({ size: u }) => {
                        const e = l()(S.base, S[`base__${u}`]);
                        return o().createElement('div', { className: e });
                    },
                    O = {
                        base: 'ProgressLineImpose_base_80',
                        base__disabled: 'ProgressLineImpose_base__disabled_cc',
                        base__finished: 'ProgressLineImpose_base__finished_d4',
                        base__withoutBounce: 'ProgressLineImpose_base__withoutBounce_56',
                        pattern: 'ProgressLineImpose_pattern_1c',
                        base__small: 'ProgressLineImpose_base__small_55',
                        gradient: 'ProgressLineImpose_gradient_35',
                        glow: 'ProgressLineImpose_glow_a5',
                        glow__left: 'ProgressLineImpose_glow__left_d8',
                    },
                    T = (0, r.memo)(
                        ({ size: u, lineRef: e, disabled: t, baseStyles: n, isComplete: a, withoutBounce: r }) => {
                            const i = l()(
                                    O.base,
                                    O[`base__${u}`],
                                    t && O.base__disabled,
                                    a && O.base__finished,
                                    r && O.base__withoutBounce,
                                ),
                                s = !t && !a;
                            return o().createElement(
                                'div',
                                { className: i, style: n, ref: e },
                                o().createElement('div', { className: O.pattern }),
                                o().createElement('div', { className: O.gradient }),
                                s && o().createElement(y, { size: u }),
                            );
                        },
                    ),
                    k = ({ size: u, value: e, lineRef: t, disabled: n, onComplete: a }) => {
                        const i = (0, r.useMemo)(() => ({ width: `${e}%`, transitionProperty: 'none' }), [e]),
                            s = 100 === e;
                        return (
                            (0, r.useEffect)(() => {
                                s && a && a();
                            }, [s, a]),
                            o().createElement(T, { size: u, disabled: n, baseStyles: i, isComplete: s, lineRef: t })
                        );
                    },
                    P = (u, e) => {
                        let t;
                        const n = setTimeout(() => {
                            t = u();
                        }, e);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(n);
                        };
                    };
                let I, N;
                !(function (u) {
                    (u.Idle = 'Idle'), (u.Grow = 'Grow'), (u.Shrink = 'Shrink'), (u.End = 'End');
                })(I || (I = {})),
                    (function (u) {
                        (u.Idle = 'Idle'), (u.In = 'In'), (u.End = 'End');
                    })(N || (N = {}));
                const L = 'ProgressBarDeltaSimple_base_6c',
                    x = 'ProgressBarDeltaSimple_delta_99',
                    Q = (0, r.memo)(
                        ({
                            transitionDuration: u,
                            transitionDelay: e,
                            freezed: t,
                            from: n,
                            size: a,
                            to: i,
                            onEndAnimation: s,
                            onChangeAnimationState: E,
                        }) => {
                            const l = i < n,
                                c = (0, r.useState)(N.Idle),
                                A = c[0],
                                _ = c[1],
                                d = A === N.In,
                                F = A === N.End,
                                D = A === N.Idle,
                                m = (0, r.useCallback)(
                                    (u) => {
                                        _(u), E && E(u);
                                    },
                                    [E],
                                );
                            (0, r.useEffect)(() => {
                                if (D && !t) {
                                    return P(() => {
                                        m(N.In);
                                    }, e);
                                }
                            }, [m, t, D, e]),
                                (0, r.useEffect)(() => {
                                    if (d) {
                                        return P(() => {
                                            s && s(), m(N.End);
                                        }, u + e);
                                    }
                                }, [m, d, s, e, u]);
                            const C = (0, r.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${u}ms`,
                                        transitionDelay: `${e}ms`,
                                        [l ? 'left' : 'right']: '0',
                                    }),
                                    [l, e, u],
                                ),
                                p = (0, r.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${u}ms`,
                                        transitionDelay: `${e}ms`,
                                        [l ? 'left' : 'right']: '0',
                                    }),
                                    [l, e, u],
                                ),
                                B = (0, r.useMemo)(
                                    () => ({ width: `${Math.abs(n - i)}%`, left: `${l ? i : n}%` }),
                                    [n, l, i],
                                );
                            return F
                                ? null
                                : o().createElement(
                                      'div',
                                      { className: L, style: B },
                                      o().createElement(
                                          'div',
                                          { style: D ? C : p, className: x },
                                          o().createElement(y, { size: a }),
                                      ),
                                  );
                        },
                    ),
                    U = (0, r.memo)(
                        ({
                            to: u,
                            size: e,
                            from: t,
                            lineRef: n,
                            disabled: a,
                            isComplete: i,
                            animationSettings: s,
                            onChangeAnimationState: E,
                            onEndAnimation: l,
                        }) => {
                            const c = (0, r.useMemo)(
                                () => ({
                                    width: `${u}%`,
                                    transitionDuration: `${s.line.duration}ms`,
                                    transitionDelay: `${s.line.delay}ms`,
                                }),
                                [s.line.delay, s.line.duration, u],
                            );
                            return o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(T, {
                                    size: e,
                                    lineRef: n,
                                    disabled: a,
                                    isComplete: i,
                                    baseStyles: c,
                                }),
                                t >= 0 &&
                                    o().createElement(Q, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        freezed: s.freezed,
                                        from: t,
                                        size: e,
                                        to: u,
                                        onChangeAnimationState: E,
                                        onEndAnimation: l,
                                    }),
                            );
                        },
                    ),
                    z = 'ProgressBarDeltaGrow_base_7e',
                    V = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    $ = 'ProgressBarDeltaGrow_glow_68',
                    q = (u) => (u ? { left: 0 } : { right: 0 }),
                    j = (u, e) => (u ? { right: 100 - e + '%' } : { left: `${e}%` }),
                    H = (u) => ({ transitionDuration: `${u}ms` }),
                    W = (0, r.memo)(
                        ({
                            transitionDuration: u,
                            transitionDelay: e,
                            freezed: t,
                            from: n,
                            size: a,
                            to: i,
                            onEndAnimation: s,
                            onChangeAnimationState: E,
                            className: c,
                        }) => {
                            const A = i < n,
                                _ = (0, r.useState)(I.Idle),
                                d = _[0],
                                F = _[1],
                                D = d === I.End,
                                m = d === I.Idle,
                                C = d === I.Grow,
                                p = d === I.Shrink,
                                B = (0, r.useCallback)(
                                    (u) => {
                                        F(u), E && E(u);
                                    },
                                    [E],
                                ),
                                b = (0, r.useCallback)(
                                    (u, e) =>
                                        P(() => {
                                            B(u);
                                        }, e),
                                    [B],
                                );
                            (0, r.useEffect)(() => {
                                if (!t)
                                    return m
                                        ? b(I.Grow, e)
                                        : C
                                          ? b(I.Shrink, u)
                                          : p
                                            ? b(I.End, u)
                                            : void (D && s && s());
                            }, [b, t, D, C, m, p, s, e, u]);
                            const h = (0, r.useMemo)(() => Object.assign({ width: '100%' }, H(u), q(A)), [A, u]),
                                g = (0, r.useMemo)(() => Object.assign({ width: '0%' }, H(u), q(A)), [A, u]),
                                v = (0, r.useMemo)(() => Object.assign({ width: '0%' }, j(A, n), H(u)), [n, A, u]),
                                w = (0, r.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - n)}%` }, j(A, n), H(u)),
                                    [n, A, i, u],
                                );
                            if (D) return null;
                            const f = l()(z, c, A && 0 === i && V);
                            return o().createElement(
                                'div',
                                { style: m ? v : w, className: f },
                                o().createElement(
                                    'div',
                                    { style: p ? g : h, className: $ },
                                    o().createElement(y, { size: a }),
                                ),
                            );
                        },
                    ),
                    G = (0, r.memo)(
                        ({
                            to: u,
                            size: e,
                            from: t,
                            lineRef: n,
                            disabled: a,
                            isComplete: i,
                            animationSettings: s,
                            onEndAnimation: E,
                            onChangeAnimationState: l,
                        }) => {
                            const c = u < t,
                                A = (0, r.useState)(!1),
                                _ = A[0],
                                d = A[1],
                                F = (0, r.useCallback)(
                                    (u) => {
                                        u === I.Shrink && d(!0), l && l(u);
                                    },
                                    [l],
                                ),
                                D = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                m = (0, r.useMemo)(
                                    () => ({ width: `${u}%`, transitionDuration: `${s.line.duration}ms` }),
                                    [s.line.duration, u],
                                );
                            return o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(T, {
                                    size: e,
                                    lineRef: n,
                                    disabled: a,
                                    isComplete: i,
                                    withoutBounce: c && 0 === u,
                                    baseStyles: _ ? m : D,
                                }),
                                t >= 0 &&
                                    o().createElement(W, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        onChangeAnimationState: F,
                                        freezed: s.freezed,
                                        onEndAnimation: E,
                                        from: t,
                                        size: e,
                                        to: u,
                                        className: s.delta.className,
                                    }),
                            );
                        },
                    ),
                    K = ['onComplete', 'onEndAnimation'];
                function Y() {
                    return (
                        (Y =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Y.apply(this, arguments)
                    );
                }
                const Z = (0, r.memo)((u) => {
                        let e = u.onComplete,
                            t = u.onEndAnimation,
                            n = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, K);
                        const a = (0, r.useState)(!1),
                            i = a[0],
                            s = a[1],
                            E = (0, r.useCallback)(() => {
                                const u = 100 === n.to;
                                u !== i && s(u), u && e && e(), t && t();
                            }, [i, e, t, n.to]);
                        switch (n.animationSettings.type) {
                            case f.Simple:
                                return o().createElement(U, Y({}, n, { onEndAnimation: E, isComplete: i }));
                            case f.Growing:
                                return o().createElement(G, Y({}, n, { onEndAnimation: E, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    X = ['onEndAnimation'];
                function J() {
                    return (
                        (J =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        J.apply(this, arguments)
                    );
                }
                const uu = (0, r.memo)((u) => {
                    let e = u.onEndAnimation,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(u);
                            for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                            return a;
                        })(u, X);
                    const n = (0, r.useRef)({}),
                        a = (0, r.useCallback)(() => {
                            (n.current.from = void 0), e && e();
                        }, [e]),
                        i = 'number' == typeof n.current.from ? n.current.from : t.from;
                    return (
                        (n.current.from = i),
                        o().createElement(Z, J({}, t, { onEndAnimation: a, key: `${i}-${t.to}`, from: i }))
                    );
                });
                function eu() {
                    return (
                        (eu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        eu.apply(this, arguments)
                    );
                }
                const tu = (0, r.memo)(
                        ({
                            size: u,
                            value: e,
                            lineRef: t,
                            disabled: n,
                            deltaFrom: a,
                            animationSettings: r,
                            onEndAnimation: i,
                            onChangeAnimationState: s,
                            onComplete: E,
                        }) => {
                            if (a === e)
                                return o().createElement(k, {
                                    key: `${a}-${e}`,
                                    size: u,
                                    value: e,
                                    lineRef: t,
                                    disabled: n,
                                    onComplete: E,
                                });
                            const l = {
                                from: a,
                                to: e,
                                size: u,
                                lineRef: t,
                                disabled: n,
                                animationSettings: r,
                                onComplete: E,
                                onEndAnimation: i,
                                onChangeAnimationState: s,
                            };
                            return r.withStack
                                ? o().createElement(uu, l)
                                : o().createElement(Z, eu({ key: `${a}-${e}` }, l));
                        },
                    ),
                    nu = (u) => ({
                        '--progress-base': `url(${u.bgImageBase})`,
                        '--progress-line-base': u.line.bgColorBase,
                        '--progress-line-disabled': u.line.bgColorDisabled,
                        '--progress-line-finished': u.line.bgColorFinished,
                        '--progress-pattern-base': `url(${u.pattern.bgImageBase})`,
                        '--progress-pattern-disabled': `url(${u.pattern.bgImageDisabled})`,
                        '--progress-pattern-finished': `url(${u.pattern.bgImageFinished})`,
                        '--progress-glow': `url('${u.glow}')`,
                        '--progress-glow-small': `url('${u.glowSmall}')`,
                        '--progress-delta-color': u.delta.color,
                        '--progress-delta-shadow': u.delta.shadow,
                    }),
                    au = (u, e, t) => (t < u ? u : t > e ? e : t),
                    ru = (u, e, t) => {
                        if ('number' == typeof t) {
                            return (au(0, e, t) / e) * 100;
                        }
                        return u;
                    },
                    ou = {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_grey',
                        line: { bgColorBase: '#f50', bgColorDisabled: 'transparent', bgColorFinished: '#59a011' },
                        pattern: {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_orange',
                            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
                            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.pattern_green',
                        },
                        glow: 'R.images.gui.maps.icons.components.progress_bar.glow',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small',
                        delta: {
                            color: '#ffc',
                            shadow: '0 0 4px 1px #ffaa0066, 0 0 9px 1px #ffaa0066, 0 0 12px 2px #ff550066, 0 0 12px 4px #ff000066',
                        },
                    },
                    iu = {
                        freezed: !1,
                        withStack: !1,
                        type: f.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    su = (0, r.memo)(
                        ({
                            maxValue: u = 100,
                            theme: e = ou,
                            size: t = w.Default,
                            animationSettings: n = iu,
                            disabled: a = !1,
                            withoutBackground: i = !1,
                            value: s,
                            deltaFrom: E,
                            lineRef: c,
                            onChangeAnimationState: A,
                            onEndAnimation: _,
                            onComplete: d,
                        }) => {
                            const F = ((u, e, t) =>
                                (0, r.useMemo)(() => {
                                    const n = (au(0, e, u) / e) * 100;
                                    return { value: n, deltaFrom: ru(n, e, t) };
                                }, [t, e, u]))(s, u, E);
                            return o().createElement(
                                'div',
                                { className: l()(v.base, v[`base__${t}`]), style: nu(e) },
                                !i && o().createElement(M, { size: t }),
                                o().createElement(tu, {
                                    size: t,
                                    lineRef: c,
                                    disabled: a,
                                    value: F.value,
                                    deltaFrom: F.deltaFrom,
                                    animationSettings: n,
                                    onEndAnimation: _,
                                    onChangeAnimationState: A,
                                    onComplete: d,
                                }),
                            );
                        },
                    ),
                    Eu = 'Countdown_base_6c',
                    lu = 'Countdown_icon_cb',
                    cu = 'Countdown_time_96';
                var Au = t(2993);
                const _u = ({ countdown: u, noIcon: e }) =>
                    o().createElement(
                        'div',
                        { className: Eu },
                        !e && o().createElement('div', { className: lu }),
                        o().createElement(
                            'div',
                            { className: cu },
                            o().createElement(Au.Z, {
                                startValue: u,
                                hourFormat: R.strings.quests.general.countdown.timer_hrs_only(),
                                roundUpHours: !0,
                            }),
                        ),
                    );
                var du = t(7902),
                    Fu = t(4179);
                const Du = [
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
                function mu(u) {
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
                const Cu = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Fu.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    pu = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            n = u.args,
                            a = u.onMouseEnter,
                            o = u.onMouseLeave,
                            i = u.onMouseDown,
                            s = u.onClick,
                            E = u.ignoreShowDelay,
                            l = void 0 !== E && E,
                            c = u.ignoreMouseClick,
                            A = void 0 !== c && c,
                            _ = u.decoratorId,
                            d = void 0 === _ ? 0 : _,
                            F = u.isEnabled,
                            D = void 0 === F || F,
                            m = u.targetId,
                            C = void 0 === m ? 0 : m,
                            p = u.onShow,
                            B = u.onHide,
                            b = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, Du);
                        const h = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            g = (0, r.useMemo)(() => C || (0, du.F)().resId, [C]),
                            v = (0, r.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (Cu(t, d, { isMouseEvent: !0, on: !0, arguments: mu(n) }, g),
                                    p && p(),
                                    (h.current.isVisible = !0));
                            }, [t, d, n, g, p]),
                            w = (0, r.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const u = h.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (h.current.timeoutId = 0)),
                                        Cu(t, d, { on: !1 }, g),
                                        h.current.isVisible && B && B(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, d, g, B]),
                            f = (0, r.useCallback)((u) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(h.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const u = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', f, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', f, { capture: !0 }),
                                        u && window.clearTimeout(u);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === D && w();
                            }, [D, w]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        window.removeEventListener('mouseleave', w), w();
                                    }
                                ),
                                [w],
                            );
                        return D
                            ? (0, r.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((M = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((h.current.timeoutId = window.setTimeout(v, l ? 100 : 400)),
                                                      a && a(u),
                                                      M && M(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              w(), null == o || o(e), null == u || u(e);
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              !1 === A && w(), null == s || s(e), null == u || u(e);
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              !1 === A && w(), null == i || i(e), null == u || u(e);
                                          })(e.props.onMouseDown),
                                      },
                                      b,
                                  ),
                              )
                            : e;
                        var M;
                    };
                class Bu extends o().Component {
                    constructor(u) {
                        super(u),
                            (this.APPEAR_DURATION = 0),
                            (this.COMPLETE_DURATION = 0),
                            (this.DISAPPEAR_DURATION = 0),
                            (this.CARD_POSITION_DELAY = 0),
                            (this.state = { animateAppear: !1, animateComplete: !1, animateDisappear: !1 }),
                            (this.tooltipArgs = {}),
                            (this.animationTimeout = null),
                            (this.positionTimeout = null),
                            (this.componentDidMount = () => {
                                this.nextAnimation(c.Init);
                            }),
                            (this.componentDidUpdate = (u) => {
                                u !== this.props &&
                                    (this.props.animateComplete && !this.state.animateComplete
                                        ? this.nextAnimation(c.ForceComplete)
                                        : this.props.animateDisappear &&
                                          !this.state.animateDisappear &&
                                          this.nextAnimation(c.ForceDisappear),
                                    u.animateDisappear &&
                                        !this.props.animateDisappear &&
                                        this.setState(
                                            { animateAppear: !1, animateComplete: !1, animateDisappear: !1 },
                                            () => {
                                                this.nextAnimation(c.Init);
                                            },
                                        ));
                            }),
                            (this.componentWillUnmount = () => {
                                this.clearTimeouts();
                            }),
                            (this.scheduleAnimationEvent = (u, e) => {
                                this.animationTimeout = window.setTimeout(() => {
                                    this.nextAnimation(u);
                                }, e);
                            }),
                            (this.clearTimeouts = () => {
                                null !== this.animationTimeout &&
                                    (window.clearTimeout(this.animationTimeout), (this.animationTimeout = null)),
                                    null !== this.positionTimeout &&
                                        (window.clearTimeout(this.positionTimeout), (this.positionTimeout = null));
                            }),
                            (this.nextAnimation = (u) => {
                                const e = this.props,
                                    t = e.onAnimationEvent,
                                    n = e.position;
                                this.clearTimeouts(), t && t(u, n);
                                const a = n * this.CARD_POSITION_DELAY;
                                switch (u) {
                                    case c.Init:
                                        (this.positionTimeout = window.setTimeout(() => {
                                            this.setState({ animateAppear: !0 });
                                        }, a)),
                                            this.scheduleAnimationEvent(c.Appear, a + this.APPEAR_DURATION);
                                        break;
                                    case c.Appear:
                                    case c.ForceComplete:
                                        this.props.animateComplete &&
                                            (this.setState({ animateComplete: !0, animateAppear: !0 }),
                                            this.scheduleAnimationEvent(c.Complete, a + this.COMPLETE_DURATION));
                                        break;
                                    case c.Complete:
                                    case c.ForceDisappear:
                                        if (this.props.animateDisappear) {
                                            this.setState({ animateDisappear: !0 }),
                                                this.scheduleAnimationEvent(c.Disappear, this.DISAPPEAR_DURATION);
                                            break;
                                        }
                                }
                            }),
                            (this.tooltipArgs = { missionId: u.quest.id });
                    }
                    renderCard() {
                        return o().createElement('div', null);
                    }
                    render() {
                        return o().createElement(
                            pu,
                            {
                                contentId: R.views.lobby.missions.DailyQuestsTooltip('resId'),
                                args: this.tooltipArgs,
                                isEnabled: !0,
                            },
                            this.renderCard(),
                        );
                    }
                }
                Bu.defaultProps = { position: 1, maxPosition: 1 };
                const bu = Bu,
                    hu = 'QuestCard_base__appearStart_dd',
                    gu = 'QuestCard_base__appearEnd_d5',
                    vu = 'QuestCard_base__disappearEnd_34',
                    wu = 'QuestCard_border_bg__appearStart_07',
                    fu = 'QuestCard_border_bg__appearEnd_6e',
                    Mu = 'QuestCard_complete__blink_78',
                    Su = 'QuestCard_complete_bg__completeStart_68',
                    yu = 'QuestCard_complete_bg__completeEnd_dd',
                    Ou = 'QuestCard_icon__completeStart_af',
                    Tu = 'QuestCard_icon__completeEnd_e0',
                    ku = 'QuestCard_base_01',
                    Pu = 'QuestCard_hoverBg_62',
                    Iu = 'QuestCard_base__complete_b5',
                    Ru = 'QuestCard_base__bonus_f0',
                    Nu = 'QuestCard_border_00',
                    Lu = 'QuestCard_border_bg_cb',
                    xu = 'QuestCard_complete_97',
                    Qu = 'QuestCard_complete_bg_89',
                    Uu = 'QuestCard_content_3e',
                    zu = 'QuestCard_icon_7e',
                    Vu = 'QuestCard_icon_img_d7',
                    $u = 'QuestCard_icon_img__check_2e',
                    qu = 'QuestCard_description_6a',
                    ju = 'QuestCard_description_pad_right_b6',
                    Hu = 'QuestCard_progressCounter_3f',
                    Wu = 'QuestCard_progressCounter_current_af',
                    Gu = 'QuestCard_progressCounter_separator_6b',
                    Ku = 'QuestCard_progressCounter_total_50',
                    Yu = 'QuestCard_progressCounterComplete_86',
                    Zu = 'QuestCard_progressBar_26',
                    Xu = 'QuestCard_countdown_1a',
                    Ju = Object.assign({}, iu, {
                        line: Object.assign({}, iu.line, { delay: 1e3 }),
                        delta: Object.assign({}, iu.delta, { delay: 1e3 }),
                    });
                const ue = class extends bu {
                        constructor(...u) {
                            super(...u),
                                (this.APPEAR_DURATION = 800),
                                (this.COMPLETE_DURATION = 2500),
                                (this.DISAPPEAR_DURATION = 400),
                                (this.CARD_POSITION_DELAY = 100);
                        }
                        renderCard() {
                            const u = this.props,
                                e = u.position,
                                t = u.maxPosition,
                                n = u.quest,
                                a = u.animateComplete,
                                r = u.bonus,
                                i = u.countdown,
                                s = u.onClick,
                                E = u.onMouseEnter,
                                c = u.innerRef,
                                A = u.disableProgressbarDelta,
                                _ = this.state,
                                d = _.animateAppear,
                                F = _.animateComplete,
                                m = _.animateDisappear,
                                C = n.description,
                                p = n.currentProgress,
                                B = n.earned,
                                b = n.icon,
                                h = n.completed,
                                g = n.totalProgress,
                                v = `${systemLocale.toUpperCase(C[0])}${C.slice(1)}`,
                                f = g > 0,
                                M = { transform: m ? `translateY(${60 * (t - e + 1) * 1.5}rem)` : void 0 };
                            return o().createElement(
                                'div',
                                {
                                    className: l()(ku, hu, { [Iu]: h, [Ru]: r }, { [gu]: d, [vu]: m }),
                                    style: M,
                                    onClick: s,
                                    onMouseEnter: E,
                                    ref: c,
                                },
                                o().createElement(
                                    'div',
                                    { className: Nu },
                                    o().createElement('div', { className: l()(Lu, wu, { [fu]: d }) }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: l()(xu, { [Mu]: F }) },
                                    o().createElement('div', { className: l()(Qu, Su, { [yu]: F }) }),
                                ),
                                o().createElement('div', { className: Pu }),
                                o().createElement(
                                    'div',
                                    { className: zu },
                                    o().createElement('div', {
                                        className: l()(Vu, { [$u]: h }, { [Ou]: a && h, [Tu]: F }),
                                        style: h ? void 0 : D(b),
                                    }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: Uu },
                                    o().createElement(
                                        'div',
                                        { className: l()(qu, { [ju]: i }) },
                                        ((y = g ? 35 : 70),
                                        (S = v).length > y ? S.slice(0, y).split(' ').slice(0, -1).join(' ') + '…' : S),
                                    ),
                                    f &&
                                        o().createElement(
                                            o().Fragment,
                                            null,
                                            o().createElement(
                                                'div',
                                                { className: l()(Hu, { [Yu]: h }) },
                                                o().createElement('span', { className: Wu }, p),
                                                o().createElement('span', { className: Gu }, '/'),
                                                o().createElement('span', { className: Ku }, g),
                                            ),
                                            o().createElement(
                                                'div',
                                                { className: Zu },
                                                o().createElement(su, {
                                                    animationSettings: Ju,
                                                    size: w.Small,
                                                    value: p,
                                                    deltaFrom: A ? void 0 : p - B,
                                                    maxValue: g,
                                                }),
                                            ),
                                        ),
                                ),
                                !h &&
                                    i &&
                                    o().createElement(
                                        'div',
                                        { className: Xu },
                                        o().createElement(_u, { countdown: i }),
                                    ),
                            );
                            var S, y;
                        }
                    },
                    ee = {
                        base__appearStart: 'IconQuestCardMini_base__appearStart_b2',
                        base__appearEnd: 'IconQuestCardMini_base__appearEnd_75',
                        base__disappearStart: 'IconQuestCardMini_base__disappearStart_cb',
                        border_bg__appearStart: 'IconQuestCardMini_border_bg__appearStart_34',
                        border_bg__appearEnd: 'IconQuestCardMini_border_bg__appearEnd_81',
                        complete__blink: 'IconQuestCardMini_complete__blink_31',
                        'bg-blink': 'IconQuestCardMini_bg-blink_e4',
                        complete_bg__completeStart: 'IconQuestCardMini_complete_bg__completeStart_e2',
                        complete_bg__completeEnd: 'IconQuestCardMini_complete_bg__completeEnd_d2',
                        check__completeStart: 'IconQuestCardMini_check__completeStart_4e',
                        check__completeEnd: 'IconQuestCardMini_check__completeEnd_0d',
                        base: 'IconQuestCardMini_base_8a',
                        hoverBg: 'IconQuestCardMini_hoverBg_18',
                        base__complete: 'IconQuestCardMini_base__complete_c2',
                        base__bonus: 'IconQuestCardMini_base__bonus_df',
                        border: 'IconQuestCardMini_border_d2',
                        border_bg: 'IconQuestCardMini_border_bg_47',
                        icon: 'IconQuestCardMini_icon_f7',
                        check: 'IconQuestCardMini_check_66',
                        complete: 'IconQuestCardMini_complete_4a',
                        complete_bg: 'IconQuestCardMini_complete_bg_30',
                    },
                    te = {
                        base__appearStart: 'IconQuestCardMicro_base__appearStart_4e',
                        base__appearEnd: 'IconQuestCardMicro_base__appearEnd_1f',
                        base__disappearStart: 'IconQuestCardMicro_base__disappearStart_b0',
                        border_bg__appearStart: 'IconQuestCardMicro_border_bg__appearStart_f9',
                        border_bg__appearEnd: 'IconQuestCardMicro_border_bg__appearEnd_2a',
                        complete__blink: 'IconQuestCardMicro_complete__blink_25',
                        'bg-blink': 'IconQuestCardMicro_bg-blink_bc',
                        complete_bg__completeStart: 'IconQuestCardMicro_complete_bg__completeStart_9a',
                        complete_bg__completeEnd: 'IconQuestCardMicro_complete_bg__completeEnd_3c',
                        check__completeStart: 'IconQuestCardMicro_check__completeStart_d4',
                        check__completeEnd: 'IconQuestCardMicro_check__completeEnd_df',
                        base: 'IconQuestCardMicro_base_a6',
                        hoverBg: 'IconQuestCardMicro_hoverBg_60',
                        base__complete: 'IconQuestCardMicro_base__complete_b2',
                        base__bonus: 'IconQuestCardMicro_base__bonus_ea',
                        border: 'IconQuestCardMicro_border_b6',
                        border_bg: 'IconQuestCardMicro_border_bg_03',
                        icon: 'IconQuestCardMicro_icon_2a',
                        check: 'IconQuestCardMicro_check_3a',
                        complete: 'IconQuestCardMicro_complete_8d',
                        complete_bg: 'IconQuestCardMicro_complete_bg_94',
                    };
                function ne() {
                    return (
                        (ne =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        ne.apply(this, arguments)
                    );
                }
                class ae extends bu {
                    constructor(...u) {
                        super(...u),
                            (this.APPEAR_DURATION = 300),
                            (this.COMPLETE_DURATION = 2500),
                            (this.DISAPPEAR_DURATION = 300),
                            (this.CARD_POSITION_DELAY = 100);
                    }
                    renderCard() {
                        const u = this.props,
                            e = u.position,
                            t = u.quest,
                            n = u.animateComplete,
                            a = u.bonus,
                            r = u.countdown,
                            i = u.onClick,
                            s = u.onMouseEnter,
                            E = u.micro,
                            c = u.innerRef,
                            A = this.state,
                            _ = A.animateAppear,
                            d = A.animateComplete,
                            F = A.animateDisappear,
                            m = t.icon,
                            C = t.completed,
                            p = { transform: F ? `translateX(${-(60 * e)}rem)` : void 0 },
                            B = E ? te : ee;
                        return o().createElement(
                            'div',
                            {
                                className: l()(
                                    B.base,
                                    B.base__appearStart,
                                    { [B.base__complete]: C, [B.base__bonus]: a },
                                    { [B.base__appearEnd]: _, [B.base__disappearStart]: F },
                                ),
                                style: p,
                                onClick: i,
                                onMouseEnter: s,
                                ref: c,
                            },
                            o().createElement('div', { className: B.hoverBg }),
                            o().createElement(
                                'div',
                                { className: B.border },
                                o().createElement('div', {
                                    className: l()(B.border_bg, B.border_bg__appearStart, {
                                        [B.border_bg__appearEnd]: _,
                                    }),
                                }),
                            ),
                            o().createElement(
                                'div',
                                { className: l()(B.complete, { [B.complete__blink]: d }) },
                                o().createElement('div', {
                                    className: l()(B.complete_bg, B.complete_bg__completeStart, {
                                        [B.complete_bg__completeEnd]: d,
                                    }),
                                }),
                            ),
                            o().createElement('div', { className: B.icon, style: D(m) }),
                            C &&
                                o().createElement('div', {
                                    className: l()(B.check, { [B.check__completeStart]: n, [B.check__completeEnd]: d }),
                                }),
                            !C && r && o().createElement(_u, { countdown: r, noIcon: !0 }),
                        );
                    }
                }
                const re = ae,
                    oe = (u) => o().createElement(ae, ne({}, u, { micro: !0 }));
                function ie(u) {
                    engine.call('PlaySound', u);
                }
                const se = 'Widget_base_f1',
                    Ee = 'Widget_base__alignEnd_7b',
                    le = () => {
                        ie(R.sounds.highlight());
                    },
                    ce = ({
                        quests: u,
                        visible: e,
                        onQuestClick: t,
                        indicateCompleteQuests: n,
                        countdown: i,
                        onDisappear: s,
                    }) => {
                        const E = u.slice(0, 3),
                            d = n.slice(0, 3),
                            D = u[3] && u[3].value,
                            p = n[3] && n[3].value,
                            B = m(E),
                            b = ((u) => u.reduce((u, e) => (e.value ? u + 1 : u), 0))(d),
                            h = (0, r.useState)(
                                (({
                                    allStandardQuestsComplete: u,
                                    standardQuestsToBeIndicatedComplete: e,
                                    bonusQuest: t,
                                    bonusQuestIndicateComplete: n,
                                    visible: a,
                                }) => {
                                    if (a) {
                                        if (!u || e > 0) return F.List;
                                        if ((t && !t.completed) || n) return F.Bonus;
                                    }
                                    return F.None;
                                })({
                                    allStandardQuestsComplete: B,
                                    standardQuestsToBeIndicatedComplete: b,
                                    bonusQuest: D,
                                    bonusQuestIndicateComplete: p,
                                    visible: e,
                                }),
                            ),
                            v = h[0],
                            w = h[1],
                            f = (0, r.useRef)(null),
                            M = (0, r.useCallback)(() => {
                                setTimeout(() => {
                                    if (f.current) {
                                        const u = f.current.getBoundingClientRect();
                                        viewEnv.setInputArea(
                                            viewEnv.pxToRem(u.x),
                                            viewEnv.pxToRem(u.y),
                                            viewEnv.pxToRem(u.width),
                                            viewEnv.pxToRem(u.height),
                                        );
                                    }
                                }, 1e3);
                            }, [f]),
                            S = (0, r.useCallback)(() => {
                                e ? (w(F.Bonus), M()) : s();
                            }, [e, w, M, s]),
                            y = (0, r.useCallback)(
                                (u) => {
                                    u === c.Appear && M(), u === c.Disappear && e && s();
                                },
                                [M, s, e],
                            ),
                            O = (0, r.useCallback)(() => {
                                ie(R.sounds.play()), t();
                            }, [t]);
                        (0, r.useEffect)(() => {
                            e &&
                                (b > 0
                                    ? ie(B ? R.sounds.dq_widget_bonus_reveal() : R.sounds.dq_widget_quest_complete())
                                    : D && D.completed
                                      ? ie(R.sounds.dq_widget_bonus_complete())
                                      : ie(R.sounds.dq_widget_slide_in()));
                        }, [e, b, B, D]),
                            (0, r.useEffect)(() => {
                                e && !B && w(F.List);
                            }, [e, B]);
                        const T = ((u) =>
                                u <= _.Micro ? A.Micro : u <= _.Mini ? A.Mini : u <= _.Normal ? A.Normal : A.Micro)(
                                (0, a.eI)().width,
                            ),
                            k = C(T);
                        return o().createElement(
                            'div',
                            { className: l()(se, { [Ee]: v === F.Bonus && T === A.Normal }) },
                            v === F.List &&
                                o().createElement(g, {
                                    innerRef: f,
                                    quests: E,
                                    indicateCompleteQuests: d,
                                    cardType: T,
                                    animateDisappear: !e,
                                    onClick: O,
                                    onMouseEnter: le,
                                    onAppear: M,
                                    onDisappear: S,
                                }),
                            v === F.Bonus &&
                                D &&
                                o().createElement(k, {
                                    bonus: !0,
                                    innerRef: f,
                                    quest: D,
                                    countdown: i,
                                    animateComplete: D.completed,
                                    animateDisappear: D.completed || !e,
                                    onClick: O,
                                    onMouseEnter: le,
                                    onAnimationEvent: y,
                                }),
                        );
                    };
                n.O.view.extraSize.set(0, 0);
                const Ae = () => {
                    const u = (0, a.tT)();
                    return o().createElement(ce, u);
                };
                engine.whenReady.then(() => {
                    s().render(o().createElement(Ae, null), document.getElementById('root'));
                });
            },
            2993: (u, e, t) => {
                t.d(e, { Z: () => E });
                var n = t(8374),
                    a = t(4649),
                    r = t(6179),
                    o = t.n(r),
                    i = t(5572),
                    s = t(1272);
                const E = ({
                    startValue: u,
                    hourFormat: e = R.strings.quests.general.countdown.timer_hrs(),
                    minuteFormat: t = R.strings.quests.general.countdown.timer_min(),
                    roundUpHours: r = !1,
                    pendingDotCount: E = 5,
                    className: l,
                }) => {
                    const c = u > n.dV + n.yR ? n.yR : 1,
                        A = (0, a.au)(u, c);
                    return o().createElement(
                        'div',
                        { className: l },
                        A > 0
                            ? ((u, e, t, a) => {
                                  const r = u < n.dV ? t : e;
                                  return (0, i.G)(r, u, a);
                              })(A, e, t, r)
                            : o().createElement(s.Z, { count: E, delay: 500 }),
                    );
                };
            },
            1272: (u, e, t) => {
                t.d(e, { Z: () => r });
                var n = t(6179),
                    a = t.n(n);
                const r = ({ className: u, count: e, delay: t }) => {
                    const r = (0, n.useState)(1),
                        o = r[0],
                        i = r[1];
                    return (
                        (0, n.useEffect)(() => {
                            const u = setInterval(() => {
                                i((u) => (u <= e ? u + 1 : 1));
                            }, t);
                            return () => {
                                clearInterval(u);
                            };
                        }),
                        a().createElement('span', { className: u }, '. '.repeat(o))
                    );
                };
            },
            5572: (u, e, t) => {
                t.d(e, { G: () => n });
                const n = (u, e, t) => {
                    const n = Math.floor(e / 3600).toString(),
                        a = Math.floor((e % 3600) / 60).toString(),
                        r = Math.floor(e % 60).toString();
                    return u
                        .replace('%HH', n.padStart(2, '0'))
                        .replace('%H', t && Number(a) >= 30 ? (Number(n) + 1).toString() : n)
                        .replace('%MM', a.padStart(2, '0'))
                        .replace('%M', a.toString())
                        .replace('%SS', r.padStart(2, '0'))
                        .replace('%S', r);
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
                var a = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, t, n] = deferred[s], r = !0, o = 0; o < e.length; o++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[o]))
                            ? e.splice(o--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(s--, 1);
                        var i = t();
                        void 0 !== i && (u = i);
                    }
                }
                return u;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [e, t, n];
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
        (__webpack_require__.j = 880),
        (() => {
            var u = { 880: 0, 224: 0, 536: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        a,
                        [r, o, i] = t,
                        s = 0;
                    if (r.some((e) => 0 !== u[e])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (i) var E = i(__webpack_require__);
                    }
                    for (e && e(t); s < r.length; s++)
                        (a = r[s]), __webpack_require__.o(u, a) && u[a] && u[a][0](), (u[a] = 0);
                    return __webpack_require__.O(E);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [45], () => __webpack_require__(6267));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
