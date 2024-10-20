(() => {
    'use strict';
    var e,
        t = {
            7701: (e, t, n) => {
                n.d(t, { Nm: () => r.Nm, c4: () => o });
                var r = n(7308);
                const o = (0, r.EO)({
                    getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                    getContainerSize: (e) => e.scrollHeight,
                    getWrapperSize: (e) => e.offsetHeight,
                    setScrollPosition: (e, t) => {
                        e.scrollTop = t.value.scrollPosition;
                    },
                    getDirection: (e) => (e.deltaY > 1 ? r.Nm.Next : r.Nm.Prev),
                });
            },
            7308: (e, t, n) => {
                n.d(t, { EO: () => v, Nm: () => f, he: () => m });
                var r = n(7515),
                    o = n(1856),
                    s = n(3138),
                    i = n(4532),
                    a = n(9653),
                    l = n(3815),
                    c = n(4489),
                    u = n(6179),
                    d = n(7030);
                let f;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(f || (f = {}));
                const m = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    v = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: f,
                        getWrapperSize: v,
                        triggerMouseMoveOnUpdate: g = !1,
                    }) => {
                        const p = (e, n) => {
                            const o = t(e),
                                s = o[0],
                                i = o[1];
                            return i <= s ? 0 : (0, r.u)(s, i, n);
                        };
                        return (r = {}) => {
                            const h = r.settings,
                                E = void 0 === h ? m : h,
                                b = (0, u.useRef)(null),
                                w = (0, u.useRef)(null),
                                y = (0, a.q)(),
                                S = (0, c.f)(
                                    () => {
                                        s.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                P = (0, d.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = b.current;
                                        t && (n(t, e), y.trigger('change', e), g && S());
                                    },
                                    onRest: (e) => y.trigger('rest', e),
                                    onStart: (e) => y.trigger('start', e),
                                    onPause: (e) => y.trigger('pause', e),
                                })),
                                R = P[0],
                                z = P[1],
                                C = (0, u.useCallback)(
                                    (e, t, n) => {
                                        var r;
                                        const o = R.scrollPosition.get(),
                                            s = (null != (r = R.scrollPosition.goal) ? r : 0) - o;
                                        return p(e, t * n + s + o);
                                    },
                                    [R.scrollPosition],
                                ),
                                N = (0, u.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const r = b.current;
                                        r &&
                                            z.start({
                                                scrollPosition: p(r, e),
                                                immediate: t,
                                                reset: n,
                                                config: E.animationConfig,
                                                from: { scrollPosition: p(r, R.scrollPosition.get()) },
                                            });
                                    },
                                    [z, E.animationConfig, R.scrollPosition],
                                ),
                                M = (0, u.useCallback)(
                                    (e) => {
                                        const t = b.current,
                                            n = w.current;
                                        if (!t || !n) return;
                                        const r = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return v(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, E.step),
                                            o = C(t, e, r);
                                        N(o);
                                    },
                                    [N, C, E.step],
                                ),
                                _ = (0, u.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && M(f(e)),
                                            b.current && y.trigger('mouseWheel', e, R.scrollPosition, t(b.current));
                                    },
                                    [R.scrollPosition, M, y],
                                ),
                                x = (0, i.M)(
                                    () =>
                                        (0, o.v)(() => {
                                            const e = b.current;
                                            e &&
                                                (N(p(e, R.scrollPosition.goal), { immediate: !0 }),
                                                y.trigger('resizeHandled'));
                                        }),
                                    [N, R.scrollPosition.goal],
                                ),
                                B = (0, l.z)(() => {
                                    const e = b.current;
                                    if (!e) return;
                                    const t = p(e, R.scrollPosition.goal);
                                    t !== R.scrollPosition.goal && N(t, { immediate: !0 }),
                                        y.trigger('recalculateContent');
                                });
                            (0, u.useEffect)(
                                () => (
                                    window.addEventListener('resize', x),
                                    () => {
                                        window.removeEventListener('resize', x);
                                    }
                                ),
                                [x],
                            );
                            return (0, u.useMemo)(
                                () => ({
                                    getWrapperSize: () => (w.current ? v(w.current) : void 0),
                                    getContainerSize: () => (b.current ? e(b.current) : void 0),
                                    getBounds: () =>
                                        b.current
                                            ? t(b.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: E.step.clampedArrowStepTimeout,
                                    clampPosition: p,
                                    handleMouseWheel: _,
                                    applyScroll: N,
                                    applyStepTo: M,
                                    contentRef: b,
                                    wrapperRef: w,
                                    scrollPosition: z,
                                    animationScroll: R,
                                    recalculateContent: B,
                                    events: { on: y.on, off: y.off },
                                }),
                                [R.scrollPosition, N, M, y.off, y.on, B, _, z, E.step.clampedArrowStepTimeout],
                            );
                        };
                    };
            },
            7515: (e, t, n) => {
                n.d(t, { u: () => r });
                const r = (e, t, n) => (n < e ? e : n > t ? t : n);
            },
            1856: (e, t, n) => {
                n.d(t, { v: () => r });
                const r = (e) => {
                    let t,
                        n = null;
                    return (
                        (n = requestAnimationFrame(() => {
                            n = requestAnimationFrame(() => {
                                (n = null), (t = e());
                            });
                        })),
                        () => {
                            'function' == typeof t && t(), null !== n && cancelAnimationFrame(n);
                        }
                    );
                };
            },
            527: (e, t, n) => {
                n.r(t),
                    n.d(t, { mouse: () => u, off: () => l, on: () => a, onResize: () => s, onScaleUpdated: () => i });
                var r = n(2472),
                    o = n(1176);
                const s = (0, r.E)('clientResized'),
                    i = (0, r.E)('self.onScaleUpdated'),
                    a = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    c = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const u = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, o.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, o.R)(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', n))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', n))
                            : (0, o.R)(!1);
                    }
                    const s = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const s = `mouse${t}`,
                                        i = c[t]((e) => n([e, 'outside']));
                                    function a(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(s, a),
                                        r(),
                                        () => {
                                            o &&
                                                (i(),
                                                window.removeEventListener(s, a),
                                                (e.listeners -= 1),
                                                r(),
                                                (o = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, s, {
                        disable() {
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
                        },
                        enableOutside() {
                            e.enabled && (0, o.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, o.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => i,
                        getSize: () => s,
                        graphicsQuality: () => a,
                        playSound: () => o.G,
                        setRTPC: () => o.E,
                    });
                var r = n(527),
                    o = n(2493);
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const a = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, n) => {
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => r });
            },
            2493: (e, t, n) => {
                function r(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function o(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => o, G: () => r });
            },
            2472: (e, t, n) => {
                function r(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => r });
            },
            3138: (e, t, n) => {
                n.d(t, { O: () => s });
                var r = n(5959),
                    o = n(514);
                const s = { view: n(7641), client: r, sound: o.ZP };
            },
            514: (e, t, n) => {
                n.d(t, { ZP: () => i });
                var r = n(5959);
                const o = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    s = Object.keys(o).reduce((e, t) => ((e[t] = () => (0, r.playSound)(o[t])), e), {}),
                    i = { play: Object.assign({}, s, { sound: r.playSound }), setRTPC: r.setRTPC };
            },
            3722: (e, t, n) => {
                function r(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function o(e, t, n) {
                    return `url(${r(e, t, n)})`;
                }
                n.r(t), n.d(t, { getBgUrl: () => o, getTextureUrl: () => r });
            },
            6112: (e, t, n) => {
                n.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                n.d(t, { U: () => o });
                var r = n(2472);
                const o = {
                    onTextureFrozen: (0, r.E)('self.onTextureFrozen'),
                    onTextureReady: (0, r.E)('self.onTextureReady'),
                    onDomBuilt: (0, r.E)('self.onDomBuilt'),
                    onLoaded: (0, r.E)('self.onLoaded'),
                    onDisplayChanged: (0, r.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, r.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, r.E)('children.onAdded'),
                        onLoaded: (0, r.E)('children.onLoaded'),
                        onRemoved: (0, r.E)('children.onRemoved'),
                        onAttached: (0, r.E)('children.onAttached'),
                        onTextureReady: (0, r.E)('children.onTextureReady'),
                        onRequestPosition: (0, r.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => l,
                        children: () => r,
                        displayStatus: () => o.W,
                        displayStatusIs: () => C,
                        events: () => s.U,
                        extraSize: () => N,
                        forceTriggerMouseMove: () => R,
                        freezeTextureBeforeResize: () => p,
                        getBrowserTexturePath: () => u,
                        getDisplayStatus: () => z,
                        getScale: () => h,
                        getSize: () => m,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => P,
                        isFocused: () => y,
                        pxToRem: () => E,
                        remToPx: () => b,
                        resize: () => v,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => w,
                        setEventHandled: () => S,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => f,
                        whenTutorialReady: () => M,
                    });
                var r = n(3722),
                    o = n(6112),
                    s = n(6538),
                    i = n(8566);
                const a = 15;
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, a);
                }
                function u(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function d(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function f(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, a);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function v(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: b(t.x), y: b(t.y) };
                }
                function p() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function h() {
                    return viewEnv.getScale();
                }
                function E(e) {
                    return viewEnv.pxToRem(e);
                }
                function b(e) {
                    return viewEnv.remToPx(e);
                }
                function w(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function y() {
                    return viewEnv.isFocused();
                }
                function S() {
                    return viewEnv.setEventHandled();
                }
                function P() {
                    return viewEnv.isEventHandled();
                }
                function R() {
                    viewEnv.forceTriggerMouseMove();
                }
                function z() {
                    return viewEnv.getShowingStatus();
                }
                const C = Object.keys(o.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === o.W[t]), e),
                        {},
                    ),
                    N = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    M = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                n.d(t, { qP: () => c });
                const r = ['args'];
                const o = 2,
                    s = 16,
                    i = 32,
                    a = 64,
                    l = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const s = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (t.indexOf(r) >= 0) continue;
                                            n[r] = e[r];
                                        }
                                    return n;
                                })(t, r);
                            return void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((o = s),
                                              Object.entries(o).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var o;
                    },
                    c = {
                        close(e) {
                            l('popover' === e ? o : i);
                        },
                        minimize() {
                            l(a);
                        },
                        move(e) {
                            l(s, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4532: (e, t, n) => {
                n.d(t, { M: () => o });
                var r = n(6179);
                const o = (e, t = []) => {
                    const n = (0, r.useRef)(),
                        o = (0, r.useCallback)((...t) => {
                            n.current && n.current(), (n.current = e(...t));
                        }, t);
                    return (
                        (0, r.useEffect)(
                            () => () => {
                                n.current && n.current();
                            },
                            [o],
                        ),
                        o
                    );
                };
            },
            9653: (e, t, n) => {
                n.d(t, { q: () => i });
                var r = n(6179);
                function o(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return s(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                          ? s(e, t)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const i = () => {
                    const e = (0, r.useMemo)(() => ({}), []),
                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                        n = (e, n) => {
                            t(e).set(n, n);
                        },
                        s = (e, n) => {
                            t(e).delete(n);
                        },
                        i = (e, ...n) => {
                            for (var r, s = o(t(e).values()); !(r = s()).done; ) {
                                (0, r.value)(...n);
                            }
                        };
                    return (0, r.useMemo)(() => ({ on: n, off: s, trigger: i }), []);
                };
            },
            3815: (e, t, n) => {
                n.d(t, { z: () => s });
                var r = n(6179);
                const o = [];
                function s(e) {
                    const t = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, t.current)(...e), o)
                    );
                }
            },
            4489: (e, t, n) => {
                n.d(t, { f: () => s });
                var r = n(5139),
                    o = n(6179);
                function s(e, t, n) {
                    const s = (0, o.useMemo)(() => (0, r.Z)(n, e), t);
                    return (0, o.useEffect)(() => s.cancel, [s]), s;
                }
            },
            7727: (e, t, n) => {
                function r(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                n.d(t, { G: () => r });
            },
            5139: (e, t, n) => {
                function r(e, t, n, r) {
                    let o,
                        s = !1,
                        i = 0;
                    function a() {
                        o && clearTimeout(o);
                    }
                    function l(...l) {
                        const c = this,
                            u = Date.now() - i;
                        function d() {
                            (i = Date.now()), n.apply(c, l);
                        }
                        s ||
                            (r && !o && d(),
                            a(),
                            void 0 === r && u > e
                                ? d()
                                : !0 !== t &&
                                  (o = setTimeout(
                                      r
                                          ? function () {
                                                o = void 0;
                                            }
                                          : d,
                                      void 0 === r ? e - u : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof t && ((r = n), (n = t), (t = void 0)),
                        (l.cancel = function () {
                            a(), (s = !0);
                        }),
                        l
                    );
                }
                n.d(t, { Z: () => r });
            },
            3958: (e, t, n) => {
                var r = {};
                n.r(r),
                    n.d(r, {
                        Area: () => T,
                        Bar: () => _,
                        DefaultScroll: () => B,
                        Direction: () => g.Nm,
                        defaultSettings: () => g.he,
                        useHorizontalScrollApi: () => p,
                    });
                var o = {};
                n.r(o), n.d(o, { Area: () => Q, Bar: () => q, Default: () => X, useVerticalScrollApi: () => O.c4 });
                var s = n(6483),
                    i = n.n(s),
                    a = n(1856),
                    l = n(6179),
                    c = n.n(l),
                    u = n(7515),
                    d = n(3138),
                    f = n(3815);
                function m(e, t, n = []) {
                    const r = (0, l.useRef)(0),
                        o = (0, l.useCallback)(() => window.clearInterval(r.current), n || []);
                    (0, l.useEffect)(() => o, [o]);
                    const s = (null != n ? n : []).concat([t]);
                    return [
                        (0, l.useCallback)((n) => {
                            (r.current = window.setInterval(() => e(n, !0), t)), e(n, !1);
                        }, s),
                        o,
                    ];
                }
                var v = n(7727),
                    g = n(7308);
                const p = (0, g.EO)({
                        getBounds: (e) => {
                            var t, n;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (n = e.parentElement) ? void 0 : n.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? g.Nm.Next : g.Nm.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    h = 'HorizontalBar_base_49',
                    E = 'HorizontalBar_base__nonActive_82',
                    b = 'HorizontalBar_leftButton_5f',
                    w = 'HorizontalBar_rightButton_03',
                    y = 'HorizontalBar_track_0d',
                    S = 'HorizontalBar_thumb_fd',
                    P = 'HorizontalBar_rail_32',
                    R = 'disable',
                    z = { pending: !1, offset: 0 },
                    C = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    N = () => {},
                    M = (e, t) => Math.max(20, e.offsetWidth * t),
                    _ = (0, l.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = C, onDrag: r = N }) => {
                        const o = (0, l.useRef)(null),
                            s = (0, l.useRef)(null),
                            p = (0, l.useRef)(null),
                            _ = (0, l.useRef)(null),
                            x = (0, l.useRef)(null),
                            B = e.stepTimeout || 100,
                            T = (0, l.useState)(z),
                            O = T[0],
                            W = T[1],
                            L = (0, l.useCallback)(
                                (e) => {
                                    W(e),
                                        x.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: x.current });
                                },
                                [r],
                            ),
                            H = () => {
                                const t = _.current,
                                    n = x.current,
                                    r = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(r && t && n && o)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    a = Math.min(1, r / o),
                                    l = (0, u.u)(0, 1, i / (o - r)),
                                    c = (t.offsetWidth - M(t, a)) * l;
                                (n.style.transform = `translateX(${0 | c}px)`),
                                    ((e) => {
                                        if (s.current && p.current && _.current && x.current) {
                                            if (0 === e)
                                                return s.current.classList.add(R), void p.current.classList.remove(R);
                                            if (
                                                ((t = _.current),
                                                (n = x.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return s.current.classList.remove(R), void p.current.classList.add(R);
                                            var t, n;
                                            s.current.classList.remove(R), p.current.classList.remove(R);
                                        }
                                    })(c);
                            },
                            k = (0, f.z)(() => {
                                (() => {
                                    const t = x.current,
                                        n = _.current,
                                        r = e.getWrapperSize(),
                                        s = e.getContainerSize();
                                    if (!(s && t && r && n)) return;
                                    const i = Math.min(1, r / s);
                                    (t.style.width = `${M(n, i)}px`),
                                        (t.style.display = 'flex'),
                                        o.current &&
                                            (1 === i ? o.current.classList.add(E) : o.current.classList.remove(E));
                                })(),
                                    H();
                            });
                        (0, l.useEffect)(() => (0, a.v)(k)),
                            (0, l.useEffect)(
                                () =>
                                    (0, a.v)(() => {
                                        const t = () => {
                                            H();
                                        };
                                        let n = N;
                                        const r = () => {
                                            n(), (n = (0, a.v)(k));
                                        };
                                        return (
                                            e.events.on('recalculateContent', k),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                n(),
                                                    e.events.off('recalculateContent', k),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', r);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, l.useEffect)(() => {
                                if (!O.pending) return;
                                const t = d.O.client.events.mouse.move(([t, n]) => {
                                        var o;
                                        const s = e.contentRef.current,
                                            i = e.wrapperRef.current;
                                        if (!s || !i) return;
                                        const a = _.current,
                                            l = x.current;
                                        if (!a || !l) return;
                                        if ('inside' === n && t.clientX < 0) return;
                                        const c = t.clientX - O.offset - a.getBoundingClientRect().x,
                                            u = (c / a.offsetWidth) * (null != (o = e.getContainerSize()) ? o : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(s, u),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: l, thumbOffset: c, contentOffset: u });
                                    }),
                                    n = d.O.client.events.mouse.up(() => {
                                        t(), L(z);
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, O.offset, O.pending, r, L]);
                        const A = m((t) => e.applyStepTo(t), B, [e]),
                            D = A[0],
                            j = A[1];
                        (0, l.useEffect)(
                            () => (
                                document.addEventListener('mouseup', j, !0),
                                () => document.removeEventListener('mouseup', j, !0)
                            ),
                            [j],
                        );
                        const V = (e) => {
                            e.target.classList.contains(R) || (0, v.G)('highlight');
                        };
                        return c().createElement(
                            'div',
                            { className: i()(h, t.base), ref: o, onWheel: e.handleMouseWheel },
                            c().createElement('div', {
                                className: i()(b, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(R) ||
                                        0 !== e.button ||
                                        ((0, v.G)('play'), D(g.Nm.Next));
                                },
                                onMouseUp: j,
                                ref: s,
                                onMouseEnter: V,
                            }),
                            c().createElement(
                                'div',
                                {
                                    className: i()(y, t.track),
                                    onMouseDown: (t) => {
                                        const r = x.current;
                                        if (r && 0 === t.button)
                                            if (((0, v.G)('play'), t.target === r))
                                                L({ pending: !0, offset: t.screenX - r.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const r = x.current,
                                                        o = e.contentRef.current;
                                                    if (!r || !o) return;
                                                    const s = n(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + s * t);
                                                })(t.screenX > r.getBoundingClientRect().x ? g.Nm.Prev : g.Nm.Next);
                                            }
                                    },
                                    ref: _,
                                    onMouseEnter: V,
                                },
                                c().createElement('div', { ref: x, className: i()(S, t.thumb) }),
                                c().createElement('div', { className: i()(P, t.rail) }),
                            ),
                            c().createElement('div', {
                                className: i()(w, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(R) ||
                                        0 !== e.button ||
                                        ((0, v.G)('play'), D(g.Nm.Prev));
                                },
                                onMouseUp: j,
                                ref: p,
                                onMouseEnter: V,
                            }),
                        );
                    }),
                    x = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    B = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: r,
                        areaClassName: o,
                        classNames: s,
                        scrollClassName: a,
                        getStepByRailClick: u,
                        onDrag: d,
                    }) => {
                        const f = (0, l.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: i()(x.base, e.base) });
                            }, [r]),
                            m = (0, l.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return c().createElement(
                            'div',
                            { className: i()(x.defaultScroll, n), onWheel: t.handleMouseWheel },
                            c().createElement(
                                'div',
                                { className: i()(x.defaultScrollArea, o) },
                                c().createElement(T, { className: a, api: m, classNames: s }, e),
                            ),
                            c().createElement(_, { getStepByRailClick: u, api: t, onDrag: d, classNames: f }),
                        );
                    },
                    T = ({ api: e, className: t, classNames: n, children: r }) => (
                        (0, l.useEffect)(() => (0, a.v)(e.recalculateContent)),
                        c().createElement(
                            'div',
                            { className: i()(x.base, t) },
                            c().createElement(
                                'div',
                                {
                                    className: i()(x.wrapper, null == n ? void 0 : n.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                c().createElement(
                                    'div',
                                    { className: i()(x.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                (T.Bar = _), (T.Default = B);
                var O = n(7701);
                const W = 'VerticalBar_base_f3',
                    L = 'VerticalBar_base__nonActive_42',
                    H = 'VerticalBar_topButton_d7',
                    k = 'VerticalBar_bottomButton_06',
                    A = 'VerticalBar_track_df',
                    D = 'VerticalBar_thumb_32',
                    j = 'VerticalBar_rail_43',
                    V = 'disable',
                    G = () => {},
                    U = { pending: !1, offset: 0 },
                    F = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    $ = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    I = (e, t) => Math.max(20, e.offsetHeight * t),
                    q = (0, l.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = F, onDrag: r = G }) => {
                        const o = (0, l.useRef)(null),
                            s = (0, l.useRef)(null),
                            g = (0, l.useRef)(null),
                            p = (0, l.useRef)(null),
                            h = (0, l.useRef)(null),
                            E = e.stepTimeout || 100,
                            b = (0, l.useState)(U),
                            w = b[0],
                            y = b[1],
                            S = (0, l.useCallback)(
                                (e) => {
                                    y(e),
                                        h.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: h.current });
                                },
                                [r],
                            ),
                            P = (0, f.z)(() => {
                                const t = h.current,
                                    n = p.current,
                                    r = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(r && s && t && n)) return;
                                const i = Math.min(1, r / s);
                                return (
                                    (t.style.height = `${I(n, i)}px`),
                                    (t.style.display = 'flex'),
                                    o.current && (1 === i ? o.current.classList.add(L) : o.current.classList.remove(L)),
                                    i
                                );
                            }),
                            R = (0, f.z)(() => {
                                const t = p.current,
                                    n = h.current,
                                    r = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(r && t && n && o)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    a = Math.min(1, r / o),
                                    l = (0, u.u)(0, 1, i / (o - r)),
                                    c = (t.offsetHeight - I(t, a)) * l;
                                (n.style.transform = `translateY(${0 | c}px)`),
                                    ((e) => {
                                        if (s.current && g.current && p.current && h.current) {
                                            if (0 === Math.round(e))
                                                return s.current.classList.add(V), void g.current.classList.remove(V);
                                            if (
                                                ((t = p.current),
                                                (n = h.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return s.current.classList.remove(V), void g.current.classList.add(V);
                                            var t, n;
                                            s.current.classList.remove(V), g.current.classList.remove(V);
                                        }
                                    })(c);
                            }),
                            z = (0, f.z)(() => {
                                $(e, () => {
                                    P(), R();
                                });
                            });
                        (0, l.useEffect)(() => (0, a.v)(z)),
                            (0, l.useEffect)(() => {
                                const t = () => {
                                    $(e, () => {
                                        R();
                                    });
                                };
                                let n = G;
                                const r = () => {
                                    n(), (n = (0, a.v)(z));
                                };
                                return (
                                    e.events.on('recalculateContent', z),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        n(),
                                            e.events.off('recalculateContent', z),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', r);
                                    }
                                );
                            }, [e]),
                            (0, l.useEffect)(() => {
                                if (!w.pending) return;
                                const t = d.O.client.events.mouse.up(() => {
                                        S(U);
                                    }),
                                    n = d.O.client.events.mouse.move(([t]) => {
                                        $(e, (n) => {
                                            const o = p.current,
                                                s = h.current,
                                                i = e.getContainerSize();
                                            if (!o || !s || !i) return;
                                            const a = t.screenY - w.offset - o.getBoundingClientRect().y,
                                                l = (a / o.offsetHeight) * i;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, l),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: s, thumbOffset: a, contentOffset: l });
                                        });
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, w.offset, w.pending, r, S]);
                        const C = m((t) => e.applyStepTo(t), E, [e]),
                            N = C[0],
                            M = C[1];
                        (0, l.useEffect)(
                            () => (
                                document.addEventListener('mouseup', M, !0),
                                () => document.removeEventListener('mouseup', M, !0)
                            ),
                            [M],
                        );
                        const _ = (e) => {
                            e.target.classList.contains(V) || (0, v.G)('highlight');
                        };
                        return c().createElement(
                            'div',
                            { className: i()(W, t.base), ref: o, onWheel: e.handleMouseWheel },
                            c().createElement('div', {
                                className: i()(H, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(V) ||
                                        0 !== e.button ||
                                        ((0, v.G)('play'), N(O.Nm.Next));
                                },
                                ref: s,
                                onMouseEnter: _,
                            }),
                            c().createElement(
                                'div',
                                {
                                    className: i()(A, t.track),
                                    onMouseDown: (t) => {
                                        const r = h.current;
                                        if (r && 0 === t.button)
                                            if (((0, v.G)('play'), t.target === r))
                                                S({ pending: !0, offset: t.screenY - r.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    h.current &&
                                                        $(e, (r) => {
                                                            if (!r) return;
                                                            const o = n(e),
                                                                s = e.clampPosition(r, r.scrollTop + o * t);
                                                            e.applyScroll(s);
                                                        });
                                                })(t.screenY > r.getBoundingClientRect().y ? O.Nm.Prev : O.Nm.Next);
                                            }
                                    },
                                    ref: p,
                                    onMouseEnter: _,
                                },
                                c().createElement('div', { ref: h, className: i()(D, t.thumb) }),
                                c().createElement('div', { className: i()(j, t.rail) }),
                            ),
                            c().createElement('div', {
                                className: i()(k, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(V) ||
                                        0 !== e.button ||
                                        ((0, v.G)('play'), N(O.Nm.Prev));
                                },
                                onMouseUp: M,
                                ref: g,
                                onMouseEnter: _,
                            }),
                        );
                    }),
                    Y = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    X = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: r,
                        areaClassName: o,
                        scrollClassName: s,
                        scrollClassNames: a,
                        getStepByRailClick: u,
                        onDrag: d,
                    }) => {
                        const f = (0, l.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: i()(Y.base, e.base) });
                            }, [r]),
                            m = (0, l.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return c().createElement(
                            'div',
                            { className: i()(Y.defaultScroll, n), onWheel: t.handleMouseWheel },
                            c().createElement(
                                'div',
                                { className: i()(Y.area, o) },
                                c().createElement(Q, { className: s, classNames: a, api: m }, e),
                            ),
                            c().createElement(q, { getStepByRailClick: u, api: t, onDrag: d, classNames: f }),
                        );
                    },
                    Q = ({ className: e, classNames: t, children: n, api: r }) => (
                        (0, l.useEffect)(() => (0, a.v)(r.recalculateContent)),
                        c().createElement(
                            'div',
                            { className: i()(Y.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            c().createElement(
                                'div',
                                { className: i()(Y.content, null == t ? void 0 : t.content), ref: r.contentRef },
                                n,
                            ),
                        )
                    );
                Q.Default = X;
                let Z;
                !(function (e) {
                    (e[(e.Idle = 0)] = 'Idle'),
                        (e[(e.Start = 1)] = 'Start'),
                        (e[(e.Between = 2)] = 'Between'),
                        (e[(e.End = 3)] = 'End');
                })(Z || (Z = {}));
            },
        },
        n = {};
    function r(e) {
        var o = n[e];
        if (void 0 !== o) return o.exports;
        var s = (n[e] = { exports: {} });
        return t[e](s, s.exports, r), s.exports;
    }
    (r.m = t),
        (e = []),
        (r.O = (t, n, o, s) => {
            if (!n) {
                var i = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [n, o, s] = e[u], a = !0, l = 0; l < n.length; l++)
                        (!1 & s || i >= s) && Object.keys(r.O).every((e) => r.O[e](n[l]))
                            ? n.splice(l--, 1)
                            : ((a = !1), s < i && (i = s));
                    if (a) {
                        e.splice(u--, 1);
                        var c = o();
                        void 0 !== c && (t = c);
                    }
                }
                return t;
            }
            s = s || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > s; u--) e[u] = e[u - 1];
            e[u] = [n, o, s];
        }),
        (r.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return r.d(t, { a: t }), t;
        }),
        (r.d = (e, t) => {
            for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
        (r.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (r.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (r.j = 701),
        (() => {
            var e = { 701: 0 };
            r.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        s,
                        [i, a, l] = n,
                        c = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (o in a) r.o(a, o) && (r.m[o] = a[o]);
                        if (l) var u = l(r);
                    }
                    for (t && t(n); c < i.length; c++) (s = i[c]), r.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
                    return r.O(u);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var o = r.O(void 0, [866], () => r(3958));
    o = r.O(o);
})();
