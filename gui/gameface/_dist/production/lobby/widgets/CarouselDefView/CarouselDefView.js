(() => {
    'use strict';
    var __webpack_modules__ = {
            3457: (e, t, u) => {
                u.d(t, { u5: () => d });
                var n = u(6483),
                    r = u.n(n),
                    a = u(7727),
                    o = u(6179),
                    s = u.n(o),
                    i = u(6880),
                    l = u(2106);
                const c = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: n,
                    disabled: c,
                    mixClass: d,
                    soundHover: _,
                    soundClick: m,
                    onMouseEnter: E,
                    onMouseMove: g,
                    onMouseDown: h,
                    onMouseUp: p,
                    onMouseLeave: A,
                    onClick: F,
                }) => {
                    const v = (0, o.useRef)(null),
                        f = (0, o.useState)(u),
                        C = f[0],
                        b = f[1],
                        B = (0, o.useState)(!1),
                        D = B[0],
                        w = B[1];
                    return (
                        (0, o.useEffect)(() => {
                            function e(e) {
                                C && null !== v.current && !v.current.contains(e.target) && b(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [C]),
                        (0, o.useEffect)(() => {
                            b(u);
                        }, [u]),
                        s().createElement(
                            'div',
                            {
                                ref: v,
                                className: r()(
                                    i.Z.base,
                                    i.Z[`base__${n}`],
                                    c && i.Z.base__disabled,
                                    t && i.Z[`base__${t}`],
                                    C && i.Z.base__focus,
                                    D && i.Z.base__highlightActive,
                                    d,
                                ),
                                onMouseEnter: function (e) {
                                    c || (null !== _ && (0, a.G)(_), E && E(e));
                                },
                                onMouseMove: function (e) {
                                    g && g(e);
                                },
                                onMouseUp: function (e) {
                                    c || (p && p(e), w(!1));
                                },
                                onMouseDown: function (e) {
                                    c ||
                                        (null !== m && (0, a.G)(m),
                                        h && h(e),
                                        u && (c || (v.current && (v.current.focus(), b(!0)))),
                                        w(!0));
                                },
                                onMouseLeave: function (e) {
                                    c || (A && A(e), w(!1));
                                },
                                onClick: function (e) {
                                    c || (F && F(e));
                                },
                            },
                            n !== l.L.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: i.Z.back }),
                                    s().createElement('span', { className: i.Z.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: r()(i.Z.state, i.Z.state__default) },
                                s().createElement('span', { className: i.Z.stateDisabled }),
                                s().createElement('span', { className: i.Z.stateHighlightHover }),
                                s().createElement('span', { className: i.Z.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: i.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const d = c;
            },
            2106: (e, t, u) => {
                let n, r;
                u.d(t, { L: () => n, q: () => r }),
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
            2372: (e, t, u) => {
                var n = u(6179),
                    r = u.n(n),
                    a = u(9916);
                class o extends r().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? a.B3.GOLD : a.B3.INTEGRAL;
                        const t = a.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                o.defaultProps = { format: 'integral' };
            },
            3495: (e, t, u) => {
                u.d(t, { Y: () => d });
                var n = u(3138),
                    r = u(6179),
                    a = u(1043),
                    o = u(5262);
                const s = n.O.client.getSize('rem'),
                    i = s.width,
                    l = s.height,
                    c = Object.assign({ width: i, height: l }, (0, o.T)(i, l, a.j)),
                    d = (0, r.createContext)(c);
            },
            1039: (e, t, u) => {
                u(3138), u(6536), u(6179), u(3495), u(1043), u(5262);
            },
            6010: (e, t, u) => {
                var n = u(6179),
                    r = u(7382),
                    a = u(3495);
                const o = ['children'],
                    s = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        u[n] = e[n];
                                    }
                                return u;
                            })(e, o);
                        const s = (0, n.useContext)(a.Y),
                            i = s.extraLarge,
                            l = s.large,
                            c = s.medium,
                            d = s.small,
                            _ = s.extraSmall,
                            m = s.extraLargeWidth,
                            E = s.largeWidth,
                            g = s.mediumWidth,
                            h = s.smallWidth,
                            p = s.extraSmallWidth,
                            A = s.extraLargeHeight,
                            F = s.largeHeight,
                            v = s.mediumHeight,
                            f = s.smallHeight,
                            C = s.extraSmallHeight,
                            b = { extraLarge: A, large: F, medium: v, small: f, extraSmall: C };
                        if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                            if (u.extraLarge && i) return t;
                            if (u.large && l) return t;
                            if (u.medium && c) return t;
                            if (u.small && d) return t;
                            if (u.extraSmall && _) return t;
                        } else {
                            if (u.extraLargeWidth && m) return (0, r.H)(t, u, b);
                            if (u.largeWidth && E) return (0, r.H)(t, u, b);
                            if (u.mediumWidth && g) return (0, r.H)(t, u, b);
                            if (u.smallWidth && h) return (0, r.H)(t, u, b);
                            if (u.extraSmallWidth && p) return (0, r.H)(t, u, b);
                            if (
                                !(
                                    u.extraLargeWidth ||
                                    u.largeWidth ||
                                    u.mediumWidth ||
                                    u.smallWidth ||
                                    u.extraSmallWidth
                                )
                            ) {
                                if (u.extraLargeHeight && A) return t;
                                if (u.largeHeight && F) return t;
                                if (u.mediumHeight && v) return t;
                                if (u.smallHeight && f) return t;
                                if (u.extraSmallHeight && C) return t;
                            }
                        }
                        return null;
                    };
                (s.defaultProps = {
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
                    (0, n.memo)(s);
            },
            7382: (e, t, u) => {
                u.d(t, { H: () => n });
                const n = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, u) => {
                u.d(t, { YN: () => n.Y }), u(6010), u(1039);
                var n = u(3495);
            },
            1043: (e, t, u) => {
                u.d(t, { j: () => n });
                const n = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, u) => {
                var n;
                function r(e, t, u) {
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
                        })(e, u),
                        r = (function (e, t) {
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
                        })(t, u),
                        a = Math.min(n, r);
                    return {
                        extraLarge: a === u.extraLarge.weight,
                        large: a === u.large.weight,
                        medium: a === u.medium.weight,
                        small: a === u.small.weight,
                        extraSmall: a === u.extraSmall.weight,
                        extraLargeWidth: n === u.extraLarge.weight,
                        largeWidth: n === u.large.weight,
                        mediumWidth: n === u.medium.weight,
                        smallWidth: n === u.small.weight,
                        extraSmallWidth: n === u.extraSmall.weight,
                        extraLargeHeight: r === u.extraLarge.weight,
                        largeHeight: r === u.large.weight,
                        mediumHeight: r === u.medium.weight,
                        smallHeight: r === u.small.weight,
                        extraSmallHeight: r === u.extraSmall.weight,
                    };
                }
                u.d(t, { T: () => r }),
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
            2862: (e, t, u) => {
                let n, r, a, o, s, i, l, c;
                u.d(t, { E4: () => n, h2: () => a }),
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
                    })(o || (o = {})),
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
                    })(s || (s = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
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
                    })(l || (l = {})),
                    (function (e) {
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(c || (c = {}));
            },
            729: (e, t, u) => {
                u(2372), u(6179);
                var n = u(2862);
                n.E4.Items,
                    n.E4.Equipment,
                    n.E4.Xp,
                    n.E4.XpFactor,
                    n.E4.Blueprints,
                    n.E4.BlueprintsAny,
                    n.E4.Goodies,
                    n.E4.Berths,
                    n.E4.Slots,
                    n.E4.Tokens,
                    n.E4.CrewSkins,
                    n.E4.CrewBooks,
                    n.E4.Customizations,
                    n.E4.CreditsFactor,
                    n.E4.TankmenXp,
                    n.E4.TankmenXpFactor,
                    n.E4.FreeXpFactor,
                    n.E4.BattleToken,
                    n.E4.PremiumUniversal,
                    n.E4.NaturalCover,
                    n.E4.BpCoin,
                    n.E4.BattlePassSelectToken,
                    n.E4.BattlaPassFinalAchievement,
                    n.E4.BattleBadge,
                    n.E4.BonusX5,
                    n.E4.CrewBonusX3,
                    n.E4.NewYearInvoice,
                    n.E4.EpicSelectToken,
                    n.E4.Comp7TokenWeeklyReward,
                    n.E4.DeluxeGift,
                    n.E4.BattleBoosterGift,
                    n.E4.OptionalDevice,
                    n.E4.Gold,
                    n.E4.Credits,
                    n.E4.Crystal,
                    n.E4.FreeXp,
                    n.E4.BattlePassPoints,
                    n.E4.EquipCoin,
                    n.E4.PremiumPlus,
                    n.E4.Premium,
                    n.h2.Small,
                    n.h2.Big;
            },
            2773: (e, t, u) => {
                u.d(t, { $Q: () => v });
                var n = u(6483),
                    r = u.n(n),
                    a = u(7515),
                    o = u(1856),
                    s = u(3138),
                    i = u(3815),
                    l = u(560),
                    c = u(7727),
                    d = u(6179),
                    _ = u.n(d),
                    m = u(6358),
                    E = u(372);
                const g = 'disable',
                    h = { pending: !1, offset: 0 },
                    p = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    A = () => {},
                    F = (e, t) => Math.max(20, e.offsetWidth * t),
                    v = (0, d.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = p, onDrag: n = A }) => {
                        const v = (0, d.useRef)(null),
                            f = (0, d.useRef)(null),
                            C = (0, d.useRef)(null),
                            b = (0, d.useRef)(null),
                            B = (0, d.useRef)(null),
                            D = e.stepTimeout || 100,
                            w = (0, d.useState)(h),
                            y = w[0],
                            k = w[1],
                            S = (0, d.useCallback)(
                                (e) => {
                                    k(e),
                                        B.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: B.current });
                                },
                                [n],
                            ),
                            x = () => {
                                const t = b.current,
                                    u = B.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && u && r)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    i = (0, a.u)(0, 1, o / (r - n)),
                                    l = (t.offsetWidth - F(t, s)) * i;
                                (u.style.transform = `translateX(${0 | l}px)`),
                                    ((e) => {
                                        if (f.current && C.current && b.current && B.current) {
                                            if (0 === e)
                                                return f.current.classList.add(g), void C.current.classList.remove(g);
                                            if (
                                                ((t = b.current),
                                                (u = B.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return f.current.classList.remove(g), void C.current.classList.add(g);
                                            var t, u;
                                            f.current.classList.remove(g), C.current.classList.remove(g);
                                        }
                                    })(l);
                            },
                            N = (0, i.z)(() => {
                                (() => {
                                    const t = B.current,
                                        u = b.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && n && u)) return;
                                    const a = Math.min(1, n / r);
                                    (t.style.width = `${F(u, a)}px`),
                                        (t.style.display = 'flex'),
                                        v.current &&
                                            (1 === a
                                                ? v.current.classList.add(E.Z.base__nonActive)
                                                : v.current.classList.remove(E.Z.base__nonActive));
                                })(),
                                    x();
                            });
                        (0, d.useEffect)(() => (0, o.v)(N)),
                            (0, d.useEffect)(
                                () =>
                                    (0, o.v)(() => {
                                        const t = () => {
                                            x();
                                        };
                                        let u = A;
                                        const n = () => {
                                            u(), (u = (0, o.v)(N));
                                        };
                                        return (
                                            e.events.on('recalculateContent', N),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                u(),
                                                    e.events.off('recalculateContent', N),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, d.useEffect)(() => {
                                if (!y.pending) return;
                                const t = s.O.client.events.mouse.move(([t, u]) => {
                                        var r;
                                        const a = e.contentRef.current,
                                            o = e.wrapperRef.current;
                                        if (!a || !o) return;
                                        const s = b.current,
                                            i = B.current;
                                        if (!s || !i) return;
                                        if ('inside' === u && t.clientX < 0) return;
                                        const l = t.clientX - y.offset - s.getBoundingClientRect().x,
                                            c = (l / s.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: c });
                                    }),
                                    u = s.O.client.events.mouse.up(() => {
                                        t(), S(h);
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, y.offset, y.pending, n, S]);
                        const T = (0, l.B)((t) => e.applyStepTo(t), D, [e]),
                            P = T[0],
                            R = T[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', R, !0),
                                () => document.removeEventListener('mouseup', R, !0)
                            ),
                            [R],
                        );
                        const L = (e) => {
                            e.target.classList.contains(g) || (0, c.G)('highlight');
                        };
                        return _().createElement(
                            'div',
                            { className: r()(E.Z.base, t.base), ref: v, onWheel: e.handleMouseWheel },
                            _().createElement('div', {
                                className: r()(E.Z.leftButton, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(g) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), P(m.Nm.Next));
                                },
                                onMouseUp: R,
                                ref: f,
                                onMouseEnter: L,
                            }),
                            _().createElement(
                                'div',
                                {
                                    className: r()(E.Z.track, t.track),
                                    onMouseDown: (t) => {
                                        const n = B.current;
                                        n &&
                                            0 === t.button &&
                                            ((0, c.G)('play'),
                                            t.target === n
                                                ? S({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x })
                                                : ((t) => {
                                                      const n = B.current,
                                                          r = e.contentRef.current;
                                                      if (!n || !r) return;
                                                      const a = u(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + a * t);
                                                  })(t.screenX > n.getBoundingClientRect().x ? m.Nm.Prev : m.Nm.Next));
                                    },
                                    ref: b,
                                    onMouseEnter: L,
                                },
                                _().createElement('div', { ref: B, className: r()(E.Z.thumb, t.thumb) }),
                                _().createElement('div', { className: r()(E.Z.rail, t.rail) }),
                            ),
                            _().createElement('div', {
                                className: r()(E.Z.rightButton, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(g) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), P(m.Nm.Prev));
                                },
                                onMouseUp: R,
                                ref: C,
                                onMouseEnter: L,
                            }),
                        );
                    });
            },
            2840: (e, t, u) => {
                u.d(t, { K: () => c });
                var n = u(6483),
                    r = u.n(n),
                    a = u(6179),
                    o = u.n(a),
                    s = u(2773),
                    i = u(7950),
                    l = u(4682);
                const c = ({
                    children: e,
                    api: t,
                    className: u,
                    barClassNames: n,
                    areaClassName: c,
                    classNames: d,
                    scrollClassName: _,
                    getStepByRailClick: m,
                    onDrag: E,
                }) => {
                    const g = (0, a.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: r()(l.Z.base, e.base) });
                        }, [n]),
                        h = (0, a.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return o().createElement(
                        'div',
                        { className: r()(l.Z.defaultScroll, u), onWheel: t.handleMouseWheel },
                        o().createElement(
                            'div',
                            { className: r()(l.Z.defaultScrollArea, c) },
                            o().createElement(i.Area, { className: _, api: h, classNames: d }, e),
                        ),
                        o().createElement(s.$Q, { getStepByRailClick: m, api: t, onDrag: E, classNames: g }),
                    );
                };
            },
            7950: (e, t, u) => {
                u.r(t),
                    u.d(t, {
                        Area: () => _,
                        Bar: () => i.$Q,
                        DefaultScroll: () => l.K,
                        Direction: () => d.Nm,
                        defaultSettings: () => d.he,
                        useHorizontalScrollApi: () => d.T5,
                    });
                var n = u(6483),
                    r = u.n(n),
                    a = u(1856),
                    o = u(6179),
                    s = u.n(o),
                    i = u(2773),
                    l = u(2840),
                    c = u(4682),
                    d = u(6358);
                const _ = ({ api: e, className: t, classNames: u, children: n }) => (
                    (0, o.useEffect)(() => (0, a.v)(e.recalculateContent)),
                    s().createElement(
                        'div',
                        { className: r()(c.Z.base, t) },
                        s().createElement(
                            'div',
                            {
                                className: r()(c.Z.wrapper, null == u ? void 0 : u.wrapper),
                                onWheel: e.handleMouseWheel,
                                ref: e.wrapperRef,
                            },
                            s().createElement(
                                'div',
                                { className: r()(c.Z.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                n,
                            ),
                        ),
                    )
                );
                (_.Bar = i.$Q), (_.Default = l.K);
            },
            6358: (e, t, u) => {
                u.d(t, { Nm: () => n.Nm, T5: () => r, he: () => n.he });
                var n = u(7308);
                const r = (0, n.EO)({
                    getBounds: (e) => {
                        var t, u;
                        return [
                            0,
                            e.offsetWidth -
                                (null != (t = null == (u = e.parentElement) ? void 0 : u.offsetWidth) ? t : 0),
                        ];
                    },
                    getContainerSize: (e) => e.offsetWidth,
                    getWrapperSize: (e) => e.offsetWidth,
                    setScrollPosition: (e, t) => {
                        e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                    },
                    getDirection: (e) => (e.deltaY > 1 ? n.Nm.Next : n.Nm.Prev),
                    triggerMouseMoveOnUpdate: !0,
                });
            },
            6225: (e, t, u) => {
                u.d(t, { $Q: () => f });
                var n = u(6483),
                    r = u.n(n),
                    a = u(7515),
                    o = u(1856),
                    s = u(3138),
                    i = u(3815),
                    l = u(560),
                    c = u(7727),
                    d = u(6179),
                    _ = u.n(d),
                    m = u(7701),
                    E = u(9168);
                const g = 'disable',
                    h = () => {},
                    p = { pending: !1, offset: 0 },
                    A = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    F = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    v = (e, t) => Math.max(20, e.offsetHeight * t),
                    f = (0, d.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = A, onDrag: n = h }) => {
                        const f = (0, d.useRef)(null),
                            C = (0, d.useRef)(null),
                            b = (0, d.useRef)(null),
                            B = (0, d.useRef)(null),
                            D = (0, d.useRef)(null),
                            w = e.stepTimeout || 100,
                            y = (0, d.useState)(p),
                            k = y[0],
                            S = y[1],
                            x = (0, d.useCallback)(
                                (e) => {
                                    S(e),
                                        D.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: D.current });
                                },
                                [n],
                            ),
                            N = (0, i.z)(() => {
                                const t = D.current,
                                    u = B.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && t && u)) return;
                                const a = Math.min(1, n / r);
                                return (
                                    (t.style.height = `${v(u, a)}px`),
                                    (t.style.display = 'flex'),
                                    f.current &&
                                        (1 === a
                                            ? f.current.classList.add(E.Z.base__nonActive)
                                            : f.current.classList.remove(E.Z.base__nonActive)),
                                    a
                                );
                            }),
                            T = (0, i.z)(() => {
                                const t = B.current,
                                    u = D.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && u && r)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    i = (0, a.u)(0, 1, o / (r - n)),
                                    l = (t.offsetHeight - v(t, s)) * i;
                                (u.style.transform = `translateY(${0 | l}px)`),
                                    ((e) => {
                                        if (C.current && b.current && B.current && D.current) {
                                            if (0 === Math.round(e))
                                                return C.current.classList.add(g), void b.current.classList.remove(g);
                                            if (
                                                ((t = B.current),
                                                (u = D.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return C.current.classList.remove(g), void b.current.classList.add(g);
                                            var t, u;
                                            C.current.classList.remove(g), b.current.classList.remove(g);
                                        }
                                    })(l);
                            }),
                            P = (0, i.z)(() => {
                                F(e, () => {
                                    N(), T();
                                });
                            });
                        (0, d.useEffect)(() => (0, o.v)(P)),
                            (0, d.useEffect)(() => {
                                const t = () => {
                                    F(e, () => {
                                        T();
                                    });
                                };
                                let u = h;
                                const n = () => {
                                    u(), (u = (0, o.v)(P));
                                };
                                return (
                                    e.events.on('recalculateContent', P),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        u(),
                                            e.events.off('recalculateContent', P),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, d.useEffect)(() => {
                                if (!k.pending) return;
                                const t = s.O.client.events.mouse.up(() => {
                                        x(p);
                                    }),
                                    u = s.O.client.events.mouse.move(([t]) => {
                                        F(e, (u) => {
                                            const r = B.current,
                                                a = D.current,
                                                o = e.getContainerSize();
                                            if (!r || !a || !o) return;
                                            const s = t.screenY - k.offset - r.getBoundingClientRect().y,
                                                i = (s / r.offsetHeight) * o;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: s, contentOffset: i });
                                        });
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, k.offset, k.pending, n, x]);
                        const R = (0, l.B)((t) => e.applyStepTo(t), w, [e]),
                            L = R[0],
                            O = R[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', O, !0),
                                () => document.removeEventListener('mouseup', O, !0)
                            ),
                            [O],
                        );
                        const M = (e) => {
                            e.target.classList.contains(g) || (0, c.G)('highlight');
                        };
                        return _().createElement(
                            'div',
                            { className: r()(E.Z.base, t.base), ref: f, onWheel: e.handleMouseWheel },
                            _().createElement('div', {
                                className: r()(E.Z.topButton, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(g) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), L(m.Nm.Next));
                                },
                                ref: C,
                                onMouseEnter: M,
                            }),
                            _().createElement(
                                'div',
                                {
                                    className: r()(E.Z.track, t.track),
                                    onMouseDown: (t) => {
                                        const n = D.current;
                                        var r;
                                        n &&
                                            0 === t.button &&
                                            ((0, c.G)('play'),
                                            t.target === n
                                                ? x({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y })
                                                : ((r =
                                                      t.screenY > n.getBoundingClientRect().y ? m.Nm.Prev : m.Nm.Next),
                                                  D.current &&
                                                      F(e, (t) => {
                                                          if (!t) return;
                                                          const n = u(e),
                                                              a = e.clampPosition(t, t.scrollTop + n * r);
                                                          e.applyScroll(a);
                                                      })));
                                    },
                                    ref: B,
                                    onMouseEnter: M,
                                },
                                _().createElement('div', { ref: D, className: r()(E.Z.thumb, t.thumb) }),
                                _().createElement('div', { className: r()(E.Z.rail, t.rail) }),
                            ),
                            _().createElement('div', {
                                className: r()(E.Z.bottomButton, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(g) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), L(m.Nm.Prev));
                                },
                                onMouseUp: O,
                                ref: b,
                                onMouseEnter: M,
                            }),
                        );
                    });
            },
            1158: (e, t, u) => {
                u.d(t, { K: () => c });
                var n = u(6483),
                    r = u.n(n),
                    a = u(6179),
                    o = u.n(a),
                    s = u(6225),
                    i = u(9605),
                    l = u(5636);
                const c = ({
                    children: e,
                    api: t,
                    className: u,
                    barClassNames: n,
                    areaClassName: c,
                    scrollClassName: d,
                    scrollClassNames: _,
                    getStepByRailClick: m,
                    onDrag: E,
                }) => {
                    const g = (0, a.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: r()(l.Z.base, e.base) });
                        }, [n]),
                        h = (0, a.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return o().createElement(
                        'div',
                        { className: r()(l.Z.defaultScroll, u), onWheel: t.handleMouseWheel },
                        o().createElement(
                            'div',
                            { className: r()(l.Z.area, c) },
                            o().createElement(i.Area, { className: d, classNames: _, api: h }, e),
                        ),
                        o().createElement(s.$Q, { getStepByRailClick: m, api: t, onDrag: E, classNames: g }),
                    );
                };
            },
            9605: (e, t, u) => {
                u.r(t),
                    u.d(t, { Area: () => _, Bar: () => i.$Q, Default: () => l.K, useVerticalScrollApi: () => c.c4 });
                var n = u(6483),
                    r = u.n(n),
                    a = u(1856),
                    o = u(6179),
                    s = u.n(o),
                    i = u(6225),
                    l = u(1158),
                    c = u(7701),
                    d = u(5636);
                const _ = ({ className: e, classNames: t, children: u, api: n }) => (
                    (0, o.useEffect)(() => (0, a.v)(n.recalculateContent)),
                    s().createElement(
                        'div',
                        { className: r()(d.Z.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                        s().createElement(
                            'div',
                            { className: r()(d.Z.content, null == t ? void 0 : t.content), ref: n.contentRef },
                            u,
                        ),
                    )
                );
                _.Default = l.K;
            },
            7701: (e, t, u) => {
                u.d(t, { Nm: () => n.Nm, c4: () => r });
                var n = u(7308);
                const r = (0, n.EO)({
                    getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                    getContainerSize: (e) => e.scrollHeight,
                    getWrapperSize: (e) => e.offsetHeight,
                    setScrollPosition: (e, t) => {
                        e.scrollTop = t.value.scrollPosition;
                    },
                    getDirection: (e) => (e.deltaY > 1 ? n.Nm.Next : n.Nm.Prev),
                });
            },
            7308: (e, t, u) => {
                u.d(t, { EO: () => E, Nm: () => _, he: () => m });
                var n = u(7515),
                    r = u(1856),
                    a = u(3138),
                    o = u(4532),
                    s = u(9653),
                    i = u(3815),
                    l = u(4489),
                    c = u(6179),
                    d = u(7030);
                let _;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(_ || (_ = {}));
                const m = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    E = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: _,
                        getWrapperSize: E,
                        triggerMouseMoveOnUpdate: g = !1,
                    }) => {
                        const h = (e, u) => {
                            const r = t(e),
                                a = r[0],
                                o = r[1];
                            return o <= a ? 0 : (0, n.u)(a, o, u);
                        };
                        return (n = {}) => {
                            const p = n.settings,
                                A = void 0 === p ? m : p,
                                F = (0, c.useRef)(null),
                                v = (0, c.useRef)(null),
                                f = (0, s.q)(),
                                C = (0, l.f)(
                                    () => {
                                        a.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                b = (0, d.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = F.current;
                                        t && (u(t, e), f.trigger('change', e), g && C());
                                    },
                                    onRest: (e) => f.trigger('rest', e),
                                    onStart: (e) => f.trigger('start', e),
                                    onPause: (e) => f.trigger('pause', e),
                                })),
                                B = b[0],
                                D = b[1],
                                w = (0, c.useCallback)(
                                    (e, t, u) => {
                                        var n;
                                        const r = B.scrollPosition.get(),
                                            a = (null != (n = B.scrollPosition.goal) ? n : 0) - r;
                                        return h(e, t * u + a + r);
                                    },
                                    [B.scrollPosition],
                                ),
                                y = (0, c.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const n = F.current;
                                        n &&
                                            D.start({
                                                scrollPosition: h(n, e),
                                                immediate: t,
                                                reset: u,
                                                config: A.animationConfig,
                                                from: { scrollPosition: h(n, B.scrollPosition.get()) },
                                            });
                                    },
                                    [D, A.animationConfig, B.scrollPosition],
                                ),
                                k = (0, c.useCallback)(
                                    (e) => {
                                        const t = F.current,
                                            u = v.current;
                                        if (!t || !u) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return E(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, A.step),
                                            r = w(t, e, n);
                                        y(r);
                                    },
                                    [y, w, A.step],
                                ),
                                S = (0, c.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && k(_(e)),
                                            F.current && f.trigger('mouseWheel', e, B.scrollPosition, t(F.current));
                                    },
                                    [B.scrollPosition, k, f],
                                ),
                                x = (0, o.M)(
                                    () =>
                                        (0, r.v)(() => {
                                            const e = F.current;
                                            e &&
                                                (y(h(e, B.scrollPosition.goal), { immediate: !0 }),
                                                f.trigger('resizeHandled'));
                                        }),
                                    [y, B.scrollPosition.goal],
                                ),
                                N = (0, i.z)(() => {
                                    const e = F.current;
                                    if (!e) return;
                                    const t = h(e, B.scrollPosition.goal);
                                    t !== B.scrollPosition.goal && y(t, { immediate: !0 }),
                                        f.trigger('recalculateContent');
                                });
                            return (
                                (0, c.useEffect)(
                                    () => (
                                        window.addEventListener('resize', x),
                                        () => {
                                            window.removeEventListener('resize', x);
                                        }
                                    ),
                                    [x],
                                ),
                                (0, c.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (v.current ? E(v.current) : void 0),
                                        getContainerSize: () => (F.current ? e(F.current) : void 0),
                                        getBounds: () =>
                                            F.current
                                                ? t(F.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: A.step.clampedArrowStepTimeout,
                                        clampPosition: h,
                                        handleMouseWheel: S,
                                        applyScroll: y,
                                        applyStepTo: k,
                                        contentRef: F,
                                        wrapperRef: v,
                                        scrollPosition: D,
                                        animationScroll: B,
                                        recalculateContent: N,
                                        events: { on: f.on, off: f.off },
                                    }),
                                    [B.scrollPosition, y, k, f.off, f.on, N, S, D, A.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    };
            },
            794: (e, t, u) => {
                u.d(t, { X: () => r });
                var n = u(7950);
                const r = { Vertical: u(9605), Horizontal: n };
            },
            6349: (e, t, u) => {
                u.d(t, { l: () => _ });
                var n = u(6483),
                    r = u.n(n),
                    a = u(6373),
                    o = u(1856),
                    s = u(6179),
                    i = u.n(s),
                    l = u(1699);
                const c = ['content', 'classMix', 'className'];
                function d() {
                    return (
                        (d = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        d.apply(null, arguments)
                    );
                }
                const _ = (e) => {
                    let t = e.content,
                        u = e.classMix,
                        n = e.className,
                        _ = (function (e, t) {
                            if (null == e) return {};
                            var u = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    u[n] = e[n];
                                }
                            return u;
                        })(e, c);
                    const m = (0, s.useRef)(null),
                        E = (0, s.useState)(!0),
                        g = E[0],
                        h = E[1];
                    return (
                        (0, s.useEffect)(() =>
                            (0, o.v)(() => {
                                const e = m.current;
                                e && e.offsetWidth >= e.scrollWidth && h(!1);
                            }),
                        ),
                        i().createElement(
                            a.i,
                            { isEnabled: g, body: t },
                            i().createElement('div', d({}, _, { ref: m, className: r()(l.Z.base, n, u) }), t),
                        )
                    );
                };
            },
            7078: (e, t, u) => {
                u.d(t, { t: () => i });
                var n = u(6179),
                    r = u.n(n),
                    a = u(2056);
                const o = ['children'];
                function s() {
                    return (
                        (s = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        s.apply(null, arguments)
                    );
                }
                const i = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    u[n] = e[n];
                                }
                            return u;
                        })(e, o);
                    return r().createElement(
                        a.u,
                        s(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            u,
                        ),
                        t,
                    );
                };
            },
            3415: (e, t, u) => {
                u.d(t, { l: () => l });
                var n = u(6179),
                    r = u.n(n),
                    a = u(7078),
                    o = u(6373),
                    s = u(2056);
                function i() {
                    return (
                        (i = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        i.apply(null, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = r().createElement('div', { className: u }, e);
                    if (t.header || t.body) return r().createElement(o.i, t, n);
                    const l = t.contentId;
                    return l ? r().createElement(s.u, i({}, t, { contentId: l }), n) : r().createElement(a.t, t, n);
                };
            },
            6373: (e, t, u) => {
                u.d(t, { i: () => l });
                var n = u(2056),
                    r = u(6179),
                    a = u.n(r);
                const o = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function s() {
                    return (
                        (s = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        s.apply(null, arguments)
                    );
                }
                const i = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            u = e.body,
                            l = e.header,
                            c = e.note,
                            d = e.alert,
                            _ = e.args,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        u[n] = e[n];
                                    }
                                return u;
                            })(e, o);
                        const E = (0, r.useMemo)(() => {
                            const e = Object.assign({}, _, { body: u, header: l, note: c, alert: d });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [d, u, l, c, _]);
                        return a().createElement(
                            n.u,
                            s(
                                {
                                    contentId:
                                        ((g = null == _ ? void 0 : _.hasHtmlContent),
                                        g ? i.SimpleTooltipHtmlContent('resId') : i.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                m,
                            ),
                            t,
                        );
                        var g;
                    };
            },
            2056: (e, t, u) => {
                u.d(t, { u: () => l });
                var n = u(7902),
                    r = u(9916),
                    a = u(6179);
                const o = [
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
                function s(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const u = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                u.number = t;
                                break;
                            case 'boolean':
                                u.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                u.string = t.toString();
                        }
                        return u;
                    });
                }
                const i = (e, t, u = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: r.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                u,
                            ),
                        );
                    },
                    l = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            r = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            _ = e.onClick,
                            m = e.ignoreShowDelay,
                            E = void 0 !== m && m,
                            g = e.ignoreMouseClick,
                            h = void 0 !== g && g,
                            p = e.decoratorId,
                            A = void 0 === p ? 0 : p,
                            F = e.isEnabled,
                            v = void 0 === F || F,
                            f = e.targetId,
                            C = void 0 === f ? 0 : f,
                            b = e.onShow,
                            B = e.onHide,
                            D = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        u[n] = e[n];
                                    }
                                return u;
                            })(e, o);
                        const w = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, a.useMemo)(() => C || (0, n.F)().resId, [C]),
                            k = (0, a.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (i(u, A, { isMouseEvent: !0, on: !0, arguments: s(r) }, y),
                                    b && b(),
                                    (w.current.isVisible = !0));
                            }, [u, A, r, y, b]),
                            S = (0, a.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        i(u, A, { on: !1 }, y),
                                        w.current.isVisible && B && B(),
                                        (w.current.isVisible = !1);
                                }
                            }, [u, A, y, B]),
                            x = (0, a.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(w.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = w.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', x, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', x, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === v && S();
                            }, [v, S]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            ),
                            v
                                ? (0, a.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((N = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((w.current.timeoutId = window.setTimeout(k, E ? 100 : 400)),
                                                          l && l(e),
                                                          N && N(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  S(), null == c || c(t), null == e || e(t);
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  !1 === h && S(), null == _ || _(t), null == e || e(t);
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  !1 === h && S(), null == d || d(t), null == e || e(t);
                                              })(t.props.onMouseDown),
                                          },
                                          D,
                                      ),
                                  )
                                : t
                        );
                        var N;
                    };
            },
            7515: (e, t, u) => {
                u.d(t, { u: () => n });
                const n = (e, t, u) => (u < e ? e : u > t ? t : u);
            },
            1856: (e, t, u) => {
                u.d(t, { v: () => n });
                const n = (e) => {
                    let t,
                        u = null;
                    return (
                        (u = requestAnimationFrame(() => {
                            u = requestAnimationFrame(() => {
                                (u = null), (t = e());
                            });
                        })),
                        () => {
                            'function' == typeof t && t(), null !== u && cancelAnimationFrame(u);
                        }
                    );
                };
            },
            8246: (e, t, u) => {
                u.d(t, { U: () => o });
                var n = u(3138);
                function r(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const a = (e) => (0 === e ? window : window.subViews.get(e));
                function o({ initializer: e = !0, rootId: t = 0, getRoot: u = a, context: o = 'model' } = {}) {
                    const s = new Map();
                    function i(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? s.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, u) => {
                            u.forEach((t) => {
                                const u = s.get(t);
                                void 0 !== u && u(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const n = u(t),
                            r = o.split('.').reduce((e, t) => e[t], n);
                        return 'string' != typeof e || 0 === e.length
                            ? r
                            : e.split('.').reduce((e, t) => {
                                  const u = e[t];
                                  return 'function' == typeof u ? u.bind(e) : u;
                              }, r);
                    };
                    return {
                        subscribe: (u, r) => {
                            const a = 'string' == typeof r ? `${o}.${r}` : o,
                                i = n.O.view.addModelObserver(a, t, !0);
                            return s.set(i, u), e && u(l(r)), i;
                        },
                        readByPath: l,
                        createCallback: (e, t) => {
                            const u = l(t);
                            return (...t) => {
                                u(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = l(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (
                                var e,
                                    u = (function (e, t) {
                                        var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                                        if (u) return (u = u.call(e)).next.bind(u);
                                        if (
                                            Array.isArray(e) ||
                                            (u = (function (e, t) {
                                                if (e) {
                                                    if ('string' == typeof e) return r(e, t);
                                                    var u = {}.toString.call(e).slice(8, -1);
                                                    return (
                                                        'Object' === u && e.constructor && (u = e.constructor.name),
                                                        'Map' === u || 'Set' === u
                                                            ? Array.from(e)
                                                            : 'Arguments' === u ||
                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
                                                              ? r(e, t)
                                                              : void 0
                                                    );
                                                }
                                            })(e)) ||
                                            (t && e && 'number' == typeof e.length)
                                        ) {
                                            u && (e = u);
                                            var n = 0;
                                            return function () {
                                                return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                                            };
                                        }
                                        throw new TypeError(
                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                        );
                                    })(s.keys());
                                !(e = u()).done;

                            )
                                i(e.value, t);
                        },
                        unsubscribe: i,
                    };
                }
            },
            3215: (e, t, u) => {
                u.d(t, { q: () => i });
                var n = u(4598),
                    r = u(9174),
                    a = u(6179),
                    o = u.n(a),
                    s = u(8246);
                const i = () => (e, t) => {
                    const u = (0, a.createContext)({});
                    return [
                        function ({ mode: i = 'real', options: l, children: c, mocks: d }) {
                            const _ = (0, a.useRef)([]),
                                m = (u, a, o) => {
                                    var i;
                                    const l = s.U(a),
                                        c =
                                            'real' === u
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (i = null == o ? void 0 : o.getter) ? i : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === u ? (null == o ? void 0 : o.getter(e)) : c.readByPath(e),
                                        m = (e) => _.current.push(e),
                                        E = e({
                                            mode: u,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const a = null != t ? t : d(e),
                                                        o = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => o.set(e)),
                                                                e,
                                                            ),
                                                        o
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const a = null != t ? t : d(e),
                                                        o = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => o.set(e)),
                                                                e,
                                                            ),
                                                        o
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const n = d(t);
                                                    if (Array.isArray(e)) {
                                                        const a = e.reduce(
                                                            (e, t) => ((e[t] = r.LO.box(n[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, r.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            a[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    }
                                                    {
                                                        const a = e,
                                                            o = Object.entries(a),
                                                            s = o.reduce(
                                                                (e, [t, u]) => ((e[u] = r.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        o.forEach(([t, u]) => {
                                                                            s[u].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            s
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: m,
                                        }),
                                        g = { mode: u, model: E, externalModel: c, cleanup: m };
                                    return {
                                        model: E,
                                        controls: 'mocks' === u && o ? o.controls(g) : t(g),
                                        externalModel: c,
                                        mode: u,
                                    };
                                },
                                E = (0, a.useRef)(!1),
                                g = (0, a.useState)(i),
                                h = g[0],
                                p = g[1],
                                A = (0, a.useState)(() => m(i, l, d)),
                                F = A[0],
                                v = A[1];
                            return (
                                (0, a.useEffect)(() => {
                                    E.current ? v(m(h, l, d)) : (E.current = !0);
                                }, [d, h, l]),
                                (0, a.useEffect)(() => {
                                    p(i);
                                }, [i]),
                                (0, a.useEffect)(
                                    () => () => {
                                        F.externalModel.dispose(), _.current.forEach((e) => e());
                                    },
                                    [F],
                                ),
                                o().createElement(u.Provider, { value: F }, c)
                            );
                        },
                        () => (0, a.useContext)(u),
                    ];
                };
            },
            7522: (e, t, u) => {
                u.d(t, { Z: () => n });
                const n = {
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
                        const t = Math.sqrt,
                            u = Math.pow;
                        return e < 0.5 ? (1 - t(1 - u(2 * e, 2))) / 2 : (t(1 - u(-2 * e + 2, 2)) + 1) / 2;
                    },
                    easeOutBack: (e) => 1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2),
                    bezier: (e, t, u, n) => (r) =>
                        (1 - r) * (1 - r) * (1 - r) * e +
                        3 * (1 - r) * (1 - r) * r * t +
                        3 * (1 - r) * r * r * u +
                        r * r * r * n,
                };
            },
            527: (e, t, u) => {
                u.r(t),
                    u.d(t, { mouse: () => c, off: () => i, on: () => s, onResize: () => a, onScaleUpdated: () => o });
                var n = u(2472),
                    r = u(1176);
                const a = (0, n.E)('clientResized'),
                    o = (0, n.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    i = (e, t) => engine.off(e, t),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    c = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function u() {
                            e.enabled && (0, r.R)(!0);
                        }
                        function n() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', u))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', u))
                                : (0, r.R)(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (t, u) => (
                                (t[u] = (function (t) {
                                    return (u) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const a = `mouse${t}`,
                                            o = l[t]((e) => u([e, 'outside']));
                                        function s(e) {
                                            u([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, s),
                                            n(),
                                            () => {
                                                r &&
                                                    (o(),
                                                    window.removeEventListener(a, s),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(u)),
                                t
                            ),
                            {},
                        );
                        return Object.assign({}, a, {
                            disable() {
                                (e.enabled = !1), n();
                            },
                            enable() {
                                (e.enabled = !0), n();
                            },
                            enableOutside() {
                                e.enabled && (0, r.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, r.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, t, u) => {
                u.r(t),
                    u.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => o,
                        getSize: () => a,
                        graphicsQuality: () => s,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var n = u(527),
                    r = u(2493);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, u) => {
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => n });
            },
            2493: (e, t, u) => {
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function r(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((u) => {
                        console.error(`setRTPC('${e}', '${t}'): `, u);
                    });
                }
                u.d(t, { E: () => r, G: () => n });
            },
            2472: (e, t, u) => {
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                u.d(t, { E: () => n });
            },
            3138: (e, t, u) => {
                u.d(t, { O: () => a });
                var n = u(5959),
                    r = u(514);
                const a = { view: u(7641), client: n, sound: r.ZP };
            },
            514: (e, t, u) => {
                u.d(t, { ZP: () => o });
                var n = u(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, n.playSound)(r[t])), e), {}),
                    o = { play: Object.assign({}, a, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, t, u) => {
                function n(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function r(e, t, u) {
                    return `url(${n(e, t, u)})`;
                }
                u.r(t), u.d(t, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (e, t, u) => {
                u.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                u.d(t, { U: () => r });
                var n = u(2472);
                const r = {
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
            7641: (e, t, u) => {
                u.r(t),
                    u.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => w,
                        events: () => a.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => B,
                        freezeTextureBeforeResize: () => h,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => D,
                        getScale: () => p,
                        getSize: () => m,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => b,
                        isFocused: () => f,
                        pxToRem: () => A,
                        remToPx: () => F,
                        resize: () => E,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => v,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => k,
                    });
                var n = u(3722),
                    r = u(6112),
                    a = u(6538),
                    o = u(8566);
                const s = 15;
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, s);
                }
                function c(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function d(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, s);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: F(t.x), y: F(t.y) };
                }
                function h() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function A(e) {
                    return viewEnv.pxToRem(e);
                }
                function F(e) {
                    return viewEnv.remToPx(e);
                }
                function v(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function b() {
                    return viewEnv.isEventHandled();
                }
                function B() {
                    viewEnv.forceTriggerMouseMove();
                }
                function D() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    y = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    k = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                u.d(t, { qP: () => a });
                const n = ['args'],
                    r = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var u = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (t.indexOf(n) >= 0) continue;
                                            u[n] = e[n];
                                        }
                                    return u;
                                })(t, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, o, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, t]) => {
                                                  const u = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: u, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: u, name: e, bool: t };
                                                      default:
                                                          return { __Type: u, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var r;
                    },
                    a = {
                        close(e) {
                            r('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            r(64);
                        },
                        move(e) {
                            r(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, u) => {
                function n() {
                    return !1;
                }
                u.d(t, { jv: () => n }), console.log;
            },
            7902: (e, t, u) => {
                u.d(t, { F: () => n });
                const n = (e = 1) => {
                    const t = new Error().stack;
                    let u,
                        n = R.invalid('resId');
                    return (
                        t &&
                            ((u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== u &&
                                window.subViews[u] &&
                                (n = window.subViews[u].id)),
                        { caller: u, stack: t, resId: n }
                    );
                };
            },
            6536: (e, t, u) => {
                u(6179);
            },
            4532: (e, t, u) => {
                u.d(t, { M: () => r });
                var n = u(6179);
                const r = (e, t = []) => {
                    const u = (0, n.useRef)(),
                        r = (0, n.useCallback)((...t) => {
                            u.current && u.current(), (u.current = e(...t));
                        }, t);
                    return (
                        (0, n.useEffect)(
                            () => () => {
                                u.current && u.current();
                            },
                            [r],
                        ),
                        r
                    );
                };
            },
            9653: (e, t, u) => {
                u.d(t, { q: () => a });
                var n = u(6179);
                function r(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const a = () => {
                    const e = (0, n.useMemo)(() => ({}), []),
                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                        u = (e, u) => {
                            t(e).set(u, u);
                        },
                        a = (e, u) => {
                            t(e).delete(u);
                        },
                        o = (e, ...u) => {
                            for (
                                var n,
                                    a = (function (e, t) {
                                        var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                                        if (u) return (u = u.call(e)).next.bind(u);
                                        if (
                                            Array.isArray(e) ||
                                            (u = (function (e, t) {
                                                if (e) {
                                                    if ('string' == typeof e) return r(e, t);
                                                    var u = {}.toString.call(e).slice(8, -1);
                                                    return (
                                                        'Object' === u && e.constructor && (u = e.constructor.name),
                                                        'Map' === u || 'Set' === u
                                                            ? Array.from(e)
                                                            : 'Arguments' === u ||
                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
                                                              ? r(e, t)
                                                              : void 0
                                                    );
                                                }
                                            })(e)) ||
                                            (t && e && 'number' == typeof e.length)
                                        ) {
                                            u && (e = u);
                                            var n = 0;
                                            return function () {
                                                return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                                            };
                                        }
                                        throw new TypeError(
                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                        );
                                    })(t(e).values());
                                !(n = a()).done;

                            )
                                (0, n.value)(...u);
                        };
                    return (0, n.useMemo)(() => ({ on: u, off: a, trigger: o }), []);
                };
            },
            3815: (e, t, u) => {
                u.d(t, { z: () => a });
                var n = u(6179);
                const r = [];
                function a(e) {
                    const t = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, t.current)(...e), r)
                    );
                }
            },
            5415: (e, t, u) => {
                u.d(t, { GS: () => l });
                var n = u(6179),
                    r = u(7739),
                    a = u(1043);
                let o, s, i;
                !(function (e) {
                    (e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = a.j.small.width)] = 'Small'),
                        (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                        (e[(e.Large = a.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge');
                })(o || (o = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.width)] = 'Small'),
                            (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                            (e[(e.Large = a.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge');
                    })(s || (s = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = a.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.height)] = 'Small'),
                            (e[(e.Medium = a.j.medium.height)] = 'Medium'),
                            (e[(e.Large = a.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.height)] = 'ExtraLarge');
                    })(i || (i = {}));
                const l = () => {
                    const e = (0, n.useContext)(r.YN),
                        t = e.width,
                        u = e.height,
                        a = ((e) => {
                            switch (!0) {
                                case e.extraLarge:
                                    return o.ExtraLarge;
                                case e.large:
                                    return o.Large;
                                case e.medium:
                                    return o.Medium;
                                case e.small:
                                    return o.Small;
                                case e.extraSmall:
                                    return o.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), o.ExtraSmall;
                            }
                        })(e),
                        l = ((e) => {
                            switch (!0) {
                                case e.extraLargeWidth:
                                    return s.ExtraLarge;
                                case e.largeWidth:
                                    return s.Large;
                                case e.mediumWidth:
                                    return s.Medium;
                                case e.smallWidth:
                                    return s.Small;
                                case e.extraSmallWidth:
                                    return s.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), s.ExtraSmall;
                            }
                        })(e),
                        c = ((e) => {
                            switch (!0) {
                                case e.extraLargeHeight:
                                    return i.ExtraLarge;
                                case e.largeHeight:
                                    return i.Large;
                                case e.mediumHeight:
                                    return i.Medium;
                                case e.smallHeight:
                                    return i.Small;
                                case e.extraSmallHeight:
                                    return i.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), i.ExtraSmall;
                            }
                        })(e);
                    return { mediaSize: a, mediaWidth: l, mediaHeight: c, remScreenWidth: t, remScreenHeight: u };
                };
            },
            560: (e, t, u) => {
                u.d(t, { B: () => r });
                var n = u(6179);
                function r(e, t, u = []) {
                    const r = (0, n.useRef)(0),
                        a = (0, n.useCallback)(() => window.clearInterval(r.current), u || []);
                    (0, n.useEffect)(() => a, [a]);
                    const o = (null != u ? u : []).concat([t]);
                    return [
                        (0, n.useCallback)((u) => {
                            (r.current = window.setInterval(() => e(u, !0), t)), e(u, !1);
                        }, o),
                        a,
                    ];
                }
            },
            4419: (e, t, u) => {
                u.d(t, { y: () => a });
                var n = u(8045),
                    r = u(6179);
                const a = (e, t, u = !0) => {
                    const a = (0, r.useCallback)(
                        (e) => {
                            const u = e[0];
                            t && t(u);
                        },
                        [t],
                    );
                    (0, r.useEffect)(() => {
                        if (!e.current || !u) return;
                        const t = new n.Z((e) => a(e));
                        return (
                            t.observe(e.current),
                            () => {
                                t.disconnect();
                            }
                        );
                    }, [a, u, e]);
                };
            },
            4489: (e, t, u) => {
                u.d(t, { f: () => a });
                var n = u(5139),
                    r = u(6179);
                function a(e, t, u) {
                    const a = (0, r.useMemo)(() => (0, n.Z)(u, e), t);
                    return (0, r.useEffect)(() => a.cancel, [a]), a;
                }
            },
            5521: (e, t, u) => {
                let n, r;
                u.d(t, { n: () => n }),
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
            9480: (e, t, u) => {
                u.d(t, { UI: () => r, cx: () => i, hX: () => o, q9: () => s, yW: () => a });
                const n = function (e, t) {
                    var u;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                };
                function r(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
                function a(e, t) {
                    if (Array.isArray(e)) return e.every(t);
                    for (let u = 0; u < e.length; u++) if (!t(n(e, u), u, e)) return !1;
                    return !0;
                }
                function o(e, t) {
                    if (Array.isArray(e)) return e.filter(t);
                    const u = [];
                    for (let r = 0; r < e.length; r++) {
                        var n;
                        const a = null == (n = e[r]) ? void 0 : n.value;
                        t(a, r, e) && u.push(a);
                    }
                    return u;
                }
                function s(e, t) {
                    for (let u = 0; u < e.length; u++) if (n(e, u) === t) return !0;
                    return !1;
                }
                function i(e, t) {
                    for (let u = 0; u < e.length; u++) if (t(n(e, u), u, e)) return u;
                }
            },
            7727: (e, t, u) => {
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                u.d(t, { $: () => r, G: () => n });
                const r = {
                    playHighlight() {
                        n('highlight');
                    },
                    playClick() {
                        n('play');
                    },
                    playYes() {
                        n('yes1');
                    },
                };
            },
            3649: (e, t, u) => {
                let n;
                function r(e) {
                    return e.replace(/-/g, '_');
                }
                u.d(t, { BN: () => r, Eg: () => o, z4: () => a }),
                    u(1281),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(n || (n = {}));
                const a = (e) => e.replace(/&nbsp;/g, ' '),
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
            5139: (e, t, u) => {
                function n(e, t, u, n) {
                    let r,
                        a = !1,
                        o = 0;
                    function s() {
                        r && clearTimeout(r);
                    }
                    function i(...i) {
                        const l = this,
                            c = Date.now() - o;
                        function d() {
                            (o = Date.now()), u.apply(l, i);
                        }
                        a ||
                            (n && !r && d(),
                            s(),
                            void 0 === n && c > e
                                ? d()
                                : !0 !== t &&
                                  (r = setTimeout(
                                      n
                                          ? function () {
                                                r = void 0;
                                            }
                                          : d,
                                      void 0 === n ? e - c : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof t && ((n = u), (u = t), (t = void 0)),
                        (i.cancel = function () {
                            s(), (a = !0);
                        }),
                        i
                    );
                }
                u.d(t, { Z: () => n });
            },
            1358: (e, t, u) => {
                u.d(t, { Z: () => a });
                var n = u(3138);
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
                    addCallback(e, t, u = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(e, u, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(a) : (this._views[u] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
                        );
                    }
                    removeCallback(e, t = 0) {
                        let u = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((u = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            u || console.error("Can't remove callback by id:", e),
                            u
                        );
                    }
                    _emmitDataChanged(e, t, u) {
                        u.forEach((u) => {
                            const n = this._callbacks[u];
                            void 0 !== n && n(e, t);
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
            9916: (e, t, u) => {
                u.d(t, { B3: () => l, Z5: () => o.Z5, B0: () => s, ry: () => A });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: u }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    u();
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
                        const u = e,
                            n = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== n)),
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
                var a = u(1358),
                    o = u(8613);
                let s;
                var i;
                ((i = s || (s = {}))[(i.UNDEFINED = 0)] = 'UNDEFINED'),
                    (i[(i.TOOLTIP = 1)] = 'TOOLTIP'),
                    (i[(i.POP_OVER = 2)] = 'POP_OVER'),
                    (i[(i.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (i[(i.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (i[(i.MOVE = 16)] = 'MOVE'),
                    (i[(i.CLOSE = 32)] = 'CLOSE'),
                    (i[(i.MINIMIZE = 64)] = 'MINIMIZE');
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = u(5521),
                    E = u(3138);
                const g = ['args'];
                function h(e, t, u, n, r, a, o) {
                    try {
                        var s = e[a](o),
                            i = s.value;
                    } catch (e) {
                        return void u(e);
                    }
                    s.done ? t(i) : Promise.resolve(i).then(n, r);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    A = (function () {
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
                                        u = arguments;
                                    return new Promise(function (n, r) {
                                        var a = e.apply(t, u);
                                        function o(e) {
                                            h(a, n, r, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            h(a, n, r, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    F = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var u = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (t.indexOf(n) >= 0) continue;
                                            u[n] = e[n];
                                        }
                                    return u;
                                })(t, g);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, a, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, t]) => {
                                                  const u = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          u.number = t;
                                                          break;
                                                      case 'boolean':
                                                          u.bool = t;
                                                          break;
                                                      default:
                                                          u.string = t.toString();
                                                  }
                                                  return u;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    v = () => F(s.CLOSE),
                    f = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var C = u(7572);
                const b = r.instance,
                    B = {
                        DataTracker: a.Z,
                        ViewModel: C.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: _,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => F(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: v,
                        sendClosePopOverEvent: () => F(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            F(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, r = R.invalid('resId'), a) => {
                            const o = E.O.view.getViewGlobalPosition(),
                                i = u.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                d = i.width,
                                _ = i.height,
                                m = {
                                    x: E.O.view.pxToRem(l) + o.x,
                                    y: E.O.view.pxToRem(c) + o.y,
                                    width: E.O.view.pxToRem(d),
                                    height: E.O.view.pxToRem(_),
                                };
                            F(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: p(m),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => f(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, v);
                        },
                        handleViewEvent: F,
                        onBindingsReady: A,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const r = Object.prototype.toString.call(t[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[n];
                                        u[n] = [];
                                        for (let t = 0; t < r.length; t++) u[n].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[n] = e(t[n]))
                                            : (u[n] = t[n]);
                                }
                            return u;
                        },
                        ClickOutsideManager: b,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = B;
            },
            8613: (e, t, u) => {
                u.d(t, { Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    };
            },
            3618: (e, t, u) => {
                u.d(t, { w: () => m });
                var n = u(6483),
                    r = u.n(n),
                    a = u(3415),
                    o = u(4419),
                    s = u(6179),
                    i = u.n(s),
                    l = u(8055),
                    c = u(3310),
                    d = u(131),
                    _ = u(9053);
                const m = i().memo(
                    ({
                        text: e,
                        classMix: t,
                        onSizeChanged: u,
                        binding: n,
                        isTooltipEnable: m = !1,
                        isTruncationAvailable: E = !1,
                        customTooltipArgs: g,
                        targetId: h,
                        justifyContent: p = _.v2.FlexStart,
                        alignContent: A = _.v2.FlexStart,
                        truncateIdentify: F = _.YA,
                    }) => {
                        const v = (0, s.useRef)(null),
                            f = (0, s.useRef)({ height: 0, width: 0 }),
                            C = (0, s.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                            b = C[0],
                            B = C[1],
                            D = (0, s.useMemo)(() => (0, c.s)(e, n, { justifyContent: p }), [n, p, e]),
                            w = (0, s.useMemo)(() => {
                                if (m && b.isTruncated && (!n || !Object.values(n).find((e) => 'object' == typeof e)))
                                    return {
                                        args: Object.assign({ text: e }, g, {
                                            stringifyKwargs: n ? JSON.stringify(n) : '',
                                        }),
                                        contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                        targetId: h,
                                    };
                            }, [n, m, h, e, g, b.isTruncated]),
                            y = (0, s.useCallback)(
                                (e) => {
                                    (f.current.width = e.contentRect.width), (f.current.height = e.contentRect.height);
                                    const t = (0, d.T)(v, D, f.current, F),
                                        n = t[0],
                                        r = t[1];
                                    B({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), u && u(r);
                                },
                                [u, F, D],
                            ),
                            k = (0, s.useMemo)(() => ({ justifyContent: p, alignContent: A }), [A, p]);
                        return (
                            (0, o.y)(v, y, E),
                            i().createElement(
                                'div',
                                {
                                    className: r()(
                                        l.Z.base,
                                        t,
                                        l.Z.base__zeroPadding,
                                        E && l.Z.base__isTruncationAvailable,
                                    ),
                                    style: k,
                                },
                                i().createElement('div', { className: l.Z.unTruncated, ref: v }, D),
                                i().createElement(
                                    a.l,
                                    {
                                        tooltipArgs: w,
                                        className: r()(
                                            l.Z.tooltip,
                                            l.Z[`tooltip__justify-${p}`],
                                            l.Z[`tooltip__align-${A}`],
                                        ),
                                    },
                                    i().createElement(
                                        'div',
                                        {
                                            className: r()(
                                                l.Z.truncated,
                                                !b.isTruncateFinished && E && l.Z.truncated__hide,
                                            ),
                                            style: k,
                                        },
                                        b.isTruncateFinished && E ? b.elementList : D,
                                    ),
                                ),
                            )
                        );
                    },
                );
            },
            3310: (e, t, u) => {
                u.d(t, { s: () => _ });
                var n = u(3649),
                    r = u(6799),
                    a = u(6960),
                    o = u(9053);
                const s = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    i = o.u6
                        ? (e) => {
                              const t = [];
                              return (
                                  (0, a.Z)(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          t.push(e);
                                      },
                                      (e) => {
                                          t.push(
                                              ...((e) => {
                                                  const t = [];
                                                  return (
                                                      (0, a.Z)(
                                                          e,
                                                          /\S\s+/g,
                                                          (e) => {
                                                              var u;
                                                              R.strings.settings.LANGUAGE_CODE().toLowerCase() === o.Co
                                                                  ? t.push(...((u = e), u.match(s) || []))
                                                                  : t.push(...e.split(''));
                                                          },
                                                          (e) => {
                                                              t.push(e[0]);
                                                          },
                                                      ),
                                                      t
                                                  );
                                              })(e[0]),
                                          );
                                      },
                                  ),
                                  t
                              );
                          }
                        : (e, t) => {
                              const u = /[\s\u002d]/g;
                              let n = u.exec(e);
                              if (!n) return [e];
                              const r = [];
                              let a = 0;
                              for (; n; ) {
                                  const s = t.justifyContent === o.v2.FlexEnd ? n.index : u.lastIndex;
                                  r.push(e.slice(a, s)), (a = s), (n = u.exec(e));
                              }
                              return a !== e.length && r.push(e.slice(a)), r;
                          },
                    l = (e, t = '', u) => {
                        const n = [];
                        return (
                            (0, a.Z)(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: o.kH.Word, colorTag: t, childList: i(e, u) });
                                },
                                (e) => {
                                    const u = e[0],
                                        r = o.aF[u.charAt(0)];
                                    r === o.kH.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: o.kH.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let u = 0; u < e.length - 1; u++)
                                                      t.push({
                                                          blockType: o.kH.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(u),
                                          )
                                        : n.push({ blockType: r, colorTag: t, childList: [u] });
                                },
                            ),
                            n
                        );
                    },
                    c = (e, t, u = '', n) => {
                        const r = [];
                        return (
                            (0, a.Z)(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    r.push(...l(e, u, n));
                                },
                                (e) => {
                                    const a = e[1],
                                        s = void 0 === t[a] ? e[0] : t[a];
                                    'string' == typeof s || 'number' == typeof s
                                        ? r.push(...l(String(s), u, n))
                                        : r.push({ blockType: o.kH.Binding, colorTag: u, childList: [s] });
                                },
                            ),
                            r
                        );
                    },
                    d = (e, t) => {
                        if (!e) return [t];
                        const u = [],
                            n = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === o.kH.NoBreakWrapper) e.childList.push(n), u.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && u.push(e),
                                u.push({ blockType: o.kH.NoBreakWrapper, colorTag: '', childList: [t, n] });
                        }
                        return t.childList.length > 0 && u.push(t), u;
                    },
                    _ = (e, t = {}, u) => {
                        if (!e) return [];
                        const s = ((e) => {
                            const t = [];
                            let u = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === o.kH.NoBreakSymbol
                                        ? ((u = !0), t.push(...d(t.pop(), e)))
                                        : (u ? t.push(...d(t.pop(), e)) : t.push(e), (u = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t, u) => {
                                const n = [];
                                return (
                                    (0, a.Z)(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            n.push(...c(e, t, '', u));
                                        },
                                        (e) => {
                                            n.push(...c(e[2] + e[3], t, e[1], u));
                                        },
                                    ),
                                    n
                                );
                            })((0, n.Eg)((0, n.z4)(e)), t, u),
                        );
                        return (0, r.w)(s);
                    };
            },
            6799: (e, t, u) => {
                u.d(t, { w: () => o });
                var n = u(597),
                    r = u(9053);
                const a = (e, t, u) => {
                        const o = [];
                        return (
                            e.childList.forEach((s, i) => {
                                const l = `${u}_${i}`;
                                if ((0, r.dz)(s)) {
                                    const e = s,
                                        t = e.blockType,
                                        u = n.IY[t],
                                        r = a(e, u, l);
                                    o.push(...r);
                                } else o.push(t({ elementList: [s], textBlock: e, key: l }));
                            }),
                            o
                        );
                    },
                    o = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, u) => {
                                t.push(
                                    ...((e, t) => {
                                        const u = [],
                                            o = e.blockType,
                                            s = n.IY[o],
                                            i = a(e, s, t);
                                        return (
                                            o === r.kH.NoBreakWrapper
                                                ? u.push(s({ elementList: i, textBlock: e, key: `${t}` }))
                                                : u.push(...i),
                                            u
                                        );
                                    })(e, u),
                                );
                            }),
                            t
                        );
                    };
            },
            6960: (e, t, u) => {
                u.d(t, { Z: () => n });
                const n = (e, t, u, n) => {
                    let r = t.exec(e),
                        a = 0;
                    for (; r; ) a !== r.index && u(e.slice(a, r.index)), n(r), (a = t.lastIndex), (r = t.exec(e));
                    a !== e.length && u(e.slice(a));
                };
            },
            131: (e, t, u) => {
                u.d(t, { T: () => c });
                var n = u(6179),
                    r = u.n(n),
                    a = u(9053);
                const o = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    s = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    i = (e, t, u) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const n = s(e, t),
                            r = e.textContent.length,
                            a = e.offsetWidth / r,
                            o = Math.ceil(n / a);
                        if (n > 0) {
                            const n = Math.floor((t - e.offsetLeft) / a);
                            return n >= u ? [!0, u + o] : [!1, n];
                        }
                        const i = Math.max(u + o, 0);
                        return r < i ? [!1, 0] : [!0, i];
                    },
                    l = (e, t, u, n, o, s) => {
                        let c = -1,
                            d = null;
                        for (let _ = u; _ >= 0; _--) {
                            const u = e[_],
                                m = Number(e[_].getAttribute(a.bF));
                            if (m === a.kH.LineBreak || m === a.kH.NewLine || m === a.kH.Binding) continue;
                            const E = u.textContent || '';
                            if (!(u.childElementCount > 1)) {
                                const e = i(u, n, o),
                                    a = e[0],
                                    l = e[1];
                                if (!a) {
                                    l > 0 && (o -= l);
                                    continue;
                                }
                                const m = E.slice(0, E.length - l) + s,
                                    g = t[_];
                                (d = r().cloneElement(g, g.props, m)), (c = _);
                                break;
                            }
                            {
                                const e = u.children,
                                    a = t[_],
                                    i = a.props.children,
                                    m = l(e, i, e.length - 1, n, o, s),
                                    g = m[0],
                                    h = m[1];
                                if (!(g < 0)) {
                                    const e = i.slice(0, g);
                                    (d = r().cloneElement(a, a.props, e, h)), (c = _);
                                    break;
                                }
                                o -= E.length;
                            }
                        }
                        return [c, d];
                    },
                    c = (e, t, u, n = a.YA) => {
                        const r = [...t],
                            i = e.current;
                        if (!i) return [r, !1];
                        const c = u.height,
                            d = u.width,
                            _ = i.lastElementChild;
                        if (!o(_, c) && s(_, d) <= 0) return [r, !1];
                        const m = i.children,
                            E = ((e, t) => {
                                let u = 0,
                                    n = e.length - 1;
                                for (; n - u >= 0; ) {
                                    const r = u + Math.ceil(0.5 * (n - u));
                                    o(e[r], t) ? (n = r - 1) : (u = r + 1);
                                }
                                return u - 1;
                            })(m, c);
                        if (E < 0) return [r, !1];
                        const g = l(m, r, E, d, n.length, n),
                            h = g[0],
                            p = g[1];
                        return p && (r.splice(h, 1, p), r.splice(h + 1)), [r, !0];
                    };
            },
            9053: (e, t, u) => {
                let n, r, a;
                u.d(t, {
                    Co: () => c,
                    YA: () => s,
                    aF: () => l,
                    bF: () => i,
                    dz: () => o,
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
                const o = (e) => void 0 !== e.childList,
                    s = '...',
                    i = 'data-block-type',
                    l = { [a.NBSP]: n.NoBreakSymbol, [a.ZWNBSP]: n.NoBreakSymbol, [a.NEW_LINE]: n.LineBreak },
                    c = 'th',
                    d = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', c].includes(R.strings.settings.LANGUAGE_CODE().toLowerCase());
            },
            597: (e, t, u) => {
                u.d(t, { IY: () => _ });
                var n = u(6483),
                    r = u.n(n),
                    a = u(6179),
                    o = u.n(a),
                    s = u(9053),
                    i = u(9627),
                    l = u(7629);
                const c = (e) => ({ color: `#${e}` }),
                    d = ({ elementList: e, textBlock: t, key: u }) => {
                        const n = t.colorTag;
                        return n
                            ? i.Z[n]
                                ? o().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: r()(l.Z.word, i.Z[n]) },
                                      e,
                                  )
                                : o().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: l.Z.word, style: c(n) },
                                      e,
                                  )
                            : o().createElement(
                                  'span',
                                  { key: u, 'data-block-type': t.blockType, className: l.Z.word },
                                  e,
                              );
                    },
                    _ = {
                        [s.kH.Word]: d,
                        [s.kH.NoBreakSymbol]: d,
                        [s.kH.Binding]: ({ elementList: e, textBlock: t, key: u }) =>
                            o().createElement(
                                'span',
                                { key: u, 'data-block-type': t.blockType },
                                e.map((e) => o().createElement(o().Fragment, { key: u }, e)),
                            ),
                        [s.kH.LineBreak]: ({ key: e }) =>
                            o().createElement('span', {
                                key: e,
                                'data-block-type': s.kH.LineBreak,
                                className: l.Z.lineBreak,
                            }),
                        [s.kH.NewLine]: ({ elementList: e, key: t }) =>
                            o().createElement(
                                'span',
                                { key: t, 'data-block-type': s.kH.NewLine, className: l.Z.newLine },
                                e,
                            ),
                        [s.kH.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            o().createElement(
                                'span',
                                { key: t, 'data-block-type': s.kH.NoBreakWrapper, className: l.Z.noBreakWrapper },
                                e,
                            ),
                    };
            },
            7621: (e, t, u) => {
                u.d(t, { G: () => l, _: () => c });
                var n = u(6483),
                    r = u.n(n),
                    a = u(2056),
                    o = u(6179),
                    s = u.n(o),
                    i = u(9831);
                let l;
                !(function (e) {
                    (e.C28x28 = 'c28x28'),
                        (e.C30x30 = 'c30x30'),
                        (e.C36x36 = 'c36x36'),
                        (e.C44x44 = 'c44x44'),
                        (e.C70x70 = 'c70x70'),
                        (e.C110x110 = 'c110x110');
                })(l || (l = {}));
                const c = s().memo(function ({ size: e, gray: t = !1, isTooltipEnable: u = !1, className: n }) {
                    return s().createElement(
                        a.u,
                        { contentId: R.views.halloween.lobby.tooltips.KeyTooltip('resId'), isEnabled: u },
                        s().createElement('div', {
                            className: r()(i.Z.base, i.Z[`base__${e}`], t && i.Z.base__gray, n),
                        }),
                    );
                });
            },
            481: (e, t, u) => {
                u.d(t, { G: () => r, m: () => s });
                var n = u(6179);
                let r;
                !(function (e) {
                    (e.MouseDown = 'mouseDown'),
                        (e.Dragging = 'dragging'),
                        (e.End = 'scrollingToEnd'),
                        (e.Idle = 'idle');
                })(r || (r = {}));
                const a = { type: r.Idle },
                    o = 5;
                function s(e, t) {
                    const u = e.contentRef,
                        s = e.wrapperRef,
                        i = e.scrollPosition,
                        l = e.clampPosition,
                        c = e.animationScroll,
                        d = e.events,
                        _ = (0, n.useState)(a),
                        m = _[0],
                        E = _[1];
                    return (
                        (0, n.useEffect)(() => {
                            const e = u.current;
                            e && (e.style.cursor = m.type === r.Dragging ? 'move' : 'grab');
                        }, [u, m.type]),
                        (0, n.useEffect)(() => {
                            if (m.type !== r.MouseDown && m.type !== r.Dragging) return;
                            const e = (e) => {
                                const n = u.current,
                                    a = s.current;
                                if (!n || !a) return;
                                const d = m.positionFrom - e.screenX,
                                    _ = m.previousScrollPosition + d;
                                m.type === r.MouseDown &&
                                    Math.abs(d) > o &&
                                    E({
                                        type: r.Dragging,
                                        positionFrom: m.positionFrom,
                                        previousScrollPosition: m.previousScrollPosition,
                                    }),
                                    m.type === r.Dragging &&
                                        i.start(
                                            Object.assign(
                                                {
                                                    scrollPosition: l(n, _),
                                                    from: { scrollPosition: c.scrollPosition.get() },
                                                },
                                                t && { config: t },
                                            ),
                                        );
                            };
                            function n() {
                                window.removeEventListener('mousemove', e),
                                    document.body.removeEventListener('mouseleave', n),
                                    E({ type: r.End });
                            }
                            return (
                                window.addEventListener('mousemove', e),
                                window.addEventListener('mouseup', n),
                                document.body.addEventListener('mouseleave', n),
                                () => {
                                    window.removeEventListener('mousemove', e),
                                        window.removeEventListener('mouseup', n),
                                        document.body.removeEventListener('mouseleave', n);
                                }
                            );
                        }, [c.scrollPosition, l, u, m, i, s, t]),
                        (0, n.useEffect)(() => {
                            if (m.type !== r.End) return;
                            const e = () => {
                                E(a);
                            };
                            return c.scrollPosition.idle && e(), d.on('rest', e), () => d.off('rest', e);
                        }, [c.scrollPosition, m.type, d]),
                        (0, n.useEffect)(() => {
                            const e = u.current;
                            if (!e) return;
                            const t = (e) => {
                                0 === e.button &&
                                    E({
                                        type: r.MouseDown,
                                        positionFrom: e.screenX,
                                        previousScrollPosition: c.scrollPosition.get(),
                                    });
                            };
                            return e.addEventListener('mousedown', t), () => e.removeEventListener('mousedown', t);
                        }, [c.scrollPosition, u]),
                        m
                    );
                }
            },
            5657: (e, t, u) => {
                var n = u(6179),
                    r = u.n(n),
                    a = u(6483),
                    o = u.n(a),
                    s = u(794),
                    i = u(6358),
                    l = u(1856),
                    c = u(3138),
                    d = u(3815),
                    _ = u(5415),
                    m = u(9480),
                    E = u(481),
                    g = u(3403),
                    h = u(7505),
                    p = u(4205),
                    A = u(3215),
                    F = u(4598);
                let v;
                !(function (e) {
                    (e.Default = 'default'),
                        (e.Locked = 'locked'),
                        (e.InBattle = 'inBattle'),
                        (e.InPlatoon = 'inPlatoon'),
                        (e.CrewIncomplete = 'crewIncomplete'),
                        (e.Rented = 'rented'),
                        (e.Suspended = 'suspended'),
                        (e.Repair = 'repair'),
                        (e.UntrainedCrew = 'untrainedCrew'),
                        (e.LowEfficiency = 'lowEfficiency'),
                        (e.Unsuitable = 'unsuitable');
                })(v || (v = {}));
                var f = u(3946);
                const C = ['mediumTank', 'heavyTank', 'AT_SPG'],
                    b = (0, A.q)()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    filter: e.object('filter'),
                                    orderedNation: e.array('orderedNations', []),
                                },
                                u = (0, f.Om)(() => {
                                    const e = t.root.get().vehicles;
                                    return '' === e ? [] : JSON.parse(e);
                                }),
                                n = (0, f.Om)(
                                    () =>
                                        m
                                            .hX(u(), (e) => {
                                                const u = t.filter.get();
                                                return (
                                                    (!u.isFavorite || e.isFavorite) &&
                                                    ((!u.isPremium && !u.isElite) ||
                                                        (u.isPremium && e.isPremium) ||
                                                        (u.isElite && e.isElite && !e.isPremium)) &&
                                                    (0 === r().length || o(e.nation)) &&
                                                    (0 === a().length || s(e.type)) &&
                                                    (!u.isRent || e.isRent) &&
                                                    ('' === u.name ||
                                                        e.name.toLowerCase().indexOf(u.name.toLowerCase()) > -1)
                                                );
                                            })
                                            .sort((e, u) => {
                                                const n = t.orderedNation.get(),
                                                    r = m.cx(n, (t) => t === e.nation) || -1,
                                                    a = m.cx(n, (e) => e === u.nation) || -1;
                                                return (
                                                    Number(u.isFavorite) - Number(e.isFavorite) ||
                                                    r - a ||
                                                    C.indexOf(e.type) - C.indexOf(u.type) ||
                                                    e.name.localeCompare(u.name)
                                                );
                                            }),
                                    { equals: F.jv },
                                ),
                                r = (0, f.Om)(() =>
                                    '' === t.filter.get().nations ? [] : JSON.parse(t.filter.get().nations),
                                ),
                                a = (0, f.Om)(() =>
                                    '' === t.filter.get().types ? [] : JSON.parse(t.filter.get().types),
                                ),
                                o = (0, f.Om)((e) => 0 !== r().length && m.q9(r(), e)),
                                s = (0, f.Om)((e) => 0 !== a().length && m.q9(a(), e)),
                                i = (0, f.Om)(() => u().length),
                                l = (0, f.Om)(() => n().length),
                                c = (0, f.Om)(() => !m.yW(u(), (e) => e.vehicleState !== v.InPlatoon));
                            return Object.assign({}, t, {
                                computes: {
                                    carouselLocked: c,
                                    vehicles: u,
                                    filteredVehicles: n,
                                    allVehicleLenght: i,
                                    filteredVehicleLenght: l,
                                    checkNations: o,
                                    checkTypes: s,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            changeVehicle: e.createCallback((e) => ({ invID: e }), 'onChangeVehicle'),
                            filter: e.createCallback((e, t) => ({ key: e, value: t }), 'filter.onFiltered'),
                            resetFilter: e.createCallbackNoArgs('filter.onReset'),
                        }),
                    ),
                    B = b[0],
                    D = b[1];
                let w;
                !(function (e) {
                    (e.IsFavorite = 'isFavorite'),
                        (e.IsPremium = 'isPremium'),
                        (e.IsRent = 'isRent'),
                        (e.IsElite = 'isElite'),
                        (e.VehicleType = 'vehicleType'),
                        (e.Nation = 'nation'),
                        (e.SearchName = 'searchName');
                })(w || (w = {}));
                var y = u(6373);
                const k = {
                    base: 'Indicator_base_a6',
                    indicatorDefault: 'Indicator_indicatorDefault_ee',
                    base__default: 'Indicator_base__default_cf',
                    indicatorHover: 'Indicator_indicatorHover_46',
                    base__hover: 'Indicator_base__hover_c4',
                    indicatorSelected: 'Indicator_indicatorSelected_67',
                    base__selected: 'Indicator_base__selected_2b',
                    indicatorSelectedHover: 'Indicator_indicatorSelectedHover_eb',
                    base__selectedHover: 'Indicator_base__selectedHover_45',
                };
                let S;
                !(function (e) {
                    (e.Default = 'default'),
                        (e.Hover = 'hover'),
                        (e.Selected = 'selected'),
                        (e.SelectedHover = 'selectedHover');
                })(S || (S = {}));
                const x = ({ type: e, className: t }) =>
                        r().createElement(
                            'div',
                            { className: o()(k.base, k[`base__${e}`], t) },
                            r().createElement('div', { className: k.indicatorDefault }),
                            r().createElement('div', { className: k.indicatorHover }),
                            r().createElement('div', { className: k.indicatorSelected }),
                            r().createElement('div', { className: k.indicatorSelectedHover }),
                        ),
                    N = {
                        base: 'FilterButton_base_cb',
                        base__default: 'FilterButton_base__default_10',
                        base__hover: 'FilterButton_base__hover_3f',
                        base__hiddenIndicator: 'FilterButton_base__hiddenIndicator_7b',
                        base__selected: 'FilterButton_base__selected_55',
                        base__selectedHover: 'FilterButton_base__selectedHover_d4',
                        hover: 'FilterButton_hover_ff',
                        children: 'FilterButton_children_ad',
                        indicator: 'FilterButton_indicator_c8',
                        shadow: 'FilterButton_shadow_f2',
                    },
                    T = (e, t, u) =>
                        e ? S.Selected : t ? (u ? S.SelectedHover : S.Selected) : u ? S.Hover : S.Default,
                    P = r().memo(function ({
                        children: e,
                        tooltipHeader: t = '',
                        tooltipBody: u = '',
                        selected: a = !1,
                        hideIndicator: s = !1,
                        className: i,
                        onClick: l,
                    }) {
                        const d = (0, n.useState)(!1),
                            _ = d[0],
                            m = d[1],
                            E = (0, n.useState)(!1),
                            g = E[0],
                            h = E[1];
                        return r().createElement(
                            y.i,
                            { isEnabled: '' !== t || '' !== u, header: t, body: u },
                            r().createElement(
                                'div',
                                {
                                    className: o()(N.base, N[`base__${T(g, a, _)}`], s && N.base__hiddenIndicator, i),
                                    onMouseEnter: () => {
                                        c.O.sound.play.highlight(), m(!0);
                                    },
                                    onMouseLeave: () => {
                                        m(!1), h(!1);
                                    },
                                    onClick: () => {
                                        c.O.sound.play.click(), l(!a);
                                    },
                                    onMouseDown: () => h(!0),
                                    onMouseUp: () => h(!1),
                                },
                                r().createElement('div', { className: N.hover }),
                                r().createElement('div', { className: N.children }, e),
                                !s && r().createElement(x, { className: N.indicator, type: T(g, a, _) }),
                                r().createElement('div', { className: N.shadow }),
                            ),
                        );
                    });
                var L = u(3415);
                const O = 'default',
                    M = 'search',
                    I = 'email',
                    H = 'password',
                    W = 'normal',
                    z = 'medium',
                    U = {
                        [O]: '',
                        [I]: R.strings.common.input.placeholder.email(),
                        [M]: R.strings.common.input.placeholder.search(),
                        [H]: R.strings.common.input.placeholder.password(),
                    },
                    G = { [O]: 'text', [I]: 'text', [M]: 'text', [H]: 'password' },
                    j = { [O]: '', [I]: 'Invalid email', [M]: '', [H]: '' },
                    Z = R.images.gui.maps.icons.components.input;
                var V = u(7727);
                const q = {
                        base: 'InputControl_base_68',
                        base__focused: 'InputControl_base__focused_aa',
                        base__alert: 'InputControl_base__alert_22',
                        base__error: 'InputControl_base__error_ff',
                        base__done: 'InputControl_base__done_a7',
                        base__disabled: 'InputControl_base__disabled_f8',
                        input: 'InputControl_input_93',
                        base__small: 'InputControl_base__small_85',
                        base__medium: 'InputControl_base__medium_a2',
                        base__large: 'InputControl_base__large_32',
                        base__withIcon: 'InputControl_base__withIcon_9e',
                        input__search: 'InputControl_input__search_85',
                        disabled: 'InputControl_disabled_78',
                        placeholder: 'InputControl_placeholder_e3',
                        placeholder__search: 'InputControl_placeholder__search_d5',
                        icon: 'InputControl_icon_13',
                        icon__search: 'InputControl_icon__search_57',
                        clear: 'InputControl_clear_bb',
                    },
                    $ = r().memo(
                        ({
                            componentId: e,
                            value: t = '',
                            type: u = O,
                            size: a = z,
                            variant: s = W,
                            placeholder: i = '',
                            highlighted: l,
                            withClear: c,
                            selectOnFocus: d = !0,
                            maxLength: _,
                            iconSource: m,
                            classMix: E,
                            onMouseEnter: g,
                            onMouseLeave: h,
                            onMouseDown: p,
                            onMouseUp: A,
                            onClick: F,
                            onChange: v,
                            onClear: f,
                            onFocus: C,
                            onBlur: b,
                        }) => {
                            const B = (0, n.useState)(!1),
                                D = B[0],
                                w = B[1],
                                y = (0, n.useRef)(null),
                                k = (0, n.useRef)({ mouseOver: !1, mouseDown: !1 }),
                                S = 'disabled' !== s,
                                x = (0, n.useCallback)(
                                    (e) => {
                                        S && (w(!0), C && C(e));
                                    },
                                    [S, C],
                                ),
                                N = (0, n.useCallback)(
                                    (e) => {
                                        S && !k.current.mouseOver && (w(!1), b && b(e));
                                    },
                                    [S, b],
                                );
                            (0, n.useEffect)(() => {
                                S && D && d && y.current && y.current.select();
                            }, [d, D, S]);
                            const T = (0, n.useCallback)(
                                    (e) => {
                                        S && v && v(e.target.value);
                                    },
                                    [S, v],
                                ),
                                P = (0, n.useCallback)(
                                    (e) => {
                                        S && ((k.current.mouseOver = !0), g && g(e));
                                    },
                                    [S, g],
                                ),
                                R = (0, n.useCallback)(
                                    (e) => {
                                        S &&
                                            y.current &&
                                            (k.current.mouseDown && y.current.focus(),
                                            (k.current.mouseOver = !1),
                                            h && h(e));
                                    },
                                    [S, h],
                                ),
                                L = (0, n.useCallback)(
                                    (e) => {
                                        S && ((k.current.mouseDown = !0), p && p(e));
                                    },
                                    [S, p],
                                ),
                                M = (0, n.useCallback)(
                                    (e) => {
                                        S && ((k.current.mouseDown = !1), A && A(e));
                                    },
                                    [S, A],
                                ),
                                I = (0, n.useCallback)(
                                    (e) => {
                                        S &&
                                            y.current &&
                                            ((!D || (D && e.target !== y.current)) && y.current.focus(), F && F(e));
                                    },
                                    [D, S, F],
                                ),
                                H = i || U[u],
                                j = Boolean(m),
                                Z = o()(
                                    q.base,
                                    q[`base__${a}`],
                                    l && q[`base__${s}`],
                                    D && q.base__focused,
                                    j && q.base__withIcon,
                                    E,
                                ),
                                $ = (0, n.useMemo)(() => (m ? { backgroundImage: `url(${m})` } : null), [m]),
                                Y = o()(q.input, q[`input__${u}`]),
                                X = o()(q.icon, q[`icon__${u}`]),
                                K = o()(q.placeholder, q[`placeholder__${u}`]);
                            return r().createElement(
                                'div',
                                {
                                    id: e,
                                    className: Z,
                                    onMouseEnter: P,
                                    onMouseDown: L,
                                    onMouseUp: M,
                                    onMouseLeave: R,
                                    onClick: I,
                                },
                                !S && r().createElement('div', { className: q.disabled }),
                                $ && r().createElement('div', { style: $, className: X }),
                                r().createElement('input', {
                                    ref: y,
                                    className: Y,
                                    type: G[u],
                                    value: t,
                                    onChange: T,
                                    disabled: !S,
                                    onFocus: x,
                                    onBlur: N,
                                    maxLength: _,
                                }),
                                H && !t && !D && r().createElement('div', { className: K }, H),
                                c &&
                                    r().createElement('div', {
                                        className: q.clear,
                                        onClick: (e) => {
                                            V.$.playClick(), f && f(e);
                                        },
                                        onMouseEnter: V.$.playHighlight,
                                    }),
                            );
                        },
                    ),
                    Y = {
                        base: 'HelperMessage_base_1e',
                        base__shown: 'HelperMessage_base__shown_ab',
                        icon: 'HelperMessage_icon_10',
                        message: 'HelperMessage_message_f4',
                        message__alert: 'HelperMessage_message__alert_b5',
                        message__error: 'HelperMessage_message__error_45',
                        message__done: 'HelperMessage_message__done_2b',
                    },
                    X = ({ variant: e, show: t = !0, helperText: u, helperIcon: a, classMix: s }) => {
                        const i = (0, n.useMemo)(() => {
                                const t =
                                    a ||
                                    (function (e) {
                                        return 'alert' === e ? R.images.gui.maps.icons.library.alertIcon() : '';
                                    })(e);
                                return t && { backgroundImage: `url(${t})` };
                            }, [a, e]),
                            l = o()(Y.base, t && Y.base__shown),
                            c = o()(Y.message, Y[`message__${e}`], s);
                        return r().createElement(
                            'div',
                            { className: l },
                            i && r().createElement('div', { className: Y.icon, style: i }),
                            r().createElement('div', { className: c }, u),
                        );
                    },
                    K = {
                        base: 'Input_base_cd',
                        base__small: 'Input_base__small_c7',
                        base__medium: 'Input_base__medium_1f',
                        base__large: 'Input_base__large_11',
                        helper: 'Input_helper_ea',
                    },
                    Q = [
                        'componentId',
                        'type',
                        'variant',
                        'size',
                        'value',
                        'tooltipArgs',
                        'helperText',
                        'isValidated',
                        'showHelper',
                        'error',
                        'options',
                        'onFocus',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseUp',
                        'onMouseDown',
                        'onChange',
                        'classMix',
                        'controlClassMix',
                        'helperClassMix',
                    ];
                function J() {
                    return (
                        (J = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        J.apply(null, arguments)
                    );
                }
                const ee = {
                        debounceTime: 200,
                        performChangeValidation: !0,
                        selectOnFocus: !0,
                        withTypeIcon: !0,
                        disableHighlightOnFocus: !0,
                    },
                    te = (e) => {
                        let t = e.componentId,
                            u = e.type,
                            a = void 0 === u ? O : u,
                            s = e.variant,
                            i = void 0 === s ? W : s,
                            l = e.size,
                            c = void 0 === l ? z : l,
                            d = e.value,
                            _ = e.tooltipArgs,
                            m = e.helperText,
                            E = void 0 === m ? '' : m,
                            g = e.isValidated,
                            h = void 0 === g || g,
                            p = e.showHelper,
                            A = void 0 === p || p,
                            F = e.error,
                            v = e.options,
                            f = e.onFocus,
                            C = e.onMouseEnter,
                            b = e.onMouseLeave,
                            B = e.onMouseUp,
                            D = e.onMouseDown,
                            w = e.onChange,
                            y = e.classMix,
                            k = e.controlClassMix,
                            S = e.helperClassMix,
                            x = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        u[n] = e[n];
                                    }
                                return u;
                            })(e, Q);
                        const N = (0, n.useState)(d),
                            T = N[0],
                            P = N[1],
                            R = (0, n.useState)(h),
                            H = R[0],
                            U = R[1],
                            G = (0, n.useMemo)(() => Object.assign({}, ee, v), [v]),
                            V = (0, n.useRef)({ debounceTimeout: 0, isChangeHandled: !0, value: d, type: a }),
                            q = (0, n.useCallback)((e) => {
                                e !== V.current.value &&
                                    ((V.current.value = e), (V.current.isChangeHandled = !1), P(e));
                            }, []),
                            Y = (0, n.useCallback)(
                                (e) => {
                                    let t = !0;
                                    G.performChangeValidation &&
                                        (t = G.changesValidator
                                            ? G.changesValidator(e)
                                            : (function (e, t) {
                                                  return (
                                                      t !== I ||
                                                      (function (e) {
                                                          const t = e.match(
                                                              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                                                          );
                                                          return Boolean(t);
                                                      })(e)
                                                  );
                                              })(e, V.current.type)),
                                        w && w(e, t);
                                },
                                [w, G],
                            ),
                            te = (0, n.useCallback)(() => {
                                V.current.debounceTimeout &&
                                    (window.clearTimeout(V.current.debounceTimeout), (V.current.debounceTimeout = 0));
                            }, []),
                            ue = (0, n.useCallback)(() => q(''), [q]);
                        (0, n.useEffect)(() => () => te(), [te]);
                        const ne = (0, n.useCallback)(
                            (e) => {
                                te(),
                                    G.debounceTime
                                        ? (V.current.debounceTimeout = window.setTimeout(() => {
                                              Y(e);
                                          }, G.debounceTime))
                                        : Y(e);
                            },
                            [Y, te, G.debounceTime],
                        );
                        (0, n.useEffect)(() => {
                            V.current.isChangeHandled ||
                                V.current.value !== T ||
                                (ne(V.current.value), (V.current.isChangeHandled = !0));
                        }, [T, ne]),
                            (0, n.useEffect)(() => {
                                V.current.isChangeHandled && d !== V.current.value && ((V.current.value = d), P(d)),
                                    (V.current.type = a);
                            }, [d, a]),
                            (0, n.useEffect)(() => {
                                U(h);
                            }, [h, i]);
                        const re = (0, n.useCallback)((e) => C && C(e), [C]),
                            ae = (0, n.useCallback)(
                                (e) => {
                                    G.disableHighlightOnFocus && H && U(!1), f && f(e);
                                },
                                [H, f, G.disableHighlightOnFocus],
                            ),
                            oe = (0, n.useCallback)((e) => B && B(e), [B]),
                            se = (0, n.useCallback)((e) => D && D(e), [D]),
                            ie = (0, n.useCallback)((e) => b && b(e), [b]),
                            le = (0, n.useMemo)(
                                () =>
                                    G.withTypeIcon
                                        ? (function (e, t) {
                                              return e === M ? Z.$dyn(`search_${t}`) : '';
                                          })(a, c)
                                        : '',
                                [a, c, G.withTypeIcon],
                            ),
                            ce = E || j[a],
                            de = Boolean(T),
                            _e = F ? 'error' : i,
                            me = Boolean(F) || H,
                            Ee = (0, n.useMemo)(
                                () => ('boolean' == typeof G.withClear ? de && G.withClear : de && a === M),
                                [a, de, G],
                            ),
                            ge = o()(K.base, K[`base__${c}`], K[`base__${i}`], y);
                        return r().createElement(
                            'div',
                            {
                                id: t,
                                className: ge,
                                onMouseEnter: re,
                                onMouseDown: se,
                                onMouseUp: oe,
                                onMouseLeave: ie,
                            },
                            r().createElement(
                                L.l,
                                { tooltipArgs: _ },
                                r().createElement(
                                    $,
                                    J(
                                        {
                                            componentId: t ? `${t}-inputControl` : void 0,
                                            iconSource: le,
                                            size: c,
                                            type: a,
                                            variant: _e,
                                            value: T,
                                            withClear: Ee,
                                            highlighted: me,
                                            selectOnFocus: G.selectOnFocus,
                                            maxLength: G.maxLength,
                                            classMix: k,
                                            onFocus: ae,
                                            onChange: q,
                                            onClear: ue,
                                        },
                                        x,
                                    ),
                                ),
                            ),
                            ce &&
                                r().createElement(
                                    'div',
                                    { className: K.helper },
                                    r().createElement(X, {
                                        variant: _e,
                                        show: A && (G.isPermanentHelper || me),
                                        helperText: F || ce,
                                        helperIcon: G.helperIconSource,
                                        classMix: S,
                                    }),
                                ),
                        );
                    };
                var ue = u(3618),
                    ne = u(5585),
                    re = u(3457),
                    ae = u(2106);
                const oe = ['active', 'className', 'children', 'size'];
                function se() {
                    return (
                        (se = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        se.apply(null, arguments)
                    );
                }
                const ie = (0, n.memo)(function (e) {
                        let t = e.active,
                            u = e.className,
                            n = e.children,
                            a = e.size,
                            s = void 0 === a ? ae.q.small : a,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var u = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        u[n] = e[n];
                                    }
                                return u;
                            })(e, oe);
                        return r().createElement(
                            'div',
                            { className: o()('ToggleButton_base_95', u, t && 'ToggleButton_base__active_99') },
                            r().createElement(
                                re.u5,
                                se({}, i, { mixClass: 'ToggleButton_button_79', type: ae.L.secondary, size: s }),
                                n,
                            ),
                            r().createElement('div', { className: 'ToggleButton_overlay_5c' }),
                            r().createElement('div', { className: 'ToggleButton_indicator_0b' }),
                        );
                    }),
                    le = 'FilterPopover_divider_7f',
                    ce = 'FilterPopover_filterBlock_1e',
                    de = 'FilterPopover_name_49',
                    _e = 'FilterPopover_filters_88',
                    me = 'FilterPopover_filterItem_0c',
                    Ee = (0, g.Pi)(({ className: e, onClose: t }) => {
                        const u = D(),
                            a = u.model,
                            s = u.controls;
                        return (
                            (0, n.useEffect)(() => {
                                const e = () => {
                                    t();
                                };
                                return (
                                    document.addEventListener('click', e),
                                    () => {
                                        document.removeEventListener('click', e);
                                    }
                                );
                            }, [t]),
                            r().createElement(
                                'div',
                                { className: o()('FilterPopover_base_85', e) },
                                r().createElement(
                                    'div',
                                    { className: 'FilterPopover_bg_ed' },
                                    r().createElement(
                                        'div',
                                        {
                                            className: 'FilterPopover_content_da',
                                            onClick: (e) => {
                                                e.nativeEvent.stopPropagation(),
                                                    e.nativeEvent.stopImmediatePropagation();
                                            },
                                        },
                                        r().createElement(
                                            y.i,
                                            { body: R.strings.dialogs.common.error.cancel() },
                                            r().createElement('div', {
                                                className: 'FilterPopover_closeBtn_51',
                                                onClick: t,
                                                onMouseEnter: c.O.sound.play.highlight,
                                            }),
                                        ),
                                        r().createElement(
                                            'div',
                                            { className: 'FilterPopover_title_7b' },
                                            R.strings.halloween_lobby.carousel.popover.title(),
                                        ),
                                        r().createElement(ue.w, {
                                            text: R.strings.halloween_lobby.carousel.popover.header(),
                                            classMix: 'FilterPopover_header_f1',
                                            binding: {
                                                filteredCount: a.computes.filteredVehicleLenght(),
                                                allCount: a.computes.allVehicleLenght(),
                                            },
                                        }),
                                        r().createElement('div', {
                                            className: o()(le, 'FilterPopover_divider__top_d3'),
                                        }),
                                        r().createElement(
                                            'div',
                                            { className: ce },
                                            r().createElement(
                                                'div',
                                                { className: de },
                                                R.strings.halloween_lobby.carousel.popover.type(),
                                            ),
                                            r().createElement(
                                                'div',
                                                { className: _e },
                                                C.map((e) =>
                                                    r().createElement(
                                                        y.i,
                                                        {
                                                            key: e,
                                                            header: R.strings.menu.carousel_tank_filter.$dyn(e),
                                                            body: R.strings.halloween_lobby.carousel.popover.typeBody(),
                                                        },
                                                        r().createElement(
                                                            ie,
                                                            {
                                                                className: me,
                                                                active: a.computes.checkTypes(e),
                                                                onClick: () => s.filter(w.VehicleType, e),
                                                            },
                                                            r().createElement('div', {
                                                                className: 'FilterPopover_vehType_1f',
                                                                style: {
                                                                    backgroundImage: `url('R.images.gui.maps.icons.filters.tanks.${e}')`,
                                                                },
                                                            }),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        ),
                                        r().createElement(
                                            'div',
                                            { className: ce },
                                            r().createElement(
                                                'div',
                                                { className: de },
                                                R.strings.halloween_lobby.carousel.popover.nation(),
                                            ),
                                            r().createElement(
                                                'div',
                                                { className: _e },
                                                m.UI(a.orderedNation.get(), (e) =>
                                                    r().createElement(
                                                        y.i,
                                                        {
                                                            key: e,
                                                            header: R.strings.menu.nations.$dyn(e),
                                                            body: R.strings.halloween_lobby.carousel.popover.nationBody(),
                                                        },
                                                        r().createElement(
                                                            ie,
                                                            {
                                                                className: me,
                                                                active: a.computes.checkNations(e),
                                                                onClick: () => s.filter(w.Nation, e),
                                                            },
                                                            r().createElement('div', {
                                                                className: o()(
                                                                    'FilterPopover_flag_fd',
                                                                    a.computes.checkNations(e) &&
                                                                        'FilterPopover_flag__active_bc',
                                                                ),
                                                                style: {
                                                                    backgroundImage: `url('R.images.gui.maps.icons.filters.nations.${e}')`,
                                                                },
                                                            }),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        ),
                                        r().createElement(
                                            'div',
                                            { className: ce },
                                            r().createElement(
                                                'div',
                                                { className: de },
                                                R.strings.halloween_lobby.carousel.popover.special(),
                                            ),
                                            r().createElement(
                                                'div',
                                                { className: _e },
                                                r().createElement(
                                                    y.i,
                                                    {
                                                        header: R.strings.tank_carousel_filter.tooltip.rented.header(),
                                                        body: R.strings.tank_carousel_filter.tooltip.rented.body(),
                                                    },
                                                    r().createElement(
                                                        ie,
                                                        {
                                                            className: me,
                                                            active: a.filter.get().isRent,
                                                            onClick: () => s.filter(w.IsRent, !a.filter.get().isRent),
                                                        },
                                                        r().createElement('div', {
                                                            className: 'FilterPopover_rent_be',
                                                        }),
                                                    ),
                                                ),
                                                r().createElement(
                                                    y.i,
                                                    {
                                                        header: R.strings.halloween_lobby.carousel.primary.tooltipHeader(),
                                                        body: R.strings.halloween_lobby.carousel.primary.tooltipBody(),
                                                    },
                                                    r().createElement(
                                                        ie,
                                                        {
                                                            className: me,
                                                            active: a.filter.get().isFavorite,
                                                            onClick: () =>
                                                                s.filter(w.IsFavorite, !a.filter.get().isFavorite),
                                                        },
                                                        r().createElement('div', {
                                                            className: 'FilterPopover_favorite_f0',
                                                        }),
                                                    ),
                                                ),
                                                r().createElement(
                                                    y.i,
                                                    {
                                                        header: R.strings.halloween_lobby.carousel.premium.tooltipHeader(),
                                                        body: R.strings.halloween_lobby.carousel.premium.tooltipBody(),
                                                    },
                                                    r().createElement(
                                                        ie,
                                                        {
                                                            className: me,
                                                            active: a.filter.get().isPremium,
                                                            onClick: () =>
                                                                s.filter(w.IsPremium, !a.filter.get().isPremium),
                                                        },
                                                        r().createElement('div', {
                                                            className: 'FilterPopover_premium_14',
                                                        }),
                                                    ),
                                                ),
                                                r().createElement(
                                                    y.i,
                                                    {
                                                        header: R.strings.tank_carousel_filter.tooltip.elite.header(),
                                                        body: R.strings.tank_carousel_filter.tooltip.elite.body(),
                                                    },
                                                    r().createElement(
                                                        ie,
                                                        {
                                                            className: me,
                                                            active: a.filter.get().isElite,
                                                            onClick: () => s.filter(w.IsElite, !a.filter.get().isElite),
                                                        },
                                                        r().createElement('div', {
                                                            className: 'FilterPopover_elite_96',
                                                        }),
                                                    ),
                                                ),
                                            ),
                                        ),
                                        r().createElement('div', {
                                            className: o()(le, 'FilterPopover_divider__bottom_5d'),
                                        }),
                                        r().createElement(
                                            'div',
                                            { className: 'FilterPopover_search_ab' },
                                            r().createElement(te, {
                                                size: z,
                                                type: M,
                                                onChange: (e) => s.filter(w.SearchName, e),
                                                value: a.filter.get().name,
                                                options: { maxLength: 50, debounceTime: 500, isPermanentHelper: !0 },
                                                placeholder: R.strings.halloween_lobby.carousel.popover.search(),
                                                controlClassMix: 'FilterPopover_searchInput_5a',
                                                tooltipArgs: {
                                                    header: R.strings.tank_carousel_filter.tooltip.searchInput.header(),
                                                    body: (0, ne.uF)(
                                                        R.strings.tank_carousel_filter.tooltip.searchInput.body(),
                                                        { count: 50 },
                                                    ),
                                                },
                                            }),
                                        ),
                                    ),
                                    r().createElement('div', { className: 'FilterPopover_arrow_f8' }),
                                ),
                            )
                        );
                    }),
                    ge = r().memo(function ({ className: e, onClick: t }) {
                        const u = (0, n.useState)(!1),
                            a = u[0],
                            s = u[1],
                            i = (0, n.useState)(!1),
                            l = i[0],
                            d = i[1];
                        return r().createElement(
                            'div',
                            {
                                className: o()(
                                    'CloseButton_base_8f',
                                    a && 'CloseButton_base__hover_1c',
                                    l && 'CloseButton_base__active_10',
                                    e,
                                ),
                                onClick: () => {
                                    c.O.sound.play.click(), t();
                                },
                                onMouseEnter: () => {
                                    c.O.sound.play.highlight(), s(!0);
                                },
                                onMouseLeave: () => {
                                    s(!1), d(!1);
                                },
                                onMouseDown: () => d(!0),
                                onMouseUp: () => d(!1),
                            },
                            r().createElement('div', { className: 'CloseButton_default_b4' }),
                            r().createElement('div', { className: 'CloseButton_hover_56' }),
                        );
                    }),
                    he = r().memo(function ({ className: e, filteredCount: t, allCount: u, onReset: n }) {
                        const a = 0 === t;
                        return r().createElement(
                            'div',
                            { className: o()('Header_base_54', t === u && 'Header_base__hidden_e7', e) },
                            r().createElement(
                                'div',
                                { className: 'Header_header_9b' },
                                r().createElement(ue.w, {
                                    classMix: o()('Header_label_5b', a && 'Header_label__blink_54'),
                                    text: R.strings.halloween_lobby.carousel.filter.count(),
                                    binding: {
                                        filteredCount: r().createElement(
                                            'div',
                                            {
                                                className: o()(
                                                    'Header_filteredCount_6f',
                                                    a && 'Header_filteredCount__red_3d',
                                                ),
                                            },
                                            t,
                                        ),
                                        allCount: u,
                                    },
                                }),
                                r().createElement(
                                    y.i,
                                    {
                                        header: R.strings.halloween_lobby.carousel.filterReset.tooltipHeader(),
                                        body: R.strings.halloween_lobby.carousel.filterReset.tooltipBody(),
                                    },
                                    r().createElement(
                                        'div',
                                        null,
                                        r().createElement(ge, { className: 'Header_closeButton_48', onClick: n }),
                                    ),
                                ),
                            ),
                            r().createElement('div', { className: 'Header_line_5b' }),
                        );
                    }),
                    pe = 'Filters_button_3e',
                    Ae = (0, g.Pi)(({ className: e }) => {
                        const t = D(),
                            u = t.model,
                            a = t.controls,
                            s = (0, n.useState)(!1),
                            i = s[0],
                            l = s[1],
                            c = u.filter.get();
                        return r().createElement(
                            'div',
                            { className: o()('Filters_base_69', e) },
                            r().createElement(he, {
                                filteredCount: u.computes.filteredVehicleLenght(),
                                allCount: u.computes.allVehicleLenght(),
                                onReset: a.resetFilter,
                                className: 'Filters_header_bf',
                            }),
                            r().createElement(
                                'div',
                                { className: 'Filters_popoverButton_c4' },
                                i && r().createElement(Ee, { className: 'Filters_popover_89', onClose: () => l(!1) }),
                                r().createElement(
                                    P,
                                    {
                                        className: pe,
                                        tooltipHeader: R.strings.halloween_lobby.carousel.filters.tooltipHeader(),
                                        tooltipBody: R.strings.halloween_lobby.carousel.filters.tooltipBody(),
                                        onClick: () => {
                                            l(!i);
                                        },
                                        selected: i,
                                        hideIndicator: !0,
                                    },
                                    r().createElement('div', { className: 'Filters_filters_08' }),
                                ),
                            ),
                            r().createElement(
                                P,
                                {
                                    className: pe,
                                    tooltipHeader: R.strings.halloween_lobby.carousel.primary.tooltipHeader(),
                                    tooltipBody: R.strings.halloween_lobby.carousel.primary.tooltipBody(),
                                    onClick: (e) => a.filter(w.IsFavorite, e),
                                    selected: c.isFavorite,
                                },
                                r().createElement('div', { className: 'Filters_favorite_cb' }),
                            ),
                            r().createElement(
                                P,
                                {
                                    className: pe,
                                    tooltipHeader: R.strings.halloween_lobby.carousel.premium.tooltipHeader(),
                                    tooltipBody: R.strings.halloween_lobby.carousel.premium.tooltipBody(),
                                    onClick: (e) => a.filter(w.IsPremium, e),
                                    selected: c.isPremium,
                                },
                                r().createElement('div', { className: 'Filters_premium_39' }),
                            ),
                        );
                    });
                var Fe = u(6349),
                    ve = u(7078),
                    fe = u(7522),
                    Ce = u(7030);
                const be = (e) => {
                        const t = R.images.gui.maps.icons.vehicle.$dyn(e);
                        return null === t ? R.images.gui.maps.icons.vehicle.noImage() : t;
                    },
                    Be = { ja: 14, zh_sg: 14, zh_tw: 14, zh_cn: 14, ko: 12 }[R.strings.settings.LANGUAGE_CODE()] || 7,
                    De = r().memo(function ({
                        name: e,
                        nation: t,
                        invID: u,
                        intCD: a,
                        type: s,
                        isSelected: i,
                        isFavorite: l,
                        isPremium: d,
                        icon: _,
                        isPremiumIGR: m,
                        isElite: E,
                        vehicleState: g,
                        isCarouselLocked: h = !1,
                        className: p,
                        isDragging: A,
                        isRent: F,
                        onClick: f,
                    }) {
                        const C = (0, n.useState)(!1),
                            b = C[0],
                            B = C[1],
                            D = g !== v.Default,
                            w = D ? R.strings.halloween_lobby.carousel.card.$dyn(g) : '',
                            y = `${s}${d || E ? '_premium' : ''}${i ? '_active' : ''}`,
                            k = (0, Ce.useSpring)({
                                to: { width: i || b ? w.length * Be + 'rem' : '0', maxWidth: '120rem' },
                                from: { width: '0' },
                                delay: i ? 0 : 150,
                                immediate: i,
                                config: { duration: 300, easing: fe.Z.easeInOutCubic },
                            });
                        return r().createElement(
                            'div',
                            {
                                className: o()(
                                    'TankCard_base_41',
                                    i && 'TankCard_base__selected_74',
                                    !i && !h && 'TankCard_base__active_fc',
                                    b && 'TankCard_base__hover_dc',
                                    A && 'TankCard_base__dragging_2f',
                                    p,
                                ),
                            },
                            r().createElement('div', {
                                className: 'TankCard_flag_d4',
                                style: { backgroundImage: `url('R.images.gui.maps.icons.flags.c_160x100.${t}')` },
                            }),
                            r().createElement('div', {
                                className: 'TankCard_icon_7a',
                                style: { backgroundImage: `url('${be(_)}')` },
                            }),
                            r().createElement('div', { className: 'TankCard_selected_6e' }),
                            r().createElement(
                                ve.t,
                                {
                                    targetId: R.views.halloween.lobby.widgets.CarouselDefView('resId'),
                                    args: { tooltipId: 'halloweenCarouselVehicleDef', intCD: a },
                                    ignoreShowDelay: !0,
                                },
                                r().createElement('div', {
                                    className: 'TankCard_placeholder_ba',
                                    onClick: () => {
                                        h || i || (c.O.sound.play.click(), f(u));
                                    },
                                    onMouseEnter: () => {
                                        h || i || (B(!0), c.O.sound.play.highlight());
                                    },
                                    onMouseLeave: () => B(!1),
                                }),
                            ),
                            D &&
                                r().createElement(
                                    'div',
                                    { className: 'TankCard_disabled_2a' },
                                    r().createElement('div', { className: 'TankCard_disableBackground_d8' }),
                                    r().createElement(
                                        'div',
                                        { className: 'TankCard_state_3b' },
                                        r().createElement('div', {
                                            className: 'TankCard_stateIcon_6e',
                                            style: {
                                                backgroundImage: `url('R.images.halloween.gui.maps.icons.carouselDef.status.${g}')`,
                                            },
                                        }),
                                        r().createElement(
                                            Ce.animated.div,
                                            {
                                                className: 'TankCard_stateText_33',
                                                style: k,
                                                lang: R.strings.settings.LANGUAGE_CODE(),
                                            },
                                            r().createElement(Fe.l, { content: w }),
                                        ),
                                    ),
                                ),
                            !D &&
                                m &&
                                r().createElement(ue.w, {
                                    classMix: 'TankCard_igrLabel_b6',
                                    text: R.strings.halloween_lobby.carousel.card.inCN(),
                                    binding: {
                                        icon: r().createElement('div', { className: 'TankCard_igrLabelIcon_40' }),
                                    },
                                }),
                            F &&
                                g !== v.Rented &&
                                r().createElement(
                                    'div',
                                    { className: 'TankCard_rent_d3' },
                                    R.strings.halloween_lobby.carousel.card.rent(),
                                ),
                            i && r().createElement('div', { className: 'TankCard_cload_3e' }),
                            l && r().createElement('div', { className: 'TankCard_favorite_ce' }),
                            r().createElement(
                                'div',
                                {
                                    className: o()(
                                        'TankCard_vehName_12',
                                        i && 'TankCard_vehName__light_b2',
                                        d && 'TankCard_vehName__premium_f1',
                                        m && 'TankCard_vehName__igr_48',
                                    ),
                                },
                                r().createElement('div', {
                                    className: o()('TankCard_vehType_38', (d || E) && 'TankCard_vehType__premium_82'),
                                    style: {
                                        backgroundImage: `url('R.images.halloween.gui.maps.icons.carouselDef.c_38x38.${y}')`,
                                    },
                                }),
                                m && r().createElement('div', { className: 'TankCard_igr_da' }),
                                r().createElement('div', { className: 'TankCard_shortName_44' }, e),
                            ),
                        );
                    });
                function we() {
                    return (
                        (we = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        we.apply(null, arguments)
                    );
                }
                const ye = 168 * c.O.view.getScale(),
                    ke = 15 * c.O.view.getScale(),
                    Se = (0, g.Pi)(({ className: e }) => {
                        const t = D(),
                            u = t.model,
                            a = t.controls,
                            c = (0, _.GS)(),
                            g = u.root.get().selectedVehicle,
                            A = (0, i.T5)({ settings: { step: { type: 'fixed', value: ye } } }),
                            F = (0, E.m)(A),
                            v = (0, n.useRef)(null),
                            f = (0, n.useRef)(null),
                            C = (0, n.useState)(!1),
                            b = C[0],
                            B = C[1],
                            w = (0, n.useState)(h.Ij.Left),
                            y = w[0],
                            k = w[1],
                            S = u.computes.filteredVehicles(),
                            x = (0, n.useCallback)(() => {
                                A.applyStepTo(i.Nm.Next);
                            }, [A]),
                            N = (0, n.useCallback)(() => {
                                A.applyStepTo(i.Nm.Prev);
                            }, [A]),
                            T = (0, n.useCallback)(
                                (e) => {
                                    if (0 !== e.value.scrollPosition) {
                                        if (
                                            (A.getContainerSize() || 0) - (A.getWrapperSize() || 0) - 1 <=
                                            e.value.scrollPosition
                                        )
                                            return void k(h.Ij.Right);
                                        k(h.Ij.Center);
                                    } else k(h.Ij.Left);
                                },
                                [A],
                            ),
                            P = (0, n.useCallback)((e) => a.changeVehicle(e), [a]),
                            R = (0, n.useCallback)(() => {
                                if (f.current && v.current) {
                                    const e = v.current.offsetWidth <= f.current.offsetWidth;
                                    B(e), (f.current.style.cursor = e ? '' : 'auto');
                                }
                            }, []),
                            L = (0, n.useCallback)(() => {
                                const e = m.cx(u.computes.filteredVehicles(), (e) => e.invID === g);
                                if (b)
                                    if (void 0 === e) A.applyScroll(0, { immediate: !0 });
                                    else {
                                        const t = ye * e,
                                            u = A.animationScroll.scrollPosition.goal,
                                            n = A.getWrapperSize() || 0,
                                            r = t - u;
                                        if (t < u || (t > n && 0 === u))
                                            return void A.applyScroll(t, { immediate: !1 });
                                        n - r - ke < ye && A.applyScroll(u + ye, { immediate: !1 });
                                    }
                            }, [b, g]),
                            O = (0, d.z)(T);
                        return (
                            (0, n.useEffect)(
                                () => (
                                    A.events.on('change', O),
                                    A.events.on('recalculateContent', R),
                                    A.events.on('resizeHandled', R),
                                    () => {
                                        A.events.off('change', O),
                                            A.events.off('recalculateContent', R),
                                            A.events.off('resizeHandled', R);
                                    }
                                ),
                                [A.events, O, R],
                            ),
                            (0, n.useEffect)(
                                () =>
                                    (0, l.v)(() =>
                                        (0, l.v)(() => {
                                            R();
                                        }),
                                    ),
                                [R, c],
                            ),
                            (0, n.useEffect)(() => (0, l.v)(() => (0, l.v)(L)), [L, S.length]),
                            r().createElement(
                                'div',
                                { className: o()('CarouselApp_base_5f', e) },
                                r().createElement(Ae, { className: 'CarouselApp_filters_ea' }),
                                r().createElement(p.A, {
                                    className: 'CarouselApp_leftBtn_79',
                                    type: p.q.Left,
                                    isDisabled: y === h.Ij.Left || !b,
                                    onClick: x,
                                }),
                                r().createElement(
                                    'div',
                                    {
                                        className: o()(
                                            'CarouselApp_scroll_8a',
                                            y === h.Ij.Left && 'CarouselApp_scroll__left_0a',
                                            y === h.Ij.Right && 'CarouselApp_scroll__right_9f',
                                            !b && 'CarouselApp_scroll__empty_71',
                                        ),
                                        ref: v,
                                    },
                                    r().createElement(
                                        s.X.Horizontal.Area,
                                        {
                                            api: A,
                                            classNames: {
                                                content: o()(
                                                    'CarouselApp_content_7d',
                                                    !b && 'CarouselApp_content__noScroll_06',
                                                ),
                                            },
                                        },
                                        r().createElement(
                                            'div',
                                            { className: 'CarouselApp_items_b1', ref: f },
                                            m.UI(S, (e) =>
                                                r().createElement(
                                                    De,
                                                    we({ key: e.intCD, className: 'CarouselApp_item_9b' }, e, {
                                                        onClick: P,
                                                        isSelected: e.invID === g,
                                                        isCarouselLocked: u.computes.carouselLocked(),
                                                        isDragging: b && F.type === E.G.Dragging,
                                                    }),
                                                ),
                                            ),
                                        ),
                                        r().createElement('div', { className: 'CarouselApp_empty_12' }),
                                    ),
                                ),
                                r().createElement(p.A, {
                                    className: 'CarouselApp_rightBtn_22',
                                    type: p.q.Right,
                                    isDisabled: y === h.Ij.Right || !b,
                                    onClick: N,
                                }),
                            )
                        );
                    });
                (0, n.memo)(function (e) {
                    const t = (0, n.useMemo)(
                        () => ({ rootId: R.views.halloween.lobby.widgets.CarouselDefView('resId') }),
                        [],
                    );
                    return r().createElement(B, { options: t }, r().createElement(Se, e));
                });
            },
            7505: (e, t, u) => {
                u.d(t, { Ij: () => I });
                var n = u(6483),
                    r = u.n(n),
                    a = u(794),
                    o = u(6358),
                    s = u(1856),
                    i = u(3815),
                    l = u(5415),
                    c = u(481),
                    d = u(9480),
                    _ = u(3403),
                    m = u(6179),
                    E = u.n(m);
                const g = {
                    base: 'Carousel_base_15',
                    leftBtn: 'Carousel_leftBtn_09',
                    rightBtn: 'Carousel_rightBtn_bf',
                    scroll: 'Carousel_scroll_38',
                    content__noScroll: 'Carousel_content__noScroll_e7',
                    items: 'Carousel_items_fc',
                    item: 'Carousel_item_9a',
                };
                var h = u(7621),
                    p = u(3649);
                const A = {
                    base: 'VehicleType_base_13',
                    base__c_24x24: 'VehicleType_base__c_24x24_8a',
                    base__c_38x38: 'VehicleType_base__c_38x38_c5',
                    base__c_48x48: 'VehicleType_base__c_48x48_83',
                    base__c_83x74: 'VehicleType_base__c_83x74_a3',
                };
                let F, v;
                !(function (e) {
                    (e.C24x24 = 'c_24x24'), (e.C38x38 = 'c_38x38'), (e.C48x48 = 'c_48x48'), (e.C83x74 = 'c_83x74');
                })(F || (F = {})),
                    (function (e) {
                        (e.Silver = 'silver'),
                            (e.Gray = 'gray'),
                            (e.Elite = 'elite'),
                            (e.WhiteSpanish = 'whitespanish'),
                            (e.WhiteSpanishBright = 'whitespanish_bright');
                    })(v || (v = {}));
                const f = (0, m.memo)(function ({ type: e, color: t, className: u, size: n = F.C24x24 }) {
                    return E().createElement('div', {
                        className: r()(A.base, A[`base__${n}`], u),
                        style: {
                            backgroundImage: `url('R.images.halloween.gui.maps.icons.vehicleTypes.flat.${t}.${n}.${(0, p.BN)(e)}')`,
                        },
                    });
                });
                var C = u(6349),
                    b = u(7078),
                    B = u(2056),
                    D = u(3138),
                    w = u(2112),
                    y = u(7522),
                    k = u(7030),
                    S = u(824);
                const x = {
                        base: 'Card_base_6b',
                        base__selected: 'Card_base__selected_0c',
                        base__dragging: 'Card_base__dragging_b9',
                        icon: 'Card_icon_b6',
                        base__hover: 'Card_base__hover_e9',
                        selected: 'Card_selected_f8',
                        placeholder: 'Card_placeholder_aa',
                        base__active: 'Card_base__active_75',
                        disabled: 'Card_disabled_91',
                        disableBackground: 'Card_disableBackground_52',
                        daily: 'Card_daily_b7',
                        state: 'Card_state_a2',
                        stateText: 'Card_stateText_d3',
                        stateIcon: 'Card_stateIcon_7b',
                        base__inPlatoon: 'Card_base__inPlatoon_c8',
                        base__inBattle: 'Card_base__inBattle_a6',
                        base__locked: 'Card_base__locked_b6',
                        cload: 'Card_cload_05',
                        vehName: 'Card_vehName_ec',
                        vehName__light: 'Card_vehName__light_c3',
                        vehType: 'Card_vehType_e5',
                        label: 'Card_label_ff',
                    },
                    N = {
                        france_F17_AMX_13_90_Halloween_event: S.UA,
                        uk_GB24_Centurion_Mk3_Halloween_event: S.SV,
                        ussr_R171_IS_3_II_hw21: S.nJ,
                        usa_A100_T49_Halloween_event: S._k,
                        ussr_R40_T_54_Halloween_event: S.mM,
                        italy_It19_Progetto_C50_mod_66_hw21: S.TL,
                    },
                    T = { ja: 14, zh_sg: 14, zh_tw: 14, zh_cn: 14, ko: 12 }[R.strings.settings.LANGUAGE_CODE()] || 7,
                    P = E().memo(
                        ({
                            intCD: e,
                            invID: t,
                            name: u,
                            iconName: n,
                            vehicleType: a,
                            vehicleState: o,
                            isSelected: s,
                            hasDaily: i,
                            isLockedCarousel: l = !1,
                            isDragging: c,
                            className: d,
                            onClick: _,
                        }) => {
                            const g = (0, m.useState)(!1),
                                p = g[0],
                                A = g[1],
                                S = o !== w.g.Default,
                                P = S ? R.strings.halloween_lobby.carousel.card.$dyn(o) : '',
                                L = () => {
                                    l || s || (n in N && D.O.sound.play.sound(N[n]), _(t));
                                },
                                O = (0, k.useSpring)({
                                    to: { width: s || p ? P.length * T + 'rem' : '0', maxWidth: '120rem' },
                                    from: { width: '0' },
                                    delay: s ? 0 : 150,
                                    immediate: s,
                                    config: { duration: 300, easing: y.Z.easeInOutCubic },
                                });
                            return E().createElement(
                                'div',
                                {
                                    className: r()(
                                        x.base,
                                        s && x.base__selected,
                                        x[`base__${o}`],
                                        !l && !s && x.base__active,
                                        p && x.base__hover,
                                        c && x.base__dragging,
                                        d,
                                    ),
                                },
                                i &&
                                    E().createElement(
                                        B.u,
                                        {
                                            targetId: R.views.halloween.lobby.widgets.CarouselView('resId'),
                                            contentId: R.views.halloween.lobby.tooltips.SimpleFormatTooltip('resId'),
                                            args: { id: 'dailyQuest' },
                                        },
                                        E().createElement(
                                            'div',
                                            { onClick: L },
                                            E().createElement(h._, { size: h.G.C36x36, className: x.daily, gray: !s }),
                                        ),
                                    ),
                                E().createElement('div', {
                                    className: x.icon,
                                    style: {
                                        backgroundImage: `url('${R.images.gui.maps.icons.vehicle.$dyn(`${n}${S ? '_inactive' : ''}`)}')`,
                                    },
                                }),
                                E().createElement('div', { className: x.selected }),
                                E().createElement(
                                    b.t,
                                    {
                                        targetId: R.views.halloween.lobby.widgets.CarouselView('resId'),
                                        args: { tooltipId: 'halloweenCarouselVehicle', intCD: e },
                                        isEnabled: !0,
                                    },
                                    E().createElement('div', {
                                        className: x.placeholder,
                                        onClick: L,
                                        onMouseEnter: () => {
                                            s || l || (A(!0), D.O.sound.play.highlight());
                                        },
                                        onMouseLeave: () => A(!1),
                                    }),
                                ),
                                S &&
                                    E().createElement(
                                        'div',
                                        { className: x.disabled },
                                        E().createElement('div', { className: x.disableBackground }),
                                        E().createElement(
                                            'div',
                                            { className: x.state },
                                            E().createElement('div', { className: x.stateIcon }),
                                            E().createElement(
                                                k.animated.div,
                                                {
                                                    className: x.stateText,
                                                    style: O,
                                                    lang: R.strings.settings.LANGUAGE_CODE(),
                                                },
                                                E().createElement(C.l, { content: P }),
                                            ),
                                        ),
                                    ),
                                s && E().createElement('div', { className: x.cload }),
                                E().createElement(
                                    'div',
                                    { className: r()(x.vehName, s && x.vehName__light) },
                                    E().createElement(f, {
                                        size: F.C38x38,
                                        color: s ? v.WhiteSpanishBright : v.WhiteSpanish,
                                        type: a,
                                        className: x.vehType,
                                    }),
                                    u,
                                ),
                            );
                        },
                    );
                var L = u(4205),
                    O = u(9216);
                function M() {
                    return (
                        (M = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var u = arguments[t];
                                      for (var n in u) ({}).hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                  }
                                  return e;
                              }),
                        M.apply(null, arguments)
                    );
                }
                let I;
                !(function (e) {
                    (e.Left = 'left'), (e.Center = 'center'), (e.Right = 'right');
                })(I || (I = {})),
                    (0, _.Pi)(({ className: e }) => {
                        const t = (0, O.t)(),
                            u = t.model,
                            n = t.controls,
                            _ = (0, l.GS)(),
                            h = u.root.get().selectedVehicle,
                            p = (0, o.T5)(),
                            A = (0, c.m)(p),
                            F = (0, m.useRef)(null),
                            v = (0, m.useRef)(null),
                            f = (0, m.useState)(!1),
                            C = f[0],
                            b = f[1],
                            B = (0, m.useState)(I.Left),
                            D = B[0],
                            w = B[1],
                            y = (0, m.useCallback)(() => {
                                p.applyStepTo(o.Nm.Next);
                            }, [p]),
                            k = (0, m.useCallback)(() => {
                                p.applyStepTo(o.Nm.Prev);
                            }, [p]),
                            S = (0, m.useCallback)(() => {
                                if (v.current && F.current) {
                                    const e = p.getContainerSize(),
                                        t = p.getWrapperSize() < e;
                                    b(t), (v.current.style.cursor = t ? '' : 'auto');
                                }
                            }, [p]),
                            x = (0, m.useCallback)(() => {
                                const e = p.getBounds(),
                                    t = e[0],
                                    u = e[1],
                                    n = p.animationScroll.scrollPosition.goal;
                                w(n === t ? I.Left : n === u ? I.Right : I.Center);
                            }, [p]),
                            N = (0, m.useCallback)(() => {
                                const e = d.cx(u.vehicles.get(), (e) => e.invID === h);
                                void 0 !== e && C && p.applyScroll(160 * e, { immediate: !1 });
                            }, [C, u.vehicles, p, h]),
                            T = (0, i.z)(x);
                        (0, m.useEffect)(
                            () => (
                                p.events.on('change', T),
                                p.events.on('recalculateContent', S),
                                p.events.on('resizeHandled', S),
                                () => {
                                    p.events.off('change', T),
                                        p.events.off('recalculateContent', S),
                                        p.events.off('resizeHandled', S);
                                }
                            ),
                            [p.events, T, S],
                        ),
                            (0, m.useEffect)(
                                () =>
                                    (0, s.v)(() =>
                                        (0, s.v)(() => {
                                            S();
                                        }),
                                    ),
                                [S, _],
                            ),
                            (0, m.useEffect)(
                                () =>
                                    (0, s.v)(() => {
                                        N();
                                    }),
                                [N],
                            );
                        const R = (0, m.useCallback)(
                            (e) => {
                                n.changeVehicle(e);
                            },
                            [n],
                        );
                        return E().createElement(
                            'div',
                            { className: r()(g.base, e) },
                            C &&
                                E().createElement(L.A, {
                                    className: g.leftBtn,
                                    type: L.q.Left,
                                    isDisabled: D === I.Left,
                                    onClick: y,
                                }),
                            E().createElement(
                                'div',
                                { className: g.scroll, ref: F },
                                E().createElement(
                                    a.X.Horizontal.Area.Default,
                                    { api: p, classNames: { wrapper: r()(g.content, !C && g.content__noScroll) } },
                                    E().createElement(
                                        'div',
                                        { className: g.items, ref: v },
                                        d.UI(u.vehicles.get(), (e) =>
                                            E().createElement(
                                                P,
                                                M(
                                                    {
                                                        key: e.invID,
                                                        className: g.item,
                                                        isSelected: h === e.invID,
                                                        isLockedCarousel: u.computes.getCarouselLock(),
                                                        isDragging: C && A.type === c.G.Dragging,
                                                        onClick: R,
                                                    },
                                                    e,
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                            C &&
                                E().createElement(L.A, {
                                    className: g.rightBtn,
                                    type: L.q.Right,
                                    isDisabled: D === I.Right,
                                    onClick: k,
                                }),
                        );
                    });
            },
            4205: (e, t, u) => {
                u.d(t, { A: () => c, q: () => l });
                var n = u(6483),
                    r = u.n(n),
                    a = u(3138),
                    o = u(6179),
                    s = u.n(o);
                const i = {
                    base: 'SliderBtn_base_1e',
                    base__left: 'SliderBtn_base__left_1d',
                    base__right: 'SliderBtn_base__right_c8',
                    base__disabled: 'SliderBtn_base__disabled_6d',
                    base__hover: 'SliderBtn_base__hover_2f',
                    hover: 'SliderBtn_hover_b2',
                    base__active: 'SliderBtn_base__active_a9',
                    active: 'SliderBtn_active_4f',
                };
                let l;
                !(function (e) {
                    (e.Left = 'left'), (e.Right = 'right');
                })(l || (l = {}));
                const c = s().memo(function ({ type: e, className: t, isDisabled: u = !1, onClick: n }) {
                    const l = (0, o.useState)(!1),
                        c = l[0],
                        d = l[1],
                        _ = (0, o.useState)(!1),
                        m = _[0],
                        E = _[1];
                    return s().createElement(
                        'div',
                        {
                            className: r()(
                                i.base,
                                i[`base__${e}`],
                                m && i.base__hover,
                                c && i.base__active,
                                u && i.base__disabled,
                                t,
                            ),
                            onMouseEnter: () => {
                                u || (a.O.sound.play.highlight(), E(!0));
                            },
                            onMouseLeave: () => {
                                E(!1), d(!1);
                            },
                            onClick: () => {
                                u || (a.O.sound.play.click(), n());
                            },
                            onMouseUp: () => d(!1),
                            onMouseDown: () => d(!0),
                        },
                        !u && s().createElement('div', { className: i.hover }),
                        !u && s().createElement('div', { className: i.active }),
                    );
                });
            },
            9216: (e, t, u) => {
                u.d(t, { t: () => i });
                var n = u(3215),
                    r = u(2112),
                    a = u(9480),
                    o = u(3946);
                const s = (0, n.q)()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object(), vehicles: e.array('vehicles', []) },
                                u = (0, o.Om)(() => !a.yW(t.vehicles.get(), (e) => e.vehicleState !== r.g.InPlatoon));
                            return Object.assign({}, t, { computes: { getCarouselLock: u } });
                        },
                        ({ externalModel: e }) => ({
                            changeVehicle: e.createCallback((e) => ({ invID: e }), 'onChangeVehicle'),
                        }),
                    ),
                    i = (s[0], s[1]);
            },
            824: (e, t, u) => {
                u.d(t, { SV: () => r, TL: () => i, UA: () => n, _k: () => o, mM: () => s, nJ: () => a });
                const n = 'ev_hw_hangar_ui_tank_hornet',
                    r = 'ev_hw_hangar_ui_tank_cerberus',
                    a = 'ev_hw_hangar_ui_tank_double',
                    o = 'ev_hw_hangar_ui_tank_grenadier',
                    s = 'ev_hw_hangar_ui_tank_malachite',
                    i = 'ev_hw_hangar_ui_tank_ferrata';
            },
            5585: (e, t, u) => {
                function n(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)[sd])/g, (e) => {
                        const u = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(u, -u)]);
                    });
                }
                u.d(t, { uF: () => n }), u(2862), u(729);
            },
            2112: (e, t, u) => {
                let n, r;
                u.d(t, { g: () => r }),
                    (function (e) {
                        (e.None = 'none'),
                            (e.LightTank = 'lightTank'),
                            (e.MediumTank = 'mediumTank'),
                            (e.HeavyTank = 'heavyTank'),
                            (e.SPG = 'SPG'),
                            (e.AT_SPG = 'AT-SPG');
                    })(n || (n = {})),
                    (function (e) {
                        (e.Default = 'default'),
                            (e.Locked = 'locked'),
                            (e.InBattle = 'inBattle'),
                            (e.InPlatoon = 'inPlatoon');
                    })(r || (r = {}));
            },
            6880: (e, t, u) => {
                u.d(t, { Z: () => n });
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
            372: (e, t, u) => {
                u.d(t, { Z: () => n });
                const n = {
                    base: 'HorizontalBar_base_49',
                    base__nonActive: 'HorizontalBar_base__nonActive_82',
                    leftButton: 'HorizontalBar_leftButton_5f',
                    rightButton: 'HorizontalBar_rightButton_03',
                    track: 'HorizontalBar_track_0d',
                    thumb: 'HorizontalBar_thumb_fd',
                    rail: 'HorizontalBar_rail_32',
                };
            },
            4682: (e, t, u) => {
                u.d(t, { Z: () => n });
                const n = {
                    base: 'HorizontalScroll_base_29',
                    wrapper: 'HorizontalScroll_wrapper_1e',
                    defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                };
            },
            9168: (e, t, u) => {
                u.d(t, { Z: () => n });
                const n = {
                    base: 'VerticalBar_base_f3',
                    base__nonActive: 'VerticalBar_base__nonActive_42',
                    topButton: 'VerticalBar_topButton_d7',
                    bottomButton: 'VerticalBar_bottomButton_06',
                    track: 'VerticalBar_track_df',
                    thumb: 'VerticalBar_thumb_32',
                    rail: 'VerticalBar_rail_43',
                };
            },
            5636: (e, t, u) => {
                u.d(t, { Z: () => n });
                const n = {
                    content: 'VerticalScroll_content_cb',
                    defaultScroll: 'VerticalScroll_defaultScroll_f8',
                    bar: 'VerticalScroll_bar_1e',
                    area: 'VerticalScroll_area_af',
                };
            },
            1699: (e, t, u) => {
                u.d(t, { Z: () => n });
                const n = { base: 'TextOverflow_base_3b' };
            },
            8055: (e, t, u) => {
                u.d(t, { Z: () => n });
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
            9627: (e, t, u) => {
                u.d(t, { Z: () => n });
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
            7629: (e, t, u) => {
                u.d(t, { Z: () => n });
                const n = {
                    noBreakWrapper: 'renderers_noBreakWrapper_10',
                    lineBreak: 'renderers_lineBreak_b5',
                    newLine: 'renderers_newLine_bd',
                    word: 'renderers_word_f3',
                };
            },
            9831: (e, t, u) => {
                u.d(t, { Z: () => n });
                const n = {
                    base: 'KeyIcon_base_5a',
                    base__c28x28: 'KeyIcon_base__c28x28_d5',
                    base__c30x30: 'KeyIcon_base__c30x30_ba',
                    base__c36x36: 'KeyIcon_base__c36x36_dd',
                    base__gray: 'KeyIcon_base__gray_fc',
                    base__c44x44: 'KeyIcon_base__c44x44_bd',
                    base__c70x70: 'KeyIcon_base__c70x70_61',
                    base__c110x110: 'KeyIcon_base__c110x110_7c',
                };
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var u = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](u, u.exports, __webpack_require__), u.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, u, n) => {
            if (!t) {
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, u, n] = deferred[i], a = !0, o = 0; o < t.length; o++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(i--, 1);
                        var s = u();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [t, u, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var u in t)
                __webpack_require__.o(t, u) &&
                    !__webpack_require__.o(e, u) &&
                    Object.defineProperty(e, u, { enumerable: !0, get: t[u] });
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
        (__webpack_require__.j = 786),
        (() => {
            var e = { 786: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        r,
                        [a, o, s] = u,
                        i = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (t && t(u); i < a.length; i++)
                        (r = a[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(5657));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
