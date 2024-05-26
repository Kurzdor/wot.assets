'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [248],
    {
        6413: (e, t, a) => {
            a.r(t), a.d(t, { default: () => nn });
            var n = a(6179),
                s = a.n(n),
                r = a(6483),
                o = a.n(r),
                i = a(3415),
                c = a(8432),
                l = a(974),
                m = a(5959),
                _ = a(5415);
            var u = a(7727),
                d = a(3649),
                g = a(3403);
            let b, p, h, v, y;
            !(function (e) {
                (e.Click = 'click'), (e.Display = 'display');
            })(b || (b = {})),
                (function (e) {
                    (e.Hangar = 'hangar'), (e.Catalog = 'catalog');
                })(p || (p = {})),
                (function (e) {
                    (e.Mouse = 'mouse'), (e.Esc = 'esc');
                })(h || (h = {})),
                (function (e) {
                    (e.AnotherPlayer = 'another_player_click'),
                        (e.TriggerHint = 'trigger_hint'),
                        (e.Close = 'close_button'),
                        (e.Catalog = 'catalog_button'),
                        (e.TankName = 'tank_name_single_achievement'),
                        (e.Breadcrumbs = 'bread_crumb');
                })(v || (v = {})),
                (function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(y || (y = {}));
            let f;
            !(function (e) {
                (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
            })(f || (f = {}));
            const S = 'metrics',
                E = ({ partnerID: e, item: t, parentScreen: a, itemState: n, info: s }) => ({
                    item: t,
                    partnerID: e || null,
                    parent_screen: a || null,
                    item_state: n || null,
                    additional_info: s || null,
                }),
                x = (e, t) => {
                    const a = (0, n.useCallback)(
                        (a, n = y.Info, s) => {
                            s || (s = {}),
                                Object.keys(s).length >= 200 ||
                                    window.uiLoggerModel.log({
                                        feature: e,
                                        group: t,
                                        action: a,
                                        logLevel: n,
                                        params: JSON.stringify(s),
                                    });
                        },
                        [e, t],
                    );
                    return (e, t, n) => a(e, t, n);
                },
                N = () => {
                    const e = ((e) => {
                        const t = x(e, S),
                            a = (0, n.useCallback)(
                                (e) => {
                                    t(e.action, e.logLevel, E(e));
                                },
                                [t],
                            );
                        return (e) => a(e);
                    })('advanced_achievement');
                    return (t, a) =>
                        e({
                            action: b.Click,
                            parentScreen: p.Hangar,
                            item: t,
                            info: JSON.stringify({ posX: a.clientX, posY: a.clientY }),
                        });
                },
                A = {
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
            var w = a(7888);
            let C;
            !(function (e) {
                (e.Single = 'single'), (e.Cumulative = 'cumulative'), (e.Staged = 'staged');
            })(C || (C = {}));
            const k = R.images.gui.maps.icons.advanced_achievements,
                $ = { [C.Single]: w.bn.Circular, [C.Staged]: w.bn.Circular, [C.Cumulative]: w.bn.Shield },
                P = {
                    [w.sg.S100x100]: w.Bw.s52x44,
                    [w.sg.S128x128]: w.Bw.s68x56,
                    [w.sg.S180x180]: w.Bw.s94x80,
                    [w.sg.S280x280]: w.Bw.s144x116,
                    [w.sg.S360x360]: w.Bw.s218x176,
                    [w.sg.S420x420]: w.Bw.s218x176,
                    [w.sg.Flexable]: w.Bw.s218x176,
                },
                I = {
                    [w.sg.S100x100]: w.Bw.s54x60,
                    [w.sg.S128x128]: w.Bw.s68x76,
                    [w.sg.S180x180]: w.Bw.s94x108,
                    [w.sg.S280x280]: w.Bw.s148x168,
                    [w.sg.S360x360]: w.Bw.s192x216,
                    [w.sg.S420x420]: w.Bw.s228x256,
                    [w.sg.Flexable]: w.Bw.s228x256,
                },
                z = (e, t, a, n) => {
                    switch (e) {
                        case w.bn.Shield:
                            return { backgroundImage: `url(${k.borders.shield.$dyn(`tier_${n}_${t}`)})` };
                        case w.bn.Circular:
                        default:
                            return {
                                backgroundImage: `url(${k.borders.circular.$dyn(a ? `circular_trophy_${t}` : `circular_${t}`)})`,
                            };
                    }
                },
                O = (e, t, a, n) => {
                    switch (e) {
                        case w.bn.Shield:
                            return { backgroundImage: `url(${k.backgrounds.shield.$dyn(`${n}_${t}`)})` };
                        case w.bn.Circular:
                        default:
                            return {
                                backgroundImage: `url(${k.backgrounds.circular.$dyn(a ? `trophy_${t}` : `${n}_${t}`)})`,
                            };
                    }
                },
                G = (e, t, a, n, s, r) => {
                    const o = a ? '_trophy' : '',
                        i = e === w.bn.Shield ? `_tier_${s}` : '',
                        c = ((e) => (e === l.Em.PersonalMissions ? I : P))(r),
                        m = c[t],
                        _ = ((e, t) => {
                            if (t === w.sg.S360x360 && e === w.Bw.s218x176) return { width: 188, height: 150 };
                            const a = e.substring(1).split('x');
                            return { width: a[0], height: a[1] };
                        })(m, t),
                        u = _.width,
                        d = _.height,
                        g = k.icons.$dyn(`${n}${o}${i}_${m}`);
                    return g
                        ? { backgroundImage: `url(${g})`, width: `${u}rem`, height: `${d}rem` }
                        : { width: `${u}rem`, height: `${d}rem` };
                },
                B = ({
                    keyName: e,
                    type: t,
                    backgroundName: a,
                    size: n = w.sg.S180x180,
                    level: r = 0,
                    stage: i = 0,
                    isTrophy: c = !1,
                    iconPosition: m = l.x_.Center,
                    iconSizeMap: _ = l.Em.Default,
                    classNames: u,
                }) => {
                    const g = $[t] || w.bn.Circular,
                        b = n === w.sg.Flexable ? w.sg.S420x420 : n;
                    return s().createElement(
                        'div',
                        { className: o()(A.base, A[`base__${n}`], A[`base__${g}`], null == u ? void 0 : u.base) },
                        s().createElement('div', {
                            className: o()(A.background, null == u ? void 0 : u.background),
                            style: O(g, b, c, a),
                        }),
                        s().createElement('div', {
                            className: o()(A.border, null == u ? void 0 : u.border),
                            style: z(g, b, c, r),
                        }),
                        s().createElement('div', {
                            className: o()(
                                A.icon,
                                A[`icon__${m}`],
                                A[`icon__${(0, d.TD)(_)}`],
                                null == u ? void 0 : u.icon,
                            ),
                            style: G(g, n, c, e, r, _),
                        }),
                        t === C.Staged &&
                            Boolean(i) &&
                            s().createElement(
                                'div',
                                {
                                    className: o()(A.stage, null == u ? void 0 : u.stage),
                                    lang: R.strings.settings.LANGUAGE_CODE(),
                                },
                                i,
                            ),
                    );
                },
                M = {
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
            let L, D;
            !(function (e) {
                (e.S100x100 = 's100x100'),
                    (e.S128x128 = 's128x128'),
                    (e.S180x180 = 's180x180'),
                    (e.S280x280 = 's280x280'),
                    (e.S360x360 = 's360x360'),
                    (e.S420x420 = 's420x420'),
                    (e.Flexable = 'flexable');
            })(L || (L = {})),
                (function (e) {
                    (e.s54x68 = 's54x68'),
                        (e.s68x82 = 's68x82'),
                        (e.s100x118 = 's100x118'),
                        (e.s156x182 = 's156x182'),
                        (e.s200x236 = 's200x236'),
                        (e.s250x278 = 's250x278');
                })(D || (D = {}));
            const F = R.images.gui.maps.icons.advanced_achievements,
                T = {
                    [L.S100x100]: D.s54x68,
                    [L.S128x128]: D.s68x82,
                    [L.S180x180]: D.s100x118,
                    [L.S280x280]: D.s156x182,
                    [L.S360x360]: D.s200x236,
                    [L.S420x420]: D.s250x278,
                },
                j = ({
                    keyName: e,
                    backgroundName: t,
                    size: a = L.S280x280,
                    level: n = 0,
                    isTrophy: r = !1,
                    classNames: i,
                }) => {
                    const c = a === L.Flexable ? L.S420x420 : a;
                    return s().createElement(
                        'div',
                        { className: o()(M.base, M[`base__${a}`], null == i ? void 0 : i.base) },
                        s().createElement('div', {
                            className: o()(M.background, null == i ? void 0 : i.background),
                            style: { backgroundImage: `url(${F.backgrounds.category.$dyn(`${t}_${c}`)})` },
                        }),
                        s().createElement('div', {
                            className: o()(M.border, null == i ? void 0 : i.border),
                            style: {
                                backgroundImage: `url(${F.borders.category.$dyn(r ? `trophy_${c}` : `tier_${n}_${c}`)})`,
                            },
                        }),
                        s().createElement('div', {
                            className: o()(M.icon, null == i ? void 0 : i.icon),
                            style: { backgroundImage: `url(${F.icons.category.$dyn(`${e}_${n}_${T[c]}`)})` },
                        }),
                    );
                },
                q = {
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
            var V = a(587);
            const U = R.images.gui.maps.icons.advanced_achievements,
                X = {
                    [V.X.S100x100]: V.y.s52x62,
                    [V.X.S128x128]: V.y.s68x72,
                    [V.X.S180x180]: V.y.s94x94,
                    [V.X.S280x280]: V.y.s144x140,
                    [V.X.S360x360]: V.y.s188x176,
                    [V.X.S420x420]: V.y.s218x212,
                    [V.X.S480x480]: V.y.s250x198,
                },
                W = ({
                    keyName: e,
                    backgroundName: t,
                    size: a = V.X.S280x280,
                    level: n = 0,
                    isTrophy: r = !1,
                    classNames: i,
                }) => {
                    const c = a === V.X.Flexable ? V.X.S480x480 : a;
                    return s().createElement(
                        'div',
                        { className: o()(q.base, q[`base__${a}`], null == i ? void 0 : i.base) },
                        s().createElement('div', {
                            className: o()(q.background, null == i ? void 0 : i.background),
                            style: { backgroundImage: `url(${U.backgrounds.subcategory.$dyn(`${t}_${c}`)})` },
                        }),
                        s().createElement('div', {
                            className: o()(q.border, null == i ? void 0 : i.border),
                            style: {
                                backgroundImage: `url(${U.borders.subcategory.$dyn(r ? `trophy_${c}` : `tier_${n}_${c}`)})`,
                            },
                        }),
                        s().createElement('div', {
                            className: o()(q.icon, null == i ? void 0 : i.icon),
                            style: { backgroundImage: `url(${U.icons.subcategory.$dyn(`${e}_${n}_${X[c]}`)})` },
                        }),
                    );
                },
                H = { [l.Cq.Single]: C.Single, [l.Cq.Staged]: C.Staged, [l.Cq.Cumulative]: C.Cumulative },
                J = ({
                    keyName: e,
                    type: t,
                    backgroundName: a,
                    size: n,
                    level: r,
                    stage: o,
                    isTrophy: i,
                    iconPosition: c,
                    iconSizeMap: m,
                    classNames: _,
                }) => {
                    switch (t) {
                        case l.Cq.Category:
                            return s().createElement(j, {
                                keyName: e,
                                backgroundName: a,
                                size: n,
                                level: r,
                                isTrophy: i,
                                classNames: _,
                            });
                        case l.Cq.Subcategory:
                            return s().createElement(W, {
                                keyName: e,
                                backgroundName: a,
                                size: n,
                                level: r,
                                isTrophy: i,
                                classNames: _,
                            });
                        case l.Cq.Single:
                        case l.Cq.Staged:
                        case l.Cq.Cumulative:
                            return s().createElement(B, {
                                keyName: e,
                                type: H[t],
                                backgroundName: a,
                                size: n,
                                level: r,
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
                Q = 'Vignette_base_c8',
                Y = 'Vignette_gradient_9a',
                Z = 'Vignette_gradient__top_f3',
                K = 'Vignette_gradient__right_d0',
                ee = 'Vignette_gradient__bottom_1c',
                te = 'Vignette_gradient__left_02',
                ae = { top: 0, right: 0, bottom: 0, left: 0 },
                ne = { top: 20, right: 20, bottom: 20, left: 20 },
                se = { top: 20, right: 0, bottom: 20, left: 0 },
                re = { top: 0, right: 20, bottom: 0, left: 20 },
                oe = (e, t, a, n) => {
                    const s = (0, m.getSize)('rem'),
                        r = s.height,
                        o = s.width,
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
                    return (r > t + l && o > a + c) || n ? ne : r > t + l ? se : o > a + c ? re : ae;
                },
                ie = ({ vignetteConfig: e = ae }) =>
                    s().createElement(
                        'div',
                        { className: Q },
                        s().createElement('div', { className: o()(Y, Z), style: { backgroundSize: `100% ${e.top}%` } }),
                        s().createElement('div', {
                            className: o()(Y, K),
                            style: { backgroundSize: `${e.right}% 100%` },
                        }),
                        s().createElement('div', {
                            className: o()(Y, ee),
                            style: { backgroundSize: `100% ${e.bottom}%` },
                        }),
                        s().createElement('div', {
                            className: o()(Y, te),
                            style: { backgroundSize: `${e.left}% 100%` },
                        }),
                    );
            var ce = a(1645),
                le = a(3215),
                me = a(4598),
                _e = a(9480),
                ue = a(9174),
                de = a(3946);
            let ge;
            !(function (e) {
                (e.Init = 'init'),
                    (e.Category = 'category'),
                    (e.Score = 'score'),
                    (e.GeneralPercent = 'generalPercent');
            })(ge || (ge = {}));
            const be = (0, le.q)()(
                    ({ observableModel: e }) => {
                        const t = {
                                root: e.object(),
                                upcomingAchievements: e.array('upcomingAchievements'),
                                subcategories: e.array('subcategories'),
                                trophy: e.object('trophy'),
                                animationState: ue.LO.box(ge.Init),
                            },
                            a = (0, de.Om)(() => _e.v(t.upcomingAchievements.get(), (e) => Object.assign({}, e)), {
                                equals: me.jv,
                            }),
                            n = (0, de.Om)(
                                (e) => {
                                    const t = _e.U2(a(), e);
                                    if (t) return t;
                                    throw new Error(`Unexpected upcoming achievement index: ${e}`);
                                },
                                { equals: me.jv },
                            ),
                            s = (0, de.Om)(() => _e.v(t.subcategories.get(), (e) => Object.assign({}, e)), {
                                equals: me.jv,
                            }),
                            r = (0, de.Om)(
                                (e) => {
                                    const t = _e.U2(s(), e);
                                    if (t) return t;
                                    throw new Error(`Unexpected subcategory index: ${e}`);
                                },
                                { equals: me.jv },
                            ),
                            o = (0, de.Om)(() => {
                                var e;
                                return null !=
                                    (e = (0, _e.kd)(s(), ({ achievementScore: e, prevAchievementScore: t }) => e !== t))
                                    ? e
                                    : 0;
                            });
                        return Object.assign({}, t, {
                            computes: {
                                upcomingLength: (0, de.Om)(() => a().length),
                                subcategoriesLength: (0, de.Om)(() => s().length),
                                getUpcomingAchievement: n,
                                getSubcategory: r,
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
                        setAnimationState: (0, ue.aD)((e) => {
                            t.animationState.set(e);
                        }),
                        achievementHover: e.createCallback(
                            (e, t) => ({ achievementId: e, achievementCategory: t }),
                            'onAchievementHover',
                        ),
                    }),
                ),
                pe = be[0],
                he = be[1];
            var ve = a(2372),
                ye = a(9766),
                fe = a(7522),
                Se = a(7030);
            const Ee = {
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
                xe = R.strings.achievements_page.category.achievementsScore,
                Ne = 'grade_1',
                Ae = 'grade_2',
                we = 'grade_3',
                Ce = (0, g.Pi)(({ className: e }) => {
                    const t = he(),
                        a = t.model,
                        r = t.controls,
                        i = a.root.get(),
                        c = i.prevAchievementsScore,
                        l = i.achievementsScore,
                        m = (0, n.useState)(c),
                        _ = m[0],
                        d = m[1],
                        g = (0, n.useState)(!1),
                        b = g[0],
                        p = g[1],
                        h = a.animationState.get(),
                        v = ((e, t) => {
                            const a = e - t;
                            return a >= 500
                                ? { name: Ne, duration: 4e3, sound: R.sounds.ach_cup_score_long() }
                                : a >= 50
                                  ? { name: Ae, duration: 3e3, sound: R.sounds.ach_cup_score_med() }
                                  : { name: we, duration: 2e3, sound: R.sounds.ach_cup_score_short() };
                        })(l, c),
                        y = (0, Se.useSpring)(() => ({
                            progress: 0,
                            onStart: () => {
                                p(!0), (0, u.G)(v.sound);
                            },
                            onChange: (e) => {
                                d(Math.floor(e.value.progress));
                            },
                            onRest: () => {
                                p(!1), r.setAnimationState(ge.Init), r.animationInProgress(!1), r.allAnimationEnd();
                            },
                        }))[1];
                    return (
                        (0, n.useEffect)(() => {
                            l !== c &&
                                0 !== l &&
                                h === ge.Score &&
                                y.start({
                                    from: { progress: c },
                                    to: { progress: l },
                                    config: { duration: v.duration, easing: fe.Z.easeInOutCubic },
                                });
                        }, [l, y, v.duration, h, c]),
                        s().createElement(
                            'div',
                            { className: o()(Ee.base, b && Ee.base__animation, Ee[`base__${v.name}`], e) },
                            s().createElement('div', { className: Ee.shine }),
                            s().createElement(
                                'div',
                                { className: Ee.amount },
                                s().createElement(
                                    'div',
                                    { className: Ee.count },
                                    s().createElement(ve.A, { value: _, format: 'integral' }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Ee.countGlow },
                                    s().createElement(ve.A, { value: _, format: 'integral' }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: o()(Ee.count, Ee.count__blur) },
                                    s().createElement(ve.A, { value: _, format: 'integral' }),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: Ee.label },
                                s().createElement(
                                    'div',
                                    { className: Ee.glowWrapper },
                                    s().createElement('div', { className: Ee.glow }),
                                ),
                                s().createElement(ye.z, { text: xe.title() }),
                            ),
                        )
                    );
                }),
                ke = 'CategoryProgress_base_51',
                $e = 'CategoryProgress_count_91',
                Pe = 'CategoryProgress_count__symbol_5c',
                Ie = (0, g.Pi)(({ className: e }) => {
                    const t = he(),
                        a = t.model,
                        r = t.controls,
                        i = a.root.get(),
                        c = i.categoryProgress,
                        l = i.prevCategoryProgress,
                        m = (0, n.useState)(l),
                        _ = m[0],
                        u = m[1],
                        d = a.animationState.get(),
                        g = (0, Se.useSpring)(() => ({
                            progress: 0,
                            onChange: (e) => {
                                u(Math.floor(e.value.progress));
                            },
                            onRest: () => r.setAnimationState(ge.Score),
                        }))[1];
                    return (
                        (0, n.useEffect)(() => {
                            d === ge.GeneralPercent &&
                                (c === l && r.setAnimationState(ge.Score),
                                g.start({ from: { progress: l }, to: { progress: c } }));
                        }, [g, d, c, r, l]),
                        s().createElement(
                            'div',
                            { className: o()(ke, e) },
                            s().createElement('div', { className: $e }, _),
                            s().createElement('div', { className: o()($e, Pe) }, R.strings.common.common.percent()),
                        )
                    );
                }),
                Re = {
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
                ze = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
            function Oe() {
                return (
                    (Oe =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = arguments[t];
                                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                            }
                            return e;
                        }),
                    Oe.apply(this, arguments)
                );
            }
            const Ge = (e) => {
                let t = e.size,
                    a = e.value,
                    n = e.isEmpty,
                    r = e.fadeInAnimation,
                    i = e.hide,
                    c = e.maximumNumber,
                    l = e.className,
                    m = (function (e, t) {
                        if (null == e) return {};
                        var a,
                            n,
                            s = {},
                            r = Object.keys(e);
                        for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                        return s;
                    })(e, ze);
                const _ = n ? null : a,
                    u = 'string' == typeof _;
                if ((_ && !u && _ < 0) || 0 === _) return null;
                const d = _ && !u && _ > c,
                    g = o()(
                        Re.base,
                        Re[`base__${t}`],
                        r && Re.base__animated,
                        i && Re.base__hidden,
                        !_ && Re.base__pattern,
                        n && Re.base__empty,
                        l,
                    );
                return s().createElement(
                    'div',
                    Oe({ className: g }, m),
                    s().createElement('div', { className: Re.bg }),
                    s().createElement('div', { className: Re.pattern }),
                    s().createElement(
                        'div',
                        { className: o()(Re.value, u && Re.value__text) },
                        d ? c : _,
                        d && s().createElement('span', { className: Re.plus }, '+'),
                    ),
                );
            };
            Ge.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
            const Be = 1e3;
            var Me = a(44);
            const Le = 'GlowWithMask_glowBox_e3',
                De = 'GlowWithMask_glowInner_c9',
                Fe = 'GlowWithMask_glow_a5',
                Te = R.images.gui.maps.icons.advanced_achievements.borders,
                je = ({ currentValue: e, index: t, isTrophy: a, isOtherPlayer: r, isSkipAnimation: o }) => {
                    const i = (0, _.GS)().mediaSize,
                        c = (0, Se.useSpring)(() => ({
                            from: { transform: 'translateX(-106%)' },
                            to: { transform: 'translateX(104%)' },
                            delay: 2e3 * (t + 1),
                            config: { duration: 1500, easing: fe.Z.easeOutQuad },
                            onStart: () => (0, u.G)(R.sounds.ach_sub_glare()),
                        })),
                        l = c[0],
                        m = c[1],
                        d = (0, n.useCallback)(() => {
                            m.start({
                                from: { transform: 'translateX(-106%)' },
                                to: { transform: 'translateX(104%)' },
                                delay: 2e3 * (t + 1),
                            });
                        }, [t, m]);
                    return (
                        (0, n.useEffect)(() => {
                            if (!o) {
                                const e = setInterval(d, 8e3);
                                return () => {
                                    clearInterval(e);
                                };
                            }
                        }, [d, o]),
                        s().createElement(
                            'div',
                            {
                                className: Le,
                                style: {
                                    maskImage: `url(${a ? Te.category.$dyn(`trophy_${i < _.cJ.Medium || r ? V.X.S100x100 : V.X.S180x180}`) : Te.subcategory.$dyn(`tier_${(0, ce.tf)(e)}_${(0, Me.d5)(i)}`)})`,
                                },
                            },
                            s().createElement(
                                Se.animated.div,
                                { className: De, style: l },
                                s().createElement('div', { className: Fe }),
                            ),
                        )
                    );
                },
                qe = 'Trophy_base_28',
                Ve = 'Trophy_icon_60',
                Ue = 'Trophy_base__inactive_71',
                Xe = 'Trophy_icon__otherPlayer_4c',
                We = 'Trophy_content_8c',
                He = 'Trophy_count_cb',
                Je = 'Trophy_label_24',
                Qe = 'Trophy_counter_4c',
                Ye = R.strings.advanced_achievements,
                Ze = (0, g.Pi)(() => {
                    const e = he(),
                        t = e.model,
                        a = e.controls,
                        n = t.root.get(),
                        r = n.isOtherPlayer,
                        c = n.isSkipAnimation,
                        d = t.trophy.get(),
                        g = d.key,
                        b = d.background,
                        p = d.currentValue,
                        h = d.prevValue,
                        v = d.bubbles,
                        y = (0, _.GS)().mediaSize,
                        f = r || 0 === p;
                    return s().createElement(
                        i.l,
                        {
                            tooltipArgs: {
                                header: Ye.tooltip.title.trophies(),
                                body: Ye.tooltip.description.trophies(),
                            },
                        },
                        s().createElement(
                            'div',
                            { className: o()(qe, f && Ue) },
                            s().createElement(
                                'div',
                                {
                                    className: o()(Ve, r && Xe),
                                    onClick: () => {
                                        f || ((0, u.G)(R.sounds.ach_sign()), a.goToTrophies());
                                    },
                                    onMouseEnter: () => {
                                        f || (0, u.G)(R.sounds.ach_hover());
                                    },
                                },
                                s().createElement(J, {
                                    keyName: g,
                                    backgroundName: b,
                                    type: l.Cq.Category,
                                    size: y < _.cJ.Large || r ? L.S100x100 : L.S180x180,
                                    isTrophy: !0,
                                }),
                                Boolean(v) &&
                                    s().createElement(
                                        'div',
                                        { className: Qe },
                                        s().createElement(Ge, { value: v, isEmpty: 1 === v }),
                                    ),
                                m.graphicsQuality.isHigh() &&
                                    p !== h &&
                                    s().createElement(je, {
                                        currentValue: p,
                                        index: t.computes.getLastIndex() + 1,
                                        isTrophy: !0,
                                        isOtherPlayer: r,
                                        isSkipAnimation: c,
                                    }),
                            ),
                            s().createElement(
                                'div',
                                { className: We },
                                s().createElement('div', { className: He }, p),
                                s().createElement(
                                    'div',
                                    { className: Je },
                                    systemLocale.toUpperCase(Ye.name.trophies()),
                                ),
                            ),
                        ),
                    );
                }),
                Ke = (e, t) => {
                    const a = [];
                    for (let n = 0; n < e; n++) a.push(t(n));
                    return a;
                };
            var et = a(6373);
            function tt() {
                const e = (0, n.useRef)(0);
                var t;
                return (
                    (t = () => {
                        window.cancelAnimationFrame(e.current);
                    }),
                    (0, n.useEffect)(() => t, []),
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
            }
            const at = (e, t) => window.getComputedStyle(e, null).getPropertyValue(t),
                nt = (e, t, a) => {
                    const n = a.getContext('2d');
                    if (!n) return 0;
                    var s;
                    n.font = `${at((s = t), 'font-weight')} ${at(s, 'font-size')} ${at(s, 'font-family')}`;
                    return n.measureText(e).width;
                },
                st = (e) => {
                    if (e.start >= e.end - 1) return e.start;
                    const t = Math.floor((e.start + e.end) / 2),
                        a = e.words.slice(0, t).join(' '),
                        n = Math.ceil(nt(a, e.element, e.canvas) / e.element.getBoundingClientRect().width);
                    return st(n <= 1 ? Object.assign({}, e, { start: t }) : Object.assign({}, e, { end: t }));
                },
                rt = 'MultilineOverflow_base_d9',
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
                    r = e.lines,
                    i = e.className,
                    c = e.onChange,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var a,
                            n,
                            s = {},
                            r = Object.keys(e);
                        for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                        return s;
                    })(e, _t);
                const m = (0, n.useRef)(null),
                    _ = (0, n.useRef)(null),
                    u = (0, n.useState)(!1),
                    d = u[0],
                    g = u[1],
                    b = (0, n.useState)([]),
                    p = b[0],
                    h = b[1],
                    v = (0, n.useState)(0),
                    y = v[0],
                    f = v[1],
                    S = tt(),
                    E = (0, n.useMemo)(() => document.createElement('canvas'), []),
                    x = (0, n.useCallback)(() => (_.current ? _.current.getBoundingClientRect().height : 0), []),
                    N = (0, n.useCallback)(
                        (e) => {
                            const t = x();
                            return e && t ? Math.round(e.scrollHeight / t) : 0;
                        },
                        [x],
                    ),
                    A = (0, n.useCallback)(() => {
                        if (N(m.current) <= r) return g(!1);
                        g(!0);
                        const e = a.split(' '),
                            t = Array.from(new Array(r)).reduce((t, a, n) => {
                                if (!m.current) return t;
                                const s = t.reduce((e, t) => e + t.length, 0),
                                    o = e.slice(s);
                                if (n === r - 1) return t.push(o), t;
                                const i = st({ start: 0, end: o.length, words: o, element: m.current, canvas: E });
                                return t.push(o.slice(0, i)), t;
                            }, []);
                        h(t);
                    }, [E, N, r, a]),
                    w = (0, n.useCallback)(() => {
                        S.run(() => {
                            f(x() * r), A();
                        });
                    }, [x, r, S, A]);
                var C, k;
                return (
                    (0, n.useEffect)(w, [w]),
                    (C = w),
                    (k = [w]),
                    (0, n.useEffect)(
                        () => (window.addEventListener('resize', C), () => window.removeEventListener('resize', C)),
                        k,
                    ),
                    (0, n.useEffect)(() => {
                        null == c || c(d);
                    }, [c, d]),
                    s().createElement(
                        'div',
                        ut({}, l, { ref: t, className: o()(rt, i, d && ot) }),
                        s().createElement('div', { ref: m, className: it, style: { maxHeight: `${y}rem` } }, a),
                        s().createElement(
                            'div',
                            { className: ct },
                            p.map((e, t) => s().createElement('div', { key: t, className: mt }, e.join(' '))),
                        ),
                        s().createElement('div', { ref: _, className: lt }, R.strings.common.common.dot()),
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
                    r = a[0],
                    o = a[1];
                return s().createElement(
                    et.i,
                    { isEnabled: r, body: e.text },
                    s().createElement(dt, gt({}, e, { ref: t, onChange: o })),
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
                    return s().createElement('div', { className: t });
                },
                xt = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                Nt = ({ size: e }) => {
                    const t = o()(xt.base, xt[`base__${e}`]);
                    return s().createElement('div', { className: t });
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
                    ({ size: e, lineRef: t, disabled: a, baseStyles: n, isComplete: r, withoutBounce: i }) => {
                        const c = o()(
                                At.base,
                                At[`base__${e}`],
                                a && At.base__disabled,
                                r && At.base__finished,
                                i && At.base__withoutBounce,
                            ),
                            l = !a && !r;
                        return s().createElement(
                            'div',
                            { className: c, style: n, ref: t },
                            s().createElement('div', { className: At.pattern }),
                            s().createElement('div', { className: At.gradient }),
                            l && s().createElement(Nt, { size: e }),
                        );
                    },
                ),
                Ct = ({ size: e, value: t, lineRef: a, disabled: r, onComplete: o }) => {
                    const i = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                        c = 100 === t;
                    return (
                        (0, n.useEffect)(() => {
                            c && o && o();
                        }, [c, o]),
                        s().createElement(wt, { size: e, disabled: r, baseStyles: i, isComplete: c, lineRef: a })
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
                        from: r,
                        size: o,
                        to: i,
                        onEndAnimation: c,
                        onChangeAnimationState: l,
                    }) => {
                        const m = i < r,
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
                                () => ({ width: `${Math.abs(r - i)}%`, left: `${m ? i : r}%` }),
                                [r, m, i],
                            );
                        return b
                            ? null
                            : s().createElement(
                                  'div',
                                  { className: It, style: f },
                                  s().createElement(
                                      'div',
                                      { style: p ? v : y, className: Rt },
                                      s().createElement(Nt, { size: o }),
                                  ),
                              );
                    },
                ),
                Ot = (0, n.memo)(
                    ({
                        to: e,
                        size: t,
                        from: a,
                        lineRef: r,
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
                        return s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(wt, { size: t, lineRef: r, disabled: o, isComplete: i, baseStyles: _ }),
                            a >= 0 &&
                                s().createElement(zt, {
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
                        from: r,
                        size: i,
                        to: c,
                        onEndAnimation: l,
                        onChangeAnimationState: m,
                        className: _,
                    }) => {
                        const u = c < r,
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
                            N = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Dt(u, r), Ft(e)), [r, u, e]),
                            A = (0, n.useMemo)(
                                () => Object.assign({ width: `${Math.abs(c - r)}%` }, Dt(u, r), Ft(e)),
                                [r, u, c, e],
                            );
                        if (p) return null;
                        const w = o()(Gt, _, u && 0 === c && Bt);
                        return s().createElement(
                            'div',
                            { style: h ? N : A, className: w },
                            s().createElement(
                                'div',
                                { style: y ? x : E, className: Mt },
                                s().createElement(Nt, { size: i }),
                            ),
                        );
                    },
                ),
                jt = (0, n.memo)(
                    ({
                        to: e,
                        size: t,
                        from: a,
                        lineRef: r,
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
                        return s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(wt, {
                                size: t,
                                lineRef: r,
                                disabled: o,
                                isComplete: i,
                                withoutBounce: _ && 0 === e,
                                baseStyles: d ? h : p,
                            }),
                            a >= 0 &&
                                s().createElement(Tt, {
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
                        r = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                s = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                            return s;
                        })(e, qt);
                    const o = (0, n.useState)(!1),
                        i = o[0],
                        c = o[1],
                        l = (0, n.useCallback)(() => {
                            const e = 100 === r.to;
                            e !== i && c(e), e && t && t(), a && a();
                        }, [i, t, a, r.to]);
                    switch (r.animationSettings.type) {
                        case St.Simple:
                            return s().createElement(Ot, Vt({}, r, { onEndAnimation: l, isComplete: i }));
                        case St.Growing:
                            return s().createElement(jt, Vt({}, r, { onEndAnimation: l, isComplete: i }));
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
                            s = {},
                            r = Object.keys(e);
                        for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]);
                        return s;
                    })(e, Xt);
                const r = (0, n.useRef)({}),
                    o = (0, n.useCallback)(() => {
                        (r.current.from = void 0), t && t();
                    }, [t]),
                    i = 'number' == typeof r.current.from ? r.current.from : a.from;
                return (
                    (r.current.from = i),
                    s().createElement(Ut, Wt({}, a, { onEndAnimation: o, key: `${i}-${a.to}`, from: i }))
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
                        deltaFrom: r,
                        animationSettings: o,
                        onEndAnimation: i,
                        onChangeAnimationState: c,
                        onComplete: l,
                    }) => {
                        if (r === t)
                            return s().createElement(Ct, {
                                key: `${r}-${t}`,
                                size: e,
                                value: t,
                                lineRef: a,
                                disabled: n,
                                onComplete: l,
                            });
                        const m = {
                            from: r,
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
                            ? s().createElement(Ht, m)
                            : s().createElement(Ut, Jt({ key: `${r}-${t}` }, m));
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
                        animationSettings: r = ta,
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
                        return s().createElement(
                            'div',
                            { className: o()(yt.base, yt[`base__${a}`]), style: Yt(t) },
                            !c && s().createElement(Et, { size: a }),
                            s().createElement(Qt, {
                                size: a,
                                lineRef: _,
                                disabled: i,
                                value: b.value,
                                deltaFrom: b.deltaFrom,
                                animationSettings: r,
                                onEndAnimation: d,
                                onChangeAnimationState: u,
                                onComplete: g,
                            }),
                        );
                    },
                ),
                na = 'Progress_base_37',
                sa = 'Progress_caption_37',
                ra = 'Progress_steppedText_6a',
                oa = 'Progress_separator_d1',
                ia = 'Progress_accentText_1c',
                ca = ({ progressType: e, currentValue: t, maxValue: a, classNames: n, className: r }) =>
                    s().createElement(
                        'div',
                        { className: o()(na, r) },
                        s().createElement(aa, { value: t, maxValue: a, size: ft.Small }),
                        s().createElement(
                            'div',
                            { className: o()(sa, null == n ? void 0 : n.caption) },
                            e === ht.Stepped
                                ? s().createElement(
                                      'div',
                                      { className: ra },
                                      s().createElement('div', { className: ia }, t),
                                      s().createElement('div', { className: oa }, '/'),
                                      a,
                                  )
                                : s().createElement(
                                      'div',
                                      { className: ia },
                                      (0, d.uF)(R.strings.common.percentValue(), { value: t }),
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
                _a = (0, g.Pi)(({ index: e, size: t, className: a }) => {
                    const n = he(),
                        r = n.model,
                        i = n.controls,
                        c = r.root.get().isOtherPlayer,
                        l = r.computes.getUpcomingAchievement(e),
                        m = l.key,
                        _ = l.maxValue,
                        g = l.currentValue,
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
                            ? (0, d.uF)(R.strings.advanced_achievements.collectVehicle(), { item: E })
                            : (0, d.uF)((0, d.z4)(ma.description.$plural(m, _)), { maxValue: _, level: (0, vt.HG)(N) });
                    return s().createElement(
                        'div',
                        {
                            onClick: () => {
                                c || ((0, u.G)(R.sounds.ach_sign()), i.goToDetails(h, v));
                            },
                            onMouseEnter: () => {
                                c || (0, u.G)(R.sounds.ach_hover());
                            },
                            className: o()(la.base, c && la.base__otherPlayer, a),
                        },
                        s().createElement(
                            'div',
                            { className: la.wrapper },
                            s().createElement(J, {
                                keyName: m,
                                backgroundName: b,
                                type: p,
                                level: (0, ce.tf)((0, ce.bV)(g, _)),
                                size: t,
                                stage: y,
                                iconPosition: f,
                                iconSizeMap: S,
                                classNames: { base: la.icon, stage: la.stage },
                            }),
                            !c &&
                                s().createElement(ca, {
                                    progressType: ht.Stepped,
                                    classNames: { caption: la.progressCaption },
                                    className: la.progressBar,
                                    currentValue: g,
                                    maxValue: _,
                                }),
                        ),
                        s().createElement(
                            'div',
                            { className: o()(la.holder, c && la.base__otherPlayer) },
                            s().createElement(
                                'div',
                                { className: la.title },
                                s().createElement(pt.l, {
                                    content:
                                        'staged' === p
                                            ? (0, ce.Mu)(p, y, ma.name.$dyn(m))
                                            : `${(0, d.z4)(ma.name.$dyn(m))}`,
                                }),
                            ),
                            s().createElement(bt, { className: la.description, text: A, lines: 2 }),
                        ),
                    );
                }),
                ua = 'UpcomingList_base_e2',
                da = 'UpcomingList_label_b6',
                ga = 'UpcomingList_base__otherPlayer_8d',
                ba = 'UpcomingList_item_d2',
                pa = 'UpcomingList_base__specificResolution_19',
                ha = R.strings.achievements_page.category,
                va = (0, g.Pi)(() => {
                    const e = he().model,
                        t = e.root.get().isOtherPlayer,
                        a = (0, _.GS)(),
                        n = a.mediaSize,
                        r = a.mediaWidth,
                        i = a.mediaHeight,
                        c = n > _.cJ.ExtraSmall && !t ? 2 : 1,
                        l = r === _.fd.ExtraLarge && i === _.Aq.Large && !t;
                    return s().createElement(
                        'div',
                        { className: o()(ua, t && ga, l && pa) },
                        s().createElement(
                            'div',
                            { className: da },
                            s().createElement(ye.z, { text: t ? ha.received.title() : ha.upcoming.title() }),
                        ),
                        Ke(e.computes.upcomingLength(), (e) => {
                            if (!(e > c))
                                return s().createElement(_a, {
                                    className: ba,
                                    index: e,
                                    key: e,
                                    size: (0, Me.pL)(n, t),
                                });
                        }),
                    );
                }),
                ya = 'Footer_base_2b',
                fa = 'Footer_base__leftAlign_ac',
                Sa = 'Footer_trophy_b6',
                Ea = 'Footer_upcomingList__otherPlayer_b4',
                xa = 'Footer_upcomingList_a1',
                Na = (0, g.Pi)(({ className: e }) => {
                    const t = he().model,
                        a = t.root.get().isOtherPlayer,
                        n = t.computes.upcomingLength,
                        r = (0, _.GS)().mediaSize,
                        i = n() < 2 || (n() < 3 && r > _.cJ.ExtraSmall && !a);
                    return s().createElement(
                        'div',
                        { className: o()(ya, i && fa, e) },
                        s().createElement('div', { className: Sa }, s().createElement(Ze, null)),
                        Boolean(n()) &&
                            s().createElement('div', { className: o()(xa, a && Ea) }, s().createElement(va, null)),
                    );
                }),
                Aa = 'SubcategoryAnimationItem_base_b3',
                wa = 'SubcategoryAnimationItem_particlesAnim_7c',
                Ca = 'SubcategoryAnimationItem_oldElement_e1',
                ka = 'SubcategoryAnimationItem_newElement_26',
                $a = ({ oldElement: e, newElement: t, isStart: a, index: r, onAnimationEnd: o, onPlaySound: i }) => {
                    const l = (0, n.useRef)(null),
                        m = (0, n.useRef)(null),
                        _ = (0, n.useState)(!0),
                        u = _[0],
                        d = _[1],
                        g = (0, n.useRef)(null),
                        b = (0, Se.useSpring)(() => ({
                            progress: 0,
                            onChange: (e) => {
                                if (!m.current || !l.current) return;
                                const t = e.value.progress;
                                (l.current.style.maskImage = `linear-gradient(237deg, transparent ${t}%, #000 ${t}%)`),
                                    (m.current.style.maskImage = `linear-gradient(237deg, #000 ${t}%, transparent ${t}%)`);
                            },
                            onRest: () => {
                                o(r);
                            },
                        }))[1];
                    return (
                        (0, n.useEffect)(() => {
                            if (a) {
                                const e = 400 * r;
                                return (
                                    b.start({
                                        from: { progress: 0 },
                                        to: { progress: 100 },
                                        delay: e,
                                        config: { duration: Be },
                                    }),
                                    (0, kt.F)(() => {
                                        var e;
                                        null == (e = g.current) || e.play(), i();
                                    }, e + 150)
                                );
                            }
                        }, [b, r, a, i]),
                        s().createElement(
                            'div',
                            { className: Aa },
                            u &&
                                s().createElement(c.n, {
                                    ref: g,
                                    onEnded: () => d(!1),
                                    className: wa,
                                    src: R.videos.achievements.grade_change_particles(),
                                }),
                            s().createElement('div', { className: Ca, ref: l }, e),
                            s().createElement('div', { className: ka, ref: m }, t),
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
                Fa = (0, g.Pi)(({ index: e, onAnimationEnd: t }) => {
                    const a = he().model,
                        r = a.root.get().isOtherPlayer,
                        c = a.computes.getSubcategory(e),
                        l = c.achievementScore,
                        m = c.prevAchievementScore,
                        g = c.prevValue,
                        b = c.currentValue,
                        p = c.key,
                        h = (0, _.GS)().mediaSize,
                        v = (0, n.useState)(g),
                        y = v[0],
                        f = v[1],
                        S = (0, n.useState)(r ? l : m),
                        E = S[0],
                        x = S[1],
                        N = (0, Se.useSpring)(
                            () => ({
                                progress: m,
                                onChange: (e) => {
                                    x(e.value.progress);
                                },
                                onRest: () => {
                                    A.start({ from: { progress: g }, to: { progress: b } }), t();
                                },
                            }),
                            [b],
                        )[1],
                        A = (0, Se.useSpring)(() => ({
                            progress: 0,
                            onStart: () => (0, u.G)(R.sounds.ach_progress_bar_start()),
                            onChange: (e) => {
                                f(Math.floor(e.value.progress));
                            },
                        }))[1];
                    return (
                        (0, n.useEffect)(() => {
                            r ||
                                N.start({
                                    from: { progress: m },
                                    to: { progress: l },
                                    delay: 1500 * e,
                                    config: { duration: 100 },
                                });
                        }, [l, N, e, r, m]),
                        s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(
                                'div',
                                { className: Pa },
                                s().createElement('div', { className: Ia }, y),
                                s().createElement('div', { className: o()(Ia, Ra) }, R.strings.common.common.percent()),
                            ),
                            s().createElement(
                                'div',
                                { className: za },
                                systemLocale.toUpperCase((0, d.z4)(Da.name.$dyn(p))),
                            ),
                            s().createElement(
                                'div',
                                { className: Ma },
                                s().createElement(aa, {
                                    value: b,
                                    deltaFrom: Math.min(g, b),
                                    size: h < _.cJ.Medium || r ? ft.Small : ft.Medium,
                                    animationSettings: {
                                        freezed: !1,
                                        withStack: !1,
                                        type: St.Growing,
                                        delta: { duration: 400, delay: 1500 * e },
                                        line: { duration: 400, delay: 0 },
                                    },
                                }),
                            ),
                            !r &&
                                s().createElement(
                                    i.l,
                                    {
                                        tooltipArgs: {
                                            header: La.achievementsPointsTooltip.header(),
                                            body: La.achievementsPointsTooltip.body(),
                                        },
                                    },
                                    s().createElement(
                                        'div',
                                        { className: Oa },
                                        s().createElement('div', { className: Ga }),
                                        s().createElement(
                                            'div',
                                            { className: Ba },
                                            s().createElement(ve.A, { value: E, format: 'integral' }),
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
                Qa = (0, g.Pi)(({ className: e, index: t, onAnimationEnd: a }) => {
                    const r = he(),
                        c = r.model,
                        d = r.controls,
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
                            $ && (0, ce.tf)(A) === (0, ce.tf)(x) && a(t);
                        }, [A, t, $, a, x]),
                        s().createElement(
                            'div',
                            {
                                className: o()(Ta, b && ja, e),
                                onClick: () => {
                                    ((e) => {
                                        b || d.goToDetails(e, N);
                                    })(S),
                                        (0, u.G)(R.sounds.ach_sign());
                                },
                                onMouseEnter: () => {
                                    b || ((0, u.G)(R.sounds.ach_hover()), d.achievementHover(S, N));
                                },
                            },
                            s().createElement(
                                i.l,
                                {
                                    tooltipArgs: {
                                        header: `${Ja.tooltip.title.$dyn(y)}`,
                                        body: `${Ja.tooltip.description.$dyn(y)}`,
                                    },
                                },
                                b
                                    ? s().createElement(J, {
                                          keyName: y,
                                          backgroundName: f,
                                          type: l.Cq.Subcategory,
                                          level: (0, ce.tf)(A),
                                          size: V.X.S180x180,
                                          classNames: { base: Va },
                                      })
                                    : s().createElement(
                                          'div',
                                          { className: qa },
                                          s().createElement($a, {
                                              oldElement: s().createElement(J, {
                                                  keyName: y,
                                                  backgroundName: f,
                                                  type: l.Cq.Subcategory,
                                                  level: (0, ce.tf)(x),
                                                  size: (0, Me.d5)(h),
                                                  classNames: { base: o()(Va, Ua) },
                                              }),
                                              newElement: s().createElement(
                                                  'div',
                                                  { className: Va },
                                                  s().createElement(J, {
                                                      keyName: y,
                                                      backgroundName: f,
                                                      type: l.Cq.Subcategory,
                                                      level: (0, ce.tf)(A),
                                                      size: (0, Me.d5)(h),
                                                      classNames: { base: Va },
                                                  }),
                                              ),
                                              isStart: $ && (0, ce.tf)(A) !== (0, ce.tf)(x),
                                              onAnimationEnd: a,
                                              onPlaySound: () => {
                                                  (0, ce.tf)(A) !== Me.z6.Third
                                                      ? (0, u.G)(R.sounds.ach_sub_grade_low())
                                                      : (0, u.G)(R.sounds.ach_sub_grade_high());
                                              },
                                              index: t,
                                          }),
                                          m.graphicsQuality.isHigh() &&
                                              Boolean(C) &&
                                              (0, ce.tf)(A) === (0, ce.tf)(x) &&
                                              s().createElement(je, { index: t, currentValue: A, isSkipAnimation: p }),
                                      ),
                            ),
                            s().createElement(
                                'div',
                                { className: Xa },
                                s().createElement(Fa, { index: t, onAnimationEnd: () => P(!0) }),
                            ),
                            Boolean(C) &&
                                s().createElement(
                                    'div',
                                    { className: o()(Wa, I && Ha), style: { animationDelay: Be * t + 1 + 'ms' } },
                                    s().createElement(Ge, { value: C, isEmpty: 1 === C }),
                                ),
                        )
                    );
                }),
                Ya = {
                    base: 'SubcategoryList_base_60',
                    item: 'SubcategoryList_item_54',
                    base__specificResolution: 'SubcategoryList_base__specificResolution_17',
                },
                Za = (0, g.Pi)(() => {
                    const e = he(),
                        t = e.model,
                        a = e.controls,
                        n = t.root.get(),
                        r = n.isOtherPlayer,
                        i = n.isSkipAnimation,
                        c = t.computes.getLastIndex(),
                        l = (0, _.GS)(),
                        m = l.mediaWidth,
                        u = l.mediaHeight,
                        d = m === _.fd.ExtraLarge && u === _.Aq.Large && !r,
                        g = (e) => {
                            c !== e || i || a.setAnimationState(ge.GeneralPercent);
                        };
                    return s().createElement(
                        'div',
                        { className: o()(Ya.base, r && Ya.base__otherPlayer, d && Ya.base__specificResolution) },
                        Ke(t.computes.subcategoriesLength(), (e) =>
                            s().createElement(Qa, { key: e, index: e, className: Ya.item, onAnimationEnd: g }),
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
                tn = (0, g.Pi)(() => {
                    const e = he(),
                        t = e.model,
                        a = e.controls,
                        r = t.root.get(),
                        g = r.achievementsScore,
                        b = r.prevAchievementsScore,
                        p = r.categoryProgress,
                        h = r.maxAchievementsScore,
                        y = r.isOtherPlayer,
                        f = r.categoryName,
                        S = r.categoryBackgroundName,
                        E = r.isSkipAnimation,
                        x = (0, _.GS)(),
                        A = x.mediaSize,
                        w = x.mediaHeight,
                        C = x.mediaWidth,
                        k = (0, n.useState)(!1),
                        $ = k[0],
                        P = k[1],
                        I = t.animationState.get(),
                        z = N(),
                        O = C === _.fd.ExtraLarge && w === _.Aq.Large && !y,
                        G = (0, ce.tf)(p);
                    var B;
                    (B = () => {
                        I === ge.Init && g !== b && a.setAnimationState(ge.Category);
                    }),
                        (0, n.useEffect)(B, []),
                        (0, n.useEffect)(() => {
                            g !== b && (a.setAnimationState(ge.Category), a.animationInProgress(!0));
                        }, [g, a, b]),
                        (0, n.useEffect)(() => {
                            E && (a.setAnimationState(ge.Init), a.animationInProgress(!1), a.allAnimationEnd());
                        }, [a, E]);
                    const M = oe(A, w, C);
                    return s().createElement(
                        'div',
                        {
                            className: o()(
                                Ka.base,
                                y && Ka.base__otherPlayer,
                                O && Ka.base__specificResolution,
                                m.graphicsQuality.isLow() && Ka.base__lowPreset,
                            ),
                            onClick: (e) =>
                                ((e) => {
                                    y && z(v.AnotherPlayer, e);
                                })(e),
                        },
                        s().createElement(
                            'div',
                            { className: Ka.wrapper },
                            m.graphicsQuality.isHigh() &&
                                !y &&
                                s().createElement(c.n, {
                                    src: R.videos.achievements.bg_advanced_achievements(),
                                    autoplay: !0,
                                    loop: !0,
                                    className: Ka.video,
                                }),
                            s().createElement(
                                'div',
                                { className: o()(Ka.achievementIcon, Ka[`achievementIcon__grade${G}`]) },
                                s().createElement(J, {
                                    keyName: f,
                                    backgroundName: S,
                                    type: l.Cq.Category,
                                    level: G,
                                    size: y ? V.X.S280x280 : V.X.S420x420,
                                }),
                            ),
                            s().createElement(
                                'div',
                                { className: Ka.innerWrapper },
                                s().createElement(
                                    'div',
                                    { className: Ka.content },
                                    s().createElement(
                                        'div',
                                        { className: Ka.header },
                                        s().createElement(Ie, { className: Ka.quantity }),
                                        s().createElement('div', { className: Ka.name }, en.title()),
                                    ),
                                    s().createElement(Za, null),
                                    s().createElement(
                                        i.l,
                                        {
                                            className: Ka.hoverWrapper,
                                            tooltipArgs: {
                                                header: (0, d.uF)(en.achievementsScore.tooltip.title(), {
                                                    value: g,
                                                    maxValue: h,
                                                }),
                                                body: en.achievementsScore.tooltip.description(),
                                            },
                                        },
                                        s().createElement('div', {
                                            className: Ka.hoverArea,
                                            onMouseEnter: () => {
                                                y || (P(!0), (0, u.G)(R.sounds.ach_cup_hover()));
                                            },
                                            onMouseLeave: () => P(!1),
                                            onClick: () => {
                                                y || (a.cupClick(), (0, u.G)(R.sounds.ach_cup_touch()));
                                            },
                                        }),
                                    ),
                                ),
                                s().createElement(Na, { className: Ka.footer }),
                                s().createElement(
                                    'div',
                                    { className: o()(Ka.cup, $ && Ka.cup__hover) },
                                    s().createElement(Ce, { className: Ka.achievementsScore }),
                                ),
                            ),
                            !y && s().createElement(ie, { vignetteConfig: M }),
                        ),
                    );
                }),
                an = { context: 'model.achievementsModel' },
                nn = () => s().createElement(pe, { options: an }, s().createElement(tn, null));
        },
    },
]);
