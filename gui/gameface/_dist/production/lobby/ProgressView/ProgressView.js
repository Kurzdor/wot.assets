(() => {
    'use strict';
    var __webpack_modules__ = {
            3457: (e, u, t) => {
                t.d(u, { L$: () => l.L, u5: () => d });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7727),
                    i = t(6179),
                    o = t.n(i),
                    s = t(6880),
                    l = t(2106);
                const c = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: c,
                    mixClass: d,
                    soundHover: E,
                    soundClick: m,
                    onMouseEnter: _,
                    onMouseMove: A,
                    onMouseDown: g,
                    onMouseUp: F,
                    onMouseLeave: B,
                    onClick: D,
                }) => {
                    const h = (0, i.useRef)(null),
                        p = (0, i.useState)(t),
                        C = p[0],
                        b = p[1],
                        f = (0, i.useState)(!1),
                        v = f[0],
                        w = f[1];
                    return (
                        (0, i.useEffect)(() => {
                            function e(e) {
                                C && null !== h.current && !h.current.contains(e.target) && b(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [C]),
                        (0, i.useEffect)(() => {
                            b(t);
                        }, [t]),
                        o().createElement(
                            'div',
                            {
                                ref: h,
                                className: r()(
                                    s.Z.base,
                                    s.Z[`base__${n}`],
                                    c && s.Z.base__disabled,
                                    u && s.Z[`base__${u}`],
                                    C && s.Z.base__focus,
                                    v && s.Z.base__highlightActive,
                                    d,
                                ),
                                onMouseEnter: function (e) {
                                    c || (null !== E && (0, a.G)(E), _ && _(e));
                                },
                                onMouseMove: function (e) {
                                    A && A(e);
                                },
                                onMouseUp: function (e) {
                                    c || (F && F(e), w(!1));
                                },
                                onMouseDown: function (e) {
                                    c ||
                                        (null !== m && (0, a.G)(m),
                                        g && g(e),
                                        t && (c || (h.current && (h.current.focus(), b(!0)))),
                                        w(!0));
                                },
                                onMouseLeave: function (e) {
                                    c || (B && B(e), w(!1));
                                },
                                onClick: function (e) {
                                    c || (D && D(e));
                                },
                            },
                            n !== l.L.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: s.Z.back }),
                                    o().createElement('span', { className: s.Z.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: r()(s.Z.state, s.Z.state__default) },
                                o().createElement('span', { className: s.Z.stateDisabled }),
                                o().createElement('span', { className: s.Z.stateHighlightHover }),
                                o().createElement('span', { className: s.Z.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: s.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const d = c;
            },
            2106: (e, u, t) => {
                let n, r;
                t.d(u, { L: () => n }),
                    (function (e) {
                        (e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost');
                    })(n || (n = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(r || (r = {}));
            },
            4090: (e, u, t) => {
                t(6483), t(6179);
            },
            280: (e, u, t) => {
                t(6483), t(3649), t(6179), t(5287);
            },
            3495: (e, u, t) => {
                t.d(u, { Y: () => d });
                var n = t(9768),
                    r = t(6179),
                    a = t(1043),
                    i = t(5262);
                const o = n.O.client.getSize('rem'),
                    s = o.width,
                    l = o.height,
                    c = Object.assign({ width: s, height: l }, (0, i.T)(s, l, a.j)),
                    d = (0, r.createContext)(c);
            },
            1039: (e, u, t) => {
                t(9768), t(6536), t(6179), t(3495), t(1043), t(5262);
            },
            6010: (e, u, t) => {
                var n = t(6179),
                    r = t(7382),
                    a = t(3495);
                const i = ['children'],
                    o = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, i);
                        const o = (0, n.useContext)(a.Y),
                            s = o.extraLarge,
                            l = o.large,
                            c = o.medium,
                            d = o.small,
                            E = o.extraSmall,
                            m = o.extraLargeWidth,
                            _ = o.largeWidth,
                            A = o.mediumWidth,
                            g = o.smallWidth,
                            F = o.extraSmallWidth,
                            B = o.extraLargeHeight,
                            D = o.largeHeight,
                            h = o.mediumHeight,
                            p = o.smallHeight,
                            C = o.extraSmallHeight,
                            b = { extraLarge: B, large: D, medium: h, small: p, extraSmall: C };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && s) return u;
                            if (t.large && l) return u;
                            if (t.medium && c) return u;
                            if (t.small && d) return u;
                            if (t.extraSmall && E) return u;
                        } else {
                            if (t.extraLargeWidth && m) return (0, r.H)(u, t, b);
                            if (t.largeWidth && _) return (0, r.H)(u, t, b);
                            if (t.mediumWidth && A) return (0, r.H)(u, t, b);
                            if (t.smallWidth && g) return (0, r.H)(u, t, b);
                            if (t.extraSmallWidth && F) return (0, r.H)(u, t, b);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && B) return u;
                                if (t.largeHeight && D) return u;
                                if (t.mediumHeight && h) return u;
                                if (t.smallHeight && p) return u;
                                if (t.extraSmallHeight && C) return u;
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
            7382: (e, u, t) => {
                t.d(u, { H: () => n });
                const n = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, u, t) => {
                t.d(u, { YN: () => n.Y }), t(6010), t(1039);
                var n = t(3495);
            },
            1043: (e, u, t) => {
                t.d(u, { j: () => n });
                const n = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, u, t) => {
                var n;
                function r(e, u, t) {
                    const n = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.width:
                                    return u.extraLarge.weight;
                                case e >= u.large.width && e < u.extraLarge.width:
                                    return u.large.weight;
                                case e >= u.medium.width && e < u.large.width:
                                    return u.medium.weight;
                                case e >= u.small.width && e < u.medium.width:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(e, t),
                        r = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.height:
                                    return u.extraLarge.weight;
                                case e >= u.large.height && e < u.extraLarge.height:
                                    return u.large.weight;
                                case e >= u.medium.height && e < u.large.height:
                                    return u.medium.weight;
                                case e >= u.small.height && e < u.medium.height:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(u, t),
                        a = Math.min(n, r);
                    return {
                        extraLarge: a === t.extraLarge.weight,
                        large: a === t.large.weight,
                        medium: a === t.medium.weight,
                        small: a === t.small.weight,
                        extraSmall: a === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
                        extraLargeHeight: r === t.extraLarge.weight,
                        largeHeight: r === t.large.weight,
                        mediumHeight: r === t.medium.weight,
                        smallHeight: r === t.small.weight,
                        extraSmallHeight: r === t.extraSmall.weight,
                    };
                }
                t.d(u, { T: () => r }),
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
            2862: (e, u, t) => {
                let n, r, a, i, o, s, l, c;
                t.d(u, { $h: () => i, A2: () => s, E4: () => n, h2: () => a, kK: () => o, sh: () => l }),
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
                            (e.BattleAchievement = 'dossier_achievement'),
                            (e.EquipCoin = 'equipCoin');
                    })(r || (r = {})),
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
                    })(a || (a = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(i || (i = {})),
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
                    })(o || (o = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(l || (l = {})),
                    (function (e) {
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(c || (c = {}));
            },
            1558: (e, u, t) => {
                t.d(u, { c$: () => B, m9: () => h, i2: () => D, ry: () => A, pI: () => g, p3: () => E });
                var n = t(6179),
                    r = t.n(n),
                    a = t(9916);
                class i extends r().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? a.B3.GOLD : a.B3.INTEGRAL;
                        const u = a.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                i.defaultProps = { format: 'integral' };
                var o = t(2862);
                const s = [
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
                        o.E4.NewYearInvoice,
                        o.E4.EpicSelectToken,
                        o.E4.Comp7TokenWeeklyReward,
                        o.E4.DeluxeGift,
                        o.E4.BattleBoosterGift,
                        o.E4.OptionalDevice,
                    ],
                    l = [o.E4.Gold, o.E4.Credits, o.E4.Crystal, o.E4.FreeXp],
                    c = [o.E4.BattlePassPoints, o.E4.EquipCoin],
                    d = [o.E4.PremiumPlus, o.E4.Premium],
                    E = (e) =>
                        s.includes(e)
                            ? o.$h.MULTI
                            : l.includes(e)
                              ? o.$h.CURRENCY
                              : c.includes(e)
                                ? o.$h.NUMBER
                                : d.includes(e)
                                  ? o.$h.PREMIUM_PLUS
                                  : o.$h.STRING,
                    m = ['engravings', 'backgrounds'],
                    _ = ['engraving', 'background'],
                    A = (e, u = o.h2.Small) => {
                        const t = e.name,
                            n = e.type,
                            r = e.value,
                            a = e.icon,
                            i = e.item,
                            s = e.dogTagType,
                            l = ((e) => {
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
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}_${r}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${i}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${a}`;
                            case 'tokens':
                            case 'lootBox':
                            case 'battleToken':
                                return 'big' === u
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${a}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const n = m[e];
                                    if (n) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(n),
                                            a = r.$dyn(t);
                                        return a ? `${a}` : `${r.$dyn(_[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(s, u, a);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${a}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${l}.${a}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${l}.${a}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    g = (e, u, t) => {
                        const n = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            n,
                            t,
                        );
                    },
                    F = [o.h2.Small, o.h2.Big],
                    B = (e, u) => {
                        if (void 0 === u || !F.includes(e)) return null;
                        switch (u) {
                            case o.kK.BATTLE_BOOSTER:
                            case o.kK.BATTLE_BOOSTER_REPLACE:
                                return o.A2.BATTLE_BOOSTER;
                        }
                    },
                    D = (e) => {
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
                            case o.kK.PROGRESSION_STYLE_UPGRADED_5:
                                return o.sh.PROGRESSION_STYLE_UPGRADED_5;
                            case o.kK.PROGRESSION_STYLE_UPGRADED_6:
                                return o.sh.PROGRESSION_STYLE_UPGRADED_6;
                        }
                    },
                    h = (e, u) => {
                        if (void 0 === e) return null;
                        switch (u) {
                            case o.$h.MULTI: {
                                const u = Number(e);
                                return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                            }
                            case o.$h.CURRENCY:
                            case o.$h.NUMBER:
                                return r().createElement(i, { format: 'integral', value: Number(e) });
                            case o.$h.PREMIUM_PLUS: {
                                const u = Number(e);
                                return isNaN(u) ? e : null;
                            }
                            default:
                                return e;
                        }
                    };
            },
            7078: (e, u, t) => {
                t.d(u, { t: () => s });
                var n = t(6179),
                    r = t.n(n),
                    a = t(2056);
                const i = ['children'];
                function o() {
                    return (
                        (o = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        o.apply(null, arguments)
                    );
                }
                const s = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, i);
                    return r().createElement(
                        a.u,
                        o(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            t,
                        ),
                        u,
                    );
                };
            },
            3415: (e, u, t) => {
                t.d(u, { l: () => l });
                var n = t(6179),
                    r = t.n(n),
                    a = t(7078),
                    i = t(6373),
                    o = t(2056);
                function s() {
                    return (
                        (s = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        s.apply(null, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const n = r().createElement('div', { className: t }, e);
                    if (u.header || u.body) return r().createElement(i.i, u, n);
                    const l = u.contentId;
                    return l ? r().createElement(o.u, s({}, u, { contentId: l }), n) : r().createElement(a.t, u, n);
                };
            },
            6373: (e, u, t) => {
                t.d(u, { i: () => l });
                var n = t(2056),
                    r = t(6179),
                    a = t.n(r);
                const i = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function o() {
                    return (
                        (o = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        o.apply(null, arguments)
                    );
                }
                const s = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let u = e.children,
                            t = e.body,
                            l = e.header,
                            c = e.note,
                            d = e.alert,
                            E = e.args,
                            m = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, i);
                        const _ = (0, r.useMemo)(() => {
                            const e = Object.assign({}, E, { body: t, header: l, note: c, alert: d });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [d, t, l, c, E]);
                        return a().createElement(
                            n.u,
                            o(
                                {
                                    contentId:
                                        ((A = null == E ? void 0 : E.hasHtmlContent),
                                        A ? s.SimpleTooltipHtmlContent('resId') : s.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: _,
                                },
                                m,
                            ),
                            u,
                        );
                        var A;
                    };
            },
            2056: (e, u, t) => {
                t.d(u, { u: () => l });
                var n = t(7902),
                    r = t(9916),
                    a = t(6179);
                const i = [
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
                    return Object.entries(e || {}).map(([e, u]) => {
                        const t = { __Type: 'GFValueProxy', name: e };
                        switch (typeof u) {
                            case 'number':
                                t.number = u;
                                break;
                            case 'boolean':
                                t.bool = u;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = u.toString();
                        }
                        return t;
                    });
                }
                const s = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: r.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    l = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            E = e.onClick,
                            m = e.ignoreShowDelay,
                            _ = void 0 !== m && m,
                            A = e.ignoreMouseClick,
                            g = void 0 !== A && A,
                            F = e.decoratorId,
                            B = void 0 === F ? 0 : F,
                            D = e.isEnabled,
                            h = void 0 === D || D,
                            p = e.targetId,
                            C = void 0 === p ? 0 : p,
                            b = e.onShow,
                            f = e.onHide,
                            v = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, i);
                        const w = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, a.useMemo)(() => C || (0, n.F)().resId, [C]),
                            y = (0, a.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (s(t, B, { isMouseEvent: !0, on: !0, arguments: o(r) }, S),
                                    b && b(),
                                    (w.current.isVisible = !0));
                            }, [t, B, r, S, b]),
                            T = (0, a.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        s(t, B, { on: !1 }, S),
                                        w.current.isVisible && f && f(),
                                        (w.current.isVisible = !1);
                                }
                            }, [t, B, S, f]),
                            k = (0, a.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(w.current.prevTarget) && T();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = w.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', k, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', k, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === h && T();
                            }, [h, T]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', T),
                                    () => {
                                        window.removeEventListener('mouseleave', T), T();
                                    }
                                ),
                                [T],
                            ),
                            h
                                ? (0, a.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((x = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((w.current.timeoutId = window.setTimeout(y, _ ? 100 : 400)),
                                                          l && l(e),
                                                          x && x(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  T(), null == c || c(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === g && T(), null == E || E(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === g && T(), null == d || d(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          v,
                                      ),
                                  )
                                : u
                        );
                        var x;
                    };
            },
            7515: (e, u, t) => {
                t.d(u, { u: () => n });
                const n = (e, u, t) => (t < e ? e : t > u ? u : t);
            },
            8246: (e, u, t) => {
                t.d(u, { U: () => i });
                var n = t(9768);
                function r(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const a = (e) => (0 === e ? window : window.subViews.get(e));
                function i({ initializer: e = !0, rootId: u = 0, getRoot: t = a, context: i = 'model' } = {}) {
                    const o = new Map();
                    function s(e, u = 0) {
                        viewEnv.removeDataChangedCallback(e, u)
                            ? o.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, u, t) => {
                            t.forEach((u) => {
                                const t = o.get(u);
                                void 0 !== t && t(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const n = t(u),
                            r = i.split('.').reduce((e, u) => e[u], n);
                        return 'string' != typeof e || 0 === e.length
                            ? r
                            : e.split('.').reduce((e, u) => {
                                  const t = e[u];
                                  return 'function' == typeof t ? t.bind(e) : t;
                              }, r);
                    };
                    return {
                        subscribe: (t, r) => {
                            const a = 'string' == typeof r ? `${i}.${r}` : i,
                                s = n.O.view.addModelObserver(a, u, !0);
                            return o.set(s, t), e && t(l(r)), s;
                        },
                        readByPath: l,
                        createCallback: (e, u) => {
                            const t = l(u);
                            return (...u) => {
                                t(e(...u));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const u = l(e);
                            return () => {
                                u();
                            };
                        },
                        dispose: function () {
                            for (
                                var e,
                                    t = (function (e, u) {
                                        var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                                        if (t) return (t = t.call(e)).next.bind(t);
                                        if (
                                            Array.isArray(e) ||
                                            (t = (function (e, u) {
                                                if (e) {
                                                    if ('string' == typeof e) return r(e, u);
                                                    var t = {}.toString.call(e).slice(8, -1);
                                                    return (
                                                        'Object' === t && e.constructor && (t = e.constructor.name),
                                                        'Map' === t || 'Set' === t
                                                            ? Array.from(e)
                                                            : 'Arguments' === t ||
                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                                              ? r(e, u)
                                                              : void 0
                                                    );
                                                }
                                            })(e)) ||
                                            (u && e && 'number' == typeof e.length)
                                        ) {
                                            t && (e = t);
                                            var n = 0;
                                            return function () {
                                                return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                                            };
                                        }
                                        throw new TypeError(
                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                        );
                                    })(o.keys());
                                !(e = t()).done;

                            )
                                s(e.value, u);
                        },
                        unsubscribe: s,
                    };
                }
            },
            3215: (e, u, t) => {
                t.d(u, { q: () => s });
                var n = t(4598),
                    r = t(9174),
                    a = t(6179),
                    i = t.n(a),
                    o = t(8246);
                const s = () => (e, u) => {
                    const t = (0, a.createContext)({});
                    return [
                        function ({ mode: s = 'real', options: l, children: c, mocks: d }) {
                            const E = (0, a.useRef)([]),
                                m = (t, a, i) => {
                                    var s;
                                    const l = o.U(a),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (s = null == i ? void 0 : i.getter) ? s : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === t ? (null == i ? void 0 : i.getter(e)) : c.readByPath(e),
                                        m = (e) => E.current.push(e),
                                        _ = e({
                                            mode: t,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, u) => {
                                                    const a = null != u ? u : d(e),
                                                        i = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const a = null != u ? u : d(e),
                                                        i = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                primitives: (e, u) => {
                                                    const n = d(u);
                                                    if (Array.isArray(e)) {
                                                        const a = e.reduce(
                                                            (e, u) => ((e[u] = r.LO.box(n[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, r.aD)((u) => {
                                                                        e.forEach((e) => {
                                                                            a[e].set(u[e]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    }
                                                    {
                                                        const a = e,
                                                            i = Object.entries(a),
                                                            o = i.reduce(
                                                                (e, [u, t]) => ((e[t] = r.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        i.forEach(([u, t]) => {
                                                                            o[t].set(e[u]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            o
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: m,
                                        }),
                                        A = { mode: t, model: _, externalModel: c, cleanup: m };
                                    return {
                                        model: _,
                                        controls: 'mocks' === t && i ? i.controls(A) : u(A),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                _ = (0, a.useRef)(!1),
                                A = (0, a.useState)(s),
                                g = A[0],
                                F = A[1],
                                B = (0, a.useState)(() => m(s, l, d)),
                                D = B[0],
                                h = B[1];
                            return (
                                (0, a.useEffect)(() => {
                                    _.current ? h(m(g, l, d)) : (_.current = !0);
                                }, [d, g, l]),
                                (0, a.useEffect)(() => {
                                    F(s);
                                }, [s]),
                                (0, a.useEffect)(
                                    () => () => {
                                        D.externalModel.dispose(), E.current.forEach((e) => e());
                                    },
                                    [D],
                                ),
                                i().createElement(t.Provider, { value: D }, c)
                            );
                        },
                        () => (0, a.useContext)(t),
                    ];
                };
            },
            7044: (e, u, t) => {
                t.d(u, { IZ: () => o, UI: () => s, f8: () => l }), t(3649), t(9916);
                var n = t(8613);
                const r = 60,
                    a = 60 * r,
                    i = 24 * a,
                    o = 7 * i,
                    s = (Date.now(), n.Ew.getRegionalDateTime);
                function l(e = 0) {
                    let u = e;
                    const t = Math.trunc(u / i);
                    u -= t * i;
                    const n = Math.trunc(u / a);
                    u -= n * a;
                    const o = Math.trunc(u / r);
                    return (u -= o * r), { days: t, hours: n, minutes: o, seconds: u };
                }
                n.Ew.getFormattedDateTime;
            },
            9768: (e, u, t) => {
                t.d(u, { O: () => Q });
                var n = {};
                t.r(n),
                    t.d(n, { mouse: () => _, off: () => E, on: () => d, onResize: () => l, onScaleUpdated: () => c });
                var r = {};
                t.r(r),
                    t.d(r, {
                        events: () => n,
                        getMouseGlobalPosition: () => B,
                        getSize: () => F,
                        graphicsQuality: () => D,
                        playSound: () => A,
                        setRTPC: () => g,
                    });
                var a = {};
                t.r(a), t.d(a, { getBgUrl: () => f, getTextureUrl: () => b });
                var i = {};
                function o(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                function s(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.r(i),
                    t.d(i, {
                        addModelObserver: () => O,
                        addPreloadTexture: () => x,
                        children: () => a,
                        displayStatus: () => v,
                        displayStatusIs: () => q,
                        events: () => w,
                        extraSize: () => K,
                        forceTriggerMouseMove: () => V,
                        freezeTextureBeforeResize: () => U,
                        getBrowserTexturePath: () => P,
                        getDisplayStatus: () => Y,
                        getScale: () => G,
                        getSize: () => M,
                        getViewGlobalPosition: () => I,
                        isEventHandled: () => Z,
                        isFocused: () => j,
                        pxToRem: () => H,
                        remToPx: () => W,
                        resize: () => N,
                        sendEvent: () => T,
                        setAnimateWindow: () => $,
                        setEventHandled: () => z,
                        setInputPaddingsRem: () => R,
                        setSidePaddingsRem: () => L,
                        whenTutorialReady: () => X,
                    });
                const l = o('clientResized'),
                    c = o('self.onScaleUpdated'),
                    d = (e, u) => engine.on(e, u),
                    E = (e, u) => engine.off(e, u),
                    m = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') },
                    _ = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && s(!1);
                        }
                        function t() {
                            e.enabled && s(!0);
                        }
                        function n() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', u),
                                      document.body.removeEventListener('mouseleave', t))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', u),
                                      document.body.addEventListener('mouseleave', t))
                                : s(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const a = `mouse${u}`,
                                            i = m[u]((e) => t([e, 'outside']));
                                        function o(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, o),
                                            n(),
                                            () => {
                                                r &&
                                                    (i(),
                                                    window.removeEventListener(a, o),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                u
                            ),
                            {},
                        );
                        return Object.assign({}, r, {
                            disable() {
                                (e.enabled = !1), n();
                            },
                            enable() {
                                (e.enabled = !0), n();
                            },
                            enableOutside() {
                                e.enabled && s(!0);
                            },
                            disableOutside() {
                                e.enabled && s(!1);
                            },
                        });
                    })();
                function A(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function g(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                function F(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function B(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const D = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    h = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    p = Object.keys(h).reduce((e, u) => ((e[u] = () => A(h[u])), e), {}),
                    C = { play: Object.assign({}, p, { sound: A }), setRTPC: g };
                function b(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function f(e, u, t) {
                    return `url(${b(e, u, t)})`;
                }
                const v = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    w = {
                        onTextureFrozen: o('self.onTextureFrozen'),
                        onTextureReady: o('self.onTextureReady'),
                        onDomBuilt: o('self.onDomBuilt'),
                        onLoaded: o('self.onLoaded'),
                        onDisplayChanged: o('self.onShowingStatusChanged'),
                        onFocusUpdated: o('self.onFocusChanged'),
                        children: {
                            onAdded: o('children.onAdded'),
                            onLoaded: o('children.onLoaded'),
                            onRemoved: o('children.onRemoved'),
                            onAttached: o('children.onAttached'),
                            onTextureReady: o('children.onTextureReady'),
                            onRequestPosition: o('children.requestPosition'),
                        },
                    },
                    S = ['args'],
                    y = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, S);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, u]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof u) {
                                                      case 'number':
                                                          return { __Type: t, name: e, number: u };
                                                      case 'boolean':
                                                          return { __Type: t, name: e, bool: u };
                                                      default:
                                                          return { __Type: t, name: e, string: u.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    T = {
                        close(e) {
                            y('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            y(64);
                        },
                        move(e) {
                            y(16, { isMouseEvent: !0, on: e });
                        },
                    },
                    k = 15;
                function x(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function R(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, k);
                }
                function P(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function O(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function L(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, k);
                }
                function M(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function N(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function I(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: W(u.x), y: W(u.y) };
                }
                function U() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function G() {
                    return viewEnv.getScale();
                }
                function H(e) {
                    return viewEnv.pxToRem(e);
                }
                function W(e) {
                    return viewEnv.remToPx(e);
                }
                function $(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function j() {
                    return viewEnv.isFocused();
                }
                function z() {
                    return viewEnv.setEventHandled();
                }
                function Z() {
                    return viewEnv.isEventHandled();
                }
                function V() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Y() {
                    return viewEnv.getShowingStatus();
                }
                const q = Object.keys(v).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === v[u]), e), {}),
                    K = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    X = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : w.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    Q = { view: i, client: r, sound: C };
            },
            4598: (e, u, t) => {
                function n() {
                    return !1;
                }
                t.d(u, { jv: () => n }), console.log;
            },
            7902: (e, u, t) => {
                t.d(u, { F: () => n });
                const n = (e = 1) => {
                    const u = new Error().stack;
                    let t,
                        n = R.invalid('resId');
                    return (
                        u &&
                            ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (n = window.subViews[t].id)),
                        { caller: t, stack: u, resId: n }
                    );
                };
            },
            6536: (e, u, t) => {
                t(6179);
            },
            5415: (e, u, t) => {
                t.d(u, { GS: () => l, cJ: () => i });
                var n = t(6179),
                    r = t(7739),
                    a = t(1043);
                let i, o, s;
                !(function (e) {
                    (e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = a.j.small.width)] = 'Small'),
                        (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                        (e[(e.Large = a.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge');
                })(i || (i = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.width)] = 'Small'),
                            (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                            (e[(e.Large = a.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge');
                    })(o || (o = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = a.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.height)] = 'Small'),
                            (e[(e.Medium = a.j.medium.height)] = 'Medium'),
                            (e[(e.Large = a.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.height)] = 'ExtraLarge');
                    })(s || (s = {}));
                const l = () => {
                    const e = (0, n.useContext)(r.YN),
                        u = e.width,
                        t = e.height,
                        a = ((e) => {
                            switch (!0) {
                                case e.extraLarge:
                                    return i.ExtraLarge;
                                case e.large:
                                    return i.Large;
                                case e.medium:
                                    return i.Medium;
                                case e.small:
                                    return i.Small;
                                case e.extraSmall:
                                    return i.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), i.ExtraSmall;
                            }
                        })(e),
                        l = ((e) => {
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
                        c = ((e) => {
                            switch (!0) {
                                case e.extraLargeHeight:
                                    return s.ExtraLarge;
                                case e.largeHeight:
                                    return s.Large;
                                case e.mediumHeight:
                                    return s.Medium;
                                case e.smallHeight:
                                    return s.Small;
                                case e.extraSmallHeight:
                                    return s.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), s.ExtraSmall;
                            }
                        })(e);
                    return { mediaSize: a, mediaWidth: l, mediaHeight: c, remScreenWidth: u, remScreenHeight: t };
                };
            },
            4419: (e, u, t) => {
                t.d(u, { y: () => a });
                var n = t(8045),
                    r = t(6179);
                const a = (e, u, t = !0) => {
                    const a = (0, r.useCallback)(
                        (e) => {
                            const t = e[0];
                            u && u(t);
                        },
                        [u],
                    );
                    (0, r.useEffect)(() => {
                        if (!e.current || !t) return;
                        const u = new n.Z((e) => a(e));
                        return (
                            u.observe(e.current),
                            () => {
                                u.disconnect();
                            }
                        );
                    }, [a, t, e]);
                };
            },
            5521: (e, u, t) => {
                let n, r;
                t.d(u, { n: () => n }),
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
                            (e[(e.KEY_9 = 57)] = 'KEY_9');
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
                    })(r || (r = {}));
            },
            9480: (e, u, t) => {
                function n(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                t.d(u, { UI: () => n });
            },
            7727: (e, u, t) => {
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                t.d(u, { G: () => n });
            },
            3649: (e, u, t) => {
                let n;
                function r(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function a(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                t.d(u, { Eg: () => o, WU: () => r, uF: () => a, z4: () => i }),
                    t(1281),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(n || (n = {}));
                const i = (e) => e.replace(/&nbsp;/g, ' '),
                    o = (e) => e.replace(/&zwnbsp;/g, '\ufeff');
                new RegExp(
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
            },
            1358: (e, u, t) => {
                t.d(u, { Z: () => a });
                var n = t(9768);
                class r {
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
                        return window.__dataTracker || (window.__dataTracker = new r()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, u, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(e, t, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
                        );
                    }
                    removeCallback(e, u = 0) {
                        let t = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((t = viewEnv.removeDataChangedCallback(e, u)), delete this._callbacks[e]),
                            t || console.error("Can't remove callback by id:", e),
                            t
                        );
                    }
                    _emmitDataChanged(e, u, t) {
                        t.forEach((t) => {
                            const n = this._callbacks[t];
                            void 0 !== n && n(e, u);
                        });
                    }
                }
                r.__instance = void 0;
                const a = r;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9916);
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
            9916: (e, u, t) => {
                t.d(u, { B3: () => l, Z5: () => i.Z5, B0: () => o, ry: () => B });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let n = e.target;
                                    do {
                                        if (n === u) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            n = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== n)),
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
                const r = n;
                var a = t(1358),
                    i = t(8613);
                let o;
                var s;
                ((s = o || (o = {}))[(s.UNDEFINED = 0)] = 'UNDEFINED'),
                    (s[(s.TOOLTIP = 1)] = 'TOOLTIP'),
                    (s[(s.POP_OVER = 2)] = 'POP_OVER'),
                    (s[(s.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (s[(s.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (s[(s.MOVE = 16)] = 'MOVE'),
                    (s[(s.CLOSE = 32)] = 'CLOSE'),
                    (s[(s.MINIMIZE = 64)] = 'MINIMIZE');
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(5521),
                    _ = t(9768);
                const A = ['args'];
                function g(e, u, t, n, r, a, i) {
                    try {
                        var o = e[a](i),
                            s = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(s) : Promise.resolve(s).then(n, r);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    B = (function () {
                        var e,
                            u =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var u = this,
                                        t = arguments;
                                    return new Promise(function (n, r) {
                                        var a = e.apply(u, t);
                                        function i(e) {
                                            g(a, n, r, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            g(a, n, r, i, o, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    D = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, A);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, u]) => {
                                                  const t = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof u) {
                                                      case 'number':
                                                          t.number = u;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = u;
                                                          break;
                                                      default:
                                                          t.string = u.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    h = () => D(o.CLOSE),
                    p = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    };
                var C = t(7572);
                const b = r.instance,
                    f = {
                        DataTracker: a.Z,
                        ViewModel: C.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: E,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => D(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => D(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            D(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const i = _.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                d = s.width,
                                E = s.height,
                                m = {
                                    x: _.O.view.pxToRem(l) + i.x,
                                    y: _.O.view.pxToRem(c) + i.y,
                                    width: _.O.view.pxToRem(d),
                                    height: _.O.view.pxToRem(E),
                                };
                            D(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: F(m),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => p(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, h);
                        },
                        handleViewEvent: D,
                        onBindingsReady: B,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const r = Object.prototype.toString.call(u[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < r.length; u++) t[n].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: b,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = f;
            },
            8613: (e, u, t) => {
                t.d(u, { Ew: () => a, Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    },
                    a = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            3618: (e, u, t) => {
                t.d(u, { w: () => m });
                var n = t(6483),
                    r = t.n(n),
                    a = t(3415),
                    i = t(4419),
                    o = t(6179),
                    s = t.n(o),
                    l = t(8055),
                    c = t(3310),
                    d = t(131),
                    E = t(9053);
                const m = s().memo(
                    ({
                        text: e,
                        classMix: u,
                        onSizeChanged: t,
                        binding: n,
                        isTooltipEnable: m = !1,
                        isTruncationAvailable: _ = !1,
                        customTooltipArgs: A,
                        targetId: g,
                        justifyContent: F = E.v2.FlexStart,
                        alignContent: B = E.v2.FlexStart,
                        truncateIdentify: D = E.YA,
                    }) => {
                        const h = (0, o.useRef)(null),
                            p = (0, o.useRef)({ height: 0, width: 0 }),
                            C = (0, o.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                            b = C[0],
                            f = C[1],
                            v = (0, o.useMemo)(() => (0, c.s)(e, n, { justifyContent: F }), [n, F, e]),
                            w = (0, o.useMemo)(() => {
                                if (m && b.isTruncated && (!n || !Object.values(n).find((e) => 'object' == typeof e)))
                                    return {
                                        args: Object.assign({ text: e }, A, {
                                            stringifyKwargs: n ? JSON.stringify(n) : '',
                                        }),
                                        contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                        targetId: g,
                                    };
                            }, [n, m, g, e, A, b.isTruncated]),
                            S = (0, o.useCallback)(
                                (e) => {
                                    (p.current.width = e.contentRect.width), (p.current.height = e.contentRect.height);
                                    const u = (0, d.T)(h, v, p.current, D),
                                        n = u[0],
                                        r = u[1];
                                    f({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), t && t(r);
                                },
                                [t, D, v],
                            ),
                            y = (0, o.useMemo)(() => ({ justifyContent: F, alignContent: B }), [B, F]);
                        return (
                            (0, i.y)(h, S, _),
                            s().createElement(
                                'div',
                                {
                                    className: r()(
                                        l.Z.base,
                                        u,
                                        l.Z.base__zeroPadding,
                                        _ && l.Z.base__isTruncationAvailable,
                                    ),
                                    style: y,
                                },
                                s().createElement('div', { className: l.Z.unTruncated, ref: h }, v),
                                s().createElement(
                                    a.l,
                                    {
                                        tooltipArgs: w,
                                        className: r()(
                                            l.Z.tooltip,
                                            l.Z[`tooltip__justify-${F}`],
                                            l.Z[`tooltip__align-${B}`],
                                        ),
                                    },
                                    s().createElement(
                                        'div',
                                        {
                                            className: r()(
                                                l.Z.truncated,
                                                !b.isTruncateFinished && _ && l.Z.truncated__hide,
                                            ),
                                            style: y,
                                        },
                                        b.isTruncateFinished && _ ? b.elementList : v,
                                    ),
                                ),
                            )
                        );
                    },
                );
            },
            3310: (e, u, t) => {
                t.d(u, { s: () => E });
                var n = t(3649),
                    r = t(6799),
                    a = t(6960),
                    i = t(9053);
                const o = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    s = i.u6
                        ? (e) => {
                              const u = [];
                              return (
                                  (0, a.Z)(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          u.push(e);
                                      },
                                      (e) => {
                                          u.push(
                                              ...((e) => {
                                                  const u = [];
                                                  return (
                                                      (0, a.Z)(
                                                          e,
                                                          /\S\s+/g,
                                                          (e) => {
                                                              var t;
                                                              R.strings.settings.LANGUAGE_CODE().toLowerCase() === i.Co
                                                                  ? u.push(...((t = e), t.match(o) || []))
                                                                  : u.push(...e.split(''));
                                                          },
                                                          (e) => {
                                                              u.push(e[0]);
                                                          },
                                                      ),
                                                      u
                                                  );
                                              })(e[0]),
                                          );
                                      },
                                  ),
                                  u
                              );
                          }
                        : (e, u) => {
                              const t = /[\s\u002d]/g;
                              let n = t.exec(e);
                              if (!n) return [e];
                              const r = [];
                              let a = 0;
                              for (; n; ) {
                                  const o = u.justifyContent === i.v2.FlexEnd ? n.index : t.lastIndex;
                                  r.push(e.slice(a, o)), (a = o), (n = t.exec(e));
                              }
                              return a !== e.length && r.push(e.slice(a)), r;
                          },
                    l = (e, u = '', t) => {
                        const n = [];
                        return (
                            (0, a.Z)(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: i.kH.Word, colorTag: u, childList: s(e, t) });
                                },
                                (e) => {
                                    const t = e[0],
                                        r = i.aF[t.charAt(0)];
                                    r === i.kH.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const u = [
                                                      {
                                                          blockType: i.kH.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < e.length - 1; t++)
                                                      u.push({
                                                          blockType: i.kH.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return u;
                                              })(t),
                                          )
                                        : n.push({ blockType: r, colorTag: u, childList: [t] });
                                },
                            ),
                            n
                        );
                    },
                    c = (e, u, t = '', n) => {
                        const r = [];
                        return (
                            (0, a.Z)(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    r.push(...l(e, t, n));
                                },
                                (e) => {
                                    const a = e[1],
                                        o = void 0 === u[a] ? e[0] : u[a];
                                    'string' == typeof o || 'number' == typeof o
                                        ? r.push(...l(String(o), t, n))
                                        : r.push({ blockType: i.kH.Binding, colorTag: t, childList: [o] });
                                },
                            ),
                            r
                        );
                    },
                    d = (e, u) => {
                        if (!e) return [u];
                        const t = [],
                            n = Object.assign({}, u, { childList: u.childList.splice(0, 1) });
                        if (e.blockType === i.kH.NoBreakWrapper) e.childList.push(n), t.push(e);
                        else {
                            const u = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && t.push(e),
                                t.push({ blockType: i.kH.NoBreakWrapper, colorTag: '', childList: [u, n] });
                        }
                        return u.childList.length > 0 && t.push(u), t;
                    },
                    E = (e, u = {}, t) => {
                        if (!e) return [];
                        const o = ((e) => {
                            const u = [];
                            let t = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === i.kH.NoBreakSymbol
                                        ? ((t = !0), u.push(...d(u.pop(), e)))
                                        : (t ? u.push(...d(u.pop(), e)) : u.push(e), (t = !1));
                                }),
                                u
                            );
                        })(
                            ((e, u, t) => {
                                const n = [];
                                return (
                                    (0, a.Z)(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            n.push(...c(e, u, '', t));
                                        },
                                        (e) => {
                                            n.push(...c(e[2] + e[3], u, e[1], t));
                                        },
                                    ),
                                    n
                                );
                            })((0, n.Eg)((0, n.z4)(e)), u, t),
                        );
                        return (0, r.w)(o);
                    };
            },
            6799: (e, u, t) => {
                t.d(u, { w: () => i });
                var n = t(597),
                    r = t(9053);
                const a = (e, u, t) => {
                        const i = [];
                        return (
                            e.childList.forEach((o, s) => {
                                const l = `${t}_${s}`;
                                if ((0, r.dz)(o)) {
                                    const e = o,
                                        u = e.blockType,
                                        t = n.IY[u],
                                        r = a(e, t, l);
                                    i.push(...r);
                                } else i.push(u({ elementList: [o], textBlock: e, key: l }));
                            }),
                            i
                        );
                    },
                    i = (e) => {
                        const u = [];
                        return (
                            e.forEach((e, t) => {
                                u.push(
                                    ...((e, u) => {
                                        const t = [],
                                            i = e.blockType,
                                            o = n.IY[i],
                                            s = a(e, o, u);
                                        return (
                                            i === r.kH.NoBreakWrapper
                                                ? t.push(o({ elementList: s, textBlock: e, key: `${u}` }))
                                                : t.push(...s),
                                            t
                                        );
                                    })(e, t),
                                );
                            }),
                            u
                        );
                    };
            },
            6960: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = (e, u, t, n) => {
                    let r = u.exec(e),
                        a = 0;
                    for (; r; ) a !== r.index && t(e.slice(a, r.index)), n(r), (a = u.lastIndex), (r = u.exec(e));
                    a !== e.length && t(e.slice(a));
                };
            },
            131: (e, u, t) => {
                t.d(u, { T: () => c });
                var n = t(6179),
                    r = t.n(n),
                    a = t(9053);
                const i = (e, u) => !e || e.offsetTop + e.offsetHeight > u,
                    o = (e, u) => e.offsetLeft + e.offsetWidth - u,
                    s = (e, u, t) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > u) return [!1, 0];
                        const n = o(e, u),
                            r = e.textContent.length,
                            a = e.offsetWidth / r,
                            i = Math.ceil(n / a);
                        if (n > 0) {
                            const n = Math.floor((u - e.offsetLeft) / a);
                            return n >= t ? [!0, t + i] : [!1, n];
                        }
                        const s = Math.max(t + i, 0);
                        return r < s ? [!1, 0] : [!0, s];
                    },
                    l = (e, u, t, n, i, o) => {
                        let c = -1,
                            d = null;
                        for (let E = t; E >= 0; E--) {
                            const t = e[E],
                                m = Number(e[E].getAttribute(a.bF));
                            if (m === a.kH.LineBreak || m === a.kH.NewLine || m === a.kH.Binding) continue;
                            const _ = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const e = s(t, n, i),
                                    a = e[0],
                                    l = e[1];
                                if (!a) {
                                    l > 0 && (i -= l);
                                    continue;
                                }
                                const m = _.slice(0, _.length - l) + o,
                                    A = u[E];
                                (d = r().cloneElement(A, A.props, m)), (c = E);
                                break;
                            }
                            {
                                const e = t.children,
                                    a = u[E],
                                    s = a.props.children,
                                    m = l(e, s, e.length - 1, n, i, o),
                                    A = m[0],
                                    g = m[1];
                                if (!(A < 0)) {
                                    const e = s.slice(0, A);
                                    (d = r().cloneElement(a, a.props, e, g)), (c = E);
                                    break;
                                }
                                i -= _.length;
                            }
                        }
                        return [c, d];
                    },
                    c = (e, u, t, n = a.YA) => {
                        const r = [...u],
                            s = e.current;
                        if (!s) return [r, !1];
                        const c = t.height,
                            d = t.width,
                            E = s.lastElementChild;
                        if (!i(E, c) && o(E, d) <= 0) return [r, !1];
                        const m = s.children,
                            _ = ((e, u) => {
                                let t = 0,
                                    n = e.length - 1;
                                for (; n - t >= 0; ) {
                                    const r = t + Math.ceil(0.5 * (n - t));
                                    i(e[r], u) ? (n = r - 1) : (t = r + 1);
                                }
                                return t - 1;
                            })(m, c);
                        if (_ < 0) return [r, !1];
                        const A = l(m, r, _, d, n.length, n),
                            g = A[0],
                            F = A[1];
                        return F && (r.splice(g, 1, F), r.splice(g + 1)), [r, !0];
                    };
            },
            9053: (e, u, t) => {
                let n, r, a;
                t.d(u, {
                    Co: () => c,
                    YA: () => o,
                    aF: () => l,
                    bF: () => s,
                    dz: () => i,
                    kH: () => n,
                    u6: () => d,
                    v2: () => r,
                }),
                    (function (e) {
                        (e[(e.Word = 0)] = 'Word'),
                            (e[(e.LineBreak = 1)] = 'LineBreak'),
                            (e[(e.NewLine = 2)] = 'NewLine'),
                            (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                            (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                            (e[(e.Binding = 5)] = 'Binding');
                    })(n || (n = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(r || (r = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(a || (a = {}));
                const i = (e) => void 0 !== e.childList,
                    o = '...',
                    s = 'data-block-type',
                    l = { [a.NBSP]: n.NoBreakSymbol, [a.ZWNBSP]: n.NoBreakSymbol, [a.NEW_LINE]: n.LineBreak },
                    c = 'th',
                    d = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', c].includes(R.strings.settings.LANGUAGE_CODE().toLowerCase());
            },
            597: (e, u, t) => {
                t.d(u, { IY: () => E });
                var n = t(6483),
                    r = t.n(n),
                    a = t(6179),
                    i = t.n(a),
                    o = t(9053),
                    s = t(9627),
                    l = t(7629);
                const c = (e) => ({ color: `#${e}` }),
                    d = ({ elementList: e, textBlock: u, key: t }) => {
                        const n = u.colorTag;
                        return n
                            ? s.Z[n]
                                ? i().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: r()(l.Z.word, s.Z[n]) },
                                      e,
                                  )
                                : i().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: l.Z.word, style: c(n) },
                                      e,
                                  )
                            : i().createElement(
                                  'span',
                                  { key: t, 'data-block-type': u.blockType, className: l.Z.word },
                                  e,
                              );
                    },
                    E = {
                        [o.kH.Word]: d,
                        [o.kH.NoBreakSymbol]: d,
                        [o.kH.Binding]: ({ elementList: e, textBlock: u, key: t }) =>
                            i().createElement(
                                'span',
                                { key: t, 'data-block-type': u.blockType },
                                e.map((e) => i().createElement(i().Fragment, { key: t }, e)),
                            ),
                        [o.kH.LineBreak]: ({ key: e }) =>
                            i().createElement('span', {
                                key: e,
                                'data-block-type': o.kH.LineBreak,
                                className: l.Z.lineBreak,
                            }),
                        [o.kH.NewLine]: ({ elementList: e, key: u }) =>
                            i().createElement(
                                'span',
                                { key: u, 'data-block-type': o.kH.NewLine, className: l.Z.newLine },
                                e,
                            ),
                        [o.kH.NoBreakWrapper]: ({ elementList: e, key: u }) =>
                            i().createElement(
                                'span',
                                { key: u, 'data-block-type': o.kH.NoBreakWrapper, className: l.Z.noBreakWrapper },
                                e,
                            ),
                    };
            },
            3458: (e, u, t) => {
                let n;
                t.d(u, { Z0: () => r, in: () => n, sx: () => a }),
                    (function (e) {
                        (e[(e.NonSet = 0)] = 'NonSet'),
                            (e[(e.Debug = 10)] = 'Debug'),
                            (e[(e.Info = 20)] = 'Info'),
                            (e[(e.Warning = 30)] = 'Warning');
                    })(n || (n = {}));
                const r = 'tooltip_watched',
                    a = 2;
                let i;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(i || (i = {}));
            },
            5983: (e, u, t) => {
                t.d(u, { D9: () => n, RM: () => r, ob: () => a });
                const n = 'epic_battle';
                let r, a, i;
                !(function (e) {
                    (e.HangarView = 'hangar'),
                        (e.SetupView = 'setup_view'),
                        (e.ProgressView = 'progress_view'),
                        (e.RewardsView = 'rewards_view'),
                        (e.RewardsSelectionView = 'rewards_selection_view'),
                        (e.SkillsView = 'skills_view'),
                        (e.AwardsView = 'awards_view'),
                        (e.ContainerView = 'container_view');
                })(r || (r = {})),
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
                    })(a || (a = {})),
                    (function (e) {
                        (e.Click = 'click'), (e.Close = 'close');
                    })(i || (i = {}));
            },
            405: (e, u, t) => {
                t.d(u, { Y: () => o });
                var n = t(6179),
                    r = t(3458),
                    a = t(5983),
                    i = t(1943);
                const o = (e, u, t, o) => {
                    const s = (0, i.k2)(a.D9),
                        l = s[0],
                        c = s[1];
                    return [
                        (0, n.useCallback)(() => l(r.Z0), [l]),
                        (0, n.useCallback)(
                            () => c({ action: r.Z0, timeLimit: r.sx, item: e, parentScreen: u, itemState: t, info: o }),
                            [c, e, u, t, o],
                        ),
                    ];
                };
            },
            1943: (e, u, t) => {
                t.d(u, { k2: () => o });
                var n = t(6179),
                    r = t(3458);
                const a = () => Date.now(),
                    i = (e, u) => {
                        const t = ((e, u) => {
                                const t = (0, n.useCallback)(
                                    (t, n = r.in.Info, a) => {
                                        a || (a = {}),
                                            Object.keys(a).length >= 200 ||
                                                window.uiLoggerModel.log({
                                                    feature: e,
                                                    group: u,
                                                    action: t,
                                                    logLevel: n,
                                                    params: JSON.stringify(a),
                                                });
                                    },
                                    [e, u],
                                );
                                return (e, u, n) => t(e, u, n);
                            })(e, u),
                            i = (0, n.useRef)(new Map()),
                            o = (0, n.useRef)(new Map()),
                            s = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const u = i.current.get(e);
                                    (void 0 !== u && u > 0) || i.current.set(e, a());
                                },
                                [i],
                            ),
                            l = (0, n.useCallback)(() => {
                                i.current.clear(), o.current.clear();
                            }, [i, o]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== i.current.get(e) &&
                                        void 0 === o.current.get(e) &&
                                        o.current.set(e, a());
                                },
                                [i, o],
                            ),
                            d = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const u = i.current.get(e);
                                    if (void 0 === u) return;
                                    const t = o.current.get(e);
                                    if (void 0 === t) return;
                                    o.current.delete(e);
                                    const n = a() - t;
                                    i.current.set(e, u + n);
                                },
                                [i, o],
                            ),
                            E = (0, n.useCallback)(
                                (e, u = 0, n, r) => {
                                    const s = i.current.get(e);
                                    if (void 0 === s) return;
                                    void 0 !== o.current.get(e) && d(e), i.current.delete(e);
                                    const l = (a() - s) / 1e3;
                                    l <= u ||
                                        ((r = ((e, u) => (void 0 === e && (e = {}), (e.timeSpent = u), e))(r, l)),
                                        t(e, n, r));
                                },
                                [i, o, t, d],
                            );
                        return [(e) => s(e), (e, u, t, n) => E(e, u, t, n), () => l(), (e) => c(e), (e) => d(e)];
                    },
                    o = (e) => {
                        const u = i(e, 'metrics'),
                            t = u[0],
                            r = u[1],
                            a = u[2],
                            o = u[3],
                            s = u[4],
                            l = (0, n.useCallback)(
                                (e) => {
                                    const u = e.action,
                                        t = e.timeLimit,
                                        n = e.logLevel;
                                    r(
                                        u,
                                        t,
                                        n,
                                        (({ partnerID: e, item: u, parentScreen: t, itemState: n, info: r }) => ({
                                            item: u,
                                            partnerID: e || null,
                                            parent_screen: t || null,
                                            item_state: n || null,
                                            additional_info: r || null,
                                        }))(e),
                                    );
                                },
                                [r],
                            );
                        return [(e) => t(e), (e) => l(e), () => a(), (e) => o(e), (e) => s(e)];
                    };
            },
            4389: (e, u, t) => {
                t(9916);
                var n = t(6179),
                    r = t.n(n),
                    a = t(6483),
                    i = t.n(a),
                    o = t(4959),
                    s = t(3403),
                    l = t(3854);
                const c = (0, t(3215).q)()(
                        ({ observableModel: e }) => ({ root: e.object(), rewards: e.array('rewards') }),
                        ({ externalModel: e }) => ({ shopClick: e.createCallbackNoArgs('onShopClick') }),
                    ),
                    d = (c[0], c[1]),
                    E = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let m, _;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                })(m || (m = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(_ || (_ = {}));
                const A = ({ size: e = m.Default }) => {
                        const u = i()(E.background, E[`background__${e}`]);
                        return r().createElement('div', { className: u });
                    },
                    g = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    F = ({ size: e }) => {
                        const u = i()(g.base, g[`base__${e}`]);
                        return r().createElement('div', { className: u });
                    },
                    B = {
                        base: 'ProgressLineImpose_base_80',
                        base__disabled: 'ProgressLineImpose_base__disabled_cc',
                        base__finished: 'ProgressLineImpose_base__finished_d4',
                        base__withoutBounce: 'ProgressLineImpose_base__withoutBounce_56',
                        pattern: 'ProgressLineImpose_pattern_1c',
                        base__small: 'ProgressLineImpose_base__small_55',
                        gradient: 'ProgressLineImpose_gradient_35',
                        glow: 'ProgressLineImpose_glow_a5',
                        glow__left: 'ProgressLineImpose_glow__left_d8',
                    },
                    D = (0, n.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: n, isComplete: a, withoutBounce: o }) => {
                            const s = i()(
                                    B.base,
                                    B[`base__${e}`],
                                    t && B.base__disabled,
                                    a && B.base__finished,
                                    o && B.base__withoutBounce,
                                ),
                                l = !t && !a;
                            return r().createElement(
                                'div',
                                { className: s, style: n, ref: u },
                                r().createElement('div', { className: B.pattern }),
                                r().createElement('div', { className: B.gradient }),
                                l && r().createElement(F, { size: e }),
                            );
                        },
                    ),
                    h = ({ size: e, value: u, lineRef: t, disabled: a, onComplete: i }) => {
                        const o = (0, n.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            s = 100 === u;
                        return (
                            (0, n.useEffect)(() => {
                                s && i && i();
                            }, [s, i]),
                            r().createElement(D, { size: e, disabled: a, baseStyles: o, isComplete: s, lineRef: t })
                        );
                    },
                    p = (e, u) => {
                        let t;
                        const n = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(n);
                        };
                    };
                let C, b;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(C || (C = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(b || (b = {}));
                const f = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: i,
                            to: o,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < a,
                                d = (0, n.useState)(b.Idle),
                                E = d[0],
                                m = d[1],
                                _ = E === b.In,
                                A = E === b.End,
                                g = E === b.Idle,
                                B = (0, n.useCallback)(
                                    (e) => {
                                        m(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, n.useEffect)(() => {
                                if (g && !t)
                                    return p(() => {
                                        B(b.In);
                                    }, u);
                            }, [B, t, g, u]),
                                (0, n.useEffect)(() => {
                                    if (_)
                                        return p(() => {
                                            s && s(), B(b.End);
                                        }, e + u);
                                }, [B, _, s, u, e]);
                            const D = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                h = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                C = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(a - o)}%`, left: `${c ? o : a}%` }),
                                    [a, c, o],
                                );
                            return A
                                ? null
                                : r().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: C },
                                      r().createElement(
                                          'div',
                                          { style: g ? D : h, className: 'ProgressBarDeltaSimple_delta_99' },
                                          r().createElement(F, { size: i }),
                                      ),
                                  );
                        },
                    ),
                    v = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: i,
                            isComplete: o,
                            animationSettings: s,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const d = (0, n.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${s.line.duration}ms`,
                                    transitionDelay: `${s.line.delay}ms`,
                                }),
                                [s.line.delay, s.line.duration, e],
                            );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(D, {
                                    size: u,
                                    lineRef: a,
                                    disabled: i,
                                    isComplete: o,
                                    baseStyles: d,
                                }),
                                t >= 0 &&
                                    r().createElement(f, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        freezed: s.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    w = (e) => (e ? { left: 0 } : { right: 0 }),
                    S = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    y = (e) => ({ transitionDuration: `${e}ms` }),
                    T = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: o,
                            to: s,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                            className: d,
                        }) => {
                            const E = s < a,
                                m = (0, n.useState)(C.Idle),
                                _ = m[0],
                                A = m[1],
                                g = _ === C.End,
                                B = _ === C.Idle,
                                D = _ === C.Grow,
                                h = _ === C.Shrink,
                                b = (0, n.useCallback)(
                                    (e) => {
                                        A(e), c && c(e);
                                    },
                                    [c],
                                ),
                                f = (0, n.useCallback)(
                                    (e, u) =>
                                        p(() => {
                                            b(e);
                                        }, u),
                                    [b],
                                );
                            (0, n.useEffect)(() => {
                                if (!t)
                                    return B
                                        ? f(C.Grow, u)
                                        : D
                                          ? f(C.Shrink, e)
                                          : h
                                            ? f(C.End, e)
                                            : void (g && l && l());
                            }, [f, t, g, D, B, h, l, u, e]);
                            const v = (0, n.useMemo)(() => Object.assign({ width: '100%' }, y(e), w(E)), [E, e]),
                                T = (0, n.useMemo)(() => Object.assign({ width: '0%' }, y(e), w(E)), [E, e]),
                                k = (0, n.useMemo)(() => Object.assign({ width: '0%' }, S(E, a), y(e)), [a, E, e]),
                                x = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(s - a)}%` }, S(E, a), y(e)),
                                    [a, E, s, e],
                                );
                            if (g) return null;
                            const R = i()(
                                'ProgressBarDeltaGrow_base_7e',
                                d,
                                E && 0 === s && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return r().createElement(
                                'div',
                                { style: B ? k : x, className: R },
                                r().createElement(
                                    'div',
                                    { style: h ? T : v, className: 'ProgressBarDeltaGrow_glow_68' },
                                    r().createElement(F, { size: o }),
                                ),
                            );
                        },
                    ),
                    k = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: i,
                            isComplete: o,
                            animationSettings: s,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const d = e < t,
                                E = (0, n.useState)(!1),
                                m = E[0],
                                _ = E[1],
                                A = (0, n.useCallback)(
                                    (e) => {
                                        e === C.Shrink && _(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                g = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                F = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${s.line.duration}ms` }),
                                    [s.line.duration, e],
                                );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(D, {
                                    size: u,
                                    lineRef: a,
                                    disabled: i,
                                    isComplete: o,
                                    withoutBounce: d && 0 === e,
                                    baseStyles: m ? F : g,
                                }),
                                t >= 0 &&
                                    r().createElement(T, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        onChangeAnimationState: A,
                                        freezed: s.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: s.delta.className,
                                    }),
                            );
                        },
                    ),
                    x = ['onComplete', 'onEndAnimation'];
                function P() {
                    return (
                        (P = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        P.apply(null, arguments)
                    );
                }
                const O = (0, n.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, x);
                        const i = (0, n.useState)(!1),
                            o = i[0],
                            s = i[1],
                            l = (0, n.useCallback)(() => {
                                const e = 100 === a.to;
                                e !== o && s(e), e && u && u(), t && t();
                            }, [o, u, t, a.to]);
                        switch (a.animationSettings.type) {
                            case _.Simple:
                                return r().createElement(v, P({}, a, { onEndAnimation: l, isComplete: o }));
                            case _.Growing:
                                return r().createElement(k, P({}, a, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    L = ['onEndAnimation'];
                function M() {
                    return (
                        (M = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        M.apply(null, arguments)
                    );
                }
                const N = (0, n.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, L);
                    const a = (0, n.useRef)({}),
                        i = (0, n.useCallback)(() => {
                            (a.current.from = void 0), u && u();
                        }, [u]),
                        o = 'number' == typeof a.current.from ? a.current.from : t.from;
                    return (
                        (a.current.from = o),
                        r().createElement(O, M({}, t, { onEndAnimation: i, key: `${o}-${t.to}`, from: o }))
                    );
                });
                function I() {
                    return (
                        (I = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        I.apply(null, arguments)
                    );
                }
                const U = (0, n.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: n,
                            deltaFrom: a,
                            animationSettings: i,
                            onEndAnimation: o,
                            onChangeAnimationState: s,
                            onComplete: l,
                        }) => {
                            if (a === u)
                                return r().createElement(h, {
                                    key: `${a}-${u}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: n,
                                    onComplete: l,
                                });
                            const c = {
                                from: a,
                                to: u,
                                size: e,
                                lineRef: t,
                                disabled: n,
                                animationSettings: i,
                                onComplete: l,
                                onEndAnimation: o,
                                onChangeAnimationState: s,
                            };
                            return i.withStack
                                ? r().createElement(N, c)
                                : r().createElement(O, I({ key: `${a}-${u}` }, c));
                        },
                    ),
                    G = (e) => ({
                        '--progress-base': `url(${e.bgImageBase})`,
                        '--progress-line-base': e.line.bgColorBase,
                        '--progress-line-disabled': e.line.bgColorDisabled,
                        '--progress-line-finished': e.line.bgColorFinished,
                        '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                        '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                        '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                        '--progress-glow': `url('${e.glow}')`,
                        '--progress-glow-small': `url('${e.glowSmall}')`,
                        '--progress-delta-color': e.delta.color,
                        '--progress-delta-shadow': e.delta.shadow,
                    });
                var H = t(7515);
                const W = (e, u, t) => ('number' == typeof t ? ((0, H.u)(0, u, t) / u) * 100 : e),
                    $ = {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_grey',
                        line: { bgColorBase: '#f50', bgColorDisabled: 'transparent', bgColorFinished: '#59a011' },
                        pattern: {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_orange',
                            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
                            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.pattern_green',
                        },
                        glow: 'R.images.gui.maps.icons.components.progress_bar.glow',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small',
                        delta: {
                            color: '#ffc',
                            shadow: '0 0 4px 1px #ffaa0066, 0 0 9px 1px #ffaa0066, 0 0 12px 2px #ff550066, 0 0 12px 4px #ff000066',
                        },
                    },
                    j = {
                        freezed: !1,
                        withStack: !1,
                        type: _.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    z = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = $,
                            size: t = m.Default,
                            animationSettings: a = j,
                            disabled: o = !1,
                            withoutBackground: s = !1,
                            value: l,
                            deltaFrom: c,
                            lineRef: d,
                            onChangeAnimationState: _,
                            onEndAnimation: g,
                            onComplete: F,
                        }) => {
                            const B = ((e, u, t) =>
                                (0, n.useMemo)(() => {
                                    const n = ((0, H.u)(0, u, e) / u) * 100;
                                    return { value: n, deltaFrom: W(n, u, t) };
                                }, [t, u, e]))(l, e, c);
                            return r().createElement(
                                'div',
                                { className: i()(E.base, E[`base__${t}`]), style: G(u) },
                                !s && r().createElement(A, { size: t }),
                                r().createElement(U, {
                                    size: t,
                                    lineRef: d,
                                    disabled: o,
                                    value: B.value,
                                    deltaFrom: B.deltaFrom,
                                    animationSettings: a,
                                    onEndAnimation: g,
                                    onChangeAnimationState: _,
                                    onComplete: F,
                                }),
                            );
                        },
                    );
                var Z = t(3649),
                    V = t(2862),
                    Y = t(1558),
                    q = t(5415),
                    K = t(9480),
                    X = t(5983),
                    Q = t(5989);
                const J = (0, s.Pi)(() => {
                        const e = d().model.rewards.get(),
                            u = (0, q.GS)().mediaSize === q.cJ.ExtraSmall ? V.h2.Small : V.h2.Big;
                        return r().createElement(
                            'div',
                            { className: 'Rewards_base_11' },
                            K.UI(e, (e, t) =>
                                r().createElement(
                                    'div',
                                    { key: t, className: 'Rewards_reward_f2' },
                                    r().createElement(Q.I, {
                                        item: X.ob.RewardTooltip,
                                        info: e.name,
                                        parentScreen: X.RM.ProgressView,
                                        name: e.name,
                                        size: u,
                                        image: (0, Y.ry)(e, u),
                                        value: e.value,
                                        valueType: (0, Y.p3)(e.name),
                                        tooltipArgs: (0, Y.pI)({ tooltipId: e.tooltipId }, Number(e.tooltipContentId), {
                                            targetId: R.views.frontline.lobby.ProgressView('resId'),
                                        }),
                                    }),
                                ),
                            ),
                        );
                    }),
                    ee = (0, n.memo)(J),
                    ue = 'Content_base_28',
                    te = 'Content_base__infoContainer_5d',
                    ne = 'Content_infoLabel_f6',
                    re = (0, n.memo)(
                        ({ frontlineState: e, isMaxLevel: u, level: t, currentPoints: a, neededPoints: s }) => {
                            const l = t + 1,
                                c = e === o.c.Finished,
                                d = e === o.c.Active || e === o.c.Frozen,
                                E = (0, n.useMemo)(() => (0, Z.uF)(R.strings.fl_progress.rewardFor(), { lvl: l }), [l]);
                            return e === o.c.Announce
                                ? r().createElement(
                                      'div',
                                      { className: i()(ue, te) },
                                      r().createElement(
                                          'div',
                                          { className: ne },
                                          R.strings.fl_progress.info.gameplayDescription(),
                                      ),
                                      r().createElement(
                                          'div',
                                          { className: ne },
                                          R.strings.fl_progress.info.rewardsDescription(),
                                      ),
                                  )
                                : u
                                  ? r().createElement(
                                        'div',
                                        { className: i()(ue, te) },
                                        r().createElement(
                                            'div',
                                            { className: ne },
                                            R.strings.fl_progress.info.maxLevelReached(),
                                        ),
                                    )
                                  : r().createElement(
                                        'div',
                                        { className: i()(ue, c && 'Content_base__finished_16') },
                                        r().createElement(
                                            'div',
                                            { className: 'Content_progressBar_4d' },
                                            r().createElement(
                                                'div',
                                                { className: 'Content_levels_aa' },
                                                r().createElement('div', { className: 'Content_levelCurrent_43' }, t),
                                                r().createElement(
                                                    'div',
                                                    { className: 'Content_exp_a4' },
                                                    r().createElement(
                                                        'div',
                                                        { className: 'Content_currentPoints_36' },
                                                        a + ' ',
                                                    ),
                                                    r().createElement(
                                                        'div',
                                                        { className: 'Content_needPoints_91' },
                                                        `/ ${s}`,
                                                    ),
                                                    r().createElement('div', { className: 'Content_levelIcon_86' }),
                                                ),
                                                r().createElement('div', { className: 'Content_levelNext_d3' }, l),
                                            ),
                                            r().createElement(z, {
                                                value: a,
                                                size: m.Medium,
                                                maxValue: s,
                                                disabled: c,
                                            }),
                                        ),
                                        d &&
                                            r().createElement(
                                                r().Fragment,
                                                null,
                                                r().createElement('div', { className: 'Content_rewardText_60' }, E),
                                                r().createElement(ee, null),
                                            ),
                                    );
                        },
                    );
                let ae, ie;
                var oe;
                let se, le;
                t(7078),
                    t(7739),
                    t(5262),
                    t(4090),
                    t(280),
                    (function (e) {
                        (e.B0 = 'b0'),
                            (e.B1 = 'b1'),
                            (e.B2 = 'b2'),
                            (e.B3 = 'b3'),
                            (e.B4 = 'b4'),
                            (e.B5 = 'b5'),
                            (e.B6 = 'b6');
                    })(ae || (ae = {})),
                    ((oe = ie || (ie = {})).Small = 'small'),
                    (oe.Medium = 'medium'),
                    (oe.Big = 'big'),
                    (function (e) {
                        (e.Huge = 'huge'), (e.Big = 'big'), (e.Medium = 'medium'), (e.Small = 'small');
                    })(se || (se = {})),
                    ae.B4,
                    ae.B5,
                    ae.B6,
                    ae.B0,
                    ae.B1,
                    ae.B2,
                    ae.B0,
                    ie.Big,
                    se.Huge,
                    ie.Medium,
                    se.Huge,
                    ie.Small,
                    se.Big,
                    ae.B1,
                    ie.Big,
                    se.Huge,
                    ie.Medium,
                    se.Huge,
                    ie.Small,
                    se.Big,
                    ae.B2,
                    ie.Big,
                    se.Huge,
                    ie.Medium,
                    se.Huge,
                    ie.Small,
                    se.Big,
                    ae.B3,
                    ie.Big,
                    se.Huge,
                    ie.Medium,
                    se.Big,
                    ie.Small,
                    se.Big,
                    ae.B4,
                    ie.Big,
                    se.Big,
                    ie.Medium,
                    se.Big,
                    ie.Small,
                    se.Medium,
                    ae.B5,
                    ie.Big,
                    se.Medium,
                    ie.Medium,
                    se.Medium,
                    ie.Small,
                    se.Small,
                    ae.B6,
                    ie.Big,
                    se.Medium,
                    ie.Medium,
                    se.Small,
                    ie.Small,
                    se.Small,
                    (function (e) {
                        (e.Icon1 = 'bg0'),
                            (e.Icon2 = 'bg1'),
                            (e.Icon3 = 'bg2'),
                            (e.Icon4 = 'bg3'),
                            (e.Icon5 = 'bg4'),
                            (e.Icon6 = 'bg5');
                    })(le || (le = {})),
                    se.Huge,
                    se.Big,
                    se.Medium,
                    se.Small;
                const ce = {
                    [le.Icon1]: [0],
                    [le.Icon2]: [1, 2, 3, 4],
                    [le.Icon3]: [5, 6, 7, 8, 9],
                    [le.Icon4]: [10, 11, 12, 13, 14],
                    [le.Icon5]: [15, 16, 17, 18, 19],
                    [le.Icon6]: [20],
                };
                ae.B0, ae.B1, ae.B2;
                var de = t(8154);
                const Ee = {
                    base: 'Emblem_base_40',
                    icon: 'Emblem_icon_01',
                    glow: 'Emblem_glow_8f',
                    'glow-rotation': 'Emblem_glow-rotation_0f',
                    level: 'Emblem_level_c8',
                    icon__bg0: 'Emblem_icon__bg0_0b',
                    icon__bg1: 'Emblem_icon__bg1_ac',
                    icon__bg2: 'Emblem_icon__bg2_92',
                    icon__bg3: 'Emblem_icon__bg3_6b',
                    icon__bg4: 'Emblem_icon__bg4_04',
                    icon__bg5: 'Emblem_icon__bg5_49',
                };
                function me() {
                    return (
                        (me = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        me.apply(null, arguments)
                    );
                }
                const _e = (0, n.memo)(({ level: e, isGlowVisible: u }) => {
                    const t = (0, n.useMemo)(
                            () => ({
                                header: R.strings.fl_progress.emblem.tooltip.header(),
                                body: (0, Z.uF)(R.strings.fl_progress.emblem.tooltip.body(), { level: e }),
                            }),
                            [e],
                        ),
                        a = (0, n.useMemo)(
                            () => ((e) => Object.keys(ce).find((u) => ce[u].includes(e)) || le.Icon1)(e),
                            [e],
                        ),
                        o = (0, n.useMemo)(
                            () => ({
                                backgroundImage: `url(${R.images.gui.maps.icons.epicBattles.metaLvls.c_320x320.$dyn(a)})`,
                            }),
                            [a],
                        );
                    return r().createElement(
                        'div',
                        { className: Ee.base },
                        r().createElement(
                            de.l,
                            me({}, t, { item: X.ob.EpicWidgetTooltip, parentScreen: X.RM.ProgressView }),
                            r().createElement(
                                'div',
                                null,
                                u && r().createElement('div', { className: Ee.glow }),
                                r().createElement(
                                    'div',
                                    { className: i()(Ee.icon, Ee[`icon__${a}`]), style: o },
                                    e > 0 && r().createElement('div', { className: Ee.level }, e),
                                ),
                            ),
                        ),
                    );
                });
                var Ae = t(3457);
                const ge = 'ShopBanner_line_0c',
                    Fe = (0, n.memo)(() => {
                        const e = d().controls;
                        return r().createElement(
                            'div',
                            { className: 'ShopBanner_base_1c' },
                            r().createElement('div', { className: i()(ge, 'ShopBanner_line__top_0d') }),
                            r().createElement('div', { className: i()(ge, 'ShopBanner_line__bottom_6f') }),
                            r().createElement(
                                'div',
                                { className: 'ShopBanner_desc_5c' },
                                R.strings.fl_progress.banner.text(),
                            ),
                            r().createElement(
                                Ae.u5,
                                { onClick: e.shopClick, type: Ae.L$.main, mixClass: 'ShopBanner_button_9a' },
                                r().createElement(
                                    'div',
                                    { className: 'ShopBanner_label_0c' },
                                    ' ',
                                    R.strings.fl_progress.banner.button(),
                                ),
                            ),
                        );
                    });
                var Be = t(7044),
                    De = t(3618);
                const he = (0, n.memo)(({ duration: e }) => {
                    const u =
                        e >= 0
                            ? (t = (0, Be.f8)(e)).days > 0
                                ? (0, Z.WU)(R.strings.common.duration.days(), { days: t.days })
                                : t.hours > 0
                                  ? (0, Z.WU)(R.strings.common.duration.hours(), { hours: t.hours })
                                  : t.minutes > 0
                                    ? (0, Z.WU)(R.strings.common.duration.minutes(), { minutes: t.minutes })
                                    : (0, Z.WU)(R.strings.common.duration.seconds(), { seconds: t.seconds })
                            : R.strings.common.duration.unlimited();
                    var t;
                    return r().createElement('span', null, u);
                });
                let pe;
                !(function (e) {
                    (e.DayMonthNumeric = 'dayMonthNumeric'),
                        (e.DayMonthFull = 'dayMonthFull'),
                        (e.DayMonthFullTime = 'dayMonthFullTime'),
                        (e.DayMonthAbbreviated = 'dayMonthAbbreviated'),
                        (e.DayMonthAbbreviatedTime = 'dayMonthAbbreviatedTime'),
                        (e.ShortDate = 'shortDate'),
                        (e.ShortTime = 'ShortTime'),
                        (e.ShortDateTime = 'ShortDateTime'),
                        (e.FullDate = 'fullDate'),
                        (e.FullTime = 'fullTime'),
                        (e.FullDateTime = 'fullDateTime');
                })(pe || (pe = {}));
                const Ce = (0, n.memo)(({ isDateFormat: e, pendingDate: u, countdownSeconds: t }) =>
                        e
                            ? r().createElement(r().Fragment, null, (0, Be.UI)(u, pe.FullDate))
                            : r().createElement(he, { duration: t }),
                    ),
                    be = R.strings.fl_progress.subTitle,
                    fe = {
                        [o.c.Announce]: be.announce,
                        [o.c.Active]: be.active,
                        [o.c.Frozen]: be.active,
                        [o.c.Finished]: be.finished,
                    },
                    ve = (0, n.memo)(({ pendingDate: e, countdownSeconds: u, frontlineState: t }) => {
                        const a = (0, n.useMemo)(() => {
                            if (t === o.c.Finished) return { text: be.finished() };
                            {
                                const n = u > Be.IZ,
                                    a = fe[t];
                                return {
                                    text: n ? a.at() : a.countdown(),
                                    binding: {
                                        left: r().createElement(Ce, {
                                            countdownSeconds: u,
                                            pendingDate: e,
                                            isDateFormat: n,
                                        }),
                                    },
                                };
                            }
                        }, [e, u, t]);
                        return r().createElement('div', { className: 'SubTitle_base_48' }, r().createElement(De.w, a));
                    }),
                    we = R.strings.fl_progress.title;
                (0, s.Pi)(() => {
                    const e = d().model.root.get(),
                        u = e.level,
                        t = e.isMaxLevel,
                        n = e.pendingDate,
                        a = e.countdownSeconds,
                        s = e.frontlineState,
                        c = e.neededPoints,
                        E = e.currentPoints,
                        m = e.isShopBannerVisible,
                        _ = E > 0 || u > 1,
                        A = s === o.c.Active || s === o.c.Frozen,
                        g = s === o.c.Finished && _,
                        F = A || g;
                    return r().createElement(
                        'div',
                        { className: 'ProgressViewApp_base_3e' },
                        r().createElement(
                            l.V,
                            { text: t ? we.complete() : we.inProgress(), classMix: 'ProgressViewApp_pageTitle_5f' },
                            r().createElement(ve, {
                                pendingDate: n,
                                countdownSeconds: a,
                                frontlineState: s,
                                classMix: 'ProgressViewApp_subTitle_5e',
                            }),
                        ),
                        r().createElement(
                            'div',
                            {
                                className: i()(
                                    'ProgressViewApp_content_73',
                                    m && 'ProgressViewApp_content__withBanner_09',
                                ),
                            },
                            r().createElement(_e, { level: F ? u : 0, isGlowVisible: t }),
                            r().createElement(re, {
                                frontlineState: s,
                                isMaxLevel: t,
                                level: u,
                                neededPoints: c,
                                currentPoints: E,
                            }),
                        ),
                        m &&
                            r().createElement(
                                'div',
                                { className: 'ProgressViewApp_banner_b8' },
                                r().createElement(Fe, null),
                            ),
                    );
                }),
                    R.views.frontline.lobby.ProgressView('resId');
            },
            5989: (e, u, t) => {
                t.d(u, { I: () => A });
                var n = t(6483),
                    r = t.n(n),
                    a = t(6179),
                    i = t.n(a),
                    o = t(3415),
                    s = t(2862),
                    l = t(1558);
                const c = {
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
                        title: 'Reward_title_36',
                        timer: 'Reward_timer_d3',
                    },
                    d = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: n = s.h2.Big,
                        special: a,
                        value: d,
                        valueType: E,
                        title: m,
                        style: _,
                        className: A,
                        classNames: g,
                        tooltipArgs: F,
                        periodicIconTooltipArgs: B,
                    }) => {
                        const D = (0, l.c$)(n, a),
                            h = (0, l.i2)(a),
                            p = (0, l.m9)(d, E);
                        return i().createElement(
                            'div',
                            { className: r()(c.base, c[`base__${n}`], A), style: _ },
                            i().createElement(
                                o.l,
                                { tooltipArgs: F, className: c.tooltipWrapper },
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement(
                                        'div',
                                        { className: r()(c.image, null == g ? void 0 : g.image) },
                                        D &&
                                            i().createElement('div', {
                                                className: r()(c.highlight, null == g ? void 0 : g.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${D}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            i().createElement('div', {
                                                className: r()(c.icon, null == g ? void 0 : g.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        h &&
                                            i().createElement('div', {
                                                className: r()(c.overlay, null == g ? void 0 : g.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${h}_overlay)`,
                                                },
                                            }),
                                    ),
                                    p &&
                                        i().createElement(
                                            'div',
                                            {
                                                className: r()(
                                                    c.info,
                                                    c[`info__${e}`],
                                                    E === s.$h.MULTI && c.info__multi,
                                                    null == g ? void 0 : g.info,
                                                ),
                                            },
                                            p,
                                        ),
                                    m && i().createElement('div', { className: c.title }, m),
                                ),
                            ),
                            t &&
                                i().createElement(
                                    o.l,
                                    { tooltipArgs: B },
                                    i().createElement('div', {
                                        className: r()(c.timer, null == g ? void 0 : g.periodicIcon),
                                    }),
                                ),
                        );
                    };
                var E = t(405);
                const m = ['item', 'parentScreen', 'itemState', 'info', 'tooltipArgs'];
                function _() {
                    return (
                        (_ = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        _.apply(null, arguments)
                    );
                }
                const A = (0, a.memo)((e) => {
                    let u = e.item,
                        t = e.parentScreen,
                        n = e.itemState,
                        r = e.info,
                        o = e.tooltipArgs,
                        s = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, m);
                    const l = (0, E.Y)(u, t, n, r),
                        c = l[0],
                        A = l[1],
                        g = (0, a.useMemo)(() => Object.assign({}, o, { onMouseEnter: c, onMouseLeave: A }), [o, c, A]);
                    return i().createElement(d, _({}, s, { tooltipArgs: g }));
                });
            },
            8154: (e, u, t) => {
                t.d(u, { l: () => l });
                var n = t(6373),
                    r = t(6179),
                    a = t.n(r),
                    i = t(405);
                const o = ['children', 'item', 'parentScreen', 'itemState', 'info'];
                function s() {
                    return (
                        (s = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        s.apply(null, arguments)
                    );
                }
                const l = (0, r.memo)((e) => {
                    let u = e.children,
                        t = e.item,
                        r = e.parentScreen,
                        l = e.itemState,
                        c = e.info,
                        d = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, o);
                    const E = (0, i.Y)(t, r, l, c),
                        m = E[0],
                        _ = E[1];
                    return a().createElement(n.i, s({}, d, { onMouseEnter: m, onMouseLeave: _ }), u);
                });
            },
            3854: (e, u, t) => {
                t.d(u, { V: () => s });
                var n = t(6483),
                    r = t.n(n),
                    a = t(6179),
                    i = t.n(a),
                    o = t(5577);
                const s = (0, a.memo)(({ text: e, children: u, classMix: t }) =>
                    i().createElement(
                        'div',
                        { className: r()(o.Z.base, t) },
                        i().createElement('span', { className: o.Z.title }, e),
                        u,
                    ),
                );
            },
            4959: (e, u, t) => {
                let n;
                t.d(u, { c: () => n }),
                    (function (e) {
                        (e.Announce = 'announce'),
                            (e.Active = 'active'),
                            (e.Finished = 'finished'),
                            (e.Frozen = 'frozen');
                    })(n || (n = {}));
            },
            6880: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
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
            },
            5287: () => {},
            8055: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    base: 'ExtendedText_base_71',
                    base__zeroPadding: 'ExtendedText_base__zeroPadding_25',
                    base__isTruncationAvailable: 'ExtendedText_base__isTruncationAvailable_5b',
                    truncated: 'ExtendedText_truncated_97',
                    truncated__hide: 'ExtendedText_truncated__hide_31',
                    unTruncated: 'ExtendedText_unTruncated_b8',
                    tooltip: 'ExtendedText_tooltip_91',
                    'tooltip__justify-flex-start': 'ExtendedText_tooltip__justify-flex-start_00',
                    'tooltip__justify-center': 'ExtendedText_tooltip__justify-center_08',
                    'tooltip__justify-flex-end': 'ExtendedText_tooltip__justify-flex-end_90',
                    'tooltip__align-flex-start': 'ExtendedText_tooltip__align-flex-start_40',
                    'tooltip__align-center': 'ExtendedText_tooltip__align-center_54',
                    'tooltip__align-flex-end': 'ExtendedText_tooltip__align-flex-end_d2',
                };
            },
            9627: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    blackReal: 'colors_blackReal_fc',
                    whiteReal: 'colors_whiteReal_31',
                    white: 'colors_white_45',
                    whiteOrange: 'colors_whiteOrange_81',
                    whiteSpanish: 'colors_whiteSpanish_c3',
                    par: 'colors_par_5b',
                    parSecondary: 'colors_parSecondary_fd',
                    parTertiary: 'colors_parTertiary_97',
                    red: 'colors_red_79',
                    redDark: 'colors_redDark_73',
                    yellow: 'colors_yellow_76',
                    orange: 'colors_orange_cd',
                    cream: 'colors_cream_0f',
                    brown: 'colors_brown_82',
                    greenBright: 'colors_greenBright_68',
                    green: 'colors_green_fa',
                    greenDark: 'colors_greenDark_a9',
                    blueBooster: 'colors_blueBooster_26',
                    blueTeamkiller: 'colors_blueTeamkiller_86',
                    cred: 'colors_cred_35',
                    gold: 'colors_gold_c3',
                    bond: 'colors_bond_ce',
                    prom: 'colors_prom_83',
                };
            },
            7629: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    noBreakWrapper: 'renderers_noBreakWrapper_10',
                    lineBreak: 'renderers_lineBreak_b5',
                    newLine: 'renderers_newLine_bd',
                    word: 'renderers_word_f3',
                };
            },
            5577: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = { base: 'PageTitle_base_ef', title: 'PageTitle_title_33' };
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var r = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, n] = deferred[s], a = !0, i = 0; i < u.length; i++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [u, t, n];
        }),
        (__webpack_require__.n = (e) => {
            var u = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(u, { a: u }), u;
        }),
        (__webpack_require__.d = (e, u) => {
            for (var t in u)
                __webpack_require__.o(u, t) &&
                    !__webpack_require__.o(e, t) &&
                    Object.defineProperty(e, t, { enumerable: !0, get: u[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (e, u) => Object.prototype.hasOwnProperty.call(e, u)),
        (__webpack_require__.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 964),
        (() => {
            var e = { 964: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, i, o] = t,
                        s = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); s < a.length; s++)
                        (r = a[s]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(4389));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
