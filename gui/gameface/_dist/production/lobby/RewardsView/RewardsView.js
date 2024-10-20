(() => {
    'use strict';
    var __webpack_modules__ = {
            4090: (e, t, r) => {
                r.d(t, { A: () => u });
                var n = r(6483),
                    a = r.n(n),
                    i = r(6179),
                    s = r.n(i);
                const o = {
                        base: 'Counter_base_9e',
                        show: 'Counter_show_be',
                        base__big: 'Counter_base__big_19',
                        base__small: 'Counter_base__small_3b',
                        base__empty: 'Counter_base__empty_98',
                        base__animated: 'Counter_base__animated_40',
                        base__hidden: 'Counter_base__hidden_56',
                        hide: 'Counter_hide_b6',
                        bg: 'Counter_bg_74',
                        value: 'Counter_value_3e',
                        value__text: 'Counter_value__text_d6',
                        base__pattern: 'Counter_base__pattern_71',
                        plus: 'Counter_plus_15',
                        pattern: 'Counter_pattern_83',
                    },
                    l = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function c() {
                    return (
                        (c =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        c.apply(this, arguments)
                    );
                }
                const u = (e) => {
                    let t = e.size,
                        r = e.value,
                        n = e.isEmpty,
                        i = e.fadeInAnimation,
                        u = e.hide,
                        d = e.maximumNumber,
                        _ = e.className,
                        m = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                            return a;
                        })(e, l);
                    const g = n ? null : r,
                        h = 'string' == typeof g;
                    if ((g && !h && g < 0) || 0 === g) return null;
                    const E = g && !h && g > d,
                        w = a()(
                            o.base,
                            o[`base__${t}`],
                            i && o.base__animated,
                            u && o.base__hidden,
                            !g && o.base__pattern,
                            n && o.base__empty,
                            _,
                        );
                    return s().createElement(
                        'div',
                        c({ className: w }, m),
                        s().createElement('div', { className: o.bg }),
                        s().createElement('div', { className: o.pattern }),
                        s().createElement(
                            'div',
                            { className: a()(o.value, h && o.value__text) },
                            E ? d : g,
                            E && s().createElement('span', { className: o.plus }, '+'),
                        ),
                    );
                };
                u.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
            },
            3495: (e, t, r) => {
                r.d(t, { Y: () => d });
                var n = r(3138),
                    a = r(6179),
                    i = r(1043),
                    s = r(5262);
                const o = n.O.client.getSize('rem'),
                    l = o.width,
                    c = o.height,
                    u = Object.assign({ width: l, height: c }, (0, s.T)(l, c, i.j)),
                    d = (0, a.createContext)(u);
            },
            1039: (e, t, r) => {
                var n = r(6179),
                    a = r.n(n),
                    i = r(6536),
                    s = r(3495),
                    o = r(1043),
                    l = r(5262),
                    c = r(3138);
                (0, n.memo)(({ children: e }) => {
                    const t = (0, n.useContext)(s.Y),
                        r = (0, n.useState)(t),
                        u = r[0],
                        d = r[1],
                        _ = (0, n.useCallback)((e, t) => {
                            const r = c.O.view.pxToRem(e),
                                n = c.O.view.pxToRem(t);
                            d(Object.assign({ width: r, height: n }, (0, l.T)(r, n, o.j)));
                        }, []);
                    (0, i.Z)(() => {
                        engine.on('clientResized', _);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', _), [_]);
                    const m = (0, n.useMemo)(() => Object.assign({}, u), [u]);
                    return a().createElement(s.Y.Provider, { value: m }, e);
                });
            },
            6010: (e, t, r) => {
                var n = r(6179),
                    a = r(7382),
                    i = r(3495);
                const s = ['children'],
                    o = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                return a;
                            })(e, s);
                        const o = (0, n.useContext)(i.Y),
                            l = o.extraLarge,
                            c = o.large,
                            u = o.medium,
                            d = o.small,
                            _ = o.extraSmall,
                            m = o.extraLargeWidth,
                            g = o.largeWidth,
                            h = o.mediumWidth,
                            E = o.smallWidth,
                            w = o.extraSmallWidth,
                            v = o.extraLargeHeight,
                            p = o.largeHeight,
                            b = o.mediumHeight,
                            f = o.smallHeight,
                            R = o.extraSmallHeight,
                            S = { extraLarge: v, large: p, medium: b, small: f, extraSmall: R };
                        if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                            if (r.extraLarge && l) return t;
                            if (r.large && c) return t;
                            if (r.medium && u) return t;
                            if (r.small && d) return t;
                            if (r.extraSmall && _) return t;
                        } else {
                            if (r.extraLargeWidth && m) return (0, a.H)(t, r, S);
                            if (r.largeWidth && g) return (0, a.H)(t, r, S);
                            if (r.mediumWidth && h) return (0, a.H)(t, r, S);
                            if (r.smallWidth && E) return (0, a.H)(t, r, S);
                            if (r.extraSmallWidth && w) return (0, a.H)(t, r, S);
                            if (
                                !(
                                    r.extraLargeWidth ||
                                    r.largeWidth ||
                                    r.mediumWidth ||
                                    r.smallWidth ||
                                    r.extraSmallWidth
                                )
                            ) {
                                if (r.extraLargeHeight && v) return t;
                                if (r.largeHeight && p) return t;
                                if (r.mediumHeight && b) return t;
                                if (r.smallHeight && f) return t;
                                if (r.extraSmallHeight && R) return t;
                            }
                        }
                        return null;
                    };
                (o.defaultProps = {
                    extraLarge: !1,
                    large: !1,
                    medium: !1,
                    small: !1,
                    extraSmall: !1,
                    extraLargeWidth: !1,
                    largeWidth: !1,
                    mediumWidth: !1,
                    smallWidth: !1,
                    extraSmallWidth: !1,
                    extraLargeHeight: !1,
                    largeHeight: !1,
                    mediumHeight: !1,
                    smallHeight: !1,
                    extraSmallHeight: !1,
                }),
                    (0, n.memo)(o);
            },
            7382: (e, t, r) => {
                r.d(t, { H: () => n });
                const n = (e, t, r) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && r.extraLarge) ||
                          (t.largeHeight && r.large) ||
                          (t.mediumHeight && r.medium) ||
                          (t.smallHeight && r.small) ||
                          (t.extraSmallHeight && r.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, r) => {
                r.d(t, { YN: () => n.Y }), r(6010), r(1039);
                var n = r(3495);
            },
            1043: (e, t, r) => {
                r.d(t, { j: () => n });
                const n = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, r) => {
                var n;
                function a(e, t, r) {
                    const n = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.width:
                                    return t.extraLarge.weight;
                                case e >= t.large.width && e < t.extraLarge.width:
                                    return t.large.weight;
                                case e >= t.medium.width && e < t.large.width:
                                    return t.medium.weight;
                                case e >= t.small.width && e < t.medium.width:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(e, r),
                        a = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.height:
                                    return t.extraLarge.weight;
                                case e >= t.large.height && e < t.extraLarge.height:
                                    return t.large.weight;
                                case e >= t.medium.height && e < t.large.height:
                                    return t.medium.weight;
                                case e >= t.small.height && e < t.medium.height:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(t, r),
                        i = Math.min(n, a);
                    return {
                        extraLarge: i === r.extraLarge.weight,
                        large: i === r.large.weight,
                        medium: i === r.medium.weight,
                        small: i === r.small.weight,
                        extraSmall: i === r.extraSmall.weight,
                        extraLargeWidth: n === r.extraLarge.weight,
                        largeWidth: n === r.large.weight,
                        mediumWidth: n === r.medium.weight,
                        smallWidth: n === r.small.weight,
                        extraSmallWidth: n === r.extraSmall.weight,
                        extraLargeHeight: a === r.extraLarge.weight,
                        largeHeight: a === r.large.weight,
                        mediumHeight: a === r.medium.weight,
                        smallHeight: a === r.small.weight,
                        extraSmallHeight: a === r.extraSmall.weight,
                    };
                }
                r.d(t, { T: () => a }),
                    (function (e) {
                        (e.extraLarge = 'extraLarge'),
                            (e.large = 'large'),
                            (e.medium = 'medium'),
                            (e.small = 'small'),
                            (e.extraSmall = 'extraSmall'),
                            (e.extraLargeWidth = 'extraLargeWidth'),
                            (e.largeWidth = 'largeWidth'),
                            (e.mediumWidth = 'mediumWidth'),
                            (e.smallWidth = 'smallWidth'),
                            (e.extraSmallWidth = 'extraSmallWidth'),
                            (e.extraLargeHeight = 'extraLargeHeight'),
                            (e.largeHeight = 'largeHeight'),
                            (e.mediumHeight = 'mediumHeight'),
                            (e.smallHeight = 'smallHeight'),
                            (e.extraSmallHeight = 'extraSmallHeight');
                    })(n || (n = {}));
            },
            2862: (e, t, r) => {
                let n, a, i, s, o, l, c;
                r.d(t, { $h: () => s, A2: () => l, E4: () => n, h2: () => i, kK: () => o, sh: () => c }),
                    (function (e) {
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
                            (e.PremiumUniversal = 'premium_universal'),
                            (e.Gold = 'gold'),
                            (e.Credits = 'credits'),
                            (e.Crystal = 'crystal'),
                            (e.FreeXp = 'freeXP'),
                            (e.Premium = 'premium'),
                            (e.PremiumPlus = 'premium_plus'),
                            (e.BattlePassPoints = 'battlePassPoints'),
                            (e.BattlePassSelectToken = 'battlePassSelectToken'),
                            (e.SelectableBonus = 'selectableBonus'),
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
                            (e.Comp7TokenCouponReward = 'comp7TokenCouponReward'),
                            (e.BattleBoosterGift = 'battleBooster_gift'),
                            (e.CosmicLootboxSilver = 'lootBoxToken'),
                            (e.CosmicLootboxCommon = 'cosmic_2024_2'),
                            (e.WtStamp = 'stamp'),
                            (e.WtHunter = 'wt_hunter'),
                            (e.WtHunterCollection = 'hunter_collection'),
                            (e.WtTicket = 'wtevent_ticket'),
                            (e.WtMainPrizeDiscount = 'main_prize_discount');
                    })(n || (n = {})),
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
                    })(a || (a = {})),
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
                    })(i || (i = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(s || (s = {})),
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
                    })(o || (o = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(l || (l = {})),
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
                    })(c || (c = {}));
            },
            1558: (e, t, r) => {
                r.d(t, { m9: () => p, L_: () => w, i2: () => v, ry: () => h, pI: () => E, p3: () => _ });
                var n = r(6179),
                    a = r.n(n),
                    i = r(4179);
                const s = ({ format: e, value: t }) => {
                    const r = ((e, t = 'integral') => {
                        let r;
                        return (
                            (r = 'gold' === t ? i.B3.GOLD : i.B3.INTEGRAL),
                            void 0 === e ? '' : i.Z5.getNumberFormat(e, r)
                        );
                    })(t, e);
                    return r ? a().createElement('span', null, r) : null;
                };
                var o = r(2862);
                const l = [
                        o.E4.Items,
                        o.E4.Equipment,
                        o.E4.Xp,
                        o.E4.XpFactor,
                        o.E4.Blueprints,
                        o.E4.BlueprintsAny,
                        o.E4.Goodies,
                        o.E4.Berths,
                        o.E4.Slots,
                        o.E4.Tokens,
                        o.E4.CrewSkins,
                        o.E4.CrewBooks,
                        o.E4.Customizations,
                        o.E4.CreditsFactor,
                        o.E4.TankmenXp,
                        o.E4.TankmenXpFactor,
                        o.E4.FreeXpFactor,
                        o.E4.BattleToken,
                        o.E4.PremiumUniversal,
                        o.E4.NaturalCover,
                        o.E4.BpCoin,
                        o.E4.BattlePassSelectToken,
                        o.E4.BattlaPassFinalAchievement,
                        o.E4.BattleBadge,
                        o.E4.BonusX5,
                        o.E4.CrewBonusX3,
                        o.E4.NewYearFillers,
                        o.E4.NewYearInvoice,
                        o.E4.EpicSelectToken,
                        o.E4.Comp7TokenWeeklyReward,
                        o.E4.Comp7TokenCouponReward,
                        o.E4.BattleBoosterGift,
                        o.E4.CosmicLootboxCommon,
                        o.E4.CosmicLootboxSilver,
                        o.E4.SelectableBonus,
                        o.E4.WtStamp,
                        o.E4.WtTicket,
                        o.E4.WtMainPrizeDiscount,
                        o.E4.WtHunter,
                        o.E4.WtHunterCollection,
                    ],
                    c = [o.E4.Gold, o.E4.Credits, o.E4.Crystal, o.E4.FreeXp],
                    u = [o.E4.BattlePassPoints],
                    d = [o.E4.PremiumPlus, o.E4.Premium],
                    _ = (e) =>
                        l.includes(e)
                            ? o.$h.MULTI
                            : c.includes(e)
                              ? o.$h.CURRENCY
                              : u.includes(e)
                                ? o.$h.NUMBER
                                : d.includes(e)
                                  ? o.$h.PREMIUM_PLUS
                                  : o.$h.STRING,
                    m = ['engravings', 'backgrounds'],
                    g = ['engraving', 'background'],
                    h = (e, t = o.h2.Small) => {
                        const r = e.name,
                            n = e.type,
                            a = e.value,
                            i = e.icon,
                            s = e.item,
                            l = e.dogTagType,
                            c = ((e) => {
                                switch (e) {
                                    case o.h2.S600x450:
                                        return 'c_600x450';
                                    case o.h2.S400x300:
                                        return 'c_400x300';
                                    case o.h2.S296x222:
                                        return 'c_296x222';
                                    case o.h2.S232x174:
                                        return 'c_232x174';
                                    case o.h2.Big:
                                        return 'c_80x80';
                                    case o.h2.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (r) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}_${a}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}_plus_${a}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}_${a}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${i}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, t) => {
                                    switch (t) {
                                        case o.h2.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case o.h2.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${t}.${e.icon}`;
                                    }
                                })(e, t);
                            case 'lootBoxToken':
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                            case 'selectableBonus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${i}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${i}`;
                            case 'dogTagComponents':
                                return ((e, t, r) => {
                                    const n = m[e];
                                    if (n) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(n),
                                            i = a.$dyn(r);
                                        return i ? `${i}` : `${a.$dyn(g[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(l, t, i);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${c}.${i}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${c}.${i}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${c}.${i}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}`;
                        }
                    },
                    E = (e, t, r) => {
                        const n = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            n,
                            r,
                        );
                    },
                    w = (e) => {
                        if (void 0 === e) return null;
                        switch (e) {
                            case o.kK.BATTLE_BOOSTER:
                            case o.kK.BATTLE_BOOSTER_REPLACE:
                                return o.A2.BATTLE_BOOSTER;
                        }
                    },
                    v = (e) => {
                        if (void 0 === e) return null;
                        switch (e) {
                            case o.kK.BATTLE_BOOSTER:
                                return o.sh.BATTLE_BOOSTER;
                            case o.kK.BATTLE_BOOSTER_REPLACE:
                                return o.sh.BATTLE_BOOSTER_REPLACE;
                            case o.kK.BUILT_IN_EQUIPMENT:
                                return o.sh.BUILT_IN_EQUIPMENT;
                            case o.kK.EQUIPMENT_PLUS:
                                return o.sh.EQUIPMENT_PLUS;
                            case o.kK.EQUIPMENT_TROPHY_BASIC:
                                return o.sh.EQUIPMENT_TROPHY_BASIC;
                            case o.kK.EQUIPMENT_TROPHY_UPGRADED:
                                return o.sh.EQUIPMENT_TROPHY_UPGRADED;
                            case o.kK.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                return o.sh.EQUIPMENT_MODERNIZED_UPGRADED_1;
                            case o.kK.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                return o.sh.EQUIPMENT_MODERNIZED_UPGRADED_2;
                            case o.kK.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                return o.sh.EQUIPMENT_MODERNIZED_UPGRADED_3;
                            case o.kK.PROGRESSION_STYLE_UPGRADED_1:
                                return o.sh.PROGRESSION_STYLE_UPGRADED_1;
                            case o.kK.PROGRESSION_STYLE_UPGRADED_2:
                                return o.sh.PROGRESSION_STYLE_UPGRADED_2;
                            case o.kK.PROGRESSION_STYLE_UPGRADED_3:
                                return o.sh.PROGRESSION_STYLE_UPGRADED_3;
                            case o.kK.PROGRESSION_STYLE_UPGRADED_4:
                                return o.sh.PROGRESSION_STYLE_UPGRADED_4;
                        }
                    },
                    p = (e, t) => {
                        if (void 0 === e) return null;
                        switch (t) {
                            case o.$h.MULTI: {
                                const t = Number(e);
                                return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                            }
                            case o.$h.CURRENCY:
                            case o.$h.NUMBER:
                                return a().createElement(s, { format: 'integral', value: Number(e) });
                            case o.$h.PREMIUM_PLUS: {
                                const t = Number(e);
                                return isNaN(t) ? e : null;
                            }
                            default:
                                return e;
                        }
                    };
            },
            7078: (e, t, r) => {
                r.d(t, { t: () => l });
                var n = r(6179),
                    a = r.n(n),
                    i = r(2056);
                const s = ['children'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const l = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                            return a;
                        })(e, s);
                    return a().createElement(
                        i.u,
                        o(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            r,
                        ),
                        t,
                    );
                };
            },
            3415: (e, t, r) => {
                r.d(t, { l: () => c });
                var n = r(6179),
                    a = r.n(n),
                    i = r(7078),
                    s = r(6373),
                    o = r(2056);
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const c = ({ children: e, tooltipArgs: t, className: r }) => {
                    if (!t) return e;
                    const n = a().createElement('div', { className: r }, e);
                    if (t.header || t.body) return a().createElement(s.i, t, n);
                    const c = t.contentId,
                        u = t.args,
                        d = null == u ? void 0 : u.contentId;
                    return c || d
                        ? a().createElement(o.u, l({}, t, { contentId: c || d }), n)
                        : a().createElement(i.t, t, n);
                };
            },
            6373: (e, t, r) => {
                r.d(t, { i: () => c });
                var n = r(2056),
                    a = r(6179),
                    i = r.n(a);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const l = R.views.common.tooltip_window.simple_tooltip_content,
                    c = (e) => {
                        let t = e.children,
                            r = e.body,
                            c = e.header,
                            u = e.note,
                            d = e.alert,
                            _ = e.args,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                return a;
                            })(e, s);
                        const g = (0, a.useMemo)(() => {
                            const e = Object.assign({}, _, { body: r, header: c, note: u, alert: d });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [d, r, c, u, _]);
                        return i().createElement(
                            n.u,
                            o(
                                {
                                    contentId:
                                        ((h = null == _ ? void 0 : _.hasHtmlContent),
                                        h ? l.SimpleTooltipHtmlContent('resId') : l.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: g,
                                },
                                m,
                            ),
                            t,
                        );
                        var h;
                    };
            },
            2056: (e, t, r) => {
                r.d(t, { u: () => c });
                var n = r(7902),
                    a = r(4179),
                    i = r(6179);
                const s = [
                    'children',
                    'contentId',
                    'args',
                    'onMouseEnter',
                    'onMouseLeave',
                    'onMouseDown',
                    'onClick',
                    'ignoreShowDelay',
                    'ignoreMouseClick',
                    'decoratorId',
                    'isEnabled',
                    'targetId',
                    'onShow',
                    'onHide',
                ];
                function o(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const r = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                r.number = t;
                                break;
                            case 'boolean':
                                r.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                r.string = t.toString();
                        }
                        return r;
                    });
                }
                const l = (e, t, r = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: a.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                r,
                            ),
                        );
                    },
                    c = (e) => {
                        let t = e.children,
                            r = e.contentId,
                            a = e.args,
                            c = e.onMouseEnter,
                            u = e.onMouseLeave,
                            d = e.onMouseDown,
                            _ = e.onClick,
                            m = e.ignoreShowDelay,
                            g = void 0 !== m && m,
                            h = e.ignoreMouseClick,
                            E = void 0 !== h && h,
                            w = e.decoratorId,
                            v = void 0 === w ? 0 : w,
                            p = e.isEnabled,
                            b = void 0 === p || p,
                            f = e.targetId,
                            R = void 0 === f ? 0 : f,
                            S = e.onShow,
                            T = e.onHide,
                            P = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                return a;
                            })(e, s);
                        const O = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            k = (0, i.useMemo)(() => R || (0, n.F)().resId, [R]),
                            y = (0, i.useCallback)(() => {
                                (O.current.isVisible && O.current.timeoutId) ||
                                    (l(r, v, { isMouseEvent: !0, on: !0, arguments: o(a) }, k),
                                    S && S(),
                                    (O.current.isVisible = !0));
                            }, [r, v, a, k, S]),
                            x = (0, i.useCallback)(() => {
                                if (O.current.isVisible || O.current.timeoutId) {
                                    const e = O.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (O.current.timeoutId = 0)),
                                        l(r, v, { on: !1 }, k),
                                        O.current.isVisible && T && T(),
                                        (O.current.isVisible = !1);
                                }
                            }, [r, v, k, T]),
                            M = (0, i.useCallback)((e) => {
                                O.current.isVisible &&
                                    ((O.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (O.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(O.current.prevTarget) && x();
                                    }, 200)));
                            }, []);
                        return (
                            (0, i.useEffect)(() => {
                                const e = O.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', M, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', M, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, i.useEffect)(() => {
                                !1 === b && x();
                            }, [b, x]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', x),
                                    () => {
                                        window.removeEventListener('mouseleave', x), x();
                                    }
                                ),
                                [x],
                            ),
                            b
                                ? (0, i.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((L = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((O.current.timeoutId = window.setTimeout(y, g ? 100 : 400)),
                                                          c && c(e),
                                                          L && L(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  x(), null == u || u(t), null == e || e(t);
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  !1 === E && x(), null == _ || _(t), null == e || e(t);
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  !1 === E && x(), null == d || d(t), null == e || e(t);
                                              })(t.props.onMouseDown),
                                          },
                                          P,
                                      ),
                                  )
                                : t
                        );
                        var L;
                    };
            },
            8246: (e, t, r) => {
                r.d(t, { U: () => s });
                var n = r(3138);
                function a(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                    return n;
                }
                const i = (e) => (0 === e ? window : window.subViews.get(e));
                function s({ initializer: e = !0, rootId: t = 0, getRoot: r = i, context: s = 'model' } = {}) {
                    const o = new Map();
                    function l(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? o.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, r) => {
                            r.forEach((t) => {
                                const r = o.get(t);
                                void 0 !== r && r(e);
                            });
                        });
                    });
                    const c = (e) => {
                        const n = r(t),
                            a = s.split('.').reduce((e, t) => e[t], n);
                        return 'string' != typeof e || 0 === e.length
                            ? a
                            : e.split('.').reduce((e, t) => {
                                  const r = e[t];
                                  return 'function' == typeof r ? r.bind(e) : r;
                              }, a);
                    };
                    return {
                        subscribe: (r, a) => {
                            const i = 'string' == typeof a ? `${s}.${a}` : s,
                                l = n.O.view.addModelObserver(i, t, !0);
                            return o.set(l, r), e && r(c(a)), l;
                        },
                        readByPath: c,
                        createCallback: (e, t) => {
                            const r = c(t);
                            return (...t) => {
                                r(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = c(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (
                                var e,
                                    r = (function (e, t) {
                                        var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                                        if (r) return (r = r.call(e)).next.bind(r);
                                        if (
                                            Array.isArray(e) ||
                                            (r = (function (e, t) {
                                                if (e) {
                                                    if ('string' == typeof e) return a(e, t);
                                                    var r = Object.prototype.toString.call(e).slice(8, -1);
                                                    return (
                                                        'Object' === r && e.constructor && (r = e.constructor.name),
                                                        'Map' === r || 'Set' === r
                                                            ? Array.from(e)
                                                            : 'Arguments' === r ||
                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                                                              ? a(e, t)
                                                              : void 0
                                                    );
                                                }
                                            })(e)) ||
                                            (t && e && 'number' == typeof e.length)
                                        ) {
                                            r && (e = r);
                                            var n = 0;
                                            return function () {
                                                return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                                            };
                                        }
                                        throw new TypeError(
                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                        );
                                    })(o.keys());
                                !(e = r()).done;

                            )
                                l(e.value, t);
                        },
                        unsubscribe: l,
                    };
                }
            },
            3215: (e, t, r) => {
                r.d(t, { q: () => l });
                var n = r(4598),
                    a = r(9174),
                    i = r(6179),
                    s = r.n(i),
                    o = r(8246);
                const l = () => (e, t) => {
                    const r = (0, i.createContext)({});
                    return [
                        function ({ mode: l = 'real', options: c, children: u, mocks: d }) {
                            const _ = (0, i.useRef)([]),
                                m = (r, i, s) => {
                                    var l;
                                    const c = o.U(i),
                                        u =
                                            'real' === r
                                                ? c
                                                : Object.assign({}, c, {
                                                      readByPath:
                                                          null != (l = null == s ? void 0 : s.getter) ? l : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === r ? (null == s ? void 0 : s.getter(e)) : u.readByPath(e),
                                        m = (e) => _.current.push(e),
                                        g = e({
                                            mode: r,
                                            readByPath: d,
                                            externalModel: u,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const i = null != t ? t : d(e),
                                                        s = a.LO.box(i, { equals: n.jv });
                                                    return (
                                                        'real' === r &&
                                                            u.subscribe(
                                                                (0, a.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const i = null != t ? t : d(e),
                                                        s = a.LO.box(i, { equals: n.jv });
                                                    return (
                                                        'real' === r &&
                                                            u.subscribe(
                                                                (0, a.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const n = d(t);
                                                    if (Array.isArray(e)) {
                                                        const i = e.reduce(
                                                            (e, t) => ((e[t] = a.LO.box(n[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === r &&
                                                                u.subscribe(
                                                                    (0, a.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            i[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                    {
                                                        const i = e,
                                                            s = Object.entries(i),
                                                            o = s.reduce(
                                                                (e, [t, r]) => ((e[r] = a.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === r &&
                                                                u.subscribe(
                                                                    (0, a.aD)((e) => {
                                                                        s.forEach(([t, r]) => {
                                                                            o[r].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: m,
                                        }),
                                        h = { mode: r, model: g, externalModel: u, cleanup: m };
                                    return {
                                        model: g,
                                        controls: 'mocks' === r && s ? s.controls(h) : t(h),
                                        externalModel: u,
                                        mode: r,
                                    };
                                },
                                g = (0, i.useRef)(!1),
                                h = (0, i.useState)(l),
                                E = h[0],
                                w = h[1],
                                v = (0, i.useState)(() => m(l, c, d)),
                                p = v[0],
                                b = v[1];
                            return (
                                (0, i.useEffect)(() => {
                                    g.current ? b(m(E, c, d)) : (g.current = !0);
                                }, [d, E, c]),
                                (0, i.useEffect)(() => {
                                    w(l);
                                }, [l]),
                                (0, i.useEffect)(
                                    () => () => {
                                        p.externalModel.dispose(), _.current.forEach((e) => e());
                                    },
                                    [p],
                                ),
                                s().createElement(r.Provider, { value: p }, u)
                            );
                        },
                        () => (0, i.useContext)(r),
                    ];
                };
            },
            527: (e, t, r) => {
                r.r(t), r.d(t, { mouse: () => o, onResize: () => i });
                var n = r(2472),
                    a = r(1176);
                const i = (0, n.E)('clientResized'),
                    s = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    o = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, a.R)(!1);
                        }
                        function r() {
                            e.enabled && (0, a.R)(!0);
                        }
                        function n() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', r))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', r))
                                : (0, a.R)(!1);
                        }
                        const i = ['down', 'up', 'move'].reduce(
                            (t, r) => (
                                (t[r] = (function (t) {
                                    return (r) => {
                                        e.listeners += 1;
                                        let a = !0;
                                        const i = `mouse${t}`,
                                            o = s[t]((e) => r([e, 'outside']));
                                        function l(e) {
                                            r([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, l),
                                            n(),
                                            () => {
                                                a &&
                                                    (o(),
                                                    window.removeEventListener(i, l),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (a = !1));
                                            }
                                        );
                                    };
                                })(r)),
                                t
                            ),
                            {},
                        );
                        return Object.assign({}, i, {
                            disable() {
                                (e.enabled = !1), n();
                            },
                            enable() {
                                (e.enabled = !0), n();
                            },
                            enableOutside() {
                                e.enabled && (0, a.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, a.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, t, r) => {
                r.r(t),
                    r.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => a,
                        graphicsQuality: () => s,
                    });
                var n = r(527);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, r) => {
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                r.d(t, { R: () => n });
            },
            2472: (e, t, r) => {
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                r.d(t, { E: () => n });
            },
            3138: (e, t, r) => {
                r.d(t, { O: () => a });
                var n = r(5959);
                const a = { view: r(7641), client: n };
            },
            3722: (e, t, r) => {
                function n(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function a(e, t, r) {
                    return `url(${n(e, t, r)})`;
                }
                r.r(t), r.d(t, { getBgUrl: () => a, getTextureUrl: () => n });
            },
            6112: (e, t, r) => {
                r.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, r) => {
                r.d(t, { U: () => a });
                var n = r(2472);
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
            7641: (e, t, r) => {
                r.r(t),
                    r.d(t, {
                        addModelObserver: () => u,
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => P,
                        events: () => i.U,
                        extraSize: () => O,
                        forceTriggerMouseMove: () => S,
                        freezeTextureBeforeResize: () => h,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => T,
                        getScale: () => E,
                        getSize: () => _,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => R,
                        isFocused: () => b,
                        pxToRem: () => w,
                        remToPx: () => v,
                        resize: () => m,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => f,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => k,
                    });
                var n = r(3722),
                    a = r(6112),
                    i = r(6538),
                    s = r(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, r, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, n);
                }
                function u(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: v(t.x), y: v(t.y) };
                }
                function h() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function E() {
                    return viewEnv.getScale();
                }
                function w(e) {
                    return viewEnv.pxToRem(e);
                }
                function v(e) {
                    return viewEnv.remToPx(e);
                }
                function p(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function b() {
                    return viewEnv.isFocused();
                }
                function f() {
                    return viewEnv.setEventHandled();
                }
                function R() {
                    return viewEnv.isEventHandled();
                }
                function S() {
                    viewEnv.forceTriggerMouseMove();
                }
                function T() {
                    return viewEnv.getShowingStatus();
                }
                const P = Object.keys(a.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
                        {},
                    ),
                    O = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    k = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, r) => {
                r.d(t, { qP: () => i });
                const n = ['args'],
                    a = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                    return a;
                                })(t, n);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, s, {
                                          arguments:
                                              ((a = i),
                                              Object.entries(a).map(([e, t]) => {
                                                  const r = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: r, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: r, name: e, bool: t };
                                                      default:
                                                          return { __Type: r, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: r, type: e });
                        var a;
                    },
                    i = {
                        close(e) {
                            a('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            a(64);
                        },
                        move(e) {
                            a(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, r) => {
                function n() {
                    return !1;
                }
                r.d(t, { jv: () => n }), console.log;
            },
            7902: (e, t, r) => {
                r.d(t, { F: () => n });
                const n = (e = 1) => {
                    const t = new Error().stack;
                    let r,
                        n = R.invalid('resId');
                    return (
                        t &&
                            ((r = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== r &&
                                window.subViews[r] &&
                                (n = window.subViews[r].id)),
                        { caller: r, stack: t, resId: n }
                    );
                };
            },
            6536: (e, t, r) => {
                r.d(t, { Z: () => a });
                var n = r(6179);
                const a = (e) => {
                    const t = (0, n.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            5415: (e, t, r) => {
                r.d(t, { GS: () => c, cJ: () => s });
                var n = r(6179),
                    a = r(7739),
                    i = r(1043);
                let s, o, l;
                !(function (e) {
                    (e[(e.ExtraSmall = i.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = i.j.small.width)] = 'Small'),
                        (e[(e.Medium = i.j.medium.width)] = 'Medium'),
                        (e[(e.Large = i.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = i.j.extraLarge.width)] = 'ExtraLarge');
                })(s || (s = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = i.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = i.j.small.width)] = 'Small'),
                            (e[(e.Medium = i.j.medium.width)] = 'Medium'),
                            (e[(e.Large = i.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = i.j.extraLarge.width)] = 'ExtraLarge');
                    })(o || (o = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = i.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = i.j.small.height)] = 'Small'),
                            (e[(e.Medium = i.j.medium.height)] = 'Medium'),
                            (e[(e.Large = i.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = i.j.extraLarge.height)] = 'ExtraLarge');
                    })(l || (l = {}));
                const c = () => {
                    const e = (0, n.useContext)(a.YN),
                        t = e.width,
                        r = e.height,
                        i = ((e) => {
                            switch (!0) {
                                case e.extraLarge:
                                    return s.ExtraLarge;
                                case e.large:
                                    return s.Large;
                                case e.medium:
                                    return s.Medium;
                                case e.small:
                                    return s.Small;
                                case e.extraSmall:
                                    return s.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), s.ExtraSmall;
                            }
                        })(e),
                        c = ((e) => {
                            switch (!0) {
                                case e.extraLargeWidth:
                                    return o.ExtraLarge;
                                case e.largeWidth:
                                    return o.Large;
                                case e.mediumWidth:
                                    return o.Medium;
                                case e.smallWidth:
                                    return o.Small;
                                case e.extraSmallWidth:
                                    return o.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), o.ExtraSmall;
                            }
                        })(e),
                        u = ((e) => {
                            switch (!0) {
                                case e.extraLargeHeight:
                                    return l.ExtraLarge;
                                case e.largeHeight:
                                    return l.Large;
                                case e.mediumHeight:
                                    return l.Medium;
                                case e.smallHeight:
                                    return l.Small;
                                case e.extraSmallHeight:
                                    return l.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), l.ExtraSmall;
                            }
                        })(e);
                    return { mediaSize: i, mediaWidth: c, mediaHeight: u, remScreenWidth: t, remScreenHeight: r };
                };
            },
            5521: (e, t, r) => {
                let n, a;
                r.d(t, { n: () => n }),
                    (function (e) {
                        (e[(e.NONE = -1)] = 'NONE'),
                            (e[(e.ALT = 165)] = 'ALT'),
                            (e[(e.ENTER = 13)] = 'ENTER'),
                            (e[(e.ESCAPE = 27)] = 'ESCAPE'),
                            (e[(e.SPACE = 32)] = 'SPACE'),
                            (e[(e.END = 35)] = 'END'),
                            (e[(e.HOME = 36)] = 'HOME'),
                            (e[(e.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
                            (e[(e.ARROW_UP = 38)] = 'ARROW_UP'),
                            (e[(e.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
                            (e[(e.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
                            (e[(e.NUM_PLUS = 107)] = 'NUM_PLUS'),
                            (e[(e.NUM_MINUS = 109)] = 'NUM_MINUS'),
                            (e[(e.PLUS = 187)] = 'PLUS'),
                            (e[(e.MINUS = 189)] = 'MINUS'),
                            (e[(e.PAGE_UP = 33)] = 'PAGE_UP'),
                            (e[(e.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
                            (e[(e.BACKSPACE = 8)] = 'BACKSPACE'),
                            (e[(e.DELETE = 46)] = 'DELETE'),
                            (e[(e.TAB = 9)] = 'TAB'),
                            (e[(e.KEY_N = 78)] = 'KEY_N'),
                            (e[(e.KEY_1 = 49)] = 'KEY_1'),
                            (e[(e.KEY_2 = 50)] = 'KEY_2'),
                            (e[(e.KEY_3 = 51)] = 'KEY_3'),
                            (e[(e.KEY_4 = 52)] = 'KEY_4'),
                            (e[(e.KEY_5 = 53)] = 'KEY_5'),
                            (e[(e.KEY_6 = 54)] = 'KEY_6'),
                            (e[(e.KEY_7 = 55)] = 'KEY_7'),
                            (e[(e.KEY_8 = 56)] = 'KEY_8'),
                            (e[(e.KEY_9 = 57)] = 'KEY_9'),
                            (e[(e.CAPS_LOCK = 20)] = 'CAPS_LOCK'),
                            (e[(e.INSERT = 45)] = 'INSERT'),
                            (e[(e.F1 = 112)] = 'F1'),
                            (e[(e.F2 = 113)] = 'F2'),
                            (e[(e.F3 = 114)] = 'F3'),
                            (e[(e.F4 = 115)] = 'F4'),
                            (e[(e.F5 = 116)] = 'F5'),
                            (e[(e.F6 = 117)] = 'F6'),
                            (e[(e.F7 = 118)] = 'F7'),
                            (e[(e.F8 = 119)] = 'F8'),
                            (e[(e.F9 = 120)] = 'F9'),
                            (e[(e.F10 = 121)] = 'F10'),
                            (e[(e.F11 = 122)] = 'F11'),
                            (e[(e.F12 = 123)] = 'F12'),
                            (e[(e.SELECT = 93)] = 'SELECT'),
                            (e[(e.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                            (e[(e.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                            (e[(e.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                            (e[(e.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                            (e[(e.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                            (e[(e.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                            (e[(e.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                            (e[(e.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                            (e[(e.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                            (e[(e.NUMPAD_9 = 105)] = 'NUMPAD_9'),
                            (e[(e.NUM_DECIMAL = 110)] = 'NUM_DECIMAL'),
                            (e[(e.STAR = 106)] = 'STAR'),
                            (e[(e.NUM_SLASH = 111)] = 'NUM_SLASH'),
                            (e[(e.FORWARD_SLASH = 191)] = 'FORWARD_SLASH'),
                            (e[(e.COMMA = 188)] = 'COMMA'),
                            (e[(e.DASH = 189)] = 'DASH'),
                            (e[(e.PERIOD = 190)] = 'PERIOD');
                    })(n || (n = {})),
                    (function (e) {
                        (e.ALT = 'Alt'),
                            (e.ALT_GRAPH = 'AltGraph'),
                            (e.CAPS_LOCK = 'CapsLock'),
                            (e.CONTROL = 'Control'),
                            (e.FN = 'Fn'),
                            (e.FN_LOCK = 'FnLock'),
                            (e.META = 'Meta'),
                            (e.NUM_LOCK = 'NumLock'),
                            (e.SCROLL_LOCK = 'ScrollLock'),
                            (e.SHIFT = 'Shift'),
                            (e.SYMBOL = 'Symbol'),
                            (e.SYMBOL_LOCK = 'SymbolLock');
                    })(a || (a = {}));
            },
            9480: (e, t, r) => {
                function n(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, r, n) => t(null == e ? void 0 : e.value, r, n));
                }
                r.d(t, { UI: () => n });
            },
            7727: (e, t, r) => {
                function n(e) {
                    engine.call('PlaySound', e);
                }
                r.d(t, { G: () => n });
            },
            1358: (e, t, r) => {
                r.d(t, { Z: () => i });
                var n = r(3138);
                class a {
                    constructor() {
                        (this._callbacks = void 0),
                            (this._updateHandler = void 0),
                            (this._views = void 0),
                            (this.clearViewCallbacks = (e) => {
                                this._views[e] &&
                                    (this._views[e].forEach((e) => {
                                        delete this._callbacks[e];
                                    }),
                                    delete this._views[e]);
                            }),
                            (this._callbacks = {}),
                            (this._views = {}),
                            (this._updateHandler = void 0);
                    }
                    static get instance() {
                        return window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, r = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = n.O.view.addModelObserver(e, r, a);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  r > 0 && (this._views[r] ? this._views[r].push(i) : (this._views[r] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
                        );
                    }
                    removeCallback(e, t = 0) {
                        let r = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((r = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            r || console.error("Can't remove callback by id:", e),
                            r
                        );
                    }
                    _emmitDataChanged(e, t, r) {
                        r.forEach((r) => {
                            const n = this._callbacks[r];
                            void 0 !== n && n(e, t);
                        });
                    }
                }
                a.__instance = void 0;
                const i = a;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4179);
                class ViewModel {
                    constructor(path, watchingFields = []) {
                        (this.dataTracker = void 0),
                            (this.modelPath = void 0),
                            (this.callbacks = void 0),
                            (this.data = void 0),
                            (this._notifyObservers = () => {
                                (this.data = eval(this.modelPath)),
                                    this.callbacks.forEach((e) => {
                                        e(this.data);
                                    });
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                this._addCallback(path),
                                    watchingFields.forEach((e) => {
                                        this._addCallback(path + '.' + e);
                                    }),
                                    this._notifyObservers();
                            });
                    }
                    subscribe(e) {
                        this.callbacks.add(e), null !== this.data && void 0 !== this.data && e(this.data);
                    }
                    unsubscribe(e) {
                        this.callbacks.delete(e);
                    }
                    destroy() {
                        this.dataTracker.clear(), this.callbacks.clear();
                    }
                    _addCallback(e) {
                        this.dataTracker.addCallback(e, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            4179: (e, t, r) => {
                r.d(t, { B3: () => u, Z5: () => s, B0: () => l, ry: () => p });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: r }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    r();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const r = e,
                            n = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== r || t !== n)),
                            this.removeMouseListener();
                    }
                    addMouseListener() {
                        this._listenMouse ||
                            (document.addEventListener('mousedown', this.onMouseDown), (this._listenMouse = !0));
                    }
                    removeMouseListener() {
                        this._listenMouse &&
                            0 === this.entries.length &&
                            (document.removeEventListener('mousedown', this.onMouseDown), (this._listenMouse = !1));
                    }
                }
                n.__instance = void 0;
                const a = n;
                var i = r(1358);
                const s = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, r) => userLocale.getTimeFormat(e, t, void 0 === r || r),
                        getTimeString: (e, t, r) => userLocale.getTimeString(e, t, void 0 === r || r),
                    };
                let l;
                var c;
                ((c = l || (l = {}))[(c.UNDEFINED = 0)] = 'UNDEFINED'),
                    (c[(c.TOOLTIP = 1)] = 'TOOLTIP'),
                    (c[(c.POP_OVER = 2)] = 'POP_OVER'),
                    (c[(c.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (c[(c.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (c[(c.MOVE = 16)] = 'MOVE'),
                    (c[(c.CLOSE = 32)] = 'CLOSE'),
                    (c[(c.MINIMIZE = 64)] = 'MINIMIZE');
                const u = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var g = r(5521),
                    h = r(3138);
                const E = ['args'];
                function w(e, t, r, n, a, i, s) {
                    try {
                        var o = e[i](s),
                            l = o.value;
                    } catch (e) {
                        return void r(e);
                    }
                    o.done ? t(l) : Promise.resolve(l).then(n, a);
                }
                const v = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    p = (function () {
                        var e,
                            t =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var t = this,
                                        r = arguments;
                                    return new Promise(function (n, a) {
                                        var i = e.apply(t, r);
                                        function s(e) {
                                            w(i, n, a, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            w(i, n, a, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    b = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                    return a;
                                })(t, E);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, i, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, t]) => {
                                                  const r = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          r.number = t;
                                                          break;
                                                      case 'boolean':
                                                          r.bool = t;
                                                          break;
                                                      default:
                                                          r.string = t.toString();
                                                  }
                                                  return r;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: r, type: e });
                        var n;
                    },
                    f = () => b(l.CLOSE),
                    S = (e, t) => {
                        e.keyCode === g.n.ESCAPE && t();
                    };
                var T = r(7572);
                const P = a.instance,
                    O = {
                        DataTracker: i.Z,
                        ViewModel: T.Z,
                        ViewEventType: l,
                        NumberFormatType: u,
                        RealFormatType: d,
                        TimeFormatType: _,
                        DateFormatType: m,
                        makeGlobalBoundingBox: v,
                        sendMoveEvent: (e) => b(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => b(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, r = 0) => {
                            b(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: r, args: t });
                        },
                        sendShowPopOverEvent: (e, t, r, n, a = R.invalid('resId'), i) => {
                            const s = h.O.view.getViewGlobalPosition(),
                                o = r.getBoundingClientRect(),
                                c = o.x,
                                u = o.y,
                                d = o.width,
                                _ = o.height,
                                m = {
                                    x: h.O.view.pxToRem(c) + s.x,
                                    y: h.O.view.pxToRem(u) + s.y,
                                    width: h.O.view.pxToRem(d),
                                    height: h.O.view.pxToRem(_),
                                };
                            b(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: v(m),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => S(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            S(e, f);
                        },
                        handleViewEvent: b,
                        onBindingsReady: p,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
                        dumpViewModel: function e(t) {
                            const r = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const a = Object.prototype.toString.call(t[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[n];
                                        r[n] = [];
                                        for (let t = 0; t < a.length; t++) r[n].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (r[n] = e(t[n]))
                                            : (r[n] = t[n]);
                                }
                            return r;
                        },
                        ClickOutsideManager: P,
                        SystemLocale: s,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = O;
            },
            3458: (e, t, r) => {
                let n;
                r.d(t, { Z0: () => a, in: () => n, sx: () => i }),
                    (function (e) {
                        (e[(e.NonSet = 0)] = 'NonSet'),
                            (e[(e.Debug = 10)] = 'Debug'),
                            (e[(e.Info = 20)] = 'Info'),
                            (e[(e.Warning = 30)] = 'Warning');
                    })(n || (n = {}));
                const a = 'tooltip_watched',
                    i = 2;
                let s;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown');
                })(s || (s = {}));
            },
            5983: (e, t, r) => {
                r.d(t, { D9: () => n, RM: () => a, ob: () => i });
                const n = 'epic_battle';
                let a, i, s;
                !(function (e) {
                    (e.HangarView = 'hangar'),
                        (e.SetupView = 'setup_view'),
                        (e.ProgressView = 'progress_view'),
                        (e.RewardsView = 'rewards_view'),
                        (e.RewardsSelectionView = 'rewards_selection_view'),
                        (e.SkillsView = 'skills_view'),
                        (e.AwardsView = 'awards_view'),
                        (e.ContainerView = 'container_view');
                })(a || (a = {})),
                    (function (e) {
                        (e.AbilitiesCheckboxTooltip = 'abilities_checkbox_tooltip'),
                            (e.EpicWidgetTooltip = 'epic_widget_tooltip'),
                            (e.BannerPerformance = 'banner_performance_tooltip'),
                            (e.SkillPointsTooltip = 'skill_points_tooltip'),
                            (e.AbilityLevelsTooltip = 'ability_levels_tooltip'),
                            (e.SkillOrderTooltip = 'skill_order_tooltip'),
                            (e.SkillLevelTab = 'skill_level_tab'),
                            (e.RewardsButton = 'rewards_button'),
                            (e.RewardsButtonTooltip = 'rewards_button_tooltip'),
                            (e.RewardTooltip = 'reward_tooltip'),
                            (e.AwardsOkButton = 'awards_ok'),
                            (e.AwardsView = 'awards_view'),
                            (e.RewardsSelectionView = 'rewards_selection_view');
                    })(i || (i = {})),
                    (function (e) {
                        (e.Click = 'click'), (e.Close = 'close');
                    })(s || (s = {}));
            },
            405: (e, t, r) => {
                r.d(t, { Y: () => o });
                var n = r(6179),
                    a = r(3458),
                    i = r(5983),
                    s = r(1943);
                const o = (e, t, r, o) => {
                    const l = (0, s.k2)(i.D9),
                        c = l[0],
                        u = l[1];
                    return [
                        (0, n.useCallback)(() => c(a.Z0), [c]),
                        (0, n.useCallback)(
                            () => u({ action: a.Z0, timeLimit: a.sx, item: e, parentScreen: t, itemState: r, info: o }),
                            [u, e, t, r, o],
                        ),
                    ];
                };
            },
            1943: (e, t, r) => {
                r.d(t, { k2: () => o });
                var n = r(6179),
                    a = r(3458);
                const i = () => Date.now(),
                    s = (e, t) => {
                        const r = ((e, t) => {
                                const r = (0, n.useCallback)(
                                    (r, n = a.in.Info, i) => {
                                        i || (i = {}),
                                            Object.keys(i).length >= 200 ||
                                                window.uiLoggerModel.log({
                                                    feature: e,
                                                    group: t,
                                                    action: r,
                                                    logLevel: n,
                                                    params: JSON.stringify(i),
                                                });
                                    },
                                    [e, t],
                                );
                                return (e, t, n) => r(e, t, n);
                            })(e, t),
                            s = (0, n.useRef)(new Map()),
                            o = (0, n.useRef)(new Map()),
                            l = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = s.current.get(e);
                                    (void 0 !== t && t > 0) || s.current.set(e, i());
                                },
                                [s],
                            ),
                            c = (0, n.useCallback)(() => {
                                s.current.clear(), o.current.clear();
                            }, [s, o]),
                            u = (0, n.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== s.current.get(e) &&
                                        void 0 === o.current.get(e) &&
                                        o.current.set(e, i());
                                },
                                [s, o],
                            ),
                            d = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = s.current.get(e);
                                    if (void 0 === t) return;
                                    const r = o.current.get(e);
                                    if (void 0 === r) return;
                                    o.current.delete(e);
                                    const n = i() - r;
                                    s.current.set(e, t + n);
                                },
                                [s, o],
                            ),
                            _ = (0, n.useCallback)(
                                (e, t = 0, n, a) => {
                                    const l = s.current.get(e);
                                    if (void 0 === l) return;
                                    void 0 !== o.current.get(e) && d(e), s.current.delete(e);
                                    const c = (i() - l) / 1e3;
                                    c <= t ||
                                        ((a = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(a, c)),
                                        r(e, n, a));
                                },
                                [s, o, r, d],
                            );
                        return [(e) => l(e), (e, t, r, n) => _(e, t, r, n), () => c(), (e) => u(e), (e) => d(e)];
                    },
                    o = (e) => {
                        const t = s(e, 'metrics'),
                            r = t[0],
                            a = t[1],
                            i = t[2],
                            o = t[3],
                            l = t[4],
                            c = (0, n.useCallback)(
                                (e) => {
                                    const t = e.action,
                                        r = e.timeLimit,
                                        n = e.logLevel;
                                    a(
                                        t,
                                        r,
                                        n,
                                        (({ partnerID: e, item: t, parentScreen: r, itemState: n, info: a }) => ({
                                            item: t,
                                            partnerID: e || null,
                                            parent_screen: r || null,
                                            item_state: n || null,
                                            additional_info: a || null,
                                        }))(e),
                                    );
                                },
                                [a],
                            );
                        return [(e) => r(e), (e) => c(e), () => i(), (e) => o(e), (e) => l(e)];
                    };
            },
            5660: (e, t, r) => {
                var n = r(6179),
                    a = r.n(n),
                    i = r(5983),
                    s = r(6483),
                    o = r.n(s),
                    l = r(4090),
                    c = r(2056),
                    u = r(7727);
                const d = {
                    base: 'FlatButton_base_36',
                    base__small: 'FlatButton_base__small_ec',
                    base__big: 'FlatButton_base__big_69',
                    base__disabled: 'FlatButton_base__disabled_1e',
                    base__hover: 'FlatButton_base__hover_41',
                    base__click: 'FlatButton_base__click_ab',
                    base__highlight: 'FlatButton_base__highlight_0b',
                    base__yellow: 'FlatButton_base__yellow_3a',
                    highlight: 'FlatButton_highlight_b0',
                    glowInner: 'FlatButton_glowInner_cb',
                    rotating: 'FlatButton_rotating_25',
                    glowInner__duplicate: 'FlatButton_glowInner__duplicate_f7',
                    glow: 'FlatButton_glow_12',
                    content: 'FlatButton_content_3f',
                    icon: 'FlatButton_icon_24',
                    label: 'FlatButton_label_a4',
                    count: 'FlatButton_count_17',
                    counter: 'FlatButton_counter_c3',
                    glowBorder: 'FlatButton_glowBorder_3e',
                    glowBorder__hover: 'FlatButton_glowBorder__hover_a7',
                    tokensCount: 'FlatButton_tokensCount_72',
                    disabledBackground: 'FlatButton_disabledBackground_f9',
                };
                let _;
                !(function (e) {
                    (e.Small = 'small'), (e.Big = 'big');
                })(_ || (_ = {}));
                const m = ({
                    label: e,
                    takeCount: t,
                    icon: r,
                    width: i,
                    height: s,
                    isDisabled: _,
                    isHighlighted: m,
                    isYellow: g,
                    size: h,
                    onClick: E,
                    onMouseUp: w,
                    onMouseEnter: v,
                    onMouseLeave: p,
                    onMouseDown: b,
                    children: f,
                    soundHover: S,
                    soundClick: T,
                    counter: P,
                    tokensCount: O = 0,
                }) => {
                    const k = (0, n.useState)(!1),
                        y = k[0],
                        x = k[1],
                        M = (0, n.useState)(!1),
                        L = M[0],
                        N = M[1],
                        C = (e, t) => {
                            e && t && e(t);
                        },
                        D = o()(
                            d.base,
                            h && d[`base__${h}`],
                            g && d.base__yellow,
                            _ && d.base__disabled,
                            y && !_ && d.base__hover,
                            L && d.base__click,
                            m && !_ && d.base__highlight,
                        ),
                        I = o()(d.glowBorder, d.glowBorder__hover),
                        A = o()(d.glowInner, d.glowInner__duplicate),
                        B = (0, n.useMemo)(() => {
                            const e = {};
                            return i && (e.width = `${i}rem`), s && (e.height = `${s}rem`), e;
                        }, [s, i]),
                        U = (0, n.useMemo)(() => ({ backgroundImage: `url(${r})` }), [r]);
                    return a().createElement(
                        'div',
                        {
                            className: D,
                            style: B,
                            onMouseEnter:
                                ((F = v),
                                (e) => {
                                    _ || (C(F, e), x(!0), (0, u.G)(S));
                                }),
                            onMouseLeave: ((e) => (t) => {
                                _ || (C(e, t), x(!1), N(!1));
                            })(p),
                            onMouseDown: ((e) => (t) => {
                                _ || (C(e, t), 0 === t.button && N(!0));
                            })(b),
                            onMouseUp: ((e) => (t) => {
                                _ || (C(e, t), 0 === t.button && N(!1));
                            })(w),
                            onClick: ((e) => (t) => {
                                _ || ((0, u.G)(T), C(e, t));
                            })(E),
                        },
                        m &&
                            !_ &&
                            a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(
                                    'div',
                                    { className: d.glow },
                                    a().createElement('div', { className: d.glowInner }),
                                    a().createElement('div', { className: A }),
                                ),
                                a().createElement('div', { className: d.highlight }),
                                a().createElement('div', { className: d.glowBorder }),
                                a().createElement('div', { className: I }),
                            ),
                        a().createElement(
                            'div',
                            { className: d.content },
                            _ && a().createElement('div', { className: d.disabledBackground }),
                            f ||
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    r
                                        ? a().createElement('div', { className: d.icon, style: U })
                                        : a().createElement('div', { className: d.count }, t),
                                    a().createElement('div', { className: d.label }, e),
                                ),
                            Boolean(P) &&
                                !_ &&
                                a().createElement(
                                    'div',
                                    { className: d.counter },
                                    a().createElement(l.A, { value: P }),
                                ),
                            O > 0 &&
                                a().createElement(
                                    c.u,
                                    {
                                        contentId:
                                            R.views.lobby.battle_pass.tooltips.BattlePassCoinTooltipView('resId'),
                                    },
                                    a().createElement('div', { className: d.tokensCount }, O),
                                ),
                        ),
                    );
                    var F;
                };
                m.defaultProps = {
                    isDisabled: !1,
                    isHighlighted: !1,
                    counter: !1,
                    soundHover: 'highlight',
                    soundClick: 'play',
                };
                var g = r(3403),
                    h = r(8154),
                    E = r(3854);
                const w = (0, r(3215).q)()(
                        ({ observableModel: e }) => ({ root: e.object(), rewards: e.array('rewards') }),
                        ({ externalModel: e }) => ({ claimRewards: e.createCallbackNoArgs('onClaimRewards') }),
                    ),
                    v = (w[0], w[1]);
                var p = r(9480),
                    b = r(2862),
                    f = r(5415),
                    S = r(1558);
                let T;
                !(function (e) {
                    (e.Static = 'static'), (e.Claimable = 'claimable');
                })(T || (T = {}));
                var P = r(5989);
                const O = (0, n.memo)(
                        ({
                            claimState: e,
                            name: t,
                            icon: r,
                            rewardSize: n,
                            value: s,
                            tooltipId: l,
                            tooltipContentId: c,
                            isDisable: u,
                            isBattlePassRewardDisable: d,
                            classMix: _,
                        }) => {
                            const m = e === T.Claimable;
                            return a().createElement(
                                'div',
                                {
                                    className: o()(
                                        'FrontlineReward_base_e2',
                                        u && 'FrontlineReward_base__disable_dc',
                                        !u && d && 'FrontlineReward_base__disableBattlePassReward_5a',
                                        _,
                                    ),
                                },
                                m &&
                                    a().createElement(
                                        'div',
                                        { className: 'FrontlineReward_animWrapper_23' },
                                        a().createElement('div', { className: 'FrontlineReward_glow_0d' }),
                                        a().createElement('div', { className: 'FrontlineReward_glowReverse_42' }),
                                    ),
                                a().createElement(P.I, {
                                    item: i.ob.RewardTooltip,
                                    info: t,
                                    parentScreen: i.RM.RewardsView,
                                    name: t,
                                    image: (0, S.ry)({ name: t, icon: r }, b.h2.Big),
                                    size: n,
                                    value: s.toString(),
                                    valueType: (0, S.p3)(t),
                                    tooltipArgs: (0, S.pI)({ tooltipId: l }, Number(c), {
                                        ignoreShowDelay: !0,
                                        targetId: R.views.frontline.lobby.RewardsView('resId'),
                                    }),
                                }),
                            );
                        },
                    ),
                    k = {
                        base: 'RewardsCol_base_74',
                        bg: 'RewardsCol_bg_12',
                        highlight: 'RewardsCol_highlight_2b',
                        highlight__white: 'RewardsCol_highlight__white_a8',
                        highlight__gold: 'RewardsCol_highlight__gold_c5',
                        levels: 'RewardsCol_levels_7a',
                        levels__disable: 'RewardsCol_levels__disable_d4',
                        reward: 'RewardsCol_reward_40',
                    };
                function y() {
                    return (
                        (y =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        y.apply(this, arguments)
                    );
                }
                var x;
                !(function (e) {
                    (e.None = 'none'), (e.White = 'white'), (e.Gold = 'gold');
                })(x || (x = {}));
                const M = ({ levelsRange: e, frontlineLevel: t, isBattlePassComplete: r, isLastCol: n }) => {
                        const i = (0, f.GS)(),
                            s = i.mediaSize,
                            l = i.remScreenHeight,
                            c = s === f.cJ.ExtraSmall || l < 844 ? b.h2.Small : b.h2.Big,
                            u = e.lvlStart,
                            d = e.lvlEnd,
                            _ = e.rewards,
                            m = ((e, t, r, n) => {
                                switch (!0) {
                                    case e <= r && r <= t:
                                        return x.Gold;
                                    case n:
                                        return x.White;
                                    default:
                                        return x.None;
                                }
                            })(u, d, t, n),
                            g = t < u;
                        return a().createElement(
                            'div',
                            { className: k.base },
                            a().createElement('div', { className: k.bg }),
                            m && a().createElement('div', { className: o()(k.highlight, k[`highlight__${m}`]) }),
                            a().createElement(
                                'span',
                                { className: o()(k.levels, g && k.levels__disable) },
                                u !== d ? `${u}-${d}` : u,
                            ),
                            _.map(({ value: e, id: t }) =>
                                a().createElement(
                                    a().Fragment,
                                    { key: t },
                                    a().createElement(
                                        O,
                                        y({}, e, {
                                            rewardSize: c,
                                            classMix: k.reward,
                                            isDisable: g,
                                            isBattlePassRewardDisable: r && e.name === b.E4.BattlePassPoints,
                                        }),
                                    ),
                                ),
                            ),
                        );
                    },
                    L = (0, g.Pi)(() => {
                        const e = v().model,
                            t = e.root.get(),
                            r = t.frontlineLevel,
                            n = t.isBattlePassComplete,
                            i = e.rewards.get();
                        return a().createElement(
                            'div',
                            { className: 'RewardTable_base_cf' },
                            p.UI(i, (e, t) =>
                                a().createElement(
                                    a().Fragment,
                                    { key: `${e.lvlStart}-${e.lvlEnd}` },
                                    a().createElement(M, {
                                        levelsRange: e,
                                        frontlineLevel: r,
                                        isBattlePassComplete: n,
                                        isLastCol: t === i.length - 1,
                                    }),
                                ),
                            ),
                        );
                    });
                var N = r(4959);
                const C = 'SubTitle_base_8d',
                    D = R.strings.fl_rewards.subtitle,
                    I = (0, n.memo)(({ level: e, rewardsCount: t, frontlineState: r }) =>
                        r !== N.c.Finished
                            ? a().createElement('div', { className: C }, D.active())
                            : a().createElement(
                                  'div',
                                  { className: C },
                                  D.finished.title(),
                                  e > 1 &&
                                      (t > 0
                                          ? D.finished.rewards()
                                          : a().createElement(
                                                'div',
                                                { className: 'SubTitle_noRewards_f1' },
                                                a().createElement('div', { className: 'SubTitle_icon_0f' }),
                                                ' ',
                                                D.finished.noRewards(),
                                            )),
                              ),
                    );
                (0, g.Pi)(() => {
                    const e = v(),
                        t = e.model,
                        r = e.controls,
                        s = t.root.get(),
                        o = s.selectableRewardsCount,
                        l = s.frontlineLevel,
                        c = s.frontlineState,
                        u = (0, n.useCallback)(() => {
                            r.claimRewards();
                        }, [r]);
                    return a().createElement(
                        'div',
                        { className: 'RewardsViewApp_base_1c' },
                        a().createElement(
                            E.V,
                            { text: R.strings.fl_rewards.title(), classMix: 'RewardsViewApp_pageTitle_61' },
                            a().createElement(I, { level: l, rewardsCount: o, frontlineState: c }),
                        ),
                        a().createElement('div', { className: 'RewardsViewApp_table_32' }, a().createElement(L, null)),
                        a().createElement(
                            'div',
                            { className: 'RewardsViewApp_claimButton_3d' },
                            o > 0 &&
                                a().createElement(
                                    h.l,
                                    {
                                        targetId: R.views.frontline.lobby.RewardsView('resId'),
                                        item: i.ob.RewardsButtonTooltip,
                                        parentScreen: i.RM.RewardsView,
                                        body: R.strings.fl_rewards.chooseRewards.tooltip(),
                                    },
                                    a().createElement(m, {
                                        label: R.strings.fl_rewards.chooseRewards.label(),
                                        counter: o,
                                        icon: R.images.frontline.gui.maps.icons.rewards.claim_all(),
                                        isHighlighted: !0,
                                        size: _.Big,
                                        onClick: u,
                                    }),
                                ),
                        ),
                    );
                }),
                    R.views.frontline.lobby.RewardsView('resId');
            },
            5989: (e, t, r) => {
                r.d(t, { I: () => h });
                var n = r(6483),
                    a = r.n(n),
                    i = r(6179),
                    s = r.n(i),
                    o = r(3415),
                    l = r(2862),
                    c = r(1558);
                const u = {
                        base: 'Reward_base_ea',
                        base__s48x48: 'Reward_base__s48x48_46',
                        base__small: 'Reward_base__small_c0',
                        base__s80x80: 'Reward_base__s80x80_ce',
                        base__big: 'Reward_base__big_e5',
                        base__s128x100: 'Reward_base__s128x100_c3',
                        base__s180x135: 'Reward_base__s180x135_7c',
                        base__s232x174: 'Reward_base__s232x174_67',
                        base__s296x222: 'Reward_base__s296x222_78',
                        base__s400x300: 'Reward_base__s400x300_07',
                        base__s600x450: 'Reward_base__s600x450_f8',
                        tooltipWrapper: 'Reward_tooltipWrapper_b5',
                        icon: 'Reward_icon_df',
                        overlay: 'Reward_overlay_68',
                        highlight: 'Reward_highlight_36',
                        image: 'Reward_image_89',
                        info: 'Reward_info_72',
                        info__multi: 'Reward_info__multi_63',
                        info__credits: 'Reward_info__credits_ef',
                        info__gold: 'Reward_info__gold_36',
                        info__crystal: 'Reward_info__crystal_36',
                        info__premiumTank: 'Reward_info__premiumTank_d3',
                        timer: 'Reward_timer_d3',
                    },
                    d = ({
                        name: e,
                        image: t,
                        isPeriodic: r = !1,
                        size: n = l.h2.Big,
                        special: i,
                        value: d,
                        valueType: _,
                        style: m,
                        className: g,
                        classNames: h,
                        tooltipArgs: E,
                        periodicIconTooltipArgs: w,
                    }) => {
                        const v = (0, c.L_)(i),
                            p = (0, c.i2)(i),
                            b = (0, c.m9)(d, _);
                        return s().createElement(
                            'div',
                            { className: a()(u.base, u[`base__${n}`], g), style: m },
                            s().createElement(
                                o.l,
                                { tooltipArgs: E, className: u.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: a()(u.image, null == h ? void 0 : h.image) },
                                        v &&
                                            s().createElement('div', {
                                                className: a()(u.highlight, null == h ? void 0 : h.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${v}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            s().createElement('div', {
                                                className: a()(u.icon, null == h ? void 0 : h.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        p &&
                                            s().createElement('div', {
                                                className: a()(u.overlay, null == h ? void 0 : h.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${p}_overlay)`,
                                                },
                                            }),
                                    ),
                                    b &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: a()(
                                                    u.info,
                                                    u[`info__${e}`],
                                                    _ === l.$h.MULTI && u.info__multi,
                                                    null == h ? void 0 : h.info,
                                                ),
                                            },
                                            b,
                                        ),
                                ),
                            ),
                            r &&
                                s().createElement(
                                    o.l,
                                    { tooltipArgs: w },
                                    s().createElement('div', {
                                        className: a()(u.timer, null == h ? void 0 : h.periodicIcon),
                                    }),
                                ),
                        );
                    };
                var _ = r(405);
                const m = ['item', 'parentScreen', 'itemState', 'info', 'tooltipArgs'];
                function g() {
                    return (
                        (g =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        g.apply(this, arguments)
                    );
                }
                const h = (0, i.memo)((e) => {
                    let t = e.item,
                        r = e.parentScreen,
                        n = e.itemState,
                        a = e.info,
                        o = e.tooltipArgs,
                        l = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                            return a;
                        })(e, m);
                    const c = (0, _.Y)(t, r, n, a),
                        u = c[0],
                        h = c[1],
                        E = (0, i.useMemo)(() => Object.assign({}, o, { onMouseEnter: u, onMouseLeave: h }), [o, u, h]);
                    return s().createElement(d, g({}, l, { tooltipArgs: E }));
                });
            },
            8154: (e, t, r) => {
                r.d(t, { l: () => c });
                var n = r(6373),
                    a = r(6179),
                    i = r.n(a),
                    s = r(405);
                const o = ['children', 'item', 'parentScreen', 'itemState', 'info'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const c = (0, a.memo)((e) => {
                    let t = e.children,
                        r = e.item,
                        a = e.parentScreen,
                        c = e.itemState,
                        u = e.info,
                        d = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                            return a;
                        })(e, o);
                    const _ = (0, s.Y)(r, a, c, u),
                        m = _[0],
                        g = _[1];
                    return i().createElement(n.i, l({}, d, { onMouseEnter: m, onMouseLeave: g }), t);
                });
            },
            3854: (e, t, r) => {
                r.d(t, { V: () => l });
                var n = r(6483),
                    a = r.n(n),
                    i = r(6179),
                    s = r.n(i),
                    o = r(5577);
                const l = (0, i.memo)(({ text: e, children: t, classMix: r }) =>
                    s().createElement(
                        'div',
                        { className: a()(o.Z.base, r) },
                        s().createElement('span', { className: o.Z.title }, e),
                        t,
                    ),
                );
            },
            4959: (e, t, r) => {
                let n;
                r.d(t, { c: () => n }),
                    (function (e) {
                        (e.Announce = 'announce'),
                            (e.Active = 'active'),
                            (e.Finished = 'finished'),
                            (e.Frozen = 'frozen');
                    })(n || (n = {}));
            },
            5577: (e, t, r) => {
                r.d(t, { Z: () => n });
                const n = { base: 'PageTitle_base_ef', title: 'PageTitle_title_33' };
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var r = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](r, r.exports, __webpack_require__), r.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, r, n) => {
            if (!t) {
                var a = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, r, n] = deferred[l], i = !0, s = 0; s < t.length; s++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((i = !1), n < a && (a = n));
                    if (i) {
                        deferred.splice(l--, 1);
                        var o = r();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > n; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, r, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var r in t)
                __webpack_require__.o(t, r) &&
                    !__webpack_require__.o(e, r) &&
                    Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (__webpack_require__.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 919),
        (() => {
            var e = { 919: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var n,
                        a,
                        [i, s, o] = r,
                        l = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (o) var c = o(__webpack_require__);
                    }
                    for (t && t(r); l < i.length; l++)
                        (a = i[l]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(c);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(5660));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
