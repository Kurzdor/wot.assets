(() => {
    var __webpack_modules__ = {
            3457: (e, t, n) => {
                'use strict';
                n.d(t, { L$: () => l.L, qE: () => l.q, u5: () => _ });
                var a = n(6483),
                    s = n.n(a),
                    i = n(7727),
                    u = n(6179),
                    r = n.n(u),
                    o = n(6880),
                    l = n(2106);
                const c = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: a,
                    disabled: c,
                    mixClass: _,
                    soundHover: d,
                    soundClick: m,
                    onMouseEnter: b,
                    onMouseMove: p,
                    onMouseDown: E,
                    onMouseUp: g,
                    onMouseLeave: h,
                    onClick: f,
                }) => {
                    const v = (0, u.useRef)(null),
                        A = (0, u.useState)(n),
                        C = A[0],
                        F = A[1],
                        D = (0, u.useState)(!1),
                        S = D[0],
                        B = D[1];
                    return (
                        (0, u.useEffect)(() => {
                            function e(e) {
                                C && null !== v.current && !v.current.contains(e.target) && F(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [C]),
                        (0, u.useEffect)(() => {
                            F(n);
                        }, [n]),
                        r().createElement(
                            'div',
                            {
                                ref: v,
                                className: s()(
                                    o.Z.base,
                                    o.Z[`base__${a}`],
                                    c && o.Z.base__disabled,
                                    t && o.Z[`base__${t}`],
                                    C && o.Z.base__focus,
                                    S && o.Z.base__highlightActive,
                                    _,
                                ),
                                onMouseEnter: function (e) {
                                    c || (null !== d && (0, i.G)(d), b && b(e));
                                },
                                onMouseMove: function (e) {
                                    p && p(e);
                                },
                                onMouseUp: function (e) {
                                    c || (g && g(e), B(!1));
                                },
                                onMouseDown: function (e) {
                                    c ||
                                        (null !== m && (0, i.G)(m),
                                        E && E(e),
                                        n && (c || (v.current && (v.current.focus(), F(!0)))),
                                        B(!0));
                                },
                                onMouseLeave: function (e) {
                                    c || (h && h(e), B(!1));
                                },
                                onClick: function (e) {
                                    c || (f && f(e));
                                },
                            },
                            a !== l.L.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: o.Z.back }),
                                    r().createElement('span', { className: o.Z.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: s()(o.Z.state, o.Z.state__default) },
                                r().createElement('span', { className: o.Z.stateDisabled }),
                                r().createElement('span', { className: o.Z.stateHighlightHover }),
                                r().createElement('span', { className: o.Z.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: o.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const _ = c;
            },
            2106: (e, t, n) => {
                'use strict';
                let a, s;
                n.d(t, { L: () => a, q: () => s }),
                    (function (e) {
                        (e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost');
                    })(a || (a = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(s || (s = {}));
            },
            9987: (e, t, n) => {
                'use strict';
                n.d(t, { A: () => c });
                var a = n(6483),
                    s = n.n(a),
                    i = n(6179),
                    u = n.n(i),
                    r = n(9734);
                const o = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function l() {
                    return (
                        (l = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        l.apply(null, arguments)
                    );
                }
                const c = (e) => {
                    let t = e.size,
                        n = e.value,
                        a = e.isEmpty,
                        i = e.fadeInAnimation,
                        c = e.hide,
                        _ = e.maximumNumber,
                        d = e.className,
                        m = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, o);
                    const b = a ? null : n,
                        p = 'string' == typeof b;
                    if ((b && !p && b < 0) || 0 === b) return null;
                    const E = b && !p && b > _,
                        g = s()(
                            r.Z.base,
                            r.Z[`base__${t}`],
                            i && r.Z.base__animated,
                            c && r.Z.base__hidden,
                            !b && r.Z.base__pattern,
                            a && r.Z.base__empty,
                            d,
                        );
                    return u().createElement(
                        'div',
                        l({ className: g }, m),
                        u().createElement('div', { className: r.Z.bg }),
                        u().createElement('div', { className: r.Z.pattern }),
                        u().createElement(
                            'div',
                            { className: s()(r.Z.value, p && r.Z.value__text) },
                            E ? _ : b,
                            E && u().createElement('span', { className: r.Z.plus }, '+'),
                        ),
                    );
                };
                c.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
            },
            2372: (e, t, n) => {
                'use strict';
                var a = n(6179),
                    s = n.n(a),
                    i = n(9916);
                class u extends s().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? i.B3.GOLD : i.B3.INTEGRAL;
                        const t = i.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                u.defaultProps = { format: 'integral' };
            },
            3495: (e, t, n) => {
                'use strict';
                n.d(t, { Y: () => _ });
                var a = n(3138),
                    s = n(6179),
                    i = n(1043),
                    u = n(5262);
                const r = a.O.client.getSize('rem'),
                    o = r.width,
                    l = r.height,
                    c = Object.assign({ width: o, height: l }, (0, u.T)(o, l, i.j)),
                    _ = (0, s.createContext)(c);
            },
            1039: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => c });
                var a = n(3138),
                    s = n(6536),
                    i = n(6179),
                    u = n.n(i),
                    r = n(3495),
                    o = n(1043),
                    l = n(5262);
                const c = ({ children: e }) => {
                    const t = (0, i.useContext)(r.Y),
                        n = (0, i.useState)(t),
                        c = n[0],
                        _ = n[1],
                        d = (0, i.useCallback)((e, t) => {
                            const n = a.O.view.pxToRem(e),
                                s = a.O.view.pxToRem(t);
                            _(Object.assign({ width: n, height: s }, (0, l.T)(n, s, o.j)));
                        }, []),
                        m = (0, i.useCallback)(() => {
                            const e = a.O.client.getSize('px');
                            d(e.width, e.height);
                        }, [d]);
                    (0, s.Z)(() => {
                        a.O.client.events.on('clientResized', d), a.O.client.events.on('self.onScaleUpdated', m);
                    }),
                        (0, i.useEffect)(
                            () => () => {
                                a.O.client.events.off('clientResized', d),
                                    a.O.client.events.off('self.onScaleUpdated', m);
                            },
                            [d, m],
                        );
                    const b = (0, i.useMemo)(() => Object.assign({}, c), [c]);
                    return u().createElement(r.Y.Provider, { value: b }, e);
                };
            },
            6010: (e, t, n) => {
                'use strict';
                var a = n(6179),
                    s = n(7382),
                    i = n(3495);
                const u = ['children'],
                    r = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, u);
                        const r = (0, a.useContext)(i.Y),
                            o = r.extraLarge,
                            l = r.large,
                            c = r.medium,
                            _ = r.small,
                            d = r.extraSmall,
                            m = r.extraLargeWidth,
                            b = r.largeWidth,
                            p = r.mediumWidth,
                            E = r.smallWidth,
                            g = r.extraSmallWidth,
                            h = r.extraLargeHeight,
                            f = r.largeHeight,
                            v = r.mediumHeight,
                            A = r.smallHeight,
                            C = r.extraSmallHeight,
                            F = { extraLarge: h, large: f, medium: v, small: A, extraSmall: C };
                        if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                            if (n.extraLarge && o) return t;
                            if (n.large && l) return t;
                            if (n.medium && c) return t;
                            if (n.small && _) return t;
                            if (n.extraSmall && d) return t;
                        } else {
                            if (n.extraLargeWidth && m) return (0, s.H)(t, n, F);
                            if (n.largeWidth && b) return (0, s.H)(t, n, F);
                            if (n.mediumWidth && p) return (0, s.H)(t, n, F);
                            if (n.smallWidth && E) return (0, s.H)(t, n, F);
                            if (n.extraSmallWidth && g) return (0, s.H)(t, n, F);
                            if (
                                !(
                                    n.extraLargeWidth ||
                                    n.largeWidth ||
                                    n.mediumWidth ||
                                    n.smallWidth ||
                                    n.extraSmallWidth
                                )
                            ) {
                                if (n.extraLargeHeight && h) return t;
                                if (n.largeHeight && f) return t;
                                if (n.mediumHeight && v) return t;
                                if (n.smallHeight && A) return t;
                                if (n.extraSmallHeight && C) return t;
                            }
                        }
                        return null;
                    };
                (r.defaultProps = {
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
                    (0, a.memo)(r);
            },
            7382: (e, t, n) => {
                'use strict';
                n.d(t, { H: () => a });
                const a = (e, t, n) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && n.extraLarge) ||
                          (t.largeHeight && n.large) ||
                          (t.mediumHeight && n.medium) ||
                          (t.smallHeight && n.small) ||
                          (t.extraSmallHeight && n.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, n) => {
                'use strict';
                n.d(t, { YN: () => s.Y, ZN: () => a.Z }), n(6010);
                var a = n(1039),
                    s = n(3495);
            },
            1043: (e, t, n) => {
                'use strict';
                n.d(t, { j: () => a });
                const a = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, n) => {
                'use strict';
                var a;
                function s(e, t, n) {
                    const a = (function (e, t) {
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
                        })(e, n),
                        s = (function (e, t) {
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
                        })(t, n),
                        i = Math.min(a, s);
                    return {
                        extraLarge: i === n.extraLarge.weight,
                        large: i === n.large.weight,
                        medium: i === n.medium.weight,
                        small: i === n.small.weight,
                        extraSmall: i === n.extraSmall.weight,
                        extraLargeWidth: a === n.extraLarge.weight,
                        largeWidth: a === n.large.weight,
                        mediumWidth: a === n.medium.weight,
                        smallWidth: a === n.small.weight,
                        extraSmallWidth: a === n.extraSmall.weight,
                        extraLargeHeight: s === n.extraLarge.weight,
                        largeHeight: s === n.large.weight,
                        mediumHeight: s === n.medium.weight,
                        smallHeight: s === n.small.weight,
                        extraSmallHeight: s === n.extraSmall.weight,
                    };
                }
                n.d(t, { T: () => s, u: () => a }),
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
                    })(a || (a = {}));
            },
            2862: (e, t, n) => {
                'use strict';
                let a, s, i, u, r, o, l, c;
                n.d(t, { E4: () => a, h2: () => i }),
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
                    })(a || (a = {})),
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
                    })(s || (s = {})),
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
                    })(i || (i = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(u || (u = {})),
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
                    })(r || (r = {})),
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
                    })(l || (l = {})),
                    (function (e) {
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(c || (c = {}));
            },
            729: (e, t, n) => {
                'use strict';
                n(2372), n(6179);
                var a = n(2862);
                a.E4.Items,
                    a.E4.Equipment,
                    a.E4.Xp,
                    a.E4.XpFactor,
                    a.E4.Blueprints,
                    a.E4.BlueprintsAny,
                    a.E4.Goodies,
                    a.E4.Berths,
                    a.E4.Slots,
                    a.E4.Tokens,
                    a.E4.CrewSkins,
                    a.E4.CrewBooks,
                    a.E4.Customizations,
                    a.E4.CreditsFactor,
                    a.E4.TankmenXp,
                    a.E4.TankmenXpFactor,
                    a.E4.FreeXpFactor,
                    a.E4.BattleToken,
                    a.E4.PremiumUniversal,
                    a.E4.NaturalCover,
                    a.E4.BpCoin,
                    a.E4.BattlePassSelectToken,
                    a.E4.BattlaPassFinalAchievement,
                    a.E4.BattleBadge,
                    a.E4.BonusX5,
                    a.E4.CrewBonusX3,
                    a.E4.NewYearInvoice,
                    a.E4.EpicSelectToken,
                    a.E4.Comp7TokenWeeklyReward,
                    a.E4.DeluxeGift,
                    a.E4.BattleBoosterGift,
                    a.E4.OptionalDevice,
                    a.E4.Gold,
                    a.E4.Credits,
                    a.E4.Crystal,
                    a.E4.FreeXp,
                    a.E4.BattlePassPoints,
                    a.E4.EquipCoin,
                    a.E4.PremiumPlus,
                    a.E4.Premium,
                    a.h2.Small,
                    a.h2.Big;
            },
            2773: (e, t, n) => {
                'use strict';
                n.d(t, { $Q: () => v });
                var a = n(6483),
                    s = n.n(a),
                    i = n(7515),
                    u = n(1856),
                    r = n(3138),
                    o = n(3815),
                    l = n(560),
                    c = n(7727),
                    _ = n(6179),
                    d = n.n(_),
                    m = n(6358),
                    b = n(372);
                const p = 'disable',
                    E = { pending: !1, offset: 0 },
                    g = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    h = () => {},
                    f = (e, t) => Math.max(20, e.offsetWidth * t),
                    v = (0, _.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = g, onDrag: a = h }) => {
                        const v = (0, _.useRef)(null),
                            A = (0, _.useRef)(null),
                            C = (0, _.useRef)(null),
                            F = (0, _.useRef)(null),
                            D = (0, _.useRef)(null),
                            S = e.stepTimeout || 100,
                            B = (0, _.useState)(E),
                            w = B[0],
                            y = B[1],
                            x = (0, _.useCallback)(
                                (e) => {
                                    y(e),
                                        D.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: D.current });
                                },
                                [a],
                            ),
                            T = () => {
                                const t = F.current,
                                    n = D.current,
                                    a = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(a && t && n && s)) return;
                                const u = e.animationScroll.scrollPosition.get(),
                                    r = Math.min(1, a / s),
                                    o = (0, i.u)(0, 1, u / (s - a)),
                                    l = (t.offsetWidth - f(t, r)) * o;
                                (n.style.transform = `translateX(${0 | l}px)`),
                                    ((e) => {
                                        if (A.current && C.current && F.current && D.current) {
                                            if (0 === e)
                                                return A.current.classList.add(p), void C.current.classList.remove(p);
                                            if (
                                                ((t = F.current),
                                                (n = D.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return A.current.classList.remove(p), void C.current.classList.add(p);
                                            var t, n;
                                            A.current.classList.remove(p), C.current.classList.remove(p);
                                        }
                                    })(l);
                            },
                            k = (0, o.z)(() => {
                                (() => {
                                    const t = D.current,
                                        n = F.current,
                                        a = e.getWrapperSize(),
                                        s = e.getContainerSize();
                                    if (!(s && t && a && n)) return;
                                    const i = Math.min(1, a / s);
                                    (t.style.width = `${f(n, i)}px`),
                                        (t.style.display = 'flex'),
                                        v.current &&
                                            (1 === i
                                                ? v.current.classList.add(b.Z.base__nonActive)
                                                : v.current.classList.remove(b.Z.base__nonActive));
                                })(),
                                    T();
                            });
                        (0, _.useEffect)(() => (0, u.v)(k)),
                            (0, _.useEffect)(
                                () =>
                                    (0, u.v)(() => {
                                        const t = () => {
                                            T();
                                        };
                                        let n = h;
                                        const a = () => {
                                            n(), (n = (0, u.v)(k));
                                        };
                                        return (
                                            e.events.on('recalculateContent', k),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                n(),
                                                    e.events.off('recalculateContent', k),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', a);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, _.useEffect)(() => {
                                if (!w.pending) return;
                                const t = r.O.client.events.mouse.move(([t, n]) => {
                                        var s;
                                        const i = e.contentRef.current,
                                            u = e.wrapperRef.current;
                                        if (!i || !u) return;
                                        const r = F.current,
                                            o = D.current;
                                        if (!r || !o) return;
                                        if ('inside' === n && t.clientX < 0) return;
                                        const l = t.clientX - w.offset - r.getBoundingClientRect().x,
                                            c = (l / r.offsetWidth) * (null != (s = e.getContainerSize()) ? s : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(i, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: c });
                                    }),
                                    n = r.O.client.events.mouse.up(() => {
                                        t(), x(E);
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, w.offset, w.pending, a, x]);
                        const I = (0, l.B)((t) => e.applyStepTo(t), S, [e]),
                            N = I[0],
                            R = I[1];
                        (0, _.useEffect)(
                            () => (
                                document.addEventListener('mouseup', R, !0),
                                () => document.removeEventListener('mouseup', R, !0)
                            ),
                            [R],
                        );
                        const O = (e) => {
                            e.target.classList.contains(p) || (0, c.G)('highlight');
                        };
                        return d().createElement(
                            'div',
                            { className: s()(b.Z.base, t.base), ref: v, onWheel: e.handleMouseWheel },
                            d().createElement('div', {
                                className: s()(b.Z.leftButton, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(p) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), N(m.Nm.Next));
                                },
                                onMouseUp: R,
                                ref: A,
                                onMouseEnter: O,
                            }),
                            d().createElement(
                                'div',
                                {
                                    className: s()(b.Z.track, t.track),
                                    onMouseDown: (t) => {
                                        const a = D.current;
                                        a &&
                                            0 === t.button &&
                                            ((0, c.G)('play'),
                                            t.target === a
                                                ? x({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x })
                                                : ((t) => {
                                                      const a = D.current,
                                                          s = e.contentRef.current;
                                                      if (!a || !s) return;
                                                      const i = n(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + i * t);
                                                  })(t.screenX > a.getBoundingClientRect().x ? m.Nm.Prev : m.Nm.Next));
                                    },
                                    ref: F,
                                    onMouseEnter: O,
                                },
                                d().createElement('div', { ref: D, className: s()(b.Z.thumb, t.thumb) }),
                                d().createElement('div', { className: s()(b.Z.rail, t.rail) }),
                            ),
                            d().createElement('div', {
                                className: s()(b.Z.rightButton, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(p) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), N(m.Nm.Prev));
                                },
                                onMouseUp: R,
                                ref: C,
                                onMouseEnter: O,
                            }),
                        );
                    });
            },
            2840: (e, t, n) => {
                'use strict';
                n.d(t, { K: () => c });
                var a = n(6483),
                    s = n.n(a),
                    i = n(6179),
                    u = n.n(i),
                    r = n(2773),
                    o = n(7950),
                    l = n(4682);
                const c = ({
                    children: e,
                    api: t,
                    className: n,
                    barClassNames: a,
                    areaClassName: c,
                    classNames: _,
                    scrollClassName: d,
                    getStepByRailClick: m,
                    onDrag: b,
                }) => {
                    const p = (0, i.useMemo)(() => {
                            const e = a || {};
                            return Object.assign({}, e, { base: s()(l.Z.base, e.base) });
                        }, [a]),
                        E = (0, i.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return u().createElement(
                        'div',
                        { className: s()(l.Z.defaultScroll, n), onWheel: t.handleMouseWheel },
                        u().createElement(
                            'div',
                            { className: s()(l.Z.defaultScrollArea, c) },
                            u().createElement(o.Area, { className: d, api: E, classNames: _ }, e),
                        ),
                        u().createElement(r.$Q, { getStepByRailClick: m, api: t, onDrag: b, classNames: p }),
                    );
                };
            },
            7950: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, {
                        Area: () => d,
                        Bar: () => o.$Q,
                        DefaultScroll: () => l.K,
                        Direction: () => _.Nm,
                        defaultSettings: () => _.he,
                        useHorizontalScrollApi: () => _.T5,
                    });
                var a = n(6483),
                    s = n.n(a),
                    i = n(1856),
                    u = n(6179),
                    r = n.n(u),
                    o = n(2773),
                    l = n(2840),
                    c = n(4682),
                    _ = n(6358);
                const d = ({ api: e, className: t, classNames: n, children: a }) => (
                    (0, u.useEffect)(() => (0, i.v)(e.recalculateContent)),
                    r().createElement(
                        'div',
                        { className: s()(c.Z.base, t) },
                        r().createElement(
                            'div',
                            {
                                className: s()(c.Z.wrapper, null == n ? void 0 : n.wrapper),
                                onWheel: e.handleMouseWheel,
                                ref: e.wrapperRef,
                            },
                            r().createElement(
                                'div',
                                { className: s()(c.Z.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                a,
                            ),
                        ),
                    )
                );
                (d.Bar = o.$Q), (d.Default = l.K);
            },
            6358: (e, t, n) => {
                'use strict';
                n.d(t, { Nm: () => a.Nm, T5: () => s, he: () => a.he });
                var a = n(7308);
                const s = (0, a.EO)({
                    getBounds: (e) => {
                        var t, n;
                        return [
                            0,
                            e.offsetWidth -
                                (null != (t = null == (n = e.parentElement) ? void 0 : n.offsetWidth) ? t : 0),
                        ];
                    },
                    getContainerSize: (e) => e.offsetWidth,
                    getWrapperSize: (e) => e.offsetWidth,
                    setScrollPosition: (e, t) => {
                        e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                    },
                    getDirection: (e) => (e.deltaY > 1 ? a.Nm.Next : a.Nm.Prev),
                    triggerMouseMoveOnUpdate: !0,
                });
            },
            6225: (e, t, n) => {
                'use strict';
                n.d(t, { $Q: () => A });
                var a = n(6483),
                    s = n.n(a),
                    i = n(7515),
                    u = n(1856),
                    r = n(3138),
                    o = n(3815),
                    l = n(560),
                    c = n(7727),
                    _ = n(6179),
                    d = n.n(_),
                    m = n(7701),
                    b = n(9168);
                const p = 'disable',
                    E = () => {},
                    g = { pending: !1, offset: 0 },
                    h = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    f = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    v = (e, t) => Math.max(20, e.offsetHeight * t),
                    A = (0, _.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = h, onDrag: a = E }) => {
                        const A = (0, _.useRef)(null),
                            C = (0, _.useRef)(null),
                            F = (0, _.useRef)(null),
                            D = (0, _.useRef)(null),
                            S = (0, _.useRef)(null),
                            B = e.stepTimeout || 100,
                            w = (0, _.useState)(g),
                            y = w[0],
                            x = w[1],
                            T = (0, _.useCallback)(
                                (e) => {
                                    x(e),
                                        S.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: S.current });
                                },
                                [a],
                            ),
                            k = (0, o.z)(() => {
                                const t = S.current,
                                    n = D.current,
                                    a = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(a && s && t && n)) return;
                                const i = Math.min(1, a / s);
                                return (
                                    (t.style.height = `${v(n, i)}px`),
                                    (t.style.display = 'flex'),
                                    A.current &&
                                        (1 === i
                                            ? A.current.classList.add(b.Z.base__nonActive)
                                            : A.current.classList.remove(b.Z.base__nonActive)),
                                    i
                                );
                            }),
                            I = (0, o.z)(() => {
                                const t = D.current,
                                    n = S.current,
                                    a = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(a && t && n && s)) return;
                                const u = e.animationScroll.scrollPosition.get(),
                                    r = Math.min(1, a / s),
                                    o = (0, i.u)(0, 1, u / (s - a)),
                                    l = (t.offsetHeight - v(t, r)) * o;
                                (n.style.transform = `translateY(${0 | l}px)`),
                                    ((e) => {
                                        if (C.current && F.current && D.current && S.current) {
                                            if (0 === Math.round(e))
                                                return C.current.classList.add(p), void F.current.classList.remove(p);
                                            if (
                                                ((t = D.current),
                                                (n = S.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return C.current.classList.remove(p), void F.current.classList.add(p);
                                            var t, n;
                                            C.current.classList.remove(p), F.current.classList.remove(p);
                                        }
                                    })(l);
                            }),
                            N = (0, o.z)(() => {
                                f(e, () => {
                                    k(), I();
                                });
                            });
                        (0, _.useEffect)(() => (0, u.v)(N)),
                            (0, _.useEffect)(() => {
                                const t = () => {
                                    f(e, () => {
                                        I();
                                    });
                                };
                                let n = E;
                                const a = () => {
                                    n(), (n = (0, u.v)(N));
                                };
                                return (
                                    e.events.on('recalculateContent', N),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        n(),
                                            e.events.off('recalculateContent', N),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', a);
                                    }
                                );
                            }, [e]),
                            (0, _.useEffect)(() => {
                                if (!y.pending) return;
                                const t = r.O.client.events.mouse.up(() => {
                                        T(g);
                                    }),
                                    n = r.O.client.events.mouse.move(([t]) => {
                                        f(e, (n) => {
                                            const s = D.current,
                                                i = S.current,
                                                u = e.getContainerSize();
                                            if (!s || !i || !u) return;
                                            const r = t.screenY - y.offset - s.getBoundingClientRect().y,
                                                o = (r / s.offsetHeight) * u;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: i, thumbOffset: r, contentOffset: o });
                                        });
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, y.offset, y.pending, a, T]);
                        const R = (0, l.B)((t) => e.applyStepTo(t), B, [e]),
                            O = R[0],
                            L = R[1];
                        (0, _.useEffect)(
                            () => (
                                document.addEventListener('mouseup', L, !0),
                                () => document.removeEventListener('mouseup', L, !0)
                            ),
                            [L],
                        );
                        const M = (e) => {
                            e.target.classList.contains(p) || (0, c.G)('highlight');
                        };
                        return d().createElement(
                            'div',
                            { className: s()(b.Z.base, t.base), ref: A, onWheel: e.handleMouseWheel },
                            d().createElement('div', {
                                className: s()(b.Z.topButton, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(p) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), O(m.Nm.Next));
                                },
                                ref: C,
                                onMouseEnter: M,
                            }),
                            d().createElement(
                                'div',
                                {
                                    className: s()(b.Z.track, t.track),
                                    onMouseDown: (t) => {
                                        const a = S.current;
                                        var s;
                                        a &&
                                            0 === t.button &&
                                            ((0, c.G)('play'),
                                            t.target === a
                                                ? T({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y })
                                                : ((s =
                                                      t.screenY > a.getBoundingClientRect().y ? m.Nm.Prev : m.Nm.Next),
                                                  S.current &&
                                                      f(e, (t) => {
                                                          if (!t) return;
                                                          const a = n(e),
                                                              i = e.clampPosition(t, t.scrollTop + a * s);
                                                          e.applyScroll(i);
                                                      })));
                                    },
                                    ref: D,
                                    onMouseEnter: M,
                                },
                                d().createElement('div', { ref: S, className: s()(b.Z.thumb, t.thumb) }),
                                d().createElement('div', { className: s()(b.Z.rail, t.rail) }),
                            ),
                            d().createElement('div', {
                                className: s()(b.Z.bottomButton, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(p) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), O(m.Nm.Prev));
                                },
                                onMouseUp: L,
                                ref: F,
                                onMouseEnter: M,
                            }),
                        );
                    });
            },
            1158: (e, t, n) => {
                'use strict';
                n.d(t, { K: () => c });
                var a = n(6483),
                    s = n.n(a),
                    i = n(6179),
                    u = n.n(i),
                    r = n(6225),
                    o = n(9605),
                    l = n(5636);
                const c = ({
                    children: e,
                    api: t,
                    className: n,
                    barClassNames: a,
                    areaClassName: c,
                    scrollClassName: _,
                    scrollClassNames: d,
                    getStepByRailClick: m,
                    onDrag: b,
                }) => {
                    const p = (0, i.useMemo)(() => {
                            const e = a || {};
                            return Object.assign({}, e, { base: s()(l.Z.base, e.base) });
                        }, [a]),
                        E = (0, i.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return u().createElement(
                        'div',
                        { className: s()(l.Z.defaultScroll, n), onWheel: t.handleMouseWheel },
                        u().createElement(
                            'div',
                            { className: s()(l.Z.area, c) },
                            u().createElement(o.Area, { className: _, classNames: d, api: E }, e),
                        ),
                        u().createElement(r.$Q, { getStepByRailClick: m, api: t, onDrag: b, classNames: p }),
                    );
                };
            },
            9605: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, { Area: () => d, Bar: () => o.$Q, Default: () => l.K, useVerticalScrollApi: () => c.c4 });
                var a = n(6483),
                    s = n.n(a),
                    i = n(1856),
                    u = n(6179),
                    r = n.n(u),
                    o = n(6225),
                    l = n(1158),
                    c = n(7701),
                    _ = n(5636);
                const d = ({ className: e, classNames: t, children: n, api: a }) => (
                    (0, u.useEffect)(() => (0, i.v)(a.recalculateContent)),
                    r().createElement(
                        'div',
                        { className: s()(_.Z.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                        r().createElement(
                            'div',
                            { className: s()(_.Z.content, null == t ? void 0 : t.content), ref: a.contentRef },
                            n,
                        ),
                    )
                );
                d.Default = l.K;
            },
            7701: (e, t, n) => {
                'use strict';
                n.d(t, { Nm: () => a.Nm, c4: () => s });
                var a = n(7308);
                const s = (0, a.EO)({
                    getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                    getContainerSize: (e) => e.scrollHeight,
                    getWrapperSize: (e) => e.offsetHeight,
                    setScrollPosition: (e, t) => {
                        e.scrollTop = t.value.scrollPosition;
                    },
                    getDirection: (e) => (e.deltaY > 1 ? a.Nm.Next : a.Nm.Prev),
                });
            },
            7308: (e, t, n) => {
                'use strict';
                n.d(t, { EO: () => b, Nm: () => d, he: () => m });
                var a = n(7515),
                    s = n(1856),
                    i = n(3138),
                    u = n(4532),
                    r = n(9653),
                    o = n(3815),
                    l = n(4489),
                    c = n(6179),
                    _ = n(7030);
                let d;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(d || (d = {}));
                const m = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    b = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: d,
                        getWrapperSize: b,
                        triggerMouseMoveOnUpdate: p = !1,
                    }) => {
                        const E = (e, n) => {
                            const s = t(e),
                                i = s[0],
                                u = s[1];
                            return u <= i ? 0 : (0, a.u)(i, u, n);
                        };
                        return (a = {}) => {
                            const g = a.settings,
                                h = void 0 === g ? m : g,
                                f = (0, c.useRef)(null),
                                v = (0, c.useRef)(null),
                                A = (0, r.q)(),
                                C = (0, l.f)(
                                    () => {
                                        i.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, _.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = f.current;
                                        t && (n(t, e), A.trigger('change', e), p && C());
                                    },
                                    onRest: (e) => A.trigger('rest', e),
                                    onStart: (e) => A.trigger('start', e),
                                    onPause: (e) => A.trigger('pause', e),
                                })),
                                D = F[0],
                                S = F[1],
                                B = (0, c.useCallback)(
                                    (e, t, n) => {
                                        var a;
                                        const s = D.scrollPosition.get(),
                                            i = (null != (a = D.scrollPosition.goal) ? a : 0) - s;
                                        return E(e, t * n + i + s);
                                    },
                                    [D.scrollPosition],
                                ),
                                w = (0, c.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const a = f.current;
                                        a &&
                                            S.start({
                                                scrollPosition: E(a, e),
                                                immediate: t,
                                                reset: n,
                                                config: h.animationConfig,
                                                from: { scrollPosition: E(a, D.scrollPosition.get()) },
                                            });
                                    },
                                    [S, h.animationConfig, D.scrollPosition],
                                ),
                                y = (0, c.useCallback)(
                                    (e) => {
                                        const t = f.current,
                                            n = v.current;
                                        if (!t || !n) return;
                                        const a = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return b(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, h.step),
                                            s = B(t, e, a);
                                        w(s);
                                    },
                                    [w, B, h.step],
                                ),
                                x = (0, c.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && y(d(e)),
                                            f.current && A.trigger('mouseWheel', e, D.scrollPosition, t(f.current));
                                    },
                                    [D.scrollPosition, y, A],
                                ),
                                T = (0, u.M)(
                                    () =>
                                        (0, s.v)(() => {
                                            const e = f.current;
                                            e &&
                                                (w(E(e, D.scrollPosition.goal), { immediate: !0 }),
                                                A.trigger('resizeHandled'));
                                        }),
                                    [w, D.scrollPosition.goal],
                                ),
                                k = (0, o.z)(() => {
                                    const e = f.current;
                                    if (!e) return;
                                    const t = E(e, D.scrollPosition.goal);
                                    t !== D.scrollPosition.goal && w(t, { immediate: !0 }),
                                        A.trigger('recalculateContent');
                                });
                            return (
                                (0, c.useEffect)(
                                    () => (
                                        window.addEventListener('resize', T),
                                        () => {
                                            window.removeEventListener('resize', T);
                                        }
                                    ),
                                    [T],
                                ),
                                (0, c.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (v.current ? b(v.current) : void 0),
                                        getContainerSize: () => (f.current ? e(f.current) : void 0),
                                        getBounds: () =>
                                            f.current
                                                ? t(f.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: h.step.clampedArrowStepTimeout,
                                        clampPosition: E,
                                        handleMouseWheel: x,
                                        applyScroll: w,
                                        applyStepTo: y,
                                        contentRef: f,
                                        wrapperRef: v,
                                        scrollPosition: S,
                                        animationScroll: D,
                                        recalculateContent: k,
                                        events: { on: A.on, off: A.off },
                                    }),
                                    [D.scrollPosition, w, y, A.off, A.on, k, x, S, h.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    };
            },
            794: (e, t, n) => {
                'use strict';
                n.d(t, { X: () => s });
                var a = n(7950);
                const s = { Vertical: n(9605), Horizontal: a };
            },
            6349: (e, t, n) => {
                'use strict';
                n.d(t, { l: () => d });
                var a = n(6483),
                    s = n.n(a),
                    i = n(6373),
                    u = n(1856),
                    r = n(6179),
                    o = n.n(r),
                    l = n(1699);
                const c = ['content', 'classMix', 'className'];
                function _() {
                    return (
                        (_ = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        _.apply(null, arguments)
                    );
                }
                const d = (e) => {
                    let t = e.content,
                        n = e.classMix,
                        a = e.className,
                        d = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, c);
                    const m = (0, r.useRef)(null),
                        b = (0, r.useState)(!0),
                        p = b[0],
                        E = b[1];
                    return (
                        (0, r.useEffect)(() =>
                            (0, u.v)(() => {
                                const e = m.current;
                                e && e.offsetWidth >= e.scrollWidth && E(!1);
                            }),
                        ),
                        o().createElement(
                            i.i,
                            { isEnabled: p, body: t },
                            o().createElement('div', _({}, d, { ref: m, className: s()(l.Z.base, a, n) }), t),
                        )
                    );
                };
            },
            7078: (e, t, n) => {
                'use strict';
                n.d(t, { t: () => o });
                var a = n(6179),
                    s = n.n(a),
                    i = n(2056);
                const u = ['children'];
                function r() {
                    return (
                        (r = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        r.apply(null, arguments)
                    );
                }
                const o = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, u);
                    return s().createElement(
                        i.u,
                        r(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            n,
                        ),
                        t,
                    );
                };
            },
            3415: (e, t, n) => {
                'use strict';
                n.d(t, { l: () => l });
                var a = n(6179),
                    s = n.n(a),
                    i = n(7078),
                    u = n(6373),
                    r = n(2056);
                function o() {
                    return (
                        (o = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        o.apply(null, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: t, className: n }) => {
                    if (!t) return e;
                    const a = s().createElement('div', { className: n }, e);
                    if (t.header || t.body) return s().createElement(u.i, t, a);
                    const l = t.contentId;
                    return l ? s().createElement(r.u, o({}, t, { contentId: l }), a) : s().createElement(i.t, t, a);
                };
            },
            6373: (e, t, n) => {
                'use strict';
                n.d(t, { i: () => l });
                var a = n(2056),
                    s = n(6179),
                    i = n.n(s);
                const u = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function r() {
                    return (
                        (r = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        r.apply(null, arguments)
                    );
                }
                const o = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            n = e.body,
                            l = e.header,
                            c = e.note,
                            _ = e.alert,
                            d = e.args,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, u);
                        const b = (0, s.useMemo)(() => {
                            const e = Object.assign({}, d, { body: n, header: l, note: c, alert: _ });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [_, n, l, c, d]);
                        return i().createElement(
                            a.u,
                            r(
                                {
                                    contentId:
                                        ((p = null == d ? void 0 : d.hasHtmlContent),
                                        p ? o.SimpleTooltipHtmlContent('resId') : o.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: b,
                                },
                                m,
                            ),
                            t,
                        );
                        var p;
                    };
            },
            2056: (e, t, n) => {
                'use strict';
                n.d(t, { u: () => l });
                var a = n(7902),
                    s = n(9916),
                    i = n(6179);
                const u = [
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
                function r(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const n = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                n.number = t;
                                break;
                            case 'boolean':
                                n.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                n.string = t.toString();
                        }
                        return n;
                    });
                }
                const o = (e, t, n = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: s.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                n,
                            ),
                        );
                    },
                    l = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            s = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            _ = e.onMouseDown,
                            d = e.onClick,
                            m = e.ignoreShowDelay,
                            b = void 0 !== m && m,
                            p = e.ignoreMouseClick,
                            E = void 0 !== p && p,
                            g = e.decoratorId,
                            h = void 0 === g ? 0 : g,
                            f = e.isEnabled,
                            v = void 0 === f || f,
                            A = e.targetId,
                            C = void 0 === A ? 0 : A,
                            F = e.onShow,
                            D = e.onHide,
                            S = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, u);
                        const B = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, i.useMemo)(() => C || (0, a.F)().resId, [C]),
                            y = (0, i.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (o(n, h, { isMouseEvent: !0, on: !0, arguments: r(s) }, w),
                                    F && F(),
                                    (B.current.isVisible = !0));
                            }, [n, h, s, w, F]),
                            x = (0, i.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        o(n, h, { on: !1 }, w),
                                        B.current.isVisible && D && D(),
                                        (B.current.isVisible = !1);
                                }
                            }, [n, h, w, D]),
                            T = (0, i.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(B.current.prevTarget) && x();
                                    }, 200)));
                            }, []);
                        return (
                            (0, i.useEffect)(() => {
                                const e = B.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', T, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', T, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, i.useEffect)(() => {
                                !1 === v && x();
                            }, [v, x]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', x),
                                    () => {
                                        window.removeEventListener('mouseleave', x), x();
                                    }
                                ),
                                [x],
                            ),
                            v
                                ? (0, i.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((k = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((B.current.timeoutId = window.setTimeout(y, b ? 100 : 400)),
                                                          l && l(e),
                                                          k && k(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  x(), null == c || c(t), null == e || e(t);
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  !1 === E && x(), null == d || d(t), null == e || e(t);
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  !1 === E && x(), null == _ || _(t), null == e || e(t);
                                              })(t.props.onMouseDown),
                                          },
                                          S,
                                      ),
                                  )
                                : t
                        );
                        var k;
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
            7515: (e, t, n) => {
                'use strict';
                n.d(t, { u: () => a });
                const a = (e, t, n) => (n < e ? e : n > t ? t : n);
            },
            1856: (e, t, n) => {
                'use strict';
                n.d(t, { v: () => a });
                const a = (e) => {
                    let t,
                        n = null;
                    return (
                        (n = requestAnimationFrame(() => {
                            n = requestAnimationFrame(() => {
                                (n = null), (t = e());
                            });
                        })),
                        () => {
                            'function' == typeof t && t(), null !== n && cancelAnimationFrame(n);
                        }
                    );
                };
            },
            122: (e, t, n) => {
                'use strict';
                n.d(t, { F: () => a });
                const a = (e, t) => {
                    let n;
                    const a = setTimeout(() => {
                        n = e();
                    }, t);
                    return () => {
                        'function' == typeof n && n(), clearTimeout(a);
                    };
                };
            },
            8246: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => u });
                var a = n(3138);
                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const i = (e) => (0 === e ? window : window.subViews.get(e));
                function u({ initializer: e = !0, rootId: t = 0, getRoot: n = i, context: u = 'model' } = {}) {
                    const r = new Map();
                    function o(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? r.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, n) => {
                            n.forEach((t) => {
                                const n = r.get(t);
                                void 0 !== n && n(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const a = n(t),
                            s = u.split('.').reduce((e, t) => e[t], a);
                        return 'string' != typeof e || 0 === e.length
                            ? s
                            : e.split('.').reduce((e, t) => {
                                  const n = e[t];
                                  return 'function' == typeof n ? n.bind(e) : n;
                              }, s);
                    };
                    return {
                        subscribe: (n, s) => {
                            const i = 'string' == typeof s ? `${u}.${s}` : u,
                                o = a.O.view.addModelObserver(i, t, !0);
                            return r.set(o, n), e && n(l(s)), o;
                        },
                        readByPath: l,
                        createCallback: (e, t) => {
                            const n = l(t);
                            return (...t) => {
                                n(e(...t));
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
                                    n = (function (e, t) {
                                        var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                                        if (n) return (n = n.call(e)).next.bind(n);
                                        if (
                                            Array.isArray(e) ||
                                            (n = (function (e, t) {
                                                if (e) {
                                                    if ('string' == typeof e) return s(e, t);
                                                    var n = {}.toString.call(e).slice(8, -1);
                                                    return (
                                                        'Object' === n && e.constructor && (n = e.constructor.name),
                                                        'Map' === n || 'Set' === n
                                                            ? Array.from(e)
                                                            : 'Arguments' === n ||
                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                                              ? s(e, t)
                                                              : void 0
                                                    );
                                                }
                                            })(e)) ||
                                            (t && e && 'number' == typeof e.length)
                                        ) {
                                            n && (e = n);
                                            var a = 0;
                                            return function () {
                                                return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                                            };
                                        }
                                        throw new TypeError(
                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                        );
                                    })(r.keys());
                                !(e = n()).done;

                            )
                                o(e.value, t);
                        },
                        unsubscribe: o,
                    };
                }
            },
            3215: (e, t, n) => {
                'use strict';
                n.d(t, { q: () => o });
                var a = n(4598),
                    s = n(9174),
                    i = n(6179),
                    u = n.n(i),
                    r = n(8246);
                const o = () => (e, t) => {
                    const n = (0, i.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: l, children: c, mocks: _ }) {
                            const d = (0, i.useRef)([]),
                                m = (n, i, u) => {
                                    var o;
                                    const l = r.U(i),
                                        c =
                                            'real' === n
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (o = null == u ? void 0 : u.getter) ? o : () => {},
                                                  }),
                                        _ = (e) =>
                                            'mocks' === n ? (null == u ? void 0 : u.getter(e)) : c.readByPath(e),
                                        m = (e) => d.current.push(e),
                                        b = e({
                                            mode: n,
                                            readByPath: _,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const i = null != t ? t : _(e),
                                                        u = s.LO.box(i, { equals: a.jv });
                                                    return (
                                                        'real' === n &&
                                                            c.subscribe(
                                                                (0, s.aD)((e) => u.set(e)),
                                                                e,
                                                            ),
                                                        u
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const i = null != t ? t : _(e),
                                                        u = s.LO.box(i, { equals: a.jv });
                                                    return (
                                                        'real' === n &&
                                                            c.subscribe(
                                                                (0, s.aD)((e) => u.set(e)),
                                                                e,
                                                            ),
                                                        u
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const a = _(t);
                                                    if (Array.isArray(e)) {
                                                        const i = e.reduce(
                                                            (e, t) => ((e[t] = s.LO.box(a[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === n &&
                                                                c.subscribe(
                                                                    (0, s.aD)((t) => {
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
                                                            u = Object.entries(i),
                                                            r = u.reduce(
                                                                (e, [t, n]) => ((e[n] = s.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === n &&
                                                                c.subscribe(
                                                                    (0, s.aD)((e) => {
                                                                        u.forEach(([t, n]) => {
                                                                            r[n].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            r
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: m,
                                        }),
                                        p = { mode: n, model: b, externalModel: c, cleanup: m };
                                    return {
                                        model: b,
                                        controls: 'mocks' === n && u ? u.controls(p) : t(p),
                                        externalModel: c,
                                        mode: n,
                                    };
                                },
                                b = (0, i.useRef)(!1),
                                p = (0, i.useState)(o),
                                E = p[0],
                                g = p[1],
                                h = (0, i.useState)(() => m(o, l, _)),
                                f = h[0],
                                v = h[1];
                            return (
                                (0, i.useEffect)(() => {
                                    b.current ? v(m(E, l, _)) : (b.current = !0);
                                }, [_, E, l]),
                                (0, i.useEffect)(() => {
                                    g(o);
                                }, [o]),
                                (0, i.useEffect)(
                                    () => () => {
                                        f.externalModel.dispose(), d.current.forEach((e) => e());
                                    },
                                    [f],
                                ),
                                u().createElement(n.Provider, { value: f }, c)
                            );
                        },
                        () => (0, i.useContext)(n),
                    ];
                };
            },
            7522: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
                            n = Math.pow;
                        return e < 0.5 ? (1 - t(1 - n(2 * e, 2))) / 2 : (t(1 - n(-2 * e + 2, 2)) + 1) / 2;
                    },
                    easeOutBack: (e) => 1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2),
                    bezier: (e, t, n, a) => (s) =>
                        (1 - s) * (1 - s) * (1 - s) * e +
                        3 * (1 - s) * (1 - s) * s * t +
                        3 * (1 - s) * s * s * n +
                        s * s * s * a,
                };
            },
            527: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, { mouse: () => c, off: () => o, on: () => r, onResize: () => i, onScaleUpdated: () => u });
                var a = n(2472),
                    s = n(1176);
                const i = (0, a.E)('clientResized'),
                    u = (0, a.E)('self.onScaleUpdated'),
                    r = (e, t) => engine.on(e, t),
                    o = (e, t) => engine.off(e, t),
                    l = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    c = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, s.R)(!1);
                        }
                        function n() {
                            e.enabled && (0, s.R)(!0);
                        }
                        function a() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', n))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', n))
                                : (0, s.R)(!1);
                        }
                        const i = ['down', 'up', 'move'].reduce(
                            (t, n) => (
                                (t[n] = (function (t) {
                                    return (n) => {
                                        e.listeners += 1;
                                        let s = !0;
                                        const i = `mouse${t}`,
                                            u = l[t]((e) => n([e, 'outside']));
                                        function r(e) {
                                            n([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, r),
                                            a(),
                                            () => {
                                                s &&
                                                    (u(),
                                                    window.removeEventListener(i, r),
                                                    (e.listeners -= 1),
                                                    a(),
                                                    (s = !1));
                                            }
                                        );
                                    };
                                })(n)),
                                t
                            ),
                            {},
                        );
                        return Object.assign({}, i, {
                            disable() {
                                (e.enabled = !1), a();
                            },
                            enable() {
                                (e.enabled = !0), a();
                            },
                            enableOutside() {
                                e.enabled && (0, s.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, s.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => u,
                        getSize: () => i,
                        graphicsQuality: () => r,
                        playSound: () => s.G,
                        setRTPC: () => s.E,
                    });
                var a = n(527),
                    s = n(2493);
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function u(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const r = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, n) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => a });
            },
            2493: (e, t, n) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function s(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => s, G: () => a });
            },
            2472: (e, t, n) => {
                'use strict';
                function a(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => a });
            },
            3138: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => i });
                var a = n(5959),
                    s = n(514);
                const i = { view: n(7641), client: a, sound: s.ZP };
            },
            514: (e, t, n) => {
                'use strict';
                n.d(t, { ZP: () => u });
                var a = n(5959);
                const s = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(s).reduce((e, t) => ((e[t] = () => (0, a.playSound)(s[t])), e), {}),
                    u = { play: Object.assign({}, i, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            3722: (e, t, n) => {
                'use strict';
                function a(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function s(e, t, n) {
                    return `url(${a(e, t, n)})`;
                }
                n.r(t), n.d(t, { getBgUrl: () => s, getTextureUrl: () => a });
            },
            6112: (e, t, n) => {
                'use strict';
                n.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => s });
                var a = n(2472);
                const s = {
                    onTextureFrozen: (0, a.E)('self.onTextureFrozen'),
                    onTextureReady: (0, a.E)('self.onTextureReady'),
                    onDomBuilt: (0, a.E)('self.onDomBuilt'),
                    onLoaded: (0, a.E)('self.onLoaded'),
                    onDisplayChanged: (0, a.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, a.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, a.E)('children.onAdded'),
                        onLoaded: (0, a.E)('children.onLoaded'),
                        onRemoved: (0, a.E)('children.onRemoved'),
                        onAttached: (0, a.E)('children.onAttached'),
                        onTextureReady: (0, a.E)('children.onTextureReady'),
                        onRequestPosition: (0, a.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => o,
                        children: () => a,
                        displayStatus: () => s.W,
                        displayStatusIs: () => B,
                        events: () => i.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => D,
                        freezeTextureBeforeResize: () => E,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => S,
                        getScale: () => g,
                        getSize: () => m,
                        getViewGlobalPosition: () => p,
                        isEventHandled: () => F,
                        isFocused: () => A,
                        pxToRem: () => h,
                        remToPx: () => f,
                        resize: () => b,
                        sendEvent: () => u.qP,
                        setAnimateWindow: () => v,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => y,
                    });
                var a = n(3722),
                    s = n(6112),
                    i = n(6538),
                    u = n(8566);
                const r = 15;
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, r);
                }
                function c(e, t, n, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, a);
                }
                function _(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, r);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function b(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function p(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: f(t.x), y: f(t.y) };
                }
                function E() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function g() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function f(e) {
                    return viewEnv.remToPx(e);
                }
                function v(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function A() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function F() {
                    return viewEnv.isEventHandled();
                }
                function D() {
                    viewEnv.forceTriggerMouseMove();
                }
                function S() {
                    return viewEnv.getShowingStatus();
                }
                const B = Object.keys(s.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === s.W[t]), e),
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
                    y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                'use strict';
                n.d(t, { qP: () => i });
                const a = ['args'],
                    s = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                u = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            n[a] = e[a];
                                        }
                                    return n;
                                })(t, a);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, u, {
                                          arguments:
                                              ((s = i),
                                              Object.entries(s).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, u));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var s;
                    },
                    i = {
                        close(e) {
                            s('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            s(64);
                        },
                        move(e) {
                            s(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, n) => {
                'use strict';
                function a() {}
                function s() {
                    return !1;
                }
                n.d(t, { ZT: () => a, jv: () => s }), console.log;
            },
            7902: (e, t, n) => {
                'use strict';
                n.d(t, { F: () => a });
                const a = (e = 1) => {
                    const t = new Error().stack;
                    let n,
                        a = R.invalid('resId');
                    return (
                        t &&
                            ((n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== n &&
                                window.subViews[n] &&
                                (a = window.subViews[n].id)),
                        { caller: n, stack: t, resId: a }
                    );
                };
            },
            6536: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => s });
                var a = n(6179);
                const s = (e) => {
                    const t = (0, a.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            4532: (e, t, n) => {
                'use strict';
                n.d(t, { M: () => s });
                var a = n(6179);
                const s = (e, t = []) => {
                    const n = (0, a.useRef)(),
                        s = (0, a.useCallback)((...t) => {
                            n.current && n.current(), (n.current = e(...t));
                        }, t);
                    return (
                        (0, a.useEffect)(
                            () => () => {
                                n.current && n.current();
                            },
                            [s],
                        ),
                        s
                    );
                };
            },
            9653: (e, t, n) => {
                'use strict';
                n.d(t, { q: () => i });
                var a = n(6179);
                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const i = () => {
                    const e = (0, a.useMemo)(() => ({}), []),
                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                        n = (e, n) => {
                            t(e).set(n, n);
                        },
                        i = (e, n) => {
                            t(e).delete(n);
                        },
                        u = (e, ...n) => {
                            for (
                                var a,
                                    i = (function (e, t) {
                                        var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                                        if (n) return (n = n.call(e)).next.bind(n);
                                        if (
                                            Array.isArray(e) ||
                                            (n = (function (e, t) {
                                                if (e) {
                                                    if ('string' == typeof e) return s(e, t);
                                                    var n = {}.toString.call(e).slice(8, -1);
                                                    return (
                                                        'Object' === n && e.constructor && (n = e.constructor.name),
                                                        'Map' === n || 'Set' === n
                                                            ? Array.from(e)
                                                            : 'Arguments' === n ||
                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                                              ? s(e, t)
                                                              : void 0
                                                    );
                                                }
                                            })(e)) ||
                                            (t && e && 'number' == typeof e.length)
                                        ) {
                                            n && (e = n);
                                            var a = 0;
                                            return function () {
                                                return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                                            };
                                        }
                                        throw new TypeError(
                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                        );
                                    })(t(e).values());
                                !(a = i()).done;

                            )
                                (0, a.value)(...n);
                        };
                    return (0, a.useMemo)(() => ({ on: n, off: i, trigger: u }), []);
                };
            },
            3815: (e, t, n) => {
                'use strict';
                n.d(t, { z: () => i });
                var a = n(6179);
                const s = [];
                function i(e) {
                    const t = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, t.current)(...e), s)
                    );
                }
            },
            8526: (e, t, n) => {
                'use strict';
                n.d(t, { I9: () => o, gd: () => r });
                var a = n(3138),
                    s = n(5521),
                    i = (n(9916), n(6179));
                const u = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function r(e = s.n.NONE, t = u, n = !1, r = !1) {
                    (0, i.useEffect)(() => {
                        if (e !== s.n.NONE)
                            return (
                                window.addEventListener('keydown', i, n),
                                () => {
                                    window.removeEventListener('keydown', i, n);
                                }
                            );
                        function i(s) {
                            if (s.keyCode === e) {
                                if (!r && a.O.view.isEventHandled()) return;
                                a.O.view.setEventHandled(), t(s), n && s.stopPropagation();
                            }
                        }
                    }, [t, e, n, r]);
                }
                function o(e) {
                    r(s.n.ESCAPE, e);
                }
            },
            5415: (e, t, n) => {
                'use strict';
                n.d(t, { Aq: () => o, GS: () => l, cJ: () => u, fd: () => r });
                var a = n(6179),
                    s = n(7739),
                    i = n(1043);
                let u, r, o;
                !(function (e) {
                    (e[(e.ExtraSmall = i.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = i.j.small.width)] = 'Small'),
                        (e[(e.Medium = i.j.medium.width)] = 'Medium'),
                        (e[(e.Large = i.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = i.j.extraLarge.width)] = 'ExtraLarge');
                })(u || (u = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = i.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = i.j.small.width)] = 'Small'),
                            (e[(e.Medium = i.j.medium.width)] = 'Medium'),
                            (e[(e.Large = i.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = i.j.extraLarge.width)] = 'ExtraLarge');
                    })(r || (r = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = i.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = i.j.small.height)] = 'Small'),
                            (e[(e.Medium = i.j.medium.height)] = 'Medium'),
                            (e[(e.Large = i.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = i.j.extraLarge.height)] = 'ExtraLarge');
                    })(o || (o = {}));
                const l = () => {
                    const e = (0, a.useContext)(s.YN),
                        t = e.width,
                        n = e.height,
                        i = ((e) => {
                            switch (!0) {
                                case e.extraLarge:
                                    return u.ExtraLarge;
                                case e.large:
                                    return u.Large;
                                case e.medium:
                                    return u.Medium;
                                case e.small:
                                    return u.Small;
                                case e.extraSmall:
                                    return u.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), u.ExtraSmall;
                            }
                        })(e),
                        l = ((e) => {
                            switch (!0) {
                                case e.extraLargeWidth:
                                    return r.ExtraLarge;
                                case e.largeWidth:
                                    return r.Large;
                                case e.mediumWidth:
                                    return r.Medium;
                                case e.smallWidth:
                                    return r.Small;
                                case e.extraSmallWidth:
                                    return r.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), r.ExtraSmall;
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
                    return { mediaSize: i, mediaWidth: l, mediaHeight: c, remScreenWidth: t, remScreenHeight: n };
                };
            },
            2039: (e, t, n) => {
                'use strict';
                n.d(t, { b: () => s, k: () => i });
                var a = n(6179);
                const s = (e) => {
                        (0, a.useEffect)(e, []);
                    },
                    i = (e) => {
                        (0, a.useEffect)(() => e, []);
                    };
            },
            560: (e, t, n) => {
                'use strict';
                n.d(t, { B: () => s });
                var a = n(6179);
                function s(e, t, n = []) {
                    const s = (0, a.useRef)(0),
                        i = (0, a.useCallback)(() => window.clearInterval(s.current), n || []);
                    (0, a.useEffect)(() => i, [i]);
                    const u = (null != n ? n : []).concat([t]);
                    return [
                        (0, a.useCallback)((n) => {
                            (s.current = window.setInterval(() => e(n, !0), t)), e(n, !1);
                        }, u),
                        i,
                    ];
                }
            },
            4419: (e, t, n) => {
                'use strict';
                n.d(t, { y: () => i });
                var a = n(8045),
                    s = n(6179);
                const i = (e, t, n = !0) => {
                    const i = (0, s.useCallback)(
                        (e) => {
                            const n = e[0];
                            t && t(n);
                        },
                        [t],
                    );
                    (0, s.useEffect)(() => {
                        if (!e.current || !n) return;
                        const t = new a.Z((e) => i(e));
                        return (
                            t.observe(e.current),
                            () => {
                                t.disconnect();
                            }
                        );
                    }, [i, n, e]);
                };
            },
            4489: (e, t, n) => {
                'use strict';
                n.d(t, { f: () => i });
                var a = n(5139),
                    s = n(6179);
                function i(e, t, n) {
                    const i = (0, s.useMemo)(() => (0, a.Z)(n, e), t);
                    return (0, s.useEffect)(() => i.cancel, [i]), i;
                }
            },
            1396: (e, t, n) => {
                'use strict';
                n.d(t, { K: () => u });
                var a = n(6179),
                    s = n(2039);
                const i = 0;
                function u() {
                    const e = (0, a.useRef)(i);
                    return (
                        (0, s.k)(() => {
                            window.clearTimeout(e.current);
                        }),
                        (0, a.useMemo)(
                            () => ({
                                run: (t, n) => {
                                    window.clearTimeout(e.current),
                                        (e.current = window.setTimeout(() => {
                                            (e.current = i), t();
                                        }, n));
                                },
                                clear: () => {
                                    window.clearTimeout(e.current), (e.current = i);
                                },
                                get isRunning() {
                                    return e.current !== i;
                                },
                            }),
                            [],
                        )
                    );
                }
            },
            5521: (e, t, n) => {
                'use strict';
                let a, s;
                n.d(t, { n: () => a }),
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
                    })(a || (a = {})),
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
                    })(s || (s = {}));
            },
            9480: (e, t, n) => {
                'use strict';
                n.d(t, {
                    G: () => o,
                    U2: () => s,
                    UI: () => u,
                    cx: () => m,
                    hX: () => l,
                    q9: () => _,
                    sE: () => c,
                    u4: () => b,
                    v: () => d,
                    yW: () => r,
                });
                var a = n(8968);
                function s(e, t) {
                    var n;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (n = e[t]) ? void 0 : n.value;
                }
                const i = s;
                function u(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, n, a) => t(null == e ? void 0 : e.value, n, a));
                }
                function r(e, t) {
                    if (Array.isArray(e)) return e.every(t);
                    for (let n = 0; n < e.length; n++) if (!t(i(e, n), n, e)) return !1;
                    return !0;
                }
                function o(e, t) {
                    if (Array.isArray(e)) return e.some(t);
                    for (let n = 0; n < e.length; n++) if (t(i(e, n), n, e)) return !0;
                    return !1;
                }
                function l(e, t) {
                    if (Array.isArray(e)) return e.filter(t);
                    const n = [];
                    for (let s = 0; s < e.length; s++) {
                        var a;
                        const i = null == (a = e[s]) ? void 0 : a.value;
                        t(i, s, e) && n.push(i);
                    }
                    return n;
                }
                function c(e, t) {
                    for (let s = 0; s < e.length; s++) {
                        const i =
                            ((n = e[s]),
                            (a = void 0),
                            n && 'value' in n && null != (a = n.constructor) && a.name.includes('ArrayItem')
                                ? null == n
                                    ? void 0
                                    : n.value
                                : n);
                        if (t(i, s, e)) return i;
                    }
                    var n, a;
                }
                function _(e, t) {
                    for (let n = 0; n < e.length; n++) if (i(e, n) === t) return !0;
                    return !1;
                }
                function d(e, t) {
                    return (function (e, t, n) {
                        const a = [];
                        for (let s = 0; s < e.length; s++) {
                            const u = i(e, s);
                            t(u, s, e) && a.push(n(u, s, e));
                        }
                        return a;
                    })(e, a.C, t);
                }
                function m(e, t) {
                    for (let n = 0; n < e.length; n++) if (t(i(e, n), n, e)) return n;
                }
                function b(e, t, n) {
                    if (Array.isArray(e)) return e.reduce(t, n);
                    let a = n;
                    for (let n = 0; n < e.length; n++) a = t(a, i(e, n), n, e);
                    return a;
                }
            },
            1641: (e, t, n) => {
                'use strict';
                let a;
                n.d(t, { t: () => a }),
                    (function (e) {
                        (e[(e.LEFT = 0)] = 'LEFT'),
                            (e[(e.WHEEL = 1)] = 'WHEEL'),
                            (e[(e.RIGHT = 2)] = 'RIGHT'),
                            (e[(e.FOURTH = 3)] = 'FOURTH'),
                            (e[(e.FIFTH = 4)] = 'FIFTH');
                    })(a || (a = {}));
            },
            8968: (e, t, n) => {
                'use strict';
                function a(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                n.d(t, { C: () => a });
            },
            7727: (e, t, n) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                n.d(t, { $: () => s, G: () => a });
                const s = {
                    playHighlight() {
                        a('highlight');
                    },
                    playClick() {
                        a('play');
                    },
                    playYes() {
                        a('yes1');
                    },
                };
            },
            3649: (e, t, n) => {
                'use strict';
                n.d(t, {
                    BN: () => r,
                    Eg: () => c,
                    Uw: () => E,
                    WU: () => i,
                    e: () => o,
                    uF: () => u,
                    v2: () => s,
                    z4: () => l,
                });
                var a = n(1281);
                let s;
                function i(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function u(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const n = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(n, -n)]);
                    });
                }
                function r(e) {
                    return e.replace(/-/g, '_');
                }
                function o(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(s || (s = {}));
                const l = (e) => e.replace(/&nbsp;/g, ' '),
                    c = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    _ = (e, t, n) => {
                        if (n % 2) {
                            const n = e.pop();
                            return [...e, n + t];
                        }
                        return [...e, t];
                    },
                    d = (e, t, n) => {
                        if (0 === n) return [t];
                        if (n % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const n = e.pop();
                            return [...e, n + t];
                        }
                    },
                    m = (e, t, n = s.left) => e.split(t).reduce(n === s.left ? _ : d, []),
                    b = (() => {
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
                    p = ['zh_cn', 'zh_sg', 'zh_tw'],
                    E = (e, t, n) =>
                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                            n && e in n
                                ? n[e]
                                : ((e, t = s.left) => {
                                      const n = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                      return p.includes(n)
                                          ? b(e)
                                          : 'ja' === n
                                            ? (0, a.D4)()
                                                  .parse(e)
                                                  .map((e) => l(e))
                                            : ((e, t = s.left) => {
                                                  let n = [];
                                                  const a =
                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                      i = l(e);
                                                  return (
                                                      m(i, /( )/, t).forEach((e) => (n = n.concat(m(e, a, s.left)))), n
                                                  );
                                              })(e, t);
                                  })(e, t),
                        );
            },
            5139: (e, t, n) => {
                'use strict';
                function a(e, t, n, a) {
                    let s,
                        i = !1,
                        u = 0;
                    function r() {
                        s && clearTimeout(s);
                    }
                    function o(...o) {
                        const l = this,
                            c = Date.now() - u;
                        function _() {
                            (u = Date.now()), n.apply(l, o);
                        }
                        i ||
                            (a && !s && _(),
                            r(),
                            void 0 === a && c > e
                                ? _()
                                : !0 !== t &&
                                  (s = setTimeout(
                                      a
                                          ? function () {
                                                s = void 0;
                                            }
                                          : _,
                                      void 0 === a ? e - c : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof t && ((a = n), (n = t), (t = void 0)),
                        (o.cancel = function () {
                            r(), (i = !0);
                        }),
                        o
                    );
                }
                n.d(t, { Z: () => a });
            },
            1358: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => i });
                var a = n(3138);
                class s {
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
                        return window.__dataTracker || (window.__dataTracker = new s()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, n = 0, s = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = a.O.view.addModelObserver(e, n, s);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(i) : (this._views[n] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
                        );
                    }
                    removeCallback(e, t = 0) {
                        let n = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((n = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            n || console.error("Can't remove callback by id:", e),
                            n
                        );
                    }
                    _emmitDataChanged(e, t, n) {
                        n.forEach((n) => {
                            const a = this._callbacks[n];
                            void 0 !== a && a(e, t);
                        });
                    }
                }
                s.__instance = void 0;
                const i = s;
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
            9916: (e, t, n) => {
                'use strict';
                n.d(t, { Sw: () => i.Z, B3: () => l, Z5: () => u.Z5, B0: () => r, c9: () => f, ry: () => h });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let a = e.target;
                                    do {
                                        if (a === t) return;
                                        a = a.parentNode;
                                    } while (a);
                                    n();
                                });
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const n = e,
                            a = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== a)),
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
                a.__instance = void 0;
                const s = a;
                var i = n(1358),
                    u = n(8613);
                let r;
                var o;
                ((o = r || (r = {}))[(o.UNDEFINED = 0)] = 'UNDEFINED'),
                    (o[(o.TOOLTIP = 1)] = 'TOOLTIP'),
                    (o[(o.POP_OVER = 2)] = 'POP_OVER'),
                    (o[(o.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (o[(o.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (o[(o.MOVE = 16)] = 'MOVE'),
                    (o[(o.CLOSE = 32)] = 'CLOSE'),
                    (o[(o.MINIMIZE = 64)] = 'MINIMIZE');
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = n(5521),
                    b = n(3138);
                const p = ['args'];
                function E(e, t, n, a, s, i, u) {
                    try {
                        var r = e[i](u),
                            o = r.value;
                    } catch (e) {
                        return void n(e);
                    }
                    r.done ? t(o) : Promise.resolve(o).then(a, s);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    h = (function () {
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
                                        n = arguments;
                                    return new Promise(function (a, s) {
                                        var i = e.apply(t, n);
                                        function u(e) {
                                            E(i, a, s, u, r, 'next', e);
                                        }
                                        function r(e) {
                                            E(i, a, s, u, r, 'throw', e);
                                        }
                                        u(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    f = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const s = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            n[a] = e[a];
                                        }
                                    return n;
                                })(t, p);
                            void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((a = s),
                                              Object.entries(a).map(([e, t]) => {
                                                  const n = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          n.number = t;
                                                          break;
                                                      case 'boolean':
                                                          n.bool = t;
                                                          break;
                                                      default:
                                                          n.string = t.toString();
                                                  }
                                                  return n;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var a;
                    },
                    v = () => f(r.CLOSE),
                    A = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var C = n(7572);
                const F = s.instance,
                    D = {
                        DataTracker: i.Z,
                        ViewModel: C.Z,
                        ViewEventType: r,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: _,
                        DateFormatType: d,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => f(r.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: v,
                        sendClosePopOverEvent: () => f(r.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            f(r.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, a, s = R.invalid('resId'), i) => {
                            const u = b.O.view.getViewGlobalPosition(),
                                o = n.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                _ = o.width,
                                d = o.height,
                                m = {
                                    x: b.O.view.pxToRem(l) + u.x,
                                    y: b.O.view.pxToRem(c) + u.y,
                                    width: b.O.view.pxToRem(_),
                                    height: b.O.view.pxToRem(d),
                                };
                            f(r.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: s,
                                direction: t,
                                bbox: g(m),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => A(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            A(e, v);
                        },
                        handleViewEvent: f,
                        onBindingsReady: h,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(r.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(r.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(r.POP_OVER),
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const s = Object.prototype.toString.call(t[a]);
                                    if (s.startsWith('[object CoherentArrayProxy]')) {
                                        const s = t[a];
                                        n[a] = [];
                                        for (let t = 0; t < s.length; t++) n[a].push({ value: e(s[t].value) });
                                    } else
                                        s.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[a] = e(t[a]))
                                            : (n[a] = t[a]);
                                }
                            return n;
                        },
                        ClickOutsideManager: F,
                        SystemLocale: u.Z5,
                        UserLocale: u.cy,
                    };
                window.ViewEnvHelper = D;
            },
            8613: (e, t, n) => {
                'use strict';
                n.d(t, { Z5: () => a, cy: () => s });
                const a = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
            },
            3618: (e, t, n) => {
                'use strict';
                n.d(t, { w: () => m });
                var a = n(6483),
                    s = n.n(a),
                    i = n(3415),
                    u = n(4419),
                    r = n(6179),
                    o = n.n(r),
                    l = n(8055),
                    c = n(3310),
                    _ = n(131),
                    d = n(9053);
                const m = o().memo(
                    ({
                        text: e,
                        classMix: t,
                        onSizeChanged: n,
                        binding: a,
                        isTooltipEnable: m = !1,
                        isTruncationAvailable: b = !1,
                        customTooltipArgs: p,
                        targetId: E,
                        justifyContent: g = d.v2.FlexStart,
                        alignContent: h = d.v2.FlexStart,
                        truncateIdentify: f = d.YA,
                    }) => {
                        const v = (0, r.useRef)(null),
                            A = (0, r.useRef)({ height: 0, width: 0 }),
                            C = (0, r.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                            F = C[0],
                            D = C[1],
                            S = (0, r.useMemo)(() => (0, c.s)(e, a, { justifyContent: g }), [a, g, e]),
                            B = (0, r.useMemo)(() => {
                                if (m && F.isTruncated && (!a || !Object.values(a).find((e) => 'object' == typeof e)))
                                    return {
                                        args: Object.assign({ text: e }, p, {
                                            stringifyKwargs: a ? JSON.stringify(a) : '',
                                        }),
                                        contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                        targetId: E,
                                    };
                            }, [a, m, E, e, p, F.isTruncated]),
                            w = (0, r.useCallback)(
                                (e) => {
                                    (A.current.width = e.contentRect.width), (A.current.height = e.contentRect.height);
                                    const t = (0, _.T)(v, S, A.current, f),
                                        a = t[0],
                                        s = t[1];
                                    D({ elementList: a, isTruncated: s, isTruncateFinished: !0 }), n && n(s);
                                },
                                [n, f, S],
                            ),
                            y = (0, r.useMemo)(() => ({ justifyContent: g, alignContent: h }), [h, g]);
                        return (
                            (0, u.y)(v, w, b),
                            o().createElement(
                                'div',
                                {
                                    className: s()(
                                        l.Z.base,
                                        t,
                                        l.Z.base__zeroPadding,
                                        b && l.Z.base__isTruncationAvailable,
                                    ),
                                    style: y,
                                },
                                o().createElement('div', { className: l.Z.unTruncated, ref: v }, S),
                                o().createElement(
                                    i.l,
                                    {
                                        tooltipArgs: B,
                                        className: s()(
                                            l.Z.tooltip,
                                            l.Z[`tooltip__justify-${g}`],
                                            l.Z[`tooltip__align-${h}`],
                                        ),
                                    },
                                    o().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                l.Z.truncated,
                                                !F.isTruncateFinished && b && l.Z.truncated__hide,
                                            ),
                                            style: y,
                                        },
                                        F.isTruncateFinished && b ? F.elementList : S,
                                    ),
                                ),
                            )
                        );
                    },
                );
            },
            3310: (e, t, n) => {
                'use strict';
                n.d(t, { s: () => d });
                var a = n(3649),
                    s = n(6799),
                    i = n(6960),
                    u = n(9053);
                const r = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    o = u.u6
                        ? (e) => {
                              const t = [];
                              return (
                                  (0, i.Z)(
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
                                                      (0, i.Z)(
                                                          e,
                                                          /\S\s+/g,
                                                          (e) => {
                                                              var n;
                                                              R.strings.settings.LANGUAGE_CODE().toLowerCase() === u.Co
                                                                  ? t.push(...((n = e), n.match(r) || []))
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
                              const n = /[\s\u002d]/g;
                              let a = n.exec(e);
                              if (!a) return [e];
                              const s = [];
                              let i = 0;
                              for (; a; ) {
                                  const r = t.justifyContent === u.v2.FlexEnd ? a.index : n.lastIndex;
                                  s.push(e.slice(i, r)), (i = r), (a = n.exec(e));
                              }
                              return i !== e.length && s.push(e.slice(i)), s;
                          },
                    l = (e, t = '', n) => {
                        const a = [];
                        return (
                            (0, i.Z)(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    a.push({ blockType: u.kH.Word, colorTag: t, childList: o(e, n) });
                                },
                                (e) => {
                                    const n = e[0],
                                        s = u.aF[n.charAt(0)];
                                    s === u.kH.LineBreak
                                        ? a.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: u.kH.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let n = 0; n < e.length - 1; n++)
                                                      t.push({
                                                          blockType: u.kH.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(n),
                                          )
                                        : a.push({ blockType: s, colorTag: t, childList: [n] });
                                },
                            ),
                            a
                        );
                    },
                    c = (e, t, n = '', a) => {
                        const s = [];
                        return (
                            (0, i.Z)(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    s.push(...l(e, n, a));
                                },
                                (e) => {
                                    const i = e[1],
                                        r = void 0 === t[i] ? e[0] : t[i];
                                    'string' == typeof r || 'number' == typeof r
                                        ? s.push(...l(String(r), n, a))
                                        : s.push({ blockType: u.kH.Binding, colorTag: n, childList: [r] });
                                },
                            ),
                            s
                        );
                    },
                    _ = (e, t) => {
                        if (!e) return [t];
                        const n = [],
                            a = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === u.kH.NoBreakWrapper) e.childList.push(a), n.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && n.push(e),
                                n.push({ blockType: u.kH.NoBreakWrapper, colorTag: '', childList: [t, a] });
                        }
                        return t.childList.length > 0 && n.push(t), n;
                    },
                    d = (e, t = {}, n) => {
                        if (!e) return [];
                        const r = ((e) => {
                            const t = [];
                            let n = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === u.kH.NoBreakSymbol
                                        ? ((n = !0), t.push(..._(t.pop(), e)))
                                        : (n ? t.push(..._(t.pop(), e)) : t.push(e), (n = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t, n) => {
                                const a = [];
                                return (
                                    (0, i.Z)(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            a.push(...c(e, t, '', n));
                                        },
                                        (e) => {
                                            a.push(...c(e[2] + e[3], t, e[1], n));
                                        },
                                    ),
                                    a
                                );
                            })((0, a.Eg)((0, a.z4)(e)), t, n),
                        );
                        return (0, s.w)(r);
                    };
            },
            6799: (e, t, n) => {
                'use strict';
                n.d(t, { w: () => u });
                var a = n(597),
                    s = n(9053);
                const i = (e, t, n) => {
                        const u = [];
                        return (
                            e.childList.forEach((r, o) => {
                                const l = `${n}_${o}`;
                                if ((0, s.dz)(r)) {
                                    const e = r,
                                        t = e.blockType,
                                        n = a.IY[t],
                                        s = i(e, n, l);
                                    u.push(...s);
                                } else u.push(t({ elementList: [r], textBlock: e, key: l }));
                            }),
                            u
                        );
                    },
                    u = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, n) => {
                                t.push(
                                    ...((e, t) => {
                                        const n = [],
                                            u = e.blockType,
                                            r = a.IY[u],
                                            o = i(e, r, t);
                                        return (
                                            u === s.kH.NoBreakWrapper
                                                ? n.push(r({ elementList: o, textBlock: e, key: `${t}` }))
                                                : n.push(...o),
                                            n
                                        );
                                    })(e, n),
                                );
                            }),
                            t
                        );
                    };
            },
            6960: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = (e, t, n, a) => {
                    let s = t.exec(e),
                        i = 0;
                    for (; s; ) i !== s.index && n(e.slice(i, s.index)), a(s), (i = t.lastIndex), (s = t.exec(e));
                    i !== e.length && n(e.slice(i));
                };
            },
            131: (e, t, n) => {
                'use strict';
                n.d(t, { T: () => c });
                var a = n(6179),
                    s = n.n(a),
                    i = n(9053);
                const u = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    r = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    o = (e, t, n) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const a = r(e, t),
                            s = e.textContent.length,
                            i = e.offsetWidth / s,
                            u = Math.ceil(a / i);
                        if (a > 0) {
                            const a = Math.floor((t - e.offsetLeft) / i);
                            return a >= n ? [!0, n + u] : [!1, a];
                        }
                        const o = Math.max(n + u, 0);
                        return s < o ? [!1, 0] : [!0, o];
                    },
                    l = (e, t, n, a, u, r) => {
                        let c = -1,
                            _ = null;
                        for (let d = n; d >= 0; d--) {
                            const n = e[d],
                                m = Number(e[d].getAttribute(i.bF));
                            if (m === i.kH.LineBreak || m === i.kH.NewLine || m === i.kH.Binding) continue;
                            const b = n.textContent || '';
                            if (!(n.childElementCount > 1)) {
                                const e = o(n, a, u),
                                    i = e[0],
                                    l = e[1];
                                if (!i) {
                                    l > 0 && (u -= l);
                                    continue;
                                }
                                const m = b.slice(0, b.length - l) + r,
                                    p = t[d];
                                (_ = s().cloneElement(p, p.props, m)), (c = d);
                                break;
                            }
                            {
                                const e = n.children,
                                    i = t[d],
                                    o = i.props.children,
                                    m = l(e, o, e.length - 1, a, u, r),
                                    p = m[0],
                                    E = m[1];
                                if (!(p < 0)) {
                                    const e = o.slice(0, p);
                                    (_ = s().cloneElement(i, i.props, e, E)), (c = d);
                                    break;
                                }
                                u -= b.length;
                            }
                        }
                        return [c, _];
                    },
                    c = (e, t, n, a = i.YA) => {
                        const s = [...t],
                            o = e.current;
                        if (!o) return [s, !1];
                        const c = n.height,
                            _ = n.width,
                            d = o.lastElementChild;
                        if (!u(d, c) && r(d, _) <= 0) return [s, !1];
                        const m = o.children,
                            b = ((e, t) => {
                                let n = 0,
                                    a = e.length - 1;
                                for (; a - n >= 0; ) {
                                    const s = n + Math.ceil(0.5 * (a - n));
                                    u(e[s], t) ? (a = s - 1) : (n = s + 1);
                                }
                                return n - 1;
                            })(m, c);
                        if (b < 0) return [s, !1];
                        const p = l(m, s, b, _, a.length, a),
                            E = p[0],
                            g = p[1];
                        return g && (s.splice(E, 1, g), s.splice(E + 1)), [s, !0];
                    };
            },
            9053: (e, t, n) => {
                'use strict';
                let a, s, i;
                n.d(t, {
                    Co: () => c,
                    YA: () => r,
                    aF: () => l,
                    bF: () => o,
                    dz: () => u,
                    kH: () => a,
                    u6: () => _,
                    v2: () => s,
                }),
                    (function (e) {
                        (e[(e.Word = 0)] = 'Word'),
                            (e[(e.LineBreak = 1)] = 'LineBreak'),
                            (e[(e.NewLine = 2)] = 'NewLine'),
                            (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                            (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                            (e[(e.Binding = 5)] = 'Binding');
                    })(a || (a = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(s || (s = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(i || (i = {}));
                const u = (e) => void 0 !== e.childList,
                    r = '...',
                    o = 'data-block-type',
                    l = { [i.NBSP]: a.NoBreakSymbol, [i.ZWNBSP]: a.NoBreakSymbol, [i.NEW_LINE]: a.LineBreak },
                    c = 'th',
                    _ = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', c].includes(R.strings.settings.LANGUAGE_CODE().toLowerCase());
            },
            597: (e, t, n) => {
                'use strict';
                n.d(t, { IY: () => d });
                var a = n(6483),
                    s = n.n(a),
                    i = n(6179),
                    u = n.n(i),
                    r = n(9053),
                    o = n(9627),
                    l = n(7629);
                const c = (e) => ({ color: `#${e}` }),
                    _ = ({ elementList: e, textBlock: t, key: n }) => {
                        const a = t.colorTag;
                        return a
                            ? o.Z[a]
                                ? u().createElement(
                                      'span',
                                      { key: n, 'data-block-type': t.blockType, className: s()(l.Z.word, o.Z[a]) },
                                      e,
                                  )
                                : u().createElement(
                                      'span',
                                      { key: n, 'data-block-type': t.blockType, className: l.Z.word, style: c(a) },
                                      e,
                                  )
                            : u().createElement(
                                  'span',
                                  { key: n, 'data-block-type': t.blockType, className: l.Z.word },
                                  e,
                              );
                    },
                    d = {
                        [r.kH.Word]: _,
                        [r.kH.NoBreakSymbol]: _,
                        [r.kH.Binding]: ({ elementList: e, textBlock: t, key: n }) =>
                            u().createElement(
                                'span',
                                { key: n, 'data-block-type': t.blockType },
                                e.map((e) => u().createElement(u().Fragment, { key: n }, e)),
                            ),
                        [r.kH.LineBreak]: ({ key: e }) =>
                            u().createElement('span', {
                                key: e,
                                'data-block-type': r.kH.LineBreak,
                                className: l.Z.lineBreak,
                            }),
                        [r.kH.NewLine]: ({ elementList: e, key: t }) =>
                            u().createElement(
                                'span',
                                { key: t, 'data-block-type': r.kH.NewLine, className: l.Z.newLine },
                                e,
                            ),
                        [r.kH.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            u().createElement(
                                'span',
                                { key: t, 'data-block-type': r.kH.NoBreakWrapper, className: l.Z.noBreakWrapper },
                                e,
                            ),
                    };
            },
            4129: (e, t, n) => {
                'use strict';
                n.d(t, { zx: () => m, qE: () => d, L$: () => _ });
                var a = n(6483),
                    s = n.n(a),
                    i = n(5508),
                    u = n(3138),
                    r = n(6179),
                    o = n.n(r),
                    l = n(4892);
                const c = {
                    base: 'Button_base_e7',
                    base__small: 'Button_base__small_40',
                    base__medium: 'Button_base__medium_ee',
                    base__disabled: 'Button_base__disabled_41',
                    base__active: 'Button_base__active_ef',
                    base__hover: 'Button_base__hover_39',
                    border: 'Button_border_bf',
                    base__secondary: 'Button_base__secondary_b5',
                    base__primary: 'Button_base__primary_d4',
                    shadow: 'Button_shadow_b6',
                    content: 'Button_content_86',
                    caption: 'Button_caption_9b',
                    primaryCaption: 'Button_primaryCaption_e9',
                    hintAnim: 'Button_hintAnim_fe',
                    borderWaveAnimation: 'Button_borderWaveAnimation_c1',
                };
                let _, d;
                !(function (e) {
                    (e.Primary = 'primary'), (e.Secondary = 'secondary');
                })(_ || (_ = {})),
                    (function (e) {
                        (e.Small = 'small'), (e.Medium = 'medium');
                    })(d || (d = {}));
                const m = o().memo(function ({
                    caption: e,
                    type: t,
                    size: n = d.Small,
                    isDisable: a = !1,
                    showHintAnim: m = !1,
                    className: b,
                    onClick: p,
                }) {
                    const E = (0, r.useState)(!1),
                        g = E[0],
                        h = E[1],
                        f = (0, r.useState)(!1),
                        v = f[0],
                        A = f[1];
                    return o().createElement(
                        'div',
                        {
                            className: s()(
                                c.base,
                                c[`base__${t}`],
                                c[`base__${n}`],
                                a && c.base__disabled,
                                g && c.base__hover,
                                v && c.base__active,
                                b,
                            ),
                            onClick: () => {
                                !a && p && (u.O.sound.play.click(), p());
                            },
                            onMouseEnter: () => {
                                !a && p && (u.O.sound.play.highlight(), h(!0));
                            },
                            onMouseLeave: () => {
                                h(!1), A(!1);
                            },
                            onMouseDown: () => A(!0),
                            onMouseUp: () => A(!1),
                            lang: R.strings.settings.LANGUAGE_CODE(),
                        },
                        o().createElement('div', { className: c.border }),
                        o().createElement('div', { className: c.shadow }),
                        m && o().createElement('div', { className: c.hintAnim }),
                        o().createElement(
                            'div',
                            { className: c.content, lang: R.strings.settings.LANGUAGE_CODE() },
                            t === _.Secondary
                                ? o().createElement(i.x, {
                                      className: c.caption,
                                      text: e,
                                      isTruncationAvailable: !0,
                                      type: l.y.Red,
                                      shadow: !0,
                                  })
                                : o().createElement('div', { className: c.primaryCaption }, e),
                        ),
                    );
                });
            },
            7621: (e, t, n) => {
                'use strict';
                n.d(t, { G: () => l, _: () => c });
                var a = n(6483),
                    s = n.n(a),
                    i = n(2056),
                    u = n(6179),
                    r = n.n(u),
                    o = n(9831);
                let l;
                !(function (e) {
                    (e.C28x28 = 'c28x28'),
                        (e.C30x30 = 'c30x30'),
                        (e.C36x36 = 'c36x36'),
                        (e.C44x44 = 'c44x44'),
                        (e.C70x70 = 'c70x70'),
                        (e.C110x110 = 'c110x110');
                })(l || (l = {}));
                const c = r().memo(function ({ size: e, gray: t = !1, isTooltipEnable: n = !1, className: a }) {
                    return r().createElement(
                        i.u,
                        { contentId: R.views.halloween.lobby.tooltips.KeyTooltip('resId'), isEnabled: n },
                        r().createElement('div', {
                            className: s()(o.Z.base, o.Z[`base__${e}`], t && o.Z.base__gray, a),
                        }),
                    );
                });
            },
            7271: (e, t, n) => {
                'use strict';
                n.d(t, { A: () => _, Q: () => c });
                var a = n(6483),
                    s = n.n(a),
                    i = n(6373),
                    u = n(3138),
                    r = n(6179),
                    o = n.n(r),
                    l = n(7841);
                let c;
                !(function (e) {
                    (e.Info = 'info'), (e.Close = 'close'), (e.Leaderboard = 'leaderboard');
                })(c || (c = {}));
                const _ = o().memo(function ({ className: e, type: t, caption: n, onClick: a, tooltipBody: _ }) {
                    const d = (0, r.useState)(!1),
                        m = d[0],
                        b = d[1],
                        p = (0, r.useState)(!1),
                        E = p[0],
                        g = p[1];
                    return o().createElement(
                        i.i,
                        { isEnabled: Boolean(_), body: _ },
                        o().createElement(
                            'div',
                            {
                                className: s()(
                                    l.Z.base,
                                    l.Z[`base__${t}`],
                                    m && l.Z.base__hover,
                                    E && l.Z.base__active,
                                    e,
                                ),
                                onMouseEnter: () => {
                                    u.O.sound.play.highlight(), b(!0);
                                },
                                onMouseLeave: () => {
                                    b(!1), g(!1);
                                },
                                onMouseDown: () => g(!0),
                                onMouseUp: () => g(!1),
                                onClick: () => {
                                    u.O.sound.play.click(), a();
                                },
                            },
                            o().createElement('div', { className: s()(l.Z.icon, l.Z[`icon__${t}`]) }),
                            o().createElement('div', { className: s()(l.Z.iconHover, l.Z[`iconHover__${t}`]) }),
                            o().createElement('div', { className: l.Z.caption }, n),
                            t === c.Leaderboard &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: s()(l.Z.icon, l.Z.icon__url) }),
                                    o().createElement('div', { className: s()(l.Z.iconHover, l.Z.iconHover__url) }),
                                ),
                        ),
                    );
                });
            },
            5508: (e, t, n) => {
                'use strict';
                n.d(t, { x: () => d, y: () => l.y });
                var a = n(6483),
                    s = n.n(a),
                    i = n(3618),
                    u = n(6179),
                    r = n.n(u),
                    o = n(3149),
                    l = n(4892);
                const c = ['type', 'shadow', 'grunge', 'className'];
                function _() {
                    return (
                        (_ = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        _.apply(null, arguments)
                    );
                }
                const d = (e) => {
                    let t = e.type,
                        n = e.shadow,
                        a = void 0 !== n && n,
                        u = e.grunge,
                        d = void 0 !== u && u,
                        m = e.className,
                        b = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, c);
                    return r().createElement(
                        'div',
                        { className: s()(o.Z.base, o.Z[`base__${t}`], m), lang: R.strings.settings.LANGUAGE_CODE() },
                        r().createElement(i.w, _({ classMix: s()(o.Z.layer0, a && o.Z.layer0__shadow) }, b)),
                        (t === l.y.Heading || t === l.y.MetaHeading) &&
                            r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(i.w, _({ classMix: o.Z.layer1 }, b)),
                                r().createElement(i.w, _({ classMix: o.Z.layer2 }, b)),
                            ),
                        r().createElement(i.w, _({ classMix: o.Z.layer3 }, b)),
                        d && r().createElement(i.w, _({ classMix: o.Z.layer4 }, b)),
                    );
                };
            },
            4892: (e, t, n) => {
                'use strict';
                let a;
                n.d(t, { y: () => a }),
                    (function (e) {
                        (e.WhiteSpanish = 'whiteSpanish'),
                            (e.Red = 'red'),
                            (e.LightRed = 'lightRed'),
                            (e.Currency = 'currency'),
                            (e.Heading = 'heading'),
                            (e.MetaHeading = 'metaHeading');
                    })(a || (a = {}));
            },
            481: (e, t, n) => {
                'use strict';
                n.d(t, { G: () => s, m: () => r });
                var a = n(6179);
                let s;
                !(function (e) {
                    (e.MouseDown = 'mouseDown'),
                        (e.Dragging = 'dragging'),
                        (e.End = 'scrollingToEnd'),
                        (e.Idle = 'idle');
                })(s || (s = {}));
                const i = { type: s.Idle },
                    u = 5;
                function r(e, t) {
                    const n = e.contentRef,
                        r = e.wrapperRef,
                        o = e.scrollPosition,
                        l = e.clampPosition,
                        c = e.animationScroll,
                        _ = e.events,
                        d = (0, a.useState)(i),
                        m = d[0],
                        b = d[1];
                    return (
                        (0, a.useEffect)(() => {
                            const e = n.current;
                            e && (e.style.cursor = m.type === s.Dragging ? 'move' : 'grab');
                        }, [n, m.type]),
                        (0, a.useEffect)(() => {
                            if (m.type !== s.MouseDown && m.type !== s.Dragging) return;
                            const e = (e) => {
                                const a = n.current,
                                    i = r.current;
                                if (!a || !i) return;
                                const _ = m.positionFrom - e.screenX,
                                    d = m.previousScrollPosition + _;
                                m.type === s.MouseDown &&
                                    Math.abs(_) > u &&
                                    b({
                                        type: s.Dragging,
                                        positionFrom: m.positionFrom,
                                        previousScrollPosition: m.previousScrollPosition,
                                    }),
                                    m.type === s.Dragging &&
                                        o.start(
                                            Object.assign(
                                                {
                                                    scrollPosition: l(a, d),
                                                    from: { scrollPosition: c.scrollPosition.get() },
                                                },
                                                t && { config: t },
                                            ),
                                        );
                            };
                            function a() {
                                window.removeEventListener('mousemove', e),
                                    document.body.removeEventListener('mouseleave', a),
                                    b({ type: s.End });
                            }
                            return (
                                window.addEventListener('mousemove', e),
                                window.addEventListener('mouseup', a),
                                document.body.addEventListener('mouseleave', a),
                                () => {
                                    window.removeEventListener('mousemove', e),
                                        window.removeEventListener('mouseup', a),
                                        document.body.removeEventListener('mouseleave', a);
                                }
                            );
                        }, [c.scrollPosition, l, n, m, o, r, t]),
                        (0, a.useEffect)(() => {
                            if (m.type !== s.End) return;
                            const e = () => {
                                b(i);
                            };
                            return c.scrollPosition.idle && e(), _.on('rest', e), () => _.off('rest', e);
                        }, [c.scrollPosition, m.type, _]),
                        (0, a.useEffect)(() => {
                            const e = n.current;
                            if (!e) return;
                            const t = (e) => {
                                0 === e.button &&
                                    b({
                                        type: s.MouseDown,
                                        positionFrom: e.screenX,
                                        previousScrollPosition: c.scrollPosition.get(),
                                    });
                            };
                            return e.addEventListener('mousedown', t), () => e.removeEventListener('mousedown', t);
                        }, [c.scrollPosition, n]),
                        m
                    );
                }
            },
            528: (e, t, n) => {
                'use strict';
                var a = n(7739),
                    s = n(6179),
                    i = n.n(s),
                    u = n(6483),
                    r = n.n(u),
                    o = n(926),
                    l = n.n(o),
                    c = n(5415);
                const _ = ['children', 'className'];
                function d() {
                    return (
                        (d = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        d.apply(null, arguments)
                    );
                }
                const m = {
                        [c.fd.ExtraSmall]: '',
                        [c.fd.Small]: l().SMALL_WIDTH,
                        [c.fd.Medium]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH}`,
                        [c.fd.Large]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH}`,
                        [c.fd.ExtraLarge]:
                            `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH} ${l().EXTRA_LARGE_WIDTH}`,
                    },
                    b = {
                        [c.Aq.ExtraSmall]: '',
                        [c.Aq.Small]: l().SMALL_HEIGHT,
                        [c.Aq.Medium]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT}`,
                        [c.Aq.Large]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT}`,
                        [c.Aq.ExtraLarge]:
                            `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT} ${l().EXTRA_LARGE_HEIGHT}`,
                    },
                    p = {
                        [c.cJ.ExtraSmall]: '',
                        [c.cJ.Small]: l().SMALL,
                        [c.cJ.Medium]: `${l().SMALL} ${l().MEDIUM}`,
                        [c.cJ.Large]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE}`,
                        [c.cJ.ExtraLarge]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE} ${l().EXTRA_LARGE}`,
                    },
                    E = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, _);
                        const s = (0, c.GS)(),
                            u = s.mediaWidth,
                            o = s.mediaHeight,
                            l = s.mediaSize;
                        return i().createElement('div', d({ className: r()(n, m[u], b[o], p[l]) }, a), t);
                    },
                    g = ['children'],
                    h = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, g);
                        return i().createElement(a.ZN, null, i().createElement(E, n, t));
                    };
                var f = n(493),
                    v = n.n(f),
                    A = n(4129);
                const C =
                    (e, t) =>
                    (...n) => {
                        if (e(...n)) return t(...n);
                    };
                var F = n(1641),
                    D = n(7727);
                const S = {
                        base: 'IconButton_base_d0',
                        base__hovered: 'IconButton_base__hovered_26',
                        base__disabled: 'IconButton_base__disabled_7d',
                        icon: 'IconButton_icon_26',
                        icon__preview: 'IconButton_icon__preview_58',
                        icon__compare: 'IconButton_icon__compare_4d',
                        icon__small: 'IconButton_icon__small_b8',
                        icon__normal: 'IconButton_icon__normal_d3',
                        base__mouseDown: 'IconButton_base__mouseDown_06',
                        label: 'IconButton_label_73',
                        label__small: 'IconButton_label__small_3a',
                        label__normal: 'IconButton_label__normal_ef',
                        base__visibleLabel: 'IconButton_base__visibleLabel_3a',
                    },
                    B = [
                        'type',
                        'children',
                        'className',
                        'classNames',
                        'disabled',
                        'isVisibleLabel',
                        'soundHover',
                        'soundClick',
                        'size',
                        'onClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'onFocus',
                        'onBlur',
                    ];
                function w() {
                    return (
                        (w = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        w.apply(null, arguments)
                    );
                }
                const y = (e) => {
                    let t = e.type,
                        n = e.children,
                        a = e.className,
                        u = e.classNames,
                        o = e.disabled,
                        l = void 0 !== o && o,
                        c = e.isVisibleLabel,
                        _ = void 0 !== c && c,
                        d = e.soundHover,
                        m = void 0 === d ? R.sounds.highlight() : d,
                        b = e.soundClick,
                        p = void 0 === b ? R.sounds.play() : b,
                        E = e.size,
                        g = void 0 === E ? 'normal' : E,
                        h = e.onClick,
                        f = e.onMouseEnter,
                        v = e.onMouseLeave,
                        A = e.onMouseDown,
                        y = e.onMouseUp,
                        x = e.onFocus,
                        T = e.onBlur,
                        k = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, B);
                    const I = (0, s.useState)(!1),
                        N = I[0],
                        O = I[1],
                        L = (0, s.useState)(!1),
                        M = L[0],
                        P = L[1],
                        H = (0, s.useRef)(null),
                        $ = () => !1 === l,
                        G = (e) => $() && ((e) => e.button === F.t.LEFT)(e),
                        z = C($, (e) => {
                            null == h || h(e);
                        }),
                        W = C(G, (e) => {
                            O(!0), null == A || A(e), p && (0, D.G)(p);
                        }),
                        j = C(G, (e) => {
                            O(!1), null == y || y(e);
                        }),
                        U = C($, (e) => {
                            P(!0), null == f || f(e), m && (0, D.G)(m);
                        }),
                        V = C($, (e) => {
                            null == x || x(e);
                        }),
                        Z = C($, (e) => {
                            null == T || T(e);
                        });
                    return i().createElement(
                        'div',
                        w(
                            {
                                ref: H,
                                className: r()(
                                    S.base,
                                    l && S.base__disabled,
                                    _ && S.base__visibleLabel,
                                    !l && N && S.base__mouseDown,
                                    !l && M && S.base__hovered,
                                    a,
                                ),
                                onClick: z,
                                onMouseEnter: U,
                                onMouseLeave: (e) => {
                                    P(!1), O(!1), null == v || v(e);
                                },
                                onMouseDown: W,
                                onMouseUp: j,
                                onFocus: V,
                                onBlur: Z,
                            },
                            k,
                        ),
                        i().createElement('div', {
                            className: r()(S.icon, S[`icon__${g}`], S[`icon__${t}`], null == u ? void 0 : u.icon),
                        }),
                        n &&
                            i().createElement(
                                'div',
                                { className: r()(S.label, S[`label__${g}`], null == u ? void 0 : u.label) },
                                n,
                            ),
                    );
                };
                var x = n(3649);
                const T = ({
                    className: e,
                    skipAnim: t = !1,
                    showed: n,
                    level: a,
                    name: s,
                    isPremium: u,
                    vehicleType: o,
                    preview: l,
                }) =>
                    i().createElement(
                        'div',
                        {
                            className: r()(
                                'GiftVehicle_base_ad',
                                !t && (n ? 'GiftVehicle_base__show_f7' : 'GiftVehicle_base__hide_15'),
                                e,
                            ),
                        },
                        i().createElement(y, {
                            classNames: { icon: 'GiftVehicle_previewIcon_88' },
                            onClick: l,
                            type: 'preview',
                            disabled: !n,
                        }),
                        i().createElement(
                            'div',
                            { className: 'GiftVehicle_name_0e' },
                            a,
                            i().createElement('div', {
                                className: r()(
                                    'GiftVehicle_vehicleType_68',
                                    u && 'GiftVehicle_vehicleType__premium_4f',
                                ),
                                style: {
                                    backgroundImage: `url('R.images.halloween.gui.maps.icons.vehicleTypes.flat.silver.c_80x80.${(0, x.BN)(o)}${u ? '_elite' : ''}')`,
                                },
                            }),
                            s,
                        ),
                    );
                var k = n(6373),
                    I = n(3138);
                const N = {
                    base: 'IconButton_base_4e',
                    hoverArea: 'IconButton_hoverArea_c4',
                    base__disable: 'IconButton_base__disable_33',
                    icon: 'IconButton_icon_40',
                    iconHover: 'IconButton_iconHover_d2',
                    base__preview: 'IconButton_base__preview_df',
                    base__comparison: 'IconButton_base__comparison_2f',
                    base__hover: 'IconButton_base__hover_aa',
                    base__active: 'IconButton_base__active_b6',
                };
                let O;
                !(function (e) {
                    (e.Preview = 'preview'), (e.Comparison = 'comparison');
                })(O || (O = {}));
                const L = i().memo(function ({ type: e, isDisabled: t = !1, onClick: n, className: a }) {
                    const u = (0, s.useState)(!1),
                        o = u[0],
                        l = u[1],
                        c = (0, s.useState)(!1),
                        _ = c[0],
                        d = c[1],
                        m = R.strings.halloween_lobby.iconButton.$dyn(e);
                    return i().createElement(
                        k.i,
                        { body: m.$dyn(t ? 'isDisabled' : 'default') },
                        i().createElement(
                            'div',
                            {
                                className: r()(
                                    N.base,
                                    N[`base__${e}`],
                                    o && N.base__hover,
                                    _ && N.base__active,
                                    t && N.base__disable,
                                    a,
                                ),
                            },
                            i().createElement('div', { className: N.icon }),
                            i().createElement('div', { className: N.iconHover }),
                            i().createElement('div', {
                                className: N.hoverArea,
                                onMouseEnter: () => {
                                    t || (I.O.sound.play.highlight(), l(!0));
                                },
                                onMouseLeave: () => {
                                    t || (l(!1), d(!1));
                                },
                                onMouseDown: t ? void 0 : () => d(!0),
                                onMouseUp: t ? void 0 : () => d(!1),
                                onClick: () => {
                                    t || (I.O.sound.play.click(), n && n());
                                },
                            }),
                        ),
                    );
                });
                var M = n(7271),
                    P = n(3457),
                    H = n(122),
                    $ = n(8526),
                    G = n(3403),
                    z = n(5657),
                    W = n(8849),
                    j = n(1596),
                    U = n(6131),
                    V = n(4681),
                    Z = n(8485),
                    q = n(824);
                let X;
                !(function (e) {
                    (e.bg_1 = 'bg_1'),
                        (e.bg_2 = 'bg_2'),
                        (e.bg_3 = 'bg_3'),
                        (e.bg_4 = 'bg_4'),
                        (e.bg_5 = 'bg_5'),
                        (e.bg_6 = 'bg_6'),
                        (e.bg_7 = 'bg_7'),
                        (e.bg_8 = 'bg_8'),
                        (e.bg_9 = 'bg_9'),
                        (e.bg_10 = 'bg_10'),
                        (e.bg_11 = 'bg_11'),
                        (e.bg_12 = 'bg_12'),
                        (e.bg_13 = 'bg_13'),
                        (e.bg_14 = 'bg_14'),
                        (e.bg_15 = 'bg_15'),
                        (e.bg_16 = 'bg_16'),
                        (e.bg_17 = 'bg_17'),
                        (e.bg_final = 'bg_final');
                })(X || (X = {}));
                const K = {
                    bg_1: { start: 1, end: 21 },
                    bg_2: { start: 24, end: 39 },
                    bg_3: { start: 42, end: 52 },
                    bg_4: { start: 55, end: 65 },
                    bg_5: { start: 68, end: 83 },
                    bg_6: { start: 86, end: 96 },
                    bg_7: { start: 99, end: 114 },
                    bg_8: { start: 117, end: 132 },
                    bg_9: { start: 135, end: 145 },
                    bg_10: { start: 148, end: 163 },
                    bg_11: { start: 166, end: 181 },
                    bg_12: { start: 184, end: 199 },
                    bg_13: { start: 202, end: 212 },
                    bg_14: { start: 215, end: 230 },
                    bg_15: { start: 233, end: 248 },
                    bg_16: { start: 251, end: 266 },
                    bg_17: { start: 269, end: 284 },
                    bg_final: { start: 287, end: 302 },
                };
                var Y = n(3215),
                    Q = n(9480);
                const J = (0, Y.q)()(
                        ({ observableModel: e }) => {
                            const t = {
                                root: e.object(),
                                mainGiftVehicle: e.object('mainGiftVehicle'),
                                process: e.object('progress'),
                                artefactTypes: e.array('artefacts'),
                                vehicleTitle: e.object('vehicleTitle'),
                            };
                            return Object.assign({}, t, {
                                computes: {
                                    checkIsVideoQuant: (e) => {
                                        const n = Q.sE(t.artefactTypes.get(), (t) => t.index === e);
                                        return void 0 !== n && n.types.indexOf('video') > -1;
                                    },
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            openMenu: e.createCallbackNoArgs('onEscPressed'),
                            openShop: e.createCallbackNoArgs('onShopClick'),
                            openMeta: e.createCallbackNoArgs('onMetaClick'),
                            openAbout: e.createCallbackNoArgs('onAboutClick'),
                            exit: e.createCallbackNoArgs('onExitClick'),
                            openPacks: e.createCallbackNoArgs('onPacksClick'),
                            openTasks: e.createCallbackNoArgs('onTasksClick'),
                            viewLoaded: e.createCallbackNoArgs('onViewLoaded'),
                            comparison: e.createCallbackNoArgs('onComparisonClick'),
                            openLeaderboard: e.createCallbackNoArgs('onLeaderboardClick'),
                            preview: e.createCallback((e) => ({ isKingReward: e }), 'onPreview'),
                            slide: e.createCallback((e) => ({ slide: e }), 'onSlide'),
                        }),
                    ),
                    ee = J[0],
                    te = J[1];
                var ne = n(5508),
                    ae = n(9053);
                const se = {
                    base: 'ArrowButton_base_91',
                    base__hover: 'ArrowButton_base__hover_f6',
                    square: 'ArrowButton_square_b0',
                    base__right: 'ArrowButton_base__right_3b',
                    base__active: 'ArrowButton_base__active_92',
                    label: 'ArrowButton_label_cb',
                    base__left: 'ArrowButton_base__left_b4',
                    redLabel: 'ArrowButton_redLabel_73',
                    kingReward: 'ArrowButton_kingReward_dd',
                    up: 'ArrowButton_up_23',
                    hover: 'ArrowButton_hover_6b',
                };
                let ie;
                !(function (e) {
                    (e.Left = 'left'), (e.Right = 'right');
                })(ie || (ie = {}));
                const ue = ({ className: e, text: t, type: n, kingReward: a = !1, disabled: u, onClick: o }) => {
                    const l = (0, s.useState)(!1),
                        c = l[0],
                        _ = l[1],
                        d = (0, s.useState)(!1),
                        m = d[0],
                        b = d[1],
                        p = (0, s.useState)(!1),
                        E = p[0],
                        g = p[1];
                    return (
                        (0, s.useEffect)(
                            () =>
                                (0, H.F)(() => {
                                    g(!1);
                                }, 1e3),
                            [E],
                        ),
                        i().createElement(
                            'div',
                            {
                                className: r()(se.base, se[`base__${n}`], c && se.base__hover, m && se.base__active, e),
                                onClick: () => {
                                    E ||
                                        u ||
                                        (n === ie.Left ? I.O.sound.play.sound(q.$u) : I.O.sound.play.sound(q.Be),
                                        g(!0),
                                        o());
                                },
                                onMouseEnter: () => {
                                    I.O.sound.play.highlight(), _(!0);
                                },
                                onMouseLeave: () => {
                                    _(!1), b(!1);
                                },
                                onMouseDown: () => b(!0),
                                onMouseUp: () => b(!1),
                            },
                            i().createElement(
                                'div',
                                { className: se.square },
                                a
                                    ? i().createElement('div', { className: se.kingReward })
                                    : i().createElement(
                                          i().Fragment,
                                          null,
                                          i().createElement(ne.x, {
                                              className: se.redLabel,
                                              alignContent: ae.v2.Center,
                                              justifyContent: ae.v2.Center,
                                              text: t,
                                              type: ne.y.Red,
                                              shadow: !0,
                                          }),
                                          i().createElement('div', { className: se.label }, t),
                                      ),
                            ),
                            i().createElement('div', { className: se.up }),
                            i().createElement('div', { className: se.hover }),
                        )
                    );
                };
                var re = n(7522),
                    oe = n(7030),
                    le = n(7515),
                    ce = n(1856),
                    _e = n(6112),
                    de = n(4598),
                    me = n(2039);
                const be = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function pe() {
                    return (
                        (pe = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        pe.apply(null, arguments)
                    );
                }
                const Ee = (0, s.forwardRef)(function (e, t) {
                        let n = e.src,
                            a = e.className,
                            u = e.autoplay,
                            r = void 0 !== u && u,
                            o = e.style,
                            l = e.loop,
                            c = void 0 !== l && l,
                            _ = e.isPrebufferKeyframes,
                            d = e.keyframesNameConfig,
                            m = e.onClick,
                            b = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, be);
                        const p = t,
                            E = (0, s.useRef)(null);
                        return (
                            (0, me.b)(() =>
                                I.O.view.events.onDisplayChanged((e, t) => {
                                    var n, a;
                                    t === _e.W.hidden && (null == (n = E.current) || n.pause()),
                                        t === _e.W.shown && (null == (a = E.current) || a.play());
                                }),
                            ),
                            (0, s.useEffect)(
                                () =>
                                    (0, ce.v)(() => {
                                        const e = E.current;
                                        if (!p || !e || !_)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const t = e.cohGetKeyframeTimestamps();
                                        t.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              t.map((t) => {
                                                  null == e || e.cohPrebufferKeyframe(t);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [_, p],
                            ),
                            (0, s.useEffect)(() => {
                                if (p && E.current) {
                                    const e = {
                                            changeTimeHandlers: [],
                                            changeKeyframeHandlers: [],
                                            changeTimeLoop: de.ZT,
                                        },
                                        t = () => {
                                            let t = 0;
                                            const n = (function (n) {
                                                    let a = 0;
                                                    return [
                                                        function n() {
                                                            (() => {
                                                                if (E.current) {
                                                                    const n = E.current,
                                                                        a = n.currentTime,
                                                                        s = n.duration;
                                                                    if (
                                                                        (t !== a &&
                                                                            (e.changeTimeHandlers.forEach((e) =>
                                                                                e({ currentTime: a, duration: s }),
                                                                            ),
                                                                            (t = a)),
                                                                        E.current.paused || !p || !_)
                                                                    )
                                                                        return;
                                                                    const i = E.current.cohGetKeyframeTimestamps();
                                                                    i.forEach((t, n) => {
                                                                        a > i[n] - 0.02 &&
                                                                            a < i[n] &&
                                                                            e.changeKeyframeHandlers.forEach((e) => {
                                                                                const a = Object.keys(
                                                                                    null != d ? d : {},
                                                                                )[n];
                                                                                return e({
                                                                                    time: t,
                                                                                    name: `${d ? a : `Point_${n}`}`,
                                                                                });
                                                                            });
                                                                    });
                                                                }
                                                            })(),
                                                                (a = requestAnimationFrame(n));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(a);
                                                        },
                                                    ];
                                                })(),
                                                a = n[0],
                                                s = n[1];
                                            return a(), s;
                                        };
                                    e.changeTimeLoop = t();
                                    const n = (t) => (
                                            e.changeTimeHandlers.push(t),
                                            () => {
                                                const n = e.changeTimeHandlers,
                                                    a = n.indexOf(t);
                                                a < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : n.splice(a, 1);
                                            }
                                        ),
                                        a = (t) => (
                                            e.changeKeyframeHandlers.push(t),
                                            () => {
                                                const n = e.changeKeyframeHandlers,
                                                    a = n.indexOf(t);
                                                a < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : n.splice(a, 1);
                                            }
                                        ),
                                        s = () => {
                                            var e;
                                            return null == (e = E.current) ? void 0 : e.currentTime;
                                        },
                                        i = () => {
                                            var e;
                                            return null == (e = E.current) ? void 0 : e.duration;
                                        },
                                        u = (e) => {
                                            E.current && (E.current.currentTime = (0, le.u)(0, E.current.duration, e));
                                        },
                                        r = () => {
                                            var e;
                                            return null == (e = E.current) ? void 0 : e.play();
                                        },
                                        o = () => {
                                            var e;
                                            return null == (e = E.current) ? void 0 : e.pause();
                                        },
                                        l = () => {
                                            o(), u(0);
                                        },
                                        c = () => {
                                            var e, t;
                                            return null !=
                                                (e = null == (t = E.current) ? void 0 : t.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        m = (e) => {
                                            u(e), r();
                                        },
                                        b = (e) => {
                                            u(e), o();
                                        },
                                        g = () => {
                                            (e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop();
                                        },
                                        h = (e, t) => {
                                            var n;
                                            return (
                                                null == (n = E.current) || n.addEventListener(e, t),
                                                () => {
                                                    var n;
                                                    return null == (n = E.current)
                                                        ? void 0
                                                        : n.removeEventListener(e, t);
                                                }
                                            );
                                        },
                                        f = (e, t) => {
                                            var n;
                                            return (
                                                null == (n = E.current) || n.removeEventListener(e, t),
                                                () => {
                                                    var n;
                                                    return null == (n = E.current)
                                                        ? void 0
                                                        : n.removeEventListener(e, t);
                                                }
                                            );
                                        };
                                    return (
                                        (p.current = {
                                            on: h,
                                            off: f,
                                            play: r,
                                            pause: o,
                                            stop: l,
                                            cleanup: g,
                                            getCurrentTime: s,
                                            getDuration: i,
                                            getCachedKeyframes: c,
                                            goToAndPlay: m,
                                            goToAndStop: b,
                                            setCurrentTime: u,
                                            domRef: E.current,
                                            onChangeTime: n,
                                            onKeyframes: a,
                                        }),
                                        () => {
                                            g(), (p.current = null);
                                        }
                                    );
                                }
                            }, [d, p, _]),
                            (0, s.useEffect)(() => {
                                E.current && r && E.current.play();
                            }, [r, c]),
                            (0, s.useEffect)(() => {
                                if (E.current)
                                    return () => {
                                        E.current && E.current.pause();
                                    };
                            }, []),
                            i().createElement(
                                'video',
                                pe({ src: n, className: a, style: o, loop: c, ref: E, onClick: m }, b),
                            )
                        );
                    }),
                    ge = (0, s.memo)(Ee);
                var he = n(6536),
                    fe = n(7641),
                    ve = n(1396);
                const Ae = 1920 / 1080,
                    Ce = (0, s.memo)(function ({ className: e, hasVideo: t, isPaused: n, start: a, end: u }) {
                        const o = (0, s.useState)(1),
                            l = o[0],
                            c = o[1],
                            _ = (0, s.useRef)(null),
                            d = (0, s.useRef)(a),
                            m = (0, s.useState)([]),
                            b = m[0],
                            p = m[1],
                            E = (0, ve.K)();
                        (0, me.b)(() =>
                            I.O.view.events.onDisplayChanged((e, t) => {
                                var n;
                                t === fe.displayStatus.hidden && (null == (n = _.current) || n.stop());
                            }),
                        ),
                            (0, s.useEffect)(() => {
                                const e = _.current;
                                E.isRunning ||
                                    !e ||
                                    Boolean(b.length) ||
                                    E.run(() => {
                                        p(e.getCachedKeyframes()), e.goToAndPlay(a);
                                    }, 500);
                            }, [b.length, E, a]),
                            (0, s.useEffect)(() => {
                                const e = _.current;
                                if (e)
                                    return (0, ce.v)(() => {
                                        p(e.getCachedKeyframes()), e.goToAndPlay(a);
                                    });
                            }, []);
                        const g = () => {
                            const e = I.O.view.getSize('rem');
                            let t = 1;
                            e.width >= e.height * Ae
                                ? (t = e.width / 1920)
                                : e.height >= e.width / Ae && (t = e.height / 1080),
                                c(t);
                        };
                        var h, f;
                        return (
                            (h = _),
                            (f = (e) => {
                                const t = e.time - d.current;
                                (d.current = e.time),
                                    a + e.time > a + u - t &&
                                        _.current &&
                                        (_.current.pause(),
                                        _.current.goToAndPlay(a),
                                        _.current.play(),
                                        (d.current = a));
                            }),
                            (0, s.useEffect)(() => {
                                var e;
                                if (h.current)
                                    return null == (e = h.current)
                                        ? void 0
                                        : e.onKeyframes((e) => {
                                              f(e);
                                          });
                            }, [f, h]),
                            (0, he.Z)(() => {
                                I.O.client.events.on('screenResized', g),
                                    I.O.client.events.on('self.onScaleUpdated', g);
                            }),
                            (0, s.useEffect)(
                                () =>
                                    (0, ce.v)(() => {
                                        var e;
                                        null == (e = _.current) || e.goToAndPlay(a);
                                    }),
                                [_, a],
                            ),
                            (0, s.useEffect)(() => {
                                const e = _.current;
                                if (e) return n ? e.pause() : e.play();
                            }, [n, _]),
                            (0, s.useEffect)(
                                () => (
                                    g(),
                                    () => {
                                        I.O.client.events.off('screenResized', g),
                                            I.O.client.events.off('self.onScaleUpdated', g);
                                    }
                                ),
                                [],
                            ),
                            !t || I.O.client.graphicsQuality.isLow()
                                ? null
                                : i().createElement(
                                      'div',
                                      {
                                          className: r()('VideoSliderBackground_base_cd', e),
                                          style: { transform: `scale(${l})` },
                                      },
                                      i().createElement(ge, {
                                          isPrebufferKeyframes: Boolean(b.length),
                                          ref: _,
                                          src: R.videos.halloween.artefacts.bg(),
                                          className: 'VideoSliderBackground_video_7a',
                                          preload: 'auto',
                                          autoplay: !1,
                                      }),
                                  )
                        );
                    }),
                    Fe = 'Background_content_67',
                    De = 'Background_background_a6',
                    Se = 'Background_background__hide_87',
                    Be = 'bg_final',
                    we = i().memo(function ({
                        activeIndex: e,
                        completed: t,
                        maxCount: n,
                        isLoadedSetup: a,
                        className: u,
                        onComplete: o,
                        isVideo: l,
                    }) {
                        const c = (0, s.useState)(e),
                            _ = c[0],
                            d = c[1],
                            m = (0, oe.useSpring)(() => ({ x: 0 })),
                            b = m[0],
                            p = m[1],
                            E = (0, s.useState)(!1),
                            g = E[0],
                            h = E[1],
                            f = _ - 1,
                            v = _ + 1,
                            A = (0, s.useCallback)((t) => (_ === e ? 0 : _ < e ? -t : t), [e, _]),
                            C = (e, a) => {
                                if (0 === e) return;
                                const s =
                                    a && !I.O.client.graphicsQuality.isLow()
                                        ? 'R.images.halloween.gui.maps.icons.backgrounds.video_frame.'
                                        : 'R.images.halloween.gui.maps.icons.backgrounds.';
                                return e === n && t
                                    ? { backgroundImage: `url('${s}${Be}')` }
                                    : { backgroundImage: `url('${s}bg_${e}')` };
                            },
                            F = (e) => (0 === e ? '' : e === n && t ? Be : `bg_${e}`);
                        return (
                            (0, s.useEffect)(() => {
                                const t = I.O.client.getSize('px').width;
                                p.start({
                                    from: { x: 0 },
                                    to: [{ x: A(t) / 2 }, { x: A(t) }],
                                    config: { duration: 500, easing: re.Z.easeInOutCubic },
                                    onStart: () => {
                                        h(!0);
                                    },
                                    onRest: (t) => {
                                        !0 === t.finished && (d(e), o(), h(!1));
                                    },
                                });
                            }, [e, _, A, p, o]),
                            i().createElement(
                                'div',
                                { className: r()('Background_base_3d', u) },
                                i().createElement(
                                    'div',
                                    { className: Fe },
                                    i().createElement('div', { className: r()(De, Se), style: C(f, l(f)) }),
                                    i().createElement('div', { className: De, style: C(e, l(e)) }),
                                    e < n &&
                                        _ === e &&
                                        i().createElement('div', { className: r()(De, Se), style: C(v, l(v)) }),
                                ),
                                i().createElement(
                                    oe.animated.div,
                                    { className: Fe, style: b },
                                    i().createElement('div', { className: De, style: C(_, l(_)) }),
                                    i().createElement(
                                        'div',
                                        {
                                            className: r()(
                                                'Background_videoContainer_bc',
                                                g && 'Background_videoContainer__show_de',
                                            ),
                                        },
                                        i().createElement(Ce, {
                                            hasVideo: l(_),
                                            isPaused: g || a,
                                            start: K[F(_)].start,
                                            end: K[F(_)].end,
                                        }),
                                    ),
                                ),
                            )
                        );
                    });
                var ye = n(4892);
                const xe = (0, G.Pi)(({ className: e }) => {
                    const t = te(),
                        n = t.model,
                        a = t.controls,
                        u = n.process.get(),
                        o = u.currentProgress,
                        l = u.maxProgress,
                        c = u.isCompleted,
                        _ = (0, s.useState)(!1),
                        d = _[0],
                        m = _[1],
                        b = (0, x.uF)(R.strings.halloween_lobby.common.progress(), { value: o, maxValue: l });
                    return i().createElement(
                        k.i,
                        {
                            header: R.strings.halloween_tooltips.metaWidget.header(),
                            body: R.strings.halloween_tooltips.metaWidget.body(),
                        },
                        i().createElement(
                            'div',
                            {
                                className: r()('MetaComponent_base_77', d && 'MetaComponent_base__hovered_99', e),
                                onMouseEnter: () => {
                                    I.O.sound.play.sound(q.k1), m(!0);
                                },
                                onMouseLeave: () => {
                                    I.O.sound.play.sound(q.$p), m(!1);
                                },
                                onClick: () => {
                                    I.O.sound.play.click(), a.openMeta();
                                },
                            },
                            i().createElement('div', { className: 'MetaComponent_layer_3_d7' }),
                            i().createElement(
                                'div',
                                { className: 'MetaComponent_animationGlow_a1' },
                                i().createElement('div', { className: 'MetaComponent_glow_e1' }),
                            ),
                            i().createElement('div', { className: 'MetaComponent_layer_2_73' }),
                            i().createElement(
                                'div',
                                { className: 'MetaComponent_animation_db' },
                                i().createElement('div', { className: 'MetaComponent_tank_31' }),
                            ),
                            i().createElement('div', { className: 'MetaComponent_layer_1_e2' }),
                            i().createElement('div', { className: 'MetaComponent_pattern_b4' }),
                            i().createElement('div', { className: 'MetaComponent_shadow_9b' }),
                            i().createElement(
                                'div',
                                { className: 'MetaComponent_animNoiseContainer_30' },
                                i().createElement(
                                    'div',
                                    { className: 'MetaComponent_noise_d3' },
                                    i().createElement('div', {
                                        className: r()(
                                            'MetaComponent_stepAnimContainer_04',
                                            'MetaComponent_stepAnimContainer__noiseScreen_5b',
                                        ),
                                    }),
                                ),
                            ),
                            c
                                ? i().createElement(
                                      i().Fragment,
                                      null,
                                      i().createElement(ne.x, {
                                          className: 'MetaComponent_completed_54',
                                          type: ye.y.WhiteSpanish,
                                          text: R.strings.halloween_lobby.metaCmp.completed(),
                                          justifyContent: ae.v2.Center,
                                          isTruncationAvailable: !0,
                                          shadow: !0,
                                          binding: {
                                              icon: i().createElement('div', { className: 'MetaComponent_check_81' }),
                                          },
                                      }),
                                      i().createElement(ne.x, {
                                          className: 'MetaComponent_completedHover_4f',
                                          type: ye.y.Red,
                                          text: R.strings.halloween_lobby.metaCmp.completed(),
                                          justifyContent: ae.v2.Center,
                                          isTruncationAvailable: !0,
                                          shadow: !0,
                                          binding: {
                                              icon: i().createElement('div', {
                                                  className: 'MetaComponent_checkHover_49',
                                              }),
                                          },
                                      }),
                                  )
                                : i().createElement(
                                      i().Fragment,
                                      null,
                                      i().createElement(ne.x, {
                                          type: ye.y.WhiteSpanish,
                                          className: 'MetaComponent_progressDefault_68',
                                          justifyContent: ae.v2.Center,
                                          text: b,
                                      }),
                                      i().createElement(ne.x, {
                                          type: ye.y.Red,
                                          className: 'MetaComponent_progressHover_5b',
                                          justifyContent: ae.v2.Center,
                                          text: b,
                                      }),
                                  ),
                            i().createElement(ne.x, {
                                className: 'MetaComponent_label_b2',
                                type: ye.y.WhiteSpanish,
                                text: R.strings.halloween_lobby.metaCmp.name(),
                                justifyContent: ae.v2.Center,
                                isTruncationAvailable: !0,
                                shadow: !0,
                            }),
                            i().createElement(ne.x, {
                                className: 'MetaComponent_labelHover_6e',
                                type: ye.y.Red,
                                text: R.strings.halloween_lobby.metaCmp.name(),
                                justifyContent: ae.v2.Center,
                                isTruncationAvailable: !0,
                                shadow: !0,
                            }),
                        ),
                    );
                });
                var Te = n(3618);
                const ke = i().memo(function ({
                        showComparison: e,
                        showPacks: t,
                        showTasks: n,
                        showPreview: a,
                        className: s,
                        tasksDisabled: u,
                    }) {
                        return i().createElement(
                            'div',
                            { className: r()('Rent_base_ae', s) },
                            i().createElement(Te.w, {
                                classMix: 'Rent_label_b8',
                                text: u
                                    ? R.strings.halloween_lobby.vehicle.tasks.locked()
                                    : R.strings.halloween_lobby.vehicle.rent.label(),
                                isTruncationAvailable: !0,
                                isTooltipEnable: !0,
                                alignContent: ae.v2.Center,
                                justifyContent: ae.v2.Center,
                            }),
                            i().createElement(
                                'div',
                                { className: 'Rent_buttons_50' },
                                i().createElement(
                                    P.u5,
                                    {
                                        mixClass: 'Rent_btnTasks_8c',
                                        type: P.L$.primary,
                                        size: P.qE.medium,
                                        onClick: n,
                                        disabled: u,
                                    },
                                    R.strings.halloween_lobby.vehicle.rent.tasks(),
                                ),
                                i().createElement(
                                    P.u5,
                                    { mixClass: 'Rent_btnPacks_8b', type: P.L$.main, size: P.qE.medium, onClick: t },
                                    R.strings.halloween_lobby.vehicle.rent.packs(),
                                ),
                                i().createElement(L, {
                                    className: 'Rent_comparisonButton_90',
                                    type: O.Comparison,
                                    onClick: e,
                                }),
                                i().createElement(L, {
                                    className: 'Rent_previewButton_64',
                                    type: O.Preview,
                                    onClick: a,
                                }),
                            ),
                        );
                    }),
                    Ie = (Ne = [
                        'R.images.halloween.gui.maps.icons.hangar.widgets.shop_content_1',
                        'R.images.halloween.gui.maps.icons.hangar.widgets.shop_content_2',
                        'R.images.halloween.gui.maps.icons.hangar.widgets.shop_content_3',
                        'R.images.halloween.gui.maps.icons.hangar.widgets.shop_content_4',
                        'R.images.halloween.gui.maps.icons.hangar.widgets.shop_content_5',
                    ])[Math.floor(Math.random() * Ne.length)];
                var Ne;
                const Re = (0, G.Pi)(({ className: e }) => {
                    const t = te().controls,
                        n = (0, s.useState)(!1),
                        a = n[0],
                        u = n[1];
                    return i().createElement(
                        k.i,
                        {
                            header: R.strings.halloween_tooltips.shopWidget.header(),
                            body: R.strings.halloween_tooltips.shopWidget.body(),
                        },
                        i().createElement(
                            'div',
                            {
                                className: r()('ShopComponent_base_91', a && 'ShopComponent_base__hovered_7e', e),
                                onMouseLeave: () => {
                                    I.O.sound.play.sound(q.K1), u(!1);
                                },
                                onMouseEnter: () => {
                                    I.O.sound.play.sound(q.oP), u(!0);
                                },
                                onClick: () => {
                                    I.O.sound.play.click(), t.openShop();
                                },
                            },
                            i().createElement('div', { className: 'ShopComponent_bg_ba' }),
                            i().createElement(
                                'div',
                                { className: 'ShopComponent_animation_cb' },
                                i().createElement('div', {
                                    className: 'ShopComponent_content_63',
                                    style: { backgroundImage: `url('${Ie}')` },
                                }),
                            ),
                            i().createElement(
                                'div',
                                { className: 'ShopComponent_animationGlow_42' },
                                i().createElement('div', { className: 'ShopComponent_glow_c0' }),
                            ),
                            i().createElement('div', { className: 'ShopComponent_pattern_80' }),
                            i().createElement('div', { className: 'ShopComponent_shadow_78' }),
                            i().createElement(
                                'div',
                                { className: 'ShopComponent_animNoiseContainer_6e' },
                                i().createElement(
                                    'div',
                                    { className: 'ShopComponent_noise_0f' },
                                    i().createElement('div', {
                                        className: r()(
                                            'ShopComponent_stepAnimContainer_d0',
                                            'ShopComponent_stepAnimContainer__noiseScreen_90',
                                        ),
                                    }),
                                ),
                            ),
                            i().createElement(ne.x, {
                                type: ye.y.WhiteSpanish,
                                text: R.strings.halloween_lobby.shopCmp.name(),
                                justifyContent: ae.v2.Center,
                                isTruncationAvailable: !0,
                                className: 'ShopComponent_label_fa',
                                grunge: !0,
                                shadow: !0,
                            }),
                            i().createElement(ne.x, {
                                type: ye.y.Red,
                                text: R.strings.halloween_lobby.shopCmp.name(),
                                justifyContent: ae.v2.Center,
                                isTruncationAvailable: !0,
                                className: 'ShopComponent_redMask_ea',
                                grunge: !0,
                                shadow: !0,
                            }),
                        ),
                    );
                });
                let Oe;
                !(function (e) {
                    (e.None = 'none'),
                        (e.LightTank = 'lightTank'),
                        (e.MediumTank = 'mediumTank'),
                        (e.HeavyTank = 'heavyTank'),
                        (e.SPG = 'SPG'),
                        (e.AT_SPG = 'AT-SPG');
                })(Oe || (Oe = {}));
                const Le = (0, G.Pi)(({ className: e }) => {
                        const t = te().model.vehicleTitle.get(),
                            n = t.name,
                            a = t.isPremium,
                            s = t.isPremiumIGR,
                            u = t.isElite,
                            o = t.vehicleType,
                            l = a || u;
                        return o === Oe.None
                            ? null
                            : i().createElement(
                                  'div',
                                  { className: r()('VehicleTitle_base_65', e) },
                                  i().createElement('div', {
                                      className: r()(
                                          'VehicleTitle_vehType_12',
                                          l && 'VehicleTitle_vehType__premium_6c',
                                      ),
                                      style: {
                                          backgroundImage: `url('R.images.halloween.gui.maps.icons.carouselDef.c_48x48.${(0, x.BN)(o)}${l ? '_premium' : ''}')`,
                                      },
                                  }),
                                  s && i().createElement('div', { className: 'VehicleTitle_igr_27' }),
                                  n,
                              );
                    }),
                    Me = 'HangarViewApp_carousel_ec';
                function Pe() {
                    return (
                        (Pe = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Pe.apply(null, arguments)
                    );
                }
                const He = (0, G.Pi)(() => {
                    const e = te(),
                        t = e.model,
                        n = e.controls,
                        a = t.process.get().isCompleted,
                        u = t.root.get().isDefenseMode;
                    (0, $.I9)(n.openMenu);
                    const o = t.root.get(),
                        l = o.slidesCount,
                        c = o.isVehicleInBattle,
                        _ = o.isVehicleLocked,
                        d = o.selectedSlide,
                        m = o.lockedMissionIndex,
                        b = (0, s.useState)(d),
                        p = b[0],
                        E = b[1],
                        g = (0, s.useState)(!1),
                        h = g[0],
                        f = g[1],
                        v = (0, s.useState)(!1),
                        C = v[0],
                        F = v[1],
                        D = d + 1,
                        S = d - 1,
                        B = t.root.get().showRandomLable;
                    (0, s.useEffect)(() => n.viewLoaded(), [n]),
                        (0, s.useEffect)(
                            () =>
                                (0, H.F)(() => {
                                    n.slide(p);
                                }, 500),
                            [p, n],
                        ),
                        (0, s.useEffect)(
                            () =>
                                (0, H.F)(() => {
                                    p !== d && (E(d), I.O.sound.play.sound(q.TO));
                                }, 1e3),
                            [d],
                        ),
                        (0, s.useEffect)(() => F(!1), [u]);
                    const w = (0, s.useCallback)(() => {
                            f(!0), E(D);
                        }, [D]),
                        y = (0, s.useCallback)(() => {
                            f(!0), E(S);
                        }, [S]),
                        x = (0, s.useCallback)(() => {
                            f(!1);
                        }, []);
                    return i().createElement(
                        'div',
                        {
                            className: r()(
                                'HangarViewApp_base_41',
                                t.root.get().isLoadedSetup && 'HangarViewApp_base__loadedSetup_ab',
                                _ && 'HangarViewApp_base__vehicleLocked_f0',
                                B && 'HangarViewApp_base__randomLable_bf',
                                u && 'HangarViewApp_base__defenceMode_a1',
                            ),
                        },
                        i().createElement(we, {
                            activeIndex: p,
                            className: 'HangarViewApp_bg_0a',
                            completed: a,
                            maxCount: l,
                            isVideo: t.computes.checkIsVideoQuant,
                            onComplete: x,
                            isLoadedSetup: t.root.get().isLoadedSetup,
                        }),
                        i().createElement('div', { className: 'HangarViewApp_vignette_7a' }),
                        i().createElement(
                            'div',
                            { className: 'HangarViewApp_aboutBtn_ba' },
                            i().createElement(M.A, {
                                caption: R.strings.halloween_lobby.hangar.about(),
                                onClick: n.openAbout,
                                type: M.Q.Info,
                                tooltipBody: R.strings.halloween_lobby.hangar.tooltip.about(),
                            }),
                            t.root.get().isDefenseMode &&
                                !t.root.get().isLoadedSetup &&
                                i().createElement(
                                    'div',
                                    { id: 'halloween-leaderboard-lobby-btn' },
                                    i().createElement(M.A, {
                                        caption: R.strings.halloween_lobby.hangar.leaderboard(),
                                        onClick: n.openLeaderboard,
                                        type: M.Q.Leaderboard,
                                        tooltipBody: R.strings.halloween_lobby.hangar.tooltip.leaderboard(),
                                    }),
                                ),
                        ),
                        i().createElement(M.A, {
                            className: 'HangarViewApp_exitBtn_0f',
                            caption: R.strings.halloween_lobby.hangar.exit(),
                            onClick: n.exit,
                            type: M.Q.Close,
                        }),
                        i().createElement(j.J, {
                            className: 'HangarViewApp_difficulty_9d',
                            onHideCarousel: () => F(!0),
                        }),
                        i().createElement(
                            'div',
                            { className: 'HangarViewApp_rightWidget_21' },
                            i().createElement(U.K, null),
                        ),
                        i().createElement(
                            'div',
                            { className: 'HangarViewApp_metaWidget_97' },
                            i().createElement(V.t, { selectedMissionID: p }),
                        ),
                        i().createElement('div', { className: 'HangarViewApp_metaWidgetShadow_68' }),
                        !a &&
                            i().createElement(
                                'div',
                                { className: 'HangarViewApp_giftPreview_b4' },
                                i().createElement(
                                    T,
                                    Pe({ showed: p === l, preview: () => n.preview(!0) }, t.mainGiftVehicle.get(), {
                                        className: 'HangarViewApp_giftButton_35',
                                    }),
                                ),
                            ),
                        d > 1 &&
                            i().createElement(ue, {
                                className: 'HangarViewApp_leftSlider_c0',
                                type: ie.Left,
                                text: `${S}`,
                                disabled: h,
                                onClick: y,
                            }),
                        d < l &&
                            i().createElement(ue, {
                                className: 'HangarViewApp_rightSlider_c4',
                                type: ie.Right,
                                text: `${D}`,
                                kingReward: d === t.process.get().maxProgress,
                                disabled: h,
                                onClick: w,
                            }),
                        i().createElement(xe, { className: 'HangarViewApp_metaCmp_f9' }),
                        i().createElement(Re, { className: 'HangarViewApp_shopCmp_fd' }),
                        i().createElement(
                            'div',
                            {
                                className: r()(
                                    'HangarViewApp_carouselBgAnim_9c',
                                    C
                                        ? 'HangarViewApp_carouselBgAnim__hide_48'
                                        : 'HangarViewApp_carouselBgAnim__show_1c',
                                ),
                            },
                            i().createElement(
                                'div',
                                { className: 'HangarViewApp_carouselBgAnimSetup_87' },
                                i().createElement('div', { className: 'HangarViewApp_carouselBg_83' }),
                            ),
                        ),
                        i().createElement(
                            'div',
                            {
                                className: r()(
                                    'HangarViewApp_bottom_30',
                                    C ? 'HangarViewApp_bottom__hide_b7' : 'HangarViewApp_bottom__show_d1',
                                ),
                            },
                            u
                                ? i().createElement(
                                      i().Fragment,
                                      null,
                                      i().createElement(Le, { className: 'HangarViewApp_vehicleTitle_15' }),
                                      i().createElement(z.C, { className: Me }),
                                  )
                                : i().createElement(W.v, { className: Me }),
                            i().createElement(
                                'div',
                                { className: 'HangarViewApp_tankSetup_1a' },
                                i().createElement(Z.T, null),
                                !u &&
                                    i().createElement(
                                        i().Fragment,
                                        null,
                                        i().createElement(L, {
                                            className: 'HangarViewApp_comparisonButton_c5',
                                            type: O.Comparison,
                                            onClick: n.comparison,
                                        }),
                                        i().createElement(L, {
                                            className: 'HangarViewApp_previewButton_7b',
                                            type: O.Preview,
                                            onClick: () => n.preview(!1),
                                            isDisabled: c,
                                        }),
                                    ),
                            ),
                            u
                                ? i().createElement(
                                      'div',
                                      { className: 'HangarViewApp_repair_c5' },
                                      R.strings.halloween_lobby.carousel.title.needRepair(),
                                      i().createElement(
                                          P.u5,
                                          {
                                              mixClass: 'HangarViewApp_repairButton_f1',
                                              size: A.qE.Medium,
                                              onClick: n.exit,
                                          },
                                          R.strings.halloween_lobby.carousel.title.goToRandom(),
                                      ),
                                  )
                                : i().createElement(ke, {
                                      className: 'HangarViewApp_rent_b1',
                                      showPacks: n.openPacks,
                                      showTasks: n.openTasks,
                                      showPreview: () => n.preview(!1),
                                      showComparison: n.comparison,
                                      tasksDisabled: p === m,
                                  }),
                        ),
                    );
                });
                engine.whenReady.then(() => {
                    v().render(
                        i().createElement(h, null, i().createElement(ee, null, i().createElement(He, null))),
                        document.getElementById('root'),
                    );
                });
            },
            5657: (e, t, n) => {
                'use strict';
                n.d(t, { C: () => Te });
                var a = n(6179),
                    s = n.n(a),
                    i = n(6483),
                    u = n.n(i),
                    r = n(794),
                    o = n(6358),
                    l = n(1856),
                    c = n(3138),
                    _ = n(3815),
                    d = n(5415),
                    m = n(9480),
                    b = n(481),
                    p = n(3403),
                    E = n(7505),
                    g = n(4205),
                    h = n(3215),
                    f = n(4598);
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
                var A = n(3946);
                const C = ['mediumTank', 'heavyTank', 'AT_SPG'],
                    F = (0, h.q)()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    filter: e.object('filter'),
                                    orderedNation: e.array('orderedNations', []),
                                },
                                n = (0, A.Om)(() => {
                                    const e = t.root.get().vehicles;
                                    return '' === e ? [] : JSON.parse(e);
                                }),
                                a = (0, A.Om)(
                                    () =>
                                        m
                                            .hX(n(), (e) => {
                                                const n = t.filter.get();
                                                return (
                                                    (!n.isFavorite || e.isFavorite) &&
                                                    ((!n.isPremium && !n.isElite) ||
                                                        (n.isPremium && e.isPremium) ||
                                                        (n.isElite && e.isElite && !e.isPremium)) &&
                                                    (0 === s().length || u(e.nation)) &&
                                                    (0 === i().length || r(e.type)) &&
                                                    (!n.isRent || e.isRent) &&
                                                    ('' === n.name ||
                                                        e.name.toLowerCase().indexOf(n.name.toLowerCase()) > -1)
                                                );
                                            })
                                            .sort((e, n) => {
                                                const a = t.orderedNation.get(),
                                                    s = m.cx(a, (t) => t === e.nation) || -1,
                                                    i = m.cx(a, (e) => e === n.nation) || -1;
                                                return (
                                                    Number(n.isFavorite) - Number(e.isFavorite) ||
                                                    s - i ||
                                                    C.indexOf(e.type) - C.indexOf(n.type) ||
                                                    e.name.localeCompare(n.name)
                                                );
                                            }),
                                    { equals: f.jv },
                                ),
                                s = (0, A.Om)(() =>
                                    '' === t.filter.get().nations ? [] : JSON.parse(t.filter.get().nations),
                                ),
                                i = (0, A.Om)(() =>
                                    '' === t.filter.get().types ? [] : JSON.parse(t.filter.get().types),
                                ),
                                u = (0, A.Om)((e) => 0 !== s().length && m.q9(s(), e)),
                                r = (0, A.Om)((e) => 0 !== i().length && m.q9(i(), e)),
                                o = (0, A.Om)(() => n().length),
                                l = (0, A.Om)(() => a().length),
                                c = (0, A.Om)(() => !m.yW(n(), (e) => e.vehicleState !== v.InPlatoon));
                            return Object.assign({}, t, {
                                computes: {
                                    carouselLocked: c,
                                    vehicles: n,
                                    filteredVehicles: a,
                                    allVehicleLenght: o,
                                    filteredVehicleLenght: l,
                                    checkNations: u,
                                    checkTypes: r,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            changeVehicle: e.createCallback((e) => ({ invID: e }), 'onChangeVehicle'),
                            filter: e.createCallback((e, t) => ({ key: e, value: t }), 'filter.onFiltered'),
                            resetFilter: e.createCallbackNoArgs('filter.onReset'),
                        }),
                    ),
                    D = F[0],
                    S = F[1];
                let B;
                !(function (e) {
                    (e.IsFavorite = 'isFavorite'),
                        (e.IsPremium = 'isPremium'),
                        (e.IsRent = 'isRent'),
                        (e.IsElite = 'isElite'),
                        (e.VehicleType = 'vehicleType'),
                        (e.Nation = 'nation'),
                        (e.SearchName = 'searchName');
                })(B || (B = {}));
                var w = n(6373);
                const y = {
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
                let x;
                !(function (e) {
                    (e.Default = 'default'),
                        (e.Hover = 'hover'),
                        (e.Selected = 'selected'),
                        (e.SelectedHover = 'selectedHover');
                })(x || (x = {}));
                const T = ({ type: e, className: t }) =>
                        s().createElement(
                            'div',
                            { className: u()(y.base, y[`base__${e}`], t) },
                            s().createElement('div', { className: y.indicatorDefault }),
                            s().createElement('div', { className: y.indicatorHover }),
                            s().createElement('div', { className: y.indicatorSelected }),
                            s().createElement('div', { className: y.indicatorSelectedHover }),
                        ),
                    k = {
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
                    I = (e, t, n) =>
                        e ? x.Selected : t ? (n ? x.SelectedHover : x.Selected) : n ? x.Hover : x.Default,
                    N = s().memo(function ({
                        children: e,
                        tooltipHeader: t = '',
                        tooltipBody: n = '',
                        selected: i = !1,
                        hideIndicator: r = !1,
                        className: o,
                        onClick: l,
                    }) {
                        const _ = (0, a.useState)(!1),
                            d = _[0],
                            m = _[1],
                            b = (0, a.useState)(!1),
                            p = b[0],
                            E = b[1];
                        return s().createElement(
                            w.i,
                            { isEnabled: '' !== t || '' !== n, header: t, body: n },
                            s().createElement(
                                'div',
                                {
                                    className: u()(k.base, k[`base__${I(p, i, d)}`], r && k.base__hiddenIndicator, o),
                                    onMouseEnter: () => {
                                        c.O.sound.play.highlight(), m(!0);
                                    },
                                    onMouseLeave: () => {
                                        m(!1), E(!1);
                                    },
                                    onClick: () => {
                                        c.O.sound.play.click(), l(!i);
                                    },
                                    onMouseDown: () => E(!0),
                                    onMouseUp: () => E(!1),
                                },
                                s().createElement('div', { className: k.hover }),
                                s().createElement('div', { className: k.children }, e),
                                !r && s().createElement(T, { className: k.indicator, type: I(p, i, d) }),
                                s().createElement('div', { className: k.shadow }),
                            ),
                        );
                    });
                var O = n(3415);
                const L = 'default',
                    M = 'search',
                    P = 'email',
                    H = 'password',
                    $ = 'normal',
                    G = 'medium',
                    z = {
                        [L]: '',
                        [P]: R.strings.common.input.placeholder.email(),
                        [M]: R.strings.common.input.placeholder.search(),
                        [H]: R.strings.common.input.placeholder.password(),
                    },
                    W = { [L]: 'text', [P]: 'text', [M]: 'text', [H]: 'password' },
                    j = { [L]: '', [P]: 'Invalid email', [M]: '', [H]: '' },
                    U = R.images.gui.maps.icons.components.input;
                var V = n(7727);
                const Z = {
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
                    q = s().memo(
                        ({
                            componentId: e,
                            value: t = '',
                            type: n = L,
                            size: i = G,
                            variant: r = $,
                            placeholder: o = '',
                            highlighted: l,
                            withClear: c,
                            selectOnFocus: _ = !0,
                            maxLength: d,
                            iconSource: m,
                            classMix: b,
                            onMouseEnter: p,
                            onMouseLeave: E,
                            onMouseDown: g,
                            onMouseUp: h,
                            onClick: f,
                            onChange: v,
                            onClear: A,
                            onFocus: C,
                            onBlur: F,
                        }) => {
                            const D = (0, a.useState)(!1),
                                S = D[0],
                                B = D[1],
                                w = (0, a.useRef)(null),
                                y = (0, a.useRef)({ mouseOver: !1, mouseDown: !1 }),
                                x = 'disabled' !== r,
                                T = (0, a.useCallback)(
                                    (e) => {
                                        x && (B(!0), C && C(e));
                                    },
                                    [x, C],
                                ),
                                k = (0, a.useCallback)(
                                    (e) => {
                                        x && !y.current.mouseOver && (B(!1), F && F(e));
                                    },
                                    [x, F],
                                );
                            (0, a.useEffect)(() => {
                                x && S && _ && w.current && w.current.select();
                            }, [_, S, x]);
                            const I = (0, a.useCallback)(
                                    (e) => {
                                        x && v && v(e.target.value);
                                    },
                                    [x, v],
                                ),
                                N = (0, a.useCallback)(
                                    (e) => {
                                        x && ((y.current.mouseOver = !0), p && p(e));
                                    },
                                    [x, p],
                                ),
                                R = (0, a.useCallback)(
                                    (e) => {
                                        x &&
                                            w.current &&
                                            (y.current.mouseDown && w.current.focus(),
                                            (y.current.mouseOver = !1),
                                            E && E(e));
                                    },
                                    [x, E],
                                ),
                                O = (0, a.useCallback)(
                                    (e) => {
                                        x && ((y.current.mouseDown = !0), g && g(e));
                                    },
                                    [x, g],
                                ),
                                M = (0, a.useCallback)(
                                    (e) => {
                                        x && ((y.current.mouseDown = !1), h && h(e));
                                    },
                                    [x, h],
                                ),
                                P = (0, a.useCallback)(
                                    (e) => {
                                        x &&
                                            w.current &&
                                            ((!S || (S && e.target !== w.current)) && w.current.focus(), f && f(e));
                                    },
                                    [S, x, f],
                                ),
                                H = o || z[n],
                                j = Boolean(m),
                                U = u()(
                                    Z.base,
                                    Z[`base__${i}`],
                                    l && Z[`base__${r}`],
                                    S && Z.base__focused,
                                    j && Z.base__withIcon,
                                    b,
                                ),
                                q = (0, a.useMemo)(() => (m ? { backgroundImage: `url(${m})` } : null), [m]),
                                X = u()(Z.input, Z[`input__${n}`]),
                                K = u()(Z.icon, Z[`icon__${n}`]),
                                Y = u()(Z.placeholder, Z[`placeholder__${n}`]);
                            return s().createElement(
                                'div',
                                {
                                    id: e,
                                    className: U,
                                    onMouseEnter: N,
                                    onMouseDown: O,
                                    onMouseUp: M,
                                    onMouseLeave: R,
                                    onClick: P,
                                },
                                !x && s().createElement('div', { className: Z.disabled }),
                                q && s().createElement('div', { style: q, className: K }),
                                s().createElement('input', {
                                    ref: w,
                                    className: X,
                                    type: W[n],
                                    value: t,
                                    onChange: I,
                                    disabled: !x,
                                    onFocus: T,
                                    onBlur: k,
                                    maxLength: d,
                                }),
                                H && !t && !S && s().createElement('div', { className: Y }, H),
                                c &&
                                    s().createElement('div', {
                                        className: Z.clear,
                                        onClick: (e) => {
                                            V.$.playClick(), A && A(e);
                                        },
                                        onMouseEnter: V.$.playHighlight,
                                    }),
                            );
                        },
                    ),
                    X = {
                        base: 'HelperMessage_base_1e',
                        base__shown: 'HelperMessage_base__shown_ab',
                        icon: 'HelperMessage_icon_10',
                        message: 'HelperMessage_message_f4',
                        message__alert: 'HelperMessage_message__alert_b5',
                        message__error: 'HelperMessage_message__error_45',
                        message__done: 'HelperMessage_message__done_2b',
                    },
                    K = ({ variant: e, show: t = !0, helperText: n, helperIcon: i, classMix: r }) => {
                        const o = (0, a.useMemo)(() => {
                                const t =
                                    i ||
                                    (function (e) {
                                        return 'alert' === e ? R.images.gui.maps.icons.library.alertIcon() : '';
                                    })(e);
                                return t && { backgroundImage: `url(${t})` };
                            }, [i, e]),
                            l = u()(X.base, t && X.base__shown),
                            c = u()(X.message, X[`message__${e}`], r);
                        return s().createElement(
                            'div',
                            { className: l },
                            o && s().createElement('div', { className: X.icon, style: o }),
                            s().createElement('div', { className: c }, n),
                        );
                    },
                    Y = {
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
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
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
                            n = e.type,
                            i = void 0 === n ? L : n,
                            r = e.variant,
                            o = void 0 === r ? $ : r,
                            l = e.size,
                            c = void 0 === l ? G : l,
                            _ = e.value,
                            d = e.tooltipArgs,
                            m = e.helperText,
                            b = void 0 === m ? '' : m,
                            p = e.isValidated,
                            E = void 0 === p || p,
                            g = e.showHelper,
                            h = void 0 === g || g,
                            f = e.error,
                            v = e.options,
                            A = e.onFocus,
                            C = e.onMouseEnter,
                            F = e.onMouseLeave,
                            D = e.onMouseUp,
                            S = e.onMouseDown,
                            B = e.onChange,
                            w = e.classMix,
                            y = e.controlClassMix,
                            x = e.helperClassMix,
                            T = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, Q);
                        const k = (0, a.useState)(_),
                            I = k[0],
                            N = k[1],
                            R = (0, a.useState)(E),
                            H = R[0],
                            z = R[1],
                            W = (0, a.useMemo)(() => Object.assign({}, ee, v), [v]),
                            V = (0, a.useRef)({ debounceTimeout: 0, isChangeHandled: !0, value: _, type: i }),
                            Z = (0, a.useCallback)((e) => {
                                e !== V.current.value &&
                                    ((V.current.value = e), (V.current.isChangeHandled = !1), N(e));
                            }, []),
                            X = (0, a.useCallback)(
                                (e) => {
                                    let t = !0;
                                    W.performChangeValidation &&
                                        (t = W.changesValidator
                                            ? W.changesValidator(e)
                                            : (function (e, t) {
                                                  return (
                                                      t !== P ||
                                                      (function (e) {
                                                          const t = e.match(
                                                              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                                                          );
                                                          return Boolean(t);
                                                      })(e)
                                                  );
                                              })(e, V.current.type)),
                                        B && B(e, t);
                                },
                                [B, W],
                            ),
                            te = (0, a.useCallback)(() => {
                                V.current.debounceTimeout &&
                                    (window.clearTimeout(V.current.debounceTimeout), (V.current.debounceTimeout = 0));
                            }, []),
                            ne = (0, a.useCallback)(() => Z(''), [Z]);
                        (0, a.useEffect)(() => () => te(), [te]);
                        const ae = (0, a.useCallback)(
                            (e) => {
                                te(),
                                    W.debounceTime
                                        ? (V.current.debounceTimeout = window.setTimeout(() => {
                                              X(e);
                                          }, W.debounceTime))
                                        : X(e);
                            },
                            [X, te, W.debounceTime],
                        );
                        (0, a.useEffect)(() => {
                            V.current.isChangeHandled ||
                                V.current.value !== I ||
                                (ae(V.current.value), (V.current.isChangeHandled = !0));
                        }, [I, ae]),
                            (0, a.useEffect)(() => {
                                V.current.isChangeHandled && _ !== V.current.value && ((V.current.value = _), N(_)),
                                    (V.current.type = i);
                            }, [_, i]),
                            (0, a.useEffect)(() => {
                                z(E);
                            }, [E, o]);
                        const se = (0, a.useCallback)((e) => C && C(e), [C]),
                            ie = (0, a.useCallback)(
                                (e) => {
                                    W.disableHighlightOnFocus && H && z(!1), A && A(e);
                                },
                                [H, A, W.disableHighlightOnFocus],
                            ),
                            ue = (0, a.useCallback)((e) => D && D(e), [D]),
                            re = (0, a.useCallback)((e) => S && S(e), [S]),
                            oe = (0, a.useCallback)((e) => F && F(e), [F]),
                            le = (0, a.useMemo)(
                                () =>
                                    W.withTypeIcon
                                        ? (function (e, t) {
                                              return e === M ? U.$dyn(`search_${t}`) : '';
                                          })(i, c)
                                        : '',
                                [i, c, W.withTypeIcon],
                            ),
                            ce = b || j[i],
                            _e = Boolean(I),
                            de = f ? 'error' : o,
                            me = Boolean(f) || H,
                            be = (0, a.useMemo)(
                                () => ('boolean' == typeof W.withClear ? _e && W.withClear : _e && i === M),
                                [i, _e, W],
                            ),
                            pe = u()(Y.base, Y[`base__${c}`], Y[`base__${o}`], w);
                        return s().createElement(
                            'div',
                            {
                                id: t,
                                className: pe,
                                onMouseEnter: se,
                                onMouseDown: re,
                                onMouseUp: ue,
                                onMouseLeave: oe,
                            },
                            s().createElement(
                                O.l,
                                { tooltipArgs: d },
                                s().createElement(
                                    q,
                                    J(
                                        {
                                            componentId: t ? `${t}-inputControl` : void 0,
                                            iconSource: le,
                                            size: c,
                                            type: i,
                                            variant: de,
                                            value: I,
                                            withClear: be,
                                            highlighted: me,
                                            selectOnFocus: W.selectOnFocus,
                                            maxLength: W.maxLength,
                                            classMix: y,
                                            onFocus: ie,
                                            onChange: Z,
                                            onClear: ne,
                                        },
                                        T,
                                    ),
                                ),
                            ),
                            ce &&
                                s().createElement(
                                    'div',
                                    { className: Y.helper },
                                    s().createElement(K, {
                                        variant: de,
                                        show: h && (W.isPermanentHelper || me),
                                        helperText: f || ce,
                                        helperIcon: W.helperIconSource,
                                        classMix: x,
                                    }),
                                ),
                        );
                    };
                var ne = n(3618),
                    ae = n(5585),
                    se = n(3457),
                    ie = n(2106);
                const ue = ['active', 'className', 'children', 'size'];
                function re() {
                    return (
                        (re = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        re.apply(null, arguments)
                    );
                }
                const oe = (0, a.memo)(function (e) {
                        let t = e.active,
                            n = e.className,
                            a = e.children,
                            i = e.size,
                            r = void 0 === i ? ie.q.small : i,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, ue);
                        return s().createElement(
                            'div',
                            { className: u()('ToggleButton_base_95', n, t && 'ToggleButton_base__active_99') },
                            s().createElement(
                                se.u5,
                                re({}, o, { mixClass: 'ToggleButton_button_79', type: ie.L.secondary, size: r }),
                                a,
                            ),
                            s().createElement('div', { className: 'ToggleButton_overlay_5c' }),
                            s().createElement('div', { className: 'ToggleButton_indicator_0b' }),
                        );
                    }),
                    le = 'FilterPopover_divider_7f',
                    ce = 'FilterPopover_filterBlock_1e',
                    _e = 'FilterPopover_name_49',
                    de = 'FilterPopover_filters_88',
                    me = 'FilterPopover_filterItem_0c',
                    be = (0, p.Pi)(({ className: e, onClose: t }) => {
                        const n = S(),
                            i = n.model,
                            r = n.controls;
                        return (
                            (0, a.useEffect)(() => {
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
                            s().createElement(
                                'div',
                                { className: u()('FilterPopover_base_85', e) },
                                s().createElement(
                                    'div',
                                    { className: 'FilterPopover_bg_ed' },
                                    s().createElement(
                                        'div',
                                        {
                                            className: 'FilterPopover_content_da',
                                            onClick: (e) => {
                                                e.nativeEvent.stopPropagation(),
                                                    e.nativeEvent.stopImmediatePropagation();
                                            },
                                        },
                                        s().createElement(
                                            w.i,
                                            { body: R.strings.dialogs.common.error.cancel() },
                                            s().createElement('div', {
                                                className: 'FilterPopover_closeBtn_51',
                                                onClick: t,
                                                onMouseEnter: c.O.sound.play.highlight,
                                            }),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: 'FilterPopover_title_7b' },
                                            R.strings.halloween_lobby.carousel.popover.title(),
                                        ),
                                        s().createElement(ne.w, {
                                            text: R.strings.halloween_lobby.carousel.popover.header(),
                                            classMix: 'FilterPopover_header_f1',
                                            binding: {
                                                filteredCount: i.computes.filteredVehicleLenght(),
                                                allCount: i.computes.allVehicleLenght(),
                                            },
                                        }),
                                        s().createElement('div', {
                                            className: u()(le, 'FilterPopover_divider__top_d3'),
                                        }),
                                        s().createElement(
                                            'div',
                                            { className: ce },
                                            s().createElement(
                                                'div',
                                                { className: _e },
                                                R.strings.halloween_lobby.carousel.popover.type(),
                                            ),
                                            s().createElement(
                                                'div',
                                                { className: de },
                                                C.map((e) =>
                                                    s().createElement(
                                                        w.i,
                                                        {
                                                            key: e,
                                                            header: R.strings.menu.carousel_tank_filter.$dyn(e),
                                                            body: R.strings.halloween_lobby.carousel.popover.typeBody(),
                                                        },
                                                        s().createElement(
                                                            oe,
                                                            {
                                                                className: me,
                                                                active: i.computes.checkTypes(e),
                                                                onClick: () => r.filter(B.VehicleType, e),
                                                            },
                                                            s().createElement('div', {
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
                                        s().createElement(
                                            'div',
                                            { className: ce },
                                            s().createElement(
                                                'div',
                                                { className: _e },
                                                R.strings.halloween_lobby.carousel.popover.nation(),
                                            ),
                                            s().createElement(
                                                'div',
                                                { className: de },
                                                m.UI(i.orderedNation.get(), (e) =>
                                                    s().createElement(
                                                        w.i,
                                                        {
                                                            key: e,
                                                            header: R.strings.menu.nations.$dyn(e),
                                                            body: R.strings.halloween_lobby.carousel.popover.nationBody(),
                                                        },
                                                        s().createElement(
                                                            oe,
                                                            {
                                                                className: me,
                                                                active: i.computes.checkNations(e),
                                                                onClick: () => r.filter(B.Nation, e),
                                                            },
                                                            s().createElement('div', {
                                                                className: u()(
                                                                    'FilterPopover_flag_fd',
                                                                    i.computes.checkNations(e) &&
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
                                        s().createElement(
                                            'div',
                                            { className: ce },
                                            s().createElement(
                                                'div',
                                                { className: _e },
                                                R.strings.halloween_lobby.carousel.popover.special(),
                                            ),
                                            s().createElement(
                                                'div',
                                                { className: de },
                                                s().createElement(
                                                    w.i,
                                                    {
                                                        header: R.strings.tank_carousel_filter.tooltip.rented.header(),
                                                        body: R.strings.tank_carousel_filter.tooltip.rented.body(),
                                                    },
                                                    s().createElement(
                                                        oe,
                                                        {
                                                            className: me,
                                                            active: i.filter.get().isRent,
                                                            onClick: () => r.filter(B.IsRent, !i.filter.get().isRent),
                                                        },
                                                        s().createElement('div', {
                                                            className: 'FilterPopover_rent_be',
                                                        }),
                                                    ),
                                                ),
                                                s().createElement(
                                                    w.i,
                                                    {
                                                        header: R.strings.halloween_lobby.carousel.primary.tooltipHeader(),
                                                        body: R.strings.halloween_lobby.carousel.primary.tooltipBody(),
                                                    },
                                                    s().createElement(
                                                        oe,
                                                        {
                                                            className: me,
                                                            active: i.filter.get().isFavorite,
                                                            onClick: () =>
                                                                r.filter(B.IsFavorite, !i.filter.get().isFavorite),
                                                        },
                                                        s().createElement('div', {
                                                            className: 'FilterPopover_favorite_f0',
                                                        }),
                                                    ),
                                                ),
                                                s().createElement(
                                                    w.i,
                                                    {
                                                        header: R.strings.halloween_lobby.carousel.premium.tooltipHeader(),
                                                        body: R.strings.halloween_lobby.carousel.premium.tooltipBody(),
                                                    },
                                                    s().createElement(
                                                        oe,
                                                        {
                                                            className: me,
                                                            active: i.filter.get().isPremium,
                                                            onClick: () =>
                                                                r.filter(B.IsPremium, !i.filter.get().isPremium),
                                                        },
                                                        s().createElement('div', {
                                                            className: 'FilterPopover_premium_14',
                                                        }),
                                                    ),
                                                ),
                                                s().createElement(
                                                    w.i,
                                                    {
                                                        header: R.strings.tank_carousel_filter.tooltip.elite.header(),
                                                        body: R.strings.tank_carousel_filter.tooltip.elite.body(),
                                                    },
                                                    s().createElement(
                                                        oe,
                                                        {
                                                            className: me,
                                                            active: i.filter.get().isElite,
                                                            onClick: () => r.filter(B.IsElite, !i.filter.get().isElite),
                                                        },
                                                        s().createElement('div', {
                                                            className: 'FilterPopover_elite_96',
                                                        }),
                                                    ),
                                                ),
                                            ),
                                        ),
                                        s().createElement('div', {
                                            className: u()(le, 'FilterPopover_divider__bottom_5d'),
                                        }),
                                        s().createElement(
                                            'div',
                                            { className: 'FilterPopover_search_ab' },
                                            s().createElement(te, {
                                                size: G,
                                                type: M,
                                                onChange: (e) => r.filter(B.SearchName, e),
                                                value: i.filter.get().name,
                                                options: { maxLength: 50, debounceTime: 500, isPermanentHelper: !0 },
                                                placeholder: R.strings.halloween_lobby.carousel.popover.search(),
                                                controlClassMix: 'FilterPopover_searchInput_5a',
                                                tooltipArgs: {
                                                    header: R.strings.tank_carousel_filter.tooltip.searchInput.header(),
                                                    body: (0, ae.uF)(
                                                        R.strings.tank_carousel_filter.tooltip.searchInput.body(),
                                                        { count: 50 },
                                                    ),
                                                },
                                            }),
                                        ),
                                    ),
                                    s().createElement('div', { className: 'FilterPopover_arrow_f8' }),
                                ),
                            )
                        );
                    }),
                    pe = s().memo(function ({ className: e, onClick: t }) {
                        const n = (0, a.useState)(!1),
                            i = n[0],
                            r = n[1],
                            o = (0, a.useState)(!1),
                            l = o[0],
                            _ = o[1];
                        return s().createElement(
                            'div',
                            {
                                className: u()(
                                    'CloseButton_base_8f',
                                    i && 'CloseButton_base__hover_1c',
                                    l && 'CloseButton_base__active_10',
                                    e,
                                ),
                                onClick: () => {
                                    c.O.sound.play.click(), t();
                                },
                                onMouseEnter: () => {
                                    c.O.sound.play.highlight(), r(!0);
                                },
                                onMouseLeave: () => {
                                    r(!1), _(!1);
                                },
                                onMouseDown: () => _(!0),
                                onMouseUp: () => _(!1),
                            },
                            s().createElement('div', { className: 'CloseButton_default_b4' }),
                            s().createElement('div', { className: 'CloseButton_hover_56' }),
                        );
                    }),
                    Ee = s().memo(function ({ className: e, filteredCount: t, allCount: n, onReset: a }) {
                        const i = 0 === t;
                        return s().createElement(
                            'div',
                            { className: u()('Header_base_54', t === n && 'Header_base__hidden_e7', e) },
                            s().createElement(
                                'div',
                                { className: 'Header_header_9b' },
                                s().createElement(ne.w, {
                                    classMix: u()('Header_label_5b', i && 'Header_label__blink_54'),
                                    text: R.strings.halloween_lobby.carousel.filter.count(),
                                    binding: {
                                        filteredCount: s().createElement(
                                            'div',
                                            {
                                                className: u()(
                                                    'Header_filteredCount_6f',
                                                    i && 'Header_filteredCount__red_3d',
                                                ),
                                            },
                                            t,
                                        ),
                                        allCount: n,
                                    },
                                }),
                                s().createElement(
                                    w.i,
                                    {
                                        header: R.strings.halloween_lobby.carousel.filterReset.tooltipHeader(),
                                        body: R.strings.halloween_lobby.carousel.filterReset.tooltipBody(),
                                    },
                                    s().createElement(
                                        'div',
                                        null,
                                        s().createElement(pe, { className: 'Header_closeButton_48', onClick: a }),
                                    ),
                                ),
                            ),
                            s().createElement('div', { className: 'Header_line_5b' }),
                        );
                    }),
                    ge = 'Filters_button_3e',
                    he = (0, p.Pi)(({ className: e }) => {
                        const t = S(),
                            n = t.model,
                            i = t.controls,
                            r = (0, a.useState)(!1),
                            o = r[0],
                            l = r[1],
                            c = n.filter.get();
                        return s().createElement(
                            'div',
                            { className: u()('Filters_base_69', e) },
                            s().createElement(Ee, {
                                filteredCount: n.computes.filteredVehicleLenght(),
                                allCount: n.computes.allVehicleLenght(),
                                onReset: i.resetFilter,
                                className: 'Filters_header_bf',
                            }),
                            s().createElement(
                                'div',
                                { className: 'Filters_popoverButton_c4' },
                                o && s().createElement(be, { className: 'Filters_popover_89', onClose: () => l(!1) }),
                                s().createElement(
                                    N,
                                    {
                                        className: ge,
                                        tooltipHeader: R.strings.halloween_lobby.carousel.filters.tooltipHeader(),
                                        tooltipBody: R.strings.halloween_lobby.carousel.filters.tooltipBody(),
                                        onClick: () => {
                                            l(!o);
                                        },
                                        selected: o,
                                        hideIndicator: !0,
                                    },
                                    s().createElement('div', { className: 'Filters_filters_08' }),
                                ),
                            ),
                            s().createElement(
                                N,
                                {
                                    className: ge,
                                    tooltipHeader: R.strings.halloween_lobby.carousel.primary.tooltipHeader(),
                                    tooltipBody: R.strings.halloween_lobby.carousel.primary.tooltipBody(),
                                    onClick: (e) => i.filter(B.IsFavorite, e),
                                    selected: c.isFavorite,
                                },
                                s().createElement('div', { className: 'Filters_favorite_cb' }),
                            ),
                            s().createElement(
                                N,
                                {
                                    className: ge,
                                    tooltipHeader: R.strings.halloween_lobby.carousel.premium.tooltipHeader(),
                                    tooltipBody: R.strings.halloween_lobby.carousel.premium.tooltipBody(),
                                    onClick: (e) => i.filter(B.IsPremium, e),
                                    selected: c.isPremium,
                                },
                                s().createElement('div', { className: 'Filters_premium_39' }),
                            ),
                        );
                    });
                var fe = n(6349),
                    ve = n(7078),
                    Ae = n(7522),
                    Ce = n(7030);
                const Fe = (e) => {
                        const t = R.images.gui.maps.icons.vehicle.$dyn(e);
                        return null === t ? R.images.gui.maps.icons.vehicle.noImage() : t;
                    },
                    De = { ja: 14, zh_sg: 14, zh_tw: 14, zh_cn: 14, ko: 12 }[R.strings.settings.LANGUAGE_CODE()] || 7,
                    Se = s().memo(function ({
                        name: e,
                        nation: t,
                        invID: n,
                        intCD: i,
                        type: r,
                        isSelected: o,
                        isFavorite: l,
                        isPremium: _,
                        icon: d,
                        isPremiumIGR: m,
                        isElite: b,
                        vehicleState: p,
                        isCarouselLocked: E = !1,
                        className: g,
                        isDragging: h,
                        isRent: f,
                        onClick: A,
                    }) {
                        const C = (0, a.useState)(!1),
                            F = C[0],
                            D = C[1],
                            S = p !== v.Default,
                            B = S ? R.strings.halloween_lobby.carousel.card.$dyn(p) : '',
                            w = `${r}${_ || b ? '_premium' : ''}${o ? '_active' : ''}`,
                            y = (0, Ce.useSpring)({
                                to: { width: o || F ? B.length * De + 'rem' : '0', maxWidth: '120rem' },
                                from: { width: '0' },
                                delay: o ? 0 : 150,
                                immediate: o,
                                config: { duration: 300, easing: Ae.Z.easeInOutCubic },
                            });
                        return s().createElement(
                            'div',
                            {
                                className: u()(
                                    'TankCard_base_41',
                                    o && 'TankCard_base__selected_74',
                                    !o && !E && 'TankCard_base__active_fc',
                                    F && 'TankCard_base__hover_dc',
                                    h && 'TankCard_base__dragging_2f',
                                    g,
                                ),
                            },
                            s().createElement('div', {
                                className: 'TankCard_flag_d4',
                                style: { backgroundImage: `url('R.images.gui.maps.icons.flags.c_160x100.${t}')` },
                            }),
                            s().createElement('div', {
                                className: 'TankCard_icon_7a',
                                style: { backgroundImage: `url('${Fe(d)}')` },
                            }),
                            s().createElement('div', { className: 'TankCard_selected_6e' }),
                            s().createElement(
                                ve.t,
                                {
                                    targetId: R.views.halloween.lobby.widgets.CarouselDefView('resId'),
                                    args: { tooltipId: 'halloweenCarouselVehicleDef', intCD: i },
                                    ignoreShowDelay: !0,
                                },
                                s().createElement('div', {
                                    className: 'TankCard_placeholder_ba',
                                    onClick: () => {
                                        E || o || (c.O.sound.play.click(), A(n));
                                    },
                                    onMouseEnter: () => {
                                        E || o || (D(!0), c.O.sound.play.highlight());
                                    },
                                    onMouseLeave: () => D(!1),
                                }),
                            ),
                            S &&
                                s().createElement(
                                    'div',
                                    { className: 'TankCard_disabled_2a' },
                                    s().createElement('div', { className: 'TankCard_disableBackground_d8' }),
                                    s().createElement(
                                        'div',
                                        { className: 'TankCard_state_3b' },
                                        s().createElement('div', {
                                            className: 'TankCard_stateIcon_6e',
                                            style: {
                                                backgroundImage: `url('R.images.halloween.gui.maps.icons.carouselDef.status.${p}')`,
                                            },
                                        }),
                                        s().createElement(
                                            Ce.animated.div,
                                            {
                                                className: 'TankCard_stateText_33',
                                                style: y,
                                                lang: R.strings.settings.LANGUAGE_CODE(),
                                            },
                                            s().createElement(fe.l, { content: B }),
                                        ),
                                    ),
                                ),
                            !S &&
                                m &&
                                s().createElement(ne.w, {
                                    classMix: 'TankCard_igrLabel_b6',
                                    text: R.strings.halloween_lobby.carousel.card.inCN(),
                                    binding: {
                                        icon: s().createElement('div', { className: 'TankCard_igrLabelIcon_40' }),
                                    },
                                }),
                            f &&
                                p !== v.Rented &&
                                s().createElement(
                                    'div',
                                    { className: 'TankCard_rent_d3' },
                                    R.strings.halloween_lobby.carousel.card.rent(),
                                ),
                            o && s().createElement('div', { className: 'TankCard_cload_3e' }),
                            l && s().createElement('div', { className: 'TankCard_favorite_ce' }),
                            s().createElement(
                                'div',
                                {
                                    className: u()(
                                        'TankCard_vehName_12',
                                        o && 'TankCard_vehName__light_b2',
                                        _ && 'TankCard_vehName__premium_f1',
                                        m && 'TankCard_vehName__igr_48',
                                    ),
                                },
                                s().createElement('div', {
                                    className: u()('TankCard_vehType_38', (_ || b) && 'TankCard_vehType__premium_82'),
                                    style: {
                                        backgroundImage: `url('R.images.halloween.gui.maps.icons.carouselDef.c_38x38.${w}')`,
                                    },
                                }),
                                m && s().createElement('div', { className: 'TankCard_igr_da' }),
                                s().createElement('div', { className: 'TankCard_shortName_44' }, e),
                            ),
                        );
                    });
                function Be() {
                    return (
                        (Be = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Be.apply(null, arguments)
                    );
                }
                const we = 168 * c.O.view.getScale(),
                    ye = 15 * c.O.view.getScale(),
                    xe = (0, p.Pi)(({ className: e }) => {
                        const t = S(),
                            n = t.model,
                            i = t.controls,
                            c = (0, d.GS)(),
                            p = n.root.get().selectedVehicle,
                            h = (0, o.T5)({ settings: { step: { type: 'fixed', value: we } } }),
                            f = (0, b.m)(h),
                            v = (0, a.useRef)(null),
                            A = (0, a.useRef)(null),
                            C = (0, a.useState)(!1),
                            F = C[0],
                            D = C[1],
                            B = (0, a.useState)(E.Ij.Left),
                            w = B[0],
                            y = B[1],
                            x = n.computes.filteredVehicles(),
                            T = (0, a.useCallback)(() => {
                                h.applyStepTo(o.Nm.Next);
                            }, [h]),
                            k = (0, a.useCallback)(() => {
                                h.applyStepTo(o.Nm.Prev);
                            }, [h]),
                            I = (0, a.useCallback)(
                                (e) => {
                                    if (0 !== e.value.scrollPosition) {
                                        if (
                                            (h.getContainerSize() || 0) - (h.getWrapperSize() || 0) - 1 <=
                                            e.value.scrollPosition
                                        )
                                            return void y(E.Ij.Right);
                                        y(E.Ij.Center);
                                    } else y(E.Ij.Left);
                                },
                                [h],
                            ),
                            N = (0, a.useCallback)((e) => i.changeVehicle(e), [i]),
                            R = (0, a.useCallback)(() => {
                                if (A.current && v.current) {
                                    const e = v.current.offsetWidth <= A.current.offsetWidth;
                                    D(e), (A.current.style.cursor = e ? '' : 'auto');
                                }
                            }, []),
                            O = (0, a.useCallback)(() => {
                                const e = m.cx(n.computes.filteredVehicles(), (e) => e.invID === p);
                                if (F)
                                    if (void 0 === e) h.applyScroll(0, { immediate: !0 });
                                    else {
                                        const t = we * e,
                                            n = h.animationScroll.scrollPosition.goal,
                                            a = h.getWrapperSize() || 0,
                                            s = t - n;
                                        if (t < n || (t > a && 0 === n))
                                            return void h.applyScroll(t, { immediate: !1 });
                                        a - s - ye < we && h.applyScroll(n + we, { immediate: !1 });
                                    }
                            }, [F, p]),
                            L = (0, _.z)(I);
                        return (
                            (0, a.useEffect)(
                                () => (
                                    h.events.on('change', L),
                                    h.events.on('recalculateContent', R),
                                    h.events.on('resizeHandled', R),
                                    () => {
                                        h.events.off('change', L),
                                            h.events.off('recalculateContent', R),
                                            h.events.off('resizeHandled', R);
                                    }
                                ),
                                [h.events, L, R],
                            ),
                            (0, a.useEffect)(
                                () =>
                                    (0, l.v)(() =>
                                        (0, l.v)(() => {
                                            R();
                                        }),
                                    ),
                                [R, c],
                            ),
                            (0, a.useEffect)(() => (0, l.v)(() => (0, l.v)(O)), [O, x.length]),
                            s().createElement(
                                'div',
                                { className: u()('CarouselApp_base_5f', e) },
                                s().createElement(he, { className: 'CarouselApp_filters_ea' }),
                                s().createElement(g.A, {
                                    className: 'CarouselApp_leftBtn_79',
                                    type: g.q.Left,
                                    isDisabled: w === E.Ij.Left || !F,
                                    onClick: T,
                                }),
                                s().createElement(
                                    'div',
                                    {
                                        className: u()(
                                            'CarouselApp_scroll_8a',
                                            w === E.Ij.Left && 'CarouselApp_scroll__left_0a',
                                            w === E.Ij.Right && 'CarouselApp_scroll__right_9f',
                                            !F && 'CarouselApp_scroll__empty_71',
                                        ),
                                        ref: v,
                                    },
                                    s().createElement(
                                        r.X.Horizontal.Area,
                                        {
                                            api: h,
                                            classNames: {
                                                content: u()(
                                                    'CarouselApp_content_7d',
                                                    !F && 'CarouselApp_content__noScroll_06',
                                                ),
                                            },
                                        },
                                        s().createElement(
                                            'div',
                                            { className: 'CarouselApp_items_b1', ref: A },
                                            m.UI(x, (e) =>
                                                s().createElement(
                                                    Se,
                                                    Be({ key: e.intCD, className: 'CarouselApp_item_9b' }, e, {
                                                        onClick: N,
                                                        isSelected: e.invID === p,
                                                        isCarouselLocked: n.computes.carouselLocked(),
                                                        isDragging: F && f.type === b.G.Dragging,
                                                    }),
                                                ),
                                            ),
                                        ),
                                        s().createElement('div', { className: 'CarouselApp_empty_12' }),
                                    ),
                                ),
                                s().createElement(g.A, {
                                    className: 'CarouselApp_rightBtn_22',
                                    type: g.q.Right,
                                    isDisabled: w === E.Ij.Right || !F,
                                    onClick: k,
                                }),
                            )
                        );
                    }),
                    Te = (0, a.memo)(function (e) {
                        const t = (0, a.useMemo)(
                            () => ({ rootId: R.views.halloween.lobby.widgets.CarouselDefView('resId') }),
                            [],
                        );
                        return s().createElement(D, { options: t }, s().createElement(xe, e));
                    });
            },
            7505: (e, t, n) => {
                'use strict';
                n.d(t, { lr: () => H, Ij: () => P });
                var a = n(6483),
                    s = n.n(a),
                    i = n(794),
                    u = n(6358),
                    r = n(1856),
                    o = n(3815),
                    l = n(5415),
                    c = n(481),
                    _ = n(9480),
                    d = n(3403),
                    m = n(6179),
                    b = n.n(m);
                const p = {
                    base: 'Carousel_base_15',
                    leftBtn: 'Carousel_leftBtn_09',
                    rightBtn: 'Carousel_rightBtn_bf',
                    scroll: 'Carousel_scroll_38',
                    content__noScroll: 'Carousel_content__noScroll_e7',
                    items: 'Carousel_items_fc',
                    item: 'Carousel_item_9a',
                };
                var E = n(7621),
                    g = n(3649);
                const h = {
                    base: 'VehicleType_base_13',
                    base__c_24x24: 'VehicleType_base__c_24x24_8a',
                    base__c_38x38: 'VehicleType_base__c_38x38_c5',
                    base__c_48x48: 'VehicleType_base__c_48x48_83',
                    base__c_83x74: 'VehicleType_base__c_83x74_a3',
                };
                let f, v;
                !(function (e) {
                    (e.C24x24 = 'c_24x24'), (e.C38x38 = 'c_38x38'), (e.C48x48 = 'c_48x48'), (e.C83x74 = 'c_83x74');
                })(f || (f = {})),
                    (function (e) {
                        (e.Silver = 'silver'),
                            (e.Gray = 'gray'),
                            (e.Elite = 'elite'),
                            (e.WhiteSpanish = 'whitespanish'),
                            (e.WhiteSpanishBright = 'whitespanish_bright');
                    })(v || (v = {}));
                const A = (0, m.memo)(function ({ type: e, color: t, className: n, size: a = f.C24x24 }) {
                    return b().createElement('div', {
                        className: s()(h.base, h[`base__${a}`], n),
                        style: {
                            backgroundImage: `url('R.images.halloween.gui.maps.icons.vehicleTypes.flat.${t}.${a}.${(0, g.BN)(e)}')`,
                        },
                    });
                });
                var C = n(6349),
                    F = n(7078),
                    D = n(2056),
                    S = n(3138),
                    B = n(2112),
                    w = n(7522),
                    y = n(7030),
                    x = n(824);
                const T = {
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
                    k = {
                        france_F17_AMX_13_90_Halloween_event: x.UA,
                        uk_GB24_Centurion_Mk3_Halloween_event: x.SV,
                        ussr_R171_IS_3_II_hw21: x.nJ,
                        usa_A100_T49_Halloween_event: x._k,
                        ussr_R40_T_54_Halloween_event: x.mM,
                        italy_It19_Progetto_C50_mod_66_hw21: x.TL,
                    },
                    I = { ja: 14, zh_sg: 14, zh_tw: 14, zh_cn: 14, ko: 12 }[R.strings.settings.LANGUAGE_CODE()] || 7,
                    N = b().memo(
                        ({
                            intCD: e,
                            invID: t,
                            name: n,
                            iconName: a,
                            vehicleType: i,
                            vehicleState: u,
                            isSelected: r,
                            hasDaily: o,
                            isLockedCarousel: l = !1,
                            isDragging: c,
                            className: _,
                            onClick: d,
                        }) => {
                            const p = (0, m.useState)(!1),
                                g = p[0],
                                h = p[1],
                                x = u !== B.g.Default,
                                N = x ? R.strings.halloween_lobby.carousel.card.$dyn(u) : '',
                                O = () => {
                                    l || r || (a in k && S.O.sound.play.sound(k[a]), d(t));
                                },
                                L = (0, y.useSpring)({
                                    to: { width: r || g ? N.length * I + 'rem' : '0', maxWidth: '120rem' },
                                    from: { width: '0' },
                                    delay: r ? 0 : 150,
                                    immediate: r,
                                    config: { duration: 300, easing: w.Z.easeInOutCubic },
                                });
                            return b().createElement(
                                'div',
                                {
                                    className: s()(
                                        T.base,
                                        r && T.base__selected,
                                        T[`base__${u}`],
                                        !l && !r && T.base__active,
                                        g && T.base__hover,
                                        c && T.base__dragging,
                                        _,
                                    ),
                                },
                                o &&
                                    b().createElement(
                                        D.u,
                                        {
                                            targetId: R.views.halloween.lobby.widgets.CarouselView('resId'),
                                            contentId: R.views.halloween.lobby.tooltips.SimpleFormatTooltip('resId'),
                                            args: { id: 'dailyQuest' },
                                        },
                                        b().createElement(
                                            'div',
                                            { onClick: O },
                                            b().createElement(E._, { size: E.G.C36x36, className: T.daily, gray: !r }),
                                        ),
                                    ),
                                b().createElement('div', {
                                    className: T.icon,
                                    style: {
                                        backgroundImage: `url('${R.images.gui.maps.icons.vehicle.$dyn(`${a}${x ? '_inactive' : ''}`)}')`,
                                    },
                                }),
                                b().createElement('div', { className: T.selected }),
                                b().createElement(
                                    F.t,
                                    {
                                        targetId: R.views.halloween.lobby.widgets.CarouselView('resId'),
                                        args: { tooltipId: 'halloweenCarouselVehicle', intCD: e },
                                        isEnabled: !0,
                                    },
                                    b().createElement('div', {
                                        className: T.placeholder,
                                        onClick: O,
                                        onMouseEnter: () => {
                                            r || l || (h(!0), S.O.sound.play.highlight());
                                        },
                                        onMouseLeave: () => h(!1),
                                    }),
                                ),
                                x &&
                                    b().createElement(
                                        'div',
                                        { className: T.disabled },
                                        b().createElement('div', { className: T.disableBackground }),
                                        b().createElement(
                                            'div',
                                            { className: T.state },
                                            b().createElement('div', { className: T.stateIcon }),
                                            b().createElement(
                                                y.animated.div,
                                                {
                                                    className: T.stateText,
                                                    style: L,
                                                    lang: R.strings.settings.LANGUAGE_CODE(),
                                                },
                                                b().createElement(C.l, { content: N }),
                                            ),
                                        ),
                                    ),
                                r && b().createElement('div', { className: T.cload }),
                                b().createElement(
                                    'div',
                                    { className: s()(T.vehName, r && T.vehName__light) },
                                    b().createElement(A, {
                                        size: f.C38x38,
                                        color: r ? v.WhiteSpanishBright : v.WhiteSpanish,
                                        type: i,
                                        className: T.vehType,
                                    }),
                                    n,
                                ),
                            );
                        },
                    );
                var O = n(4205),
                    L = n(9216);
                function M() {
                    return (
                        (M = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        M.apply(null, arguments)
                    );
                }
                let P;
                !(function (e) {
                    (e.Left = 'left'), (e.Center = 'center'), (e.Right = 'right');
                })(P || (P = {}));
                const H = (0, d.Pi)(({ className: e }) => {
                    const t = (0, L.t)(),
                        n = t.model,
                        a = t.controls,
                        d = (0, l.GS)(),
                        E = n.root.get().selectedVehicle,
                        g = (0, u.T5)(),
                        h = (0, c.m)(g),
                        f = (0, m.useRef)(null),
                        v = (0, m.useRef)(null),
                        A = (0, m.useState)(!1),
                        C = A[0],
                        F = A[1],
                        D = (0, m.useState)(P.Left),
                        S = D[0],
                        B = D[1],
                        w = (0, m.useCallback)(() => {
                            g.applyStepTo(u.Nm.Next);
                        }, [g]),
                        y = (0, m.useCallback)(() => {
                            g.applyStepTo(u.Nm.Prev);
                        }, [g]),
                        x = (0, m.useCallback)(() => {
                            if (v.current && f.current) {
                                const e = g.getContainerSize(),
                                    t = g.getWrapperSize() < e;
                                F(t), (v.current.style.cursor = t ? '' : 'auto');
                            }
                        }, [g]),
                        T = (0, m.useCallback)(() => {
                            const e = g.getBounds(),
                                t = e[0],
                                n = e[1],
                                a = g.animationScroll.scrollPosition.goal;
                            B(a === t ? P.Left : a === n ? P.Right : P.Center);
                        }, [g]),
                        k = (0, m.useCallback)(() => {
                            const e = _.cx(n.vehicles.get(), (e) => e.invID === E);
                            void 0 !== e && C && g.applyScroll(160 * e, { immediate: !1 });
                        }, [C, n.vehicles, g, E]),
                        I = (0, o.z)(T);
                    (0, m.useEffect)(
                        () => (
                            g.events.on('change', I),
                            g.events.on('recalculateContent', x),
                            g.events.on('resizeHandled', x),
                            () => {
                                g.events.off('change', I),
                                    g.events.off('recalculateContent', x),
                                    g.events.off('resizeHandled', x);
                            }
                        ),
                        [g.events, I, x],
                    ),
                        (0, m.useEffect)(
                            () =>
                                (0, r.v)(() =>
                                    (0, r.v)(() => {
                                        x();
                                    }),
                                ),
                            [x, d],
                        ),
                        (0, m.useEffect)(
                            () =>
                                (0, r.v)(() => {
                                    k();
                                }),
                            [k],
                        );
                    const R = (0, m.useCallback)(
                        (e) => {
                            a.changeVehicle(e);
                        },
                        [a],
                    );
                    return b().createElement(
                        'div',
                        { className: s()(p.base, e) },
                        C &&
                            b().createElement(O.A, {
                                className: p.leftBtn,
                                type: O.q.Left,
                                isDisabled: S === P.Left,
                                onClick: w,
                            }),
                        b().createElement(
                            'div',
                            { className: p.scroll, ref: f },
                            b().createElement(
                                i.X.Horizontal.Area.Default,
                                { api: g, classNames: { wrapper: s()(p.content, !C && p.content__noScroll) } },
                                b().createElement(
                                    'div',
                                    { className: p.items, ref: v },
                                    _.UI(n.vehicles.get(), (e) =>
                                        b().createElement(
                                            N,
                                            M(
                                                {
                                                    key: e.invID,
                                                    className: p.item,
                                                    isSelected: E === e.invID,
                                                    isLockedCarousel: n.computes.getCarouselLock(),
                                                    isDragging: C && h.type === c.G.Dragging,
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
                            b().createElement(O.A, {
                                className: p.rightBtn,
                                type: O.q.Right,
                                isDisabled: S === P.Right,
                                onClick: y,
                            }),
                    );
                });
            },
            8849: (e, t, n) => {
                'use strict';
                n.d(t, { v: () => r });
                var a = n(6179),
                    s = n.n(a),
                    i = n(7505),
                    u = n(9216);
                const r = (0, a.memo)(function (e) {
                    const t = (0, a.useMemo)(
                        () => ({ rootId: R.views.halloween.lobby.widgets.CarouselView('resId') }),
                        [],
                    );
                    return s().createElement(u.k, { options: t }, s().createElement(i.lr, e));
                });
            },
            4205: (e, t, n) => {
                'use strict';
                n.d(t, { A: () => c, q: () => l });
                var a = n(6483),
                    s = n.n(a),
                    i = n(3138),
                    u = n(6179),
                    r = n.n(u);
                const o = {
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
                const c = r().memo(function ({ type: e, className: t, isDisabled: n = !1, onClick: a }) {
                    const l = (0, u.useState)(!1),
                        c = l[0],
                        _ = l[1],
                        d = (0, u.useState)(!1),
                        m = d[0],
                        b = d[1];
                    return r().createElement(
                        'div',
                        {
                            className: s()(
                                o.base,
                                o[`base__${e}`],
                                m && o.base__hover,
                                c && o.base__active,
                                n && o.base__disabled,
                                t,
                            ),
                            onMouseEnter: () => {
                                n || (i.O.sound.play.highlight(), b(!0));
                            },
                            onMouseLeave: () => {
                                b(!1), _(!1);
                            },
                            onClick: () => {
                                n || (i.O.sound.play.click(), a());
                            },
                            onMouseUp: () => _(!1),
                            onMouseDown: () => _(!0),
                        },
                        !n && r().createElement('div', { className: o.hover }),
                        !n && r().createElement('div', { className: o.active }),
                    );
                });
            },
            9216: (e, t, n) => {
                'use strict';
                n.d(t, { k: () => o, t: () => l });
                var a = n(3215),
                    s = n(2112),
                    i = n(9480),
                    u = n(3946);
                const r = (0, a.q)()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object(), vehicles: e.array('vehicles', []) },
                                n = (0, u.Om)(() => !i.yW(t.vehicles.get(), (e) => e.vehicleState !== s.g.InPlatoon));
                            return Object.assign({}, t, { computes: { getCarouselLock: n } });
                        },
                        ({ externalModel: e }) => ({
                            changeVehicle: e.createCallback((e) => ({ invID: e }), 'onChangeVehicle'),
                        }),
                    ),
                    o = r[0],
                    l = r[1];
            },
            1596: (e, t, n) => {
                'use strict';
                n.d(t, { J: () => w });
                var a = n(6179),
                    s = n.n(a),
                    i = n(6483),
                    u = n.n(i),
                    r = n(3138),
                    o = n(5139);
                var l = n(9480),
                    c = n(3403),
                    _ = n(824),
                    d = n(3215);
                let m;
                !(function (e) {
                    (e.DEFAULT = 'default'), (e.SELECTED = 'selected');
                })(m || (m = {}));
                var b = n(3946);
                const p = (0, d.q)()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object(), difficulties: e.array('difficulties', []) },
                                n = (0, b.Om)(() => {
                                    var e;
                                    return null == (e = l.sE(t.difficulties.get(), (e) => e.state === m.SELECTED))
                                        ? void 0
                                        : e.level;
                                });
                            return Object.assign({}, t, { computes: { selectedLevel: n } });
                        },
                        ({ externalModel: e }) => ({
                            swichLevel: e.createCallback((e) => ({ level: e }), 'onSwichLevel'),
                            lockSwitching: e.createCallbackNoArgs('onLockSwitching'),
                        }),
                    ),
                    E = p[0],
                    g = p[1];
                var h = n(9987),
                    f = n(6373),
                    v = n(2056);
                const A = {
                        base: 'DifficultyItem_base_22',
                        base__default: 'DifficultyItem_base__default_fb',
                        base__locked: 'DifficultyItem_base__locked_c7',
                        base__disabled: 'DifficultyItem_base__disabled_45',
                        icon: 'DifficultyItem_icon_36',
                        icon__level4: 'DifficultyItem_icon__level4_d7',
                        base__selected: 'DifficultyItem_base__selected_96',
                        iconSelected: 'DifficultyItem_iconSelected_4d',
                        iconSelected__level4: 'DifficultyItem_iconSelected__level4_0d',
                        iconHighlight: 'DifficultyItem_iconHighlight_9f',
                        iconHighlight__level4: 'DifficultyItem_iconHighlight__level4_b9',
                        label: 'DifficultyItem_label_11',
                        base__defence: 'DifficultyItem_base__defence_15',
                        lock: 'DifficultyItem_lock_ae',
                        smoke: 'DifficultyItem_smoke_86',
                        counter: 'DifficultyItem_counter_a1',
                    },
                    C = 'R.images.halloween.gui.maps.icons.difficulties.diff_',
                    F = { 1: _.h, 2: _.a9, 3: _.Pq, 4: _.bi },
                    D = (0, a.memo)(function ({
                        level: e,
                        state: t,
                        isDisabled: n,
                        isLocked: a,
                        isNew: i,
                        onClick: o,
                        className: l,
                    }) {
                        return s().createElement(
                            v.u,
                            {
                                targetId: R.views.halloween.lobby.widgets.DifficultyView('resId'),
                                contentId: R.views.halloween.lobby.tooltips.DifficultyTooltip('resId'),
                                args: { level: e, state: t, isLocked: a },
                                isEnabled: !n,
                            },
                            s().createElement(
                                'div',
                                null,
                                s().createElement(
                                    f.i,
                                    {
                                        body: R.strings.halloween_lobby.difficult.disabled.body(),
                                        header: R.strings.halloween_lobby.difficult.disabled.header(),
                                        isEnabled: n,
                                    },
                                    s().createElement(
                                        'div',
                                        {
                                            className: u()(
                                                A.base,
                                                A[`base__${t}`],
                                                a && A.base__locked,
                                                n && A.base__disabled,
                                                4 === e && A.base__defence,
                                                l,
                                            ),
                                            onMouseEnter: () => {
                                                t !== m.DEFAULT || n || r.O.sound.play.sound(_.Wj);
                                            },
                                            onClick: () => {
                                                if (t !== m.DEFAULT || n || a) return;
                                                const s = F[e];
                                                void 0 !== s && r.O.sound.play.sound(s), o(e);
                                            },
                                        },
                                        s().createElement('div', {
                                            className: A.icon,
                                            style: { backgroundImage: `url('${C}${e}_${m.DEFAULT}')` },
                                        }),
                                        s().createElement('div', {
                                            className: A.iconSelected,
                                            style: {
                                                backgroundImage: `url('${C}${e}_${a ? 'selectedLocked' : m.SELECTED}')`,
                                            },
                                        }),
                                        t === m.DEFAULT &&
                                            !n &&
                                            !a &&
                                            s().createElement('div', {
                                                className: A.iconHighlight,
                                                style: { backgroundImage: `url('${C}${e}_hovered')` },
                                            }),
                                        s().createElement(
                                            'div',
                                            { className: A.label },
                                            R.strings.halloween_lobby.difficult.uppercase.$dyn(`level_${e}`),
                                        ),
                                        i &&
                                            s().createElement(
                                                'div',
                                                { className: A.counter },
                                                s().createElement(h.A, {
                                                    size: 'small',
                                                    value: R.strings.halloween_lobby.difficult.new(),
                                                }),
                                            ),
                                        a && s().createElement('div', { className: A.lock }),
                                        s().createElement('div', { className: A.smoke }),
                                    ),
                                ),
                            ),
                        );
                    });
                function S() {
                    return (
                        (S = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        S.apply(null, arguments)
                    );
                }
                const B = (0, c.Pi)(({ className: e, onHideCarousel: t }) => {
                        const n = g(),
                            i = n.model,
                            c = n.controls,
                            d = (0, a.useState)(!1),
                            m = d[0],
                            b = d[1],
                            p = i.computes.selectedLevel(),
                            E = (function (e, t, n, s = !1) {
                                const i = (0, a.useMemo)(
                                    () =>
                                        (function (e, t, n) {
                                            return void 0 === n ? (0, o.Z)(e, t, !1) : (0, o.Z)(e, n, !1 !== t);
                                        })(n, s, e),
                                    t,
                                );
                                return (0, a.useEffect)(() => i.cancel, [i]), i;
                            })((e) => c.swichLevel(e), [], 500),
                            h = (0, a.useCallback)(
                                (e) => {
                                    c.lockSwitching(),
                                        4 === p || 4 === e
                                            ? (r.O.sound.play.sound(_.FD), E(e), t(), b(!0))
                                            : c.swichLevel(e);
                                },
                                [c, t, p, E],
                            );
                        return (
                            (0, a.useEffect)(() => {
                                b(!1);
                            }, [p]),
                            s().createElement(
                                'div',
                                {
                                    className: u()(
                                        'DifficultyViewApp_base_8a',
                                        m && 'DifficultyViewApp_base__disable_9b',
                                        e,
                                    ),
                                },
                                s().createElement(
                                    'div',
                                    { className: 'DifficultyViewApp_items_df' },
                                    l.UI(i.difficulties.get(), (e, t) =>
                                        s().createElement(
                                            D,
                                            S({ key: `difficulties_${t}` }, e, {
                                                onClick: h,
                                                isDisabled: i.root.get().isDisabled,
                                                className: u()(
                                                    'DifficultyViewApp_item_09',
                                                    t === i.difficulties.get().length - 1 &&
                                                        'DifficultyViewApp_item__last_71',
                                                ),
                                            }),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    w = s().memo(function (e) {
                        const t = (0, a.useMemo)(
                            () => ({ rootId: R.views.halloween.lobby.widgets.DifficultyView('resId') }),
                            [],
                        );
                        return s().createElement(E, { options: t }, s().createElement(B, e));
                    });
            },
            6131: (e, t, n) => {
                'use strict';
                n.d(t, { K: () => F });
                var a = n(6179),
                    s = n.n(a),
                    i = n(6483),
                    u = n.n(i),
                    r = n(4129),
                    o = n(7621),
                    l = n(9916),
                    c = n(7030);
                const _ = (e) => e,
                    d = (e, t) => {
                        const n = Math.floor(e);
                        return t ? l.Z5.getNumberFormat(n, l.B3.INTEGRAL) : n;
                    },
                    m = (0, a.memo)(function ({
                        renderText: e = (e) => s().createElement(c.animated.div, null, e),
                        prefix: t = '',
                        currentNumber: n,
                        previousNumber: a = 0,
                        delay: i,
                        duration: r,
                        className: o,
                        isCanceled: l,
                        isFormatted: m = !1,
                        onStart: b,
                        onRest: p,
                    }) {
                        const E = (0, c.useSpring)({
                            from: { val: a },
                            to: { val: n },
                            delay: i,
                            config: { duration: r, easing: _ },
                            cancel: l,
                            reverse: l,
                            onStart: b,
                            onRest: p,
                        });
                        return s().createElement(
                            'div',
                            { className: u()('NumberAnimation_base_9f', o) },
                            t,
                            l ? e(d(n, m)) : s().createElement(c.animated.div, null, e(E.val.to((e) => d(e, m)))),
                        );
                    });
                var b = n(2056),
                    p = n(3138),
                    E = n(3403),
                    g = n(824);
                const h = (0, n(3215).q)()(
                        ({ observableModel: e }) => ({ root: e.object() }),
                        ({ externalModel: e }) => ({ click: e.createCallbackNoArgs('onClick') }),
                    ),
                    f = h[0],
                    v = h[1],
                    A = 'KeysViewApp_blink_22',
                    C = (0, E.Pi)(({ className: e }) => {
                        const t = v(),
                            n = t.model,
                            i = t.controls,
                            c = n.root.get(),
                            _ = c.keys,
                            d = c.isCompleted,
                            E = (0, a.useState)(!1),
                            h = E[0],
                            f = E[1],
                            C = (0, a.useState)(!1),
                            F = C[0],
                            D = C[1],
                            S = (0, a.useRef)(_),
                            B = _ > 9999,
                            w = B
                                ? `${l.Z5.getNumberFormat(9999, l.B3.INTEGRAL)}+`
                                : l.Z5.getNumberFormat(_, l.B3.INTEGRAL);
                        return (
                            (0, a.useEffect)(() => {
                                S.current !== _ && (S.current = _);
                            }, [_]),
                            (0, a.useEffect)(() => {
                                let e, t;
                                return (
                                    d ||
                                        F ||
                                        h ||
                                        (e = setTimeout(() => {
                                            p.O.sound.play.sound(g.Ar),
                                                (t = setInterval(() => {
                                                    p.O.sound.play.sound(g.Ar);
                                                }, 25e3));
                                        }, 5e3)),
                                    () => {
                                        clearTimeout(e), clearInterval(t);
                                    }
                                );
                            }, [F, d, h]),
                            s().createElement(
                                b.u,
                                {
                                    targetId: R.views.halloween.lobby.widgets.KeysView('resId'),
                                    contentId: R.views.halloween.lobby.tooltips.KeyTooltip('resId'),
                                },
                                s().createElement(
                                    'div',
                                    {
                                        className: u()(
                                            'KeysViewApp_base_bb',
                                            h && 'KeysViewApp_base__hover_77',
                                            F && 'KeysViewApp_base__active_75',
                                            e,
                                        ),
                                        onClick: () => {
                                            d || (p.O.sound.play.click(), i.click());
                                        },
                                        onMouseEnter: () => {
                                            d || (p.O.sound.play.sound(g.HX), f(!0));
                                        },
                                        onMouseLeave: () => {
                                            p.O.sound.play.sound(g.RZ), f(!1), D(!1);
                                        },
                                        onMouseDown: () => {
                                            d || D(!0);
                                        },
                                        onMouseUp: () => D(!1),
                                    },
                                    s().createElement(
                                        'div',
                                        { className: u()(A, !d && !F && !h && 'KeysViewApp_blink__anim_f2') },
                                        s().createElement(
                                            'div',
                                            {
                                                className: u()(
                                                    A,
                                                    h
                                                        ? 'KeysViewApp_blink__hoverAnim_33'
                                                        : 'KeysViewApp_blink__unhoverAnim_3e',
                                                ),
                                            },
                                            s().createElement(
                                                'div',
                                                { className: 'KeysViewApp_count_9d' },
                                                B
                                                    ? w
                                                    : s().createElement(m, {
                                                          isFormatted: !0,
                                                          previousNumber: S.current,
                                                          currentNumber: _,
                                                      }),
                                            ),
                                            s().createElement(o._, {
                                                className: 'KeysViewApp_key_36',
                                                size: o.G.C110x110,
                                            }),
                                        ),
                                    ),
                                    !d &&
                                        s().createElement(
                                            'div',
                                            { className: 'KeysViewApp_buttons_03' },
                                            s().createElement(r.zx, {
                                                type: r.L$.Secondary,
                                                size: r.qE.Small,
                                                caption: R.strings.halloween_lobby.keys.get(),
                                                className: 'KeysViewApp_button_83',
                                            }),
                                            s().createElement('div', { className: 'KeysViewApp_arrow_af' }),
                                        ),
                                ),
                            )
                        );
                    }),
                    F = s().memo(function (e) {
                        const t = (0, a.useMemo)(
                            () => ({ rootId: R.views.halloween.lobby.widgets.KeysView('resId') }),
                            [],
                        );
                        return s().createElement(f, { options: t }, s().createElement(C, e));
                    });
            },
            4681: (e, t, n) => {
                'use strict';
                n.d(t, { t: () => M });
                var a = n(6179),
                    s = n.n(a),
                    i = n(6483),
                    u = n.n(i),
                    r = n(4129),
                    o = n(7621),
                    l = n(5508),
                    c = n(7030),
                    _ = n(3149),
                    d = n(4892);
                const m = ({ text: e, type: t, shadow: n = !1, grunge: a = !1, className: i }) =>
                    s().createElement(
                        'div',
                        { className: u()(_.Z.base, _.Z[`base__${t}`], i) },
                        s().createElement(c.animated.div, { className: u()(_.Z.layer0, n && _.Z.layer0__shadow) }, e),
                        t === d.y.Heading &&
                            s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(c.animated.div, { className: _.Z.layer1 }, e),
                                s().createElement(c.animated.div, { className: _.Z.layer2 }, e),
                            ),
                        s().createElement(c.animated.div, { className: _.Z.layer3 }, e),
                        a && s().createElement(c.animated.div, { className: _.Z.layer4 }, e),
                    );
                var b = n(2056),
                    p = n(122),
                    E = n(3138),
                    g = n(5415),
                    h = n(3618),
                    f = n(9053);
                let v;
                !(function (e) {
                    (e.None = 'none'), (e.InProgress = 'inProgress'), (e.Recive = 'recive'), (e.Open = 'open');
                })(v || (v = {}));
                var A = n(3403),
                    C = n(824),
                    F = n(5585);
                const D = s().memo(function ({ price: e, className: t }) {
                        const n = (0, g.GS)().mediaSize;
                        return s().createElement(
                            'div',
                            { className: u()('Price_base_17', t) },
                            e,
                            s().createElement(o._, {
                                className: 'Price_priceIcon_9e',
                                size: n >= g.cJ.Small ? o.G.C110x110 : o.G.C70x70,
                            }),
                        );
                    }),
                    S = 'MetaWidget_block_f8',
                    B = 'MetaWidget_block__show_3b',
                    w = 'MetaWidget_button_85',
                    y = 'MetaWidget_decrypt_c0';
                var x = n(3215),
                    T = n(9480),
                    k = n(3946);
                const I = (0, x.q)()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    {},
                                    e.primitives([
                                        'id',
                                        'index',
                                        'name',
                                        'description',
                                        'skipPrice',
                                        'decodePrice',
                                        'keys',
                                        'state',
                                    ]),
                                    { types: e.array('types') },
                                ),
                                n = (0, k.Om)(() => !!T.q9(t.types.get(), 'final'));
                            return Object.assign({}, t, { computes: { isFinal: n } });
                        },
                        ({ externalModel: e }) => ({
                            skip: e.createCallbackNoArgs('onSkip'),
                            decrypt: e.createCallbackNoArgs('onDecrypt'),
                            view: e.createCallbackNoArgs('onView'),
                            nextSlide: e.createCallbackNoArgs('onSlideToNext'),
                        }),
                    ),
                    N = I[0],
                    O = I[1],
                    L = (0, A.Pi)(({ selectedMissionID: e }) => {
                        const t = O(),
                            n = t.model,
                            i = t.controls,
                            c = (0, g.GS)().mediaSize,
                            _ = n.id,
                            A = n.index,
                            x = n.name,
                            T = n.description,
                            k = n.state,
                            I = n.decodePrice,
                            N = n.skipPrice,
                            L = n.keys,
                            M = A.get(),
                            P = k.get(),
                            H = (0, a.useState)(e),
                            $ = H[0],
                            G = H[1],
                            z = (0, a.useState)(P),
                            W = z[0],
                            j = z[1],
                            U = N.get(),
                            V = I.get(),
                            Z = W === v.Recive,
                            q = W === v.InProgress,
                            X = W === v.Open,
                            K = L.get(),
                            Y = n.computes.isFinal(),
                            Q = Z && V <= K,
                            J = c >= g.cJ.Small ? r.qE.Medium : r.qE.Small;
                        return (
                            (0, a.useEffect)(
                                () =>
                                    (0, p.F)(() => {
                                        G(M);
                                    }, 500),
                                [M],
                            ),
                            (0, a.useEffect)(() => {
                                if (M === $)
                                    return (0, p.F)(() => {
                                        j(P);
                                    }, 500);
                                j(P);
                            }, [M, $, P]),
                            (0, a.useEffect)(() => {
                                let e, t;
                                return (
                                    Q &&
                                        (e = setTimeout(() => {
                                            E.O.sound.play.sound(C.bk),
                                                (t = setInterval(() => {
                                                    E.O.sound.play.sound(C.bk);
                                                }, 2e4));
                                        }, 1e4)),
                                    () => {
                                        clearTimeout(e), clearInterval(t);
                                    }
                                );
                            }, [Q]),
                            s().createElement(
                                'div',
                                {
                                    className: u()(
                                        'MetaWidget_base_75',
                                        $ < e && 'MetaWidget_base__hideRight_18',
                                        $ > e && 'MetaWidget_base__hideLeft_65',
                                    ),
                                },
                                s().createElement(
                                    'div',
                                    { className: u()('MetaWidget_header_d8', X && 'MetaWidget_header__completed_f6') },
                                    s().createElement(
                                        'div',
                                        { className: 'MetaWidget_completedIndex_6f' },
                                        Y
                                            ? s().createElement('div', {
                                                  className: 'MetaWidget_kingRewardCompleted_a2',
                                              })
                                            : M,
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: 'MetaWidget_unCompletedIndex_f1' },
                                        Y
                                            ? s().createElement('div', { className: 'MetaWidget_kingReward_12' })
                                            : s().createElement(m, { type: d.y.Red, text: M, shadow: !0 }),
                                    ),
                                    s().createElement('div', { className: 'MetaWidget_shadow_2d' }),
                                    s().createElement('div', { className: 'MetaWidget_name_d6' }, x.get()),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'MetaWidget_description_f7' },
                                    s().createElement(
                                        'div',
                                        { className: u()(S, q && B) },
                                        s().createElement(
                                            b.u,
                                            {
                                                targetId: R.views.halloween.lobby.widgets.MetaView('resId'),
                                                contentId:
                                                    R.views.halloween.lobby.tooltips.EventMissionTooltip('resId'),
                                            },
                                            s().createElement(
                                                'div',
                                                null,
                                                s().createElement(l.x, {
                                                    key: T.get(),
                                                    className: 'MetaWidget_inprogressDescr_c9',
                                                    type: d.y.MetaHeading,
                                                    text: T.get(),
                                                    alignContent: f.v2.Center,
                                                    isTruncationAvailable: !0,
                                                    shadow: !0,
                                                }),
                                            ),
                                        ),
                                        U > 0 &&
                                            s().createElement(
                                                'div',
                                                { className: w },
                                                s().createElement(r.zx, {
                                                    type: r.L$.Secondary,
                                                    size: J,
                                                    caption: R.strings.halloween_lobby.meta.btn.skip(),
                                                    onClick: i.skip,
                                                }),
                                                U && s().createElement(D, { price: U }),
                                            ),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: u()(S, Z && B) },
                                        s().createElement(
                                            b.u,
                                            {
                                                targetId: R.views.halloween.lobby.widgets.MetaView('resId'),
                                                contentId:
                                                    R.views.halloween.lobby.tooltips.EventMissionTooltip('resId'),
                                            },
                                            s().createElement(
                                                'div',
                                                null,
                                                s().createElement(h.w, {
                                                    classMix: 'MetaWidget_receiveDescr_9d',
                                                    text: R.strings.halloween_lobby.meta.receive.description(),
                                                    binding: {
                                                        keys: K > V ? V : K,
                                                        decrypt: V,
                                                        icon: s().createElement(o._, {
                                                            size: o.G.C44x44,
                                                            gray: !0,
                                                            className: 'MetaWidget_icon_44',
                                                        }),
                                                    },
                                                }),
                                            ),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: u()(y, Q && 'MetaWidget_decrypt__anim_71') },
                                            s().createElement(
                                                'div',
                                                { className: u()(y, Q && 'MetaWidget_decrypt__animShadow_7c') },
                                                s().createElement(r.zx, {
                                                    type: r.L$.Secondary,
                                                    size: J,
                                                    caption: R.strings.halloween_lobby.meta.btn.decrypt(),
                                                    showHintAnim: Q,
                                                    onClick: i.decrypt,
                                                }),
                                                V && s().createElement(D, { price: V }),
                                            ),
                                        ),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: u()(S, X && B) },
                                        s().createElement(
                                            b.u,
                                            {
                                                targetId: R.views.halloween.lobby.widgets.MetaView('resId'),
                                                contentId:
                                                    R.views.halloween.lobby.tooltips.EventMissionTooltip('resId'),
                                            },
                                            s().createElement(
                                                'div',
                                                null,
                                                s().createElement(h.w, {
                                                    key: _.get(),
                                                    classMix: 'MetaWidget_openDescr_66',
                                                    text: R.strings.halloween_lobby.meta.shortStory.$dyn(
                                                        (0, F.PI)(_.get()),
                                                    ),
                                                    isTruncationAvailable: !0,
                                                }),
                                            ),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: w },
                                            s().createElement(r.zx, {
                                                type: r.L$.Primary,
                                                size: r.qE.Small,
                                                caption: R.strings.halloween_lobby.meta.btn.view(),
                                                onClick: i.view,
                                                className: 'MetaWidget_openButton_f6',
                                            }),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    M = (0, a.memo)(function (e) {
                        const t = (0, a.useMemo)(
                            () => ({ rootId: R.views.halloween.lobby.widgets.MetaView('resId') }),
                            [],
                        );
                        return s().createElement(N, { options: t }, s().createElement(L, e));
                    });
            },
            8485: (e, t, n) => {
                'use strict';
                n.d(t, { T: () => An });
                var a = n(6179),
                    s = n.n(a);
                let i;
                !(function (e) {
                    (e.Hangar = 'hangar'),
                        (e.Setup = 'setup'),
                        (e.Compare = 'compare'),
                        (e.Battle = 'battle'),
                        (e.Respawn = 'respawn'),
                        (e.Prebattle = 'prebattle');
                })(i || (i = {}));
                var u = n(3403);
                const r = (e) => e.imageSource === R.images.gui.maps.icons.tanksetup.panel.empty(),
                    o = (e) => e === i.Battle || e === i.Prebattle,
                    l = (e) => o(e) || e === i.Respawn;
                var c = n(6483),
                    _ = n.n(c),
                    d = (n(7271), n(4598)),
                    m = n(3815),
                    b = n(8526),
                    p = n(5521),
                    E = n(7727),
                    g = n(7739);
                let h;
                !(function (e) {
                    (e.None = ''),
                        (e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge');
                })(h || (h = {}));
                function f(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return v(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                          ? v(e, t)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function v(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const A = (e, t = []) => {
                        const n = document.getElementById('root');
                        n && (n.style.cursor = e ? 'grabbing' : 'default');
                        for (var a, s = f(t); !(a = s()).done; ) {
                            const t = a.value,
                                n = document.getElementById(t);
                            n && (n.style.pointerEvents = e ? 'none' : 'auto');
                        }
                    },
                    C = (e, t, n) => {
                        let a = '',
                            s = 8e3;
                        for (var i, u = f(n); !(i = u()).done; ) {
                            const e = i.value,
                                n = Math.abs(e.centerX - t);
                            n < s && ((a = e.id), (s = n));
                        }
                        return a;
                    },
                    F = (e, t) => {
                        const n = t.find((t) => t.id === e);
                        return n ? n.centerX : 0;
                    };
                let D, S;
                !(function (e) {
                    (e.Waiting = 'waiting'), (e.Active = 'active'), (e.InEffect = 'in'), (e.Rollback = 'rollback');
                })(D || (D = {})),
                    (function (e) {
                        (e.Ready = 'ready'),
                            (e.DragStart = 'start'),
                            (e.Drag = 'drag'),
                            (e.Drop = 'drop'),
                            (e.DropExit = 'exit');
                    })(S || (S = {}));
                const B = (e) => `panel-${e}-section`,
                    w = (e, t) => {
                        const n = B(e),
                            a = t.filter((e) => e !== n);
                        return { selfId: n, blockOnGrabIds: ['setup-content', ...a] };
                    },
                    y = ({ baseId: e, slotsLength: t, handleSwap: n, setIsExitBlocked: s, syncInitiator: i }) => {
                        const u = ((e, t, n) => {
                                const s = (0, a.useRef)([]),
                                    i = (0, a.useRef)({ dragId: '', dropId: '', prevPotentialDropId: '' }),
                                    u = (0, a.useState)({ activeDragId: '', potentialDropId: '' }),
                                    r = u[0],
                                    o = u[1],
                                    l = (0, a.useCallback)((e) => {
                                        i.current.dropId ||
                                            i.current.prevPotentialDropId ||
                                            ((i.current.prevPotentialDropId = e),
                                            o({ activeDragId: e, potentialDropId: e }));
                                    }, []),
                                    c = (0, a.useCallback)((e, t) => {
                                        if (s.current) {
                                            const n = C(0, t, s.current);
                                            n !== i.current.prevPotentialDropId &&
                                                ((i.current.prevPotentialDropId = n),
                                                o({ activeDragId: e, potentialDropId: n }));
                                        }
                                    }, []),
                                    _ = (0, a.useCallback)((e, t) => {
                                        if (s.current && t) {
                                            const n = i.current,
                                                a = C(0, t, s.current);
                                            (n.dropId = a),
                                                (n.dragId = e),
                                                (n.prevPotentialDropId = ''),
                                                o({ activeDragId: e, potentialDropId: '' }),
                                                a !== e && (0, E.G)('cons_equipment_swipe');
                                        }
                                    }, []),
                                    d = (0, a.useCallback)(() => {
                                        const e = i.current,
                                            t = e.dragId,
                                            n = e.dropId,
                                            a = e.prevPotentialDropId;
                                        (t || n || a) &&
                                            ((i.current = { dragId: '', dropId: '', prevPotentialDropId: '' }),
                                            o({ activeDragId: '', potentialDropId: '' }));
                                    }, []),
                                    m = (0, a.useCallback)(
                                        (e) => {
                                            const t = i.current.dropId;
                                            t && t !== e ? n(e, t) : d();
                                        },
                                        [d, n],
                                    ),
                                    b = (0, a.useCallback)((e, t) => {
                                        const n = s.current.find((t) => t.id === e);
                                        n && t && (n.centerX = t);
                                    }, []),
                                    p = (0, a.useCallback)(
                                        (e, t) => {
                                            const n = t.dragId,
                                                a = t.currentCenterX;
                                            switch (e) {
                                                case S.Ready:
                                                    return b(n, a);
                                                case S.DragStart:
                                                    return l(n);
                                                case S.Drag:
                                                    return c(n, a);
                                                case S.Drop:
                                                    return _(n, a);
                                                case S.DropExit:
                                                    return m(n);
                                                default:
                                                    return void console.warn('Unknown grabber action', e);
                                            }
                                        },
                                        [l, c, _, m, b],
                                    );
                                return (
                                    (0, a.useEffect)(() => {
                                        if (e !== s.current.length) {
                                            const n = new Array(e).fill(null);
                                            s.current = n.map((e, n) => ({ id: `${t}-${n}`, centerX: 0 }));
                                        }
                                    }, [e, t]),
                                    {
                                        dragState: r,
                                        handleGrabberAction: p,
                                        getForceCenterX: (0, a.useCallback)((e) => {
                                            const t = i.current,
                                                n = t.dragId,
                                                a = t.dropId;
                                            return e === n ? F(a, s.current) : e === a ? F(n, s.current) : 0;
                                        }, []),
                                        resetDragResults: d,
                                    }
                                );
                            })(t, e, n),
                            r = u.dragState,
                            o = u.handleGrabberAction,
                            l = u.getForceCenterX,
                            c = u.resetDragResults,
                            _ = (0, a.useCallback)(
                                (e, t) => {
                                    if (s)
                                        switch (e) {
                                            case S.DragStart:
                                            case S.Drag:
                                                s(!0);
                                                break;
                                            default:
                                                s(!1);
                                        }
                                    o(e, t);
                                },
                                [o, s],
                            );
                        return (
                            (0, a.useEffect)(() => {
                                s && s(!1);
                            }, [s]),
                            (0, a.useEffect)(() => c, [i, c]),
                            { handleGrabberAction: _, dragState: r, getForceCenterX: l }
                        );
                    };
                var x = n(3215),
                    T = n(9480),
                    k = n(3946);
                const I = (0, x.q)()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    ammunitionPanel: e.object('ammunitionPanel'),
                                    roleSkillSlot: e.object('roleSkillSlot'),
                                    vehicleInfo: e.object('vehicleInfo'),
                                    state: e.object('state'),
                                    sectionGroups: e.array('ammunitionPanel.sectionGroups'),
                                    lastSlotAction: e.object('lastSlotAction'),
                                },
                                n = (0, k.Om)(() => t.sectionGroups.get().length),
                                a = (0, k.Om)(
                                    (e) => {
                                        const n = T.U2(t.sectionGroups.get(), e);
                                        if (!n) throw Error(`No ammunition section group found with index: ${e}`);
                                        return Object.assign({}, n, {
                                            sections: T.UI(n.sections, (e) =>
                                                Object.assign({}, e, {
                                                    slots: T.UI(e.slots, (e) => Object.assign({}, e)),
                                                }),
                                            ),
                                            setupSelector: Object.assign({}, n.setupSelector, {
                                                states: T.UI(n.setupSelector.states, (e) => e),
                                            }),
                                        });
                                    },
                                    { equals: d.jv },
                                ),
                                s = (0, k.Om)((e) => a(e).sections.length),
                                i = (0, k.Om)(
                                    (e, t) => {
                                        const n = a(e),
                                            s = T.U2(n.sections, t);
                                        if (!s) throw Error(`No ammunition section found with index: ${t}`);
                                        return s;
                                    },
                                    { equals: d.jv },
                                ),
                                u = (0, k.Om)((e, t) => i(e, t).slots.length),
                                o = (0, k.Om)((e, t) => {
                                    const n = i(e, t).slots;
                                    return T.hX(n, (e) => Boolean(e) && !r(e)).length;
                                }),
                                l = (0, k.Om)((e, t) => {
                                    const n = i(e, t).slots;
                                    return T.G(n, (e) => e.intCD > 0);
                                }),
                                c = (0, k.Om)(
                                    (e, t, n) => {
                                        const a = i(e, t),
                                            s = T.U2(a.slots, n);
                                        if (!s) throw Error(`No ammunition slot found with index: ${n}`);
                                        return s;
                                    },
                                    { equals: d.jv },
                                ),
                                _ = (0, k.Om)(
                                    (e) => {
                                        const t = a(e).sections;
                                        return T.v(t, (e) => B(e.type));
                                    },
                                    { equals: d.jv },
                                ),
                                m = (0, k.Om)(
                                    (e, t, n) => {
                                        const a = c(e, t, n);
                                        if (!a) throw Error(`No ammunition slot found with index: ${n}`);
                                        if (!a.specializations) throw Error('Selected slot have no specializations');
                                        return Object.assign({}, a.specializations, {
                                            specializations: T.UI(a.specializations.specializations, (e) =>
                                                Object.assign({}, e),
                                            ),
                                        });
                                    },
                                    { equals: d.jv },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    groups: { length: n, group: a },
                                    sections: { length: s, section: i, IDs: _ },
                                    slots: { length: u, filteredLength: o, slot: c, existFilled: l },
                                    specializations: m,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            sectionSelect: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSectionSelect',
                            ),
                            dragDropSwap: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onDragDropSwap',
                            ),
                            slotClear: e.createCallback((e) => Object.assign({}, e), 'ammunitionPanel.onSlotClear'),
                            sectionResized: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSectionResized',
                            ),
                            changeSetupIndex: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onChangeSetupIndex',
                            ),
                            specializationSelect: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSpecializationSelect',
                            ),
                            escKeyDown: e.createCallbackNoArgs('onEscKeyDown'),
                        }),
                    ),
                    N = I[0],
                    O = I[1];
                var L = n(1856);
                const M = (0, a.memo)(({ slotOffset: e, slotWidth: t, onAnimationEnd: n }) => {
                    const i = (0, a.useRef)(null),
                        u = (0, a.useRef)(!1);
                    (0, a.useEffect)(() => {
                        u.current = !0;
                    }, [e, t]);
                    const r = (0, a.useCallback)(() => {
                        u.current && n(), (u.current = !1);
                    }, [n]);
                    (0, a.useEffect)(() => {
                        const e = i.current;
                        return (
                            e && e.addEventListener('transitionend', r),
                            () => {
                                e && e.removeEventListener('transitionend', r);
                            }
                        );
                    }, [r]);
                    const o = (0, a.useMemo)(() => ({ left: e }), [e]),
                        l = (0, a.useMemo)(() => ({ width: t }), [t]);
                    return s().createElement(
                        'div',
                        { className: 'Border_base_f9' },
                        s().createElement(
                            'div',
                            { ref: i, className: 'Border_border_83', style: o },
                            s().createElement(
                                'div',
                                { className: 'Border_wrapper_17' },
                                s().createElement('div', { className: 'Border_active_e8', style: l }),
                            ),
                        ),
                    );
                });
                var P = n(3415);
                const H = ({ roleSkill: e, tooltipId: t, tooltipHeader: n, tooltipBody: i, className: u }) => {
                    const r = (0, a.useMemo)(
                        () => ({
                            args: { tooltipId: t, roleSkill: e, header: n, body: i, hasHtmlContent: !0 },
                            header: n,
                            body: i,
                            ignoreShowDelay: !0,
                        }),
                        [e, n, i, t],
                    );
                    return s().createElement(
                        P.l,
                        { tooltipArgs: r, className: _()('RoleSkillSlot_base_c4', u) },
                        s().createElement('div', {
                            className: 'RoleSkillSlot_icon_79',
                            style: { backgroundImage: `url(${R.images.gui.maps.icons.roleSkills.c_48x48.$dyn(e)})` },
                        }),
                    );
                };
                var $ = n(3138);
                const G = (0, a.memo)(({ slotOffset: e, slotWidth: t, isAnimationRunning: n }) => {
                    const i = (0, a.useState)({ offset: e, slotWidth: t }),
                        u = i[0],
                        r = i[1],
                        o = (0, a.useRef)({ initialized: !1, offset: e, slotWidth: t });
                    (0, a.useEffect)(() => {
                        let n = o.current.initialized;
                        !n && e && ((n = !0), r({ offset: e, slotWidth: t })),
                            (o.current = { initialized: n, offset: e, slotWidth: t });
                    }, [e, t]),
                        (0, a.useEffect)(() => {
                            n || r(o.current);
                        }, [n]);
                    const l = (0, a.useMemo)(() => {
                            const e = u.slotWidth + 25;
                            return { left: u.offset, width: e, backgroundSize: `${$.O.view.pxToRem(e)}rem 100%` };
                        }, [u.offset, u.slotWidth]),
                        c = !n && u.offset === o.current.offset,
                        d = _()(
                            'SlotGlow_glow_a9',
                            o.current.initialized && 'SlotGlow_glow__initialized_8d',
                            c ? 'SlotGlow_glow__shown_f2' : 'SlotGlow_glow__hidden_94',
                        );
                    return s().createElement(
                        'div',
                        { className: 'SlotGlow_base_40' },
                        s().createElement('div', { className: d, style: l }),
                    );
                });
                var z = n(4532),
                    W = n(5262),
                    j = n(3649);
                function U(e, t, n) {
                    const s = (0, a.useContext)(g.YN);
                    let i = Object.entries(s).filter(([e, t]) => !0 === t && e in W.u);
                    return (
                        n && (i = i.filter((e) => n.includes(e[0]))),
                        e.reduce((e, n) => {
                            const a = i.map((e) =>
                                _()(t[((e, t) => e + '__' + t)(n, e[0])], t[((e, t) => e + (0, j.e)(t))(n, e[0])]),
                            );
                            return (e[n] = _()(t[n], ...a)), e;
                        }, {})
                    );
                }
                const V = (e, t) => {
                    const n = [];
                    for (let a = 0; a < e; a++) n.push(t(a));
                    return n;
                };
                var Z = n(6373),
                    q = n(2558),
                    X = n(8934);
                const K = {
                        base__enterUp: 'GroupAnimation_base__enterUp_b3',
                        animationEnterTop: 'GroupAnimation_animationEnterTop_92',
                        base__enterDown: 'GroupAnimation_base__enterDown_f0',
                        animationEnterDown: 'GroupAnimation_animationEnterDown_73',
                        base__exitUp: 'GroupAnimation_base__exitUp_92',
                        animationExitTop: 'GroupAnimation_animationExitTop_89',
                        base__exitDown: 'GroupAnimation_base__exitDown_67',
                        animationExitDown: 'GroupAnimation_animationExitDown_02',
                    },
                    Y = ({ children: e, index: t, setSetupSwitching: n, disabled: i = !1 }) => {
                        const u = (0, a.useRef)(1 - t),
                            r = (0, a.useMemo)(() => {
                                const e = (n = t) === (a = u.current) ? '' : n > a ? 'down' : 'up';
                                var n, a;
                                const s = e && (0, j.e)(e);
                                return i ? {} : { enter: K[`base__enter${s}`], exit: K[`base__exit${s}`] };
                            }, [t, i]);
                        return (
                            (u.current = t),
                            s().createElement(
                                q.Z,
                                { className: K.base },
                                s().createElement(
                                    X.Z,
                                    {
                                        timeout: 300,
                                        key: t,
                                        classNames: r,
                                        onEnter: () => n(!0),
                                        onExited: () => n(!1),
                                    },
                                    e,
                                ),
                            )
                        );
                    },
                    Q = s().memo(({ text: e }) =>
                        s().createElement(
                            'div',
                            { className: 'KeyboardKey_base_57' },
                            s().createElement('div', { className: 'KeyboardKey_back_43' }, e),
                        ),
                    ),
                    J = 'SetupSwitchHotkey_plus_f0',
                    ee = s().memo(({ hotKeys: e }) =>
                        s().createElement(
                            'div',
                            { className: 'SetupSwitchHotkey_base_4c' },
                            e.map((e, t) => {
                                if (!e) return null;
                                const n = e.value;
                                return 0 === t
                                    ? s().createElement(Q, { key: t, text: n })
                                    : s().createElement(
                                          'div',
                                          { key: t, className: 'SetupSwitchHotkey_hotKeyWrapper_8d' },
                                          s().createElement(
                                              'div',
                                              { className: 'SetupSwitchHotkey_plusWrapper_f0' },
                                              s().createElement('div', {
                                                  className: `${J} SetupSwitchHotkey_plus__horizontal_e0`,
                                              }),
                                              s().createElement('div', {
                                                  className: `${J} SetupSwitchHotkey_plus__vertical_5b`,
                                              }),
                                          ),
                                          s().createElement(Q, { text: n }),
                                      );
                            }),
                        ),
                    ),
                    te = 'shells',
                    ne = 'battleAbilities',
                    ae = 'toggleShells';
                var se = n(2056);
                const ie = s().memo(function ({ panelType: e }) {
                    return s().createElement(
                        'div',
                        { className: 'HWSection_base_31' },
                        s().createElement(
                            se.u,
                            {
                                contentId: R.views.halloween.lobby.tooltips.AbilityTooltip('resId'),
                                targetId:
                                    e !== i.Setup ? R.views.halloween.lobby.widgets.TankSetupView('resId') : void 0,
                                args: { abilityName: 'nitro' },
                            },
                            s().createElement(
                                'div',
                                { className: 'HWSection_nitro_91' },
                                s().createElement('div', { className: 'HWSection_shadow_f7' }),
                            ),
                        ),
                    );
                });
                var ue = n(9987);
                const re = ({
                        binding: e,
                        text: t = '',
                        classMix: n,
                        alignment: i = j.v2.left,
                        formatWithBrackets: u,
                    }) => {
                        if (null === t) return console.error("FormatText was supplied with 'null'"), null;
                        const r = u && e ? (0, j.WU)(t, e) : t;
                        return s().createElement(
                            a.Fragment,
                            null,
                            r.split('\n').map((t, u) =>
                                s().createElement(
                                    'div',
                                    { className: _()('FormatText_base_d0', n), key: `${t}-${u}` },
                                    (0, j.Uw)(t, i, e).map((e, t) =>
                                        s().createElement(a.Fragment, { key: `${t}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    },
                    oe = (0, a.memo)(({ panelType: e, text: t, parentRef: n, isTruncated: u = !1, show: r = !1 }) => {
                        const o = (0, a.useRef)(!1),
                            l = (0, a.useState)(!1),
                            c = l[0],
                            d = l[1];
                        (0, a.useEffect)(() => {
                            n || (r && !o.current && (o.current = !0), d(r));
                        }, [r, n]);
                        const m = (0, a.useCallback)(() => {
                                (o.current = !0), d(!0);
                            }, []),
                            b = (0, a.useCallback)(() => {
                                d(!1);
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = n && n.current;
                                if (e)
                                    return (
                                        e.addEventListener('mouseenter', m),
                                        e.addEventListener('mouseleave', b),
                                        () => {
                                            e.removeEventListener('mouseenter', m),
                                                e.removeEventListener('mouseleave', b);
                                        }
                                    );
                            }, [n, m, b]),
                            s().createElement(
                                'div',
                                { className: _()('TopLabel_base_7f', o.current && 'TopLabel_base__ready_00') },
                                s().createElement(
                                    'div',
                                    {
                                        className: _()(
                                            'TopLabel_text_d0',
                                            e !== i.Setup && 'TopLabel_text__hangar_36',
                                            u && 'TopLabel_text__truncated_29',
                                            r && c ? 'TopLabel_text__shown_25' : 'TopLabel_text__hidden_79',
                                        ),
                                    },
                                    t,
                                ),
                            )
                        );
                    }),
                    le = 'notUsableSection';
                let ce;
                !(function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(ce || (ce = {}));
                const _e = 'tooltip_watched';
                let de, me, be, pe;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(de || (de = {})),
                    (function (e) {
                        (e.HangarView = 'hangar'),
                            (e.SetupView = 'setup_view'),
                            (e.ProgressView = 'progress_view'),
                            (e.RewardsView = 'rewards_view'),
                            (e.RewardsSelectionView = 'rewards_selection_view'),
                            (e.SkillsView = 'skills_view'),
                            (e.AwardsView = 'awards_view'),
                            (e.ContainerView = 'container_view');
                    })(me || (me = {})),
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
                    })(be || (be = {})),
                    (function (e) {
                        (e.Click = 'click'), (e.Close = 'close');
                    })(pe || (pe = {}));
                const Ee = () => Date.now(),
                    ge = (e, t) => {
                        const n = ((e, t) => {
                                const n = (0, a.useCallback)(
                                    (n, a = ce.Info, s) => {
                                        s || (s = {}),
                                            Object.keys(s).length >= 200 ||
                                                window.uiLoggerModel.log({
                                                    feature: e,
                                                    group: t,
                                                    action: n,
                                                    logLevel: a,
                                                    params: JSON.stringify(s),
                                                });
                                    },
                                    [e, t],
                                );
                                return (e, t, a) => n(e, t, a);
                            })(e, t),
                            s = (0, a.useRef)(new Map()),
                            i = (0, a.useRef)(new Map()),
                            u = (0, a.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = s.current.get(e);
                                    (void 0 !== t && t > 0) || s.current.set(e, Ee());
                                },
                                [s],
                            ),
                            r = (0, a.useCallback)(() => {
                                s.current.clear(), i.current.clear();
                            }, [s, i]),
                            o = (0, a.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== s.current.get(e) &&
                                        void 0 === i.current.get(e) &&
                                        i.current.set(e, Ee());
                                },
                                [s, i],
                            ),
                            l = (0, a.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = s.current.get(e);
                                    if (void 0 === t) return;
                                    const n = i.current.get(e);
                                    if (void 0 === n) return;
                                    i.current.delete(e);
                                    const a = Ee() - n;
                                    s.current.set(e, t + a);
                                },
                                [s, i],
                            ),
                            c = (0, a.useCallback)(
                                (e, t = 0, a, u) => {
                                    const r = s.current.get(e);
                                    if (void 0 === r) return;
                                    void 0 !== i.current.get(e) && l(e), s.current.delete(e);
                                    const o = (Ee() - r) / 1e3;
                                    o <= t ||
                                        ((u = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(u, o)),
                                        n(e, a, u));
                                },
                                [s, i, n, l],
                            );
                        return [(e) => u(e), (e, t, n, a) => c(e, t, n, a), () => r(), (e) => o(e), (e) => l(e)];
                    },
                    he = s().memo(function ({ className: e, children: t }) {
                        const n = ((e, t, n, s) => {
                                const i = ((e) => {
                                        const t = ge(e, 'metrics'),
                                            n = t[0],
                                            s = t[1],
                                            i = t[2],
                                            u = t[3],
                                            r = t[4],
                                            o = (0, a.useCallback)(
                                                (e) => {
                                                    const t = e.action,
                                                        n = e.timeLimit,
                                                        a = e.logLevel;
                                                    s(
                                                        t,
                                                        n,
                                                        a,
                                                        (({
                                                            partnerID: e,
                                                            item: t,
                                                            parentScreen: n,
                                                            itemState: a,
                                                            info: s,
                                                        }) => ({
                                                            item: t,
                                                            partnerID: e || null,
                                                            parent_screen: n || null,
                                                            item_state: a || null,
                                                            additional_info: s || null,
                                                        }))(e),
                                                    );
                                                },
                                                [s],
                                            );
                                        return [(e) => n(e), (e) => o(e), () => i(), (e) => u(e), (e) => r(e)];
                                    })('epic_battle'),
                                    u = i[0],
                                    r = i[1];
                                return [
                                    (0, a.useCallback)(() => u(_e), [u]),
                                    (0, a.useCallback)(
                                        () =>
                                            r({
                                                action: _e,
                                                timeLimit: 2,
                                                item: e,
                                                parentScreen: t,
                                                itemState: n,
                                                info: s,
                                            }),
                                        [r, e, t, n, s],
                                    ),
                                ];
                            })(be.SkillOrderTooltip, me.SetupView),
                            i = n[0],
                            u = n[1];
                        return s().createElement(
                            se.u,
                            {
                                contentId: R.views.frontline.lobby.tooltips.SkillOrderTooltip('resId'),
                                onMouseEnter: i,
                                onMouseLeave: u,
                            },
                            s().createElement('div', { className: e }, t),
                        );
                    });
                var fe = n(7902);
                const ve = (e, t) => e.split('.').reduce((e, t) => e && e[t], t);
                var Ae = n(6536),
                    Ce = n(9916);
                const Fe = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    De = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    Se = Ce.Sw.instance;
                let Be;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(Be || (Be = {}));
                const we = (e = 'model', t = Be.Deep) => {
                        const n = (0, a.useState)(0),
                            s = (n[0], n[1]),
                            i = (0, a.useMemo)(() => (0, fe.F)(), []),
                            u = i.caller,
                            r = i.resId,
                            o = (0, a.useMemo)(
                                () => (window.__feature && window.__feature !== u ? `subViews.${u}.${e}` : e),
                                [u, e],
                            ),
                            l = (0, a.useState)(() =>
                                ((e) => {
                                    const t = ve(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return Fe(t) ? t.value : t;
                                })(
                                    ((e) =>
                                        ((e, t) =>
                                            e.split('.').reduce((e, t) => {
                                                const n = ve(`${e}.${t}`, window);
                                                return Fe(n) ? ((e, t) => `${e}.${t}.value`)(e, t) : `${e}.${t}`;
                                            }))(e))(o),
                                ),
                            ),
                            c = l[0],
                            _ = l[1],
                            d = (0, a.useRef)(-1);
                        return (
                            (0, Ae.Z)(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? Be.Deep : Be.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== Be.None)
                                ) {
                                    const n = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === Be.Deep
                                                ? (e === c && s((e) => e + 1), _(e))
                                                : _(Object.assign([], e));
                                        },
                                        a = ((e) => {
                                            const t = ((e) => {
                                                    const t = (0, fe.F)(),
                                                        n = t.caller,
                                                        a = t.resId,
                                                        s =
                                                            window.__feature && window.__feature !== n && n
                                                                ? `subViews.${n}`
                                                                : '';
                                                    return { modelPrefix: s, modelPath: De(s, ''), resId: a };
                                                })(),
                                                n = t.modelPrefix,
                                                a = e.split('.');
                                            if (a.length > 0) {
                                                const e = [a[0]];
                                                return (
                                                    a.reduce((t, a) => {
                                                        const s = ve(De(n, `${t}.${a}`), window);
                                                        return Fe(s)
                                                            ? (e.push(s.id), `${t}.${a}.value`)
                                                            : (e.push(a), `${t}.${a}`);
                                                    }),
                                                    e.reduce((e, t) => e + '.' + t)
                                                );
                                            }
                                            return '';
                                        })(e);
                                    d.current = Se.addCallback(a, n, r, t === Be.Deep);
                                }
                            }),
                            (0, a.useEffect)(() => {
                                if (t !== Be.None)
                                    return () => {
                                        Se.removeCallback(d.current, r);
                                    };
                            }, [r, t]),
                            c
                        );
                    },
                    ye = () => s().createElement('div', { className: 'SlotDivider_base_60' }),
                    xe = ({ wrapper: e, children: t, when: n, withProps: a }) =>
                        n ? s().createElement(e, a, t) : s().createElement(s().Fragment, null, t),
                    Te = {
                        base: 'Container_base_9a',
                        base__grabbing: 'Container_base__grabbing_73',
                        base__hangar: 'Container_base__hangar_ab',
                        base__setup: 'Container_base__setup_1c',
                        base__compare: 'Container_base__compare_0b',
                        base__selected: 'Container_base__selected_17',
                        base__dragIn: 'Container_base__dragIn_a6',
                        base__dragInActive: 'Container_base__dragInActive_e5',
                        base__toggle: 'Container_base__toggle_94',
                        base__disabled: 'Container_base__disabled_22',
                    },
                    ke = ({
                        activeDragId: e,
                        slotType: t,
                        isSelected: n,
                        isBorderActive: a,
                        children: i,
                        panelType: u,
                        isDisabled: r,
                        isPotentialDrop: o,
                        onClick: l,
                    }) => {
                        const c = _()(
                            Te.base,
                            !e && Te[`base__${u}`],
                            t && Te[`base__${t}`],
                            n && !o && !a && Te.base__selected,
                            o && Te['base__dragIn' + (n ? 'Active' : '')],
                            r && Te.base__disabled,
                        );
                        return s().createElement('div', { className: c, onClick: l }, i);
                    },
                    Ie = {
                        base: 'Bonus_base_dd',
                        base__fitting: 'Bonus_base__fitting_d1',
                        icon: 'Bonus_icon_3b',
                        icon__battleBooster: 'Bonus_icon__battleBooster_66',
                        icon__battleBoosterReplace: 'Bonus_icon__battleBoosterReplace_8d',
                        icon__equipmentPlus: 'Bonus_icon__equipmentPlus_48',
                        icon__builtInEquipment: 'Bonus_icon__builtInEquipment_77',
                        icon__equipmentModernized: 'Bonus_icon__equipmentModernized_76',
                        icon__equipmentTrophyBasic: 'Bonus_icon__equipmentTrophyBasic_a4',
                        icon__equipmentTrophyUpgraded: 'Bonus_icon__equipmentTrophyUpgraded_6d',
                    },
                    Ne = s().memo(({ isTemporary: e, overlayType: t, overlaySource: n }) => {
                        const i = _()(Ie.base, e && Ie.base__fitting),
                            u = _()(Ie.icon, Ie[`icon__${t}`]),
                            r = (0, a.useMemo)(() => ({ backgroundImage: `url(${n})` }), [n]);
                        return s().createElement(
                            'div',
                            { className: i },
                            s().createElement('div', { className: u, style: r }),
                        );
                    }),
                    Re = {
                        base: 'Level_base_57',
                        base__level1: 'Level_base__level1_c4',
                        base__level2: 'Level_base__level2_9c',
                        base__level3: 'Level_base__level3_39',
                        base__level4: 'Level_base__level4_e3',
                        base__level5: 'Level_base__level5_ea',
                        base__level6: 'Level_base__level6_5d',
                        base__level7: 'Level_base__level7_03',
                        base__level8: 'Level_base__level8_b5',
                        base__level9: 'Level_base__level9_d6',
                        base__level10: 'Level_base__level10_89',
                    },
                    Oe = ({ level: e }) => {
                        const t = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.levels.$dyn(`tank_level_${e}`)})`,
                                }),
                                [e],
                            ),
                            n = _()(Re.base, Re[`base__level${e}`]);
                        return s().createElement('div', { style: t, className: n });
                    },
                    Le = ({
                        level: e,
                        overlayType: t,
                        isTemporary: n,
                        withAttention: i,
                        imageSource: u,
                        isIncompatible: r,
                    }) => {
                        const o = (0, a.useMemo)(() => {
                                const n = 'equipmentModernized' === t ? `${t}_${e}_overlay` : `${t}_overlay`;
                                return R.images.gui.maps.icons.quests.bonuses.small.$dyn(n);
                            }, [t, e]),
                            l = (0, a.useMemo)(() => ({ backgroundImage: `url(${u})` }), [u]),
                            c = !o && Boolean(t) && e;
                        return s().createElement(
                            'div',
                            null,
                            c && s().createElement(Oe, { level: e }),
                            s().createElement('div', {
                                className: _()('Inside_image_e5', (n || i) && 'Inside_image__fitting_11'),
                                style: l,
                            }),
                            i && s().createElement('div', { className: 'Inside_warning_e4' }),
                            r && s().createElement('div', { className: 'Inside_change_5a' }),
                            o && s().createElement(Ne, { isTemporary: n, overlaySource: o, overlayType: t }),
                        );
                    },
                    Me = (e) => {
                        const t = (0, a.useRef)(-1),
                            n = (0, a.useCallback)(
                                (n) => {
                                    if (-1 === t.current) {
                                        const a = e(n);
                                        a &&
                                            (t.current = window.setTimeout(() => {
                                                t.current = -1;
                                            }, a));
                                    }
                                },
                                [e],
                            );
                        return (0, a.useEffect)(() => () => clearTimeout(t.current), []), n;
                    };
                var Pe = n(5415),
                    He = n(2039);
                const $e = 'Grabber_base_cf',
                    Ge = ({
                        children: e,
                        id: t,
                        containerRef: n,
                        isEnabled: i = !0,
                        onClick: u,
                        forceCenterX: r,
                        isUpdateAvailable: o,
                        handleAction: l,
                        blockOnGrabIds: c = [],
                    }) => {
                        const d = (0, Pe.GS)().mediaSize,
                            E = (0, a.useRef)({
                                actualX: 0,
                                clickCenterOffset: 0,
                                dropCenterX: 0,
                                grabActivationPassed: !1,
                                isDragActive: !1,
                                id: t,
                            }),
                            g = (0, a.useRef)({
                                isValid: !1,
                                startX: 0,
                                startCenterX: 0,
                                minXRestriction: 0,
                                maxXRestriction: 8e3,
                            }),
                            h = (0, a.useRef)(null),
                            f = (0, a.useState)(!1),
                            v = f[0],
                            C = f[1],
                            F = (0, a.useState)(0),
                            D = F[0],
                            B = F[1],
                            w = (function () {
                                const e = (0, a.useRef)(0);
                                return (
                                    (0, He.k)(() => {
                                        window.cancelAnimationFrame(e.current);
                                    }),
                                    (0, a.useMemo)(
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
                            })(),
                            y = 0 !== r && i,
                            x = r ? r - g.current.startCenterX : D;
                        (0, a.useEffect)(() => {
                            if (((g.current.isValid = !1), t))
                                return (0, L.v)(() => {
                                    const e = h.current,
                                        a = n.current;
                                    if (a && e) {
                                        const n = e.getBoundingClientRect(),
                                            s = a.getBoundingClientRect(),
                                            i = n.left + 0.5 * n.width;
                                        (g.current = {
                                            isValid: !0,
                                            minXRestriction: s.left,
                                            maxXRestriction: s.left + s.width,
                                            startX: n.left,
                                            startCenterX: i,
                                        }),
                                            l(S.Ready, { dragId: t, currentCenterX: i });
                                    }
                                });
                        }, [d]);
                        const T = (0, a.useCallback)(
                                (e) => {
                                    (E.current.isDragActive = e),
                                        C(e),
                                        E.current.grabActivationPassed && !e && A(!1, c);
                                },
                                [c],
                            ),
                            k = (0, a.useCallback)(() => {
                                l(S.DragStart, { dragId: E.current.id }),
                                    (E.current.grabActivationPassed = !0),
                                    A(!0, c);
                            }, [l, c]),
                            I = (0, a.useCallback)((e) => {
                                const t = E.current,
                                    n = g.current,
                                    a = n.startX,
                                    s = n.startCenterX,
                                    i = n.minXRestriction,
                                    u = n.maxXRestriction,
                                    r = s - a,
                                    o = e - t.clickCenterOffset;
                                t.dropCenterX = ((e, t, n, a) => {
                                    const s = n + t,
                                        i = a - t;
                                    return e < s ? s : e > i ? i : e;
                                })(o, r, i, u);
                            }, []),
                            N = (0, a.useCallback)(
                                (e) => {
                                    const t = E.current,
                                        n = g.current;
                                    0 === e.button &&
                                        !t.isDragActive &&
                                        n.isValid &&
                                        i &&
                                        !o &&
                                        h.current &&
                                        ((t.actualX = e.clientX),
                                        (t.clickCenterOffset = t.actualX - n.startCenterX),
                                        T(!0));
                                },
                                [i, o, T],
                            ),
                            R = (0, a.useCallback)(() => {
                                !u || (i && g.current.isValid) || u();
                            }, [i, u]);
                        (0, b.gd)(
                            v ? p.n.ESCAPE : p.n.NONE,
                            (0, m.z)(() => T(!1)),
                        ),
                            (0, a.useEffect)(() => {
                                i && r && B(0);
                            }, [r, i]);
                        const O = !v && E.current.grabActivationPassed;
                        (0, a.useLayoutEffect)(() => {
                            E.current.id = t;
                        }, [t]),
                            (0, a.useEffect)(() => {
                                if (O) {
                                    const e = E.current;
                                    l(S.Drop, { dragId: e.id, currentCenterX: e.dropCenterX }),
                                        r === e.dropCenterX &&
                                            ((e.grabActivationPassed = !1),
                                            w.run(() => l(S.DropExit, { dragId: e.id })));
                                }
                            }, [O, w, r, l]),
                            (0, a.useEffect)(() => {
                                if (i && v && E.current.id) {
                                    const e = $.O.client.events.mouse.up(([e, t]) => {
                                            if ('outside' === t) return T(!1);
                                            const n = E.current,
                                                a = e.clientX;
                                            a !== n.actualX || 0 !== e.button || E.current.grabActivationPassed
                                                ? E.current.grabActivationPassed && I(a)
                                                : u && u(),
                                                E.current.isDragActive && T(!1);
                                        }),
                                        t = $.O.client.events.mouse.move(([e]) => {
                                            const t = E.current;
                                            if ((0 === e.clientX && 0 === e.clientY) || !t.isDragActive) return;
                                            const n = e.clientX,
                                                a = t.grabActivationPassed;
                                            !a && k(),
                                                n !== t.actualX &&
                                                    ((t.actualX = n),
                                                    I(n),
                                                    a && l(S.Drag, { dragId: t.id, currentCenterX: t.dropCenterX }),
                                                    B(t.dropCenterX - g.current.startCenterX));
                                        });
                                    return () => {
                                        t(), e();
                                    };
                                }
                            }, [k, l, v, i, u, T, I]);
                        const M = i
                            ? _()(
                                  $e,
                                  'Grabber_base__enabled_b0',
                                  v && 'Grabber_base__active_71',
                                  O && 'Grabber_base__exit_1f',
                                  y && 'Grabber_base__waitingUpdate_1d',
                                  r && 'Grabber_base__updating_f1',
                              )
                            : _()($e, r && 'Grabber_base__showAnimation_d9');
                        return s().createElement(
                            'div',
                            {
                                id: t,
                                ref: h,
                                onClick: R,
                                onMouseDown: N,
                                onTransitionEnd: (e) => {
                                    const t = E.current;
                                    e.target === h.current &&
                                        t.grabActivationPassed &&
                                        ((t.grabActivationPassed = !1), w.run(() => l(S.DropExit, { dragId: t.id })));
                                },
                                className: M,
                                style: { left: x },
                            },
                            e,
                        );
                    };
                let ze;
                !(function (e) {
                    (e[(e.Normal = 0)] = 'Normal'), (e[(e.Current = 1)] = 'Current'), (e[(e.Next = 2)] = 'Next');
                })(ze || (ze = {}));
                const We = ({ text: e, show: t, panelType: n, shellState: a, className: i }) => {
                    if (!e) return null;
                    const u = 'KEY_NONE' === e ? '..' : String(R.strings.readable_key_names.$dyn(e));
                    return s().createElement(
                        'div',
                        {
                            className: _()(
                                'KeyLabel_base_ec',
                                a === ze.Current && 'KeyLabel_base__current_c2',
                                a === ze.Next && 'KeyLabel_base__next_fa',
                                i,
                            ),
                        },
                        s().createElement(oe, { isTruncated: !0, text: u, show: t, panelType: n }),
                    );
                };
                var je = n(7078);
                const Ue = ({ children: e, slotType: t, slotId: n, panelType: u, isEnabled: r = !0 }) => {
                        const o = (0, a.useMemo)(() => ({ slotType: t, slotId: n }), [t, n]);
                        return s().createElement(
                            je.t,
                            {
                                isEnabled: r,
                                args: o,
                                decoratorId: [i.Battle, i.Prebattle].includes(u)
                                    ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                    : 0,
                            },
                            s().createElement('div', null, e),
                        );
                    },
                    Ve = (0, x.q)()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    ammunitionPanel: e.object('ammunitionPanel'),
                                    roleSkillSlot: e.object('roleSkillSlot'),
                                    vehicleInfo: e.object('vehicleInfo'),
                                    sectionGroups: e.array('ammunitionPanel.sectionGroups'),
                                    lastSlotAction: e.object('lastSlotAction'),
                                },
                                n = (0, k.Om)(() => t.sectionGroups.get().length),
                                a = (0, k.Om)(
                                    (e) => {
                                        const n = T.U2(t.sectionGroups.get(), e);
                                        if (!n) throw Error(`No ammunition section group found with index: ${e}`);
                                        return Object.assign({}, n, {
                                            sections: T.UI(n.sections, (e) =>
                                                Object.assign({}, e, {
                                                    slots: T.UI(e.slots, (e) => Object.assign({}, e)),
                                                }),
                                            ),
                                            setupSelector: Object.assign({}, n.setupSelector, {
                                                states: T.UI(n.setupSelector.states, (e) => e),
                                            }),
                                        });
                                    },
                                    { equals: d.jv },
                                ),
                                s = (0, k.Om)(() => T.u4(t.sectionGroups.get(), (e, t) => e + t.sections.length, 0)),
                                i = (0, k.Om)((e) => a(e).sections.length),
                                u = (0, k.Om)(
                                    (e, t) => {
                                        const n = a(e),
                                            s = T.U2(n.sections, t);
                                        if (!s) throw Error(`No ammunition section found with index: ${t}`);
                                        return s;
                                    },
                                    { equals: d.jv },
                                ),
                                o = (0, k.Om)((e, t) => u(e, t).slots.length),
                                l = (0, k.Om)((e, t) => {
                                    const n = u(e, t).slots;
                                    return T.hX(n, (e) => Boolean(e) && !r(e)).length;
                                }),
                                c = (0, k.Om)((e, t) => {
                                    const n = u(e, t).slots;
                                    return T.G(n, (e) => e.intCD > 0);
                                }),
                                _ = (0, k.Om)(
                                    (e, t, n) => {
                                        const a = u(e, t),
                                            s = T.U2(a.slots, n);
                                        if (!s) throw Error(`No ammunition slot found with index: ${n}`);
                                        return s;
                                    },
                                    { equals: d.jv },
                                ),
                                m = (0, k.Om)(
                                    (e) => {
                                        const t = a(e).sections;
                                        return T.v(t, (e) => B(e.type));
                                    },
                                    { equals: d.jv },
                                ),
                                b = (0, k.Om)(
                                    (e, t, n) => {
                                        const a = _(e, t, n);
                                        if (!a) throw Error(`No ammunition slot found with index: ${n}`);
                                        if (!a.specializations) throw Error('Selected slot have no specializations');
                                        return Object.assign({}, a.specializations, {
                                            specializations: T.UI(a.specializations.specializations, (e) =>
                                                Object.assign({}, e),
                                            ),
                                        });
                                    },
                                    { equals: d.jv },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    groups: { length: n, group: a },
                                    sections: { allSectionsLength: s, length: i, section: u, IDs: m },
                                    slots: { length: o, filteredLength: l, slot: _, existFilled: c },
                                    specializations: b,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            sectionSelect: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSectionSelect',
                            ),
                            dragDropSwap: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onDragDropSwap',
                            ),
                            slotClear: e.createCallback((e) => Object.assign({}, e), 'ammunitionPanel.onSlotClear'),
                            sectionResized: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSectionResized',
                            ),
                            changeSetupIndex: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onChangeSetupIndex',
                            ),
                            specializationSelect: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSpecializationSelect',
                            ),
                            escKeyDown: e.createCallbackNoArgs('onEscKeyDown'),
                        }),
                    ),
                    Ze = (Ve[0], Ve[1]),
                    qe = (0, a.memo)(
                        ({ id: e, show: t = !0, onClick: n, soundHover: i = 'highlight', soundClick: u = 'play' }) => {
                            const r = (0, a.useState)(!1),
                                o = r[0],
                                l = r[1],
                                c = (0, a.useState)(!1),
                                d = c[0],
                                m = c[1],
                                b = (0, a.useState)(!1),
                                p = b[0],
                                g = b[1],
                                h = (0, a.useCallback)((e) => {
                                    e.stopPropagation();
                                }, []),
                                f = (0, a.useCallback)(() => {
                                    m(!0), i && (0, E.G)(i);
                                }, [i]),
                                v = (0, a.useCallback)(() => {
                                    l(!1), m(!1);
                                }, []),
                                A = (0, a.useCallback)(
                                    (e) => {
                                        t && 0 === e.button && (l(!0), u && (0, E.G)(u));
                                    },
                                    [t, u],
                                ),
                                C = (0, a.useCallback)(
                                    (e) => {
                                        t && 0 === e.button && n && n();
                                    },
                                    [t, n],
                                );
                            (0, a.useEffect)(
                                () =>
                                    (0, L.v)(() => {
                                        g(!0);
                                    }),
                                [],
                            );
                            const F = _()(
                                'Close_base_f3',
                                !p && 'Close_base__invisible_0e',
                                p && t && 'Close_base__shown_a2',
                                o && 'Close_base__down_2b',
                                d && 'Close_base__hover_6d',
                            );
                            return s().createElement('div', {
                                id: e,
                                onMouseOver: f,
                                onMouseLeave: v,
                                onMouseDown: A,
                                onMouseUp: C,
                                className: F,
                                onClick: h,
                            });
                        },
                    );
                var Xe = n(1641);
                const Ke = ({
                        children: e,
                        contentID: t,
                        decoratorID: n = 0,
                        targetId: s = 0,
                        args: i,
                        isEnabled: u = !0,
                        onMouseDown: r,
                    }) => {
                        const o = (0, a.useCallback)(() => {
                                (0, Ce.c9)(Ce.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: s,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: i,
                                }),
                                    E.$.playYes();
                            }, [i, t, n, s]),
                            l = (0, a.useCallback)(() => {
                                (0, Ce.c9)(Ce.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: s,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, n, s]),
                            c = (0, a.useCallback)(
                                (e) => {
                                    r && r(e), ((e) => e.button === Xe.t.RIGHT)(e) && o();
                                },
                                [r, o],
                            );
                        return (
                            (0, a.useEffect)(() => {
                                !1 === u && l();
                            }, [u, l]),
                            u ? (0, a.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Ye = ['children'];
                function Qe() {
                    return (
                        (Qe = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Qe.apply(null, arguments)
                    );
                }
                const Je = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, Ye);
                    return s().createElement(
                        Ke,
                        Qe({}, n, { contentID: R.views.common.BackportContextMenu('resId') }),
                        t,
                    );
                };
                var et = n(1396);
                const tt = 'select',
                    nt = 'undo',
                    at = 'swap',
                    st = 'demount',
                    it = 'demount_from_setup',
                    ut = 'demount_from_setups',
                    rt = 'destroy',
                    ot = 1600;
                let lt;
                !(function (e) {
                    (e.RIGHT = 'Right'),
                        (e.LEFT = 'Left'),
                        (e.SWAP = 'Swap'),
                        (e.FITTING = 'Fitting'),
                        (e.FITTING_REMOVE = 'FittingRemove'),
                        (e.FADE = 'Fade'),
                        (e.DESTROY = 'Destroy'),
                        (e.DEMOUNT = 'Demount');
                })(lt || (lt = {}));
                const ct = { [at]: 200, [nt]: 250, [tt]: 250, [rt]: 1400, [st]: ot, [ut]: ot, [it]: ot },
                    _t = { enterActive: 'BackEffects_shine__enterActive_54' },
                    dt = { enterActive: 'BackEffects_sparks__enterActive_79' },
                    mt = { enterActive: 'BackEffects_nut__enterActive_b8' },
                    bt = { enterActive: 'BackEffects_wrench__enterActive_ca' },
                    pt = [st, ut],
                    Et = s().memo(({ in: e, actionType: t }) =>
                        s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(
                                X.Z,
                                { in: e, timeout: 200, classNames: _t },
                                s().createElement('div', { className: 'BackEffects_shine_f6' }),
                            ),
                            s().createElement(
                                X.Z,
                                { in: e, timeout: 400, classNames: dt },
                                s().createElement('div', { className: 'BackEffects_sparks_55' }),
                            ),
                            pt.includes(t) &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        X.Z,
                                        { in: e, timeout: 600, classNames: mt },
                                        s().createElement('div', { className: 'BackEffects_nut_79' }),
                                    ),
                                    s().createElement(
                                        X.Z,
                                        { in: e, timeout: 600, classNames: bt },
                                        s().createElement('div', { className: 'BackEffects_wrench_5a' }),
                                    ),
                                ),
                        ),
                    ),
                    gt = ({ inProp: e, maskImage: t }) =>
                        s().createElement(
                            X.Z,
                            { in: e, timeout: 1200, classNames: { enterActive: 'ColorMask_base__enterActive_62' } },
                            s().createElement('div', {
                                className: 'ColorMask_base_60',
                                style: { maskImage: `url(${t})` },
                            }),
                        ),
                    ht = {
                        base__exitLeft: 'SlotTransitions_base__exitLeft_d8',
                        'animation-left': 'SlotTransitions_animation-left_27',
                        base__exitLeftFade: 'SlotTransitions_base__exitLeftFade_53',
                        'animation-fade': 'SlotTransitions_animation-fade_ce',
                        base__enterRight: 'SlotTransitions_base__enterRight_bb',
                        'animation-right': 'SlotTransitions_animation-right_31',
                        base__enterRightFade: 'SlotTransitions_base__enterRightFade_63',
                        base__exitRight: 'SlotTransitions_base__exitRight_b9',
                        base__enterLeft: 'SlotTransitions_base__enterLeft_e9',
                        base__exitRightSwap: 'SlotTransitions_base__exitRightSwap_64',
                        'animation-right-long': 'SlotTransitions_animation-right-long_bd',
                        base__enterRightSwap: 'SlotTransitions_base__enterRightSwap_5e',
                        base__enterLeftSwap: 'SlotTransitions_base__enterLeftSwap_da',
                        'animation-left-long': 'SlotTransitions_animation-left-long_ec',
                        base__exitLeftSwap: 'SlotTransitions_base__exitLeftSwap_c3',
                        base__exitFade: 'SlotTransitions_base__exitFade_4c',
                        base__enterFade: 'SlotTransitions_base__enterFade_77',
                        base: 'SlotTransitions_base_6d',
                        base__enter: 'SlotTransitions_base__enter_54',
                        base__enterFitting: 'SlotTransitions_base__enterFitting_c7',
                        baseShells__exitLeft: 'SlotTransitions_baseShells__exitLeft_1e',
                        'animation-left-shells': 'SlotTransitions_animation-left-shells_0d',
                        baseShells__enterRight: 'SlotTransitions_baseShells__enterRight_66',
                        'animation-right-shells': 'SlotTransitions_animation-right-shells_7c',
                        baseShells__exitRight: 'SlotTransitions_baseShells__exitRight_e4',
                        baseShells__enterLeft: 'SlotTransitions_baseShells__enterLeft_94',
                        baseShells__exitRightSwap: 'SlotTransitions_baseShells__exitRightSwap_fd',
                        'animation-right-long-shells': 'SlotTransitions_animation-right-long-shells_41',
                        baseShells__enterRightSwap: 'SlotTransitions_baseShells__enterRightSwap_41',
                        baseShells__enterLeftSwap: 'SlotTransitions_baseShells__enterLeftSwap_19',
                        'animation-left-long-shells': 'SlotTransitions_animation-left-long-shells_00',
                        baseShells__exitLeftSwap: 'SlotTransitions_baseShells__exitLeftSwap_04',
                        baseShells__exitFade: 'SlotTransitions_baseShells__exitFade_1b',
                        baseShells__enterFade: 'SlotTransitions_baseShells__enterFade_72',
                        baseOptDevices__exitLeft: 'SlotTransitions_baseOptDevices__exitLeft_fe',
                        baseOptDevices__exitLeftFade: 'SlotTransitions_baseOptDevices__exitLeftFade_8a',
                        baseOptDevices__enterRight: 'SlotTransitions_baseOptDevices__enterRight_5d',
                        baseOptDevices__enterRightFade: 'SlotTransitions_baseOptDevices__enterRightFade_2c',
                        baseOptDevices__exitRight: 'SlotTransitions_baseOptDevices__exitRight_72',
                        baseOptDevices__enterLeft: 'SlotTransitions_baseOptDevices__enterLeft_0f',
                        baseOptDevices__exitRightSwap: 'SlotTransitions_baseOptDevices__exitRightSwap_09',
                        baseOptDevices__enterRightSwap: 'SlotTransitions_baseOptDevices__enterRightSwap_04',
                        baseOptDevices__enterLeftSwap: 'SlotTransitions_baseOptDevices__enterLeftSwap_52',
                        baseOptDevices__exitLeftSwap: 'SlotTransitions_baseOptDevices__exitLeftSwap_e9',
                        baseOptDevices__enterFitting: 'SlotTransitions_baseOptDevices__enterFitting_8b',
                        'animation-fitting': 'SlotTransitions_animation-fitting_24',
                        baseOptDevices__exitFittingRemove: 'SlotTransitions_baseOptDevices__exitFittingRemove_fc',
                        'animation-fitting-remove': 'SlotTransitions_animation-fitting-remove_e0',
                        baseOptDevices__exitActiveFitting: 'SlotTransitions_baseOptDevices__exitActiveFitting_d0',
                        baseOptDevices__exitDestroy: 'SlotTransitions_baseOptDevices__exitDestroy_c9',
                        'animation-destroy': 'SlotTransitions_animation-destroy_12',
                        baseOptDevices__enterDestroy: 'SlotTransitions_baseOptDevices__enterDestroy_19',
                        baseOptDevices__exitDemount: 'SlotTransitions_baseOptDevices__exitDemount_e3',
                        'animation-bright-up': 'SlotTransitions_animation-bright-up_8e',
                        'animation-demount': 'SlotTransitions_animation-demount_d8',
                        baseOptDevices__enterDemount: 'SlotTransitions_baseOptDevices__enterDemount_8a',
                        baseOptDevices__exitFade: 'SlotTransitions_baseOptDevices__exitFade_10',
                        baseOptDevices__enterFade: 'SlotTransitions_baseOptDevices__enterFade_cf',
                        baseOptDevices__enterDemountFade: 'SlotTransitions_baseOptDevices__enterDemountFade_57',
                        baseConsumables__exitLeft: 'SlotTransitions_baseConsumables__exitLeft_d9',
                        baseConsumables__exitLeftFade: 'SlotTransitions_baseConsumables__exitLeftFade_4f',
                        baseConsumables__enterRight: 'SlotTransitions_baseConsumables__enterRight_02',
                        baseConsumables__enterRightFade: 'SlotTransitions_baseConsumables__enterRightFade_c6',
                        baseConsumables__exitRight: 'SlotTransitions_baseConsumables__exitRight_39',
                        baseConsumables__enterLeft: 'SlotTransitions_baseConsumables__enterLeft_97',
                        baseConsumables__exitRightSwap: 'SlotTransitions_baseConsumables__exitRightSwap_8a',
                        baseConsumables__enterRightSwap: 'SlotTransitions_baseConsumables__enterRightSwap_28',
                        baseConsumables__enterLeftSwap: 'SlotTransitions_baseConsumables__enterLeftSwap_8e',
                        baseConsumables__exitLeftSwap: 'SlotTransitions_baseConsumables__exitLeftSwap_0e',
                        baseConsumables__enterFitting: 'SlotTransitions_baseConsumables__enterFitting_13',
                        baseConsumables__exitFittingRemove: 'SlotTransitions_baseConsumables__exitFittingRemove_01',
                        baseConsumables__exitActiveFitting: 'SlotTransitions_baseConsumables__exitActiveFitting_10',
                        baseConsumables__exitFade: 'SlotTransitions_baseConsumables__exitFade_5b',
                        baseConsumables__enterFade: 'SlotTransitions_baseConsumables__enterFade_bd',
                        baseBattleAbilities__exitLeft: 'SlotTransitions_baseBattleAbilities__exitLeft_52',
                        baseBattleAbilities__exitLeftFade: 'SlotTransitions_baseBattleAbilities__exitLeftFade_a9',
                        baseBattleAbilities__enterRight: 'SlotTransitions_baseBattleAbilities__enterRight_7b',
                        baseBattleAbilities__enterRightFade: 'SlotTransitions_baseBattleAbilities__enterRightFade_d3',
                        baseBattleAbilities__exitRight: 'SlotTransitions_baseBattleAbilities__exitRight_fc',
                        baseBattleAbilities__enterLeft: 'SlotTransitions_baseBattleAbilities__enterLeft_97',
                        baseBattleAbilities__exitRightSwap: 'SlotTransitions_baseBattleAbilities__exitRightSwap_7d',
                        baseBattleAbilities__enterRightSwap: 'SlotTransitions_baseBattleAbilities__enterRightSwap_e5',
                        baseBattleAbilities__enterLeftSwap: 'SlotTransitions_baseBattleAbilities__enterLeftSwap_ca',
                        baseBattleAbilities__exitLeftSwap: 'SlotTransitions_baseBattleAbilities__exitLeftSwap_c0',
                        baseBattleAbilities__enterFitting: 'SlotTransitions_baseBattleAbilities__enterFitting_de',
                        baseBattleAbilities__exitFittingRemove:
                            'SlotTransitions_baseBattleAbilities__exitFittingRemove_bc',
                        baseBattleAbilities__exitActiveFitting:
                            'SlotTransitions_baseBattleAbilities__exitActiveFitting_3d',
                        baseBattleAbilities__exitFade: 'SlotTransitions_baseBattleAbilities__exitFade_21',
                        baseBattleAbilities__enterFade: 'SlotTransitions_baseBattleAbilities__enterFade_15',
                        baseBattleBoosters__enterFitting: 'SlotTransitions_baseBattleBoosters__enterFitting_56',
                        baseBattleBoosters__exitFittingRemove:
                            'SlotTransitions_baseBattleBoosters__exitFittingRemove_e5',
                        baseBattleBoosters__exitActiveFitting:
                            'SlotTransitions_baseBattleBoosters__exitActiveFitting_f1',
                    },
                    ft = { enter: ht.base__enter, exit: ht.base__enter },
                    vt = (0, u.Pi)(
                        ({
                            children: e,
                            slotIndex: t,
                            uniqueKey: n,
                            slotType: i,
                            isEmpty: u = !1,
                            imageSource: r,
                            itemInstalledSetupIndex: o,
                        }) => {
                            const l = Ze().model.lastSlotAction.get(),
                                c = l.leftID,
                                _ = l.rightID,
                                d = l.leftIntCD,
                                m = l.rightIntCD,
                                b = l.actionType,
                                p = l.intCD,
                                E = (0, a.useState)(!0),
                                g = E[0],
                                h = E[1],
                                f = (0, a.useState)(!0),
                                v = f[0],
                                A = f[1],
                                C = (0, a.useState)(r),
                                F = C[0],
                                D = C[1],
                                S = (0, a.useState)(n),
                                B = S[0],
                                w = S[1],
                                y = (0, a.useState)(o),
                                x = y[0],
                                T = y[1],
                                k = (0, et.K)(),
                                I = (0, et.K)(),
                                N = (p === n || p === B) && x !== o && [rt, st, ut].includes(b),
                                R = -1 === d || -1 === m,
                                O = i ? `base${i[0].toUpperCase() + i.slice(1)}` : 'base',
                                L = ct[b] || 0;
                            (0, a.useEffect)(() => {
                                u || D(r);
                            }, [u, r]);
                            const M = (0, a.useCallback)(
                                    (e) => {
                                        const n = Object.assign({}, ft);
                                        switch (b) {
                                            case at: {
                                                const e = c === t ? lt.RIGHT : lt.LEFT,
                                                    a = _ - c != 1 ? lt.SWAP : '';
                                                (n.enterDone = ht[`${O}__enter${e}${a}`]),
                                                    (n.exit = ht[`${O}__exit${e}${a}`]),
                                                    R &&
                                                        (u
                                                            ? (n.enterDone = ht[`${O}__enter${lt.FADE}`])
                                                            : (n.exit = ht[`${O}__exit${lt.FADE}`]));
                                                break;
                                            }
                                            case rt:
                                                (n.enterDone = ht[`${O}__enter${lt.DESTROY}`]),
                                                    (n.exit = ht[`${O}__exit${lt.DESTROY}`]),
                                                    k.run(() => h(!0), 900),
                                                    A(!0);
                                                break;
                                            case ut:
                                            case st:
                                                (n.enter = ht[`${O}__enter${lt.DEMOUNT}${lt.FADE}`]),
                                                    (n.exit = ht[`${O}__exit${lt.DEMOUNT}`]),
                                                    k.run(() => h(!0), 900);
                                                break;
                                            case tt:
                                            case nt:
                                                if (i !== te) {
                                                    const e = b === tt ? lt.FITTING : lt.FITTING_REMOVE;
                                                    (n.enter = ht[`${O}__enter${e}`]),
                                                        (n.exit = ht[`${O}__exit${e}`]),
                                                        (n.exitActive = ht[`${O}__exitActive${lt.FITTING}`]);
                                                } else
                                                    (n.enterDone = ht[`${O}__enter${lt.FADE}`]),
                                                        (n.exit = ht[`${O}__exit${lt.FADE}`]);
                                                break;
                                            default:
                                                return e;
                                        }
                                        return s().cloneElement(e, { classNames: n, timeout: L });
                                    },
                                    [b, L, c, t, _, O, R, u, k, i],
                                ),
                                P = (0, a.useCallback)(
                                    (e) => {
                                        I.run(() => {
                                            (e.className = ''), e.classList.add(ht.base), w(n), T(o);
                                        }, L);
                                    },
                                    [I, L, n, o],
                                ),
                                H = (0, a.useCallback)(() => {
                                    h(!1), A(!1);
                                }, []);
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(
                                    q.Z,
                                    { component: null, childFactory: M },
                                    s().createElement(
                                        X.Z,
                                        {
                                            key: n,
                                            timeout: L,
                                            classNames: ft,
                                            onEntered: P,
                                            onExiting: H,
                                            unmountOnExit: !0,
                                        },
                                        s().createElement('div', { className: ht.base }, e),
                                    ),
                                ),
                                N &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement(Et, { in: g, actionType: b }),
                                        s().createElement(gt, { inProp: v, maskImage: F }),
                                    ),
                            );
                        },
                    ),
                    At = (0, u.Pi)(
                        ({
                            intCD: e,
                            id: t,
                            itemInstalledSetupIdx: n,
                            isMountedMoreThanOne: i,
                            isInstalled: u,
                            isDisabled: r,
                            imageSource: o,
                            isEmpty: l,
                            slotIndex: c,
                            slotType: _,
                            contextMenuDisabled: d,
                            isSetupSwitching: m,
                            children: b,
                        }) => {
                            const p = Ze().model.root.get().vehicleCD,
                                E = (0, a.useState)(!0),
                                g = E[0],
                                h = E[1],
                                f = (0, et.K)();
                            (0, a.useEffect)(() => {
                                h(!1), f.run(() => h(!0), 100);
                            }, [p]);
                            const v = (0, a.useMemo)(
                                () => ({
                                    intCD: e,
                                    slotType: _,
                                    installedSlotId: t,
                                    isMounted: u,
                                    fieldType: 1,
                                    itemInstalledSetupIdx: n,
                                    itemInstalledSetupSlotIdx: t,
                                    isMountedMoreThanOne: i,
                                }),
                                [e, _, t, n, u, i],
                            );
                            return g
                                ? s().createElement(
                                      vt,
                                      {
                                          uniqueKey: e,
                                          isEmpty: l,
                                          slotIndex: c,
                                          slotType: _,
                                          imageSource: o,
                                          itemInstalledSetupIndex: n,
                                      },
                                      s().createElement(
                                          Je,
                                          { isEnabled: !(m || d || r || l), args: v },
                                          s().createElement('div', null, b),
                                      ),
                                  )
                                : s().createElement('div', null, b);
                        },
                    ),
                    Ct = (0, u.Pi)(
                        ({
                            slotType: e,
                            slotIndex: t,
                            level: n,
                            isSelected: u,
                            isSetupSwitching: r,
                            isSectionSelected: c,
                            onActiveSlotChanged: _,
                            onSlotSelected: d,
                            onActiveSlotRefChanged: m,
                            onSlotClear: b,
                            panelType: p,
                            isDisabled: g = !1,
                            isBorderActive: h,
                            isIncompatible: f = !1,
                            grabberId: v,
                            containerRef: A,
                            activeDragId: C,
                            handleGrabberAction: F,
                            forceLeftUpdate: D,
                            potentialDropId: S,
                            blockOnGrabIds: B,
                            contextMenuDisabled: w,
                            groupIndex: y,
                            sectionIndex: x,
                        }) => {
                            const T = Ze().model.computes.slots.slot(y, x, t),
                                k = T.imageSource,
                                I = T.isInstalled,
                                N = T.itemInstalledSetupIdx,
                                R = T.isMountedMoreThanOne,
                                O = T.overlayType,
                                M = T.keyName,
                                P = T.categoryImgSource,
                                H = T.withAttention,
                                $ = T.id,
                                G = T.intCD,
                                z = p === i.Setup,
                                W = !l(p),
                                j = !o(p),
                                U = p === i.Compare,
                                V = z && c && W,
                                Z = (0, a.useRef)(!1),
                                q = (0, a.useRef)(null),
                                X = -1 === G;
                            (0, a.useEffect)(() => {
                                if (!Z.current && c && u)
                                    return (0, L.v)(() => {
                                        _ && _(q, e, $), (Z.current = !0);
                                    });
                                Z.current = !0;
                            }, [$, c, u, _, e]),
                                (0, a.useEffect)(() => {
                                    u && m(q);
                                }, [u, m]);
                            const K = (0, a.useCallback)(() => (!u && W && !r && d(e, $), 500), [$, W, u, r, d, e]),
                                Y = Me(K),
                                Q = (0, a.useCallback)(() => {
                                    g || Y('');
                                }, [Y, g]),
                                J = (0, a.useCallback)(() => {
                                    j && !u && !C && !g && E.$.playHighlight();
                                }, [u, C, g, j]);
                            (0, a.useEffect)(() => {
                                S && E.$.playHighlight();
                            }, [S]);
                            const ee = (0, a.useCallback)(() => {
                                    null == b || b($, e);
                                }, [$, b, e]),
                                te = z && !I,
                                ne = Boolean(v && S === v),
                                ae = v && (V || U),
                                se = `${e}-slot-${$}`,
                                ie = P && P.length > 0,
                                ue = ie ? { backgroundImage: `url(${P})` } : {},
                                re = {
                                    id: v,
                                    containerRef: A,
                                    isEnabled: !X,
                                    onClick: Q,
                                    isUpdateAvailable: Boolean(C),
                                    handleAction: F,
                                    forceCenterX: D,
                                    blockOnGrabIds: B,
                                },
                                oe = {
                                    isEmpty: X,
                                    intCD: G,
                                    slotType: e,
                                    slotIndex: t,
                                    imageSource: k,
                                    isDisabled: g,
                                    isInstalled: I,
                                    id: $,
                                    itemInstalledSetupIdx: N,
                                    isMountedMoreThanOne: R,
                                    contextMenuDisabled: w,
                                    isSetupSwitching: r,
                                };
                            return s().createElement(
                                'div',
                                { className: 'Slot_base_3a', onMouseEnter: J, id: se },
                                (c || U) &&
                                    !I &&
                                    s().createElement(
                                        'div',
                                        { className: 'Slot_close_bb' },
                                        s().createElement(qe, { id: `close-${se}`, show: !C, onClick: ee }),
                                    ),
                                s().createElement(
                                    Ue,
                                    { slotType: e, slotId: $, isEnabled: !C, panelType: p },
                                    s().createElement(
                                        'div',
                                        { ref: q },
                                        s().createElement(
                                            ke,
                                            {
                                                activeDragId: C,
                                                slotType: e,
                                                isSelected: u,
                                                isBorderActive: Boolean(h),
                                                panelType: p,
                                                isDisabled: g,
                                                isPotentialDrop: ne,
                                                onClick: ae ? void 0 : Q,
                                            },
                                            W &&
                                                s().createElement(
                                                    'div',
                                                    { className: 'Slot_label_e6' },
                                                    s().createElement(We, { text: M, show: Boolean(c), panelType: p }),
                                                ),
                                            s().createElement(
                                                xe,
                                                { when: Boolean(ae), wrapper: Ge, withProps: re },
                                                s().createElement(
                                                    xe,
                                                    { when: W, wrapper: At, withProps: oe },
                                                    s().createElement(Le, {
                                                        imageSource: k,
                                                        isIncompatible: f,
                                                        overlayType: O,
                                                        level: n,
                                                        isTemporary: te,
                                                        withAttention: H,
                                                    }),
                                                ),
                                            ),
                                            ie &&
                                                s().createElement(
                                                    s().Fragment,
                                                    null,
                                                    s().createElement('span', { className: 'Slot_shadow_a7' }),
                                                    s().createElement('span', {
                                                        className: 'Slot_category_2c',
                                                        style: ue,
                                                    }),
                                                ),
                                            g && s().createElement('div', { className: 'Slot_disabled_5d' }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Ft = ['rank'],
                    Dt = (e) => {
                        let t = e.rank,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, Ft);
                        return s().createElement(
                            'div',
                            { className: 'BattleAbilitySlot_base_3c' },
                            s().createElement(Ct, n),
                            t &&
                                s().createElement('div', {
                                    className: 'BattleAbilitySlot_rank_60',
                                    style: { backgroundImage: `url(${t})` },
                                }),
                        );
                    };
                var St = n(3457);
                const Bt = {
                        base: 'Specialization_base_ec',
                        base__tiny: 'Specialization_base__tiny_fe',
                        base__small: 'Specialization_base__small_a3',
                        base__medium: 'Specialization_base__medium_85',
                        base__large: 'Specialization_base__large_07',
                        base__huge: 'Specialization_base__huge_33',
                        base__setup: 'Specialization_base__setup_5e',
                        base__correct: 'Specialization_base__correct_4c',
                        glow: 'Specialization_glow_f0',
                        icon: 'Specialization_icon_3a',
                        icon__tiny: 'Specialization_icon__tiny_05',
                        icon__small: 'Specialization_icon__small_cf',
                        icon__medium: 'Specialization_icon__medium_ed',
                        icon__large: 'Specialization_icon__large_98',
                        icon__huge: 'Specialization_icon__huge_f7',
                        specializationWrapper: 'Specialization_specializationWrapper_bf',
                        specializationButton: 'Specialization_specializationButton_45',
                    },
                    wt = ({
                        name: e,
                        isCorrect: t,
                        isSpecializationActive: n = !0,
                        isDynamic: i,
                        mediaSize: u,
                        isClickable: r,
                        onSpecializationClick: o,
                        index: l,
                    }) => {
                        const c = u !== h.None,
                            d = (0, a.useCallback)(() => {
                                r && n && o && o(l);
                            }, [l, r, n, o]),
                            m = (0, a.useMemo)(() => {
                                let n = '';
                                c && (n = (u === h.Large || u === h.Huge ? h.Large : h.Medium) + '_');
                                const a = `${n}${e}_${t ? 'on' : 'off'}`,
                                    s = R.images.gui.maps.icons.specialization.$dyn(a);
                                return s && { backgroundImage: `url(${s})` };
                            }, [e, t, u, c]),
                            b = (0, a.useMemo)(
                                () => ({ spec: e, isDyn: i, isClickable: r, tooltip: 'hangarSlotSpec' }),
                                [e, i, r],
                            );
                        if (!m) return null;
                        const p = _()(
                                `specialization-${e}`,
                                Bt.base,
                                c && Bt[`base__${u}`],
                                n && Bt.base__setup,
                                t && Bt.base__correct,
                            ),
                            E = _()(Bt.icon, c && Bt[`icon__${u}`]),
                            g = c ? '' : Bt.specializationWrapper,
                            f = s().createElement(
                                'div',
                                { key: e, className: p },
                                s().createElement('div', { className: Bt.glow }),
                                s().createElement('div', { className: E, style: m }),
                            );
                        return s().createElement(
                            je.t,
                            { args: b },
                            r && n
                                ? s().createElement(
                                      St.u5,
                                      {
                                          size: St.qE.small,
                                          type: St.L$.ghost,
                                          mixClass: Bt.specializationButton,
                                          onClick: d,
                                      },
                                      f,
                                  )
                                : s().createElement('div', { className: g }, f),
                        );
                    };
                function yt() {
                    return (
                        (yt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        yt.apply(null, arguments)
                    );
                }
                const xt = ({
                        specializations: e,
                        isSpecializationActive: t = !0,
                        isDynamic: n,
                        mediaSize: a = h.None,
                        activeSpecsMask: i,
                        onSpecializationClick: u,
                    }) =>
                        e.length
                            ? s().createElement(
                                  'div',
                                  { className: 'Specializations_base_ab', key: i },
                                  T.UI(e, (e, i) =>
                                      s().createElement(
                                          wt,
                                          yt({ index: i, key: e.name }, e, {
                                              isSpecializationActive: t,
                                              isDynamic: n,
                                              mediaSize: a,
                                              onSpecializationClick: u,
                                          }),
                                      ),
                                  ),
                              )
                            : null,
                    Tt = ({ children: e, slotType: t, slotId: n, isEnabled: a = !0, panelType: u }) =>
                        s().createElement(
                            je.t,
                            {
                                targetId: u !== i.Setup ? R.views.halloween.lobby.widgets.TankSetupView('resId') : 0,
                                isEnabled: a,
                                args: { slotType: t, slotId: n },
                            },
                            s().createElement('div', null, e),
                        ),
                    kt = {
                        base__exitLeft: 'SlotTransitions_base__exitLeft_d6',
                        'animation-left': 'SlotTransitions_animation-left_e7',
                        base__exitLeftFade: 'SlotTransitions_base__exitLeftFade_95',
                        'animation-fade': 'SlotTransitions_animation-fade_d6',
                        base__enterRight: 'SlotTransitions_base__enterRight_09',
                        'animation-right': 'SlotTransitions_animation-right_1c',
                        base__enterRightFade: 'SlotTransitions_base__enterRightFade_17',
                        base__exitRight: 'SlotTransitions_base__exitRight_9a',
                        base__enterLeft: 'SlotTransitions_base__enterLeft_b3',
                        base__exitRightSwap: 'SlotTransitions_base__exitRightSwap_b4',
                        'animation-right-long': 'SlotTransitions_animation-right-long_63',
                        base__enterRightSwap: 'SlotTransitions_base__enterRightSwap_e9',
                        base__enterLeftSwap: 'SlotTransitions_base__enterLeftSwap_b0',
                        'animation-left-long': 'SlotTransitions_animation-left-long_fd',
                        base__exitLeftSwap: 'SlotTransitions_base__exitLeftSwap_fd',
                        base__exitFade: 'SlotTransitions_base__exitFade_0f',
                        base__enterFade: 'SlotTransitions_base__enterFade_a0',
                        base: 'SlotTransitions_base_ba',
                        base__enter: 'SlotTransitions_base__enter_7d',
                        base__enterFitting: 'SlotTransitions_base__enterFitting_ed',
                        baseShells__exitLeft: 'SlotTransitions_baseShells__exitLeft_27',
                        'animation-left-shells': 'SlotTransitions_animation-left-shells_e6',
                        baseShells__enterRight: 'SlotTransitions_baseShells__enterRight_35',
                        'animation-right-shells': 'SlotTransitions_animation-right-shells_71',
                        baseShells__exitRight: 'SlotTransitions_baseShells__exitRight_61',
                        baseShells__enterLeft: 'SlotTransitions_baseShells__enterLeft_1a',
                        baseShells__exitRightSwap: 'SlotTransitions_baseShells__exitRightSwap_0c',
                        'animation-right-long-shells': 'SlotTransitions_animation-right-long-shells_63',
                        baseShells__enterRightSwap: 'SlotTransitions_baseShells__enterRightSwap_05',
                        baseShells__enterLeftSwap: 'SlotTransitions_baseShells__enterLeftSwap_97',
                        'animation-left-long-shells': 'SlotTransitions_animation-left-long-shells_44',
                        baseShells__exitLeftSwap: 'SlotTransitions_baseShells__exitLeftSwap_93',
                        baseShells__exitFade: 'SlotTransitions_baseShells__exitFade_b0',
                        baseShells__enterFade: 'SlotTransitions_baseShells__enterFade_70',
                        baseOptDevices__exitLeft: 'SlotTransitions_baseOptDevices__exitLeft_6a',
                        baseOptDevices__exitLeftFade: 'SlotTransitions_baseOptDevices__exitLeftFade_4a',
                        baseOptDevices__enterRight: 'SlotTransitions_baseOptDevices__enterRight_f5',
                        baseOptDevices__enterRightFade: 'SlotTransitions_baseOptDevices__enterRightFade_99',
                        baseOptDevices__exitRight: 'SlotTransitions_baseOptDevices__exitRight_c6',
                        baseOptDevices__enterLeft: 'SlotTransitions_baseOptDevices__enterLeft_00',
                        baseOptDevices__exitRightSwap: 'SlotTransitions_baseOptDevices__exitRightSwap_5c',
                        baseOptDevices__enterRightSwap: 'SlotTransitions_baseOptDevices__enterRightSwap_18',
                        baseOptDevices__enterLeftSwap: 'SlotTransitions_baseOptDevices__enterLeftSwap_11',
                        baseOptDevices__exitLeftSwap: 'SlotTransitions_baseOptDevices__exitLeftSwap_9c',
                        baseOptDevices__enterFitting: 'SlotTransitions_baseOptDevices__enterFitting_d0',
                        'animation-fitting': 'SlotTransitions_animation-fitting_3f',
                        baseOptDevices__exitFittingRemove: 'SlotTransitions_baseOptDevices__exitFittingRemove_b9',
                        'animation-fitting-remove': 'SlotTransitions_animation-fitting-remove_a3',
                        baseOptDevices__exitActiveFitting: 'SlotTransitions_baseOptDevices__exitActiveFitting_ab',
                        baseOptDevices__exitDestroy: 'SlotTransitions_baseOptDevices__exitDestroy_64',
                        'animation-destroy': 'SlotTransitions_animation-destroy_ca',
                        baseOptDevices__enterDestroy: 'SlotTransitions_baseOptDevices__enterDestroy_d0',
                        baseOptDevices__exitDemount: 'SlotTransitions_baseOptDevices__exitDemount_c3',
                        'animation-bright-up': 'SlotTransitions_animation-bright-up_22',
                        'animation-demount': 'SlotTransitions_animation-demount_4b',
                        baseOptDevices__enterDemount: 'SlotTransitions_baseOptDevices__enterDemount_93',
                        baseOptDevices__exitFade: 'SlotTransitions_baseOptDevices__exitFade_df',
                        baseOptDevices__enterFade: 'SlotTransitions_baseOptDevices__enterFade_e3',
                        baseOptDevices__enterDemountFade: 'SlotTransitions_baseOptDevices__enterDemountFade_a8',
                        baseConsumables__exitLeft: 'SlotTransitions_baseConsumables__exitLeft_4d',
                        baseConsumables__exitLeftFade: 'SlotTransitions_baseConsumables__exitLeftFade_9e',
                        baseConsumables__enterRight: 'SlotTransitions_baseConsumables__enterRight_f6',
                        baseConsumables__enterRightFade: 'SlotTransitions_baseConsumables__enterRightFade_a5',
                        baseConsumables__exitRight: 'SlotTransitions_baseConsumables__exitRight_67',
                        baseConsumables__enterLeft: 'SlotTransitions_baseConsumables__enterLeft_1e',
                        baseConsumables__exitRightSwap: 'SlotTransitions_baseConsumables__exitRightSwap_00',
                        baseConsumables__enterRightSwap: 'SlotTransitions_baseConsumables__enterRightSwap_3b',
                        baseConsumables__enterLeftSwap: 'SlotTransitions_baseConsumables__enterLeftSwap_de',
                        baseConsumables__exitLeftSwap: 'SlotTransitions_baseConsumables__exitLeftSwap_a7',
                        baseConsumables__enterFitting: 'SlotTransitions_baseConsumables__enterFitting_69',
                        baseConsumables__exitFittingRemove: 'SlotTransitions_baseConsumables__exitFittingRemove_b2',
                        baseConsumables__exitActiveFitting: 'SlotTransitions_baseConsumables__exitActiveFitting_b6',
                        baseConsumables__exitFade: 'SlotTransitions_baseConsumables__exitFade_bd',
                        baseConsumables__enterFade: 'SlotTransitions_baseConsumables__enterFade_b9',
                        baseBattleAbilities__exitLeft: 'SlotTransitions_baseBattleAbilities__exitLeft_bf',
                        baseBattleAbilities__exitLeftFade: 'SlotTransitions_baseBattleAbilities__exitLeftFade_84',
                        baseBattleAbilities__enterRight: 'SlotTransitions_baseBattleAbilities__enterRight_88',
                        baseBattleAbilities__enterRightFade: 'SlotTransitions_baseBattleAbilities__enterRightFade_8b',
                        baseBattleAbilities__exitRight: 'SlotTransitions_baseBattleAbilities__exitRight_48',
                        baseBattleAbilities__enterLeft: 'SlotTransitions_baseBattleAbilities__enterLeft_ff',
                        baseBattleAbilities__exitRightSwap: 'SlotTransitions_baseBattleAbilities__exitRightSwap_ab',
                        baseBattleAbilities__enterRightSwap: 'SlotTransitions_baseBattleAbilities__enterRightSwap_e6',
                        baseBattleAbilities__enterLeftSwap: 'SlotTransitions_baseBattleAbilities__enterLeftSwap_f9',
                        baseBattleAbilities__exitLeftSwap: 'SlotTransitions_baseBattleAbilities__exitLeftSwap_33',
                        baseBattleAbilities__enterFitting: 'SlotTransitions_baseBattleAbilities__enterFitting_ae',
                        baseBattleAbilities__exitFittingRemove:
                            'SlotTransitions_baseBattleAbilities__exitFittingRemove_d4',
                        baseBattleAbilities__exitActiveFitting:
                            'SlotTransitions_baseBattleAbilities__exitActiveFitting_42',
                        baseBattleAbilities__exitFade: 'SlotTransitions_baseBattleAbilities__exitFade_41',
                        baseBattleAbilities__enterFade: 'SlotTransitions_baseBattleAbilities__enterFade_05',
                        baseBattleBoosters__enterFitting: 'SlotTransitions_baseBattleBoosters__enterFitting_0e',
                        baseBattleBoosters__exitFittingRemove:
                            'SlotTransitions_baseBattleBoosters__exitFittingRemove_19',
                        baseBattleBoosters__exitActiveFitting:
                            'SlotTransitions_baseBattleBoosters__exitActiveFitting_e6',
                        baseHw_consumables__exitLeft: 'SlotTransitions_baseHw_consumables__exitLeft_0d',
                        baseHw_consumables__exitLeftFade: 'SlotTransitions_baseHw_consumables__exitLeftFade_80',
                        baseHw_consumables__enterRight: 'SlotTransitions_baseHw_consumables__enterRight_70',
                        baseHw_consumables__enterRightFade: 'SlotTransitions_baseHw_consumables__enterRightFade_fb',
                        baseHw_consumables__exitRight: 'SlotTransitions_baseHw_consumables__exitRight_0a',
                        baseHw_consumables__enterLeft: 'SlotTransitions_baseHw_consumables__enterLeft_7c',
                        baseHw_consumables__exitRightSwap: 'SlotTransitions_baseHw_consumables__exitRightSwap_b0',
                        baseHw_consumables__enterRightSwap: 'SlotTransitions_baseHw_consumables__enterRightSwap_c9',
                        baseHw_consumables__enterLeftSwap: 'SlotTransitions_baseHw_consumables__enterLeftSwap_47',
                        baseHw_consumables__exitLeftSwap: 'SlotTransitions_baseHw_consumables__exitLeftSwap_16',
                        baseHw_consumables__enterFitting: 'SlotTransitions_baseHw_consumables__enterFitting_7c',
                        baseHw_consumables__exitFittingRemove:
                            'SlotTransitions_baseHw_consumables__exitFittingRemove_2f',
                        baseHw_consumables__exitActiveFitting:
                            'SlotTransitions_baseHw_consumables__exitActiveFitting_9d',
                        baseHw_consumables__exitFade: 'SlotTransitions_baseHw_consumables__exitFade_64',
                        baseHw_consumables__enterFade: 'SlotTransitions_baseHw_consumables__enterFade_b0',
                    },
                    It = { enter: kt.base__enter, exit: kt.base__enter },
                    Nt = (0, u.Pi)(
                        ({
                            children: e,
                            slotIndex: t,
                            uniqueKey: n,
                            slotType: i,
                            isEmpty: u = !1,
                            imageSource: r,
                            itemInstalledSetupIdx: o,
                        }) => {
                            const l = O().model.lastSlotAction.get(),
                                c = l.leftID,
                                _ = l.rightID,
                                d = l.leftIntCD,
                                m = l.rightIntCD,
                                b = l.actionType,
                                p = l.intCD,
                                E = (0, a.useState)(!0),
                                g = E[0],
                                h = E[1],
                                f = (0, a.useState)(!0),
                                v = f[0],
                                A = f[1],
                                C = (0, a.useState)(r),
                                F = C[0],
                                D = C[1],
                                S = (0, a.useState)(n),
                                B = S[0],
                                w = S[1],
                                y = (0, a.useState)(o),
                                x = y[0],
                                T = y[1],
                                k = (0, a.useRef)(),
                                I = (0, a.useRef)(),
                                N = !((p !== n && p !== B) || x === o || (b !== rt && b !== st)),
                                R = -1 === d || -1 === m,
                                L = i ? `base${i[0].toUpperCase() + i.slice(1)}` : 'base',
                                M = ct[b] || 0;
                            (0, a.useEffect)(
                                () => () => {
                                    k.current && clearTimeout(k.current), I.current && clearTimeout(I.current);
                                },
                                [],
                            ),
                                (0, a.useEffect)(() => {
                                    u || D(r);
                                }, [u, r]);
                            const P = (0, a.useCallback)(
                                    (e) => {
                                        const n = Object.assign({}, It);
                                        switch (b) {
                                            case at: {
                                                const e = c === t ? lt.RIGHT : lt.LEFT,
                                                    a = _ - c != 1 ? lt.SWAP : '';
                                                (n.enterDone = kt[`${L}__enter${e}${a}`]),
                                                    (n.exit = kt[`${L}__exit${e}${a}`]),
                                                    R &&
                                                        (u
                                                            ? (n.enterDone = kt[`${L}__enter${lt.FADE}`])
                                                            : (n.exit = kt[`${L}__exit${lt.FADE}`]));
                                                break;
                                            }
                                            case rt:
                                                (n.enterDone = kt[`${L}__enter${lt.DESTROY}`]),
                                                    (n.exit = kt[`${L}__exit${lt.DESTROY}`]),
                                                    (k.current = setTimeout(() => h(!0), 900)),
                                                    A(!0);
                                                break;
                                            case st:
                                                (n.enter = kt[`${L}__enter${lt.DEMOUNT}${lt.FADE}`]),
                                                    (n.exit = kt[`${L}__exit${lt.DEMOUNT}`]),
                                                    (k.current = setTimeout(() => h(!0), 900));
                                                break;
                                            case tt:
                                            case nt:
                                                if (i !== te) {
                                                    const e = b === tt ? lt.FITTING : lt.FITTING_REMOVE;
                                                    (n.enter = kt[`${L}__enter${e}`]),
                                                        (n.exit = kt[`${L}__exit${e}`]),
                                                        (n.exitActive = kt[`${L}__exitActive${lt.FITTING}`]);
                                                } else
                                                    (n.enterDone = kt[`${L}__enter${lt.FADE}`]),
                                                        (n.exit = kt[`${L}__exit${lt.FADE}`]);
                                                break;
                                            default:
                                                return e;
                                        }
                                        return s().cloneElement(e, { classNames: n, timeout: M });
                                    },
                                    [b, i, L, M, c, t, _, u, R],
                                ),
                                H = (0, a.useCallback)(
                                    (e) => {
                                        I.current = setTimeout(() => {
                                            (e.className = ''), e.classList.add(kt.base), w(n), T(o);
                                        }, M);
                                    },
                                    [M, n, o],
                                ),
                                $ = (0, a.useCallback)(() => {
                                    h(!1), A(!1);
                                }, []);
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(
                                    q.Z,
                                    { component: null, childFactory: P },
                                    s().createElement(
                                        X.Z,
                                        {
                                            key: n,
                                            timeout: M,
                                            classNames: It,
                                            onEntered: H,
                                            onExiting: $,
                                            unmountOnExit: !0,
                                        },
                                        s().createElement('div', { className: kt.base }, e),
                                    ),
                                ),
                                N &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement(Et, { in: g, actionType: b }),
                                        s().createElement(gt, { inProp: v, maskImage: F }),
                                    ),
                            );
                        },
                    ),
                    Rt = s().memo(
                        ({
                            intCD: e,
                            id: t,
                            itemInstalledSetupIdx: n,
                            isMountedMoreThanOne: a,
                            isInstalled: i,
                            isDisabled: u,
                            imageSource: r,
                            isEmpty: o,
                            slotIndex: l,
                            slotType: c,
                            isBootCamp: _,
                            contextMenuDisabled: d,
                            isSetupSwitching: m,
                            children: b,
                        }) =>
                            s().createElement(
                                Nt,
                                {
                                    uniqueKey: e,
                                    isEmpty: o,
                                    slotIndex: l,
                                    slotType: c,
                                    imageSource: r,
                                    itemInstalledSetupIdx: n,
                                },
                                s().createElement(
                                    Je,
                                    {
                                        isEnabled: !(m || d || u || o || _),
                                        args: {
                                            intCD: e,
                                            slotType: c,
                                            installedSlotId: t,
                                            isMounted: i,
                                            fieldType: 1,
                                            itemInstalledSetupIdx: n,
                                            itemInstalledSetupSlotIdx: t,
                                            isMountedMoreThanOne: a,
                                        },
                                    },
                                    s().createElement('div', null, b),
                                ),
                            ),
                    ),
                    Ot = R.images.halloween.gui.maps.icons.tanksetup.panel.empty(),
                    Lt = R.images.halloween.gui.maps.icons.tanksetup.panel.empty_hover(),
                    Mt = (e, t, n, a, s) => (t ? (a || s || !n ? Ot : Lt) : e),
                    Pt = (0, u.Pi)(
                        ({
                            slotType: e,
                            slotIndex: t,
                            level: n,
                            isSelected: u,
                            isSetupSwitching: c,
                            isSectionSelected: _,
                            onActiveSlotChanged: d,
                            onSlotSelected: m,
                            onActiveSlotRefChanged: b,
                            onSlotClear: p,
                            panelType: E,
                            isDisabled: g = !1,
                            isBorderActive: h,
                            isIncompatible: f = !1,
                            grabberId: v,
                            containerRef: A,
                            activeDragId: C,
                            handleGrabberAction: F,
                            forceLeftUpdate: D,
                            potentialDropId: S,
                            blockOnGrabIds: B,
                            contextMenuDisabled: w,
                            groupIndex: y,
                            sectionIndex: x,
                        }) => {
                            const T = O().model,
                                k = T.computes.slots.slot(y, x, t),
                                I = k.imageSource,
                                N = k.isInstalled,
                                R = k.itemInstalledSetupIdx,
                                M = k.isMountedMoreThanOne,
                                P = k.overlayType,
                                H = k.keyName,
                                G = k.categoryImgSource,
                                z = k.withAttention,
                                W = k.id,
                                j = k.intCD,
                                U = (0, a.useState)(!1),
                                V = U[0],
                                Z = U[1],
                                q = E === i.Setup,
                                X = !l(E),
                                K = !o(E),
                                Y = E === i.Compare,
                                Q = q && _ && X,
                                J = (0, a.useRef)(!1),
                                ee = (0, a.useRef)(null),
                                te = -1 === j;
                            (0, a.useEffect)(() => {
                                if (!J.current && _ && u)
                                    return (0, L.v)(() => {
                                        d && d(ee, e, W), (J.current = !0);
                                    });
                                J.current = !0;
                            }, [W, _, u, d, e]),
                                (0, a.useEffect)(() => {
                                    u && b(ee);
                                }, [u, b]);
                            const ne = (0, a.useCallback)(() => (!u && X && !c && m(e, W), 500), [W, X, u, c, m, e]),
                                ae = Me(ne),
                                se = (0, a.useCallback)(() => {
                                    g || ae('');
                                }, [ae, g]),
                                ie = (0, a.useCallback)(() => {
                                    K && !u && !C && !g && $.O.sound.play.highlight(), Z(!0);
                                }, [u, C, g, K]);
                            (0, a.useEffect)(() => {
                                S && $.O.sound.play.highlight();
                            }, [S]);
                            const ue = (0, a.useCallback)(() => {
                                    Z(!1), null == p || p(W, e);
                                }, [W, p, e]),
                                re = q && !N,
                                oe = Boolean(v && S === v),
                                le = v && (Q || Y),
                                ce = `${e}-slot-${W}`,
                                _e = G && G.length > 0,
                                de = _e ? { backgroundImage: `url(${G})` } : {},
                                me = {
                                    id: v,
                                    containerRef: A,
                                    isEnabled: !te,
                                    onClick: se,
                                    isUpdateAvailable: Boolean(C),
                                    handleAction: F,
                                    forceCenterX: D,
                                    blockOnGrabIds: B,
                                },
                                be = {
                                    isEmpty: te,
                                    intCD: j,
                                    slotType: e,
                                    slotIndex: t,
                                    imageSource: I,
                                    isDisabled: g,
                                    isInstalled: N,
                                    id: W,
                                    itemInstalledSetupIdx: R,
                                    isMountedMoreThanOne: M,
                                    contextMenuDisabled: w,
                                    isSetupSwitching: c,
                                };
                            return s().createElement(
                                'div',
                                { className: 'Slot_base_1e', onMouseEnter: ie, onMouseLeave: () => Z(!1), id: ce },
                                (_ || Y) &&
                                    !N &&
                                    s().createElement(
                                        'div',
                                        { className: 'Slot_close_35' },
                                        s().createElement(qe, { id: `close-${ce}`, show: !C, onClick: ue }),
                                    ),
                                s().createElement(
                                    Tt,
                                    { slotType: e, slotId: W, isEnabled: !C, panelType: E },
                                    s().createElement(
                                        'div',
                                        { ref: ee },
                                        s().createElement(
                                            ke,
                                            {
                                                activeDragId: C,
                                                slotType: e,
                                                isSelected: u,
                                                isBorderActive: Boolean(h),
                                                panelType: E,
                                                isDisabled: g,
                                                isPotentialDrop: oe,
                                                onClick: le ? void 0 : se,
                                            },
                                            X &&
                                                s().createElement(
                                                    'div',
                                                    { className: 'Slot_label_0b' },
                                                    s().createElement(We, { text: H, show: Boolean(_), panelType: E }),
                                                ),
                                            s().createElement(
                                                xe,
                                                { when: Boolean(le), wrapper: Ge, withProps: me },
                                                s().createElement(
                                                    xe,
                                                    { when: X, wrapper: Rt, withProps: be },
                                                    s().createElement(Le, {
                                                        imageSource: Mt(I, r(T.computes.slots.slot(y, x, t)), V, g, u),
                                                        isIncompatible: f,
                                                        overlayType: P,
                                                        level: n,
                                                        isTemporary: re,
                                                        withAttention: z,
                                                    }),
                                                ),
                                            ),
                                            _e &&
                                                s().createElement(
                                                    s().Fragment,
                                                    null,
                                                    s().createElement('span', { className: 'Slot_shadow_1f' }),
                                                    s().createElement('span', {
                                                        className: 'Slot_category_19',
                                                        style: de,
                                                    }),
                                                ),
                                            g && s().createElement('div', { className: 'Slot_disabled_22' }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Ht = ['groupIndex', 'sectionIndex', 'slotIndex', 'activeSpecsMask', 'isChangeSetupIndex'];
                function $t() {
                    return (
                        ($t = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        $t.apply(null, arguments)
                    );
                }
                const Gt = (0, u.Pi)((e) => {
                        let t = e.groupIndex,
                            n = e.sectionIndex,
                            a = e.slotIndex,
                            u = e.activeSpecsMask,
                            r = e.isChangeSetupIndex,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, Ht);
                        const c = O(),
                            d = c.controls,
                            m = c.model.computes.specializations(t, n, a),
                            b = m.specializations.length,
                            p = o.panelType === i.Setup || o.panelType === i.Compare,
                            E = !l(o.panelType),
                            g = m.isDynamic;
                        return s().createElement(
                            'div',
                            { className: _()('OptDeviceSlot_base_fa', b && !g && !r && 'specializationsSlot') },
                            E &&
                                s().createElement(
                                    'div',
                                    { className: 'OptDeviceSlot_specializations_05' },
                                    s().createElement(xt, {
                                        specializations: m.specializations,
                                        isDynamic: g,
                                        activeSpecsMask: u,
                                        isSpecializationActive: p,
                                        onSpecializationClick: (e) => {
                                            d.specializationSelect({ slotId: o.id, specializationIndex: e });
                                        },
                                    }),
                                ),
                            s().createElement(Pt, $t({}, o, { groupIndex: t, sectionIndex: n, slotIndex: a })),
                        );
                    }),
                    zt = ['groupIndex', 'sectionIndex', 'slotIndex', 'sectionType'];
                function Wt() {
                    return (
                        (Wt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Wt.apply(null, arguments)
                    );
                }
                const jt = (0, u.Pi)((e) => {
                        let t = e.groupIndex,
                            n = e.sectionIndex,
                            a = e.slotIndex,
                            i = e.sectionType,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, zt);
                        const r = O().model,
                            o = r.computes.slots.slot(t, n, a),
                            l = r.ammunitionPanel.get(),
                            c = l.selectedSection,
                            _ = l.selectedSlot,
                            d = (c === i ? _ : -1) === o.id;
                        switch (i) {
                            case 'optDevices': {
                                const e = o;
                                return s().createElement(
                                    Gt,
                                    Wt({}, e, u, { groupIndex: t, sectionIndex: n, slotIndex: a, isSelected: d }),
                                );
                            }
                            case ne: {
                                const e = o;
                                return s().createElement(
                                    Dt,
                                    Wt({}, u, e, { groupIndex: t, sectionIndex: n, slotIndex: a, isSelected: d }),
                                );
                            }
                            default:
                                return s().createElement(
                                    Pt,
                                    Wt({}, u, { isSelected: d, groupIndex: t, sectionIndex: n, slotIndex: a }),
                                );
                        }
                    }),
                    Ut = [
                        'groupIndex',
                        'sectionIndex',
                        'sectionType',
                        'onActiveSlotChanged',
                        'isDisabled',
                        'blockOnGrabIds',
                        'isChangeSetupIndex',
                        'setIsExitBlocked',
                    ];
                function Vt() {
                    return (
                        (Vt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Vt.apply(null, arguments)
                    );
                }
                const Zt = (0, u.Pi)((e) => {
                        let t = e.groupIndex,
                            n = e.sectionIndex,
                            i = e.sectionType,
                            u = e.onActiveSlotChanged,
                            r = e.isDisabled,
                            o = e.blockOnGrabIds,
                            l = e.isChangeSetupIndex,
                            c = e.setIsExitBlocked,
                            d = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, Ut);
                        const m = (0, a.useRef)(null),
                            b = (0, a.useRef)(null),
                            p = O(),
                            E = p.model,
                            g = p.controls,
                            h = E.computes.slots.length(t, n),
                            f = E.ammunitionPanel.get(),
                            v = f.selectedSection,
                            A = f.selectedSlot,
                            C = f.syncInitiator,
                            F = (0, a.useCallback)(
                                (e, t) => {
                                    g.dragDropSwap({
                                        sectionType: i,
                                        dragId: Number(e[e.length - 1]),
                                        dropId: Number(t[t.length - 1]),
                                    });
                                },
                                [g, i],
                            ),
                            D = v === i,
                            S = i === ne,
                            B = D ? A : -1,
                            w = `${i}-${h}slots`,
                            x = y({ baseId: w, slotsLength: h, handleSwap: F, setIsExitBlocked: c, syncInitiator: C }),
                            T = x.handleGrabberAction,
                            k = x.dragState,
                            I = x.getForceCenterX;
                        (0, a.useEffect)(() => {
                            D && -1 !== B && m.current && u(m, v, B);
                        }, [u, D, v, B]);
                        const N = (e, t) => {
                                if ((r || $.O.sound.play.click(), 'number' != typeof t))
                                    return console.warn('selectedSlot is not a number');
                                g.sectionSelect({ selectedSlot: t, selectedSection: e });
                            },
                            R = (e) => {
                                m.current = e ? e.current : null;
                            },
                            L = (e, t) => {
                                g.slotClear({ slotId: e, sectionType: t });
                            };
                        return s().createElement(
                            'div',
                            { id: w, ref: b, className: _()('Slots_base_f2', i) },
                            V(h, (e) => {
                                const c = !S && h > 1 ? `${w}-${e}` : '';
                                return s().createElement(
                                    a.Fragment,
                                    { key: `slot ${t}-${n}-${e}` },
                                    e > 0 && s().createElement(ye, null),
                                    s().createElement(
                                        jt,
                                        Vt(
                                            {
                                                groupIndex: t,
                                                sectionIndex: n,
                                                slotIndex: e,
                                                sectionType: i,
                                                isSectionSelected: D,
                                                isDisabled: r,
                                                contextMenuDisabled: S,
                                                slotType: i,
                                                onActiveSlotChanged: u,
                                                onSlotSelected: N,
                                                onActiveSlotRefChanged: R,
                                                onSlotClear: L,
                                                grabberId: c,
                                                containerRef: b,
                                                forceLeftUpdate: I(c),
                                                activeDragId: k.activeDragId,
                                                handleGrabberAction: T,
                                                potentialDropId: k.potentialDropId,
                                                blockOnGrabIds: o,
                                                isSetupSwitching: l,
                                                isChangeSetupIndex: l,
                                            },
                                            d,
                                        ),
                                    ),
                                );
                            }),
                        );
                    }),
                    qt = [
                        'groupIndex',
                        'sectionIndex',
                        'type',
                        'newItemsCount',
                        'panelType',
                        'sectionsIds',
                        'vehicle',
                        'vehicleType',
                        'isSetupSwitching',
                        'classMix',
                    ];
                function Xt() {
                    return (
                        (Xt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Xt.apply(null, arguments)
                    );
                }
                const Kt = (0, u.Pi)((e) => {
                        let t = e.groupIndex,
                            n = e.sectionIndex,
                            u = e.type,
                            r = e.newItemsCount,
                            o = e.panelType,
                            l = e.sectionsIds,
                            c = e.vehicle,
                            d = e.vehicleType,
                            m = e.isSetupSwitching,
                            b = e.classMix,
                            p = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, qt);
                        const E = O().model,
                            g = (0, a.useRef)(null),
                            h = E.ammunitionPanel.get(),
                            f = h.selectedSection,
                            v = h.syncInitiator,
                            A = E.computes.slots.length(t, n),
                            C = E.computes.slots.existFilled(t, n),
                            F = ((e, t) => {
                                const n = we('tutorialModel.triggers.items').filter((n) => {
                                    if (!n) return !1;
                                    const a = n.value,
                                        s = a.triggers.filter((e) => e.value === t);
                                    return a.componentId === e && s.length > 0;
                                });
                                return 0 === n.length
                                    ? null
                                    : window.tutorialModel.foundComponents.items.some((t) => t.value.componentId === e)
                                      ? {
                                            trigger: n[0].value,
                                            runTrigger: (n) => {
                                                window.tutorialModel.onTriggerActivated({
                                                    componentId: e,
                                                    triggerType: t,
                                                    state: n,
                                                });
                                            },
                                        }
                                      : null;
                            })('AmmunitionPanelBattleAbilities', 'visible_change');
                        (0, a.useEffect)(() => {
                            null == F || F.runTrigger(!0);
                        }, [F]);
                        const D = f === u,
                            S = w(u, l),
                            B = S.selfId,
                            y = S.blockOnGrabIds,
                            x = ((c && c.length > 0) || (d && d.length > 0)) && o !== i.Battle && o !== i.Respawn,
                            T = (0, a.useMemo)(
                                () => ({
                                    icon: s().createElement('span', {
                                        className: 'Section_configVehicleIcon_05',
                                        style: {
                                            backgroundImage: d
                                                ? `url(${R.images.gui.maps.icons.vehicleTypes.extraSmall.$dyn(d)})`
                                                : '',
                                        },
                                    }),
                                    vehicle: c,
                                }),
                                [c, d],
                            ),
                            k = A > 0 && o !== i.Compare && o !== i.Battle && o !== i.Respawn,
                            I = R.strings.tank_setup.section.$dyn(u);
                        if ('string' != typeof I)
                            throw new Error(`No top label text for section type ${u} or it's not a string`);
                        return s().createElement(
                            'div',
                            {
                                id: m ? le : B,
                                ref: g,
                                className: _()(
                                    'Section_base_87',
                                    b,
                                    D && 'sectionSelected',
                                    A > 1 && 'multiSlot',
                                    v >= 0 && C && 'existFilledSlots',
                                ),
                            },
                            x &&
                                s().createElement(
                                    he,
                                    { className: 'Section_configLabel_e7' },
                                    s().createElement(re, {
                                        classMix: 'Section_configText_d0',
                                        text: R.strings.tank_setup.categories.reserves.config(),
                                        binding: T,
                                    }),
                                ),
                            k &&
                                s().createElement(
                                    'div',
                                    { className: 'Section_label_52' },
                                    s().createElement(oe, { text: I, parentRef: g, show: !D, panelType: o }),
                                ),
                            s().createElement(
                                Zt,
                                Xt(
                                    { groupIndex: t, sectionIndex: n, sectionType: u, panelType: o, blockOnGrabIds: y },
                                    p,
                                ),
                            ),
                            Boolean(r) &&
                                s().createElement(
                                    'div',
                                    { className: 'Section_counter_e3' },
                                    s().createElement(ue.A, { value: r, size: 'small', fadeInAnimation: !0 }),
                                ),
                        );
                    }),
                    Yt = {
                        base: 'ToggleSlot_base_93',
                        slot: 'ToggleSlot_slot_cd',
                        slot__grabbing: 'ToggleSlot_slot__grabbing_df',
                        image: 'ToggleSlot_image_e0',
                        slot__active: 'ToggleSlot_slot__active_15',
                        glow: 'ToggleSlot_glow_48',
                        toggle: 'ToggleSlot_toggle_73',
                    },
                    Qt = ({ id: e, isSelected: t, imageSource: n, onSlotSelected: i, panelType: u }) => {
                        const r = (0, a.useCallback)(() => {
                                !t && i(e);
                            }, [e, t, i]),
                            o = _()(Yt.slot, !t && Yt.slot__active, Yt.slot__compare),
                            l = (0, a.useMemo)(() => ({ backgroundImage: `url(${n})` }), [n]),
                            c = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.atlases.components.icon_selected_${t ? 'on' : 'off'})`,
                                }),
                                [t],
                            );
                        return s().createElement(
                            Ue,
                            { slotType: ae, slotId: e, panelType: u },
                            s().createElement(
                                'div',
                                { className: Yt.base },
                                s().createElement(
                                    'div',
                                    { className: o, onClick: r, id: `shell-slot-${e}` },
                                    t && s().createElement('div', { className: Yt.glow }),
                                    s().createElement('div', { className: Yt.image, style: l }),
                                    s().createElement('div', { className: Yt.toggle, style: c }),
                                ),
                            ),
                        );
                    },
                    Jt = {
                        base: 'ShellsSlot_base_a1',
                        base__grabbing: 'ShellsSlot_base__grabbing_8f',
                        shell: 'ShellsSlot_shell_85',
                        hover: 'ShellsSlot_hover_f0',
                        image: 'ShellsSlot_image_e6',
                        infinity: 'ShellsSlot_infinity_06',
                        count: 'ShellsSlot_count_ea',
                        shadow: 'ShellsSlot_shadow_e6',
                    },
                    en = ({
                        id: e,
                        itemInstalledSetupIdx: t,
                        isMountedMoreThanOne: n,
                        imageSource: u,
                        count: r,
                        isInfinity: o,
                        isSelected: c,
                        panelType: d,
                        intCD: m,
                        slotIndex: b,
                        grabberId: p,
                        isSetupSwitching: E,
                        containerRef: g,
                        activeDragId: h,
                        handleGrabberAction: f,
                        forceLeftUpdate: v,
                        potentialDropId: A,
                        blockOnGrabIds: C,
                        isDisabled: F,
                        isDefenseMode: D,
                    }) => {
                        const S = !l(d),
                            B = (0, a.useMemo)(() => ({ backgroundImage: `url(${u})` }), [u]),
                            w = p && p === A,
                            y = p && p === h,
                            x = (0, a.useMemo)(() => {
                                const a = { slotType: te, slotId: e, fieldType: 1, intCD: m };
                                return [
                                    a,
                                    Object.assign({}, a, {
                                        installedSlotId: e,
                                        itemInstalledSetupIdx: t,
                                        itemInstalledSetupSlotIdx: e,
                                        isMountedMoreThanOne: n,
                                    }),
                                ];
                            }, [m, e, t, n]),
                            T = x[0],
                            k = x[1],
                            I = (0, a.useMemo)(
                                () => ({
                                    id: p,
                                    containerRef: g,
                                    isEnabled: Boolean(p) && c,
                                    isUpdateAvailable: Boolean(h),
                                    handleAction: f,
                                    forceCenterX: v,
                                    blockOnGrabIds: C,
                                }),
                                [h, C, g, v, p, f, c],
                            ),
                            N = (0, a.useMemo)(
                                () => ({ slotIndex: b, uniqueKey: m, slotType: te, imageSource: null }),
                                [m, b],
                            );
                        return s().createElement(
                            Je,
                            { isEnabled: S && D && !E && !F, args: k },
                            s().createElement(
                                je.t,
                                {
                                    targetId:
                                        d !== i.Setup ? R.views.halloween.lobby.widgets.TankSetupView('resId') : void 0,
                                    args: T,
                                    isEnabled: !h,
                                },
                                s().createElement(
                                    'div',
                                    { id: `shell-slot-${b}`, className: Jt.base },
                                    s().createElement(
                                        'div',
                                        {
                                            className: _()(
                                                Jt.shell,
                                                !h && S && !F && Jt.shell__active,
                                                y && Jt.shell__grabbing,
                                                !y && w && Jt.shell__potential,
                                            ),
                                        },
                                        s().createElement('div', { className: Jt.shadow }),
                                        s().createElement(
                                            xe,
                                            { when: S, wrapper: Ge, withProps: I },
                                            s().createElement(
                                                xe,
                                                { when: S, wrapper: Nt, withProps: N },
                                                s().createElement('div', { className: Jt.image, style: B }),
                                                o
                                                    ? s().createElement('div', { className: Jt.infinity })
                                                    : s().createElement('div', { className: Jt.count }, r),
                                            ),
                                        ),
                                        s().createElement('div', { className: Jt.hover }),
                                    ),
                                ),
                            ),
                        );
                    },
                    tn = [
                        'groupIndex',
                        'sectionIndex',
                        'slotIndex',
                        'isCompare',
                        'handleSlotSelected',
                        'baseId',
                        'grabber',
                    ];
                function nn() {
                    return (
                        (nn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        nn.apply(null, arguments)
                    );
                }
                const an = (0, u.Pi)((e) => {
                        let t = e.groupIndex,
                            n = e.sectionIndex,
                            a = e.slotIndex,
                            i = e.isCompare,
                            u = e.handleSlotSelected,
                            o = e.baseId,
                            l = e.grabber,
                            c = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, tn);
                        const d = l.handleGrabberAction,
                            m = l.dragState,
                            b = l.getForceCenterX,
                            p = O().model,
                            E = p.computes.slots.length(t, n),
                            g = p.computes.slots.slot(t, n, a),
                            h = E > 1 ? `${o}-${g.id}` : '';
                        return r(g)
                            ? null
                            : s().createElement(
                                  'div',
                                  {
                                      key: g.id,
                                      className: _()(
                                          'ShellContainer_base_fc',
                                          p.root.get().isDefenseMode && 0 !== a && 'ShellContainer_base__compressed_c6',
                                      ),
                                  },
                                  i
                                      ? s().createElement(Qt, nn({}, g, { onSlotSelected: u }))
                                      : s().createElement(
                                            en,
                                            nn(
                                                {},
                                                g,
                                                {
                                                    slotIndex: a,
                                                    grabberId: h,
                                                    forceLeftUpdate: b(h),
                                                    activeDragId: m.activeDragId,
                                                    handleGrabberAction: d,
                                                    potentialDropId: m.potentialDropId,
                                                    isDefenseMode: p.root.get().isDefenseMode,
                                                },
                                                c,
                                            ),
                                        ),
                              );
                    }),
                    sn = (0, u.Pi)(
                        ({
                            panelType: e,
                            onSelected: t,
                            isCompare: n,
                            isSelected: u,
                            syncInitiator: r,
                            blockOnGrabIds: l,
                            isDisabled: c,
                            isSetupSwitching: _,
                            setIsExitBlocked: d,
                            groupIndex: m,
                            sectionIndex: b,
                        }) => {
                            const p = O(),
                                E = p.model,
                                g = p.controls,
                                h = E.computes.slots.length(m, b),
                                f = (0, a.useRef)(!1),
                                v = (0, a.useRef)(null),
                                A = n ? ae : te,
                                C = `${A}-${h}shells`,
                                F = !o(e),
                                D = (0, a.useCallback)(
                                    (e) => {
                                        g.sectionSelect({ selectedSlot: e, selectedSection: A }),
                                            F && $.O.sound.play.click();
                                    },
                                    [g, A, F],
                                ),
                                S = (0, a.useCallback)(
                                    (e, t) => {
                                        g.dragDropSwap({
                                            sectionType: A,
                                            dragId: Number(e[e.length - 1]),
                                            dropId: Number(t[t.length - 1]),
                                        });
                                    },
                                    [g, A],
                                ),
                                B = y({
                                    baseId: C,
                                    slotsLength: h,
                                    handleSwap: S,
                                    setIsExitBlocked: d,
                                    syncInitiator: r,
                                });
                            return (
                                (0, a.useEffect)(
                                    () =>
                                        (0, L.v)(() => {
                                            f.current = !0;
                                        }),
                                    [],
                                ),
                                (0, a.useEffect)(() => {
                                    if (u && e === i.Setup) {
                                        if (!f.current)
                                            return (0, L.v)(() => {
                                                t();
                                            });
                                        t();
                                    }
                                }, [u, e, t]),
                                s().createElement(
                                    'div',
                                    {
                                        id: C,
                                        ref: v,
                                        className: 'Shells_base_c3',
                                        onMouseEnter: () => {
                                            !c && F && $.O.sound.play.highlight();
                                        },
                                    },
                                    V(h, (t) =>
                                        s().createElement(an, {
                                            key: `${m} ${b} ${t}`,
                                            groupIndex: m,
                                            sectionIndex: b,
                                            slotIndex: t,
                                            isCompare: n,
                                            containerRef: v,
                                            handleSlotSelected: D,
                                            panelType: e,
                                            blockOnGrabIds: l,
                                            isSelected: u,
                                            isSetupSwitching: _,
                                            grabber: B,
                                            baseId: C,
                                        }),
                                    ),
                                )
                            );
                        },
                    ),
                    un = {
                        base: 'ShellsSection_base_dd',
                        base__grabbing: 'ShellsSection_base__grabbing_33',
                        base__compressed: 'ShellsSection_base__compressed_c6',
                        attention: 'ShellsSection_attention_09',
                        blinking: 'ShellsSection_blinking_6f',
                        border: 'ShellsSection_border_b2',
                        border__double: 'ShellsSection_border__double_64',
                        border__triple: 'ShellsSection_border__triple_ed',
                        disabled: 'ShellsSection_disabled_4c',
                    },
                    rn = [i.Hangar, i.Battle, i.Prebattle, i.Respawn],
                    on = (0, u.Pi)(
                        ({
                            type: e,
                            sectionsIds: t,
                            panelType: n,
                            onActiveSlotChanged: u,
                            isDisabled: r,
                            isBorderActive: o,
                            classMix: l,
                            isSetupSwitching: c,
                            setIsExitBlocked: d,
                            newItemsCount: m,
                            groupIndex: b,
                            sectionIndex: p,
                        }) => {
                            const E = O().model,
                                g = E.ammunitionPanel.get(),
                                h = g.ammoNotFull,
                                f = g.selectedSection,
                                v = g.syncInitiator,
                                A = (0, a.useRef)(null),
                                C = n === i.Compare,
                                F = n === i.Prebattle && e === te,
                                D = f === e || F,
                                S = (0, a.useCallback)(() => {
                                    u(A, f, 0);
                                }, [u, f]),
                                B = w(e, t),
                                y = B.selfId,
                                x = B.blockOnGrabIds,
                                T = ((e) => rn.includes(e))(n) && !r && h,
                                k = E.computes.slots.filteredLength(b, p);
                            return s().createElement(
                                'div',
                                {
                                    id: c ? le : y,
                                    className: _()(
                                        un.base,
                                        l,
                                        un[`base__${n}`],
                                        !o && D && un.base__selected,
                                        C && un.base__compare,
                                        E.root.get().isDefenseMode && un.base__compressed,
                                        r && un.base__disabled,
                                    ),
                                    ref: A,
                                },
                                T && s().createElement('div', { className: un.attention }),
                                T &&
                                    s().createElement('div', {
                                        className: _()(
                                            un.border,
                                            2 === k && un.border__double,
                                            3 === k && un.border__triple,
                                        ),
                                    }),
                                s().createElement(sn, {
                                    groupIndex: b,
                                    sectionIndex: p,
                                    panelType: n,
                                    onSelected: S,
                                    isSelected: D,
                                    isCompare: C,
                                    syncInitiator: v,
                                    blockOnGrabIds: x,
                                    isSetupSwitching: c,
                                    setIsExitBlocked: d,
                                }),
                                Boolean(m) &&
                                    s().createElement(
                                        'div',
                                        { className: un.counter },
                                        s().createElement(ue.A, { value: m, size: 'small', fadeInAnimation: !0 }),
                                    ),
                                r && s().createElement('div', { className: un.disabled }),
                            );
                        },
                    ),
                    ln = {
                        base: 'Sections_base_61',
                        section: 'Sections_section_10',
                        section__battle: 'Sections_section__battle_f5',
                        section__small: 'Sections_section__small_bd',
                        section__extraSmall: 'Sections_section__extraSmall_48',
                        section__first: 'Sections_section__first_39',
                    };
                function cn() {
                    return (
                        (cn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        cn.apply(null, arguments)
                    );
                }
                const _n = (0, u.Pi)(
                        ({
                            groupIndex: e,
                            panelType: t,
                            isDisabled: n = !1,
                            onActiveSlotChanged: a,
                            isBorderActive: i,
                            isChangeSetupIndex: u,
                            setIsExitBlocked: r,
                        }) => {
                            const o = O().model,
                                c = U(['section'], ln),
                                d = o.computes.sections.IDs(e),
                                m = {
                                    panelType: t,
                                    isDisabled: n,
                                    onActiveSlotChanged: a,
                                    isBorderActive: i,
                                    sectionsIds: d,
                                    isChangeSetupIndex: u,
                                    setIsExitBlocked: r,
                                };
                            return s().createElement(
                                'div',
                                { className: ln.base },
                                V(o.computes.sections.length(e), (n) => {
                                    const a = o.computes.sections.section(e, n);
                                    if (!a.slots || !a.slots.length) return null;
                                    const i = _()(
                                        c.section,
                                        0 !== n && l(t) && ln.section__battle,
                                        0 === n && ln.section__first,
                                    );
                                    if (a.type === te || a.type === ae) {
                                        const r = a;
                                        return s().createElement(
                                            s().Fragment,
                                            { key: `${a.name}${n}${a.slots.length}` },
                                            !o.root.get().isDefenseMode && s().createElement(ie, { panelType: t }),
                                            s().createElement(
                                                on,
                                                cn({}, r, m, {
                                                    groupIndex: e,
                                                    sectionIndex: n,
                                                    isSetupSwitching: u,
                                                    key: `${a.name}${e}${a.slots.length}`,
                                                    classMix: i,
                                                }),
                                            ),
                                        );
                                    }
                                    return s().createElement(
                                        Kt,
                                        cn({}, a, m, {
                                            groupIndex: e,
                                            sectionIndex: n,
                                            isSetupSwitching: u,
                                            key: `${a.name}${e}${a.slots.length}`,
                                            classMix: i,
                                        }),
                                    );
                                }),
                            );
                        },
                    ),
                    dn = {
                        base: 'Group_base_cc',
                        wrapper: 'Group_wrapper_22',
                        switch: 'Group_switch_1f',
                        switch__battle: 'Group_switch__battle_37',
                        switch__small: 'Group_switch__small_e9',
                        switch__extraSmall: 'Group_switch__extraSmall_19',
                        prebattleSwitchIndicator: 'Group_prebattleSwitchIndicator_7b',
                        hint: 'Group_hint_ff',
                        hint__disabled: 'Group_hint__disabled_0a',
                    };
                function mn() {
                    return (
                        (mn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        mn.apply(null, arguments)
                    );
                }
                const bn = R.strings.tank_setup.tooltips.prebattleSwitchIndicator,
                    pn = (e) => e.setupSelector.hotKeys,
                    En = (0, u.Pi)(({ groupIndex: e, sectionProps: t, isSetupSwitching: n, setSetupSwitching: a }) => {
                        const u = U(['switch'], dn),
                            r = O().model,
                            l = r.root.get().isDisabled,
                            c = r.computes.groups.group(e);
                        return s().createElement(
                            'div',
                            { className: dn.base },
                            s().createElement(
                                'div',
                                { className: dn.wrapper },
                                s().createElement(
                                    Y,
                                    ((e, t) => ({ index: e.currentIndex, setSetupSwitching: t }))(c, a),
                                    s().createElement(_n, mn({}, t, { groupIndex: e, isChangeSetupIndex: n })),
                                ),
                                c.setupSelector.isSwitchEnabled &&
                                    s().createElement(
                                        'div',
                                        { className: _()(u.switch, o(t.panelType) && dn.switch__battle) },
                                        c.setupSelector.isPrebattleSwitchDisabled &&
                                            s().createElement(
                                                Z.i,
                                                { header: bn.title(), body: String(bn.desc.$dyn(`c_${c.groupId}`)) },
                                                s().createElement('div', { className: dn.prebattleSwitchIndicator }),
                                            ),
                                    ),
                            ),
                            ((d = c),
                            ((m = t.panelType) === i.Battle || m === i.Respawn) &&
                                d.setupSelector.isSwitchEnabled &&
                                pn(d) &&
                                s().createElement(
                                    'div',
                                    { className: _()(dn.hint, l && dn.hint__disabled) },
                                    s().createElement(ee, { hotKeys: pn(c) }),
                                )),
                        );
                        var d, m;
                    }),
                    gn = (0, u.Pi)(
                        ({ sectionProps: e, isSetupSwitching: t, isReady: n, setSetupSwitching: u, children: r }) => {
                            const o = O(),
                                l = o.model,
                                c = o.controls.changeSetupIndex;
                            (0, a.useEffect)(() => {
                                (e.panelType !== i.Hangar && e.panelType !== i.Setup) || !n || u(!1);
                            }, [n, e.panelType, u]),
                                (0, a.useEffect)(() => {
                                    e.panelType === i.Respawn && u(!1);
                                }, [e.panelType, u]);
                            const _ = (0, a.useCallback)(
                                (t) => {
                                    e.panelType === i.Respawn && u(!0), c(t);
                                },
                                [c, e.panelType, u],
                            );
                            return s().createElement(
                                'div',
                                { className: 'Groups_base_9c' },
                                V(l.computes.groups.length(), (n) =>
                                    s().createElement(En, {
                                        key: `group-${n}`,
                                        sectionProps: e,
                                        groupIndex: n,
                                        isSetupSwitching: t,
                                        setSetupSwitching: u,
                                        handleSetupSwitching: _,
                                    }),
                                ),
                                r,
                            );
                        },
                    ),
                    hn = {
                        base: 'AmmunitionPanel_base_78',
                        base__locked: 'AmmunitionPanel_base__locked_14',
                        base__disabled: 'AmmunitionPanel_base__disabled_f2',
                        base__hidden: 'AmmunitionPanel_base__hidden_5e',
                        border: 'AmmunitionPanel_border_de',
                        border__hidden: 'AmmunitionPanel_border__hidden_8a',
                        roleSkillSlot: 'AmmunitionPanel_roleSkillSlot_67',
                        roleSkillSlot__battle: 'AmmunitionPanel_roleSkillSlot__battle_91',
                        roleSkillSlot__small: 'AmmunitionPanel_roleSkillSlot__small_14',
                        roleSkillSlot__extraSmall: 'AmmunitionPanel_roleSkillSlot__extraSmall_6a',
                        roleSkillSlot__prebattle: 'AmmunitionPanel_roleSkillSlot__prebattle_6a',
                    },
                    fn = (0, u.Pi)(({ show: e = !0, isReady: t = !0, panelType: n, isDisabled: u = !1 }) => {
                        const r = O(),
                            o = r.model,
                            l = r.controls,
                            c = o.ammunitionPanel.get(),
                            d = c.isSetupSwitchInProgress,
                            m = c.syncInitiator,
                            b = o.roleSkillSlot.get(),
                            p = (0, a.useRef)(!1),
                            E = (0, a.useState)({ slotWidth: 0, slotOffset: 0 }),
                            g = E[0],
                            h = E[1],
                            f = (0, a.useState)(!1),
                            v = f[0],
                            A = f[1],
                            C = (0, a.useState)(!1),
                            F = C[0],
                            D = C[1],
                            S = (0, a.useRef)(null),
                            B = (0, a.useRef)({ element: null, generation: 0, slotIndex: null, sectionIndex: null }),
                            w = (0, a.useCallback)(
                                (e, t) => {
                                    if (v || d || n !== i.Hangar) return;
                                    const a = null != t ? t : { width: 0, height: 0, offsetX: 0, offsetY: 0 };
                                    l.sectionResized(Object.assign({ sectionType: e }, a));
                                },
                                [v, d, n, l],
                            ),
                            y = (0, a.useCallback)(
                                (e) => {
                                    w('main', e);
                                },
                                [w],
                            );
                        ((e, t, n, s = []) => {
                            const i = (0, z.M)(
                                () =>
                                    (0, L.v)(() =>
                                        (0, L.v)(() => {
                                            if (e.current) {
                                                const n = e.current.getBoundingClientRect(),
                                                    a = {
                                                        width: $.O.view.pxToRem(n.width),
                                                        height: $.O.view.pxToRem(n.height),
                                                        offsetX: $.O.view.pxToRem(n.left),
                                                        offsetY: $.O.view.pxToRem(n.top),
                                                    };
                                                window.tutorialApi.updateComponents(), t(a);
                                            }
                                        }),
                                    ),
                                [t, e],
                            );
                            (0, a.useEffect)(() => {
                                i();
                            }, [i, ...s]),
                                (0, a.useEffect)(() => {
                                    if (n)
                                        return (
                                            engine.on('clientResized', i),
                                            () => {
                                                engine.off('clientResized', i);
                                            }
                                        );
                                }, [n, i]);
                        })(S, y, !0, [m]);
                        const x = (0, a.useCallback)(() => {
                                D(!1);
                            }, []),
                            T = (() => {
                                const e = (0, a.useState)($.O.view.getScale()),
                                    t = e[0],
                                    n = e[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        const e = () => {
                                            n($.O.view.getScale());
                                        };
                                        return (
                                            window.addEventListener('resize', e),
                                            () => {
                                                window.removeEventListener('resize', e);
                                            }
                                        );
                                    }, []),
                                    t
                                );
                            })(),
                            k = (0, a.useCallback)(() => {
                                if (B.current.element && S.current) {
                                    const e = B.current.element.getBoundingClientRect(),
                                        t = S.current.getBoundingClientRect();
                                    h({ slotWidth: e.width, slotOffset: e.left - t.left + 0.5 * e.width });
                                }
                            }, [T]),
                            I = (0, a.useCallback)(
                                (e, t, n) => {
                                    if (e.current && S.current) {
                                        const a = ((e, t, n) =>
                                            e !== n.current.slotIndex || t !== n.current.sectionIndex)(n, t, B);
                                        (B.current.element = e.current),
                                            (B.current.slotIndex = n),
                                            (B.current.sectionIndex = t),
                                            p.current && a ? D(!0) : (p.current = !0),
                                            B.current.generation && k();
                                    }
                                },
                                [k],
                            ),
                            N = (0, a.useCallback)(
                                () =>
                                    (0, L.v)(() => {
                                        (B.current.generation += 1), k();
                                    }),
                                [B, k],
                            );
                        (0, a.useEffect)(
                            () => (
                                engine.on('clientResized', N),
                                (0, L.v)(() => {
                                    engine.off('clientResized', N), y(), N();
                                })
                            ),
                            [y, N],
                        );
                        const R = g.slotWidth,
                            P = g.slotOffset,
                            W = n === i.Setup || n === i.Compare,
                            j = (0, a.useMemo)(
                                () => ({ panelType: n, isDisabled: u, onActiveSlotChanged: I, isBorderActive: F }),
                                [F, u, I, n],
                            ),
                            V = U(['roleSkillSlot'], hn);
                        return s().createElement(
                            'div',
                            {
                                ref: S,
                                className: _()(
                                    hn.base,
                                    !t && hn.base__locked,
                                    !e && hn.base__hidden,
                                    u && hn.base__disabled,
                                ),
                            },
                            W &&
                                s().createElement(G, {
                                    key: B.current.generation,
                                    slotOffset: P,
                                    slotWidth: R,
                                    isAnimationRunning: F,
                                }),
                            s().createElement(
                                gn,
                                { isSetupSwitching: d || v, sectionProps: j, isReady: t, setSetupSwitching: A },
                                b.roleSkill &&
                                    s().createElement(H, {
                                        roleSkill: b.roleSkill,
                                        tooltipId: b.tooltipId,
                                        tooltipHeader: b.tooltipHeader,
                                        tooltipBody: b.tooltipBody,
                                        className: _()(hn.roleSkillSlot, hn[`roleSkillSlot__${n}`], V.roleSkillSlot),
                                    }),
                            ),
                            W &&
                                s().createElement(
                                    'div',
                                    { className: _()(hn.border, !F && hn.border__hidden) },
                                    s().createElement(M, { slotWidth: R, slotOffset: P, onAnimationEnd: x }),
                                ),
                        );
                    }),
                    vn = (0, u.Pi)(() => {
                        const e = O().model.root.get(),
                            t = e.isDisabled,
                            n = e.isReady;
                        return s().createElement(
                            'div',
                            { className: 'TankSetupApp_base_94' },
                            s().createElement(fn, { panelType: i.Hangar, isDisabled: t, isReady: n }),
                        );
                    }),
                    An = () => {
                        const e = (0, a.useMemo)(
                            () => ({ rootId: R.views.halloween.lobby.widgets.TankSetupView('resId') }),
                            [],
                        );
                        return s().createElement(N, { options: e }, s().createElement(vn, null));
                    };
            },
            824: (e, t, n) => {
                'use strict';
                n.d(t, {
                    $p: () => v,
                    $u: () => s,
                    Ar: () => F,
                    Be: () => a,
                    FD: () => S,
                    HX: () => A,
                    K1: () => h,
                    Pq: () => p,
                    RZ: () => C,
                    SV: () => r,
                    TL: () => _,
                    TO: () => i,
                    UA: () => u,
                    Wj: () => d,
                    _k: () => l,
                    a9: () => b,
                    bi: () => E,
                    bk: () => D,
                    h: () => m,
                    k1: () => f,
                    mM: () => c,
                    nJ: () => o,
                    oP: () => g,
                });
                const a = 'ev_hw_hangar_ui_quantum_switch_forward',
                    s = 'ev_hw_hangar_ui_quantum_switch_backward',
                    i = 'ev_hw_hangar_ui_quantum_switch_auto',
                    u = 'ev_hw_hangar_ui_tank_hornet',
                    r = 'ev_hw_hangar_ui_tank_cerberus',
                    o = 'ev_hw_hangar_ui_tank_double',
                    l = 'ev_hw_hangar_ui_tank_grenadier',
                    c = 'ev_hw_hangar_ui_tank_malachite',
                    _ = 'ev_hw_hangar_ui_tank_ferrata',
                    d = 'ev_hw_hangar_ui_difficulty_highlight',
                    m = 'ev_hw_hangar_ui_difficulty_normal',
                    b = 'ev_hw_hangar_ui_difficulty_hard',
                    p = 'ev_hw_hangar_ui_difficulty_nightmare',
                    E = 'ev_hw_hangar_ui_difficulty_defense',
                    g = 'ev_hw_hangar_ui_shop_highlight_on',
                    h = 'ev_hw_hangar_ui_shop_highlight_off',
                    f = 'ev_hw_hangar_ui_reward_highlight_on',
                    v = 'ev_hw_hangar_ui_reward_highlight_off',
                    A = 'ev_hw_hangar_ui_shop_keys_highlight_on',
                    C = 'ev_hw_hangar_ui_shop_keys_highlight_off',
                    F = 'ev_hw_hangar_ui_shop_keys_anim',
                    D = 'ev_hw_hangar_quantum_decrypt_anim',
                    S = 'ev_hw_hangar_ui_tank_tab_switch';
            },
            5585: (e, t, n) => {
                'use strict';
                n.d(t, { PI: () => a, uF: () => s }), n(2862), n(729);
                const a = (e) => e.replace(':', '_').slice(0, -1);
                function s(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)[sd])/g, (e) => {
                        const n = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(n, -n)]);
                    });
                }
            },
            2112: (e, t, n) => {
                'use strict';
                let a, s;
                n.d(t, { g: () => s }),
                    (function (e) {
                        (e.None = 'none'),
                            (e.LightTank = 'lightTank'),
                            (e.MediumTank = 'mediumTank'),
                            (e.HeavyTank = 'heavyTank'),
                            (e.SPG = 'SPG'),
                            (e.AT_SPG = 'AT-SPG');
                    })(a || (a = {})),
                    (function (e) {
                        (e.Default = 'default'),
                            (e.Locked = 'locked'),
                            (e.InBattle = 'inBattle'),
                            (e.InPlatoon = 'inPlatoon');
                    })(s || (s = {}));
            },
            6880: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
            9734: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
                };
            },
            372: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'HorizontalBar_base_49',
                    base__nonActive: 'HorizontalBar_base__nonActive_82',
                    leftButton: 'HorizontalBar_leftButton_5f',
                    rightButton: 'HorizontalBar_rightButton_03',
                    track: 'HorizontalBar_track_0d',
                    thumb: 'HorizontalBar_thumb_fd',
                    rail: 'HorizontalBar_rail_32',
                };
            },
            4682: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'HorizontalScroll_base_29',
                    wrapper: 'HorizontalScroll_wrapper_1e',
                    defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                };
            },
            9168: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'VerticalBar_base_f3',
                    base__nonActive: 'VerticalBar_base__nonActive_42',
                    topButton: 'VerticalBar_topButton_d7',
                    bottomButton: 'VerticalBar_bottomButton_06',
                    track: 'VerticalBar_track_df',
                    thumb: 'VerticalBar_thumb_32',
                    rail: 'VerticalBar_rail_43',
                };
            },
            5636: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    content: 'VerticalScroll_content_cb',
                    defaultScroll: 'VerticalScroll_defaultScroll_f8',
                    bar: 'VerticalScroll_bar_1e',
                    area: 'VerticalScroll_area_af',
                };
            },
            1699: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = { base: 'TextOverflow_base_3b' };
            },
            8055: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
            9627: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
            7629: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    noBreakWrapper: 'renderers_noBreakWrapper_10',
                    lineBreak: 'renderers_lineBreak_b5',
                    newLine: 'renderers_newLine_bd',
                    word: 'renderers_word_f3',
                };
            },
            9831: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
            7841: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'TextButton_base_1b',
                    base__leaderboard: 'TextButton_base__leaderboard_30',
                    base__close: 'TextButton_base__close_82',
                    caption: 'TextButton_caption_d0',
                    base__hover: 'TextButton_base__hover_23',
                    base__active: 'TextButton_base__active_61',
                    icon: 'TextButton_icon_a6',
                    icon__close: 'TextButton_icon__close_42',
                    icon__info: 'TextButton_icon__info_cf',
                    icon__leaderboard: 'TextButton_icon__leaderboard_65',
                    icon__url: 'TextButton_icon__url_2d',
                    iconHover: 'TextButton_iconHover_6e',
                    iconHover__close: 'TextButton_iconHover__close_83',
                    iconHover__info: 'TextButton_iconHover__info_54',
                    iconHover__leaderboard: 'TextButton_iconHover__leaderboard_35',
                    iconHover__url: 'TextButton_iconHover__url_81',
                };
            },
            3149: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'Text_base_3f',
                    base__whiteSpanish: 'Text_base__whiteSpanish_9d',
                    base__red: 'Text_base__red_f1',
                    base__currency: 'Text_base__currency_66',
                    base__heading: 'Text_base__heading_72',
                    base__lightRed: 'Text_base__lightRed_ee',
                    base__metaHeading: 'Text_base__metaHeading_73',
                    layer0: 'Text_layer0_29',
                    layer0__shadow: 'Text_layer0__shadow_c3',
                    layer1: 'Text_layer1_81',
                    layer2: 'Text_layer2_ff',
                    layer3: 'Text_layer3_47',
                    layer4: 'Text_layer4_f7',
                };
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](n, n.exports, __webpack_require__), n.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, a) => {
            if (!t) {
                var s = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, n, a] = deferred[o], i = !0, u = 0; u < t.length; u++)
                        (!1 & a || s >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[u]))
                            ? t.splice(u--, 1)
                            : ((i = !1), a < s && (s = a));
                    if (i) {
                        deferred.splice(o--, 1);
                        var r = n();
                        void 0 !== r && (e = r);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > a; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [t, n, a];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var n in t)
                __webpack_require__.o(t, n) &&
                    !__webpack_require__.o(e, n) &&
                    Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
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
        (__webpack_require__.j = 833),
        (() => {
            var e = { 833: 0, 786: 0, 581: 0, 252: 0, 665: 0, 133: 0, 945: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var a,
                        s,
                        [i, u, r] = n,
                        o = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (a in u) __webpack_require__.o(u, a) && (__webpack_require__.m[a] = u[a]);
                        if (r) var l = r(__webpack_require__);
                    }
                    for (t && t(n); o < i.length; o++)
                        (s = i[o]), __webpack_require__.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(528));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
