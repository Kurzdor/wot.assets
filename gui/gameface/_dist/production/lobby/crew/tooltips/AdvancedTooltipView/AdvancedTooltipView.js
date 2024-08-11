(() => {
    'use strict';
    var e,
        n = {
            143: (e, n, t) => {
                var r = {};
                t.r(r),
                    t.d(r, { mouse: () => p, off: () => m, on: () => v, onResize: () => d, onScaleUpdated: () => f });
                var o = {};
                t.r(o),
                    t.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => w,
                        getSize: () => b,
                        graphicsQuality: () => E,
                        playSound: () => h,
                        setRTPC: () => y,
                    });
                var i = {};
                t.r(i), t.d(i, { getBgUrl: () => S, getTextureUrl: () => O });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => B,
                        addPreloadTexture: () => H,
                        children: () => i,
                        displayStatus: () => A,
                        displayStatusIs: () => ne,
                        events: () => C,
                        extraSize: () => te,
                        forceTriggerMouseMove: () => Z,
                        freezeTextureBeforeResize: () => I,
                        getBrowserTexturePath: () => D,
                        getDisplayStatus: () => ee,
                        getScale: () => q,
                        getSize: () => K,
                        getViewGlobalPosition: () => $,
                        isEventHandled: () => Y,
                        isFocused: () => J,
                        pxToRem: () => U,
                        remToPx: () => Q,
                        resize: () => N,
                        sendEvent: () => F,
                        setAnimateWindow: () => W,
                        setEventHandled: () => X,
                        setInputPaddingsRem: () => V,
                        setSidePaddingsRem: () => G,
                        whenTutorialReady: () => re,
                    });
                var s = t(6483),
                    u = t.n(s);
                function c(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function l(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const d = c('clientResized'),
                    f = c('self.onScaleUpdated'),
                    v = (e, n) => engine.on(e, n),
                    m = (e, n) => engine.off(e, n),
                    g = { down: c('mousedown'), up: c('mouseup'), move: c('mousemove') };
                const p = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && l(!1);
                    }
                    function t() {
                        e.enabled && l(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', n),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', n),
                                  document.body.addEventListener('mouseleave', t))
                            : l(!1);
                    }
                    const o = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const i = `mouse${n}`,
                                        a = g[n]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        r(),
                                        () => {
                                            o &&
                                                (a(),
                                                window.removeEventListener(i, s),
                                                (e.listeners -= 1),
                                                r(),
                                                (o = !1));
                                        }
                                    );
                                };
                            })(t)),
                            n
                        ),
                        {},
                    );
                    return Object.assign({}, o, {
                        disable() {
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
                        },
                        enableOutside() {
                            e.enabled && l(!0);
                        },
                        disableOutside() {
                            e.enabled && l(!1);
                        },
                    });
                })();
                function h(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function y(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function b(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function w(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const E = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    T = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    x = Object.keys(T).reduce((e, n) => ((e[n] = () => h(T[n])), e), {}),
                    P = { play: Object.assign({}, x, { sound: h }), setRTPC: y };
                function O(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function S(e, n, t) {
                    return `url(${O(e, n, t)})`;
                }
                const A = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    C = {
                        onTextureFrozen: c('self.onTextureFrozen'),
                        onTextureReady: c('self.onTextureReady'),
                        onDomBuilt: c('self.onDomBuilt'),
                        onLoaded: c('self.onLoaded'),
                        onDisplayChanged: c('self.onShowingStatusChanged'),
                        onFocusUpdated: c('self.onFocusChanged'),
                        children: {
                            onAdded: c('children.onAdded'),
                            onLoaded: c('children.onLoaded'),
                            onRemoved: c('children.onRemoved'),
                            onAttached: c('children.onAttached'),
                            onTextureReady: c('children.onTextureReady'),
                            onRequestPosition: c('children.requestPosition'),
                        },
                    },
                    _ = ['args'];
                const k = 2,
                    j = 16,
                    z = 32,
                    L = 64,
                    M = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const o = n.args,
                                i = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        o = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                                    return o;
                                })(n, _);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((r = o),
                                              Object.entries(r).map(([e, n]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof n) {
                                                      case 'number':
                                                          return { __Type: t, name: e, number: n };
                                                      case 'boolean':
                                                          return { __Type: t, name: e, bool: n };
                                                      default:
                                                          return { __Type: t, name: e, string: n.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    F = {
                        close(e) {
                            M('popover' === e ? k : z);
                        },
                        minimize() {
                            M(L);
                        },
                        move(e) {
                            M(j, { isMouseEvent: !0, on: e });
                        },
                    };
                function H(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function V(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function D(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function B(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function G(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function K(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function N(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function $(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: Q(n.x), y: Q(n.y) };
                }
                function I() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function q() {
                    return viewEnv.getScale();
                }
                function U(e) {
                    return viewEnv.pxToRem(e);
                }
                function Q(e) {
                    return viewEnv.remToPx(e);
                }
                function W(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function J() {
                    return viewEnv.isFocused();
                }
                function X() {
                    return viewEnv.setEventHandled();
                }
                function Y() {
                    return viewEnv.isEventHandled();
                }
                function Z() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ee() {
                    return viewEnv.getShowingStatus();
                }
                const ne = Object.keys(A).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === A[n]), e), {}),
                    te = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    re = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : C.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    oe = { view: a, client: o, sound: P };
                var ie = t(6179),
                    ae = t.n(ie);
                const se = (e) => {
                    (0, ie.useEffect)(e, []);
                };
                function ue() {
                    const e = (0, ie.useRef)(0);
                    var n;
                    return (
                        (n = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, ie.useEffect)(() => n, []),
                        (0, ie.useMemo)(
                            () => ({
                                run: (n) => {
                                    window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                n(), (e.current = 0);
                                            });
                                        }));
                                },
                                clear: () => {
                                    window.cancelAnimationFrame(e.current), (e.current = 0);
                                },
                                get isRunning() {
                                    return 0 !== e.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                const ce = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    le = ['children', 'className', 'theme'];
                function de() {
                    return (
                        (de =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        de.apply(this, arguments)
                    );
                }
                const fe = ae().forwardRef(function (e, n) {
                    let t = e.children,
                        r = e.className,
                        o = e.theme,
                        i = void 0 === o ? 'default' : o,
                        a = (function (e, n) {
                            if (null == e) return {};
                            var t,
                                r,
                                o = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                            return o;
                        })(e, le);
                    const s = ue(),
                        c = ae().useRef(null);
                    return (
                        se(() => {
                            s.run(() => {
                                const e = c.current;
                                if (!e) return;
                                const n = e.scrollWidth,
                                    t = e.scrollHeight;
                                oe.view.resize(n, t);
                                const r = window.getComputedStyle(e);
                                oe.view.setSidePaddingsRem({
                                    left: parseInt(r.getPropertyValue('padding-left'), 10),
                                    top: parseInt(r.getPropertyValue('padding-top'), 10),
                                    right: parseInt(r.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        ae().createElement(
                            'div',
                            de({}, a, {
                                className: u()(ce.base, ce[`base__theme-${i}`], r),
                                ref: function (e) {
                                    (c.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                },
                            }),
                            ae().createElement('div', { className: ce.decorator }, t),
                        )
                    );
                });
                var ve = t(493),
                    me = t.n(ve);
                function ge() {}
                function pe() {
                    return !1;
                }
                console.log;
                const he = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function ye() {
                    return (
                        (ye =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        ye.apply(this, arguments)
                    );
                }
                const be = (0, ie.forwardRef)(function (e, n) {
                        let t = e.src,
                            r = e.className,
                            o = e.autoplay,
                            i = void 0 !== o && o,
                            a = e.style,
                            s = e.loop,
                            u = void 0 !== s && s,
                            c = e.isPrebufferKeyframes,
                            l = e.keyframesNameConfig,
                            d = e.onClick,
                            f = (function (e, n) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                                return o;
                            })(e, he);
                        const v = n,
                            m = (0, ie.useRef)(null);
                        return (
                            se(() =>
                                oe.view.events.onDisplayChanged((e, n) => {
                                    var t, r;
                                    n === A.hidden && (null == (t = m.current) || t.pause());
                                    n === A.shown && (null == (r = m.current) || r.play());
                                }),
                            ),
                            (0, ie.useEffect)(
                                () =>
                                    ((e) => {
                                        let n,
                                            t = null;
                                        return (
                                            (t = requestAnimationFrame(() => {
                                                t = requestAnimationFrame(() => {
                                                    (t = null), (n = e());
                                                });
                                            })),
                                            () => {
                                                'function' == typeof n && n(), null !== t && cancelAnimationFrame(t);
                                            }
                                        );
                                    })(() => {
                                        const e = m.current;
                                        if (!v || !e || !c)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const n = e.cohGetKeyframeTimestamps();
                                        n.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              n.map((n) => {
                                                  null == e || e.cohPrebufferKeyframe(n);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [c, v],
                            ),
                            (0, ie.useEffect)(() => {
                                if (v && m.current) {
                                    const e = {
                                            changeTimeHandlers: [],
                                            changeKeyframeHandlers: [],
                                            changeTimeLoop: ge,
                                        },
                                        n = () => {
                                            let n = 0;
                                            const t = (function (e) {
                                                    let n = 0;
                                                    return [
                                                        function t() {
                                                            e(), (n = requestAnimationFrame(t));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(n);
                                                        },
                                                    ];
                                                })(() => {
                                                    if (m.current) {
                                                        const t = m.current,
                                                            r = t.currentTime,
                                                            o = t.duration;
                                                        if (
                                                            (n !== r &&
                                                                (e.changeTimeHandlers.forEach((e) =>
                                                                    e({ currentTime: r, duration: o }),
                                                                ),
                                                                (n = r)),
                                                            m.current.paused || !v || !c)
                                                        )
                                                            return;
                                                        const i = m.current.cohGetKeyframeTimestamps();
                                                        i.forEach((n, t) => {
                                                            r > i[t] - 0.02 &&
                                                                r < i[t] &&
                                                                e.changeKeyframeHandlers.forEach((e) => {
                                                                    const r = Object.keys(null != l ? l : {})[t];
                                                                    return e({
                                                                        time: n,
                                                                        name: `${l ? r : `Point_${t}`}`,
                                                                    });
                                                                });
                                                        });
                                                    }
                                                }),
                                                r = t[0],
                                                o = t[1];
                                            return r(), o;
                                        };
                                    e.changeTimeLoop = n();
                                    const t = (n) => (
                                            e.changeTimeHandlers.push(n),
                                            () => {
                                                const t = e.changeTimeHandlers,
                                                    r = t.indexOf(n);
                                                r < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : t.splice(r, 1);
                                            }
                                        ),
                                        r = (n) => (
                                            e.changeKeyframeHandlers.push(n),
                                            () => {
                                                const t = e.changeKeyframeHandlers,
                                                    r = t.indexOf(n);
                                                r < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : t.splice(r, 1);
                                            }
                                        ),
                                        o = () => {
                                            var e;
                                            return null == (e = m.current) ? void 0 : e.currentTime;
                                        },
                                        i = () => {
                                            var e;
                                            return null == (e = m.current) ? void 0 : e.duration;
                                        },
                                        a = (e) => {
                                            var n, t, r;
                                            m.current &&
                                                (m.current.currentTime =
                                                    ((n = 0),
                                                    (t = m.current.duration),
                                                    (r = e) < n ? n : r > t ? t : r));
                                        },
                                        s = () => {
                                            var e;
                                            return null == (e = m.current) ? void 0 : e.play();
                                        },
                                        u = () => {
                                            var e;
                                            return null == (e = m.current) ? void 0 : e.pause();
                                        },
                                        d = () => {
                                            u(), a(0);
                                        },
                                        f = () => {
                                            var e, n;
                                            return null !=
                                                (e = null == (n = m.current) ? void 0 : n.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        g = (e) => {
                                            a(e), s();
                                        },
                                        p = (e) => {
                                            a(e), u();
                                        },
                                        h = () => {
                                            (e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop();
                                        },
                                        y = (e, n) => {
                                            var t;
                                            return (
                                                null == (t = m.current) || t.addEventListener(e, n),
                                                () => {
                                                    var t;
                                                    return null == (t = m.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, n);
                                                }
                                            );
                                        },
                                        b = (e, n) => {
                                            var t;
                                            return (
                                                null == (t = m.current) || t.removeEventListener(e, n),
                                                () => {
                                                    var t;
                                                    return null == (t = m.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, n);
                                                }
                                            );
                                        };
                                    return (
                                        (v.current = {
                                            on: y,
                                            off: b,
                                            play: s,
                                            pause: u,
                                            stop: d,
                                            cleanup: h,
                                            getCurrentTime: o,
                                            getDuration: i,
                                            getCachedKeyframes: f,
                                            goToAndPlay: g,
                                            goToAndStop: p,
                                            setCurrentTime: a,
                                            domRef: m.current,
                                            onChangeTime: t,
                                            onKeyframes: r,
                                        }),
                                        () => {
                                            h(), (v.current = null);
                                        }
                                    );
                                }
                            }, [l, v, c]),
                            (0, ie.useEffect)(() => {
                                m.current && i && m.current.play();
                            }, [i, u]),
                            (0, ie.useEffect)(() => {
                                if (m.current)
                                    return () => {
                                        m.current && m.current.pause();
                                    };
                            }, []),
                            ae().createElement(
                                'video',
                                ye({ src: t, className: r, style: a, loop: u, ref: m, onClick: d }, f),
                            )
                        );
                    }),
                    we = (0, ie.memo)(be);
                var Ee = t(3403),
                    Te = t(9174);
                function xe(e, n) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, n) {
                            if (!e) return;
                            if ('string' == typeof e) return Pe(e, n);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Pe(e, n);
                        })(e)) ||
                        (n && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Pe(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                    return r;
                }
                const Oe = (e) => (0 === e ? window : window.subViews.get(e));
                const Se = ((e, n) => {
                        const t = (0, ie.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: o, children: i, mocks: a }) {
                                const s = (0, ie.useRef)([]),
                                    u = (t, r, o) => {
                                        var i;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: n = 0,
                                                getRoot: t = Oe,
                                                context: r = 'model',
                                            } = {}) {
                                                const o = new Map();
                                                function i(e, n = 0) {
                                                    viewEnv.removeDataChangedCallback(e, n)
                                                        ? o.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, n, t) => {
                                                        t.forEach((n) => {
                                                            const t = o.get(n);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const a = (e) => {
                                                    const o = t(n),
                                                        i = r.split('.').reduce((e, n) => e[n], o);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, n) => {
                                                              const t = e[n];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (t, i) => {
                                                        const s = 'string' == typeof i ? `${r}.${i}` : r,
                                                            u = oe.view.addModelObserver(s, n, !0);
                                                        return o.set(u, t), e && t(a(i)), u;
                                                    },
                                                    readByPath: a,
                                                    createCallback: (e, n) => {
                                                        const t = a(n);
                                                        return (...n) => {
                                                            t(e(...n));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const n = a(e);
                                                        return () => {
                                                            n();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = xe(o.keys()); !(e = t()).done; ) i(e.value, n);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(r),
                                            u =
                                                'real' === t
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (i = null == o ? void 0 : o.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            c = (e) =>
                                                'mocks' === t ? (null == o ? void 0 : o.getter(e)) : u.readByPath(e),
                                            l = (e) => s.current.push(e),
                                            d = e({
                                                mode: t,
                                                readByPath: c,
                                                externalModel: u,
                                                observableModel: {
                                                    array: (e, n) => {
                                                        const r = null != n ? n : c(e),
                                                            o = Te.LO.box(r, { equals: pe });
                                                        return (
                                                            'real' === t &&
                                                                u.subscribe(
                                                                    (0, Te.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (e, n) => {
                                                        const r = null != n ? n : c(e),
                                                            o = Te.LO.box(r, { equals: pe });
                                                        return (
                                                            'real' === t &&
                                                                u.subscribe(
                                                                    (0, Te.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (e, n) => {
                                                        const r = c(n);
                                                        if (Array.isArray(e)) {
                                                            const o = e.reduce(
                                                                (e, n) => ((e[n] = Te.LO.box(r[n], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    u.subscribe(
                                                                        (0, Te.aD)((n) => {
                                                                            e.forEach((e) => {
                                                                                o[e].set(n[e]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                        {
                                                            const o = e,
                                                                i = Object.entries(o),
                                                                a = i.reduce(
                                                                    (e, [n, t]) => ((e[t] = Te.LO.box(r[n], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    u.subscribe(
                                                                        (0, Te.aD)((e) => {
                                                                            i.forEach(([n, t]) => {
                                                                                a[t].set(e[n]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: l,
                                            }),
                                            f = { mode: t, model: d, externalModel: u, cleanup: l };
                                        return {
                                            model: d,
                                            controls: 'mocks' === t && o ? o.controls(f) : n(f),
                                            externalModel: u,
                                            mode: t,
                                        };
                                    },
                                    c = (0, ie.useRef)(!1),
                                    l = (0, ie.useState)(r),
                                    d = l[0],
                                    f = l[1],
                                    v = (0, ie.useState)(() => u(r, o, a)),
                                    m = v[0],
                                    g = v[1];
                                return (
                                    (0, ie.useEffect)(() => {
                                        c.current ? g(u(d, o, a)) : (c.current = !0);
                                    }, [a, d, o]),
                                    (0, ie.useEffect)(() => {
                                        f(r);
                                    }, [r]),
                                    (0, ie.useEffect)(
                                        () => () => {
                                            m.externalModel.dispose(), s.current.forEach((e) => e());
                                        },
                                        [m],
                                    ),
                                    ae().createElement(t.Provider, { value: m }, i)
                                );
                            },
                            () => (0, ie.useContext)(t),
                        ];
                    })(({ observableModel: e }) => e.primitives(['movie', 'header', 'description']), ge),
                    Re = Se[0],
                    Ae = Se[1],
                    Ce = 'AdvancedTooltipViewApp_base_42',
                    _e = 'AdvancedTooltipViewApp_header_72',
                    ke = 'AdvancedTooltipViewApp_movie_58',
                    je = 'AdvancedTooltipViewApp_description_17',
                    ze = (0, Ee.Pi)(() => {
                        const e = Ae().model,
                            n = e.movie.get();
                        return ae().createElement(
                            'div',
                            { className: Ce },
                            ae().createElement('div', { className: _e }, e.header.get()),
                            n &&
                                ae().createElement(we, {
                                    src: R.videos.animations.advancedHints.$dyn(n),
                                    className: ke,
                                    loop: !0,
                                    autoplay: !0,
                                }),
                            ae().createElement('div', { className: je }, e.description.get()),
                        );
                    });
                engine.whenReady.then(() => {
                    me().render(
                        ae().createElement(Re, null, ae().createElement(fe, null, ae().createElement(ze, null))),
                        document.getElementById('root'),
                    );
                });
            },
        },
        t = {};
    function r(e) {
        var o = t[e];
        if (void 0 !== o) return o.exports;
        var i = (t[e] = { exports: {} });
        return n[e](i, i.exports, r), i.exports;
    }
    (r.m = n),
        (e = []),
        (r.O = (n, t, o, i) => {
            if (!t) {
                var a = 1 / 0;
                for (l = 0; l < e.length; l++) {
                    for (var [t, o, i] = e[l], s = !0, u = 0; u < t.length; u++)
                        (!1 & i || a >= i) && Object.keys(r.O).every((e) => r.O[e](t[u]))
                            ? t.splice(u--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(l--, 1);
                        var c = o();
                        void 0 !== c && (n = c);
                    }
                }
                return n;
            }
            i = i || 0;
            for (var l = e.length; l > 0 && e[l - 1][2] > i; l--) e[l] = e[l - 1];
            e[l] = [t, o, i];
        }),
        (r.n = (e) => {
            var n = e && e.__esModule ? () => e.default : () => e;
            return r.d(n, { a: n }), n;
        }),
        (r.d = (e, n) => {
            for (var t in n) r.o(n, t) && !r.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
        }),
        (r.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (r.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
        (r.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (r.j = 9285),
        (() => {
            var e = { 9285: 0 };
            r.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var o,
                        i,
                        [a, s, u] = t,
                        c = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                        if (u) var l = u(r);
                    }
                    for (n && n(t); c < a.length; c++) (i = a[c]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return r.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var o = r.O(void 0, [9056], () => r(143));
    o = r.O(o);
})();
