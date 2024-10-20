(() => {
    'use strict';
    var u,
        e = {
            1043: (u, e, t) => {
                t.d(e, { j: () => n });
                const n = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (u, e, t) => {
                var n;
                function a(u, e, t) {
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
                        a = (function (u, e) {
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
                        A = Math.min(n, a);
                    return {
                        extraLarge: A === t.extraLarge.weight,
                        large: A === t.large.weight,
                        medium: A === t.medium.weight,
                        small: A === t.small.weight,
                        extraSmall: A === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
                        extraLargeHeight: a === t.extraLarge.weight,
                        largeHeight: a === t.large.weight,
                        mediumHeight: a === t.medium.weight,
                        smallHeight: a === t.small.weight,
                        extraSmallHeight: a === t.extraSmall.weight,
                    };
                }
                t.d(e, { T: () => a }),
                    (function (u) {
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
                    })(n || (n = {}));
            },
            527: (u, e, t) => {
                t.r(e),
                    t.d(e, { mouse: () => r, off: () => i, on: () => E, onResize: () => A, onScaleUpdated: () => F });
                var n = t(2472),
                    a = t(1176);
                const A = (0, n.E)('clientResized'),
                    F = (0, n.E)('self.onScaleUpdated'),
                    E = (u, e) => engine.on(u, e),
                    i = (u, e) => engine.off(u, e),
                    D = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const r = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && (0, a.R)(!1);
                    }
                    function t() {
                        u.enabled && (0, a.R)(!0);
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
                            : (0, a.R)(!1);
                    }
                    const A = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let a = !0;
                                    const A = `mouse${e}`,
                                        F = D[e]((u) => t([u, 'outside']));
                                    function E(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(A, E),
                                        n(),
                                        () => {
                                            a &&
                                                (F(),
                                                window.removeEventListener(A, E),
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
                    return Object.assign({}, A, {
                        disable() {
                            (u.enabled = !1), n();
                        },
                        enable() {
                            (u.enabled = !0), n();
                        },
                        enableOutside() {
                            u.enabled && (0, a.R)(!0);
                        },
                        disableOutside() {
                            u.enabled && (0, a.R)(!1);
                        },
                    });
                })();
            },
            5959: (u, e, t) => {
                t.r(e),
                    t.d(e, {
                        events: () => n,
                        getMouseGlobalPosition: () => F,
                        getSize: () => A,
                        graphicsQuality: () => E,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    });
                var n = t(527),
                    a = t(2493);
                function A(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function F(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const E = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (u, e, t) => {
                function n(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => n });
            },
            2493: (u, e, t) => {
                function n(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function a(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                t.d(e, { E: () => a, G: () => n });
            },
            2472: (u, e, t) => {
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
                t.d(e, { O: () => A });
                var n = t(5959),
                    a = t(514);
                const A = { view: t(7641), client: n, sound: a.ZP };
            },
            514: (u, e, t) => {
                t.d(e, { ZP: () => F });
                var n = t(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    A = Object.keys(a).reduce((u, e) => ((u[e] = () => (0, n.playSound)(a[e])), u), {}),
                    F = { play: Object.assign({}, A, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (u, e, t) => {
                function n(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function a(u, e, t) {
                    return `url(${n(u, e, t)})`;
                }
                t.r(e), t.d(e, { getBgUrl: () => a, getTextureUrl: () => n });
            },
            6112: (u, e, t) => {
                t.d(e, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                t.d(e, { U: () => a });
                var n = t(2472);
                const a = {
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
                t.r(e),
                    t.d(e, {
                        addModelObserver: () => o,
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => S,
                        events: () => A.U,
                        extraSize: () => x,
                        forceTriggerMouseMove: () => w,
                        freezeTextureBeforeResize: () => c,
                        getBrowserTexturePath: () => r,
                        getDisplayStatus: () => b,
                        getScale: () => m,
                        getSize: () => B,
                        getViewGlobalPosition: () => C,
                        isEventHandled: () => p,
                        isFocused: () => f,
                        pxToRem: () => d,
                        remToPx: () => h,
                        resize: () => l,
                        sendEvent: () => F.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => v,
                        setInputPaddingsRem: () => D,
                        setSidePaddingsRem: () => s,
                        whenTutorialReady: () => y,
                    });
                var n = t(3722),
                    a = t(6112),
                    A = t(6538),
                    F = t(8566);
                const E = 15;
                function i(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function D(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, E);
                }
                function r(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function o(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function s(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, E);
                }
                function B(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function l(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function C(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: h(e.x), y: h(e.y) };
                }
                function c() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function m() {
                    return viewEnv.getScale();
                }
                function d(u) {
                    return viewEnv.pxToRem(u);
                }
                function h(u) {
                    return viewEnv.remToPx(u);
                }
                function g(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function v() {
                    return viewEnv.setEventHandled();
                }
                function p() {
                    return viewEnv.isEventHandled();
                }
                function w() {
                    viewEnv.forceTriggerMouseMove();
                }
                function b() {
                    return viewEnv.getShowingStatus();
                }
                const S = Object.keys(a.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === a.W[e]), u),
                        {},
                    ),
                    x = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    y = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : A.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                t.d(e, { qP: () => D });
                const n = ['args'];
                const a = 2,
                    A = 16,
                    F = 32,
                    E = 64,
                    i = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const A = e.args,
                                F = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var n in u)
                                        if ({}.hasOwnProperty.call(u, n)) {
                                            if (e.indexOf(n) >= 0) continue;
                                            t[n] = u[n];
                                        }
                                    return t;
                                })(e, n);
                            return void 0 !== A
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, F, {
                                          arguments:
                                              ((a = A),
                                              Object.entries(a).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, F));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var a;
                    },
                    D = {
                        close(u) {
                            i('popover' === u ? a : F);
                        },
                        minimize() {
                            i(E);
                        },
                        move(u) {
                            i(A, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            3649: (u, e, t) => {
                t.d(e, { Uw: () => B, WU: () => A, v2: () => a });
                var n = t(1281);
                let a;
                function A(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(a || (a = {}));
                const F = (u) => u.replace(/&nbsp;/g, ' '),
                    E = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    i = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    D = (u, e, t = a.left) => u.split(e).reduce(t === a.left ? E : i, []),
                    r = (() => {
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
                    o = ['zh_cn', 'zh_sg', 'zh_tw'],
                    s = (u, e = a.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (o.includes(t)) return r(u);
                        if ('ja' === t) {
                            return (0, n.D4)()
                                .parse(u)
                                .map((u) => F(u));
                        }
                        return ((u, e = a.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                A = F(u);
                            return D(A, /( )/, e).forEach((u) => (t = t.concat(D(u, n, a.left)))), t;
                        })(u, e);
                    },
                    B = (u, e, t) => u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : s(u, e)));
            },
            9155: (u, e, t) => {
                t.d(e, { t: () => c });
                var n = t(3821),
                    a = t(9174),
                    A = t(3946);
                function F() {
                    return !1;
                }
                console.log;
                var E = t(6179),
                    i = t.n(E),
                    D = t(3138);
                function r(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (u) {
                                if ('string' == typeof u) return o(u, e);
                                var t = {}.toString.call(u).slice(8, -1);
                                return (
                                    'Object' === t && u.constructor && (t = u.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(u)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? o(u, e)
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
                function o(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, n = Array(e); t < e; t++) n[t] = u[t];
                    return n;
                }
                const s = (u) => (0 === u ? window : window.subViews.get(u));
                var B = t(2290);
                const l = [
                    'phase',
                    'isAdvanced',
                    'isKillerUnspotted',
                    'impactMode',
                    'isMarkerVisible',
                    'phaseDuration',
                    'phaseTimePassed',
                    'isSimplified',
                ];
                const C = ((u, e) => {
                        const t = (0, E.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: A, children: o, mocks: B }) {
                                const l = (0, E.useRef)([]),
                                    C = (t, n, A) => {
                                        var E;
                                        const i = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = s,
                                                context: n = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function A(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? a.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = a.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const F = (u) => {
                                                    const a = t(e),
                                                        A = n.split('.').reduce((u, e) => u[e], a);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? A
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, A);
                                                };
                                                return {
                                                    subscribe: (t, A) => {
                                                        const E = 'string' == typeof A ? `${n}.${A}` : n,
                                                            i = D.O.view.addModelObserver(E, e, !0);
                                                        return a.set(i, t), u && t(F(A)), i;
                                                    },
                                                    readByPath: F,
                                                    createCallback: (u, e) => {
                                                        const t = F(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = F(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var u, t = r(a.keys()); !(u = t()).done; ) A(u.value, e);
                                                    },
                                                    unsubscribe: A,
                                                };
                                            })(n),
                                            o =
                                                'real' === t
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (E = null == A ? void 0 : A.getter)
                                                                  ? E
                                                                  : () => {},
                                                      }),
                                            B = (u) =>
                                                'mocks' === t ? (null == A ? void 0 : A.getter(u)) : o.readByPath(u),
                                            C = (u) => l.current.push(u),
                                            c = u({
                                                mode: t,
                                                readByPath: B,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (u, e) => {
                                                        const n = null != e ? e : B(u),
                                                            A = a.LO.box(n, { equals: F });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, a.aD)((u) => A.set(u)),
                                                                    u,
                                                                ),
                                                            A
                                                        );
                                                    },
                                                    object: (u, e) => {
                                                        const n = null != e ? e : B(u),
                                                            A = a.LO.box(n, { equals: F });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, a.aD)((u) => A.set(u)),
                                                                    u,
                                                                ),
                                                            A
                                                        );
                                                    },
                                                    primitives: (u, e) => {
                                                        const n = B(e);
                                                        if (Array.isArray(u)) {
                                                            const A = u.reduce(
                                                                (u, e) => ((u[e] = a.LO.box(n[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, a.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                A[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                A
                                                            );
                                                        }
                                                        {
                                                            const A = u,
                                                                F = Object.entries(A),
                                                                E = F.reduce(
                                                                    (u, [e, t]) => ((u[t] = a.LO.box(n[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, a.aD)((u) => {
                                                                            F.forEach(([e, t]) => {
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
                                                cleanup: C,
                                            }),
                                            m = { mode: t, model: c, externalModel: o, cleanup: C };
                                        return {
                                            model: c,
                                            controls: 'mocks' === t && A ? A.controls(m) : e(m),
                                            externalModel: o,
                                            mode: t,
                                        };
                                    },
                                    c = (0, E.useRef)(!1),
                                    m = (0, E.useState)(n),
                                    d = m[0],
                                    h = m[1],
                                    g = (0, E.useState)(() => C(n, A, B)),
                                    f = g[0],
                                    v = g[1];
                                return (
                                    (0, E.useEffect)(() => {
                                        c.current ? v(C(d, A, B)) : (c.current = !0);
                                    }, [B, d, A]),
                                    (0, E.useEffect)(() => {
                                        h(n);
                                    }, [n]),
                                    (0, E.useEffect)(
                                        () => () => {
                                            f.externalModel.dispose(), l.current.forEach((u) => u());
                                        },
                                        [f],
                                    ),
                                    i().createElement(t.Provider, { value: f }, o)
                                );
                            },
                            () => (0, E.useContext)(t),
                        ];
                    })(
                        ({ observableModel: u }) => {
                            const e = Object.assign(
                                    {
                                        root: u.object(),
                                        valueWidth: a.LO.box('unset'),
                                        leaderVisible: a.LO.box(!1),
                                        tableVisible: a.LO.box(!1),
                                        hud: u.primitives(['barsVisible', 'isFinalPhase', 'remainingTime'], 'hud'),
                                    },
                                    u.primitives([
                                        'impactMode',
                                        'phase',
                                        'isAdvanced',
                                        'isKillerUnspotted',
                                        'isSimplified',
                                        'shellType',
                                        'shellIcon',
                                        'armorNominal',
                                        'caliberRule',
                                        'angleRicochet',
                                        'angleFailure',
                                        'angleImpact',
                                        'phaseTimePassed',
                                        'phaseDuration',
                                        'isMarkerVisible',
                                        'deathReason',
                                    ]),
                                ),
                                t = (0, A.Om)(() => {
                                    const u = e.root.get();
                                    u.phase,
                                        u.isAdvanced,
                                        u.isKillerUnspotted,
                                        u.impactMode,
                                        u.isMarkerVisible,
                                        u.phaseDuration,
                                        u.phaseTimePassed,
                                        u.isSimplified;
                                    return (function (u, e) {
                                        if (null == u) return {};
                                        var t = {};
                                        for (var n in u)
                                            if ({}.hasOwnProperty.call(u, n)) {
                                                if (e.indexOf(n) >= 0) continue;
                                                t[n] = u[n];
                                            }
                                        return t;
                                    })(u, l);
                                }),
                                F = (0, A.Om)(() => {
                                    const u = e.isKillerUnspotted,
                                        t = e.impactMode,
                                        a = e.shellType,
                                        A = e.shellIcon,
                                        F = e.armorNominal,
                                        E = e.caliberRule,
                                        i = e.angleRicochet;
                                    return {
                                        isKillerUnspotted: u.get(),
                                        impactMode: t.get(),
                                        shellType: a.get(),
                                        shellIcon: A.get(),
                                        armorNominal: F.get(),
                                        is3CaliberRuleApplied: E.get() === n.fE.ThreeCaliber,
                                        angleRicochet: i.get(),
                                    };
                                }),
                                E = (0, A.Om)(() =>
                                    (0, B.uz)(
                                        t(),
                                        F().impactMode,
                                        e.phase.get(),
                                        e.isKillerUnspotted.get(),
                                        e.isSimplified.get(),
                                    ),
                                ),
                                i = a.LO.box(E()),
                                D = (0, A.Om)(() => {
                                    const u = e.angleRicochet,
                                        t = e.angleFailure,
                                        n = e.angleImpact;
                                    return { angleRicochet: u.get(), angleFailure: t.get(), angleImpact: n.get() };
                                }),
                                r = (0, A.Om)(() => {
                                    const u = e.phaseTimePassed,
                                        t = e.phaseDuration;
                                    return {
                                        phaseTimePassed: u.get(),
                                        phaseDuration: t.get(),
                                        isAdvanced: e.isAdvanced.get(),
                                    };
                                }),
                                o = (0, A.Om)(() => e.isMarkerVisible.get()),
                                s = (0, A.Om)(() => o() || e.leaderVisible.get()),
                                C = (0, A.Om)(() => !!o() && e.tableVisible.get()),
                                c = (0, A.Om)(() => E().length),
                                m = (0, A.Om)((u) => E()[u]),
                                d = (0, A.Om)((u, e) => m(u).animationParams[e]),
                                h = (0, A.Om)((u) => m(u).fullHeight),
                                g = (0, A.Om)((u) => m(u).basicHeight),
                                f = (0, A.Om)((u) => m(u).sections.length),
                                v = (0, A.Om)((u, e) => m(u).sections[e]),
                                p = (0, A.Om)((u, e) => v(u, e).lines.length),
                                w = (0, A.Om)((u, e) => v(u, e).fullHeight),
                                b = (0, A.Om)((u, e, t) => v(u, e).lines[t]),
                                S = (0, A.Om)(() =>
                                    E().some((u) =>
                                        u.sections.some((u) => u.lines.some((u) => 'angleImpact' === u.name)),
                                    ),
                                ),
                                x = (0, A.Om)((u, e) => v(u, e).hasTopSeparator);
                            return Object.assign({}, e, {
                                table: i,
                                computes: {
                                    table: {
                                        getLeaderVisibility: s,
                                        getProgressProps: r,
                                        getData: t,
                                        getCardsCount: c,
                                        getHasAngleIndicator: S,
                                        getVisibility: C,
                                    },
                                    card: {
                                        getAnimationParams: d,
                                        getFullHeight: h,
                                        getBasicHeight: g,
                                        getSectionsCount: f,
                                    },
                                    section: {
                                        getHeight: w,
                                        getLinesCount: p,
                                        getLine: b,
                                        getAngles: D,
                                        getHasTopSeparator: x,
                                    },
                                    getCommonDataLineProps: F,
                                },
                            });
                        },
                        ({ model: u }) =>
                            (function (u) {
                                const e = {};
                                for (const t in u)
                                    if (Object.prototype.hasOwnProperty.call(u, t)) {
                                        const n = u[t];
                                        e[t] = (0, a.aD)(n);
                                    }
                                return e;
                            })({
                                setValueWidth: (e) => u.valueWidth.set(e),
                                setTableVisibility: (e) => u.tableVisible.set(e),
                                setLeaderVisibility: (e) => u.leaderVisible.set(e),
                            }),
                    ),
                    c = (C[0], C[1]);
            },
            1235: (u, e, t) => {
                var n = t(6179),
                    a = t.n(n),
                    A = t(3403),
                    F = t(9155),
                    E = t(6483),
                    i = t.n(E);
                const D = 'DeathCamUIView_base_93',
                    r = 'DeathCamUIView_cinemaBar_87',
                    o = 'DeathCamUIView_cinemaBar__visible_ab',
                    s = 'DeathCamUIView_notificationWrapper_92',
                    B = 'DeathReasonNotification_base_ad',
                    l = 'DeathReasonNotification_base__visible_ab',
                    C = 'DeathReasonNotification_contentContainer_d2',
                    c = 'DeathReasonNotification_destructionContainer_d2',
                    m = 'DeathReasonNotification_icon_7f';
                var d = t(3821);
                const h = R.atlases.deathCam,
                    g = R.strings.death_cam.hints,
                    f = (0, A.Pi)(() => {
                        const u = (0, F.t)().model,
                            e = u.hud.isFinalPhase.get(),
                            t = u.impactMode.get(),
                            n = i()(B, e && l),
                            A = t || d.pE.penetration,
                            E = h[A === d.pE.penetration ? 'shellPenetrationEffective' : A]();
                        return a().createElement(
                            'div',
                            { className: n },
                            a().createElement(
                                'div',
                                { className: C },
                                a().createElement(
                                    'div',
                                    { className: c },
                                    g.death_reason.destroyed(),
                                    a().createElement('div', {
                                        className: m,
                                        style: { backgroundImage: `url('${E}')` },
                                    }),
                                    g.death_reason[A](),
                                ),
                            ),
                        );
                    }),
                    v = 'HintContainer_base_53',
                    p = 'HintContainer_background_9b',
                    w = 'HintContainer_content_21',
                    b = 'HintContainer_divider_12',
                    S = 'Hint_base_e2',
                    x = 'Hint_description_a5',
                    y = 'Hint_counter_be',
                    Q = {
                        base: 'HintButton_base_19',
                        btnOuter: 'HintButton_btnOuter_f9',
                        btnOuter__blink: 'HintButton_btnOuter__blink_e7',
                        animationContainer: 'HintButton_animationContainer_c5',
                        buttonContainer: 'HintButton_buttonContainer_2a',
                        btnInner: 'HintButton_btnInner_e4',
                        btnInner__blink: 'HintButton_btnInner__blink_75',
                    };
                var P = t(7030);
                const I = ({ btnText: u, hasBlinkAnimation: e = !1, isBlinking: t = !1 }) => {
                    const A = (0, n.useState)(!1),
                        F = A[0],
                        E = A[1],
                        D = i()(Q.btnOuter, Q.btnOuter__blink),
                        r = i()(Q.btnInner, Q.btnInner__blink),
                        o = (0, P.useSpring)({
                            loop: !0,
                            reset: F,
                            from: { opacity: 0, transform: 'scale(1)' },
                            to: F
                                ? [
                                      { opacity: 0, transform: 'scale(1)', config: { duration: 150 } },
                                      { opacity: 1, transform: 'scale(1)', config: { duration: 150 } },
                                      { opacity: 0, transform: 'scale(1.4)', config: { duration: 250 } },
                                  ]
                                : { opacity: 0, transform: 'scale(1)' },
                            delay: 700,
                        });
                    return (
                        (0, n.useEffect)(() => {
                            E(!!t);
                        }, [t]),
                        a().createElement(
                            'div',
                            { className: Q.base },
                            a().createElement(
                                'div',
                                { className: Q.btnContainer },
                                a().createElement(
                                    'div',
                                    { className: Q.btnOuter },
                                    a().createElement('div', { className: Q.btnInner }, u),
                                ),
                            ),
                            e &&
                                t &&
                                a().createElement(
                                    P.animated.div,
                                    { className: Q.animationContainer, style: o },
                                    a().createElement(
                                        'div',
                                        { className: D },
                                        a().createElement('div', { className: r }, u),
                                    ),
                                ),
                        )
                    );
                };
                var _ = t(3649);
                const H = 'FormatText_base_d0',
                    O = ({
                        binding: u,
                        text: e = '',
                        classMix: t,
                        alignment: A = _.v2.left,
                        formatWithBrackets: F,
                    }) => {
                        if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                        const E = F && u ? (0, _.WU)(e, u) : e;
                        return a().createElement(
                            n.Fragment,
                            null,
                            E.split('\n').map((e, F) =>
                                a().createElement(
                                    'div',
                                    { className: i()(H, t), key: `${e}-${F}` },
                                    (0, _.Uw)(e, A, u).map((u, e) =>
                                        a().createElement(n.Fragment, { key: `${e}-${u}` }, u),
                                    ),
                                ),
                            ),
                        );
                    },
                    M = ({ btnText: u, description: e, remainingTime: t = 0 }) => {
                        const n = t.toFixed(2).toString().padStart(5, '0'),
                            A = { duration: a().createElement('div', { className: y }, n) };
                        return a().createElement(
                            'div',
                            { className: S },
                            a().createElement(I, { btnText: u }),
                            a().createElement('div', { className: x }, a().createElement(O, { text: e, binding: A })),
                        );
                    },
                    T = (0, A.Pi)(() => {
                        const u = (0, F.t)().model,
                            e = u.hud.barsVisible.get(),
                            t = u.hud.remainingTime.get(),
                            n = u.isSimplified.get()
                                ? R.strings.death_cam.hints.camera_flow.pauseSimplified()
                                : R.strings.death_cam.hints.camera_flow.pause(),
                            A = e ? n : R.strings.death_cam.hints.camera_flow.resume();
                        return a().createElement(
                            'div',
                            { className: v },
                            a().createElement('div', { className: p }),
                            a().createElement(
                                'div',
                                { className: w },
                                a().createElement(M, {
                                    btnText: R.strings.death_cam.hints.skip.buttonText(),
                                    description: R.strings.death_cam.hints.skip.label(),
                                }),
                                a().createElement('div', { className: b }),
                                a().createElement(M, {
                                    btnText: R.strings.death_cam.hints.camera_flow.buttonText(),
                                    description: A,
                                    remainingTime: t,
                                }),
                            ),
                        );
                    });
                (0, A.Pi)(() => {
                    const u = (0, F.t)().model.hud.barsVisible.get(),
                        e = i()(r, u && o);
                    return a().createElement(
                        'div',
                        { className: D },
                        a().createElement('div', { className: e }),
                        a().createElement('div', { className: s }, a().createElement(f, null)),
                        a().createElement(T, null),
                        a().createElement('div', { className: e }),
                    );
                });
            },
            1433: (u, e, t) => {
                t.d(e, { Ac: () => E, Qm: () => i, YF: () => A, h: () => F, zn: () => a });
                var n = t(3821);
                const a = 300,
                    A = 1,
                    F = 16,
                    E = {
                        small: { head: F, major: 38, inner: 19, sectionPadding: 10 },
                        big: { head: F, major: 44, inner: 28, sectionPadding: 5 },
                    };
                let i;
                !(function (u) {
                    (u.OrangeGlow = 'orangeGlow'),
                        (u.RedGlow = 'redGlow'),
                        (u.Icon = 'icon'),
                        (u.Advanced = 'advanced'),
                        (u.Major = 'major'),
                        (u.HeadIconShell = 'headIconShell'),
                        (u.HeadIconTank = 'headIconTank'),
                        (u.AdditionalShellInfo = 'additionalShellInfo');
                })(i || (i = {}));
                n.gC.highExplosive,
                    n.gC.highExplosiveModern,
                    n.gC.highExplosiveModernPremium,
                    n.gC.highExplosivePremium,
                    n.gC.highExplosiveSpg,
                    n.gC.highExplosiveSpgStun,
                    n.gC.hollowCharge,
                    n.gC.hollowChargePremium;
            },
            2290: (u, e, t) => {
                t.d(e, { uz: () => h });
                var n = t(1043),
                    a = t(5262),
                    A = t(3821),
                    F = t(1433);
                const E = {
                        [A.pE.penetration]: {
                            [A.nz.killer]: [
                                [
                                    [
                                        {
                                            name: 'shellType',
                                            effects: new Set([F.Qm.Major, F.Qm.Icon, F.Qm.HeadIconShell]),
                                        },
                                    ],
                                ],
                                [
                                    [
                                        { name: 'shellCaliber', effects: new Set([F.Qm.Major, F.Qm.Icon]) },
                                        { name: 'caliberRule', effects: new Set([F.Qm.OrangeGlow, F.Qm.Advanced]) },
                                    ],
                                ],
                                [
                                    [
                                        { name: 'shellDamageBasic', effects: new Set([F.Qm.Advanced]) },
                                        { name: 'shellVelocityBasic', effects: new Set([F.Qm.Advanced]) },
                                    ],
                                ],
                            ],
                            [A.nz.trajectory]: [
                                [
                                    [
                                        {
                                            name: 'shootDistance',
                                            effects: new Set([F.Qm.Major, F.Qm.Icon, F.Qm.HeadIconShell]),
                                        },
                                    ],
                                ],
                                [
                                    [{ name: 'shellPenetrationEffective', effects: new Set([F.Qm.Major, F.Qm.Icon]) }],
                                    [{ name: 'shellPenetrationBasic', effects: new Set([F.Qm.Advanced]) }],
                                ],
                                [[{ name: 'shellType', effects: new Set([F.Qm.Major, F.Qm.Icon]) }]],
                            ],
                            [A.nz.impact]: [
                                [
                                    [
                                        {
                                            name: 'shellPenetrationEffective',
                                            effects: new Set([F.Qm.Icon, F.Qm.Major, F.Qm.HeadIconShell]),
                                        },
                                    ],
                                ],
                                [
                                    [
                                        {
                                            name: 'armorRelative',
                                            effects: new Set([F.Qm.Major, F.Qm.Icon, F.Qm.HeadIconTank]),
                                        },
                                    ],
                                    [
                                        { name: 'armorNominal', effects: new Set([F.Qm.Advanced]) },
                                        { name: 'shellArmorAngleGain', effects: new Set([F.Qm.Advanced]) },
                                    ],
                                    [
                                        { name: 'angleImpact', effects: new Set([F.Qm.Icon, F.Qm.Advanced]) },
                                        { name: 'angleFailure', effects: new Set([F.Qm.Advanced]) },
                                        {
                                            name: 'angleRicochet',
                                            effects: new Set([F.Qm.Advanced, F.Qm.AdditionalShellInfo]),
                                        },
                                    ],
                                ],
                                [
                                    [
                                        {
                                            name: 'shellDamageEffective',
                                            effects: new Set([
                                                F.Qm.Major,
                                                F.Qm.Icon,
                                                F.Qm.Advanced,
                                                F.Qm.HeadIconShell,
                                            ]),
                                        },
                                    ],
                                    [
                                        { name: 'shellDamageBasic', effects: new Set([F.Qm.Advanced]) },
                                        { name: 'shellDamageRandomizationFactor', effects: new Set([F.Qm.Advanced]) },
                                        { name: 'damageDistanceModifier', effects: new Set([F.Qm.Advanced]) },
                                    ],
                                ],
                                [[{ name: 'deathReason', effects: new Set([F.Qm.RedGlow, F.Qm.Icon, F.Qm.Major]) }]],
                            ],
                        },
                        [A.pE.nonPenetrationDamage]: {
                            [A.nz.killer]: [
                                [
                                    [
                                        {
                                            name: 'shellType',
                                            effects: new Set([F.Qm.Major, F.Qm.Icon, F.Qm.HeadIconShell]),
                                        },
                                    ],
                                ],
                                [[{ name: 'shellCaliber', effects: new Set([F.Qm.Major, F.Qm.Icon]) }]],
                                [[{ name: 'shellVelocityBasic', effects: new Set([F.Qm.Advanced]) }]],
                            ],
                            [A.nz.trajectory]: [
                                [
                                    [
                                        {
                                            name: 'shootDistance',
                                            effects: new Set([F.Qm.Major, F.Qm.Icon, F.Qm.HeadIconShell]),
                                        },
                                    ],
                                ],
                                [
                                    [{ name: 'shellPenetrationEffective', effects: new Set([F.Qm.Major, F.Qm.Icon]) }],
                                    [{ name: 'shellPenetrationBasic', effects: new Set([F.Qm.Advanced]) }],
                                ],
                                [[{ name: 'shellType', effects: new Set([F.Qm.Major, F.Qm.Icon]) }]],
                            ],
                            [A.nz.impact]: [
                                [
                                    [
                                        {
                                            name: 'shellPenetrationEffective',
                                            effects: new Set([F.Qm.Icon, F.Qm.Major, F.Qm.HeadIconShell]),
                                        },
                                    ],
                                ],
                                [
                                    [
                                        {
                                            name: 'shellDamageEffective',
                                            effects: new Set([F.Qm.Major, F.Qm.Icon, F.Qm.HeadIconShell]),
                                        },
                                    ],
                                ],
                                [[{ name: 'deathReason', effects: new Set([F.Qm.RedGlow, F.Qm.Icon, F.Qm.Major]) }]],
                            ],
                        },
                        [A.pE.legacyHE]: {
                            [A.nz.killer]: [
                                [
                                    [
                                        {
                                            name: 'shellType',
                                            effects: new Set([F.Qm.Icon, F.Qm.Major, F.Qm.HeadIconShell]),
                                        },
                                    ],
                                ],
                                [
                                    [{ name: 'shellCaliber', effects: new Set([F.Qm.Major, F.Qm.Icon]) }],
                                    [
                                        { name: 'shellDamageBasic', effects: new Set([F.Qm.Advanced]) },
                                        { name: 'shellVelocityBasic', effects: new Set([F.Qm.Advanced]) },
                                    ],
                                ],
                            ],
                            [A.nz.trajectory]: [
                                [
                                    [
                                        {
                                            name: 'shootDistance',
                                            effects: new Set([F.Qm.Major, F.Qm.Icon, F.Qm.HeadIconShell]),
                                        },
                                    ],
                                ],
                                [
                                    [{ name: 'shellPenetrationEffective', effects: new Set([F.Qm.Major, F.Qm.Icon]) }],
                                    [{ name: 'shellPenetrationBasic', effects: new Set([F.Qm.Advanced]) }],
                                    [{ name: 'shellType', effects: new Set([F.Qm.Major, F.Qm.Icon]) }],
                                ],
                            ],
                            [A.nz.impact]: [
                                [
                                    [
                                        {
                                            name: 'shellPenetrationEffective',
                                            effects: new Set([F.Qm.Major, F.Qm.Icon, F.Qm.HeadIconShell]),
                                        },
                                    ],
                                ],
                                [
                                    [
                                        {
                                            name: 'shellDamageEffective',
                                            effects: new Set([F.Qm.Major, F.Qm.Icon, F.Qm.HeadIconShell]),
                                        },
                                    ],
                                    [{ name: 'shellDamageBurst', effects: new Set([F.Qm.Advanced]) }],
                                    [
                                        { name: 'shellDamageRandomizationFactor', effects: new Set([F.Qm.Advanced]) },
                                        { name: 'shellDamageLossDistance', effects: new Set([F.Qm.Advanced]) },
                                        { name: 'shellDamageLossProtectionHe', effects: new Set([F.Qm.Advanced]) },
                                        {
                                            name: 'shellDamageLossProtectionSpallLiner',
                                            effects: new Set([F.Qm.Advanced]),
                                        },
                                    ],
                                ],
                                [[{ name: 'deathReason', effects: new Set([F.Qm.RedGlow, F.Qm.Icon, F.Qm.Major]) }]],
                            ],
                        },
                        [A.pE.modernHE]: {
                            [A.nz.killer]: [
                                [
                                    [
                                        {
                                            name: 'shellType',
                                            effects: new Set([F.Qm.Major, F.Qm.Icon, F.Qm.HeadIconShell]),
                                        },
                                    ],
                                ],
                                [
                                    [{ name: 'shellCaliber', effects: new Set([F.Qm.Major, F.Qm.Icon]) }],
                                    [
                                        { name: 'shellDamageBasic', effects: new Set([F.Qm.Advanced]) },
                                        { name: 'shellVelocityBasic', effects: new Set([F.Qm.Advanced]) },
                                    ],
                                ],
                            ],
                            [A.nz.trajectory]: [
                                [
                                    [
                                        {
                                            name: 'shootDistance',
                                            effects: new Set([F.Qm.Major, F.Qm.Icon, F.Qm.HeadIconShell]),
                                        },
                                    ],
                                ],
                                [
                                    [{ name: 'shellPenetrationEffective', effects: new Set([F.Qm.Major, F.Qm.Icon]) }],
                                    [{ name: 'shellPenetrationBasic', effects: new Set([F.Qm.Advanced]) }],
                                    [{ name: 'shellType', effects: new Set([F.Qm.Major, F.Qm.Icon]) }],
                                ],
                            ],
                            [A.nz.impact]: [
                                [
                                    [
                                        {
                                            name: 'shellPenetrationEffective',
                                            effects: new Set([F.Qm.Major, F.Qm.Icon, F.Qm.HeadIconShell]),
                                        },
                                    ],
                                ],
                                [
                                    [
                                        {
                                            name: 'shellDamageEffective',
                                            effects: new Set([F.Qm.Major, F.Qm.Icon, F.Qm.HeadIconShell]),
                                        },
                                    ],
                                    [{ name: 'shellDamageBurst', effects: new Set([F.Qm.Advanced]) }],
                                    [
                                        { name: 'shellDamageRandomizationFactor', effects: new Set([F.Qm.Advanced]) },
                                        { name: 'shellDamageLossProtectionHe', effects: new Set([F.Qm.Advanced]) },
                                        {
                                            name: 'shellDamageLossProtectionSpallLiner',
                                            effects: new Set([F.Qm.Advanced]),
                                        },
                                    ],
                                ],
                                [[{ name: 'deathReason', effects: new Set([F.Qm.RedGlow, F.Qm.Icon, F.Qm.Major]) }]],
                            ],
                        },
                    },
                    i = (u) => u.has(F.Qm.OrangeGlow) || u.has(F.Qm.RedGlow),
                    D = ['deathReason', 'armorNominal'],
                    r = ['angleRicochet', 'angleFailure', 'angleImpact'],
                    o = () => (0, a.T)(viewEnv.getClientSizeRem().width, viewEnv.getClientSizeRem().height, n.j),
                    s = (u) => {
                        const e = u.map((u) => ({
                                hasTopSeparator: u.hasTopSeparator,
                                fullHeight: 0,
                                basicHeight: 0,
                                lines: u.lines.map((e) =>
                                    ((u, e) => {
                                        const t = !o().extraSmall,
                                            n = F.Ac[t ? 'big' : 'small'];
                                        return u.effects.has(F.Qm.HeadIconShell) || u.effects.has(F.Qm.HeadIconTank)
                                            ? Object.assign({}, u, { height: n.head + n.major + 1 })
                                            : u.effects.has(F.Qm.Major) || i(u.effects) || e
                                              ? Object.assign({}, u, { height: n.major })
                                              : Object.assign({}, u, { height: n.inner });
                                    })(e, 1 === u.lines.length),
                                ),
                            })),
                            t = g(e);
                        return {
                            sections: t,
                            fullHeight: v(t, !0),
                            basicHeight: v(t, !1),
                            animationParams: {
                                basic: {
                                    proportion: 0,
                                    contentIncreaseDelay: 0,
                                    contentDecreaseDelay: 0,
                                    dimensionsIncreaseDelay: 0,
                                    dimensionsDecreaseDelay: 0,
                                    duration: 0,
                                },
                                advanced: {
                                    proportion: 0,
                                    contentIncreaseDelay: 0,
                                    contentDecreaseDelay: 0,
                                    dimensionsIncreaseDelay: 0,
                                    dimensionsDecreaseDelay: 0,
                                    duration: 0,
                                },
                            },
                        };
                    },
                    B = (u, e, t) => {
                        const n = t.slice(0, e + 1).reduce((u, e) => u + e.animationParams.basic.duration, 0),
                            a = t.slice(0, e + 1).reduce((u, e) => u + e.animationParams.advanced.duration, 0),
                            A = F.zn - n,
                            E = F.zn - a;
                        return (
                            (u.animationParams.basic.contentDecreaseDelay = A),
                            (u.animationParams.basic.dimensionsDecreaseDelay = A + F.zn),
                            (u.animationParams.advanced.contentDecreaseDelay = E),
                            (u.animationParams.advanced.dimensionsDecreaseDelay = E + F.zn),
                            u
                        );
                    },
                    l = (u, e, t) => {
                        const n = (u) =>
                                t[e - 1].animationParams[u].duration +
                                t[e - 1].animationParams[u].dimensionsIncreaseDelay,
                            a = Math.round(0 === e ? 0 : n('basic')),
                            A = Math.round(0 === e ? 0 : n('advanced')),
                            E = a + F.zn,
                            i = A + F.zn;
                        return (
                            (u.animationParams.basic.dimensionsIncreaseDelay = a),
                            (u.animationParams.basic.contentIncreaseDelay = E),
                            (u.animationParams.advanced.dimensionsIncreaseDelay = A),
                            (u.animationParams.advanced.contentIncreaseDelay = i),
                            u
                        );
                    },
                    C = (u) => {
                        const e = u.reduce((u, e) => u + e.fullHeight, 0),
                            t = u.reduce((u, e) => u + e.basicHeight, 0),
                            n = e - t;
                        return u
                            .map((u) => {
                                const e = u.fullHeight - u.basicHeight,
                                    a = u.basicHeight / t,
                                    A = n ? e / n : 1;
                                return (
                                    (u.animationParams.basic.proportion = a),
                                    (u.animationParams.basic.duration = a * F.zn),
                                    (u.animationParams.advanced.proportion = A),
                                    (u.animationParams.advanced.duration = A * F.zn),
                                    u
                                );
                            })
                            .map(l)
                            .map(B);
                    },
                    c = (u) => u.filter((u) => 0 !== u.lines.length),
                    m = (u) =>
                        u.reduce(
                            (u, e) =>
                                e.lines.every((u) => !i(u.effects))
                                    ? (u.push(e), u)
                                    : (0 === u.length && u.push({ hasTopSeparator: !1, lines: [] }),
                                      e.lines.forEach((t, n) => {
                                          i(t.effects)
                                              ? (0 === u[u.length - 1].lines.length
                                                    ? u[u.length - 1].lines.push(t)
                                                    : u.push({ hasTopSeparator: !1, lines: [t] }),
                                                n !== e.lines.length - 1 && u.push({ hasTopSeparator: !1, lines: [] }))
                                              : u[u.length - 1].lines.push(t);
                                      }),
                                      u),
                            [],
                        ),
                    d = (u) => 0 !== u.length,
                    h = (u, e, t, n, a) => {
                        const i = (t) => (
                                (('shootDistance' === t.name && n) ||
                                    ('shellPenetrationEffective' === t.name && e !== A.pE.penetration) ||
                                    ('armorRelative' === t.name && 0 === u.armorNominal)) &&
                                    t.effects.add(F.Qm.OrangeGlow),
                                (('shellPenetrationEffective' === t.name && e === A.pE.penetration) ||
                                    'shellDamageEffective' === t.name) &&
                                    t.effects.add(F.Qm.RedGlow).add(F.Qm.Major),
                                t
                            ),
                            o = (e) => ({ name: e.name, value: u[e.name], effects: new Set([...e.effects]) }),
                            B = E[e][t]
                                .map((e) =>
                                    e.map((e, E) => ({
                                        hasTopSeparator: Boolean(E),
                                        lines: e
                                            .filter((e) =>
                                                ((u, e, t, n, a) => {
                                                    if (t === A.nz.trajectory)
                                                        if (n) {
                                                            if (
                                                                'shellPenetrationEffective' === e.name ||
                                                                'shellPenetrationBasic' === e.name
                                                            )
                                                                return !1;
                                                        } else 'shellType' === e.name && e.effects.add(F.Qm.Advanced);
                                                    return 'caliberRule' === e.name
                                                        ? u[e.name] !== A.fE.None
                                                        : (!r.includes(e.name) || 0 !== u.armorNominal) &&
                                                              !(
                                                                  'damageDistanceModifier' === e.name &&
                                                                  (!u.hasDistanceFalloff ||
                                                                      (0 === u.damageDistanceModifier && !a))
                                                              ) &&
                                                              !(
                                                                  'shellArmorAngleGain' === e.name &&
                                                                  0 === u.armorNominal
                                                              ) &&
                                                              (u[e.name] || !D.includes(e.name));
                                                })(u, e, t, a, n),
                                            )
                                            .map(o)
                                            .map(i),
                                    })),
                                )
                                .map(c)
                                .map(m)
                                .filter(d)
                                .map(s),
                            l = B[0],
                            h = B.slice(1);
                        return [...C([l]), ...C(h)];
                    },
                    g = (u) => {
                        const e = !o().extraSmall ? 'big' : 'small';
                        return u.map((u) =>
                            Object.assign({}, u, {
                                fullHeight: f(u.lines, e, u.hasTopSeparator),
                                basicHeight: f(
                                    u.lines.filter((u) => !u.effects.has(F.Qm.Advanced)),
                                    e,
                                    u.hasTopSeparator,
                                ),
                            }),
                        );
                    },
                    f = (u, e, t) => {
                        const n = Number(t);
                        return 1 === u.length &&
                            (u[0].effects.has(F.Qm.HeadIconTank) || u[0].effects.has(F.Qm.HeadIconShell))
                            ? n + F.h + F.YF + F.Ac[e].major
                            : 1 === u.length
                              ? n + F.Ac[e].major
                              : 0 === u.length
                                ? 0
                                : n + u.length * F.Ac[e].inner + 2 * F.Ac[e].sectionPadding;
                    },
                    v = (u, e) => {
                        const t = u.reduce((u, t) => u + t[e ? 'fullHeight' : 'basicHeight'], 0);
                        return t ? t + 2 * F.YF : 0;
                    };
            },
            3821: (u, e, t) => {
                let n, a, A, F, E;
                t.d(e, { fE: () => a, gC: () => F, nz: () => n, pE: () => E }),
                    (function (u) {
                        (u.killer = 'killer'), (u.trajectory = 'trajectory'), (u.impact = 'impact');
                    })(n || (n = {})),
                    (function (u) {
                        (u.None = 'None'), (u.TwoCaliber = 'TwoCaliber'), (u.ThreeCaliber = 'ThreeCaliber');
                    })(a || (a = {})),
                    (function (u) {
                        (u.hp = ''), (u.ignition = 'ignition'), (u.detonation = 'detonation'), (u.crew = 'crew');
                    })(A || (A = {})),
                    (function (u) {
                        (u.armorPiercing = 'ARMOR_PIERCING'),
                            (u.armorPiercingCr = 'ARMOR_PIERCING_CR'),
                            (u.armorPiercingCrPremium = 'ARMOR_PIERCING_CR_PREMIUM'),
                            (u.armorPiercingPremium = 'ARMOR_PIERCING_PREMIUM'),
                            (u.highExplosive = 'HIGH_EXPLOSIVE'),
                            (u.highExplosiveModern = 'HIGH_EXPLOSIVE_MODERN'),
                            (u.highExplosiveModernPremium = 'HIGH_EXPLOSIVE_MODERN_PREMIUM'),
                            (u.highExplosivePremium = 'HIGH_EXPLOSIVE_PREMIUM'),
                            (u.highExplosiveSpg = 'HIGH_EXPLOSIVE_SPG'),
                            (u.highExplosiveSpgStun = 'HIGH_EXPLOSIVE_SPG_STUN'),
                            (u.hollowCharge = 'HOLLOW_CHARGE'),
                            (u.hollowChargePremium = 'HOLLOW_CHARGE_PREMIUM');
                    })(F || (F = {})),
                    (function (u) {
                        (u.penetration = 'penetration'),
                            (u.nonPenetrationDamage = 'nonPenetrationDamage'),
                            (u.legacyHE = 'legacyHE'),
                            (u.modernHE = 'modernHE');
                    })(E || (E = {}));
            },
        },
        t = {};
    function n(u) {
        var a = t[u];
        if (void 0 !== a) return a.exports;
        var A = (t[u] = { exports: {} });
        return e[u](A, A.exports, n), A.exports;
    }
    (n.m = e),
        (u = []),
        (n.O = (e, t, a, A) => {
            if (!t) {
                var F = 1 / 0;
                for (r = 0; r < u.length; r++) {
                    for (var [t, a, A] = u[r], E = !0, i = 0; i < t.length; i++)
                        (!1 & A || F >= A) && Object.keys(n.O).every((u) => n.O[u](t[i]))
                            ? t.splice(i--, 1)
                            : ((E = !1), A < F && (F = A));
                    if (E) {
                        u.splice(r--, 1);
                        var D = a();
                        void 0 !== D && (e = D);
                    }
                }
                return e;
            }
            A = A || 0;
            for (var r = u.length; r > 0 && u[r - 1][2] > A; r--) u[r] = u[r - 1];
            u[r] = [t, a, A];
        }),
        (n.n = (u) => {
            var e = u && u.__esModule ? () => u.default : () => u;
            return n.d(e, { a: e }), e;
        }),
        (n.d = (u, e) => {
            for (var t in e) n.o(e, t) && !n.o(u, t) && Object.defineProperty(u, t, { enumerable: !0, get: e[t] });
        }),
        (n.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (u) {
                if ('object' == typeof window) return window;
            }
        })()),
        (n.o = (u, e) => Object.prototype.hasOwnProperty.call(u, e)),
        (n.r = (u) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(u, '__esModule', { value: !0 });
        }),
        (n.j = 474),
        (() => {
            var u = { 474: 0 };
            n.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var a,
                        A,
                        [F, E, i] = t,
                        D = 0;
                    if (F.some((e) => 0 !== u[e])) {
                        for (a in E) n.o(E, a) && (n.m[a] = E[a]);
                        if (i) var r = i(n);
                    }
                    for (e && e(t); D < F.length; D++) (A = F[D]), n.o(u, A) && u[A] && u[A][0](), (u[A] = 0);
                    return n.O(r);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var a = n.O(void 0, [532], () => n(1235));
    a = n.O(a);
})();
