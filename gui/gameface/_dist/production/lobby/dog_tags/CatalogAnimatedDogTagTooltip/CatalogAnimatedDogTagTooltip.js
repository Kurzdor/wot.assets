(() => {
    'use strict';
    var u,
        e = {
            7420: (u, e, t) => {
                var A = {};
                t.r(A),
                    t.d(A, { mouse: () => c, off: () => s, on: () => C, onResize: () => B, onScaleUpdated: () => i });
                var F = {};
                t.r(F),
                    t.d(F, {
                        events: () => A,
                        getMouseGlobalPosition: () => f,
                        getSize: () => g,
                        graphicsQuality: () => v,
                        playSound: () => d,
                        setRTPC: () => m,
                    });
                var n = {};
                t.r(n), t.d(n, { getBgUrl: () => y, getTextureUrl: () => b });
                var E = {};
                t.r(E),
                    t.d(E, {
                        addModelObserver: () => $,
                        addPreloadTexture: () => N,
                        children: () => n,
                        displayStatus: () => w,
                        displayStatusIs: () => eu,
                        events: () => x,
                        extraSize: () => tu,
                        forceTriggerMouseMove: () => X,
                        freezeTextureBeforeResize: () => q,
                        getBrowserTexturePath: () => j,
                        getDisplayStatus: () => uu,
                        getScale: () => K,
                        getSize: () => I,
                        getViewGlobalPosition: () => G,
                        isEventHandled: () => J,
                        isFocused: () => Y,
                        pxToRem: () => V,
                        remToPx: () => Q,
                        resize: () => H,
                        sendEvent: () => M,
                        setAnimateWindow: () => U,
                        setEventHandled: () => Z,
                        setInputPaddingsRem: () => L,
                        setSidePaddingsRem: () => W,
                        whenTutorialReady: () => Au,
                    });
                var r = t(6483),
                    a = t.n(r);
                function D(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                function o(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                const B = D('clientResized'),
                    i = D('self.onScaleUpdated'),
                    C = (u, e) => engine.on(u, e),
                    s = (u, e) => engine.off(u, e),
                    l = { down: D('mousedown'), up: D('mouseup'), move: D('mousemove') };
                const c = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && o(!1);
                    }
                    function t() {
                        u.enabled && o(!0);
                    }
                    function A() {
                        u.enabled
                            ? u.listeners < 1
                                ? ((u.initialized = !1),
                                  document.body.removeEventListener('mouseenter', e),
                                  document.body.removeEventListener('mouseleave', t))
                                : u.initialized ||
                                  ((u.initialized = !0),
                                  document.body.addEventListener('mouseenter', e),
                                  document.body.addEventListener('mouseleave', t))
                            : o(!1);
                    }
                    const F = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let F = !0;
                                    const n = `mouse${e}`,
                                        E = l[e]((u) => t([u, 'outside']));
                                    function r(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(n, r),
                                        A(),
                                        () => {
                                            F &&
                                                (E(),
                                                window.removeEventListener(n, r),
                                                (u.listeners -= 1),
                                                A(),
                                                (F = !1));
                                        }
                                    );
                                };
                            })(t)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, F, {
                        disable() {
                            (u.enabled = !1), A();
                        },
                        enable() {
                            (u.enabled = !0), A();
                        },
                        enableOutside() {
                            u.enabled && o(!0);
                        },
                        disableOutside() {
                            u.enabled && o(!1);
                        },
                    });
                })();
                function d(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function m(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                function g(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function f(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const v = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    p = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    h = Object.keys(p).reduce((u, e) => ((u[e] = () => d(p[e])), u), {}),
                    _ = { play: Object.assign({}, h, { sound: d }), setRTPC: m };
                function b(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function y(u, e, t) {
                    return `url(${b(u, e, t)})`;
                }
                const w = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    x = {
                        onTextureFrozen: D('self.onTextureFrozen'),
                        onTextureReady: D('self.onTextureReady'),
                        onDomBuilt: D('self.onDomBuilt'),
                        onLoaded: D('self.onLoaded'),
                        onDisplayChanged: D('self.onShowingStatusChanged'),
                        onFocusUpdated: D('self.onFocusChanged'),
                        children: {
                            onAdded: D('children.onAdded'),
                            onLoaded: D('children.onLoaded'),
                            onRemoved: D('children.onRemoved'),
                            onAttached: D('children.onAttached'),
                            onTextureReady: D('children.onTextureReady'),
                            onRequestPosition: D('children.requestPosition'),
                        },
                    },
                    T = ['args'];
                const S = 2,
                    k = 16,
                    O = 32,
                    P = 64,
                    z = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const F = e.args,
                                n = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        A,
                                        F = {},
                                        n = Object.keys(u);
                                    for (A = 0; A < n.length; A++) (t = n[A]), e.indexOf(t) >= 0 || (F[t] = u[t]);
                                    return F;
                                })(e, T);
                            return void 0 !== F
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, n, {
                                          arguments:
                                              ((A = F),
                                              Object.entries(A).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, n));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var A;
                    },
                    M = {
                        close(u) {
                            z('popover' === u ? S : O);
                        },
                        minimize() {
                            z(P);
                        },
                        move(u) {
                            z(k, { isMouseEvent: !0, on: u });
                        },
                    };
                function N(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function L(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function j(u, e, t, A = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, A);
                }
                function $(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function W(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function I(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function H(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function G(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: Q(e.x), y: Q(e.y) };
                }
                function q() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function K() {
                    return viewEnv.getScale();
                }
                function V(u) {
                    return viewEnv.pxToRem(u);
                }
                function Q(u) {
                    return viewEnv.remToPx(u);
                }
                function U(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function Y() {
                    return viewEnv.isFocused();
                }
                function Z() {
                    return viewEnv.setEventHandled();
                }
                function J() {
                    return viewEnv.isEventHandled();
                }
                function X() {
                    viewEnv.forceTriggerMouseMove();
                }
                function uu() {
                    return viewEnv.getShowingStatus();
                }
                const eu = Object.keys(w).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === w[e]), u), {}),
                    tu = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    Au = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : x.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    Fu = { view: E, client: F, sound: _ };
                var nu = t(6179),
                    Eu = t.n(nu);
                const ru = (u) => {
                    (0, nu.useEffect)(u, []);
                };
                function au() {
                    const u = (0, nu.useRef)(0);
                    var e;
                    return (
                        (e = () => {
                            window.cancelAnimationFrame(u.current);
                        }),
                        (0, nu.useEffect)(() => e, []),
                        (0, nu.useMemo)(
                            () => ({
                                run: (e) => {
                                    window.cancelAnimationFrame(u.current),
                                        (u.current = window.requestAnimationFrame(() => {
                                            u.current = window.requestAnimationFrame(() => {
                                                e(), (u.current = 0);
                                            });
                                        }));
                                },
                                clear: () => {
                                    window.cancelAnimationFrame(u.current), (u.current = 0);
                                },
                                get isRunning() {
                                    return 0 !== u.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                const Du = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    ou = ['children', 'className', 'theme'];
                function Bu() {
                    return (
                        (Bu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var A in t) Object.prototype.hasOwnProperty.call(t, A) && (u[A] = t[A]);
                                }
                                return u;
                            }),
                        Bu.apply(this, arguments)
                    );
                }
                const iu = Eu().forwardRef(function (u, e) {
                    let t = u.children,
                        A = u.className,
                        F = u.theme,
                        n = void 0 === F ? 'default' : F,
                        E = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                A,
                                F = {},
                                n = Object.keys(u);
                            for (A = 0; A < n.length; A++) (t = n[A]), e.indexOf(t) >= 0 || (F[t] = u[t]);
                            return F;
                        })(u, ou);
                    const r = au(),
                        D = Eu().useRef(null);
                    return (
                        ru(() => {
                            r.run(() => {
                                const u = D.current;
                                if (!u) return;
                                const e = u.scrollWidth,
                                    t = u.scrollHeight;
                                Fu.view.resize(e, t);
                                const A = window.getComputedStyle(u);
                                Fu.view.setSidePaddingsRem({
                                    left: parseInt(A.getPropertyValue('padding-left'), 10),
                                    top: parseInt(A.getPropertyValue('padding-top'), 10),
                                    right: parseInt(A.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(A.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        Eu().createElement(
                            'div',
                            Bu({}, E, {
                                className: a()(Du.base, Du[`base__theme-${n}`], A),
                                ref: function (u) {
                                    (D.current = u), 'function' == typeof e ? e(u) : e && (e.current = u);
                                },
                            }),
                            Eu().createElement('div', { className: Du.decorator }, t),
                        )
                    );
                });
                var Cu = t(493),
                    su = t.n(Cu),
                    lu = t(1281);
                let cu;
                function du(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(cu || (cu = {}));
                const mu = (u) => u.replace(/&nbsp;/g, ' '),
                    gu = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    fu = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    vu = (u, e, t = cu.left) => u.split(e).reduce(t === cu.left ? gu : fu, []),
                    pu = (() => {
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
                    hu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    _u = (u, e = cu.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (hu.includes(t)) return pu(u);
                        if ('ja' === t) {
                            return (0, lu.D4)()
                                .parse(u)
                                .map((u) => mu(u));
                        }
                        return ((u, e = cu.left) => {
                            let t = [];
                            const A =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                F = mu(u);
                            return vu(F, /( )/, e).forEach((u) => (t = t.concat(vu(u, A, cu.left)))), t;
                        })(u, e);
                    };
                var bu = t(3403),
                    yu = t(7030);
                const wu = (u) => {
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
                function xu() {}
                function Tu() {
                    return !1;
                }
                console.log;
                const Su = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function ku() {
                    return (
                        (ku =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var A in t) Object.prototype.hasOwnProperty.call(t, A) && (u[A] = t[A]);
                                }
                                return u;
                            }),
                        ku.apply(this, arguments)
                    );
                }
                const Ou = (0, nu.forwardRef)(function (u, e) {
                        let t = u.src,
                            A = u.className,
                            F = u.autoplay,
                            n = void 0 !== F && F,
                            E = u.style,
                            r = u.loop,
                            a = void 0 !== r && r,
                            D = u.isPrebufferKeyframes,
                            o = u.keyframesNameConfig,
                            B = u.onClick,
                            i = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    A,
                                    F = {},
                                    n = Object.keys(u);
                                for (A = 0; A < n.length; A++) (t = n[A]), e.indexOf(t) >= 0 || (F[t] = u[t]);
                                return F;
                            })(u, Su);
                        const C = e,
                            s = (0, nu.useRef)(null);
                        return (
                            ru(() =>
                                Fu.view.events.onDisplayChanged((u, e) => {
                                    var t, A;
                                    e === w.hidden && (null == (t = s.current) || t.pause());
                                    e === w.shown && (null == (A = s.current) || A.play());
                                }),
                            ),
                            (0, nu.useEffect)(
                                () =>
                                    wu(() => {
                                        const u = s.current;
                                        if (!C || !u || !D)
                                            return void (null != u && u.cohFastSeek && (u.cohFastSeek = !1));
                                        const e = u.cohGetKeyframeTimestamps();
                                        e.length > 0
                                            ? ((u.cohFastSeek = !0),
                                              e.map((e) => {
                                                  null == u || u.cohPrebufferKeyframe(e);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [D, C],
                            ),
                            (0, nu.useEffect)(() => {
                                if (C && s.current) {
                                    const u = {
                                            changeTimeHandlers: [],
                                            changeKeyframeHandlers: [],
                                            changeTimeLoop: xu,
                                        },
                                        e = () => {
                                            let e = 0;
                                            const t = (function (u) {
                                                    let e = 0;
                                                    return [
                                                        function t() {
                                                            u(), (e = requestAnimationFrame(t));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(e);
                                                        },
                                                    ];
                                                })(() => {
                                                    if (s.current) {
                                                        const t = s.current,
                                                            A = t.currentTime,
                                                            F = t.duration;
                                                        if (
                                                            (e !== A &&
                                                                (u.changeTimeHandlers.forEach((u) =>
                                                                    u({ currentTime: A, duration: F }),
                                                                ),
                                                                (e = A)),
                                                            s.current.paused || !C || !D)
                                                        )
                                                            return;
                                                        const n = s.current.cohGetKeyframeTimestamps();
                                                        n.forEach((e, t) => {
                                                            A > n[t] - 0.02 &&
                                                                A < n[t] &&
                                                                u.changeKeyframeHandlers.forEach((u) => {
                                                                    const A = Object.keys(null != o ? o : {})[t];
                                                                    return u({
                                                                        time: e,
                                                                        name: `${o ? A : `Point_${t}`}`,
                                                                    });
                                                                });
                                                        });
                                                    }
                                                }),
                                                A = t[0],
                                                F = t[1];
                                            return A(), F;
                                        };
                                    u.changeTimeLoop = e();
                                    const t = (e) => (
                                            u.changeTimeHandlers.push(e),
                                            () => {
                                                const t = u.changeTimeHandlers,
                                                    A = t.indexOf(e);
                                                A < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : t.splice(A, 1);
                                            }
                                        ),
                                        A = (e) => (
                                            u.changeKeyframeHandlers.push(e),
                                            () => {
                                                const t = u.changeKeyframeHandlers,
                                                    A = t.indexOf(e);
                                                A < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : t.splice(A, 1);
                                            }
                                        ),
                                        F = () => {
                                            var u;
                                            return null == (u = s.current) ? void 0 : u.currentTime;
                                        },
                                        n = () => {
                                            var u;
                                            return null == (u = s.current) ? void 0 : u.duration;
                                        },
                                        E = (u) => {
                                            var e, t, A;
                                            s.current &&
                                                (s.current.currentTime =
                                                    ((e = 0),
                                                    (t = s.current.duration),
                                                    (A = u) < e ? e : A > t ? t : A));
                                        },
                                        r = () => {
                                            var u;
                                            return null == (u = s.current) ? void 0 : u.play();
                                        },
                                        a = () => {
                                            var u;
                                            return null == (u = s.current) ? void 0 : u.pause();
                                        },
                                        B = () => {
                                            a(), E(0);
                                        },
                                        i = () => {
                                            var u, e;
                                            return null !=
                                                (u = null == (e = s.current) ? void 0 : e.cohGetKeyframeTimestamps())
                                                ? u
                                                : [];
                                        },
                                        l = (u) => {
                                            E(u), r();
                                        },
                                        c = (u) => {
                                            E(u), a();
                                        },
                                        d = () => {
                                            (u.changeTimeHandlers = []),
                                                (u.changeKeyframeHandlers = []),
                                                null == u.changeTimeLoop || u.changeTimeLoop();
                                        },
                                        m = (u, e) => {
                                            var t;
                                            return (
                                                null == (t = s.current) || t.addEventListener(u, e),
                                                () => {
                                                    var t;
                                                    return null == (t = s.current)
                                                        ? void 0
                                                        : t.removeEventListener(u, e);
                                                }
                                            );
                                        },
                                        g = (u, e) => {
                                            var t;
                                            return (
                                                null == (t = s.current) || t.removeEventListener(u, e),
                                                () => {
                                                    var t;
                                                    return null == (t = s.current)
                                                        ? void 0
                                                        : t.removeEventListener(u, e);
                                                }
                                            );
                                        };
                                    return (
                                        (C.current = {
                                            on: m,
                                            off: g,
                                            play: r,
                                            pause: a,
                                            stop: B,
                                            cleanup: d,
                                            getCurrentTime: F,
                                            getDuration: n,
                                            getCachedKeyframes: i,
                                            goToAndPlay: l,
                                            goToAndStop: c,
                                            setCurrentTime: E,
                                            domRef: s.current,
                                            onChangeTime: t,
                                            onKeyframes: A,
                                        }),
                                        () => {
                                            d(), (C.current = null);
                                        }
                                    );
                                }
                            }, [o, C, D]),
                            (0, nu.useEffect)(() => {
                                s.current && n && s.current.play();
                            }, [n, a]),
                            (0, nu.useEffect)(() => {
                                if (s.current)
                                    return () => {
                                        s.current && s.current.pause();
                                    };
                            }, []),
                            Eu().createElement(
                                'video',
                                ku({ src: t, className: A, style: E, loop: a, ref: s, onClick: B }, i),
                            )
                        );
                    }),
                    Ru = (0, nu.memo)(Ou);
                function Pu(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                const zu = 'DogTag_base_2b',
                    Mu = 'DogTag_engraving_eb',
                    Nu = 'DogTag_background_7f',
                    Lu = R.strings.settings.LANGUAGE_CODE(),
                    ju = ['de', 'es', 'fr', 'hu', 'it', 'pl', 'pt_br', 'ru', 'tr', 'uk', 'zh_cn', 'cs'];
                let $u;
                !(function (u) {
                    (u.Small = 'small'), (u.Big = 'big');
                })($u || ($u = {}));
                const Wu = ({ background: u, engraving: e, size: t = $u.Big, grade: A = 0, className: F }) => {
                        const n = ju.includes(Lu) ? `_${Lu}` : '';
                        return Eu().createElement(
                            'div',
                            { className: a()(zu, F) },
                            Eu().createElement('div', {
                                className: Nu,
                                style: {
                                    backgroundImage: `url(R.images.gui.maps.icons.dogtags.${t}.backgrounds.background_${u}_0)`,
                                },
                            }),
                            Eu().createElement('div', {
                                className: Mu,
                                style: {
                                    backgroundImage: `url(R.images.gui.maps.icons.dogtags.${t}.engravings.engraving_${e}_${A}${n})`,
                                },
                            }),
                        );
                    },
                    Iu = {
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
                    Hu = {
                        linear: (u) => u,
                        easeInQuad: (u) => u * u,
                        easeOutQuad: (u) => u * (2 - u),
                        easeInOutQuad: (u) => (u < 0.5 ? 2 * u * u : (4 - 2 * u) * u - 1),
                        easeInCubic: (u) => u * u * u,
                        easeOutCubic: (u) => --u * u * u + 1,
                        easeInOutCubic: (u) => (u < 0.5 ? 4 * u * u * u : (u - 1) * (2 * u - 2) * (2 * u - 2) + 1),
                        easeInQuart: (u) => u * u * u * u,
                        easeOutQuart: (u) => 1 - --u * u * u * u,
                        easeInOutQuart: (u) => (u < 0.5 ? 8 * u * u * u * u : 1 - 8 * --u * u * u * u),
                        easeInQuint: (u) => u * u * u * u * u,
                        easeOutQuint: (u) => 1 + --u * u * u * u * u,
                        easeInOutQuint: (u) => (u < 0.5 ? 16 * u * u * u * u * u : 1 + 16 * --u * u * u * u * u),
                        easeInCirc: (u) => 1 - Math.sqrt(1 - Math.pow(u, 2)),
                        easeOutCirc: (u) => Math.sqrt(1 - Math.pow(u - 1, 2)),
                        easeInOutCirc(u) {
                            const e = Math.sqrt,
                                t = Math.pow;
                            return u < 0.5 ? (1 - e(1 - t(2 * u, 2))) / 2 : (e(1 - t(-2 * u + 2, 2)) + 1) / 2;
                        },
                        easeOutBack(u) {
                            const e = 1.70158;
                            return 1 + 2.70158 * Math.pow(u - 1, 3) + e * Math.pow(u - 1, 2);
                        },
                        bezier: (u, e, t, A) => (F) =>
                            (1 - F) * (1 - F) * (1 - F) * u +
                            3 * (1 - F) * (1 - F) * F * e +
                            3 * (1 - F) * F * F * t +
                            F * F * F * A,
                    },
                    Gu = {
                        base: 'Counter_base_29',
                        base__extraSmall: 'Counter_base__extraSmall_f8',
                        text: 'Counter_text_73',
                        base__medium: 'Counter_base__medium_78',
                        base__large: 'Counter_base__large_88',
                        count: 'Counter_count_ee',
                        base__small: 'Counter_base__small_52',
                    };
                let qu;
                !(function (u) {
                    (u.ExtraSmall = 'extraSmall'), (u.Small = 'small'), (u.Medium = 'medium'), (u.Large = 'large');
                })(qu || (qu = {}));
                const Ku = ({ engraving: u, count: e, size: t }) => {
                    const A = R.strings.dogtags.component.engraving.coupled.$num(u).counter();
                    return Eu().createElement(
                        'div',
                        { className: a()(Gu.base, Gu[`base__${t}`]) },
                        Eu().createElement('div', { className: Gu.text }, A),
                        Eu().createElement('div', { className: Gu.count }, e),
                    );
                };
                let Vu, Qu;
                !(function (u) {
                    (u.Static = 'static'),
                        (u.Intro = 'intro'),
                        (u.AutoShowing = 'autoShowing'),
                        (u.Showing = 'showing'),
                        (u.Loop = 'loop'),
                        (u.Hiding = 'hiding');
                })(Vu || (Vu = {})),
                    (function (u) {
                        (u.ExtraSmall = 'extraSmall'), (u.Small = 'small'), (u.Medium = 'medium'), (u.Large = 'large');
                    })(Qu || (Qu = {}));
                const Uu = { duration: 500, easing: Hu.easeOutBack },
                    Yu = {
                        [Qu.ExtraSmall]: qu.ExtraSmall,
                        [Qu.Small]: qu.Small,
                        [Qu.Medium]: qu.Medium,
                        [Qu.Large]: qu.Large,
                    },
                    Zu = { [Qu.ExtraSmall]: 'small', [Qu.Small]: 'big', [Qu.Medium]: 'big', [Qu.Large]: 's500x300' },
                    Ju = {
                        vehicle_sparks_1: 'ach_dog_tag_animation_01',
                        vehicle_sparks_2: 'ach_dog_tag_animation_02',
                        vehicle_sparks_3: 'ach_dog_tag_animation_03',
                    },
                    Xu = ({
                        background: u,
                        engraving: e,
                        progress: t = 0,
                        animationState: A = Vu.Static,
                        animationName: F = '',
                        onAnimationEnd: n,
                        grade: E = 0,
                        showBackplate: r = !0,
                        size: D = Qu.Medium,
                        className: o,
                        isSoundOff: B,
                    }) => {
                        const i = (0, nu.useRef)(null),
                            C = (0, nu.useState)([]),
                            s = C[0],
                            l = C[1],
                            c = R.videos.dogtags.$dyn(F);
                        (0, nu.useEffect)(() => {
                            const u = i.current;
                            if (u)
                                return wu(() => {
                                    l(u.getCachedKeyframes());
                                });
                        }, [i]);
                        const d = (0, yu.useSpring)(() => ({ from: { opacity: 0 }, config: Uu }), [A]),
                            m = d[0],
                            g = d[1],
                            f = (0, yu.useSpring)(() => ({
                                from: { opacity: 0, transform: 'translateY(-50%)' },
                                config: Uu,
                                onRest: () => {
                                    A === Vu.Hiding && (null == n || n());
                                },
                            })),
                            p = f[0],
                            h = f[1],
                            _ = (0, nu.useCallback)(() => {
                                var u;
                                null == (u = i.current) || u.play(),
                                    h.start({ to: { opacity: 1, transform: 'translateY(0%)' }, immediate: !1 }),
                                    !B && Pu(R.sounds.$dyn(Ju[F]));
                            }, [F, h, B]);
                        (0, nu.useEffect)(
                            () =>
                                wu(() => {
                                    switch (A) {
                                        case Vu.Intro:
                                            return void g.start({ to: { opacity: 1 }, immediate: !1 });
                                        case Vu.AutoShowing:
                                            return g.start({ to: { opacity: 1 }, immediate: !1 }), void _();
                                        case Vu.Showing:
                                            return void _();
                                        case Vu.Loop:
                                            return (
                                                b(),
                                                g.start({ to: { opacity: 1 }, immediate: !0 }),
                                                void h.start({
                                                    to: { opacity: 1, transform: 'translateY(0%)' },
                                                    immediate: !0,
                                                })
                                            );
                                        case Vu.Hiding:
                                            return (
                                                g.start({ to: { opacity: 0 } }),
                                                void h.start({
                                                    to: { opacity: 0, transform: 'translateY(-50%)' },
                                                    immediate: !1,
                                                })
                                            );
                                        case Vu.Static:
                                            g.start({ to: { opacity: 1 }, immediate: !0 }),
                                                h.start({
                                                    to: { opacity: 1, transform: 'translateY(0%)' },
                                                    immediate: !0,
                                                });
                                    }
                                }),
                            [A, h, g, _],
                        );
                        const b = () => {
                            i.current && (i.current.goToAndPlay(5), Pu(R.sounds.ach_dog_tag_idle()));
                        };
                        return Eu().createElement(
                            yu.animated.div,
                            { className: a()(Iu.base, Iu[`base__${D}`], o), style: m },
                            r &&
                                Eu().createElement(
                                    yu.animated.div,
                                    { className: Iu.backplateBox, style: p },
                                    Eu().createElement(
                                        'div',
                                        {
                                            className: Iu.backplate,
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.dogtags.${Zu[D]}.bottom_plates.bottom_plate_${u})`,
                                            },
                                        },
                                        Eu().createElement(Ku, { engraving: e, count: t, size: Yu[D] }),
                                    ),
                                ),
                            Eu().createElement('div', { className: Iu.shadow }),
                            A !== Vu.Static &&
                                v.isHigh() &&
                                Boolean(c) &&
                                Eu().createElement(
                                    'div',
                                    { className: Iu.videoBox },
                                    Eu().createElement(Ru, {
                                        ref: i,
                                        className: Iu.video,
                                        onEnded: b,
                                        isPrebufferKeyframes: Boolean(s.length),
                                        src: c,
                                    }),
                                ),
                            Eu().createElement(Wu, {
                                background: u,
                                engraving: e,
                                grade: E,
                                size: $u.Big,
                                className: Iu.dogTag,
                            }),
                        );
                    },
                    ue = 'FormatText_base_d0',
                    ee = ({ binding: u, text: e = '', classMix: t, alignment: A = cu.left, formatWithBrackets: F }) => {
                        if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                        const n = F && u ? du(e, u) : e;
                        return Eu().createElement(
                            nu.Fragment,
                            null,
                            n.split('\n').map((e, F) =>
                                Eu().createElement(
                                    'div',
                                    { className: a()(ue, t), key: `${e}-${F}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : _u(u, e))))(
                                        e,
                                        A,
                                        u,
                                    ).map((u, e) => Eu().createElement(nu.Fragment, { key: `${e}-${u}` }, u)),
                                ),
                            ),
                        );
                    },
                    te = {
                        blackReal: 'FormatTextWithColorTags_blackReal_3c',
                        whiteReal: 'FormatTextWithColorTags_whiteReal_8a',
                        white: 'FormatTextWithColorTags_white_16',
                        whiteOrange: 'FormatTextWithColorTags_whiteOrange_18',
                        whiteSpanish: 'FormatTextWithColorTags_whiteSpanish_10',
                        par: 'FormatTextWithColorTags_par_ca',
                        parSecondary: 'FormatTextWithColorTags_parSecondary_8d',
                        parTertiary: 'FormatTextWithColorTags_parTertiary_a3',
                        red: 'FormatTextWithColorTags_red_60',
                        redDark: 'FormatTextWithColorTags_redDark_03',
                        yellow: 'FormatTextWithColorTags_yellow_ad',
                        orange: 'FormatTextWithColorTags_orange_e4',
                        cream: 'FormatTextWithColorTags_cream_cd',
                        brown: 'FormatTextWithColorTags_brown_c8',
                        greenBright: 'FormatTextWithColorTags_greenBright_f0',
                        green: 'FormatTextWithColorTags_green_c5',
                        greenDark: 'FormatTextWithColorTags_greenDark_af',
                        blueBooster: 'FormatTextWithColorTags_blueBooster_ac',
                        blueTeamkiller: 'FormatTextWithColorTags_blueTeamkiller_6f',
                        cred: 'FormatTextWithColorTags_cred_4e',
                        gold: 'FormatTextWithColorTags_gold_90',
                        bond: 'FormatTextWithColorTags_bond_71',
                        prom: 'FormatTextWithColorTags_prom_dd',
                        parNoWidth: 'FormatTextWithColorTags_parNoWidth_5a',
                    },
                    Ae = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    Fe = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    ne = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Ee = (0, nu.memo)(({ text: u, binding: e, classMix: t }) => {
                        const A = (0, nu.useCallback)((u) => ({ color: `#${u}` }), []),
                            F = (0, nu.useMemo)(() => e || {}, [e]);
                        let n = Ae.exec(u),
                            E = u,
                            r = 0;
                        for (; n; ) {
                            const t = n[0],
                                a = Fe.exec(t),
                                D = ne.exec(t),
                                o = n[1];
                            if (a && D) {
                                const u = a[0],
                                    n = u + r++ + u;
                                (E = E.replace(t, `%(${n})`)),
                                    (F[n] = te[u]
                                        ? Eu().createElement(
                                              'span',
                                              { className: te[u] },
                                              Eu().createElement(ee, { text: o, binding: e }),
                                          )
                                        : Eu().createElement(
                                              'span',
                                              { style: A(u) },
                                              Eu().createElement(ee, { text: o, binding: e }),
                                          ));
                            }
                            n = Ae.exec(u);
                        }
                        return Eu().createElement(ee, { text: E, classMix: t, binding: F });
                    });
                var re = t(9174);
                function ae(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return De(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return De(u, e);
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var A = 0;
                        return function () {
                            return A >= u.length ? { done: !0 } : { done: !1, value: u[A++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function De(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, A = new Array(e); t < e; t++) A[t] = u[t];
                    return A;
                }
                const oe = (u) => (0 === u ? window : window.subViews.get(u));
                const Be = ((u, e) => {
                        const t = (0, nu.createContext)({});
                        return [
                            function ({ mode: A = 'real', options: F, children: n, mocks: E }) {
                                const r = (0, nu.useRef)([]),
                                    a = (t, A, F) => {
                                        var n;
                                        const E = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = oe,
                                                context: A = 'model',
                                            } = {}) {
                                                const F = new Map();
                                                function n(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? F.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = F.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const E = (u) => {
                                                    const F = t(e),
                                                        n = A.split('.').reduce((u, e) => u[e], F);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? n
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (t, n) => {
                                                        const r = 'string' == typeof n ? `${A}.${n}` : A,
                                                            a = Fu.view.addModelObserver(r, e, !0);
                                                        return F.set(a, t), u && t(E(n)), a;
                                                    },
                                                    readByPath: E,
                                                    createCallback: (u, e) => {
                                                        const t = E(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = E(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var u, t = ae(F.keys()); !(u = t()).done; ) n(u.value, e);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(A),
                                            a =
                                                'real' === t
                                                    ? E
                                                    : Object.assign({}, E, {
                                                          readByPath:
                                                              null != (n = null == F ? void 0 : F.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            D = (u) =>
                                                'mocks' === t ? (null == F ? void 0 : F.getter(u)) : a.readByPath(u),
                                            o = (u) => r.current.push(u),
                                            B = u({
                                                mode: t,
                                                readByPath: D,
                                                externalModel: a,
                                                observableModel: {
                                                    array: (u, e) => {
                                                        const A = null != e ? e : D(u),
                                                            F = re.LO.box(A, { equals: Tu });
                                                        return (
                                                            'real' === t &&
                                                                a.subscribe(
                                                                    (0, re.aD)((u) => F.set(u)),
                                                                    u,
                                                                ),
                                                            F
                                                        );
                                                    },
                                                    object: (u, e) => {
                                                        const A = null != e ? e : D(u),
                                                            F = re.LO.box(A, { equals: Tu });
                                                        return (
                                                            'real' === t &&
                                                                a.subscribe(
                                                                    (0, re.aD)((u) => F.set(u)),
                                                                    u,
                                                                ),
                                                            F
                                                        );
                                                    },
                                                    primitives: (u, e) => {
                                                        const A = D(e);
                                                        if (Array.isArray(u)) {
                                                            const F = u.reduce(
                                                                (u, e) => ((u[e] = re.LO.box(A[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    a.subscribe(
                                                                        (0, re.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                F[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                F
                                                            );
                                                        }
                                                        {
                                                            const F = u,
                                                                n = Object.entries(F),
                                                                E = n.reduce(
                                                                    (u, [e, t]) => ((u[t] = re.LO.box(A[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    a.subscribe(
                                                                        (0, re.aD)((u) => {
                                                                            n.forEach(([e, t]) => {
                                                                                E[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                E
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: o,
                                            }),
                                            i = { mode: t, model: B, externalModel: a, cleanup: o };
                                        return {
                                            model: B,
                                            controls: 'mocks' === t && F ? F.controls(i) : e(i),
                                            externalModel: a,
                                            mode: t,
                                        };
                                    },
                                    D = (0, nu.useRef)(!1),
                                    o = (0, nu.useState)(A),
                                    B = o[0],
                                    i = o[1],
                                    C = (0, nu.useState)(() => a(A, F, E)),
                                    s = C[0],
                                    l = C[1];
                                return (
                                    (0, nu.useEffect)(() => {
                                        D.current ? l(a(B, F, E)) : (D.current = !0);
                                    }, [E, B, F]),
                                    (0, nu.useEffect)(() => {
                                        i(A);
                                    }, [A]),
                                    (0, nu.useEffect)(
                                        () => () => {
                                            s.externalModel.dispose(), r.current.forEach((u) => u());
                                        },
                                        [s],
                                    ),
                                    Eu().createElement(t.Provider, { value: s }, n)
                                );
                            },
                            () => (0, nu.useContext)(t),
                        ];
                    })(
                        ({ observableModel: u }) => ({
                            root: u.object(),
                            engraving: u.object('equippedDogTag.engraving'),
                            background: u.object('equippedDogTag.background'),
                        }),
                        xu,
                    ),
                    ie = Be[0],
                    Ce = Be[1],
                    se = 'App_base_4f',
                    le = 'App_header_90',
                    ce = 'App_subTitle_84',
                    de = 'App_image_06',
                    me = 'App_description_3d',
                    ge = 'App_divider_fa',
                    fe = 'App_container_97',
                    ve = 'App_cup_a4',
                    pe = 'App_lock_c9',
                    he = 'App_condition_6e',
                    _e = 'App_condition__locked_07',
                    be = R.strings.dogtags,
                    ye = (0, bu.Pi)(() => {
                        const u = Ce().model,
                            e = u.root.get(),
                            t = e.stage,
                            A = e.requiredItemsCount,
                            F = e.itemsLeft,
                            n = u.engraving.get(),
                            E = u.background.get(),
                            r = R.strings.dogtags.component.engraving.coupled.$num(n.id);
                        return Eu().createElement(
                            'div',
                            { className: se },
                            Eu().createElement('div', { className: le }, r.$dyn('title')),
                            Eu().createElement(
                                'div',
                                { className: ce },
                                R.strings.dogtags.animatedCustomization.subtitle(),
                            ),
                            Eu().createElement(Xu, {
                                background: E.id,
                                engraving: n.id,
                                progress: A,
                                size: Qu.ExtraSmall,
                                className: de,
                            }),
                            Eu().createElement(
                                'div',
                                { className: me },
                                ((B = E.id), be.component.background.coupled.$num(B)).description(),
                            ),
                            Eu().createElement('div', { className: ge }),
                            Eu().createElement(
                                'div',
                                { className: fe },
                                n.isLocked
                                    ? Eu().createElement(
                                          Eu().Fragment,
                                          null,
                                          Eu().createElement('div', { className: pe }),
                                          Eu().createElement(Ee, {
                                              classMix: a()(he, _e),
                                              text: be.catalogAnimatedDogTagTooltip.locked(),
                                              binding: { stage: t, requiredItemsCount: A, itemsLeft: F },
                                          }),
                                      )
                                    : Eu().createElement(
                                          Eu().Fragment,
                                          null,
                                          Eu().createElement('div', { className: ve }),
                                          Eu().createElement(
                                              'div',
                                              { className: he },
                                              ((D = be.catalogAnimatedDogTagTooltip.unlocked()),
                                              (o = { stage: t, requiredItemsCount: A }),
                                              D.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                                                  const e = 0 === u.indexOf('%') ? 2 : 1;
                                                  return String(o[u.slice(e, -e)]);
                                              })),
                                          ),
                                      ),
                            ),
                        );
                        var D, o, B;
                    });
                engine.whenReady.then(() => {
                    su().render(
                        Eu().createElement(ie, null, Eu().createElement(iu, null, Eu().createElement(ye, null))),
                        document.getElementById('root'),
                    );
                });
            },
        },
        t = {};
    function A(u) {
        var F = t[u];
        if (void 0 !== F) return F.exports;
        var n = (t[u] = { exports: {} });
        return e[u](n, n.exports, A), n.exports;
    }
    (A.m = e),
        (u = []),
        (A.O = (e, t, F, n) => {
            if (!t) {
                var E = 1 / 0;
                for (o = 0; o < u.length; o++) {
                    for (var [t, F, n] = u[o], r = !0, a = 0; a < t.length; a++)
                        (!1 & n || E >= n) && Object.keys(A.O).every((u) => A.O[u](t[a]))
                            ? t.splice(a--, 1)
                            : ((r = !1), n < E && (E = n));
                    if (r) {
                        u.splice(o--, 1);
                        var D = F();
                        void 0 !== D && (e = D);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = u.length; o > 0 && u[o - 1][2] > n; o--) u[o] = u[o - 1];
            u[o] = [t, F, n];
        }),
        (A.n = (u) => {
            var e = u && u.__esModule ? () => u.default : () => u;
            return A.d(e, { a: e }), e;
        }),
        (A.d = (u, e) => {
            for (var t in e) A.o(e, t) && !A.o(u, t) && Object.defineProperty(u, t, { enumerable: !0, get: e[t] });
        }),
        (A.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (u) {
                if ('object' == typeof window) return window;
            }
        })()),
        (A.o = (u, e) => Object.prototype.hasOwnProperty.call(u, e)),
        (A.r = (u) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(u, '__esModule', { value: !0 });
        }),
        (A.j = 289),
        (() => {
            var u = { 289: 0 };
            A.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var F,
                        n,
                        [E, r, a] = t,
                        D = 0;
                    if (E.some((e) => 0 !== u[e])) {
                        for (F in r) A.o(r, F) && (A.m[F] = r[F]);
                        if (a) var o = a(A);
                    }
                    for (e && e(t); D < E.length; D++) (n = E[D]), A.o(u, n) && u[n] && u[n][0](), (u[n] = 0);
                    return A.O(o);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var F = A.O(void 0, [994], () => A(7420));
    F = A.O(F);
})();
