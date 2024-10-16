'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [988],
    {
        3457: (e, t, n) => {
            n.d(t, { L$: () => l.L, qE: () => l.q, u5: () => _ });
            var o = n(6483),
                r = n.n(o),
                s = n(7727),
                a = n(6179),
                i = n.n(a),
                u = n(6880),
                l = n(2106);
            const c = ({
                children: e,
                size: t,
                isFocused: n,
                type: o,
                disabled: c,
                mixClass: _,
                soundHover: d,
                soundClick: m,
                onMouseEnter: p,
                onMouseMove: f,
                onMouseDown: g,
                onMouseUp: h,
                onMouseLeave: E,
                onClick: b,
            }) => {
                const v = (0, a.useRef)(null),
                    y = (0, a.useState)(n),
                    T = y[0],
                    w = y[1],
                    P = (0, a.useState)(!1),
                    S = P[0],
                    B = P[1];
                return (
                    (0, a.useEffect)(() => {
                        function e(e) {
                            T && null !== v.current && !v.current.contains(e.target) && w(!1);
                        }
                        return (
                            document.addEventListener('mousedown', e),
                            () => {
                                document.removeEventListener('mousedown', e);
                            }
                        );
                    }, [T]),
                    (0, a.useEffect)(() => {
                        w(n);
                    }, [n]),
                    i().createElement(
                        'div',
                        {
                            ref: v,
                            className: r()(
                                u.Z.base,
                                u.Z[`base__${o}`],
                                c && u.Z.base__disabled,
                                t && u.Z[`base__${t}`],
                                T && u.Z.base__focus,
                                S && u.Z.base__highlightActive,
                                _,
                            ),
                            onMouseEnter: function (e) {
                                c || (null !== d && (0, s.G)(d), p && p(e));
                            },
                            onMouseMove: function (e) {
                                f && f(e);
                            },
                            onMouseUp: function (e) {
                                c || (h && h(e), B(!1));
                            },
                            onMouseDown: function (e) {
                                c ||
                                    (null !== m && (0, s.G)(m),
                                    g && g(e),
                                    n && (c || (v.current && (v.current.focus(), w(!0)))),
                                    B(!0));
                            },
                            onMouseLeave: function (e) {
                                c || (E && E(e), B(!1));
                            },
                            onClick: function (e) {
                                c || (b && b(e));
                            },
                        },
                        o !== l.L.ghost &&
                            i().createElement(
                                i().Fragment,
                                null,
                                i().createElement('div', { className: u.Z.back }),
                                i().createElement('span', { className: u.Z.texture }),
                            ),
                        i().createElement(
                            'span',
                            { className: r()(u.Z.state, u.Z.state__default) },
                            i().createElement('span', { className: u.Z.stateDisabled }),
                            i().createElement('span', { className: u.Z.stateHighlightHover }),
                            i().createElement('span', { className: u.Z.stateHighlightActive }),
                        ),
                        i().createElement(
                            'span',
                            { className: u.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                            e,
                        ),
                    )
                );
            };
            c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
            const _ = c;
        },
        2106: (e, t, n) => {
            let o, r;
            n.d(t, { L: () => o, q: () => r }),
                (function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(o || (o = {})),
                (function (e) {
                    (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                })(r || (r = {}));
        },
        280: (e, t, n) => {
            n.d(t, { z: () => l });
            var o = n(6483),
                r = n.n(o),
                s = n(3649),
                a = n(6179),
                i = n.n(a),
                u = n(5287);
            const l = ({ binding: e, text: t = '', classMix: n, alignment: o = s.v2.left, formatWithBrackets: l }) => {
                if (null === t) return console.error("FormatText was supplied with 'null'"), null;
                const c = l && e ? (0, s.WU)(t, e) : t;
                return i().createElement(
                    a.Fragment,
                    null,
                    c.split('\n').map((t, l) =>
                        i().createElement(
                            'div',
                            { className: r()(u.Z.base, n), key: `${t}-${l}` },
                            (0, s.Uw)(t, o, e).map((e, t) => i().createElement(a.Fragment, { key: `${t}-${e}` }, e)),
                        ),
                    ),
                );
            };
        },
        9766: (e, t, n) => {
            n.d(t, { z: () => o.z });
            var o = n(280);
            n(8082);
        },
        8082: (e, t, n) => {
            n(3649);
        },
        2862: (e, t, n) => {
            let o, r, s, a, i, u, l, c;
            n.d(t, { E4: () => o, h2: () => s }),
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
                })(o || (o = {})),
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
                })(s || (s = {})),
                (function (e) {
                    (e.MULTI = 'multi'),
                        (e.CURRENCY = 'currency'),
                        (e.PREMIUM_PLUS = 'premium_plus'),
                        (e.NUMBER = 'number'),
                        (e.STRING = 'string');
                })(a || (a = {})),
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
                })(l || (l = {})),
                (function (e) {
                    (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                })(c || (c = {}));
        },
        8089: (e, t, n) => {
            n.d(t, { A: () => _ });
            var o = n(6179),
                r = n.n(o),
                s = n(6483),
                a = n.n(s),
                i = n(7727),
                u = n(7476);
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
                    (c = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = arguments[t];
                                  for (var o in n) ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
                              }
                              return e;
                          }),
                    c.apply(null, arguments)
                );
            }
            class _ extends r().PureComponent {
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
                        n = e.onClick,
                        o = e.goto,
                        s = e.side,
                        i = e.type,
                        _ = e.classNames,
                        d = e.onMouseEnter,
                        m = e.onMouseLeave,
                        p = e.onMouseDown,
                        f = e.onMouseUp,
                        g =
                            (e.soundClick,
                            e.soundHover,
                            (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var o in e)
                                    if ({}.hasOwnProperty.call(e, o)) {
                                        if (t.indexOf(o) >= 0) continue;
                                        n[o] = e[o];
                                    }
                                return n;
                            })(e, l)),
                        h = a()(u.Z.base, u.Z[`base__${i}`], u.Z[`base__${s}`], null == _ ? void 0 : _.base),
                        E = a()(u.Z.icon, u.Z[`icon__${i}`], u.Z[`icon__${s}`], null == _ ? void 0 : _.icon),
                        b = a()(u.Z.glow, null == _ ? void 0 : _.glow),
                        v = a()(u.Z.caption, u.Z[`caption__${i}`], null == _ ? void 0 : _.caption),
                        y = a()(u.Z.goto, null == _ ? void 0 : _.goto);
                    return r().createElement(
                        'div',
                        c(
                            {
                                className: h,
                                onMouseEnter: this._onMouseEnter(d),
                                onMouseLeave: this._onMouseLeave(m),
                                onMouseDown: this._onMouseDown(p),
                                onMouseUp: this._onMouseUp(f),
                                onFocus: this.handleFocus,
                                onBlur: this.handleBlur,
                                onClick: n,
                            },
                            g,
                        ),
                        'info' !== i && r().createElement('div', { className: u.Z.shine }),
                        r().createElement('div', { className: E }, r().createElement('div', { className: b })),
                        r().createElement('div', { className: v }, t),
                        o && r().createElement('div', { className: y }, o),
                    );
                }
            }
            _.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
        },
        2056: (e, t, n) => {
            n.d(t, { u: () => l });
            var o = n(7902),
                r = n(9916),
                s = n(6179);
            const a = [
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
            const u = (e, t, n = {}, o = 0) => {
                    viewEnv.handleViewEvent(
                        Object.assign(
                            {
                                __Type: 'GFViewEventProxy',
                                type: r.B0.TOOLTIP,
                                contentID: e,
                                decoratorID: t,
                                targetID: o,
                            },
                            n,
                        ),
                    );
                },
                l = (e) => {
                    let t = e.children,
                        n = e.contentId,
                        r = e.args,
                        l = e.onMouseEnter,
                        c = e.onMouseLeave,
                        _ = e.onMouseDown,
                        d = e.onClick,
                        m = e.ignoreShowDelay,
                        p = void 0 !== m && m,
                        f = e.ignoreMouseClick,
                        g = void 0 !== f && f,
                        h = e.decoratorId,
                        E = void 0 === h ? 0 : h,
                        b = e.isEnabled,
                        v = void 0 === b || b,
                        y = e.targetId,
                        T = void 0 === y ? 0 : y,
                        w = e.onShow,
                        P = e.onHide,
                        S = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var o in e)
                                if ({}.hasOwnProperty.call(e, o)) {
                                    if (t.indexOf(o) >= 0) continue;
                                    n[o] = e[o];
                                }
                            return n;
                        })(e, a);
                    const B = (0, s.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                        k = (0, s.useMemo)(() => T || (0, o.F)().resId, [T]),
                        R = (0, s.useCallback)(() => {
                            (B.current.isVisible && B.current.timeoutId) ||
                                (u(n, E, { isMouseEvent: !0, on: !0, arguments: i(r) }, k),
                                w && w(),
                                (B.current.isVisible = !0));
                        }, [n, E, r, k, w]),
                        C = (0, s.useCallback)(() => {
                            if (B.current.isVisible || B.current.timeoutId) {
                                const e = B.current.timeoutId;
                                e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                    u(n, E, { on: !1 }, k),
                                    B.current.isVisible && P && P(),
                                    (B.current.isVisible = !1);
                            }
                        }, [n, E, k, P]),
                        D = (0, s.useCallback)((e) => {
                            B.current.isVisible &&
                                ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                (B.current.hideTimerId = window.setTimeout(() => {
                                    const t = document.elementFromPoint(e.clientX, e.clientY);
                                    t && !t.isSameNode(B.current.prevTarget) && C();
                                }, 200)));
                        }, []);
                    (0, s.useEffect)(() => {
                        const e = B.current.hideTimerId;
                        return (
                            document.addEventListener('wheel', D, { capture: !0 }),
                            () => {
                                document.removeEventListener('wheel', D, { capture: !0 }), e && window.clearTimeout(e);
                            }
                        );
                    }, []),
                        (0, s.useEffect)(() => {
                            !1 === v && C();
                        }, [v, C]),
                        (0, s.useEffect)(
                            () => (
                                window.addEventListener('mouseleave', C),
                                () => {
                                    window.removeEventListener('mouseleave', C), C();
                                }
                            ),
                            [C],
                        );
                    return v
                        ? (0, s.cloneElement)(
                              t,
                              Object.assign(
                                  {
                                      onMouseEnter:
                                          ((O = t.props.onMouseEnter),
                                          (e) => {
                                              (e.clientX === window.innerWidth && e.clientY === window.innerHeight) ||
                                                  ((B.current.timeoutId = window.setTimeout(R, p ? 100 : 400)),
                                                  l && l(e),
                                                  O && O(e));
                                          }),
                                      onMouseLeave: ((e) => (t) => {
                                          C(), null == c || c(t), null == e || e(t);
                                      })(t.props.onMouseLeave),
                                      onClick: ((e) => (t) => {
                                          !1 === g && C(), null == d || d(t), null == e || e(t);
                                      })(t.props.onClick),
                                      onMouseDown: ((e) => (t) => {
                                          !1 === g && C(), null == _ || _(t), null == e || e(t);
                                      })(t.props.onMouseDown),
                                  },
                                  S,
                              ),
                          )
                        : t;
                    var O;
                };
        },
        6366: (e, t, n) => {
            n.d(t, { n: () => m });
            var o = n(7515),
                r = n(1856),
                s = n(3138),
                a = n(6112),
                i = n(4598);
            var u = n(6179),
                l = n.n(u);
            const c = [
                'src',
                'className',
                'autoplay',
                'style',
                'loop',
                'isPrebufferKeyframes',
                'keyframesNameConfig',
                'onClick',
            ];
            function _() {
                return (
                    (_ = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = arguments[t];
                                  for (var o in n) ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
                              }
                              return e;
                          }),
                    _.apply(null, arguments)
                );
            }
            const d = (0, u.forwardRef)(function (e, t) {
                    let n = e.src,
                        d = e.className,
                        m = e.autoplay,
                        p = void 0 !== m && m,
                        f = e.style,
                        g = e.loop,
                        h = void 0 !== g && g,
                        E = e.isPrebufferKeyframes,
                        b = e.keyframesNameConfig,
                        v = e.onClick,
                        y = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var o in e)
                                if ({}.hasOwnProperty.call(e, o)) {
                                    if (t.indexOf(o) >= 0) continue;
                                    n[o] = e[o];
                                }
                            return n;
                        })(e, c);
                    const T = t,
                        w = (0, u.useRef)(null);
                    var P;
                    return (
                        (P = () =>
                            s.O.view.events.onDisplayChanged((e, t) => {
                                var n, o;
                                t === a.W.hidden && (null == (n = w.current) || n.pause()),
                                    t === a.W.shown && (null == (o = w.current) || o.play());
                            })),
                        (0, u.useEffect)(P, []),
                        (0, u.useEffect)(
                            () =>
                                (0, r.v)(() => {
                                    const e = w.current;
                                    if (!T || !e || !E)
                                        return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                    const t = e.cohGetKeyframeTimestamps();
                                    t.length > 0
                                        ? ((e.cohFastSeek = !0),
                                          t.map((t) => {
                                              null == e || e.cohPrebufferKeyframe(t);
                                          }))
                                        : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                }),
                            [E, T],
                        ),
                        (0, u.useEffect)(() => {
                            if (T && w.current) {
                                const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: i.ZT },
                                    t = () => {
                                        let t = 0;
                                        const n = (function (e) {
                                                let t = 0;
                                                return [
                                                    function n() {
                                                        e(), (t = requestAnimationFrame(n));
                                                    },
                                                    function () {
                                                        cancelAnimationFrame(t);
                                                    },
                                                ];
                                            })(() => {
                                                if (w.current) {
                                                    const n = w.current,
                                                        o = n.currentTime,
                                                        r = n.duration;
                                                    if (
                                                        (t !== o &&
                                                            (e.changeTimeHandlers.forEach((e) =>
                                                                e({ currentTime: o, duration: r }),
                                                            ),
                                                            (t = o)),
                                                        w.current.paused || !T || !E)
                                                    )
                                                        return;
                                                    const s = w.current.cohGetKeyframeTimestamps();
                                                    s.forEach((t, n) => {
                                                        o > s[n] - 0.02 &&
                                                            o < s[n] &&
                                                            e.changeKeyframeHandlers.forEach((e) => {
                                                                const o = Object.keys(null != b ? b : {})[n];
                                                                return e({ time: t, name: `${b ? o : `Point_${n}`}` });
                                                            });
                                                    });
                                                }
                                            }),
                                            o = n[0],
                                            r = n[1];
                                        return o(), r;
                                    };
                                e.changeTimeLoop = t();
                                const n = (t) => (
                                        e.changeTimeHandlers.push(t),
                                        () => {
                                            const n = e.changeTimeHandlers,
                                                o = n.indexOf(t);
                                            o < 0
                                                ? console.warn(
                                                      "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                  )
                                                : n.splice(o, 1);
                                        }
                                    ),
                                    r = (t) => (
                                        e.changeKeyframeHandlers.push(t),
                                        () => {
                                            const n = e.changeKeyframeHandlers,
                                                o = n.indexOf(t);
                                            o < 0
                                                ? console.warn(
                                                      "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                  )
                                                : n.splice(o, 1);
                                        }
                                    ),
                                    s = () => {
                                        var e;
                                        return null == (e = w.current) ? void 0 : e.currentTime;
                                    },
                                    a = () => {
                                        var e;
                                        return null == (e = w.current) ? void 0 : e.duration;
                                    },
                                    u = (e) => {
                                        w.current && (w.current.currentTime = (0, o.u)(0, w.current.duration, e));
                                    },
                                    l = () => {
                                        var e;
                                        return null == (e = w.current) ? void 0 : e.play();
                                    },
                                    c = () => {
                                        var e;
                                        return null == (e = w.current) ? void 0 : e.pause();
                                    },
                                    _ = () => {
                                        c(), u(0);
                                    },
                                    d = () => {
                                        var e, t;
                                        return null !=
                                            (e = null == (t = w.current) ? void 0 : t.cohGetKeyframeTimestamps())
                                            ? e
                                            : [];
                                    },
                                    m = (e) => {
                                        u(e), l();
                                    },
                                    p = (e) => {
                                        u(e), c();
                                    },
                                    f = () => {
                                        (e.changeTimeHandlers = []),
                                            (e.changeKeyframeHandlers = []),
                                            null == e.changeTimeLoop || e.changeTimeLoop();
                                    },
                                    g = (e, t) => {
                                        var n;
                                        return (
                                            null == (n = w.current) || n.addEventListener(e, t),
                                            () => {
                                                var n;
                                                return null == (n = w.current) ? void 0 : n.removeEventListener(e, t);
                                            }
                                        );
                                    },
                                    h = (e, t) => {
                                        var n;
                                        return (
                                            null == (n = w.current) || n.removeEventListener(e, t),
                                            () => {
                                                var n;
                                                return null == (n = w.current) ? void 0 : n.removeEventListener(e, t);
                                            }
                                        );
                                    };
                                return (
                                    (T.current = {
                                        on: g,
                                        off: h,
                                        play: l,
                                        pause: c,
                                        stop: _,
                                        cleanup: f,
                                        getCurrentTime: s,
                                        getDuration: a,
                                        getCachedKeyframes: d,
                                        goToAndPlay: m,
                                        goToAndStop: p,
                                        setCurrentTime: u,
                                        domRef: w.current,
                                        onChangeTime: n,
                                        onKeyframes: r,
                                    }),
                                    () => {
                                        f(), (T.current = null);
                                    }
                                );
                            }
                        }, [b, T, E]),
                        (0, u.useEffect)(() => {
                            w.current && p && w.current.play();
                        }, [p, h]),
                        (0, u.useEffect)(() => {
                            if (w.current)
                                return () => {
                                    w.current && w.current.pause();
                                };
                        }, []),
                        l().createElement(
                            'video',
                            _({ src: n, className: d, style: f, loop: h, ref: w, onClick: v }, y),
                        )
                    );
                }),
                m = (0, u.memo)(d);
        },
        7515: (e, t, n) => {
            n.d(t, { u: () => o });
            const o = (e, t, n) => (n < e ? e : n > t ? t : n);
        },
        1856: (e, t, n) => {
            n.d(t, { v: () => o });
            const o = (e) => {
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
            n.d(t, { F: () => o });
            const o = (e, t) => {
                let n;
                const o = setTimeout(() => {
                    n = e();
                }, t);
                return () => {
                    'function' == typeof n && n(), clearTimeout(o);
                };
            };
        },
        7522: (e, t, n) => {
            n.d(t, { Z: () => o });
            const o = {
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
                easeOutBack(e) {
                    const t = 1.70158;
                    return 1 + 2.70158 * Math.pow(e - 1, 3) + t * Math.pow(e - 1, 2);
                },
                bezier: (e, t, n, o) => (r) =>
                    (1 - r) * (1 - r) * (1 - r) * e +
                    3 * (1 - r) * (1 - r) * r * t +
                    3 * (1 - r) * r * r * n +
                    r * r * r * o,
            };
        },
        7902: (e, t, n) => {
            n.d(t, { F: () => o });
            const o = (e = 1) => {
                const t = new Error().stack;
                let n,
                    o = R.invalid('resId');
                return (
                    t &&
                        ((n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                        window.__feature &&
                            window.__feature !== n &&
                            window.subViews[n] &&
                            (o = window.subViews[n].id)),
                    { caller: n, stack: t, resId: o }
                );
            };
        },
        8526: (e, t, n) => {
            n.d(t, { I9: () => u, gd: () => i });
            var o = n(3138),
                r = n(5521),
                s = (n(9916), n(6179));
            const a = (e) => {
                console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
            };
            function i(e = r.n.NONE, t = a, n = !1, i = !1) {
                (0, s.useEffect)(() => {
                    if (e !== r.n.NONE)
                        return (
                            window.addEventListener('keydown', s, n),
                            () => {
                                window.removeEventListener('keydown', s, n);
                            }
                        );
                    function s(r) {
                        if (r.keyCode === e) {
                            if (!i && o.O.view.isEventHandled()) return;
                            o.O.view.setEventHandled(), t(r), n && r.stopPropagation();
                        }
                    }
                }, [t, e, n, i]);
            }
            function u(e) {
                i(r.n.ESCAPE, e);
            }
        },
        4489: (e, t, n) => {
            n.d(t, { f: () => s });
            var o = n(5139),
                r = n(6179);
            function s(e, t, n) {
                const s = (0, r.useMemo)(() => (0, o.Z)(n, e), t);
                return (0, r.useEffect)(() => s.cancel, [s]), s;
            }
        },
        2691: (e, t, n) => {
            n.d(t, { R: () => o });
            const o = (e, t) => {
                let n = e;
                const o = t.split('.');
                for (let e = 0; e < o.length; e++) {
                    if (!n) return '';
                    if (('string' != typeof n && (n = n.$dyn(o[e])), 'string' == typeof n)) return n;
                }
                return '';
            };
        },
        7727: (e, t, n) => {
            function o(e) {
                engine.call('PlaySound', e).catch((t) => {
                    console.error('[lib/sounds.js] playSound(', e, '): ', t);
                });
            }
            n.d(t, { G: () => o });
        },
        5139: (e, t, n) => {
            function o(e, t, n, o) {
                let r,
                    s = !1,
                    a = 0;
                function i() {
                    r && clearTimeout(r);
                }
                function u(...u) {
                    const l = this,
                        c = Date.now() - a;
                    function _() {
                        (a = Date.now()), n.apply(l, u);
                    }
                    s ||
                        (o && !r && _(),
                        i(),
                        void 0 === o && c > e
                            ? _()
                            : !0 !== t &&
                              (r = setTimeout(
                                  o
                                      ? function () {
                                            r = void 0;
                                        }
                                      : _,
                                  void 0 === o ? e - c : e,
                              )));
                }
                return (
                    'boolean' != typeof t && ((o = n), (n = t), (t = void 0)),
                    (u.cancel = function () {
                        i(), (s = !0);
                    }),
                    u
                );
            }
            n.d(t, { Z: () => o });
        },
        6974: (e, t, n) => {
            n.d(t, { h: () => c });
            var o = n(6483),
                r = n.n(o),
                s = n(6179),
                a = n.n(s),
                i = n(845),
                u = n(5294);
            const l = 'Header_base_bd',
                c = ({ title: e, subTitle: t, subTitleAlignType: n = i.M.Left, className: o }) =>
                    a().createElement(
                        'div',
                        { className: r()(l, o) },
                        a().createElement(u.D, { text: e }),
                        t && a().createElement(i.D, { text: t, alignType: n }),
                    );
        },
        8958: (e, t, n) => {
            n.d(t, { f: () => o });
            const o = {
                HAS_BOXES: { context: 'model.hasBoxes' },
                NO_BOXES: { context: 'model.noBoxes' },
                SINGLE_REWARD: { context: 'model.singleBoxRewards' },
                MULTIPLE_REWARD: { context: 'model.multipleBoxesRewards' },
            };
        },
        845: (e, t, n) => {
            n.d(t, { M: () => u, D: () => l });
            var o = n(6179),
                r = n.n(o),
                s = n(6483),
                a = n.n(s);
            const i = {
                base: 'SubTitle_base_56',
                base__center: 'SubTitle_base__center_1b',
                base__left: 'SubTitle_base__left_df',
                base__right: 'SubTitle_base__right_5c',
            };
            let u;
            !(function (e) {
                (e.Center = 'center'), (e.Left = 'left'), (e.Right = 'right');
            })(u || (u = {}));
            const l = ({ text: e, alignType: t = u.Left, className: n }) =>
                r().createElement('div', { className: a()(i.base, i[`base__${t}`], n) }, e);
        },
        5294: (e, t, n) => {
            n.d(t, { D: () => a });
            var o = n(6179),
                r = n.n(o);
            const s = 'Title_base_82',
                a = ({ text: e }) => r().createElement('div', { className: s }, e);
        },
        3905: (e, t, n) => {
            n.d(t, { N7: () => o, TP: () => a, _g: () => r, p6: () => i, qA: () => s });
            let o, r, s;
            !(function (e) {
                (e.EntryPoint = 'ENTRY_POINT'),
                    (e.InfoPage = 'INFO_PAGE'),
                    (e.Rewards = 'REWARDS'),
                    (e.HasBoxesView = 'HAS_BOXES_VIEW');
            })(o || (o = {})),
                (function (e) {
                    (e.Videos = 'videos'),
                        (e.Images = 'images'),
                        (e.Texts = 'texts'),
                        (e.DynamicVideos = 'dynamicVideos'),
                        (e.DynamicImages = 'dynamicImages'),
                        (e.DynamicTexts = 'dynamicTexts');
                })(r || (r = {})),
                (function (e) {
                    e.InfoPage = 'infoPage';
                })(s || (s = {}));
            const a = 'customizable/default',
                i = 2560 / 1440;
        },
        9674: (e, t, n) => {
            n.d(t, { Q: () => s });
            const o = {
                    entryHover: 'gui_lb_icon_hover',
                    boxMouseEnter: 'gui_lb_highlight_on',
                    boxMouseLeave: 'gui_lb_highlight_off',
                    boxAppear: 'gui_lb_appear',
                    purchaseHover: 'gui_lb_buy_more',
                    purchaseClick: 'gui_lb_ingame_shop_box_buy',
                    rareAnimation: 'gui_lb_rare_reward_fx',
                    epicAnimation: 'gui_lb_epic_reward_fx',
                    rewardAppear: 'gui_lb_reward_item_default',
                    multiRewardAppear: 'gui_random_reward_appear',
                    compensationAppear: 'gui_reward_screen_compensation',
                    open: 'gui_lb_video_default_open',
                    openRare: 'gui_lb_video_default_rare_open',
                    switch: 'gui_lb_type_switch',
                    statsOpen: 'gui_lb_stats_open',
                    statsClose: 'gui_lb_stats_close',
                    infoPageTabHover: 'gui_lb_infopage_box_highlight',
                    infoPageTabClick: 'gui_lb_infopage_box_click',
                },
                r = {
                    overlayRareVideo: 'gui_lb_video_special_appear',
                    open: 'gui_lb_video_special_open',
                    openRare: 'gui_lb_video_special_rare_open',
                },
                s = Object.assign({}, o, r);
        },
        7366: (e, t, n) => {
            n.d(t, { c1: () => s, jh: () => c, kC: () => m });
            var o = n(2691),
                r = n(3905);
            const s = 'default',
                a = (e, t) => {
                    let n = e;
                    const o = t.split('.');
                    for (let e = 0; e < o.length && n; e++) {
                        const t = n.$dyn(o[e]);
                        (t && 'object' != typeof t) || (n = t);
                    }
                    return n;
                },
                i = (e, t) => {
                    if (t.includes('.dynamic.')) {
                        const n = t.replace('dynamic.', '');
                        return a(e, n);
                    }
                    return (0, o.R)(e, t);
                },
                u = ({ type: e, filePath: t, eventName: n }, o = !1) => {
                    const s = ((e, t, n) => {
                            const o = 'gui.maps.icons.lootBoxSystem.customizable',
                                s = 'lootbox.customizable';
                            switch (e) {
                                case r._g.Images:
                                case r._g.DynamicImages:
                                    return {
                                        parent: R.images,
                                        path: `${o}.${n}.${t}`,
                                        defaultPath: `${o}.default.${t}`,
                                    };
                                case r._g.Videos:
                                case r._g.DynamicVideos:
                                    return {
                                        parent: R.videos,
                                        path: `${s}.${n}.${t}`,
                                        defaultPath: `${s}.default.${t}`,
                                    };
                                case r._g.Texts:
                                case r._g.DynamicTexts:
                                    return {
                                        parent: R.strings,
                                        path: `lootbox_${n}.${t}`,
                                        defaultPath: `lootbox_system.${t}`,
                                    };
                                default:
                                    return (
                                        console.error(`Unreachable code: unknown ResourceType ${e}`),
                                        { parent: '', path: '', defaultPath: '' }
                                    );
                            }
                        })(e, t, n),
                        u = s.parent,
                        l = s.path,
                        c = s.defaultPath;
                    return u ? { eventResource: o ? a(u, l) : i(u, l), defaultResource: o ? a(u, c) : i(u, c) } : null;
                },
                l = ({ type: e, filePath: t, eventName: n }) => {
                    const o = u({ type: e, filePath: t, eventName: n });
                    if (!o || (!o.eventResource && !o.defaultResource))
                        return console.info(`Unreachable code: unknown resource (${e} ${n} ${t})`), '';
                    const r = o.eventResource,
                        s = o.defaultResource;
                    return r || s;
                },
                c = (e, t) =>
                    Object.keys(e).reduce((n, o) => {
                        const r = e[o];
                        return r
                            ? ((n[o] = ((e, t, n) =>
                                  Object.keys(e).reduce(
                                      (o, r) => ((o[r] = l({ type: t, filePath: e[r], eventName: n })), o),
                                      {},
                                  ))(r, o, t)),
                              n)
                            : n;
                    }, {}),
                _ = (e, t, n) => (e || t ? e || t : (console.warn(`Not found ${n}`), '')),
                d = (e, t, n) =>
                    Object.keys(e).reduce((o, r) => {
                        const a = e[r];
                        return (
                            (o[r] = ((e, t, n) => {
                                const o = `resource type: ${e}, path: ${t}`,
                                    r = u({ type: e, filePath: t, eventName: n }, !0);
                                return ((e, t, n) => ({
                                    dynOpt: (o, r = s) => {
                                        const a = (null == t ? void 0 : t.$dyn(o)) || (null == t ? void 0 : t.$dyn(r)),
                                            i = null == e ? void 0 : e.$dyn(r);
                                        return _(a, i, n);
                                    },
                                    dyn: (o) => {
                                        const r = null == t ? void 0 : t.$dyn(o),
                                            s = null == e ? void 0 : e.$dyn(o);
                                        return _(r, s, n);
                                    },
                                    plural: (o, r) => {
                                        const s = null == t ? void 0 : t.$plural(o, r),
                                            a = null == e ? void 0 : e.$plural(o, r);
                                        return _(s, a, n);
                                    },
                                }))(null == r ? void 0 : r.defaultResource, null == r ? void 0 : r.eventResource, o);
                            })(t, a, n)),
                            o
                        );
                    }, {}),
                m = (e, t) =>
                    Object.keys(e).reduce((n, o) => {
                        const r = e[o];
                        return r ? ((n[o] = d(r, o, t)), n) : n;
                    }, {});
        },
        4401: (e, t, n) => {
            n.d(t, { QH: () => r, XM: () => a, ZM: () => i, y0: () => u });
            var o = n(2862);
            const r = (e) => e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&nbsp;'),
                s = ['style', 'style_3d'],
                a = (e) => {
                    const t = e.name,
                        n = e.icon;
                    switch (t) {
                        case o.E4.Vehicles:
                            return !0;
                        case o.E4.Customizations:
                            return s.includes(n);
                        default:
                            return !1;
                    }
                };
            let i;
            !(function (e) {
                (e.Disable = 'disable'), (e.Active = 'active'), (e.Default = 'default');
            })(i || (i = {}));
            const u = (e, t, n) => {
                switch (!0) {
                    case 0 === n:
                        return i.Disable;
                    case e === t:
                        return i.Active;
                    default:
                        return i.Default;
                }
            };
        },
        1354: (e, t, n) => {
            n.d(t, { _: () => a });
            var o = n(2344),
                r = n(6179),
                s = n(3138);
            const a = (e) => {
                const t = (0, o.eI)(),
                    n = (() => {
                        const e = (0, r.useState)(s.O.view.getScale()),
                            t = e[0],
                            n = e[1];
                        return (
                            (0, r.useEffect)(() => {
                                const e = () => {
                                    n(s.O.view.getScale());
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
                    a = viewEnv.pxToRem(t.width) * n,
                    i = viewEnv.pxToRem(t.height) * n,
                    u = a / i;
                return (0, r.useMemo)(
                    () =>
                        e >= u
                            ? { width: i * e + 'rem', height: `${i}rem` }
                            : { width: `${a}rem`, height: a / e + 'rem' },
                    [i, u, a, e],
                );
            };
        },
        6880: (e, t, n) => {
            n.d(t, { Z: () => o });
            const o = {
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
        5287: (e, t, n) => {
            n.d(t, { Z: () => o });
            const o = { base: 'FormatText_base_d0' };
        },
        7476: (e, t, n) => {
            n.d(t, { Z: () => o });
            const o = {
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
]);
