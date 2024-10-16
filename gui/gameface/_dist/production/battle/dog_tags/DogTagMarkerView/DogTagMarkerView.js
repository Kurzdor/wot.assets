(() => {
    'use strict';
    var e,
        n = {
            674: (e, n, t) => {
                var r = {};
                t.r(r),
                    t.d(r, { mouse: () => y, off: () => p, on: () => b, onResize: () => v, onScaleUpdated: () => f });
                var a = {};
                t.r(a),
                    t.d(a, {
                        events: () => r,
                        getMouseGlobalPosition: () => S,
                        getSize: () => E,
                        graphicsQuality: () => T,
                        playSound: () => _,
                        setRTPC: () => w,
                    });
                var o = {};
                t.r(o), t.d(o, { getBgUrl: () => P, getTextureUrl: () => C });
                var i = {};
                t.r(i),
                    t.d(i, {
                        addModelObserver: () => K,
                        addPreloadTexture: () => I,
                        children: () => o,
                        displayStatus: () => A,
                        displayStatusIs: () => oe,
                        events: () => M,
                        extraSize: () => ie,
                        forceTriggerMouseMove: () => re,
                        freezeTextureBeforeResize: () => Y,
                        getBrowserTexturePath: () => G,
                        getDisplayStatus: () => ae,
                        getScale: () => W,
                        getSize: () => V,
                        getViewGlobalPosition: () => U,
                        isEventHandled: () => te,
                        isFocused: () => ee,
                        pxToRem: () => J,
                        remToPx: () => X,
                        resize: () => q,
                        sendEvent: () => $,
                        setAnimateWindow: () => Z,
                        setEventHandled: () => ne,
                        setInputPaddingsRem: () => F,
                        setSidePaddingsRem: () => Q,
                        whenTutorialReady: () => se,
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
                    bezier: (e, n, t, r) => (a) =>
                        (1 - a) * (1 - a) * (1 - a) * e +
                        3 * (1 - a) * (1 - a) * a * n +
                        3 * (1 - a) * a * a * t +
                        a * a * a * r,
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
                const y = (function () {
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
                function _(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function w(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function S(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const T = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    x = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    O = Object.keys(x).reduce((e, n) => ((e[n] = () => _(x[n])), e), {}),
                    k = { play: Object.assign({}, O, { sound: _ }), setRTPC: w };
                function C(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function P(e, n, t) {
                    return `url(${C(e, n, t)})`;
                }
                const A = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    M = {
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
                    z = ['args'];
                const L = 2,
                    D = 16,
                    j = 32,
                    B = 64,
                    N = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const a = n.args,
                                o = (function (e, n) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (n.indexOf(r) >= 0) continue;
                                            t[r] = e[r];
                                        }
                                    return t;
                                })(n, z);
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
                    $ = {
                        close(e) {
                            N('popover' === e ? L : j);
                        },
                        minimize() {
                            N(B);
                        },
                        move(e) {
                            N(D, { isMouseEvent: !0, on: e });
                        },
                    },
                    H = 15;
                function I(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function F(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, H);
                }
                function G(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function K(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function Q(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, H);
                }
                function V(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function q(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function U(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: X(n.x), y: X(n.y) };
                }
                function Y() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function W() {
                    return viewEnv.getScale();
                }
                function J(e) {
                    return viewEnv.pxToRem(e);
                }
                function X(e) {
                    return viewEnv.remToPx(e);
                }
                function Z(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function ee() {
                    return viewEnv.isFocused();
                }
                function ne() {
                    return viewEnv.setEventHandled();
                }
                function te() {
                    return viewEnv.isEventHandled();
                }
                function re() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ae() {
                    return viewEnv.getShowingStatus();
                }
                const oe = Object.keys(A).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === A[n]), e), {}),
                    ie = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    se = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : M.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ue = { view: i, client: a, sound: k };
                const ce = (e) => {
                    (0, s.useEffect)(e, []);
                };
                function le(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', n);
                    });
                }
                var de = t(3403),
                    me = t(7030),
                    ge = t(6483),
                    ve = t.n(ge);
                const fe = (e) => {
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
                function be() {}
                const pe = be;
                function he() {
                    return !1;
                }
                console.log;
                const ye = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function _e() {
                    return (
                        (_e = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = arguments[n];
                                      for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                  }
                                  return e;
                              }),
                        _e.apply(null, arguments)
                    );
                }
                const we = (0, s.forwardRef)(function (e, n) {
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
                                var t = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (n.indexOf(r) >= 0) continue;
                                        t[r] = e[r];
                                    }
                                return t;
                            })(e, ye);
                        const f = n,
                            b = (0, s.useRef)(null);
                        return (
                            ce(() =>
                                ue.view.events.onDisplayChanged((e, n) => {
                                    var t, r;
                                    n === A.hidden && (null == (t = b.current) || t.pause());
                                    n === A.shown && (null == (r = b.current) || r.play());
                                }),
                            ),
                            (0, s.useEffect)(
                                () =>
                                    fe(() => {
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
                                            changeTimeLoop: be,
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
                                        y = (e, n) => {
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
                                            off: y,
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
                                _e({ src: t, className: r, style: i, loop: l, ref: b, onClick: g }, v),
                            )
                        );
                    }),
                    Ee = (0, s.memo)(we),
                    Se = 'DogTag_base_2b',
                    Te = 'DogTag_engraving_eb',
                    xe = 'DogTag_background_7f',
                    Oe = R.strings.settings.LANGUAGE_CODE(),
                    ke = ['de', 'es', 'fr', 'hu', 'it', 'pl', 'pt_br', 'ru', 'tr', 'uk', 'zh_cn', 'cs'];
                let Ce;
                !(function (e) {
                    (e.Small = 'small'), (e.Big = 'big');
                })(Ce || (Ce = {}));
                const Pe = ({ background: e, engraving: n, size: t = Ce.Big, grade: r = 0, className: a }) => {
                        const o = ke.includes(Oe) ? `_${Oe}` : '';
                        return u().createElement(
                            'div',
                            { className: ve()(Se, a) },
                            u().createElement('div', {
                                className: xe,
                                style: {
                                    backgroundImage: `url(R.images.gui.maps.icons.dogtags.${t}.backgrounds.background_${e}_0)`,
                                },
                            }),
                            u().createElement('div', {
                                className: Te,
                                style: {
                                    backgroundImage: `url(R.images.gui.maps.icons.dogtags.${t}.engravings.engraving_${n}_${r}${o})`,
                                },
                            }),
                        );
                    },
                    Re = {
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
                    Ae = {
                        base: 'Counter_base_29',
                        base__extraSmall: 'Counter_base__extraSmall_f8',
                        text: 'Counter_text_73',
                        base__medium: 'Counter_base__medium_78',
                        base__large: 'Counter_base__large_88',
                        count: 'Counter_count_ee',
                        base__small: 'Counter_base__small_52',
                    };
                let Me;
                !(function (e) {
                    (e.ExtraSmall = 'extraSmall'), (e.Small = 'small'), (e.Medium = 'medium'), (e.Large = 'large');
                })(Me || (Me = {}));
                const ze = ({ engraving: e, count: n, size: t }) => {
                    const r = R.strings.dogtags.component.engraving.coupled.$num(e).counter();
                    return u().createElement(
                        'div',
                        { className: ve()(Ae.base, Ae[`base__${t}`]) },
                        u().createElement('div', { className: Ae.text }, r),
                        u().createElement('div', { className: Ae.count }, n),
                    );
                };
                let Le, De;
                !(function (e) {
                    (e.Static = 'static'),
                        (e.Intro = 'intro'),
                        (e.AutoShowing = 'autoShowing'),
                        (e.Showing = 'showing'),
                        (e.Loop = 'loop'),
                        (e.Hiding = 'hiding');
                })(Le || (Le = {})),
                    (function (e) {
                        (e.ExtraSmall = 'extraSmall'), (e.Small = 'small'), (e.Medium = 'medium'), (e.Large = 'large');
                    })(De || (De = {}));
                const je = { duration: 500, easing: d.easeOutBack },
                    Be = {
                        [De.ExtraSmall]: Me.ExtraSmall,
                        [De.Small]: Me.Small,
                        [De.Medium]: Me.Medium,
                        [De.Large]: Me.Large,
                    },
                    Ne = { [De.ExtraSmall]: 'small', [De.Small]: 'big', [De.Medium]: 'big', [De.Large]: 's500x300' },
                    $e = {
                        vehicle_sparks_1: 'ach_dog_tag_animation_01',
                        vehicle_sparks_2: 'ach_dog_tag_animation_02',
                        vehicle_sparks_3: 'ach_dog_tag_animation_03',
                    },
                    He = ({
                        background: e,
                        engraving: n,
                        progress: t = 0,
                        animationState: r = Le.Static,
                        animationName: a = '',
                        onAnimationEnd: o,
                        grade: i = 0,
                        showBackplate: c = !0,
                        size: l = De.Medium,
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
                                return fe(() => {
                                    b(e.getCachedKeyframes());
                                });
                        }, [g]);
                        const h = (0, me.useSpring)(() => ({ from: { opacity: 0 }, config: je }), [r]),
                            y = h[0],
                            _ = h[1],
                            w = (0, me.useSpring)(() => ({
                                from: { opacity: 0, transform: 'translateY(-50%)' },
                                config: je,
                                onRest: () => {
                                    r === Le.Hiding && (null == o || o());
                                },
                            })),
                            E = w[0],
                            S = w[1],
                            x = (0, s.useCallback)(() => {
                                var e;
                                null == (e = g.current) || e.play(),
                                    S.start({ to: { opacity: 1, transform: 'translateY(0%)' }, immediate: !1 }),
                                    !m && le(R.sounds.$dyn($e[a]));
                            }, [a, S, m]);
                        (0, s.useEffect)(
                            () =>
                                fe(() => {
                                    switch (r) {
                                        case Le.Intro:
                                            return void _.start({ to: { opacity: 1 }, immediate: !1 });
                                        case Le.AutoShowing:
                                            return _.start({ to: { opacity: 1 }, immediate: !1 }), void x();
                                        case Le.Showing:
                                            return void x();
                                        case Le.Loop:
                                            return (
                                                O(),
                                                _.start({ to: { opacity: 1 }, immediate: !0 }),
                                                void S.start({
                                                    to: { opacity: 1, transform: 'translateY(0%)' },
                                                    immediate: !0,
                                                })
                                            );
                                        case Le.Hiding:
                                            return (
                                                _.start({ to: { opacity: 0 } }),
                                                void S.start({
                                                    to: { opacity: 0, transform: 'translateY(-50%)' },
                                                    immediate: !1,
                                                })
                                            );
                                        case Le.Static:
                                            _.start({ to: { opacity: 1 }, immediate: !0 }),
                                                S.start({
                                                    to: { opacity: 1, transform: 'translateY(0%)' },
                                                    immediate: !0,
                                                });
                                    }
                                }),
                            [r, S, _, x],
                        );
                        const O = () => {
                            g.current && (g.current.goToAndPlay(5), le(R.sounds.ach_dog_tag_idle()));
                        };
                        return u().createElement(
                            me.animated.div,
                            { className: ve()(Re.base, Re[`base__${l}`], d), style: y },
                            c &&
                                u().createElement(
                                    me.animated.div,
                                    { className: Re.backplateBox, style: E },
                                    u().createElement(
                                        'div',
                                        {
                                            className: Re.backplate,
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.dogtags.${Ne[l]}.bottom_plates.bottom_plate_${e})`,
                                            },
                                        },
                                        u().createElement(ze, { engraving: n, count: t, size: Be[l] }),
                                    ),
                                ),
                            u().createElement('div', { className: Re.shadow }),
                            r !== Le.Static &&
                                T.isHigh() &&
                                Boolean(p) &&
                                u().createElement(
                                    'div',
                                    { className: Re.videoBox },
                                    u().createElement(Ee, {
                                        ref: g,
                                        className: Re.video,
                                        onEnded: O,
                                        isPrebufferKeyframes: Boolean(f.length),
                                        src: p,
                                    }),
                                ),
                            u().createElement(Pe, {
                                background: e,
                                engraving: n,
                                grade: i,
                                size: Ce.Big,
                                className: Re.dogTag,
                            }),
                        );
                    };
                var Ie = t(9174);
                function Fe(e, n) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, n) {
                            if (e) {
                                if ('string' == typeof e) return Ge(e, n);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? Ge(e, n)
                                          : void 0
                                );
                            }
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
                function Ge(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
                    return r;
                }
                const Ke = (e) => (0 === e ? window : window.subViews.get(e));
                const Qe = ((e, n) => {
                        const t = (0, s.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: a, children: o, mocks: i }) {
                                const c = (0, s.useRef)([]),
                                    l = (t, r, a) => {
                                        var o;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: n = 0,
                                                getRoot: t = Ke,
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
                                                            u = ue.view.addModelObserver(s, n, !0);
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
                                                        for (var e, t = Fe(a.keys()); !(e = t()).done; ) o(e.value, n);
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
                                                            a = Ie.LO.box(r, { equals: he });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, Ie.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, n) => {
                                                        const r = null != n ? n : u(e),
                                                            a = Ie.LO.box(r, { equals: he });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, Ie.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, n) => {
                                                        const r = u(n);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, n) => ((e[n] = Ie.LO.box(r[n], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, Ie.aD)((n) => {
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
                                                                    (e, [n, t]) => ((e[t] = Ie.LO.box(r[n], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, Ie.aD)((e) => {
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
                    }, pe),
                    Ve = Qe[0],
                    qe = Qe[1],
                    Ue = 'App_base_71',
                    Ye = (0, de.Pi)(() => {
                        const e = qe().model,
                            n = e.root.get().animation,
                            t = e.background.get(),
                            r = e.engraving.get();
                        ce(() => {
                            ue.view.resize(500, 300, 'rem'), le(R.sounds.ach_dog_tag_pre_battle_in());
                        });
                        const a = (0, me.useSpring)(() => ({
                                from: { opacity: 1 },
                                config: { duration: 1e3, easing: d.easeInCubic },
                                onStart: () => le(R.sounds.ach_dog_tag_pre_battle_out()),
                                onRest: () => {
                                    ue.view.sendEvent.close();
                                },
                            })),
                            o = a[0],
                            i = a[1];
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
                                        i.start({ opacity: 0 });
                                    }, 7e3),
                                [i],
                            ),
                            u().createElement(
                                me.animated.div,
                                { style: o, className: Ue },
                                u().createElement(He, {
                                    background: t.id,
                                    engraving: r.id,
                                    progress: r.currentProgress,
                                    size: De.ExtraSmall,
                                    animationState: Le.AutoShowing,
                                    animationName: n,
                                    isSoundOff: !0,
                                }),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    l().render(
                        u().createElement(Ve, null, u().createElement(Ye, null)),
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
    var a = r.O(void 0, [532], () => r(674));
    a = r.O(a);
})();
