(() => {
    'use strict';
    var e,
        n = {
            2477: (e, n, t) => {
                var r = {};
                t.r(r),
                    t.d(r, { mouse: () => _, off: () => p, on: () => b, onResize: () => v, onScaleUpdated: () => f });
                var a = {};
                t.r(a),
                    t.d(a, {
                        events: () => r,
                        getMouseGlobalPosition: () => w,
                        getSize: () => y,
                        graphicsQuality: () => E,
                    });
                var o = {};
                t.r(o), t.d(o, { getBgUrl: () => x, getTextureUrl: () => S });
                var i = {};
                t.r(i),
                    t.d(i, {
                        addModelObserver: () => N,
                        addPreloadTexture: () => j,
                        children: () => o,
                        displayStatus: () => T,
                        displayStatusIs: () => Z,
                        events: () => O,
                        extraSize: () => ee,
                        forceTriggerMouseMove: () => J,
                        freezeTextureBeforeResize: () => K,
                        getBrowserTexturePath: () => B,
                        getDisplayStatus: () => X,
                        getScale: () => G,
                        getSize: () => I,
                        getViewGlobalPosition: () => F,
                        isEventHandled: () => W,
                        isFocused: () => U,
                        pxToRem: () => Q,
                        remToPx: () => V,
                        resize: () => $,
                        sendEvent: () => L,
                        setAnimateWindow: () => q,
                        setEventHandled: () => Y,
                        setInputPaddingsRem: () => D,
                        setSidePaddingsRem: () => H,
                        whenTutorialReady: () => ne,
                    });
                var s = t(6179),
                    u = t.n(s),
                    c = t(493),
                    l = t.n(c);
                const d = {
                    linear: (e) => e,
                    easeInQuad: (e) => e * e,
                    easeOutQuad: (e) => e * (2 - e),
                    easeInOutQuad: (e) => (e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1),
                    easeInCubic: (e) => e * e * e,
                    easeOutCubic: (e) => --e * e * e + 1,
                    easeInOutCubic: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                    easeInQuart: (e) => e * e * e * e,
                    easeOutQuart: (e) => 1 - --e * e * e * e,
                    easeInOutQuart: (e) => (e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e),
                    easeInQuint: (e) => e * e * e * e * e,
                    easeOutQuint: (e) => 1 + --e * e * e * e * e,
                    easeInOutQuint: (e) => (e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e),
                    easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
                    easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
                    easeInOutCirc(e) {
                        const n = Math.sqrt,
                            t = Math.pow;
                        return e < 0.5 ? (1 - n(1 - t(2 * e, 2))) / 2 : (n(1 - t(-2 * e + 2, 2)) + 1) / 2;
                    },
                    easeOutBack(e) {
                        const n = 1.70158;
                        return 1 + 2.70158 * Math.pow(e - 1, 3) + n * Math.pow(e - 1, 2);
                    },
                };
                function m(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function g(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const v = m('clientResized'),
                    f = m('self.onScaleUpdated'),
                    b = (e, n) => engine.on(e, n),
                    p = (e, n) => engine.off(e, n),
                    h = { down: m('mousedown'), up: m('mouseup'), move: m('mousemove') };
                const _ = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && g(!1);
                    }
                    function t() {
                        e.enabled && g(!0);
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
                            : g(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const o = `mouse${n}`,
                                        i = h[n]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(o, s),
                                        r(),
                                        () => {
                                            a &&
                                                (i(),
                                                window.removeEventListener(o, s),
                                                (e.listeners -= 1),
                                                r(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(t)),
                            n
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
                        disable() {
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
                        },
                        enableOutside() {
                            e.enabled && g(!0);
                        },
                        disableOutside() {
                            e.enabled && g(!1);
                        },
                    });
                })();
                function y(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function w(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const E = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function S(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function x(e, n, t) {
                    return `url(${S(e, n, t)})`;
                }
                const T = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    O = {
                        onTextureFrozen: m('self.onTextureFrozen'),
                        onTextureReady: m('self.onTextureReady'),
                        onDomBuilt: m('self.onDomBuilt'),
                        onLoaded: m('self.onLoaded'),
                        onDisplayChanged: m('self.onShowingStatusChanged'),
                        onFocusUpdated: m('self.onFocusChanged'),
                        children: {
                            onAdded: m('children.onAdded'),
                            onLoaded: m('children.onLoaded'),
                            onRemoved: m('children.onRemoved'),
                            onAttached: m('children.onAttached'),
                            onTextureReady: m('children.onTextureReady'),
                            onRequestPosition: m('children.requestPosition'),
                        },
                    },
                    k = ['args'];
                const C = 2,
                    P = 16,
                    A = 32,
                    M = 64,
                    z = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const a = n.args,
                                o = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        a = {},
                                        o = Object.keys(e);
                                    for (r = 0; r < o.length; r++) (t = o[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(n, k);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
                                          arguments:
                                              ((r = a),
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
                    L = {
                        close(e) {
                            z('popover' === e ? C : A);
                        },
                        minimize() {
                            z(M);
                        },
                        move(e) {
                            z(P, { isMouseEvent: !0, on: e });
                        },
                    };
                function j(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function D(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function B(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function N(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function H(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function I(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function $(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function F(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: V(n.x), y: V(n.y) };
                }
                function K() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function G() {
                    return viewEnv.getScale();
                }
                function Q(e) {
                    return viewEnv.pxToRem(e);
                }
                function V(e) {
                    return viewEnv.remToPx(e);
                }
                function q(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function U() {
                    return viewEnv.isFocused();
                }
                function Y() {
                    return viewEnv.setEventHandled();
                }
                function W() {
                    return viewEnv.isEventHandled();
                }
                function J() {
                    viewEnv.forceTriggerMouseMove();
                }
                function X() {
                    return viewEnv.getShowingStatus();
                }
                const Z = Object.keys(T).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === T[n]), e), {}),
                    ee = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    ne = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : O.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    te = { view: i, client: a };
                function re(e) {
                    engine.call('PlaySound', e);
                }
                var ae = t(3403),
                    oe = t(7030),
                    ie = t(6483),
                    se = t.n(ie);
                const ue = (e) => {
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
                };
                function ce() {}
                const le = ce;
                function de() {
                    return !1;
                }
                console.log;
                const me = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function ge() {
                    return (
                        (ge =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        ge.apply(this, arguments)
                    );
                }
                const ve = (0, s.forwardRef)(function (e, n) {
                        let t = e.src,
                            r = e.className,
                            a = e.autoplay,
                            o = void 0 !== a && a,
                            i = e.style,
                            c = e.loop,
                            l = void 0 !== c && c,
                            d = e.isPrebufferKeyframes,
                            m = e.keyframesNameConfig,
                            g = e.onClick,
                            v = (function (e, n) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    o = Object.keys(e);
                                for (r = 0; r < o.length; r++) (t = o[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, me);
                        const f = n,
                            b = (0, s.useRef)(null);
                        return (
                            (0, s.useEffect)(
                                () =>
                                    ue(() => {
                                        const e = b.current;
                                        if (!f || !e || !d)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const n = e.cohGetKeyframeTimestamps();
                                        n.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              n.map((n) => {
                                                  null == e || e.cohPrebufferKeyframe(n);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [d, f],
                            ),
                            (0, s.useEffect)(() => {
                                if (f && b.current) {
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
                                                    if (b.current) {
                                                        const t = b.current,
                                                            r = t.currentTime,
                                                            a = t.duration;
                                                        if (
                                                            (n !== r &&
                                                                (e.changeTimeHandlers.forEach((e) =>
                                                                    e({ currentTime: r, duration: a }),
                                                                ),
                                                                (n = r)),
                                                            b.current.paused || !f || !d)
                                                        )
                                                            return;
                                                        const o = b.current.cohGetKeyframeTimestamps();
                                                        o.forEach((n, t) => {
                                                            r > o[t] - 0.02 &&
                                                                r < o[t] &&
                                                                e.changeKeyframeHandlers.forEach((e) => {
                                                                    const r = Object.keys(null != m ? m : {})[t];
                                                                    return e({
                                                                        time: n,
                                                                        name: `${m ? r : `Point_${t}`}`,
                                                                    });
                                                                });
                                                        });
                                                    }
                                                }),
                                                r = t[0],
                                                a = t[1];
                                            return r(), a;
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
                                        a = () => {
                                            var e;
                                            return null == (e = b.current) ? void 0 : e.currentTime;
                                        },
                                        o = () => {
                                            var e;
                                            return null == (e = b.current) ? void 0 : e.duration;
                                        },
                                        i = (e) => {
                                            var n, t, r;
                                            b.current &&
                                                (b.current.currentTime =
                                                    ((n = 0),
                                                    (t = b.current.duration),
                                                    (r = e) < n ? n : r > t ? t : r));
                                        },
                                        s = () => {
                                            var e;
                                            return null == (e = b.current) ? void 0 : e.play();
                                        },
                                        u = () => {
                                            var e;
                                            return null == (e = b.current) ? void 0 : e.pause();
                                        },
                                        c = () => {
                                            u(), i(0);
                                        },
                                        l = () => {
                                            var e, n;
                                            return null !=
                                                (e = null == (n = b.current) ? void 0 : n.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        g = (e) => {
                                            i(e), s();
                                        },
                                        v = (e) => {
                                            i(e), u();
                                        },
                                        p = () => {
                                            (e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop();
                                        },
                                        h = (e, n) => {
                                            var t;
                                            return (
                                                null == (t = b.current) || t.addEventListener(e, n),
                                                () => {
                                                    var t;
                                                    return null == (t = b.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, n);
                                                }
                                            );
                                        },
                                        _ = (e, n) => {
                                            var t;
                                            return (
                                                null == (t = b.current) || t.removeEventListener(e, n),
                                                () => {
                                                    var t;
                                                    return null == (t = b.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, n);
                                                }
                                            );
                                        };
                                    return (
                                        (f.current = {
                                            on: h,
                                            off: _,
                                            play: s,
                                            pause: u,
                                            stop: c,
                                            cleanup: p,
                                            getCurrentTime: a,
                                            getDuration: o,
                                            getCachedKeyframes: l,
                                            goToAndPlay: g,
                                            goToAndStop: v,
                                            setCurrentTime: i,
                                            domRef: b.current,
                                            onChangeTime: t,
                                            onKeyframes: r,
                                        }),
                                        () => {
                                            p(), (f.current = null);
                                        }
                                    );
                                }
                            }, [m, f, d]),
                            (0, s.useEffect)(() => {
                                b.current && o && b.current.play();
                            }, [o, l]),
                            (0, s.useEffect)(() => {
                                if (b.current)
                                    return () => {
                                        b.current && b.current.pause();
                                    };
                            }, []),
                            u().createElement(
                                'video',
                                ge({ src: t, className: r, style: i, loop: l, ref: b, onClick: g }, v),
                            )
                        );
                    }),
                    fe = (0, s.memo)(ve),
                    be = 'DogTag_base_2b',
                    pe = 'DogTag_engraving_eb',
                    he = 'DogTag_background_7f',
                    _e = R.strings.settings.LANGUAGE_CODE(),
                    ye = ['de', 'es', 'fr', 'hu', 'it', 'pl', 'pt_br', 'ru', 'tr', 'uk', 'zh_cn', 'cs'];
                let we;
                !(function (e) {
                    (e.Small = 'small'), (e.Big = 'big');
                })(we || (we = {}));
                const Ee = ({ background: e, engraving: n, size: t = we.Big, grade: r = 0, className: a }) => {
                        const o = ye.includes(_e) ? `_${_e}` : '';
                        return u().createElement(
                            'div',
                            { className: se()(be, a) },
                            u().createElement('div', {
                                className: he,
                                style: {
                                    backgroundImage: `url(R.images.gui.maps.icons.dogtags.${t}.backgrounds.background_${e}_0)`,
                                },
                            }),
                            u().createElement('div', {
                                className: pe,
                                style: {
                                    backgroundImage: `url(R.images.gui.maps.icons.dogtags.${t}.engravings.engraving_${n}_${r}${o})`,
                                },
                            }),
                        );
                    },
                    Se = {
                        base: 'AnimatedDogTag_base_9e',
                        base__small: 'AnimatedDogTag_base__small_ce',
                        base__medium: 'AnimatedDogTag_base__medium_13',
                        base__large: 'AnimatedDogTag_base__large_04',
                        shadow: 'AnimatedDogTag_shadow_24',
                        backplateBox: 'AnimatedDogTag_backplateBox_a8',
                        backplate: 'AnimatedDogTag_backplate_2d',
                        base__extraSmall: 'AnimatedDogTag_base__extraSmall_64',
                        dogTag: 'AnimatedDogTag_dogTag_34',
                        videoBox: 'AnimatedDogTag_videoBox_10',
                        video: 'AnimatedDogTag_video_e4',
                    },
                    xe = {
                        base: 'Counter_base_29',
                        base__extraSmall: 'Counter_base__extraSmall_f8',
                        text: 'Counter_text_73',
                        base__medium: 'Counter_base__medium_78',
                        base__large: 'Counter_base__large_88',
                        count: 'Counter_count_ee',
                        base__small: 'Counter_base__small_52',
                    };
                let Te;
                !(function (e) {
                    (e.ExtraSmall = 'extraSmall'), (e.Small = 'small'), (e.Medium = 'medium'), (e.Large = 'large');
                })(Te || (Te = {}));
                const Oe = ({ engraving: e, count: n, size: t }) => {
                    const r = R.strings.dogtags.component.engraving.coupled.$num(e).counter();
                    return u().createElement(
                        'div',
                        { className: se()(xe.base, xe[`base__${t}`]) },
                        u().createElement('div', { className: xe.text }, r),
                        u().createElement('div', { className: xe.count }, n),
                    );
                };
                let ke, Ce;
                !(function (e) {
                    (e.Static = 'static'),
                        (e.Intro = 'intro'),
                        (e.AutoShowing = 'autoShowing'),
                        (e.Showing = 'showing'),
                        (e.Loop = 'loop'),
                        (e.Hiding = 'hiding');
                })(ke || (ke = {})),
                    (function (e) {
                        (e.ExtraSmall = 'extraSmall'), (e.Small = 'small'), (e.Medium = 'medium'), (e.Large = 'large');
                    })(Ce || (Ce = {}));
                const Re = { duration: 500, easing: d.easeOutBack },
                    Pe = {
                        [Ce.ExtraSmall]: Te.ExtraSmall,
                        [Ce.Small]: Te.Small,
                        [Ce.Medium]: Te.Medium,
                        [Ce.Large]: Te.Large,
                    },
                    Ae = { [Ce.ExtraSmall]: 'small', [Ce.Small]: 'big', [Ce.Medium]: 'big', [Ce.Large]: 's500x300' },
                    Me = {
                        vehicle_sparks_1: 'ach_dog_tag_animation_01',
                        vehicle_sparks_2: 'ach_dog_tag_animation_02',
                        vehicle_sparks_3: 'ach_dog_tag_animation_03',
                    },
                    ze = ({
                        background: e,
                        engraving: n,
                        progress: t = 0,
                        animationState: r = ke.Static,
                        animationName: a = '',
                        onAnimationEnd: o,
                        grade: i = 0,
                        showBackplate: c = !0,
                        size: l = Ce.Medium,
                        className: d,
                        isSoundOff: m,
                    }) => {
                        const g = (0, s.useRef)(null),
                            v = (0, s.useState)([]),
                            f = v[0],
                            b = v[1],
                            p = R.videos.dogtags.$dyn(a);
                        (0, s.useEffect)(() => {
                            const e = g.current;
                            if (e)
                                return ue(() => {
                                    b(e.getCachedKeyframes());
                                });
                        }, [g]);
                        const h = (0, oe.useSpring)(() => ({ from: { opacity: 0 }, config: Re }), [r]),
                            _ = h[0],
                            y = h[1],
                            w = (0, oe.useSpring)(() => ({
                                from: { opacity: 0, transform: 'translateY(-50%)' },
                                config: Re,
                                onRest: () => {
                                    r === ke.Hiding && (null == o || o());
                                },
                            })),
                            S = w[0],
                            x = w[1],
                            T = (0, s.useCallback)(() => {
                                var e;
                                null == (e = g.current) || e.play(),
                                    x.start({ to: { opacity: 1, transform: 'translateY(0%)' }, immediate: !1 }),
                                    !m && re(R.sounds.$dyn(Me[a]));
                            }, [a, x, m]);
                        (0, s.useEffect)(
                            () =>
                                ue(() => {
                                    switch (r) {
                                        case ke.Intro:
                                            return void y.start({ to: { opacity: 1 }, immediate: !1 });
                                        case ke.AutoShowing:
                                            return y.start({ to: { opacity: 1 }, immediate: !1 }), void T();
                                        case ke.Showing:
                                            return void T();
                                        case ke.Loop:
                                            return (
                                                O(),
                                                y.start({ to: { opacity: 1 }, immediate: !0 }),
                                                void x.start({
                                                    to: { opacity: 1, transform: 'translateY(0%)' },
                                                    immediate: !0,
                                                })
                                            );
                                        case ke.Hiding:
                                            return (
                                                y.start({ to: { opacity: 0 } }),
                                                void x.start({
                                                    to: { opacity: 0, transform: 'translateY(-50%)' },
                                                    immediate: !1,
                                                })
                                            );
                                        case ke.Static:
                                            y.start({ to: { opacity: 1 }, immediate: !0 }),
                                                x.start({
                                                    to: { opacity: 1, transform: 'translateY(0%)' },
                                                    immediate: !0,
                                                });
                                    }
                                }),
                            [r, x, y, T],
                        );
                        const O = () => {
                            g.current && (g.current.goToAndPlay(5), re(R.sounds.ach_dog_tag_idle()));
                        };
                        return u().createElement(
                            oe.animated.div,
                            { className: se()(Se.base, Se[`base__${l}`], d), style: _ },
                            c &&
                                u().createElement(
                                    oe.animated.div,
                                    { className: Se.backplateBox, style: S },
                                    u().createElement(
                                        'div',
                                        {
                                            className: Se.backplate,
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.dogtags.${Ae[l]}.bottom_plates.bottom_plate_${e})`,
                                            },
                                        },
                                        u().createElement(Oe, { engraving: n, count: t, size: Pe[l] }),
                                    ),
                                ),
                            u().createElement('div', { className: Se.shadow }),
                            r !== ke.Static &&
                                E.isHigh() &&
                                Boolean(p) &&
                                u().createElement(
                                    'div',
                                    { className: Se.videoBox },
                                    u().createElement(fe, {
                                        ref: g,
                                        className: Se.video,
                                        onEnded: O,
                                        isPrebufferKeyframes: Boolean(f.length),
                                        src: p,
                                    }),
                                ),
                            u().createElement(Ee, {
                                background: e,
                                engraving: n,
                                grade: i,
                                size: we.Big,
                                className: Se.dogTag,
                            }),
                        );
                    };
                var Le = t(9174);
                function je(e, n) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, n) {
                            if (!e) return;
                            if ('string' == typeof e) return De(e, n);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return De(e, n);
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
                function De(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                    return r;
                }
                const Be = (e) => (0 === e ? window : window.subViews.get(e));
                const Ne = ((e, n) => {
                        const t = (0, s.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: a, children: o, mocks: i }) {
                                const c = (0, s.useRef)([]),
                                    l = (t, r, a) => {
                                        var o;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: n = 0,
                                                getRoot: t = Be,
                                                context: r = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function o(e, n = 0) {
                                                    viewEnv.removeDataChangedCallback(e, n)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, n, t) => {
                                                        t.forEach((n) => {
                                                            const t = a.get(n);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const i = (e) => {
                                                    const a = t(n),
                                                        o = r.split('.').reduce((e, n) => e[n], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? o
                                                        : e.split('.').reduce((e, n) => {
                                                              const t = e[n];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, o);
                                                };
                                                return {
                                                    subscribe: (t, o) => {
                                                        const s = 'string' == typeof o ? `${r}.${o}` : r,
                                                            u = te.view.addModelObserver(s, n, !0);
                                                        return a.set(u, t), e && t(i(o)), u;
                                                    },
                                                    readByPath: i,
                                                    createCallback: (e, n) => {
                                                        const t = i(n);
                                                        return (...n) => {
                                                            t(e(...n));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const n = i(e);
                                                        return () => {
                                                            n();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = je(a.keys()); !(e = t()).done; ) o(e.value, n);
                                                    },
                                                    unsubscribe: o,
                                                };
                                            })(r),
                                            s =
                                                'real' === t
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (o = null == a ? void 0 : a.getter)
                                                                  ? o
                                                                  : () => {},
                                                      }),
                                            u = (e) =>
                                                'mocks' === t ? (null == a ? void 0 : a.getter(e)) : s.readByPath(e),
                                            l = (e) => c.current.push(e),
                                            d = e({
                                                mode: t,
                                                readByPath: u,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, n) => {
                                                        const r = null != n ? n : u(e),
                                                            a = Le.LO.box(r, { equals: de });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, Le.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, n) => {
                                                        const r = null != n ? n : u(e),
                                                            a = Le.LO.box(r, { equals: de });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, Le.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, n) => {
                                                        const r = u(n);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, n) => ((e[n] = Le.LO.box(r[n], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, Le.aD)((n) => {
                                                                            e.forEach((e) => {
                                                                                a[e].set(n[e]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = e,
                                                                o = Object.entries(a),
                                                                i = o.reduce(
                                                                    (e, [n, t]) => ((e[t] = Le.LO.box(r[n], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, Le.aD)((e) => {
                                                                            o.forEach(([n, t]) => {
                                                                                i[t].set(e[n]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: l,
                                            }),
                                            m = { mode: t, model: d, externalModel: s, cleanup: l };
                                        return {
                                            model: d,
                                            controls: 'mocks' === t && a ? a.controls(m) : n(m),
                                            externalModel: s,
                                            mode: t,
                                        };
                                    },
                                    d = (0, s.useRef)(!1),
                                    m = (0, s.useState)(r),
                                    g = m[0],
                                    v = m[1],
                                    f = (0, s.useState)(() => l(r, a, i)),
                                    b = f[0],
                                    p = f[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        d.current ? p(l(g, a, i)) : (d.current = !0);
                                    }, [i, g, a]),
                                    (0, s.useEffect)(() => {
                                        v(r);
                                    }, [r]),
                                    (0, s.useEffect)(
                                        () => () => {
                                            b.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [b],
                                    ),
                                    u().createElement(t.Provider, { value: b }, o)
                                );
                            },
                            () => (0, s.useContext)(t),
                        ];
                    })(({ observableModel: e }) => {
                        const n = {
                            root: e.object(),
                            background: e.object('background'),
                            engraving: e.object('engraving'),
                        };
                        return Object.assign({}, n);
                    }, le),
                    He = Ne[0],
                    Ie = Ne[1],
                    $e = 'App_base_71',
                    Fe = (0, ae.Pi)(() => {
                        const e = Ie().model,
                            n = e.root.get().animation,
                            t = e.background.get(),
                            r = e.engraving.get();
                        var a;
                        (a = () => {
                            te.view.resize(500, 300, 'rem'), re(R.sounds.ach_dog_tag_pre_battle_in());
                        }),
                            (0, s.useEffect)(a, []);
                        const o = (0, oe.useSpring)(() => ({
                                from: { opacity: 1 },
                                config: { duration: 1e3, easing: d.easeInCubic },
                                onStart: () => re(R.sounds.ach_dog_tag_pre_battle_out()),
                                onRest: () => {
                                    te.view.sendEvent.close();
                                },
                            })),
                            i = o[0],
                            c = o[1];
                        return (
                            (0, s.useEffect)(
                                () =>
                                    ((e, n) => {
                                        let t;
                                        const r = setTimeout(() => {
                                            t = e();
                                        }, n);
                                        return () => {
                                            'function' == typeof t && t(), clearTimeout(r);
                                        };
                                    })(() => {
                                        c.start({ opacity: 0 });
                                    }, 7e3),
                                [c],
                            ),
                            u().createElement(
                                oe.animated.div,
                                { style: i, className: $e },
                                u().createElement(ze, {
                                    background: t.id,
                                    engraving: r.id,
                                    progress: r.currentProgress,
                                    size: Ce.ExtraSmall,
                                    animationState: ke.AutoShowing,
                                    animationName: n,
                                    isSoundOff: !0,
                                }),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    l().render(
                        u().createElement(He, null, u().createElement(Fe, null)),
                        document.getElementById('root'),
                    );
                });
            },
        },
        t = {};
    function r(e) {
        var a = t[e];
        if (void 0 !== a) return a.exports;
        var o = (t[e] = { exports: {} });
        return n[e](o, o.exports, r), o.exports;
    }
    (r.m = n),
        (e = []),
        (r.O = (n, t, a, o) => {
            if (!t) {
                var i = 1 / 0;
                for (l = 0; l < e.length; l++) {
                    for (var [t, a, o] = e[l], s = !0, u = 0; u < t.length; u++)
                        (!1 & o || i >= o) && Object.keys(r.O).every((e) => r.O[e](t[u]))
                            ? t.splice(u--, 1)
                            : ((s = !1), o < i && (i = o));
                    if (s) {
                        e.splice(l--, 1);
                        var c = a();
                        void 0 !== c && (n = c);
                    }
                }
                return n;
            }
            o = o || 0;
            for (var l = e.length; l > 0 && e[l - 1][2] > o; l--) e[l] = e[l - 1];
            e[l] = [t, a, o];
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
        (r.j = 880),
        (() => {
            var e = { 880: 0 };
            r.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var a,
                        o,
                        [i, s, u] = t,
                        c = 0;
                    if (i.some((n) => 0 !== e[n])) {
                        for (a in s) r.o(s, a) && (r.m[a] = s[a]);
                        if (u) var l = u(r);
                    }
                    for (n && n(t); c < i.length; c++) (o = i[c]), r.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return r.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var a = r.O(void 0, [532], () => r(2477));
    a = r.O(a);
})();
