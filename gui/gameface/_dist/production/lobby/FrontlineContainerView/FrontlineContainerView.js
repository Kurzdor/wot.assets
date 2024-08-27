(() => {
    var __webpack_modules__ = {
            3457: (e, t, u) => {
                'use strict';
                u.d(t, { L$: () => l.L, qE: () => l.q, u5: () => m });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7727),
                    s = u(6179),
                    i = u.n(s),
                    o = u(6880),
                    l = u(2106);
                const c = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: n,
                    disabled: c,
                    mixClass: m,
                    soundHover: d,
                    soundClick: _,
                    onMouseEnter: E,
                    onMouseMove: g,
                    onMouseDown: A,
                    onMouseUp: p,
                    onMouseLeave: F,
                    onClick: f,
                }) => {
                    const D = (0, s.useRef)(null),
                        v = (0, s.useState)(u),
                        B = v[0],
                        b = v[1],
                        C = (0, s.useState)(!1),
                        h = C[0],
                        w = C[1],
                        S = (0, s.useState)(!1),
                        y = S[0],
                        k = S[1],
                        T = (0, s.useCallback)(() => {
                            c || (D.current && (D.current.focus(), b(!0)));
                        }, [c]),
                        N = (0, s.useCallback)(
                            (e) => {
                                B && null !== D.current && !D.current.contains(e.target) && b(!1);
                            },
                            [B],
                        ),
                        x = (0, s.useCallback)(
                            (e) => {
                                c || (f && f(e));
                            },
                            [c, f],
                        ),
                        M = (0, s.useCallback)(
                            (e) => {
                                c || (null !== d && (0, r.G)(d), E && E(e), k(!0));
                            },
                            [c, d, E],
                        ),
                        L = (0, s.useCallback)(
                            (e) => {
                                g && g(e);
                            },
                            [g],
                        ),
                        P = (0, s.useCallback)(
                            (e) => {
                                c || (p && p(e), w(!1));
                            },
                            [c, p],
                        ),
                        I = (0, s.useCallback)(
                            (e) => {
                                c || (null !== _ && (0, r.G)(_), A && A(e), u && T(), w(!0));
                            },
                            [c, _, A, T, u],
                        ),
                        O = (0, s.useCallback)(
                            (e) => {
                                c || (F && F(e), w(!1));
                            },
                            [c, F],
                        ),
                        H = a()(
                            o.Z.base,
                            o.Z[`base__${n}`],
                            {
                                [o.Z.base__disabled]: c,
                                [o.Z[`base__${t}`]]: t,
                                [o.Z.base__focus]: B,
                                [o.Z.base__highlightActive]: h,
                                [o.Z.base__firstHover]: y,
                            },
                            m,
                        ),
                        U = a()(o.Z.state, o.Z.state__default);
                    return (
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mousedown', N),
                                () => {
                                    document.removeEventListener('mousedown', N);
                                }
                            ),
                            [N],
                        ),
                        (0, s.useEffect)(() => {
                            b(u);
                        }, [u]),
                        i().createElement(
                            'div',
                            {
                                ref: D,
                                className: H,
                                onMouseEnter: M,
                                onMouseMove: L,
                                onMouseUp: P,
                                onMouseDown: I,
                                onMouseLeave: O,
                                onClick: x,
                            },
                            n !== l.L.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: o.Z.back }),
                                    i().createElement('span', { className: o.Z.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: U },
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
                const m = (0, s.memo)(c);
            },
            2106: (e, t, u) => {
                'use strict';
                let n, a;
                u.d(t, { L: () => n, q: () => a }),
                    (function (e) {
                        (e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost');
                    })(n || (n = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(a || (a = {}));
            },
            4090: (e, t, u) => {
                'use strict';
                u.d(t, { A: () => c });
                var n = u(6483),
                    a = u.n(n),
                    r = u(6179),
                    s = u.n(r);
                const i = {
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
                    o = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const c = (e) => {
                    let t = e.size,
                        u = e.value,
                        n = e.isEmpty,
                        r = e.fadeInAnimation,
                        c = e.hide,
                        m = e.maximumNumber,
                        d = e.className,
                        _ = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, o);
                    const E = n ? null : u,
                        g = 'string' == typeof E;
                    if ((E && !g && E < 0) || 0 === E) return null;
                    const A = E && !g && E > m,
                        p = a()(
                            i.base,
                            i[`base__${t}`],
                            r && i.base__animated,
                            c && i.base__hidden,
                            !E && i.base__pattern,
                            n && i.base__empty,
                            d,
                        );
                    return s().createElement(
                        'div',
                        l({ className: p }, _),
                        s().createElement('div', { className: i.bg }),
                        s().createElement('div', { className: i.pattern }),
                        s().createElement(
                            'div',
                            { className: a()(i.value, g && i.value__text) },
                            A ? m : E,
                            A && s().createElement('span', { className: i.plus }, '+'),
                        ),
                    );
                };
                c.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
            },
            280: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => l });
                var n = u(6179),
                    a = u.n(n),
                    r = u(6483),
                    s = u.n(r),
                    i = u(3649),
                    o = u(5287);
                const l = ({ binding: e, text: t = '', classMix: u, alignment: r = i.v2.left }) =>
                    null === t
                        ? (console.error("FormatText was supplied with 'null'"), null)
                        : a().createElement(
                              n.Fragment,
                              null,
                              t.split('\n').map((t, l) =>
                                  a().createElement(
                                      'div',
                                      { className: s()(o.Z.base, u), key: `${t}-${l}` },
                                      (0, i.Uw)(t, r, e).map((e, t) =>
                                          a().createElement(n.Fragment, { key: `${t}-${e}` }, e),
                                      ),
                                  ),
                              ),
                          );
            },
            3495: (e, t, u) => {
                'use strict';
                u.d(t, { Y: () => m });
                var n = u(3138),
                    a = u(6179),
                    r = u(1043),
                    s = u(5262);
                const i = n.O.client.getSize('rem'),
                    o = i.width,
                    l = i.height,
                    c = Object.assign({ width: o, height: l }, (0, s.T)(o, l, r.j)),
                    m = (0, a.createContext)(c);
            },
            1039: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => c });
                var n = u(6179),
                    a = u.n(n),
                    r = u(6536),
                    s = u(3495),
                    i = u(1043),
                    o = u(5262),
                    l = u(3138);
                const c = (0, n.memo)(({ children: e }) => {
                    const t = (0, n.useContext)(s.Y),
                        u = (0, n.useState)(t),
                        c = u[0],
                        m = u[1],
                        d = (0, n.useCallback)((e, t) => {
                            const u = l.O.view.pxToRem(e),
                                n = l.O.view.pxToRem(t);
                            m(Object.assign({ width: u, height: n }, (0, o.T)(u, n, i.j)));
                        }, []);
                    (0, r.Z)(() => {
                        engine.on('clientResized', d);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', d), [d]);
                    const _ = (0, n.useMemo)(() => Object.assign({}, c), [c]);
                    return a().createElement(s.Y.Provider, { value: _ }, e);
                });
            },
            6010: (e, t, u) => {
                'use strict';
                var n = u(6179),
                    a = u(7382),
                    r = u(3495);
                const s = ['children'],
                    i = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, s);
                        const i = (0, n.useContext)(r.Y),
                            o = i.extraLarge,
                            l = i.large,
                            c = i.medium,
                            m = i.small,
                            d = i.extraSmall,
                            _ = i.extraLargeWidth,
                            E = i.largeWidth,
                            g = i.mediumWidth,
                            A = i.smallWidth,
                            p = i.extraSmallWidth,
                            F = i.extraLargeHeight,
                            f = i.largeHeight,
                            D = i.mediumHeight,
                            v = i.smallHeight,
                            B = i.extraSmallHeight,
                            b = { extraLarge: F, large: f, medium: D, small: v, extraSmall: B };
                        if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                            if (u.extraLarge && o) return t;
                            if (u.large && l) return t;
                            if (u.medium && c) return t;
                            if (u.small && m) return t;
                            if (u.extraSmall && d) return t;
                        } else {
                            if (u.extraLargeWidth && _) return (0, a.H)(t, u, b);
                            if (u.largeWidth && E) return (0, a.H)(t, u, b);
                            if (u.mediumWidth && g) return (0, a.H)(t, u, b);
                            if (u.smallWidth && A) return (0, a.H)(t, u, b);
                            if (u.extraSmallWidth && p) return (0, a.H)(t, u, b);
                            if (
                                !(
                                    u.extraLargeWidth ||
                                    u.largeWidth ||
                                    u.mediumWidth ||
                                    u.smallWidth ||
                                    u.extraSmallWidth
                                )
                            ) {
                                if (u.extraLargeHeight && F) return t;
                                if (u.largeHeight && f) return t;
                                if (u.mediumHeight && D) return t;
                                if (u.smallHeight && v) return t;
                                if (u.extraSmallHeight && B) return t;
                            }
                        }
                        return null;
                    };
                (i.defaultProps = {
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
                    (0, n.memo)(i);
            },
            7382: (e, t, u) => {
                'use strict';
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
                'use strict';
                u.d(t, { YN: () => a.Y, ZN: () => n.Z }), u(6010);
                var n = u(1039),
                    a = u(3495);
            },
            1043: (e, t, u) => {
                'use strict';
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
                'use strict';
                var n;
                function a(e, t, u) {
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
                        })(t, u),
                        r = Math.min(n, a);
                    return {
                        extraLarge: r === u.extraLarge.weight,
                        large: r === u.large.weight,
                        medium: r === u.medium.weight,
                        small: r === u.small.weight,
                        extraSmall: r === u.extraSmall.weight,
                        extraLargeWidth: n === u.extraLarge.weight,
                        largeWidth: n === u.large.weight,
                        mediumWidth: n === u.medium.weight,
                        smallWidth: n === u.small.weight,
                        extraSmallWidth: n === u.extraSmall.weight,
                        extraLargeHeight: a === u.extraLarge.weight,
                        largeHeight: a === u.large.weight,
                        mediumHeight: a === u.medium.weight,
                        smallHeight: a === u.small.weight,
                        extraSmallHeight: a === u.extraSmall.weight,
                    };
                }
                u.d(t, { T: () => a }),
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
                'use strict';
                let n, a, r, s, i, o, l;
                u.d(t, { $h: () => s, A2: () => o, E4: () => n, h2: () => r, kK: () => i, sh: () => l }),
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
                            (e.CosmicLootboxCommon = 'cosmic_2024_2');
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
                    })(r || (r = {})),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(l || (l = {}));
            },
            1558: (e, t, u) => {
                'use strict';
                u.d(t, { m9: () => f, L_: () => p, i2: () => F, ry: () => g, pI: () => A, p3: () => d });
                var n = u(6179),
                    a = u.n(n),
                    r = u(4179);
                class s extends a().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? r.B3.GOLD : r.B3.INTEGRAL;
                        const t = r.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                s.defaultProps = { format: 'integral' };
                var i = u(2862);
                const o = [
                        i.E4.Items,
                        i.E4.Equipment,
                        i.E4.Xp,
                        i.E4.XpFactor,
                        i.E4.Blueprints,
                        i.E4.BlueprintsAny,
                        i.E4.Goodies,
                        i.E4.Berths,
                        i.E4.Slots,
                        i.E4.Tokens,
                        i.E4.CrewSkins,
                        i.E4.CrewBooks,
                        i.E4.Customizations,
                        i.E4.CreditsFactor,
                        i.E4.TankmenXp,
                        i.E4.TankmenXpFactor,
                        i.E4.FreeXpFactor,
                        i.E4.BattleToken,
                        i.E4.PremiumUniversal,
                        i.E4.NaturalCover,
                        i.E4.BpCoin,
                        i.E4.BattlePassSelectToken,
                        i.E4.BattlaPassFinalAchievement,
                        i.E4.BattleBadge,
                        i.E4.BonusX5,
                        i.E4.CrewBonusX3,
                        i.E4.NewYearFillers,
                        i.E4.NewYearInvoice,
                        i.E4.EpicSelectToken,
                        i.E4.Comp7TokenWeeklyReward,
                        i.E4.Comp7TokenCouponReward,
                        i.E4.BattleBoosterGift,
                        i.E4.CosmicLootboxCommon,
                        i.E4.CosmicLootboxSilver,
                    ],
                    l = [i.E4.Gold, i.E4.Credits, i.E4.Crystal, i.E4.FreeXp],
                    c = [i.E4.BattlePassPoints],
                    m = [i.E4.PremiumPlus, i.E4.Premium],
                    d = (e) =>
                        o.includes(e)
                            ? i.$h.MULTI
                            : l.includes(e)
                              ? i.$h.CURRENCY
                              : c.includes(e)
                                ? i.$h.NUMBER
                                : m.includes(e)
                                  ? i.$h.PREMIUM_PLUS
                                  : i.$h.STRING,
                    _ = ['engravings', 'backgrounds'],
                    E = ['engraving', 'background'],
                    g = (e, t = i.h2.Small) => {
                        const u = e.name,
                            n = e.type,
                            a = e.value,
                            r = e.icon,
                            s = e.item,
                            o = e.dogTagType,
                            l = ((e) => {
                                switch (e) {
                                    case i.h2.S600x450:
                                        return 'c_600x450';
                                    case i.h2.S400x300:
                                        return 'c_400x300';
                                    case i.h2.S296x222:
                                        return 'c_296x222';
                                    case i.h2.S232x174:
                                        return 'c_232x174';
                                    case i.h2.Big:
                                        return 'c_80x80';
                                    case i.h2.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (u) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}_${a}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}_plus_${a}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}_${a}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${r}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, t) => {
                                    switch (t) {
                                        case i.h2.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case i.h2.Small:
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
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${r}`;
                            case 'dogTagComponents':
                                return ((e, t, u) => {
                                    const n = _[e];
                                    if (n) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(n),
                                            r = a.$dyn(u);
                                        return r ? `${r}` : `${a.$dyn(E[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, t, r);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${r}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${l}.${r}`;
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
                                return `R.images.gui.maps.icons.collectionItems.${l}.${r}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}`;
                        }
                    },
                    A = (e, t, u) => {
                        const n = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            n,
                            u,
                        );
                    },
                    p = (e) => {
                        if (void 0 === e) return null;
                        switch (e) {
                            case i.kK.BATTLE_BOOSTER:
                            case i.kK.BATTLE_BOOSTER_REPLACE:
                                return i.A2.BATTLE_BOOSTER;
                        }
                    },
                    F = (e) => {
                        if (void 0 === e) return null;
                        switch (e) {
                            case i.kK.BATTLE_BOOSTER:
                                return i.sh.BATTLE_BOOSTER;
                            case i.kK.BATTLE_BOOSTER_REPLACE:
                                return i.sh.BATTLE_BOOSTER_REPLACE;
                            case i.kK.BUILT_IN_EQUIPMENT:
                                return i.sh.BUILT_IN_EQUIPMENT;
                            case i.kK.EQUIPMENT_PLUS:
                                return i.sh.EQUIPMENT_PLUS;
                            case i.kK.EQUIPMENT_TROPHY_BASIC:
                                return i.sh.EQUIPMENT_TROPHY_BASIC;
                            case i.kK.EQUIPMENT_TROPHY_UPGRADED:
                                return i.sh.EQUIPMENT_TROPHY_UPGRADED;
                            case i.kK.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                return i.sh.EQUIPMENT_MODERNIZED_UPGRADED_1;
                            case i.kK.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                return i.sh.EQUIPMENT_MODERNIZED_UPGRADED_2;
                            case i.kK.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                return i.sh.EQUIPMENT_MODERNIZED_UPGRADED_3;
                            case i.kK.PROGRESSION_STYLE_UPGRADED_1:
                                return i.sh.PROGRESSION_STYLE_UPGRADED_1;
                            case i.kK.PROGRESSION_STYLE_UPGRADED_2:
                                return i.sh.PROGRESSION_STYLE_UPGRADED_2;
                            case i.kK.PROGRESSION_STYLE_UPGRADED_3:
                                return i.sh.PROGRESSION_STYLE_UPGRADED_3;
                            case i.kK.PROGRESSION_STYLE_UPGRADED_4:
                                return i.sh.PROGRESSION_STYLE_UPGRADED_4;
                        }
                    },
                    f = (e, t) => {
                        if (void 0 === e) return null;
                        switch (t) {
                            case i.$h.MULTI: {
                                const t = Number(e);
                                return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                            }
                            case i.$h.CURRENCY:
                            case i.$h.NUMBER:
                                return a().createElement(s, { format: 'integral', value: Number(e) });
                            case i.$h.PREMIUM_PLUS: {
                                const t = Number(e);
                                return isNaN(t) ? e : null;
                            }
                            default:
                                return e;
                        }
                    };
            },
            8089: (e, t, u) => {
                'use strict';
                u.d(t, { A: () => m });
                var n = u(6179),
                    a = u.n(n),
                    r = u(6483),
                    s = u.n(r),
                    i = u(7727),
                    o = u(7476);
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
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        c.apply(this, arguments)
                    );
                }
                class m extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, i.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, i.G)(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (t) => {
                                e && e(t), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            t = e.caption,
                            u = e.onClick,
                            n = e.goto,
                            r = e.side,
                            i = e.type,
                            m = e.classNames,
                            d = e.onMouseEnter,
                            _ = e.onMouseLeave,
                            E = e.onMouseDown,
                            g = e.onMouseUp,
                            A =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(e, l)),
                            p = s()(o.Z.base, o.Z[`base__${i}`], o.Z[`base__${r}`], null == m ? void 0 : m.base),
                            F = s()(o.Z.icon, o.Z[`icon__${i}`], o.Z[`icon__${r}`], null == m ? void 0 : m.icon),
                            f = s()(o.Z.glow, null == m ? void 0 : m.glow),
                            D = s()(o.Z.caption, o.Z[`caption__${i}`], null == m ? void 0 : m.caption),
                            v = s()(o.Z.goto, null == m ? void 0 : m.goto);
                        return a().createElement(
                            'div',
                            c(
                                {
                                    className: p,
                                    onMouseEnter: this._onMouseEnter(d),
                                    onMouseLeave: this._onMouseLeave(_),
                                    onMouseDown: this._onMouseDown(E),
                                    onMouseUp: this._onMouseUp(g),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                A,
                            ),
                            'info' !== i && a().createElement('div', { className: o.Z.shine }),
                            a().createElement('div', { className: F }, a().createElement('div', { className: f })),
                            a().createElement('div', { className: D }, t),
                            n && a().createElement('div', { className: v }, n),
                        );
                    }
                }
                m.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
            },
            7078: (e, t, u) => {
                'use strict';
                u.d(t, { t: () => o });
                var n = u(6179),
                    a = u.n(n),
                    r = u(2056);
                const s = ['children'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const o = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, s);
                    return a().createElement(
                        r.u,
                        i(
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
                'use strict';
                u.d(t, { l: () => l });
                var n = u(6179),
                    a = u.n(n),
                    r = u(7078),
                    s = u(6373),
                    i = u(2056);
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = a().createElement('div', { className: u }, e);
                    if (t.header || t.body) return a().createElement(s.i, t, n);
                    const l = t.contentId,
                        c = t.args,
                        m = null == c ? void 0 : c.contentId;
                    return l || m
                        ? a().createElement(i.u, o({}, t, { contentId: l || m }), n)
                        : a().createElement(r.t, t, n);
                };
            },
            6373: (e, t, u) => {
                'use strict';
                u.d(t, { i: () => l });
                var n = u(2056),
                    a = u(6179),
                    r = u.n(a);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const o = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            u = e.body,
                            l = e.header,
                            c = e.note,
                            m = e.alert,
                            d = e.args,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, s);
                        const E = (0, a.useMemo)(() => {
                            const e = Object.assign({}, d, { body: u, header: l, note: c, alert: m });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [m, u, l, c, d]);
                        return r().createElement(
                            n.u,
                            i(
                                {
                                    contentId:
                                        ((g = null == d ? void 0 : d.hasHtmlContent),
                                        g ? o.SimpleTooltipHtmlContent('resId') : o.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                _,
                            ),
                            t,
                        );
                        var g;
                    };
            },
            2056: (e, t, u) => {
                'use strict';
                u.d(t, { u: () => l });
                var n = u(7902),
                    a = u(4179),
                    r = u(6179);
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
                const o = (e, t, u = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: a.B0.TOOLTIP,
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
                            a = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            m = e.onMouseDown,
                            d = e.onClick,
                            _ = e.ignoreShowDelay,
                            E = void 0 !== _ && _,
                            g = e.ignoreMouseClick,
                            A = void 0 !== g && g,
                            p = e.decoratorId,
                            F = void 0 === p ? 0 : p,
                            f = e.isEnabled,
                            D = void 0 === f || f,
                            v = e.targetId,
                            B = void 0 === v ? 0 : v,
                            b = e.onShow,
                            C = e.onHide,
                            h = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, s);
                        const w = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, r.useMemo)(() => B || (0, n.F)().resId, [B]),
                            R = (0, r.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (o(u, F, { isMouseEvent: !0, on: !0, arguments: i(a) }, S),
                                    b && b(),
                                    (w.current.isVisible = !0));
                            }, [u, F, a, S, b]),
                            y = (0, r.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        o(u, F, { on: !1 }, S),
                                        w.current.isVisible && C && C(),
                                        (w.current.isVisible = !1);
                                }
                            }, [u, F, S, C]),
                            k = (0, r.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(w.current.prevTarget) && y();
                                    }, 200)));
                            }, []);
                        return (
                            (0, r.useEffect)(() => {
                                const e = w.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', k, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', k, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, r.useEffect)(() => {
                                !1 === D && y();
                            }, [D, y]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', y),
                                    () => {
                                        window.removeEventListener('mouseleave', y), y();
                                    }
                                ),
                                [y],
                            ),
                            D
                                ? (0, r.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((T = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((w.current.timeoutId = window.setTimeout(R, E ? 100 : 400)),
                                                          l && l(e),
                                                          T && T(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  y(), null == c || c(t), null == e || e(t);
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  !1 === A && y(), null == d || d(t), null == e || e(t);
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  !1 === A && y(), null == m || m(t), null == e || e(t);
                                              })(t.props.onMouseDown),
                                          },
                                          h,
                                      ),
                                  )
                                : t
                        );
                        var T;
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
            7515: (e, t, u) => {
                'use strict';
                u.d(t, { u: () => n });
                const n = (e, t, u) => (u < e ? e : u > t ? t : u);
            },
            1856: (e, t, u) => {
                'use strict';
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
                'use strict';
                u.d(t, { U: () => s });
                var n = u(3138);
                function a(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const r = (e) => (0 === e ? window : window.subViews.get(e));
                function s({ initializer: e = !0, rootId: t = 0, getRoot: u = r, context: s = 'model' } = {}) {
                    const i = new Map();
                    function o(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? i.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, u) => {
                            u.forEach((t) => {
                                const u = i.get(t);
                                void 0 !== u && u(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const n = u(t),
                            a = s.split('.').reduce((e, t) => e[t], n);
                        return 'string' != typeof e || 0 === e.length
                            ? a
                            : e.split('.').reduce((e, t) => {
                                  const u = e[t];
                                  return 'function' == typeof u ? u.bind(e) : u;
                              }, a);
                    };
                    return {
                        subscribe: (u, a) => {
                            const r = 'string' == typeof a ? `${s}.${a}` : s,
                                o = n.O.view.addModelObserver(r, t, !0);
                            return i.set(o, u), e && u(l(a)), o;
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
                                                    if ('string' == typeof e) return a(e, t);
                                                    var u = Object.prototype.toString.call(e).slice(8, -1);
                                                    return (
                                                        'Object' === u && e.constructor && (u = e.constructor.name),
                                                        'Map' === u || 'Set' === u
                                                            ? Array.from(e)
                                                            : 'Arguments' === u ||
                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
                                                              ? a(e, t)
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
                                    })(i.keys());
                                !(e = u()).done;

                            )
                                o(e.value, t);
                        },
                        unsubscribe: o,
                    };
                }
            },
            3215: (e, t, u) => {
                'use strict';
                u.d(t, { q: () => o });
                var n = u(4598),
                    a = u(9174),
                    r = u(6179),
                    s = u.n(r),
                    i = u(8246);
                const o = () => (e, t) => {
                    const u = (0, r.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: l, children: c, mocks: m }) {
                            const d = (0, r.useRef)([]),
                                _ = (u, r, s) => {
                                    var o;
                                    const l = i.U(r),
                                        c =
                                            'real' === u
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (o = null == s ? void 0 : s.getter) ? o : () => {},
                                                  }),
                                        m = (e) =>
                                            'mocks' === u ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        _ = (e) => d.current.push(e),
                                        E = e({
                                            mode: u,
                                            readByPath: m,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const r = null != t ? t : m(e),
                                                        s = a.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const r = null != t ? t : m(e),
                                                        s = a.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const n = m(t);
                                                    if (Array.isArray(e)) {
                                                        const r = e.reduce(
                                                            (e, t) => ((e[t] = a.LO.box(n[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, a.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            r[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            r
                                                        );
                                                    }
                                                    {
                                                        const r = e,
                                                            s = Object.entries(r),
                                                            i = s.reduce(
                                                                (e, [t, u]) => ((e[u] = a.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, a.aD)((e) => {
                                                                        s.forEach(([t, u]) => {
                                                                            i[u].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: _,
                                        }),
                                        g = { mode: u, model: E, externalModel: c, cleanup: _ };
                                    return {
                                        model: E,
                                        controls: 'mocks' === u && s ? s.controls(g) : t(g),
                                        externalModel: c,
                                        mode: u,
                                    };
                                },
                                E = (0, r.useRef)(!1),
                                g = (0, r.useState)(o),
                                A = g[0],
                                p = g[1],
                                F = (0, r.useState)(() => _(o, l, m)),
                                f = F[0],
                                D = F[1];
                            return (
                                (0, r.useEffect)(() => {
                                    E.current ? D(_(A, l, m)) : (E.current = !0);
                                }, [m, A, l]),
                                (0, r.useEffect)(() => {
                                    p(o);
                                }, [o]),
                                (0, r.useEffect)(
                                    () => () => {
                                        f.externalModel.dispose(), d.current.forEach((e) => e());
                                    },
                                    [f],
                                ),
                                s().createElement(u.Provider, { value: f }, c)
                            );
                        },
                        () => (0, r.useContext)(u),
                    ];
                };
            },
            7044: (e, t, u) => {
                'use strict';
                u.d(t, { IZ: () => i, e1: () => l, f8: () => o, s2: () => s, s_: () => r }), u(3649);
                var n = u(728),
                    a = u(4179);
                const r = 1e3,
                    s = 86400,
                    i = 7 * s;
                function o(e = 0) {
                    let t = e;
                    const u = Math.trunc(t / s);
                    t -= u * s;
                    const n = Math.trunc(t / 3600);
                    t -= 3600 * n;
                    const a = Math.trunc(t / 60);
                    return (t -= 60 * a), { days: u, hours: n, minutes: a, seconds: t };
                }
                Date.now();
                const l = (e, t, u) => {
                    switch (t) {
                        case n.U.SHORT_DATE:
                            return u ? a.Z5.getDateFormat(e, a.kH.SHORT_FORMAT) : a.cy.getTimeFormat('%d.%m.%y', e, !0);
                        case n.U.SHORT_TIME:
                            return u ? a.Z5.getTimeFormat(e, a.lf.SHORT_FORMAT) : a.cy.getTimeFormat('%I:%M %p', e, !0);
                        case n.U.SHORT_DATE_TIME:
                            return u
                                ? `${a.Z5.getDateFormat(e, a.kH.SHORT_FORMAT)}, ${a.Z5.getTimeFormat(e, a.lf.SHORT_FORMAT)}`
                                : a.cy.getTimeFormat('%d.%m.%y, %I:%M %p', e, !0);
                        case n.U.FULL_DATE:
                            return u ? a.Z5.getDateFormat(e, a.kH.LONG_FORMAT) : a.cy.getTimeFormat('%B %d, %Y', e, !0);
                        case n.U.FULL_DATE_TIME:
                            return u
                                ? `${a.Z5.getDateFormat(e, a.kH.LONG_FORMAT)}, ${a.Z5.getTimeFormat(e, a.lf.SHORT_FORMAT)}`
                                : a.cy.getTimeFormat('%B %d, %Y, %I:%M %p', e, !0);
                        case n.U.MONTH:
                            return a.cy.getTimeFormat('%B', e, !0);
                        case n.U.MONTH_DATE:
                            return a.cy.getTimeFormat('%B %e', e, !0);
                        case n.U.DATE_MONTH:
                            return a.cy.getTimeFormat('%e %B', e, !0);
                        case n.U.MONTH_YEAR:
                            return a.cy.getTimeFormat('%B %Y', e, !0);
                        case n.U.WEEK_DAY:
                            return a.cy.getTimeFormat('%A', e, !0);
                        case n.U.WEEK_DAY_TIME:
                            return u
                                ? `${a.cy.getTimeFormat('%A', e, !0)} ${a.Z5.getTimeFormat(e, a.lf.SHORT_FORMAT)}`
                                : a.cy.getTimeFormat('%A, %I:%M %p', e, !0);
                        case n.U.YEAR:
                            return a.cy.getTimeFormat('%Y', e, !0);
                        case n.U.DATE_YEAR:
                            return a.cy.getTimeFormat('%d, %Y', e, !0);
                    }
                };
            },
            527: (e, t, u) => {
                'use strict';
                u.r(t), u.d(t, { mouse: () => i, onResize: () => r });
                var n = u(2472),
                    a = u(1176);
                const r = (0, n.E)('clientResized'),
                    s = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    i = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, a.R)(!1);
                        }
                        function u() {
                            e.enabled && (0, a.R)(!0);
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
                                : (0, a.R)(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (t, u) => (
                                (t[u] = (function (t) {
                                    return (u) => {
                                        e.listeners += 1;
                                        let a = !0;
                                        const r = `mouse${t}`,
                                            i = s[t]((e) => u([e, 'outside']));
                                        function o(e) {
                                            u([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, o),
                                            n(),
                                            () => {
                                                a &&
                                                    (i(),
                                                    window.removeEventListener(r, o),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (a = !1));
                                            }
                                        );
                                    };
                                })(u)),
                                t
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
                                e.enabled && (0, a.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, a.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => r,
                        getSize: () => a,
                        graphicsQuality: () => s,
                    });
                var n = u(527);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, u) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => n });
            },
            2472: (e, t, u) => {
                'use strict';
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
                'use strict';
                u.d(t, { O: () => a });
                var n = u(5959);
                const a = { view: u(7641), client: n };
            },
            3722: (e, t, u) => {
                'use strict';
                function n(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function a(e, t, u) {
                    return `url(${n(e, t, u)})`;
                }
                u.r(t), u.d(t, { getBgUrl: () => a, getTextureUrl: () => n });
            },
            6112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => a });
                var n = u(2472);
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
            7641: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => h,
                        events: () => r.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => C,
                        getScale: () => A,
                        getSize: () => d,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => B,
                        isFocused: () => D,
                        pxToRem: () => p,
                        remToPx: () => F,
                        resize: () => _,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => v,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => S,
                    });
                var n = u(3722),
                    a = u(6112),
                    r = u(6538),
                    s = u(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function c(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: F(t.x), y: F(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function A() {
                    return viewEnv.getScale();
                }
                function p(e) {
                    return viewEnv.pxToRem(e);
                }
                function F(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function D() {
                    return viewEnv.isFocused();
                }
                function v() {
                    return viewEnv.setEventHandled();
                }
                function B() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function C() {
                    return viewEnv.getShowingStatus();
                }
                const h = Object.keys(a.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
                        {},
                    ),
                    w = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => r });
                const n = ['args'],
                    a = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(t, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, s, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    r = {
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
            4598: (e, t, u) => {
                'use strict';
                function n() {}
                function a(e) {
                    return e;
                }
                function r() {
                    return !1;
                }
                u.d(t, { ZT: () => n, jv: () => r, yR: () => a }), console.log;
            },
            7902: (e, t, u) => {
                'use strict';
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
                'use strict';
                u.d(t, { Z: () => a });
                var n = u(6179);
                const a = (e) => {
                    const t = (0, n.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            8526: (e, t, u) => {
                'use strict';
                u.d(t, { I9: () => o });
                var n = u(3138),
                    a = u(5521),
                    r = (u(4179), u(6179));
                const s = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function i(e = a.n.NONE, t = s, u = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== a.n.NONE)
                            return (
                                window.addEventListener('keydown', r, u),
                                () => {
                                    window.removeEventListener('keydown', r, u);
                                }
                            );
                        function r(a) {
                            if (a.keyCode === e) {
                                if (n.O.view.isEventHandled()) return;
                                n.O.view.setEventHandled(), t(a), u && a.stopPropagation();
                            }
                        }
                    }, [t, e, u]);
                }
                function o(e) {
                    i(a.n.ESCAPE, e);
                }
            },
            5415: (e, t, u) => {
                'use strict';
                u.d(t, { Aq: () => o, GS: () => l, cJ: () => s, fd: () => i });
                var n = u(6179),
                    a = u(7739),
                    r = u(1043);
                let s, i, o;
                !(function (e) {
                    (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = r.j.small.width)] = 'Small'),
                        (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                        (e[(e.Large = r.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge');
                })(s || (s = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.width)] = 'Small'),
                            (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                            (e[(e.Large = r.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge');
                    })(i || (i = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = r.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.height)] = 'Small'),
                            (e[(e.Medium = r.j.medium.height)] = 'Medium'),
                            (e[(e.Large = r.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.height)] = 'ExtraLarge');
                    })(o || (o = {}));
                const l = () => {
                    const e = (0, n.useContext)(a.YN),
                        t = e.width,
                        u = e.height,
                        r = ((e) => {
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
                    return { mediaSize: r, mediaWidth: l, mediaHeight: c, remScreenWidth: t, remScreenHeight: u };
                };
            },
            4419: (e, t, u) => {
                'use strict';
                u.d(t, { y: () => r });
                var n = u(8045),
                    a = u(6179);
                const r = (e, t, u = !0) => {
                    const r = (0, a.useCallback)(
                        (e) => {
                            const u = e[0];
                            t && t(u);
                        },
                        [t],
                    );
                    (0, a.useEffect)(() => {
                        if (!e.current || !u) return;
                        const t = new n.Z((e) => r(e));
                        return (
                            t.observe(e.current),
                            () => {
                                t.disconnect();
                            }
                        );
                    }, [r, u, e]);
                };
            },
            5521: (e, t, u) => {
                'use strict';
                let n, a;
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
            9480: (e, t, u) => {
                'use strict';
                function n(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
                u.d(t, { UI: () => n });
            },
            7727: (e, t, u) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e);
                }
                u.d(t, { G: () => n });
            },
            3649: (e, t, u) => {
                'use strict';
                let n;
                function a(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function r(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const u = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(u, -u)]);
                    });
                }
                u.d(t, { Eg: () => i, Uw: () => _, WU: () => a, uF: () => r, v2: () => n, z4: () => s }),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(n || (n = {}));
                const s = (e) => e.replace(/&nbsp;/g, ' '),
                    i = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    o = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    l = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    c = (e, t, u = n.left) => e.split(t).reduce(u === n.left ? o : l, []),
                    m = (() => {
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
                        return (t) =>
                            t
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    d = ['zh_cn', 'zh_sg', 'zh_tw'],
                    _ = (e, t, u) =>
                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                            u && e in u
                                ? u[e]
                                : ((e, t = n.left) => {
                                      const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                      return d.includes(u)
                                          ? m(e)
                                          : ((e, t = n.left) => {
                                                let u = [];
                                                const a =
                                                        /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                    r = s(e);
                                                return (
                                                    c(r, /( )/, t).forEach((e) => (u = u.concat(c(e, a, n.left)))), u
                                                );
                                            })(e, t);
                                  })(e, t),
                        );
            },
            728: (e, t, u) => {
                'use strict';
                let n;
                u.d(t, { U: () => n }),
                    (function (e) {
                        (e.SHORT_DATE = 'short-date'),
                            (e.SHORT_TIME = 'short-time'),
                            (e.SHORT_DATE_TIME = 'short-date-time'),
                            (e.FULL_DATE = 'full-date'),
                            (e.FULL_DATE_TIME = 'full-date-time'),
                            (e.MONTH = 'month'),
                            (e.MONTH_DATE = 'month-date'),
                            (e.DATE_MONTH = 'date-month'),
                            (e.MONTH_YEAR = 'month-year'),
                            (e.WEEK_DAY = 'week-day'),
                            (e.WEEK_DAY_TIME = 'week-day-time'),
                            (e.YEAR = 'year'),
                            (e.DATE_YEAR = 'date-year');
                    })(n || (n = {}));
            },
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var n = u(3138);
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
                    addCallback(e, t, u = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, u, a);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(r) : (this._views[u] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
                a.__instance = void 0;
                const r = a;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
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
            4179: (e, t, u) => {
                'use strict';
                u.d(t, {
                    Sw: () => r.Z,
                    kH: () => _,
                    B3: () => c,
                    Z5: () => s,
                    lf: () => d,
                    cy: () => i,
                    B0: () => o,
                    ry: () => f,
                });
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
                const a = n;
                var r = u(1358);
                const s = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    i = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    };
                let o;
                var l;
                ((l = o || (o = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE');
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    m = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = u(5521),
                    g = u(3138);
                const A = ['args'];
                function p(e, t, u, n, a, r, s) {
                    try {
                        var i = e[r](s),
                            o = i.value;
                    } catch (e) {
                        return void u(e);
                    }
                    i.done ? t(o) : Promise.resolve(o).then(n, a);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    f = (function () {
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
                                    return new Promise(function (n, a) {
                                        var r = e.apply(t, u);
                                        function s(e) {
                                            p(r, n, a, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            p(r, n, a, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    D = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(t, A);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((n = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    v = () => D(o.CLOSE),
                    B = (e, t) => {
                        e.keyCode === E.n.ESCAPE && t();
                    };
                var b = u(7572);
                const C = a.instance,
                    h = {
                        DataTracker: r.Z,
                        ViewModel: b.Z,
                        ViewEventType: o,
                        NumberFormatType: c,
                        RealFormatType: m,
                        TimeFormatType: d,
                        DateFormatType: _,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => D(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: v,
                        sendClosePopOverEvent: () => D(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            D(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, a = R.invalid('resId'), r) => {
                            const s = g.O.view.getViewGlobalPosition(),
                                i = u.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                m = i.width,
                                d = i.height,
                                _ = {
                                    x: g.O.view.pxToRem(l) + s.x,
                                    y: g.O.view.pxToRem(c) + s.y,
                                    width: g.O.view.pxToRem(m),
                                    height: g.O.view.pxToRem(d),
                                };
                            D(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: F(_),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => B(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            B(e, v);
                        },
                        handleViewEvent: D,
                        onBindingsReady: f,
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
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const a = Object.prototype.toString.call(t[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[n];
                                        u[n] = [];
                                        for (let t = 0; t < a.length; t++) u[n].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[n] = e(t[n]))
                                            : (u[n] = t[n]);
                                }
                            return u;
                        },
                        ClickOutsideManager: C,
                        SystemLocale: s,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = h;
            },
            1504: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => o });
                var n = u(7739),
                    a = u(6179),
                    r = u.n(a),
                    s = u(2849);
                const i = ['children'],
                    o = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, i);
                        return r().createElement(n.ZN, null, r().createElement(s.l, u, t));
                    };
            },
            2849: (e, t, u) => {
                'use strict';
                u.d(t, { l: () => g });
                var n = u(6483),
                    a = u.n(n),
                    r = u(926),
                    s = u.n(r),
                    i = u(6179),
                    o = u.n(i),
                    l = u(5415);
                const c = ['children', 'className'];
                function m() {
                    return (
                        (m =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        m.apply(this, arguments)
                    );
                }
                const d = {
                        [l.fd.ExtraSmall]: '',
                        [l.fd.Small]: s().SMALL_WIDTH,
                        [l.fd.Medium]: `${s().SMALL_WIDTH} ${s().MEDIUM_WIDTH}`,
                        [l.fd.Large]: `${s().SMALL_WIDTH} ${s().MEDIUM_WIDTH} ${s().LARGE_WIDTH}`,
                        [l.fd.ExtraLarge]:
                            `${s().SMALL_WIDTH} ${s().MEDIUM_WIDTH} ${s().LARGE_WIDTH} ${s().EXTRA_LARGE_WIDTH}`,
                    },
                    _ = {
                        [l.Aq.ExtraSmall]: '',
                        [l.Aq.Small]: s().SMALL_HEIGHT,
                        [l.Aq.Medium]: `${s().SMALL_HEIGHT} ${s().MEDIUM_HEIGHT}`,
                        [l.Aq.Large]: `${s().SMALL_HEIGHT} ${s().MEDIUM_HEIGHT} ${s().LARGE_HEIGHT}`,
                        [l.Aq.ExtraLarge]:
                            `${s().SMALL_HEIGHT} ${s().MEDIUM_HEIGHT} ${s().LARGE_HEIGHT} ${s().EXTRA_LARGE_HEIGHT}`,
                    },
                    E = {
                        [l.cJ.ExtraSmall]: '',
                        [l.cJ.Small]: s().SMALL,
                        [l.cJ.Medium]: `${s().SMALL} ${s().MEDIUM}`,
                        [l.cJ.Large]: `${s().SMALL} ${s().MEDIUM} ${s().LARGE}`,
                        [l.cJ.ExtraLarge]: `${s().SMALL} ${s().MEDIUM} ${s().LARGE} ${s().EXTRA_LARGE}`,
                    },
                    g = (e) => {
                        let t = e.children,
                            u = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, c);
                        const r = (0, l.GS)(),
                            s = r.mediaWidth,
                            i = r.mediaHeight,
                            g = r.mediaSize;
                        return o().createElement('div', m({ className: a()(u, d[s], _[i], E[g]) }, n), t);
                    };
            },
            4029: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => n.z });
                var n = u(1504);
            },
            3618: (e, t, u) => {
                'use strict';
                u.d(t, { w: () => _ });
                var n = u(6483),
                    a = u.n(n),
                    r = u(3415),
                    s = u(4419),
                    i = u(6179),
                    o = u.n(i),
                    l = u(8055),
                    c = u(3310),
                    m = u(131),
                    d = u(9053);
                const _ = o().memo(
                    ({
                        text: e,
                        classMix: t,
                        onSizeChanged: u,
                        binding: n,
                        isTooltipEnable: _ = !1,
                        isTruncationAvailable: E = !1,
                        targetId: g,
                        justifyContent: A = d.v2.FlexStart,
                        alignContent: p = d.v2.FlexStart,
                        truncateIdentify: F = d.YA,
                    }) => {
                        const f = (0, i.useRef)(null),
                            D = (0, i.useRef)({ height: 0, width: 0 }),
                            v = (0, i.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                            B = v[0],
                            b = v[1],
                            C = (0, i.useMemo)(() => (0, c.s)(e, n), [n, e]),
                            h = (0, i.useMemo)(() => {
                                if (_ && B.isTruncated)
                                    return {
                                        args: { text: e, stringifyKwargs: n ? JSON.stringify(n) : '' },
                                        contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                        targetId: g,
                                    };
                            }, [n, _, g, e, B.isTruncated]),
                            w = (0, i.useCallback)(
                                (e) => {
                                    (D.current.width = e.contentRect.width), (D.current.height = e.contentRect.height);
                                    const t = (0, m.T)(f, C, D.current, F),
                                        n = t[0],
                                        a = t[1];
                                    b({ elementList: n, isTruncated: a, isTruncateFinished: !0 }), u && u(a);
                                },
                                [u, F, C],
                            ),
                            S = (0, i.useMemo)(() => ({ justifyContent: A, alignContent: p }), [p, A]);
                        return (
                            (0, s.y)(f, w, E),
                            o().createElement(
                                'div',
                                {
                                    className: a()(
                                        l.Z.base,
                                        t,
                                        l.Z.base__zeroPadding,
                                        E && l.Z.base__isTruncationAvailable,
                                    ),
                                    style: S,
                                },
                                o().createElement('div', { className: l.Z.unTruncated, ref: f }, C),
                                o().createElement(
                                    r.l,
                                    { tooltipArgs: h },
                                    o().createElement(
                                        'div',
                                        {
                                            className: a()(
                                                l.Z.truncated,
                                                !B.isTruncateFinished && E && l.Z.truncated__hide,
                                            ),
                                            style: S,
                                        },
                                        B.isTruncateFinished && E ? B.elementList : C,
                                    ),
                                ),
                            )
                        );
                    },
                );
            },
            3310: (e, t, u) => {
                'use strict';
                u.d(t, { s: () => m });
                var n = u(3649),
                    a = u(6799),
                    r = u(6960),
                    s = u(9053);
                const i = (e) => {
                        const t = /[\s\u002d]/g;
                        let u = t.exec(e);
                        if (!u) return [e];
                        const n = [];
                        let a = 0;
                        for (; u; ) n.push(e.slice(a, t.lastIndex)), (a = t.lastIndex), (u = t.exec(e));
                        return a !== e.length && n.push(e.slice(a)), n;
                    },
                    o = (e, t = '') => {
                        const u = [];
                        return (
                            (0, r.Z)(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    u.push({ blockType: s.kH.Word, colorTag: t, childList: i(e) });
                                },
                                (e) => {
                                    const n = e[0],
                                        a = s.aF[n.charAt(0)];
                                    a === s.kH.LineBreak
                                        ? u.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: s.kH.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let u = 0; u < e.length - 1; u++)
                                                      t.push({
                                                          blockType: s.kH.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(n),
                                          )
                                        : u.push({ blockType: a, colorTag: t, childList: [n] });
                                },
                            ),
                            u
                        );
                    },
                    l = (e, t, u = '') => {
                        const n = [];
                        return (
                            (0, r.Z)(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    n.push(...o(e, u));
                                },
                                (e) => {
                                    const a = e[1],
                                        r = void 0 === t[a] ? e[0] : t[a];
                                    'string' == typeof r || 'number' == typeof r
                                        ? n.push(...o(String(r), u))
                                        : n.push({ blockType: s.kH.Binding, colorTag: u, childList: [r] });
                                },
                            ),
                            n
                        );
                    },
                    c = (e, t) => {
                        if (!e) return [t];
                        const u = [],
                            n = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === s.kH.NoBreakWrapper) e.childList.push(n), u.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && u.push(e),
                                u.push({ blockType: s.kH.NoBreakWrapper, colorTag: '', childList: [t, n] });
                        }
                        return t.childList.length > 0 && u.push(t), u;
                    },
                    m = (e, t = {}) => {
                        if (!e) return [];
                        const u = ((e) => {
                            const t = [];
                            let u = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === s.kH.NoBreakSymbol
                                        ? ((u = !0), t.push(...c(t.pop(), e)))
                                        : (u ? t.push(...c(t.pop(), e)) : t.push(e), (u = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t) => {
                                const u = [];
                                return (
                                    (0, r.Z)(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (e) => {
                                            u.push(...l(e, t));
                                        },
                                        (e) => {
                                            u.push(...l(e[2], t, e[1]));
                                        },
                                    ),
                                    u
                                );
                            })((0, n.Eg)((0, n.z4)(e)), t),
                        );
                        return (0, a.w)(u);
                    };
            },
            6799: (e, t, u) => {
                'use strict';
                u.d(t, { w: () => s });
                var n = u(597),
                    a = u(9053);
                const r = (e, t, u) => {
                        const s = [];
                        return (
                            e.childList.forEach((i, o) => {
                                const l = `${u}_${o}`;
                                if ((0, a.dz)(i)) {
                                    const e = i,
                                        t = e.blockType,
                                        u = n.IY[t],
                                        a = r(e, u, l);
                                    s.push(...a);
                                } else s.push(t({ elementList: [i], textBlock: e, key: l }));
                            }),
                            s
                        );
                    },
                    s = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, u) => {
                                t.push(
                                    ...((e, t) => {
                                        const u = [],
                                            s = e.blockType,
                                            i = n.IY[s],
                                            o = r(e, i, t);
                                        return (
                                            s === a.kH.NoBreakWrapper
                                                ? u.push(i({ elementList: o, textBlock: e, key: `${t}` }))
                                                : u.push(...o),
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
                'use strict';
                u.d(t, { Z: () => n });
                const n = (e, t, u, n) => {
                    let a = t.exec(e),
                        r = 0;
                    for (; a; ) r !== a.index && u(e.slice(r, a.index)), n(a), (r = t.lastIndex), (a = t.exec(e));
                    r !== e.length && u(e.slice(r));
                };
            },
            131: (e, t, u) => {
                'use strict';
                u.d(t, { T: () => c });
                var n = u(6179),
                    a = u.n(n),
                    r = u(9053);
                const s = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    i = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    o = (e, t, u) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const n = i(e, t),
                            a = e.textContent.length,
                            r = e.offsetWidth / a,
                            s = Math.ceil(n / r);
                        if (n > 0) {
                            const n = Math.floor((t - e.offsetLeft) / r);
                            return n >= u ? [!0, u + s] : [!1, n];
                        }
                        const o = Math.max(u + s, 0);
                        return a < o ? [!1, 0] : [!0, o];
                    },
                    l = (e, t, u, n, s, i) => {
                        let c = -1,
                            m = null;
                        for (let d = u; d >= 0; d--) {
                            const u = e[d],
                                _ = Number(e[d].getAttribute(r.bF));
                            if (_ === r.kH.LineBreak || _ === r.kH.NewLine || _ === r.kH.Binding) continue;
                            const E = u.textContent || '';
                            if (!(u.childElementCount > 1)) {
                                const e = o(u, n, s),
                                    r = e[0],
                                    l = e[1];
                                if (!r) {
                                    l > 0 && (s -= l);
                                    continue;
                                }
                                const _ = E.slice(0, E.length - l) + i,
                                    g = t[d];
                                (m = a().cloneElement(g, g.props, _)), (c = d);
                                break;
                            }
                            {
                                const e = u.children,
                                    r = t[d],
                                    o = r.props.children,
                                    _ = l(e, o, e.length - 1, n, s, i),
                                    g = _[0],
                                    A = _[1];
                                if (!(g < 0)) {
                                    const e = o.slice(0, g);
                                    (m = a().cloneElement(r, r.props, e, A)), (c = d);
                                    break;
                                }
                                s -= E.length;
                            }
                        }
                        return [c, m];
                    },
                    c = (e, t, u, n = r.YA) => {
                        const a = [...t],
                            o = e.current;
                        if (!o) return [a, !1];
                        const c = u.height,
                            m = u.width,
                            d = o.lastElementChild;
                        if (!s(d, c) && i(d, m) <= 0) return [a, !1];
                        const _ = o.children,
                            E = ((e, t) => {
                                let u = 0,
                                    n = e.length - 1;
                                for (; n - u >= 0; ) {
                                    const a = u + Math.ceil(0.5 * (n - u));
                                    s(e[a], t) ? (n = a - 1) : (u = a + 1);
                                }
                                return u - 1;
                            })(_, c);
                        if (E < 0) return [a, !1];
                        const g = l(_, a, E, m, n.length, n),
                            A = g[0],
                            p = g[1];
                        return p && (a.splice(A, 1, p), a.splice(A + 1)), [a, !0];
                    };
            },
            9053: (e, t, u) => {
                'use strict';
                let n, a, r;
                u.d(t, { YA: () => i, aF: () => l, bF: () => o, dz: () => s, kH: () => n, v2: () => a }),
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
                    })(a || (a = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(r || (r = {}));
                const s = (e) => void 0 !== e.childList,
                    i = '...',
                    o = 'data-block-type',
                    l = { [r.NBSP]: n.NoBreakSymbol, [r.ZWNBSP]: n.NoBreakSymbol, [r.NEW_LINE]: n.LineBreak };
            },
            597: (e, t, u) => {
                'use strict';
                u.d(t, { IY: () => c });
                var n = u(6179),
                    a = u.n(n),
                    r = u(9053),
                    s = u(9627),
                    i = u(7629);
                const o = (e) => ({ color: `#${e}` }),
                    l = ({ elementList: e, textBlock: t, key: u }) => {
                        const n = t.colorTag;
                        return n
                            ? s.Z[n]
                                ? a().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: s.Z[n] },
                                      e,
                                  )
                                : a().createElement('span', { key: u, 'data-block-type': t.blockType, style: o(n) }, e)
                            : a().createElement('span', { key: u, 'data-block-type': t.blockType }, e);
                    },
                    c = {
                        [r.kH.Word]: l,
                        [r.kH.NoBreakSymbol]: l,
                        [r.kH.Binding]: ({ elementList: e, textBlock: t, key: u }) =>
                            a().createElement(
                                'span',
                                { key: u, 'data-block-type': t.blockType },
                                e.map((e) => a().createElement(a().Fragment, { key: u }, e)),
                            ),
                        [r.kH.LineBreak]: ({ key: e }) =>
                            a().createElement('span', {
                                key: e,
                                'data-block-type': r.kH.LineBreak,
                                className: i.Z.lineBreak,
                            }),
                        [r.kH.NewLine]: ({ elementList: e, key: t }) =>
                            a().createElement(
                                'span',
                                { key: t, 'data-block-type': r.kH.NewLine, className: i.Z.newLine },
                                e,
                            ),
                        [r.kH.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            a().createElement(
                                'span',
                                { key: t, 'data-block-type': r.kH.NoBreakWrapper, className: i.Z.noBreakWrapper },
                                e,
                            ),
                    };
            },
            3458: (e, t, u) => {
                'use strict';
                let n;
                u.d(t, { Z0: () => a, in: () => n, sx: () => r }),
                    (function (e) {
                        (e[(e.NonSet = 0)] = 'NonSet'),
                            (e[(e.Debug = 10)] = 'Debug'),
                            (e[(e.Info = 20)] = 'Info'),
                            (e[(e.Warning = 30)] = 'Warning');
                    })(n || (n = {}));
                const a = 'tooltip_watched',
                    r = 2;
                let s;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown');
                })(s || (s = {}));
            },
            5983: (e, t, u) => {
                'use strict';
                u.d(t, { D9: () => n, RM: () => a, ob: () => r });
                const n = 'epic_battle';
                let a, r, s;
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
                    })(r || (r = {})),
                    (function (e) {
                        (e.Click = 'click'), (e.Close = 'close');
                    })(s || (s = {}));
            },
            405: (e, t, u) => {
                'use strict';
                u.d(t, { Y: () => i });
                var n = u(6179),
                    a = u(3458),
                    r = u(5983),
                    s = u(1943);
                const i = (e, t, u, i) => {
                    const o = (0, s.k2)(r.D9),
                        l = o[0],
                        c = o[1];
                    return [
                        (0, n.useCallback)(() => l(a.Z0), [l]),
                        (0, n.useCallback)(
                            () => c({ action: a.Z0, timeLimit: a.sx, item: e, parentScreen: t, itemState: u, info: i }),
                            [c, e, t, u, i],
                        ),
                    ];
                };
            },
            1943: (e, t, u) => {
                'use strict';
                u.d(t, { k2: () => i });
                var n = u(6179),
                    a = u(3458);
                const r = () => Date.now(),
                    s = (e, t) => {
                        const u = ((e, t) => {
                                const u = (0, n.useCallback)(
                                    (u, n = a.in.Info, r) => {
                                        r || (r = {}),
                                            Object.keys(r).length >= 200 ||
                                                window.uiLoggerModel.log({
                                                    feature: e,
                                                    group: t,
                                                    action: u,
                                                    logLevel: n,
                                                    params: JSON.stringify(r),
                                                });
                                    },
                                    [e, t],
                                );
                                return (e, t, n) => u(e, t, n);
                            })(e, t),
                            s = (0, n.useRef)(new Map()),
                            i = (0, n.useRef)(new Map()),
                            o = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = s.current.get(e);
                                    (void 0 !== t && t > 0) || s.current.set(e, r());
                                },
                                [s],
                            ),
                            l = (0, n.useCallback)(() => {
                                s.current.clear(), i.current.clear();
                            }, [s, i]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== s.current.get(e) &&
                                        void 0 === i.current.get(e) &&
                                        i.current.set(e, r());
                                },
                                [s, i],
                            ),
                            m = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = s.current.get(e);
                                    if (void 0 === t) return;
                                    const u = i.current.get(e);
                                    if (void 0 === u) return;
                                    i.current.delete(e);
                                    const n = r() - u;
                                    s.current.set(e, t + n);
                                },
                                [s, i],
                            ),
                            d = (0, n.useCallback)(
                                (e, t = 0, n, a) => {
                                    const o = s.current.get(e);
                                    if (void 0 === o) return;
                                    void 0 !== i.current.get(e) && m(e), s.current.delete(e);
                                    const l = (r() - o) / 1e3;
                                    l <= t ||
                                        ((a = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(a, l)),
                                        u(e, n, a));
                                },
                                [s, i, u, m],
                            );
                        return [(e) => o(e), (e, t, u, n) => d(e, t, u, n), () => l(), (e) => c(e), (e) => m(e)];
                    },
                    i = (e) => {
                        const t = s(e, 'metrics'),
                            u = t[0],
                            a = t[1],
                            r = t[2],
                            i = t[3],
                            o = t[4],
                            l = (0, n.useCallback)(
                                (e) => {
                                    const t = e.action,
                                        u = e.timeLimit,
                                        n = e.logLevel;
                                    a(
                                        t,
                                        u,
                                        n,
                                        (({ partnerID: e, item: t, parentScreen: u, itemState: n, info: a }) => ({
                                            item: t,
                                            partnerID: e || null,
                                            parent_screen: u || null,
                                            item_state: n || null,
                                            additional_info: a || null,
                                        }))(e),
                                    );
                                },
                                [a],
                            );
                        return [(e) => u(e), (e) => l(e), () => r(), (e) => i(e), (e) => o(e)];
                    };
            },
            5852: (e, t, u) => {
                'use strict';
                var n = u(4179),
                    a = u(4029),
                    r = u(6179),
                    s = u.n(r),
                    i = u(493),
                    o = u.n(i),
                    l = u(3215),
                    c = u(9174);
                const m = (0, l.q)()(
                        ({ observableModel: e }) => ({
                            root: e.object(),
                            subViewActive: c.LO.box(
                                window.subViews.ids().includes(R.views.frontline.lobby.ProgressView('resId')),
                            ),
                        }),
                        ({ cleanup: e, model: t }) => {
                            const u = (function (e) {
                                    const t = {};
                                    for (const u in e)
                                        if (Object.prototype.hasOwnProperty.call(e, u)) {
                                            const n = e[u];
                                            t[u] = (0, c.aD)(n);
                                        }
                                    return t;
                                })({ updateSubViewId: (e) => t.subViewActive.set(e) }),
                                n = (e) => {
                                    e.includes(R.views.frontline.lobby.ProgressView('resId')) && u.updateSubViewId(!0);
                                },
                                a = (e) => {
                                    e.includes(R.views.frontline.lobby.ProgressView('resId')) && u.updateSubViewId(!1);
                                },
                                r = window.subViews.addChildChangedCallback(
                                    R.views.frontline.lobby.ProgressView('resId'),
                                );
                            return (
                                e(() => {
                                    engine.off('subViews.onAdded', n),
                                        engine.off('subViews.onRemoved', a),
                                        window.subViews.removeChildChangedCallback(r);
                                }),
                                engine.on('subViews.onAdded', n),
                                engine.on('subViews.onRemoved', a),
                                {}
                            );
                        },
                    ),
                    d = m[0],
                    _ = m[1];
                var E = u(6483),
                    g = u.n(E),
                    A = u(8089),
                    p = u(1856),
                    F = u(7030);
                const f = {
                        base: 'Frame_base_af',
                        base__small: 'Frame_base__small_f0',
                        base__medium: 'Frame_base__medium_05',
                        border: 'Frame_border_17',
                        border__top: 'Frame_border__top_f7',
                        border__bottom: 'Frame_border__bottom_52',
                        arrow: 'Frame_arrow_c3',
                    },
                    D = s().forwardRef(function ({ classNames: e, arrowRef: t, size: u = 'medium', className: n }, a) {
                        return s().createElement(
                            'div',
                            { className: g()(f.base, f[`base__${u}`], n), ref: a },
                            s().createElement('div', {
                                className: g()(
                                    f.border,
                                    f.border__top,
                                    null == e ? void 0 : e.border,
                                    null == e ? void 0 : e.borderTop,
                                ),
                            }),
                            s().createElement('div', {
                                className: g()(
                                    f.border,
                                    f.border__bottom,
                                    null == e ? void 0 : e.border,
                                    null == e ? void 0 : e.borderBottom,
                                ),
                            }),
                            s().createElement('div', { className: g()(f.arrow, null == e ? void 0 : e.arrow), ref: t }),
                        );
                    });
                var v = u(7727);
                const B = {
                        base: 'Tab_base_cd',
                        base__small: 'Tab_base__small_bf',
                        base__medium: 'Tab_base__medium_96',
                        base__active: 'Tab_base__active_7e',
                        highlight: 'Tab_highlight_b6',
                        icon: 'Tab_icon_28',
                        icon__small: 'Tab_icon__small_48',
                        icon__medium: 'Tab_icon__medium_73',
                        notification: 'Tab_notification_86',
                        notification__symbol: 'Tab_notification__symbol_9b',
                        notification__small: 'Tab_notification__small_92',
                        notification__dot: 'Tab_notification__dot_51',
                        notification__medium: 'Tab_notification__medium_e6',
                        notification__large: 'Tab_notification__large_6b',
                    },
                    b = { mouseEnter: 'highlight', click: 'play' },
                    C = s().forwardRef(function (
                        {
                            id: e,
                            isActive: t,
                            className: u,
                            classNames: n,
                            sounds: a = b,
                            notification: r,
                            icon: i,
                            size: o,
                            additionContent: l,
                            onClick: c,
                            onMouseEnter: m,
                            onMouseLeave: d,
                            WrapperElement: _,
                        },
                        E,
                    ) {
                        const A = (e, u) => {
                                !t && a[u] && (0, v.G)(a[u]);
                            },
                            p = s().createElement(
                                'div',
                                {
                                    className: g()(
                                        B.base,
                                        B[`base__${o}`],
                                        t && g()(B.base__active, null == n ? void 0 : n.activeTab),
                                        u,
                                    ),
                                    onClick: ((e) => () => {
                                        A(0, 'click'), null == c || c(e);
                                    })(e),
                                    onMouseEnter: ((e) => () => {
                                        A(0, 'mouseEnter'), null == m || m(e);
                                    })(e),
                                    onMouseLeave: ((e) => () => {
                                        A(0, 'mouseLeave'), null == d || d(e);
                                    })(e),
                                    ref: t ? E : null,
                                },
                                s().createElement('div', {
                                    className: g()(B.highlight, null == n ? void 0 : n.highlight),
                                }),
                                'function' == typeof i && o
                                    ? i(o)
                                    : s().createElement('div', {
                                          className: g()(B.icon, B[`icon__${o}`], null == n ? void 0 : n.icon),
                                          style: { backgroundImage: `url(${i})` },
                                      }),
                                l && l({ id: e, isActive: t, size: o }),
                                r &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: g()(
                                                B.notification,
                                                B[`notification__${r.type}`],
                                                r.size ? B[`notification__${r.size}`] : B.notification__medium,
                                                null == n ? void 0 : n.notification,
                                            ),
                                        },
                                        'dot' !== r.type && r.value,
                                    ),
                            );
                        return _ ? s().createElement(_, { key: e, id: e }, p) : p;
                    }),
                    h = {
                        base: 'VerticalTabs_base_41',
                        title: 'VerticalTabs_title_8c',
                        group: 'VerticalTabs_group_08',
                        group__small: 'VerticalTabs_group__small_69',
                        group__medium: 'VerticalTabs_group__medium_68',
                    };
                var w = u(3138);
                const S = s().memo(function ({
                    active: e,
                    tabs: t,
                    sounds: u,
                    className: n,
                    classNames: a,
                    size: i = 'medium',
                    additionContent: o,
                    onClick: l,
                    onMouseEnter: c,
                    onMouseLeave: m,
                    WrapperElement: d,
                }) {
                    const _ = (0, r.useRef)(null),
                        E = (0, r.useRef)(null),
                        A = (0, r.useRef)(null),
                        f = (0, r.useRef)(null),
                        v = (0, F.useSpring)(() => ({
                            marginLeft: 0,
                            onChange: (e) => {
                                const t = _.current;
                                t && (t.style.marginLeft = `${e.value.marginLeft}rem`);
                            },
                        }))[1],
                        B = (0, F.useSpring)(() => ({
                            opacity: 0,
                            onChange: (e) => {
                                const t = _.current;
                                t && (t.style.opacity = `${e.value.opacity}`);
                            },
                        }))[1],
                        b = (0, F.useSpring)(() => ({
                            position: 0,
                            onChange: (e) => {
                                const t = E.current;
                                t && (t.style.transform = `translateY(${e.value.position / w.O.view.getScale()}rem)`);
                            },
                            onStart: () => {
                                v.start({ from: { marginLeft: 12 }, to: { marginLeft: 0 }, config: { duration: 50 } }),
                                    B.start({ from: { opacity: 1 }, to: { opacity: 0 }, config: { duration: 50 } });
                            },
                            onRest: () => {
                                v.start({ from: { marginLeft: 0 }, to: { marginLeft: 12 }, config: { duration: 150 } }),
                                    B.start({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 150 } });
                            },
                        }))[1],
                        S = (0, r.useCallback)((e) => {
                            null !== A.current &&
                                null !== f.current &&
                                e(A.current.getBoundingClientRect().top - f.current.getBoundingClientRect().top);
                        }, []);
                    var R, y;
                    return (
                        (0, r.useEffect)(() => {
                            S((e) => {
                                b.start({ position: e, config: { duration: 200 } });
                            });
                        }, [b, e, S]),
                        (0, r.useEffect)(
                            () =>
                                (0, p.v)(() => {
                                    S((e) => {
                                        b.start({ position: e, immediate: !0 });
                                    });
                                }),
                            [b, S, i],
                        ),
                        (R = () => {
                            S((e) => {
                                b.start({ position: e, config: { duration: 200 } });
                            });
                        }),
                        (y = [b, S]),
                        (0, r.useEffect)(() => {
                            let e = () => {};
                            const t = () => {
                                e(), (e = (0, p.v)(R));
                            };
                            return (
                                window.addEventListener('resize', t),
                                () => {
                                    e(), window.removeEventListener('resize', t);
                                }
                            );
                        }, y),
                        s().createElement(
                            'div',
                            { className: g()(h.base, n), ref: f },
                            t.map(({ id: t, items: n, title: r, groupClassNames: _ }) =>
                                s().createElement(
                                    'div',
                                    { key: t, className: g()(h.group, h[`group__${i}`], null == _ ? void 0 : _.group) },
                                    r &&
                                        s().createElement(
                                            'div',
                                            { className: g()(h.title, null == _ ? void 0 : _.title) },
                                            r,
                                        ),
                                    n.map(({ id: t, icon: n, notification: r }) =>
                                        s().createElement(C, {
                                            key: t,
                                            id: t,
                                            icon: n,
                                            notification: r,
                                            ref: A,
                                            sounds: u,
                                            isActive: e === t,
                                            size: i,
                                            className: null == a ? void 0 : a.tab,
                                            classNames: a,
                                            additionContent: o,
                                            onMouseEnter: c,
                                            onMouseLeave: m,
                                            onClick: l,
                                            WrapperElement: d,
                                        }),
                                    ),
                                ),
                            ),
                            s().createElement(D, {
                                arrowRef: _,
                                ref: E,
                                size: i,
                                className: null == a ? void 0 : a.frame,
                                classNames: a,
                            }),
                        )
                    );
                });
                u(7044);
                var y = u(7902);
                const k = (e, t) => e.split('.').reduce((e, t) => e && e[t], t);
                var T = u(6536);
                const N = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    x = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    M = n.Sw.instance;
                let L;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(L || (L = {}));
                const P = (e = 'model', t = L.Deep) => {
                    const u = (0, r.useState)(0),
                        n = (u[0], u[1]),
                        a = (0, r.useMemo)(() => (0, y.F)(), []),
                        s = a.caller,
                        i = a.resId,
                        o = (0, r.useMemo)(
                            () => (window.__feature && window.__feature !== s ? `subViews.${s}.${e}` : e),
                            [s, e],
                        ),
                        l = (0, r.useState)(() =>
                            ((e) => {
                                const t = k(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return N(t) ? t.value : t;
                            })(
                                ((e) =>
                                    ((e, t) =>
                                        e.split('.').reduce((e, t) => {
                                            const u = k(`${e}.${t}`, window);
                                            return N(u) ? ((e, t) => `${e}.${t}.value`)(e, t) : `${e}.${t}`;
                                        }))(e))(o),
                            ),
                        ),
                        c = l[0],
                        m = l[1],
                        d = (0, r.useRef)(-1);
                    return (
                        (0, T.Z)(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? L.Deep : L.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== L.None)
                            ) {
                                const u = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        t === L.Deep
                                            ? (e === c && n((e) => e + 1), m(e))
                                            : m(Object.assign([], e));
                                    },
                                    a = ((e) => {
                                        const t = ((e) => {
                                                const t = (0, y.F)(),
                                                    u = t.caller,
                                                    n = t.resId,
                                                    a =
                                                        window.__feature && window.__feature !== u && u
                                                            ? `subViews.${u}`
                                                            : '';
                                                return { modelPrefix: a, modelPath: x(a, ''), resId: n };
                                            })(),
                                            u = t.modelPrefix,
                                            n = e.split('.');
                                        if (n.length > 0) {
                                            const e = [n[0]];
                                            return (
                                                n.reduce((t, n) => {
                                                    const a = k(x(u, `${t}.${n}`), window);
                                                    return N(a)
                                                        ? (e.push(a.id), `${t}.${n}.value`)
                                                        : (e.push(n), `${t}.${n}`);
                                                }),
                                                e.reduce((e, t) => e + '.' + t)
                                            );
                                        }
                                        return '';
                                    })(e);
                                d.current = M.addCallback(a, u, i, t === L.Deep);
                            }
                        }),
                        (0, r.useEffect)(() => {
                            if (t !== L.None)
                                return () => {
                                    M.removeCallback(d.current, i);
                                };
                        }, [i, t]),
                        c
                    );
                };
                n.Sw.instance;
                var I = u(8526),
                    O = u(5415),
                    H = u(5983),
                    U = u(8154);
                const $ = R.strings.fl_common.tab,
                    W = (0, r.memo)(({ children: e, id: t }) => {
                        const u = P('model', L.None).tabs,
                            n = (0, r.useMemo)(() => {
                                const e = u.map(({ value: e }) => e).find((e) => e.id === t);
                                if (e) {
                                    const t = $.$dyn(e.type);
                                    return t
                                        ? {
                                              item: 'frontline_tab_tooltip',
                                              parentScreen: H.RM.ContainerView,
                                              info: e.type,
                                              header: t.$dyn('name'),
                                              body: t.$dyn('description'),
                                          }
                                        : null;
                                }
                                return null;
                            }, [t, u]);
                        return n ? s().createElement(U.l, n, e) : e;
                    });
                var z = u(3403),
                    V = u(2362),
                    G = u(6783),
                    j = u(5660);
                const Y = ({ message: e, className: t, classNames: u }) =>
                    s().createElement(
                        'div',
                        { className: g()('Spinner_base_87', t) },
                        e &&
                            s().createElement(
                                'div',
                                { className: g()('Spinner_caption_cf', null == u ? void 0 : u.caption) },
                                e,
                            ),
                        s().createElement('div', { className: g()('Spinner_gear_c4', null == u ? void 0 : u.gear) }),
                        s().createElement('div', { className: g()('Spinner_logo_bf', null == u ? void 0 : u.logo) }),
                    );
                var Z = u(3457);
                const q = ({ errorBtnLabel: e, errorBtnClickHandler: t, errorMessage: u }) =>
                    s().createElement(
                        'div',
                        { className: 'Error_base_46' },
                        s().createElement('div', { className: 'Error_alertIcon_04' }),
                        s().createElement('div', { className: 'Error_errorCaption_f2' }, u),
                        s().createElement(Z.u5, { size: Z.qE.medium, mixClass: 'Error_button_cd', onClick: t }, e),
                    );
                q.defaultProps = { errorBtnLabel: '', errorMessage: '' };
                const X = ({
                    message: e,
                    isError: t,
                    errorMessage: u,
                    errorBtnLabel: n,
                    errorBtnClickHandler: a,
                    overlayAlpha: i,
                }) => {
                    const o = s().createRef();
                    return (
                        (0, r.useEffect)(() => {
                            const e = o.current;
                            e && i && (e.style.opacity = i);
                        }, [o, i]),
                        s().createElement(
                            'div',
                            { className: 'Waiting_base_c5' },
                            s().createElement('div', { className: 'Waiting_blackOverlay_55', ref: o }),
                            t
                                ? s().createElement(q, { errorBtnLabel: n, errorMessage: u, errorBtnClickHandler: a })
                                : s().createElement(Y, { message: e }),
                        )
                    );
                };
                X.defaultProps = {
                    isError: !1,
                    message: '',
                    overlayAlpha: '0.8',
                    errorBtnLabel: R.strings.dialogs.disconnected.cancel(),
                    errorMessage: '',
                };
                var K = u(4598);
                const Q = (0, r.memo)(() =>
                        s().createElement(
                            'div',
                            { className: 'Loader_base_d7' },
                            s().createElement(X, {
                                errorBtnClickHandler: K.ZT,
                                message: R.strings.fl_common.loading(),
                                overlayAlpha: '0.5',
                            }),
                        ),
                    ),
                    J = {
                        [G.B]: s().createElement(G.t, null),
                        [j.o]: s().createElement(j.M, null),
                        [V.F]: s().createElement(V.D, null),
                    },
                    ee = (0, z.Pi)(({ resId: e, className: t }) => {
                        const u = _().model.subViewActive.get();
                        if (!J[e]) throw new Error('View with specified id not found. ' + e);
                        return s().createElement(
                            'div',
                            { className: g()('ViewMapper_base_71', t) },
                            u ? J[e] : s().createElement(Q, null),
                        );
                    }),
                    te = { notification: { type: 'dot' } },
                    ue = () => {
                        const e = (0, O.GS)().mediaSize,
                            t = (0, r.useRef)(new Set()),
                            u = P('model', L.Shallow),
                            n = u.currentTabId,
                            a = u.onTabChange,
                            i = u.onClose;
                        t.current.add(n);
                        const o = P('model.tabs', L.Shallow),
                            l = (0, r.useCallback)((e) => a({ tabId: e }), [a]),
                            c = (0, r.useCallback)(() => i(), [i]);
                        (0, I.I9)(c);
                        const m = (0, r.useMemo)(
                            () => [
                                {
                                    id: 0,
                                    items: o.map(({ value: e }) => {
                                        const t = {
                                            id: e.id,
                                            icon: R.images.frontline.gui.maps.icons.tabs.c_64x64.$dyn(e.type),
                                        };
                                        return e.isHighlighted && Object.assign(t, te), t;
                                    }),
                                },
                            ],
                            [o],
                        );
                        return s().createElement(
                            'div',
                            { className: 'FrontlineContainerViewApp_base_ee' },
                            s().createElement(
                                'div',
                                { className: 'FrontlineContainerViewApp_closeButton_35' },
                                s().createElement(A.A, {
                                    caption: R.strings.fl_common.button.close(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: c,
                                }),
                            ),
                            s().createElement(
                                'div',
                                { className: 'FrontlineContainerViewApp_tabs_c9' },
                                s().createElement(S, {
                                    tabs: m,
                                    size: e >= O.cJ.Small ? 'medium' : 'small',
                                    active: n,
                                    onClick: l,
                                    WrapperElement: W,
                                }),
                            ),
                            s().createElement(
                                'div',
                                { className: 'FrontlineContainerViewApp_content_85' },
                                o.map(({ value: e }) =>
                                    s().createElement(
                                        'div',
                                        {
                                            key: e.id,
                                            className: g()(
                                                'FrontlineContainerViewApp_tabContent_4c',
                                                e.id === n && 'FrontlineContainerViewApp_tabContent__visible_3f',
                                            ),
                                        },
                                        t.current.has(e.id) &&
                                            s().createElement(ee, {
                                                resId: e.resId,
                                                className: 'FrontlineContainerViewApp_subView_df',
                                            }),
                                    ),
                                ),
                            ),
                        );
                    };
                engine.whenReady.then(() => {
                    o().render(
                        s().createElement(a.z, null, s().createElement(d, null, s().createElement(ue, null))),
                        document.getElementById('root'),
                    );
                });
            },
            2362: (e, t, u) => {
                'use strict';
                u.d(t, { F: () => Qe, D: () => Je });
                var n = {};
                u.r(n),
                    u.d(n, {
                        Area: () => P,
                        Bar: () => x,
                        DefaultScroll: () => L,
                        Direction: () => B,
                        defaultSettings: () => b,
                        useHorizontalScrollApi: () => h,
                    });
                var a = {};
                u.r(a), u.d(a, { Area: () => Z, Bar: () => G, Default: () => Y, useVerticalScrollApi: () => I });
                var r = u(4179),
                    s = u(4029),
                    i = u(6179),
                    o = u.n(i),
                    l = u(493),
                    c = u.n(l),
                    m = u(6483),
                    d = u.n(m),
                    _ = u(1856),
                    E = u(7515);
                const g = [];
                function A(e) {
                    const t = (0, i.useRef)(e);
                    return (
                        (0, i.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, i.useCallback)((...e) => (0, t.current)(...e), g)
                    );
                }
                function p(e, t, u = []) {
                    const n = (0, i.useRef)(0),
                        a = (0, i.useCallback)(() => window.clearInterval(n.current), u || []);
                    (0, i.useEffect)(() => a, [a]);
                    const r = (null != u ? u : []).concat([t]);
                    return [
                        (0, i.useCallback)((u) => {
                            (n.current = window.setInterval(() => e(u, !0), t)), e(u, !1);
                        }, r),
                        a,
                    ];
                }
                var F = u(7727),
                    f = u(3138);
                function D(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                var v = u(7030);
                let B;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(B || (B = {}));
                const b = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    C = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: n,
                        getWrapperSize: a,
                        triggerMouseMoveOnUpdate: r = !1,
                    }) => {
                        const s = (e, u) => {
                            const n = t(e),
                                a = n[0],
                                r = n[1];
                            return (0, E.u)(a, r, u);
                        };
                        return (o = {}) => {
                            const l = o.settings,
                                c = void 0 === l ? b : l,
                                m = (0, i.useRef)(null),
                                d = (0, i.useRef)(null),
                                E = (() => {
                                    const e = (0, i.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        u = (e, u) => {
                                            t(e).set(u, u);
                                        },
                                        n = (e, u) => {
                                            t(e).delete(u);
                                        },
                                        a = (e, ...u) => {
                                            for (
                                                var n,
                                                    a = (function (e, t) {
                                                        var u =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (u) return (u = u.call(e)).next.bind(u);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (u = (function (e, t) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return D(e, t);
                                                                    var u = Object.prototype.toString
                                                                        .call(e)
                                                                        .slice(8, -1);
                                                                    return (
                                                                        'Object' === u &&
                                                                            e.constructor &&
                                                                            (u = e.constructor.name),
                                                                        'Map' === u || 'Set' === u
                                                                            ? Array.from(e)
                                                                            : 'Arguments' === u ||
                                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                    u,
                                                                                )
                                                                              ? D(e, t)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (t && e && 'number' == typeof e.length)
                                                        ) {
                                                            u && (e = u);
                                                            var n = 0;
                                                            return function () {
                                                                return n >= e.length
                                                                    ? { done: !0 }
                                                                    : { done: !1, value: e[n++] };
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
                                    return (0, i.useMemo)(() => ({ on: u, off: n, trigger: a }), []);
                                })(),
                                g = (function (e, t, u) {
                                    const n = (0, i.useMemo)(
                                        () =>
                                            (function (e, t, u, n) {
                                                let a,
                                                    r = !1,
                                                    s = 0;
                                                function i() {
                                                    a && clearTimeout(a);
                                                }
                                                function o(...o) {
                                                    const l = this,
                                                        c = Date.now() - s;
                                                    function m() {
                                                        (s = Date.now()), u.apply(l, o);
                                                    }
                                                    r ||
                                                        (n && !a && m(),
                                                        i(),
                                                        void 0 === n && c > e
                                                            ? m()
                                                            : !0 !== t &&
                                                              (a = setTimeout(
                                                                  n
                                                                      ? function () {
                                                                            a = void 0;
                                                                        }
                                                                      : m,
                                                                  void 0 === n ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof t && ((n = u), (u = t), (t = void 0)),
                                                    (o.cancel = function () {
                                                        i(), (r = !0);
                                                    }),
                                                    o
                                                );
                                            })(u, e),
                                        t,
                                    );
                                    return (0, i.useEffect)(() => n.cancel, [n]), n;
                                })(
                                    () => {
                                        f.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                p = (0, v.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = m.current;
                                        t && (u(t, e), E.trigger('change', e), r && g());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                F = p[0],
                                B = p[1],
                                C = (0, i.useCallback)(
                                    (e, t, u) => {
                                        var n;
                                        const a = F.scrollPosition.get(),
                                            r = (null != (n = F.scrollPosition.goal) ? n : 0) - a;
                                        return s(e, t * u + r + a);
                                    },
                                    [F.scrollPosition],
                                ),
                                h = (0, i.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const n = m.current;
                                        n &&
                                            B.start({
                                                scrollPosition: s(n, e),
                                                immediate: t,
                                                reset: u,
                                                config: c.animationConfig,
                                                from: { scrollPosition: s(n, F.scrollPosition.get()) },
                                            });
                                    },
                                    [B, c.animationConfig, F.scrollPosition],
                                ),
                                w = (0, i.useCallback)(
                                    (e) => {
                                        const t = m.current,
                                            u = d.current;
                                        if (!t || !u) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return a(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, c.step),
                                            r = C(t, e, n);
                                        h(r);
                                    },
                                    [h, C, c.step],
                                ),
                                S = (0, i.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && w(n(e)),
                                            m.current && E.trigger('mouseWheel', e, F.scrollPosition, t(m.current));
                                    },
                                    [F.scrollPosition, w, E],
                                ),
                                R = ((e, t = []) => {
                                    const u = (0, i.useRef)(),
                                        n = (0, i.useCallback)((...t) => {
                                            u.current && u.current(), (u.current = e(...t));
                                        }, t);
                                    return (
                                        (0, i.useEffect)(
                                            () => () => {
                                                u.current && u.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        (0, _.v)(() => {
                                            const e = m.current;
                                            e &&
                                                (h(s(e, F.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [h, F.scrollPosition.goal],
                                ),
                                y = A(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const t = s(e, F.scrollPosition.goal);
                                    t !== F.scrollPosition.goal && h(t, { immediate: !0 }),
                                        E.trigger('recalculateContent');
                                });
                            return (
                                (0, i.useEffect)(
                                    () => (
                                        window.addEventListener('resize', R),
                                        () => {
                                            window.removeEventListener('resize', R);
                                        }
                                    ),
                                    [R],
                                ),
                                (0, i.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (d.current ? a(d.current) : void 0),
                                        getContainerSize: () => (m.current ? e(m.current) : void 0),
                                        getBounds: () =>
                                            m.current
                                                ? t(m.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: c.step.clampedArrowStepTimeout,
                                        clampPosition: s,
                                        handleMouseWheel: S,
                                        applyScroll: h,
                                        applyStepTo: w,
                                        contentRef: m,
                                        wrapperRef: d,
                                        scrollPosition: B,
                                        animationScroll: F,
                                        recalculateContent: y,
                                        events: { on: E.on, off: E.off },
                                    }),
                                    [F.scrollPosition, h, w, E.off, E.on, y, S, B, c.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    h = C({
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
                        getDirection: (e) => (e.deltaY > 1 ? B.Next : B.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    w = 'HorizontalBar_base__nonActive_82',
                    S = 'disable',
                    y = { pending: !1, offset: 0 },
                    k = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    T = () => {},
                    N = (e, t) => Math.max(20, e.offsetWidth * t),
                    x = (0, i.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = k, onDrag: n = T }) => {
                        const a = (0, i.useRef)(null),
                            r = (0, i.useRef)(null),
                            s = (0, i.useRef)(null),
                            l = (0, i.useRef)(null),
                            c = (0, i.useRef)(null),
                            m = e.stepTimeout || 100,
                            g = (0, i.useState)(y),
                            f = g[0],
                            D = g[1],
                            v = (0, i.useCallback)(
                                (e) => {
                                    D(e),
                                        c.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [n],
                            ),
                            b = () => {
                                const t = l.current,
                                    u = c.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && t && u && a)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / a),
                                    m = (0, E.u)(0, 1, i / (a - n)),
                                    d = (t.offsetWidth - N(t, o)) * m;
                                (u.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (r.current && s.current && l.current && c.current) {
                                            if (0 === e)
                                                return r.current.classList.add(S), void s.current.classList.remove(S);
                                            if (
                                                ((t = l.current),
                                                (u = c.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return r.current.classList.remove(S), void s.current.classList.add(S);
                                            var t, u;
                                            r.current.classList.remove(S), s.current.classList.remove(S);
                                        }
                                    })(d);
                            },
                            C = A(() => {
                                (() => {
                                    const t = c.current,
                                        u = l.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && n && u)) return;
                                    const s = Math.min(1, n / r);
                                    (t.style.width = `${N(u, s)}px`),
                                        (t.style.display = 'flex'),
                                        a.current &&
                                            (1 === s ? a.current.classList.add(w) : a.current.classList.remove(w));
                                })(),
                                    b();
                            });
                        (0, i.useEffect)(() => (0, _.v)(C)),
                            (0, i.useEffect)(
                                () =>
                                    (0, _.v)(() => {
                                        const t = () => {
                                            b();
                                        };
                                        let u = T;
                                        const n = () => {
                                            u(), (u = (0, _.v)(C));
                                        };
                                        return (
                                            e.events.on('recalculateContent', C),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                u(),
                                                    e.events.off('recalculateContent', C),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, i.useEffect)(() => {
                                if (!f.pending) return;
                                const t = (t) => {
                                        var u;
                                        const a = e.contentRef.current;
                                        if (!a) return;
                                        const r = l.current,
                                            s = c.current;
                                        if (!a || !r || !s) return;
                                        const i = t.screenX - f.offset - r.getBoundingClientRect().x,
                                            o = (i / r.offsetWidth) * (null != (u = e.getContainerSize()) ? u : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, o),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: s, thumbOffset: i, contentOffset: o });
                                    },
                                    u = () => {
                                        window.removeEventListener('mousemove', t), v(y);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', u),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', u);
                                    }
                                );
                            }, [e, f.offset, f.pending, n, v]);
                        const h = p((t) => e.applyStepTo(t), m, [e]),
                            R = h[0],
                            x = h[1];
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mouseup', x, !0),
                                () => document.removeEventListener('mouseup', x, !0)
                            ),
                            [x],
                        );
                        const M = (e) => {
                            e.target.classList.contains(S) || (0, F.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: d()('HorizontalBar_base_49', t.base), ref: a, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: d()('HorizontalBar_leftButton_5f', t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(S) || 0 !== e.button || ((0, F.G)('play'), R(B.Next));
                                },
                                onMouseUp: x,
                                ref: r,
                                onMouseEnter: M,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: d()('HorizontalBar_track_0d', t.track),
                                    onMouseDown: (t) => {
                                        const n = c.current;
                                        n &&
                                            0 === t.button &&
                                            ((0, F.G)('play'),
                                            t.target === n
                                                ? v({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x })
                                                : ((t) => {
                                                      const n = c.current,
                                                          a = e.contentRef.current;
                                                      if (!n || !a) return;
                                                      const r = u(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + r * t);
                                                  })(t.screenX > n.getBoundingClientRect().x ? B.Prev : B.Next));
                                    },
                                    ref: l,
                                    onMouseEnter: M,
                                },
                                o().createElement('div', { ref: c, className: d()('HorizontalBar_thumb_fd', t.thumb) }),
                                o().createElement('div', { className: d()('HorizontalBar_rail_32', t.rail) }),
                            ),
                            o().createElement('div', {
                                className: d()('HorizontalBar_rightButton_03', t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(S) || 0 !== e.button || ((0, F.G)('play'), R(B.Prev));
                                },
                                onMouseUp: x,
                                ref: s,
                                onMouseEnter: M,
                            }),
                        );
                    }),
                    M = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    L = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: a,
                        classNames: r,
                        scrollClassName: s,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const m = (0, i.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: d()(M.base, e.base) });
                            }, [n]),
                            _ = (0, i.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: d()(M.defaultScroll, u), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: d()(M.defaultScrollArea, a) },
                                o().createElement(P, { className: s, api: _, classNames: r }, e),
                            ),
                            o().createElement(x, { getStepByRailClick: l, api: t, onDrag: c, classNames: m }),
                        );
                    },
                    P = ({ api: e, className: t, classNames: u, children: n }) => (
                        (0, i.useEffect)(() => (0, _.v)(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: d()(M.base, t) },
                            o().createElement(
                                'div',
                                {
                                    className: d()(M.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: d()(M.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (P.Bar = x),
                    (P.Default = L),
                    (P.SeniorityAwards = ({ api: e, className: t, classNames: u, children: n }) => (
                        (0, i.useEffect)(() => (0, _.v)(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: d()(M.base, t) },
                            o().createElement(
                                'div',
                                { className: d()(M.wrapper, null == u ? void 0 : u.wrapper), ref: e.wrapperRef },
                                o().createElement(
                                    'div',
                                    { className: d()(M.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    ));
                const I = C({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? B.Next : B.Prev),
                    }),
                    O = 'VerticalBar_base__nonActive_42',
                    H = 'disable',
                    U = () => {},
                    $ = { pending: !1, offset: 0 },
                    W = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    z = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    V = (e, t) => Math.max(20, e.offsetHeight * t),
                    G = (0, i.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = W, onDrag: n = U }) => {
                        const a = (0, i.useRef)(null),
                            r = (0, i.useRef)(null),
                            s = (0, i.useRef)(null),
                            l = (0, i.useRef)(null),
                            c = (0, i.useRef)(null),
                            m = e.stepTimeout || 100,
                            g = (0, i.useState)($),
                            f = g[0],
                            D = g[1],
                            v = (0, i.useCallback)(
                                (e) => {
                                    D(e),
                                        c.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [n],
                            ),
                            b = A(() => {
                                const t = c.current,
                                    u = l.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && t && u)) return;
                                const s = Math.min(1, n / r);
                                return (
                                    (t.style.height = `${V(u, s)}px`),
                                    t.classList.add('VerticalBar_thumb_32'),
                                    a.current && (1 === s ? a.current.classList.add(O) : a.current.classList.remove(O)),
                                    s
                                );
                            }),
                            C = A(() => {
                                const t = l.current,
                                    u = c.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && t && u && a)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / a),
                                    m = (0, E.u)(0, 1, i / (a - n)),
                                    d = (t.offsetHeight - V(t, o)) * m;
                                (u.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (r.current && s.current && l.current && c.current) {
                                            if (0 === e)
                                                return r.current.classList.add(H), void s.current.classList.remove(H);
                                            if (
                                                ((t = l.current),
                                                (u = c.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return r.current.classList.remove(H), void s.current.classList.add(H);
                                            var t, u;
                                            r.current.classList.remove(H), s.current.classList.remove(H);
                                        }
                                    })(d);
                            }),
                            h = A(() => {
                                z(e, () => {
                                    b(), C();
                                });
                            });
                        (0, i.useEffect)(() => (0, _.v)(h)),
                            (0, i.useEffect)(() => {
                                const t = () => {
                                    z(e, () => {
                                        C();
                                    });
                                };
                                let u = U;
                                const n = () => {
                                    u(), (u = (0, _.v)(h));
                                };
                                return (
                                    e.events.on('recalculateContent', h),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        u(),
                                            e.events.off('recalculateContent', h),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, i.useEffect)(() => {
                                if (!f.pending) return;
                                const t = (t) => {
                                        z(e, (u) => {
                                            const a = l.current,
                                                r = c.current,
                                                s = e.getContainerSize();
                                            if (!a || !r || !s) return;
                                            const i = t.screenY - f.offset - a.getBoundingClientRect().y,
                                                o = (i / a.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: r, thumbOffset: i, contentOffset: o });
                                        });
                                    },
                                    u = () => {
                                        window.removeEventListener('mousemove', t), v($);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', u),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', u);
                                    }
                                );
                            }, [e, f.offset, f.pending, n, v]);
                        const w = p((t) => e.applyStepTo(t), m, [e]),
                            S = w[0],
                            R = w[1];
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mouseup', R, !0),
                                () => document.removeEventListener('mouseup', R, !0)
                            ),
                            [R],
                        );
                        const y = (e) => {
                            e.target.classList.contains(H) || (0, F.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: d()('VerticalBar_base_f3', t.base), ref: a, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: d()('VerticalBar_topButton_d7', t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(H) || 0 !== e.button || ((0, F.G)('play'), S(B.Next));
                                },
                                ref: r,
                                onMouseEnter: y,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: d()('VerticalBar_track_df', t.track),
                                    onMouseDown: (t) => {
                                        const n = c.current;
                                        var a;
                                        n &&
                                            0 === t.button &&
                                            ((0, F.G)('play'),
                                            t.target === n
                                                ? v({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y })
                                                : ((a = t.screenY > n.getBoundingClientRect().y ? B.Prev : B.Next),
                                                  c.current &&
                                                      z(e, (t) => {
                                                          if (!t) return;
                                                          const n = u(e),
                                                              r = e.clampPosition(t, t.scrollTop + n * a);
                                                          e.applyScroll(r);
                                                      })));
                                    },
                                    ref: l,
                                    onMouseEnter: y,
                                },
                                o().createElement('div', { ref: c, className: t.thumb }),
                                o().createElement('div', { className: d()('VerticalBar_rail_43', t.rail) }),
                            ),
                            o().createElement('div', {
                                className: d()('VerticalBar_bottomButton_06', t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(H) || 0 !== e.button || ((0, F.G)('play'), S(B.Prev));
                                },
                                onMouseUp: R,
                                ref: s,
                                onMouseEnter: y,
                            }),
                        );
                    }),
                    j = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Y = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: a,
                        scrollClassName: r,
                        scrollClassNames: s,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const m = (0, i.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: d()(j.base, e.base) });
                            }, [n]),
                            _ = (0, i.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: d()(j.defaultScroll, u), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: d()(j.area, a) },
                                o().createElement(Z, { className: r, classNames: s, api: _ }, e),
                            ),
                            o().createElement(G, { getStepByRailClick: l, api: t, onDrag: c, classNames: m }),
                        );
                    },
                    Z = ({ className: e, classNames: t, children: u, api: n }) => (
                        (0, i.useEffect)(() => (0, _.v)(n.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: d()(j.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: d()(j.content, null == t ? void 0 : t.content), ref: n.contentRef },
                                u,
                            ),
                        )
                    );
                Z.Default = Y;
                const q = { Vertical: a, Horizontal: n };
                var X = u(8089),
                    K = u(7044),
                    Q = u(8526),
                    J = u(3403),
                    ee = u(3854),
                    te = u(3215),
                    ue = u(4598),
                    ne = u(9480),
                    ae = u(3946);
                const re = (0, te.q)()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    validVehicleLevels: e.array('validVehicleLevels', []),
                                    ranksWithPoints: e.array('ranksWithPoints', []),
                                    skillsCategories: e.array('skillsCategories', []),
                                },
                                u = (0, ae.Om)(() => ne.UI(t.validVehicleLevels.get(), ue.yR)),
                                n = (0, ae.Om)(() => ne.UI(t.ranksWithPoints.get(), ue.yR)),
                                a = (0, ae.Om)(() => ne.UI(t.skillsCategories.get(), ue.yR));
                            return Object.assign({}, t, {
                                computes: { getValidVehicleLevels: u, getRanksWithPoints: n, getSkillsCategories: a },
                            });
                        },
                        ({ externalModel: e }) => ({ close: e.createCallbackNoArgs('onClose') }),
                    ),
                    se = re[0],
                    ie = re[1];
                var oe = u(280),
                    le = u(3649);
                const ce = 'default_sectionTitleLong_f5',
                    me = 'default_sectionTitleSmall_45',
                    de = 'default_sectionSubtitle_6e',
                    _e = 'AboutSection_tableColumn_4e',
                    Ee = 'AboutSection_tableCell_1a',
                    ge = 'AboutSection_tableCell__centered_c2',
                    Ae = [5, 20, 30],
                    pe = [
                        { header: R.strings.fl_info_page.about.scoresTable.winHeader(), cells: [25, 10, null] },
                        { header: R.strings.fl_info_page.about.scoresTable.loseHeader(), cells: [10, 5, null] },
                    ],
                    Fe = (0, i.memo)(() =>
                        o().createElement(
                            'div',
                            { className: 'AboutSection_base_9b' },
                            o().createElement('div', { className: me }, R.strings.fl_info_page.about.header()),
                            o().createElement(
                                'div',
                                { className: 'AboutSection_description_ac' },
                                R.strings.fl_info_page.about.text(),
                            ),
                            o().createElement(
                                'div',
                                { className: 'AboutSection_battlePass_03' },
                                o().createElement(
                                    'div',
                                    { className: 'AboutSection_battlePassImgContainer_b8' },
                                    o().createElement('div', { className: 'AboutSection_battlePassImg_15' }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: 'AboutSection_battlePassText_4c' },
                                    o().createElement(
                                        'div',
                                        { className: de },
                                        R.strings.fl_info_page.about.scores.header(),
                                    ),
                                    o().createElement('div', null, R.strings.fl_info_page.about.scores.text()),
                                ),
                            ),
                            o().createElement('div', { className: de }, R.strings.fl_info_page.about.position.header()),
                            o().createElement('div', null, R.strings.fl_info_page.about.position.text()),
                            o().createElement(
                                'div',
                                { className: 'AboutSection_table_4b' },
                                o().createElement(
                                    'div',
                                    { className: _e },
                                    o().createElement('div', { className: Ee }),
                                    Ae.map((e, t) =>
                                        o().createElement(oe.z, {
                                            key: t,
                                            text: R.strings.fl_info_page.about.scoresTable.topCell(),
                                            binding: { top: e },
                                            classMix: Ee,
                                        }),
                                    ),
                                ),
                                pe.map(({ header: e, cells: t }, u) =>
                                    o().createElement(
                                        'div',
                                        { key: u, className: _e },
                                        o().createElement('div', { className: d()(Ee, ge) }, e),
                                        t.map((e, t) =>
                                            o().createElement(
                                                'div',
                                                { key: t, className: d()(Ee, ge) },
                                                e
                                                    ? o().createElement(
                                                          o().Fragment,
                                                          null,
                                                          o().createElement(
                                                              'div',
                                                              { className: 'AboutSection_tableCellText_1f' },
                                                              e,
                                                          ),
                                                          o().createElement('div', {
                                                              className: 'AboutSection_tableBpImg_d4',
                                                          }),
                                                      )
                                                    : o().createElement('div', null, '-'),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        ),
                    ),
                    fe = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    De = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    ve = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Be = (e) =>
                        ve
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let u = De.length - 1; u >= 0; u--)
                                      for (; e >= De[u]; ) (t += fe[u]), (e -= De[u]);
                                  return t;
                              })(e);
                var be = u(3618);
                const Ce = (0, i.memo)(({ withDivider: e = !0, classMix: t, children: u }) =>
                        o().createElement(
                            'div',
                            { className: d()('DividedSection_base_dd', t) },
                            u,
                            e && o().createElement('div', { className: 'DividedSection_divider_6e' }),
                        ),
                    ),
                    he = (0, i.memo)(({ validVehicleLevels: e, withBattlePass: t }) =>
                        o().createElement(
                            Ce,
                            { withDivider: t },
                            o().createElement(
                                'div',
                                { className: d()(me, 'default_sectionTitleSmall__biggerMargin_5b') },
                                R.strings.fl_info_page.addons.header(),
                            ),
                            o().createElement(
                                'div',
                                { className: 'AddonsSection_description_66' },
                                ((e) => [
                                    {
                                        header: R.strings.fl_info_page.addons.cellRent.header(),
                                        text:
                                            e.length > 1
                                                ? R.strings.fl_info_page.addons.cellRent.textUnlockable()
                                                : R.strings.fl_info_page.addons.cellRent.text(),
                                        binding: {
                                            vehiclesLevelFrom: Be(Math.min(...e)),
                                            vehiclesLevelTo: Be(Math.max(...e)),
                                            vehiclesLevel: Be(e[0]),
                                        },
                                    },
                                    {
                                        header: R.strings.fl_info_page.addons.cellTime.header(),
                                        text: R.strings.fl_info_page.addons.cellTime.text(),
                                    },
                                    {
                                        header: R.strings.fl_info_page.addons.cellSpectator.header(),
                                        text: R.strings.fl_info_page.addons.cellSpectator.text(),
                                    },
                                ])(e).map(({ header: e, text: t, binding: u }, n) =>
                                    o().createElement(
                                        'div',
                                        { key: n, className: 'AddonsSection_column_fb' },
                                        o().createElement('div', { className: de }, e),
                                        u
                                            ? o().createElement(be.w, { text: t, binding: u })
                                            : o().createElement('div', { className: 'AddonsSection_text_08' }, t),
                                    ),
                                ),
                            ),
                        ),
                    ),
                    we = 'LevelUpSection_level_e3',
                    Se = (0, i.memo)(({ validVehicleLevels: e, unlockableInBattleVehicleLevel: t }) =>
                        o().createElement(
                            Ce,
                            null,
                            o().createElement(
                                'div',
                                { className: 'LevelUpSection_container_a4' },
                                o().createElement(
                                    'div',
                                    { className: 'LevelUpSection_text_2a' },
                                    o().createElement(oe.z, {
                                        text: R.strings.fl_info_page.levelUp.sectionHeader(),
                                        binding: { level: Be(t) },
                                        classMix: ce,
                                    }),
                                    o().createElement(oe.z, {
                                        text: R.strings.fl_info_page.levelUp.text(),
                                        binding: { vehiclesLevelFrom: Be(Math.min(...e)), vehiclesLevelTo: Be(t) },
                                    }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: 'LevelUpSection_img_a3' },
                                    o().createElement('div', {
                                        className: d()(we, 'LevelUpSection_level__left_fa'),
                                        style: {
                                            backgroundImage: `url(R.images.frontline.gui.maps.icons.levelChange.level_${Math.min(...e)})`,
                                        },
                                    }),
                                    o().createElement('div', {
                                        className: d()(we, 'LevelUpSection_level__right_0e'),
                                        style: {
                                            backgroundImage: `url(R.images.frontline.gui.maps.icons.levelChange.level_${t})`,
                                        },
                                    }),
                                ),
                            ),
                        ),
                    ),
                    Re = 'MainInfoSection_cell_b3',
                    ye = (0, i.memo)(
                        ({
                            withBattlePass: e,
                            duration: t,
                            validVehicleLevels: u,
                            unlockableInBattleVehicleLevel: n,
                        }) =>
                            o().createElement(
                                Ce,
                                { classMix: 'MainInfoSection_base_81' },
                                o().createElement(
                                    'div',
                                    { className: ce },
                                    R.strings.fl_info_page.main.sectionHeader(),
                                ),
                                ((e, t = 3) => {
                                    const u = [];
                                    for (let n = 0; n < e.length; n += t) u.push(e.slice(n, n + t));
                                    return u;
                                })(
                                    ((e, t, u, n) => {
                                        const a = Be(Math.min(...u)),
                                            r = Be(Math.max(...u)),
                                            s = Be(n),
                                            i = [
                                                {
                                                    image: R.images.frontline.gui.maps.icons.about.epic(),
                                                    header: {
                                                        value: R.strings.fl_info_page.main.cellFrontline.header(),
                                                    },
                                                    text:
                                                        u.length > 1
                                                            ? {
                                                                  value: R.strings.fl_info_page.main.cellFrontline.text.someLevels(),
                                                                  binding: { vehiclesLevelFrom: a, vehiclesLevelTo: r },
                                                              }
                                                            : {
                                                                  value: R.strings.fl_info_page.main.cellFrontline.text.oneLevel(),
                                                                  binding: { vehicleLevel: a },
                                                              },
                                                },
                                                {
                                                    image: R.images.frontline.gui.maps.icons.about.episodic(),
                                                    header: {
                                                        value: R.strings.fl_info_page.main.cellDuration.header(),
                                                    },
                                                    text: {
                                                        value: R.strings.fl_info_page.main.cellDuration.text(),
                                                        binding: {
                                                            days: (0, le.uF)(R.strings.fl_common.day(t), {
                                                                duration: t,
                                                            }),
                                                        },
                                                    },
                                                },
                                            ];
                                        return (
                                            e &&
                                                i.push({
                                                    image: R.images.frontline.gui.maps.icons.about.battlepass(),
                                                    header: { value: R.strings.fl_info_page.main.cellPass.header() },
                                                    text: { value: R.strings.fl_info_page.main.cellPass.text() },
                                                }),
                                            i.push({
                                                image: R.images.frontline.gui.maps.icons.about.reserves(),
                                                header: { value: R.strings.fl_info_page.main.cellReserves.header() },
                                                text: { value: R.strings.fl_info_page.main.cellReserves.text() },
                                            }),
                                            i.push({
                                                image: R.images.frontline.gui.maps.icons.about.$dyn(
                                                    `start_level_${Math.min(...u)}`,
                                                ),
                                                header: {
                                                    value: R.strings.fl_info_page.main.cellLevels.header(),
                                                    binding: { vehiclesLevel: a },
                                                },
                                                text: {
                                                    value: R.strings.fl_info_page.main.cellLevels.text(),
                                                    binding: { vehiclesLevel: a },
                                                },
                                            }),
                                            n > 0
                                                ? i.push({
                                                      image: R.images.frontline.gui.maps.icons.about.$dyn(
                                                          `respawn_level_${n}`,
                                                      ),
                                                      header: {
                                                          value: R.strings.fl_info_page.main.cellLevelUnlockable.header(),
                                                          binding: { unlockableInBattleVehicleLevel: s },
                                                      },
                                                      text: {
                                                          value: R.strings.fl_info_page.main.cellLevelUnlockable.text(),
                                                          binding: { unlockableInBattleVehicleLevel: s },
                                                      },
                                                  })
                                                : i.push({}),
                                            i
                                        );
                                    })(e, t, u, n),
                                ).map((e, t) =>
                                    o().createElement(
                                        'div',
                                        { key: t, className: 'MainInfoSection_row_c7' },
                                        e.map(({ header: e, text: t, image: u }, n) =>
                                            e && t && u
                                                ? o().createElement(
                                                      'div',
                                                      { key: n, className: Re },
                                                      o().createElement('div', {
                                                          className: 'MainInfoSection_cellImage_ec',
                                                          style: { backgroundImage: `url(${u})` },
                                                      }),
                                                      o().createElement(
                                                          'div',
                                                          { className: 'MainInfoSection_cellContent_bb' },
                                                          e.binding
                                                              ? o().createElement(be.w, {
                                                                    text: e.value,
                                                                    binding: e.binding,
                                                                    classMix: de,
                                                                })
                                                              : o().createElement('div', { className: de }, e.value),
                                                          o().createElement(be.w, {
                                                              text: t.value,
                                                              binding: t.binding,
                                                          }),
                                                      ),
                                                  )
                                                : o().createElement('div', { key: n, className: Re }),
                                        ),
                                    ),
                                ),
                            ),
                    ),
                    ke = 'ProgressionSection_caption_98',
                    Te = 'ProgressionSection_captionDescription_e4',
                    Ne = 'ProgressionSection_captionImgContainer_a1',
                    xe = 'ProgressionSection_tableColumn_78',
                    Me = 'ProgressionSection_tableCell_60',
                    Le = 'ProgressionSection_tableCell__header_a9',
                    Pe = [
                        null,
                        R.strings.fl_info_page.progression.ranksTable.frontExperienceCell(),
                        R.strings.fl_info_page.progression.ranksTable.bonusCell(),
                    ],
                    Ie = (0, J.Pi)(({ withBattlePass: e }) => {
                        const t = ie().model.computes.getRanksWithPoints();
                        return o().createElement(
                            Ce,
                            null,
                            o().createElement(
                                'div',
                                { className: me },
                                R.strings.fl_info_page.progression.sectionHeader(),
                            ),
                            o().createElement(
                                'div',
                                { className: 'ProgressionSection_description_1e' },
                                R.strings.fl_info_page.progression.text(),
                            ),
                            o().createElement(
                                'div',
                                null,
                                o().createElement(
                                    'div',
                                    { className: ke },
                                    o().createElement(
                                        'div',
                                        { className: Ne },
                                        o().createElement('div', { className: 'ProgressionSection_captionImg_56' }),
                                    ),
                                    o().createElement(
                                        'div',
                                        { className: Te },
                                        o().createElement(
                                            'div',
                                            { className: de },
                                            R.strings.fl_info_page.progression.ranksSection.header(),
                                        ),
                                        o().createElement(
                                            'div',
                                            null,
                                            R.strings.fl_info_page.progression.ranksSection.text(),
                                        ),
                                    ),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: 'ProgressionSection_table_3f' },
                                o().createElement(
                                    'div',
                                    { className: xe },
                                    Pe.map((e, t) =>
                                        o().createElement(
                                            'div',
                                            {
                                                key: t,
                                                className: d()(Me, e ? 'ProgressionSection_tableCell__right_98' : Le),
                                            },
                                            e,
                                        ),
                                    ),
                                ),
                                ne.UI(t, ({ rankName: e, rankPoints: t }, u) =>
                                    o().createElement(
                                        'div',
                                        { key: u, className: xe },
                                        o().createElement(
                                            'div',
                                            { className: d()(Me, Le) },
                                            o().createElement('div', {
                                                className: 'ProgressionSection_rankImg_50',
                                                style: {
                                                    backgroundImage: `url(${R.images.gui.maps.icons.library.epicRank.$dyn(`msg_rank_${e}`)})`,
                                                },
                                            }),
                                            o().createElement(
                                                'div',
                                                { className: de },
                                                R.strings.fl_info_page.progression.ranksTable.$dyn(e),
                                            ),
                                        ),
                                        ne.UI(t, (e, t) => {
                                            return o().createElement(
                                                'div',
                                                {
                                                    key: t,
                                                    className: d()(Me, 'ProgressionSection_tableCell__centered_6d'),
                                                },
                                                0 === t
                                                    ? `${(u = e) > 0 ? '+' : ''}${r.Z5.getNumberFormat(u, r.B3.GOLD)}`
                                                    : ((e) => `${e > 0 ? '+' : ''}${e}%`)(e),
                                            );
                                            var u;
                                        }),
                                    ),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: ke },
                                o().createElement(
                                    'div',
                                    { className: Ne },
                                    o().createElement('div', { className: 'ProgressionSection_captionBadge_5b' }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: Te },
                                    o().createElement(
                                        'div',
                                        { className: de },
                                        R.strings.fl_info_page.progression.levelsSection.header(),
                                    ),
                                    o().createElement(
                                        'div',
                                        null,
                                        R.strings.fl_info_page.progression.levelsSection.experienceText(),
                                    ),
                                    o().createElement(be.w, {
                                        text: e
                                            ? R.strings.fl_info_page.progression.levelsSection.rewardsText()
                                            : R.strings.fl_info_page.progression.levelsSection.rewardsTextNoBP(),
                                        classMix: 'ProgressionSection_captionText_e3',
                                    }),
                                ),
                            ),
                        );
                    }),
                    Oe = [
                        {
                            icon: null,
                            label: null,
                            cells: [
                                R.strings.fl_info_page.reserveCategories.categories.main(),
                                R.strings.fl_info_page.reserveCategories.categories.additional(),
                                R.strings.fl_info_page.reserveCategories.categories.support(),
                            ],
                        },
                        {
                            icon: R.images.gui.maps.icons.library.epicRank.list_rank_recruit(),
                            label: R.strings.fl_info_page.reserveCategories.ranks.soldier(),
                            cells: [1, null, null],
                        },
                        {
                            icon: R.images.gui.maps.icons.library.epicRank.list_rank_sergeant(),
                            label: R.strings.fl_info_page.reserveCategories.ranks.sergeant(),
                            cells: [null, 1, null],
                        },
                        {
                            icon: R.images.gui.maps.icons.library.epicRank.list_rank_lieutenant(),
                            label: R.strings.fl_info_page.reserveCategories.ranks.lieutenant(),
                            cells: [null, null, 1],
                        },
                        {
                            icon: R.images.gui.maps.icons.library.epicRank.list_rank_captain(),
                            label: R.strings.fl_info_page.reserveCategories.ranks.captain(),
                            cells: [2, 2, 2],
                        },
                        {
                            icon: R.images.gui.maps.icons.library.epicRank.list_rank_major(),
                            label: R.strings.fl_info_page.reserveCategories.ranks.major(),
                            cells: [3, 3, 3],
                        },
                    ],
                    He = [
                        [
                            { isImg: !1, value: null },
                            { isImg: !1, value: R.strings.fl_info_page.reserveCategories.config.vehicles.light() },
                            { isImg: !1, value: R.strings.fl_info_page.reserveCategories.config.vehicles.middle() },
                            { isImg: !1, value: R.strings.fl_info_page.reserveCategories.config.vehicles.heavy() },
                            { isImg: !1, value: R.strings.fl_info_page.reserveCategories.config.vehicles.destroyer() },
                            {
                                isImg: !1,
                                value: R.strings.fl_info_page.reserveCategories.config.vehicles.selfPropelled(),
                            },
                        ],
                        [
                            { isImg: !1, value: R.strings.fl_info_page.reserveCategories.categories.main() },
                            { isImg: !0, value: R.images.gui.maps.icons.specialization.medium_reconnaissance() },
                            { isImg: !0, value: R.images.gui.maps.icons.specialization.medium_tactics() },
                            { isImg: !0, value: R.images.gui.maps.icons.specialization.medium_firesupport() },
                            { isImg: !0, value: R.images.gui.maps.icons.specialization.medium_reconnaissance() },
                            { isImg: !0, value: R.images.gui.maps.icons.specialization.medium_firesupport() },
                        ],
                        [
                            { isImg: !1, value: R.strings.fl_info_page.reserveCategories.categories.additional() },
                            { isImg: !0, value: R.images.gui.maps.icons.specialization.medium_tactics() },
                            { isImg: !0, value: R.images.gui.maps.icons.specialization.medium_firesupport() },
                            { isImg: !0, value: R.images.gui.maps.icons.specialization.medium_tactics() },
                            { isImg: !0, value: R.images.gui.maps.icons.specialization.medium_firesupport() },
                            { isImg: !0, value: R.images.gui.maps.icons.specialization.medium_reconnaissance() },
                        ],
                        [
                            { isImg: !1, value: R.strings.fl_info_page.reserveCategories.categories.support() },
                            { isImg: !0, value: R.images.gui.maps.icons.specialization.medium_firesupport() },
                            { isImg: !0, value: R.images.gui.maps.icons.specialization.medium_reconnaissance() },
                            { isImg: !0, value: R.images.gui.maps.icons.specialization.medium_reconnaissance() },
                            { isImg: !0, value: R.images.gui.maps.icons.specialization.medium_tactics() },
                            { isImg: !0, value: R.images.gui.maps.icons.specialization.medium_tactics() },
                        ],
                    ],
                    Ue = 'ReserveCategoriesSection_categoryCell_16',
                    $e = 'ReserveCategoriesSection_progressionTableCell_85',
                    We = (0, J.Pi)(() => {
                        const e = ie().model.computes.getSkillsCategories();
                        return o().createElement(
                            Ce,
                            null,
                            o().createElement(
                                'div',
                                { className: me },
                                R.strings.fl_info_page.reserveCategories.sectionHeader(),
                            ),
                            o().createElement(
                                'div',
                                { className: 'ReserveCategoriesSection_categoriesText_85' },
                                R.strings.fl_info_page.reserveCategories.text(),
                            ),
                            o().createElement(
                                'div',
                                { className: 'ReserveCategoriesSection_categoriesLists_8c' },
                                ne.UI(e, ({ type: e, skills: t }, u) =>
                                    o().createElement(
                                        'div',
                                        { key: u, className: 'ReserveCategoriesSection_categoryColumn_b1' },
                                        o().createElement(
                                            'div',
                                            { className: d()(Ue, 'ReserveCategoriesSection_categoryCell__title_1b') },
                                            o().createElement('div', {
                                                className: 'ReserveCategoriesSection_categoryTypeIcon_bb',
                                                style: {
                                                    backgroundImage: `url(${R.images.gui.maps.icons.epicBattles.category.small.$dyn(e)})`,
                                                },
                                            }),
                                            R.strings.fl_info_page.reserveCategories.types.$dyn(e),
                                        ),
                                        ne.UI(t, (e, t) =>
                                            o().createElement(
                                                'div',
                                                { key: t, className: Ue },
                                                o().createElement(
                                                    'div',
                                                    {
                                                        className:
                                                            'ReserveCategoriesSection_categoryCell__imgContainer_86',
                                                    },
                                                    o().createElement('div', {
                                                        className: 'ReserveCategoriesSection_categoryTypeImg_d7',
                                                        style: {
                                                            backgroundImage: `url(${R.images.gui.maps.icons.epicBattles.skills.c_48x48.$dyn(e.icon)})`,
                                                        },
                                                    }),
                                                ),
                                                e.name,
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                            o().createElement(
                                'div',
                                null,
                                o().createElement(
                                    'div',
                                    { className: 'ReserveCategoriesSection_progression_03' },
                                    o().createElement(
                                        'div',
                                        { className: 'ReserveCategoriesSection_progressionInfo_57' },
                                        o().createElement(
                                            'div',
                                            { className: de },
                                            R.strings.fl_info_page.reserveCategories.levels.header(),
                                        ),
                                        o().createElement(
                                            'div',
                                            null,
                                            R.strings.fl_info_page.reserveCategories.levels.text(),
                                        ),
                                    ),
                                    o().createElement('div', {
                                        className: 'ReserveCategoriesSection_progressionImg_35',
                                    }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: 'ReserveCategoriesSection_progressionTable_aa' },
                                    Oe.map(({ label: e, icon: t, cells: u }, n) =>
                                        o().createElement(
                                            'div',
                                            { key: n, className: 'ReserveCategoriesSection_progressionTableColumn_34' },
                                            o().createElement(
                                                'div',
                                                { className: $e },
                                                o().createElement('div', {
                                                    className: 'ReserveCategoriesSection_progressionTableHeaderIcon_dd',
                                                    style: Object.assign({}, t && { backgroundImage: `url(${t})` }),
                                                }),
                                                o().createElement(
                                                    'div',
                                                    {
                                                        className:
                                                            'ReserveCategoriesSection_progressionTableHeaderText_77',
                                                    },
                                                    e,
                                                ),
                                            ),
                                            u.map((e, t) =>
                                                o().createElement(
                                                    'div',
                                                    {
                                                        key: t,
                                                        className: d()(
                                                            $e,
                                                            !n &&
                                                                'ReserveCategoriesSection_progressionTableCell__accentStart_4f',
                                                        ),
                                                    },
                                                    Number.isInteger(e)
                                                        ? o().createElement(be.w, {
                                                              text: R.strings.fl_info_page.reserveCategories.progression.tableCell(),
                                                              binding: { level: Be(e) },
                                                          })
                                                        : e,
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                            o().createElement(
                                'div',
                                null,
                                o().createElement(
                                    'div',
                                    { className: de },
                                    R.strings.fl_info_page.reserveCategories.config.header(),
                                ),
                                o().createElement(
                                    'div',
                                    { className: 'ReserveCategoriesSection_configurationText_f0' },
                                    R.strings.fl_info_page.reserveCategories.config.text(),
                                ),
                                o().createElement(
                                    'div',
                                    { className: 'ReserveCategoriesSection_configuration_a0' },
                                    o().createElement(
                                        'div',
                                        { className: 'ReserveCategoriesSection_configurationTable_96' },
                                        He.map((e, t) =>
                                            o().createElement(
                                                'div',
                                                {
                                                    key: t,
                                                    className: t
                                                        ? 'ReserveCategoriesSection_configurationTableColumn_2f'
                                                        : 'ReserveCategoriesSection_configurationTableColumn__accent_a6',
                                                },
                                                e.map(({ isImg: e, value: u }, n) =>
                                                    o().createElement(
                                                        'div',
                                                        {
                                                            key: n,
                                                            className: d()(
                                                                'ReserveCategoriesSection_configurationTableCell_d9',
                                                                t
                                                                    ? 'ReserveCategoriesSection_configurationTableCell__centered_32'
                                                                    : 'ReserveCategoriesSection_configurationTableCell__start_9e',
                                                            ),
                                                        },
                                                        e
                                                            ? o().createElement('div', {
                                                                  className:
                                                                      'ReserveCategoriesSection_configurationIcon_4d',
                                                                  style: { backgroundImage: `url(${u})` },
                                                              })
                                                            : u,
                                                    ),
                                                ),
                                            ),
                                        ),
                                    ),
                                    o().createElement(
                                        'div',
                                        { className: 'ReserveCategoriesSection_configurationImgContainer_51' },
                                        o().createElement('div', {
                                            className: 'ReserveCategoriesSection_configurationImg_5e',
                                        }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    ze = 'RulesSection_armorText_8a',
                    Ve = (0, i.memo)((e) =>
                        o().createElement(
                            Ce,
                            { classMix: 'RulesSection_base_e7' },
                            o().createElement(
                                'div',
                                { className: d()(me, 'default_sectionTitleSmall__largeMargin_e4') },
                                R.strings.fl_info_page.rules.sectionHeader(),
                            ),
                            o().createElement(
                                'div',
                                { className: 'RulesSection_description_8b' },
                                (({
                                    sideDestructiblesArmor: e,
                                    backDestructiblesArmor: t,
                                    doorDestructiblesArmor: u,
                                    ventilationDestructiblesArmor: n,
                                }) => [
                                    {
                                        image: R.images.frontline.gui.maps.infopage.weapons(),
                                        header: R.strings.fl_info_page.rules.weapons.header(),
                                        text: [R.strings.fl_info_page.rules.weapons.text()],
                                        list: [
                                            { value: R.strings.fl_info_page.rules.weapons.list.roof() },
                                            {
                                                value: R.strings.fl_info_page.rules.weapons.list.sides(),
                                                binding: { sideDestructiblesArmor: e },
                                            },
                                            {
                                                value: R.strings.fl_info_page.rules.weapons.list.back(),
                                                binding: { backDestructiblesArmor: t },
                                            },
                                            {
                                                value: R.strings.fl_info_page.rules.weapons.list.vulnerable(),
                                                binding: {
                                                    doorDestructiblesArmor: u,
                                                    ventilationDestructiblesArmor: n,
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        image: R.images.frontline.gui.maps.infopage.base(),
                                        header: R.strings.fl_info_page.rules.base.header(),
                                        text: [
                                            R.strings.fl_info_page.rules.base.textTop(),
                                            R.strings.fl_info_page.rules.base.textBottom(),
                                        ],
                                    },
                                    {
                                        image: R.images.frontline.gui.maps.infopage.service(),
                                        header: R.strings.fl_info_page.rules.service.header(),
                                        text: [R.strings.fl_info_page.rules.service.text()],
                                    },
                                ])(e).map(({ image: e, header: t, text: u, list: n }, a) =>
                                    o().createElement(
                                        'div',
                                        { key: a, className: 'RulesSection_descriptionColumn_f3' },
                                        o().createElement('div', {
                                            className: 'RulesSection_descriptionImg_ee',
                                            style: { backgroundImage: `url(${e})` },
                                        }),
                                        o().createElement('div', { className: de }, t),
                                        u.map((e, t) =>
                                            o().createElement(be.w, {
                                                text: e,
                                                key: t,
                                                classMix: 'RulesSection_text_e7',
                                            }),
                                        ),
                                        n &&
                                            o().createElement(
                                                'div',
                                                { className: 'RulesSection_list_7b' },
                                                n.map((e, t) =>
                                                    o().createElement(
                                                        'div',
                                                        { key: t, className: 'RulesSection_listItem_48' },
                                                        o().createElement(
                                                            'div',
                                                            { className: 'RulesSection_listBullet_32' },
                                                            '•',
                                                        ),
                                                        o().createElement(be.w, {
                                                            text: e.value,
                                                            classMix: 'RulesSection_listItemText_9f',
                                                            binding: e.binding,
                                                        }),
                                                    ),
                                                ),
                                            ),
                                    ),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: d()(ze, 'RulesSection_armorSide_19') },
                                e.sideDestructiblesArmor,
                            ),
                            o().createElement(
                                'div',
                                { className: d()(ze, 'RulesSection_armorBack_69') },
                                e.backDestructiblesArmor,
                            ),
                            o().createElement(
                                'div',
                                { className: d()(ze, 'RulesSection_armorDoor_9b') },
                                e.doorDestructiblesArmor,
                            ),
                            o().createElement(
                                'div',
                                { className: d()(ze, 'RulesSection_armorVentilation_d1') },
                                e.ventilationDestructiblesArmor,
                            ),
                            o().createElement(
                                'div',
                                { className: 'RulesSection_backToFight_70' },
                                o().createElement(
                                    'div',
                                    { className: 'RulesSection_backToFightText_79' },
                                    o().createElement(
                                        'div',
                                        { className: de },
                                        R.strings.fl_info_page.rules.backToFight.header(),
                                    ),
                                    o().createElement('div', null, R.strings.fl_info_page.rules.backToFight.text()),
                                ),
                                o().createElement('div', { className: 'RulesSection_backToFightImg_52' }),
                            ),
                        ),
                    ),
                    Ge = R.strings.fl_info_page.subTitle,
                    je = R.strings.menu.dateTime.months,
                    Ye = (0, i.memo)(({ startTimestamp: e, endTimestamp: t }) => {
                        const u = new Date(e * K.s_),
                            n = new Date(t * K.s_),
                            a = {
                                from: u.getDate(),
                                to: n.getDate(),
                                startMonth: je.$num(u.getMonth() + 1),
                                endMonth: je.$num(n.getMonth() + 1),
                                startYear: u.getFullYear(),
                                endYear: n.getFullYear(),
                            },
                            r = a.startMonth === a.endMonth ? Ge.sameMonth() : Ge.differentMonth(),
                            s = a.startYear === a.endYear ? r : Ge.differentYears();
                        return o().createElement('div', { className: 'SubTitle_base_07' }, (0, le.uF)(s, a));
                    }),
                    Ze = 'WinStrategySection_winText_7d',
                    qe = [
                        R.strings.fl_info_page.winStrategy.firstLine(),
                        R.strings.fl_info_page.winStrategy.secondLine(),
                        R.strings.fl_info_page.winStrategy.thirdLine(),
                    ],
                    Xe = (0, i.memo)(() =>
                        o().createElement(
                            Ce,
                            { classMix: 'WinStrategySection_base_b6' },
                            o().createElement(
                                'div',
                                { className: 'WinStrategySection_container_e8' },
                                o().createElement(
                                    'div',
                                    { className: 'WinStrategySection_text_17' },
                                    o().createElement(
                                        'div',
                                        { className: me },
                                        R.strings.fl_info_page.winStrategy.header(),
                                    ),
                                    o().createElement(
                                        'div',
                                        { className: Ze },
                                        R.strings.fl_info_page.winStrategy.mapZones(),
                                    ),
                                    qe.map((e, t) => o().createElement(be.w, { key: t, text: e, classMix: Ze })),
                                ),
                                o().createElement('div', { className: 'WinStrategySection_img_9f' }),
                            ),
                        ),
                    ),
                    Ke = (0, J.Pi)(() => {
                        const e = I(),
                            t = ie(),
                            u = t.model,
                            n = t.controls,
                            a = u.root.get(),
                            r = a.isFullScreen,
                            s = a.isBattlePassAvailable,
                            l = a.startTimestamp,
                            c = a.endTimestamp,
                            m = a.unlockableInBattleVehicleLevel,
                            _ = a.sideDestructiblesArmor,
                            E = a.backDestructiblesArmor,
                            g = a.doorDestructiblesArmor,
                            A = a.ventilationDestructiblesArmor,
                            p = u.computes.getValidVehicleLevels(),
                            F = (0, i.useMemo)(() => Math.round((c - l) / K.s2), [l, c]);
                        return (
                            (0, Q.I9)(() => r && n.close()),
                            o().createElement(
                                'div',
                                { className: d()('InfoViewApp_base_a5', r && 'InfoViewApp_base__fullScreen_0a') },
                                o().createElement(
                                    ee.V,
                                    {
                                        text: R.strings.fl_info_page.page.headerUpper(),
                                        classMix: 'InfoViewApp_pageTitle_5d',
                                    },
                                    o().createElement(Ye, { startTimestamp: l, endTimestamp: c }),
                                ),
                                r &&
                                    o().createElement(X.A, {
                                        classNames: { base: 'InfoViewApp_closeButton_c4' },
                                        caption: R.strings.fl_info_page.page.backBtn(),
                                        type: 'back',
                                        side: 'left',
                                        onClick: n.close,
                                    }),
                                o().createElement(
                                    q.Vertical.Area.Default,
                                    {
                                        className: 'InfoViewApp_scroll_0b',
                                        areaClassName: 'InfoViewApp_page_ca',
                                        scrollClassName: d()(
                                            'InfoViewApp_mainContent_9d',
                                            !r && 'InfoViewApp_mainContent__padded_64',
                                        ),
                                        api: e,
                                    },
                                    o().createElement(ye, {
                                        withBattlePass: s,
                                        duration: F,
                                        validVehicleLevels: p,
                                        unlockableInBattleVehicleLevel: m,
                                    }),
                                    o().createElement(We, null),
                                    0 !== m &&
                                        o().createElement(Se, {
                                            validVehicleLevels: p,
                                            unlockableInBattleVehicleLevel: m,
                                        }),
                                    o().createElement(Ve, {
                                        sideDestructiblesArmor: _,
                                        backDestructiblesArmor: E,
                                        doorDestructiblesArmor: g,
                                        ventilationDestructiblesArmor: A,
                                    }),
                                    o().createElement(Ie, { withBattlePass: s }),
                                    o().createElement(Xe, null),
                                    o().createElement(he, { withBattlePass: s, validVehicleLevels: p }),
                                    s && o().createElement(Fe, null),
                                ),
                            )
                        );
                    }),
                    Qe = R.views.frontline.lobby.InfoView('resId'),
                    Je = () => o().createElement(se, { options: { rootId: Qe } }, o().createElement(Ke, null));
                engine.whenReady.then(() => {
                    c().render(
                        o().createElement(s.z, null, o().createElement(se, null, o().createElement(Ke, null))),
                        document.getElementById('root'),
                    );
                });
            },
            6783: (e, t, u) => {
                'use strict';
                u.d(t, { B: () => ye, t: () => ke }), u(4179);
                var n = u(6179),
                    a = u.n(n),
                    r = u(6483),
                    s = u.n(r),
                    i = u(4959),
                    o = u(3403),
                    l = u(3854);
                const c = (0, u(3215).q)()(
                        ({ observableModel: e }) => ({ root: e.object(), rewards: e.array('rewards') }),
                        ({ externalModel: e }) => ({ shopClick: e.createCallbackNoArgs('onShopClick') }),
                    ),
                    m = c[0],
                    d = c[1],
                    _ = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let E, g;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big');
                })(E || (E = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(g || (g = {}));
                const A = ({ size: e = E.Default }) =>
                        a().createElement('div', { className: s()(_.background, _[`background__${e}`]) }),
                    p = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    F = ({ size: e }) => {
                        const t = s()(p.base, p[`base__${e}`]);
                        return a().createElement('div', { className: t });
                    },
                    f = {
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
                        ({ size: e, lineRef: t, disabled: u, baseStyles: n, isComplete: r, withoutBounce: i }) => {
                            const o = s()(
                                    f.base,
                                    f[`base__${e}`],
                                    u && f.base__disabled,
                                    r && f.base__finished,
                                    i && f.base__withoutBounce,
                                ),
                                l = !u && !r;
                            return a().createElement(
                                'div',
                                { className: o, style: n, ref: t },
                                a().createElement('div', { className: f.pattern }),
                                a().createElement('div', { className: f.gradient }),
                                l && a().createElement(F, { size: e }),
                            );
                        },
                    ),
                    v = ({ size: e, value: t, lineRef: u, disabled: r, onComplete: s }) => {
                        const i = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            o = 100 === t;
                        return (
                            (0, n.useEffect)(() => {
                                o && s && s();
                            }, [o, s]),
                            a().createElement(D, { size: e, disabled: r, baseStyles: i, isComplete: o, lineRef: u })
                        );
                    },
                    B = (e, t) => {
                        let u;
                        const n = setTimeout(() => {
                            u = e();
                        }, t);
                        return () => {
                            'function' == typeof u && u(), clearTimeout(n);
                        };
                    };
                let b, C;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(b || (b = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(C || (C = {}));
                const h = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: r,
                            size: s,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = i < r,
                                m = (0, n.useState)(C.Idle),
                                d = m[0],
                                _ = m[1],
                                E = d === C.In,
                                g = d === C.End,
                                A = d === C.Idle,
                                p = (0, n.useCallback)(
                                    (e) => {
                                        _(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, n.useEffect)(() => {
                                if (A && !u)
                                    return B(() => {
                                        p(C.In);
                                    }, t);
                            }, [p, u, A, t]),
                                (0, n.useEffect)(() => {
                                    if (E)
                                        return B(() => {
                                            o && o(), p(C.End);
                                        }, e + t);
                                }, [p, E, o, t, e]);
                            const f = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                D = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                v = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(r - i)}%`, left: `${c ? i : r}%` }),
                                    [r, c, i],
                                );
                            return g
                                ? null
                                : a().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: v },
                                      a().createElement(
                                          'div',
                                          { style: A ? f : D, className: 'ProgressBarDeltaSimple_delta_99' },
                                          a().createElement(F, { size: s }),
                                      ),
                                  );
                        },
                    ),
                    w = (0, n.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: r,
                            disabled: s,
                            isComplete: i,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const m = (0, n.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, e],
                            );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(D, {
                                    size: t,
                                    lineRef: r,
                                    disabled: s,
                                    isComplete: i,
                                    baseStyles: m,
                                }),
                                u >= 0 &&
                                    a().createElement(h, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: u,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    S = (e) => (e ? { left: 0 } : { right: 0 }),
                    y = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    k = (e) => ({ transitionDuration: `${e}ms` }),
                    T = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: r,
                            size: i,
                            to: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                            className: m,
                        }) => {
                            const d = o < r,
                                _ = (0, n.useState)(b.Idle),
                                E = _[0],
                                g = _[1],
                                A = E === b.End,
                                p = E === b.Idle,
                                f = E === b.Grow,
                                D = E === b.Shrink,
                                v = (0, n.useCallback)(
                                    (e) => {
                                        g(e), c && c(e);
                                    },
                                    [c],
                                ),
                                C = (0, n.useCallback)(
                                    (e, t) =>
                                        B(() => {
                                            v(e);
                                        }, t),
                                    [v],
                                );
                            (0, n.useEffect)(() => {
                                if (!u)
                                    return p
                                        ? C(b.Grow, t)
                                        : f
                                          ? C(b.Shrink, e)
                                          : D
                                            ? C(b.End, e)
                                            : void (A && l && l());
                            }, [C, u, A, f, p, D, l, t, e]);
                            const h = (0, n.useMemo)(() => Object.assign({ width: '100%' }, k(e), S(d)), [d, e]),
                                w = (0, n.useMemo)(() => Object.assign({ width: '0%' }, k(e), S(d)), [d, e]),
                                R = (0, n.useMemo)(() => Object.assign({ width: '0%' }, y(d, r), k(e)), [r, d, e]),
                                T = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - r)}%` }, y(d, r), k(e)),
                                    [r, d, o, e],
                                );
                            if (A) return null;
                            const N = s()(
                                'ProgressBarDeltaGrow_base_7e',
                                m,
                                d && 0 === o && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return a().createElement(
                                'div',
                                { style: p ? R : T, className: N },
                                a().createElement(
                                    'div',
                                    { style: D ? w : h, className: 'ProgressBarDeltaGrow_glow_68' },
                                    a().createElement(F, { size: i }),
                                ),
                            );
                        },
                    ),
                    N = (0, n.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: r,
                            disabled: s,
                            isComplete: i,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const m = e < u,
                                d = (0, n.useState)(!1),
                                _ = d[0],
                                E = d[1],
                                g = (0, n.useCallback)(
                                    (e) => {
                                        e === b.Shrink && E(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                A = (0, n.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                                p = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(D, {
                                    size: t,
                                    lineRef: r,
                                    disabled: s,
                                    isComplete: i,
                                    withoutBounce: m && 0 === e,
                                    baseStyles: _ ? p : A,
                                }),
                                u >= 0 &&
                                    a().createElement(T, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: g,
                                        freezed: o.freezed,
                                        onEndAnimation: l,
                                        from: u,
                                        size: t,
                                        to: e,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    x = ['onComplete', 'onEndAnimation'];
                function M() {
                    return (
                        (M =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        M.apply(this, arguments)
                    );
                }
                const L = (0, n.memo)((e) => {
                        let t = e.onComplete,
                            u = e.onEndAnimation,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, x);
                        const s = (0, n.useState)(!1),
                            i = s[0],
                            o = s[1],
                            l = (0, n.useCallback)(() => {
                                const e = 100 === r.to;
                                e !== i && o(e), e && t && t(), u && u();
                            }, [i, t, u, r.to]);
                        switch (r.animationSettings.type) {
                            case g.Simple:
                                return a().createElement(w, M({}, r, { onEndAnimation: l, isComplete: i }));
                            case g.Growing:
                                return a().createElement(N, M({}, r, { onEndAnimation: l, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    P = ['onEndAnimation'];
                function I() {
                    return (
                        (I =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        I.apply(this, arguments)
                    );
                }
                const O = (0, n.memo)((e) => {
                    let t = e.onEndAnimation,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, P);
                    const r = (0, n.useRef)({}),
                        s = (0, n.useCallback)(() => {
                            (r.current.from = void 0), t && t();
                        }, [t]),
                        i = 'number' == typeof r.current.from ? r.current.from : u.from;
                    return (
                        (r.current.from = i),
                        a().createElement(L, I({}, u, { onEndAnimation: s, key: `${i}-${u.to}`, from: i }))
                    );
                });
                function H() {
                    return (
                        (H =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        H.apply(this, arguments)
                    );
                }
                const U = (0, n.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: u,
                            disabled: n,
                            deltaFrom: r,
                            animationSettings: s,
                            onEndAnimation: i,
                            onChangeAnimationState: o,
                            onComplete: l,
                        }) => {
                            if (r === t)
                                return a().createElement(v, {
                                    key: `${r}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: u,
                                    disabled: n,
                                    onComplete: l,
                                });
                            const c = {
                                from: r,
                                to: t,
                                size: e,
                                lineRef: u,
                                disabled: n,
                                animationSettings: s,
                                onComplete: l,
                                onEndAnimation: i,
                                onChangeAnimationState: o,
                            };
                            return s.withStack
                                ? a().createElement(O, c)
                                : a().createElement(L, H({ key: `${r}-${t}` }, c));
                        },
                    ),
                    $ = (e) => ({
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
                var W = u(7515);
                const z = (e, t, u) => ('number' == typeof u ? ((0, W.u)(0, t, u) / t) * 100 : e),
                    V = {
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
                    G = {
                        freezed: !1,
                        withStack: !1,
                        type: g.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    j = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = V,
                            size: u = E.Default,
                            animationSettings: r = G,
                            disabled: i = !1,
                            withoutBackground: o = !1,
                            value: l,
                            deltaFrom: c,
                            lineRef: m,
                            onChangeAnimationState: d,
                            onEndAnimation: g,
                            onComplete: p,
                        }) => {
                            const F = ((e, t, u) =>
                                (0, n.useMemo)(() => {
                                    const n = ((0, W.u)(0, t, e) / t) * 100;
                                    return { value: n, deltaFrom: z(n, t, u) };
                                }, [u, t, e]))(l, e, c);
                            return a().createElement(
                                'div',
                                { className: s()(_.base, _[`base__${u}`]), style: $(t) },
                                !o && a().createElement(A, { size: u }),
                                a().createElement(U, {
                                    size: u,
                                    lineRef: m,
                                    disabled: i,
                                    value: F.value,
                                    deltaFrom: F.deltaFrom,
                                    animationSettings: r,
                                    onEndAnimation: g,
                                    onChangeAnimationState: d,
                                    onComplete: p,
                                }),
                            );
                        },
                    );
                var Y = u(3649),
                    Z = u(2862),
                    q = u(1558),
                    X = u(5415),
                    K = u(9480),
                    Q = u(5983),
                    J = u(5989);
                const ee = (0, o.Pi)(() => {
                        const e = d().model.rewards.get(),
                            t = (0, X.GS)().mediaSize === X.cJ.ExtraSmall ? Z.h2.Small : Z.h2.Big;
                        return a().createElement(
                            'div',
                            { className: 'Rewards_base_11' },
                            K.UI(e, (e, u) =>
                                a().createElement(
                                    'div',
                                    { key: u, className: 'Rewards_reward_f2' },
                                    a().createElement(J.I, {
                                        item: Q.ob.RewardTooltip,
                                        info: e.name,
                                        parentScreen: Q.RM.ProgressView,
                                        name: e.name,
                                        size: t,
                                        image: (0, q.ry)(e, t),
                                        value: e.value,
                                        valueType: (0, q.p3)(e.name),
                                        tooltipArgs: (0, q.pI)({ tooltipId: e.tooltipId }, 0, {
                                            targetId: R.views.frontline.lobby.ProgressView('resId'),
                                        }),
                                    }),
                                ),
                            ),
                        );
                    }),
                    te = (0, n.memo)(ee),
                    ue = 'Content_base_28',
                    ne = 'Content_base__infoContainer_5d',
                    ae = 'Content_infoLabel_f6',
                    re = (0, n.memo)(
                        ({ frontlineState: e, isMaxLevel: t, level: u, currentPoints: r, neededPoints: o }) => {
                            const l = u + 1,
                                c = e === i.c.Finished,
                                m = e === i.c.Active || e === i.c.Frozen,
                                d = (0, n.useMemo)(() => (0, Y.uF)(R.strings.fl_progress.rewardFor(), { lvl: l }), [l]);
                            return e === i.c.Announce
                                ? a().createElement(
                                      'div',
                                      { className: s()(ue, ne) },
                                      a().createElement(
                                          'div',
                                          { className: ae },
                                          R.strings.fl_progress.info.gameplayDescription(),
                                      ),
                                      a().createElement(
                                          'div',
                                          { className: ae },
                                          R.strings.fl_progress.info.rewardsDescription(),
                                      ),
                                  )
                                : t
                                  ? a().createElement(
                                        'div',
                                        { className: s()(ue, ne) },
                                        a().createElement(
                                            'div',
                                            { className: ae },
                                            R.strings.fl_progress.info.maxLevelReached(),
                                        ),
                                    )
                                  : a().createElement(
                                        'div',
                                        { className: s()(ue, c && 'Content_base__finished_16') },
                                        a().createElement(
                                            'div',
                                            { className: 'Content_progressBar_4d' },
                                            a().createElement(
                                                'div',
                                                { className: 'Content_levels_aa' },
                                                a().createElement('div', { className: 'Content_levelCurrent_43' }, u),
                                                a().createElement(
                                                    'div',
                                                    { className: 'Content_exp_a4' },
                                                    a().createElement(
                                                        'div',
                                                        { className: 'Content_currentPoints_36' },
                                                        r + ' ',
                                                    ),
                                                    a().createElement(
                                                        'div',
                                                        { className: 'Content_needPoints_91' },
                                                        `/ ${o}`,
                                                    ),
                                                    a().createElement('div', { className: 'Content_levelIcon_86' }),
                                                ),
                                                a().createElement('div', { className: 'Content_levelNext_d3' }, l),
                                            ),
                                            a().createElement(j, { value: r, size: E.Big, maxValue: o, disabled: c }),
                                        ),
                                        m &&
                                            a().createElement(
                                                a().Fragment,
                                                null,
                                                a().createElement('div', { className: 'Content_rewardText_60' }, d),
                                                a().createElement(te, null),
                                            ),
                                    );
                        },
                    );
                let se, ie;
                var oe;
                let le, ce;
                u(7078),
                    u(7739),
                    u(5262),
                    u(4090),
                    u(280),
                    (function (e) {
                        (e.B0 = 'b0'),
                            (e.B1 = 'b1'),
                            (e.B2 = 'b2'),
                            (e.B3 = 'b3'),
                            (e.B4 = 'b4'),
                            (e.B5 = 'b5'),
                            (e.B6 = 'b6');
                    })(se || (se = {})),
                    ((oe = ie || (ie = {})).Small = 'small'),
                    (oe.Medium = 'medium'),
                    (oe.Big = 'big'),
                    (function (e) {
                        (e.Huge = 'huge'), (e.Big = 'big'), (e.Medium = 'medium'), (e.Small = 'small');
                    })(le || (le = {})),
                    se.B4,
                    se.B5,
                    se.B6,
                    se.B0,
                    se.B1,
                    se.B2,
                    se.B0,
                    ie.Big,
                    le.Huge,
                    ie.Medium,
                    le.Huge,
                    ie.Small,
                    le.Big,
                    se.B1,
                    ie.Big,
                    le.Huge,
                    ie.Medium,
                    le.Huge,
                    ie.Small,
                    le.Big,
                    se.B2,
                    ie.Big,
                    le.Huge,
                    ie.Medium,
                    le.Huge,
                    ie.Small,
                    le.Big,
                    se.B3,
                    ie.Big,
                    le.Huge,
                    ie.Medium,
                    le.Big,
                    ie.Small,
                    le.Big,
                    se.B4,
                    ie.Big,
                    le.Big,
                    ie.Medium,
                    le.Big,
                    ie.Small,
                    le.Medium,
                    se.B5,
                    ie.Big,
                    le.Medium,
                    ie.Medium,
                    le.Medium,
                    ie.Small,
                    le.Small,
                    se.B6,
                    ie.Big,
                    le.Medium,
                    ie.Medium,
                    le.Small,
                    ie.Small,
                    le.Small,
                    (function (e) {
                        (e.Icon1 = 'bg0'),
                            (e.Icon2 = 'bg1'),
                            (e.Icon3 = 'bg2'),
                            (e.Icon4 = 'bg3'),
                            (e.Icon5 = 'bg4'),
                            (e.Icon6 = 'bg5');
                    })(ce || (ce = {})),
                    le.Huge,
                    le.Big,
                    le.Medium,
                    le.Small;
                const me = {
                    [ce.Icon1]: [0],
                    [ce.Icon2]: [1, 2, 3, 4],
                    [ce.Icon3]: [5, 6, 7, 8, 9],
                    [ce.Icon4]: [10, 11, 12, 13, 14],
                    [ce.Icon5]: [15, 16, 17, 18, 19],
                    [ce.Icon6]: [20],
                };
                se.B0, se.B1, se.B2;
                var de = u(8154);
                const _e = {
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
                function Ee() {
                    return (
                        (Ee =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ee.apply(this, arguments)
                    );
                }
                const ge = (0, n.memo)(({ level: e, isGlowVisible: t }) => {
                    const u = (0, n.useMemo)(
                            () => ({
                                header: R.strings.fl_progress.emblem.tooltip.header(),
                                body: (0, Y.uF)(R.strings.fl_progress.emblem.tooltip.body(), { level: e }),
                            }),
                            [e],
                        ),
                        r = (0, n.useMemo)(
                            () => ((e) => Object.keys(me).find((t) => me[t].includes(e)) || ce.Icon1)(e),
                            [e],
                        ),
                        i = (0, n.useMemo)(
                            () => ({
                                backgroundImage: `url(${R.images.gui.maps.icons.epicBattles.metaLvls.c_320x320.$dyn(r)})`,
                            }),
                            [r],
                        );
                    return a().createElement(
                        'div',
                        { className: _e.base },
                        a().createElement(
                            de.l,
                            Ee({}, u, { item: Q.ob.EpicWidgetTooltip, parentScreen: Q.RM.ProgressView }),
                            a().createElement(
                                'div',
                                null,
                                t && a().createElement('div', { className: _e.glow }),
                                a().createElement(
                                    'div',
                                    { className: s()(_e.icon, _e[`icon__${r}`]), style: i },
                                    e > 0 && a().createElement('div', { className: _e.level }, e),
                                ),
                            ),
                        ),
                    );
                });
                var Ae = u(3457);
                const pe = 'ShopBanner_line_0c',
                    Fe = (0, n.memo)(() => {
                        const e = d().controls;
                        return a().createElement(
                            'div',
                            { className: 'ShopBanner_base_1c' },
                            a().createElement('div', { className: s()(pe, 'ShopBanner_line__top_0d') }),
                            a().createElement('div', { className: s()(pe, 'ShopBanner_line__bottom_6f') }),
                            a().createElement(
                                'div',
                                { className: 'ShopBanner_desc_5c' },
                                R.strings.fl_progress.banner.text(),
                            ),
                            a().createElement(
                                Ae.u5,
                                { onClick: e.shopClick, type: Ae.L$.main, mixClass: 'ShopBanner_button_9a' },
                                a().createElement(
                                    'div',
                                    { className: 'ShopBanner_label_0c' },
                                    ' ',
                                    R.strings.fl_progress.banner.button(),
                                ),
                            ),
                        );
                    });
                var fe = u(7044),
                    De = u(3618);
                const ve = (0, n.memo)(({ duration: e }) => {
                    const t =
                        e >= 0
                            ? (u = (0, fe.f8)(e)).days > 0
                                ? (0, Y.WU)(R.strings.common.duration.days(), { days: u.days })
                                : u.hours > 0
                                  ? (0, Y.WU)(R.strings.common.duration.hours(), { hours: u.hours })
                                  : u.minutes > 0
                                    ? (0, Y.WU)(R.strings.common.duration.minutes(), { minutes: u.minutes })
                                    : (0, Y.WU)(R.strings.common.duration.seconds(), { seconds: u.seconds })
                            : R.strings.common.duration.unlimited();
                    var u;
                    return a().createElement('span', null, t);
                });
                var Be = u(728);
                const be = (0, n.memo)(({ isDateFormat: e, pendingDate: t, countdownSeconds: u }) =>
                        e
                            ? a().createElement(a().Fragment, null, (0, fe.e1)(t, Be.U.FULL_DATE, !0))
                            : a().createElement(ve, { duration: u }),
                    ),
                    Ce = R.strings.fl_progress.subTitle,
                    he = {
                        [i.c.Announce]: Ce.announce,
                        [i.c.Active]: Ce.active,
                        [i.c.Frozen]: Ce.active,
                        [i.c.Finished]: Ce.finished,
                    },
                    we = (0, n.memo)(({ pendingDate: e, countdownSeconds: t, frontlineState: u }) => {
                        const r = (0, n.useMemo)(() => {
                            if (u === i.c.Finished) return { text: Ce.finished() };
                            {
                                const n = t > fe.IZ,
                                    r = he[u];
                                return {
                                    text: n ? r.at() : r.countdown(),
                                    binding: {
                                        left: a().createElement(be, {
                                            countdownSeconds: t,
                                            pendingDate: e,
                                            isDateFormat: n,
                                        }),
                                    },
                                };
                            }
                        }, [e, t, u]);
                        return a().createElement('div', { className: 'SubTitle_base_48' }, a().createElement(De.w, r));
                    }),
                    Se = R.strings.fl_progress.title,
                    Re = (0, o.Pi)(() => {
                        const e = d().model.root.get(),
                            t = e.level,
                            u = e.isMaxLevel,
                            n = e.pendingDate,
                            r = e.countdownSeconds,
                            o = e.frontlineState,
                            c = e.neededPoints,
                            m = e.currentPoints,
                            _ = e.isShopBannerVisible,
                            E = o === i.c.Active || o === i.c.Frozen,
                            g = u && E;
                        return a().createElement(
                            'div',
                            { className: 'ProgressViewApp_base_3e' },
                            a().createElement(
                                l.V,
                                { text: u ? Se.complete() : Se.inProgress(), classMix: 'ProgressViewApp_pageTitle_5f' },
                                a().createElement(we, {
                                    pendingDate: n,
                                    countdownSeconds: r,
                                    frontlineState: o,
                                    classMix: 'ProgressViewApp_subTitle_5e',
                                }),
                            ),
                            a().createElement(
                                'div',
                                {
                                    className: s()(
                                        'ProgressViewApp_content_73',
                                        _ && 'ProgressViewApp_content__withBanner_09',
                                    ),
                                },
                                a().createElement(ge, { level: m > 0 || E ? t : 0, isGlowVisible: g }),
                                a().createElement(re, {
                                    frontlineState: o,
                                    isMaxLevel: u,
                                    level: t,
                                    neededPoints: c,
                                    currentPoints: m,
                                }),
                            ),
                            _ &&
                                a().createElement(
                                    'div',
                                    { className: 'ProgressViewApp_banner_b8' },
                                    a().createElement(Fe, null),
                                ),
                        );
                    }),
                    ye = R.views.frontline.lobby.ProgressView('resId'),
                    ke = () => a().createElement(m, { options: { rootId: ye } }, a().createElement(Re, null));
            },
            5660: (e, t, u) => {
                'use strict';
                u.d(t, { o: () => O, M: () => H });
                var n = u(6179),
                    a = u.n(n),
                    r = u(5983),
                    s = u(6483),
                    i = u.n(s),
                    o = u(4090),
                    l = u(2056),
                    c = u(7727);
                const m = {
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
                let d;
                !(function (e) {
                    (e.Small = 'small'), (e.Big = 'big');
                })(d || (d = {}));
                const _ = ({
                    label: e,
                    takeCount: t,
                    icon: u,
                    width: r,
                    height: s,
                    isDisabled: d,
                    isHighlighted: _,
                    isYellow: E,
                    size: g,
                    onClick: A,
                    onMouseUp: p,
                    onMouseEnter: F,
                    onMouseLeave: f,
                    onMouseDown: D,
                    children: v,
                    soundHover: B,
                    soundClick: b,
                    counter: C,
                    tokensCount: h = 0,
                }) => {
                    const w = (0, n.useState)(!1),
                        S = w[0],
                        y = w[1],
                        k = (0, n.useState)(!1),
                        T = k[0],
                        N = k[1],
                        x = (e, t) => {
                            e && t && e(t);
                        },
                        M = i()(
                            m.base,
                            g && m[`base__${g}`],
                            E && m.base__yellow,
                            d && m.base__disabled,
                            S && !d && m.base__hover,
                            T && m.base__click,
                            _ && !d && m.base__highlight,
                        ),
                        L = i()(m.glowBorder, m.glowBorder__hover),
                        P = i()(m.glowInner, m.glowInner__duplicate),
                        I = (0, n.useMemo)(() => {
                            const e = {};
                            return r && (e.width = `${r}rem`), s && (e.height = `${s}rem`), e;
                        }, [s, r]),
                        O = (0, n.useMemo)(() => ({ backgroundImage: `url(${u})` }), [u]);
                    return a().createElement(
                        'div',
                        {
                            className: M,
                            style: I,
                            onMouseEnter:
                                ((H = F),
                                (e) => {
                                    d || (x(H, e), y(!0), (0, c.G)(B));
                                }),
                            onMouseLeave: ((e) => (t) => {
                                d || (x(e, t), y(!1), N(!1));
                            })(f),
                            onMouseDown: ((e) => (t) => {
                                d || (x(e, t), 0 === t.button && N(!0));
                            })(D),
                            onMouseUp: ((e) => (t) => {
                                d || (x(e, t), 0 === t.button && N(!1));
                            })(p),
                            onClick: ((e) => (t) => {
                                d || ((0, c.G)(b), x(e, t));
                            })(A),
                        },
                        _ &&
                            !d &&
                            a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(
                                    'div',
                                    { className: m.glow },
                                    a().createElement('div', { className: m.glowInner }),
                                    a().createElement('div', { className: P }),
                                ),
                                a().createElement('div', { className: m.highlight }),
                                a().createElement('div', { className: m.glowBorder }),
                                a().createElement('div', { className: L }),
                            ),
                        a().createElement(
                            'div',
                            { className: m.content },
                            d && a().createElement('div', { className: m.disabledBackground }),
                            v ||
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    u
                                        ? a().createElement('div', { className: m.icon, style: O })
                                        : a().createElement('div', { className: m.count }, t),
                                    a().createElement('div', { className: m.label }, e),
                                ),
                            Boolean(C) &&
                                !d &&
                                a().createElement(
                                    'div',
                                    { className: m.counter },
                                    a().createElement(o.A, { value: C }),
                                ),
                            h > 0 &&
                                a().createElement(
                                    l.u,
                                    {
                                        contentId:
                                            R.views.lobby.battle_pass.tooltips.BattlePassCoinTooltipView('resId'),
                                    },
                                    a().createElement('div', { className: m.tokensCount }, h),
                                ),
                        ),
                    );
                    var H;
                };
                _.defaultProps = {
                    isDisabled: !1,
                    isHighlighted: !1,
                    counter: !1,
                    soundHover: 'highlight',
                    soundClick: 'play',
                };
                var E = u(3403),
                    g = u(8154),
                    A = u(3854);
                const p = (0, u(3215).q)()(
                        ({ observableModel: e }) => ({ root: e.object(), rewards: e.array('rewards') }),
                        ({ externalModel: e }) => ({ claimRewards: e.createCallbackNoArgs('onClaimRewards') }),
                    ),
                    F = p[0],
                    f = p[1];
                var D = u(9480),
                    v = u(2862),
                    B = u(5415),
                    b = u(1558);
                let C;
                !(function (e) {
                    (e.Static = 'static'), (e.Claimable = 'claimable');
                })(C || (C = {}));
                var h = u(5989);
                const w = (0, n.memo)(
                        ({
                            claimState: e,
                            name: t,
                            icon: u,
                            rewardSize: n,
                            value: s,
                            tooltipId: o,
                            tooltipContentId: l,
                            isDisable: c,
                            isBattlePassRewardDisable: m,
                            classMix: d,
                        }) => {
                            const _ = e === C.Claimable;
                            return a().createElement(
                                'div',
                                {
                                    className: i()(
                                        'FrontlineReward_base_e2',
                                        c && 'FrontlineReward_base__disable_dc',
                                        !c && m && 'FrontlineReward_base__disableBattlePassReward_5a',
                                        d,
                                    ),
                                },
                                _ &&
                                    a().createElement(
                                        'div',
                                        { className: 'FrontlineReward_animWrapper_23' },
                                        a().createElement('div', { className: 'FrontlineReward_glow_0d' }),
                                        a().createElement('div', { className: 'FrontlineReward_glowReverse_42' }),
                                    ),
                                a().createElement(h.I, {
                                    item: r.ob.RewardTooltip,
                                    info: t,
                                    parentScreen: r.RM.RewardsView,
                                    name: t,
                                    image: (0, b.ry)({ name: t, icon: u }, v.h2.Big),
                                    size: n,
                                    value: s.toString(),
                                    valueType: (0, b.p3)(t),
                                    tooltipArgs: (0, b.pI)({ tooltipId: o }, Number(l), {
                                        ignoreShowDelay: !0,
                                        targetId: R.views.frontline.lobby.RewardsView('resId'),
                                    }),
                                }),
                            );
                        },
                    ),
                    S = {
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
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        y.apply(this, arguments)
                    );
                }
                var k;
                !(function (e) {
                    (e.None = 'none'), (e.White = 'white'), (e.Gold = 'gold');
                })(k || (k = {}));
                const T = ({ levelsRange: e, frontlineLevel: t, isBattlePassComplete: u, isLastCol: n }) => {
                        const r = (0, B.GS)(),
                            s = r.mediaSize,
                            o = r.remScreenHeight,
                            l = s === B.cJ.ExtraSmall || o < 844 ? v.h2.Small : v.h2.Big,
                            c = e.lvlStart,
                            m = e.lvlEnd,
                            d = e.rewards,
                            _ = ((e, t, u, n) => {
                                switch (!0) {
                                    case e <= u && u <= t:
                                        return k.Gold;
                                    case n:
                                        return k.White;
                                    default:
                                        return k.None;
                                }
                            })(c, m, t, n),
                            E = t < c;
                        return a().createElement(
                            'div',
                            { className: S.base },
                            a().createElement('div', { className: S.bg }),
                            _ && a().createElement('div', { className: i()(S.highlight, S[`highlight__${_}`]) }),
                            a().createElement(
                                'span',
                                { className: i()(S.levels, E && S.levels__disable) },
                                c !== m ? `${c}-${m}` : c,
                            ),
                            d.map(({ value: e, id: t }) =>
                                a().createElement(
                                    a().Fragment,
                                    { key: t },
                                    a().createElement(
                                        w,
                                        y({}, e, {
                                            rewardSize: l,
                                            classMix: S.reward,
                                            isDisable: E,
                                            isBattlePassRewardDisable: u && e.name === v.E4.BattlePassPoints,
                                        }),
                                    ),
                                ),
                            ),
                        );
                    },
                    N = (0, E.Pi)(() => {
                        const e = f().model,
                            t = e.root.get(),
                            u = t.frontlineLevel,
                            n = t.isBattlePassComplete,
                            r = e.rewards.get();
                        return a().createElement(
                            'div',
                            { className: 'RewardTable_base_cf' },
                            D.UI(r, (e, t) =>
                                a().createElement(
                                    a().Fragment,
                                    { key: `${e.lvlStart}-${e.lvlEnd}` },
                                    a().createElement(T, {
                                        levelsRange: e,
                                        frontlineLevel: u,
                                        isBattlePassComplete: n,
                                        isLastCol: t === r.length - 1,
                                    }),
                                ),
                            ),
                        );
                    });
                var x = u(4959);
                const M = 'SubTitle_base_8d',
                    L = R.strings.fl_rewards.subtitle,
                    P = (0, n.memo)(({ level: e, rewardsCount: t, frontlineState: u }) =>
                        u !== x.c.Finished
                            ? a().createElement('div', { className: M }, L.active())
                            : a().createElement(
                                  'div',
                                  { className: M },
                                  L.finished.title(),
                                  e > 1 &&
                                      (t > 0
                                          ? L.finished.rewards()
                                          : a().createElement(
                                                'div',
                                                { className: 'SubTitle_noRewards_f1' },
                                                a().createElement('div', { className: 'SubTitle_icon_0f' }),
                                                ' ',
                                                L.finished.noRewards(),
                                            )),
                              ),
                    ),
                    I = (0, E.Pi)(() => {
                        const e = f(),
                            t = e.model,
                            u = e.controls,
                            s = t.root.get(),
                            i = s.selectableRewardsCount,
                            o = s.frontlineLevel,
                            l = s.frontlineState,
                            c = (0, n.useCallback)(() => {
                                u.claimRewards();
                            }, [u]);
                        return a().createElement(
                            'div',
                            { className: 'RewardsViewApp_base_1c' },
                            a().createElement(
                                A.V,
                                { text: R.strings.fl_rewards.title(), classMix: 'RewardsViewApp_pageTitle_61' },
                                a().createElement(P, { level: o, rewardsCount: i, frontlineState: l }),
                            ),
                            a().createElement(
                                'div',
                                { className: 'RewardsViewApp_table_32' },
                                a().createElement(N, null),
                            ),
                            a().createElement(
                                'div',
                                { className: 'RewardsViewApp_claimButton_3d' },
                                i > 0 &&
                                    a().createElement(
                                        g.l,
                                        {
                                            targetId: R.views.frontline.lobby.RewardsView('resId'),
                                            item: r.ob.RewardsButtonTooltip,
                                            parentScreen: r.RM.RewardsView,
                                            body: R.strings.fl_rewards.chooseRewards.tooltip(),
                                        },
                                        a().createElement(_, {
                                            label: R.strings.fl_rewards.chooseRewards.label(),
                                            counter: i,
                                            icon: R.images.frontline.gui.maps.icons.rewards.claim_all(),
                                            isHighlighted: !0,
                                            size: d.Big,
                                            onClick: c,
                                        }),
                                    ),
                            ),
                        );
                    }),
                    O = R.views.frontline.lobby.RewardsView('resId'),
                    H = () => a().createElement(F, { options: { rootId: O } }, a().createElement(I, null));
            },
            5989: (e, t, u) => {
                'use strict';
                u.d(t, { I: () => g });
                var n = u(6483),
                    a = u.n(n),
                    r = u(6179),
                    s = u.n(r),
                    i = u(3415),
                    o = u(2862),
                    l = u(1558);
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
                        timer: 'Reward_timer_d3',
                    },
                    m = ({
                        name: e,
                        image: t,
                        isPeriodic: u = !1,
                        size: n = o.h2.Big,
                        special: r,
                        value: m,
                        valueType: d,
                        style: _,
                        className: E,
                        classNames: g,
                        tooltipArgs: A,
                        periodicIconTooltipArgs: p,
                    }) => {
                        const F = (0, l.L_)(r),
                            f = (0, l.i2)(r),
                            D = (0, l.m9)(m, d);
                        return s().createElement(
                            'div',
                            { className: a()(c.base, c[`base__${n}`], E), style: _ },
                            s().createElement(
                                i.l,
                                { tooltipArgs: A, className: c.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: a()(c.image, null == g ? void 0 : g.image) },
                                        F &&
                                            s().createElement('div', {
                                                className: a()(c.highlight, null == g ? void 0 : g.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${F}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            s().createElement('div', {
                                                className: a()(c.icon, null == g ? void 0 : g.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        f &&
                                            s().createElement('div', {
                                                className: a()(c.overlay, null == g ? void 0 : g.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${f}_overlay)`,
                                                },
                                            }),
                                    ),
                                    D &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: a()(
                                                    c.info,
                                                    c[`info__${e}`],
                                                    d === o.$h.MULTI && c.info__multi,
                                                    null == g ? void 0 : g.info,
                                                ),
                                            },
                                            D,
                                        ),
                                ),
                            ),
                            u &&
                                s().createElement(
                                    i.l,
                                    { tooltipArgs: p },
                                    s().createElement('div', {
                                        className: a()(c.timer, null == g ? void 0 : g.periodicIcon),
                                    }),
                                ),
                        );
                    };
                var d = u(405);
                const _ = ['item', 'parentScreen', 'itemState', 'info', 'tooltipArgs'];
                function E() {
                    return (
                        (E =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        E.apply(this, arguments)
                    );
                }
                const g = (0, r.memo)((e) => {
                    let t = e.item,
                        u = e.parentScreen,
                        n = e.itemState,
                        a = e.info,
                        i = e.tooltipArgs,
                        o = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, _);
                    const l = (0, d.Y)(t, u, n, a),
                        c = l[0],
                        g = l[1],
                        A = (0, r.useMemo)(() => Object.assign({}, i, { onMouseEnter: c, onMouseLeave: g }), [i, c, g]);
                    return s().createElement(m, E({}, o, { tooltipArgs: A }));
                });
            },
            8154: (e, t, u) => {
                'use strict';
                u.d(t, { l: () => l });
                var n = u(6373),
                    a = u(6179),
                    r = u.n(a),
                    s = u(405);
                const i = ['children', 'item', 'parentScreen', 'itemState', 'info'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const l = (0, a.memo)((e) => {
                    let t = e.children,
                        u = e.item,
                        a = e.parentScreen,
                        l = e.itemState,
                        c = e.info,
                        m = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, i);
                    const d = (0, s.Y)(u, a, l, c),
                        _ = d[0],
                        E = d[1];
                    return r().createElement(n.i, o({}, m, { onMouseEnter: _, onMouseLeave: E }), t);
                });
            },
            3854: (e, t, u) => {
                'use strict';
                u.d(t, { V: () => o });
                var n = u(6483),
                    a = u.n(n),
                    r = u(6179),
                    s = u.n(r),
                    i = u(5577);
                const o = (0, r.memo)(({ text: e, children: t, classMix: u }) =>
                    s().createElement(
                        'div',
                        { className: a()(i.Z.base, u) },
                        s().createElement('span', { className: i.Z.title }, e),
                        t,
                    ),
                );
            },
            4959: (e, t, u) => {
                'use strict';
                let n;
                u.d(t, { c: () => n }),
                    (function (e) {
                        (e.Announce = 'announce'),
                            (e.Active = 'active'),
                            (e.Finished = 'finished'),
                            (e.Frozen = 'frozen');
                    })(n || (n = {}));
            },
            6880: (e, t, u) => {
                'use strict';
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
            5287: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = { base: 'FormatText_base_d0' };
            },
            7476: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
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
            8055: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'ExtendedText_base_71',
                    base__zeroPadding: 'ExtendedText_base__zeroPadding_25',
                    base__isTruncationAvailable: 'ExtendedText_base__isTruncationAvailable_5b',
                    truncated: 'ExtendedText_truncated_97',
                    truncated__hide: 'ExtendedText_truncated__hide_31',
                    unTruncated: 'ExtendedText_unTruncated_b8',
                };
            },
            9627: (e, t, u) => {
                'use strict';
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
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    noBreakWrapper: 'renderers_noBreakWrapper_10',
                    lineBreak: 'renderers_lineBreak_b5',
                    newLine: 'renderers_newLine_bd',
                };
            },
            5577: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = { base: 'PageTitle_base_ef', title: 'PageTitle_title_33' };
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
                var a = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, u, n] = deferred[o], r = !0, s = 0; s < t.length; s++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(o--, 1);
                        var i = u();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [t, u, n];
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
        (__webpack_require__.j = 66),
        (() => {
            var e = { 66: 0, 153: 0, 964: 0, 919: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        a,
                        [r, s, i] = u,
                        o = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (t && t(u); o < r.length; o++)
                        (a = r[o]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(5852));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
