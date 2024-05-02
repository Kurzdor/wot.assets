(() => {
    'use strict';
    var __webpack_modules__ = {
            3457: (u, e, t) => {
                t.d(e, { L$: () => l.L, qE: () => l.q, u5: () => E });
                var r = t(6483),
                    n = t.n(r),
                    a = t(7727),
                    o = t(6179),
                    s = t.n(o),
                    i = t(6880),
                    l = t(2106);
                const c = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: r,
                    disabled: c,
                    mixClass: E,
                    soundHover: A,
                    soundClick: d,
                    onMouseEnter: F,
                    onMouseMove: D,
                    onMouseDown: m,
                    onMouseUp: _,
                    onMouseLeave: B,
                    onClick: C,
                }) => {
                    const g = (0, o.useRef)(null),
                        h = (0, o.useState)(t),
                        p = h[0],
                        f = h[1],
                        v = (0, o.useState)(!1),
                        w = v[0],
                        b = v[1],
                        S = (0, o.useState)(!1),
                        T = S[0],
                        y = S[1],
                        x = (0, o.useCallback)(() => {
                            c || (g.current && (g.current.focus(), f(!0)));
                        }, [c]),
                        P = (0, o.useCallback)(
                            (u) => {
                                p && null !== g.current && !g.current.contains(u.target) && f(!1);
                            },
                            [p],
                        ),
                        k = (0, o.useCallback)(
                            (u) => {
                                c || (C && C(u));
                            },
                            [c, C],
                        ),
                        O = (0, o.useCallback)(
                            (u) => {
                                c || (null !== A && (0, a.G)(A), F && F(u), y(!0));
                            },
                            [c, A, F],
                        ),
                        N = (0, o.useCallback)(
                            (u) => {
                                D && D(u);
                            },
                            [D],
                        ),
                        L = (0, o.useCallback)(
                            (u) => {
                                c || (_ && _(u), b(!1));
                            },
                            [c, _],
                        ),
                        M = (0, o.useCallback)(
                            (u) => {
                                c || (null !== d && (0, a.G)(d), m && m(u), t && x(), b(!0));
                            },
                            [c, d, m, x, t],
                        ),
                        I = (0, o.useCallback)(
                            (u) => {
                                c || (B && B(u), b(!1));
                            },
                            [c, B],
                        ),
                        U = n()(
                            i.Z.base,
                            i.Z[`base__${r}`],
                            {
                                [i.Z.base__disabled]: c,
                                [i.Z[`base__${e}`]]: e,
                                [i.Z.base__focus]: p,
                                [i.Z.base__highlightActive]: w,
                                [i.Z.base__firstHover]: T,
                            },
                            E,
                        ),
                        W = n()(i.Z.state, i.Z.state__default);
                    return (
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mousedown', P),
                                () => {
                                    document.removeEventListener('mousedown', P);
                                }
                            ),
                            [P],
                        ),
                        (0, o.useEffect)(() => {
                            f(t);
                        }, [t]),
                        s().createElement(
                            'div',
                            {
                                ref: g,
                                className: U,
                                onMouseEnter: O,
                                onMouseMove: N,
                                onMouseUp: L,
                                onMouseDown: M,
                                onMouseLeave: I,
                                onClick: k,
                            },
                            r !== l.L.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: i.Z.back }),
                                    s().createElement('span', { className: i.Z.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: W },
                                s().createElement('span', { className: i.Z.stateDisabled }),
                                s().createElement('span', { className: i.Z.stateHighlightHover }),
                                s().createElement('span', { className: i.Z.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: i.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const E = (0, o.memo)(c);
            },
            2106: (u, e, t) => {
                let r, n;
                t.d(e, { L: () => r, q: () => n }),
                    (function (u) {
                        (u.main = 'main'),
                            (u.primary = 'primary'),
                            (u.primaryGreen = 'primaryGreen'),
                            (u.primaryRed = 'primaryRed'),
                            (u.secondary = 'secondary'),
                            (u.ghost = 'ghost');
                    })(r || (r = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium');
                    })(n || (n = {}));
            },
            2372: (u, e, t) => {
                t.d(e, { A: () => o });
                var r = t(6179),
                    n = t.n(r),
                    a = t(9916);
                class o extends n().PureComponent {
                    render() {
                        let u;
                        if ('gold' === this.props.format) u = a.B3.GOLD;
                        else u = a.B3.INTEGRAL;
                        const e = a.Z5.getNumberFormat(this.props.value, u);
                        return void 0 !== this.props.value && void 0 !== e ? e : null;
                    }
                }
                o.defaultProps = { format: 'integral' };
            },
            280: (u, e, t) => {
                t.d(e, { z: () => l });
                var r = t(6483),
                    n = t.n(r),
                    a = t(3649),
                    o = t(6179),
                    s = t.n(o),
                    i = t(5287);
                const l = ({
                    binding: u,
                    text: e = '',
                    classMix: t,
                    alignment: r = a.v2.left,
                    formatWithBrackets: l,
                }) => {
                    if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                    const c = l && u ? (0, a.WU)(e, u) : e;
                    return s().createElement(
                        o.Fragment,
                        null,
                        c.split('\n').map((e, l) =>
                            s().createElement(
                                'div',
                                { className: n()(i.Z.base, t), key: `${e}-${l}` },
                                (0, a.Uw)(e, r, u).map((u, e) =>
                                    s().createElement(o.Fragment, { key: `${e}-${u}` }, u),
                                ),
                            ),
                        ),
                    );
                };
            },
            9766: (u, e, t) => {
                t.d(e, { z: () => r.z });
                var r = t(280);
                t(8082);
            },
            8082: (u, e, t) => {
                t(3649);
            },
            3495: (u, e, t) => {
                t.d(e, { Y: () => E });
                var r = t(3138),
                    n = t(6179),
                    a = t(1043),
                    o = t(5262);
                const s = r.O.client.getSize('rem'),
                    i = s.width,
                    l = s.height,
                    c = Object.assign({ width: i, height: l }, (0, o.T)(i, l, a.j)),
                    E = (0, n.createContext)(c);
            },
            1039: (u, e, t) => {
                t(3138), t(6536), t(6179), t(3495), t(1043), t(5262);
            },
            6010: (u, e, t) => {
                var r = t(6179),
                    n = t(7382),
                    a = t(3495);
                const o = ['children'];
                const s = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(u);
                            for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                            return n;
                        })(u, o);
                    const s = (0, r.useContext)(a.Y),
                        i = s.extraLarge,
                        l = s.large,
                        c = s.medium,
                        E = s.small,
                        A = s.extraSmall,
                        d = s.extraLargeWidth,
                        F = s.largeWidth,
                        D = s.mediumWidth,
                        m = s.smallWidth,
                        _ = s.extraSmallWidth,
                        B = s.extraLargeHeight,
                        C = s.largeHeight,
                        g = s.mediumHeight,
                        h = s.smallHeight,
                        p = s.extraSmallHeight,
                        f = { extraLarge: B, large: C, medium: g, small: h, extraSmall: p };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return e;
                        if (t.large && l) return e;
                        if (t.medium && c) return e;
                        if (t.small && E) return e;
                        if (t.extraSmall && A) return e;
                    } else {
                        if (t.extraLargeWidth && d) return (0, n.H)(e, t, f);
                        if (t.largeWidth && F) return (0, n.H)(e, t, f);
                        if (t.mediumWidth && D) return (0, n.H)(e, t, f);
                        if (t.smallWidth && m) return (0, n.H)(e, t, f);
                        if (t.extraSmallWidth && _) return (0, n.H)(e, t, f);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && B) return e;
                            if (t.largeHeight && C) return e;
                            if (t.mediumHeight && g) return e;
                            if (t.smallHeight && h) return e;
                            if (t.extraSmallHeight && p) return e;
                        }
                    }
                    return null;
                };
                s.defaultProps = {
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
                };
                (0, r.memo)(s);
            },
            7382: (u, e, t) => {
                t.d(e, { H: () => r });
                const r = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
            },
            7739: (u, e, t) => {
                t.d(e, { YN: () => r.Y });
                t(6010), t(1039);
                var r = t(3495);
            },
            1043: (u, e, t) => {
                t.d(e, { j: () => r });
                const r = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (u, e, t) => {
                var r;
                function n(u, e, t) {
                    const r = (function (u, e) {
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
                        n = (function (u, e) {
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
                        a = Math.min(r, n);
                    return {
                        extraLarge: a === t.extraLarge.weight,
                        large: a === t.large.weight,
                        medium: a === t.medium.weight,
                        small: a === t.small.weight,
                        extraSmall: a === t.extraSmall.weight,
                        extraLargeWidth: r === t.extraLarge.weight,
                        largeWidth: r === t.large.weight,
                        mediumWidth: r === t.medium.weight,
                        smallWidth: r === t.small.weight,
                        extraSmallWidth: r === t.extraSmall.weight,
                        extraLargeHeight: n === t.extraLarge.weight,
                        largeHeight: n === t.large.weight,
                        mediumHeight: n === t.medium.weight,
                        smallHeight: n === t.small.weight,
                        extraSmallHeight: n === t.extraSmall.weight,
                    };
                }
                t.d(e, { T: () => n }),
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
                    })(r || (r = {}));
            },
            5739: (u, e, t) => {
                t.d(e, { Q: () => E });
                var r = t(6483),
                    n = t.n(r),
                    a = t(6179),
                    o = t.n(a),
                    s = t(3415),
                    i = t(2862),
                    l = t(729),
                    c = t(1609);
                const E = ({
                    name: u,
                    image: e,
                    isPeriodic: t = !1,
                    size: r = i.h2.Big,
                    special: a,
                    value: E,
                    valueType: A,
                    style: d,
                    className: F,
                    classNames: D,
                    tooltipArgs: m,
                    periodicIconTooltipArgs: _,
                }) => {
                    const B = (0, l.c$)(r, a),
                        C = (0, l.i2)(a),
                        g = (0, l.m9)(E, A);
                    return o().createElement(
                        'div',
                        { className: n()(c.Z.base, c.Z[`base__${r}`], F), style: d },
                        o().createElement(
                            s.l,
                            { tooltipArgs: m, className: c.Z.tooltipWrapper },
                            o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(
                                    'div',
                                    { className: n()(c.Z.image, null == D ? void 0 : D.image) },
                                    B &&
                                        o().createElement('div', {
                                            className: n()(c.Z.highlight, null == D ? void 0 : D.highlight),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${B}_highlight)`,
                                            },
                                        }),
                                    e &&
                                        o().createElement('div', {
                                            className: n()(c.Z.icon, null == D ? void 0 : D.rewardIcon),
                                            style: { backgroundImage: `url(${e})` },
                                        }),
                                    C &&
                                        o().createElement('div', {
                                            className: n()(c.Z.overlay, null == D ? void 0 : D.overlay),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${C}_overlay)`,
                                            },
                                        }),
                                ),
                                g &&
                                    o().createElement(
                                        'div',
                                        {
                                            className: n()(
                                                c.Z.info,
                                                c.Z[`info__${u}`],
                                                A === i.$h.MULTI && c.Z.info__multi,
                                                null == D ? void 0 : D.info,
                                            ),
                                        },
                                        g,
                                    ),
                            ),
                        ),
                        t &&
                            o().createElement(
                                s.l,
                                { tooltipArgs: _ },
                                o().createElement('div', {
                                    className: n()(c.Z.timer, null == D ? void 0 : D.periodicIcon),
                                }),
                            ),
                    );
                };
            },
            2862: (u, e, t) => {
                let r, n, a, o, s, i, l;
                t.d(e, { $h: () => o, A2: () => i, E4: () => r, h2: () => a, kK: () => s, sh: () => l }),
                    (function (u) {
                        (u.Items = 'items'),
                            (u.Equipment = 'equipment'),
                            (u.Xp = 'xp'),
                            (u.XpFactor = 'xpFactor'),
                            (u.Blueprints = 'blueprints'),
                            (u.BlueprintsAny = 'blueprintsAny'),
                            (u.Goodies = 'goodies'),
                            (u.Berths = 'berths'),
                            (u.Slots = 'slots'),
                            (u.Tokens = 'tokens'),
                            (u.CrewSkins = 'crewSkins'),
                            (u.CrewBooks = 'crewBooks'),
                            (u.Customizations = 'customizations'),
                            (u.CreditsFactor = 'creditsFactor'),
                            (u.TankmenXp = 'tankmenXP'),
                            (u.TankmenXpFactor = 'tankmenXPFactor'),
                            (u.FreeXpFactor = 'freeXPFactor'),
                            (u.BattleToken = 'battleToken'),
                            (u.PremiumUniversal = 'premium_universal'),
                            (u.Gold = 'gold'),
                            (u.Credits = 'credits'),
                            (u.Crystal = 'crystal'),
                            (u.FreeXp = 'freeXP'),
                            (u.Premium = 'premium'),
                            (u.PremiumPlus = 'premium_plus'),
                            (u.BattlePassPoints = 'battlePassPoints'),
                            (u.BattlePassSelectToken = 'battlePassSelectToken'),
                            (u.StyleProgressToken = 'styleProgressToken'),
                            (u.TmanToken = 'tmanToken'),
                            (u.NaturalCover = 'naturalCover'),
                            (u.BpCoin = 'bpcoin'),
                            (u.BattlaPassFinalAchievement = 'dossier_achievement'),
                            (u.BattleBadge = 'dossier_badge'),
                            (u.NewYearAlbumsAccess = 'newYearAlbumsAccess'),
                            (u.NewYearFillers = 'ny22Fillers'),
                            (u.NewYearInvoice = 'newYearInvoice'),
                            (u.NewYearToyFragments = 'ny22ToyFragments'),
                            (u.NewYearSlot = 'newYearSlot'),
                            (u.BonusX5 = 'battle_bonus_x5'),
                            (u.CrewBonusX3 = 'crew_bonus_x3'),
                            (u.Vehicles = 'vehicles'),
                            (u.EpicSelectToken = 'epicSelectToken'),
                            (u.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                            (u.BattleBoosterGift = 'battleBooster_gift'),
                            (u.OptionalDevice = 'optionalDevice');
                    })(r || (r = {})),
                    (function (u) {
                        (u.Gold = 'gold'),
                            (u.Credits = 'credits'),
                            (u.Crystal = 'crystal'),
                            (u.Premium = 'premium'),
                            (u.PremiumPlus = 'premium_plus'),
                            (u.Vehicles = 'vehicles'),
                            (u.Customizations = 'customizations'),
                            (u.Blueprints = 'blueprints'),
                            (u.BlueprintsAny = 'blueprintsAny'),
                            (u.BlueprintsFinal = 'finalBlueprints'),
                            (u.Goodies = 'goodies'),
                            (u.CrewSkins = 'crewSkins'),
                            (u.Xp = 'xp'),
                            (u.XpFactor = 'xpFactor'),
                            (u.FreeXp = 'freeXP'),
                            (u.FreeXPFactor = 'freeXPFactor'),
                            (u.TankmenXP = 'tankmenXP'),
                            (u.TankmenXPFactor = 'tankmenXPFactor'),
                            (u.DailyXPFactor = 'dailyXPFactor'),
                            (u.CreditsFactor = 'creditsFactor'),
                            (u.Items = 'items'),
                            (u.StrBonus = 'strBonus'),
                            (u.Groups = 'groups'),
                            (u.Berths = 'berths'),
                            (u.Slots = 'slots'),
                            (u.Meta = 'meta'),
                            (u.Tokens = 'tokens'),
                            (u.Dossier = 'dossier'),
                            (u.OneOf = 'oneof'),
                            (u.PremiumUniversal = 'premium_universal'),
                            (u.BadgesGroup = 'badgesGroup'),
                            (u.Entitlements = 'entitlements'),
                            (u.RankedDailyBattles = 'rankedDailyBattles'),
                            (u.RankedBonusBattles = 'rankedBonusBattles'),
                            (u.BattlePassPoints = 'battlePassPoints'),
                            (u.BattleBadge = 'dossier_badge'),
                            (u.BattleAchievement = 'dossier_achievement');
                    })(n || (n = {})),
                    (function (u) {
                        (u.Big = 'big'),
                            (u.Small = 'small'),
                            (u.Mini = 'mini'),
                            (u.S600x450 = 's600x450'),
                            (u.S400x300 = 's400x300'),
                            (u.S296x222 = 's296x222'),
                            (u.S232x174 = 's232x174'),
                            (u.S180x135 = 's180x135'),
                            (u.S128x100 = 's128x100'),
                            (u.S80x80 = 's80x80'),
                            (u.S48x48 = 's48x48');
                    })(a || (a = {})),
                    (function (u) {
                        (u.MULTI = 'multi'),
                            (u.CURRENCY = 'currency'),
                            (u.PREMIUM_PLUS = 'premium_plus'),
                            (u.NUMBER = 'number'),
                            (u.STRING = 'string');
                    })(o || (o = {})),
                    (function (u) {
                        (u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(s || (s = {})),
                    (function (u) {
                        u.BATTLE_BOOSTER = 'battleBooster';
                    })(i || (i = {})),
                    (function (u) {
                        (u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(l || (l = {}));
            },
            729: (u, e, t) => {
                t.d(e, { c$: () => _, i2: () => B, m9: () => C, p3: () => E, pI: () => D, ry: () => F });
                var r = t(2372),
                    n = t(6179),
                    a = t.n(n),
                    o = t(2862);
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
                        o.E4.NewYearFillers,
                        o.E4.NewYearInvoice,
                        o.E4.EpicSelectToken,
                        o.E4.Comp7TokenWeeklyReward,
                        o.E4.BattleBoosterGift,
                        o.E4.OptionalDevice,
                        o.E4.FragmentAntimatter,
                        o.E4.CosmicLootbox,
                    ],
                    i = [o.E4.Gold, o.E4.Credits, o.E4.Crystal, o.E4.FreeXp],
                    l = [o.E4.BattlePassPoints],
                    c = [o.E4.PremiumPlus, o.E4.Premium],
                    E = (u) =>
                        s.includes(u)
                            ? o.$h.MULTI
                            : i.includes(u)
                              ? o.$h.CURRENCY
                              : l.includes(u)
                                ? o.$h.NUMBER
                                : c.includes(u)
                                  ? o.$h.PREMIUM_PLUS
                                  : o.$h.STRING,
                    A = ['engravings', 'backgrounds'],
                    d = ['engraving', 'background'],
                    F = (u, e = o.h2.Small) => {
                        const t = u.name,
                            r = u.type,
                            n = u.value,
                            a = u.icon,
                            s = u.item,
                            i = u.dogTagType,
                            l = ((u) => {
                                switch (u) {
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
                                        return u;
                                }
                            })(e);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${r}_${n}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}_${n}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${e}.${a}`;
                            case 'tokens':
                            case 'battleToken':
                                return 'big' === e
                                    ? u.iconBig.replace('..', 'img://gui')
                                    : u.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${a}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${e}.${a}`;
                            case 'dogTagComponents':
                                return ((u, e, t) => {
                                    const r = A[u];
                                    if (r) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(e).$dyn(r),
                                            a = n.$dyn(t);
                                        return a ? `${a}` : `${n.$dyn(d[u])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, e, a);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${a}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${l}.${a}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${l}.${a}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}`;
                        }
                    },
                    D = (u, e, t) => {
                        const r = e && { contentId: e };
                        return Object.assign(
                            {
                                args: u,
                                isEnabled: Boolean((u && u.tooltipId) || e),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !e,
                            },
                            r,
                            t,
                        );
                    },
                    m = [o.h2.Small, o.h2.Big],
                    _ = (u, e) => {
                        if (void 0 === e || !m.includes(u)) return null;
                        switch (e) {
                            case o.kK.BATTLE_BOOSTER:
                            case o.kK.BATTLE_BOOSTER_REPLACE:
                                return o.A2.BATTLE_BOOSTER;
                        }
                    },
                    B = (u) => {
                        if (void 0 === u) return null;
                        switch (u) {
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
                    C = (u, e) => {
                        if (void 0 === u) return null;
                        switch (e) {
                            case o.$h.MULTI: {
                                const e = Number(u);
                                return isFinite(e) && e > 1 ? `x${Math.floor(e)}` : null;
                            }
                            case o.$h.CURRENCY:
                            case o.$h.NUMBER:
                                return a().createElement(r.A, { format: 'integral', value: Number(u) });
                            case o.$h.PREMIUM_PLUS: {
                                const e = Number(u);
                                return isNaN(e) ? u : null;
                            }
                            default:
                                return u;
                        }
                    };
            },
            7932: (u, e, t) => {
                'undefined' != typeof Element &&
                    (Element.prototype.matches ||
                        Element.prototype.webkitMatchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector);
            },
            8882: (u, e, t) => {
                t.d(e, { nS: () => r });
                t(7932);
                'undefined' != typeof document && document.documentElement.style,
                    'undefined' != typeof window &&
                        ('ontouchstart' in window || (window.DocumentTouch && (document, window.DocumentTouch))),
                    'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent);
                function r() {
                    return new Promise((u) => {
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                u();
                            });
                        });
                    });
                }
            },
            8089: (u, e, t) => {
                t.d(e, { A: () => E });
                var r = t(6179),
                    n = t.n(r),
                    a = t(6483),
                    o = t.n(a),
                    s = t(7727),
                    i = t(7476);
                const l = [
                    'caption',
                    'onClick',
                    'goto',
                    'side',
                    'type',
                    'classNames',
                    'onMouseEnter',
                    'onMouseLeave',
                    'onMouseDown',
                    'onMouseUp',
                    'soundClick',
                    'soundHover',
                ];
                function c() {
                    return (
                        (c =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        c.apply(this, arguments)
                    );
                }
                class E extends n().PureComponent {
                    constructor(...u) {
                        super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, s.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                u && u(e), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, s.G)(this.props.soundClick);
                            }),
                            (this._onMouseUp = (u) => (e) => {
                                u && u(e), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const u = this.props,
                            e = u.caption,
                            t = u.onClick,
                            r = u.goto,
                            a = u.side,
                            s = u.type,
                            E = u.classNames,
                            A = u.onMouseEnter,
                            d = u.onMouseLeave,
                            F = u.onMouseDown,
                            D = u.onMouseUp,
                            m =
                                (u.soundClick,
                                u.soundHover,
                                (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(u);
                                    for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                    return n;
                                })(u, l)),
                            _ = o()(i.Z.base, i.Z[`base__${s}`], i.Z[`base__${a}`], null == E ? void 0 : E.base),
                            B = o()(i.Z.icon, i.Z[`icon__${s}`], i.Z[`icon__${a}`], null == E ? void 0 : E.icon),
                            C = o()(i.Z.glow, null == E ? void 0 : E.glow),
                            g = o()(i.Z.caption, i.Z[`caption__${s}`], null == E ? void 0 : E.caption),
                            h = o()(i.Z.goto, null == E ? void 0 : E.goto);
                        return n().createElement(
                            'div',
                            c(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(A),
                                    onMouseLeave: this._onMouseLeave(d),
                                    onMouseDown: this._onMouseDown(F),
                                    onMouseUp: this._onMouseUp(D),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                m,
                            ),
                            'info' !== s && n().createElement('div', { className: i.Z.shine }),
                            n().createElement('div', { className: B }, n().createElement('div', { className: C })),
                            n().createElement('div', { className: g }, e),
                            r && n().createElement('div', { className: h }, r),
                        );
                    }
                }
                E.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
            },
            7078: (u, e, t) => {
                t.d(e, { t: () => i });
                var r = t(6179),
                    n = t.n(r),
                    a = t(2056);
                const o = ['children'];
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const i = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(u);
                            for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                            return n;
                        })(u, o);
                    return n().createElement(
                        a.u,
                        s(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            t,
                        ),
                        e,
                    );
                };
            },
            3415: (u, e, t) => {
                t.d(e, { l: () => l });
                var r = t(6179),
                    n = t.n(r),
                    a = t(7078),
                    o = t(6373),
                    s = t(2056);
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = ({ children: u, tooltipArgs: e, className: t }) => {
                    if (!e) return u;
                    const r = n().createElement('div', { className: t }, u);
                    if (e.header || e.body) return n().createElement(o.i, e, r);
                    const l = e.contentId;
                    return l ? n().createElement(s.u, i({}, e, { contentId: l }), r) : n().createElement(a.t, e, r);
                };
            },
            6373: (u, e, t) => {
                t.d(e, { i: () => l });
                var r = t(2056),
                    n = t(6179),
                    a = t.n(n);
                const o = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const i = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (u) => {
                        let e = u.children,
                            t = u.body,
                            l = u.header,
                            c = u.note,
                            E = u.alert,
                            A = u.args,
                            d = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, o);
                        const F = (0, n.useMemo)(() => {
                            const u = Object.assign({}, A, { body: t, header: l, note: c, alert: E });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [E, t, l, c, A]);
                        return a().createElement(
                            r.u,
                            s(
                                {
                                    contentId:
                                        ((D = null == A ? void 0 : A.hasHtmlContent),
                                        D ? i.SimpleTooltipHtmlContent('resId') : i.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: F,
                                },
                                d,
                            ),
                            e,
                        );
                        var D;
                    };
            },
            2056: (u, e, t) => {
                t.d(e, { u: () => l });
                var r = t(7902),
                    n = t(9916),
                    a = t(6179);
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
                function s(u) {
                    return Object.entries(u || {}).map(([u, e]) => {
                        const t = { __Type: 'GFValueProxy', name: u };
                        switch (typeof e) {
                            case 'number':
                                t.number = e;
                                break;
                            case 'boolean':
                                t.bool = e;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = e.toString();
                        }
                        return t;
                    });
                }
                const i = (u, e, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: n.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    l = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            n = u.args,
                            l = u.onMouseEnter,
                            c = u.onMouseLeave,
                            E = u.onMouseDown,
                            A = u.onClick,
                            d = u.ignoreShowDelay,
                            F = void 0 !== d && d,
                            D = u.ignoreMouseClick,
                            m = void 0 !== D && D,
                            _ = u.decoratorId,
                            B = void 0 === _ ? 0 : _,
                            C = u.isEnabled,
                            g = void 0 === C || C,
                            h = u.targetId,
                            p = void 0 === h ? 0 : h,
                            f = u.onShow,
                            v = u.onHide,
                            w = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, o);
                        const b = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, a.useMemo)(() => p || (0, r.F)().resId, [p]),
                            T = (0, a.useCallback)(() => {
                                (b.current.isVisible && b.current.timeoutId) ||
                                    (i(t, B, { isMouseEvent: !0, on: !0, arguments: s(n) }, S),
                                    f && f(),
                                    (b.current.isVisible = !0));
                            }, [t, B, n, S, f]),
                            y = (0, a.useCallback)(() => {
                                if (b.current.isVisible || b.current.timeoutId) {
                                    const u = b.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (b.current.timeoutId = 0)),
                                        i(t, B, { on: !1 }, S),
                                        b.current.isVisible && v && v(),
                                        (b.current.isVisible = !1);
                                }
                            }, [t, B, S, v]),
                            x = (0, a.useCallback)((u) => {
                                b.current.isVisible &&
                                    ((b.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (b.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(b.current.prevTarget) && y();
                                    }, 200)));
                            }, []);
                        (0, a.useEffect)(() => {
                            const u = b.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', x, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', x, { capture: !0 }),
                                        u && window.clearTimeout(u);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === g && y();
                            }, [g, y]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', y),
                                    () => {
                                        window.removeEventListener('mouseleave', y), y();
                                    }
                                ),
                                [y],
                            );
                        return g
                            ? (0, a.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((R = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((b.current.timeoutId = window.setTimeout(T, F ? 100 : 400)),
                                                      l && l(u),
                                                      R && R(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              y(), null == c || c(e), null == u || u(e);
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              !1 === m && y(), null == A || A(e), null == u || u(e);
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              !1 === m && y(), null == E || E(e), null == u || u(e);
                                          })(e.props.onMouseDown),
                                      },
                                      w,
                                  ),
                              )
                            : e;
                        var R;
                    };
            },
            7515: (u, e, t) => {
                t.d(e, { u: () => r });
                const r = (u, e, t) => (t < u ? u : t > e ? e : t);
            },
            1856: (u, e, t) => {
                t.d(e, { v: () => r });
                const r = (u) => {
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
            },
            8246: (u, e, t) => {
                t.d(e, { U: () => s });
                var r = t(3138);
                function n(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return a(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return a(u, e);
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var r = 0;
                        return function () {
                            return r >= u.length ? { done: !0 } : { done: !1, value: u[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function a(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, r = new Array(e); t < e; t++) r[t] = u[t];
                    return r;
                }
                const o = (u) => (0 === u ? window : window.subViews.get(u));
                function s({ initializer: u = !0, rootId: e = 0, getRoot: t = o, context: a = 'model' } = {}) {
                    const s = new Map();
                    function i(u, e = 0) {
                        viewEnv.removeDataChangedCallback(u, e)
                            ? s.delete(u)
                            : console.error("Can't remove callback by id:", u);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (u, e, t) => {
                            t.forEach((e) => {
                                const t = s.get(e);
                                void 0 !== t && t(u);
                            });
                        });
                    });
                    const l = (u) => {
                        const r = t(e),
                            n = a.split('.').reduce((u, e) => u[e], r);
                        return 'string' != typeof u || 0 === u.length
                            ? n
                            : u.split('.').reduce((u, e) => {
                                  const t = u[e];
                                  return 'function' == typeof t ? t.bind(u) : t;
                              }, n);
                    };
                    return {
                        subscribe: (t, n) => {
                            const o = 'string' == typeof n ? `${a}.${n}` : a,
                                i = r.O.view.addModelObserver(o, e, !0);
                            return s.set(i, t), u && t(l(n)), i;
                        },
                        readByPath: l,
                        createCallback: (u, e) => {
                            const t = l(e);
                            return (...e) => {
                                t(u(...e));
                            };
                        },
                        createCallbackNoArgs: (u) => {
                            const e = l(u);
                            return () => {
                                e();
                            };
                        },
                        dispose: function () {
                            for (var u, t = n(s.keys()); !(u = t()).done; ) {
                                i(u.value, e);
                            }
                        },
                        unsubscribe: i,
                    };
                }
            },
            3215: (u, e, t) => {
                t.d(e, { q: () => i });
                var r = t(4598),
                    n = t(9174),
                    a = t(6179),
                    o = t.n(a),
                    s = t(8246);
                const i = () => (u, e) => {
                    const t = (0, a.createContext)({});
                    return [
                        function ({ mode: i = 'real', options: l, children: c, mocks: E }) {
                            const A = (0, a.useRef)([]),
                                d = (t, a, o) => {
                                    var i;
                                    const l = s.U(a),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (i = null == o ? void 0 : o.getter) ? i : () => {},
                                                  }),
                                        E = (u) =>
                                            'mocks' === t ? (null == o ? void 0 : o.getter(u)) : c.readByPath(u),
                                        d = (u) => A.current.push(u),
                                        F = u({
                                            mode: t,
                                            readByPath: E,
                                            externalModel: c,
                                            observableModel: {
                                                array: (u, e) => {
                                                    const a = null != e ? e : E(u),
                                                        o = n.LO.box(a, { equals: r.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, n.aD)((u) => o.set(u)),
                                                                u,
                                                            ),
                                                        o
                                                    );
                                                },
                                                object: (u, e) => {
                                                    const a = null != e ? e : E(u),
                                                        o = n.LO.box(a, { equals: r.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, n.aD)((u) => o.set(u)),
                                                                u,
                                                            ),
                                                        o
                                                    );
                                                },
                                                primitives: (u, e) => {
                                                    const r = E(e);
                                                    if (Array.isArray(u)) {
                                                        const a = u.reduce(
                                                            (u, e) => ((u[e] = n.LO.box(r[e], {})), u),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, n.aD)((e) => {
                                                                        u.forEach((u) => {
                                                                            a[u].set(e[u]);
                                                                        });
                                                                    }),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    }
                                                    {
                                                        const a = u,
                                                            o = Object.entries(a),
                                                            s = o.reduce(
                                                                (u, [e, t]) => ((u[t] = n.LO.box(r[e], {})), u),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, n.aD)((u) => {
                                                                        o.forEach(([e, t]) => {
                                                                            s[t].set(u[e]);
                                                                        });
                                                                    }),
                                                                    e,
                                                                ),
                                                            s
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: d,
                                        }),
                                        D = { mode: t, model: F, externalModel: c, cleanup: d };
                                    return {
                                        model: F,
                                        controls: 'mocks' === t && o ? o.controls(D) : e(D),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                F = (0, a.useRef)(!1),
                                D = (0, a.useState)(i),
                                m = D[0],
                                _ = D[1],
                                B = (0, a.useState)(() => d(i, l, E)),
                                C = B[0],
                                g = B[1];
                            return (
                                (0, a.useEffect)(() => {
                                    F.current ? g(d(m, l, E)) : (F.current = !0);
                                }, [E, m, l]),
                                (0, a.useEffect)(() => {
                                    _(i);
                                }, [i]),
                                (0, a.useEffect)(
                                    () => () => {
                                        C.externalModel.dispose(), A.current.forEach((u) => u());
                                    },
                                    [C],
                                ),
                                o().createElement(t.Provider, { value: C }, c)
                            );
                        },
                        () => (0, a.useContext)(t),
                    ];
                };
            },
            7044: (u, e, t) => {
                t(3649), t(9916);
                var r = t(8613);
                Date.now(), r.Ew.getRegionalDateTime, r.Ew.getFormattedDateTime;
            },
            527: (u, e, t) => {
                t.r(e),
                    t.d(e, { mouse: () => c, off: () => i, on: () => s, onResize: () => a, onScaleUpdated: () => o });
                var r = t(2472),
                    n = t(1176);
                const a = (0, r.E)('clientResized'),
                    o = (0, r.E)('self.onScaleUpdated'),
                    s = (u, e) => engine.on(u, e),
                    i = (u, e) => engine.off(u, e),
                    l = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const c = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && (0, n.R)(!1);
                    }
                    function t() {
                        u.enabled && (0, n.R)(!0);
                    }
                    function r() {
                        u.enabled
                            ? u.listeners < 1
                                ? ((u.initialized = !1),
                                  document.body.removeEventListener('mouseenter', e),
                                  document.body.removeEventListener('mouseleave', t))
                                : u.initialized ||
                                  ((u.initialized = !0),
                                  document.body.addEventListener('mouseenter', e),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, n.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let n = !0;
                                    const a = `mouse${e}`,
                                        o = l[e]((u) => t([u, 'outside']));
                                    function s(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        r(),
                                        () => {
                                            n &&
                                                (o(),
                                                window.removeEventListener(a, s),
                                                (u.listeners -= 1),
                                                r(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(t)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
                        disable() {
                            (u.enabled = !1), r();
                        },
                        enable() {
                            (u.enabled = !0), r();
                        },
                        enableOutside() {
                            u.enabled && (0, n.R)(!0);
                        },
                        disableOutside() {
                            u.enabled && (0, n.R)(!1);
                        },
                    });
                })();
            },
            5959: (u, e, t) => {
                t.r(e),
                    t.d(e, {
                        events: () => r,
                        getMouseGlobalPosition: () => a,
                        getSize: () => n,
                        graphicsQuality: () => o,
                    });
                var r = t(527);
                function n(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (u, e, t) => {
                function r(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => r });
            },
            2472: (u, e, t) => {
                function r(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => r });
            },
            3138: (u, e, t) => {
                t.d(e, { O: () => n });
                var r = t(5959);
                const n = { view: t(7641), client: r };
            },
            3722: (u, e, t) => {
                function r(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function n(u, e, t) {
                    return `url(${r(u, e, t)})`;
                }
                t.r(e), t.d(e, { getBgUrl: () => n, getTextureUrl: () => r });
            },
            6112: (u, e, t) => {
                t.d(e, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                t.d(e, { U: () => n });
                var r = t(2472);
                const n = {
                    onTextureFrozen: (0, r.E)('self.onTextureFrozen'),
                    onTextureReady: (0, r.E)('self.onTextureReady'),
                    onDomBuilt: (0, r.E)('self.onDomBuilt'),
                    onLoaded: (0, r.E)('self.onLoaded'),
                    onDisplayChanged: (0, r.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, r.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, r.E)('children.onAdded'),
                        onLoaded: (0, r.E)('children.onLoaded'),
                        onRemoved: (0, r.E)('children.onRemoved'),
                        onAttached: (0, r.E)('children.onAttached'),
                        onTextureReady: (0, r.E)('children.onTextureReady'),
                        onRequestPosition: (0, r.E)('children.requestPosition'),
                    },
                };
            },
            7641: (u, e, t) => {
                t.r(e),
                    t.d(e, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => s,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => w,
                        events: () => a.U,
                        extraSize: () => b,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => D,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => m,
                        getSize: () => A,
                        getViewGlobalPosition: () => F,
                        isEventHandled: () => p,
                        isFocused: () => g,
                        pxToRem: () => _,
                        remToPx: () => B,
                        resize: () => d,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => S,
                    });
                var r = t(3722),
                    n = t(6112),
                    a = t(6538),
                    o = t(8566);
                function s(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function i(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function l(u, e, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, r);
                }
                function c(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function E(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function A(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function F(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: B(e.x), y: B(e.y) };
                }
                function D() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function m() {
                    return viewEnv.getScale();
                }
                function _(u) {
                    return viewEnv.pxToRem(u);
                }
                function B(u) {
                    return viewEnv.remToPx(u);
                }
                function C(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function g() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function p() {
                    return viewEnv.isEventHandled();
                }
                function f() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(n.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === n.W[e]), u),
                        {},
                    ),
                    b = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    S = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : a.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                t.d(e, { qP: () => l });
                const r = ['args'];
                const n = 2,
                    a = 16,
                    o = 32,
                    s = 64,
                    i = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                o = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(u);
                                    for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                    return n;
                                })(e, r);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, o, {
                                          arguments:
                                              ((n = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    l = {
                        close(u) {
                            i('popover' === u ? n : o);
                        },
                        minimize() {
                            i(s);
                        },
                        move(u) {
                            i(a, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            4598: (u, e, t) => {
                function r() {}
                t.d(e, { ZT: () => r, jv: () => n });
                function n() {
                    return !1;
                }
                console.log;
            },
            7902: (u, e, t) => {
                t.d(e, { F: () => r });
                const r = (u = 1) => {
                    const e = new Error().stack;
                    let t,
                        r = R.invalid('resId');
                    return (
                        e &&
                            ((t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (r = window.subViews[t].id)),
                        { caller: t, stack: e, resId: r }
                    );
                };
            },
            6536: (u, e, t) => {
                t(6179);
            },
            3815: (u, e, t) => {
                t.d(e, { z: () => a });
                var r = t(6179);
                const n = [];
                function a(u) {
                    const e = (0, r.useRef)(u);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            e.current = u;
                        }),
                        (0, r.useCallback)((...u) => (0, e.current)(...u), n)
                    );
                }
            },
            8526: (u, e, t) => {
                t.d(e, { I9: () => i });
                var r = t(3138),
                    n = t(5521),
                    a = (t(9916), t(6179));
                const o = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function s(u = n.n.NONE, e = o, t = !1, s = !1) {
                    (0, a.useEffect)(() => {
                        if (u !== n.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(n) {
                            if (n.keyCode === u) {
                                if (!s && r.O.view.isEventHandled()) return;
                                r.O.view.setEventHandled(), e(n), t && n.stopPropagation();
                            }
                        }
                    }, [e, u, t, s]);
                }
                function i(u) {
                    s(n.n.ESCAPE, u);
                }
            },
            5415: (u, e, t) => {
                t.d(e, { GS: () => l, cJ: () => o });
                var r = t(6179),
                    n = t(7739),
                    a = t(1043);
                let o, s, i;
                !(function (u) {
                    (u[(u.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = a.j.small.width)] = 'Small'),
                        (u[(u.Medium = a.j.medium.width)] = 'Medium'),
                        (u[(u.Large = a.j.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge');
                })(o || (o = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = a.j.small.width)] = 'Small'),
                            (u[(u.Medium = a.j.medium.width)] = 'Medium'),
                            (u[(u.Large = a.j.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge');
                    })(s || (s = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = a.j.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = a.j.small.height)] = 'Small'),
                            (u[(u.Medium = a.j.medium.height)] = 'Medium'),
                            (u[(u.Large = a.j.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = a.j.extraLarge.height)] = 'ExtraLarge');
                    })(i || (i = {}));
                const l = () => {
                    const u = (0, r.useContext)(n.YN),
                        e = u.width,
                        t = u.height,
                        a = ((u) => {
                            switch (!0) {
                                case u.extraLarge:
                                    return o.ExtraLarge;
                                case u.large:
                                    return o.Large;
                                case u.medium:
                                    return o.Medium;
                                case u.small:
                                    return o.Small;
                                case u.extraSmall:
                                    return o.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), o.ExtraSmall;
                            }
                        })(u),
                        l = ((u) => {
                            switch (!0) {
                                case u.extraLargeWidth:
                                    return s.ExtraLarge;
                                case u.largeWidth:
                                    return s.Large;
                                case u.mediumWidth:
                                    return s.Medium;
                                case u.smallWidth:
                                    return s.Small;
                                case u.extraSmallWidth:
                                    return s.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), s.ExtraSmall;
                            }
                        })(u),
                        c = ((u) => {
                            switch (!0) {
                                case u.extraLargeHeight:
                                    return i.ExtraLarge;
                                case u.largeHeight:
                                    return i.Large;
                                case u.mediumHeight:
                                    return i.Medium;
                                case u.smallHeight:
                                    return i.Small;
                                case u.extraSmallHeight:
                                    return i.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), i.ExtraSmall;
                            }
                        })(u);
                    return { mediaSize: a, mediaWidth: l, mediaHeight: c, remScreenWidth: e, remScreenHeight: t };
                };
            },
            5521: (u, e, t) => {
                let r, n;
                t.d(e, { n: () => r }),
                    (function (u) {
                        (u[(u.NONE = -1)] = 'NONE'),
                            (u[(u.ALT = 165)] = 'ALT'),
                            (u[(u.ENTER = 13)] = 'ENTER'),
                            (u[(u.ESCAPE = 27)] = 'ESCAPE'),
                            (u[(u.SPACE = 32)] = 'SPACE'),
                            (u[(u.END = 35)] = 'END'),
                            (u[(u.HOME = 36)] = 'HOME'),
                            (u[(u.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
                            (u[(u.ARROW_UP = 38)] = 'ARROW_UP'),
                            (u[(u.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
                            (u[(u.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
                            (u[(u.NUM_PLUS = 107)] = 'NUM_PLUS'),
                            (u[(u.NUM_MINUS = 109)] = 'NUM_MINUS'),
                            (u[(u.PLUS = 187)] = 'PLUS'),
                            (u[(u.MINUS = 189)] = 'MINUS'),
                            (u[(u.PAGE_UP = 33)] = 'PAGE_UP'),
                            (u[(u.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
                            (u[(u.BACKSPACE = 8)] = 'BACKSPACE'),
                            (u[(u.DELETE = 46)] = 'DELETE'),
                            (u[(u.TAB = 9)] = 'TAB'),
                            (u[(u.KEY_N = 78)] = 'KEY_N'),
                            (u[(u.KEY_1 = 49)] = 'KEY_1'),
                            (u[(u.KEY_2 = 50)] = 'KEY_2'),
                            (u[(u.KEY_3 = 51)] = 'KEY_3'),
                            (u[(u.KEY_4 = 52)] = 'KEY_4'),
                            (u[(u.KEY_5 = 53)] = 'KEY_5'),
                            (u[(u.KEY_6 = 54)] = 'KEY_6'),
                            (u[(u.KEY_7 = 55)] = 'KEY_7'),
                            (u[(u.KEY_8 = 56)] = 'KEY_8'),
                            (u[(u.KEY_9 = 57)] = 'KEY_9');
                    })(r || (r = {})),
                    (function (u) {
                        (u.ALT = 'Alt'),
                            (u.ALT_GRAPH = 'AltGraph'),
                            (u.CAPS_LOCK = 'CapsLock'),
                            (u.CONTROL = 'Control'),
                            (u.FN = 'Fn'),
                            (u.FN_LOCK = 'FnLock'),
                            (u.META = 'Meta'),
                            (u.NUM_LOCK = 'NumLock'),
                            (u.SCROLL_LOCK = 'ScrollLock'),
                            (u.SHIFT = 'Shift'),
                            (u.SYMBOL = 'Symbol'),
                            (u.SYMBOL_LOCK = 'SymbolLock');
                    })(n || (n = {}));
            },
            9480: (u, e, t) => {
                t.d(e, { UI: () => r });
                function r(u, e) {
                    return Array.isArray(u) ? u.map(e) : u.map((u, t, r) => e(null == u ? void 0 : u.value, t, r));
                }
            },
            7727: (u, e, t) => {
                function r(u) {
                    engine.call('PlaySound', u);
                }
                t.d(e, { G: () => r });
            },
            3649: (u, e, t) => {
                t.d(e, { Uw: () => d, WU: () => a, v2: () => n });
                var r = t(1281);
                let n;
                function a(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(n || (n = {}));
                const o = (u) => u.replace(/&nbsp;/g, ' '),
                    s = (u, e, t) => {
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
                    l = (u, e, t = n.left) => u.split(e).reduce(t === n.left ? s : i, []),
                    c = (() => {
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
                    E = ['zh_cn', 'zh_sg', 'zh_tw'],
                    A = (u, e = n.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (E.includes(t)) return c(u);
                        if ('ja' === t) {
                            return (0, r.D4)()
                                .parse(u)
                                .map((u) => o(u));
                        }
                        return ((u, e = n.left) => {
                            let t = [];
                            const r =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = o(u);
                            return l(a, /( )/, e).forEach((u) => (t = t.concat(l(u, r, n.left)))), t;
                        })(u, e);
                    },
                    d = (u, e, t) => u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : A(u, e)));
            },
            1358: (u, e, t) => {
                t.d(e, { Z: () => a });
                var r = t(3138);
                class n {
                    constructor() {
                        (this._callbacks = void 0),
                            (this._updateHandler = void 0),
                            (this._views = void 0),
                            (this.clearViewCallbacks = (u) => {
                                this._views[u] &&
                                    (this._views[u].forEach((u) => {
                                        delete this._callbacks[u];
                                    }),
                                    delete this._views[u]);
                            }),
                            (this._callbacks = {}),
                            (this._views = {}),
                            (this._updateHandler = void 0);
                    }
                    static get instance() {
                        return window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(u, e, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = r.O.view.addModelObserver(u, t, n);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", u),
                            a
                        );
                    }
                    removeCallback(u, e = 0) {
                        let t = !1;
                        return (
                            void 0 !== u &&
                                void 0 !== this._callbacks[u] &&
                                ((t = viewEnv.removeDataChangedCallback(u, e)), delete this._callbacks[u]),
                            t || console.error("Can't remove callback by id:", u),
                            t
                        );
                    }
                    _emmitDataChanged(u, e, t) {
                        t.forEach((t) => {
                            const r = this._callbacks[t];
                            void 0 !== r && r(u, e);
                        });
                    }
                }
                n.__instance = void 0;
                const a = n;
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
                                    this.callbacks.forEach((u) => {
                                        u(this.data);
                                    });
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                this._addCallback(path),
                                    watchingFields.forEach((u) => {
                                        this._addCallback(path + '.' + u);
                                    }),
                                    this._notifyObservers();
                            });
                    }
                    subscribe(u) {
                        this.callbacks.add(u), null !== this.data && void 0 !== this.data && u(this.data);
                    }
                    unsubscribe(u) {
                        this.callbacks.delete(u);
                    }
                    destroy() {
                        this.dataTracker.clear(), this.callbacks.clear();
                    }
                    _addCallback(u) {
                        this.dataTracker.addCallback(u, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            9916: (u, e, t) => {
                t.d(e, { B3: () => i, Z5: () => o.Z5, B0: () => s, ry: () => _, Eu: () => B });
                class r {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let r = u.target;
                                    do {
                                        if (r === e) return;
                                        r = r.parentNode;
                                    } while (r);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return r.__instance || (r.__instance = new r()), r.__instance;
                    }
                    register(u, e) {
                        this.addMouseListener(), this.entries.push({ container: u, callback: e });
                    }
                    unregister(u, e) {
                        const t = u,
                            r = e;
                        (this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== r)),
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
                r.__instance = void 0;
                const n = r;
                var a = t(1358);
                var o = t(8613);
                let s;
                !(function (u) {
                    (u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                        (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                        (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                        (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (u[(u.MOVE = 16)] = 'MOVE'),
                        (u[(u.CLOSE = 32)] = 'CLOSE'),
                        (u[(u.MINIMIZE = 64)] = 'MINIMIZE');
                })(s || (s = {}));
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(5521),
                    d = t(3138);
                const F = ['args'];
                function D(u, e, t, r, n, a, o) {
                    try {
                        var s = u[a](o),
                            i = s.value;
                    } catch (u) {
                        return void t(u);
                    }
                    s.done ? e(i) : Promise.resolve(i).then(r, n);
                }
                const m = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    _ = (function () {
                        var u,
                            e =
                                ((u = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((u) => {
                                            engine.on('Ready', u);
                                        })
                                    );
                                }),
                                function () {
                                    var e = this,
                                        t = arguments;
                                    return new Promise(function (r, n) {
                                        var a = u.apply(e, t);
                                        function o(u) {
                                            D(a, r, n, o, s, 'next', u);
                                        }
                                        function s(u) {
                                            D(a, r, n, o, s, 'throw', u);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    B = () =>
                        new Promise((u) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    u();
                                });
                            });
                        }),
                    C = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(u);
                                    for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                    return n;
                                })(e, F);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([u, e]) => {
                                                  const t = { __Type: 'GFValueProxy', name: u };
                                                  switch (typeof e) {
                                                      case 'number':
                                                          t.number = e;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = e;
                                                          break;
                                                      default:
                                                          t.string = e.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    g = () => C(s.CLOSE),
                    h = (u, e) => {
                        u.keyCode === A.n.ESCAPE && e();
                    };
                var p = t(7572);
                const f = n.instance,
                    v = {
                        DataTracker: a.Z,
                        ViewModel: p.Z,
                        ViewEventType: s,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: m,
                        sendMoveEvent: (u) => C(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => C(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            C(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, r, n = R.invalid('resId'), a) => {
                            const o = d.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                E = i.width,
                                A = i.height,
                                F = {
                                    x: d.O.view.pxToRem(l) + o.x,
                                    y: d.O.view.pxToRem(c) + o.y,
                                    width: d.O.view.pxToRem(E),
                                    height: d.O.view.pxToRem(A),
                                };
                            C(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: e,
                                bbox: m(F),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => h(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            h(u, g);
                        },
                        handleViewEvent: C,
                        onBindingsReady: _,
                        onLayoutReady: B,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const r in e)
                                if (Object.prototype.hasOwnProperty.call(e, r)) {
                                    const n = Object.prototype.toString.call(e[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = e[r];
                                        t[r] = [];
                                        for (let e = 0; e < n.length; e++) t[r].push({ value: u(n[e].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = u(e[r]))
                                            : (t[r] = e[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: f,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = v;
            },
            8613: (u, e, t) => {
                t.d(e, { Ew: () => a, Z5: () => r, cy: () => n });
                const r = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    n = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    },
                    a = {
                        getRegionalDateTime: (u, e, t = !0) => regionalDateTime.getRegionalDateTime(u, e, t),
                        getFormattedDateTime: (u, e, t = !0) => regionalDateTime.getFormattedDateTime(u, e, t),
                    };
            },
            9508: (u, e, t) => {
                var r = t(3457),
                    n = t(9766),
                    a = t(8882),
                    o = t(8089),
                    s = t(8526),
                    i = t(9916),
                    l = t(3403),
                    c = t(6179),
                    E = t.n(c),
                    A = t(280);
                const d = {
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
                    F = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    D = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    m = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    _ = (0, c.memo)(({ text: u, binding: e, classMix: t }) => {
                        const r = (0, c.useCallback)((u) => ({ color: `#${u}` }), []),
                            n = (0, c.useMemo)(() => e || {}, [e]);
                        let a = F.exec(u),
                            o = u,
                            s = 0;
                        for (; a; ) {
                            const t = a[0],
                                i = D.exec(t),
                                l = m.exec(t),
                                c = a[1];
                            if (i && l) {
                                const u = i[0],
                                    a = u + s++ + u;
                                (o = o.replace(t, `%(${a})`)),
                                    (n[a] = d[u]
                                        ? E().createElement(
                                              'span',
                                              { className: d[u] },
                                              E().createElement(A.z, { text: c, binding: e }),
                                          )
                                        : E().createElement(
                                              'span',
                                              { style: r(u) },
                                              E().createElement(A.z, { text: c, binding: e }),
                                          ));
                            }
                            a = F.exec(u);
                        }
                        return E().createElement(A.z, { text: o, classMix: t, binding: n });
                    });
                var B = t(9485),
                    C = t(4420),
                    g = t(3862),
                    h = t(9430),
                    p = t(9144),
                    f = t(2189);
                const v = 'Content_base_94',
                    w = 'Content_mainContent_d4',
                    b = R.strings.battle_pass.battlePassBuyView.reward,
                    S = () => {
                        const u = (0, f.t)().model,
                            e = u.levels.get(),
                            t = e.fromLevel,
                            r = e.toLevel,
                            n = e.isPurchaseWithLevels,
                            a = u.computes.nowRewards(),
                            o = u.computes.futureRewards(),
                            s = ((u, e, t) =>
                                t
                                    ? { title: b.titleNowRewardsCheckbox() }
                                    : u < e
                                      ? { title: b.titleNowRewards(), completedSteps: `${u} - ${e}` }
                                      : { title: b.titleNowRewardsSingle(), completedSteps: `${e}` })(t, r, n),
                            i = s.title,
                            l = s.completedSteps;
                        return E().createElement(
                            p.z,
                            { className: v },
                            E().createElement(
                                'div',
                                { className: w },
                                a.length > 0 &&
                                    E().createElement(h.r, { title: i, iconType: g.Q.now, rewards: a, steps: l }),
                                o.length > 0 &&
                                    E().createElement(h.r, {
                                        title: b.titleFutureRewards(),
                                        iconType: g.Q.future,
                                        rewards: o,
                                    }),
                            ),
                        );
                    },
                    T = 'RewardsViewContent_base_42',
                    y = 'RewardsViewContent_content_64',
                    x = 'RewardsViewContent_background_37',
                    P = 'RewardsViewContent_shadow_2a',
                    k = 'RewardsViewContent_back_96',
                    O = 'RewardsViewContent_header_46',
                    N = 'RewardsViewContent_title_8d',
                    L = 'RewardsViewContent_subtitle_8d',
                    M = 'RewardsViewContent_description_2d',
                    I = 'RewardsViewContent_footerButton_06';
                function U(u, e, t, r, n, a, o) {
                    try {
                        var s = u[a](o),
                            i = s.value;
                    } catch (u) {
                        return void t(u);
                    }
                    s.done ? e(i) : Promise.resolve(i).then(r, n);
                }
                const W = R.strings.battle_pass.battlePassBuyView.reward,
                    H = (u) => R.strings.battle_pass.chapter.fullNameUppercased.$dyn(`c_${u}`);
                (0, l.Pi)(({ onBack: u }) => {
                    const e = (0, f.t)().model.levels.get(),
                        t = e.fromLevel,
                        l = e.toLevel,
                        A = e.chapterID,
                        d = e.isPurchaseWithLevels,
                        F = (0, c.useState)(!1),
                        D = F[0],
                        m = F[1];
                    (0, s.I9)(u),
                        (0, c.useEffect)(() => {
                            (function () {
                                var u,
                                    e =
                                        ((u = function* () {
                                            yield (0, i.Eu)(), yield (0, a.nS)(), m(!0);
                                        }),
                                        function () {
                                            var e = this,
                                                t = arguments;
                                            return new Promise(function (r, n) {
                                                var a = u.apply(e, t);
                                                function o(u) {
                                                    U(a, r, n, o, s, 'next', u);
                                                }
                                                function s(u) {
                                                    U(a, r, n, o, s, 'throw', u);
                                                }
                                                o(void 0);
                                            });
                                        });
                                return function () {
                                    return e.apply(this, arguments);
                                };
                            })()();
                        }, []);
                    const g = B.hJ.includes(A)
                        ? {
                              backgroundImage: `url(${(0, B.wD)(R.images.gui.maps.icons.battlePass.backgrounds.purchase_confirmation, A)})`,
                          }
                        : null;
                    return E().createElement(
                        'div',
                        { className: T },
                        E().createElement(
                            'div',
                            { className: x },
                            E().createElement(C.N, { chapter: A, isCurrent: !0, customBackgroundStyle: g }),
                        ),
                        E().createElement('div', { className: P }),
                        D &&
                            E().createElement(
                                'div',
                                { className: y },
                                E().createElement(
                                    'div',
                                    { className: k },
                                    E().createElement(o.A, {
                                        caption: R.strings.menu.viewHeader.backBtn.label(),
                                        onClick: u,
                                    }),
                                ),
                                E().createElement(
                                    'div',
                                    { className: O },
                                    E().createElement(
                                        'div',
                                        { className: N },
                                        E().createElement(n.z, { text: W.chapter(), binding: { chapterName: H(A) } }),
                                    ),
                                    E().createElement('div', { className: M }, W.titleBattlePass()),
                                    d &&
                                        E().createElement(_, {
                                            classMix: L,
                                            text: W.subtitle(l - t + 1),
                                            binding: { levels: l - t + 1 },
                                        }),
                                ),
                                E().createElement(S, null),
                                E().createElement(
                                    r.u5,
                                    { type: r.L$.secondary, size: r.qE.medium, mixClass: I, onClick: u },
                                    W.backBtn(),
                                ),
                            ),
                    );
                });
            },
            2189: (u, e, t) => {
                t.d(e, { t: () => s });
                var r = t(3215),
                    n = t(4598),
                    a = t(3946);
                const o = (0, r.q)()(({ observableModel: u }) => {
                        const e = {
                                levels: u.object(),
                                nowRewards: u.array('nowRewards.items'),
                                futureRewards: u.array('futureRewards.items'),
                            },
                            t = (0, a.Om)(() => e.nowRewards.get(), { equals: n.jv }),
                            r = (0, a.Om)(() => e.futureRewards.get(), { equals: n.jv });
                        return Object.assign({}, e, { computes: { nowRewards: t, futureRewards: r } });
                    }, n.ZT),
                    s = (o[0], o[1]);
            },
            9485: (u, e, t) => {
                t.d(e, { W4: () => a, hJ: () => r, wD: () => n });
                t(8546);
                const r = [114, 124, 10021],
                    n = (u, e, t = '') => {
                        const r = t.length > 0 ? `_${t}` : t,
                            n = u.$dyn(`c_${e}${r}`),
                            a = String(e).slice(-1),
                            o = u.$dyn(`default_${a}${r}`);
                        return n || o;
                    },
                    a = (u) => {
                        const e = R.images.gui.maps.icons.battlePass.backgrounds;
                        return u
                            ? { backgroundImage: `url(${n(e.chapter, u)})` }
                            : { backgroundImage: `url(${e.$dyn('common')})` };
                    };
            },
            930: (u, e, t) => {
                let r;
                !(function (u) {
                    (u.style = 'style'), (u.tankman = 'tankman');
                })(r || (r = {}));
                r.style, r.tankman;
            },
            2893: (u, e, t) => {
                t.d(e, { $n: () => a });
                var r = t(2862),
                    n = t(729);
                t(5216), t(8546), t(930), t(7044), t(3649);
                const a = (u, e = r.h2.Big) => {
                    const t = u.item,
                        a = u.name,
                        o = u.value,
                        s = u.overlayType,
                        i = u.tooltipId,
                        l = u.tooltipContentId;
                    return {
                        name: t || a,
                        image: (0, n.ry)(u, e),
                        special: s,
                        value: o,
                        valueType: (0, n.p3)(a),
                        tooltipArgs: (0, n.pI)({ tooltipId: i }, Number(l), { ignoreShowDelay: !0 }),
                        size: e,
                    };
                };
            },
            4420: (u, e, t) => {
                t.d(e, { N: () => c });
                var r = t(6483),
                    n = t.n(r),
                    a = t(6179),
                    o = t.n(a),
                    s = t(9485);
                const i = 'ChapterBackground_base_fa',
                    l = 'ChapterBackground_base__current_7a',
                    c = ({ chapter: u, isCurrent: e, customBackgroundStyle: t }) =>
                        o().createElement('div', { className: n()(i, e && l), style: t || (0, s.W4)(u) });
            },
            8546: (u, e, t) => {
                let r, n, a, o;
                !(function (u) {
                    (u.Micro = 'micro'), (u.Small = 'small'), (u.Medium = 'medium');
                })(r || (r = {})),
                    (function (u) {
                        (u.ACTIVE = 'active'), (u.COMPLETED = 'completed'), (u.NOT_CHOSEN = 'notChosen');
                    })(n || (n = {})),
                    (function (u) {
                        (u.AwaitSeason = 'awaitSeason'),
                            (u.Bought = 'bought'),
                            (u.Free = 'free'),
                            (u.Completed = 'completed'),
                            (u.CompletedRightNow = 'completedRightNow'),
                            (u.SwitchedChapterRightNow = 'switchedChapterRightNow'),
                            (u.NoVehiclesBase = 'noVehiclesBase'),
                            (u.ChapterNotChosen = 'chapterNotChosen');
                    })(a || (a = {})),
                    (function (u) {
                        (u.None = ''),
                            (u.ShowLevel = 'show'),
                            (u.HideLevel = 'hide'),
                            (u.HideLevelWithDelay = 'hideWithDelay');
                    })(o || (o = {}));
            },
            9430: (u, e, t) => {
                t.d(e, { r: () => g });
                var r = t(6483),
                    n = t.n(r),
                    a = t(6179),
                    o = t.n(a),
                    s = t(2862),
                    i = t(5739),
                    l = t(5415),
                    c = t(9480),
                    E = t(2893);
                const A = 'GroupRewards_base_70',
                    d = 'GroupRewards_item_af',
                    F = ({ rewards: u, className: e }) => {
                        const t = (0, l.GS)().mediaSize < l.cJ.Medium ? s.h2.Small : s.h2.Big;
                        return o().createElement(
                            'div',
                            { className: n()(A, e) },
                            c.UI(u, (u, e) =>
                                o().createElement(
                                    'div',
                                    { key: `reward_${e}_${u.name}`, className: d },
                                    o().createElement(i.Q, (0, E.$n)(u, t)),
                                ),
                            ),
                        );
                    };
                var D = t(3862);
                const m = 'RewardsBlock_base_0e',
                    _ = 'RewardsBlock_groupTitle_2f',
                    B = 'RewardsBlock_groupRewards_38',
                    C = 'RewardsBlock_groupRewards__future_b9',
                    g = ({ title: u, iconType: e, steps: t, rewards: r, className: a }) =>
                        o().createElement(
                            'div',
                            { className: n()(m, a) },
                            o().createElement(D.p, { text: u, type: e, steps: t, className: _ }),
                            o().createElement(F, { rewards: r, className: n()(B, e === D.Q.future && C) }),
                        );
            },
            3862: (u, e, t) => {
                t.d(e, { p: () => c, Q: () => l });
                var r = t(6483),
                    n = t.n(r),
                    a = t(280),
                    o = t(6179),
                    s = t.n(o);
                const i = {
                    base: 'GroupTitle_base_e8',
                    text: 'GroupTitle_text_b7',
                    divider: 'GroupTitle_divider_19',
                    divider__left: 'GroupTitle_divider__left_d2',
                    divider__right: 'GroupTitle_divider__right_24',
                    inner: 'GroupTitle_inner_f2',
                    icon: 'GroupTitle_icon_62',
                    base__now: 'GroupTitle_base__now_fa',
                    base__future: 'GroupTitle_base__future_42',
                    steps: 'GroupTitle_steps_8d',
                };
                let l;
                !(function (u) {
                    (u.now = 'now'), (u.future = 'future');
                })(l || (l = {}));
                const c = ({ text: u, type: e, steps: t, className: r }) =>
                    s().createElement(
                        'div',
                        { className: n()(i.base, i[`base__${e}`], r) },
                        s().createElement('div', { className: n()(i.divider, i.divider__left) }),
                        s().createElement(
                            'div',
                            { className: i.inner },
                            s().createElement('div', { className: i.icon }),
                            s().createElement(a.z, {
                                classMix: i.text,
                                text: u,
                                binding: { steps: s().createElement('span', { className: i.steps, key: t }, t) },
                            }),
                        ),
                        s().createElement('div', { className: n()(i.divider, i.divider__right) }),
                    );
            },
            9144: (u, e, t) => {
                t.d(e, { z: () => gu });
                var r = {};
                t.r(r),
                    t.d(r, {
                        Area: () => I,
                        Bar: () => N,
                        DefaultScroll: () => M,
                        Direction: () => C,
                        defaultSettings: () => g,
                        useHorizontalScrollApi: () => p,
                    });
                var n = {};
                t.r(n), t.d(n, { Area: () => tu, Bar: () => J, Default: () => eu, useVerticalScrollApi: () => U });
                var a = t(6483),
                    o = t.n(a),
                    s = t(1856),
                    i = t(6179),
                    l = t.n(i),
                    c = t(7515),
                    E = t(3138),
                    A = t(3815);
                function d(u, e, t = []) {
                    const r = (0, i.useRef)(0),
                        n = (0, i.useCallback)(() => window.clearInterval(r.current), t || []);
                    (0, i.useEffect)(() => n, [n]);
                    const a = (null != t ? t : []).concat([e]);
                    return [
                        (0, i.useCallback)((t) => {
                            (r.current = window.setInterval(() => u(t, !0), e)), u(t, !1);
                        }, a),
                        n,
                    ];
                }
                var F = t(7727);
                function D(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return m(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return m(u, e);
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var r = 0;
                        return function () {
                            return r >= u.length ? { done: !0 } : { done: !1, value: u[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function m(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, r = new Array(e); t < e; t++) r[t] = u[t];
                    return r;
                }
                function _(u, e, t) {
                    const r = (0, i.useMemo)(
                        () =>
                            (function (u, e, t, r) {
                                let n,
                                    a = !1,
                                    o = 0;
                                function s() {
                                    n && clearTimeout(n);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - o;
                                    function E() {
                                        (o = Date.now()), t.apply(l, i);
                                    }
                                    a ||
                                        (r && !n && E(),
                                        s(),
                                        void 0 === r && c > u
                                            ? E()
                                            : !0 !== e &&
                                              (n = setTimeout(
                                                  r
                                                      ? function () {
                                                            n = void 0;
                                                        }
                                                      : E,
                                                  void 0 === r ? u - c : u,
                                              )));
                                }
                                return (
                                    'boolean' != typeof e && ((r = t), (t = e), (e = void 0)),
                                    (i.cancel = function () {
                                        s(), (a = !0);
                                    }),
                                    i
                                );
                            })(t, u),
                        e,
                    );
                    return (0, i.useEffect)(() => r.cancel, [r]), r;
                }
                var B = t(7030);
                let C;
                !(function (u) {
                    (u[(u.Next = -1)] = 'Next'), (u[(u.Prev = 1)] = 'Prev');
                })(C || (C = {}));
                const g = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    h = ({
                        getContainerSize: u,
                        getBounds: e,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: n,
                        triggerMouseMoveOnUpdate: a = !1,
                    }) => {
                        const o = (u, t) => {
                            const r = e(u),
                                n = r[0],
                                a = r[1];
                            return a <= n ? 0 : (0, c.u)(n, a, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                d = void 0 === c ? g : c,
                                F = (0, i.useRef)(null),
                                m = (0, i.useRef)(null),
                                C = (() => {
                                    const u = (0, i.useMemo)(() => ({}), []),
                                        e = (e) => (u[e] || (u[e] = new Map()), u[e]),
                                        t = (u, t) => {
                                            e(u).set(t, t);
                                        },
                                        r = (u, t) => {
                                            e(u).delete(t);
                                        },
                                        n = (u, ...t) => {
                                            for (var r, n = D(e(u).values()); !(r = n()).done; ) (0, r.value)(...t);
                                        };
                                    return (0, i.useMemo)(() => ({ on: t, off: r, trigger: n }), []);
                                })(),
                                h = _(
                                    () => {
                                        E.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                p = (0, B.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (u) => {
                                        const e = F.current;
                                        e && (t(e, u), C.trigger('change', u), a && h());
                                    },
                                    onRest: (u) => C.trigger('rest', u),
                                    onStart: (u) => C.trigger('start', u),
                                    onPause: (u) => C.trigger('pause', u),
                                })),
                                f = p[0],
                                v = p[1],
                                w = (0, i.useCallback)(
                                    (u, e, t) => {
                                        var r;
                                        const n = f.scrollPosition.get(),
                                            a = (null != (r = f.scrollPosition.goal) ? r : 0) - n;
                                        return o(u, e * t + a + n);
                                    },
                                    [f.scrollPosition],
                                ),
                                b = (0, i.useCallback)(
                                    (u, { immediate: e = !1, reset: t = !0 } = {}) => {
                                        const r = F.current;
                                        r &&
                                            v.start({
                                                scrollPosition: o(r, u),
                                                immediate: e,
                                                reset: t,
                                                config: d.animationConfig,
                                                from: { scrollPosition: o(r, f.scrollPosition.get()) },
                                            });
                                    },
                                    [v, d.animationConfig, f.scrollPosition],
                                ),
                                S = (0, i.useCallback)(
                                    (u) => {
                                        const e = F.current,
                                            t = m.current;
                                        if (!e || !t) return;
                                        const r = ((u, e) => {
                                                switch (e.type) {
                                                    case 'proportional':
                                                        return n(u) / e.factor;
                                                    case 'fixed':
                                                        return e.value;
                                                }
                                            })(t, d.step),
                                            a = w(e, u, r);
                                        b(a);
                                    },
                                    [b, w, d.step],
                                ),
                                T = (0, i.useCallback)(
                                    (u) => {
                                        0 !== u.deltaY && S(r(u)),
                                            F.current && C.trigger('mouseWheel', u, f.scrollPosition, e(F.current));
                                    },
                                    [f.scrollPosition, S, C],
                                ),
                                y = ((u, e = []) => {
                                    const t = (0, i.useRef)(),
                                        r = (0, i.useCallback)((...e) => {
                                            t.current && t.current(), (t.current = u(...e));
                                        }, e);
                                    return (
                                        (0, i.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        (0, s.v)(() => {
                                            const u = F.current;
                                            u &&
                                                (b(o(u, f.scrollPosition.goal), { immediate: !0 }),
                                                C.trigger('resizeHandled'));
                                        }),
                                    [b, f.scrollPosition.goal],
                                ),
                                x = (0, A.z)(() => {
                                    const u = F.current;
                                    if (!u) return;
                                    const e = o(u, f.scrollPosition.goal);
                                    e !== f.scrollPosition.goal && b(e, { immediate: !0 }),
                                        C.trigger('recalculateContent');
                                });
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('resize', y),
                                    () => {
                                        window.removeEventListener('resize', y);
                                    }
                                ),
                                [y],
                            );
                            return (0, i.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? n(m.current) : void 0),
                                    getContainerSize: () => (F.current ? u(F.current) : void 0),
                                    getBounds: () =>
                                        F.current
                                            ? e(F.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: d.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: T,
                                    applyScroll: b,
                                    applyStepTo: S,
                                    contentRef: F,
                                    wrapperRef: m,
                                    scrollPosition: v,
                                    animationScroll: f,
                                    recalculateContent: x,
                                    events: { on: C.on, off: C.off },
                                }),
                                [f.scrollPosition, b, S, C.off, C.on, x, T, v, d.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    p = h({
                        getBounds: (u) => {
                            var e, t;
                            return [
                                0,
                                u.offsetWidth -
                                    (null != (e = null == (t = u.parentElement) ? void 0 : t.offsetWidth) ? e : 0),
                            ];
                        },
                        getContainerSize: (u) => u.offsetWidth,
                        getWrapperSize: (u) => u.offsetWidth,
                        setScrollPosition: (u, e) => {
                            u.style.transform = `translateX(-${e.value.scrollPosition}px)`;
                        },
                        getDirection: (u) => (u.deltaY > 1 ? C.Next : C.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    f = 'HorizontalBar_base_49',
                    v = 'HorizontalBar_base__nonActive_82',
                    w = 'HorizontalBar_leftButton_5f',
                    b = 'HorizontalBar_rightButton_03',
                    S = 'HorizontalBar_track_0d',
                    T = 'HorizontalBar_thumb_fd',
                    y = 'HorizontalBar_rail_32',
                    x = 'disable',
                    R = { pending: !1, offset: 0 },
                    P = (u) => {
                        var e;
                        return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                    },
                    k = () => {},
                    O = (u, e) => Math.max(20, u.offsetWidth * e),
                    N = (0, i.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = P, onDrag: r = k }) => {
                        const n = (0, i.useRef)(null),
                            a = (0, i.useRef)(null),
                            D = (0, i.useRef)(null),
                            m = (0, i.useRef)(null),
                            _ = (0, i.useRef)(null),
                            B = u.stepTimeout || 100,
                            g = (0, i.useState)(R),
                            h = g[0],
                            p = g[1],
                            N = (0, i.useCallback)(
                                (u) => {
                                    p(u),
                                        _.current && r({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: _.current });
                                },
                                [r],
                            ),
                            L = () => {
                                const e = m.current,
                                    t = _.current,
                                    r = u.getWrapperSize(),
                                    n = u.getContainerSize();
                                if (!(r && e && t && n)) return;
                                const o = u.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, r / n),
                                    i = (0, c.u)(0, 1, o / (n - r)),
                                    l = (e.offsetWidth - O(e, s)) * i;
                                (t.style.transform = `translateX(${0 | l}px)`),
                                    ((u) => {
                                        if (a.current && D.current && m.current && _.current) {
                                            if (0 === u)
                                                return a.current.classList.add(x), void D.current.classList.remove(x);
                                            if (
                                                ((e = m.current),
                                                (t = _.current),
                                                u - (e.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return a.current.classList.remove(x), void D.current.classList.add(x);
                                            var e, t;
                                            a.current.classList.remove(x), D.current.classList.remove(x);
                                        }
                                    })(l);
                            },
                            M = (0, A.z)(() => {
                                (() => {
                                    const e = _.current,
                                        t = m.current,
                                        r = u.getWrapperSize(),
                                        a = u.getContainerSize();
                                    if (!(a && e && r && t)) return;
                                    const o = Math.min(1, r / a);
                                    (e.style.width = `${O(t, o)}px`),
                                        (e.style.display = 'flex'),
                                        n.current &&
                                            (1 === o ? n.current.classList.add(v) : n.current.classList.remove(v));
                                })(),
                                    L();
                            });
                        (0, i.useEffect)(() => (0, s.v)(M)),
                            (0, i.useEffect)(
                                () =>
                                    (0, s.v)(() => {
                                        const e = () => {
                                            L();
                                        };
                                        let t = k;
                                        const r = () => {
                                            t(), (t = (0, s.v)(M));
                                        };
                                        return (
                                            u.events.on('recalculateContent', M),
                                            u.events.on('rest', e),
                                            u.events.on('change', e),
                                            u.events.on('resizeHandled', r),
                                            () => {
                                                t(),
                                                    u.events.off('recalculateContent', M),
                                                    u.events.off('rest', e),
                                                    u.events.off('change', e),
                                                    u.events.off('resizeHandled', r);
                                            }
                                        );
                                    }),
                                [u],
                            ),
                            (0, i.useEffect)(() => {
                                if (!h.pending) return;
                                const e = E.O.client.events.mouse.move(([e, t]) => {
                                        var n;
                                        const a = u.contentRef.current,
                                            o = u.wrapperRef.current;
                                        if (!a || !o) return;
                                        const s = m.current,
                                            i = _.current;
                                        if (!s || !i) return;
                                        if ('inside' === t && e.clientX < 0) return;
                                        const l = e.clientX - h.offset - s.getBoundingClientRect().x,
                                            c = (l / s.offsetWidth) * (null != (n = u.getContainerSize()) ? n : 0);
                                        u.scrollPosition.start({
                                            scrollPosition: u.clampPosition(a, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: u.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: c });
                                    }),
                                    t = E.O.client.events.mouse.up(() => {
                                        e(), N(R);
                                    });
                                return () => {
                                    e(), t();
                                };
                            }, [u, h.offset, h.pending, r, N]);
                        const I = d((e) => u.applyStepTo(e), B, [u]),
                            U = I[0],
                            W = I[1];
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mouseup', W, !0),
                                () => document.removeEventListener('mouseup', W, !0)
                            ),
                            [W],
                        );
                        const H = (u) => {
                            u.target.classList.contains(x) || (0, F.G)('highlight');
                        };
                        return l().createElement(
                            'div',
                            { className: o()(f, e.base), ref: n, onWheel: u.handleMouseWheel },
                            l().createElement('div', {
                                className: o()(w, e.leftButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(x) || 0 !== u.button || ((0, F.G)('play'), U(C.Next));
                                },
                                onMouseUp: W,
                                ref: a,
                                onMouseEnter: H,
                            }),
                            l().createElement(
                                'div',
                                {
                                    className: o()(S, e.track),
                                    onMouseDown: (e) => {
                                        const r = _.current;
                                        if (r && 0 === e.button)
                                            if (((0, F.G)('play'), e.target === r))
                                                N({ pending: !0, offset: e.screenX - r.getBoundingClientRect().x });
                                            else {
                                                ((e) => {
                                                    const r = _.current,
                                                        n = u.contentRef.current;
                                                    if (!r || !n) return;
                                                    const a = t(u);
                                                    u.applyScroll(u.animationScroll.scrollPosition.get() + a * e);
                                                })(e.screenX > r.getBoundingClientRect().x ? C.Prev : C.Next);
                                            }
                                    },
                                    ref: m,
                                    onMouseEnter: H,
                                },
                                l().createElement('div', { ref: _, className: o()(T, e.thumb) }),
                                l().createElement('div', { className: o()(y, e.rail) }),
                            ),
                            l().createElement('div', {
                                className: o()(b, e.rightButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(x) || 0 !== u.button || ((0, F.G)('play'), U(C.Prev));
                                },
                                onMouseUp: W,
                                ref: D,
                                onMouseEnter: H,
                            }),
                        );
                    }),
                    L = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    M = ({
                        children: u,
                        api: e,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        classNames: a,
                        scrollClassName: s,
                        getStepByRailClick: c,
                        onDrag: E,
                    }) => {
                        const A = (0, i.useMemo)(() => {
                                const u = r || {};
                                return Object.assign({}, u, { base: o()(L.base, u.base) });
                            }, [r]),
                            d = (0, i.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                        return l().createElement(
                            'div',
                            { className: o()(L.defaultScroll, t), onWheel: e.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: o()(L.defaultScrollArea, n) },
                                l().createElement(I, { className: s, api: d, classNames: a }, u),
                            ),
                            l().createElement(N, { getStepByRailClick: c, api: e, onDrag: E, classNames: A }),
                        );
                    },
                    I = ({ api: u, className: e, classNames: t, children: r }) => (
                        (0, i.useEffect)(() => (0, s.v)(u.recalculateContent)),
                        l().createElement(
                            'div',
                            { className: o()(L.base, e) },
                            l().createElement(
                                'div',
                                {
                                    className: o()(L.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: u.handleMouseWheel,
                                    ref: u.wrapperRef,
                                },
                                l().createElement(
                                    'div',
                                    { className: o()(L.content, null == t ? void 0 : t.content), ref: u.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                (I.Bar = N), (I.Default = M);
                const U = h({
                        getBounds: (u) => [0, u.scrollHeight - u.offsetHeight],
                        getContainerSize: (u) => u.scrollHeight,
                        getWrapperSize: (u) => u.offsetHeight,
                        setScrollPosition: (u, e) => {
                            u.scrollTop = e.value.scrollPosition;
                        },
                        getDirection: (u) => (u.deltaY > 1 ? C.Next : C.Prev),
                    }),
                    W = 'VerticalBar_base_f3',
                    H = 'VerticalBar_base__nonActive_42',
                    G = 'VerticalBar_topButton_d7',
                    z = 'VerticalBar_bottomButton_06',
                    $ = 'VerticalBar_track_df',
                    j = 'VerticalBar_thumb_32',
                    V = 'VerticalBar_rail_43',
                    q = 'disable',
                    Y = () => {},
                    Z = { pending: !1, offset: 0 },
                    X = (u) => {
                        var e;
                        return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                    },
                    K = (u, e) => {
                        u.contentRef.current && e(u.contentRef.current);
                    },
                    Q = (u, e) => Math.max(20, u.offsetHeight * e),
                    J = (0, i.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = X, onDrag: r = Y }) => {
                        const n = (0, i.useRef)(null),
                            a = (0, i.useRef)(null),
                            D = (0, i.useRef)(null),
                            m = (0, i.useRef)(null),
                            _ = (0, i.useRef)(null),
                            B = u.stepTimeout || 100,
                            g = (0, i.useState)(Z),
                            h = g[0],
                            p = g[1],
                            f = (0, i.useCallback)(
                                (u) => {
                                    p(u),
                                        _.current && r({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: _.current });
                                },
                                [r],
                            ),
                            v = (0, A.z)(() => {
                                const e = _.current,
                                    t = m.current,
                                    r = u.getWrapperSize(),
                                    a = u.getContainerSize();
                                if (!(r && a && e && t)) return;
                                const o = Math.min(1, r / a);
                                return (
                                    (e.style.height = `${Q(t, o)}px`),
                                    (e.style.display = 'flex'),
                                    n.current && (1 === o ? n.current.classList.add(H) : n.current.classList.remove(H)),
                                    o
                                );
                            }),
                            w = (0, A.z)(() => {
                                const e = m.current,
                                    t = _.current,
                                    r = u.getWrapperSize(),
                                    n = u.getContainerSize();
                                if (!(r && e && t && n)) return;
                                const o = u.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, r / n),
                                    i = (0, c.u)(0, 1, o / (n - r)),
                                    l = (e.offsetHeight - Q(e, s)) * i;
                                (t.style.transform = `translateY(${0 | l}px)`),
                                    ((u) => {
                                        if (a.current && D.current && m.current && _.current) {
                                            if (0 === Math.round(u))
                                                return a.current.classList.add(q), void D.current.classList.remove(q);
                                            if (
                                                ((e = m.current),
                                                (t = _.current),
                                                u - (e.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return a.current.classList.remove(q), void D.current.classList.add(q);
                                            var e, t;
                                            a.current.classList.remove(q), D.current.classList.remove(q);
                                        }
                                    })(l);
                            }),
                            b = (0, A.z)(() => {
                                K(u, () => {
                                    v(), w();
                                });
                            });
                        (0, i.useEffect)(() => (0, s.v)(b)),
                            (0, i.useEffect)(() => {
                                const e = () => {
                                    K(u, () => {
                                        w();
                                    });
                                };
                                let t = Y;
                                const r = () => {
                                    t(), (t = (0, s.v)(b));
                                };
                                return (
                                    u.events.on('recalculateContent', b),
                                    u.events.on('rest', e),
                                    u.events.on('change', e),
                                    u.events.on('resizeHandled', r),
                                    () => {
                                        t(),
                                            u.events.off('recalculateContent', b),
                                            u.events.off('rest', e),
                                            u.events.off('change', e),
                                            u.events.off('resizeHandled', r);
                                    }
                                );
                            }, [u]),
                            (0, i.useEffect)(() => {
                                if (!h.pending) return;
                                const e = E.O.client.events.mouse.up(() => {
                                        f(Z);
                                    }),
                                    t = E.O.client.events.mouse.move(([e]) => {
                                        K(u, (t) => {
                                            const n = m.current,
                                                a = _.current,
                                                o = u.getContainerSize();
                                            if (!n || !a || !o) return;
                                            const s = e.screenY - h.offset - n.getBoundingClientRect().y,
                                                i = (s / n.offsetHeight) * o;
                                            u.scrollPosition.start({
                                                scrollPosition: u.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: a, thumbOffset: s, contentOffset: i });
                                        });
                                    });
                                return () => {
                                    e(), t();
                                };
                            }, [u, h.offset, h.pending, r, f]);
                        const S = d((e) => u.applyStepTo(e), B, [u]),
                            T = S[0],
                            y = S[1];
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mouseup', y, !0),
                                () => document.removeEventListener('mouseup', y, !0)
                            ),
                            [y],
                        );
                        const x = (u) => {
                            u.target.classList.contains(q) || (0, F.G)('highlight');
                        };
                        return l().createElement(
                            'div',
                            { className: o()(W, e.base), ref: n, onWheel: u.handleMouseWheel },
                            l().createElement('div', {
                                className: o()(G, e.topButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(q) || 0 !== u.button || ((0, F.G)('play'), T(C.Next));
                                },
                                ref: a,
                                onMouseEnter: x,
                            }),
                            l().createElement(
                                'div',
                                {
                                    className: o()($, e.track),
                                    onMouseDown: (e) => {
                                        const r = _.current;
                                        if (r && 0 === e.button)
                                            if (((0, F.G)('play'), e.target === r))
                                                f({ pending: !0, offset: e.screenY - r.getBoundingClientRect().y });
                                            else {
                                                ((e) => {
                                                    _.current &&
                                                        K(u, (r) => {
                                                            if (!r) return;
                                                            const n = t(u),
                                                                a = u.clampPosition(r, r.scrollTop + n * e);
                                                            u.applyScroll(a);
                                                        });
                                                })(e.screenY > r.getBoundingClientRect().y ? C.Prev : C.Next);
                                            }
                                    },
                                    ref: m,
                                    onMouseEnter: x,
                                },
                                l().createElement('div', { ref: _, className: o()(j, e.thumb) }),
                                l().createElement('div', { className: o()(V, e.rail) }),
                            ),
                            l().createElement('div', {
                                className: o()(z, e.bottomButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(q) || 0 !== u.button || ((0, F.G)('play'), T(C.Prev));
                                },
                                onMouseUp: y,
                                ref: D,
                                onMouseEnter: x,
                            }),
                        );
                    }),
                    uu = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    eu = ({
                        children: u,
                        api: e,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        scrollClassName: a,
                        scrollClassNames: s,
                        getStepByRailClick: c,
                        onDrag: E,
                    }) => {
                        const A = (0, i.useMemo)(() => {
                                const u = r || {};
                                return Object.assign({}, u, { base: o()(uu.base, u.base) });
                            }, [r]),
                            d = (0, i.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                        return l().createElement(
                            'div',
                            { className: o()(uu.defaultScroll, t), onWheel: e.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: o()(uu.area, n) },
                                l().createElement(tu, { className: a, classNames: s, api: d }, u),
                            ),
                            l().createElement(J, { getStepByRailClick: c, api: e, onDrag: E, classNames: A }),
                        );
                    },
                    tu = ({ className: u, classNames: e, children: t, api: r }) => (
                        (0, i.useEffect)(() => (0, s.v)(r.recalculateContent)),
                        l().createElement(
                            'div',
                            { className: o()(uu.base, u), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: o()(uu.content, null == e ? void 0 : e.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                tu.Default = eu;
                const ru = { Vertical: n, Horizontal: r };
                var nu = t(8882),
                    au = t(9916);
                function ou(u, e, t, r, n, a, o) {
                    try {
                        var s = u[a](o),
                            i = s.value;
                    } catch (u) {
                        return void t(u);
                    }
                    s.done ? e(i) : Promise.resolve(i).then(r, n);
                }
                function su(u) {
                    return function () {
                        var e = this,
                            t = arguments;
                        return new Promise(function (r, n) {
                            var a = u.apply(e, t);
                            function o(u) {
                                ou(a, r, n, o, s, 'next', u);
                            }
                            function s(u) {
                                ou(a, r, n, o, s, 'throw', u);
                            }
                            o(void 0);
                        });
                    };
                }
                let iu;
                !(function (u) {
                    (u[(u.Idle = 0)] = 'Idle'),
                        (u[(u.Start = 1)] = 'Start'),
                        (u[(u.Between = 2)] = 'Between'),
                        (u[(u.End = 3)] = 'End');
                })(iu || (iu = {}));
                const lu = (u) => {
                        const e = (0, i.useState)(iu.Idle),
                            t = e[0],
                            r = e[1],
                            n = u.animationScroll,
                            a = u.getContainerSize,
                            o = u.getWrapperSize,
                            l = u.events,
                            c = (0, i.useCallback)(() => {
                                const u = n.scrollPosition.get(),
                                    e = a() - o();
                                switch (!0) {
                                    case !e:
                                        return r(iu.Idle);
                                    case u <= 0:
                                        return r(iu.Start);
                                    case u >= e:
                                        return r(iu.End);
                                    default:
                                        r(iu.Between);
                                }
                            }, [n.scrollPosition, a, o]);
                        return (
                            (0, i.useEffect)(
                                () => (
                                    (function () {
                                        var u = su(function* () {
                                            yield (0, s.v)(c);
                                        });
                                        return function () {
                                            return u.apply(this, arguments);
                                        };
                                    })()(),
                                    l.on('change', c),
                                    () => l.off('change', c)
                                ),
                                [l, c],
                            ),
                            (0, i.useEffect)(() => {
                                const u = (function () {
                                    var u = su(function* () {
                                        yield (0, au.Eu)(), yield (0, nu.nS)(), c();
                                    });
                                    return function () {
                                        return u.apply(this, arguments);
                                    };
                                })();
                                return (
                                    engine.on('clientResized', u),
                                    () => {
                                        engine.off('clientResized', u);
                                    }
                                );
                            }, [c]),
                            t
                        );
                    },
                    cu = { type: 'idle' };
                const Eu = 'ScrollWithLips_base_69',
                    Au = 'ScrollWithLips_lip_90',
                    du = 'ScrollWithLips_lip__top_ab',
                    Fu = 'ScrollWithLips_lip__bottom_17',
                    Du = 'ScrollWithLips_scroll_7e',
                    mu = 'ScrollWithLips_scroll__loaded_b2',
                    _u = 'ScrollWithLips_topButton_4e',
                    Bu = 'ScrollWithLips_bottomButton_1e',
                    Cu = 'ScrollWithLips_track_4f',
                    gu = ({ className: u, children: e }) => {
                        const t = U();
                        !(function (u, e) {
                            const t = u.contentRef,
                                r = u.wrapperRef,
                                n = u.scrollPosition,
                                a = u.clampPosition,
                                o = u.animationScroll,
                                s = u.events,
                                l = (0, i.useState)(cu),
                                c = l[0],
                                E = l[1];
                            (0, i.useEffect)(() => {
                                const u = t.current;
                                u && (u.style.cursor = 'dragging' === c.type ? 'grabbing' : 'grab');
                            }, [t, c.type]),
                                (0, i.useEffect)(() => {
                                    if ('dragging' !== c.type) return;
                                    const u = (u) => {
                                            const s = t.current,
                                                i = r.current;
                                            if (!s || !i) return;
                                            const l = c.positionFrom - u.screenY,
                                                E = c.previousScrollPosition + l;
                                            n.start(
                                                Object.assign(
                                                    {
                                                        scrollPosition: a(s, E),
                                                        from: { scrollPosition: o.scrollPosition.get() },
                                                    },
                                                    e && { config: e },
                                                ),
                                            );
                                        },
                                        s = () => {
                                            window.removeEventListener('mousemove', u), E({ type: 'scrollingToEnd' });
                                        };
                                    return (
                                        window.addEventListener('mousemove', u),
                                        window.addEventListener('mouseup', s),
                                        () => {
                                            window.removeEventListener('mousemove', u),
                                                window.removeEventListener('mouseup', s);
                                        }
                                    );
                                }, [o.scrollPosition, a, t, c, n, r, e]),
                                (0, i.useEffect)(() => {
                                    if ('scrollingToEnd' !== c.type) return;
                                    const u = () => {
                                        E(cu);
                                    };
                                    return o.scrollPosition.idle && u(), s.on('rest', u), () => s.off('rest', u);
                                }, [o.scrollPosition, c.type, s]),
                                (0, i.useEffect)(() => {
                                    const u = t.current;
                                    if (!u) return;
                                    const e = (u) => {
                                        0 === u.button &&
                                            E({
                                                type: 'dragging',
                                                positionFrom: u.screenY,
                                                previousScrollPosition: o.scrollPosition.get(),
                                            });
                                    };
                                    return (
                                        u.addEventListener('mousedown', e), () => u.removeEventListener('mousedown', e)
                                    );
                                }, [o.scrollPosition, t]);
                        })(t);
                        const r = lu(t),
                            n = r !== iu.Idle;
                        return l().createElement(
                            'div',
                            { className: o()(Eu, u) },
                            r !== iu.Start && r !== iu.Idle && l().createElement('div', { className: o()(Au, du) }),
                            r !== iu.End && r !== iu.Idle && l().createElement('div', { className: o()(Au, Fu) }),
                            l().createElement(
                                ru.Vertical.Area.Default,
                                {
                                    api: t,
                                    barClassNames: {
                                        base: o()(Du, n && mu),
                                        topButton: _u,
                                        bottomButton: Bu,
                                        track: Cu,
                                    },
                                },
                                e,
                            ),
                        );
                    };
            },
            5216: (u, e, t) => {
                let r;
                !(function (u) {
                    (u.Active = 'active'),
                        (u.Paused = 'paused'),
                        (u.Completed = 'completed'),
                        (u.NotStarted = 'notStarted');
                })(r || (r = {}));
            },
            6880: (u, e, t) => {
                t.d(e, { Z: () => r });
                const r = {
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
            },
            5287: (u, e, t) => {
                t.d(e, { Z: () => r });
                const r = { base: 'FormatText_base_d0' };
            },
            1609: (u, e, t) => {
                t.d(e, { Z: () => r });
                const r = {
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
                };
            },
            7476: (u, e, t) => {
                t.d(e, { Z: () => r });
                const r = {
                    base: 'TextButton_base_b6',
                    base__right: 'TextButton_base__right_39',
                    icon: 'TextButton_icon_17',
                    icon__back: 'TextButton_icon__back_43',
                    icon__forward: 'TextButton_icon__forward_59',
                    icon__close: 'TextButton_icon__close_53',
                    icon__info: 'TextButton_icon__info_33',
                    glow: 'TextButton_glow_a4',
                    caption: 'TextButton_caption_82',
                    caption__back: 'TextButton_caption__back_b9',
                    caption__forward: 'TextButton_caption__forward_4e',
                    caption__close: 'TextButton_caption__close_36',
                    caption__info: 'TextButton_caption__info_23',
                    goto: 'TextButton_goto_e7',
                    base__left: 'TextButton_base__left_ff',
                    shine: 'TextButton_shine_e2',
                };
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(u) {
        var e = __webpack_module_cache__[u];
        if (void 0 !== e) return e.exports;
        var t = (__webpack_module_cache__[u] = { exports: {} });
        return __webpack_modules__[u](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (u, e, t, r) => {
            if (!e) {
                var n = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [e, t, r] = deferred[i], a = !0, o = 0; o < e.length; o++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[o]))
                            ? e.splice(o--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(i--, 1);
                        var s = t();
                        void 0 !== s && (u = s);
                    }
                }
                return u;
            }
            r = r || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > r; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [e, t, r];
        }),
        (__webpack_require__.n = (u) => {
            var e = u && u.__esModule ? () => u.default : () => u;
            return __webpack_require__.d(e, { a: e }), e;
        }),
        (__webpack_require__.d = (u, e) => {
            for (var t in e)
                __webpack_require__.o(e, t) &&
                    !__webpack_require__.o(u, t) &&
                    Object.defineProperty(u, t, { enumerable: !0, get: e[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (u) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (u, e) => Object.prototype.hasOwnProperty.call(u, e)),
        (__webpack_require__.r = (u) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(u, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 2155),
        (() => {
            var u = { 2155: 0, 8805: 0, 6488: 0, 2670: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var r,
                        n,
                        [a, o, s] = t,
                        i = 0;
                    if (a.some((e) => 0 !== u[e])) {
                        for (r in o) __webpack_require__.o(o, r) && (__webpack_require__.m[r] = o[r]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (e && e(t); i < a.length; i++)
                        (n = a[i]), __webpack_require__.o(u, n) && u[n] && u[n][0](), (u[n] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(9508));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
