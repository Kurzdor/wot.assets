(() => {
    'use strict';
    var e,
        t = {
            665: (e, t, n) => {
                var r = {};
                n.r(r), n.d(r, { mouse: () => p, onResize: () => d });
                var o = {};
                n.r(o),
                    n.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => E,
                        getSize: () => v,
                        graphicsQuality: () => g,
                    });
                var i = {};
                n.r(i), n.d(i, { getBgUrl: () => f, getTextureUrl: () => _ });
                var s = {};
                n.r(s),
                    n.d(s, {
                        addModelObserver: () => I,
                        addPreloadTexture: () => x,
                        children: () => i,
                        displayStatus: () => b,
                        displayStatusIs: () => V,
                        events: () => P,
                        extraSize: () => Q,
                        forceTriggerMouseMove: () => W,
                        freezeTextureBeforeResize: () => M,
                        getBrowserTexturePath: () => D,
                        getDisplayStatus: () => Y,
                        getScale: () => G,
                        getSize: () => N,
                        getViewGlobalPosition: () => U,
                        isEventHandled: () => q,
                        isFocused: () => j,
                        pxToRem: () => F,
                        remToPx: () => L,
                        resize: () => C,
                        sendEvent: () => A,
                        setAnimateWindow: () => z,
                        setEventHandled: () => X,
                        setInputPaddingsRem: () => O,
                        setSidePaddingsRem: () => k,
                        whenTutorialReady: () => H,
                    });
                var a = n(483),
                    l = n.n(a);
                function c(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function u(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const d = c('clientResized'),
                    m = { down: c('mousedown'), up: c('mouseup'), move: c('mousemove') };
                const p = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && u(!1);
                    }
                    function n() {
                        e.enabled && u(!0);
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
                            : u(!1);
                    }
                    const o = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const i = `mouse${t}`,
                                        s = m[t]((e) => n([e, 'outside']));
                                    function a(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, a),
                                        r(),
                                        () => {
                                            o &&
                                                (s(),
                                                window.removeEventListener(i, a),
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
                            e.enabled && u(!0);
                        },
                        disableOutside() {
                            e.enabled && u(!1);
                        },
                    });
                })();
                function v(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const g = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function _(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function f(e, t, n) {
                    return `url(${_(e, t, n)})`;
                }
                const b = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    P = {
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
                    T = ['args'];
                const h = 2,
                    y = 16,
                    w = 32,
                    S = 64,
                    B = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        o = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                    return o;
                                })(t, T);
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
                    A = {
                        close(e) {
                            B('popover' === e ? h : w);
                        },
                        minimize() {
                            B(S);
                        },
                        move(e) {
                            B(y, { isMouseEvent: !0, on: e });
                        },
                    };
                function x(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function O(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function D(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function I(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function k(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function N(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function C(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function U(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: L(t.x), y: L(t.y) };
                }
                function M() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function G() {
                    return viewEnv.getScale();
                }
                function F(e) {
                    return viewEnv.pxToRem(e);
                }
                function L(e) {
                    return viewEnv.remToPx(e);
                }
                function z(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function j() {
                    return viewEnv.isFocused();
                }
                function X() {
                    return viewEnv.setEventHandled();
                }
                function q() {
                    return viewEnv.isEventHandled();
                }
                function W() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Y() {
                    return viewEnv.getShowingStatus();
                }
                const V = Object.keys(b).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === b[t]), e), {}),
                    Q = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    H = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : P.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    $ = { view: s, client: o };
                var Z = n(179),
                    J = n.n(Z);
                function K() {
                    const e = (0, Z.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, Z.useEffect)(() => t, []),
                        (0, Z.useMemo)(
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
                const ee = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    te = ['children', 'className', 'theme'];
                function ne() {
                    return (
                        (ne =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        ne.apply(this, arguments)
                    );
                }
                const re = J().forwardRef(function (e, t) {
                    let n = e.children,
                        r = e.className,
                        o = e.theme,
                        i = void 0 === o ? 'default' : o,
                        s = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                o = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                            return o;
                        })(e, te);
                    const a = K(),
                        c = J().useRef(null);
                    var u;
                    return (
                        (u = () => {
                            a.run(() => {
                                const e = c.current;
                                if (!e) return;
                                const t = e.scrollWidth,
                                    n = e.scrollHeight;
                                $.view.resize(t, n);
                                const r = window.getComputedStyle(e);
                                $.view.setSidePaddingsRem({
                                    left: parseInt(r.getPropertyValue('padding-left'), 10),
                                    top: parseInt(r.getPropertyValue('padding-top'), 10),
                                    right: parseInt(r.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, Z.useEffect)(u, []),
                        J().createElement(
                            'div',
                            ne({}, s, {
                                className: l()(ee.base, ee[`base__theme-${i}`], r),
                                ref: function (e) {
                                    (c.current = e), 'function' == typeof t ? t(e) : t && (t.current = e);
                                },
                            }),
                            J().createElement('div', { className: ee.decorator }, n),
                        )
                    );
                });
                var oe = n(493),
                    ie = n.n(oe);
                let se, ae, le, ce, ue, de, me, pe;
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
                        (e.Currency = 'currency'),
                        (e.TankmenXp = 'tankmenXP'),
                        (e.TankmenXpFactor = 'tankmenXPFactor'),
                        (e.FreeXpFactor = 'freeXPFactor'),
                        (e.BattleToken = 'battleToken'),
                        (e.HBVehicleUnlock = 'hbUnlockVehicles'),
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
                        (e.NewYearAlbumsAccess = 'newYearAlbumsAccess'),
                        (e.NewYearFillers = 'ny22Fillers'),
                        (e.NewYearInvoice = 'newYearInvoice'),
                        (e.NewYearToyFragments = 'ny22ToyFragments'),
                        (e.NewYearSlot = 'newYearSlot'),
                        (e.BonusX5 = 'battle_bonus_x5'),
                        (e.CrewBonusX3 = 'crew_bonus_x3'),
                        (e.Vehicles = 'vehicles'),
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.CollectionItem = 'collectionItem'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.CosmicLootboxSilver = 'lootBoxToken'),
                        (e.CosmicLootboxCommon = 'cosmic_2024_2'),
                        (e.MayEntitlement100 = 'historical_battles_100'),
                        (e.HistoricalBattleDiscount25 = 'historical_battles_25'),
                        (e.HistoricalBattleDiscount50 = 'historical_battles_50'),
                        (e.HistoricalBattleDiscount75 = 'historical_battles_75');
                })(se || (se = {})),
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
                            (e.BattleAchievement = 'dossier_achievement');
                    })(ae || (ae = {})),
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
                            (e.S48x48 = 's48x48');
                    })(le || (le = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(ce || (ce = {})),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(ue || (ue = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(de || (de = {})),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(me || (me = {})),
                    (function (e) {
                        (e[(e.Inactive = 0)] = 'Inactive'),
                            (e[(e.Active = 1)] = 'Active'),
                            (e[(e.Canceled = 2)] = 'Canceled');
                    })(pe || (pe = {}));
                var ve = n(515);
                function Ee(e) {
                    return e;
                }
                function ge() {
                    return !1;
                }
                console.log;
                var _e = n(174);
                function fe(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return be(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return be(e, t);
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
                function be(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const Pe = (e) => (0 === e ? window : window.subViews.get(e));
                var Te = n(946);
                const he = ((e, t) => {
                        const n = (0, Z.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: o, children: i, mocks: s }) {
                                const a = (0, Z.useRef)([]),
                                    l = (n, r, o) => {
                                        var i;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = Pe,
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
                                                const s = (e) => {
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
                                                        const a = 'string' == typeof i ? `${r}.${i}` : r,
                                                            l = $.view.addModelObserver(a, t, !0);
                                                        return o.set(l, n), e && n(s(i)), l;
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, t) => {
                                                        const n = s(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = s(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, n = fe(o.keys()); !(e = n()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(r),
                                            l =
                                                'real' === n
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (i = null == o ? void 0 : o.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            c = (e) =>
                                                'mocks' === n ? (null == o ? void 0 : o.getter(e)) : l.readByPath(e),
                                            u = (e) => a.current.push(e),
                                            d = e({
                                                mode: n,
                                                readByPath: c,
                                                externalModel: l,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const r = null != t ? t : c(e),
                                                            o = _e.LO.box(r, { equals: ge });
                                                        return (
                                                            'real' === n &&
                                                                l.subscribe(
                                                                    (0, _e.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const r = null != t ? t : c(e),
                                                            o = _e.LO.box(r, { equals: ge });
                                                        return (
                                                            'real' === n &&
                                                                l.subscribe(
                                                                    (0, _e.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const r = c(t);
                                                        if (Array.isArray(e)) {
                                                            const o = e.reduce(
                                                                (e, t) => ((e[t] = _e.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === n &&
                                                                    l.subscribe(
                                                                        (0, _e.aD)((t) => {
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
                                                                s = i.reduce(
                                                                    (e, [t, n]) => ((e[n] = _e.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === n &&
                                                                    l.subscribe(
                                                                        (0, _e.aD)((e) => {
                                                                            i.forEach(([t, n]) => {
                                                                                s[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: u,
                                            }),
                                            m = { mode: n, model: d, externalModel: l, cleanup: u };
                                        return {
                                            model: d,
                                            controls: 'mocks' === n && o ? o.controls(m) : t(m),
                                            externalModel: l,
                                            mode: n,
                                        };
                                    },
                                    c = (0, Z.useRef)(!1),
                                    u = (0, Z.useState)(r),
                                    d = u[0],
                                    m = u[1],
                                    p = (0, Z.useState)(() => l(r, o, s)),
                                    v = p[0],
                                    E = p[1];
                                return (
                                    (0, Z.useEffect)(() => {
                                        c.current ? E(l(d, o, s)) : (c.current = !0);
                                    }, [s, d, o]),
                                    (0, Z.useEffect)(() => {
                                        m(r);
                                    }, [r]),
                                    (0, Z.useEffect)(
                                        () => () => {
                                            v.externalModel.dispose(), a.current.forEach((e) => e());
                                        },
                                        [v],
                                    ),
                                    J().createElement(n.Provider, { value: v }, i)
                                );
                            },
                            () => (0, Z.useContext)(n),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    bonuses: e.array('bonuses', []),
                                    nextCharge: e.primitives({ nextCharge: 'nextCharge' }),
                                },
                                n = (0, Te.Om)(
                                    () => {
                                        return (
                                            (e = t.bonuses.get()),
                                            (n = Ee),
                                            Array.isArray(e)
                                                ? e.map(n)
                                                : e.map((e, t, r) => n(null == e ? void 0 : e.value, t, r))
                                        );
                                        var e, n;
                                    },
                                    { equals: ge },
                                );
                            return Object.assign({ computes: { getBonuses: n } }, t);
                        },
                        () => {},
                    ),
                    ye = he[0],
                    we = he[1],
                    Se = 'WotPlusTooltipApp_base_e0',
                    Re = 'WotPlusTooltipApp_headerBlock_55',
                    Be = 'WotPlusTooltipApp_headerTitle_8e',
                    Ae = 'WotPlusTooltipApp_headerDesc_f7',
                    xe = 'WotPlusTooltipApp_decorator_a3',
                    Oe = 'WotPlusTooltipApp_gridBase_b7',
                    De = 'WotPlusTooltipApp_gridElement_18',
                    Ie = 'WotPlusTooltipApp_bonusImg_2a',
                    ke = 'WotPlusTooltipApp_bonusName_f0',
                    Ne = 'WotPlusTooltipApp_statusBlock_d8',
                    Ce = 'WotPlusTooltipApp_status_e3',
                    Ue = 'WotPlusTooltipApp_status__activated_ca',
                    Me = 'WotPlusTooltipApp_status__suspended_a8',
                    Ge = 'WotPlusTooltipApp_description_bd',
                    Fe = 'WotPlusTooltipApp_chargeBlock_69',
                    Le = 'WotPlusTooltipApp_chargeText_54',
                    ze = 'WotPlusTooltipApp_chargeTime_29',
                    je = () => R.strings.subscription.subscriptionCardTooltip,
                    Xe = { [pe.Inactive]: je().desc.available(), [pe.Canceled]: je().desc.canceled() },
                    qe = {
                        [pe.Active]: je().active(),
                        [pe.Inactive]: je().available(),
                        [pe.Canceled]: je().canceled(),
                    },
                    We = () => R.images.gui.maps.icons.subscription.tooltip,
                    Ye = (0, ve.Pi)(() => {
                        const e = we().model,
                            t = e.root.get(),
                            n = t.state,
                            r = t.nextCharge,
                            o = l()(Ce, n === pe.Active && Ue, n === pe.Canceled && Me),
                            i = ((e) => e.map((e) => ({ name: e.name, value: e.label, valueType: ce.STRING })))(
                                e.computes.getBonuses(),
                            );
                        return J().createElement(
                            'div',
                            { className: Se },
                            J().createElement(
                                'div',
                                { className: Re },
                                J().createElement('span', { className: Be }, je().headerTitle()),
                                J().createElement('span', { className: Ae }, je().headerDescription()),
                            ),
                            J().createElement(
                                'div',
                                { className: xe },
                                J().createElement(
                                    'div',
                                    { className: Oe },
                                    i.map(
                                        (e, t) =>
                                            e.name in We() &&
                                            J().createElement(
                                                'div',
                                                { className: De, key: t },
                                                J().createElement('div', {
                                                    className: Ie,
                                                    style: { backgroundImage: `url(${We()[e.name]()})` },
                                                }),
                                                J().createElement('span', { className: ke }, e.value),
                                            ),
                                    ),
                                ),
                            ),
                            J().createElement(
                                'div',
                                { className: Ne },
                                J().createElement('span', { className: o }, qe[n]),
                                n !== pe.Active && J().createElement('span', { className: Ge }, Xe[n]),
                                n === pe.Active &&
                                    J().createElement(
                                        'div',
                                        { className: Fe },
                                        J().createElement('span', { className: Le }, je().chargeTime()),
                                        J().createElement('span', { className: ze }, r),
                                    ),
                            ),
                        );
                    }),
                    Ve = (0, Z.memo)(Ye);
                engine.whenReady.then(() => {
                    ie().render(
                        J().createElement(re, null, J().createElement(ye, null, J().createElement(Ve, null))),
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
                var s = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [n, o, i] = e[u], a = !0, l = 0; l < n.length; l++)
                        (!1 & i || s >= i) && Object.keys(r.O).every((e) => r.O[e](n[l]))
                            ? n.splice(l--, 1)
                            : ((a = !1), i < s && (s = i));
                    if (a) {
                        e.splice(u--, 1);
                        var c = o();
                        void 0 !== c && (t = c);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
            e[u] = [n, o, i];
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
        (() => {
            var e = { 865: 0 };
            r.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        i,
                        [s, a, l] = n,
                        c = 0;
                    if (s.some((t) => 0 !== e[t])) {
                        for (o in a) r.o(a, o) && (r.m[o] = a[o]);
                        if (l) var u = l(r);
                    }
                    for (t && t(n); c < s.length; c++) (i = s[c]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return r.O(u);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var o = r.O(void 0, [174], () => r(665));
    o = r.O(o);
})();
