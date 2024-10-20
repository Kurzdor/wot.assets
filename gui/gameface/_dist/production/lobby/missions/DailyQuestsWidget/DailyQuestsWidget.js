(() => {
    'use strict';
    var __webpack_modules__ = {
            7044: (u, e, t) => {
                t.d(e, { dV: () => i, s_: () => a, yR: () => r });
                t(3649), t(9916);
                var n = t(8613);
                const a = 1e3,
                    r = 60,
                    i = 60 * r;
                Date.now(), n.Ew.getRegionalDateTime, n.Ew.getFormattedDateTime;
            },
            9768: (u, e, t) => {
                t.d(e, { O: () => tu });
                var n = {};
                t.r(n),
                    t.d(n, { mouse: () => F, off: () => A, on: () => E, onResize: () => l, onScaleUpdated: () => c });
                var a = {};
                t.r(a),
                    t.d(a, {
                        events: () => n,
                        getMouseGlobalPosition: () => C,
                        getSize: () => D,
                        graphicsQuality: () => p,
                        playSound: () => _,
                        setRTPC: () => m,
                    });
                var r = {};
                t.r(r), t.d(r, { getBgUrl: () => v, getTextureUrl: () => g });
                var i = {};
                function o(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                function s(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.r(i),
                    t.d(i, {
                        addModelObserver: () => L,
                        addPreloadTexture: () => R,
                        children: () => r,
                        displayStatus: () => w,
                        displayStatusIs: () => J,
                        events: () => f,
                        extraSize: () => uu,
                        forceTriggerMouseMove: () => Z,
                        freezeTextureBeforeResize: () => V,
                        getBrowserTexturePath: () => x,
                        getDisplayStatus: () => X,
                        getScale: () => q,
                        getSize: () => z,
                        getViewGlobalPosition: () => $,
                        isEventHandled: () => Y,
                        isFocused: () => H,
                        pxToRem: () => j,
                        remToPx: () => G,
                        resize: () => U,
                        sendEvent: () => I,
                        setAnimateWindow: () => W,
                        setEventHandled: () => K,
                        setInputPaddingsRem: () => N,
                        setSidePaddingsRem: () => Q,
                        whenTutorialReady: () => eu,
                    });
                const l = o('clientResized'),
                    c = o('self.onScaleUpdated'),
                    E = (u, e) => engine.on(u, e),
                    A = (u, e) => engine.off(u, e),
                    d = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') };
                const F = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && s(!1);
                    }
                    function t() {
                        u.enabled && s(!0);
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
                            : s(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${e}`,
                                        i = d[e]((u) => t([u, 'outside']));
                                    function o(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, o),
                                        n(),
                                        () => {
                                            a &&
                                                (i(),
                                                window.removeEventListener(r, o),
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
                    return Object.assign({}, a, {
                        disable() {
                            (u.enabled = !1), n();
                        },
                        enable() {
                            (u.enabled = !0), n();
                        },
                        enableOutside() {
                            u.enabled && s(!0);
                        },
                        disableOutside() {
                            u.enabled && s(!1);
                        },
                    });
                })();
                function _(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function m(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                function D(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function C(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const p = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    B = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    b = Object.keys(B).reduce((u, e) => ((u[e] = () => _(B[e])), u), {}),
                    h = { play: Object.assign({}, b, { sound: _ }), setRTPC: m };
                function g(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function v(u, e, t) {
                    return `url(${g(u, e, t)})`;
                }
                const w = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    f = {
                        onTextureFrozen: o('self.onTextureFrozen'),
                        onTextureReady: o('self.onTextureReady'),
                        onDomBuilt: o('self.onDomBuilt'),
                        onLoaded: o('self.onLoaded'),
                        onDisplayChanged: o('self.onShowingStatusChanged'),
                        onFocusUpdated: o('self.onFocusChanged'),
                        children: {
                            onAdded: o('children.onAdded'),
                            onLoaded: o('children.onLoaded'),
                            onRemoved: o('children.onRemoved'),
                            onAttached: o('children.onAttached'),
                            onTextureReady: o('children.onTextureReady'),
                            onRequestPosition: o('children.requestPosition'),
                        },
                    },
                    y = ['args'];
                const M = 2,
                    S = 16,
                    T = 32,
                    O = 64,
                    k = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                r = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var n in u)
                                        if ({}.hasOwnProperty.call(u, n)) {
                                            if (e.indexOf(n) >= 0) continue;
                                            t[n] = u[n];
                                        }
                                    return t;
                                })(e, y);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, r, {
                                          arguments:
                                              ((n = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    I = {
                        close(u) {
                            k('popover' === u ? M : T);
                        },
                        minimize() {
                            k(O);
                        },
                        move(u) {
                            k(S, { isMouseEvent: !0, on: u });
                        },
                    },
                    P = 15;
                function R(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function N(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, P);
                }
                function x(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function L(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function Q(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, P);
                }
                function z(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function U(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function $(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: G(e.x), y: G(e.y) };
                }
                function V() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function q() {
                    return viewEnv.getScale();
                }
                function j(u) {
                    return viewEnv.pxToRem(u);
                }
                function G(u) {
                    return viewEnv.remToPx(u);
                }
                function W(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function H() {
                    return viewEnv.isFocused();
                }
                function K() {
                    return viewEnv.setEventHandled();
                }
                function Y() {
                    return viewEnv.isEventHandled();
                }
                function Z() {
                    viewEnv.forceTriggerMouseMove();
                }
                function X() {
                    return viewEnv.getShowingStatus();
                }
                const J = Object.keys(w).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === w[e]), u), {}),
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
                            window.isDomBuilt ? u() : f.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    tu = { view: i, client: a, sound: h };
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
                t.d(e, { au: () => D, tT: () => m, eI: () => s });
                var n = t(7044),
                    a = t(6179);
                const r = () => {},
                    i = (u = 0, e, t = 0, i = r) => {
                        const o = (0, a.useState)(u),
                            s = o[0],
                            l = o[1];
                        return (
                            (0, a.useEffect)(() => {
                                if (u > 0) {
                                    l(u);
                                    const a = Date.now(),
                                        r = e || (u > 2 * n.yR ? n.yR : 1),
                                        o = setInterval(() => {
                                            const e = u - Math.floor((Date.now() - a) / n.s_);
                                            null !== t && e <= t ? (l(t), i && i(), clearInterval(o)) : l(e);
                                        }, r * n.s_);
                                    return () => {
                                        clearInterval(o);
                                    };
                                }
                            }, [u, e, t, i]),
                            s
                        );
                    };
                var o = t(9768);
                const s = () => {
                    const u = o.O.view.getSize('rem'),
                        e = (0, a.useState)({ height: u.height, width: u.width }),
                        t = e[0],
                        n = e[1];
                    return (
                        (0, a.useEffect)(() => {
                            const u = (u) => {
                                n(u);
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
                var l = t(7902),
                    c = t(8071),
                    E = t(6536),
                    A = t(9916),
                    d = t(7332);
                const F = A.Sw.instance;
                let _;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(_ || (_ = {}));
                const m = (u = 'model', e = _.Deep) => {
                        const t = (0, a.useState)(0),
                            n = (t[0], t[1]),
                            r = (0, a.useMemo)(() => (0, l.F)(), []),
                            i = r.caller,
                            o = r.resId,
                            s = (0, a.useMemo)(
                                () => (window.__feature && window.__feature !== i ? `subViews.${i}.${u}` : u),
                                [i, u],
                            ),
                            A = (0, a.useState)(() =>
                                ((u) => {
                                    const e = (0, c.M)(u, window);
                                    for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                    return (0, d.os)(e) ? e.value : e;
                                })((0, d.Gd)(s)),
                            ),
                            m = A[0],
                            D = A[1],
                            C = (0, a.useRef)(-1);
                        return (
                            (0, E.Z)(() => {
                                if (
                                    ('boolean' == typeof e &&
                                        ((e = e ? _.Deep : _.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    e !== _.None)
                                ) {
                                    const t = (u) => {
                                            (0, d.kJ)(u) && e === _.Deep
                                                ? (u === m && n((u) => u + 1), D(u))
                                                : D(Object.assign([], u));
                                        },
                                        a = (0, d.U0)(u);
                                    C.current = F.addCallback(a, t, o, e === _.Deep);
                                }
                            }),
                            (0, a.useEffect)(() => {
                                if (e !== _.None)
                                    return () => {
                                        F.removeCallback(C.current, o);
                                    };
                            }, [o, e]),
                            m
                        );
                    },
                    D = (A.Sw.instance, i);
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
                    })(a || (a = {}));
            },
            3649: (u, e, t) => {
                t(1281);
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
                var n = t(9768);
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
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9916);
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
            9916: (u, e, t) => {
                t.d(e, { Sw: () => r.Z, B0: () => o, ry: () => D });
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
                var i = t(8613);
                let o;
                !(function (u) {
                    (u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                        (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                        (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                        (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (u[(u.MOVE = 16)] = 'MOVE'),
                        (u[(u.CLOSE = 32)] = 'CLOSE'),
                        (u[(u.MINIMIZE = 64)] = 'MINIMIZE');
                })(o || (o = {}));
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(5521),
                    d = t(9768);
                const F = ['args'];
                function _(u, e, t, n, a, r, i) {
                    try {
                        var o = u[r](i),
                            s = o.value;
                    } catch (u) {
                        return void t(u);
                    }
                    o.done ? e(s) : Promise.resolve(s).then(n, a);
                }
                const m = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    D = (function () {
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
                                        function i(u) {
                                            _(r, n, a, i, o, 'next', u);
                                        }
                                        function o(u) {
                                            _(r, n, a, i, o, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    C = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                r = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var n in u)
                                        if ({}.hasOwnProperty.call(u, n)) {
                                            if (e.indexOf(n) >= 0) continue;
                                            t[n] = u[n];
                                        }
                                    return t;
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
                    p = () => C(o.CLOSE),
                    B = (u, e) => {
                        u.keyCode === A.n.ESCAPE && e();
                    };
                var b = t(7572);
                const h = a.instance,
                    g = {
                        DataTracker: r.Z,
                        ViewModel: b.Z,
                        ViewEventType: o,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: m,
                        sendMoveEvent: (u) => C(o.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => C(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            C(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, a = R.invalid('resId'), r) => {
                            const i = d.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                E = s.width,
                                A = s.height,
                                F = {
                                    x: d.O.view.pxToRem(l) + i.x,
                                    y: d.O.view.pxToRem(c) + i.y,
                                    width: d.O.view.pxToRem(E),
                                    height: d.O.view.pxToRem(A),
                                };
                            C(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: e,
                                bbox: m(F),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => B(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            B(u, p);
                        },
                        handleViewEvent: C,
                        onBindingsReady: D,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
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
                        ClickOutsideManager: h,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = g;
            },
            8613: (u, e, t) => {
                t.d(e, { Ew: () => r, Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    a = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    },
                    r = {
                        getRegionalDateTime: (u, e, t = !0) => regionalDateTime.getRegionalDateTime(u, e, t),
                        getFormattedDateTime: (u, e, t = !0) => regionalDateTime.getFormattedDateTime(u, e, t),
                    };
            },
            7332: (u, e, t) => {
                t.d(e, { Gd: () => s, U0: () => l, kJ: () => i, os: () => r });
                var n = t(7902),
                    a = t(8071);
                const r = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    i = (u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name,
                    o = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    s = (u) =>
                        ((u, e) =>
                            u.split('.').reduce((u, t) => {
                                const n = (0, a.M)(`${u}.${t}`, window);
                                return r(n) ? e(u, t, n) : `${u}.${t}`;
                            }))(u, (u, e) => `${u}.${e}.value`),
                    l = (u) => {
                        const e = ((u) => {
                                const e = (0, n.F)(),
                                    t = e.caller,
                                    a = e.resId,
                                    r = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: r, modelPath: o(r, u || ''), resId: a };
                            })(),
                            t = e.modelPrefix,
                            i = u.split('.');
                        if (i.length > 0) {
                            const u = [i[0]];
                            return (
                                i.reduce((e, n) => {
                                    const i = (0, a.M)(o(t, `${e}.${n}`), window);
                                    return r(i) ? (u.push(i.id), `${e}.${n}.value`) : (u.push(n), `${e}.${n}`);
                                }),
                                u.reduce((u, e) => u + '.' + e)
                            );
                        }
                        return '';
                    };
            },
            6267: (u, e, t) => {
                var n = t(9768),
                    a = t(4649),
                    r = t(6179),
                    i = t.n(r),
                    o = t(493),
                    s = t.n(o),
                    l = t(6483),
                    c = t.n(l);
                let E, A, d, F, _;
                !(function (u) {
                    (u.Init = 'init'),
                        (u.Appear = 'appear'),
                        (u.ForceComplete = 'force-complete'),
                        (u.Complete = 'complete'),
                        (u.ForceDisappear = 'force-disappear'),
                        (u.Disappear = 'disappear');
                })(E || (E = {})),
                    (function (u) {
                        (u[(u.Micro = 0)] = 'Micro'), (u[(u.Mini = 1)] = 'Mini'), (u[(u.Normal = 2)] = 'Normal');
                    })(A || (A = {})),
                    (function (u) {
                        (u[(u.Micro = 155)] = 'Micro'), (u[(u.Mini = 190)] = 'Mini'), (u[(u.Normal = 340)] = 'Normal');
                    })(d || (d = {})),
                    (function (u) {
                        (u[(u.Mini = 65)] = 'Mini'), (u[(u.Normal = 186)] = 'Normal');
                    })(F || (F = {})),
                    (function (u) {
                        (u[(u.None = 0)] = 'None'), (u[(u.List = 1)] = 'List'), (u[(u.Bonus = 2)] = 'Bonus');
                    })(_ || (_ = {}));
                const m = (u) => ({
                        backgroundImage: `url(${R.images.gui.maps.icons.missions.icons[`c_32_${u}_silver`]()})`,
                    }),
                    D = (u) => u.every((u) => u.value.completed),
                    C = (u) => (u === A.Normal ? ue : u === A.Micro ? ie : (A.Mini, re)),
                    p = (u) => u.map((u) => u.value.currentProgress).join('-'),
                    B = 'QuestList_base_4a',
                    b = 'QuestList_base__horizontal_ea';
                class h extends i().Component {
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
                                    i = t.onAppear;
                                var o, s;
                                u === E.Appear &&
                                    (this.appearFinishedCount++,
                                    this.appearFinishedCount > n.length && (this.appearFinishedCount = 1),
                                    this.appearFinishedCount === n.length && i()),
                                    u === E.Complete &&
                                        ((this.indicateCompleteFinishedQuests[e - 1] = !0),
                                        D(n) &&
                                            ((o = a),
                                            (s = this.indicateCompleteFinishedQuests),
                                            o.every((u, e) => !u.value || s[e])) &&
                                            this.setState({ animateDisappear: !0 })),
                                    u === E.Disappear &&
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
                            o = u.onMouseEnter,
                            s = this.state.animateDisappear,
                            l = C(n),
                            E = n === A.Micro || n === A.Mini;
                        return i().createElement(
                            'div',
                            { className: c()(B, { [b]: E }), ref: a },
                            e.map((u, n) =>
                                i().createElement(l, {
                                    position: n + 1,
                                    maxPosition: e.length,
                                    key: u.value.id,
                                    quest: u.value,
                                    onAnimationEvent: this.handleAnimationEvent,
                                    animateComplete: !this.indicateCompleteFinishedQuests[n] && t[n].value,
                                    animateDisappear: s,
                                    onClick: r,
                                    onMouseEnter: o,
                                    disableProgressbarDelta: this.currentProgressHash === p(this.props.quests),
                                }),
                            ),
                        );
                    }
                }
                const g = h,
                    v = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let w, f;
                !(function (u) {
                    (u.Small = 'small'), (u.Medium = 'medium'), (u.Default = 'medium');
                })(w || (w = {})),
                    (function (u) {
                        (u[(u.Simple = 0)] = 'Simple'), (u[(u.Growing = 1)] = 'Growing');
                    })(f || (f = {}));
                const y = ({ size: u = w.Default }) => {
                        const e = c()(v.background, v[`background__${u}`]);
                        return i().createElement('div', { className: e });
                    },
                    M = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    S = ({ size: u }) => {
                        const e = c()(M.base, M[`base__${u}`]);
                        return i().createElement('div', { className: e });
                    },
                    T = {
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
                    O = (0, r.memo)(
                        ({ size: u, lineRef: e, disabled: t, baseStyles: n, isComplete: a, withoutBounce: r }) => {
                            const o = c()(
                                    T.base,
                                    T[`base__${u}`],
                                    t && T.base__disabled,
                                    a && T.base__finished,
                                    r && T.base__withoutBounce,
                                ),
                                s = !t && !a;
                            return i().createElement(
                                'div',
                                { className: o, style: n, ref: e },
                                i().createElement('div', { className: T.pattern }),
                                i().createElement('div', { className: T.gradient }),
                                s && i().createElement(S, { size: u }),
                            );
                        },
                    ),
                    k = ({ size: u, value: e, lineRef: t, disabled: n, onComplete: a }) => {
                        const o = (0, r.useMemo)(() => ({ width: `${e}%`, transitionProperty: 'none' }), [e]),
                            s = 100 === e;
                        return (
                            (0, r.useEffect)(() => {
                                s && a && a();
                            }, [s, a]),
                            i().createElement(O, { size: u, disabled: n, baseStyles: o, isComplete: s, lineRef: t })
                        );
                    },
                    I = (u, e) => {
                        let t;
                        const n = setTimeout(() => {
                            t = u();
                        }, e);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(n);
                        };
                    };
                let P, N;
                !(function (u) {
                    (u.Idle = 'Idle'), (u.Grow = 'Grow'), (u.Shrink = 'Shrink'), (u.End = 'End');
                })(P || (P = {})),
                    (function (u) {
                        (u.Idle = 'Idle'), (u.In = 'In'), (u.End = 'End');
                    })(N || (N = {}));
                const x = 'ProgressBarDeltaSimple_base_6c',
                    L = 'ProgressBarDeltaSimple_delta_99',
                    Q = (0, r.memo)(
                        ({
                            transitionDuration: u,
                            transitionDelay: e,
                            freezed: t,
                            from: n,
                            size: a,
                            to: o,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < n,
                                E = (0, r.useState)(N.Idle),
                                A = E[0],
                                d = E[1],
                                F = A === N.In,
                                _ = A === N.End,
                                m = A === N.Idle,
                                D = (0, r.useCallback)(
                                    (u) => {
                                        d(u), l && l(u);
                                    },
                                    [l],
                                );
                            (0, r.useEffect)(() => {
                                if (m && !t) {
                                    return I(() => {
                                        D(N.In);
                                    }, e);
                                }
                            }, [D, t, m, e]),
                                (0, r.useEffect)(() => {
                                    if (F) {
                                        return I(() => {
                                            s && s(), D(N.End);
                                        }, u + e);
                                    }
                                }, [D, F, s, e, u]);
                            const C = (0, r.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${u}ms`,
                                        transitionDelay: `${e}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, e, u],
                                ),
                                p = (0, r.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${u}ms`,
                                        transitionDelay: `${e}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, e, u],
                                ),
                                B = (0, r.useMemo)(
                                    () => ({ width: `${Math.abs(n - o)}%`, left: `${c ? o : n}%` }),
                                    [n, c, o],
                                );
                            return _
                                ? null
                                : i().createElement(
                                      'div',
                                      { className: x, style: B },
                                      i().createElement(
                                          'div',
                                          { style: m ? C : p, className: L },
                                          i().createElement(S, { size: a }),
                                      ),
                                  );
                        },
                    ),
                    z = (0, r.memo)(
                        ({
                            to: u,
                            size: e,
                            from: t,
                            lineRef: n,
                            disabled: a,
                            isComplete: o,
                            animationSettings: s,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const E = (0, r.useMemo)(
                                () => ({
                                    width: `${u}%`,
                                    transitionDuration: `${s.line.duration}ms`,
                                    transitionDelay: `${s.line.delay}ms`,
                                }),
                                [s.line.delay, s.line.duration, u],
                            );
                            return i().createElement(
                                i().Fragment,
                                null,
                                i().createElement(O, {
                                    size: e,
                                    lineRef: n,
                                    disabled: a,
                                    isComplete: o,
                                    baseStyles: E,
                                }),
                                t >= 0 &&
                                    i().createElement(Q, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        freezed: s.freezed,
                                        from: t,
                                        size: e,
                                        to: u,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    U = 'ProgressBarDeltaGrow_base_7e',
                    $ = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    V = 'ProgressBarDeltaGrow_glow_68',
                    q = (u) => (u ? { left: 0 } : { right: 0 }),
                    j = (u, e) => (u ? { right: 100 - e + '%' } : { left: `${e}%` }),
                    G = (u) => ({ transitionDuration: `${u}ms` }),
                    W = (0, r.memo)(
                        ({
                            transitionDuration: u,
                            transitionDelay: e,
                            freezed: t,
                            from: n,
                            size: a,
                            to: o,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                            className: E,
                        }) => {
                            const A = o < n,
                                d = (0, r.useState)(P.Idle),
                                F = d[0],
                                _ = d[1],
                                m = F === P.End,
                                D = F === P.Idle,
                                C = F === P.Grow,
                                p = F === P.Shrink,
                                B = (0, r.useCallback)(
                                    (u) => {
                                        _(u), l && l(u);
                                    },
                                    [l],
                                ),
                                b = (0, r.useCallback)(
                                    (u, e) =>
                                        I(() => {
                                            B(u);
                                        }, e),
                                    [B],
                                );
                            (0, r.useEffect)(() => {
                                if (!t)
                                    return D
                                        ? b(P.Grow, e)
                                        : C
                                          ? b(P.Shrink, u)
                                          : p
                                            ? b(P.End, u)
                                            : void (m && s && s());
                            }, [b, t, m, C, D, p, s, e, u]);
                            const h = (0, r.useMemo)(() => Object.assign({ width: '100%' }, G(u), q(A)), [A, u]),
                                g = (0, r.useMemo)(() => Object.assign({ width: '0%' }, G(u), q(A)), [A, u]),
                                v = (0, r.useMemo)(() => Object.assign({ width: '0%' }, j(A, n), G(u)), [n, A, u]),
                                w = (0, r.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - n)}%` }, j(A, n), G(u)),
                                    [n, A, o, u],
                                );
                            if (m) return null;
                            const f = c()(U, E, A && 0 === o && $);
                            return i().createElement(
                                'div',
                                { style: D ? v : w, className: f },
                                i().createElement(
                                    'div',
                                    { style: p ? g : h, className: V },
                                    i().createElement(S, { size: a }),
                                ),
                            );
                        },
                    ),
                    H = (0, r.memo)(
                        ({
                            to: u,
                            size: e,
                            from: t,
                            lineRef: n,
                            disabled: a,
                            isComplete: o,
                            animationSettings: s,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const E = u < t,
                                A = (0, r.useState)(!1),
                                d = A[0],
                                F = A[1],
                                _ = (0, r.useCallback)(
                                    (u) => {
                                        u === P.Shrink && F(!0), c && c(u);
                                    },
                                    [c],
                                ),
                                m = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                D = (0, r.useMemo)(
                                    () => ({ width: `${u}%`, transitionDuration: `${s.line.duration}ms` }),
                                    [s.line.duration, u],
                                );
                            return i().createElement(
                                i().Fragment,
                                null,
                                i().createElement(O, {
                                    size: e,
                                    lineRef: n,
                                    disabled: a,
                                    isComplete: o,
                                    withoutBounce: E && 0 === u,
                                    baseStyles: d ? D : m,
                                }),
                                t >= 0 &&
                                    i().createElement(W, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        onChangeAnimationState: _,
                                        freezed: s.freezed,
                                        onEndAnimation: l,
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
                        (Y = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        Y.apply(null, arguments)
                    );
                }
                const Z = (0, r.memo)((u) => {
                        let e = u.onComplete,
                            t = u.onEndAnimation,
                            n = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, K);
                        const a = (0, r.useState)(!1),
                            o = a[0],
                            s = a[1],
                            l = (0, r.useCallback)(() => {
                                const u = 100 === n.to;
                                u !== o && s(u), u && e && e(), t && t();
                            }, [o, e, t, n.to]);
                        switch (n.animationSettings.type) {
                            case f.Simple:
                                return i().createElement(z, Y({}, n, { onEndAnimation: l, isComplete: o }));
                            case f.Growing:
                                return i().createElement(H, Y({}, n, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    X = ['onEndAnimation'];
                function J() {
                    return (
                        (J = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        J.apply(null, arguments)
                    );
                }
                const uu = (0, r.memo)((u) => {
                    let e = u.onEndAnimation,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t = {};
                            for (var n in u)
                                if ({}.hasOwnProperty.call(u, n)) {
                                    if (e.indexOf(n) >= 0) continue;
                                    t[n] = u[n];
                                }
                            return t;
                        })(u, X);
                    const n = (0, r.useRef)({}),
                        a = (0, r.useCallback)(() => {
                            (n.current.from = void 0), e && e();
                        }, [e]),
                        o = 'number' == typeof n.current.from ? n.current.from : t.from;
                    return (
                        (n.current.from = o),
                        i().createElement(Z, J({}, t, { onEndAnimation: a, key: `${o}-${t.to}`, from: o }))
                    );
                });
                function eu() {
                    return (
                        (eu = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        eu.apply(null, arguments)
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
                            onEndAnimation: o,
                            onChangeAnimationState: s,
                            onComplete: l,
                        }) => {
                            if (a === e)
                                return i().createElement(k, {
                                    key: `${a}-${e}`,
                                    size: u,
                                    value: e,
                                    lineRef: t,
                                    disabled: n,
                                    onComplete: l,
                                });
                            const c = {
                                from: a,
                                to: e,
                                size: u,
                                lineRef: t,
                                disabled: n,
                                animationSettings: r,
                                onComplete: l,
                                onEndAnimation: o,
                                onChangeAnimationState: s,
                            };
                            return r.withStack
                                ? i().createElement(uu, c)
                                : i().createElement(Z, eu({ key: `${a}-${e}` }, c));
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
                    iu = {
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
                    ou = {
                        freezed: !1,
                        withStack: !1,
                        type: f.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    su = (0, r.memo)(
                        ({
                            maxValue: u = 100,
                            theme: e = iu,
                            size: t = w.Default,
                            animationSettings: n = ou,
                            disabled: a = !1,
                            withoutBackground: o = !1,
                            value: s,
                            deltaFrom: l,
                            lineRef: E,
                            onChangeAnimationState: A,
                            onEndAnimation: d,
                            onComplete: F,
                        }) => {
                            const _ = ((u, e, t) =>
                                (0, r.useMemo)(() => {
                                    const n = (au(0, e, u) / e) * 100;
                                    return { value: n, deltaFrom: ru(n, e, t) };
                                }, [t, e, u]))(s, u, l);
                            return i().createElement(
                                'div',
                                { className: c()(v.base, v[`base__${t}`]), style: nu(e) },
                                !o && i().createElement(y, { size: t }),
                                i().createElement(tu, {
                                    size: t,
                                    lineRef: E,
                                    disabled: a,
                                    value: _.value,
                                    deltaFrom: _.deltaFrom,
                                    animationSettings: n,
                                    onEndAnimation: d,
                                    onChangeAnimationState: A,
                                    onComplete: F,
                                }),
                            );
                        },
                    ),
                    lu = 'Countdown_base_6c',
                    cu = 'Countdown_icon_cb',
                    Eu = 'Countdown_time_96';
                var Au = t(2993);
                const du = ({ countdown: u, noIcon: e }) =>
                    i().createElement(
                        'div',
                        { className: lu },
                        !e && i().createElement('div', { className: cu }),
                        i().createElement(
                            'div',
                            { className: Eu },
                            i().createElement(Au.Z, {
                                startValue: u,
                                hourFormat: R.strings.quests.general.countdown.timer_hrs_only(),
                                roundUpHours: !0,
                            }),
                        ),
                    );
                var Fu = t(7902),
                    _u = t(9916);
                const mu = [
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
                function Du(u) {
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
                                    type: _u.B0.TOOLTIP,
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
                            i = u.onMouseLeave,
                            o = u.onMouseDown,
                            s = u.onClick,
                            l = u.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = u.ignoreMouseClick,
                            A = void 0 !== E && E,
                            d = u.decoratorId,
                            F = void 0 === d ? 0 : d,
                            _ = u.isEnabled,
                            m = void 0 === _ || _,
                            D = u.targetId,
                            C = void 0 === D ? 0 : D,
                            p = u.onShow,
                            B = u.onHide,
                            b = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, mu);
                        const h = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            g = (0, r.useMemo)(() => C || (0, Fu.F)().resId, [C]),
                            v = (0, r.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (Cu(t, F, { isMouseEvent: !0, on: !0, arguments: Du(n) }, g),
                                    p && p(),
                                    (h.current.isVisible = !0));
                            }, [t, F, n, g, p]),
                            w = (0, r.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const u = h.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (h.current.timeoutId = 0)),
                                        Cu(t, F, { on: !1 }, g),
                                        h.current.isVisible && B && B(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, F, g, B]),
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
                                !1 === m && w();
                            }, [m, w]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        window.removeEventListener('mouseleave', w), w();
                                    }
                                ),
                                [w],
                            );
                        return m
                            ? (0, r.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((h.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      a && a(u),
                                                      y && y(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              w(), null == i || i(e), null == u || u(e);
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              !1 === A && w(), null == s || s(e), null == u || u(e);
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              !1 === A && w(), null == o || o(e), null == u || u(e);
                                          })(e.props.onMouseDown),
                                      },
                                      b,
                                  ),
                              )
                            : e;
                        var y;
                    };
                class Bu extends i().Component {
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
                                this.props.animateDisappear && !this.state.animateDisappear
                                    ? this.nextAnimation(E.ForceDisappear)
                                    : this.nextAnimation(E.Init);
                            }),
                            (this.componentDidUpdate = (u) => {
                                u !== this.props &&
                                    (this.props.animateComplete && !this.state.animateComplete
                                        ? this.nextAnimation(E.ForceComplete)
                                        : this.props.animateDisappear &&
                                          !this.state.animateDisappear &&
                                          this.nextAnimation(E.ForceDisappear),
                                    u.animateDisappear &&
                                        !this.props.animateDisappear &&
                                        this.setState(
                                            { animateAppear: !1, animateComplete: !1, animateDisappear: !1 },
                                            () => {
                                                this.nextAnimation(E.Init);
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
                                    case E.Init:
                                        (this.positionTimeout = window.setTimeout(() => {
                                            this.setState({ animateAppear: !0 });
                                        }, a)),
                                            this.scheduleAnimationEvent(E.Appear, a + this.APPEAR_DURATION);
                                        break;
                                    case E.Appear:
                                    case E.ForceComplete:
                                        this.props.animateComplete &&
                                            (this.setState({ animateComplete: !0, animateAppear: !0 }),
                                            this.scheduleAnimationEvent(E.Complete, a + this.COMPLETE_DURATION));
                                        break;
                                    case E.Complete:
                                    case E.ForceDisappear:
                                        if (this.props.animateDisappear) {
                                            this.setState({ animateDisappear: !0 }),
                                                this.scheduleAnimationEvent(E.Disappear, this.DISAPPEAR_DURATION);
                                            break;
                                        }
                                }
                            }),
                            (this.tooltipArgs = { missionId: u.quest.id });
                    }
                    renderCard() {
                        return i().createElement('div', null);
                    }
                    render() {
                        return i().createElement(
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
                    yu = 'QuestCard_complete__blink_78',
                    Mu = 'QuestCard_complete_bg__completeStart_68',
                    Su = 'QuestCard_complete_bg__completeEnd_dd',
                    Tu = 'QuestCard_icon__completeStart_af',
                    Ou = 'QuestCard_icon__completeEnd_e0',
                    ku = 'QuestCard_base_01',
                    Iu = 'QuestCard_hoverBg_62',
                    Pu = 'QuestCard_base__complete_b5',
                    Ru = 'QuestCard_base__bonus_f0',
                    Nu = 'QuestCard_border_00',
                    xu = 'QuestCard_border_bg_cb',
                    Lu = 'QuestCard_complete_97',
                    Qu = 'QuestCard_complete_bg_89',
                    zu = 'QuestCard_content_3e',
                    Uu = 'QuestCard_icon_7e',
                    $u = 'QuestCard_icon_img_d7',
                    Vu = 'QuestCard_icon_img__check_2e',
                    qu = 'QuestCard_description_6a',
                    ju = 'QuestCard_description_pad_right_b6',
                    Gu = 'QuestCard_progressCounter_3f',
                    Wu = 'QuestCard_progressCounter_current_af',
                    Hu = 'QuestCard_progressCounter_separator_6b',
                    Ku = 'QuestCard_progressCounter_total_50',
                    Yu = 'QuestCard_progressCounterComplete_86',
                    Zu = 'QuestCard_progressBar_26',
                    Xu = 'QuestCard_countdown_1a',
                    Ju = Object.assign({}, ou, {
                        line: Object.assign({}, ou.line, { delay: 1e3 }),
                        delta: Object.assign({}, ou.delta, { delay: 1e3 }),
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
                                o = u.countdown,
                                s = u.onClick,
                                l = u.onMouseEnter,
                                E = u.innerRef,
                                A = u.disableProgressbarDelta,
                                d = this.state,
                                F = d.animateAppear,
                                _ = d.animateComplete,
                                D = d.animateDisappear,
                                C = n.description,
                                p = n.currentProgress,
                                B = n.earned,
                                b = n.icon,
                                h = n.completed,
                                g = n.totalProgress,
                                v = `${systemLocale.toUpperCase(C[0])}${C.slice(1)}`,
                                f = g > 0,
                                y = { transform: D ? `translateY(${60 * (t - e + 1) * 1.5}rem)` : void 0 };
                            return i().createElement(
                                'div',
                                {
                                    className: c()(ku, hu, { [Pu]: h, [Ru]: r }, { [gu]: F, [vu]: D }),
                                    style: y,
                                    onClick: s,
                                    onMouseEnter: l,
                                    ref: E,
                                },
                                i().createElement(
                                    'div',
                                    { className: Nu },
                                    i().createElement('div', { className: c()(xu, wu, { [fu]: F }) }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: c()(Lu, { [yu]: _ }) },
                                    i().createElement('div', { className: c()(Qu, Mu, { [Su]: _ }) }),
                                ),
                                i().createElement('div', { className: Iu }),
                                i().createElement(
                                    'div',
                                    { className: Uu },
                                    i().createElement('div', {
                                        className: c()($u, { [Vu]: h }, { [Tu]: a && h, [Ou]: _ }),
                                        style: h ? void 0 : m(b),
                                    }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: zu },
                                    i().createElement(
                                        'div',
                                        { className: c()(qu, { [ju]: o }) },
                                        ((S = g ? 35 : 70),
                                        (M = v).length > S ? M.slice(0, S).split(' ').slice(0, -1).join(' ') + '…' : M),
                                    ),
                                    f &&
                                        i().createElement(
                                            i().Fragment,
                                            null,
                                            i().createElement(
                                                'div',
                                                { className: c()(Gu, { [Yu]: h }) },
                                                i().createElement('span', { className: Wu }, p),
                                                i().createElement('span', { className: Hu }, '/'),
                                                i().createElement('span', { className: Ku }, g),
                                            ),
                                            i().createElement(
                                                'div',
                                                { className: Zu },
                                                i().createElement(su, {
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
                                    o &&
                                    i().createElement(
                                        'div',
                                        { className: Xu },
                                        i().createElement(du, { countdown: o }),
                                    ),
                            );
                            var M, S;
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
                        (ne = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        ne.apply(null, arguments)
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
                            o = u.onClick,
                            s = u.onMouseEnter,
                            l = u.micro,
                            E = u.innerRef,
                            A = this.state,
                            d = A.animateAppear,
                            F = A.animateComplete,
                            _ = A.animateDisappear,
                            D = t.icon,
                            C = t.completed,
                            p = { transform: _ ? `translateX(${-(60 * e)}rem)` : void 0 },
                            B = l ? te : ee;
                        return i().createElement(
                            'div',
                            {
                                className: c()(
                                    B.base,
                                    B.base__appearStart,
                                    { [B.base__complete]: C, [B.base__bonus]: a },
                                    { [B.base__appearEnd]: d, [B.base__disappearStart]: _ },
                                ),
                                style: p,
                                onClick: o,
                                onMouseEnter: s,
                                ref: E,
                            },
                            i().createElement('div', { className: B.hoverBg }),
                            i().createElement(
                                'div',
                                { className: B.border },
                                i().createElement('div', {
                                    className: c()(B.border_bg, B.border_bg__appearStart, {
                                        [B.border_bg__appearEnd]: d,
                                    }),
                                }),
                            ),
                            i().createElement(
                                'div',
                                { className: c()(B.complete, { [B.complete__blink]: F }) },
                                i().createElement('div', {
                                    className: c()(B.complete_bg, B.complete_bg__completeStart, {
                                        [B.complete_bg__completeEnd]: F,
                                    }),
                                }),
                            ),
                            i().createElement('div', { className: B.icon, style: m(D) }),
                            C &&
                                i().createElement('div', {
                                    className: c()(B.check, { [B.check__completeStart]: n, [B.check__completeEnd]: F }),
                                }),
                            !C && r && i().createElement(du, { countdown: r, noIcon: !0 }),
                        );
                    }
                }
                const re = ae,
                    ie = (u) => i().createElement(ae, ne({}, u, { micro: !0 }));
                function oe(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                const se = 'Widget_base_f1',
                    le = 'Widget_base__alignEnd_7b',
                    ce = () => {
                        oe(R.sounds.highlight());
                    },
                    Ee = ({
                        quests: u,
                        visible: e,
                        onQuestClick: t,
                        indicateCompleteQuests: n,
                        countdown: o,
                        onDisappear: s,
                    }) => {
                        const l = u.slice(0, 3),
                            F = n.slice(0, 3),
                            m = u[3] && u[3].value,
                            p = n[3] && n[3].value,
                            B = D(l),
                            b = ((u) => u.reduce((u, e) => (e.value ? u + 1 : u), 0))(F),
                            h = (0, r.useState)(
                                (({
                                    allStandardQuestsComplete: u,
                                    standardQuestsToBeIndicatedComplete: e,
                                    bonusQuest: t,
                                    bonusQuestIndicateComplete: n,
                                    visible: a,
                                }) => {
                                    if (a) {
                                        if (!u || e > 0) return _.List;
                                        if ((t && !t.completed) || n) return _.Bonus;
                                    }
                                    return _.None;
                                })({
                                    allStandardQuestsComplete: B,
                                    standardQuestsToBeIndicatedComplete: b,
                                    bonusQuest: m,
                                    bonusQuestIndicateComplete: p,
                                    visible: e,
                                }),
                            ),
                            v = h[0],
                            w = h[1],
                            f = (0, r.useRef)(null),
                            y = (0, r.useCallback)(() => {
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
                            M = (0, r.useCallback)(() => {
                                e ? (w(_.Bonus), y()) : s();
                            }, [e, w, y, s]),
                            S = (0, r.useCallback)(
                                (u) => {
                                    u === E.Appear && y(), u === E.Disappear && e && s();
                                },
                                [y, s, e],
                            ),
                            T = (0, r.useCallback)(() => {
                                oe(R.sounds.play()), t();
                            }, [t]);
                        (0, r.useEffect)(() => {
                            e &&
                                (b > 0
                                    ? oe(B ? R.sounds.dq_widget_bonus_reveal() : R.sounds.dq_widget_quest_complete())
                                    : m && m.completed
                                      ? oe(R.sounds.dq_widget_bonus_complete())
                                      : oe(R.sounds.dq_widget_slide_in()));
                        }, [e, b, B, m]),
                            (0, r.useEffect)(() => {
                                e && !B && w(_.List);
                            }, [e, B]);
                        const O = ((u) =>
                                u <= d.Micro ? A.Micro : u <= d.Mini ? A.Mini : u <= d.Normal ? A.Normal : A.Micro)(
                                (0, a.eI)().width,
                            ),
                            k = C(O);
                        return i().createElement(
                            'div',
                            { className: c()(se, { [le]: v === _.Bonus && O === A.Normal }) },
                            v === _.List &&
                                i().createElement(g, {
                                    innerRef: f,
                                    quests: l,
                                    indicateCompleteQuests: F,
                                    cardType: O,
                                    animateDisappear: !e,
                                    onClick: T,
                                    onMouseEnter: ce,
                                    onAppear: y,
                                    onDisappear: M,
                                }),
                            v === _.Bonus &&
                                m &&
                                i().createElement(k, {
                                    bonus: !0,
                                    innerRef: f,
                                    quest: m,
                                    countdown: o,
                                    animateComplete: m.completed,
                                    animateDisappear: m.completed || !e,
                                    onClick: T,
                                    onMouseEnter: ce,
                                    onAnimationEvent: S,
                                }),
                        );
                    };
                n.O.view.extraSize.set(0, 0);
                const Ae = () => {
                    const u = (0, a.tT)();
                    return i().createElement(Ee, u);
                };
                engine.whenReady.then(() => {
                    s().render(i().createElement(Ae, null), document.getElementById('root'));
                });
            },
            2993: (u, e, t) => {
                t.d(e, { Z: () => l });
                var n = t(7044),
                    a = t(4649),
                    r = t(6179),
                    i = t.n(r),
                    o = t(5572),
                    s = t(1272);
                const l = ({
                    startValue: u,
                    hourFormat: e = R.strings.quests.general.countdown.timer_hrs(),
                    minuteFormat: t = R.strings.quests.general.countdown.timer_min(),
                    roundUpHours: r = !1,
                    pendingDotCount: l = 5,
                    className: c,
                }) => {
                    const E = u > n.dV + n.yR ? n.yR : 1,
                        A = (0, a.au)(u, E);
                    return i().createElement(
                        'div',
                        { className: c },
                        A > 0
                            ? ((u, e, t, a) => {
                                  const r = u < n.dV ? t : e;
                                  return (0, o.G)(r, u, a);
                              })(A, e, t, r)
                            : i().createElement(s.Z, { count: l, delay: 500 }),
                    );
                };
            },
            1272: (u, e, t) => {
                t.d(e, { Z: () => r });
                var n = t(6179),
                    a = t.n(n);
                const r = ({ className: u, count: e, delay: t }) => {
                    const r = (0, n.useState)(1),
                        i = r[0],
                        o = r[1];
                    return (
                        (0, n.useEffect)(() => {
                            const u = setInterval(() => {
                                o((u) => (u <= e ? u + 1 : 1));
                            }, t);
                            return () => {
                                clearInterval(u);
                            };
                        }),
                        a().createElement('span', { className: u }, '. '.repeat(i))
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
                    for (var [e, t, n] = deferred[s], r = !0, i = 0; i < e.length; i++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (u = o);
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
                        [r, i, o] = t,
                        s = 0;
                    if (r.some((e) => 0 !== u[e])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (e && e(t); s < r.length; s++)
                        (a = r[s]), __webpack_require__.o(u, a) && u[a] && u[a][0](), (u[a] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [45], () => __webpack_require__(6267));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
