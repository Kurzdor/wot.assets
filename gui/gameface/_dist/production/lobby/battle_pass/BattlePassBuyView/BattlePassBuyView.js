(() => {
    var __webpack_modules__ = {
            3457: (e, u, t) => {
                'use strict';
                t.d(u, { L$: () => l.L, qE: () => l.q, u5: () => d });
                var r = t(6483),
                    a = t.n(r),
                    n = t(7727),
                    s = t(6179),
                    i = t.n(s),
                    o = t(6880),
                    l = t(2106);
                const c = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: c,
                    mixClass: d,
                    soundHover: _,
                    soundClick: E,
                    onMouseEnter: m,
                    onMouseMove: A,
                    onMouseDown: F,
                    onMouseUp: g,
                    onMouseLeave: D,
                    onClick: C,
                }) => {
                    const B = (0, s.useRef)(null),
                        p = (0, s.useState)(t),
                        h = p[0],
                        f = p[1],
                        v = (0, s.useState)(!1),
                        b = v[0],
                        w = v[1];
                    return (
                        (0, s.useEffect)(() => {
                            function e(e) {
                                h && null !== B.current && !B.current.contains(e.target) && f(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [h]),
                        (0, s.useEffect)(() => {
                            f(t);
                        }, [t]),
                        i().createElement(
                            'div',
                            {
                                ref: B,
                                className: a()(
                                    o.Z.base,
                                    o.Z[`base__${r}`],
                                    c && o.Z.base__disabled,
                                    u && o.Z[`base__${u}`],
                                    h && o.Z.base__focus,
                                    b && o.Z.base__highlightActive,
                                    d,
                                ),
                                onMouseEnter: function (e) {
                                    c || (null !== _ && (0, n.G)(_), m && m(e));
                                },
                                onMouseMove: function (e) {
                                    A && A(e);
                                },
                                onMouseUp: function (e) {
                                    c || (g && g(e), w(!1));
                                },
                                onMouseDown: function (e) {
                                    c ||
                                        (null !== E && (0, n.G)(E),
                                        F && F(e),
                                        t && (c || (B.current && (B.current.focus(), f(!0)))),
                                        w(!0));
                                },
                                onMouseLeave: function (e) {
                                    c || (D && D(e), w(!1));
                                },
                                onClick: function (e) {
                                    c || (C && C(e));
                                },
                            },
                            r !== l.L.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: o.Z.back }),
                                    i().createElement('span', { className: o.Z.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: a()(o.Z.state, o.Z.state__default) },
                                i().createElement('span', { className: o.Z.stateDisabled }),
                                i().createElement('span', { className: o.Z.stateHighlightHover }),
                                i().createElement('span', { className: o.Z.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: o.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const d = c;
            },
            2106: (e, u, t) => {
                'use strict';
                let r, a;
                t.d(u, { L: () => r, q: () => a }),
                    (function (e) {
                        (e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost');
                    })(r || (r = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(a || (a = {}));
            },
            2372: (e, u, t) => {
                'use strict';
                t.d(u, { A: () => s });
                var r = t(6179),
                    a = t.n(r),
                    n = t(9916);
                class s extends a().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = n.B3.GOLD;
                        else e = n.B3.INTEGRAL;
                        const u = n.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                s.defaultProps = { format: 'integral' };
            },
            280: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => l });
                var r = t(6483),
                    a = t.n(r),
                    n = t(3649),
                    s = t(6179),
                    i = t.n(s),
                    o = t(5287);
                const l = ({
                    binding: e,
                    text: u = '',
                    classMix: t,
                    alignment: r = n.v2.left,
                    formatWithBrackets: l,
                }) => {
                    if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                    const c = l && e ? (0, n.WU)(u, e) : u;
                    return i().createElement(
                        s.Fragment,
                        null,
                        c.split('\n').map((u, l) =>
                            i().createElement(
                                'div',
                                { className: a()(o.Z.base, t), key: `${u}-${l}` },
                                (0, n.Uw)(u, r, e).map((e, u) =>
                                    i().createElement(s.Fragment, { key: `${u}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
                };
            },
            9766: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => r.z });
                var r = t(280);
                t(8082);
            },
            8082: (e, u, t) => {
                'use strict';
                t(3649);
            },
            3495: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => d });
                var r = t(3138),
                    a = t(6179),
                    n = t(1043),
                    s = t(5262);
                const i = r.O.client.getSize('rem'),
                    o = i.width,
                    l = i.height,
                    c = Object.assign({ width: o, height: l }, (0, s.T)(o, l, n.j)),
                    d = (0, a.createContext)(c);
            },
            1039: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => c });
                var r = t(3138),
                    a = t(6536),
                    n = t(6179),
                    s = t.n(n),
                    i = t(3495),
                    o = t(1043),
                    l = t(5262);
                const c = ({ children: e }) => {
                    const u = (0, n.useContext)(i.Y),
                        t = (0, n.useState)(u),
                        c = t[0],
                        d = t[1],
                        _ = (0, n.useCallback)((e, u) => {
                            const t = r.O.view.pxToRem(e),
                                a = r.O.view.pxToRem(u);
                            d(Object.assign({ width: t, height: a }, (0, l.T)(t, a, o.j)));
                        }, []),
                        E = (0, n.useCallback)(() => {
                            const e = r.O.client.getSize('px');
                            _(e.width, e.height);
                        }, [_]);
                    (0, a.Z)(() => {
                        r.O.client.events.on('clientResized', _), r.O.client.events.on('self.onScaleUpdated', E);
                    }),
                        (0, n.useEffect)(
                            () => () => {
                                r.O.client.events.off('clientResized', _),
                                    r.O.client.events.off('self.onScaleUpdated', E);
                            },
                            [_, E],
                        );
                    const m = (0, n.useMemo)(() => Object.assign({}, c), [c]);
                    return s().createElement(i.Y.Provider, { value: m }, e);
                };
            },
            6010: (e, u, t) => {
                'use strict';
                var r = t(6179),
                    a = t(7382),
                    n = t(3495);
                const s = ['children'];
                const i = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                a = {},
                                n = Object.keys(e);
                            for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, s);
                    const i = (0, r.useContext)(n.Y),
                        o = i.extraLarge,
                        l = i.large,
                        c = i.medium,
                        d = i.small,
                        _ = i.extraSmall,
                        E = i.extraLargeWidth,
                        m = i.largeWidth,
                        A = i.mediumWidth,
                        F = i.smallWidth,
                        g = i.extraSmallWidth,
                        D = i.extraLargeHeight,
                        C = i.largeHeight,
                        B = i.mediumHeight,
                        p = i.smallHeight,
                        h = i.extraSmallHeight,
                        f = { extraLarge: D, large: C, medium: B, small: p, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && o) return u;
                        if (t.large && l) return u;
                        if (t.medium && c) return u;
                        if (t.small && d) return u;
                        if (t.extraSmall && _) return u;
                    } else {
                        if (t.extraLargeWidth && E) return (0, a.H)(u, t, f);
                        if (t.largeWidth && m) return (0, a.H)(u, t, f);
                        if (t.mediumWidth && A) return (0, a.H)(u, t, f);
                        if (t.smallWidth && F) return (0, a.H)(u, t, f);
                        if (t.extraSmallWidth && g) return (0, a.H)(u, t, f);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && D) return u;
                            if (t.largeHeight && C) return u;
                            if (t.mediumHeight && B) return u;
                            if (t.smallHeight && p) return u;
                            if (t.extraSmallHeight && h) return u;
                        }
                    }
                    return null;
                };
                i.defaultProps = {
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
                (0, r.memo)(i);
            },
            7382: (e, u, t) => {
                'use strict';
                t.d(u, { H: () => r });
                const r = (e, u, t) =>
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
                'use strict';
                t.d(u, { YN: () => a.Y, ZN: () => r.Z });
                t(6010);
                var r = t(1039),
                    a = t(3495);
            },
            1043: (e, u, t) => {
                'use strict';
                t.d(u, { j: () => r });
                const r = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, u, t) => {
                'use strict';
                var r;
                function a(e, u, t) {
                    const r = (function (e, u) {
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
                        a = (function (e, u) {
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
                        n = Math.min(r, a);
                    return {
                        extraLarge: n === t.extraLarge.weight,
                        large: n === t.large.weight,
                        medium: n === t.medium.weight,
                        small: n === t.small.weight,
                        extraSmall: n === t.extraSmall.weight,
                        extraLargeWidth: r === t.extraLarge.weight,
                        largeWidth: r === t.large.weight,
                        mediumWidth: r === t.medium.weight,
                        smallWidth: r === t.small.weight,
                        extraSmallWidth: r === t.extraSmall.weight,
                        extraLargeHeight: a === t.extraLarge.weight,
                        largeHeight: a === t.large.weight,
                        mediumHeight: a === t.medium.weight,
                        smallHeight: a === t.small.weight,
                        extraSmallHeight: a === t.extraSmall.weight,
                    };
                }
                t.d(u, { T: () => a }),
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
                    })(r || (r = {}));
            },
            5739: (e, u, t) => {
                'use strict';
                t.d(u, { Q: () => d });
                var r = t(6483),
                    a = t.n(r),
                    n = t(6179),
                    s = t.n(n),
                    i = t(3415),
                    o = t(2862),
                    l = t(729),
                    c = t(1609);
                const d = ({
                    name: e,
                    image: u,
                    isPeriodic: t = !1,
                    size: r = o.h2.Big,
                    special: n,
                    value: d,
                    valueType: _,
                    style: E,
                    className: m,
                    classNames: A,
                    tooltipArgs: F,
                    periodicIconTooltipArgs: g,
                }) => {
                    const D = (0, l.c$)(r, n),
                        C = (0, l.i2)(n),
                        B = (0, l.m9)(d, _);
                    return s().createElement(
                        'div',
                        { className: a()(c.Z.base, c.Z[`base__${r}`], m), style: E },
                        s().createElement(
                            i.l,
                            { tooltipArgs: F, className: c.Z.tooltipWrapper },
                            s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(
                                    'div',
                                    { className: a()(c.Z.image, null == A ? void 0 : A.image) },
                                    D &&
                                        s().createElement('div', {
                                            className: a()(c.Z.highlight, null == A ? void 0 : A.highlight),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${D}_highlight)`,
                                            },
                                        }),
                                    u &&
                                        s().createElement('div', {
                                            className: a()(c.Z.icon, null == A ? void 0 : A.rewardIcon),
                                            style: { backgroundImage: `url(${u})` },
                                        }),
                                    C &&
                                        s().createElement('div', {
                                            className: a()(c.Z.overlay, null == A ? void 0 : A.overlay),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${C}_overlay)`,
                                            },
                                        }),
                                ),
                                B &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: a()(
                                                c.Z.info,
                                                c.Z[`info__${e}`],
                                                _ === o.$h.MULTI && c.Z.info__multi,
                                                null == A ? void 0 : A.info,
                                            ),
                                        },
                                        B,
                                    ),
                            ),
                        ),
                        t &&
                            s().createElement(
                                i.l,
                                { tooltipArgs: g },
                                s().createElement('div', {
                                    className: a()(c.Z.timer, null == A ? void 0 : A.periodicIcon),
                                }),
                            ),
                    );
                };
            },
            2862: (e, u, t) => {
                'use strict';
                let r, a, n, s, i, o, l;
                t.d(u, { $h: () => s, A2: () => o, E4: () => r, h2: () => n, kK: () => i, sh: () => l }),
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
                            (e.EquipCoin = 'equipCoin');
                    })(r || (r = {})),
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
                            (e.S64x64 = 's64x64'),
                            (e.S48x48 = 's48x48');
                    })(n || (n = {})),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(i || (i = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
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
                    })(l || (l = {}));
            },
            729: (e, u, t) => {
                'use strict';
                t.d(u, { c$: () => g, i2: () => D, m9: () => C, p3: () => d, pI: () => A, ry: () => m });
                var r = t(2372),
                    a = t(6179),
                    n = t.n(a),
                    s = t(2862);
                const i = [
                        s.E4.Items,
                        s.E4.Equipment,
                        s.E4.Xp,
                        s.E4.XpFactor,
                        s.E4.Blueprints,
                        s.E4.BlueprintsAny,
                        s.E4.Goodies,
                        s.E4.Berths,
                        s.E4.Slots,
                        s.E4.Tokens,
                        s.E4.CrewSkins,
                        s.E4.CrewBooks,
                        s.E4.Customizations,
                        s.E4.CreditsFactor,
                        s.E4.TankmenXp,
                        s.E4.TankmenXpFactor,
                        s.E4.FreeXpFactor,
                        s.E4.BattleToken,
                        s.E4.PremiumUniversal,
                        s.E4.NaturalCover,
                        s.E4.BpCoin,
                        s.E4.BattlePassSelectToken,
                        s.E4.BattlaPassFinalAchievement,
                        s.E4.BattleBadge,
                        s.E4.BonusX5,
                        s.E4.CrewBonusX3,
                        s.E4.NewYearInvoice,
                        s.E4.EpicSelectToken,
                        s.E4.Comp7TokenWeeklyReward,
                        s.E4.DeluxeGift,
                        s.E4.BattleBoosterGift,
                        s.E4.OptionalDevice,
                    ],
                    o = [s.E4.Gold, s.E4.Credits, s.E4.Crystal, s.E4.FreeXp],
                    l = [s.E4.BattlePassPoints, s.E4.EquipCoin],
                    c = [s.E4.PremiumPlus, s.E4.Premium],
                    d = (e) =>
                        i.includes(e)
                            ? s.$h.MULTI
                            : o.includes(e)
                              ? s.$h.CURRENCY
                              : l.includes(e)
                                ? s.$h.NUMBER
                                : c.includes(e)
                                  ? s.$h.PREMIUM_PLUS
                                  : s.$h.STRING,
                    _ = ['engravings', 'backgrounds'],
                    E = ['engraving', 'background'],
                    m = (e, u = s.h2.Small) => {
                        const t = e.name,
                            r = e.type,
                            a = e.value,
                            n = e.icon,
                            i = e.item,
                            o = e.dogTagType,
                            l = ((e) => {
                                switch (e) {
                                    case s.h2.S600x450:
                                        return 'c_600x450';
                                    case s.h2.S400x300:
                                        return 'c_400x300';
                                    case s.h2.S296x222:
                                        return 'c_296x222';
                                    case s.h2.S232x174:
                                        return 'c_232x174';
                                    case s.h2.Big:
                                        return 'c_80x80';
                                    case s.h2.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}_${a}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${a}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${i}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${n}`;
                            case 'tokens':
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
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${n}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const r = _[e];
                                    if (r) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(r),
                                            n = a.$dyn(t);
                                        return n ? `${n}` : `${a.$dyn(E[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, u, n);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${n}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${l}.${n}`;
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
                                return `R.images.gui.maps.icons.collectionItems.${l}.${n}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    A = (e, u, t) => {
                        const r = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            r,
                            t,
                        );
                    },
                    F = [s.h2.Small, s.h2.Big],
                    g = (e, u) => {
                        if (void 0 === u || !F.includes(e)) return null;
                        switch (u) {
                            case s.kK.BATTLE_BOOSTER:
                            case s.kK.BATTLE_BOOSTER_REPLACE:
                                return s.A2.BATTLE_BOOSTER;
                        }
                    },
                    D = (e) => {
                        if (void 0 === e) return null;
                        switch (e) {
                            case s.kK.BATTLE_BOOSTER:
                                return s.sh.BATTLE_BOOSTER;
                            case s.kK.BATTLE_BOOSTER_REPLACE:
                                return s.sh.BATTLE_BOOSTER_REPLACE;
                            case s.kK.BUILT_IN_EQUIPMENT:
                                return s.sh.BUILT_IN_EQUIPMENT;
                            case s.kK.EQUIPMENT_PLUS:
                                return s.sh.EQUIPMENT_PLUS;
                            case s.kK.EQUIPMENT_TROPHY_BASIC:
                                return s.sh.EQUIPMENT_TROPHY_BASIC;
                            case s.kK.EQUIPMENT_TROPHY_UPGRADED:
                                return s.sh.EQUIPMENT_TROPHY_UPGRADED;
                            case s.kK.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                return s.sh.EQUIPMENT_MODERNIZED_UPGRADED_1;
                            case s.kK.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                return s.sh.EQUIPMENT_MODERNIZED_UPGRADED_2;
                            case s.kK.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                return s.sh.EQUIPMENT_MODERNIZED_UPGRADED_3;
                            case s.kK.PROGRESSION_STYLE_UPGRADED_1:
                                return s.sh.PROGRESSION_STYLE_UPGRADED_1;
                            case s.kK.PROGRESSION_STYLE_UPGRADED_2:
                                return s.sh.PROGRESSION_STYLE_UPGRADED_2;
                            case s.kK.PROGRESSION_STYLE_UPGRADED_3:
                                return s.sh.PROGRESSION_STYLE_UPGRADED_3;
                            case s.kK.PROGRESSION_STYLE_UPGRADED_4:
                                return s.sh.PROGRESSION_STYLE_UPGRADED_4;
                            case s.kK.PROGRESSION_STYLE_UPGRADED_5:
                                return s.sh.PROGRESSION_STYLE_UPGRADED_5;
                            case s.kK.PROGRESSION_STYLE_UPGRADED_6:
                                return s.sh.PROGRESSION_STYLE_UPGRADED_6;
                        }
                    },
                    C = (e, u) => {
                        if (void 0 === e) return null;
                        switch (u) {
                            case s.$h.MULTI: {
                                const u = Number(e);
                                return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                            }
                            case s.$h.CURRENCY:
                            case s.$h.NUMBER:
                                return n().createElement(r.A, { format: 'integral', value: Number(e) });
                            case s.$h.PREMIUM_PLUS: {
                                const u = Number(e);
                                return isNaN(u) ? e : null;
                            }
                            default:
                                return e;
                        }
                    };
            },
            7932: (e, u, t) => {
                'use strict';
                'undefined' != typeof Element &&
                    (Element.prototype.matches ||
                        Element.prototype.webkitMatchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector);
            },
            8882: (e, u, t) => {
                'use strict';
                t.d(u, { nS: () => r });
                t(7932);
                'undefined' != typeof document && document.documentElement.style,
                    'undefined' != typeof window &&
                        ('ontouchstart' in window || (window.DocumentTouch && (document, window.DocumentTouch))),
                    'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent);
                function r() {
                    return new Promise((e) => {
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                e();
                            });
                        });
                    });
                }
            },
            8089: (e, u, t) => {
                'use strict';
                t.d(u, { A: () => d });
                var r = t(6179),
                    a = t.n(r),
                    n = t(6483),
                    s = t.n(n),
                    i = t(7727),
                    o = t(7476);
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
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        c.apply(this, arguments)
                    );
                }
                class d extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, i.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, i.G)(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                e && e(u), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            t = e.onClick,
                            r = e.goto,
                            n = e.side,
                            i = e.type,
                            d = e.classNames,
                            _ = e.onMouseEnter,
                            E = e.onMouseLeave,
                            m = e.onMouseDown,
                            A = e.onMouseUp,
                            F =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        a = {},
                                        n = Object.keys(e);
                                    for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(e, l)),
                            g = s()(o.Z.base, o.Z[`base__${i}`], o.Z[`base__${n}`], null == d ? void 0 : d.base),
                            D = s()(o.Z.icon, o.Z[`icon__${i}`], o.Z[`icon__${n}`], null == d ? void 0 : d.icon),
                            C = s()(o.Z.glow, null == d ? void 0 : d.glow),
                            B = s()(o.Z.caption, o.Z[`caption__${i}`], null == d ? void 0 : d.caption),
                            p = s()(o.Z.goto, null == d ? void 0 : d.goto);
                        return a().createElement(
                            'div',
                            c(
                                {
                                    className: g,
                                    onMouseEnter: this._onMouseEnter(_),
                                    onMouseLeave: this._onMouseLeave(E),
                                    onMouseDown: this._onMouseDown(m),
                                    onMouseUp: this._onMouseUp(A),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                F,
                            ),
                            'info' !== i && a().createElement('div', { className: o.Z.shine }),
                            a().createElement('div', { className: D }, a().createElement('div', { className: C })),
                            a().createElement('div', { className: B }, u),
                            r && a().createElement('div', { className: p }, r),
                        );
                    }
                }
                d.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
            },
            7078: (e, u, t) => {
                'use strict';
                t.d(u, { t: () => o });
                var r = t(6179),
                    a = t.n(r),
                    n = t(2056);
                const s = ['children'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const o = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                a = {},
                                n = Object.keys(e);
                            for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, s);
                    return a().createElement(
                        n.u,
                        i(
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
                'use strict';
                t.d(u, { l: () => l });
                var r = t(6179),
                    a = t.n(r),
                    n = t(7078),
                    s = t(6373),
                    i = t(2056);
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const r = a().createElement('div', { className: t }, e);
                    if (u.header || u.body) return a().createElement(s.i, u, r);
                    const l = u.contentId;
                    return l ? a().createElement(i.u, o({}, u, { contentId: l }), r) : a().createElement(n.t, u, r);
                };
            },
            6373: (e, u, t) => {
                'use strict';
                t.d(u, { i: () => l });
                var r = t(2056),
                    a = t(6179),
                    n = t.n(a);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const o = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let u = e.children,
                            t = e.body,
                            l = e.header,
                            c = e.note,
                            d = e.alert,
                            _ = e.args,
                            E = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, s);
                        const m = (0, a.useMemo)(() => {
                            const e = Object.assign({}, _, { body: t, header: l, note: c, alert: d });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [d, t, l, c, _]);
                        return n().createElement(
                            r.u,
                            i(
                                {
                                    contentId:
                                        ((A = null == _ ? void 0 : _.hasHtmlContent),
                                        A ? o.SimpleTooltipHtmlContent('resId') : o.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: m,
                                },
                                E,
                            ),
                            u,
                        );
                        var A;
                    };
            },
            2056: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => l });
                var r = t(7902),
                    a = t(9916),
                    n = t(6179);
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
                function i(e) {
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
                const o = (e, u, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: a.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    l = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            _ = e.onClick,
                            E = e.ignoreShowDelay,
                            m = void 0 !== E && E,
                            A = e.ignoreMouseClick,
                            F = void 0 !== A && A,
                            g = e.decoratorId,
                            D = void 0 === g ? 0 : g,
                            C = e.isEnabled,
                            B = void 0 === C || C,
                            p = e.targetId,
                            h = void 0 === p ? 0 : p,
                            f = e.onShow,
                            v = e.onHide,
                            b = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, s);
                        const w = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, n.useMemo)(() => h || (0, r.F)().resId, [h]),
                            S = (0, n.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (o(t, D, { isMouseEvent: !0, on: !0, arguments: i(a) }, y),
                                    f && f(),
                                    (w.current.isVisible = !0));
                            }, [t, D, a, y, f]),
                            R = (0, n.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        o(t, D, { on: !1 }, y),
                                        w.current.isVisible && v && v(),
                                        (w.current.isVisible = !1);
                                }
                            }, [t, D, y, v]),
                            k = (0, n.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(w.current.prevTarget) && R();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', k, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', k, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === B && R();
                            }, [B, R]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', R),
                                    () => {
                                        window.removeEventListener('mouseleave', R), R();
                                    }
                                ),
                                [R],
                            );
                        return B
                            ? (0, n.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((x = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(S, m ? 100 : 400)),
                                                      l && l(e),
                                                      x && x(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              R(), null == c || c(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === F && R(), null == _ || _(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === F && R(), null == d || d(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      b,
                                  ),
                              )
                            : u;
                        var x;
                    };
            },
            926: (e) => {
                e.exports = {
                    SMALL_WIDTH: 'mediaSmallWidth',
                    MEDIUM_WIDTH: 'mediaMediumWidth',
                    LARGE_WIDTH: 'mediaLargeWidth',
                    EXTRA_LARGE_WIDTH: 'mediaExtraLargeWidth',
                    SMALL_HEIGHT: 'mediaSmallHeight',
                    MEDIUM_HEIGHT: 'mediaMediumHeight',
                    LARGE_HEIGHT: 'mediaLargeHeight',
                    EXTRA_LARGE_HEIGHT: 'mediaExtraLargeHeight',
                    SMALL: 'mediaSmall',
                    MEDIUM: 'mediaMedium',
                    LARGE: 'mediaLarge',
                    EXTRA_LARGE: 'mediaExtraLarge',
                };
            },
            7515: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => r });
                const r = (e, u, t) => (t < e ? e : t > u ? u : t);
            },
            1856: (e, u, t) => {
                'use strict';
                t.d(u, { v: () => r });
                const r = (e) => {
                    let u,
                        t = null;
                    return (
                        (t = requestAnimationFrame(() => {
                            t = requestAnimationFrame(() => {
                                (t = null), (u = e());
                            });
                        })),
                        () => {
                            'function' == typeof u && u(), null !== t && cancelAnimationFrame(t);
                        }
                    );
                };
            },
            8246: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => i });
                var r = t(3138);
                function a(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return n(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return n(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function n(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const s = (e) => (0 === e ? window : window.subViews.get(e));
                function i({ initializer: e = !0, rootId: u = 0, getRoot: t = s, context: n = 'model' } = {}) {
                    const i = new Map();
                    function o(e, u = 0) {
                        viewEnv.removeDataChangedCallback(e, u)
                            ? i.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, u, t) => {
                            t.forEach((u) => {
                                const t = i.get(u);
                                void 0 !== t && t(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const r = t(u),
                            a = n.split('.').reduce((e, u) => e[u], r);
                        return 'string' != typeof e || 0 === e.length
                            ? a
                            : e.split('.').reduce((e, u) => {
                                  const t = e[u];
                                  return 'function' == typeof t ? t.bind(e) : t;
                              }, a);
                    };
                    return {
                        subscribe: (t, a) => {
                            const s = 'string' == typeof a ? `${n}.${a}` : n,
                                o = r.O.view.addModelObserver(s, u, !0);
                            return i.set(o, t), e && t(l(a)), o;
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
                            for (var e, t = a(i.keys()); !(e = t()).done; ) {
                                o(e.value, u);
                            }
                        },
                        unsubscribe: o,
                    };
                }
            },
            3215: (e, u, t) => {
                'use strict';
                t.d(u, { q: () => o });
                var r = t(4598),
                    a = t(9174),
                    n = t(6179),
                    s = t.n(n),
                    i = t(8246);
                const o = () => (e, u) => {
                    const t = (0, n.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: l, children: c, mocks: d }) {
                            const _ = (0, n.useRef)([]),
                                E = (t, n, s) => {
                                    var o;
                                    const l = i.U(n),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (o = null == s ? void 0 : s.getter) ? o : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === t ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        E = (e) => _.current.push(e),
                                        m = e({
                                            mode: t,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, u) => {
                                                    const n = null != u ? u : d(e),
                                                        s = a.LO.box(n, { equals: r.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const n = null != u ? u : d(e),
                                                        s = a.LO.box(n, { equals: r.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                primitives: (e, u) => {
                                                    const r = d(u);
                                                    if (Array.isArray(e)) {
                                                        const n = e.reduce(
                                                            (e, u) => ((e[u] = a.LO.box(r[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, a.aD)((u) => {
                                                                        e.forEach((e) => {
                                                                            n[e].set(u[e]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    }
                                                    {
                                                        const n = e,
                                                            s = Object.entries(n),
                                                            i = s.reduce(
                                                                (e, [u, t]) => ((e[t] = a.LO.box(r[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, a.aD)((e) => {
                                                                        s.forEach(([u, t]) => {
                                                                            i[t].set(e[u]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: E,
                                        }),
                                        A = { mode: t, model: m, externalModel: c, cleanup: E };
                                    return {
                                        model: m,
                                        controls: 'mocks' === t && s ? s.controls(A) : u(A),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                m = (0, n.useRef)(!1),
                                A = (0, n.useState)(o),
                                F = A[0],
                                g = A[1],
                                D = (0, n.useState)(() => E(o, l, d)),
                                C = D[0],
                                B = D[1];
                            return (
                                (0, n.useEffect)(() => {
                                    m.current ? B(E(F, l, d)) : (m.current = !0);
                                }, [d, F, l]),
                                (0, n.useEffect)(() => {
                                    g(o);
                                }, [o]),
                                (0, n.useEffect)(
                                    () => () => {
                                        C.externalModel.dispose(), _.current.forEach((e) => e());
                                    },
                                    [C],
                                ),
                                s().createElement(t.Provider, { value: C }, c)
                            );
                        },
                        () => (0, n.useContext)(t),
                    ];
                };
            },
            7044: (e, u, t) => {
                'use strict';
                t.d(u, { f8: () => l, s_: () => n, wB: () => c, yR: () => s });
                var r = t(3649),
                    a = (t(9916), t(8613));
                const n = 1e3,
                    s = 60,
                    i = 60 * s,
                    o = 24 * i;
                Date.now(), a.Ew.getRegionalDateTime, a.Ew.getFormattedDateTime;
                function l(e = 0) {
                    let u = e;
                    const t = Math.trunc(u / o);
                    u -= t * o;
                    const r = Math.trunc(u / i);
                    u -= r * i;
                    const a = Math.trunc(u / s);
                    return (u -= a * s), { days: t, hours: r, minutes: a, seconds: u };
                }
                const c = (e, u = !0) =>
                    e.days > 7 && u
                        ? (0, r.WU)(R.strings.common.duration.days(), { days: e.days })
                        : e.days >= 1
                          ? 0 === e.hours
                              ? (0, r.WU)(R.strings.common.duration.days(), { days: e.days })
                              : `${(0, r.WU)(R.strings.common.duration.days(), { days: e.days })} ${(0, r.WU)(R.strings.common.duration.hours(), { hours: e.hours })}`
                          : e.hours >= 1
                            ? 0 === e.minutes
                                ? (0, r.WU)(R.strings.common.duration.hours(), { hours: e.hours })
                                : `${(0, r.WU)(R.strings.common.duration.hours(), { hours: e.hours })} ${(0, r.WU)(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                            : (0, r.WU)(R.strings.common.duration.minutes(), { minutes: e.minutes || 1 });
            },
            527: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, { mouse: () => c, off: () => o, on: () => i, onResize: () => n, onScaleUpdated: () => s });
                var r = t(2472),
                    a = t(1176);
                const n = (0, r.E)('clientResized'),
                    s = (0, r.E)('self.onScaleUpdated'),
                    i = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
                    l = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, a.R)(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', u),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', u),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, a.R)(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const n = `mouse${u}`,
                                        s = l[u]((e) => t([e, 'outside']));
                                    function i(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(n, i),
                                        r(),
                                        () => {
                                            a &&
                                                (s(),
                                                window.removeEventListener(n, i),
                                                (e.listeners -= 1),
                                                r(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
                        ),
                        {},
                    );
                    return Object.assign({}, n, {
                        disable() {
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
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
            5959: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => r,
                        getMouseGlobalPosition: () => s,
                        getSize: () => n,
                        graphicsQuality: () => i,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    });
                var r = t(527),
                    a = t(2493);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                'use strict';
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => r });
            },
            2493: (e, u, t) => {
                'use strict';
                function r(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function a(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => a, G: () => r });
            },
            2472: (e, u, t) => {
                'use strict';
                function r(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => r });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => n });
                var r = t(5959),
                    a = t(514);
                const n = { view: t(7641), client: r, sound: a.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => s });
                var r = t(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    n = Object.keys(a).reduce((e, u) => ((e[u] = () => (0, r.playSound)(a[u])), e), {}),
                    s = { play: Object.assign({}, n, { sound: r.playSound }), setRTPC: r.setRTPC };
            },
            3722: (e, u, t) => {
                'use strict';
                function r(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function a(e, u, t) {
                    return `url(${r(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => a, getTextureUrl: () => r });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => a });
                var r = t(2472);
                const a = {
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
            7641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => r,
                        displayStatus: () => a.W,
                        displayStatusIs: () => b,
                        events: () => n.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => F,
                        getSize: () => _,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => h,
                        isFocused: () => B,
                        pxToRem: () => g,
                        remToPx: () => D,
                        resize: () => E,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => y,
                    });
                var r = t(3722),
                    a = t(6112),
                    n = t(6538),
                    s = t(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, r);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function m(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: D(u.x), y: D(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function g(e) {
                    return viewEnv.pxToRem(e);
                }
                function D(e) {
                    return viewEnv.remToPx(e);
                }
                function C(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function B() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function h() {
                    return viewEnv.isEventHandled();
                }
                function f() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const b = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
                        {},
                    ),
                    w = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : n.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => l });
                const r = ['args'];
                const a = 2,
                    n = 16,
                    s = 32,
                    i = 64,
                    o = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        a = {},
                                        n = Object.keys(e);
                                    for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(u, r);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? a : s);
                        },
                        minimize() {
                            o(i);
                        },
                        move(e) {
                            o(n, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, u, t) => {
                'use strict';
                function r() {}
                t.d(u, { ZT: () => r, jv: () => n, yR: () => a });
                function a(e) {
                    return e;
                }
                function n() {
                    return !1;
                }
                console.log;
            },
            7902: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => r });
                const r = (e = 1) => {
                    const u = new Error().stack;
                    let t,
                        r = R.invalid('resId');
                    return (
                        u &&
                            ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (r = window.subViews[t].id)),
                        { caller: t, stack: u, resId: r }
                    );
                };
            },
            6536: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var r = t(6179);
                const a = (e) => {
                    const u = (0, r.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
            },
            3815: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => n });
                var r = t(6179);
                const a = [];
                function n(e) {
                    const u = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, u.current)(...e), a)
                    );
                }
            },
            8526: (e, u, t) => {
                'use strict';
                t.d(u, { I9: () => o, gd: () => i });
                var r = t(3138),
                    a = t(5521),
                    n = (t(9916), t(6179));
                const s = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function i(e = a.n.NONE, u = s, t = !1, i = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== a.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(a) {
                            if (a.keyCode === e) {
                                if (!i && r.O.view.isEventHandled()) return;
                                r.O.view.setEventHandled(), u(a), t && a.stopPropagation();
                            }
                        }
                    }, [u, e, t, i]);
                }
                function o(e) {
                    i(a.n.ESCAPE, e);
                }
            },
            5415: (e, u, t) => {
                'use strict';
                t.d(u, { Aq: () => o, GS: () => l, cJ: () => s, fd: () => i });
                var r = t(6179),
                    a = t(7739),
                    n = t(1043);
                let s, i, o;
                !(function (e) {
                    (e[(e.ExtraSmall = n.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = n.j.small.width)] = 'Small'),
                        (e[(e.Medium = n.j.medium.width)] = 'Medium'),
                        (e[(e.Large = n.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = n.j.extraLarge.width)] = 'ExtraLarge');
                })(s || (s = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = n.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = n.j.small.width)] = 'Small'),
                            (e[(e.Medium = n.j.medium.width)] = 'Medium'),
                            (e[(e.Large = n.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = n.j.extraLarge.width)] = 'ExtraLarge');
                    })(i || (i = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = n.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = n.j.small.height)] = 'Small'),
                            (e[(e.Medium = n.j.medium.height)] = 'Medium'),
                            (e[(e.Large = n.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = n.j.extraLarge.height)] = 'ExtraLarge');
                    })(o || (o = {}));
                const l = () => {
                    const e = (0, r.useContext)(a.YN),
                        u = e.width,
                        t = e.height,
                        n = ((e) => {
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
                        l = ((e) => {
                            switch (!0) {
                                case e.extraLargeWidth:
                                    return i.ExtraLarge;
                                case e.largeWidth:
                                    return i.Large;
                                case e.mediumWidth:
                                    return i.Medium;
                                case e.smallWidth:
                                    return i.Small;
                                case e.extraSmallWidth:
                                    return i.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), i.ExtraSmall;
                            }
                        })(e),
                        c = ((e) => {
                            switch (!0) {
                                case e.extraLargeHeight:
                                    return o.ExtraLarge;
                                case e.largeHeight:
                                    return o.Large;
                                case e.mediumHeight:
                                    return o.Medium;
                                case e.smallHeight:
                                    return o.Small;
                                case e.extraSmallHeight:
                                    return o.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), o.ExtraSmall;
                            }
                        })(e);
                    return { mediaSize: n, mediaWidth: l, mediaHeight: c, remScreenWidth: u, remScreenHeight: t };
                };
            },
            5521: (e, u, t) => {
                'use strict';
                let r, a;
                t.d(u, { n: () => r }),
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
                    })(r || (r = {})),
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
            9480: (e, u, t) => {
                'use strict';
                t.d(u, {
                    DZ: () => _,
                    G: () => o,
                    U2: () => a,
                    UI: () => i,
                    hX: () => l,
                    q9: () => d,
                    sE: () => c,
                    v: () => E,
                });
                var r = t(8968);
                function a(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const n = a;
                function s(e) {
                    var u;
                    return e && 'value' in e && null != (u = e.constructor) && u.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function i(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, r) => u(null == e ? void 0 : e.value, t, r));
                }
                function o(e, u) {
                    if (Array.isArray(e)) return e.some(u);
                    for (let t = 0; t < e.length; t++) {
                        if (u(n(e, t), t, e)) return !0;
                    }
                    return !1;
                }
                function l(e, u) {
                    if (Array.isArray(e)) return e.filter(u);
                    const t = [];
                    for (let a = 0; a < e.length; a++) {
                        var r;
                        const n = null == (r = e[a]) ? void 0 : r.value;
                        u(n, a, e) && t.push(n);
                    }
                    return t;
                }
                function c(e, u) {
                    for (let t = 0; t < e.length; t++) {
                        const r = s(e[t]);
                        if (u(r, t, e)) return r;
                    }
                }
                function d(e, u) {
                    for (let t = 0; t < e.length; t++) {
                        if (n(e, t) === u) return !0;
                    }
                    return !1;
                }
                function _(e, u, t) {
                    const r = [];
                    for (let a = 0; a < e.length; a++) {
                        const s = n(e, a);
                        u(s, a, e) && r.push(t(s, a, e));
                    }
                    return r;
                }
                function E(e, u) {
                    return _(e, r.C, u);
                }
            },
            8968: (e, u, t) => {
                'use strict';
                function r(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                t.d(u, { C: () => r });
            },
            7727: (e, u, t) => {
                'use strict';
                function r(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                t.d(u, { $: () => a, G: () => r });
                const a = {
                    playHighlight() {
                        r('highlight');
                    },
                    playClick() {
                        r('play');
                    },
                    playYes() {
                        r('yes1');
                    },
                };
            },
            3649: (e, u, t) => {
                'use strict';
                t.d(u, { Uw: () => m, WU: () => n, uF: () => s, v2: () => a });
                var r = t(1281);
                let a;
                function n(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function s(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(a || (a = {}));
                const i = (e) => e.replace(/&nbsp;/g, ' '),
                    o = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    l = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    c = (e, u, t = a.left) => e.split(u).reduce(t === a.left ? o : l, []),
                    d = (() => {
                        const e = new RegExp(
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
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    _ = ['zh_cn', 'zh_sg', 'zh_tw'],
                    E = (e, u = a.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (_.includes(t)) return d(e);
                        if ('ja' === t) {
                            return (0, r.D4)()
                                .parse(e)
                                .map((e) => i(e));
                        }
                        return ((e, u = a.left) => {
                            let t = [];
                            const r =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                n = i(e);
                            return c(n, /( )/, u).forEach((e) => (t = t.concat(c(e, r, a.left)))), t;
                        })(e, u);
                    },
                    m = (e, u, t) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : E(e, u)));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                var r = t(3138);
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
                    addCallback(e, u, t = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const n = r.O.view.addModelObserver(e, t, a);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(n) : (this._views[t] = [n])))
                                : console.error("Can't add callback for model:", e),
                            n
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
                            const r = this._callbacks[t];
                            void 0 !== r && r(e, u);
                        });
                    }
                }
                a.__instance = void 0;
                const n = a;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
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
                'use strict';
                t.d(u, { Sw: () => n.Z, B3: () => o, Z5: () => s.Z5, B0: () => i, ry: () => g, Eu: () => D });
                class r {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let r = e.target;
                                    do {
                                        if (r === u) return;
                                        r = r.parentNode;
                                    } while (r);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return r.__instance || (r.__instance = new r()), r.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            r = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== r)),
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
                const a = r;
                var n = t(1358);
                var s = t(8613);
                let i;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(i || (i = {}));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    E = t(3138);
                const m = ['args'];
                function A(e, u, t, r, a, n, s) {
                    try {
                        var i = e[n](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(r, a);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    g = (function () {
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
                                    return new Promise(function (r, a) {
                                        var n = e.apply(u, t);
                                        function s(e) {
                                            A(n, r, a, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            A(n, r, a, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    D = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    C = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                n = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        a = {},
                                        n = Object.keys(e);
                                    for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(u, m);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, n, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, n));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    B = () => C(i.CLOSE),
                    p = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var h = t(7572);
                const f = a.instance,
                    v = {
                        DataTracker: n.Z,
                        ViewModel: h.Z,
                        ViewEventType: i,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => C(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: B,
                        sendClosePopOverEvent: () => C(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            C(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, r, a = R.invalid('resId'), n) => {
                            const s = E.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                d = o.width,
                                _ = o.height,
                                m = {
                                    x: E.O.view.pxToRem(l) + s.x,
                                    y: E.O.view.pxToRem(c) + s.y,
                                    width: E.O.view.pxToRem(d),
                                    height: E.O.view.pxToRem(_),
                                };
                            C(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: F(m),
                                on: !0,
                                args: n,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => p(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, B);
                        },
                        handleViewEvent: C,
                        onBindingsReady: g,
                        onLayoutReady: D,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const r in u)
                                if (Object.prototype.hasOwnProperty.call(u, r)) {
                                    const a = Object.prototype.toString.call(u[r]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = u[r];
                                        t[r] = [];
                                        for (let u = 0; u < a.length; u++) t[r].push({ value: e(a[u].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = e(u[r]))
                                            : (t[r] = u[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: f,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = v;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => n, Z5: () => r, cy: () => a });
                const r = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    },
                    n = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            190: (e, u, t) => {
                'use strict';
                var r = t(7739),
                    a = t(6179),
                    n = t.n(a),
                    s = t(6483),
                    i = t.n(s),
                    o = t(926),
                    l = t.n(o),
                    c = t(5415);
                const d = ['children', 'className'];
                function _() {
                    return (
                        (_ =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        _.apply(this, arguments)
                    );
                }
                const E = {
                        [c.fd.ExtraSmall]: '',
                        [c.fd.Small]: l().SMALL_WIDTH,
                        [c.fd.Medium]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH}`,
                        [c.fd.Large]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH}`,
                        [c.fd.ExtraLarge]:
                            `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH} ${l().EXTRA_LARGE_WIDTH}`,
                    },
                    m = {
                        [c.Aq.ExtraSmall]: '',
                        [c.Aq.Small]: l().SMALL_HEIGHT,
                        [c.Aq.Medium]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT}`,
                        [c.Aq.Large]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT}`,
                        [c.Aq.ExtraLarge]:
                            `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT} ${l().EXTRA_LARGE_HEIGHT}`,
                    },
                    A = {
                        [c.cJ.ExtraSmall]: '',
                        [c.cJ.Small]: l().SMALL,
                        [c.cJ.Medium]: `${l().SMALL} ${l().MEDIUM}`,
                        [c.cJ.Large]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE}`,
                        [c.cJ.ExtraLarge]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE} ${l().EXTRA_LARGE}`,
                    },
                    F = (e) => {
                        let u = e.children,
                            t = e.className,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, d);
                        const a = (0, c.GS)(),
                            s = a.mediaWidth,
                            o = a.mediaHeight,
                            l = a.mediaSize;
                        return n().createElement('div', _({ className: i()(t, E[s], m[o], A[l]) }, r), u);
                    },
                    g = ['children'];
                const D = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                a = {},
                                n = Object.keys(e);
                            for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, g);
                    return n().createElement(r.ZN, null, n().createElement(F, t, u));
                };
                var C = t(493),
                    B = t.n(C);
                const p = 'BattlePassBuyView_base_d6',
                    h = 'buyState';
                var f = t(3403),
                    v = t(9485),
                    b = t(2893),
                    w = t(2189),
                    y = t(9508);
                let S, k, x;
                !(function (e) {
                    (e[(e.Active = 0)] = 'Active'),
                        (e[(e.Paused = 1)] = 'Paused'),
                        (e[(e.Completed = 2)] = 'Completed'),
                        (e[(e.NotStarted = 3)] = 'NotStarted');
                })(S || (S = {})),
                    (function (e) {
                        (e[(e.BattlePass = 0)] = 'BattlePass'),
                            (e[(e.AnyLevels = 1)] = 'AnyLevels'),
                            (e[(e.ShopOffer = 2)] = 'ShopOffer');
                    })(k || (k = {})),
                    (function (e) {
                        (e.COMMON = 'common'), (e.EXTRA = 'extra'), (e.HOLIDAY = 'holiday');
                    })(x || (x = {}));
                var T = t(3215),
                    P = t(4598),
                    N = t(9480),
                    L = t(9174),
                    O = t(3946);
                const M = (0, T.q)()(
                        ({ observableModel: e }) => {
                            const u = e.primitives(
                                    [
                                        'price',
                                        'prevPrice',
                                        'chapterID',
                                        'isActive',
                                        'compoundPriceDefaultID',
                                        'isPurchaseWithLevels',
                                        'remainingLevelsCount',
                                    ],
                                    'confirm',
                                ),
                                t = L.LO.box(''),
                                r = {
                                    main: e.primitives([
                                        'state',
                                        'shopOfferDiscount',
                                        'isShopOfferAvailable',
                                        'isWalletAvailable',
                                        'isSeasonWithAdditionalBackground',
                                    ]),
                                    confirm: u,
                                    rewards: e.array('rewards'),
                                    packages: e.array('packages.items'),
                                    compoundPrice: e.array('confirm.compoundPrice'),
                                    chaptersWithLogoBg: e.array('chaptersWithLogoBg'),
                                    priceID: t,
                                },
                                a = (0, O.Om)(() => r.rewards.get().topPriorityRewards.items, { equals: P.jv }),
                                n = (0, O.Om)(() => r.rewards.get().prevTopPriorityRewards.items, { equals: P.jv }),
                                s = (0, O.Om)(() => r.rewards.get().nowRewards.items, { equals: P.jv }),
                                i = (0, O.Om)(() => r.rewards.get().futureRewards.items, { equals: P.jv }),
                                o = (0, O.Om)(() => r.packages.get(), { equals: P.jv }),
                                l = (0, O.Om)(() => N.U2(r.packages.get(), 0), { equals: P.jv }),
                                c = (0, O.Om)((e) => N.hX(r.packages.get(), (u) => u.chapterID === e)[0]),
                                d = (0, O.Om)((e) => {
                                    const u = c(e).compoundPrice;
                                    return 0 === u.prices.length
                                        ? []
                                        : N.v(u.prices, (e) => {
                                              const u = N.v(e.price, P.yR),
                                                  t = { isMultiPrice: u.length > 1, isEnough: !0 };
                                              return u.reduce(
                                                  (e, { name: u, value: t, isEnough: r }) => (
                                                      (e[u] = { value: t, isEnough: r }),
                                                      (e.isEnough = e.isEnough && r),
                                                      e
                                                  ),
                                                  t,
                                              );
                                          });
                                }),
                                _ = (0, O.Om)((e, u) => {
                                    var t;
                                    return null == (t = d(e).find((e) => e[u])) ? void 0 : t[u];
                                }),
                                E = (0, O.Om)((e) => {
                                    const u = N.sE(
                                        r.packages.get(),
                                        (u) => u.chapterID === e && u.chapterType === x.EXTRA,
                                    );
                                    return Boolean(u);
                                }),
                                m = (0, O.Om)((e) => N.q9(r.chaptersWithLogoBg.get(), e)),
                                A = (0, O.Om)((e) => {
                                    const u = N.sE(
                                        r.packages.get(),
                                        (u) => u.chapterID === e && u.chapterType === x.HOLIDAY,
                                    );
                                    return Boolean(u);
                                }),
                                F = (0, O.Om)(
                                    () =>
                                        N.UI(r.compoundPrice.get().prices, (e) => {
                                            var u, t;
                                            return Object.assign({}, e, {
                                                currencyType: null == (u = N.U2(e.price, 0)) ? void 0 : u.name,
                                                value: null == (t = N.U2(e.price, 0)) ? void 0 : t.value,
                                            });
                                        }),
                                    { equals: P.jv },
                                ),
                                g = (0, O.Om)(() => r.compoundPrice.get().prices.length > 1),
                                D = (0, O.Om)(() => N.G(r.packages.get(), ({ chapterType: e }) => e === x.EXTRA));
                            return Object.assign({}, r, {
                                computes: {
                                    topPriorityRewards: a,
                                    prevTopPriorityRewards: n,
                                    nowRewards: s,
                                    futureRewards: i,
                                    firstChapter: l,
                                    chapters: o,
                                    chapter: c,
                                    getChapterPrices: d,
                                    findCurrencyByType: _,
                                    isExtra: E,
                                    isHoliday: A,
                                    hasChapterLogoBg: m,
                                    prices: F,
                                    isMulticurrency: g,
                                    hasExtra: D,
                                },
                            });
                        },
                        ({ model: e, externalModel: u }) => ({
                            setPriceID: (0, L.aD)((u) => {
                                e.priceID.set(u);
                            }),
                            back: u.createCallbackNoArgs('onBackClick'),
                            showConfirm: u.createCallbackNoArgs('showConfirm'),
                            choosePackage: u.createCallback((e) => ({ packageID: e.packageID }), 'choosePackage'),
                            shopOffer: u.createCallbackNoArgs('onShopOfferClick'),
                            closeConfirm: u.createCallbackNoArgs('confirm.onCloseClick'),
                            buy: u.createCallback(() => ({ priceID: e.priceID.get() }), 'confirm.onBuyClick'),
                            showRewards: u.createCallbackNoArgs('confirm.onShowRewardsClick'),
                            togglePurchaseWithLevels: u.createCallbackNoArgs('confirm.onChangePurchaseWithLevels'),
                        }),
                    ),
                    I = M[0],
                    H = M[1];
                var W = t(8089),
                    U = t(1856),
                    G = t(8526),
                    $ = t(4420);
                const z = 'BattlePassBuyViewContent_base_85',
                    V = 'BattlePassBuyViewContent_background_15',
                    j = 'BattlePassBuyViewContent_background__visible_66',
                    q = 'BattlePassBuyViewContent_additionalBackground_1d',
                    X = 'BattlePassBuyViewContent_blackout_3d',
                    Y = 'BattlePassBuyViewContent_back_d2',
                    Z = 'BattlePassBuyViewContent_header_50',
                    K = 'BattlePassBuyViewContent_title_8a',
                    Q = 'BattlePassBuyViewContent_subtitle_72';
                var J = t(7727);
                const ee = {
                    base: 'Illustration_base_d3',
                    imgWrapper: 'Illustration_imgWrapper_61',
                    img: 'Illustration_img_44',
                    base__hover: 'Illustration_base__hover_70',
                    base__disabled: 'Illustration_base__disabled_a8',
                    vignette: 'Illustration_vignette_e0',
                    asset: 'Illustration_asset_e2',
                    highlight: 'Illustration_highlight_36',
                    highlight__default: 'Illustration_highlight__default_2b',
                    highlight__active: 'Illustration_highlight__active_f1',
                    highlight__shine: 'Illustration_highlight__shine_b0',
                };
                let ue;
                !(function (e) {
                    (e.Hover = 'hover'), (e.Disabled = 'disabled');
                })(ue || (ue = {}));
                const te = ({ className: e, isHighlight: u, isActive: t, chapterID: r, state: a }) =>
                        n().createElement(
                            'div',
                            { className: i()(ee.base, a && ee[`base__${a}`], e) },
                            n().createElement(
                                'div',
                                { className: ee.imgWrapper },
                                n().createElement(
                                    'div',
                                    {
                                        className: ee.img,
                                        style: {
                                            backgroundImage: `url('${(0, v.wD)(R.images.gui.maps.icons.battlePass.buy.illustrations.commander, r)}')`,
                                        },
                                    },
                                    n().createElement('div', { className: ee.vignette }),
                                ),
                            ),
                            n().createElement('div', { className: ee.asset }),
                            n().createElement('div', { className: i()(ee.highlight, ee.highlight__default) }),
                            u &&
                                n().createElement('div', {
                                    className: i()(ee.highlight, t ? ee.highlight__active : ee.highlight__shine),
                                }),
                        ),
                    re = 'State_base_b0',
                    ae = 'State_bg_49',
                    ne = 'State_content_d1',
                    se = 'State_ico_5b',
                    ie = ({ className: e }) =>
                        n().createElement(
                            'div',
                            { className: i()(re, e) },
                            n().createElement('div', { className: ae }),
                            n().createElement(
                                'div',
                                { className: ne },
                                n().createElement('div', { className: se }),
                                R.strings.battle_pass.battlePassBuyView.card.purchased(),
                            ),
                        ),
                    oe = {
                        base: 'BattlePassBuyExtraCard_base_cf',
                        base__small: 'BattlePassBuyExtraCard_base__small_d2',
                        base__disabled: 'BattlePassBuyExtraCard_base__disabled_a5',
                        timer: 'BattlePassBuyExtraCard_timer_8f',
                        content: 'BattlePassBuyExtraCard_content_1a',
                        title: 'BattlePassBuyExtraCard_title_6c',
                        price: 'BattlePassBuyExtraCard_price_8a',
                        illustration: 'BattlePassBuyExtraCard_illustration_6b',
                        state: 'BattlePassBuyExtraCard_state_9a',
                        chapterActiveText: 'BattlePassBuyExtraCard_chapterActiveText_70',
                        fadeOut: 'BattlePassBuyExtraCard_fadeOut_bb',
                        fadeIn: 'BattlePassBuyExtraCard_fadeIn_c8',
                        fadeInWithScale: 'BattlePassBuyExtraCard_fadeInWithScale_df',
                        slideUp: 'BattlePassBuyExtraCard_slideUp_da',
                        scale: 'BattlePassBuyExtraCard_scale_5a',
                        rotate: 'BattlePassBuyExtraCard_rotate_06',
                    };
                var le = t(7044);
                const ce = () => {},
                    de = (e = 0, u, t = 0, r = ce) => {
                        const n = (0, a.useState)(e),
                            s = n[0],
                            i = n[1];
                        return (
                            (0, a.useEffect)(() => {
                                if (e > 0) {
                                    i(e);
                                    const a = Date.now(),
                                        n = u || (e > 2 * le.yR ? le.yR : 1),
                                        s = setInterval(() => {
                                            const u = e - Math.floor((Date.now() - a) / le.s_);
                                            null !== t && u <= t ? (i(t), r && r(), clearInterval(s)) : i(u);
                                        }, n * le.s_);
                                    return () => {
                                        clearInterval(s);
                                    };
                                }
                            }, [e, u, t, r]),
                            s
                        );
                    };
                t(3138);
                t(6536);
                var _e = t(9916);
                _e.Sw.instance;
                let Ee;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(Ee || (Ee = {}));
                _e.Sw.instance;
                const me = de;
                var Ae = t(3649);
                const Fe = 'CardTimer_base_84',
                    ge = 'CardTimer_light_ae',
                    De = 'CardTimer_icon_e1',
                    Ce = 'CardTimer_value_eb',
                    Be = R.strings.battle_pass.battlePassBuyView.card.timer,
                    pe = ({ expireTime: e }) => {
                        const u = me(e),
                            t =
                                u <= 60
                                    ? Be.lessMinute()
                                    : (0, Ae.uF)(Be.time(), { time: (0, le.wB)((0, le.f8)(u), !1) });
                        return n().createElement(
                            'div',
                            { className: Fe },
                            n().createElement('div', { className: ge }),
                            n().createElement('div', { className: De }),
                            n().createElement('div', { className: Ce }, t),
                        );
                    },
                    he = 'CurrentLevel_base_5e',
                    fe = 'CurrentLevel_base__isHovered_d1',
                    ve = 'CurrentLevel_level_fb',
                    be = 'CurrentLevel_text_7b',
                    we = R.strings.battle_pass.battlePassBuyView.card,
                    ye = ({ isHovered: e, currentLevel: u }) => {
                        const t = e ? we.currentLevelHovered.text() : we.currentLevel.text(),
                            r = i()(he, e && fe);
                        return n().createElement(
                            'div',
                            { className: r },
                            n().createElement('div', { className: be }, t),
                            n().createElement('div', { className: ve }, u),
                        );
                    },
                    Se = 'Description_base_af',
                    Re = 'Description_base__disabled_35',
                    ke = 'Description_text_ee',
                    xe = 'Description_text__hidden_51',
                    Te = R.strings.battle_pass.battlePassBuyView.card.descr,
                    Pe = ({ currentLevel: e, isLevelShow: u, isHovered: t, isBought: r }) => {
                        const a = r ? Te.bought() : Te.chapter();
                        return n().createElement(
                            'div',
                            { className: i()(Se, r && Re) },
                            u && n().createElement(ye, { currentLevel: e, isHovered: t }),
                            n().createElement('div', { className: i()(ke, !t && xe) }, a),
                        );
                    },
                    Ne = (e, u) => {
                        let t;
                        const r = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(r);
                        };
                    },
                    Le = 'Logo_base_8b',
                    Oe = 'Logo_light_62',
                    Me = 'Logo_light__hovered_29',
                    Ie = 'Logo_lightAppear_e4',
                    He = 'Logo_logoIcon_60',
                    We = 'Logo_base__notAvailable_23',
                    Ue = (e, u) => {
                        const t = R.images.gui.maps.icons.battlePass.buy.logo,
                            r = u <= c.cJ.Small ? 'small' : '';
                        return (0, v.wD)(t, e, r);
                    },
                    Ge = ({ chapterID: e, animationOrder: u, isAvailable: t, isHovered: r, isActiveChapter: s }) => {
                        const o = 800 + 100 * u;
                        (0, a.useEffect)(() => {
                            if (t) return Ne(() => (0, J.G)('bp_buy_pass_02'), o);
                        }, [t, o]);
                        const l = (0, c.GS)().mediaSize,
                            d = { animationDelay: `${o}ms` };
                        return n().createElement(
                            'div',
                            { className: i()(Le, !t && We) },
                            s &&
                                n().createElement(
                                    'div',
                                    { style: d, className: Ie },
                                    n().createElement('div', { className: i()(Oe, r && Me) }),
                                ),
                            n().createElement('div', { className: He, style: { backgroundImage: `url(${Ue(e, l)})` } }),
                        );
                    };
                var $e = t(2372);
                const ze = {
                    base: 'Currency_base_57',
                    icon: 'Currency_icon_c5',
                    base__small: 'Currency_base__small_af',
                    base__big: 'Currency_base__big_bc',
                    base__large: 'Currency_base__large_65',
                    base__extraLarge: 'Currency_base__extraLarge_4d',
                    'icon__credits-small': 'Currency_icon__credits-small_9b',
                    'icon__credits-big': 'Currency_icon__credits-big_96',
                    'icon__credits-large': 'Currency_icon__credits-large_ac',
                    'icon__credits-extraLarge': 'Currency_icon__credits-extraLarge_16',
                    'icon__gold-small': 'Currency_icon__gold-small_86',
                    'icon__gold-big': 'Currency_icon__gold-big_15',
                    'icon__gold-large': 'Currency_icon__gold-large_36',
                    'icon__gold-extraLarge': 'Currency_icon__gold-extraLarge_a0',
                    'icon__crystal-small': 'Currency_icon__crystal-small_27',
                    'icon__crystal-big': 'Currency_icon__crystal-big_cd',
                    'icon__crystal-large': 'Currency_icon__crystal-large_d3',
                    'icon__crystal-extraLarge': 'Currency_icon__crystal-extraLarge_09',
                    'icon__xp-small': 'Currency_icon__xp-small_a7',
                    'icon__xp-big': 'Currency_icon__xp-big_97',
                    'icon__xp-large': 'Currency_icon__xp-large_6b',
                    'icon__xp-extraLarge': 'Currency_icon__xp-extraLarge_67',
                    'icon__freeXP-small': 'Currency_icon__freeXP-small_ca',
                    'icon__freeXP-big': 'Currency_icon__freeXP-big_21',
                    'icon__freeXP-large': 'Currency_icon__freeXP-large_c8',
                    'icon__freeXP-extraLarge': 'Currency_icon__freeXP-extraLarge_58',
                    'icon__eliteXP-small': 'Currency_icon__eliteXP-small_45',
                    'icon__eliteXP-big': 'Currency_icon__eliteXP-big_c0',
                    'icon__eliteXP-large': 'Currency_icon__eliteXP-large_1b',
                    'icon__eliteXP-extraLarge': 'Currency_icon__eliteXP-extraLarge_9b',
                    'icon__equipCoin-small': 'Currency_icon__equipCoin-small_32',
                    'icon__equipCoin-big': 'Currency_icon__equipCoin-big_79',
                    'icon__equipCoin-large': 'Currency_icon__equipCoin-large_2c',
                    'icon__equipCoin-extraLarge': 'Currency_icon__equipCoin-extraLarge_8a',
                    value: 'Currency_value_e1',
                    value__freeXP: 'Currency_value__freeXP_cb',
                    value__credits: 'Currency_value__credits_76',
                    value__gold: 'Currency_value__gold_dd',
                    value__xp: 'Currency_value__xp_b0',
                    value__crystal: 'Currency_value__crystal_19',
                    value__equipCoin: 'Currency_value__equipCoin_d0',
                    value__eliteXP: 'Currency_value__eliteXP_62',
                    value__notEnough: 'Currency_value__notEnough_56',
                    stock: 'Currency_stock_87',
                    stock__indent: 'Currency_stock__indent_a1',
                    stock__interactive: 'Currency_stock__interactive_93',
                    stockBackground: 'Currency_stockBackground_82',
                };
                let Ve, je, qe;
                !(function (e) {
                    (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                })(Ve || (Ve = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin');
                    })(je || (je = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(qe || (qe = {}));
                const Xe = (0, a.memo)(
                        ({
                            isDiscount: e,
                            isInteractiveDiscount: u,
                            size: t,
                            type: r,
                            value: a,
                            discountValue: s,
                            showPlus: o,
                            isEnough: l = !0,
                            stockBackgroundName: c = qe.Red,
                            className: d,
                            classNames: _,
                        }) =>
                            n().createElement(
                                'span',
                                { className: i()(ze.base, ze[`base__${t}`], d) },
                                n().createElement(
                                    'span',
                                    {
                                        className: i()(
                                            ze.value,
                                            ze[`value__${r}`],
                                            !l && ze.value__notEnough,
                                            null == _ ? void 0 : _.value,
                                        ),
                                    },
                                    o && a > 0 && '+',
                                    n().createElement($e.A, { value: a, format: r === je.gold ? 'gold' : 'integral' }),
                                ),
                                n().createElement('span', {
                                    className: i()(ze.icon, ze[`icon__${r}-${t}`], null == _ ? void 0 : _.icon),
                                }),
                                e &&
                                    n().createElement(
                                        'span',
                                        {
                                            className: i()(
                                                ze.stock,
                                                s && ze.stock__indent,
                                                u && ze.stock__interactive,
                                                null == _ ? void 0 : _.stock,
                                            ),
                                        },
                                        n().createElement('span', {
                                            className: ze.stockBackground,
                                            style: { backgroundImage: `url(R.images.gui.maps.icons.library.${c})` },
                                        }),
                                        Boolean(s) && s,
                                    ),
                            ),
                    ),
                    Ye = 'Price_base_d1',
                    Ze = 'Price_divider_2d',
                    Ke = { left: je.gold, right: je.freeXP },
                    Qe = R.strings.battle_pass.battlePassBuyView.card,
                    Je = (0, f.Pi)(({ chapterID: e, className: u }) => {
                        const t = H().model.computes,
                            r = t.findCurrencyByType(e, Ke.left),
                            a = t.findCurrencyByType(e, Ke.right);
                        return r || a
                            ? n().createElement(
                                  'div',
                                  { className: i()(Ye, u) },
                                  r && n().createElement(Xe, { type: Ke.left, size: Ve.small, value: r.value }),
                                  r && a && n().createElement('div', { className: Ze }, Qe.priceDivider()),
                                  a && n().createElement(Xe, { type: Ke.right, size: Ve.small, value: a.value }),
                              )
                            : null;
                    }),
                    eu = R.strings.battle_pass.battlePassBuyView.card,
                    uu = (0, f.Pi)(
                        ({
                            chapterID: e = 1,
                            animationOrder: u = 0,
                            onMouseEnter: t,
                            onMouseLeave: r,
                            isShopOfferAvailable: s = !1,
                            expireTime: o = 0,
                        }) => {
                            const l = H(),
                                c = l.model.computes,
                                d = l.controls.choosePackage,
                                _ = c.chapter(e),
                                E = _.isBought,
                                m = _.chapterState,
                                A = _.currentLevel,
                                F = _.packageID,
                                g = c.isExtra(e),
                                D = (0, a.useState)(!1),
                                C = D[0],
                                B = D[1],
                                p = m === S.Active,
                                h = m === S.Paused,
                                f = s && !g;
                            return n().createElement(
                                'div',
                                {
                                    className: i()(
                                        oe.base,
                                        f && oe.base__small,
                                        p && oe.base__activeChapter,
                                        E && oe.base__disabled,
                                    ),
                                    onClick: () => {
                                        J.$.playClick(), E || (F && d({ packageID: F }));
                                    },
                                    onMouseEnter: () => {
                                        (0, J.G)('bp_highlight'), t && t(), E || B(!0);
                                    },
                                    onMouseLeave: () => {
                                        r && r(), B(!1);
                                    },
                                },
                                n().createElement(te, {
                                    chapterID: e,
                                    isHighlight: p,
                                    isActive: E,
                                    state: E ? ue.Disabled : C ? ue.Hover : void 0,
                                    className: oe.illustration,
                                }),
                                g &&
                                    o > 0 &&
                                    n().createElement(
                                        'div',
                                        { className: oe.timer },
                                        n().createElement(pe, { expireTime: o }),
                                    ),
                                n().createElement(
                                    'div',
                                    { className: oe.content },
                                    n().createElement(Ge, {
                                        chapterID: e,
                                        animationOrder: u,
                                        isAvailable: !E,
                                        isHovered: C,
                                        isActiveChapter: p,
                                    }),
                                    n().createElement('div', { className: oe.title }, (0, b.pC)(e)),
                                    n().createElement(Pe, {
                                        isHovered: C,
                                        currentLevel: A,
                                        isLevelShow: p || h,
                                        isBought: E,
                                    }),
                                ),
                                E
                                    ? n().createElement(ie, { className: oe.state })
                                    : n().createElement(Je, { chapterID: e, className: oe.price }),
                                p &&
                                    n().createElement(
                                        'div',
                                        { className: oe.chapterActiveText },
                                        eu.activeChapter.text(),
                                    ),
                            );
                        },
                    );
                var tu = t(3815),
                    ru = t(7030);
                const au = 'ShopOfferCard_base_3a',
                    nu = 'ShopOfferCard_background_44',
                    su = 'ShopOfferCard_shopOfferBorder_25',
                    iu = 'ShopOfferCard_illustrationWrapper_94',
                    ou = 'ShopOfferCard_illustration_0c',
                    lu = 'ShopOfferCard_backgroundAsset_a4',
                    cu = 'ShopOfferCard_backgroundColor_45',
                    du = 'ShopOfferCard_shopOfferDiscount_a1',
                    _u = 'ShopOfferCard_content_ce',
                    Eu = 'ShopOfferCard_title_4d',
                    mu = 'ShopOfferCard_base__highlighted_42',
                    Au = 'ShopOfferCard_description_1c',
                    Fu = 'ShopOfferCard_warningOverlay_90',
                    gu = R.strings.battle_pass.battlePassBuyView.card,
                    Du = (0, f.Pi)(({ isWarningHighlighted: e = !1 }) => {
                        const u = H().controls,
                            t = (0, tu.z)(() => {
                                J.$.playClick(), u.shopOffer();
                            }),
                            r = (0, tu.z)(() => {
                                (0, J.G)('bp_highlight');
                            }),
                            a = (0, ru.useTransition)(e, {
                                from: { opacity: 0 },
                                enter: { opacity: 1 },
                                leave: { opacity: 0 },
                                config: { duration: 200 },
                            });
                        return n().createElement(
                            'div',
                            { className: i()(au, e && mu), onClick: t, onMouseEnter: r },
                            n().createElement(
                                'div',
                                { className: nu },
                                n().createElement(
                                    'div',
                                    { className: iu },
                                    n().createElement('div', { className: ou }),
                                ),
                                n().createElement('div', { className: su }),
                                n().createElement('div', { className: lu }),
                                n().createElement('div', { className: cu }),
                                n().createElement('div', { className: du }),
                                a((e, u) => u && n().createElement(ru.animated.div, { style: e, className: Fu })),
                            ),
                            n().createElement(
                                'div',
                                { className: _u },
                                n().createElement('div', { className: Eu }, gu.title.shopOffer()),
                                n().createElement(
                                    'div',
                                    { className: Au },
                                    e ? gu.shopOfferWaning() : gu.descr.shopOffer(),
                                ),
                            ),
                        );
                    }),
                    Cu = 'CardAppearTransition_base_2e',
                    Bu = ({ animationOrder: e = 0, children: u }) => {
                        const t = 600 + 100 * e;
                        (0, a.useEffect)(() => Ne(() => (0, J.G)('bp_buy_pass_01'), t), [t]);
                        const r = (0, a.useMemo)(() => ({ animationDelay: `${t}ms` }), [t]);
                        return n().createElement('div', { style: r, className: Cu }, u);
                    },
                    pu = 'ExtraContent_base_4d',
                    hu = 'ExtraContent_cardsWrapper_31',
                    fu = 'ExtraContent_cards_b2',
                    vu = 'ExtraContent_card__isShopOfferAvailable_25',
                    bu = 'ExtraContent_card_4c',
                    wu = 'ExtraContent_card__extra_fe',
                    yu = (0, f.Pi)(() => {
                        const e = H().model,
                            u = e.main.isShopOfferAvailable.get(),
                            t = e.computes.chapters(),
                            r = (0, a.useState)(!1),
                            s = r[0],
                            o = r[1],
                            l = (0, a.useCallback)(() => {
                                o(!0);
                            }, []),
                            c = (0, a.useCallback)(() => {
                                o(!1);
                            }, []);
                        return n().createElement(
                            'div',
                            { className: pu },
                            n().createElement(
                                'div',
                                { className: hu },
                                u &&
                                    n().createElement(
                                        'div',
                                        { className: i()(bu, vu) },
                                        n().createElement(Bu, null, n().createElement(Du, { isWarningHighlighted: s })),
                                    ),
                                n().createElement(
                                    'div',
                                    { className: fu },
                                    N.DZ(
                                        t,
                                        (e) => e.chapterType !== x.EXTRA,
                                        (e, t) =>
                                            n().createElement(
                                                'div',
                                                { key: e.packageID, className: bu },
                                                n().createElement(
                                                    Bu,
                                                    { animationOrder: t + 1 },
                                                    n().createElement(uu, {
                                                        chapterID: e.chapterID,
                                                        isShopOfferAvailable: u,
                                                        animationOrder: t + 1,
                                                        onMouseEnter: l,
                                                        onMouseLeave: c,
                                                    }),
                                                ),
                                            ),
                                    ),
                                ),
                            ),
                            N.DZ(
                                t,
                                (e) => e.chapterType === x.EXTRA,
                                (e) =>
                                    n().createElement(
                                        'div',
                                        { key: e.packageID, className: i()(bu, wu) },
                                        n().createElement(
                                            Bu,
                                            { animationOrder: t.length + 1 },
                                            n().createElement(uu, {
                                                chapterID: e.chapterID,
                                                isShopOfferAvailable: !1,
                                                expireTime: e.expireTime,
                                                animationOrder: t.length + 1,
                                            }),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    Su = R.strings.battle_pass.battlePassBuyView,
                    Ru = (0, f.Pi)(({ onClose: e }) => {
                        const u = (0, a.useState)(!1),
                            t = u[0],
                            r = u[1],
                            s = H().model,
                            o = s.computes.firstChapter(),
                            l = s.main.isSeasonWithAdditionalBackground.get() && s.computes.hasExtra();
                        return (
                            (0, G.I9)(e),
                            (0, a.useEffect)(() => {
                                (0, U.v)(() => {
                                    r(!0);
                                });
                            }, []),
                            n().createElement(
                                'div',
                                { className: z },
                                n().createElement(
                                    'div',
                                    { className: i()(V, t && j) },
                                    n().createElement($.N, { key: null == o ? void 0 : o.packageID, isCurrent: !0 }),
                                    l && n().createElement('div', { className: q }),
                                    n().createElement('div', { className: X }),
                                ),
                                n().createElement(
                                    'div',
                                    { className: Y },
                                    n().createElement(W.A, {
                                        caption: R.strings.menu.viewHeader.backBtn.label(),
                                        onClick: e,
                                    }),
                                ),
                                n().createElement(
                                    'div',
                                    { className: Z },
                                    n().createElement('div', { className: K }, Su.title()),
                                    n().createElement('div', { className: Q }, Su.descr()),
                                ),
                                n().createElement(yu, null),
                            )
                        );
                    });
                let ku, xu, Tu, Pu;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(ku || (ku = {})),
                    (function (e) {
                        (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(xu || (xu = {})),
                    (function (e) {
                        (e.primary = 'primary'), (e.main = 'main');
                    })(Tu || (Tu = {})),
                    (function (e) {
                        (e.Center = 'center'), (e.Bottom = 'bottom');
                    })(Pu || (Pu = {}));
                const Nu = {
                        base: 'Checkbox_base_36',
                        base__disabled: 'Checkbox_base__disabled_08',
                        base__center: 'Checkbox_base__center_52',
                        base__bottom: 'Checkbox_base__bottom_28',
                        input: 'Checkbox_input_37',
                        base__mouseDown: 'Checkbox_base__mouseDown_45',
                        base__small: 'Checkbox_base__small_18',
                        base__medium: 'Checkbox_base__medium_12',
                        base__large: 'Checkbox_base__large_f7',
                        base__extraLarge: 'Checkbox_base__extraLarge_c9',
                        alertOverlay: 'Checkbox_alertOverlay_52',
                        base__alert: 'Checkbox_base__alert_b7',
                        blink: 'Checkbox_blink_5e',
                        base__checked: 'Checkbox_base__checked_a2',
                        inputHoverOverlay: 'Checkbox_inputHoverOverlay_36',
                        highlight: 'Checkbox_highlight_b8',
                        base__main: 'Checkbox_base__main_3a',
                        base__primary: 'Checkbox_base__primary_ab',
                        checkmark: 'Checkbox_checkmark_60',
                        fadeIn: 'Checkbox_fadeIn_1a',
                        label: 'Checkbox_label_bc',
                        labelContent: 'Checkbox_labelContent_64',
                    },
                    Lu = [
                        'id',
                        'isChecked',
                        'isDisabled',
                        'isAlert',
                        'size',
                        'type',
                        'soundHover',
                        'soundClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseUp',
                        'onMouseDown',
                        'onClick',
                        'onChange',
                        'onFocus',
                        'onBlur',
                        'text',
                        'contentStyles',
                        'children',
                        'alignment',
                    ];
                function Ou() {
                    return (
                        (Ou =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Ou.apply(this, arguments)
                    );
                }
                const Mu = (e) => {
                    let u = e.id,
                        t = e.isChecked,
                        r = void 0 !== t && t,
                        s = e.isDisabled,
                        o = void 0 !== s && s,
                        l = e.isAlert,
                        c = void 0 !== l && l,
                        d = e.size,
                        _ = void 0 === d ? xu.medium : d,
                        E = e.type,
                        m = void 0 === E ? Tu.primary : E,
                        A = e.soundHover,
                        F = void 0 === A ? 'highlight' : A,
                        g = e.soundClick,
                        D = void 0 === g ? 'play' : g,
                        C = e.onMouseEnter,
                        B = e.onMouseLeave,
                        p = e.onMouseUp,
                        h = e.onMouseDown,
                        f = e.onClick,
                        v = e.onChange,
                        b = e.onFocus,
                        w = e.onBlur,
                        y = e.text,
                        S = e.contentStyles,
                        R = e.children,
                        k = e.alignment,
                        x = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                a = {},
                                n = Object.keys(e);
                            for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, Lu);
                    const T = (0, a.useState)(!1),
                        P = T[0],
                        N = T[1],
                        L = (0, a.useState)(!1),
                        O = (L[0], L[1]),
                        M = (0, a.useCallback)(
                            (e) => {
                                o || (v && v(), f && f(e));
                            },
                            [o, v, f],
                        ),
                        I = (0, a.useCallback)(
                            (e) => {
                                const u = e.button === ku.LEFT;
                                o || (u && N(!0), u && h && h(e), D && (0, J.G)(D));
                            },
                            [o, h, D],
                        ),
                        H = (0, a.useCallback)(
                            (e) => {
                                o || (N(!1), p && p(e));
                            },
                            [o, p],
                        ),
                        W = (0, a.useCallback)(
                            (e) => {
                                o || (C && C(e), F && (0, J.G)(F));
                            },
                            [o, C, F],
                        ),
                        U = (0, a.useCallback)(
                            (e) => {
                                o || (N(!1), B && B(e));
                            },
                            [o, B],
                        ),
                        G = (0, a.useCallback)(
                            (e) => {
                                o || (O(!0), b && b(e));
                            },
                            [o, b],
                        ),
                        $ = (0, a.useCallback)(
                            (e) => {
                                o || (O(!1), w && w(e));
                            },
                            [o, w],
                        ),
                        z = n().createElement(
                            'div',
                            { className: Nu.label },
                            n().createElement(
                                'div',
                                { className: i()(Nu.labelContent, 's-labelContent'), style: S },
                                y || R,
                            ),
                        );
                    return n().createElement(
                        'div',
                        Ou(
                            {
                                id: u,
                                className: i()(Nu.base, Nu[`base__${_}`], Nu[`base__${m}`], {
                                    [Nu.base__checked]: r,
                                    [Nu.base__disabled]: o,
                                    [Nu.base__mouseDown]: P,
                                    [Nu.base__alert]: c,
                                    [Nu.base__center]: k === Pu.Center,
                                    [Nu.base__bottom]: k === Pu.Bottom,
                                }),
                                onClick: M,
                                onMouseEnter: W,
                                onMouseLeave: U,
                                onMouseDown: I,
                                onMouseUp: H,
                                onFocus: G,
                                onBlur: $,
                            },
                            x,
                        ),
                        n().createElement(
                            'div',
                            { className: Nu.input },
                            n().createElement('div', { className: Nu.alertOverlay }),
                            n().createElement('div', { className: Nu.inputHoverOverlay }),
                            n().createElement('div', { className: Nu.highlight }),
                        ),
                        n().createElement('div', { className: Nu.checkmark }),
                        ((y || R) && z) || null,
                    );
                };
                var Iu = t(9766),
                    Hu = t(5521);
                var Wu = t(3942),
                    Uu = t(3457);
                let Gu;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium');
                })(Gu || (Gu = {}));
                const $u = {
                        base: 'RadioButton_base_d9',
                        base__disabled: 'RadioButton_base__disabled_84',
                        input: 'RadioButton_input_24',
                        base__small: 'RadioButton_base__small_71',
                        base__medium: 'RadioButton_base__medium_d8',
                        blank: 'RadioButton_blank_b5',
                        blankHover: 'RadioButton_blankHover_5e',
                        blankMousedown: 'RadioButton_blankMousedown_0e',
                        check: 'RadioButton_check_f2',
                        checkHover: 'RadioButton_checkHover_c6',
                        checkMousedown: 'RadioButton_checkMousedown_a7',
                        transition: 'RadioButton_transition_b3',
                        base__blank: 'RadioButton_base__blank_46',
                        base__blankHover: 'RadioButton_base__blankHover_9a',
                        base__blankMousedown: 'RadioButton_base__blankMousedown_cd',
                        base__check: 'RadioButton_base__check_fe',
                        base__checkHover: 'RadioButton_base__checkHover_2f',
                        base__checkMousedown: 'RadioButton_base__checkMousedown_83',
                        label: 'RadioButton_label_7f',
                    },
                    zu = [
                        'children',
                        'labelRenderer',
                        'value',
                        'currentValue',
                        'autofocus',
                        'disabled',
                        'size',
                        'label',
                        'soundHover',
                        'soundClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseUp',
                        'onMouseDown',
                        'onClick',
                        'onChange',
                        'onFocus',
                        'onBlur',
                    ];
                function Vu() {
                    return (
                        (Vu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Vu.apply(this, arguments)
                    );
                }
                const ju = (0, a.memo)((e) => {
                        let u = e.children,
                            t = e.labelRenderer,
                            r = e.value,
                            s = e.currentValue,
                            o = e.autofocus,
                            l = void 0 !== o && o,
                            c = e.disabled,
                            d = void 0 !== c && c,
                            _ = e.size,
                            E = void 0 === _ ? Gu.Medium : _,
                            m = e.label,
                            A = e.soundHover,
                            F = void 0 === A ? 'highlight' : A,
                            g = e.soundClick,
                            D = void 0 === g ? 'play' : g,
                            C = e.onMouseEnter,
                            B = e.onMouseLeave,
                            p = e.onMouseUp,
                            h = e.onMouseDown,
                            f = e.onClick,
                            v = e.onChange,
                            b = e.onFocus,
                            w = e.onBlur,
                            y = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, zu);
                        const S = r === s,
                            R = (0, a.useState)(!1),
                            k = R[0],
                            x = R[1],
                            T = (0, a.useState)(!1),
                            P = T[0],
                            N = T[1],
                            L = (0, a.useState)(l),
                            O = L[0],
                            M = L[1],
                            I = (0, a.useRef)(null),
                            H = (0, a.useCallback)(() => {
                                !d && I.current && (I.current.focus(), M(!0));
                            }, [d]),
                            W = (0, a.useCallback)(
                                (e) => {
                                    O && null !== I.current && !I.current.contains(e.target) && M(!1);
                                },
                                [O],
                            );
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', W),
                                () => {
                                    document.removeEventListener('mousedown', W);
                                }
                            ),
                            [W],
                        ),
                            (0, a.useEffect)(() => {
                                M(l);
                            }, [l]);
                        const G = (0, a.useCallback)(
                                (e) => {
                                    d || (v && v(r), f && f(r, e));
                                },
                                [d, v, f, r],
                            ),
                            $ = (0, a.useCallback)(
                                (e) => {
                                    if (!d) {
                                        const u = e.button === ku.LEFT;
                                        u && x(!0), u && h && h(r, e), D && (0, J.G)(D), l && H();
                                    }
                                },
                                [l, d, h, H, D, r],
                            ),
                            z = (0, a.useCallback)(
                                (e) => {
                                    d || (x(!1), p && p(r, e));
                                },
                                [d, p, r],
                            ),
                            V = (0, a.useCallback)(
                                (e) => {
                                    d || (C && C(r, e), F && (0, J.G)(F), N(!0));
                                },
                                [d, C, F, r],
                            ),
                            j = (0, a.useCallback)(
                                (e) => {
                                    d || (x(!1), N(!1), B && B(r, e));
                                },
                                [d, B, r],
                            ),
                            q = (0, a.useCallback)(
                                (e) => {
                                    d || (M(!0), b && b(r, e));
                                },
                                [d, b, r],
                            ),
                            X = (0, a.useCallback)(
                                (e) => {
                                    d || (M(!1), w && w(r, e));
                                },
                                [d, w, r],
                            ),
                            Y = i()($u.base, $u[`base__${E}`], {
                                [$u.base__blank]: !S && !P,
                                [$u.base__blankHover]: !S && P && !k,
                                [$u.base__blankMousedown]: !S && P && k,
                                [$u.base__check]: S && !P,
                                [$u.base__checkHover]: S && P && !k,
                                [$u.base__checkMousedown]: S && P && k,
                                [$u.base__focused]: O,
                                [$u.base__disabled]: d,
                            }),
                            Z = (0, a.useMemo)(
                                () => ({ isHovered: P, isMouseDown: k, isFocused: O, isChecked: S }),
                                [P, k, O, S],
                            ),
                            K = (0, a.useRef)($u.blank),
                            Q = (0, a.useRef)($u.blankHover),
                            ee = (0, a.useRef)($u.blankMousedown),
                            ue = (0, a.useRef)($u.check),
                            te = (0, a.useRef)($u.checkHover),
                            re = (0, a.useRef)($u.checkMousedown);
                        return (
                            (0, a.useEffect)(
                                (0, U.v)(() => {
                                    (K.current = i()($u.blank, $u.transition)),
                                        (Q.current = i()($u.blankHover, $u.transition)),
                                        (ee.current = i()($u.blankMousedown, $u.transition)),
                                        (ue.current = i()($u.check, $u.transition)),
                                        (te.current = i()($u.checkHover, $u.transition)),
                                        (re.current = i()($u.checkMousedown, $u.transition));
                                }),
                                [],
                            ),
                            n().createElement(
                                'div',
                                Vu(
                                    {
                                        ref: I,
                                        className: Y,
                                        onClick: G,
                                        onMouseEnter: V,
                                        onMouseLeave: j,
                                        onMouseDown: $,
                                        onMouseUp: z,
                                        onFocus: q,
                                        onBlur: X,
                                    },
                                    y,
                                ),
                                n().createElement(
                                    'div',
                                    { className: $u.input },
                                    n().createElement('div', { className: K.current }),
                                    n().createElement('div', { className: Q.current }),
                                    n().createElement('div', { className: ee.current }),
                                    n().createElement('div', { className: ue.current }),
                                    n().createElement('div', { className: te.current }),
                                    n().createElement('div', { className: re.current }),
                                ),
                                n().createElement('div', { className: $u.label }, m || u || (t && t(Z))),
                            )
                        );
                    }),
                    qu = 'CurrencyRadioButton_currency_80',
                    Xu = (0, f.Pi)(({ currencyType: e, value: u, priceID: t, currentPriceID: r, onClick: a }) =>
                        n().createElement(
                            ju,
                            {
                                value: t,
                                currentValue: r,
                                onClick: () => {
                                    a(t);
                                },
                            },
                            n().createElement(
                                'div',
                                { className: qu },
                                n().createElement(Xe, { type: e, size: Ve.big, value: u }),
                            ),
                        ),
                    ),
                    Yu = 'Price_base_70',
                    Zu = 'Price_priceDivider_b4',
                    Ku = 'Price_button_a5',
                    Qu = R.strings.battle_pass.battlePassBuyView,
                    Ju = { left: je.gold, right: je.freeXP },
                    et = (0, f.Pi)(({ className: e, price: u }) => {
                        const t = H(),
                            r = t.model,
                            s = t.controls,
                            o = r.main.isWalletAvailable.get(),
                            l = r.priceID.get(),
                            c = r.computes.prices(),
                            d = c.find((e) => e.currencyType === Ju.left),
                            _ = c.find((e) => e.currencyType === Ju.right);
                        return (
                            (0, a.useEffect)(() => {
                                l || s.setPriceID(r.confirm.compoundPriceDefaultID.get());
                            }, [s, l, r.confirm.compoundPriceDefaultID]),
                            n().createElement(
                                'div',
                                { className: i()(Yu, e) },
                                d && _
                                    ? n().createElement(
                                          n().Fragment,
                                          null,
                                          n().createElement(Xu, {
                                              currencyType: Ju.left,
                                              value: d.value,
                                              priceID: d.priceID,
                                              currentPriceID: l,
                                              onClick: s.setPriceID,
                                          }),
                                          n().createElement('div', { className: Zu }, Qu.priceDivider()),
                                          n().createElement(Xu, {
                                              currencyType: Ju.right,
                                              value: _.value,
                                              priceID: _.priceID,
                                              currentPriceID: l,
                                              onClick: s.setPriceID,
                                          }),
                                      )
                                    : n().createElement(Xe, { type: je.gold, size: Ve.large, value: u }),
                                n().createElement(
                                    Uu.u5,
                                    {
                                        type: Uu.L$.main,
                                        size: Uu.qE.medium,
                                        disabled: !o,
                                        onClick: s.buy,
                                        mixClass: Ku,
                                    },
                                    Qu.confirm.btnBuy(),
                                ),
                            )
                        );
                    }),
                    ut = 'Footer_base_9a',
                    tt = 'Footer_divider_5e',
                    rt = 'Footer_base__isMulticurrency_33',
                    at = 'Footer_secondDivider_ad',
                    nt = 'Footer_previousPrice_59',
                    st = 'Footer_currentPrice_07',
                    it = 'Footer_base__priceUpdateAnimation_5a',
                    ot = 'Footer_label_78',
                    lt = 'Footer_price_b6',
                    ct = R.strings.battle_pass.battlePassBuyView,
                    dt = (0, f.Pi)(({ isPriceUpdateAnimation: e }) => {
                        const u = H().model,
                            t = u.confirm,
                            r = t.price,
                            a = t.prevPrice,
                            s = t.isPurchaseWithLevels,
                            o = u.computes.isMulticurrency();
                        return n().createElement(
                            'div',
                            { className: i()(ut, o && rt, e && it) },
                            n().createElement('div', { className: tt }),
                            n().createElement('div', { className: at }),
                            e &&
                                n().createElement(
                                    'div',
                                    { className: nt },
                                    n().createElement(
                                        'div',
                                        { className: ot },
                                        s.get() ? ct.confirm.price() : ct.confirm.priceWithLevels(),
                                    ),
                                    n().createElement(et, { price: a.get(), className: lt }),
                                ),
                            n().createElement(
                                'div',
                                { className: st },
                                n().createElement(
                                    'div',
                                    { className: ot },
                                    s.get() ? ct.confirm.priceWithLevels() : ct.confirm.price(),
                                ),
                                n().createElement(et, { price: r.get(), className: lt }),
                            ),
                        );
                    });
                var _t = t(2862),
                    Et = t(5739),
                    mt = t(7264);
                const At = {
                    descriptionText: 'Rewards_descriptionText_4e',
                    priorityRewards: 'Rewards_priorityRewards_df',
                    priorityRewards__rewardsButtonVisible: 'Rewards_priorityRewards__rewardsButtonVisible_24',
                    buttonWrapper: 'Rewards_buttonWrapper_50',
                    indentBlock: 'Rewards_indentBlock_b5',
                    rewardBtn: 'Rewards_rewardBtn_77',
                    indentBlock__currentRewardsAnimation: 'Rewards_indentBlock__currentRewardsAnimation_b5',
                    rewardBtn__currentRewardsAnimation: 'Rewards_rewardBtn__currentRewardsAnimation_a5',
                    'fade-in': 'Rewards_fade-in_59',
                    fadeOut: 'Rewards_fadeOut_88',
                    fadeIn: 'Rewards_fadeIn_33',
                    fadeInWithScale: 'Rewards_fadeInWithScale_e1',
                    slideUp: 'Rewards_slideUp_1c',
                    scale: 'Rewards_scale_59',
                    rotate: 'Rewards_rotate_36',
                    windowIn: 'Rewards_windowIn_9e',
                    'fade-out': 'Rewards_fade-out_25',
                };
                function Ft() {
                    return (
                        (Ft =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Ft.apply(this, arguments)
                    );
                }
                const gt = (e, u) => ({
                        from: { opacity: 0 },
                        to: { opacity: 1 },
                        delay: 100 * e,
                        config: { duration: 300 },
                        onStart: () => {
                            (0, J.G)(R.sounds.bp_reward());
                        },
                        reset: u,
                    }),
                    Dt = R.strings.battle_pass.battlePassBuyView,
                    Ct = (0, f.Pi)(({ isCheckboxAnimationActive: e, isPrevious: u = !1, className: t }) => {
                        const r = H(),
                            a = r.model,
                            s = r.controls,
                            o = a.confirm.isPurchaseWithLevels.get(),
                            l =
                                a.computes.nowRewards().length +
                                a.computes.futureRewards().length -
                                a.computes.topPriorityRewards().length,
                            d = a.computes.topPriorityRewards(),
                            _ = a.computes.prevTopPriorityRewards(),
                            E = u ? _ : d,
                            m = u ? !o : o,
                            A = l > 0,
                            F = (0, ru.useSpring)(gt(4)),
                            g = (0, c.GS)().mediaSize < c.cJ.Medium ? _t.h2.Small : _t.h2.Big;
                        return n().createElement(
                            'div',
                            { className: i()(At.base, t) },
                            n().createElement(
                                'div',
                                { className: At.descriptionText },
                                m ? Dt.confirm.descriptionCheckboxChecked() : Dt.confirm.description(),
                            ),
                            n().createElement(
                                'div',
                                { className: i()(At.priorityRewards, A && At.priorityRewards__rewardsButtonVisible) },
                                N.UI(E, (e, t) =>
                                    u
                                        ? n().createElement(
                                              Et.Q,
                                              Ft({}, (0, b.$n)(e, g), { className: At.reward, key: `${e.name}_${t}` }),
                                          )
                                        : n().createElement(
                                              mt.d,
                                              { animationConfig: gt(t), key: `${e.name}_${t}` },
                                              n().createElement(
                                                  Et.Q,
                                                  Ft({}, (0, b.$n)(e, g), { className: At.reward }),
                                              ),
                                          ),
                                ),
                            ),
                            A
                                ? n().createElement(
                                      ru.animated.div,
                                      { style: F },
                                      n().createElement(
                                          'div',
                                          { className: At.buttonWrapper },
                                          n().createElement(
                                              Uu.u5,
                                              {
                                                  type: Uu.L$.ghost,
                                                  size: Uu.qE.medium,
                                                  mixClass: i()(
                                                      At.rewardBtn,
                                                      e && At.rewardBtn__currentRewardsAnimation,
                                                  ),
                                                  onClick: s.showRewards,
                                              },
                                              (0, Ae.uF)(Dt.btnRewards(l), { count: l }),
                                          ),
                                      ),
                                  )
                                : n().createElement('div', { className: At.indentBlock }),
                        );
                    }),
                    Bt = 'ShopOfferWarning_base_b5',
                    pt = 'ShopOfferWarning_lip_8c',
                    ht = 'ShopOfferWarning_glow_d4',
                    ft = 'ShopOfferWarning_message_b8',
                    vt = 'ShopOfferWarning_shopOfferLink_a5',
                    bt = R.strings.battle_pass.battlePassBuyView.confirm,
                    wt = ({ className: e }) => {
                        const u = H().controls;
                        return n().createElement(
                            'div',
                            { className: i()(Bt, e) },
                            n().createElement('div', { className: pt }),
                            n().createElement('div', { className: ht }),
                            n().createElement(Iu.z, {
                                classMix: ft,
                                text: R.strings.battle_pass.battlePassBuyView.confirm.shopOfferWarning(),
                                binding: {
                                    link: n().createElement(
                                        'div',
                                        { onClick: u.shopOffer, className: vt },
                                        bt.shopOfferLinkText(),
                                    ),
                                },
                            }),
                        );
                    },
                    yt = 'ConfirmBuyViewContent_base_e3',
                    St = 'ConfirmBuyViewContent_control_17',
                    Rt = 'ConfirmBuyViewContent_background_73',
                    kt = 'ConfirmBuyViewContent_content_9d',
                    xt = 'ConfirmBuyViewContent_backgroundCommander_19',
                    Tt = 'ConfirmBuyViewContent_title_d6',
                    Pt = 'ConfirmBuyViewContent_checkboxWrapper_23',
                    Nt = 'ConfirmBuyViewContent_content__rewardsUpdateAnimation_fa',
                    Lt = 'ConfirmBuyViewContent_checkbox_cd',
                    Ot = 'ConfirmBuyViewContent_previousRewards_f3',
                    Mt = 'ConfirmBuyViewContent_currentRewards_57',
                    It = 'ConfirmBuyViewContent_checkboxLabel_01',
                    Ht = 'ConfirmBuyViewContent_shopOfferWarning_a7',
                    Wt = R.strings.battle_pass.battlePassBuyView,
                    Ut = (0, f.Pi)(({ onBack: e }) => {
                        const u = H(),
                            t = u.model,
                            r = u.controls,
                            s = t.confirm,
                            o = s.chapterID,
                            l = s.isPurchaseWithLevels,
                            d = s.remainingLevelsCount,
                            _ = t.main.isShopOfferAvailable,
                            E = t.computes.isExtra(o.get()),
                            m = t.computes.isHoliday(o.get()),
                            A = t.computes.hasChapterLogoBg(o.get()),
                            F = (0, a.useState)(!1),
                            g = F[0],
                            D = F[1],
                            C = _.get() && !E,
                            B = l.get(),
                            p = (0, a.useRef)(!1),
                            h = (0, c.GS)().mediaSize,
                            f = ((e) => ({
                                backgroundImage: `url(${(0, v.wD)(R.images.gui.maps.icons.battlePass.backgrounds.ip_purchase_confirmation, e)})`,
                            }))(o.get()),
                            b = (0, tu.z)(() => {
                                e();
                            });
                        (0, G.I9)(b),
                            ((e) => {
                                const u = (0, a.useCallback)(
                                    (u) => {
                                        u.altKey || e();
                                    },
                                    [e],
                                );
                                (0, G.gd)(Hu.n.ENTER, u);
                            })(r.buy),
                            (0, G.gd)(Hu.n.SPACE, r.buy),
                            (0, a.useEffect)(() => {
                                if (p.current)
                                    return (
                                        D(!0),
                                        Ne(() => {
                                            D(!1);
                                        }, 800)
                                    );
                                p.current = !0;
                            }, [B, p]);
                        const w = h < c.cJ.Medium ? xu.large : xu.extraLarge;
                        return n().createElement(
                            'div',
                            { className: yt },
                            n().createElement(
                                'div',
                                { className: St },
                                n().createElement(W.A, {
                                    caption: R.strings.menu.viewHeader.backBtn.label(),
                                    onClick: b,
                                    goto: m ? '' : Wt.confirm.backBtnText(),
                                }),
                            ),
                            n().createElement('div', { className: Rt, style: f }),
                            n().createElement(
                                'div',
                                { className: i()(kt, g && Nt) },
                                !A &&
                                    n().createElement('div', {
                                        className: xt,
                                        style: {
                                            backgroundImage: `url(${(0, v.wD)(R.images.gui.maps.icons.battlePass.buy.confirm.commander, o.get())})`,
                                        },
                                    }),
                                n().createElement(Wu.D, {
                                    className: Tt,
                                    chapter: o.get(),
                                    buyBP: Wt.confirm.title(),
                                    type: Wu.x.TransparentChapterName,
                                }),
                                d.get() > 0 &&
                                    n().createElement(
                                        'div',
                                        { className: Pt },
                                        n().createElement(
                                            'div',
                                            { className: Lt },
                                            n().createElement(
                                                Mu,
                                                { size: w, isChecked: B, onClick: r.togglePurchaseWithLevels },
                                                n().createElement(Iu.z, {
                                                    text: Wt.confirm.checkbox.stage(d.get()),
                                                    binding: { stagesNumber: d.get() },
                                                    classMix: It,
                                                }),
                                            ),
                                        ),
                                    ),
                                g &&
                                    n().createElement(Ct, {
                                        isCheckboxAnimationActive: g,
                                        className: Ot,
                                        isPrevious: !0,
                                    }),
                                n().createElement(Ct, { isCheckboxAnimationActive: g, className: Mt }),
                                n().createElement(dt, { isPriceUpdateAnimation: g }),
                            ),
                            C && n().createElement(wt, { className: Ht }),
                        );
                    }),
                    Gt = { context: 'model.rewards' },
                    $t = (0, f.Pi)(() => {
                        const e = H(),
                            u = e.model,
                            t = e.controls,
                            r = u.main.state.get(),
                            s = u.chaptersWithLogoBg
                                .get()
                                .map(
                                    (e) =>
                                        `${(0, v.wD)(R.images.gui.maps.icons.battlePass.backgrounds.ip_purchase_confirmation, e.value)}`,
                                );
                        var i;
                        switch (
                            ((i = () => {
                                (0, b.ab)(s);
                            }),
                            (0, a.useEffect)(i, []),
                            (0, a.useEffect)(() => {
                                r === h && (u.priceID.get() && t.setPriceID(''), (0, b.ab)(s));
                            }, [t, u.priceID, r, s]),
                            r)
                        ) {
                            case h:
                                return n().createElement(Ru, { onClose: t.back });
                            case 'confirmState':
                                return n().createElement(Ut, { onBack: t.back });
                            case 'rewardsState':
                                return n().createElement(
                                    w.k,
                                    { options: Gt },
                                    n().createElement(y.$, { onBack: t.showConfirm }),
                                );
                            default:
                                return n().createElement(Ru, { onClose: t.back });
                        }
                    });
                engine.whenReady.then(() => {
                    B().render(
                        n().createElement(I, null, n().createElement(D, { className: p }, n().createElement($t, null))),
                        document.getElementById('root'),
                    );
                });
            },
            9508: (e, u, t) => {
                'use strict';
                t.d(u, { $: () => G });
                var r = t(3457),
                    a = t(9766),
                    n = t(8882),
                    s = t(8089),
                    i = t(8526),
                    o = t(9916),
                    l = t(3403),
                    c = t(6179),
                    d = t.n(c),
                    _ = t(280);
                const E = {
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
                    m = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    A = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    F = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    g = (0, c.memo)(({ text: e, binding: u, classMix: t }) => {
                        const r = (0, c.useCallback)((e) => ({ color: `#${e}` }), []),
                            a = (0, c.useMemo)(() => u || {}, [u]);
                        let n = m.exec(e),
                            s = e,
                            i = 0;
                        for (; n; ) {
                            const t = n[0],
                                o = A.exec(t),
                                l = F.exec(t),
                                c = n[1];
                            if (o && l) {
                                const e = o[0],
                                    n = e + i++ + e;
                                (s = s.replace(t, `%(${n})`)),
                                    (a[n] = E[e]
                                        ? d().createElement(
                                              'span',
                                              { className: E[e] },
                                              d().createElement(_.z, { text: c, binding: u }),
                                          )
                                        : d().createElement(
                                              'span',
                                              { style: r(e) },
                                              d().createElement(_.z, { text: c, binding: u }),
                                          ));
                            }
                            n = m.exec(e);
                        }
                        return d().createElement(_.z, { text: s, classMix: t, binding: a });
                    });
                var D = t(9485),
                    C = t(4420),
                    B = t(3862),
                    p = t(9430),
                    h = t(9144),
                    f = t(2189);
                const v = 'Content_base_94',
                    b = 'Content_mainContent_d4',
                    w = R.strings.battle_pass.battlePassBuyView.reward,
                    y = () => {
                        const e = (0, f.t)().model,
                            u = e.levels.get(),
                            t = u.fromLevel,
                            r = u.toLevel,
                            a = u.isPurchaseWithLevels,
                            n = e.computes.nowRewards(),
                            s = e.computes.futureRewards(),
                            i = ((e, u, t) =>
                                t
                                    ? { title: w.titleNowRewardsCheckbox() }
                                    : e < u
                                      ? { title: w.titleNowRewards(), completedSteps: `${e} - ${u}` }
                                      : { title: w.titleNowRewardsSingle(), completedSteps: `${u}` })(t, r, a),
                            o = i.title,
                            l = i.completedSteps;
                        return d().createElement(
                            h.z,
                            { className: v },
                            d().createElement(
                                'div',
                                { className: b },
                                n.length > 0 &&
                                    d().createElement(p.r, { title: o, iconType: B.Q.now, rewards: n, steps: l }),
                                s.length > 0 &&
                                    d().createElement(p.r, {
                                        title: w.titleFutureRewards(),
                                        iconType: B.Q.future,
                                        rewards: s,
                                    }),
                            ),
                        );
                    },
                    S = 'RewardsViewContent_base_42',
                    k = 'RewardsViewContent_content_64',
                    x = 'RewardsViewContent_background_37',
                    T = 'RewardsViewContent_shadow_2a',
                    P = 'RewardsViewContent_back_96',
                    N = 'RewardsViewContent_header_46',
                    L = 'RewardsViewContent_title_8d',
                    O = 'RewardsViewContent_subtitle_8d',
                    M = 'RewardsViewContent_description_2d',
                    I = 'RewardsViewContent_footerButton_06';
                function H(e, u, t, r, a, n, s) {
                    try {
                        var i = e[n](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(r, a);
                }
                const W = R.strings.battle_pass.battlePassBuyView.reward,
                    U = (e) => R.strings.battle_pass.chapter.fullNameUppercased.$dyn(`c_${e}`),
                    G = (0, l.Pi)(({ onBack: e }) => {
                        const u = (0, f.t)().model.levels.get(),
                            t = u.fromLevel,
                            l = u.toLevel,
                            _ = u.chapterID,
                            E = u.isPurchaseWithLevels,
                            m = (0, c.useState)(!1),
                            A = m[0],
                            F = m[1];
                        (0, i.I9)(e),
                            (0, c.useEffect)(() => {
                                (function () {
                                    var e,
                                        u =
                                            ((e = function* () {
                                                yield (0, o.Eu)(), yield (0, n.nS)(), F(!0);
                                            }),
                                            function () {
                                                var u = this,
                                                    t = arguments;
                                                return new Promise(function (r, a) {
                                                    var n = e.apply(u, t);
                                                    function s(e) {
                                                        H(n, r, a, s, i, 'next', e);
                                                    }
                                                    function i(e) {
                                                        H(n, r, a, s, i, 'throw', e);
                                                    }
                                                    s(void 0);
                                                });
                                            });
                                    return function () {
                                        return u.apply(this, arguments);
                                    };
                                })()();
                            }, []);
                        const B = {
                            backgroundImage: `url(${(0, D.wD)(R.images.gui.maps.icons.battlePass.backgrounds.chapter_general, _)})`,
                        };
                        return d().createElement(
                            'div',
                            { className: S },
                            d().createElement(
                                'div',
                                { className: x },
                                d().createElement(C.N, { chapter: _, isCurrent: !0, customBackgroundStyle: B }),
                            ),
                            d().createElement('div', { className: T }),
                            A &&
                                d().createElement(
                                    'div',
                                    { className: k },
                                    d().createElement(
                                        'div',
                                        { className: P },
                                        d().createElement(s.A, {
                                            caption: R.strings.menu.viewHeader.backBtn.label(),
                                            onClick: e,
                                        }),
                                    ),
                                    d().createElement(
                                        'div',
                                        { className: N },
                                        d().createElement(
                                            'div',
                                            { className: L },
                                            d().createElement(a.z, {
                                                text: W.chapter(),
                                                binding: { chapterName: U(_) },
                                            }),
                                        ),
                                        d().createElement('div', { className: M }, W.titleBattlePass()),
                                        E &&
                                            d().createElement(g, {
                                                classMix: O,
                                                text: W.subtitle(l - t + 1),
                                                binding: { levels: l - t + 1 },
                                            }),
                                    ),
                                    d().createElement(y, null),
                                    d().createElement(
                                        r.u5,
                                        { type: r.L$.secondary, size: r.qE.medium, mixClass: I, onClick: e },
                                        W.backBtn(),
                                    ),
                                ),
                        );
                    });
            },
            2189: (e, u, t) => {
                'use strict';
                t.d(u, { k: () => i, t: () => o });
                var r = t(3215),
                    a = t(4598),
                    n = t(3946);
                const s = (0, r.q)()(({ observableModel: e }) => {
                        const u = {
                                levels: e.object(),
                                nowRewards: e.array('nowRewards.items'),
                                futureRewards: e.array('futureRewards.items'),
                            },
                            t = (0, n.Om)(() => u.nowRewards.get(), { equals: a.jv }),
                            r = (0, n.Om)(() => u.futureRewards.get(), { equals: a.jv });
                        return Object.assign({}, u, { computes: { nowRewards: t, futureRewards: r } });
                    }, a.ZT),
                    i = s[0],
                    o = s[1];
            },
            9485: (e, u, t) => {
                'use strict';
                t.d(u, { W4: () => a, wD: () => r });
                t(8546);
                const r = (e, u, t = '') => {
                        const r = t.length > 0 ? `_${t}` : t,
                            a = e.$dyn(`c_${u}${r}`),
                            n = String(u).slice(-1),
                            s = e.$dyn(`default_${n}${r}`);
                        return a || s;
                    },
                    a = (e) => {
                        const u = R.images.gui.maps.icons.battlePass.backgrounds;
                        return e
                            ? { backgroundImage: `url(${r(u.progression, e)})` }
                            : { backgroundImage: `url(${u.$dyn('common')})` };
                    };
            },
            930: (e, u, t) => {
                'use strict';
                let r;
                !(function (e) {
                    (e.style = 'style'), (e.tankman = 'tankman');
                })(r || (r = {}));
                r.style, r.tankman;
            },
            2893: (e, u, t) => {
                'use strict';
                t.d(u, { $n: () => s, ab: () => i, pC: () => n });
                var r = t(2862),
                    a = t(729);
                t(5216), t(8546), t(930), t(7044), t(3649);
                const n = (e) => R.strings.battle_pass.chapter.fullNameUppercased.$dyn(`c_${e}`),
                    s = (e, u = r.h2.Big) => {
                        const t = e.item,
                            n = e.name,
                            s = e.value,
                            i = e.overlayType,
                            o = e.tooltipId,
                            l = e.tooltipContentId;
                        return {
                            name: t || n,
                            image: (0, a.ry)(e, u),
                            special: i,
                            value: s,
                            valueType: (0, a.p3)(n),
                            tooltipArgs: (0, a.pI)({ tooltipId: o }, Number(l), { ignoreShowDelay: !0 }),
                            size: u,
                        };
                    },
                    i = (e) => {
                        e.map((e) => {
                            new Image().src = e;
                        });
                    };
            },
            7264: (e, u, t) => {
                'use strict';
                t.d(u, { d: () => l });
                var r = t(6483),
                    a = t.n(r),
                    n = t(6179),
                    s = t.n(n),
                    i = t(7030);
                const o = 'AnimatedReward_base_f0',
                    l = ({ children: e, animationConfig: u, className: t }) => {
                        const r = (0, i.useSpring)(u);
                        return s().createElement(i.animated.div, { style: r, className: a()(o, t) }, e);
                    };
            },
            4420: (e, u, t) => {
                'use strict';
                t.d(u, { N: () => c });
                var r = t(6483),
                    a = t.n(r),
                    n = t(6179),
                    s = t.n(n),
                    i = t(9485);
                const o = 'ChapterBackground_base_fa',
                    l = 'ChapterBackground_base__current_7a',
                    c = ({ chapter: e, isCurrent: u, customBackgroundStyle: t }) =>
                        s().createElement('div', { className: a()(o, u && l), style: t || (0, i.W4)(e) });
            },
            8546: (e, u, t) => {
                'use strict';
                let r, a, n, s;
                !(function (e) {
                    (e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium');
                })(r || (r = {})),
                    (function (e) {
                        (e.ACTIVE = 'active'), (e.COMPLETED = 'completed'), (e.NOT_CHOSEN = 'notChosen');
                    })(a || (a = {})),
                    (function (e) {
                        (e.AwaitSeason = 'awaitSeason'),
                            (e.Bought = 'bought'),
                            (e.Free = 'free'),
                            (e.Completed = 'completed'),
                            (e.CompletedRightNow = 'completedRightNow'),
                            (e.SwitchedChapterRightNow = 'switchedChapterRightNow'),
                            (e.NoVehiclesBase = 'noVehiclesBase'),
                            (e.ChapterNotChosen = 'chapterNotChosen');
                    })(n || (n = {})),
                    (function (e) {
                        (e.None = ''),
                            (e.ShowLevel = 'show'),
                            (e.HideLevel = 'hide'),
                            (e.HideLevelWithDelay = 'hideWithDelay');
                    })(s || (s = {}));
            },
            9430: (e, u, t) => {
                'use strict';
                t.d(u, { r: () => B });
                var r = t(6483),
                    a = t.n(r),
                    n = t(6179),
                    s = t.n(n),
                    i = t(2862),
                    o = t(5739),
                    l = t(5415),
                    c = t(9480),
                    d = t(2893);
                const _ = 'GroupRewards_base_70',
                    E = 'GroupRewards_item_af',
                    m = ({ rewards: e, className: u }) => {
                        const t = (0, l.GS)().mediaSize < l.cJ.Medium ? i.h2.Small : i.h2.Big;
                        return s().createElement(
                            'div',
                            { className: a()(_, u) },
                            c.UI(e, (e, u) =>
                                s().createElement(
                                    'div',
                                    { key: `reward_${u}_${e.name}`, className: E },
                                    s().createElement(o.Q, (0, d.$n)(e, t)),
                                ),
                            ),
                        );
                    };
                var A = t(3862);
                const F = 'RewardsBlock_base_0e',
                    g = 'RewardsBlock_groupTitle_2f',
                    D = 'RewardsBlock_groupRewards_38',
                    C = 'RewardsBlock_groupRewards__future_b9',
                    B = ({ title: e, iconType: u, steps: t, rewards: r, className: n }) =>
                        s().createElement(
                            'div',
                            { className: a()(F, n) },
                            s().createElement(A.p, { text: e, type: u, steps: t, className: g }),
                            s().createElement(m, { rewards: r, className: a()(D, u === A.Q.future && C) }),
                        );
            },
            3862: (e, u, t) => {
                'use strict';
                t.d(u, { p: () => c, Q: () => l });
                var r = t(6483),
                    a = t.n(r),
                    n = t(280),
                    s = t(6179),
                    i = t.n(s);
                const o = {
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
                !(function (e) {
                    (e.now = 'now'), (e.future = 'future');
                })(l || (l = {}));
                const c = ({ text: e, type: u, steps: t, className: r }) =>
                    i().createElement(
                        'div',
                        { className: a()(o.base, o[`base__${u}`], r) },
                        i().createElement('div', { className: a()(o.divider, o.divider__left) }),
                        i().createElement(
                            'div',
                            { className: o.inner },
                            i().createElement('div', { className: o.icon }),
                            i().createElement(n.z, {
                                classMix: o.text,
                                text: e,
                                binding: { steps: i().createElement('span', { className: o.steps, key: t }, t) },
                            }),
                        ),
                        i().createElement('div', { className: a()(o.divider, o.divider__right) }),
                    );
            },
            9144: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => Be });
                var r = {};
                t.r(r),
                    t.d(r, {
                        Area: () => I,
                        Bar: () => L,
                        DefaultScroll: () => M,
                        Direction: () => C,
                        defaultSettings: () => B,
                        useHorizontalScrollApi: () => h,
                    });
                var a = {};
                t.r(a), t.d(a, { Area: () => te, Bar: () => J, Default: () => ue, useVerticalScrollApi: () => H });
                var n = t(6483),
                    s = t.n(n),
                    i = t(1856),
                    o = t(6179),
                    l = t.n(o),
                    c = t(7515),
                    d = t(3138),
                    _ = t(3815);
                function E(e, u, t = []) {
                    const r = (0, o.useRef)(0),
                        a = (0, o.useCallback)(() => window.clearInterval(r.current), t || []);
                    (0, o.useEffect)(() => a, [a]);
                    const n = (null != t ? t : []).concat([u]);
                    return [
                        (0, o.useCallback)((t) => {
                            (r.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, n),
                        a,
                    ];
                }
                var m = t(7727);
                function A(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return F(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return F(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function F(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                function g(e, u, t) {
                    const r = (0, o.useMemo)(
                        () =>
                            (function (e, u, t, r) {
                                let a,
                                    n = !1,
                                    s = 0;
                                function i() {
                                    a && clearTimeout(a);
                                }
                                function o(...o) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function d() {
                                        (s = Date.now()), t.apply(l, o);
                                    }
                                    n ||
                                        (r && !a && d(),
                                        i(),
                                        void 0 === r && c > e
                                            ? d()
                                            : !0 !== u &&
                                              (a = setTimeout(
                                                  r
                                                      ? function () {
                                                            a = void 0;
                                                        }
                                                      : d,
                                                  void 0 === r ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof u && ((r = t), (t = u), (u = void 0)),
                                    (o.cancel = function () {
                                        i(), (n = !0);
                                    }),
                                    o
                                );
                            })(t, e),
                        u,
                    );
                    return (0, o.useEffect)(() => r.cancel, [r]), r;
                }
                var D = t(7030);
                let C;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(C || (C = {}));
                const B = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    p = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: a,
                        triggerMouseMoveOnUpdate: n = !1,
                    }) => {
                        const s = (e, t) => {
                            const r = u(e),
                                a = r[0],
                                n = r[1];
                            return n <= a ? 0 : (0, c.u)(a, n, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                E = void 0 === c ? B : c,
                                m = (0, o.useRef)(null),
                                F = (0, o.useRef)(null),
                                C = (() => {
                                    const e = (0, o.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        r = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        a = (e, ...t) => {
                                            for (var r, a = A(u(e).values()); !(r = a()).done; ) (0, r.value)(...t);
                                        };
                                    return (0, o.useMemo)(() => ({ on: t, off: r, trigger: a }), []);
                                })(),
                                p = g(
                                    () => {
                                        d.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                h = (0, D.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = m.current;
                                        u && (t(u, e), C.trigger('change', e), n && p());
                                    },
                                    onRest: (e) => C.trigger('rest', e),
                                    onStart: (e) => C.trigger('start', e),
                                    onPause: (e) => C.trigger('pause', e),
                                })),
                                f = h[0],
                                v = h[1],
                                b = (0, o.useCallback)(
                                    (e, u, t) => {
                                        var r;
                                        const a = f.scrollPosition.get(),
                                            n = (null != (r = f.scrollPosition.goal) ? r : 0) - a;
                                        return s(e, u * t + n + a);
                                    },
                                    [f.scrollPosition],
                                ),
                                w = (0, o.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const r = m.current;
                                        r &&
                                            v.start({
                                                scrollPosition: s(r, e),
                                                immediate: u,
                                                reset: t,
                                                config: E.animationConfig,
                                                from: { scrollPosition: s(r, f.scrollPosition.get()) },
                                            });
                                    },
                                    [v, E.animationConfig, f.scrollPosition],
                                ),
                                y = (0, o.useCallback)(
                                    (e) => {
                                        const u = m.current,
                                            t = F.current;
                                        if (!u || !t) return;
                                        const r = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return a(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, E.step),
                                            n = b(u, e, r);
                                        w(n);
                                    },
                                    [w, b, E.step],
                                ),
                                S = (0, o.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && y(r(e)),
                                            m.current && C.trigger('mouseWheel', e, f.scrollPosition, u(m.current));
                                    },
                                    [f.scrollPosition, y, C],
                                ),
                                R = ((e, u = []) => {
                                    const t = (0, o.useRef)(),
                                        r = (0, o.useCallback)((...u) => {
                                            t.current && t.current(), (t.current = e(...u));
                                        }, u);
                                    return (
                                        (0, o.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        (0, i.v)(() => {
                                            const e = m.current;
                                            e &&
                                                (w(s(e, f.scrollPosition.goal), { immediate: !0 }),
                                                C.trigger('resizeHandled'));
                                        }),
                                    [w, f.scrollPosition.goal],
                                ),
                                k = (0, _.z)(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const u = s(e, f.scrollPosition.goal);
                                    u !== f.scrollPosition.goal && w(u, { immediate: !0 }),
                                        C.trigger('recalculateContent');
                                });
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('resize', R),
                                    () => {
                                        window.removeEventListener('resize', R);
                                    }
                                ),
                                [R],
                            );
                            return (0, o.useMemo)(
                                () => ({
                                    getWrapperSize: () => (F.current ? a(F.current) : void 0),
                                    getContainerSize: () => (m.current ? e(m.current) : void 0),
                                    getBounds: () =>
                                        m.current
                                            ? u(m.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: E.step.clampedArrowStepTimeout,
                                    clampPosition: s,
                                    handleMouseWheel: S,
                                    applyScroll: w,
                                    applyStepTo: y,
                                    contentRef: m,
                                    wrapperRef: F,
                                    scrollPosition: v,
                                    animationScroll: f,
                                    recalculateContent: k,
                                    events: { on: C.on, off: C.off },
                                }),
                                [f.scrollPosition, w, y, C.off, C.on, k, S, v, E.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    h = p({
                        getBounds: (e) => {
                            var u, t;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (u = null == (t = e.parentElement) ? void 0 : t.offsetWidth) ? u : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, u) => {
                            e.style.transform = `translateX(-${u.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? C.Next : C.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    f = 'HorizontalBar_base_49',
                    v = 'HorizontalBar_base__nonActive_82',
                    b = 'HorizontalBar_leftButton_5f',
                    w = 'HorizontalBar_rightButton_03',
                    y = 'HorizontalBar_track_0d',
                    S = 'HorizontalBar_thumb_fd',
                    R = 'HorizontalBar_rail_32',
                    k = 'disable',
                    x = { pending: !1, offset: 0 },
                    T = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    P = () => {},
                    N = (e, u) => Math.max(20, e.offsetWidth * u),
                    L = (0, o.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = T, onDrag: r = P }) => {
                        const a = (0, o.useRef)(null),
                            n = (0, o.useRef)(null),
                            A = (0, o.useRef)(null),
                            F = (0, o.useRef)(null),
                            g = (0, o.useRef)(null),
                            D = e.stepTimeout || 100,
                            B = (0, o.useState)(x),
                            p = B[0],
                            h = B[1],
                            L = (0, o.useCallback)(
                                (e) => {
                                    h(e),
                                        g.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: g.current });
                                },
                                [r],
                            ),
                            O = () => {
                                const u = F.current,
                                    t = g.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(r && u && t && a)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, r / a),
                                    o = (0, c.u)(0, 1, s / (a - r)),
                                    l = (u.offsetWidth - N(u, i)) * o;
                                (t.style.transform = `translateX(${0 | l}px)`),
                                    ((e) => {
                                        if (n.current && A.current && F.current && g.current) {
                                            if (0 === e)
                                                return n.current.classList.add(k), void A.current.classList.remove(k);
                                            if (
                                                ((u = F.current),
                                                (t = g.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return n.current.classList.remove(k), void A.current.classList.add(k);
                                            var u, t;
                                            n.current.classList.remove(k), A.current.classList.remove(k);
                                        }
                                    })(l);
                            },
                            M = (0, _.z)(() => {
                                (() => {
                                    const u = g.current,
                                        t = F.current,
                                        r = e.getWrapperSize(),
                                        n = e.getContainerSize();
                                    if (!(n && u && r && t)) return;
                                    const s = Math.min(1, r / n);
                                    (u.style.width = `${N(t, s)}px`),
                                        (u.style.display = 'flex'),
                                        a.current &&
                                            (1 === s ? a.current.classList.add(v) : a.current.classList.remove(v));
                                })(),
                                    O();
                            });
                        (0, o.useEffect)(() => (0, i.v)(M)),
                            (0, o.useEffect)(
                                () =>
                                    (0, i.v)(() => {
                                        const u = () => {
                                            O();
                                        };
                                        let t = P;
                                        const r = () => {
                                            t(), (t = (0, i.v)(M));
                                        };
                                        return (
                                            e.events.on('recalculateContent', M),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', M),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', r);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, o.useEffect)(() => {
                                if (!p.pending) return;
                                const u = d.O.client.events.mouse.move(([u, t]) => {
                                        var a;
                                        const n = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!n || !s) return;
                                        const i = F.current,
                                            o = g.current;
                                        if (!i || !o) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - p.offset - i.getBoundingClientRect().x,
                                            c = (l / i.offsetWidth) * (null != (a = e.getContainerSize()) ? a : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(n, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: c });
                                    }),
                                    t = d.O.client.events.mouse.up(() => {
                                        u(), L(x);
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, p.offset, p.pending, r, L]);
                        const I = E((u) => e.applyStepTo(u), D, [e]),
                            H = I[0],
                            W = I[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', W, !0),
                                () => document.removeEventListener('mouseup', W, !0)
                            ),
                            [W],
                        );
                        const U = (e) => {
                            e.target.classList.contains(k) || (0, m.G)('highlight');
                        };
                        return l().createElement(
                            'div',
                            { className: s()(f, u.base), ref: a, onWheel: e.handleMouseWheel },
                            l().createElement('div', {
                                className: s()(b, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(k) || 0 !== e.button || ((0, m.G)('play'), H(C.Next));
                                },
                                onMouseUp: W,
                                ref: n,
                                onMouseEnter: U,
                            }),
                            l().createElement(
                                'div',
                                {
                                    className: s()(y, u.track),
                                    onMouseDown: (u) => {
                                        const r = g.current;
                                        if (r && 0 === u.button)
                                            if (((0, m.G)('play'), u.target === r))
                                                L({ pending: !0, offset: u.screenX - r.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const r = g.current,
                                                        a = e.contentRef.current;
                                                    if (!r || !a) return;
                                                    const n = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + n * u);
                                                })(u.screenX > r.getBoundingClientRect().x ? C.Prev : C.Next);
                                            }
                                    },
                                    ref: F,
                                    onMouseEnter: U,
                                },
                                l().createElement('div', { ref: g, className: s()(S, u.thumb) }),
                                l().createElement('div', { className: s()(R, u.rail) }),
                            ),
                            l().createElement('div', {
                                className: s()(w, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(k) || 0 !== e.button || ((0, m.G)('play'), H(C.Prev));
                                },
                                onMouseUp: W,
                                ref: A,
                                onMouseEnter: U,
                            }),
                        );
                    }),
                    O = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    M = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: a,
                        classNames: n,
                        scrollClassName: i,
                        getStepByRailClick: c,
                        onDrag: d,
                    }) => {
                        const _ = (0, o.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: s()(O.base, e.base) });
                            }, [r]),
                            E = (0, o.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return l().createElement(
                            'div',
                            { className: s()(O.defaultScroll, t), onWheel: u.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: s()(O.defaultScrollArea, a) },
                                l().createElement(I, { className: i, api: E, classNames: n }, e),
                            ),
                            l().createElement(L, { getStepByRailClick: c, api: u, onDrag: d, classNames: _ }),
                        );
                    },
                    I = ({ api: e, className: u, classNames: t, children: r }) => (
                        (0, o.useEffect)(() => (0, i.v)(e.recalculateContent)),
                        l().createElement(
                            'div',
                            { className: s()(O.base, u) },
                            l().createElement(
                                'div',
                                {
                                    className: s()(O.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                l().createElement(
                                    'div',
                                    { className: s()(O.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                (I.Bar = L), (I.Default = M);
                const H = p({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? C.Next : C.Prev),
                    }),
                    W = 'VerticalBar_base_f3',
                    U = 'VerticalBar_base__nonActive_42',
                    G = 'VerticalBar_topButton_d7',
                    $ = 'VerticalBar_bottomButton_06',
                    z = 'VerticalBar_track_df',
                    V = 'VerticalBar_thumb_32',
                    j = 'VerticalBar_rail_43',
                    q = 'disable',
                    X = () => {},
                    Y = { pending: !1, offset: 0 },
                    Z = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    K = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Q = (e, u) => Math.max(20, e.offsetHeight * u),
                    J = (0, o.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Z, onDrag: r = X }) => {
                        const a = (0, o.useRef)(null),
                            n = (0, o.useRef)(null),
                            A = (0, o.useRef)(null),
                            F = (0, o.useRef)(null),
                            g = (0, o.useRef)(null),
                            D = e.stepTimeout || 100,
                            B = (0, o.useState)(Y),
                            p = B[0],
                            h = B[1],
                            f = (0, o.useCallback)(
                                (e) => {
                                    h(e),
                                        g.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: g.current });
                                },
                                [r],
                            ),
                            v = (0, _.z)(() => {
                                const u = g.current,
                                    t = F.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && n && u && t)) return;
                                const s = Math.min(1, r / n);
                                return (
                                    (u.style.height = `${Q(t, s)}px`),
                                    (u.style.display = 'flex'),
                                    a.current && (1 === s ? a.current.classList.add(U) : a.current.classList.remove(U)),
                                    s
                                );
                            }),
                            b = (0, _.z)(() => {
                                const u = F.current,
                                    t = g.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(r && u && t && a)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, r / a),
                                    o = (0, c.u)(0, 1, s / (a - r)),
                                    l = (u.offsetHeight - Q(u, i)) * o;
                                (t.style.transform = `translateY(${0 | l}px)`),
                                    ((e) => {
                                        if (n.current && A.current && F.current && g.current) {
                                            if (0 === Math.round(e))
                                                return n.current.classList.add(q), void A.current.classList.remove(q);
                                            if (
                                                ((u = F.current),
                                                (t = g.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return n.current.classList.remove(q), void A.current.classList.add(q);
                                            var u, t;
                                            n.current.classList.remove(q), A.current.classList.remove(q);
                                        }
                                    })(l);
                            }),
                            w = (0, _.z)(() => {
                                K(e, () => {
                                    v(), b();
                                });
                            });
                        (0, o.useEffect)(() => (0, i.v)(w)),
                            (0, o.useEffect)(() => {
                                const u = () => {
                                    K(e, () => {
                                        b();
                                    });
                                };
                                let t = X;
                                const r = () => {
                                    t(), (t = (0, i.v)(w));
                                };
                                return (
                                    e.events.on('recalculateContent', w),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', w),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', r);
                                    }
                                );
                            }, [e]),
                            (0, o.useEffect)(() => {
                                if (!p.pending) return;
                                const u = d.O.client.events.mouse.up(() => {
                                        f(Y);
                                    }),
                                    t = d.O.client.events.mouse.move(([u]) => {
                                        K(e, (t) => {
                                            const a = F.current,
                                                n = g.current,
                                                s = e.getContainerSize();
                                            if (!a || !n || !s) return;
                                            const i = u.screenY - p.offset - a.getBoundingClientRect().y,
                                                o = (i / a.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: n, thumbOffset: i, contentOffset: o });
                                        });
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, p.offset, p.pending, r, f]);
                        const y = E((u) => e.applyStepTo(u), D, [e]),
                            S = y[0],
                            R = y[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', R, !0),
                                () => document.removeEventListener('mouseup', R, !0)
                            ),
                            [R],
                        );
                        const k = (e) => {
                            e.target.classList.contains(q) || (0, m.G)('highlight');
                        };
                        return l().createElement(
                            'div',
                            { className: s()(W, u.base), ref: a, onWheel: e.handleMouseWheel },
                            l().createElement('div', {
                                className: s()(G, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(q) || 0 !== e.button || ((0, m.G)('play'), S(C.Next));
                                },
                                ref: n,
                                onMouseEnter: k,
                            }),
                            l().createElement(
                                'div',
                                {
                                    className: s()(z, u.track),
                                    onMouseDown: (u) => {
                                        const r = g.current;
                                        if (r && 0 === u.button)
                                            if (((0, m.G)('play'), u.target === r))
                                                f({ pending: !0, offset: u.screenY - r.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    g.current &&
                                                        K(e, (r) => {
                                                            if (!r) return;
                                                            const a = t(e),
                                                                n = e.clampPosition(r, r.scrollTop + a * u);
                                                            e.applyScroll(n);
                                                        });
                                                })(u.screenY > r.getBoundingClientRect().y ? C.Prev : C.Next);
                                            }
                                    },
                                    ref: F,
                                    onMouseEnter: k,
                                },
                                l().createElement('div', { ref: g, className: s()(V, u.thumb) }),
                                l().createElement('div', { className: s()(j, u.rail) }),
                            ),
                            l().createElement('div', {
                                className: s()($, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(q) || 0 !== e.button || ((0, m.G)('play'), S(C.Prev));
                                },
                                onMouseUp: R,
                                ref: A,
                                onMouseEnter: k,
                            }),
                        );
                    }),
                    ee = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    ue = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: a,
                        scrollClassName: n,
                        scrollClassNames: i,
                        getStepByRailClick: c,
                        onDrag: d,
                    }) => {
                        const _ = (0, o.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: s()(ee.base, e.base) });
                            }, [r]),
                            E = (0, o.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return l().createElement(
                            'div',
                            { className: s()(ee.defaultScroll, t), onWheel: u.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: s()(ee.area, a) },
                                l().createElement(te, { className: n, classNames: i, api: E }, e),
                            ),
                            l().createElement(J, { getStepByRailClick: c, api: u, onDrag: d, classNames: _ }),
                        );
                    },
                    te = ({ className: e, classNames: u, children: t, api: r }) => (
                        (0, o.useEffect)(() => (0, i.v)(r.recalculateContent)),
                        l().createElement(
                            'div',
                            { className: s()(ee.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: s()(ee.content, null == u ? void 0 : u.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                te.Default = ue;
                const re = { Vertical: a, Horizontal: r };
                var ae = t(8882),
                    ne = t(9916);
                function se(e, u, t, r, a, n, s) {
                    try {
                        var i = e[n](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(r, a);
                }
                function ie(e) {
                    return function () {
                        var u = this,
                            t = arguments;
                        return new Promise(function (r, a) {
                            var n = e.apply(u, t);
                            function s(e) {
                                se(n, r, a, s, i, 'next', e);
                            }
                            function i(e) {
                                se(n, r, a, s, i, 'throw', e);
                            }
                            s(void 0);
                        });
                    };
                }
                let oe;
                !(function (e) {
                    (e[(e.Idle = 0)] = 'Idle'),
                        (e[(e.Start = 1)] = 'Start'),
                        (e[(e.Between = 2)] = 'Between'),
                        (e[(e.End = 3)] = 'End');
                })(oe || (oe = {}));
                const le = (e) => {
                        const u = (0, o.useState)(oe.Idle),
                            t = u[0],
                            r = u[1],
                            a = e.animationScroll,
                            n = e.getContainerSize,
                            s = e.getWrapperSize,
                            l = e.events,
                            c = (0, o.useCallback)(() => {
                                const e = a.scrollPosition.get(),
                                    u = n() - s();
                                switch (!0) {
                                    case !u:
                                        return r(oe.Idle);
                                    case e <= 0:
                                        return r(oe.Start);
                                    case e >= u:
                                        return r(oe.End);
                                    default:
                                        r(oe.Between);
                                }
                            }, [a.scrollPosition, n, s]);
                        return (
                            (0, o.useEffect)(
                                () => (
                                    (function () {
                                        var e = ie(function* () {
                                            yield (0, i.v)(c);
                                        });
                                        return function () {
                                            return e.apply(this, arguments);
                                        };
                                    })()(),
                                    l.on('change', c),
                                    () => l.off('change', c)
                                ),
                                [l, c],
                            ),
                            (0, o.useEffect)(() => {
                                const e = (function () {
                                    var e = ie(function* () {
                                        yield (0, ne.Eu)(), yield (0, ae.nS)(), c();
                                    });
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })();
                                return (
                                    engine.on('clientResized', e),
                                    () => {
                                        engine.off('clientResized', e);
                                    }
                                );
                            }, [c]),
                            t
                        );
                    },
                    ce = { type: 'idle' };
                const de = 'ScrollWithLips_base_69',
                    _e = 'ScrollWithLips_lip_90',
                    Ee = 'ScrollWithLips_lip__top_ab',
                    me = 'ScrollWithLips_lip__bottom_17',
                    Ae = 'ScrollWithLips_scroll_7e',
                    Fe = 'ScrollWithLips_scroll__loaded_b2',
                    ge = 'ScrollWithLips_topButton_4e',
                    De = 'ScrollWithLips_bottomButton_1e',
                    Ce = 'ScrollWithLips_track_4f',
                    Be = ({ className: e, children: u }) => {
                        const t = H();
                        !(function (e, u) {
                            const t = e.contentRef,
                                r = e.wrapperRef,
                                a = e.scrollPosition,
                                n = e.clampPosition,
                                s = e.animationScroll,
                                i = e.events,
                                l = (0, o.useState)(ce),
                                c = l[0],
                                d = l[1];
                            (0, o.useEffect)(() => {
                                const e = t.current;
                                e && (e.style.cursor = 'dragging' === c.type ? 'grabbing' : 'grab');
                            }, [t, c.type]),
                                (0, o.useEffect)(() => {
                                    if ('dragging' !== c.type) return;
                                    const e = (e) => {
                                            const i = t.current,
                                                o = r.current;
                                            if (!i || !o) return;
                                            const l = c.positionFrom - e.screenY,
                                                d = c.previousScrollPosition + l;
                                            a.start(
                                                Object.assign(
                                                    {
                                                        scrollPosition: n(i, d),
                                                        from: { scrollPosition: s.scrollPosition.get() },
                                                    },
                                                    u && { config: u },
                                                ),
                                            );
                                        },
                                        i = () => {
                                            window.removeEventListener('mousemove', e), d({ type: 'scrollingToEnd' });
                                        };
                                    return (
                                        window.addEventListener('mousemove', e),
                                        window.addEventListener('mouseup', i),
                                        () => {
                                            window.removeEventListener('mousemove', e),
                                                window.removeEventListener('mouseup', i);
                                        }
                                    );
                                }, [s.scrollPosition, n, t, c, a, r, u]),
                                (0, o.useEffect)(() => {
                                    if ('scrollingToEnd' !== c.type) return;
                                    const e = () => {
                                        d(ce);
                                    };
                                    return s.scrollPosition.idle && e(), i.on('rest', e), () => i.off('rest', e);
                                }, [s.scrollPosition, c.type, i]),
                                (0, o.useEffect)(() => {
                                    const e = t.current;
                                    if (!e) return;
                                    const u = (e) => {
                                        0 === e.button &&
                                            d({
                                                type: 'dragging',
                                                positionFrom: e.screenY,
                                                previousScrollPosition: s.scrollPosition.get(),
                                            });
                                    };
                                    return (
                                        e.addEventListener('mousedown', u), () => e.removeEventListener('mousedown', u)
                                    );
                                }, [s.scrollPosition, t]);
                        })(t);
                        const r = le(t),
                            a = r !== oe.Idle;
                        return l().createElement(
                            'div',
                            { className: s()(de, e) },
                            r !== oe.Start && r !== oe.Idle && l().createElement('div', { className: s()(_e, Ee) }),
                            r !== oe.End && r !== oe.Idle && l().createElement('div', { className: s()(_e, me) }),
                            l().createElement(
                                re.Vertical.Area.Default,
                                {
                                    api: t,
                                    barClassNames: {
                                        base: s()(Ae, a && Fe),
                                        topButton: ge,
                                        bottomButton: De,
                                        track: Ce,
                                    },
                                },
                                u,
                            ),
                        );
                    };
            },
            3942: (e, u, t) => {
                'use strict';
                t.d(u, { D: () => _, x: () => c });
                var r = t(6483),
                    a = t.n(r),
                    n = t(3649),
                    s = t(6179),
                    i = t.n(s),
                    o = t(2893);
                const l = {
                    base: 'Title_base_29',
                    chapter: 'Title_chapter_74',
                    base__transparentChapterName: 'Title_base__transparentChapterName_18',
                    buyBPTitle: 'Title_buyBPTitle_dd',
                    subTitle: 'Title_subTitle_52',
                };
                let c;
                !(function (e) {
                    (e.Default = 'default'), (e.TransparentChapterName = 'transparentChapterName');
                })(c || (c = {}));
                const d = R.strings.battle_pass.battlePassBuyView.confirm,
                    _ = ({ chapter: e, buyBP: u, subTitle: t, className: r, type: s = c.Default }) => {
                        const _ = (0, n.uF)(d.chapter(), { name: (0, o.pC)(e) });
                        return i().createElement(
                            'div',
                            { className: a()(l.base, l[`base__${s}`], r) },
                            i().createElement('span', { className: l.chapter }, _),
                            i().createElement('span', { className: l.buyBPTitle }, u),
                            i().createElement('span', { className: l.subTitle }, t),
                        );
                    };
            },
            5216: (e, u, t) => {
                'use strict';
                let r, a;
                !(function (e) {
                    (e.Active = 'active'),
                        (e.Paused = 'paused'),
                        (e.Completed = 'completed'),
                        (e.NotStarted = 'notStarted');
                })(r || (r = {})),
                    (function (e) {
                        (e.Vehicle = 'vehicle'), (e.Style = 'style'), (e.Tankman = 'tankman');
                    })(a || (a = {}));
            },
            6880: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
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
            5287: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                const r = { base: 'FormatText_base_d0' };
            },
            1609: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
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
            7476: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
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
    function __webpack_require__(e) {
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, r) => {
            if (!u) {
                var a = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, r] = deferred[o], n = !0, s = 0; s < u.length; s++)
                        (!1 & r || a >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((n = !1), r < a && (a = r));
                    if (n) {
                        deferred.splice(o--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > r; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, r];
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
        (__webpack_require__.j = 4217),
        (() => {
            var e = { 4217: 0, 2155: 0, 8872: 0, 8805: 0, 6488: 0, 2670: 0, 3132: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var r,
                        a,
                        [n, s, i] = t,
                        o = 0;
                    if (n.some((u) => 0 !== e[u])) {
                        for (r in s) __webpack_require__.o(s, r) && (__webpack_require__.m[r] = s[r]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); o < n.length; o++)
                        (a = n[o]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(190));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
