(() => {
    'use strict';
    var e,
        t = {
            744: (e, t, n) => {
                var r = {};
                n.r(r),
                    n.d(r, { mouse: () => g, off: () => v, on: () => m, onResize: () => d, onScaleUpdated: () => p });
                var o = {};
                n.r(o),
                    n.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => b,
                        getSize: () => P,
                        graphicsQuality: () => T,
                        playSound: () => f,
                        setRTPC: () => _,
                    });
                var i = {};
                n.r(i), n.d(i, { getBgUrl: () => x, getTextureUrl: () => w });
                var a = {};
                n.r(a),
                    n.d(a, {
                        addModelObserver: () => F,
                        addPreloadTexture: () => G,
                        children: () => i,
                        displayStatus: () => O,
                        displayStatusIs: () => ne,
                        events: () => A,
                        extraSize: () => re,
                        forceTriggerMouseMove: () => ee,
                        freezeTextureBeforeResize: () => Y,
                        getBrowserTexturePath: () => z,
                        getDisplayStatus: () => te,
                        getScale: () => Q,
                        getSize: () => j,
                        getViewGlobalPosition: () => W,
                        isEventHandled: () => K,
                        isFocused: () => Z,
                        pxToRem: () => V,
                        remToPx: () => H,
                        resize: () => X,
                        sendEvent: () => C,
                        setAnimateWindow: () => $,
                        setEventHandled: () => J,
                        setInputPaddingsRem: () => L,
                        setSidePaddingsRem: () => q,
                        whenTutorialReady: () => oe,
                    });
                var s = n(483),
                    l = n.n(s);
                function u(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function c(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const d = u('clientResized'),
                    p = u('self.onScaleUpdated'),
                    m = (e, t) => engine.on(e, t),
                    v = (e, t) => engine.off(e, t),
                    E = { down: u('mousedown'), up: u('mouseup'), move: u('mousemove') };
                const g = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && c(!1);
                    }
                    function n() {
                        e.enabled && c(!0);
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
                            : c(!1);
                    }
                    const o = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const i = `mouse${t}`,
                                        a = E[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
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
                            e.enabled && c(!0);
                        },
                        disableOutside() {
                            e.enabled && c(!1);
                        },
                    });
                })();
                function f(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function _(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function P(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function b(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const T = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    h = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    y = Object.keys(h).reduce((e, t) => ((e[t] = () => f(h[t])), e), {}),
                    S = { play: Object.assign({}, y, { sound: f }), setRTPC: _ };
                function w(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function x(e, t, n) {
                    return `url(${w(e, t, n)})`;
                }
                const O = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    A = {
                        onTextureFrozen: u('self.onTextureFrozen'),
                        onTextureReady: u('self.onTextureReady'),
                        onDomBuilt: u('self.onDomBuilt'),
                        onLoaded: u('self.onLoaded'),
                        onDisplayChanged: u('self.onShowingStatusChanged'),
                        onFocusUpdated: u('self.onFocusChanged'),
                        children: {
                            onAdded: u('children.onAdded'),
                            onLoaded: u('children.onLoaded'),
                            onRemoved: u('children.onRemoved'),
                            onAttached: u('children.onAttached'),
                            onTextureReady: u('children.onTextureReady'),
                            onRequestPosition: u('children.requestPosition'),
                        },
                    },
                    B = ['args'];
                const D = 2,
                    U = 16,
                    k = 32,
                    I = 64,
                    N = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (t.indexOf(r) >= 0) continue;
                                            n[r] = e[r];
                                        }
                                    return n;
                                })(t, B);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    C = {
                        close(e) {
                            N('popover' === e ? D : k);
                        },
                        minimize() {
                            N(I);
                        },
                        move(e) {
                            N(U, { isMouseEvent: !0, on: e });
                        },
                    },
                    M = 15;
                function G(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function L(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, M);
                }
                function z(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function F(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function q(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, M);
                }
                function j(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function X(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function W(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: H(t.x), y: H(t.y) };
                }
                function Y() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function Q() {
                    return viewEnv.getScale();
                }
                function V(e) {
                    return viewEnv.pxToRem(e);
                }
                function H(e) {
                    return viewEnv.remToPx(e);
                }
                function $(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function Z() {
                    return viewEnv.isFocused();
                }
                function J() {
                    return viewEnv.setEventHandled();
                }
                function K() {
                    return viewEnv.isEventHandled();
                }
                function ee() {
                    viewEnv.forceTriggerMouseMove();
                }
                function te() {
                    return viewEnv.getShowingStatus();
                }
                const ne = Object.keys(O).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === O[t]), e), {}),
                    re = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    oe = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : A.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ie = { view: a, client: o, sound: S };
                var ae = n(179),
                    se = n.n(ae);
                function le() {
                    const e = (0, ae.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, ae.useEffect)(() => t, []),
                        (0, ae.useMemo)(
                            () => ({
                                run: (t) => {
                                    window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                t(), (e.current = 0);
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
                const ue = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    ce = ['children', 'className', 'theme'];
                function de() {
                    return (
                        (de = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        de.apply(null, arguments)
                    );
                }
                const pe = se().forwardRef(function (e, t) {
                    let n = e.children,
                        r = e.className,
                        o = e.theme,
                        i = void 0 === o ? 'default' : o,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (t.indexOf(r) >= 0) continue;
                                    n[r] = e[r];
                                }
                            return n;
                        })(e, ce);
                    const s = le(),
                        u = se().useRef(null);
                    var c;
                    return (
                        (c = () => {
                            s.run(() => {
                                const e = u.current;
                                if (!e) return;
                                const t = e.scrollWidth,
                                    n = e.scrollHeight;
                                ie.view.resize(t, n);
                                const r = window.getComputedStyle(e);
                                ie.view.setSidePaddingsRem({
                                    left: parseInt(r.getPropertyValue('padding-left'), 10),
                                    top: parseInt(r.getPropertyValue('padding-top'), 10),
                                    right: parseInt(r.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, ae.useEffect)(c, []),
                        se().createElement(
                            'div',
                            de({}, a, {
                                className: l()(ue.base, ue[`base__theme-${i}`], r),
                                ref: function (e) {
                                    (u.current = e), 'function' == typeof t ? t(e) : t && (t.current = e);
                                },
                            }),
                            se().createElement('div', { className: ue.decorator }, n),
                        )
                    );
                });
                var me = n(986),
                    ve = n.n(me);
                let Ee, ge, fe, _e, Pe, be, Te, he, ye;
                !(function (e) {
                    (e.Items = 'items'),
                        (e.Equipment = 'equipment'),
                        (e.Xp = 'xp'),
                        (e.XpFactor = 'xpFactor'),
                        (e.Blueprints = 'blueprints'),
                        (e.BlueprintsAny = 'blueprintsAny'),
                        (e.Goodies = 'goodies'),
                        (e.Berths = 'berths'),
                        (e.Slots = 'slots'),
                        (e.Tokens = 'tokens'),
                        (e.CrewSkins = 'crewSkins'),
                        (e.CrewBooks = 'crewBooks'),
                        (e.Customizations = 'customizations'),
                        (e.CreditsFactor = 'creditsFactor'),
                        (e.Tankman = 'tankman'),
                        (e.Tankwoman = 'tankwoman'),
                        (e.TankmenXp = 'tankmenXP'),
                        (e.TankmenXpFactor = 'tankmenXPFactor'),
                        (e.FreeXpFactor = 'freeXPFactor'),
                        (e.BattleToken = 'battleToken'),
                        (e.PremiumUniversal = 'premium_universal'),
                        (e.Gold = 'gold'),
                        (e.Credits = 'credits'),
                        (e.Crystal = 'crystal'),
                        (e.FreeXp = 'freeXP'),
                        (e.Premium = 'premium'),
                        (e.PremiumPlus = 'premium_plus'),
                        (e.BattlePassPoints = 'battlePassPoints'),
                        (e.BattlePassSelectToken = 'battlePassSelectToken'),
                        (e.StyleProgressToken = 'styleProgressToken'),
                        (e.TmanToken = 'tmanToken'),
                        (e.NaturalCover = 'naturalCover'),
                        (e.BpCoin = 'bpcoin'),
                        (e.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (e.BattleBadge = 'dossier_badge'),
                        (e.NewYearInvoice = 'newYearInvoice'),
                        (e.NewYearSlot = 'newYearSlot'),
                        (e.BonusX5 = 'battle_bonus_x5'),
                        (e.CrewBonusX3 = 'crew_bonus_x3'),
                        (e.Vehicles = 'vehicles'),
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.DeluxeGift = 'deluxe_gift'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.OptionalDevice = 'optionalDevice'),
                        (e.EquipCoin = 'equipCoin'),
                        (e.LootBox = 'lootBox'),
                        (e.BrCoin = 'brcoin');
                })(Ee || (Ee = {})),
                    (function (e) {
                        (e.Gold = 'gold'),
                            (e.Credits = 'credits'),
                            (e.Crystal = 'crystal'),
                            (e.Premium = 'premium'),
                            (e.PremiumPlus = 'premium_plus'),
                            (e.Vehicles = 'vehicles'),
                            (e.Customizations = 'customizations'),
                            (e.Blueprints = 'blueprints'),
                            (e.BlueprintsAny = 'blueprintsAny'),
                            (e.BlueprintsFinal = 'finalBlueprints'),
                            (e.Goodies = 'goodies'),
                            (e.CrewSkins = 'crewSkins'),
                            (e.Xp = 'xp'),
                            (e.XpFactor = 'xpFactor'),
                            (e.FreeXp = 'freeXP'),
                            (e.FreeXPFactor = 'freeXPFactor'),
                            (e.TankmenXP = 'tankmenXP'),
                            (e.TankmenXPFactor = 'tankmenXPFactor'),
                            (e.DailyXPFactor = 'dailyXPFactor'),
                            (e.CreditsFactor = 'creditsFactor'),
                            (e.Items = 'items'),
                            (e.StrBonus = 'strBonus'),
                            (e.Groups = 'groups'),
                            (e.Berths = 'berths'),
                            (e.Slots = 'slots'),
                            (e.Meta = 'meta'),
                            (e.Tokens = 'tokens'),
                            (e.Dossier = 'dossier'),
                            (e.OneOf = 'oneof'),
                            (e.PremiumUniversal = 'premium_universal'),
                            (e.BadgesGroup = 'badgesGroup'),
                            (e.Entitlements = 'entitlements'),
                            (e.RankedDailyBattles = 'rankedDailyBattles'),
                            (e.RankedBonusBattles = 'rankedBonusBattles'),
                            (e.BattlePassPoints = 'battlePassPoints'),
                            (e.BattleBadge = 'dossier_badge'),
                            (e.BattleAchievement = 'dossier_achievement'),
                            (e.EquipCoin = 'equipCoin');
                    })(ge || (ge = {})),
                    (function (e) {
                        (e.Big = 'big'),
                            (e.Small = 'small'),
                            (e.Mini = 'mini'),
                            (e.S600x450 = 's600x450'),
                            (e.S400x300 = 's400x300'),
                            (e.S296x222 = 's296x222'),
                            (e.S232x174 = 's232x174'),
                            (e.S180x135 = 's180x135'),
                            (e.S128x100 = 's128x100'),
                            (e.S80x80 = 's80x80'),
                            (e.S64x64 = 's64x64'),
                            (e.S48x48 = 's48x48');
                    })(fe || (fe = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(_e || (_e = {})),
                    (function (e) {
                        (e.BATTLE_BOOSTER = 'battleBooster'),
                            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(Pe || (Pe = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(be || (be = {})),
                    (function (e) {
                        (e.BATTLE_BOOSTER = 'battleBooster'),
                            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(Te || (Te = {})),
                    (function (e) {
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(he || (he = {})),
                    (function (e) {
                        (e[(e.Inactive = 0)] = 'Inactive'),
                            (e[(e.Active = 1)] = 'Active'),
                            (e[(e.Canceled = 2)] = 'Canceled');
                    })(ye || (ye = {}));
                var Se = n(515);
                function we(e) {
                    return e;
                }
                function Re() {
                    return !1;
                }
                console.log;
                var xe = n(174);
                function Oe(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return Ae(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                          ? Ae(e, t)
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
                function Ae(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const Be = (e) => (0 === e ? window : window.subViews.get(e));
                var De = n(946);
                const Ue = ((e, t) => {
                        const n = (0, ae.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: o, children: i, mocks: a }) {
                                const s = (0, ae.useRef)([]),
                                    l = (n, r, o) => {
                                        var i;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = Be,
                                                context: r = 'model',
                                            } = {}) {
                                                const o = new Map();
                                                function i(e, t = 0) {
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
                                                const a = (e) => {
                                                    const o = n(t),
                                                        i = r.split('.').reduce((e, t) => e[t], o);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (n, i) => {
                                                        const s = 'string' == typeof i ? `${r}.${i}` : r,
                                                            l = ie.view.addModelObserver(s, t, !0);
                                                        return o.set(l, n), e && n(a(i)), l;
                                                    },
                                                    readByPath: a,
                                                    createCallback: (e, t) => {
                                                        const n = a(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = a(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, n = Oe(o.keys()); !(e = n()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(r),
                                            l =
                                                'real' === n
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (i = null == o ? void 0 : o.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            u = (e) =>
                                                'mocks' === n ? (null == o ? void 0 : o.getter(e)) : l.readByPath(e),
                                            c = (e) => s.current.push(e),
                                            d = e({
                                                mode: n,
                                                readByPath: u,
                                                externalModel: l,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const r = null != t ? t : u(e),
                                                            o = xe.LO.box(r, { equals: Re });
                                                        return (
                                                            'real' === n &&
                                                                l.subscribe(
                                                                    (0, xe.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const r = null != t ? t : u(e),
                                                            o = xe.LO.box(r, { equals: Re });
                                                        return (
                                                            'real' === n &&
                                                                l.subscribe(
                                                                    (0, xe.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const r = u(t);
                                                        if (Array.isArray(e)) {
                                                            const o = e.reduce(
                                                                (e, t) => ((e[t] = xe.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === n &&
                                                                    l.subscribe(
                                                                        (0, xe.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                o[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                        {
                                                            const o = e,
                                                                i = Object.entries(o),
                                                                a = i.reduce(
                                                                    (e, [t, n]) => ((e[n] = xe.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === n &&
                                                                    l.subscribe(
                                                                        (0, xe.aD)((e) => {
                                                                            i.forEach(([t, n]) => {
                                                                                a[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            p = { mode: n, model: d, externalModel: l, cleanup: c };
                                        return {
                                            model: d,
                                            controls: 'mocks' === n && o ? o.controls(p) : t(p),
                                            externalModel: l,
                                            mode: n,
                                        };
                                    },
                                    u = (0, ae.useRef)(!1),
                                    c = (0, ae.useState)(r),
                                    d = c[0],
                                    p = c[1],
                                    m = (0, ae.useState)(() => l(r, o, a)),
                                    v = m[0],
                                    E = m[1];
                                return (
                                    (0, ae.useEffect)(() => {
                                        u.current ? E(l(d, o, a)) : (u.current = !0);
                                    }, [a, d, o]),
                                    (0, ae.useEffect)(() => {
                                        p(r);
                                    }, [r]),
                                    (0, ae.useEffect)(
                                        () => () => {
                                            v.externalModel.dispose(), s.current.forEach((e) => e());
                                        },
                                        [v],
                                    ),
                                    se().createElement(n.Provider, { value: v }, i)
                                );
                            },
                            () => (0, ae.useContext)(n),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    bonuses: e.array('bonuses', []),
                                    primitives: e.primitives(['nextCharge', 'expirationDate']),
                                },
                                n = (0, De.Om)(
                                    () => {
                                        return (
                                            (e = t.bonuses.get()),
                                            (n = we),
                                            Array.isArray(e)
                                                ? e.map(n)
                                                : e.map((e, t, r) => n(null == e ? void 0 : e.value, t, r))
                                        );
                                        var e, n;
                                    },
                                    { equals: Re },
                                );
                            return Object.assign({ computes: { getBonuses: n } }, t);
                        },
                        () => {},
                    ),
                    ke = Ue[0],
                    Ie = Ue[1],
                    Ne = 'WotPlusTooltipApp_base_e0',
                    Ce = 'WotPlusTooltipApp_headerBlock_55',
                    Me = 'WotPlusTooltipApp_headerTitle_8e',
                    Ge = 'WotPlusTooltipApp_headerDesc_f7',
                    Le = 'WotPlusTooltipApp_decorator_a3',
                    ze = 'WotPlusTooltipApp_gridBase_b7',
                    Fe = 'WotPlusTooltipApp_gridElement_18',
                    qe = 'WotPlusTooltipApp_bonusImg_2a',
                    je = 'WotPlusTooltipApp_bonusName_f0',
                    Xe = 'WotPlusTooltipApp_statusBlock_d8',
                    We = 'WotPlusTooltipApp_status_e3',
                    Ye = 'WotPlusTooltipApp_status__activated_ca',
                    Qe = 'WotPlusTooltipApp_status__suspended_a8',
                    Ve = 'WotPlusTooltipApp_description_bd',
                    He = 'WotPlusTooltipApp_chargeBlock_69',
                    $e = 'WotPlusTooltipApp_chargeText_54',
                    Ze = 'WotPlusTooltipApp_chargeTime_29',
                    Je = () => R.strings.subscription.subscriptionCardTooltip,
                    Ke = { [ye.Inactive]: Je().desc.available(), [ye.Canceled]: Je().desc.canceled() },
                    et = {
                        [ye.Active]: Je().active(),
                        [ye.Inactive]: Je().available(),
                        [ye.Canceled]: Je().canceled(),
                    },
                    tt = () => R.images.gui.maps.icons.subscription.tooltip,
                    nt = (e) => {
                        const t = e.state,
                            n = e.nextCharge,
                            r = e.expirationDate;
                        return t === ye.Active && n
                            ? se().createElement(
                                  'div',
                                  { className: He },
                                  se().createElement('span', { className: $e }, Je().chargeTime()),
                                  se().createElement('span', { className: Ze }, n),
                              )
                            : [ye.Canceled, ye.Active].includes(t) && r
                              ? se().createElement(
                                    'div',
                                    { className: He },
                                    se().createElement('span', { className: $e }, Je().activeUntil()),
                                    se().createElement('span', { className: Ze }, r),
                                )
                              : null;
                    },
                    rt = (0, Se.Pi)(() => {
                        const e = Ie().model,
                            t = e.root.get().state,
                            n = e.primitives.nextCharge.get(),
                            r = e.primitives.expirationDate.get(),
                            o = l()(We, t === ye.Active && Ye, t === ye.Canceled && Qe),
                            i = ((e) => e.map((e) => ({ name: e.name, value: e.label, valueType: _e.STRING })))(
                                e.computes.getBonuses(),
                            );
                        return se().createElement(
                            'div',
                            { className: Ne },
                            se().createElement(
                                'div',
                                { className: Ce },
                                se().createElement('span', { className: Me }, Je().headerTitle()),
                                se().createElement('span', { className: Ge }, Je().headerDescription()),
                            ),
                            se().createElement(
                                'div',
                                { className: Le },
                                se().createElement(
                                    'div',
                                    { className: ze, style: { '--column-size': Math.ceil(i.length / 2) } },
                                    i.map(
                                        (e, t) =>
                                            e.name in tt() &&
                                            se().createElement(
                                                'div',
                                                { className: Fe, key: t },
                                                se().createElement('div', {
                                                    className: qe,
                                                    style: { backgroundImage: `url(${tt()[e.name]()})` },
                                                }),
                                                se().createElement('span', { className: je }, e.value),
                                            ),
                                    ),
                                ),
                            ),
                            se().createElement(
                                'div',
                                { className: Xe },
                                se().createElement('span', { className: o }, et[t]),
                                se().createElement(nt, { state: t, nextCharge: n, expirationDate: r }),
                                t !== ye.Active && se().createElement('span', { className: Ve }, Ke[t]),
                            ),
                        );
                    }),
                    ot = (0, ae.memo)(rt);
                engine.whenReady.then(() => {
                    ve().render(
                        se().createElement(pe, null, se().createElement(ke, null, se().createElement(ot, null))),
                        document.getElementById('root'),
                    );
                });
            },
        },
        n = {};
    function r(e) {
        var o = n[e];
        if (void 0 !== o) return o.exports;
        var i = (n[e] = { exports: {} });
        return t[e](i, i.exports, r), i.exports;
    }
    (r.m = t),
        (e = []),
        (r.O = (t, n, o, i) => {
            if (!n) {
                var a = 1 / 0;
                for (c = 0; c < e.length; c++) {
                    for (var [n, o, i] = e[c], s = !0, l = 0; l < n.length; l++)
                        (!1 & i || a >= i) && Object.keys(r.O).every((e) => r.O[e](n[l]))
                            ? n.splice(l--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(c--, 1);
                        var u = o();
                        void 0 !== u && (t = u);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > i; c--) e[c] = e[c - 1];
            e[c] = [n, o, i];
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
        (r.j = 865),
        (() => {
            var e = { 865: 0 };
            r.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        i,
                        [a, s, l] = n,
                        u = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                        if (l) var c = l(r);
                    }
                    for (t && t(n); u < a.length; u++) (i = a[u]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return r.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var o = r.O(void 0, [174], () => r(744));
    o = r.O(o);
})();
