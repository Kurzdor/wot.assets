(() => {
    'use strict';
    var e,
        t = {
            399: (e, t, n) => {
                var r = {};
                n.r(r),
                    n.d(r, { mouse: () => P, off: () => k, on: () => O, onResize: () => C, onScaleUpdated: () => S });
                var o = {};
                n.r(o),
                    n.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => M,
                        getSize: () => A,
                        graphicsQuality: () => T,
                    });
                var a = {};
                n.r(a), n.d(a, { getBgUrl: () => L, getTextureUrl: () => z });
                var i = {};
                n.r(i),
                    n.d(i, {
                        addModelObserver: () => U,
                        addPreloadTexture: () => G,
                        children: () => a,
                        displayStatus: () => V,
                        displayStatusIs: () => ae,
                        events: () => j,
                        extraSize: () => ie,
                        forceTriggerMouseMove: () => re,
                        freezeTextureBeforeResize: () => J,
                        getBrowserTexturePath: () => F,
                        getDisplayStatus: () => oe,
                        getScale: () => K,
                        getSize: () => $,
                        getViewGlobalPosition: () => W,
                        isEventHandled: () => ne,
                        isFocused: () => ee,
                        pxToRem: () => X,
                        remToPx: () => Y,
                        resize: () => q,
                        sendEvent: () => N,
                        setAnimateWindow: () => Z,
                        setEventHandled: () => te,
                        setInputPaddingsRem: () => Q,
                        setSidePaddingsRem: () => I,
                        whenTutorialReady: () => se,
                    });
                var s = n(179),
                    u = n.n(s),
                    l = n(493),
                    c = n.n(l),
                    d = n(483),
                    v = n.n(d);
                function m(e) {
                    engine.call('PlaySound', e);
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
                    base__disabled: 'CButton_base__disabled_d9',
                    back: 'CButton_back_e5',
                    texture: 'CButton_texture_fe',
                    state: 'CButton_state_11',
                    base__focus: 'CButton_base__focus_83',
                    stateHighlightHover: 'CButton_stateHighlightHover_ff',
                    stateHighlightActive: 'CButton_stateHighlightActive_35',
                    stateDisabled: 'CButton_stateDisabled_54',
                    base__firstHover: 'CButton_base__firstHover_d5',
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
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(f || (f = {}));
                const _ = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: r,
                    disabled: o,
                    mixClass: a,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: f,
                    onMouseUp: _,
                    onMouseLeave: p,
                    onClick: h,
                }) => {
                    const w = (0, s.useRef)(null),
                        y = (0, s.useState)(n),
                        E = y[0],
                        x = y[1],
                        C = (0, s.useState)(!1),
                        S = C[0],
                        O = C[1],
                        k = (0, s.useState)(!1),
                        B = k[0],
                        P = k[1],
                        A = (0, s.useCallback)(() => {
                            o || (w.current && (w.current.focus(), x(!0)));
                        }, [o]),
                        M = (0, s.useCallback)(
                            (e) => {
                                E && null !== w.current && !w.current.contains(e.target) && x(!1);
                            },
                            [E],
                        ),
                        T = (0, s.useCallback)(
                            (e) => {
                                o || (h && h(e));
                            },
                            [o, h],
                        ),
                        z = (0, s.useCallback)(
                            (e) => {
                                o || (null !== i && m(i), c && c(e), P(!0));
                            },
                            [o, i, c],
                        ),
                        L = (0, s.useCallback)(
                            (e) => {
                                d && d(e);
                            },
                            [d],
                        ),
                        V = (0, s.useCallback)(
                            (e) => {
                                o || (_ && _(e), O(!1));
                            },
                            [o, _],
                        ),
                        j = (0, s.useCallback)(
                            (e) => {
                                o || (null !== l && m(l), f && f(e), n && A(), O(!0));
                            },
                            [o, l, f, A, n],
                        ),
                        H = (0, s.useCallback)(
                            (e) => {
                                o || (p && p(e), O(!1));
                            },
                            [o, p],
                        ),
                        D = v()(
                            b.base,
                            b[`base__${r}`],
                            {
                                [b.base__disabled]: o,
                                [b[`base__${t}`]]: t,
                                [b.base__focus]: E,
                                [b.base__highlightActive]: S,
                                [b.base__firstHover]: B,
                            },
                            a,
                        ),
                        N = v()(b.state, b.state__default);
                    return (
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mousedown', M),
                                () => {
                                    document.removeEventListener('mousedown', M);
                                }
                            ),
                            [M],
                        ),
                        (0, s.useEffect)(() => {
                            x(n);
                        }, [n]),
                        u().createElement(
                            'div',
                            {
                                ref: w,
                                className: D,
                                onMouseEnter: z,
                                onMouseMove: L,
                                onMouseUp: V,
                                onMouseDown: j,
                                onMouseLeave: H,
                                onClick: T,
                            },
                            r !== g.ghost &&
                                u().createElement(
                                    u().Fragment,
                                    null,
                                    u().createElement('div', { className: b.back }),
                                    u().createElement('span', { className: b.texture }),
                                ),
                            u().createElement(
                                'span',
                                { className: N },
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
                const p = (0, s.memo)(_);
                var h = n(403);
                function w() {
                    return !1;
                }
                console.log;
                var y = n(174);
                function E(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function x(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const C = E('clientResized'),
                    S = E('self.onScaleUpdated'),
                    O = (e, t) => engine.on(e, t),
                    k = (e, t) => engine.off(e, t),
                    B = { down: E('mousedown'), up: E('mouseup'), move: E('mousemove') },
                    P = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && x(!1);
                        }
                        function n() {
                            e.enabled && x(!0);
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
                                : x(!1);
                        }
                        const o = ['down', 'up', 'move'].reduce(
                            (t, n) => (
                                (t[n] = (function (t) {
                                    return (n) => {
                                        e.listeners += 1;
                                        let o = !0;
                                        const a = `mouse${t}`,
                                            i = B[t]((e) => n([e, 'outside']));
                                        function s(e) {
                                            n([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, s),
                                            r(),
                                            () => {
                                                o &&
                                                    (i(),
                                                    window.removeEventListener(a, s),
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
                        return Object.assign({}, o, {
                            disable() {
                                (e.enabled = !1), r();
                            },
                            enable() {
                                (e.enabled = !0), r();
                            },
                            enableOutside() {
                                e.enabled && x(!0);
                            },
                            disableOutside() {
                                e.enabled && x(!1);
                            },
                        });
                    })();
                function A(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function M(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const T = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function z(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function L(e, t, n) {
                    return `url(${z(e, t, n)})`;
                }
                const V = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    j = {
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
                    H = ['args'],
                    D = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        o = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                    return o;
                                })(t, H);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
                                          arguments:
                                              ((r = o),
                                              Object.entries(r).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    N = {
                        close(e) {
                            D('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            D(64);
                        },
                        move(e) {
                            D(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function G(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function Q(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function F(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function U(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function I(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function $(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function q(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function W(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: Y(t.x), y: Y(t.y) };
                }
                function J() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function K() {
                    return viewEnv.getScale();
                }
                function X(e) {
                    return viewEnv.pxToRem(e);
                }
                function Y(e) {
                    return viewEnv.remToPx(e);
                }
                function Z(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function ee() {
                    return viewEnv.isFocused();
                }
                function te() {
                    return viewEnv.setEventHandled();
                }
                function ne() {
                    return viewEnv.isEventHandled();
                }
                function re() {
                    viewEnv.forceTriggerMouseMove();
                }
                function oe() {
                    return viewEnv.getShowingStatus();
                }
                const ae = Object.keys(V).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === V[t]), e), {}),
                    ie = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    se = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : j.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ue = { view: i, client: o };
                function le(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const ce = (e) => (0 === e ? window : window.subViews.get(e)),
                    de = ((e, t) => {
                        const n = (0, s.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: o, mocks: a }) {
                                const i = (0, s.useRef)([]),
                                    l = (e, n, r) => {
                                        var o;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = ce,
                                                context: r = 'model',
                                            } = {}) {
                                                const o = new Map();
                                                function a(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? o.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                        n.forEach((t) => {
                                                            const n = o.get(t);
                                                            void 0 !== n && n(e);
                                                        });
                                                    });
                                                });
                                                const i = (e) => {
                                                    const o = n(t),
                                                        a = r.split('.').reduce((e, t) => e[t], o);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (n, a) => {
                                                        const s = 'string' == typeof a ? `${r}.${a}` : r,
                                                            u = ue.view.addModelObserver(s, t, !0);
                                                        return o.set(u, n), e && n(i(a)), u;
                                                    },
                                                    readByPath: i,
                                                    createCallback: (e, t) => {
                                                        const n = i(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = i(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                n = (function (e, t) {
                                                                    var n =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (n) return (n = n.call(e)).next.bind(n);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (n = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return le(e, t);
                                                                                var n = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === n &&
                                                                                        e.constructor &&
                                                                                        (n = e.constructor.name),
                                                                                    'Map' === n || 'Set' === n
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === n ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                n,
                                                                                            )
                                                                                          ? le(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        n && (e = n);
                                                                        var r = 0;
                                                                        return function () {
                                                                            return r >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[r++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(o.keys());
                                                            !(e = n()).done;

                                                        )
                                                            a(e.value, t);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(n),
                                            s =
                                                'real' === e
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (o = null == r ? void 0 : r.getter)
                                                                  ? o
                                                                  : () => {},
                                                      }),
                                            u = (t) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(t)) : s.readByPath(t),
                                            l = (e) => i.current.push(e),
                                            c = (({ observableModel: e }) => e.primitives(['isVisibleButton']))({
                                                mode: e,
                                                readByPath: u,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (t, n) => {
                                                        const r = null != n ? n : u(t),
                                                            o = y.LO.box(r, { equals: w });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, y.aD)((e) => o.set(e)),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (t, n) => {
                                                        const r = null != n ? n : u(t),
                                                            o = y.LO.box(r, { equals: w });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, y.aD)((e) => o.set(e)),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (t, n) => {
                                                        const r = u(n);
                                                        if (Array.isArray(t)) {
                                                            const o = t.reduce(
                                                                (e, t) => ((e[t] = y.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, y.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                o[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                        {
                                                            const o = t,
                                                                a = Object.entries(o),
                                                                i = a.reduce(
                                                                    (e, [t, n]) => ((e[n] = y.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, y.aD)((e) => {
                                                                            a.forEach(([t, n]) => {
                                                                                i[n].set(e[t]);
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
                                            d = { mode: e, model: c, externalModel: s, cleanup: l };
                                        return {
                                            model: c,
                                            controls: 'mocks' === e && r ? r.controls(d) : t(d),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    c = (0, s.useRef)(!1),
                                    d = (0, s.useState)(e),
                                    v = d[0],
                                    m = d[1],
                                    b = (0, s.useState)(() => l(e, r, a)),
                                    g = b[0],
                                    f = b[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        c.current ? f(l(v, r, a)) : (c.current = !0);
                                    }, [a, v, r]),
                                    (0, s.useEffect)(() => {
                                        m(e);
                                    }, [e]),
                                    (0, s.useEffect)(
                                        () => () => {
                                            g.externalModel.dispose(), i.current.forEach((e) => e());
                                        },
                                        [g],
                                    ),
                                    u().createElement(n.Provider, { value: g }, o)
                                );
                            },
                            () => (0, s.useContext)(n),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        handleExitClick: e.createCallbackNoArgs('onQuit'),
                        loaded: e.createCallbackNoArgs('onLoaded'),
                    })),
                    ve = de[0],
                    me = de[1],
                    be = (0, h.Pi)(() => {
                        const e = me(),
                            t = e.controls,
                            n = e.model;
                        return u().createElement(
                            'div',
                            { className: 'OnboardingQueueViewApp_base_6d' },
                            u().createElement('img', {
                                className: 'OnboardingQueueViewApp_preloader_1c',
                                onLoad: t.loaded,
                                onError: t.loaded,
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
                            n.isVisibleButton.get() &&
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
                                            onClick: t.handleExitClick,
                                        },
                                        R.strings.sm_lobby.onboardingQueue.skipButton(),
                                    ),
                                ),
                        );
                    });
                engine.whenReady.then(() => {
                    c().render(
                        u().createElement(ve, null, u().createElement(be, null)),
                        document.getElementById('root'),
                    );
                });
            },
        },
        n = {};
    function r(e) {
        var o = n[e];
        if (void 0 !== o) return o.exports;
        var a = (n[e] = { exports: {} });
        return t[e](a, a.exports, r), a.exports;
    }
    (r.m = t),
        (e = []),
        (r.O = (t, n, o, a) => {
            if (!n) {
                var i = 1 / 0;
                for (c = 0; c < e.length; c++) {
                    for (var [n, o, a] = e[c], s = !0, u = 0; u < n.length; u++)
                        (!1 & a || i >= a) && Object.keys(r.O).every((e) => r.O[e](n[u]))
                            ? n.splice(u--, 1)
                            : ((s = !1), a < i && (i = a));
                    if (s) {
                        e.splice(c--, 1);
                        var l = o();
                        void 0 !== l && (t = l);
                    }
                }
                return t;
            }
            a = a || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > a; c--) e[c] = e[c - 1];
            e[c] = [n, o, a];
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
        (r.j = 426),
        (() => {
            var e = { 426: 0 };
            r.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        a,
                        [i, s, u] = n,
                        l = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                        if (u) var c = u(r);
                    }
                    for (t && t(n); l < i.length; l++) (a = i[l]), r.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return r.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var o = r.O(void 0, [503], () => r(399));
    o = r.O(o);
})();
