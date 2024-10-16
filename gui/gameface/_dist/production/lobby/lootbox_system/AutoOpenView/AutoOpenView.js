(() => {
    var __webpack_modules__ = {
            7701: (u, e, t) => {
                'use strict';
                t.d(e, { Nm: () => n.Nm, c4: () => r });
                var n = t(7308);
                const r = (0, n.EO)({
                    getBounds: (u) => [0, u.scrollHeight - u.offsetHeight],
                    getContainerSize: (u) => u.scrollHeight,
                    getWrapperSize: (u) => u.offsetHeight,
                    setScrollPosition: (u, e) => {
                        u.scrollTop = e.value.scrollPosition;
                    },
                    getDirection: (u) => (u.deltaY > 1 ? n.Nm.Next : n.Nm.Prev),
                });
            },
            7308: (u, e, t) => {
                'use strict';
                t.d(e, { EO: () => d, Nm: () => A, he: () => F });
                var n = t(7515),
                    r = t(1856),
                    a = t(3138),
                    s = t(4532),
                    o = t(9653),
                    i = t(3815),
                    l = t(4489),
                    c = t(6179),
                    E = t(7030);
                let A;
                !(function (u) {
                    (u[(u.Next = -1)] = 'Next'), (u[(u.Prev = 1)] = 'Prev');
                })(A || (A = {}));
                const F = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    d = ({
                        getContainerSize: u,
                        getBounds: e,
                        setScrollPosition: t,
                        getDirection: A,
                        getWrapperSize: d,
                        triggerMouseMoveOnUpdate: D = !1,
                    }) => {
                        const m = (u, t) => {
                            const r = e(u),
                                a = r[0],
                                s = r[1];
                            return s <= a ? 0 : (0, n.u)(a, s, t);
                        };
                        return (n = {}) => {
                            const B = n.settings,
                                C = void 0 === B ? F : B,
                                _ = (0, c.useRef)(null),
                                g = (0, c.useRef)(null),
                                p = (0, o.q)(),
                                h = (0, l.f)(
                                    () => {
                                        a.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                f = (0, E.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (u) => {
                                        const e = _.current;
                                        e && (t(e, u), p.trigger('change', u), D && h());
                                    },
                                    onRest: (u) => p.trigger('rest', u),
                                    onStart: (u) => p.trigger('start', u),
                                    onPause: (u) => p.trigger('pause', u),
                                })),
                                v = f[0],
                                b = f[1],
                                w = (0, c.useCallback)(
                                    (u, e, t) => {
                                        var n;
                                        const r = v.scrollPosition.get(),
                                            a = (null != (n = v.scrollPosition.goal) ? n : 0) - r;
                                        return m(u, e * t + a + r);
                                    },
                                    [v.scrollPosition],
                                ),
                                S = (0, c.useCallback)(
                                    (u, { immediate: e = !1, reset: t = !0 } = {}) => {
                                        const n = _.current;
                                        n &&
                                            b.start({
                                                scrollPosition: m(n, u),
                                                immediate: e,
                                                reset: t,
                                                config: C.animationConfig,
                                                from: { scrollPosition: m(n, v.scrollPosition.get()) },
                                            });
                                    },
                                    [b, C.animationConfig, v.scrollPosition],
                                ),
                                y = (0, c.useCallback)(
                                    (u) => {
                                        const e = _.current,
                                            t = g.current;
                                        if (!e || !t) return;
                                        const n = ((u, e) => {
                                                switch (e.type) {
                                                    case 'proportional':
                                                        return d(u) / e.factor;
                                                    case 'fixed':
                                                        return e.value;
                                                }
                                            })(t, C.step),
                                            r = w(e, u, n);
                                        S(r);
                                    },
                                    [S, w, C.step],
                                ),
                                x = (0, c.useCallback)(
                                    (u) => {
                                        0 !== u.deltaY && y(A(u)),
                                            _.current && p.trigger('mouseWheel', u, v.scrollPosition, e(_.current));
                                    },
                                    [v.scrollPosition, y, p],
                                ),
                                R = (0, s.M)(
                                    () =>
                                        (0, r.v)(() => {
                                            const u = _.current;
                                            u &&
                                                (S(m(u, v.scrollPosition.goal), { immediate: !0 }),
                                                p.trigger('resizeHandled'));
                                        }),
                                    [S, v.scrollPosition.goal],
                                ),
                                P = (0, i.z)(() => {
                                    const u = _.current;
                                    if (!u) return;
                                    const e = m(u, v.scrollPosition.goal);
                                    e !== v.scrollPosition.goal && S(e, { immediate: !0 }),
                                        p.trigger('recalculateContent');
                                });
                            (0, c.useEffect)(
                                () => (
                                    window.addEventListener('resize', R),
                                    () => {
                                        window.removeEventListener('resize', R);
                                    }
                                ),
                                [R],
                            );
                            return (0, c.useMemo)(
                                () => ({
                                    getWrapperSize: () => (g.current ? d(g.current) : void 0),
                                    getContainerSize: () => (_.current ? u(_.current) : void 0),
                                    getBounds: () =>
                                        _.current
                                            ? e(_.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: C.step.clampedArrowStepTimeout,
                                    clampPosition: m,
                                    handleMouseWheel: x,
                                    applyScroll: S,
                                    applyStepTo: y,
                                    contentRef: _,
                                    wrapperRef: g,
                                    scrollPosition: b,
                                    animationScroll: v,
                                    recalculateContent: P,
                                    events: { on: p.on, off: p.off },
                                }),
                                [v.scrollPosition, S, y, p.off, p.on, P, x, b, C.step.clampedArrowStepTimeout],
                            );
                        };
                    };
            },
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
            7515: (u, e, t) => {
                'use strict';
                t.d(e, { u: () => n });
                const n = (u, e, t) => (t < u ? u : t > e ? e : t);
            },
            1856: (u, e, t) => {
                'use strict';
                t.d(e, { v: () => n });
                const n = (u) => {
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
            },
            527: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, { mouse: () => c, off: () => i, on: () => o, onResize: () => a, onScaleUpdated: () => s });
                var n = t(2472),
                    r = t(1176);
                const a = (0, n.E)('clientResized'),
                    s = (0, n.E)('self.onScaleUpdated'),
                    o = (u, e) => engine.on(u, e),
                    i = (u, e) => engine.off(u, e),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && (0, r.R)(!1);
                    }
                    function t() {
                        u.enabled && (0, r.R)(!0);
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
                            : (0, r.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${e}`,
                                        s = l[e]((u) => t([u, 'outside']));
                                    function o(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, o),
                                        n(),
                                        () => {
                                            r &&
                                                (s(),
                                                window.removeEventListener(a, o),
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
                    return Object.assign({}, a, {
                        disable() {
                            (u.enabled = !1), n();
                        },
                        enable() {
                            (u.enabled = !0), n();
                        },
                        enableOutside() {
                            u.enabled && (0, r.R)(!0);
                        },
                        disableOutside() {
                            u.enabled && (0, r.R)(!1);
                        },
                    });
                })();
            },
            5959: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, {
                        events: () => n,
                        getMouseGlobalPosition: () => s,
                        getSize: () => a,
                        graphicsQuality: () => o,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var n = t(527),
                    r = t(2493);
                function a(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (u, e, t) => {
                'use strict';
                function n(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => n });
            },
            2493: (u, e, t) => {
                'use strict';
                function n(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function r(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                t.d(e, { E: () => r, G: () => n });
            },
            2472: (u, e, t) => {
                'use strict';
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
                'use strict';
                t.d(e, { O: () => a });
                var n = t(5959),
                    r = t(514);
                const a = { view: t(7641), client: n, sound: r.ZP };
            },
            514: (u, e, t) => {
                'use strict';
                t.d(e, { ZP: () => o, hY: () => s });
                var n = t(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(r).reduce((u, e) => ((u[e] = () => (0, n.playSound)(r[e])), u), {}),
                    s = Object.assign({}, a, { sound: n.playSound }),
                    o = { play: s, setRTPC: n.setRTPC };
            },
            3722: (u, e, t) => {
                'use strict';
                function n(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function r(u, e, t) {
                    return `url(${n(u, e, t)})`;
                }
                t.r(e), t.d(e, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (u, e, t) => {
                'use strict';
                t.d(e, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => r });
                var n = t(2472);
                const r = {
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
                'use strict';
                t.r(e),
                    t.d(e, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => w,
                        events: () => a.U,
                        extraSize: () => S,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => m,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => b,
                        getScale: () => B,
                        getSize: () => F,
                        getViewGlobalPosition: () => D,
                        isEventHandled: () => f,
                        isFocused: () => p,
                        pxToRem: () => C,
                        remToPx: () => _,
                        resize: () => d,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => A,
                        whenTutorialReady: () => y,
                    });
                var n = t(3722),
                    r = t(6112),
                    a = t(6538),
                    s = t(8566);
                const o = 15;
                function i(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function l(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, o);
                }
                function c(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function E(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function A(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, o);
                }
                function F(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function D(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: _(e.x), y: _(e.y) };
                }
                function m() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function B() {
                    return viewEnv.getScale();
                }
                function C(u) {
                    return viewEnv.pxToRem(u);
                }
                function _(u) {
                    return viewEnv.remToPx(u);
                }
                function g(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function b() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(r.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === r.W[e]), u),
                        {},
                    ),
                    S = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    y = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : a.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                'use strict';
                t.d(e, { qP: () => l });
                const n = ['args'];
                const r = 2,
                    a = 16,
                    s = 32,
                    o = 64,
                    i = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                s = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var n in u)
                                        if ({}.hasOwnProperty.call(u, n)) {
                                            if (e.indexOf(n) >= 0) continue;
                                            t[n] = u[n];
                                        }
                                    return t;
                                })(e, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, s, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    l = {
                        close(u) {
                            i('popover' === u ? r : s);
                        },
                        minimize() {
                            i(o);
                        },
                        move(u) {
                            i(a, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            4532: (u, e, t) => {
                'use strict';
                t.d(e, { M: () => r });
                var n = t(6179);
                const r = (u, e = []) => {
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
                };
            },
            9653: (u, e, t) => {
                'use strict';
                t.d(e, { q: () => s });
                var n = t(6179);
                function r(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (u) {
                                if ('string' == typeof u) return a(u, e);
                                var t = {}.toString.call(u).slice(8, -1);
                                return (
                                    'Object' === t && u.constructor && (t = u.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(u)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? a(u, e)
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
                function a(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, n = Array(e); t < e; t++) n[t] = u[t];
                    return n;
                }
                const s = () => {
                    const u = (0, n.useMemo)(() => ({}), []),
                        e = (e) => (u[e] || (u[e] = new Map()), u[e]),
                        t = (u, t) => {
                            e(u).set(t, t);
                        },
                        a = (u, t) => {
                            e(u).delete(t);
                        },
                        s = (u, ...t) => {
                            for (var n, a = r(e(u).values()); !(n = a()).done; ) {
                                (0, n.value)(...t);
                            }
                        };
                    return (0, n.useMemo)(() => ({ on: t, off: a, trigger: s }), []);
                };
            },
            3815: (u, e, t) => {
                'use strict';
                t.d(e, { z: () => a });
                var n = t(6179);
                const r = [];
                function a(u) {
                    const e = (0, n.useRef)(u);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            e.current = u;
                        }),
                        (0, n.useCallback)((...u) => (0, e.current)(...u), r)
                    );
                }
            },
            4489: (u, e, t) => {
                'use strict';
                t.d(e, { f: () => a });
                var n = t(5139),
                    r = t(6179);
                function a(u, e, t) {
                    const a = (0, r.useMemo)(() => (0, n.Z)(t, u), e);
                    return (0, r.useEffect)(() => a.cancel, [a]), a;
                }
            },
            5521: (u, e, t) => {
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
            7727: (u, e, t) => {
                'use strict';
                function n(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                t.d(e, { G: () => n });
            },
            5139: (u, e, t) => {
                'use strict';
                function n(u, e, t, n) {
                    let r,
                        a = !1,
                        s = 0;
                    function o() {
                        r && clearTimeout(r);
                    }
                    function i(...i) {
                        const l = this,
                            c = Date.now() - s;
                        function E() {
                            (s = Date.now()), t.apply(l, i);
                        }
                        a ||
                            (n && !r && E(),
                            o(),
                            void 0 === n && c > u
                                ? E()
                                : !0 !== e &&
                                  (r = setTimeout(
                                      n
                                          ? function () {
                                                r = void 0;
                                            }
                                          : E,
                                      void 0 === n ? u - c : u,
                                  )));
                    }
                    return (
                        'boolean' != typeof e && ((n = t), (t = e), (e = void 0)),
                        (i.cancel = function () {
                            o(), (a = !0);
                        }),
                        i
                    );
                }
                t.d(e, { Z: () => n });
            },
            1358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => a });
                var n = t(3138);
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
                        const a = n.O.view.addModelObserver(u, t, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", u),
                            a
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
                const a = r;
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
                'use strict';
                t.d(e, { B3: () => i, Z5: () => s.Z5, B0: () => o, ry: () => B });
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
                var a = t(1358);
                var s = t(8613);
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
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(5521),
                    F = t(3138);
                const d = ['args'];
                function D(u, e, t, n, r, a, s) {
                    try {
                        var o = u[a](s),
                            i = o.value;
                    } catch (u) {
                        return void t(u);
                    }
                    o.done ? e(i) : Promise.resolve(i).then(n, r);
                }
                const m = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    B = (function () {
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
                                        var a = u.apply(e, t);
                                        function s(u) {
                                            D(a, n, r, s, o, 'next', u);
                                        }
                                        function o(u) {
                                            D(a, n, r, s, o, 'throw', u);
                                        }
                                        s(void 0);
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
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var n in u)
                                        if ({}.hasOwnProperty.call(u, n)) {
                                            if (e.indexOf(n) >= 0) continue;
                                            t[n] = u[n];
                                        }
                                    return t;
                                })(e, d);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    _ = () => C(o.CLOSE),
                    g = (u, e) => {
                        u.keyCode === A.n.ESCAPE && e();
                    };
                var p = t(7572);
                const h = r.instance,
                    f = {
                        DataTracker: a.Z,
                        ViewModel: p.Z,
                        ViewEventType: o,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: m,
                        sendMoveEvent: (u) => C(o.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: _,
                        sendClosePopOverEvent: () => C(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            C(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, r = R.invalid('resId'), a) => {
                            const s = F.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                E = i.width,
                                A = i.height,
                                d = {
                                    x: F.O.view.pxToRem(l) + s.x,
                                    y: F.O.view.pxToRem(c) + s.y,
                                    width: F.O.view.pxToRem(E),
                                    height: F.O.view.pxToRem(A),
                                };
                            C(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: e,
                                bbox: m(d),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => g(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            g(u, _);
                        },
                        handleViewEvent: C,
                        onBindingsReady: B,
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
                        ClickOutsideManager: h,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = f;
            },
            8613: (u, e, t) => {
                'use strict';
                t.d(e, { Z5: () => n, cy: () => r });
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
                    };
            },
            7639: (u, e, t) => {
                'use strict';
                var n = t(6179),
                    r = t.n(n);
                const a = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                var s = t(3138);
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var i;
                function l(u, e, t) {
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
                        a = Math.min(n, r);
                    return {
                        extraLarge: a === t.extraLarge.weight,
                        large: a === t.large.weight,
                        medium: a === t.medium.weight,
                        small: a === t.small.weight,
                        extraSmall: a === t.extraSmall.weight,
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
                })(i || (i = {}));
                const c = s.O.client.getSize('rem'),
                    E = c.width,
                    A = c.height,
                    F = Object.assign({ width: E, height: A }, l(E, A, o)),
                    d = (0, n.createContext)(F),
                    D = ['children'];
                const m = (u) => {
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
                        })(u, D);
                    const r = (0, n.useContext)(d),
                        s = r.extraLarge,
                        o = r.large,
                        i = r.medium,
                        l = r.small,
                        c = r.extraSmall,
                        E = r.extraLargeWidth,
                        A = r.largeWidth,
                        F = r.mediumWidth,
                        m = r.smallWidth,
                        B = r.extraSmallWidth,
                        C = r.extraLargeHeight,
                        _ = r.largeHeight,
                        g = r.mediumHeight,
                        p = r.smallHeight,
                        h = r.extraSmallHeight,
                        f = { extraLarge: C, large: _, medium: g, small: p, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && s) return e;
                        if (t.large && o) return e;
                        if (t.medium && i) return e;
                        if (t.small && l) return e;
                        if (t.extraSmall && c) return e;
                    } else {
                        if (t.extraLargeWidth && E) return a(e, t, f);
                        if (t.largeWidth && A) return a(e, t, f);
                        if (t.mediumWidth && F) return a(e, t, f);
                        if (t.smallWidth && m) return a(e, t, f);
                        if (t.extraSmallWidth && B) return a(e, t, f);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && C) return e;
                            if (t.largeHeight && _) return e;
                            if (t.mediumHeight && g) return e;
                            if (t.smallHeight && p) return e;
                            if (t.extraSmallHeight && h) return e;
                        }
                    }
                    return null;
                };
                m.defaultProps = {
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
                (0, n.memo)(m);
                const B = (u) => {
                        const e = (0, n.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    C = ({ children: u }) => {
                        const e = (0, n.useContext)(d),
                            t = (0, n.useState)(e),
                            a = t[0],
                            i = t[1],
                            c = (0, n.useCallback)((u, e) => {
                                const t = s.O.view.pxToRem(u),
                                    n = s.O.view.pxToRem(e);
                                i(Object.assign({ width: t, height: n }, l(t, n, o)));
                            }, []),
                            E = (0, n.useCallback)(() => {
                                const u = s.O.client.getSize('px');
                                c(u.width, u.height);
                            }, [c]);
                        B(() => {
                            s.O.client.events.on('clientResized', c), s.O.client.events.on('self.onScaleUpdated', E);
                        }),
                            (0, n.useEffect)(
                                () => () => {
                                    s.O.client.events.off('clientResized', c),
                                        s.O.client.events.off('self.onScaleUpdated', E);
                                },
                                [c, E],
                            );
                        const A = (0, n.useMemo)(() => Object.assign({}, a), [a]);
                        return r().createElement(d.Provider, { value: A }, u);
                    };
                var _ = t(6483),
                    g = t.n(_),
                    p = t(926),
                    h = t.n(p);
                let f, v, b;
                !(function (u) {
                    (u[(u.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = o.small.width)] = 'Small'),
                        (u[(u.Medium = o.medium.width)] = 'Medium'),
                        (u[(u.Large = o.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                })(f || (f = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = o.small.width)] = 'Small'),
                            (u[(u.Medium = o.medium.width)] = 'Medium'),
                            (u[(u.Large = o.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                    })(v || (v = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = o.small.height)] = 'Small'),
                            (u[(u.Medium = o.medium.height)] = 'Medium'),
                            (u[(u.Large = o.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge');
                    })(b || (b = {}));
                const w = () => {
                        const u = (0, n.useContext)(d),
                            e = u.width,
                            t = u.height,
                            r = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return f.ExtraLarge;
                                    case u.large:
                                        return f.Large;
                                    case u.medium:
                                        return f.Medium;
                                    case u.small:
                                        return f.Small;
                                    case u.extraSmall:
                                        return f.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), f.ExtraSmall;
                                }
                            })(u),
                            a = ((u) => {
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
                            s = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return b.ExtraLarge;
                                    case u.largeHeight:
                                        return b.Large;
                                    case u.mediumHeight:
                                        return b.Medium;
                                    case u.smallHeight:
                                        return b.Small;
                                    case u.extraSmallHeight:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(u);
                        return { mediaSize: r, mediaWidth: a, mediaHeight: s, remScreenWidth: e, remScreenHeight: t };
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
                        [v.Small]: h().SMALL_WIDTH,
                        [v.Medium]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH}`,
                        [v.Large]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH}`,
                        [v.ExtraLarge]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH} ${h().EXTRA_LARGE_WIDTH}`,
                    },
                    P = {
                        [b.ExtraSmall]: '',
                        [b.Small]: h().SMALL_HEIGHT,
                        [b.Medium]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT}`,
                        [b.Large]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT}`,
                        [b.ExtraLarge]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT} ${h().EXTRA_LARGE_HEIGHT}`,
                    },
                    T = {
                        [f.ExtraSmall]: '',
                        [f.Small]: h().SMALL,
                        [f.Medium]: `${h().SMALL} ${h().MEDIUM}`,
                        [f.Large]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE}`,
                        [f.ExtraLarge]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE} ${h().EXTRA_LARGE}`,
                    },
                    L = (u) => {
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
                        const a = w(),
                            s = a.mediaWidth,
                            o = a.mediaHeight,
                            i = a.mediaSize;
                        return r().createElement('div', y({ className: g()(t, x[s], P[o], T[i]) }, n), e);
                    },
                    M = ['children'];
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
                        })(u, M);
                    return r().createElement(C, null, r().createElement(L, t, e));
                };
                var k = t(493),
                    N = t.n(k),
                    I = t(7727);
                const H = {
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
                    U = [
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
                function W() {
                    return (
                        (W = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        W.apply(null, arguments)
                    );
                }
                class G extends r().PureComponent {
                    constructor(...u) {
                        super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, I.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                u && u(e), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, I.G)(this.props.soundClick);
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
                            a = u.side,
                            s = u.type,
                            o = u.classNames,
                            i = u.onMouseEnter,
                            l = u.onMouseLeave,
                            c = u.onMouseDown,
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
                                })(u, U)),
                            F = g()(H.base, H[`base__${s}`], H[`base__${a}`], null == o ? void 0 : o.base),
                            d = g()(H.icon, H[`icon__${s}`], H[`icon__${a}`], null == o ? void 0 : o.icon),
                            D = g()(H.glow, null == o ? void 0 : o.glow),
                            m = g()(H.caption, H[`caption__${s}`], null == o ? void 0 : o.caption),
                            B = g()(H.goto, null == o ? void 0 : o.goto);
                        return r().createElement(
                            'div',
                            W(
                                {
                                    className: F,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                A,
                            ),
                            'info' !== s && r().createElement('div', { className: H.shine }),
                            r().createElement('div', { className: d }, r().createElement('div', { className: D })),
                            r().createElement('div', { className: m }, e),
                            n && r().createElement('div', { className: B }, n),
                        );
                    }
                }
                G.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var $ = t(5521),
                    z = t(9916);
                const V = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function q(u = $.n.NONE, e = V, t = !1, r = !1) {
                    (0, n.useEffect)(() => {
                        if (u !== $.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === u) {
                                if (!r && s.O.view.isEventHandled()) return;
                                s.O.view.setEventHandled(), e(n), t && n.stopPropagation();
                            }
                        }
                    }, [e, u, t, r]);
                }
                var j = t(3403);
                function X() {
                    return !1;
                }
                console.log;
                var Y = t(9174);
                function K(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (u) {
                                if ('string' == typeof u) return Z(u, e);
                                var t = {}.toString.call(u).slice(8, -1);
                                return (
                                    'Object' === t && u.constructor && (t = u.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(u)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? Z(u, e)
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
                function Z(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, n = Array(e); t < e; t++) n[t] = u[t];
                    return n;
                }
                const Q = (u) => (0 === u ? window : window.subViews.get(u));
                function J(u, e) {
                    var t;
                    if (!(e >= u.length)) return Array.isArray(u) ? u[e] : null == (t = u[e]) ? void 0 : t.value;
                }
                function uu(u, e) {
                    return Array.isArray(u) ? u.map(e) : u.map((u, t, n) => e(null == u ? void 0 : u.value, t, n));
                }
                var eu = t(3946);
                let tu, nu, ru;
                !(function (u) {
                    (u.EntryPoint = 'ENTRY_POINT'),
                        (u.InfoPage = 'INFO_PAGE'),
                        (u.Rewards = 'REWARDS'),
                        (u.HasBoxesView = 'HAS_BOXES_VIEW');
                })(tu || (tu = {})),
                    (function (u) {
                        (u.Videos = 'videos'),
                            (u.Images = 'images'),
                            (u.Texts = 'texts'),
                            (u.DynamicVideos = 'dynamicVideos'),
                            (u.DynamicImages = 'dynamicImages'),
                            (u.DynamicTexts = 'dynamicTexts');
                    })(nu || (nu = {})),
                    (function (u) {
                        u.InfoPage = 'infoPage';
                    })(ru || (ru = {}));
                const au = (u, e) => {
                        let t = u;
                        const n = e.split('.');
                        for (let u = 0; u < n.length; u++) {
                            if (!t) return '';
                            if (('string' != typeof t && (t = t.$dyn(n[u])), 'string' == typeof t)) return t;
                        }
                        return '';
                    },
                    su = (u, e) => {
                        let t = u;
                        const n = e.split('.');
                        for (let u = 0; u < n.length && t; u++) {
                            const e = t.$dyn(n[u]);
                            (e && 'object' != typeof e) || (t = e);
                        }
                        return t;
                    },
                    ou = (u, e) => {
                        if (e.includes('.dynamic.')) {
                            const t = e.replace('dynamic.', '');
                            return su(u, t);
                        }
                        return au(u, e);
                    },
                    iu = ({ type: u, filePath: e, eventName: t }, n = !1) => {
                        const r = ((u, e, t) => {
                                const n = 'gui.maps.icons.lootBoxSystem.customizable',
                                    r = 'lootbox.customizable';
                                switch (u) {
                                    case nu.Images:
                                    case nu.DynamicImages:
                                        return {
                                            parent: R.images,
                                            path: `${n}.${t}.${e}`,
                                            defaultPath: `${n}.default.${e}`,
                                        };
                                    case nu.Videos:
                                    case nu.DynamicVideos:
                                        return {
                                            parent: R.videos,
                                            path: `${r}.${t}.${e}`,
                                            defaultPath: `${r}.default.${e}`,
                                        };
                                    case nu.Texts:
                                    case nu.DynamicTexts:
                                        return {
                                            parent: R.strings,
                                            path: `lootbox_${t}.${e}`,
                                            defaultPath: `lootbox_system.${e}`,
                                        };
                                    default:
                                        return (
                                            console.error(`Unreachable code: unknown ResourceType ${u}`),
                                            { parent: '', path: '', defaultPath: '' }
                                        );
                                }
                            })(u, e, t),
                            a = r.parent,
                            s = r.path,
                            o = r.defaultPath;
                        return a
                            ? { eventResource: n ? su(a, s) : ou(a, s), defaultResource: n ? su(a, o) : ou(a, o) }
                            : null;
                    },
                    lu = ({ type: u, filePath: e, eventName: t }) => {
                        const n = iu({ type: u, filePath: e, eventName: t });
                        if (!n || (!n.eventResource && !n.defaultResource))
                            return console.info(`Unreachable code: unknown resource (${u} ${t} ${e})`), '';
                        const r = n.eventResource,
                            a = n.defaultResource;
                        return r || a;
                    },
                    cu = (u, e) =>
                        Object.keys(u).reduce((t, n) => {
                            const r = u[n];
                            return r
                                ? ((t[n] = ((u, e, t) =>
                                      Object.keys(u).reduce(
                                          (n, r) => ((n[r] = lu({ type: e, filePath: u[r], eventName: t })), n),
                                          {},
                                      ))(r, n, e)),
                                  t)
                                : t;
                        }, {}),
                    Eu = (u, e, t) => (u || e ? u || e : (console.warn(`Not found ${t}`), '')),
                    Au = (u, e, t) =>
                        Object.keys(u).reduce((n, r) => {
                            const a = u[r];
                            return (
                                (n[r] = ((u, e, t) => {
                                    const n = `resource type: ${u}, path: ${e}`,
                                        r = iu({ type: u, filePath: e, eventName: t }, !0);
                                    return ((u, e, t) => ({
                                        dynOpt: (n, r = 'default') => {
                                            const a =
                                                    (null == e ? void 0 : e.$dyn(n)) ||
                                                    (null == e ? void 0 : e.$dyn(r)),
                                                s = null == u ? void 0 : u.$dyn(r);
                                            return Eu(a, s, t);
                                        },
                                        dyn: (n) => {
                                            const r = null == e ? void 0 : e.$dyn(n),
                                                a = null == u ? void 0 : u.$dyn(n);
                                            return Eu(r, a, t);
                                        },
                                        plural: (n, r) => {
                                            const a = null == e ? void 0 : e.$plural(n, r),
                                                s = null == u ? void 0 : u.$plural(n, r);
                                            return Eu(a, s, t);
                                        },
                                    }))(
                                        null == r ? void 0 : r.defaultResource,
                                        null == r ? void 0 : r.eventResource,
                                        n,
                                    );
                                })(e, a, t)),
                                n
                            );
                        }, {}),
                    Fu = {
                        images: {
                            background: 'autoOpenView.background',
                            scrollLipTop: 'autoOpenView.scrollLipTop',
                            previewIcon: 'common.previewIcon',
                            compensationIcon: 'common.compensationIcon',
                        },
                        texts: {
                            closeButton: 'common.closeButton',
                            title: 'autoOpenView.title',
                            rewardsMultiplier: 'common.rewards.multiplier',
                            submitButtonText: 'autoOpenView.submitButtonText',
                            subTitle: 'autoOpenView.subTitle',
                        },
                    },
                    du = {
                        dynamicTexts: {
                            rewardsPremiumDay: 'autoOpenView.rewards.premiumDay',
                            boxCount: 'autoOpenView.boxCount',
                        },
                    },
                    Du = ((u, e) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: a = 'real', options: o, children: i, mocks: l }) {
                                const c = (0, n.useRef)([]),
                                    E = (t, n, r) => {
                                        var a;
                                        const o = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = Q,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function a(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? r.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = r.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const o = (u) => {
                                                    const r = t(e),
                                                        a = n.split('.').reduce((u, e) => u[e], r);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? a
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const i = 'string' == typeof a ? `${n}.${a}` : n,
                                                            l = s.O.view.addModelObserver(i, e, !0);
                                                        return r.set(l, t), u && t(o(a)), l;
                                                    },
                                                    readByPath: o,
                                                    createCallback: (u, e) => {
                                                        const t = o(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = o(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var u, t = K(r.keys()); !(u = t()).done; ) a(u.value, e);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(n),
                                            i =
                                                'real' === t
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (a = null == r ? void 0 : r.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            l = (u) =>
                                                'mocks' === t ? (null == r ? void 0 : r.getter(u)) : i.readByPath(u),
                                            E = (u) => c.current.push(u),
                                            A = u({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (u, e) => {
                                                        const n = null != e ? e : l(u),
                                                            r = Y.LO.box(n, { equals: X });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, Y.aD)((u) => r.set(u)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (u, e) => {
                                                        const n = null != e ? e : l(u),
                                                            r = Y.LO.box(n, { equals: X });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, Y.aD)((u) => r.set(u)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (u, e) => {
                                                        const n = l(e);
                                                        if (Array.isArray(u)) {
                                                            const r = u.reduce(
                                                                (u, e) => ((u[e] = Y.LO.box(n[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, Y.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                r[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = u,
                                                                a = Object.entries(r),
                                                                s = a.reduce(
                                                                    (u, [e, t]) => ((u[t] = Y.LO.box(n[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, Y.aD)((u) => {
                                                                            a.forEach(([e, t]) => {
                                                                                s[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: E,
                                            }),
                                            F = { mode: t, model: A, externalModel: i, cleanup: E };
                                        return {
                                            model: A,
                                            controls: 'mocks' === t && r ? r.controls(F) : e(F),
                                            externalModel: i,
                                            mode: t,
                                        };
                                    },
                                    A = (0, n.useRef)(!1),
                                    F = (0, n.useState)(a),
                                    d = F[0],
                                    D = F[1],
                                    m = (0, n.useState)(() => E(a, o, l)),
                                    B = m[0],
                                    C = m[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        A.current ? C(E(d, o, l)) : (A.current = !0);
                                    }, [l, d, o]),
                                    (0, n.useEffect)(() => {
                                        D(a);
                                    }, [a]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            B.externalModel.dispose(), c.current.forEach((u) => u());
                                        },
                                        [B],
                                    ),
                                    r().createElement(t.Provider, { value: B }, i)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(
                        ({ observableModel: u }) => {
                            const e = u.object().get().eventName,
                                t = Object.assign({}, u.primitives(['boxesQuantity']), {
                                    rewardRows: u.array('rewardRows'),
                                    box: u.array('box'),
                                }),
                                n = (0, eu.Om)((u) => J(t.rewardRows.get(), u)),
                                r = (0, eu.Om)((u) => {
                                    const e = n(u);
                                    return null == e ? void 0 : e.rewards.items;
                                }),
                                a = (0, eu.Om)(() => cu(Fu, e), { equals: X }),
                                s = (0, eu.Om)(
                                    () =>
                                        ((u, e) =>
                                            Object.keys(u).reduce((t, n) => {
                                                const r = u[n];
                                                return r ? ((t[n] = Au(r, n, e)), t) : t;
                                            }, {}))(du, e),
                                    { equals: X },
                                ),
                                o = 'lootbox_system' === e;
                            return Object.assign({}, t, {
                                eventName: e,
                                finishedEvent: o,
                                computes: { resources: a, dynamicResources: s, getRewards: n, getRewardsList: r },
                            });
                        },
                        ({ externalModel: u }) => ({
                            close: u.createCallbackNoArgs('onClose'),
                            showPreview: u.createCallback((u) => u, 'onPreview'),
                        }),
                    ),
                    mu = Du[0],
                    Bu = Du[1],
                    Cu = {
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
                let _u, gu;
                !(function (u) {
                    (u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost');
                })(_u || (_u = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium'), (u.large = 'large');
                    })(gu || (gu = {}));
                const pu = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: a,
                    disabled: s,
                    mixClass: o,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: A,
                    onMouseUp: F,
                    onMouseLeave: d,
                    onClick: D,
                }) => {
                    const m = (0, n.useRef)(null),
                        B = (0, n.useState)(t),
                        C = B[0],
                        _ = B[1],
                        p = (0, n.useState)(!1),
                        h = p[0],
                        f = p[1];
                    return (
                        (0, n.useEffect)(() => {
                            function u(u) {
                                C && null !== m.current && !m.current.contains(u.target) && _(!1);
                            }
                            return (
                                document.addEventListener('mousedown', u),
                                () => {
                                    document.removeEventListener('mousedown', u);
                                }
                            );
                        }, [C]),
                        (0, n.useEffect)(() => {
                            _(t);
                        }, [t]),
                        r().createElement(
                            'div',
                            {
                                ref: m,
                                className: g()(
                                    Cu.base,
                                    Cu[`base__${a}`],
                                    s && Cu.base__disabled,
                                    e && Cu[`base__${e}`],
                                    C && Cu.base__focus,
                                    h && Cu.base__highlightActive,
                                    o,
                                ),
                                onMouseEnter: function (u) {
                                    s || (null !== i && (0, I.G)(i), c && c(u));
                                },
                                onMouseMove: function (u) {
                                    E && E(u);
                                },
                                onMouseUp: function (u) {
                                    s || (F && F(u), f(!1));
                                },
                                onMouseDown: function (u) {
                                    s ||
                                        (null !== l && (0, I.G)(l),
                                        A && A(u),
                                        t && (s || (m.current && (m.current.focus(), _(!0)))),
                                        f(!0));
                                },
                                onMouseLeave: function (u) {
                                    s || (d && d(u), f(!1));
                                },
                                onClick: function (u) {
                                    s || (D && D(u));
                                },
                            },
                            a !== _u.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: Cu.back }),
                                    r().createElement('span', { className: Cu.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: g()(Cu.state, Cu.state__default) },
                                r().createElement('span', { className: Cu.stateDisabled }),
                                r().createElement('span', { className: Cu.stateHighlightHover }),
                                r().createElement('span', { className: Cu.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: Cu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                pu.defaultProps = { type: _u.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const hu = pu;
                var fu = t(1281);
                let vu;
                function bu(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(vu || (vu = {}));
                const wu = (u) => u.replace(/&nbsp;/g, ' '),
                    Su = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    yu = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    xu = (u, e, t = vu.left) => u.split(e).reduce(t === vu.left ? Su : yu, []),
                    Ru = (() => {
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
                    Pu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Tu = (u, e = vu.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (Pu.includes(t)) return Ru(u);
                        if ('ja' === t) {
                            return (0, fu.D4)()
                                .parse(u)
                                .map((u) => wu(u));
                        }
                        return ((u, e = vu.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = wu(u);
                            return xu(r, /( )/, e).forEach((u) => (t = t.concat(xu(u, n, vu.left)))), t;
                        })(u, e);
                    },
                    Lu = 'FormatText_base_d0',
                    Mu = ({ binding: u, text: e = '', classMix: t, alignment: a = vu.left, formatWithBrackets: s }) => {
                        if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                        const o = s && u ? bu(e, u) : e;
                        return r().createElement(
                            n.Fragment,
                            null,
                            o.split('\n').map((e, s) =>
                                r().createElement(
                                    'div',
                                    { className: g()(Lu, t), key: `${e}-${s}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : Tu(u, e))))(
                                        e,
                                        a,
                                        u,
                                    ).map((u, e) => r().createElement(n.Fragment, { key: `${e}-${u}` }, u)),
                                ),
                            ),
                        );
                    };
                var Ou = t(7701),
                    ku = t(3958),
                    Nu = t(5294);
                let Iu, Hu, Uu, Wu, Gu, $u, zu, Vu;
                !(function (u) {
                    (u.Items = 'items'),
                        (u.Equipment = 'equipment'),
                        (u.Xp = 'xp'),
                        (u.XpFactor = 'xpFactor'),
                        (u.Blueprints = 'blueprints'),
                        (u.BlueprintsAny = 'blueprintsAny'),
                        (u.Goodies = 'goodies'),
                        (u.Berths = 'berths'),
                        (u.Slots = 'slots'),
                        (u.Tokens = 'tokens'),
                        (u.CrewSkins = 'crewSkins'),
                        (u.CrewBooks = 'crewBooks'),
                        (u.Customizations = 'customizations'),
                        (u.CreditsFactor = 'creditsFactor'),
                        (u.Tankman = 'tankman'),
                        (u.Tankwoman = 'tankwoman'),
                        (u.TankmenXp = 'tankmenXP'),
                        (u.TankmenXpFactor = 'tankmenXPFactor'),
                        (u.FreeXpFactor = 'freeXPFactor'),
                        (u.BattleToken = 'battleToken'),
                        (u.PremiumUniversal = 'premium_universal'),
                        (u.Gold = 'gold'),
                        (u.Credits = 'credits'),
                        (u.Crystal = 'crystal'),
                        (u.FreeXp = 'freeXP'),
                        (u.Premium = 'premium'),
                        (u.PremiumPlus = 'premium_plus'),
                        (u.BattlePassPoints = 'battlePassPoints'),
                        (u.BattlePassSelectToken = 'battlePassSelectToken'),
                        (u.StyleProgressToken = 'styleProgressToken'),
                        (u.TmanToken = 'tmanToken'),
                        (u.NaturalCover = 'naturalCover'),
                        (u.BpCoin = 'bpcoin'),
                        (u.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (u.BattleBadge = 'dossier_badge'),
                        (u.NewYearInvoice = 'newYearInvoice'),
                        (u.NewYearSlot = 'newYearSlot'),
                        (u.BonusX5 = 'battle_bonus_x5'),
                        (u.CrewBonusX3 = 'crew_bonus_x3'),
                        (u.Vehicles = 'vehicles'),
                        (u.EpicSelectToken = 'epicSelectToken'),
                        (u.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (u.DeluxeGift = 'deluxe_gift'),
                        (u.BattleBoosterGift = 'battleBooster_gift'),
                        (u.OptionalDevice = 'optionalDevice'),
                        (u.EquipCoin = 'equipCoin'),
                        (u.LootBox = 'lootBox'),
                        (u.BrCoin = 'brcoin');
                })(Iu || (Iu = {})),
                    (function (u) {
                        (u.Gold = 'gold'),
                            (u.Credits = 'credits'),
                            (u.Crystal = 'crystal'),
                            (u.Premium = 'premium'),
                            (u.PremiumPlus = 'premium_plus'),
                            (u.Vehicles = 'vehicles'),
                            (u.Customizations = 'customizations'),
                            (u.Blueprints = 'blueprints'),
                            (u.BlueprintsAny = 'blueprintsAny'),
                            (u.BlueprintsFinal = 'finalBlueprints'),
                            (u.Goodies = 'goodies'),
                            (u.CrewSkins = 'crewSkins'),
                            (u.Xp = 'xp'),
                            (u.XpFactor = 'xpFactor'),
                            (u.FreeXp = 'freeXP'),
                            (u.FreeXPFactor = 'freeXPFactor'),
                            (u.TankmenXP = 'tankmenXP'),
                            (u.TankmenXPFactor = 'tankmenXPFactor'),
                            (u.DailyXPFactor = 'dailyXPFactor'),
                            (u.CreditsFactor = 'creditsFactor'),
                            (u.Items = 'items'),
                            (u.StrBonus = 'strBonus'),
                            (u.Groups = 'groups'),
                            (u.Berths = 'berths'),
                            (u.Slots = 'slots'),
                            (u.Meta = 'meta'),
                            (u.Tokens = 'tokens'),
                            (u.Dossier = 'dossier'),
                            (u.OneOf = 'oneof'),
                            (u.PremiumUniversal = 'premium_universal'),
                            (u.BadgesGroup = 'badgesGroup'),
                            (u.Entitlements = 'entitlements'),
                            (u.RankedDailyBattles = 'rankedDailyBattles'),
                            (u.RankedBonusBattles = 'rankedBonusBattles'),
                            (u.BattlePassPoints = 'battlePassPoints'),
                            (u.BattleBadge = 'dossier_badge'),
                            (u.BattleAchievement = 'dossier_achievement'),
                            (u.EquipCoin = 'equipCoin');
                    })(Hu || (Hu = {})),
                    (function (u) {
                        (u.Big = 'big'),
                            (u.Small = 'small'),
                            (u.Mini = 'mini'),
                            (u.S600x450 = 's600x450'),
                            (u.S400x300 = 's400x300'),
                            (u.S296x222 = 's296x222'),
                            (u.S232x174 = 's232x174'),
                            (u.S180x135 = 's180x135'),
                            (u.S128x100 = 's128x100'),
                            (u.S80x80 = 's80x80'),
                            (u.S64x64 = 's64x64'),
                            (u.S48x48 = 's48x48');
                    })(Uu || (Uu = {})),
                    (function (u) {
                        (u.MULTI = 'multi'),
                            (u.CURRENCY = 'currency'),
                            (u.PREMIUM_PLUS = 'premium_plus'),
                            (u.NUMBER = 'number'),
                            (u.STRING = 'string');
                    })(Wu || (Wu = {})),
                    (function (u) {
                        (u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (u.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (u.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(Gu || (Gu = {})),
                    (function (u) {
                        u.BATTLE_BOOSTER = 'battleBooster';
                    })($u || ($u = {})),
                    (function (u) {
                        (u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (u.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (u.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(zu || (zu = {})),
                    (function (u) {
                        (u[(u.Engraving = 0)] = 'Engraving'), (u[(u.Background = 1)] = 'Background');
                    })(Vu || (Vu = {}));
                class qu extends r().PureComponent {
                    render() {
                        let u;
                        if ('gold' === this.props.format) u = z.B3.GOLD;
                        else u = z.B3.INTEGRAL;
                        const e = z.Z5.getNumberFormat(this.props.value, u);
                        return void 0 !== this.props.value && void 0 !== e ? e : null;
                    }
                }
                qu.defaultProps = { format: 'integral' };
                const ju = [
                        Iu.Items,
                        Iu.Equipment,
                        Iu.Xp,
                        Iu.XpFactor,
                        Iu.Blueprints,
                        Iu.BlueprintsAny,
                        Iu.Goodies,
                        Iu.Berths,
                        Iu.Slots,
                        Iu.Tokens,
                        Iu.CrewSkins,
                        Iu.CrewBooks,
                        Iu.Customizations,
                        Iu.CreditsFactor,
                        Iu.TankmenXp,
                        Iu.TankmenXpFactor,
                        Iu.FreeXpFactor,
                        Iu.BattleToken,
                        Iu.PremiumUniversal,
                        Iu.NaturalCover,
                        Iu.BpCoin,
                        Iu.BattlePassSelectToken,
                        Iu.BattlaPassFinalAchievement,
                        Iu.BattleBadge,
                        Iu.BonusX5,
                        Iu.CrewBonusX3,
                        Iu.NewYearInvoice,
                        Iu.EpicSelectToken,
                        Iu.Comp7TokenWeeklyReward,
                        Iu.DeluxeGift,
                        Iu.BattleBoosterGift,
                        Iu.OptionalDevice,
                    ],
                    Xu = [Iu.Gold, Iu.Credits, Iu.Crystal, Iu.FreeXp],
                    Yu = [Iu.BattlePassPoints, Iu.EquipCoin],
                    Ku = [Iu.PremiumPlus, Iu.Premium],
                    Zu =
                        (Uu.Small,
                        Uu.Big,
                        [
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
                        ]);
                function Qu(u) {
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
                const Ju = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: z.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    ue = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            r = u.args,
                            a = u.onMouseEnter,
                            s = u.onMouseLeave,
                            o = u.onMouseDown,
                            i = u.onClick,
                            l = u.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = u.ignoreMouseClick,
                            A = void 0 !== E && E,
                            F = u.decoratorId,
                            d = void 0 === F ? 0 : F,
                            D = u.isEnabled,
                            m = void 0 === D || D,
                            B = u.targetId,
                            C = void 0 === B ? 0 : B,
                            _ = u.onShow,
                            g = u.onHide,
                            p = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, Zu);
                        const h = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, n.useMemo)(
                                () =>
                                    C ||
                                    ((u = 1) => {
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
                                    })().resId,
                                [C],
                            ),
                            v = (0, n.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (Ju(t, d, { isMouseEvent: !0, on: !0, arguments: Qu(r) }, f),
                                    _ && _(),
                                    (h.current.isVisible = !0));
                            }, [t, d, r, f, _]),
                            b = (0, n.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const u = h.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (h.current.timeoutId = 0)),
                                        Ju(t, d, { on: !1 }, f),
                                        h.current.isVisible && g && g(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, d, f, g]),
                            w = (0, n.useCallback)((u) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(h.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const u = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', w, { capture: !0 }),
                                        u && window.clearTimeout(u);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === m && b();
                            }, [m, b]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        window.removeEventListener('mouseleave', b), b();
                                    }
                                ),
                                [b],
                            );
                        return m
                            ? (0, n.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((S = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((h.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      a && a(u),
                                                      S && S(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              b(), null == s || s(e), null == u || u(e);
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              !1 === A && b(), null == i || i(e), null == u || u(e);
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              !1 === A && b(), null == o || o(e), null == u || u(e);
                                          })(e.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : e;
                        var S;
                    };
                var ee = t(3633);
                const te = (u) => {
                        switch (u) {
                            case Uu.S600x450:
                                return 'c_600x450';
                            case Uu.S180x135:
                                return 'c_180x135';
                            default:
                                return u;
                        }
                    },
                    ne = (u, e = Uu.S180x135, t = !1) => {
                        const n = t ? u.compensation : u,
                            r = n.name,
                            a = n.icon,
                            s = n.value,
                            o = u.id,
                            i = u.isRent;
                        switch (r) {
                            case 'vehicles':
                                return i
                                    ? `R.images.gui.maps.icons.quests.bonuses.${e}.vehicles_rent`
                                    : a
                                      ? `R.images.gui.maps.shop.vehicles.${te(e)}.${a}`
                                      : `R.images.gui.maps.icons.quests.bonuses.${e}.vehicles`;
                            case 'customizations': {
                                const u = au(
                                    R.images,
                                    `R.images.gui.maps.icons.quests.bonuses.${e}.${a}${o ? '_' + o : ''}`,
                                );
                                return u || `R.images.gui.maps.icons.quests.bonuses.${e}.${a}`;
                            }
                            case 'basic':
                            case 'plus':
                            case 'premium':
                            case 'premium_plus':
                            case 'items':
                            case 'tokens':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${a}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                            case 'randomNationalBlueprint':
                                return `R.images.gui.maps.icons.blueprints.fragment.${e}.${a}`;
                            case 'crewBooks':
                            case 'randomNationalBrochure':
                            case 'randomNationalGuide':
                            case 'randomNationalCrewBook':
                                return `R.images.gui.maps.icons.crewBooks.books.${e}.${a}`;
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${te(e)}.${a}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${te(e)}.${a}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.credits`;
                            case 'crystal':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.crystal`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.freeXP`;
                            case 'tmanToken':
                            case 'battlePassSelectToken': {
                                const u = au(R.images, `gui.maps.icons.quests.bonuses.${e}.${a}_${s}`);
                                return u || `R.images.gui.maps.icons.quests.bonuses.${e}.${a}`;
                            }
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.style_3d`;
                            case 'lootBox': {
                                const u = au(R.images, `gui.maps.icons.quests.bonuses.${e}.lootBox_${a}`);
                                return u || `R.images.gui.maps.icons.quests.bonuses.${e}.lootBox_default`;
                            }
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${te(e)}.${a}`;
                        }
                    },
                    re = ['style', 'style_3d'];
                let ae;
                !(function (u) {
                    (u.Disable = 'disable'), (u.Active = 'active'), (u.Default = 'default');
                })(ae || (ae = {}));
                const se = {
                        base: 'Reward_base_99',
                        wrapper: 'Reward_wrapper_d2',
                        icon: 'Reward_icon_b8',
                        overlay: 'Reward_overlay_25',
                        count: 'Reward_count_f0',
                        loupe: 'Reward_loupe_24',
                        label: 'Reward_label_8f',
                        label__credits: 'Reward_label__credits_b9',
                        label__vehicles: 'Reward_label__vehicles_77',
                        label__gold: 'Reward_label__gold_52',
                        label__premium: 'Reward_label__premium_f2',
                        label__crystal: 'Reward_label__crystal_a1',
                        label__freeXP: 'Reward_label__freeXP_ae',
                        label__premiumTank: 'Reward_label__premiumTank_ae',
                        label__customizations: 'Reward_label__customizations_5e',
                        accentGold: 'Reward_accentGold_cc',
                        iconCompensation: 'Reward_iconCompensation_1b',
                    },
                    oe = Uu.Big,
                    ie = (0, j.Pi)(({ reward: u }) => {
                        const e = Bu(),
                            t = e.model,
                            n = e.controls,
                            a = u.name,
                            s = u.id,
                            o = u.tooltipId,
                            i = u.tooltipContentId,
                            l = u.count,
                            c = u.compensation,
                            E = u.isCompensation,
                            A = u.value,
                            F = u.styleID,
                            d = u.overlayType,
                            D = t.computes.resources(),
                            m = D.images,
                            B = D.texts,
                            C = t.computes.dynamicResources().dynamicTexts,
                            _ = (() => {
                                switch (a) {
                                    case Iu.Vehicles:
                                        return ne(Object.assign({}, u, { id: 0, icon: '' }), oe, E);
                                    case Iu.PremiumPlus:
                                        return ne(Object.assign({}, u, { id: 0, icon: 'premium_plus_universal' }), oe);
                                    default:
                                        return ne(Object.assign({}, u, { id: 0 }), oe);
                                }
                            })(),
                            p =
                                ((h = a),
                                ju.includes(h)
                                    ? Wu.MULTI
                                    : Xu.includes(h)
                                      ? Wu.CURRENCY
                                      : Yu.includes(h)
                                        ? Wu.NUMBER
                                        : Ku.includes(h)
                                          ? Wu.PREMIUM_PLUS
                                          : Wu.STRING);
                        var h;
                        const f = E ? c.label : u.label,
                            v = u.name === Iu.Customizations,
                            b = u.name === Iu.PremiumPlus,
                            w = u.name === Iu.TmanToken,
                            S =
                                v || b || w
                                    ? null
                                    : ((u, e) => {
                                          if (void 0 === u) return null;
                                          switch (e) {
                                              case Wu.MULTI: {
                                                  const e = Number(u);
                                                  return isFinite(e) && e > 1 ? `x${Math.floor(e)}` : null;
                                              }
                                              case Wu.CURRENCY:
                                              case Wu.NUMBER:
                                                  return r().createElement(qu, {
                                                      format: 'integral',
                                                      value: Number(u),
                                                  });
                                              case Wu.PREMIUM_PLUS: {
                                                  const e = Number(u);
                                                  return isNaN(e) ? u : null;
                                              }
                                              default:
                                                  return u;
                                          }
                                      })(A || f, p);
                        return r().createElement(
                            'div',
                            { className: se.base },
                            r().createElement(
                                ue,
                                { ignoreShowDelay: !0, contentId: Number(i), args: { tooltipId: o } },
                                r().createElement(
                                    'div',
                                    { className: se.wrapper },
                                    r().createElement(
                                        'div',
                                        { className: se.icon, style: { backgroundImage: `url(${_})` } },
                                        E &&
                                            r().createElement('div', {
                                                className: se.iconCompensation,
                                                style: { backgroundImage: `url(${m.compensationIcon})` },
                                            }),
                                        d &&
                                            r().createElement('div', {
                                                className: se.overlay,
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${oe}.${d}_overlay)`,
                                                },
                                            }),
                                        ((u) => {
                                            const e = u.name,
                                                t = u.icon;
                                            switch (e) {
                                                case Iu.Vehicles:
                                                    return !0;
                                                case Iu.Customizations:
                                                    return re.includes(t);
                                                default:
                                                    return !1;
                                            }
                                        })(u) &&
                                            r().createElement(ee.k, {
                                                icon: { img: m.previewIcon },
                                                onClick: () =>
                                                    n.showPreview({ bonusType: a, bonusId: s || '', styleID: F }),
                                            }),
                                    ),
                                    l > 1
                                        ? r().createElement(
                                              'div',
                                              { className: se.count },
                                              ((y = B.rewardsMultiplier),
                                              (x = { count: l }),
                                              y.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                                                  const e = 0 === u.indexOf('%') ? 2 : 1;
                                                  return String(x[u.slice(e, -e)]);
                                              })),
                                          )
                                        : r().createElement(
                                              r().Fragment,
                                              null,
                                              S &&
                                                  r().createElement(
                                                      'div',
                                                      { className: g()(se.label, se[`label__${u.name}`]) },
                                                      S,
                                                  ),
                                              v &&
                                                  r().createElement(
                                                      'div',
                                                      { className: g()(se.label, se.label__customizations) },
                                                      u.label,
                                                  ),
                                              b &&
                                                  r().createElement(
                                                      'div',
                                                      { className: g()(se.label, se.label__premium) },
                                                      r().createElement('span', { className: se.accentGold }, u.value),
                                                      ' ',
                                                      C.rewardsPremiumDay.plural('premiumDay', Number(u.value)),
                                                  ),
                                          ),
                                ),
                            ),
                        );
                        var y, x;
                    }),
                    le = 'RewardRow_base_ba',
                    ce = 'RewardRow_heading_fc',
                    Ee = 'RewardRow_label_54',
                    Ae = 'RewardRow_count_9b',
                    Fe = 'RewardRow_content_79',
                    de = 'RewardRow_reward_05',
                    De = (0, j.Pi)(({ rowIndex: u, label: e, rewardsCount: t }) => {
                        const n = Bu().model.computes.getRewardsList(u);
                        return r().createElement(
                            'div',
                            { className: le },
                            r().createElement(
                                'div',
                                { className: ce },
                                r().createElement('div', { className: Ee }, e),
                                r().createElement('div', { className: Ae }, t),
                            ),
                            r().createElement(
                                'div',
                                { className: Fe },
                                n &&
                                    uu(n, (u, e) =>
                                        r().createElement(
                                            'div',
                                            { className: de, key: e },
                                            r().createElement(ie, { reward: u }),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    me = 'Content_base_68',
                    Be = 'Content_header_a3',
                    Ce = 'Content_header__topDiff_5c',
                    _e = 'Content_subTitle_94',
                    ge = 'Content_scrollArea_af',
                    pe = 'Content_scrollArea__finished_43',
                    he = 'Content_rewardsRows_64',
                    fe = 'Content_footer_0a',
                    ve = (0, j.Pi)(() => {
                        const u = Bu(),
                            e = u.model,
                            t = u.controls,
                            n = e.computes.resources(),
                            a = n.texts,
                            s = n.images,
                            o = e.computes.dynamicResources().dynamicTexts,
                            i = e.boxesQuantity.get(),
                            l = (0, Ou.c4)();
                        return r().createElement(
                            'div',
                            { className: me },
                            r().createElement(
                                'div',
                                { className: g()(Be, !e.finishedEvent && Ce) },
                                !e.finishedEvent &&
                                    r().createElement(
                                        'div',
                                        { className: _e },
                                        r().createElement(Mu, {
                                            text: a.subTitle,
                                            binding: {
                                                boxCount: r().createElement(Mu, {
                                                    text: o.boxCount.plural('boxCount', i),
                                                    binding: { count: i },
                                                }),
                                            },
                                        }),
                                    ),
                                r().createElement(Nu.D, { text: a.title }),
                            ),
                            r().createElement(
                                'div',
                                { className: g()(ge, !e.finishedEvent && pe) },
                                r().createElement(
                                    ku.z,
                                    { scrollApi: l, lipImage: s.scrollLipTop },
                                    r().createElement(
                                        'div',
                                        { className: he },
                                        uu(e.rewardRows.get(), (u, e) =>
                                            r().createElement(De, {
                                                key: `${u.label}_${e}`,
                                                label: u.label,
                                                rewardsCount: u.rewardsCount,
                                                rowIndex: e,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: fe },
                                r().createElement(
                                    hu,
                                    { type: _u.primary, size: gu.medium, onClick: t.close },
                                    a.submitButtonText,
                                ),
                            ),
                        );
                    }),
                    be = 'App_base_af',
                    we = 'App_closeButton_02',
                    Se = (0, j.Pi)(() => {
                        const u = Bu(),
                            e = u.model,
                            t = u.controls,
                            n = e.computes.resources(),
                            a = n.images,
                            s = n.texts;
                        var o;
                        return (
                            (o = t.close),
                            q($.n.ESCAPE, o),
                            r().createElement(
                                'div',
                                { className: be, style: { backgroundImage: `url(${a.background})` } },
                                r().createElement(
                                    'div',
                                    { className: we },
                                    r().createElement(G, {
                                        caption: s.closeButton,
                                        type: 'close',
                                        side: 'right',
                                        onClick: t.close,
                                    }),
                                ),
                                r().createElement(ve, null),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    N().render(
                        r().createElement(mu, null, r().createElement(O, null, r().createElement(Se, null))),
                        document.getElementById('root'),
                    );
                });
            },
            3633: (u, e, t) => {
                'use strict';
                t.d(e, { k: () => c });
                var n = t(6483),
                    r = t.n(n),
                    a = t(514),
                    s = t(6179),
                    o = t.n(s);
                const i = 'LoupeButton_base_bb',
                    l = 'LoupeButton_icon_07',
                    c = ({ onClick: u, icon: e, className: t = '' }) =>
                        o().createElement(
                            'div',
                            {
                                className: r()(i, t),
                                onMouseEnter: () => {
                                    a.hY.highlight();
                                },
                                onClick: u,
                            },
                            o().createElement('div', {
                                className: r()(l, e.className),
                                style: { backgroundImage: `url(${e.img})` },
                            }),
                        );
            },
            3958: (u, e, t) => {
                'use strict';
                t.d(e, { z: () => su });
                var n = {};
                t.r(n),
                    t.d(n, {
                        Area: () => T,
                        Bar: () => x,
                        DefaultScroll: () => P,
                        Direction: () => D.Nm,
                        defaultSettings: () => D.he,
                        useHorizontalScrollApi: () => m,
                    });
                var r = {};
                t.r(r), t.d(r, { Area: () => K, Bar: () => j, Default: () => Y, useVerticalScrollApi: () => L.c4 });
                var a = t(6483),
                    s = t.n(a),
                    o = t(1856),
                    i = t(6179),
                    l = t.n(i),
                    c = t(7515),
                    E = t(3138),
                    A = t(3815);
                function F(u, e, t = []) {
                    const n = (0, i.useRef)(0),
                        r = (0, i.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, i.useEffect)(() => r, [r]);
                    const a = (null != t ? t : []).concat([e]);
                    return [
                        (0, i.useCallback)((t) => {
                            (n.current = window.setInterval(() => u(t, !0), e)), u(t, !1);
                        }, a),
                        r,
                    ];
                }
                var d = t(7727),
                    D = t(7308);
                const m = (0, D.EO)({
                        getBounds: (u) => {
                            var e, t;
                            return [
                                0,
                                u.offsetWidth -
                                    (null != (e = null == (t = u.parentElement) ? void 0 : t.offsetWidth) ? e : 0),
                            ];
                        },
                        getContainerSize: (u) => u.offsetWidth,
                        getWrapperSize: (u) => u.offsetWidth,
                        setScrollPosition: (u, e) => {
                            u.style.transform = `translateX(-${e.value.scrollPosition}px)`;
                        },
                        getDirection: (u) => (u.deltaY > 1 ? D.Nm.Next : D.Nm.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    B = 'HorizontalBar_base_49',
                    C = 'HorizontalBar_base__nonActive_82',
                    _ = 'HorizontalBar_leftButton_5f',
                    g = 'HorizontalBar_rightButton_03',
                    p = 'HorizontalBar_track_0d',
                    h = 'HorizontalBar_thumb_fd',
                    f = 'HorizontalBar_rail_32',
                    v = 'disable',
                    b = { pending: !1, offset: 0 },
                    w = (u) => {
                        var e;
                        return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                    },
                    S = () => {},
                    y = (u, e) => Math.max(20, u.offsetWidth * e),
                    x = (0, i.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = w, onDrag: n = S }) => {
                        const r = (0, i.useRef)(null),
                            a = (0, i.useRef)(null),
                            m = (0, i.useRef)(null),
                            x = (0, i.useRef)(null),
                            R = (0, i.useRef)(null),
                            P = u.stepTimeout || 100,
                            T = (0, i.useState)(b),
                            L = T[0],
                            M = T[1],
                            O = (0, i.useCallback)(
                                (u) => {
                                    M(u),
                                        R.current && n({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: R.current });
                                },
                                [n],
                            ),
                            k = () => {
                                const e = x.current,
                                    t = R.current,
                                    n = u.getWrapperSize(),
                                    r = u.getContainerSize();
                                if (!(n && e && t && r)) return;
                                const s = u.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    i = (0, c.u)(0, 1, s / (r - n)),
                                    l = (e.offsetWidth - y(e, o)) * i;
                                (t.style.transform = `translateX(${0 | l}px)`),
                                    ((u) => {
                                        if (a.current && m.current && x.current && R.current) {
                                            if (0 === u)
                                                return a.current.classList.add(v), void m.current.classList.remove(v);
                                            if (
                                                ((e = x.current),
                                                (t = R.current),
                                                u - (e.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return a.current.classList.remove(v), void m.current.classList.add(v);
                                            var e, t;
                                            a.current.classList.remove(v), m.current.classList.remove(v);
                                        }
                                    })(l);
                            },
                            N = (0, A.z)(() => {
                                (() => {
                                    const e = R.current,
                                        t = x.current,
                                        n = u.getWrapperSize(),
                                        a = u.getContainerSize();
                                    if (!(a && e && n && t)) return;
                                    const s = Math.min(1, n / a);
                                    (e.style.width = `${y(t, s)}px`),
                                        (e.style.display = 'flex'),
                                        r.current &&
                                            (1 === s ? r.current.classList.add(C) : r.current.classList.remove(C));
                                })(),
                                    k();
                            });
                        (0, i.useEffect)(() => (0, o.v)(N)),
                            (0, i.useEffect)(
                                () =>
                                    (0, o.v)(() => {
                                        const e = () => {
                                            k();
                                        };
                                        let t = S;
                                        const n = () => {
                                            t(), (t = (0, o.v)(N));
                                        };
                                        return (
                                            u.events.on('recalculateContent', N),
                                            u.events.on('rest', e),
                                            u.events.on('change', e),
                                            u.events.on('resizeHandled', n),
                                            () => {
                                                t(),
                                                    u.events.off('recalculateContent', N),
                                                    u.events.off('rest', e),
                                                    u.events.off('change', e),
                                                    u.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [u],
                            ),
                            (0, i.useEffect)(() => {
                                if (!L.pending) return;
                                const e = E.O.client.events.mouse.move(([e, t]) => {
                                        var r;
                                        const a = u.contentRef.current,
                                            s = u.wrapperRef.current;
                                        if (!a || !s) return;
                                        const o = x.current,
                                            i = R.current;
                                        if (!o || !i) return;
                                        if ('inside' === t && e.clientX < 0) return;
                                        const l = e.clientX - L.offset - o.getBoundingClientRect().x,
                                            c = (l / o.offsetWidth) * (null != (r = u.getContainerSize()) ? r : 0);
                                        u.scrollPosition.start({
                                            scrollPosition: u.clampPosition(a, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: u.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: c });
                                    }),
                                    t = E.O.client.events.mouse.up(() => {
                                        e(), O(b);
                                    });
                                return () => {
                                    e(), t();
                                };
                            }, [u, L.offset, L.pending, n, O]);
                        const I = F((e) => u.applyStepTo(e), P, [u]),
                            H = I[0],
                            U = I[1];
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mouseup', U, !0),
                                () => document.removeEventListener('mouseup', U, !0)
                            ),
                            [U],
                        );
                        const W = (u) => {
                            u.target.classList.contains(v) || (0, d.G)('highlight');
                        };
                        return l().createElement(
                            'div',
                            { className: s()(B, e.base), ref: r, onWheel: u.handleMouseWheel },
                            l().createElement('div', {
                                className: s()(_, e.leftButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(v) ||
                                        0 !== u.button ||
                                        ((0, d.G)('play'), H(D.Nm.Next));
                                },
                                onMouseUp: U,
                                ref: a,
                                onMouseEnter: W,
                            }),
                            l().createElement(
                                'div',
                                {
                                    className: s()(p, e.track),
                                    onMouseDown: (e) => {
                                        const n = R.current;
                                        if (n && 0 === e.button)
                                            if (((0, d.G)('play'), e.target === n))
                                                O({ pending: !0, offset: e.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((e) => {
                                                    const n = R.current,
                                                        r = u.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = t(u);
                                                    u.applyScroll(u.animationScroll.scrollPosition.get() + a * e);
                                                })(e.screenX > n.getBoundingClientRect().x ? D.Nm.Prev : D.Nm.Next);
                                            }
                                    },
                                    ref: x,
                                    onMouseEnter: W,
                                },
                                l().createElement('div', { ref: R, className: s()(h, e.thumb) }),
                                l().createElement('div', { className: s()(f, e.rail) }),
                            ),
                            l().createElement('div', {
                                className: s()(g, e.rightButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(v) ||
                                        0 !== u.button ||
                                        ((0, d.G)('play'), H(D.Nm.Prev));
                                },
                                onMouseUp: U,
                                ref: m,
                                onMouseEnter: W,
                            }),
                        );
                    }),
                    R = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    P = ({
                        children: u,
                        api: e,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: a,
                        scrollClassName: o,
                        getStepByRailClick: c,
                        onDrag: E,
                    }) => {
                        const A = (0, i.useMemo)(() => {
                                const u = n || {};
                                return Object.assign({}, u, { base: s()(R.base, u.base) });
                            }, [n]),
                            F = (0, i.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                        return l().createElement(
                            'div',
                            { className: s()(R.defaultScroll, t), onWheel: e.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: s()(R.defaultScrollArea, r) },
                                l().createElement(T, { className: o, api: F, classNames: a }, u),
                            ),
                            l().createElement(x, { getStepByRailClick: c, api: e, onDrag: E, classNames: A }),
                        );
                    },
                    T = ({ api: u, className: e, classNames: t, children: n }) => (
                        (0, i.useEffect)(() => (0, o.v)(u.recalculateContent)),
                        l().createElement(
                            'div',
                            { className: s()(R.base, e) },
                            l().createElement(
                                'div',
                                {
                                    className: s()(R.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: u.handleMouseWheel,
                                    ref: u.wrapperRef,
                                },
                                l().createElement(
                                    'div',
                                    { className: s()(R.content, null == t ? void 0 : t.content), ref: u.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (T.Bar = x), (T.Default = P);
                var L = t(7701);
                const M = 'VerticalBar_base_f3',
                    O = 'VerticalBar_base__nonActive_42',
                    k = 'VerticalBar_topButton_d7',
                    N = 'VerticalBar_bottomButton_06',
                    I = 'VerticalBar_track_df',
                    H = 'VerticalBar_thumb_32',
                    U = 'VerticalBar_rail_43',
                    W = 'disable',
                    G = () => {},
                    $ = { pending: !1, offset: 0 },
                    z = (u) => {
                        var e;
                        return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                    },
                    V = (u, e) => {
                        u.contentRef.current && e(u.contentRef.current);
                    },
                    q = (u, e) => Math.max(20, u.offsetHeight * e),
                    j = (0, i.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = z, onDrag: n = G }) => {
                        const r = (0, i.useRef)(null),
                            a = (0, i.useRef)(null),
                            D = (0, i.useRef)(null),
                            m = (0, i.useRef)(null),
                            B = (0, i.useRef)(null),
                            C = u.stepTimeout || 100,
                            _ = (0, i.useState)($),
                            g = _[0],
                            p = _[1],
                            h = (0, i.useCallback)(
                                (u) => {
                                    p(u),
                                        B.current && n({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: B.current });
                                },
                                [n],
                            ),
                            f = (0, A.z)(() => {
                                const e = B.current,
                                    t = m.current,
                                    n = u.getWrapperSize(),
                                    a = u.getContainerSize();
                                if (!(n && a && e && t)) return;
                                const s = Math.min(1, n / a);
                                return (
                                    (e.style.height = `${q(t, s)}px`),
                                    (e.style.display = 'flex'),
                                    r.current && (1 === s ? r.current.classList.add(O) : r.current.classList.remove(O)),
                                    s
                                );
                            }),
                            v = (0, A.z)(() => {
                                const e = m.current,
                                    t = B.current,
                                    n = u.getWrapperSize(),
                                    r = u.getContainerSize();
                                if (!(n && e && t && r)) return;
                                const s = u.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    i = (0, c.u)(0, 1, s / (r - n)),
                                    l = (e.offsetHeight - q(e, o)) * i;
                                (t.style.transform = `translateY(${0 | l}px)`),
                                    ((u) => {
                                        if (a.current && D.current && m.current && B.current) {
                                            if (0 === Math.round(u))
                                                return a.current.classList.add(W), void D.current.classList.remove(W);
                                            if (
                                                ((e = m.current),
                                                (t = B.current),
                                                u - (e.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return a.current.classList.remove(W), void D.current.classList.add(W);
                                            var e, t;
                                            a.current.classList.remove(W), D.current.classList.remove(W);
                                        }
                                    })(l);
                            }),
                            b = (0, A.z)(() => {
                                V(u, () => {
                                    f(), v();
                                });
                            });
                        (0, i.useEffect)(() => (0, o.v)(b)),
                            (0, i.useEffect)(() => {
                                const e = () => {
                                    V(u, () => {
                                        v();
                                    });
                                };
                                let t = G;
                                const n = () => {
                                    t(), (t = (0, o.v)(b));
                                };
                                return (
                                    u.events.on('recalculateContent', b),
                                    u.events.on('rest', e),
                                    u.events.on('change', e),
                                    u.events.on('resizeHandled', n),
                                    () => {
                                        t(),
                                            u.events.off('recalculateContent', b),
                                            u.events.off('rest', e),
                                            u.events.off('change', e),
                                            u.events.off('resizeHandled', n);
                                    }
                                );
                            }, [u]),
                            (0, i.useEffect)(() => {
                                if (!g.pending) return;
                                const e = E.O.client.events.mouse.up(() => {
                                        h($);
                                    }),
                                    t = E.O.client.events.mouse.move(([e]) => {
                                        V(u, (t) => {
                                            const r = m.current,
                                                a = B.current,
                                                s = u.getContainerSize();
                                            if (!r || !a || !s) return;
                                            const o = e.screenY - g.offset - r.getBoundingClientRect().y,
                                                i = (o / r.offsetHeight) * s;
                                            u.scrollPosition.start({
                                                scrollPosition: u.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: o, contentOffset: i });
                                        });
                                    });
                                return () => {
                                    e(), t();
                                };
                            }, [u, g.offset, g.pending, n, h]);
                        const w = F((e) => u.applyStepTo(e), C, [u]),
                            S = w[0],
                            y = w[1];
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mouseup', y, !0),
                                () => document.removeEventListener('mouseup', y, !0)
                            ),
                            [y],
                        );
                        const x = (u) => {
                            u.target.classList.contains(W) || (0, d.G)('highlight');
                        };
                        return l().createElement(
                            'div',
                            { className: s()(M, e.base), ref: r, onWheel: u.handleMouseWheel },
                            l().createElement('div', {
                                className: s()(k, e.topButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(W) ||
                                        0 !== u.button ||
                                        ((0, d.G)('play'), S(L.Nm.Next));
                                },
                                ref: a,
                                onMouseEnter: x,
                            }),
                            l().createElement(
                                'div',
                                {
                                    className: s()(I, e.track),
                                    onMouseDown: (e) => {
                                        const n = B.current;
                                        if (n && 0 === e.button)
                                            if (((0, d.G)('play'), e.target === n))
                                                h({ pending: !0, offset: e.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((e) => {
                                                    B.current &&
                                                        V(u, (n) => {
                                                            if (!n) return;
                                                            const r = t(u),
                                                                a = u.clampPosition(n, n.scrollTop + r * e);
                                                            u.applyScroll(a);
                                                        });
                                                })(e.screenY > n.getBoundingClientRect().y ? L.Nm.Prev : L.Nm.Next);
                                            }
                                    },
                                    ref: m,
                                    onMouseEnter: x,
                                },
                                l().createElement('div', { ref: B, className: s()(H, e.thumb) }),
                                l().createElement('div', { className: s()(U, e.rail) }),
                            ),
                            l().createElement('div', {
                                className: s()(N, e.bottomButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(W) ||
                                        0 !== u.button ||
                                        ((0, d.G)('play'), S(L.Nm.Prev));
                                },
                                onMouseUp: y,
                                ref: D,
                                onMouseEnter: x,
                            }),
                        );
                    }),
                    X = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Y = ({
                        children: u,
                        api: e,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: a,
                        scrollClassNames: o,
                        getStepByRailClick: c,
                        onDrag: E,
                    }) => {
                        const A = (0, i.useMemo)(() => {
                                const u = n || {};
                                return Object.assign({}, u, { base: s()(X.base, u.base) });
                            }, [n]),
                            F = (0, i.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                        return l().createElement(
                            'div',
                            { className: s()(X.defaultScroll, t), onWheel: e.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: s()(X.area, r) },
                                l().createElement(K, { className: a, classNames: o, api: F }, u),
                            ),
                            l().createElement(j, { getStepByRailClick: c, api: e, onDrag: E, classNames: A }),
                        );
                    },
                    K = ({ className: u, classNames: e, children: t, api: n }) => (
                        (0, i.useEffect)(() => (0, o.v)(n.recalculateContent)),
                        l().createElement(
                            'div',
                            { className: s()(X.base, u), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: s()(X.content, null == e ? void 0 : e.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                K.Default = Y;
                const Z = { Vertical: r, Horizontal: n };
                let Q;
                !(function (u) {
                    (u[(u.Idle = 0)] = 'Idle'),
                        (u[(u.Start = 1)] = 'Start'),
                        (u[(u.Between = 2)] = 'Between'),
                        (u[(u.End = 3)] = 'End');
                })(Q || (Q = {}));
                const J = 'ScrollWithLips_base_25',
                    uu = 'ScrollWithLips_lip_da',
                    eu = 'ScrollWithLips_lip__top_34',
                    tu = 'ScrollWithLips_lip__bottom_13',
                    nu = 'ScrollWithLips_scroll_70',
                    ru = 'ScrollWithLips_scroll__loaded_12',
                    au = 'ScrollWithLips_scrollContent_1e',
                    su = ({ scrollApi: u, classNames: e, children: t, lipImage: n }) => {
                        const r = (0, i.useState)(Q.Between),
                            a = r[0],
                            o = r[1],
                            c = a !== Q.Idle,
                            E = (0, A.z)(() => {
                                const e = u.getBounds(),
                                    t = e[0],
                                    n = e[1],
                                    r = u.animationScroll.scrollPosition.goal,
                                    a = u.getContainerSize(),
                                    s = u.getWrapperSize();
                                if (a && s)
                                    if (a !== s)
                                        switch (r) {
                                            case t:
                                                o(Q.Start);
                                                break;
                                            case n:
                                                o(Q.End);
                                                break;
                                            default:
                                                o(Q.Between);
                                        }
                                    else o(Q.Idle);
                            });
                        return (
                            (0, i.useEffect)(
                                () => (
                                    u.events.on('change', E),
                                    u.events.on('recalculateContent', E),
                                    u.events.on('resizeHandled', E),
                                    () => {
                                        u.events.off('change', E),
                                            u.events.off('recalculateContent', E),
                                            u.events.off('resizeHandled', E);
                                    }
                                ),
                                [u.events, E],
                            ),
                            l().createElement(
                                'div',
                                { className: s()(J, (null == e ? void 0 : e.base) || '') },
                                a !== Q.Start &&
                                    a !== Q.Idle &&
                                    l().createElement('div', {
                                        className: s()(uu, eu, (null == e ? void 0 : e.lip) || ''),
                                        style: { backgroundImage: `url(${n})` },
                                    }),
                                a !== Q.End &&
                                    a !== Q.Idle &&
                                    l().createElement('div', {
                                        className: s()(uu, tu, (null == e ? void 0 : e.lip) || ''),
                                        style: { backgroundImage: `url(${n})` },
                                    }),
                                l().createElement(
                                    Z.Vertical.Area,
                                    { api: u, className: s()(au, (null == e ? void 0 : e.scrollContent) || '') },
                                    t,
                                ),
                                l().createElement(Z.Vertical.Bar, {
                                    api: u,
                                    classNames: { base: s()(nu, c && ru, null == e ? void 0 : e.scrollBar) },
                                }),
                            )
                        );
                    };
            },
            5294: (u, e, t) => {
                'use strict';
                t.d(e, { D: () => s });
                var n = t(6179),
                    r = t.n(n);
                const a = 'Title_base_82',
                    s = ({ text: u }) => r().createElement('div', { className: a }, u);
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
                for (i = 0; i < deferred.length; i++) {
                    for (var [e, t, n] = deferred[i], a = !0, s = 0; s < e.length; s++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[s]))
                            ? e.splice(s--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(i--, 1);
                        var o = t();
                        void 0 !== o && (u = o);
                    }
                }
                return u;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [e, t, n];
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
        (__webpack_require__.j = 177),
        (() => {
            var u = { 177: 0, 79: 0, 701: 0, 595: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        r,
                        [a, s, o] = t,
                        i = 0;
                    if (a.some((e) => 0 !== u[e])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (e && e(t); i < a.length; i++)
                        (r = a[i]), __webpack_require__.o(u, r) && u[r] && u[r][0](), (u[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [866], () => __webpack_require__(7639));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
