(() => {
    'use strict';
    var e,
        n = {
            7307: (e, n, t) => {
                var r = {};
                t.r(r),
                    t.d(r, { mouse: () => p, off: () => f, on: () => m, onResize: () => d, onScaleUpdated: () => v });
                var i = {};
                t.r(i),
                    t.d(i, {
                        events: () => r,
                        getMouseGlobalPosition: () => w,
                        getSize: () => h,
                        graphicsQuality: () => y,
                    });
                var o = {};
                t.r(o), t.d(o, { getBgUrl: () => b, getTextureUrl: () => E });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => F,
                        addPreloadTexture: () => H,
                        children: () => o,
                        displayStatus: () => T,
                        displayStatusIs: () => J,
                        events: () => _,
                        extraSize: () => X,
                        forceTriggerMouseMove: () => Q,
                        freezeTextureBeforeResize: () => M,
                        getBrowserTexturePath: () => j,
                        getDisplayStatus: () => W,
                        getScale: () => U,
                        getSize: () => N,
                        getViewGlobalPosition: () => K,
                        isEventHandled: () => $,
                        isFocused: () => q,
                        pxToRem: () => G,
                        remToPx: () => D,
                        resize: () => V,
                        sendEvent: () => z,
                        setAnimateWindow: () => B,
                        setEventHandled: () => I,
                        setInputPaddingsRem: () => C,
                        setSidePaddingsRem: () => L,
                        whenTutorialReady: () => Y,
                    });
                var s = t(6483),
                    u = t.n(s);
                function l(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function c(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const d = l('clientResized'),
                    v = l('self.onScaleUpdated'),
                    m = (e, n) => engine.on(e, n),
                    f = (e, n) => engine.off(e, n),
                    g = { down: l('mousedown'), up: l('mouseup'), move: l('mousemove') };
                const p = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && c(!1);
                    }
                    function t() {
                        e.enabled && c(!0);
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
                            : c(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let i = !0;
                                    const o = `mouse${n}`,
                                        a = g[n]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(o, s),
                                        r(),
                                        () => {
                                            i &&
                                                (a(),
                                                window.removeEventListener(o, s),
                                                (e.listeners -= 1),
                                                r(),
                                                (i = !1));
                                        }
                                    );
                                };
                            })(t)),
                            n
                        ),
                        {},
                    );
                    return Object.assign({}, i, {
                        disable() {
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
                        },
                        enableOutside() {
                            e.enabled && c(!0);
                        },
                        disableOutside() {
                            e.enabled && c(!1);
                        },
                    });
                })();
                function h(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function w(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const y = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function E(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function b(e, n, t) {
                    return `url(${E(e, n, t)})`;
                }
                const T = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    _ = {
                        onTextureFrozen: l('self.onTextureFrozen'),
                        onTextureReady: l('self.onTextureReady'),
                        onDomBuilt: l('self.onDomBuilt'),
                        onLoaded: l('self.onLoaded'),
                        onDisplayChanged: l('self.onShowingStatusChanged'),
                        onFocusUpdated: l('self.onFocusChanged'),
                        children: {
                            onAdded: l('children.onAdded'),
                            onLoaded: l('children.onLoaded'),
                            onRemoved: l('children.onRemoved'),
                            onAttached: l('children.onAttached'),
                            onTextureReady: l('children.onTextureReady'),
                            onRequestPosition: l('children.requestPosition'),
                        },
                    },
                    P = ['args'];
                const S = 2,
                    x = 16,
                    O = 32,
                    k = 64,
                    A = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const i = n.args,
                                o = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        i = {},
                                        o = Object.keys(e);
                                    for (r = 0; r < o.length; r++) (t = o[r]), n.indexOf(t) >= 0 || (i[t] = e[t]);
                                    return i;
                                })(n, P);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
                                          arguments:
                                              ((r = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    z = {
                        close(e) {
                            A('popover' === e ? S : O);
                        },
                        minimize() {
                            A(k);
                        },
                        move(e) {
                            A(x, { isMouseEvent: !0, on: e });
                        },
                    };
                function H(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function C(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function j(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function F(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function L(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function N(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function V(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function K(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: D(n.x), y: D(n.y) };
                }
                function M() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function U() {
                    return viewEnv.getScale();
                }
                function G(e) {
                    return viewEnv.pxToRem(e);
                }
                function D(e) {
                    return viewEnv.remToPx(e);
                }
                function B(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function q() {
                    return viewEnv.isFocused();
                }
                function I() {
                    return viewEnv.setEventHandled();
                }
                function $() {
                    return viewEnv.isEventHandled();
                }
                function Q() {
                    viewEnv.forceTriggerMouseMove();
                }
                function W() {
                    return viewEnv.getShowingStatus();
                }
                const J = Object.keys(T).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === T[n]), e), {}),
                    X = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    Y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : _.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    Z = { view: a, client: i };
                var ee = t(6179),
                    ne = t.n(ee);
                const te = (e) => {
                    (0, ee.useEffect)(e, []);
                };
                function re() {
                    const e = (0, ee.useRef)(0);
                    var n;
                    return (
                        (n = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, ee.useEffect)(() => n, []),
                        (0, ee.useMemo)(
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
                const ie = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    oe = ['children', 'className', 'theme'];
                function ae() {
                    return (
                        (ae =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        ae.apply(this, arguments)
                    );
                }
                const se = ne().forwardRef(function (e, n) {
                    let t = e.children,
                        r = e.className,
                        i = e.theme,
                        o = void 0 === i ? 'default' : i,
                        a = (function (e, n) {
                            if (null == e) return {};
                            var t,
                                r,
                                i = {},
                                o = Object.keys(e);
                            for (r = 0; r < o.length; r++) (t = o[r]), n.indexOf(t) >= 0 || (i[t] = e[t]);
                            return i;
                        })(e, oe);
                    const s = re(),
                        l = ne().useRef(null);
                    return (
                        te(() => {
                            s.run(() => {
                                const e = l.current;
                                if (!e) return;
                                const n = e.scrollWidth,
                                    t = e.scrollHeight;
                                Z.view.resize(n, t);
                                const r = window.getComputedStyle(e);
                                Z.view.setSidePaddingsRem({
                                    left: parseInt(r.getPropertyValue('padding-left'), 10),
                                    top: parseInt(r.getPropertyValue('padding-top'), 10),
                                    right: parseInt(r.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        ne().createElement(
                            'div',
                            ae({}, a, {
                                className: u()(ie.base, ie[`base__theme-${o}`], r),
                                ref: function (e) {
                                    (l.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                },
                            }),
                            ne().createElement('div', { className: ie.decorator }, t),
                        )
                    );
                });
                var ue = t(493),
                    le = t.n(ue);
                function ce() {}
                console.log;
                const de = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function ve() {
                    return (
                        (ve =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        ve.apply(this, arguments)
                    );
                }
                const me = (0, ee.forwardRef)(function (e, n) {
                        let t = e.src,
                            r = e.className,
                            i = e.autoplay,
                            o = void 0 !== i && i,
                            a = e.style,
                            s = e.loop,
                            u = void 0 !== s && s,
                            l = e.isPrebufferKeyframes,
                            c = e.keyframesNameConfig,
                            d = e.onClick,
                            v = (function (e, n) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    i = {},
                                    o = Object.keys(e);
                                for (r = 0; r < o.length; r++) (t = o[r]), n.indexOf(t) >= 0 || (i[t] = e[t]);
                                return i;
                            })(e, de);
                        const m = n,
                            f = (0, ee.useRef)(null);
                        return (
                            te(() =>
                                Z.view.events.onDisplayChanged((e, n) => {
                                    var t, r;
                                    n === T.hidden && (null == (t = f.current) || t.pause());
                                    n === T.shown && (null == (r = f.current) || r.play());
                                }),
                            ),
                            (0, ee.useEffect)(
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
                                        const e = f.current;
                                        if (!m || !e || !l)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const n = e.cohGetKeyframeTimestamps();
                                        n.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              n.map((n) => {
                                                  null == e || e.cohPrebufferKeyframe(n);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [l, m],
                            ),
                            (0, ee.useEffect)(() => {
                                if (m && f.current) {
                                    const e = {
                                            changeTimeHandlers: [],
                                            changeKeyframeHandlers: [],
                                            changeTimeLoop: ce,
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
                                                    if (f.current) {
                                                        const t = f.current,
                                                            r = t.currentTime,
                                                            i = t.duration;
                                                        if (
                                                            (n !== r &&
                                                                (e.changeTimeHandlers.forEach((e) =>
                                                                    e({ currentTime: r, duration: i }),
                                                                ),
                                                                (n = r)),
                                                            f.current.paused || !m || !l)
                                                        )
                                                            return;
                                                        const o = f.current.cohGetKeyframeTimestamps();
                                                        o.forEach((n, t) => {
                                                            r > o[t] - 0.02 &&
                                                                r < o[t] &&
                                                                e.changeKeyframeHandlers.forEach((e) => {
                                                                    const r = Object.keys(null != c ? c : {})[t];
                                                                    return e({
                                                                        time: n,
                                                                        name: `${c ? r : `Point_${t}`}`,
                                                                    });
                                                                });
                                                        });
                                                    }
                                                }),
                                                r = t[0],
                                                i = t[1];
                                            return r(), i;
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
                                        i = () => {
                                            var e;
                                            return null == (e = f.current) ? void 0 : e.currentTime;
                                        },
                                        o = () => {
                                            var e;
                                            return null == (e = f.current) ? void 0 : e.duration;
                                        },
                                        a = (e) => {
                                            var n, t, r;
                                            f.current &&
                                                (f.current.currentTime =
                                                    ((n = 0),
                                                    (t = f.current.duration),
                                                    (r = e) < n ? n : r > t ? t : r));
                                        },
                                        s = () => {
                                            var e;
                                            return null == (e = f.current) ? void 0 : e.play();
                                        },
                                        u = () => {
                                            var e;
                                            return null == (e = f.current) ? void 0 : e.pause();
                                        },
                                        d = () => {
                                            u(), a(0);
                                        },
                                        v = () => {
                                            var e, n;
                                            return null !=
                                                (e = null == (n = f.current) ? void 0 : n.cohGetKeyframeTimestamps())
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
                                        w = (e, n) => {
                                            var t;
                                            return (
                                                null == (t = f.current) || t.addEventListener(e, n),
                                                () => {
                                                    var t;
                                                    return null == (t = f.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, n);
                                                }
                                            );
                                        },
                                        y = (e, n) => {
                                            var t;
                                            return (
                                                null == (t = f.current) || t.removeEventListener(e, n),
                                                () => {
                                                    var t;
                                                    return null == (t = f.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, n);
                                                }
                                            );
                                        };
                                    return (
                                        (m.current = {
                                            on: w,
                                            off: y,
                                            play: s,
                                            pause: u,
                                            stop: d,
                                            cleanup: h,
                                            getCurrentTime: i,
                                            getDuration: o,
                                            getCachedKeyframes: v,
                                            goToAndPlay: g,
                                            goToAndStop: p,
                                            setCurrentTime: a,
                                            domRef: f.current,
                                            onChangeTime: t,
                                            onKeyframes: r,
                                        }),
                                        () => {
                                            h(), (m.current = null);
                                        }
                                    );
                                }
                            }, [c, m, l]),
                            (0, ee.useEffect)(() => {
                                f.current && o && f.current.play();
                            }, [o, u]),
                            (0, ee.useEffect)(() => {
                                if (f.current)
                                    return () => {
                                        f.current && f.current.pause();
                                    };
                            }, []),
                            ne().createElement(
                                'video',
                                ve({ src: t, className: r, style: a, loop: u, ref: f, onClick: d }, v),
                            )
                        );
                    }),
                    fe = (0, ee.memo)(me);
                var ge = t(3403);
                const pe = 'SkillUntrainedHeader_base_74',
                    he = 'SkillUntrainedHeader_gradient_03',
                    we = 'SkillUntrainedHeader_icon_21',
                    ye = 'SkillUntrainedHeader_header_96',
                    Ee = (0, ee.memo)(({ className: e }) =>
                        ne().createElement(
                            'div',
                            { className: u()(pe, e) },
                            ne().createElement('div', { className: he }),
                            ne().createElement('div', { className: we }),
                            ne().createElement('div', { className: ye }, R.strings.tooltips.skill.untrained.header()),
                        ),
                    ),
                    be = 'SkillUntrainedAdditionalApp_base_a7',
                    Te = 'SkillUntrainedAdditionalApp_movie_74',
                    _e = 'SkillUntrainedAdditionalApp_header_db',
                    Pe = 'SkillUntrainedAdditionalApp_description_93',
                    Se = (0, ge.Pi)(() =>
                        ne().createElement(
                            'div',
                            { className: be },
                            ne().createElement(Ee, { className: _e }),
                            ne().createElement(fe, {
                                loop: !0,
                                autoplay: !0,
                                src: R.videos.animations.advancedHints.skillUntrainedPenalty(),
                                className: Te,
                            }),
                            ne().createElement(
                                'div',
                                { className: Pe },
                                R.strings.tooltips.skill.untrained.additional(),
                            ),
                        ),
                    );
                engine.whenReady.then(() => {
                    le().render(
                        ne().createElement(se, null, ne().createElement(Se, null)),
                        document.getElementById('root'),
                    );
                });
            },
        },
        t = {};
    function r(e) {
        var i = t[e];
        if (void 0 !== i) return i.exports;
        var o = (t[e] = { exports: {} });
        return n[e](o, o.exports, r), o.exports;
    }
    (r.m = n),
        (e = []),
        (r.O = (n, t, i, o) => {
            if (!t) {
                var a = 1 / 0;
                for (c = 0; c < e.length; c++) {
                    for (var [t, i, o] = e[c], s = !0, u = 0; u < t.length; u++)
                        (!1 & o || a >= o) && Object.keys(r.O).every((e) => r.O[e](t[u]))
                            ? t.splice(u--, 1)
                            : ((s = !1), o < a && (a = o));
                    if (s) {
                        e.splice(c--, 1);
                        var l = i();
                        void 0 !== l && (n = l);
                    }
                }
                return n;
            }
            o = o || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > o; c--) e[c] = e[c - 1];
            e[c] = [t, i, o];
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
        (r.j = 486),
        (() => {
            var e = { 486: 0 };
            r.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var i,
                        o,
                        [a, s, u] = t,
                        l = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (i in s) r.o(s, i) && (r.m[i] = s[i]);
                        if (u) var c = u(r);
                    }
                    for (n && n(t); l < a.length; l++) (o = a[l]), r.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return r.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var i = r.O(void 0, [56], () => r(7307));
    i = r.O(i);
})();
