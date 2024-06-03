'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [805],
    {
        9390: (e, t, a) => {
            a.r(t), a.d(t, { default: () => rn });
            var n = a(6179),
                r = a.n(n),
                s = a(6483),
                o = a.n(s),
                i = a(3415),
                c = a(8432),
                l = a(974),
                m = a(5959),
                _ = a(5415),
                u = a(2039),
                d = a(7727),
                g = a(3649),
                b = a(3403);
            let p, h, v, y, f;
            !(function (e) {
                (e.Click = 'click'), (e.Display = 'display');
            })(p || (p = {})),
                (function (e) {
                    (e.Hangar = 'hangar'), (e.Catalog = 'catalog');
                })(h || (h = {})),
                (function (e) {
                    (e.Mouse = 'mouse'), (e.Esc = 'esc');
                })(v || (v = {})),
                (function (e) {
                    (e.AnotherPlayer = 'another_player_click'),
                        (e.TriggerHint = 'trigger_hint'),
                        (e.Close = 'close_button'),
                        (e.Catalog = 'catalog_button'),
                        (e.TankName = 'tank_name_single_achievement'),
                        (e.Breadcrumbs = 'bread_crumb');
                })(y || (y = {})),
                (function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(f || (f = {}));
            let S;
            !(function (e) {
                (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
            })(S || (S = {}));
            const E = 'metrics',
                x = ({ partnerID: e, item: t, parentScreen: a, itemState: n, info: r }) => ({
                    item: t,
                    partnerID: e || null,
                    parent_screen: a || null,
                    item_state: n || null,
                    additional_info: r || null,
                }),
                N = (e, t) => {
                    const a = (0, n.useCallback)(
                        (a, n = f.Info, r) => {
                            r || (r = {}),
                                Object.keys(r).length >= 200 ||
                                    window.uiLoggerModel.log({
                                        feature: e,
                                        group: t,
                                        action: a,
                                        logLevel: n,
                                        params: JSON.stringify(r),
                                    });
                        },
                        [e, t],
                    );
                    return (e, t, n) => a(e, t, n);
                },
                A = () => {
                    const e = ((e) => {
                        const t = N(e, E),
                            a = (0, n.useCallback)(
                                (e) => {
                                    t(e.action, e.logLevel, x(e));
                                },
                                [t],
                            );
                        return (e) => a(e);
                    })('advanced_achievement');
                    return (t, a) =>
                        e({
                            action: p.Click,
                            parentScreen: h.Hangar,
                            item: t,
                            info: JSON.stringify({ posX: a.clientX, posY: a.clientY }),
                        });
                },
                w = {
                    base: 'AdvancedAchievement_base_03',
                    base__s100x100: 'AdvancedAchievement_base__s100x100_52',
                    base__s128x128: 'AdvancedAchievement_base__s128x128_d3',
                    base__s180x180: 'AdvancedAchievement_base__s180x180_10',
                    base__s280x280: 'AdvancedAchievement_base__s280x280_ac',
                    base__s360x360: 'AdvancedAchievement_base__s360x360_c6',
                    base__s420x420: 'AdvancedAchievement_base__s420x420_8a',
                    base__flexable: 'AdvancedAchievement_base__flexable_4f',
                    background: 'AdvancedAchievement_background_cf',
                    border: 'AdvancedAchievement_border_5d',
                    icon: 'AdvancedAchievement_icon_bb',
                    base__shield: 'AdvancedAchievement_base__shield_68',
                    icon__bottom: 'AdvancedAchievement_icon__bottom_57',
                    base__circular: 'AdvancedAchievement_base__circular_2d',
                    icon__top: 'AdvancedAchievement_icon__top_2d',
                    stage: 'AdvancedAchievement_stage_fa',
                };
            var C = a(7888);
            let k;
            !(function (e) {
                (e.Single = 'single'), (e.Cumulative = 'cumulative'), (e.Staged = 'staged');
            })(k || (k = {}));
            const $ = R.images.gui.maps.icons.advanced_achievements,
                P = { [k.Single]: C.bn.Circular, [k.Staged]: C.bn.Circular, [k.Cumulative]: C.bn.Shield },
                I = {
                    [C.sg.S100x100]: C.Bw.s52x44,
                    [C.sg.S128x128]: C.Bw.s68x56,
                    [C.sg.S180x180]: C.Bw.s94x80,
                    [C.sg.S280x280]: C.Bw.s144x116,
                    [C.sg.S360x360]: C.Bw.s218x176,
                    [C.sg.S420x420]: C.Bw.s218x176,
                    [C.sg.Flexable]: C.Bw.s218x176,
                },
                z = {
                    [C.sg.S100x100]: C.Bw.s54x60,
                    [C.sg.S128x128]: C.Bw.s68x76,
                    [C.sg.S180x180]: C.Bw.s94x108,
                    [C.sg.S280x280]: C.Bw.s148x168,
                    [C.sg.S360x360]: C.Bw.s192x216,
                    [C.sg.S420x420]: C.Bw.s228x256,
                    [C.sg.Flexable]: C.Bw.s228x256,
                },
                O = (e, t, a, n) => {
                    switch (e) {
                        case C.bn.Shield:
                            return { backgroundImage: `url(${$.borders.shield.$dyn(`tier_${n}_${t}`)})` };
                        case C.bn.Circular:
                        default:
                            return {
                                backgroundImage: `url(${$.borders.circular.$dyn(a ? `circular_trophy_${t}` : `circular_${t}`)})`,
                            };
                    }
                },
                G = (e, t, a, n) => {
                    switch (e) {
                        case C.bn.Shield:
                            return { backgroundImage: `url(${$.backgrounds.shield.$dyn(`${n}_${t}`)})` };
                        case C.bn.Circular:
                        default:
                            return {
                                backgroundImage: `url(${$.backgrounds.circular.$dyn(a ? `trophy_${t}` : `${n}_${t}`)})`,
                            };
                    }
                },
                B = (e, t, a, n, r, s) => {
                    const o = a ? '_trophy' : '',
                        i = e === C.bn.Shield ? `_tier_${r}` : '',
                        c = ((e) => (e === l.Em.PersonalMissions ? z : I))(s),
                        m = c[t],
                        _ = ((e, t) => {
                            if (t === C.sg.S360x360 && e === C.Bw.s218x176) return { width: 188, height: 150 };
                            const a = e.substring(1).split('x');
                            return { width: a[0], height: a[1] };
                        })(m, t),
                        u = _.width,
                        d = _.height,
                        g = $.icons.$dyn(`${n}${o}${i}_${m}`);
                    return g
                        ? { backgroundImage: `url(${g})`, width: `${u}rem`, height: `${d}rem` }
                        : { width: `${u}rem`, height: `${d}rem` };
                },
                M = ({
                    keyName: e,
                    type: t,
                    backgroundName: a,
                    size: n = C.sg.S180x180,
                    level: s = 0,
                    stage: i = 0,
                    isTrophy: c = !1,
                    iconPosition: m = l.x_.Center,
                    iconSizeMap: _ = l.Em.Default,
                    classNames: u,
                }) => {
                    const d = P[t] || C.bn.Circular,
                        b = n === C.sg.Flexable ? C.sg.S420x420 : n;
                    return r().createElement(
                        'div',
                        { className: o()(w.base, w[`base__${n}`], w[`base__${d}`], null == u ? void 0 : u.base) },
                        r().createElement('div', {
                            className: o()(w.background, null == u ? void 0 : u.background),
                            style: G(d, b, c, a),
                        }),
                        r().createElement('div', {
                            className: o()(w.border, null == u ? void 0 : u.border),
                            style: O(d, b, c, s),
                        }),
                        r().createElement('div', {
                            className: o()(
                                w.icon,
                                w[`icon__${m}`],
                                w[`icon__${(0, g.TD)(_)}`],
                                null == u ? void 0 : u.icon,
                            ),
                            style: B(d, n, c, e, s, _),
                        }),
                        t === k.Staged &&
                            Boolean(i) &&
                            r().createElement(
                                'div',
                                {
                                    className: o()(w.stage, null == u ? void 0 : u.stage),
                                    lang: R.strings.settings.LANGUAGE_CODE(),
                                },
                                i,
                            ),
                    );
                },
                L = {
                    base: 'Category_base_94',
                    base__s100x100: 'Category_base__s100x100_92',
                    base__s128x128: 'Category_base__s128x128_d0',
                    base__s180x180: 'Category_base__s180x180_c5',
                    base__s280x280: 'Category_base__s280x280_36',
                    base__s360x360: 'Category_base__s360x360_a7',
                    base__s420x420: 'Category_base__s420x420_bd',
                    base__flexable: 'Category_base__flexable_b6',
                    background: 'Category_background_16',
                    border: 'Category_border_14',
                    icon: 'Category_icon_69',
                };
            let D, F;
            !(function (e) {
                (e.S100x100 = 's100x100'),
                    (e.S128x128 = 's128x128'),
                    (e.S180x180 = 's180x180'),
                    (e.S280x280 = 's280x280'),
                    (e.S360x360 = 's360x360'),
                    (e.S420x420 = 's420x420'),
                    (e.Flexable = 'flexable');
            })(D || (D = {})),
                (function (e) {
                    (e.s54x68 = 's54x68'),
                        (e.s68x82 = 's68x82'),
                        (e.s100x118 = 's100x118'),
                        (e.s156x182 = 's156x182'),
                        (e.s200x236 = 's200x236'),
                        (e.s250x278 = 's250x278');
                })(F || (F = {}));
            const T = R.images.gui.maps.icons.advanced_achievements,
                j = {
                    [D.S100x100]: F.s54x68,
                    [D.S128x128]: F.s68x82,
                    [D.S180x180]: F.s100x118,
                    [D.S280x280]: F.s156x182,
                    [D.S360x360]: F.s200x236,
                    [D.S420x420]: F.s250x278,
                },
                q = ({
                    keyName: e,
                    backgroundName: t,
                    size: a = D.S280x280,
                    level: n = 0,
                    isTrophy: s = !1,
                    classNames: i,
                }) => {
                    const c = a === D.Flexable ? D.S420x420 : a;
                    return r().createElement(
                        'div',
                        { className: o()(L.base, L[`base__${a}`], null == i ? void 0 : i.base) },
                        r().createElement('div', {
                            className: o()(L.background, null == i ? void 0 : i.background),
                            style: { backgroundImage: `url(${T.backgrounds.category.$dyn(`${t}_${c}`)})` },
                        }),
                        r().createElement('div', {
                            className: o()(L.border, null == i ? void 0 : i.border),
                            style: {
                                backgroundImage: `url(${T.borders.category.$dyn(s ? `trophy_${c}` : `tier_${n}_${c}`)})`,
                            },
                        }),
                        r().createElement('div', {
                            className: o()(L.icon, null == i ? void 0 : i.icon),
                            style: { backgroundImage: `url(${T.icons.category.$dyn(`${e}_${n}_${j[c]}`)})` },
                        }),
                    );
                },
                V = {
                    base: 'Subcategory_base_7c',
                    base__s100x100: 'Subcategory_base__s100x100_23',
                    base__s128x128: 'Subcategory_base__s128x128_f2',
                    base__s180x180: 'Subcategory_base__s180x180_84',
                    base__s280x280: 'Subcategory_base__s280x280_eb',
                    base__s360x360: 'Subcategory_base__s360x360_dc',
                    base__s420x420: 'Subcategory_base__s420x420_1e',
                    base__s480x480: 'Subcategory_base__s480x480_2a',
                    base__flexable: 'Subcategory_base__flexable_06',
                    background: 'Subcategory_background_68',
                    border: 'Subcategory_border_74',
                    icon: 'Subcategory_icon_17',
                };
            var U = a(587);
            const X = R.images.gui.maps.icons.advanced_achievements,
                W = {
                    [U.X.S100x100]: U.y.s52x62,
                    [U.X.S128x128]: U.y.s68x72,
                    [U.X.S180x180]: U.y.s94x94,
                    [U.X.S280x280]: U.y.s144x140,
                    [U.X.S360x360]: U.y.s188x176,
                    [U.X.S420x420]: U.y.s218x212,
                    [U.X.S480x480]: U.y.s250x198,
                },
                H = ({
                    keyName: e,
                    backgroundName: t,
                    size: a = U.X.S280x280,
                    level: n = 0,
                    isTrophy: s = !1,
                    classNames: i,
                }) => {
                    const c = a === U.X.Flexable ? U.X.S480x480 : a;
                    return r().createElement(
                        'div',
                        { className: o()(V.base, V[`base__${a}`], null == i ? void 0 : i.base) },
                        r().createElement('div', {
                            className: o()(V.background, null == i ? void 0 : i.background),
                            style: { backgroundImage: `url(${X.backgrounds.subcategory.$dyn(`${t}_${c}`)})` },
                        }),
                        r().createElement('div', {
                            className: o()(V.border, null == i ? void 0 : i.border),
                            style: {
                                backgroundImage: `url(${X.borders.subcategory.$dyn(s ? `trophy_${c}` : `tier_${n}_${c}`)})`,
                            },
                        }),
                        r().createElement('div', {
                            className: o()(V.icon, null == i ? void 0 : i.icon),
                            style: { backgroundImage: `url(${X.icons.subcategory.$dyn(`${e}_${n}_${W[c]}`)})` },
                        }),
                    );
                },
                J = { [l.Cq.Single]: k.Single, [l.Cq.Staged]: k.Staged, [l.Cq.Cumulative]: k.Cumulative },
                Q = ({
                    keyName: e,
                    type: t,
                    backgroundName: a,
                    size: n,
                    level: s,
                    stage: o,
                    isTrophy: i,
                    iconPosition: c,
                    iconSizeMap: m,
                    classNames: _,
                }) => {
                    switch (t) {
                        case l.Cq.Category:
                            return r().createElement(q, {
                                keyName: e,
                                backgroundName: a,
                                size: n,
                                level: s,
                                isTrophy: i,
                                classNames: _,
                            });
                        case l.Cq.Subcategory:
                            return r().createElement(H, {
                                keyName: e,
                                backgroundName: a,
                                size: n,
                                level: s,
                                isTrophy: i,
                                classNames: _,
                            });
                        case l.Cq.Single:
                        case l.Cq.Staged:
                        case l.Cq.Cumulative:
                            return r().createElement(M, {
                                keyName: e,
                                type: J[t],
                                backgroundName: a,
                                size: n,
                                level: s,
                                stage: o,
                                isTrophy: i,
                                iconPosition: c,
                                iconSizeMap: m,
                                classNames: _,
                            });
                        default:
                            return console.warn(`Unreachable code for type '${t}' in AchievementResolver.`), null;
                    }
                },
                Y = 'Vignette_base_c8',
                Z = 'Vignette_gradient_9a',
                K = 'Vignette_gradient__top_f3',
                ee = 'Vignette_gradient__right_d0',
                te = 'Vignette_gradient__bottom_1c',
                ae = 'Vignette_gradient__left_02',
                ne = { top: 0, right: 0, bottom: 0, left: 0 },
                re = { top: 20, right: 20, bottom: 20, left: 20 },
                se = { top: 20, right: 0, bottom: 20, left: 0 },
                oe = { top: 0, right: 20, bottom: 0, left: 20 },
                ie = (e, t, a, n) => {
                    const r = (0, m.getSize)('rem'),
                        s = r.height,
                        o = r.width,
                        i = ((e, t, a) => {
                            switch (e) {
                                case _.cJ.ExtraLarge:
                                    return { heightGap: t === _.Aq.ExtraLarge ? 300 : 0, widthGap: 0 };
                                case _.cJ.Large:
                                    return {
                                        heightGap: t === _.Aq.Large ? 300 : 0,
                                        widthGap: a === _.fd.Large ? 320 : 0,
                                    };
                                case _.cJ.Medium:
                                    return {
                                        heightGap: t === _.Aq.Medium ? 150 : 0,
                                        widthGap: a === _.fd.Medium ? 320 : 0,
                                    };
                                case _.cJ.Small:
                                    return {
                                        heightGap: t === _.Aq.Small ? 130 : 0,
                                        widthGap: a === _.fd.Small ? 234 : 0,
                                    };
                                case _.cJ.ExtraSmall:
                                default:
                                    return {
                                        heightGap: t === _.Aq.ExtraSmall ? 100 : 0,
                                        widthGap: a === _.fd.ExtraSmall ? 342 : 0,
                                    };
                            }
                        })(e, t, a),
                        c = i.widthGap,
                        l = i.heightGap;
                    return (s > t + l && o > a + c) || n ? re : s > t + l ? se : o > a + c ? oe : ne;
                },
                ce = ({ vignetteConfig: e = ne }) =>
                    r().createElement(
                        'div',
                        { className: Y },
                        r().createElement('div', { className: o()(Z, K), style: { backgroundSize: `100% ${e.top}%` } }),
                        r().createElement('div', {
                            className: o()(Z, ee),
                            style: { backgroundSize: `${e.right}% 100%` },
                        }),
                        r().createElement('div', {
                            className: o()(Z, te),
                            style: { backgroundSize: `100% ${e.bottom}%` },
                        }),
                        r().createElement('div', {
                            className: o()(Z, ae),
                            style: { backgroundSize: `${e.left}% 100%` },
                        }),
                    );
            var le = a(1645),
                me = a(3215),
                _e = a(4598),
                ue = a(9480),
                de = a(9174),
                ge = a(3946);
            let be;
            !(function (e) {
                (e.Init = 'init'),
                    (e.Category = 'category'),
                    (e.Score = 'score'),
                    (e.GeneralPercent = 'generalPercent');
            })(be || (be = {}));
            const pe = (0, me.q)()(
                    ({ observableModel: e }) => {
                        const t = {
                                root: e.object(),
                                upcomingAchievements: e.array('upcomingAchievements'),
                                subcategories: e.array('subcategories'),
                                trophy: e.object('trophy'),
                                animationState: de.LO.box(be.Init),
                            },
                            a = (0, ge.Om)(() => ue.v(t.upcomingAchievements.get(), (e) => Object.assign({}, e)), {
                                equals: _e.jv,
                            }),
                            n = (0, ge.Om)(
                                (e) => {
                                    const t = ue.U2(a(), e);
                                    if (t) return t;
                                    throw new Error(`Unexpected upcoming achievement index: ${e}`);
                                },
                                { equals: _e.jv },
                            ),
                            r = (0, ge.Om)(() => ue.v(t.subcategories.get(), (e) => Object.assign({}, e)), {
                                equals: _e.jv,
                            }),
                            s = (0, ge.Om)(
                                (e) => {
                                    const t = ue.U2(r(), e);
                                    if (t) return t;
                                    throw new Error(`Unexpected subcategory index: ${e}`);
                                },
                                { equals: _e.jv },
                            ),
                            o = (0, ge.Om)(() => {
                                var e;
                                return null !=
                                    (e = (0, ue.kd)(r(), ({ achievementScore: e, prevAchievementScore: t }) => e !== t))
                                    ? e
                                    : 0;
                            });
                        return Object.assign({}, t, {
                            computes: {
                                upcomingLength: (0, ge.Om)(() => a().length),
                                subcategoriesLength: (0, ge.Om)(() => r().length),
                                getUpcomingAchievement: n,
                                getSubcategory: s,
                                getLastIndex: o,
                            },
                        });
                    },
                    ({ externalModel: e, model: t }) => ({
                        goToTrophies: e.createCallbackNoArgs('onOpenTrophies'),
                        goToDetails: e.createCallback(
                            (e, t) => ({ achievementId: e, achievementCategory: t }),
                            'onOpenDetails',
                        ),
                        cupClick: e.createCallbackNoArgs('onCupClick'),
                        allAnimationEnd: e.createCallbackNoArgs('onAllAnimationEnd'),
                        animationInProgress: e.createCallback(
                            (e) => ({ isAnimationInProgress: e }),
                            'onAnimationInProgress',
                        ),
                        screenClick: e.createCallback((e, t) => ({ posX: e, posY: t }), 'onScreenClick'),
                        setAnimationState: (0, de.aD)((e) => {
                            t.animationState.set(e);
                        }),
                        achievementHover: e.createCallback(
                            (e, t) => ({ achievementId: e, achievementCategory: t }),
                            'onAchievementHover',
                        ),
                    }),
                ),
                he = pe[0],
                ve = pe[1];
            var ye = a(2372),
                fe = a(9766),
                Se = a(7522),
                Ee = a(7030);
            const xe = {
                    base: 'AchievementsScore_base_a4',
                    amount: 'AchievementsScore_amount_68',
                    count: 'AchievementsScore_count_26',
                    count__blur: 'AchievementsScore_count__blur_be',
                    countGlow: 'AchievementsScore_countGlow_5f',
                    base__animation: 'AchievementsScore_base__animation_34',
                    base__grade_1: 'AchievementsScore_base__grade_1_aa',
                    base__grade_2: 'AchievementsScore_base__grade_2_b6',
                    base__grade_3: 'AchievementsScore_base__grade_3_ac',
                    shine: 'AchievementsScore_shine_60',
                    label: 'AchievementsScore_label_5c',
                    glowWrapper: 'AchievementsScore_glowWrapper_e3',
                    glow: 'AchievementsScore_glow_6c',
                    pulse: 'AchievementsScore_pulse_59',
                },
                Ne = R.strings.achievements_page.category.achievementsScore,
                Ae = 'grade_1',
                we = 'grade_2',
                Ce = 'grade_3',
                ke = (0, b.Pi)(({ className: e }) => {
                    const t = ve(),
                        a = t.model,
                        s = t.controls,
                        i = a.root.get(),
                        c = i.prevAchievementsScore,
                        l = i.achievementsScore,
                        m = (0, n.useState)(c),
                        _ = m[0],
                        u = m[1],
                        g = (0, n.useState)(!1),
                        b = g[0],
                        p = g[1],
                        h = a.animationState.get(),
                        v = ((e, t) => {
                            const a = e - t;
                            return a >= 500
                                ? { name: Ae, duration: 4e3, sound: R.sounds.ach_cup_score_long() }
                                : a >= 50
                                  ? { name: we, duration: 3e3, sound: R.sounds.ach_cup_score_med() }
                                  : { name: Ce, duration: 2e3, sound: R.sounds.ach_cup_score_short() };
                        })(l, c),
                        y = (0, Ee.useSpring)(() => ({
                            progress: 0,
                            onStart: () => {
                                p(!0), (0, d.G)(v.sound);
                            },
                            onChange: (e) => {
                                u(Math.floor(e.value.progress));
                            },
                            onRest: () => {
                                p(!1), s.setAnimationState(be.Init), s.animationInProgress(!1), s.allAnimationEnd();
                            },
                        }))[1];
                    return (
                        (0, n.useEffect)(() => {
                            l !== c &&
                                0 !== l &&
                                h === be.Score &&
                                y.start({
                                    from: { progress: c },
                                    to: { progress: l },
                                    config: { duration: v.duration, easing: Se.Z.easeInOutCubic },
                                });
                        }, [l, y, v.duration, h, c]),
                        r().createElement(
                            'div',
                            { className: o()(xe.base, b && xe.base__animation, xe[`base__${v.name}`], e) },
                            r().createElement('div', { className: xe.shine }),
                            r().createElement(
                                'div',
                                { className: xe.amount },
                                r().createElement(
                                    'div',
                                    { className: xe.count },
                                    r().createElement(ye.A, { value: _, format: 'integral' }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: xe.countGlow },
                                    r().createElement(ye.A, { value: _, format: 'integral' }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: o()(xe.count, xe.count__blur) },
                                    r().createElement(ye.A, { value: _, format: 'integral' }),
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: xe.label },
                                r().createElement(
                                    'div',
                                    { className: xe.glowWrapper },
                                    r().createElement('div', { className: xe.glow }),
                                ),
                                r().createElement(fe.z, { text: Ne.title() }),
                            ),
                        )
                    );
                }),
                $e = 'CategoryProgress_base_51',
                Pe = 'CategoryProgress_count_91',
                Ie = 'CategoryProgress_count__symbol_5c',
                Re = (0, b.Pi)(({ className: e }) => {
                    const t = ve(),
                        a = t.model,
                        s = t.controls,
                        i = a.root.get(),
                        c = i.categoryProgress,
                        l = i.prevCategoryProgress,
                        m = (0, n.useState)(l),
                        _ = m[0],
                        u = m[1],
                        d = a.animationState.get(),
                        g = (0, Ee.useSpring)(() => ({
                            progress: 0,
                            onChange: (e) => {
                                u(Math.floor(e.value.progress));
                            },
                            onRest: () => s.setAnimationState(be.Score),
                        }))[1];
                    return (
                        (0, n.useEffect)(() => {
                            d === be.GeneralPercent &&
                                (c === l && s.setAnimationState(be.Score),
                                g.start({ from: { progress: l }, to: { progress: c } }));
                        }, [g, d, c, s, l]),
                        r().createElement(
                            'div',
                            { className: o()($e, e) },
                            r().createElement('div', { className: Pe }, _),
                            r().createElement('div', { className: o()(Pe, Ie) }, R.strings.common.common.percent()),
                        )
                    );
                }),
                ze = {
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
                Oe = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
            function Ge() {
                return (
                    (Ge =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = arguments[t];
                                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                            }
                            return e;
                        }),
                    Ge.apply(this, arguments)
                );
            }
            const Be = (e) => {
                let t = e.size,
                    a = e.value,
                    n = e.isEmpty,
                    s = e.fadeInAnimation,
                    i = e.hide,
                    c = e.maximumNumber,
                    l = e.className,
                    m = (function (e, t) {
                        if (null == e) return {};
                        var a,
                            n,
                            r = {},
                            s = Object.keys(e);
                        for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                        return r;
                    })(e, Oe);
                const _ = n ? null : a,
                    u = 'string' == typeof _;
                if ((_ && !u && _ < 0) || 0 === _) return null;
                const d = _ && !u && _ > c,
                    g = o()(
                        ze.base,
                        ze[`base__${t}`],
                        s && ze.base__animated,
                        i && ze.base__hidden,
                        !_ && ze.base__pattern,
                        n && ze.base__empty,
                        l,
                    );
                return r().createElement(
                    'div',
                    Ge({ className: g }, m),
                    r().createElement('div', { className: ze.bg }),
                    r().createElement('div', { className: ze.pattern }),
                    r().createElement(
                        'div',
                        { className: o()(ze.value, u && ze.value__text) },
                        d ? c : _,
                        d && r().createElement('span', { className: ze.plus }, '+'),
                    ),
                );
            };
            Be.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
            const Me = 1e3;
            var Le = a(44);
            const De = 'GlowWithMask_glowBox_e3',
                Fe = 'GlowWithMask_glowInner_c9',
                Te = 'GlowWithMask_glow_a5',
                je = R.images.gui.maps.icons.advanced_achievements.borders,
                qe = ({ currentValue: e, index: t, isTrophy: a, isOtherPlayer: s, isSkipAnimation: o }) => {
                    const i = (0, _.GS)().mediaSize,
                        c = (0, Ee.useSpring)(() => ({
                            from: { transform: 'translateX(-106%)' },
                            to: { transform: 'translateX(104%)' },
                            delay: 2e3 * (t + 1),
                            config: { duration: 1500, easing: Se.Z.easeOutQuad },
                            onStart: () => (0, d.G)(R.sounds.ach_sub_glare()),
                        })),
                        l = c[0],
                        m = c[1],
                        u = (0, n.useCallback)(() => {
                            m.start({
                                from: { transform: 'translateX(-106%)' },
                                to: { transform: 'translateX(104%)' },
                                delay: 2e3 * (t + 1),
                            });
                        }, [t, m]);
                    return (
                        (0, n.useEffect)(() => {
                            if (!o) {
                                const e = setInterval(u, 8e3);
                                return () => {
                                    clearInterval(e);
                                };
                            }
                        }, [u, o]),
                        r().createElement(
                            'div',
                            {
                                className: De,
                                style: {
                                    maskImage: `url(${a ? je.category.$dyn(`trophy_${i < _.cJ.Medium || s ? U.X.S100x100 : U.X.S180x180}`) : je.subcategory.$dyn(`tier_${(0, le.tf)(e)}_${(0, Le.d5)(i)}`)})`,
                                },
                            },
                            r().createElement(
                                Ee.animated.div,
                                { className: Fe, style: l },
                                r().createElement('div', { className: Te }),
                            ),
                        )
                    );
                },
                Ve = 'Trophy_base_28',
                Ue = 'Trophy_icon_60',
                Xe = 'Trophy_base__inactive_71',
                We = 'Trophy_icon__otherPlayer_4c',
                He = 'Trophy_content_8c',
                Je = 'Trophy_count_cb',
                Qe = 'Trophy_label_24',
                Ye = 'Trophy_counter_4c',
                Ze = R.strings.advanced_achievements,
                Ke = (0, b.Pi)(() => {
                    const e = ve(),
                        t = e.model,
                        a = e.controls,
                        n = t.root.get(),
                        s = n.isOtherPlayer,
                        c = n.isSkipAnimation,
                        u = t.trophy.get(),
                        g = u.key,
                        b = u.background,
                        p = u.currentValue,
                        h = u.prevValue,
                        v = u.bubbles,
                        y = (0, _.GS)().mediaSize,
                        f = s || 0 === p;
                    return r().createElement(
                        i.l,
                        {
                            tooltipArgs: {
                                header: Ze.tooltip.title.trophies(),
                                body: Ze.tooltip.description.trophies(),
                            },
                        },
                        r().createElement(
                            'div',
                            { className: o()(Ve, f && Xe) },
                            r().createElement(
                                'div',
                                {
                                    className: o()(Ue, s && We),
                                    onClick: () => {
                                        f || ((0, d.G)(R.sounds.ach_sign()), a.goToTrophies());
                                    },
                                    onMouseEnter: () => {
                                        f || (0, d.G)(R.sounds.ach_hover());
                                    },
                                },
                                r().createElement(Q, {
                                    keyName: g,
                                    backgroundName: b,
                                    type: l.Cq.Category,
                                    size: y < _.cJ.Large || s ? D.S100x100 : D.S180x180,
                                    isTrophy: !0,
                                }),
                                Boolean(v) &&
                                    r().createElement(
                                        'div',
                                        { className: Ye },
                                        r().createElement(Be, { value: v, isEmpty: 1 === v }),
                                    ),
                                m.graphicsQuality.isHigh() &&
                                    p !== h &&
                                    r().createElement(qe, {
                                        currentValue: p,
                                        index: t.computes.getLastIndex() + 1,
                                        isTrophy: !0,
                                        isOtherPlayer: s,
                                        isSkipAnimation: c,
                                    }),
                            ),
                            r().createElement(
                                'div',
                                { className: He },
                                r().createElement('div', { className: Je }, p),
                                r().createElement(
                                    'div',
                                    { className: Qe },
                                    systemLocale.toUpperCase(Ze.name.trophies()),
                                ),
                            ),
                        ),
                    );
                }),
                et = (e, t) => {
                    const a = [];
                    for (let n = 0; n < e; n++) a.push(t(n));
                    return a;
                };
            var tt = a(6373);
            const at = (e, t) => window.getComputedStyle(e, null).getPropertyValue(t),
                nt = (e, t, a) => {
                    const n = a.getContext('2d');
                    if (!n) return 0;
                    var r;
                    n.font = `${at((r = t), 'font-weight')} ${at(r, 'font-size')} ${at(r, 'font-family')}`;
                    return n.measureText(e).width;
                },
                rt = (e) => {
                    if (e.start >= e.end - 1) return e.start;
                    const t = Math.floor((e.start + e.end) / 2),
                        a = e.words.slice(0, t).join(' '),
                        n = Math.ceil(nt(a, e.element, e.canvas) / e.element.getBoundingClientRect().width);
                    return rt(n <= 1 ? Object.assign({}, e, { start: t }) : Object.assign({}, e, { end: t }));
                },
                st = 'MultilineOverflow_base_d9',
                ot = 'MultilineOverflow_base__truncated_a1',
                it = 'MultilineOverflow_text_ce',
                ct = 'MultilineOverflow_truncatedContent_da',
                lt = 'MultilineOverflow_singleLine_bb',
                mt = 'MultilineOverflow_line_51',
                _t = ['text', 'lines', 'className', 'onChange'];
            function ut() {
                return (
                    (ut =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = arguments[t];
                                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                            }
                            return e;
                        }),
                    ut.apply(this, arguments)
                );
            }
            const dt = (0, n.forwardRef)(function (e, t) {
                let a = e.text,
                    s = e.lines,
                    i = e.className,
                    c = e.onChange,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var a,
                            n,
                            r = {},
                            s = Object.keys(e);
                        for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                        return r;
                    })(e, _t);
                const m = (0, n.useRef)(null),
                    _ = (0, n.useRef)(null),
                    d = (0, n.useState)(!1),
                    g = d[0],
                    b = d[1],
                    p = (0, n.useState)([]),
                    h = p[0],
                    v = p[1],
                    y = (0, n.useState)(0),
                    f = y[0],
                    S = y[1],
                    E = (function () {
                        const e = (0, n.useRef)(0);
                        return (
                            (0, u.k)(() => {
                                window.cancelAnimationFrame(e.current);
                            }),
                            (0, n.useMemo)(
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
                    x = (0, n.useMemo)(() => document.createElement('canvas'), []),
                    N = (0, n.useCallback)(() => (_.current ? _.current.getBoundingClientRect().height : 0), []),
                    A = (0, n.useCallback)(
                        (e) => {
                            const t = N();
                            return e && t ? Math.round(e.scrollHeight / t) : 0;
                        },
                        [N],
                    ),
                    w = (0, n.useCallback)(() => {
                        if (A(m.current) <= s) return b(!1);
                        b(!0);
                        const e = a.split(' '),
                            t = Array.from(new Array(s)).reduce((t, a, n) => {
                                if (!m.current) return t;
                                const r = t.reduce((e, t) => e + t.length, 0),
                                    o = e.slice(r);
                                if (n === s - 1) return t.push(o), t;
                                const i = rt({ start: 0, end: o.length, words: o, element: m.current, canvas: x });
                                return t.push(o.slice(0, i)), t;
                            }, []);
                        v(t);
                    }, [x, A, s, a]),
                    C = (0, n.useCallback)(() => {
                        E.run(() => {
                            S(N() * s), w();
                        });
                    }, [N, s, E, w]);
                var k, $;
                return (
                    (0, n.useEffect)(C, [C]),
                    (k = C),
                    ($ = [C]),
                    (0, n.useEffect)(
                        () => (window.addEventListener('resize', k), () => window.removeEventListener('resize', k)),
                        $,
                    ),
                    (0, n.useEffect)(() => {
                        null == c || c(g);
                    }, [c, g]),
                    r().createElement(
                        'div',
                        ut({}, l, { ref: t, className: o()(st, i, g && ot) }),
                        r().createElement('div', { ref: m, className: it, style: { maxHeight: `${f}rem` } }, a),
                        r().createElement(
                            'div',
                            { className: ct },
                            h.map((e, t) => r().createElement('div', { key: t, className: mt }, e.join(' '))),
                        ),
                        r().createElement('div', { ref: _, className: lt }, R.strings.common.common.dot()),
                    )
                );
            });
            function gt() {
                return (
                    (gt =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = arguments[t];
                                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                            }
                            return e;
                        }),
                    gt.apply(this, arguments)
                );
            }
            const bt = (0, n.forwardRef)(function (e, t) {
                const a = (0, n.useState)(!1),
                    s = a[0],
                    o = a[1];
                return r().createElement(
                    tt.i,
                    { isEnabled: s, body: e.text },
                    r().createElement(dt, gt({}, e, { ref: t, onChange: o })),
                );
            });
            var pt = a(6349);
            let ht;
            !(function (e) {
                (e.Percentage = 'percentage'), (e.Stepped = 'stepped');
            })(ht || (ht = {}));
            var vt = a(9690);
            const yt = {
                base: 'ProgressBar_base_45',
                base__small: 'ProgressBar_base__small_df',
                background: 'ProgressBar_background_51',
                background__small: 'ProgressBar_background__small_46',
                lineWrapper: 'ProgressBar_lineWrapper_6a',
            };
            let ft, St;
            !(function (e) {
                (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
            })(ft || (ft = {})),
                (function (e) {
                    (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                })(St || (St = {}));
            const Et = ({ size: e = ft.Default }) => {
                    const t = o()(yt.background, yt[`background__${e}`]);
                    return r().createElement('div', { className: t });
                },
                xt = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                Nt = ({ size: e }) => {
                    const t = o()(xt.base, xt[`base__${e}`]);
                    return r().createElement('div', { className: t });
                },
                At = {
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
                wt = (0, n.memo)(
                    ({ size: e, lineRef: t, disabled: a, baseStyles: n, isComplete: s, withoutBounce: i }) => {
                        const c = o()(
                                At.base,
                                At[`base__${e}`],
                                a && At.base__disabled,
                                s && At.base__finished,
                                i && At.base__withoutBounce,
                            ),
                            l = !a && !s;
                        return r().createElement(
                            'div',
                            { className: c, style: n, ref: t },
                            r().createElement('div', { className: At.pattern }),
                            r().createElement('div', { className: At.gradient }),
                            l && r().createElement(Nt, { size: e }),
                        );
                    },
                ),
                Ct = ({ size: e, value: t, lineRef: a, disabled: s, onComplete: o }) => {
                    const i = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                        c = 100 === t;
                    return (
                        (0, n.useEffect)(() => {
                            c && o && o();
                        }, [c, o]),
                        r().createElement(wt, { size: e, disabled: s, baseStyles: i, isComplete: c, lineRef: a })
                    );
                };
            var kt = a(122);
            let $t, Pt;
            !(function (e) {
                (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
            })($t || ($t = {})),
                (function (e) {
                    (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                })(Pt || (Pt = {}));
            const It = 'ProgressBarDeltaSimple_base_6c',
                Rt = 'ProgressBarDeltaSimple_delta_99',
                zt = (0, n.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: t,
                        freezed: a,
                        from: s,
                        size: o,
                        to: i,
                        onEndAnimation: c,
                        onChangeAnimationState: l,
                    }) => {
                        const m = i < s,
                            _ = (0, n.useState)(Pt.Idle),
                            u = _[0],
                            d = _[1],
                            g = u === Pt.In,
                            b = u === Pt.End,
                            p = u === Pt.Idle,
                            h = (0, n.useCallback)(
                                (e) => {
                                    d(e), l && l(e);
                                },
                                [l],
                            );
                        (0, n.useEffect)(() => {
                            if (p && !a) {
                                const e = t;
                                return (0, kt.F)(() => {
                                    h(Pt.In);
                                }, e);
                            }
                        }, [h, a, p, t]),
                            (0, n.useEffect)(() => {
                                if (g) {
                                    const a = e + t;
                                    return (0, kt.F)(() => {
                                        c && c(), h(Pt.End);
                                    }, a);
                                }
                            }, [h, g, c, t, e]);
                        const v = (0, n.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [m ? 'left' : 'right']: '0',
                                }),
                                [m, t, e],
                            ),
                            y = (0, n.useMemo)(
                                () => ({
                                    width: '0%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [m ? 'left' : 'right']: '0',
                                }),
                                [m, t, e],
                            ),
                            f = (0, n.useMemo)(
                                () => ({ width: `${Math.abs(s - i)}%`, left: `${m ? i : s}%` }),
                                [s, m, i],
                            );
                        return b
                            ? null
                            : r().createElement(
                                  'div',
                                  { className: It, style: f },
                                  r().createElement(
                                      'div',
                                      { style: p ? v : y, className: Rt },
                                      r().createElement(Nt, { size: o }),
                                  ),
                              );
                    },
                ),
                Ot = (0, n.memo)(
                    ({
                        to: e,
                        size: t,
                        from: a,
                        lineRef: s,
                        disabled: o,
                        isComplete: i,
                        animationSettings: c,
                        onChangeAnimationState: l,
                        onEndAnimation: m,
                    }) => {
                        const _ = (0, n.useMemo)(
                            () => ({
                                width: `${e}%`,
                                transitionDuration: `${c.line.duration}ms`,
                                transitionDelay: `${c.line.delay}ms`,
                            }),
                            [c.line.delay, c.line.duration, e],
                        );
                        return r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(wt, { size: t, lineRef: s, disabled: o, isComplete: i, baseStyles: _ }),
                            a >= 0 &&
                                r().createElement(zt, {
                                    transitionDuration: c.delta.duration,
                                    transitionDelay: c.delta.delay,
                                    freezed: c.freezed,
                                    from: a,
                                    size: t,
                                    to: e,
                                    onChangeAnimationState: l,
                                    onEndAnimation: m,
                                }),
                        );
                    },
                ),
                Gt = 'ProgressBarDeltaGrow_base_7e',
                Bt = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                Mt = 'ProgressBarDeltaGrow_glow_68',
                Lt = (e) => (e ? { left: 0 } : { right: 0 }),
                Dt = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                Ft = (e) => ({ transitionDuration: `${e}ms` }),
                Tt = (0, n.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: t,
                        freezed: a,
                        from: s,
                        size: i,
                        to: c,
                        onEndAnimation: l,
                        onChangeAnimationState: m,
                        className: _,
                    }) => {
                        const u = c < s,
                            d = (0, n.useState)($t.Idle),
                            g = d[0],
                            b = d[1],
                            p = g === $t.End,
                            h = g === $t.Idle,
                            v = g === $t.Grow,
                            y = g === $t.Shrink,
                            f = (0, n.useCallback)(
                                (e) => {
                                    b(e), m && m(e);
                                },
                                [m],
                            ),
                            S = (0, n.useCallback)(
                                (e, t) =>
                                    (0, kt.F)(() => {
                                        f(e);
                                    }, t),
                                [f],
                            );
                        (0, n.useEffect)(() => {
                            if (!a)
                                return h
                                    ? S($t.Grow, t)
                                    : v
                                      ? S($t.Shrink, e)
                                      : y
                                        ? S($t.End, e)
                                        : void (p && l && l());
                        }, [S, a, p, v, h, y, l, t, e]);
                        const E = (0, n.useMemo)(() => Object.assign({ width: '100%' }, Ft(e), Lt(u)), [u, e]),
                            x = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Ft(e), Lt(u)), [u, e]),
                            N = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Dt(u, s), Ft(e)), [s, u, e]),
                            A = (0, n.useMemo)(
                                () => Object.assign({ width: `${Math.abs(c - s)}%` }, Dt(u, s), Ft(e)),
                                [s, u, c, e],
                            );
                        if (p) return null;
                        const w = o()(Gt, _, u && 0 === c && Bt);
                        return r().createElement(
                            'div',
                            { style: h ? N : A, className: w },
                            r().createElement(
                                'div',
                                { style: y ? x : E, className: Mt },
                                r().createElement(Nt, { size: i }),
                            ),
                        );
                    },
                ),
                jt = (0, n.memo)(
                    ({
                        to: e,
                        size: t,
                        from: a,
                        lineRef: s,
                        disabled: o,
                        isComplete: i,
                        animationSettings: c,
                        onEndAnimation: l,
                        onChangeAnimationState: m,
                    }) => {
                        const _ = e < a,
                            u = (0, n.useState)(!1),
                            d = u[0],
                            g = u[1],
                            b = (0, n.useCallback)(
                                (e) => {
                                    e === $t.Shrink && g(!0), m && m(e);
                                },
                                [m],
                            ),
                            p = (0, n.useMemo)(() => ({ width: `${a}%`, transitionProperty: 'none' }), [a]),
                            h = (0, n.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${c.line.duration}ms` }),
                                [c.line.duration, e],
                            );
                        return r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(wt, {
                                size: t,
                                lineRef: s,
                                disabled: o,
                                isComplete: i,
                                withoutBounce: _ && 0 === e,
                                baseStyles: d ? h : p,
                            }),
                            a >= 0 &&
                                r().createElement(Tt, {
                                    transitionDuration: c.delta.duration,
                                    transitionDelay: c.delta.delay,
                                    onChangeAnimationState: b,
                                    freezed: c.freezed,
                                    onEndAnimation: l,
                                    from: a,
                                    size: t,
                                    to: e,
                                    className: c.delta.className,
                                }),
                        );
                    },
                ),
                qt = ['onComplete', 'onEndAnimation'];
            function Vt() {
                return (
                    (Vt =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = arguments[t];
                                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                            }
                            return e;
                        }),
                    Vt.apply(this, arguments)
                );
            }
            const Ut = (0, n.memo)((e) => {
                    let t = e.onComplete,
                        a = e.onEndAnimation,
                        s = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, qt);
                    const o = (0, n.useState)(!1),
                        i = o[0],
                        c = o[1],
                        l = (0, n.useCallback)(() => {
                            const e = 100 === s.to;
                            e !== i && c(e), e && t && t(), a && a();
                        }, [i, t, a, s.to]);
                    switch (s.animationSettings.type) {
                        case St.Simple:
                            return r().createElement(Ot, Vt({}, s, { onEndAnimation: l, isComplete: i }));
                        case St.Growing:
                            return r().createElement(jt, Vt({}, s, { onEndAnimation: l, isComplete: i }));
                        default:
                            return null;
                    }
                }),
                Xt = ['onEndAnimation'];
            function Wt() {
                return (
                    (Wt =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = arguments[t];
                                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                            }
                            return e;
                        }),
                    Wt.apply(this, arguments)
                );
            }
            const Ht = (0, n.memo)((e) => {
                let t = e.onEndAnimation,
                    a = (function (e, t) {
                        if (null == e) return {};
                        var a,
                            n,
                            r = {},
                            s = Object.keys(e);
                        for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                        return r;
                    })(e, Xt);
                const s = (0, n.useRef)({}),
                    o = (0, n.useCallback)(() => {
                        (s.current.from = void 0), t && t();
                    }, [t]),
                    i = 'number' == typeof s.current.from ? s.current.from : a.from;
                return (
                    (s.current.from = i),
                    r().createElement(Ut, Wt({}, a, { onEndAnimation: o, key: `${i}-${a.to}`, from: i }))
                );
            });
            function Jt() {
                return (
                    (Jt =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = arguments[t];
                                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                            }
                            return e;
                        }),
                    Jt.apply(this, arguments)
                );
            }
            const Qt = (0, n.memo)(
                    ({
                        size: e,
                        value: t,
                        lineRef: a,
                        disabled: n,
                        deltaFrom: s,
                        animationSettings: o,
                        onEndAnimation: i,
                        onChangeAnimationState: c,
                        onComplete: l,
                    }) => {
                        if (s === t)
                            return r().createElement(Ct, {
                                key: `${s}-${t}`,
                                size: e,
                                value: t,
                                lineRef: a,
                                disabled: n,
                                onComplete: l,
                            });
                        const m = {
                            from: s,
                            to: t,
                            size: e,
                            lineRef: a,
                            disabled: n,
                            animationSettings: o,
                            onComplete: l,
                            onEndAnimation: i,
                            onChangeAnimationState: c,
                        };
                        return o.withStack
                            ? r().createElement(Ht, m)
                            : r().createElement(Ut, Jt({ key: `${s}-${t}` }, m));
                    },
                ),
                Yt = (e) => ({
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
            var Zt = a(7515);
            const Kt = (e, t, a) => {
                    if ('number' == typeof a) {
                        return ((0, Zt.u)(0, t, a) / t) * 100;
                    }
                    return e;
                },
                ea = {
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
                ta = {
                    freezed: !1,
                    withStack: !1,
                    type: St.Growing,
                    delta: { duration: 500, delay: 0 },
                    line: { duration: 500, delay: 0 },
                },
                aa = (0, n.memo)(
                    ({
                        maxValue: e = 100,
                        theme: t = ea,
                        size: a = ft.Default,
                        animationSettings: s = ta,
                        disabled: i = !1,
                        withoutBackground: c = !1,
                        value: l,
                        deltaFrom: m,
                        lineRef: _,
                        onChangeAnimationState: u,
                        onEndAnimation: d,
                        onComplete: g,
                    }) => {
                        const b = ((e, t, a) =>
                            (0, n.useMemo)(() => {
                                const n = ((0, Zt.u)(0, t, e) / t) * 100;
                                return { value: n, deltaFrom: Kt(n, t, a) };
                            }, [a, t, e]))(l, e, m);
                        return r().createElement(
                            'div',
                            { className: o()(yt.base, yt[`base__${a}`]), style: Yt(t) },
                            !c && r().createElement(Et, { size: a }),
                            r().createElement(Qt, {
                                size: a,
                                lineRef: _,
                                disabled: i,
                                value: b.value,
                                deltaFrom: b.deltaFrom,
                                animationSettings: s,
                                onEndAnimation: d,
                                onChangeAnimationState: u,
                                onComplete: g,
                            }),
                        );
                    },
                ),
                na = 'Progress_base_37',
                ra = 'Progress_caption_37',
                sa = 'Progress_steppedText_6a',
                oa = 'Progress_separator_d1',
                ia = 'Progress_accentText_1c',
                ca = ({ progressType: e, currentValue: t, maxValue: a, classNames: n, className: s }) =>
                    r().createElement(
                        'div',
                        { className: o()(na, s) },
                        r().createElement(aa, { value: t, maxValue: a, size: ft.Small }),
                        r().createElement(
                            'div',
                            { className: o()(ra, null == n ? void 0 : n.caption) },
                            e === ht.Stepped
                                ? r().createElement(
                                      'div',
                                      { className: sa },
                                      r().createElement('div', { className: ia }, t),
                                      r().createElement('div', { className: oa }, '/'),
                                      a,
                                  )
                                : r().createElement(
                                      'div',
                                      { className: ia },
                                      (0, g.uF)(R.strings.common.percentValue(), { value: t }),
                                  ),
                        ),
                    ),
                la = {
                    base: 'UpcomingItem_base_40',
                    base__otherPlayer: 'UpcomingItem_base__otherPlayer_57',
                    icon: 'UpcomingItem_icon_90',
                    wrapper: 'UpcomingItem_wrapper_43',
                    progressBar: 'UpcomingItem_progressBar_7c',
                    progressCaption: 'UpcomingItem_progressCaption_b9',
                    holder: 'UpcomingItem_holder_67',
                    title: 'UpcomingItem_title_69',
                    description: 'UpcomingItem_description_d0',
                },
                ma = R.strings.advanced_achievements,
                _a = (0, b.Pi)(({ index: e, size: t, className: a }) => {
                    const n = ve(),
                        s = n.model,
                        i = n.controls,
                        c = s.root.get().isOtherPlayer,
                        l = s.computes.getUpcomingAchievement(e),
                        m = l.key,
                        _ = l.maxValue,
                        u = l.currentValue,
                        b = l.background,
                        p = l.type,
                        h = l.id,
                        v = l.category,
                        y = l.stage,
                        f = l.iconPosition,
                        S = l.iconSizeMap,
                        E = l.specificItemName,
                        x = l.isResearchable,
                        N = l.specificItemLevel,
                        A = x
                            ? (0, g.uF)(R.strings.advanced_achievements.collectVehicle(), { item: E })
                            : (0, g.uF)((0, g.z4)(ma.description.$plural(m, _)), { maxValue: _, level: (0, vt.HG)(N) });
                    return r().createElement(
                        'div',
                        {
                            onClick: () => {
                                c || ((0, d.G)(R.sounds.ach_sign()), i.goToDetails(h, v));
                            },
                            onMouseEnter: () => {
                                c || (0, d.G)(R.sounds.ach_hover());
                            },
                            className: o()(la.base, c && la.base__otherPlayer, a),
                        },
                        r().createElement(
                            'div',
                            { className: la.wrapper },
                            r().createElement(Q, {
                                keyName: m,
                                backgroundName: b,
                                type: p,
                                level: (0, le.tf)((0, le.bV)(u, _)),
                                size: t,
                                stage: y,
                                iconPosition: f,
                                iconSizeMap: S,
                                classNames: { base: la.icon, stage: la.stage },
                            }),
                            !c &&
                                r().createElement(ca, {
                                    progressType: ht.Stepped,
                                    classNames: { caption: la.progressCaption },
                                    className: la.progressBar,
                                    currentValue: u,
                                    maxValue: _,
                                }),
                        ),
                        r().createElement(
                            'div',
                            { className: o()(la.holder, c && la.base__otherPlayer) },
                            r().createElement(
                                'div',
                                { className: la.title },
                                r().createElement(pt.l, {
                                    content:
                                        'staged' === p
                                            ? (0, le.Mu)(p, y, ma.name.$dyn(m))
                                            : `${(0, g.z4)(ma.name.$dyn(m))}`,
                                }),
                            ),
                            r().createElement(bt, { className: la.description, text: A, lines: 2 }),
                        ),
                    );
                }),
                ua = 'UpcomingList_base_e2',
                da = 'UpcomingList_label_b6',
                ga = 'UpcomingList_base__otherPlayer_8d',
                ba = 'UpcomingList_item_d2',
                pa = 'UpcomingList_base__specificResolution_19',
                ha = R.strings.achievements_page.category,
                va = (0, b.Pi)(() => {
                    const e = ve().model,
                        t = e.root.get().isOtherPlayer,
                        a = (0, _.GS)(),
                        n = a.mediaSize,
                        s = a.mediaWidth,
                        i = a.mediaHeight,
                        c = n > _.cJ.ExtraSmall && !t ? 2 : 1,
                        l = s === _.fd.ExtraLarge && i === _.Aq.Large && !t;
                    return r().createElement(
                        'div',
                        { className: o()(ua, t && ga, l && pa) },
                        r().createElement(
                            'div',
                            { className: da },
                            r().createElement(fe.z, { text: t ? ha.received.title() : ha.upcoming.title() }),
                        ),
                        et(e.computes.upcomingLength(), (e) => {
                            if (!(e > c))
                                return r().createElement(_a, {
                                    className: ba,
                                    index: e,
                                    key: e,
                                    size: (0, Le.pL)(n, t),
                                });
                        }),
                    );
                }),
                ya = 'Footer_base_2b',
                fa = 'Footer_base__leftAlign_ac',
                Sa = 'Footer_trophy_b6',
                Ea = 'Footer_upcomingList__otherPlayer_b4',
                xa = 'Footer_upcomingList_a1',
                Na = (0, b.Pi)(({ className: e }) => {
                    const t = ve().model,
                        a = t.root.get().isOtherPlayer,
                        n = t.computes.upcomingLength,
                        s = (0, _.GS)().mediaSize,
                        i = n() < 2 || (n() < 3 && s > _.cJ.ExtraSmall && !a);
                    return r().createElement(
                        'div',
                        { className: o()(ya, i && fa, e) },
                        r().createElement('div', { className: Sa }, r().createElement(Ke, null)),
                        Boolean(n()) &&
                            r().createElement('div', { className: o()(xa, a && Ea) }, r().createElement(va, null)),
                    );
                }),
                Aa = 'SubcategoryAnimationItem_base_b3',
                wa = 'SubcategoryAnimationItem_particlesAnim_7c',
                Ca = 'SubcategoryAnimationItem_oldElement_e1',
                ka = 'SubcategoryAnimationItem_newElement_26',
                $a = ({ oldElement: e, newElement: t, isStart: a, index: s, onAnimationEnd: o, onPlaySound: i }) => {
                    const l = (0, n.useRef)(null),
                        m = (0, n.useRef)(null),
                        _ = (0, n.useState)(!0),
                        u = _[0],
                        d = _[1],
                        g = (0, n.useRef)(null),
                        b = (0, Ee.useSpring)(() => ({
                            progress: 0,
                            onChange: (e) => {
                                if (!m.current || !l.current) return;
                                const t = e.value.progress;
                                (l.current.style.maskImage = `linear-gradient(237deg, transparent ${t}%, #000 ${t}%)`),
                                    (m.current.style.maskImage = `linear-gradient(237deg, #000 ${t}%, transparent ${t}%)`);
                            },
                            onRest: () => {
                                o(s);
                            },
                        }))[1];
                    return (
                        (0, n.useEffect)(() => {
                            if (a) {
                                const e = 400 * s;
                                return (
                                    b.start({
                                        from: { progress: 0 },
                                        to: { progress: 100 },
                                        delay: e,
                                        config: { duration: Me },
                                    }),
                                    (0, kt.F)(() => {
                                        var e;
                                        null == (e = g.current) || e.play(), i();
                                    }, e + 150)
                                );
                            }
                        }, [b, s, a, i]),
                        r().createElement(
                            'div',
                            { className: Aa },
                            u &&
                                r().createElement(c.n, {
                                    ref: g,
                                    onEnded: () => d(!1),
                                    className: wa,
                                    src: R.videos.achievements.grade_change_particles(),
                                }),
                            r().createElement('div', { className: Ca, ref: l }, e),
                            r().createElement('div', { className: ka, ref: m }, t),
                        )
                    );
                },
                Pa = 'SubcategoryProgress_amount_0a',
                Ia = 'SubcategoryProgress_quantity_02',
                Ra = 'SubcategoryProgress_quantity__symbol_00',
                za = 'SubcategoryProgress_name_1f',
                Oa = 'SubcategoryProgress_score_5c',
                Ga = 'SubcategoryProgress_scoreIcon_68',
                Ba = 'SubcategoryProgress_scoreCount_fd',
                Ma = 'SubcategoryProgress_progressBar_38',
                La = R.strings.achievements_page,
                Da = R.strings.advanced_achievements,
                Fa = (0, b.Pi)(({ index: e, onAnimationEnd: t }) => {
                    const a = ve().model,
                        s = a.root.get().isOtherPlayer,
                        c = a.computes.getSubcategory(e),
                        l = c.achievementScore,
                        m = c.prevAchievementScore,
                        u = c.prevValue,
                        b = c.currentValue,
                        p = c.key,
                        h = (0, _.GS)().mediaSize,
                        v = (0, n.useState)(u),
                        y = v[0],
                        f = v[1],
                        S = (0, n.useState)(s ? l : m),
                        E = S[0],
                        x = S[1],
                        N = (0, Ee.useSpring)(
                            () => ({
                                progress: m,
                                onChange: (e) => {
                                    x(e.value.progress);
                                },
                                onRest: () => {
                                    A.start({ from: { progress: u }, to: { progress: b } }), t();
                                },
                            }),
                            [b],
                        )[1],
                        A = (0, Ee.useSpring)(() => ({
                            progress: 0,
                            onStart: () => (0, d.G)(R.sounds.ach_progress_bar_start()),
                            onChange: (e) => {
                                f(Math.floor(e.value.progress));
                            },
                        }))[1];
                    return (
                        (0, n.useEffect)(() => {
                            s ||
                                N.start({
                                    from: { progress: m },
                                    to: { progress: l },
                                    delay: 1500 * e,
                                    config: { duration: 100 },
                                });
                        }, [l, N, e, s, m]),
                        r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(
                                'div',
                                { className: Pa },
                                r().createElement('div', { className: Ia }, y),
                                r().createElement('div', { className: o()(Ia, Ra) }, R.strings.common.common.percent()),
                            ),
                            r().createElement(
                                'div',
                                { className: za },
                                systemLocale.toUpperCase((0, g.z4)(Da.name.$dyn(p))),
                            ),
                            r().createElement(
                                'div',
                                { className: Ma },
                                r().createElement(aa, {
                                    value: b,
                                    deltaFrom: Math.min(u, b),
                                    size: h < _.cJ.Medium || s ? ft.Small : ft.Medium,
                                    animationSettings: {
                                        freezed: !1,
                                        withStack: !1,
                                        type: St.Growing,
                                        delta: { duration: 400, delay: 1500 * e },
                                        line: { duration: 400, delay: 0 },
                                    },
                                }),
                            ),
                            !s &&
                                r().createElement(
                                    i.l,
                                    {
                                        tooltipArgs: {
                                            header: La.achievementsPointsTooltip.header(),
                                            body: La.achievementsPointsTooltip.body(),
                                        },
                                    },
                                    r().createElement(
                                        'div',
                                        { className: Oa },
                                        r().createElement('div', { className: Ga }),
                                        r().createElement(
                                            'div',
                                            { className: Ba },
                                            r().createElement(ye.A, { value: E, format: 'integral' }),
                                        ),
                                    ),
                                ),
                        )
                    );
                }),
                Ta = 'SubcategoryProgressItem_base_de',
                ja = 'SubcategoryProgressItem_base__otherPlayer_ab',
                qa = 'SubcategoryProgressItem_iconWrapper_7f',
                Va = 'SubcategoryProgressItem_icon_ed',
                Ua = 'SubcategoryProgressItem_icon__oldElement_ba',
                Xa = 'SubcategoryProgressItem_content_cc',
                Wa = 'SubcategoryProgressItem_counter_36',
                Ha = 'SubcategoryProgressItem_counter__animated_5e',
                Ja = R.strings.advanced_achievements,
                Qa = (0, b.Pi)(({ className: e, index: t, onAnimationEnd: a }) => {
                    const s = ve(),
                        c = s.model,
                        u = s.controls,
                        g = c.root.get(),
                        b = g.isOtherPlayer,
                        p = g.isSkipAnimation,
                        h = (0, _.GS)().mediaSize,
                        v = c.computes.getSubcategory(t),
                        y = v.key,
                        f = v.background,
                        S = v.id,
                        E = v.prevAchievementScore,
                        x = v.prevValue,
                        N = v.category,
                        A = v.currentValue,
                        w = v.achievementScore,
                        C = v.bubbles,
                        k = (0, n.useState)(!1),
                        $ = k[0],
                        P = k[1],
                        I = E !== w;
                    return (
                        (0, n.useEffect)(() => {
                            $ && (0, le.tf)(A) === (0, le.tf)(x) && a(t);
                        }, [A, t, $, a, x]),
                        r().createElement(
                            'div',
                            {
                                className: o()(Ta, b && ja, e),
                                onClick: () => {
                                    ((e) => {
                                        b || u.goToDetails(e, N);
                                    })(S),
                                        (0, d.G)(R.sounds.ach_sign());
                                },
                                onMouseEnter: () => {
                                    b || ((0, d.G)(R.sounds.ach_hover()), u.achievementHover(S, N));
                                },
                            },
                            r().createElement(
                                i.l,
                                {
                                    tooltipArgs: {
                                        header: `${Ja.tooltip.title.$dyn(y)}`,
                                        body: `${Ja.tooltip.description.$dyn(y)}`,
                                    },
                                },
                                b
                                    ? r().createElement(Q, {
                                          keyName: y,
                                          backgroundName: f,
                                          type: l.Cq.Subcategory,
                                          level: (0, le.tf)(A),
                                          size: U.X.S180x180,
                                          classNames: { base: Va },
                                      })
                                    : r().createElement(
                                          'div',
                                          { className: qa },
                                          r().createElement($a, {
                                              oldElement: r().createElement(Q, {
                                                  keyName: y,
                                                  backgroundName: f,
                                                  type: l.Cq.Subcategory,
                                                  level: (0, le.tf)(x),
                                                  size: (0, Le.d5)(h),
                                                  classNames: { base: o()(Va, Ua) },
                                              }),
                                              newElement: r().createElement(
                                                  'div',
                                                  { className: Va },
                                                  r().createElement(Q, {
                                                      keyName: y,
                                                      backgroundName: f,
                                                      type: l.Cq.Subcategory,
                                                      level: (0, le.tf)(A),
                                                      size: (0, Le.d5)(h),
                                                      classNames: { base: Va },
                                                  }),
                                              ),
                                              isStart: $ && (0, le.tf)(A) !== (0, le.tf)(x),
                                              onAnimationEnd: a,
                                              onPlaySound: () => {
                                                  (0, le.tf)(A) !== Le.z6.Third
                                                      ? (0, d.G)(R.sounds.ach_sub_grade_low())
                                                      : (0, d.G)(R.sounds.ach_sub_grade_high());
                                              },
                                              index: t,
                                          }),
                                          m.graphicsQuality.isHigh() &&
                                              Boolean(C) &&
                                              (0, le.tf)(A) === (0, le.tf)(x) &&
                                              r().createElement(qe, { index: t, currentValue: A, isSkipAnimation: p }),
                                      ),
                            ),
                            r().createElement(
                                'div',
                                { className: Xa },
                                r().createElement(Fa, { index: t, onAnimationEnd: () => P(!0) }),
                            ),
                            Boolean(C) &&
                                r().createElement(
                                    'div',
                                    { className: o()(Wa, I && Ha), style: { animationDelay: Me * t + 1 + 'ms' } },
                                    r().createElement(Be, { value: C, isEmpty: 1 === C }),
                                ),
                        )
                    );
                }),
                Ya = {
                    base: 'SubcategoryList_base_60',
                    item: 'SubcategoryList_item_54',
                    base__specificResolution: 'SubcategoryList_base__specificResolution_17',
                },
                Za = (0, b.Pi)(() => {
                    const e = ve(),
                        t = e.model,
                        a = e.controls,
                        n = t.root.get(),
                        s = n.isOtherPlayer,
                        i = n.isSkipAnimation,
                        c = t.computes.getLastIndex(),
                        l = (0, _.GS)(),
                        m = l.mediaWidth,
                        u = l.mediaHeight,
                        d = m === _.fd.ExtraLarge && u === _.Aq.Large && !s,
                        g = (e) => {
                            c !== e || i || a.setAnimationState(be.GeneralPercent);
                        };
                    return r().createElement(
                        'div',
                        { className: o()(Ya.base, s && Ya.base__otherPlayer, d && Ya.base__specificResolution) },
                        et(t.computes.subcategoriesLength(), (e) =>
                            r().createElement(Qa, { key: e, index: e, className: Ya.item, onAnimationEnd: g }),
                        ),
                    );
                }),
                Ka = {
                    base: 'App_base_4c',
                    wrapper: 'App_wrapper_be',
                    base__otherPlayer: 'App_base__otherPlayer_97',
                    base__lowPreset: 'App_base__lowPreset_f6',
                    innerWrapper: 'App_innerWrapper_26',
                    video: 'App_video_95',
                    header: 'App_header_82',
                    content: 'App_content_c9',
                    quantity: 'App_quantity_ad',
                    name: 'App_name_6e',
                    achievementIcon: 'App_achievementIcon_20',
                    achievementIcon__grade0: 'App_achievementIcon__grade0_c4',
                    footer: 'App_footer_85',
                    cup: 'App_cup_f7',
                    cup__hover: 'App_cup__hover_bf',
                    base__specificResolution: 'App_base__specificResolution_65',
                    hoverWrapper: 'App_hoverWrapper_f2',
                    hoverArea: 'App_hoverArea_57',
                    achievementsScore: 'App_achievementsScore_de',
                },
                en = R.strings.achievements_page.category,
                tn = (0, n.memo)(function () {
                    return r().createElement(c.n, {
                        src: R.videos.achievements.bg_advanced_achievements(),
                        autoplay: !0,
                        loop: !0,
                        className: Ka.video,
                    });
                }),
                an = (0, b.Pi)(() => {
                    const e = ve(),
                        t = e.model,
                        a = e.controls,
                        s = t.root.get(),
                        c = s.achievementsScore,
                        b = s.prevAchievementsScore,
                        p = s.categoryProgress,
                        h = s.maxAchievementsScore,
                        v = s.isOtherPlayer,
                        f = s.categoryName,
                        S = s.categoryBackgroundName,
                        E = s.isSkipAnimation,
                        x = (0, _.GS)(),
                        N = x.mediaSize,
                        w = x.mediaHeight,
                        C = x.mediaWidth,
                        k = (0, n.useState)(!1),
                        $ = k[0],
                        P = k[1],
                        I = t.animationState.get(),
                        z = A(),
                        O = C === _.fd.ExtraLarge && w === _.Aq.Large && !v,
                        G = (0, le.tf)(p);
                    (0, u.b)(() => {
                        I === be.Init && c !== b && a.setAnimationState(be.Category);
                    }),
                        (0, n.useEffect)(() => {
                            c !== b && (a.setAnimationState(be.Category), a.animationInProgress(!0));
                        }, [c, a, b]),
                        (0, n.useEffect)(() => {
                            E && (a.setAnimationState(be.Init), a.animationInProgress(!1), a.allAnimationEnd());
                        }, [a, E]);
                    const B = ie(N, w, C);
                    return r().createElement(
                        'div',
                        {
                            className: o()(
                                Ka.base,
                                v && Ka.base__otherPlayer,
                                O && Ka.base__specificResolution,
                                m.graphicsQuality.isLow() && Ka.base__lowPreset,
                            ),
                            onClick: (e) =>
                                ((e) => {
                                    v && z(y.AnotherPlayer, e);
                                })(e),
                        },
                        r().createElement(
                            'div',
                            { className: Ka.wrapper },
                            m.graphicsQuality.isHigh() && !v && r().createElement(tn, null),
                            r().createElement(
                                'div',
                                { className: o()(Ka.achievementIcon, Ka[`achievementIcon__grade${G}`]) },
                                r().createElement(Q, {
                                    keyName: f,
                                    backgroundName: S,
                                    type: l.Cq.Category,
                                    level: G,
                                    size: v ? U.X.S280x280 : U.X.S420x420,
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: Ka.innerWrapper },
                                r().createElement(
                                    'div',
                                    { className: Ka.content },
                                    r().createElement(
                                        'div',
                                        { className: Ka.header },
                                        r().createElement(Re, { className: Ka.quantity }),
                                        r().createElement('div', { className: Ka.name }, en.title()),
                                    ),
                                    r().createElement(Za, null),
                                    r().createElement(
                                        i.l,
                                        {
                                            className: Ka.hoverWrapper,
                                            tooltipArgs: {
                                                header: (0, g.uF)(en.achievementsScore.tooltip.title(), {
                                                    value: c,
                                                    maxValue: h,
                                                }),
                                                body: en.achievementsScore.tooltip.description(),
                                            },
                                        },
                                        r().createElement('div', {
                                            className: Ka.hoverArea,
                                            onMouseEnter: () => {
                                                v || (P(!0), (0, d.G)(R.sounds.ach_cup_hover()));
                                            },
                                            onMouseLeave: () => P(!1),
                                            onClick: () => {
                                                v || (a.cupClick(), (0, d.G)(R.sounds.ach_cup_touch()));
                                            },
                                        }),
                                    ),
                                ),
                                r().createElement(Na, { className: Ka.footer }),
                                r().createElement(
                                    'div',
                                    { className: o()(Ka.cup, $ && Ka.cup__hover) },
                                    r().createElement(ke, { className: Ka.achievementsScore }),
                                ),
                            ),
                            !v && r().createElement(ce, { vignetteConfig: B }),
                        ),
                    );
                }),
                nn = { context: 'model.achievementsModel' },
                rn = () => r().createElement(he, { options: nn }, r().createElement(an, null));
        },
    },
]);
