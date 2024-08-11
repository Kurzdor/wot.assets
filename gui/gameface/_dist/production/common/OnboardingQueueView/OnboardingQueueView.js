(() => {
    'use strict';
    var e,
        n = {
            6977: (e, n, t) => {
                var o = {};
                t.r(o),
                    t.d(o, { mouse: () => B, off: () => P, on: () => O, onResize: () => C, onScaleUpdated: () => S });
                var r = {};
                t.r(r),
                    t.d(r, {
                        events: () => o,
                        getMouseGlobalPosition: () => z,
                        getSize: () => k,
                        graphicsQuality: () => j,
                        playSound: () => A,
                        setRTPC: () => M,
                    });
                var i = {};
                t.r(i), t.d(i, { getBgUrl: () => H, getTextureUrl: () => N });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => J,
                        addPreloadTexture: () => I,
                        children: () => i,
                        displayStatus: () => G,
                        displayStatusIs: () => ce,
                        events: () => Q,
                        extraSize: () => de,
                        forceTriggerMouseMove: () => ue,
                        freezeTextureBeforeResize: () => ee,
                        getBrowserTexturePath: () => W,
                        getDisplayStatus: () => le,
                        getScale: () => ne,
                        getSize: () => X,
                        getViewGlobalPosition: () => Z,
                        isEventHandled: () => se,
                        isFocused: () => ie,
                        pxToRem: () => te,
                        remToPx: () => oe,
                        resize: () => Y,
                        sendEvent: () => U,
                        setAnimateWindow: () => re,
                        setEventHandled: () => ae,
                        setInputPaddingsRem: () => q,
                        setSidePaddingsRem: () => K,
                        whenTutorialReady: () => ve,
                    });
                var s = t(6179),
                    u = t.n(s),
                    l = t(493),
                    c = t.n(l),
                    d = t(6483),
                    v = t.n(d);
                function m(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', n);
                    });
                }
                const b = {
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
                let g, f;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(g || (g = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(f || (f = {}));
                const _ = ({
                    children: e,
                    size: n,
                    isFocused: t,
                    type: o,
                    disabled: r,
                    mixClass: i,
                    soundHover: a,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: f,
                    onMouseUp: _,
                    onMouseLeave: p,
                    onClick: h,
                }) => {
                    const y = (0, s.useRef)(null),
                        w = (0, s.useState)(t),
                        E = w[0],
                        x = w[1],
                        C = (0, s.useState)(!1),
                        S = C[0],
                        O = C[1];
                    return (
                        (0, s.useEffect)(() => {
                            function e(e) {
                                E && null !== y.current && !y.current.contains(e.target) && x(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [E]),
                        (0, s.useEffect)(() => {
                            x(t);
                        }, [t]),
                        u().createElement(
                            'div',
                            {
                                ref: y,
                                className: v()(
                                    b.base,
                                    b[`base__${o}`],
                                    r && b.base__disabled,
                                    n && b[`base__${n}`],
                                    E && b.base__focus,
                                    S && b.base__highlightActive,
                                    i,
                                ),
                                onMouseEnter: function (e) {
                                    r || (null !== a && m(a), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    r || (_ && _(e), O(!1));
                                },
                                onMouseDown: function (e) {
                                    r ||
                                        (null !== l && m(l),
                                        f && f(e),
                                        t && (r || (y.current && (y.current.focus(), x(!0)))),
                                        O(!0));
                                },
                                onMouseLeave: function (e) {
                                    r || (p && p(e), O(!1));
                                },
                                onClick: function (e) {
                                    r || (h && h(e));
                                },
                            },
                            o !== g.ghost &&
                                u().createElement(
                                    u().Fragment,
                                    null,
                                    u().createElement('div', { className: b.back }),
                                    u().createElement('span', { className: b.texture }),
                                ),
                            u().createElement(
                                'span',
                                { className: v()(b.state, b.state__default) },
                                u().createElement('span', { className: b.stateDisabled }),
                                u().createElement('span', { className: b.stateHighlightHover }),
                                u().createElement('span', { className: b.stateHighlightActive }),
                            ),
                            u().createElement(
                                'span',
                                { className: b.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                _.defaultProps = { type: g.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const p = _;
                var h = t(3403);
                function y() {
                    return !1;
                }
                console.log;
                var w = t(9174);
                function E(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function x(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const C = E('clientResized'),
                    S = E('self.onScaleUpdated'),
                    O = (e, n) => engine.on(e, n),
                    P = (e, n) => engine.off(e, n),
                    T = { down: E('mousedown'), up: E('mouseup'), move: E('mousemove') },
                    B = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function n() {
                            e.enabled && x(!1);
                        }
                        function t() {
                            e.enabled && x(!0);
                        }
                        function o() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', n),
                                      document.body.removeEventListener('mouseleave', t))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', n),
                                      document.body.addEventListener('mouseleave', t))
                                : x(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (n, t) => (
                                (n[t] = (function (n) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const i = `mouse${n}`,
                                            a = T[n]((e) => t([e, 'outside']));
                                        function s(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, s),
                                            o(),
                                            () => {
                                                r &&
                                                    (a(),
                                                    window.removeEventListener(i, s),
                                                    (e.listeners -= 1),
                                                    o(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                n
                            ),
                            {},
                        );
                        return Object.assign({}, r, {
                            disable() {
                                (e.enabled = !1), o();
                            },
                            enable() {
                                (e.enabled = !0), o();
                            },
                            enableOutside() {
                                e.enabled && x(!0);
                            },
                            disableOutside() {
                                e.enabled && x(!1);
                            },
                        });
                    })();
                function A(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function M(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function k(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function z(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const j = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    L = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    V = Object.keys(L).reduce((e, n) => ((e[n] = () => A(L[n])), e), {}),
                    D = { play: Object.assign({}, V, { sound: A }), setRTPC: M };
                function N(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function H(e, n, t) {
                    return `url(${N(e, n, t)})`;
                }
                const G = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    Q = {
                        onTextureFrozen: E('self.onTextureFrozen'),
                        onTextureReady: E('self.onTextureReady'),
                        onDomBuilt: E('self.onDomBuilt'),
                        onLoaded: E('self.onLoaded'),
                        onDisplayChanged: E('self.onShowingStatusChanged'),
                        onFocusUpdated: E('self.onFocusChanged'),
                        children: {
                            onAdded: E('children.onAdded'),
                            onLoaded: E('children.onLoaded'),
                            onRemoved: E('children.onRemoved'),
                            onAttached: E('children.onAttached'),
                            onTextureReady: E('children.onTextureReady'),
                            onRequestPosition: E('children.requestPosition'),
                        },
                    },
                    F = ['args'],
                    $ = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const r = n.args,
                                i = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        o,
                                        r = {},
                                        i = Object.keys(e);
                                    for (o = 0; o < i.length; o++) (t = i[o]), n.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(n, F);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((o = r),
                                              Object.entries(o).map(([e, n]) => {
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
                        var o;
                    },
                    U = {
                        close(e) {
                            $('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            $(64);
                        },
                        move(e) {
                            $(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function I(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function q(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function W(e, n, t, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, o);
                }
                function J(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function K(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function X(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function Y(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function Z(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: oe(n.x), y: oe(n.y) };
                }
                function ee() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function ne() {
                    return viewEnv.getScale();
                }
                function te(e) {
                    return viewEnv.pxToRem(e);
                }
                function oe(e) {
                    return viewEnv.remToPx(e);
                }
                function re(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function ie() {
                    return viewEnv.isFocused();
                }
                function ae() {
                    return viewEnv.setEventHandled();
                }
                function se() {
                    return viewEnv.isEventHandled();
                }
                function ue() {
                    viewEnv.forceTriggerMouseMove();
                }
                function le() {
                    return viewEnv.getShowingStatus();
                }
                const ce = Object.keys(G).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === G[n]), e), {}),
                    de = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    ve = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : Q.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    me = { view: a, client: r, sound: D };
                function be(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, o = new Array(n); t < n; t++) o[t] = e[t];
                    return o;
                }
                const ge = (e) => (0 === e ? window : window.subViews.get(e)),
                    fe = ((e, n) => {
                        const t = (0, s.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: o, children: r, mocks: i }) {
                                const a = (0, s.useRef)([]),
                                    l = (e, t, o) => {
                                        var r;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: n = 0,
                                                getRoot: t = ge,
                                                context: o = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function i(e, n = 0) {
                                                    viewEnv.removeDataChangedCallback(e, n)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, n, t) => {
                                                        t.forEach((n) => {
                                                            const t = r.get(n);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const a = (e) => {
                                                    const r = t(n),
                                                        i = o.split('.').reduce((e, n) => e[n], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, n) => {
                                                              const t = e[n];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (t, i) => {
                                                        const s = 'string' == typeof i ? `${o}.${i}` : o,
                                                            u = me.view.addModelObserver(s, n, !0);
                                                        return r.set(u, t), e && t(a(i)), u;
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
                                                        for (
                                                            var e,
                                                                t = (function (e, n) {
                                                                    var t =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (t) return (t = t.call(e)).next.bind(t);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (t = (function (e, n) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return be(e, n);
                                                                                var t = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === t &&
                                                                                        e.constructor &&
                                                                                        (t = e.constructor.name),
                                                                                    'Map' === t || 'Set' === t
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === t ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                t,
                                                                                            )
                                                                                          ? be(e, n)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (n && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        t && (e = t);
                                                                        var o = 0;
                                                                        return function () {
                                                                            return o >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[o++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(r.keys());
                                                            !(e = t()).done;

                                                        )
                                                            i(e.value, n);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(t),
                                            s =
                                                'real' === e
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (r = null == o ? void 0 : o.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            u = (n) =>
                                                'mocks' === e ? (null == o ? void 0 : o.getter(n)) : s.readByPath(n),
                                            l = (e) => a.current.push(e),
                                            c = (({ observableModel: e }) => e.primitives(['isVisibleButton']))({
                                                mode: e,
                                                readByPath: u,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (n, t) => {
                                                        const o = null != t ? t : u(n),
                                                            r = w.LO.box(o, { equals: y });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, w.aD)((e) => r.set(e)),
                                                                    n,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (n, t) => {
                                                        const o = null != t ? t : u(n),
                                                            r = w.LO.box(o, { equals: y });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, w.aD)((e) => r.set(e)),
                                                                    n,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (n, t) => {
                                                        const o = u(t);
                                                        if (Array.isArray(n)) {
                                                            const r = n.reduce(
                                                                (e, n) => ((e[n] = w.LO.box(o[n], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, w.aD)((e) => {
                                                                            n.forEach((n) => {
                                                                                r[n].set(e[n]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = n,
                                                                i = Object.entries(r),
                                                                a = i.reduce(
                                                                    (e, [n, t]) => ((e[t] = w.LO.box(o[n], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, w.aD)((e) => {
                                                                            i.forEach(([n, t]) => {
                                                                                a[t].set(e[n]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: l,
                                            }),
                                            d = { mode: e, model: c, externalModel: s, cleanup: l };
                                        return {
                                            model: c,
                                            controls: 'mocks' === e && o ? o.controls(d) : n(d),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    c = (0, s.useRef)(!1),
                                    d = (0, s.useState)(e),
                                    v = d[0],
                                    m = d[1],
                                    b = (0, s.useState)(() => l(e, o, i)),
                                    g = b[0],
                                    f = b[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        c.current ? f(l(v, o, i)) : (c.current = !0);
                                    }, [i, v, o]),
                                    (0, s.useEffect)(() => {
                                        m(e);
                                    }, [e]),
                                    (0, s.useEffect)(
                                        () => () => {
                                            g.externalModel.dispose(), a.current.forEach((e) => e());
                                        },
                                        [g],
                                    ),
                                    u().createElement(t.Provider, { value: g }, r)
                                );
                            },
                            () => (0, s.useContext)(t),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        exit: e.createCallbackNoArgs('onQuit'),
                        loaded: e.createCallbackNoArgs('onLoaded'),
                    })),
                    _e = fe[0],
                    pe = fe[1],
                    he = (0, h.Pi)(() => {
                        const e = pe(),
                            n = e.controls,
                            t = e.model;
                        return u().createElement(
                            'div',
                            { className: 'OnboardingQueueViewApp_base_6d' },
                            u().createElement('img', {
                                className: 'OnboardingQueueViewApp_preloader_1c',
                                onLoad: n.loaded,
                                onError: n.loaded,
                                src: R.images.story_mode.gui.maps.icons.queue.back(),
                            }),
                            u().createElement(
                                'div',
                                { className: 'OnboardingQueueViewApp_waiting_08' },
                                u().createElement(
                                    'div',
                                    { className: 'OnboardingQueueViewApp_text_4b' },
                                    R.strings.sm_lobby.onboardingQueue.spinnerText(),
                                ),
                                u().createElement('div', { className: 'OnboardingQueueViewApp_gear_85' }),
                                u().createElement('div', { className: 'OnboardingQueueViewApp_logo_24' }),
                            ),
                            t.isVisibleButton.get() &&
                                u().createElement(
                                    'div',
                                    { className: 'OnboardingQueueViewApp_block_b0' },
                                    R.strings.sm_lobby.onboardingQueue.skipText(),
                                    u().createElement(
                                        p,
                                        {
                                            type: g.primary,
                                            size: f.medium,
                                            mixClass: 'OnboardingQueueViewApp_button_2f',
                                            onClick: n.exit,
                                        },
                                        R.strings.sm_lobby.onboardingQueue.skipButton(),
                                    ),
                                ),
                        );
                    });
                engine.whenReady.then(() => {
                    c().render(
                        u().createElement(_e, null, u().createElement(he, null)),
                        document.getElementById('root'),
                    );
                });
            },
        },
        t = {};
    function o(e) {
        var r = t[e];
        if (void 0 !== r) return r.exports;
        var i = (t[e] = { exports: {} });
        return n[e](i, i.exports, o), i.exports;
    }
    (o.m = n),
        (e = []),
        (o.O = (n, t, r, i) => {
            if (!t) {
                var a = 1 / 0;
                for (c = 0; c < e.length; c++) {
                    for (var [t, r, i] = e[c], s = !0, u = 0; u < t.length; u++)
                        (!1 & i || a >= i) && Object.keys(o.O).every((e) => o.O[e](t[u]))
                            ? t.splice(u--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(c--, 1);
                        var l = r();
                        void 0 !== l && (n = l);
                    }
                }
                return n;
            }
            i = i || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > i; c--) e[c] = e[c - 1];
            e[c] = [t, r, i];
        }),
        (o.n = (e) => {
            var n = e && e.__esModule ? () => e.default : () => e;
            return o.d(n, { a: n }), n;
        }),
        (o.d = (e, n) => {
            for (var t in n) o.o(n, t) && !o.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
        }),
        (o.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (o.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
        (o.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (o.j = 426),
        (() => {
            var e = { 426: 0 };
            o.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var r,
                        i,
                        [a, s, u] = t,
                        l = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (r in s) o.o(s, r) && (o.m[r] = s[r]);
                        if (u) var c = u(o);
                    }
                    for (n && n(t); l < a.length; l++) (i = a[l]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return o.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var r = o.O(void 0, [503], () => o(6977));
    r = o.O(r);
})();
