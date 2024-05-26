(() => {
    'use strict';
    var u,
        e = {
            372: (u, e, t) => {
                var n = {};
                t.r(n), t.d(n, { mouse: () => h, onResize: () => p });
                var F = {};
                t.r(F),
                    t.d(F, {
                        events: () => n,
                        getMouseGlobalPosition: () => x,
                        getSize: () => w,
                        graphicsQuality: () => S,
                    });
                var A = {};
                t.r(A), t.d(A, { getBgUrl: () => T, getTextureUrl: () => P });
                var E = {};
                t.r(E),
                    t.d(E, {
                        addModelObserver: () => H,
                        addPreloadTexture: () => V,
                        children: () => A,
                        displayStatus: () => z,
                        displayStatusIs: () => Eu,
                        events: () => O,
                        extraSize: () => iu,
                        forceTriggerMouseMove: () => Fu,
                        freezeTextureBeforeResize: () => Z,
                        getBrowserTexturePath: () => G,
                        getDisplayStatus: () => Au,
                        getScale: () => K,
                        getSize: () => q,
                        getViewGlobalPosition: () => J,
                        isEventHandled: () => nu,
                        isFocused: () => eu,
                        pxToRem: () => X,
                        remToPx: () => Y,
                        resize: () => Q,
                        sendEvent: () => $,
                        setAnimateWindow: () => uu,
                        setEventHandled: () => tu,
                        setInputPaddingsRem: () => W,
                        setSidePaddingsRem: () => U,
                        whenTutorialReady: () => ou,
                    });
                var i = t(179),
                    o = t.n(i),
                    r = t(493),
                    D = t.n(r),
                    B = t(515);
                let a, C, s, l;
                !(function (u) {
                    (u.HangarView = 'hangar'),
                        (u.BattlePassProgression = 'battle_pass_progression'),
                        (u.CollectionProgression = 'collection_progression');
                })(a || (a = {})),
                    (function (u) {
                        (u.CollectionEntryPointView = 'collection_entry_point_view'),
                            (u.BattlePassCollectionEntryPoint = 'battle_pass_collection_entry_point'),
                            (u.CollectionProgressTooltip = 'collection_progress_tooltip');
                    })(C || (C = {})),
                    (function (u) {
                        u.Click = 'click';
                    })(s || (s = {})),
                    (function (u) {
                        (u[(u.NonSet = 0)] = 'NonSet'),
                            (u[(u.Debug = 10)] = 'Debug'),
                            (u[(u.Info = 20)] = 'Info'),
                            (u[(u.Warning = 30)] = 'Warning');
                    })(l || (l = {}));
                let c;
                !(function (u) {
                    (u.Click = 'click'), (u.KeyDown = 'keydown');
                })(c || (c = {}));
                const d = 'metrics',
                    m = ({ partnerID: u, item: e, parentScreen: t, itemState: n, info: F }) => ({
                        item: e,
                        partnerID: u || null,
                        parent_screen: t || null,
                        item_state: n || null,
                        additional_info: F || null,
                    }),
                    _ = (u, e) => {
                        const t = (0, i.useCallback)(
                            (t, n = l.Info, F) => {
                                F || (F = {}),
                                    Object.keys(F).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: u,
                                            group: e,
                                            action: t,
                                            logLevel: n,
                                            params: JSON.stringify(F),
                                        });
                            },
                            [u, e],
                        );
                        return (u, e, n) => t(u, e, n);
                    };
                function v() {
                    return !1;
                }
                console.log;
                var f = t(174);
                function g(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                function b(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                const p = g('clientResized'),
                    y = { down: g('mousedown'), up: g('mouseup'), move: g('mousemove') };
                const h = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && b(!1);
                    }
                    function t() {
                        u.enabled && b(!0);
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
                            : b(!1);
                    }
                    const F = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let F = !0;
                                    const A = `mouse${e}`,
                                        E = y[e]((u) => t([u, 'outside']));
                                    function i(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(A, i),
                                        n(),
                                        () => {
                                            F &&
                                                (E(),
                                                window.removeEventListener(A, i),
                                                (u.listeners -= 1),
                                                n(),
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
                            (u.enabled = !1), n();
                        },
                        enable() {
                            (u.enabled = !0), n();
                        },
                        enableOutside() {
                            u.enabled && b(!0);
                        },
                        disableOutside() {
                            u.enabled && b(!1);
                        },
                    });
                })();
                function w(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function x(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const S = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function P(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function T(u, e, t) {
                    return `url(${P(u, e, t)})`;
                }
                const z = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    O = {
                        onTextureFrozen: g('self.onTextureFrozen'),
                        onTextureReady: g('self.onTextureReady'),
                        onDomBuilt: g('self.onDomBuilt'),
                        onLoaded: g('self.onLoaded'),
                        onDisplayChanged: g('self.onShowingStatusChanged'),
                        onFocusUpdated: g('self.onFocusChanged'),
                        children: {
                            onAdded: g('children.onAdded'),
                            onLoaded: g('children.onLoaded'),
                            onRemoved: g('children.onRemoved'),
                            onAttached: g('children.onAttached'),
                            onTextureReady: g('children.onTextureReady'),
                            onRequestPosition: g('children.requestPosition'),
                        },
                    },
                    k = ['args'];
                const M = 2,
                    j = 16,
                    N = 32,
                    I = 64,
                    L = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const F = e.args,
                                A = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        F = {},
                                        A = Object.keys(u);
                                    for (n = 0; n < A.length; n++) (t = A[n]), e.indexOf(t) >= 0 || (F[t] = u[t]);
                                    return F;
                                })(e, k);
                            return void 0 !== F
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, A, {
                                          arguments:
                                              ((n = F),
                                              Object.entries(n).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, A));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    $ = {
                        close(u) {
                            L('popover' === u ? M : N);
                        },
                        minimize() {
                            L(I);
                        },
                        move(u) {
                            L(j, { isMouseEvent: !0, on: u });
                        },
                    };
                function V(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function W(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function G(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function H(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function U(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function q(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function Q(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function J(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: Y(e.x), y: Y(e.y) };
                }
                function Z() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function K() {
                    return viewEnv.getScale();
                }
                function X(u) {
                    return viewEnv.pxToRem(u);
                }
                function Y(u) {
                    return viewEnv.remToPx(u);
                }
                function uu(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function eu() {
                    return viewEnv.isFocused();
                }
                function tu() {
                    return viewEnv.setEventHandled();
                }
                function nu() {
                    return viewEnv.isEventHandled();
                }
                function Fu() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Au() {
                    return viewEnv.getShowingStatus();
                }
                const Eu = Object.keys(z).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === z[e]), u), {}),
                    iu = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    ou = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : O.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    ru = { view: E, client: F };
                function Du(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return Bu(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Bu(u, e);
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
                function Bu(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, n = new Array(e); t < e; t++) n[t] = u[t];
                    return n;
                }
                const au = (u) => (0 === u ? window : window.subViews.get(u));
                let Cu;
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(Cu || (Cu = {}));
                (() => {
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
                })();
                let su, lu;
                !(function (u) {
                    (u[(u.NotStarted = 0)] = 'NotStarted'),
                        (u[(u.JustStarted = 1)] = 'JustStarted'),
                        (u[(u.Active = 2)] = 'Active'),
                        (u[(u.EndSoon = 3)] = 'EndSoon'),
                        (u[(u.End = 4)] = 'End'),
                        (u[(u.Disabled = 5)] = 'Disabled');
                })(su || (su = {})),
                    (function (u) {
                        (u.Small = 'small'), (u.Big = 'big');
                    })(lu || (lu = {}));
                R.strings.comp7.banner;
                const cu = (u) => {
                        const e = new Date(1e3 * u);
                        return { day: e.getDate(), month: e.getMonth(), hour: e.getHours(), min: e.getMinutes() };
                    },
                    du = ((u, e) => {
                        const t = (0, i.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: F, children: A, mocks: E }) {
                                const r = (0, i.useRef)([]),
                                    D = (t, n, F) => {
                                        var A;
                                        const E = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = au,
                                                context: n = 'model',
                                            } = {}) {
                                                const F = new Map();
                                                function A(u, e = 0) {
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
                                                        A = n.split('.').reduce((u, e) => u[e], F);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? A
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, A);
                                                };
                                                return {
                                                    subscribe: (t, A) => {
                                                        const i = 'string' == typeof A ? `${n}.${A}` : n,
                                                            o = ru.view.addModelObserver(i, e, !0);
                                                        return F.set(o, t), u && t(E(A)), o;
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
                                                        for (var u, t = Du(F.keys()); !(u = t()).done; ) A(u.value, e);
                                                    },
                                                    unsubscribe: A,
                                                };
                                            })(n),
                                            i =
                                                'real' === t
                                                    ? E
                                                    : Object.assign({}, E, {
                                                          readByPath:
                                                              null != (A = null == F ? void 0 : F.getter)
                                                                  ? A
                                                                  : () => {},
                                                      }),
                                            o = (u) =>
                                                'mocks' === t ? (null == F ? void 0 : F.getter(u)) : i.readByPath(u),
                                            D = (u) => r.current.push(u),
                                            B = u({
                                                mode: t,
                                                readByPath: o,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (u, e) => {
                                                        const n = null != e ? e : o(u),
                                                            F = f.LO.box(n, { equals: v });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, f.aD)((u) => F.set(u)),
                                                                    u,
                                                                ),
                                                            F
                                                        );
                                                    },
                                                    object: (u, e) => {
                                                        const n = null != e ? e : o(u),
                                                            F = f.LO.box(n, { equals: v });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, f.aD)((u) => F.set(u)),
                                                                    u,
                                                                ),
                                                            F
                                                        );
                                                    },
                                                    primitives: (u, e) => {
                                                        const n = o(e);
                                                        if (Array.isArray(u)) {
                                                            const F = u.reduce(
                                                                (u, e) => ((u[e] = f.LO.box(n[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, f.aD)((e) => {
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
                                                                A = Object.entries(F),
                                                                E = A.reduce(
                                                                    (u, [e, t]) => ((u[t] = f.LO.box(n[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, f.aD)((u) => {
                                                                            A.forEach(([e, t]) => {
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
                                                cleanup: D,
                                            }),
                                            a = { mode: t, model: B, externalModel: i, cleanup: D };
                                        return {
                                            model: B,
                                            controls: 'mocks' === t && F ? F.controls(a) : e(a),
                                            externalModel: i,
                                            mode: t,
                                        };
                                    },
                                    B = (0, i.useRef)(!1),
                                    a = (0, i.useState)(n),
                                    C = a[0],
                                    s = a[1],
                                    l = (0, i.useState)(() => D(n, F, E)),
                                    c = l[0],
                                    d = l[1];
                                return (
                                    (0, i.useEffect)(() => {
                                        B.current ? d(D(C, F, E)) : (B.current = !0);
                                    }, [E, C, F]),
                                    (0, i.useEffect)(() => {
                                        s(n);
                                    }, [n]),
                                    (0, i.useEffect)(
                                        () => () => {
                                            c.externalModel.dispose(), r.current.forEach((u) => u());
                                        },
                                        [c],
                                    ),
                                    o().createElement(t.Provider, { value: c }, A)
                                );
                            },
                            () => (0, i.useContext)(t),
                        ];
                    })(
                        ({ observableModel: u }) => {
                            const e = { root: u.object() },
                                t = R.strings.collection_mt_birthday2023,
                                n = (u, e) => {
                                    const t = cu(e),
                                        n = t.day,
                                        F = t.month;
                                    return (
                                        (A = u),
                                        (E = { day: n, month: R.strings.menu.dateTime.months.$num(F + 1) }),
                                        A.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                                            const e = 0 === u.indexOf('%') ? 2 : 1;
                                            return String(E[u.slice(e, -e)]);
                                        })
                                    );
                                    var A, E;
                                };
                            return Object.assign({}, e, {
                                computes: {
                                    getFinishDateString: () => {
                                        const u = e.root.get().finishDateStamp;
                                        return n(t.entry.seasonDate.seasonLasts(), u);
                                    },
                                },
                            });
                        },
                        ({ externalModel: u }) => ({ openBirthdayCollection: u.createCallbackNoArgs('onClick') }),
                    ),
                    mu = du[0],
                    _u = du[1];
                let vu, fu;
                !(function (u) {
                    (u.Completed = 'completed'), (u.Disabled = 'disabled'), (u.Active = 'active');
                })(vu || (vu = {})),
                    (function (u) {
                        (u.Big = 'big'),
                            (u.WideSmall = 'wideSmall'),
                            (u.ThinSmall = 'thinSmall'),
                            (u.ThinExtraSmall = 'thinExtraSmall');
                    })(fu || (fu = {}));
                const gu = {
                        '302*152': fu.Big,
                        '302*114': fu.WideSmall,
                        '222*114': fu.ThinSmall,
                        '162*114': fu.ThinExtraSmall,
                        '0*0': fu.ThinExtraSmall,
                    },
                    bu = (u, e) => {
                        if (u && e) {
                            if (u > 302 && e > 152) {
                                return gu[`${u / 2 + 1}*${e / 2 + 1}`];
                            }
                            return gu[`${u}*${e}`];
                        }
                        return fu.ThinExtraSmall;
                    },
                    pu = 'App_base_c1';
                var yu = t(483),
                    hu = t.n(yu);
                const wu = {
                        base: 'EntryPoint_base_c6',
                        base__completed: 'EntryPoint_base__completed_74',
                        base__disabled: 'EntryPoint_base__disabled_c0',
                        base__active: 'EntryPoint_base__active_f3',
                        purpleGradient: 'EntryPoint_purpleGradient_5a',
                        fullSize: 'EntryPoint_fullSize_4e',
                        flexCenter: 'EntryPoint_flexCenter_3c',
                        animation: 'EntryPoint_animation_4a',
                        animation__first: 'EntryPoint_animation__first_44',
                        activeShadow: 'EntryPoint_activeShadow_13',
                        activeShadow__large: 'EntryPoint_activeShadow__large_26',
                        documentsShine: 'EntryPoint_documentsShine_55',
                        borderSparks: 'EntryPoint_borderSparks_a4',
                        documentsContainer: 'EntryPoint_documentsContainer_05',
                        documentsContainer__active: 'EntryPoint_documentsContainer__active_71',
                        documentsContainer__completed: 'EntryPoint_documentsContainer__completed_e4',
                        documentsContainer_big: 'EntryPoint_documentsContainer_big_63',
                        documents: 'EntryPoint_documents_79',
                        documentsContainer_thinSmall: 'EntryPoint_documentsContainer_thinSmall_be',
                        documentsContainer_thinExtraSmall: 'EntryPoint_documentsContainer_thinExtraSmall_90',
                        documents__disabled: 'EntryPoint_documents__disabled_47',
                        wrapper: 'EntryPoint_wrapper_75',
                        receivedItems: 'EntryPoint_receivedItems_52',
                        show: 'EntryPoint_show_cf',
                        receivedItems__large: 'EntryPoint_receivedItems__large_6c',
                        mainText: 'EntryPoint_mainText_ce',
                        mainText_big: 'EntryPoint_mainText_big_b8',
                        mainText_wideSmall: 'EntryPoint_mainText_wideSmall_8b',
                        mainText_thinSmall: 'EntryPoint_mainText_thinSmall_dd',
                        mainText_thinExtraSmall: 'EntryPoint_mainText_thinExtraSmall_41',
                        mainText__disabled: 'EntryPoint_mainText__disabled_40',
                        durationWrap: 'EntryPoint_durationWrap_21',
                        durationWrap_big: 'EntryPoint_durationWrap_big_ef',
                        icon: 'EntryPoint_icon_99',
                        icon__completed: 'EntryPoint_icon__completed_35',
                        icon__disabled: 'EntryPoint_icon__disabled_5e',
                        icon__active: 'EntryPoint_icon__active_44',
                        secondText: 'EntryPoint_secondText_d5',
                        secondText_thinExtraSmall: 'EntryPoint_secondText_thinExtraSmall_3d',
                        secondText__completed: 'EntryPoint_secondText__completed_dc',
                        secondText__disabled: 'EntryPoint_secondText__disabled_c5',
                        secondText__active: 'EntryPoint_secondText__active_bb',
                    },
                    xu = R.strings.collection_mt_birthday2023.entry,
                    Su = (0, B.Pi)(
                        ({ state: u, mainText: e, secondText: t, entryPointRef: n, newReceivedItems: F = 0 }) => {
                            const A = (0, i.useState)(fu.Big),
                                E = A[0],
                                r = A[1],
                                D = (0, i.useState)(!0),
                                B = D[0],
                                a = D[1],
                                C = (0, i.useMemo)(() => u === vu.Disabled, [u]),
                                s = (0, i.useMemo)(() => !C && F > 0, [C, F]),
                                l = (0, i.useMemo)(() => e.split(' ')[0], [e]),
                                c = (0, i.useMemo)(
                                    () =>
                                        e
                                            .split(' ')
                                            .filter((u) => u !== l)
                                            .join(' ')
                                            .toUpperCase(),
                                    [e, l],
                                ),
                                d = (0, i.useMemo)(() => F > 9, [F]);
                            (0, i.useEffect)(() => {
                                var u, e;
                                const t = (null == n || null == (u = n.current) ? void 0 : u.offsetWidth) || 0,
                                    F = (null == n || null == (e = n.current) ? void 0 : e.offsetHeight) || 0;
                                r(bu(t + 2, F + 2));
                                const A = (u) => {
                                    const e = bu(u.width, u.height);
                                    e && r(e);
                                };
                                return (
                                    engine.on('screenResized', A),
                                    () => {
                                        engine.off('screenResized', A);
                                    }
                                );
                            }, []);
                            return o().createElement(
                                'div',
                                {
                                    className: hu()(wu.base, wu.fullSize, wu[`base__${u}`]),
                                    onMouseEnter: () => {
                                        B && a(!1);
                                    },
                                },
                                u === vu.Completed &&
                                    o().createElement(
                                        'div',
                                        { className: wu.fullSize },
                                        o().createElement('div', { className: hu()(wu.activeShadow, wu.fullSize) }),
                                        o().createElement('div', {
                                            className: hu()(wu.activeShadow, wu.activeShadow__large, wu.fullSize),
                                        }),
                                    ),
                                !C &&
                                    o().createElement(
                                        'div',
                                        { className: wu.fullSize },
                                        o().createElement('div', { className: hu()(wu.purpleGradient, wu.fullSize) }),
                                        o().createElement('div', { className: hu()(wu.documentsShine, wu.fullSize) }),
                                        o().createElement('div', { className: hu()(wu.borderSparks, wu.fullSize) }),
                                        o().createElement('img', {
                                            id: 'swfConfetti',
                                            src: 'swf://gui/flash/animations/birthday2023/collectionBirthdayEntryConfetti.swf',
                                            alt: 'confetti',
                                            className: hu()(wu.animation, B && wu.animation__first),
                                        }),
                                    ),
                                o().createElement(
                                    'div',
                                    {
                                        className: hu()(
                                            wu.documentsContainer,
                                            wu.fullSize,
                                            wu.flexCenter,
                                            wu[`documentsContainer_${E}`],
                                            wu[`documentsContainer__${u}`],
                                        ),
                                    },
                                    o().createElement('div', {
                                        className: hu()(wu.documents, C && wu.documents__disabled),
                                    }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: hu()(wu.wrapper, wu.fullSize) },
                                    s &&
                                        o().createElement(
                                            'div',
                                            {
                                                className: hu()(
                                                    wu.receivedItems,
                                                    wu.flexCenter,
                                                    d && wu.receivedItems__large,
                                                ),
                                            },
                                            o().createElement('span', null, F),
                                        ),
                                    o().createElement(
                                        'div',
                                        {
                                            className: hu()(
                                                wu.mainText,
                                                wu.flexCenter,
                                                wu[`mainText_${E}`],
                                                C && wu.mainText__disabld,
                                            ),
                                        },
                                        o().createElement('span', null, l.toUpperCase()),
                                        o().createElement('span', null, c),
                                    ),
                                    o().createElement(
                                        'div',
                                        { className: hu()(wu.durationWrap, wu.flexCenter, wu[`durationWrap_${E}`]) },
                                        o().createElement('div', { className: hu()(wu.icon, wu[`icon__${u}`]) }),
                                        o().createElement(
                                            'div',
                                            {
                                                className: hu()(
                                                    wu.secondText,
                                                    wu[`secondText_${E}`],
                                                    wu[`secondText__${u}`],
                                                ),
                                            },
                                            o().createElement(
                                                'span',
                                                null,
                                                ((u, e, t) =>
                                                    u === vu.Disabled
                                                        ? xu.disabled[`${e}`]()
                                                        : u === vu.Completed
                                                          ? xu.completed()
                                                          : t)(u, E, t),
                                            ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Pu = (0, i.memo)(Su);
                function Tu() {
                    return (
                        (Tu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Tu.apply(this, arguments)
                    );
                }
                const Ru = R.strings.collection_mt_birthday2023.entry,
                    zu = (0, B.Pi)(() => {
                        const u = _u(),
                            e = u.model,
                            t = u.controls,
                            n = e.root.get(),
                            F = n.state,
                            A = n.newReceivedItems,
                            E = ((u) => {
                                const e = _(u, d),
                                    t = (0, i.useCallback)(
                                        (u) => {
                                            e(u.action, u.logLevel, m(u));
                                        },
                                        [e],
                                    );
                                return (u) => t(u);
                            })('collection'),
                            r = (0, i.useRef)(null),
                            D = {
                                state: F,
                                mainText: Ru.mainCollectionName(),
                                secondText: e.computes.getFinishDateString(),
                                newReceivedItems: A,
                            };
                        return o().createElement(
                            'div',
                            {
                                className: pu,
                                onClick: () => {
                                    D.state !== vu.Disabled &&
                                        (t.openBirthdayCollection(),
                                        E({
                                            item: C.CollectionEntryPointView,
                                            action: s.Click,
                                            parentScreen: a.HangarView,
                                        }));
                                },
                                ref: r,
                            },
                            o().createElement(Pu, Tu({}, D, { entryPointRef: r })),
                        );
                    });
                engine.whenReady.then(() => {
                    D().render(
                        o().createElement(mu, null, o().createElement(zu, null)),
                        document.getElementById('root'),
                    );
                });
            },
        },
        t = {};
    function n(u) {
        var F = t[u];
        if (void 0 !== F) return F.exports;
        var A = (t[u] = { exports: {} });
        return e[u](A, A.exports, n), A.exports;
    }
    (n.m = e),
        (u = []),
        (n.O = (e, t, F, A) => {
            if (!t) {
                var E = 1 / 0;
                for (D = 0; D < u.length; D++) {
                    for (var [t, F, A] = u[D], i = !0, o = 0; o < t.length; o++)
                        (!1 & A || E >= A) && Object.keys(n.O).every((u) => n.O[u](t[o]))
                            ? t.splice(o--, 1)
                            : ((i = !1), A < E && (E = A));
                    if (i) {
                        u.splice(D--, 1);
                        var r = F();
                        void 0 !== r && (e = r);
                    }
                }
                return e;
            }
            A = A || 0;
            for (var D = u.length; D > 0 && u[D - 1][2] > A; D--) u[D] = u[D - 1];
            u[D] = [t, F, A];
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
        (n.j = 369),
        (() => {
            var u = { 369: 0 };
            n.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var F,
                        A,
                        [E, i, o] = t,
                        r = 0;
                    if (E.some((e) => 0 !== u[e])) {
                        for (F in i) n.o(i, F) && (n.m[F] = i[F]);
                        if (o) var D = o(n);
                    }
                    for (e && e(t); r < E.length; r++) (A = E[r]), n.o(u, A) && u[A] && u[A][0](), (u[A] = 0);
                    return n.O(D);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var F = n.O(void 0, [314], () => n(372));
    F = n.O(F);
})();
