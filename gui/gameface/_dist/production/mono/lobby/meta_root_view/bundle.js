import { r as e } from '../chunks/rolldown-runtime.js';
import {
    $ as a,
    $o as s,
    A as t,
    Ao as r,
    Ar as i,
    Bn as n,
    Bo as o,
    C as d,
    Co as c,
    Cs as l,
    D as _,
    Dr as u,
    Dt as m,
    E as h,
    Er as g,
    Et as p,
    F as f,
    Fa as x,
    Fn as b,
    Gi as v,
    Ha as S,
    Hi as w,
    Hr as j,
    Ht as N,
    I as C,
    Ia as P,
    Ii as k,
    In as I,
    Io as y,
    Ji as A,
    Jn as B,
    Jo as T,
    K as D,
    Ki as L,
    Kn as E,
    L as z,
    Ln as M,
    Lr as H,
    M as W,
    Ma as U,
    Mn as V,
    Mr as Q,
    N as $,
    Na as q,
    No as O,
    O as F,
    Oo as Y,
    P as G,
    Pa as X,
    Pr as K,
    Q as J,
    Qi as Z,
    Qo as ee,
    R as ae,
    Rr as se,
    T as te,
    Ta as re,
    Ts as ie,
    Tt as ne,
    Ui as oe,
    Un as de,
    Uo as ce,
    Vi as le,
    Wi as _e,
    Wn as ue,
    Xn as me,
    Y as he,
    Yi as ge,
    Yn as pe,
    Z as fe,
    Za as xe,
    Zt as be,
    _i as ve,
    _o as Se,
    aa as we,
    bs as je,
    ca as Ne,
    es as Ce,
    fi as Pe,
    ga as ke,
    gi as Re,
    go as Ie,
    ho as ye,
    io as Ae,
    jr as Be,
    ko as Te,
    kr as De,
    lr as Le,
    na as Ee,
    no as ze,
    ns as Me,
    po as He,
    q as We,
    qi as Ue,
    qn as Ve,
    qo as Qe,
    ro as $e,
    sa as qe,
    ta as Oe,
    to as Fe,
    w as Ye,
    wt as Ge,
    xa as Xe,
    xs as Ke,
    ya as Je,
    yo as Ze,
    zi as ea,
} from '../chunks/lib.js';
import '../chunks/_wg-global-styles.js';
import { a as aa, i as sa } from '../chunks/vendor.js';
/* empty css               */ import { n as ta, t as ra } from '../chunks/schedule_model.js';
import { t as ia } from '../chunks/get_button_size.js';
import { n as na, t as oa } from '../chunks/schedule_subheading.js';
import { t as da } from '../chunks/arrow_button.js';
import { t as ca } from '../chunks/progress_bar.js';
import { a as la, i as _a, n as ua, o as ma, r as ha } from '../chunks/enums.js';
import { a as ga, i as pa, o as fa, t as xa } from '../chunks/rank_emblem.js';
import { n as ba, t as va } from '../chunks/get_division_name.js';
import { i as Sa, n as wa, r as ja, t as Na } from '../chunks/get_rank_name.js';
import { t as Ca } from '../chunks/qualification_emblem.js';
import { t as Pa } from '../chunks/weekly_quests_model.js';
import { n as ka } from '../chunks/consts.js';
import { n as Ra, t as Ia } from '../chunks/get_division_points_step.js';
import { t as ya } from '../chunks/divine_glow.js';
import { t as Aa } from '../chunks/diff.js';
import { t as Ba } from '../chunks/formatted_statistic_value.js';
import { n as Ta, t as Da } from '../chunks/get_statistic_value.js';
import { n as La, t as Ea } from '../chunks/vehicle_name.js';
import { t as za } from '../chunks/qualification_battle_item.js';
import { n as Ma, t as Ha } from '../chunks/get_comp7_reward.js';
import { n as Wa, r as Ua, t as Va } from '../chunks/quoted_locale.js';
import { t as Qa } from '../chunks/animation_api_factory.js';
import { n as $a, t as qa } from '../chunks/season_point.js';
import { t as Oa } from '../chunks/season_model.js';
import { t as Fa } from '../chunks/lace_divider.js';
var Ya = e(l()),
    Ga = e(sa()),
    Xa = {
        base: 'Background_8e48022f',
        bg: 'Background_bg_62833965',
        bgDisabled: 'Background_bgDisabled_452e3cee',
        bgHover: 'Background_bgHover_c1375183',
        base__big: 'Background_base__big_26effab7',
        base__hovered: 'Background_base__hovered_26effab7',
        fadeIn: 'Background_fadeIn_26effab7',
        fadeInThreeQuarters: 'Background_fadeInThreeQuarters_26effab7',
        fadeInHalf: 'Background_fadeInHalf_26effab7',
        fadeOut: 'Background_fadeOut_26effab7',
        fadeInWithScale: 'Background_fadeInWithScale_26effab7',
        slideUp: 'Background_slideUp_26effab7',
        scale: 'Background_scale_26effab7',
        raysAppearance: 'Background_raysAppearance_26effab7',
        rotate: 'Background_rotate_26effab7',
        'reverse-rotate': 'Background_reverse-rotate_26effab7',
        glowAppearance: 'Background_glowAppearance_26effab7',
        highlightAppearance: 'Background_highlightAppearance_26effab7',
        blink: 'Background_blink_26effab7',
        slideUpIn: 'Background_slideUpIn_26effab7',
    },
    Ka = e(q()),
    Ja = ({ isHover: e, size: a, disabled: s = !1 }) =>
        (0, Ka.jsx)('div', {
            className: (0, Ga.default)(Xa.base, Xa[`base__${a}`], e && Xa.base__hovered),
            children: s
                ? (0, Ka.jsx)('div', { className: Xa.bgDisabled })
                : (0, Ka.jsxs)(Ka.Fragment, {
                      children: [
                          (0, Ka.jsx)('div', { className: Xa.bg }),
                          (0, Ka.jsx)('div', { className: Xa.bgHover }),
                      ],
                  }),
        }),
    Za = {
        base: 'Border_3359fba1',
        border: 'Border_b559a98b',
        borderHover: 'Border_borderHover_fea1fee5',
        base__big: 'Border_base__big_b559a98b',
        base__hovered: 'Border_base__hovered_b559a98b',
        borderDisabled: 'Border_borderDisabled_536a8def',
        fadeIn: 'Border_fadeIn_b559a98b',
        fadeInThreeQuarters: 'Border_fadeInThreeQuarters_b559a98b',
        fadeInHalf: 'Border_fadeInHalf_b559a98b',
        fadeOut: 'Border_fadeOut_b559a98b',
        fadeInWithScale: 'Border_fadeInWithScale_b559a98b',
        slideUp: 'Border_slideUp_b559a98b',
        scale: 'Border_scale_b559a98b',
        raysAppearance: 'Border_raysAppearance_b559a98b',
        rotate: 'Border_rotate_b559a98b',
        'reverse-rotate': 'Border_reverse-rotate_b559a98b',
        glowAppearance: 'Border_glowAppearance_b559a98b',
        highlightAppearance: 'Border_highlightAppearance_b559a98b',
        blink: 'Border_blink_b559a98b',
        slideUpIn: 'Border_slideUpIn_b559a98b',
    },
    es = ({ isHover: e, size: a, disabled: s = !1 }) =>
        (0, Ka.jsx)('div', {
            className: (0, Ga.default)(Za.base, Za[`base__${a}`], e && Za.base__hovered),
            children: s
                ? (0, Ka.jsx)('div', { className: Za.borderDisabled })
                : (0, Ka.jsxs)(Ka.Fragment, {
                      children: [
                          (0, Ka.jsx)('div', { className: Za.border }),
                          (0, Ka.jsx)('div', { className: Za.borderHover }),
                      ],
                  }),
        }),
    as = {
        base: 'ClaimRewardsWidget_1dba49fb',
        base__big: 'ClaimRewardsWidget_base__big_645b8c59',
        base__disabled: 'ClaimRewardsWidget_base__disabled_e355d01f',
        base__hasAppearAnimation: 'ClaimRewardsWidget_base__hasAppearAnimation_909b73e9',
        baseAppear: 'ClaimRewardsWidget_baseAppear_19f0a5a4',
        icon: 'ClaimRewardsWidget_icon_506a8894',
        count: 'ClaimRewardsWidget_count_1a366f42',
        label: 'ClaimRewardsWidget_label_8e37fc4a',
        shine: 'ClaimRewardsWidget_shine_79a6f19e',
        shine_big: 'ClaimRewardsWidget_shine_big_19f0a5a4',
        shine__left: 'ClaimRewardsWidget_shine__left_b5dc4847',
        shine__right: 'ClaimRewardsWidget_shine__right_7bb87761',
        arrow: 'ClaimRewardsWidget_arrow_a32932eb',
        blinkShape: 'ClaimRewardsWidget_blinkShape_6d2561f0',
        blink: 'ClaimRewardsWidget_blink_26d47c92',
        blinker: 'ClaimRewardsWidget_blinker_19f0a5a4',
        fadeIn: 'ClaimRewardsWidget_fadeIn_19f0a5a4',
        fadeInThreeQuarters: 'ClaimRewardsWidget_fadeInThreeQuarters_19f0a5a4',
        fadeInHalf: 'ClaimRewardsWidget_fadeInHalf_19f0a5a4',
        fadeOut: 'ClaimRewardsWidget_fadeOut_19f0a5a4',
        fadeInWithScale: 'ClaimRewardsWidget_fadeInWithScale_19f0a5a4',
        slideUp: 'ClaimRewardsWidget_slideUp_19f0a5a4',
        scale: 'ClaimRewardsWidget_scale_19f0a5a4',
        raysAppearance: 'ClaimRewardsWidget_raysAppearance_19f0a5a4',
        rotate: 'ClaimRewardsWidget_rotate_19f0a5a4',
        'reverse-rotate': 'ClaimRewardsWidget_reverse-rotate_19f0a5a4',
        glowAppearance: 'ClaimRewardsWidget_glowAppearance_19f0a5a4',
        highlightAppearance: 'ClaimRewardsWidget_highlightAppearance_19f0a5a4',
        slideUpIn: 'ClaimRewardsWidget_slideUpIn_19f0a5a4',
    },
    ss = (function (e) {
        return ((e.Small = 'small'), (e.Big = 'big'), e);
    })({}),
    ts = ({ count: e, disabled: a = !1, size: s, onClick: t }) => {
        const [r, i] = (0, Ya.useState)(!1),
            n = a
                ? R.strings.comp7_ext.awardsWidget.description.awardDisabled()
                : R.strings.comp7_ext.awardsWidget.description.award();
        return (0, Ka.jsx)(N, {
            body: n,
            children: (0, Ka.jsxs)('div', {
                className: (0, Ga.default)(
                    as.base,
                    as[`base__${s}`],
                    a ? as.base__disabled : as.base__hasAppearAnimation,
                ),
                onMouseEnter: () => {
                    (ee.sound(R.sounds.highlight()), i(!0));
                },
                onMouseLeave: () => {
                    i(!1);
                },
                onClick: () => {
                    a || (ee.click(), t());
                },
                children: [
                    (0, Ka.jsx)(es, { size: s, isHover: r, disabled: a }),
                    (0, Ka.jsx)(Ja, { size: s, isHover: r, disabled: a }),
                    (0, Ka.jsx)('div', { className: as.icon }),
                    (0, Ka.jsx)('div', {
                        className: as.count,
                        children: (0, Ka.jsx)(We, { format: 'integral', value: e }),
                    }),
                    (0, Ka.jsx)('div', { className: as.label, children: R.strings.comp7_ext.awardsWidget.title(e) }),
                    !a &&
                        (0, Ka.jsxs)(Ka.Fragment, {
                            children: [
                                (0, Ka.jsx)('div', { className: (0, Ga.default)(as.shine, as.shine__left) }),
                                (0, Ka.jsx)('div', { className: (0, Ga.default)(as.shine, as.shine__right) }),
                                (0, Ka.jsx)('div', { className: as.arrow }),
                                (0, Ka.jsx)('div', {
                                    className: as.blinkShape,
                                    children: (0, Ka.jsx)('div', { className: as.blink }),
                                }),
                            ],
                        }),
                ],
            }),
        });
    },
    rs = () => Ce.isHigh(),
    is = () => {
        const { mediaSize: e, screenHeightRem: a } = U(),
            s = e >= x.Medium && a >= X.Large ? 'medium' : 'small';
        return { size: s, isSmall: 'small' === s, isMedium: 'medium' === s };
    },
    ns = {
        [ua.Progression]: 'progression',
        [ua.RankRewards]: 'rankRewards',
        [ua.WeeklyQuests]: 'weeklyQuests',
        [ua.Leaderboard]: 'leaderboard',
        [ua.YearlyRewards]: 'yearlyRewards',
        [ua.Shop]: 'shop',
        [ua.YearlyStatistics]: 'yearlyStatistics',
    },
    os = {
        TABS: { context: 'model.sidebar' },
        SCHEDULE: { context: 'model.scheduleInfo' },
        PROGRESSION_PAGE: { context: 'model.progressionModel' },
        RANK_REWARDS_PAGE: { context: 'model.rankRewardsModel' },
        WEEKLY_QUESTS_PAGE: { context: 'model.weeklyQuestsModel' },
        LEADERBOARD_PAGE: { context: 'model.leaderboardModel' },
        YEARLY_REWARDS_PAGE: { context: 'model.yearlyRewardsModel' },
        SHOP_PAGE: { context: 'model.shopModel' },
        YEARLY_STATISTICS_PAGE: { context: 'model.yearlyStatisticsModel' },
    },
    [ds, cs] = ve()(
        ({ observableModel: e }) => {
            const a = { root: e.object(), claimRewardsModel: e.object('claimRewardsModel') },
                s = e.object('progressionModel.qualificationModel'),
                t = Re(() => a.root.get().pageViewId === ua.Progression && s.get().isActive);
            return { ...a, computes: { isProgressionInQualification: t } };
        },
        ({ externalModel: e }) => ({
            close: e.createCallbackNoArgs('onClose'),
            openRewardsSelectionScreen: e.createCallbackNoArgs('claimRewardsModel.onGoToRewardSelection'),
        }),
    ),
    ls = R.images.comp7.gui.maps.icons.metaTabs,
    _s = (e, a) => {
        const s = ns[e];
        return a ? `${ls.$dyn(s)}` : `${ls.small.$dyn(s)}`;
    },
    [us, ms] = ve()(
        ({ observableModel: e }) => {
            const a = { root: e.object() },
                s = e.array('items');
            return {
                ...a,
                computes: {
                    tabs: Re(
                        (e) => [
                            {
                                id: 0,
                                items: c(s.get(), ({ id: a, hasNotification: s }) => ({
                                    id: a,
                                    icon: _s(a, e),
                                    ...(s && { notification: { type: 'dot' } }),
                                })),
                            },
                        ],
                        { equals: o },
                    ),
                },
            };
        },
        ({ externalModel: e }) => ({ changeSidebarTab: e.createCallback((e) => ({ tabId: e }), 'onSideBarTabChange') }),
    ),
    hs = R.strings.comp7_ext.sidebar.tabs.tooltip,
    gs = ({ children: e, id: a }) => {
        const s = ns[a];
        return (0, Ka.jsx)(N, { header: `${hs.header.$dyn(s)}`, body: `${hs.body.$dyn(s)}`, children: e });
    },
    ps = 'Tabs_icon_8dfa0155',
    fs = 'Tabs_icon__medium_bec6a176',
    xs = aa(({ pageView: e, className: a }) => {
        const { model: s, controls: t } = ms(),
            r = is(),
            i = (0, Ya.useCallback)((e) => t.changeSidebarTab(e), [t]);
        return (0, Ka.jsx)(ae, {
            tabs: s.computes.tabs(r.isMedium),
            onClick: i,
            active: e,
            size: r.size,
            className: a,
            classNames: { icon: (0, Ga.default)(ps, r.isMedium && fs) },
            WrapperElement: gs,
        });
    }),
    bs = (function (e) {
        return ((e[(e.Initial = 0)] = 'Initial'), (e[(e.Success = 1)] = 'Success'), (e[(e.Error = 2)] = 'Error'), e);
    })({}),
    vs = 'ErrorState_3a925db8',
    Ss = 'ErrorState_gears_3117ef8b',
    ws = 'ErrorState_title_438c797b',
    js = 'ErrorState_description_77d453ca',
    Ns = ({
        className: e,
        classNames: a,
        title: s = R.strings.comp7_ext.dataError.title(),
        description: t = R.strings.comp7_ext.dataError.description(),
        children: r,
    }) =>
        (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(vs, e),
            children: [
                (0, Ka.jsx)('div', { className: (0, Ga.default)(Ss, a?.gears) }),
                (0, Ka.jsx)('div', { className: (0, Ga.default)(ws, a?.title), children: s }),
                (0, Ka.jsx)('div', { className: (0, Ga.default)(js, a?.description), children: t }),
                r,
            ],
        }),
    [Cs, Ps] = ve()(
        ({ observableModel: e }) => {
            const a = { root: e.object(), items: e.array('items') },
                s = Re(
                    (e) => {
                        const s = Ze(a.items.get(), e);
                        if (!s) throw new Error(`leaderboard item with index ${e} was not found`);
                        return { ...s };
                    },
                    { equals: o },
                ),
                t = Re(() => {
                    const { state: e, leaderboardUpdateTimestamp: s } = a.root.get();
                    return e !== bs.Initial && s > 0;
                }),
                r = Re(() => s(0).rank),
                i = Re(() => a.root.get().lastBestUserPosition + 1),
                n = Re((e) => a.root.get().ownSpaID === s(e).spaID),
                d = Re(() => -1 !== a.root.get().lastBestUserPosition),
                c = Re(() => ({ first: s(0).position, last: s(a.items.get().length - 1).position }), {
                    equals: Xe.shallow,
                }),
                l = Re(() => d() && i() >= c().first && i() <= c().last),
                _ = Re(
                    (e) => {
                        const s = Math.ceil(a.root.get().recordsCount / e);
                        return { amount: s, hasPagination: s > 1, active: Math.floor(c().first / e) + 1 };
                    },
                    { equals: Xe.shallow },
                ),
                u = Re((e) => s(e).position < 3),
                m = Re(() => -1 === a.root.get().personalPosition);
            return {
                ...a,
                computes: {
                    leaderboardItem: s,
                    hasUpdateInfo: t,
                    firstItemRank: r,
                    rowsDividerPosition: i,
                    hasRowsDivider: l,
                    isPersonalRow: n,
                    hasPositionIcon: u,
                    isDefaultPersonalPosition: m,
                    hasLastBestUserPosition: d,
                    pages: _,
                    pagePositions: c,
                },
            };
        },
        ({ externalModel: e }) => ({
            refresh: e.createCallbackNoArgs('onRefresh'),
            getTableRecords: e.createCallback((e, a) => ({ limit: e, offset: a }), 'getTableRecords'),
        }),
    ),
    ks = 'ErrorState_886b4dce',
    Rs = 'ErrorState_buttonWrapper_7130f1d1',
    Is = 'ErrorState_button_3b8b6fd9',
    ys = aa(({ className: e }) => {
        const { model: a, controls: s } = Ps(),
            { isLoading: t } = a.root.get(),
            { mediaSize: r } = U();
        return (0, Ka.jsx)('div', {
            className: (0, Ga.default)(ks, e),
            children: (0, Ka.jsx)(Ns, {
                children: (0, Ka.jsx)('div', {
                    className: Rs,
                    children: (0, Ka.jsx)(se, {
                        theme: se.themes.secondary,
                        disabled: t,
                        size: ia(r),
                        className: Is,
                        onClick: () => {
                            t || (ee.click(), s.refresh());
                        },
                        onMouseEnter: () => {
                            t || ee.highlight();
                        },
                        silent: !0,
                        children: R.strings.comp7_ext.leaderboard.error.buttonText(),
                    }),
                }),
            }),
        });
    }),
    As = {
        base: 'CurrentPositionPanel_5c9fd05c',
        base__active: 'CurrentPositionPanel_base__active_93cc4287',
        cell: 'CurrentPositionPanel_cell_41b95f68',
        cell__order: 'CurrentPositionPanel_cell__order_f039f004',
        cell__currentPosition: 'CurrentPositionPanel_cell__currentPosition_cdd5a115',
        cell__battles: 'CurrentPositionPanel_cell__battles_a186a8bb',
        cell__score: 'CurrentPositionPanel_cell__score_a186a8bb',
        screwIcon: 'CurrentPositionPanel_screwIcon_dd603d2e',
        screwIcon__left: 'CurrentPositionPanel_screwIcon__left_5e5413ae',
        screwIcon__right: 'CurrentPositionPanel_screwIcon__right_457865f',
        fadeIn: 'CurrentPositionPanel_fadeIn_2579d8a0',
        fadeInThreeQuarters: 'CurrentPositionPanel_fadeInThreeQuarters_2579d8a0',
        fadeInHalf: 'CurrentPositionPanel_fadeInHalf_2579d8a0',
        fadeOut: 'CurrentPositionPanel_fadeOut_2579d8a0',
        fadeInWithScale: 'CurrentPositionPanel_fadeInWithScale_2579d8a0',
        slideUp: 'CurrentPositionPanel_slideUp_2579d8a0',
        scale: 'CurrentPositionPanel_scale_2579d8a0',
        raysAppearance: 'CurrentPositionPanel_raysAppearance_2579d8a0',
        rotate: 'CurrentPositionPanel_rotate_2579d8a0',
        'reverse-rotate': 'CurrentPositionPanel_reverse-rotate_2579d8a0',
        glowAppearance: 'CurrentPositionPanel_glowAppearance_2579d8a0',
        highlightAppearance: 'CurrentPositionPanel_highlightAppearance_2579d8a0',
        blink: 'CurrentPositionPanel_blink_2579d8a0',
        slideUpIn: 'CurrentPositionPanel_slideUpIn_2579d8a0',
    },
    Bs = (function (e) {
        return ((e.None = 'None'), (e.Active = 'Active'), e);
    })({}),
    Ts = { None: 'none', Active: 'active' },
    Ds = aa(({ state: e, height: a, onClick: s, className: t }) => {
        const { model: r } = Ps(),
            { personalPosition: i, personalBattlesCount: n, personalScore: o } = r.root.get();
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(As.base, As[`base__${Ts[e]}`], t),
            onClick: s,
            style: { '--height': a ? `${a}rem` : 'auto' },
            children: [
                (0, Ka.jsx)('div', { className: (0, Ga.default)(As.screwIcon, As.screwIcon__left) }),
                {
                    None: (0, Ka.jsx)('div', {
                        className: (0, Ga.default)(As.cell),
                        children: R.strings.comp7_ext.leaderboard.currentPosition.none(),
                    }),
                    Active: (0, Ka.jsxs)(Ka.Fragment, {
                        children: [
                            (0, Ka.jsx)('div', {
                                className: (0, Ga.default)(As.cell, As.cell__order),
                                children: i + 1,
                            }),
                            (0, Ka.jsx)('div', {
                                className: (0, Ga.default)(As.cell, As.cell__currentPosition),
                                children: R.strings.comp7_ext.leaderboard.currentPosition.body(),
                            }),
                            (0, Ka.jsx)('div', {
                                className: (0, Ga.default)(As.cell, As.cell__battles),
                                children: (0, Ka.jsx)(We, { value: n }),
                            }),
                            (0, Ka.jsx)('div', {
                                className: (0, Ga.default)(As.cell, As.cell__score),
                                children: (0, Ka.jsx)(We, { value: o }),
                            }),
                        ],
                    }),
                }[e],
                (0, Ka.jsx)('div', { className: (0, Ga.default)(As.screwIcon, As.screwIcon__right) }),
            ],
        });
    }),
    Ls = 'RowsDivider_5e67d3df',
    Es = 'RowsDivider_rankText_d814efd9',
    zs = aa(({ index: e, className: a, onClick: s }) => {
        const { model: t } = Ps(),
            { model: r } = ta(),
            i = t.computes.leaderboardItem(e).rank;
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(Ls, a),
            onClick: s,
            children: [
                (0, Ka.jsx)(xa, { seasonName: r.season.name.get(), rank: i, size: pa.x64 }),
                (0, Ka.jsx)('div', { className: Es, children: wa(i) }),
            ],
        });
    }),
    Ms = 'Header_4ab794c6',
    Hs = 'Header_separator_510e8c90',
    Ws = 'Header_cell_ae11a84e',
    Us = 'Header_cell__order_8c3c2448',
    Vs = 'Header_cell__player_4feb9cb9',
    Qs = 'Header_cell__score_d05be4b3',
    $s = () =>
        (0, Ka.jsxs)('div', {
            className: Ms,
            children: [
                (0, Ka.jsx)(N, {
                    header: R.strings.comp7_ext.leaderboard.table.tooltip.order.header(),
                    body: R.strings.comp7_ext.leaderboard.table.tooltip.order.body(),
                    children: (0, Ka.jsx)('div', {
                        className: (0, Ga.default)(Ws, Us),
                        children: R.strings.comp7_ext.leaderboard.table.header.order(),
                    }),
                }),
                (0, Ka.jsx)('div', { className: Hs }),
                (0, Ka.jsx)(N, {
                    header: R.strings.comp7_ext.leaderboard.table.tooltip.player.header(),
                    body: R.strings.comp7_ext.leaderboard.table.tooltip.player.body(),
                    children: (0, Ka.jsx)('div', {
                        className: (0, Ga.default)(Ws, Vs),
                        children: R.strings.comp7_ext.leaderboard.table.header.player(),
                    }),
                }),
                (0, Ka.jsx)('div', { className: Hs }),
                (0, Ka.jsx)(N, {
                    header: R.strings.comp7_ext.leaderboard.table.tooltip.battlesCount.header(),
                    body: R.strings.comp7_ext.leaderboard.table.tooltip.battlesCount.body(),
                    children: (0, Ka.jsx)('div', {
                        className: (0, Ga.default)(Ws, Qs),
                        children: R.strings.comp7_ext.leaderboard.table.header.battlesCount(),
                    }),
                }),
                (0, Ka.jsx)('div', { className: Hs }),
                (0, Ka.jsx)(N, {
                    header: R.strings.comp7_ext.leaderboard.table.tooltip.score.header(),
                    body: R.strings.comp7_ext.leaderboard.table.tooltip.score.body(),
                    children: (0, Ka.jsx)('div', {
                        className: (0, Ga.default)(Ws, Qs),
                        children: R.strings.comp7_ext.leaderboard.table.header.score(),
                    }),
                }),
            ],
        }),
    qs = ({ children: e, isEnabled: a, contextMenuArgs: s }) => (a ? (0, Ka.jsx)(C, { args: s, children: e }) : e),
    Os = {
        base: 'Row_c0c9eb7f',
        base__personal: 'Row_base__personal_c123bba9',
        order: 'Row_order_f88b8932',
        order__first: 'Row_order__first_cc78863e',
        order__second: 'Row_order__second_2b096ea7',
        order__third: 'Row_order__third_7175aba1',
        playerContainer: 'Row_playerContainer_e84846fe',
        player: 'Row_player_b3c980c7',
        clanTag: 'Row_clanTag_a1b9453b',
        battles: 'Row_battles_221de39e',
        score: 'Row_score_221de39e',
        fadeIn: 'Row_fadeIn_0',
        fadeInThreeQuarters: 'Row_fadeInThreeQuarters_0',
        fadeInHalf: 'Row_fadeInHalf_0',
        fadeOut: 'Row_fadeOut_0',
        fadeInWithScale: 'Row_fadeInWithScale_0',
        slideUp: 'Row_slideUp_0',
        scale: 'Row_scale_0',
        raysAppearance: 'Row_raysAppearance_0',
        rotate: 'Row_rotate_0',
        'reverse-rotate': 'Row_reverse-rotate_0',
        glowAppearance: 'Row_glowAppearance_0',
        highlightAppearance: 'Row_highlightAppearance_0',
        blink: 'Row_blink_0',
        slideUpIn: 'Row_slideUpIn_0',
    },
    Fs = { 0: 'first', 1: 'second', 2: 'third' },
    Ys = aa(({ index: e, className: a }) => {
        const { model: s } = Ps(),
            {
                position: t,
                battlesCount: r,
                userName: i,
                clanTag: n,
                clanTagColor: o,
                score: d,
                spaID: c,
            } = s.computes.leaderboardItem(e),
            l = s.computes.isPersonalRow(e),
            _ = s.computes.hasPositionIcon(e);
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(Os.base, l && Os.base__personal, a),
            style: { '--clanTagColor': o },
            children: [
                (0, Ka.jsx)(N, {
                    header: R.strings.comp7_ext.leaderboard.table.tooltip.order.header(),
                    body: R.strings.comp7_ext.leaderboard.table.tooltip.order.body(),
                    children: (0, Ka.jsx)('div', {
                        className: (0, Ga.default)(Os.order, _ && Os[`order__${Fs[t]}`]),
                        children: !_ && t + 1,
                    }),
                }),
                (0, Ka.jsx)(qs, {
                    contextMenuArgs: { spaID: c, userName: i },
                    isEnabled: !l,
                    children: (0, Ka.jsx)('div', {
                        className: Os.playerContainer,
                        children: (0, Ka.jsx)(N, {
                            header: R.strings.comp7_ext.leaderboard.table.tooltip.player.header(),
                            body: R.strings.comp7_ext.leaderboard.table.tooltip.player.body(),
                            children: (0, Ka.jsx)('div', {
                                className: Os.player,
                                children: (0, Ka.jsx)(z, {
                                    userName: i,
                                    clanAbbrev: n,
                                    clanTagClassName: o && Os.clanTag,
                                }),
                            }),
                        }),
                    }),
                }),
                (0, Ka.jsx)(N, {
                    header: R.strings.comp7_ext.leaderboard.table.tooltip.battlesCount.header(),
                    body: R.strings.comp7_ext.leaderboard.table.tooltip.battlesCount.body(),
                    children: (0, Ka.jsx)('div', { className: Os.battles, children: (0, Ka.jsx)(We, { value: r }) }),
                }),
                (0, Ka.jsx)(N, {
                    header: R.strings.comp7_ext.leaderboard.table.tooltip.score.header(),
                    body: R.strings.comp7_ext.leaderboard.table.tooltip.score.body(),
                    children: (0, Ka.jsx)('div', { className: Os.score, children: (0, Ka.jsx)(We, { value: d }) }),
                }),
            ],
        });
    }),
    Gs = 'Leaderboard_d61e47c3',
    Xs = 'Leaderboard_content_22252fe0',
    Ks = 'Leaderboard_shadowsContainer_676cb358',
    Js = 'Leaderboard_shadowsContainer__bottom_592c0d95',
    Zs = 'Leaderboard_shadow_5e1e6caa',
    et = 'Leaderboard_shadow__left_e19dd6f3',
    at = 'Leaderboard_shadow__center_3661a2a7',
    st = 'Leaderboard_shadow__right_e3bc83fc',
    tt = 'Leaderboard_area_ba84a652',
    rt = 'Leaderboard_row_4ed6f164',
    it = 'Leaderboard_rowsDivider_32196381',
    nt = aa(({ limit: e, rowHeight: a = 0, rowsDividerHeight: s = 0 }) => {
        const { model: t } = Ps(),
            r = t.computes.hasRowsDivider(),
            i = t.computes.rowsDividerPosition() % e;
        return (0, Ka.jsxs)('div', {
            className: Gs,
            style: { '--rowHeight': a ? `${a}rem` : 'auto', '--rowsDividerHeight': `${s}rem` },
            children: [
                (0, Ka.jsx)($s, {}),
                (0, Ka.jsxs)('div', {
                    className: Xs,
                    children: [
                        (0, Ka.jsxs)('div', {
                            className: Ks,
                            children: [
                                (0, Ka.jsx)('div', { className: (0, Ga.default)(Zs, et) }),
                                (0, Ka.jsx)('div', { className: (0, Ga.default)(Zs, at) }),
                                (0, Ka.jsx)('div', { className: (0, Ga.default)(Zs, st) }),
                            ],
                        }),
                        (0, Ka.jsx)(V, {
                            className: tt,
                            children: Fe(t.items.get().length, (e) =>
                                (0, Ka.jsxs)(
                                    Ya.Fragment,
                                    {
                                        children: [
                                            r && e === i && (0, Ka.jsx)(zs, { index: e, className: it }),
                                            (0, Ka.jsx)(Ys, { className: rt, index: e }),
                                        ],
                                    },
                                    e,
                                ),
                            ),
                        }),
                        (0, Ka.jsxs)('div', {
                            className: (0, Ga.default)(Ks, Js),
                            children: [
                                (0, Ka.jsx)('div', { className: (0, Ga.default)(Zs, et) }),
                                (0, Ka.jsx)('div', { className: (0, Ga.default)(Zs, at) }),
                                (0, Ka.jsx)('div', { className: (0, Ga.default)(Zs, st) }),
                            ],
                        }),
                        (0, Ka.jsx)(b, {}),
                    ],
                }),
            ],
        });
    }),
    ot = {
        base: 'Pagination_37469748',
        pageButton: 'Pagination_pageButton_8b116ad7',
        pageButton__active: 'Pagination_pageButton__active_2b683ba8',
        pageButton__inactive: 'Pagination_pageButton__inactive_803b8463',
        pageButton__disabled: 'Pagination_pageButton__disabled_bba0d255',
        pageValue: 'Pagination_pageValue_3da2b9bb',
        control: 'Pagination_control_11d0377c',
        control__active: 'Pagination_control__active_163b5c73',
        control__prev: 'Pagination_control__prev_345dcd35',
        control__next: 'Pagination_control__next_5563e13d',
        fadeIn: 'Pagination_fadeIn_3cfb8f4f',
        fadeInThreeQuarters: 'Pagination_fadeInThreeQuarters_3cfb8f4f',
        fadeInHalf: 'Pagination_fadeInHalf_3cfb8f4f',
        fadeOut: 'Pagination_fadeOut_3cfb8f4f',
        fadeInWithScale: 'Pagination_fadeInWithScale_3cfb8f4f',
        slideUp: 'Pagination_slideUp_3cfb8f4f',
        scale: 'Pagination_scale_3cfb8f4f',
        raysAppearance: 'Pagination_raysAppearance_3cfb8f4f',
        rotate: 'Pagination_rotate_3cfb8f4f',
        'reverse-rotate': 'Pagination_reverse-rotate_3cfb8f4f',
        glowAppearance: 'Pagination_glowAppearance_3cfb8f4f',
        highlightAppearance: 'Pagination_highlightAppearance_3cfb8f4f',
        blink: 'Pagination_blink_3cfb8f4f',
        slideUpIn: 'Pagination_slideUpIn_3cfb8f4f',
    },
    dt = Math.trunc(4),
    ct = ({ pagesAmount: e, activePage: a, className: s, onPageClick: t, onControlEvent: r }) => {
        const i = a > 1,
            n = a < e,
            o = e < 9 ? e : 9,
            d = (e) => () => {
                r?.(e);
            };
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(ot.base, s),
            children: [
                (0, Ka.jsx)('div', {
                    className: (0, Ga.default)(ot.control, ot.control__prev, i && ot.control__active),
                    onClick: i ? d('prevClick') : void 0,
                    children: R.strings.comp7_ext.pagination.prev(),
                }),
                Fe(o, (s) => {
                    const r = ((e, a, s) => {
                            const t = a > 5,
                                r = s > 9 && a + dt < s;
                            return s <= 9
                                ? e + 1
                                : 0 === e
                                  ? 1
                                  : (1 === e && t) || (7 === e && r)
                                    ? R.strings.comp7_ext.pagination.dots()
                                    : 8 === e
                                      ? s
                                      : t && !r
                                        ? s - 8 + e
                                        : !t && r
                                          ? e + 1
                                          : e - dt + a;
                        })(s, a, e),
                        i = ((e, a) => (Number.isInteger(e) ? (a === e ? 'active' : 'inactive') : 'disabled'))(r, a);
                    return (0, Ka.jsx)(
                        'div',
                        {
                            className: (0, Ga.default)(ot.pageButton, ot[`pageButton__${i}`]),
                            onClick:
                                'disabled' !== i && 'number' == typeof r
                                    ? ((n = r),
                                      () => {
                                          t?.(n);
                                      })
                                    : void 0,
                            children: (0, Ka.jsx)('div', { className: ot.pageValue, children: r }),
                        },
                        s,
                    );
                    var n;
                }),
                (0, Ka.jsx)('div', {
                    className: (0, Ga.default)(ot.control, ot.control__next, n && ot.control__active),
                    onClick: n ? d('nextClick') : void 0,
                    children: R.strings.comp7_ext.pagination.next(),
                }),
            ],
        });
    },
    lt = 'HasRecordsState_c43fe3c6',
    _t = 'HasRecordsState_base__withoutPagination_ff6833d8',
    ut = 'HasRecordsState_tableContainer_e5526099',
    mt = 'HasRecordsState_pagination_26230442',
    ht = { settings: { ...B, animationConfig: { ...B.animationConfig, round: 1 } } },
    gt = aa(
        ({ limit: e, onCurrentRankTabChange: a, positionToScroll: s, onPositionToScrollChange: t, className: r }) => {
            const { model: i, controls: n } = Ps(),
                { personalPosition: o, lastBestUserPosition: d } = i.root.get(),
                c = I(ht),
                {
                    animationScroll: { scrollPosition: l },
                    applyScroll: _,
                    events: u,
                    getBounds: m,
                } = c,
                h = i.computes.isDefaultPersonalPosition() ? Bs.None : Bs.Active,
                g = i.computes.pages(e),
                p = i.computes.pagePositions(),
                f = i.computes.rowsDividerPosition(),
                x = i.computes.hasRowsDivider(),
                b = ((e, a) => T(44) * ((e + 1) % a))(d, e);
            (0, Ya.useEffect)(
                () =>
                    Ae(() => {
                        if (void 0 !== s) {
                            switch (s.type) {
                                case 'rank':
                                    _(s.rank === ha.Fifth ? b : 0);
                                    break;
                                case 'personalPosition': {
                                    const a = T(44) * (o % e);
                                    _(x && o > d ? a + T(70) : a);
                                    break;
                                }
                                case 'page':
                                    _(0);
                            }
                            t(void 0);
                        }
                    }),
                [_, x, d, e, o, s, b, t],
            );
            const v = (0, Ya.useCallback)(() => {
                a(p.first > d ? ha.Fifth : ha.Sixth);
            }, [p.first, d, a]);
            ((0, Ya.useEffect)(() => {
                v();
            }, [v]),
                (0, Ya.useEffect)(() => {
                    const e = () => {
                        if (x && f > p.first) {
                            const [, e] = m(),
                                s = 0 !== e && l.goal === e && b >= e;
                            a(l.goal >= b || s ? ha.Fifth : ha.Sixth);
                        } else o >= p.first && o <= p.last ? a(o > d ? ha.Fifth : ha.Sixth) : v();
                    };
                    return (u.on('change', e), () => u.off('change', e));
                }, [u, p.first, x, d, p.last, e, o, b, f, l.goal, a, v, m]));
            const S = (0, Ya.useCallback)(() => {
                    h !== Bs.None && (ee.yes1(), n.getTableRecords(e, o - (o % e)), t({ type: 'personalPosition' }));
                }, [n, e, h, o, t]),
                w = (0, Ya.useCallback)(
                    (a) => {
                        (ee.yes1(), n.getTableRecords(e, (a - 1) * e), t({ type: 'page' }));
                    },
                    [n, e, t],
                ),
                j = (0, Ya.useCallback)(
                    (a) => {
                        ee.yes1();
                        const s = (() => {
                            switch (a) {
                                case 'prevClick':
                                    return g.active - 1;
                                case 'nextClick':
                                    return g.active + 1;
                                default:
                                    return 1;
                            }
                        })();
                        (n.getTableRecords(e, (s - 1) * e), t({ type: 'page' }));
                    },
                    [g.active, n, e, t],
                );
            return (0, Ka.jsxs)('div', {
                className: (0, Ga.default)(lt, !g.hasPagination && _t, r),
                children: [
                    (0, Ka.jsx)('div', {
                        className: ut,
                        children: (0, Ka.jsx)(M, {
                            api: c,
                            children: (0, Ka.jsx)(nt, { limit: e, rowHeight: 44, rowsDividerHeight: 70 }),
                        }),
                    }),
                    (0, Ka.jsx)(Ds, { state: h, onClick: S, height: 44 }),
                    g.hasPagination &&
                        (0, Ka.jsx)(ct, {
                            pagesAmount: g.amount,
                            activePage: g.active,
                            className: mt,
                            onPageClick: w,
                            onControlEvent: j,
                        }),
                ],
            });
        },
    ),
    pt = R.views.comp7.mono.lobby.tooltips,
    ft = ({ rank: e, topPercentage: a, from: s, to: t, divisions: r = '' }) => {
        switch (e) {
            case ha.Sixth:
                return { contentId: pt.sixth_rank_tooltip('resId'), args: { topPercentage: a } };
            case ha.Fifth:
                return { contentId: pt.fifth_rank_tooltip('resId'), args: { from: s } };
            default:
                return { contentId: pt.general_rank_tooltip('resId'), args: { rank: e, divisions: r, from: s, to: t } };
        }
    },
    xt = ({ rank: e, divisions: a, from: s, to: t, topPercentage: r, children: i, className: n, ...o }) =>
        (0, Ka.jsx)(Be, {
            ...ft({ rank: e, divisions: a, from: s, to: t, topPercentage: r }),
            ...o,
            children: (0, Ka.jsx)('div', { className: n, children: i }),
        }),
    bt = (function (e) {
        return ((e.Active = 'active'), (e.Inactive = 'inactive'), (e.Disabled = 'disabled'), e);
    })({}),
    vt = {
        base: 'RankTabs_6fc88656',
        line: 'RankTabs_line_af43f27d',
        line__toRight: 'RankTabs_line__toRight_a38d9f9c',
        line__toLeft: 'RankTabs_line__toLeft_e25cc1cf',
        ranksContainer: 'RankTabs_ranksContainer_bd00e941',
        dividersDot: 'RankTabs_dividersDot_da45ad02',
        rank: 'RankTabs_rank_e04916b3',
        rankEmblem: 'RankTabs_rankEmblem_35da26af',
        rank__disabled: 'RankTabs_rank__disabled_eae521b6',
        label: 'RankTabs_label_f262d6f9',
        rank__active: 'RankTabs_rank__active_eae521b6',
        rankTabHighlight: 'RankTabs_rankTabHighlight_24293113',
        fadeIn: 'RankTabs_fadeIn_eae521b6',
        fadeInThreeQuarters: 'RankTabs_fadeInThreeQuarters_eae521b6',
        fadeInHalf: 'RankTabs_fadeInHalf_eae521b6',
        fadeOut: 'RankTabs_fadeOut_eae521b6',
        fadeInWithScale: 'RankTabs_fadeInWithScale_eae521b6',
        slideUp: 'RankTabs_slideUp_eae521b6',
        scale: 'RankTabs_scale_eae521b6',
        raysAppearance: 'RankTabs_raysAppearance_eae521b6',
        rotate: 'RankTabs_rotate_eae521b6',
        'reverse-rotate': 'RankTabs_reverse-rotate_eae521b6',
        glowAppearance: 'RankTabs_glowAppearance_eae521b6',
        highlightAppearance: 'RankTabs_highlightAppearance_eae521b6',
        blink: 'RankTabs_blink_eae521b6',
        slideUpIn: 'RankTabs_slideUpIn_eae521b6',
    },
    St = ({ tabs: e, seasonName: a, className: s, onTabClick: t }) => {
        const r = (e) => () => {
            t?.(e);
        };
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(vt.base, s),
            children: [
                (0, Ka.jsx)('div', { className: vt.dividersDot }),
                (0, Ka.jsx)('div', { className: (0, Ga.default)(vt.line, vt.line__toRight) }),
                (0, Ka.jsx)('div', {
                    className: vt.ranksContainer,
                    children: e.map(({ rank: e, state: s, args: t = {} }) => {
                        const i = s !== bt.Disabled;
                        return (0, Ka.jsxs)(
                            'div',
                            {
                                className: (0, Ga.default)(vt.rank, vt[`rank__${s}`]),
                                children: [
                                    (0, Ka.jsxs)(xt, {
                                        rank: e,
                                        from: t?.from,
                                        topPercentage: t?.topPercentage,
                                        onClick: i ? r(e) : void 0,
                                        onMouseEnter: i ? ee.highlight : void 0,
                                        children: [
                                            (0, Ka.jsx)('div', { className: vt.rankTabHighlight }),
                                            (0, Ka.jsx)(xa, {
                                                seasonName: a,
                                                rank: e,
                                                size: pa.x64,
                                                className: vt.rankEmblem,
                                            }),
                                        ],
                                    }),
                                    s !== bt.Disabled && (0, Ka.jsx)('div', { className: vt.label, children: wa(e) }),
                                ],
                            },
                            e,
                        );
                    }),
                }),
                (0, Ka.jsx)('div', { className: (0, Ga.default)(vt.line, vt.line__toLeft) }),
            ],
        });
    },
    wt = ({ rank: e, lastBestUserPosition: a, currentRankTab: s, recordsCount: t }) =>
        (e === ha.Sixth && -1 === a) || 0 === t ? bt.Disabled : e === s ? bt.Active : bt.Inactive,
    jt = 'HasRecordsStateContainer_c67207b9',
    Nt = 'HasRecordsStateContainer_content_6298db9',
    Ct = [ha.Sixth, ha.Fifth],
    Pt = aa(({ className: e }) => {
        const { model: a, controls: s } = Ps(),
            { model: t } = ta(),
            { lastBestUserPosition: r, recordsCount: i, from: n, topPercentage: o } = a.root.get(),
            d = a.computes.hasLastBestUserPosition(),
            c = a.computes.rowsDividerPosition(),
            [l, _] = (0, Ya.useState)(a.computes.firstItemRank()),
            [u, m] = (0, Ya.useState)(),
            h = Ct.map((e) => ({
                rank: e,
                state: wt({ rank: e, lastBestUserPosition: r, currentRankTab: l, recordsCount: i }),
                args: { from: n, topPercentage: o },
            })),
            g = (0, Ya.useCallback)(
                (e) => {
                    const a = e === ha.Fifth && d ? c - (c % 50) : 0;
                    (ee.click(), s.getTableRecords(50, a), m({ type: 'rank', rank: e }));
                },
                [s, c, d, 50],
            );
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(jt, e),
            children: [
                (0, Ka.jsx)(St, { tabs: h, seasonName: t.season.name.get(), onTabClick: g }),
                (0, Ka.jsx)(gt, {
                    limit: 50,
                    positionToScroll: u,
                    onCurrentRankTabChange: _,
                    onPositionToScrollChange: m,
                    className: Nt,
                }),
            ],
        });
    }),
    kt = {
        base: 'NoRecordsState_d5cb4008',
        imageContainer: 'NoRecordsState_imageContainer_114fc4ea',
        image: 'NoRecordsState_image_8538b81d',
        image__season_first: 'NoRecordsState_image__season_first_f1601a6e',
        image__season_second: 'NoRecordsState_image__season_second_2ba175',
        image__season_third: 'NoRecordsState_image__season_third_5e8cb752',
        title: 'NoRecordsState_title_d6e36681',
        subtitle: 'NoRecordsState_subtitle_590c8cfe',
        fadeIn: 'NoRecordsState_fadeIn_32c10e47',
        fadeInThreeQuarters: 'NoRecordsState_fadeInThreeQuarters_32c10e47',
        fadeInHalf: 'NoRecordsState_fadeInHalf_32c10e47',
        fadeOut: 'NoRecordsState_fadeOut_32c10e47',
        fadeInWithScale: 'NoRecordsState_fadeInWithScale_32c10e47',
        slideUp: 'NoRecordsState_slideUp_32c10e47',
        scale: 'NoRecordsState_scale_32c10e47',
        raysAppearance: 'NoRecordsState_raysAppearance_32c10e47',
        rotate: 'NoRecordsState_rotate_32c10e47',
        'reverse-rotate': 'NoRecordsState_reverse-rotate_32c10e47',
        glowAppearance: 'NoRecordsState_glowAppearance_32c10e47',
        highlightAppearance: 'NoRecordsState_highlightAppearance_32c10e47',
        blink: 'NoRecordsState_blink_32c10e47',
        slideUpIn: 'NoRecordsState_slideUpIn_32c10e47',
    },
    Rt = aa(({ className: e }) => {
        const { model: a } = Ps(),
            { from: s } = a.root.get(),
            { model: t } = ta();
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(kt.base, e),
            children: [
                (0, Ka.jsx)('div', {
                    className: kt.imageContainer,
                    children: (0, Ka.jsx)('div', {
                        className: (0, Ga.default)(kt.image, kt[`image__season_${t.season.name.get()}`]),
                    }),
                }),
                (0, Ka.jsx)('div', {
                    className: kt.title,
                    children: R.strings.comp7_ext.leaderboard.noRecords.title(),
                }),
                (0, Ka.jsx)(De, {
                    text: R.strings.comp7_ext.leaderboard.noRecords.subtitle(),
                    binding: { pointsCount: (0, Ka.jsx)(We, { value: s }) },
                    classMix: kt.subtitle,
                }),
            ],
        });
    }),
    It = H(R.strings.comp7_ext.lastUpdateNote.lastBestUserPoints.description(), { count: 5 }),
    yt = 'LastUpdateNote_6d3d7bea',
    At = 'LastUpdateNote_infoIcon_e0adf03b',
    Bt = ({
        timestamp: e,
        className: a,
        classNames: s,
        dateTimeFormat: t = ie.ShortTime,
        contentId: r = R.views.comp7.mono.lobby.tooltips.last_update_tooltip('resId'),
        tooltipDescription: i = It,
        ...n
    }) =>
        (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(yt, a),
            children: [
                (0, Ka.jsx)(Q, {
                    text: `${R.strings.comp7_ext.lastUpdateNote.info()}`,
                    binding: { date: (0, Ka.jsx)(K, { datetime: e, format: t }) },
                }),
                (0, Ka.jsx)(Be, {
                    ignoreShowDelay: !0,
                    contentId: r,
                    args: { description: i },
                    ...n,
                    children: (0, Ka.jsx)('div', { className: (0, Ga.default)(At, s?.icon) }),
                }),
            ],
        }),
    Tt = 'SubheadingContainer_c1ac09ea',
    Dt = 'SubheadingContainer_updateInfo_d86a6c67',
    Lt = 'SubheadingContainer_updateInfoText_8739d0a',
    Et = aa(({ className: e }) => {
        const { model: a } = Ps(),
            { leaderboardUpdateTimestamp: s } = a.root.get(),
            t = a.computes.hasUpdateInfo(),
            r = H(R.strings.comp7_ext.lastUpdateNote.ratingPositions.description(), { count: 5 });
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(Tt, e),
            children: [
                (0, Ka.jsx)(oa, {}),
                t &&
                    (0, Ka.jsx)('div', {
                        className: Dt,
                        children: (0, Ka.jsx)(Bt, { timestamp: s, className: Lt, tooltipDescription: r }),
                    }),
            ],
        });
    }),
    zt = {
        base: 'LeaderboardPage_fe5ea195',
        animationContainer: 'LeaderboardPage_animationContainer_82ac54a3',
        subHeading: 'LeaderboardPage_subHeading_3b329d4d',
        content: 'LeaderboardPage_content_2f70e5e7',
        base__loading: 'LeaderboardPage_base__loading_f104266a',
        hasRecords: 'LeaderboardPage_hasRecords_c87748b0',
        error: 'LeaderboardPage_error_f104266a',
        noRecords: 'LeaderboardPage_noRecords_4ac2ddc5',
        spinner: 'LeaderboardPage_spinner_b414a75a',
        fadeIn: 'LeaderboardPage_fadeIn_f104266a',
        fadeInThreeQuarters: 'LeaderboardPage_fadeInThreeQuarters_f104266a',
        fadeInHalf: 'LeaderboardPage_fadeInHalf_f104266a',
        fadeOut: 'LeaderboardPage_fadeOut_f104266a',
        fadeInWithScale: 'LeaderboardPage_fadeInWithScale_f104266a',
        slideUp: 'LeaderboardPage_slideUp_f104266a',
        scale: 'LeaderboardPage_scale_f104266a',
        raysAppearance: 'LeaderboardPage_raysAppearance_f104266a',
        rotate: 'LeaderboardPage_rotate_f104266a',
        'reverse-rotate': 'LeaderboardPage_reverse-rotate_f104266a',
        glowAppearance: 'LeaderboardPage_glowAppearance_f104266a',
        highlightAppearance: 'LeaderboardPage_highlightAppearance_f104266a',
        blink: 'LeaderboardPage_blink_f104266a',
        slideUpIn: 'LeaderboardPage_slideUpIn_f104266a',
    },
    Mt = { [bs.Initial]: 'initial', [bs.Success]: 'success', [bs.Error]: 'error' },
    Ht = aa(() => {
        const { model: e } = Ps(),
            { state: a, isLoading: s } = e.root.get(),
            t = A(ka);
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(zt.base, zt[`base__${Mt[a]}`], s && zt.base__loading),
            'data-test-id': 'leaderboard-page',
            children: [
                (0, Ka.jsx)(Et, { className: zt.subHeading }),
                (0, Ka.jsxs)(v.div, {
                    className: zt.animationContainer,
                    style: t,
                    children: [
                        (0, Ka.jsx)('div', {
                            className: zt.content,
                            children: (() => {
                                switch (a) {
                                    case bs.Initial:
                                        return null;
                                    case bs.Success:
                                        return e.items.get().length > 0
                                            ? (0, Ka.jsx)(Pt, { className: zt.hasRecords })
                                            : (0, Ka.jsx)(Rt, { className: zt.noRecords });
                                    case bs.Error:
                                        return (0, Ka.jsx)(ys, { className: zt.error });
                                    default:
                                        console.error('Unreachable branch: add component for proper leaderboard state');
                                }
                            })(),
                        }),
                        s &&
                            (0, Ka.jsx)(Ge, {
                                message: R.strings.comp7_ext.waitingSpinner.message(),
                                className: zt.spinner,
                            }),
                    ],
                }),
            ],
        });
    }),
    Wt = (e) => c(e, (e) => ba(e.name)).join(R.strings.comp7_ext.listSeparator()),
    Ut = (function (e) {
        return ((e[(e.Initial = 0)] = 'Initial'), (e[(e.Success = 1)] = 'Success'), (e[(e.Error = 2)] = 'Error'), e);
    })({}),
    [Vt, Qt] = ve()(
        ({ observableModel: e }) => {
            const a = {
                    root: e.object(),
                    items: e.array('items'),
                    statisticsByDay: e.array('statisticsByDay'),
                    topVehiclesStatistics: e.array('topVehiclesStatistics'),
                    customizationTasks: e.array('customizationTasks'),
                    qualificationModel: e.primitives(
                        ['isActive', 'battlesCount', 'maxBattlesCount', 'isRatingCalculation'],
                        'qualificationModel',
                    ),
                    seasonStatisticsModel: e.object('seasonStatisticsModel'),
                    qualificationBattles: e.array('qualificationModel.battles'),
                    isRewardLayerVisible: re.box(!1),
                    isParallaxPreloaded: re.box(!1),
                    currentSlideIndex: re.box(0),
                    previousSlideIndex: re.box(0),
                },
                s = Re(
                    (e) => {
                        const s = Ze(a.items.get(), e);
                        if (!s) throw new Error(`item with index ${e} was not found`);
                        const { hasRankInactivity: t, rank: r, from: i, to: n } = s;
                        return { hasRankInactivity: t, rank: r, from: i, to: n };
                    },
                    { equals: Xe.shallow },
                ),
                t = Re(
                    (e) => {
                        const s = Ze(a.items.get(), e);
                        if (!s) throw new Error(`item with index ${e} was not found`);
                        return c(s.divisions, (e) => ({ ...e }));
                    },
                    { equals: o },
                ),
                r = Re(
                    (e) => {
                        const a = t(e);
                        return {
                            list: Wt(a),
                            count: a.length,
                            currentDivisionIndex: Ie(a, (e) => e.state === Ra.Current),
                        };
                    },
                    { equals: Xe.shallow },
                ),
                i = Re((e) => ({ division: ye(t(e), (e) => e.state === Ra.Current)?.name, hasInfo: !fa(s(e).rank) }), {
                    equals: Xe.shallow,
                }),
                n = Re(
                    (e) => {
                        const s = Ze(a.qualificationBattles.get(), e);
                        if (!s) throw new Error(`qualification battle with index ${e} was not found`);
                        return s;
                    },
                    { equals: o },
                ),
                d = Re(
                    (e) => {
                        const s = Ze(a.customizationTasks.get(), e);
                        return (ze(void 0 !== s, `Could not find slide with index ${e}.`), { ...s });
                    },
                    { equals: Xe.shallow },
                ),
                l = Re(
                    (e) => {
                        const s = Ze(a.statisticsByDay.get(), e);
                        return (
                            ze(void 0 !== s, `Could not find day statistics with index ${e} in statisticsByDay array.`),
                            { ...s }
                        );
                    },
                    { equals: Xe.shallow },
                ),
                _ = Re(() => Y(a.statisticsByDay.get(), (e, a) => Math.max(e, a.ratingPoints), 0)),
                u = Re(
                    (e) =>
                        -1 === e
                            ? { prevIndex: -1, nextIndex: -1 }
                            : Y(
                                  a.statisticsByDay.get(),
                                  (a, s, t) =>
                                      s.hasBattles
                                          ? (t < e
                                                ? (a.prevIndex = t)
                                                : t > e && -1 === a.nextIndex && (a.nextIndex = t),
                                            a)
                                          : a,
                                  { prevIndex: -1, nextIndex: -1 },
                              ),
                    { equals: Xe.shallow },
                ),
                m = Re(() => {
                    const e = a.root.get().currentDayIndex,
                        s = a.root.get().selectedDayIndex,
                        t = a.statisticsByDay.get().length - 1;
                    return -1 === s ? (e < t ? e : t) : s;
                });
            return {
                ...a,
                computes: {
                    item: s,
                    qualificationBattle: n,
                    rankSettings: i,
                    divisions: t,
                    divisionsConfig: r,
                    dayStatistics: l,
                    getSlideByIndex: d,
                    otherDayIndexes: u,
                    targetScrollIndex: m,
                    maxDayRatingPoints: _,
                },
            };
        },
        ({ externalModel: e, model: a }) => {
            const s = Je((e) => a.isRewardLayerVisible.set(e));
            return {
                setIsParallaxPreloaded: Je((e) => a.isParallaxPreloaded.set(e)),
                setRewardLayerVisible: s,
                setCurrentSlideIndex: Je((e) => {
                    (a.previousSlideIndex.set(a.currentSlideIndex.get()), a.currentSlideIndex.set(e));
                }),
                openCustomization: e.createCallback((e) => ({ customizationId: e }), 'onOpenCustomization'),
                selectDay: e.createCallback((e) => ({ index: e }), 'onSelectDay'),
                goToRankRewardsPage: e.createCallbackNoArgs('qualificationModel.onRankRewardsPageOpen'),
                openVehicleStats: e.createCallbackNoArgs('onOpenVehicleStats'),
                refresh: e.createCallbackNoArgs('onRefresh'),
                customizationProgressShown: e.createCallback(
                    (e) => ({ customizationId: e }),
                    'onCustomizationProgressShown',
                ),
            };
        },
    ),
    $t = [
        { path: R.images.comp7.gui.maps.icons.qualificationParallax.c_5(), speedX: -0.053, speedY: -0.01 },
        { path: R.images.comp7.gui.maps.icons.qualificationParallax.c_4(), speedX: -0.037, speedY: -0.0055 },
        { path: R.images.comp7.gui.maps.icons.qualificationParallax.c_3(), speedX: -0.025, speedY: -0.0016 },
        { path: R.images.comp7.gui.maps.icons.qualificationParallax.c_2(), speedX: 0, speedY: 0 },
        { path: R.images.comp7.gui.maps.icons.qualificationParallax.c_1(), speedX: 0.015, speedY: 0.002 },
        { path: R.images.comp7.gui.maps.icons.qualificationParallax.c_1_1(), speedX: 0.015, speedY: 0.002 },
        { path: R.images.comp7.gui.maps.icons.qualificationParallax.c_0(), speedX: 0.03, speedY: 0.014 },
        { path: R.images.comp7.gui.maps.icons.qualificationParallax.c_0_1(), speedX: 0.03, speedY: 0.014 },
    ],
    qt = 'Parallax_642396e4',
    Ot = 'Parallax_layer_823dd2ef',
    Ft = 'Parallax_shadow_e2763b91',
    Yt = [
        R.images.comp7.gui.maps.icons.qualificationParallax.c_1_1(),
        R.images.comp7.gui.maps.icons.qualificationParallax.c_0_1(),
    ],
    Gt = $t.reduce((e, a) => {
        const s = Math.abs(a.speedX);
        return s > e ? s : e;
    }, 0),
    Xt = aa(({ className: e }) => {
        const { model: a } = Qt(),
            { screenWidthRem: s } = U(),
            t = (0, Ya.createRef)(),
            r = Gt * s,
            i = A({ to: { opacity: a.isRewardLayerVisible.get() ? 1 : 0 }, config: { duration: 300 } }),
            [n] = _e(t);
        return (0, Ka.jsx)('div', {
            ref: t,
            className: (0, Ga.default)(qt, e),
            children: $t.map((e, a) =>
                (0, Ka.jsx)(
                    v.div,
                    {
                        className: Ot,
                        style: {
                            width: `${s + 2 * r}rem`,
                            left: -r + 'rem',
                            x: n.x.to((a) => a * e.speedX),
                            y: n.y.to((a) => a * e.speedY),
                            backgroundImage: `url(${e.path})`,
                            ...(Yt.includes(e.path) && i),
                        },
                        children: 3 === a && (0, Ka.jsx)(v.div, { className: Ft, style: i }),
                    },
                    a,
                ),
            ),
        });
    }),
    Kt = 'ParallaxContainer_ea8010a4',
    Jt = $t.map((e) => e.path),
    Zt = aa(({ className: e }) => {
        const { model: a, controls: s } = Qt(),
            t = A({ to: { opacity: a.isParallaxPreloaded.get() ? 1 : 0 }, config: { duration: 300 } }),
            r = k(Jt);
        return (
            (0, Ya.useLayoutEffect)(() => {
                'success' === r && s.setIsParallaxPreloaded(!0);
            }, [s, r]),
            (0, Ka.jsx)(v.div, { className: (0, Ga.default)(Kt, e), style: t, children: (0, Ka.jsx)(Xt, {}) })
        );
    }),
    er = {
        base: 'Bar_d3cdbf54',
        base__fluid: 'Bar_base__fluid_2495db2f',
        base__noBattles: 'Bar_base__noBattles_2697e844',
        base__muted: 'Bar_base__muted_0',
        base__qualification: 'Bar_base__qualification_0',
        base__rank: 'Bar_base__rank_bf7ecb58',
        layersContainer: 'Bar_layersContainer_6ce41b8a',
        base__noRank: 'Bar_base__noRank_5b05452',
        inner: 'Bar_inner_124f9ca3',
        holder: 'Bar_holder_7d1f9938',
        qualificationBg: 'Bar_qualificationBg_d41ae62d',
        qualificationHatch: 'Bar_qualificationHatch_2e7062aa',
        hatch: 'Bar_hatch_e5c9fe66',
        light: 'Bar_light_eb4cde1',
        sharp: 'Bar_sharp_6bb25dce',
        bar: 'Bar_450b6dff',
        selectedFrame: 'Bar_selectedFrame_2ea7e605',
        base__selected: 'Bar_base__selected_0',
        base__rank_first: 'Bar_base__rank_first_0',
        base__rank_second: 'Bar_base__rank_second_0',
        base__rank_third: 'Bar_base__rank_third_0',
        base__rank_fourth: 'Bar_base__rank_fourth_0',
        base__rank_fifth: 'Bar_base__rank_fifth_0',
        base__rank_sixth: 'Bar_base__rank_sixth_0',
        qualificationIcon: 'Bar_qualificationIcon_712da423',
        topShadow: 'Bar_topShadow_294e9f06',
        topShadow__selected: 'Bar_topShadow__selected_da07ae80',
        topLine: 'Bar_topLine_686acd4',
        barContainer: 'Bar_barContainer_e881fb5',
        selectedLeftLine: 'Bar_selectedLeftLine_ce661008',
        selectedRightLine: 'Bar_selectedRightLine_2a3d88fb',
        selectedTopLine: 'Bar_selectedTopLine_0',
        selectedBottomLine: 'Bar_selectedBottomLine_4618a141',
        fadeIn: 'Bar_fadeIn_0',
        fadeInThreeQuarters: 'Bar_fadeInThreeQuarters_0',
        fadeInHalf: 'Bar_fadeInHalf_0',
        fadeOut: 'Bar_fadeOut_0',
        fadeInWithScale: 'Bar_fadeInWithScale_0',
        slideUp: 'Bar_slideUp_0',
        scale: 'Bar_scale_0',
        raysAppearance: 'Bar_raysAppearance_0',
        rotate: 'Bar_rotate_0',
        'reverse-rotate': 'Bar_reverse-rotate_0',
        glowAppearance: 'Bar_glowAppearance_0',
        highlightAppearance: 'Bar_highlightAppearance_0',
        blink: 'Bar_blink_0',
        slideUpIn: 'Bar_slideUpIn_0',
    };
var ar = ({
        index: e,
        currentDayIndex: a,
        isFluidWidth: s,
        hasBattles: t,
        maxAchievedRank: r,
        selectedDayIndex: i,
        isQualification: n,
        className: o,
    }) => {
        const d = (0, Ga.default)(
            er.base,
            s && er.base__fluid,
            !t && er.base__noBattles,
            -1 !== i && e !== i && er.base__muted,
            e === i && er.base__selected,
        );
        return n
            ? (0, Ga.default)(d, er.base__qualification, o)
            : e <= a && r > 0
              ? (0, Ga.default)(d, er.base__rank, er[`base__rank_${Na[r]}`], o)
              : (0, Ga.default)(d, er.base__noRank, o);
    },
    sr = aa(function ({ index: e, heightRem: a, isSelected: s }) {
        const { model: t } = Qt(),
            { hasBattles: r } = t.computes.dayStatistics(e),
            i = ge(),
            n = ge(),
            o = ge(),
            d = T(a),
            c = A({ ref: i, from: { height: 0 }, to: { height: d }, config: L.slow }),
            l = A({ ref: n, from: { bottom: 0 }, to: { bottom: T(Math.max(a - 1, 0)) }, config: L.slow }),
            _ = A({ ref: o, from: { opacity: 0 }, to: { opacity: 1 }, config: L.molasses });
        return (
            Ue([i, n, o], [0, 0, 0.8]),
            (0, Ka.jsxs)(Ka.Fragment, {
                children: [
                    (0, Ka.jsx)(v.div, {
                        className: (0, Ga.default)(er.topShadow, s && er.topShadow__selected),
                        style: { bottom: d, ..._ },
                    }),
                    (0, Ka.jsx)(v.div, { className: er.topLine, style: l }),
                    (0, Ka.jsxs)(
                        v.div,
                        {
                            className: er.barContainer,
                            style: c,
                            children: [
                                (0, Ka.jsx)('div', { className: er.bar }),
                                r
                                    ? (0, Ka.jsxs)(Ka.Fragment, {
                                          children: [
                                              (0, Ka.jsx)('div', { className: er.light }),
                                              (0, Ka.jsx)('div', { className: er.sharp }),
                                          ],
                                      })
                                    : (0, Ka.jsx)('div', { className: er.hatch }),
                            ],
                        },
                        `barContainer_${e}_${s}`,
                    ),
                ],
            })
        );
    }),
    tr = aa(function ({ index: e }) {
        const { model: a } = Qt(),
            { hasBattles: s } = a.computes.dayStatistics(e);
        return (0, Ka.jsxs)(Ka.Fragment, {
            children: [
                s
                    ? (0, Ka.jsx)('div', { className: er.qualificationBg })
                    : (0, Ka.jsx)('div', { className: er.qualificationHatch }),
                (0, Ka.jsx)('div', { className: er.qualificationIcon }),
            ],
        });
    }),
    rr = aa(function ({ index: e, heightRem: a, isInitialAnimation: s }) {
        const { model: t } = Qt(),
            { isQualification: r } = t.computes.dayStatistics(e),
            i = ge(),
            n = ge(),
            o = A({ ref: i, from: { opacity: 0 }, to: { opacity: 1 } }),
            d = A({ ref: n, from: { height: '0%' }, to: { height: '100%' } });
        return (
            Ue([n, i], s ? [0, 1] : [0, 0]),
            (0, Ka.jsxs)(v.div, {
                className: er.selectedFrame,
                style: o,
                children: [
                    (0, Ka.jsx)(v.div, { className: er.selectedLeftLine, style: d }),
                    (0, Ka.jsx)(v.div, { className: er.selectedRightLine, style: d }),
                    (0, Ka.jsx)('div', {
                        className: er.selectedTopLine,
                        style: !r && a > 5 ? { bottom: a - 1 + 'rem' } : { display: 'none' },
                    }),
                    (0, Ka.jsx)('div', { className: er.selectedBottomLine }),
                ],
            })
        );
    }),
    ir = aa(
        (0, Ya.forwardRef)(
            (
                {
                    index: e,
                    mediaSize: a,
                    seasonName: s,
                    selectCallback: t,
                    unSelectCallback: r,
                    className: i,
                    isFluidWidth: n = !1,
                },
                o,
            ) => {
                const { model: d } = Qt(),
                    { selectedDayIndex: c, currentDayIndex: l } = d.root.get(),
                    {
                        isQualification: _,
                        maxAchievedRank: u,
                        hasBattles: m,
                        ratingPoints: h,
                        division: g,
                        rankInactivityPenalty: p,
                        diff: f,
                    } = d.computes.dayStatistics(e),
                    b = d.computes.maxDayRatingPoints(),
                    v =
                        b > 0
                            ? (function (e, a, s) {
                                  let t;
                                  return (
                                      (t = s >= x.ExtraLarge ? 320 : s >= x.Large ? 260 : s >= x.Medium ? 230 : 160),
                                      Math.floor((e * t) / a)
                                  );
                              })(h, b, a)
                            : 0,
                    S = e === c,
                    w = qe(),
                    j = S ? r : t(e),
                    N = (0, Ya.useMemo)(
                        () => ({
                            index: e,
                            isQualification: _,
                            seasonName: s,
                            diff: f,
                            rank: u,
                            division: g,
                            ratingPoints: h,
                            rankInactivityPenalty: p,
                            currentDayIndex: l,
                            hasBattles: m,
                        }),
                        [l, f, g, e, _, u, p, h, s, m],
                    );
                return (0, Ka.jsx)(Be, {
                    contentId: R.views.comp7.mono.lobby.tooltips.day_tooltip('resId'),
                    args: N,
                    children: (0, Ka.jsx)('div', {
                        className: ar({
                            index: e,
                            currentDayIndex: l,
                            isFluidWidth: n,
                            hasBattles: m,
                            maxAchievedRank: u,
                            selectedDayIndex: c,
                            isQualification: _,
                            className: i,
                        }),
                        onClick: m ? j : void 0,
                        onMouseEnter: m ? ee.highlight : void 0,
                        ref: o,
                        children: (0, Ka.jsxs)('div', {
                            className: er.inner,
                            children: [
                                (0, Ka.jsx)('div', { className: er.holder }),
                                (0, Ka.jsx)('div', {
                                    className: er.layersContainer,
                                    children: _
                                        ? (0, Ka.jsx)(tr, { index: e })
                                        : (0, Ka.jsx)(sr, { index: e, heightRem: v, isSelected: S }),
                                }),
                                S && (0, Ka.jsx)(rr, { index: e, heightRem: v, isInitialAnimation: w }),
                            ],
                        }),
                    }),
                });
            },
        ),
    ),
    nr = 'ChartScroll_10e4d55',
    or = 'ChartScroll_areaWrapper_58c1069e',
    dr = 'ChartScroll_areaContent_ccca9fa5';
function cr({ children: e, api: a, ...s }) {
    return (0, Ka.jsx)(pe, { api: a, children: (0, Ka.jsx)(lr, { ...s, children: e }) });
}
function lr({ itemsOffset: e = 0, children: a, className: s, areaClassNames: t, barClassNames: r, style: i }) {
    return (0, Ka.jsxs)('div', {
        className: (0, Ga.default)(nr, s),
        style: { '--offset': `${e}rem`, ...i },
        children: [
            (0, Ka.jsx)(de, {
                className: t?.base,
                classNames: { wrapper: (0, Ga.default)(or, t?.wrapper), content: (0, Ga.default)(dr, t?.content) },
                children: a,
            }),
            (0, Ka.jsx)(ue, { classNames: r }),
        ],
    });
}
var _r = 'Chart_8bf3ed9a',
    ur = 'Chart_base__hasScroll_b9b95413',
    mr = (e, a) => () => {
        e || (a(), ee.sound('arrow'), ee.sound('comp_7_gui_chart_select'));
    },
    hr = { wrapper: 'Chart_areaWrapper_1478348e', content: 'Chart_areaContent_2fe4c7ee' },
    gr = { base: 'Chart_bar_df3ebe0c' },
    pr = aa(({ width: e, className: a }) => {
        const { model: s, controls: t } = Qt(),
            { selectedDayIndex: r } = s.root.get(),
            { mediaSize: i } = U(),
            n = (0, Ya.useRef)(null),
            o =
                ((d = 22),
                E(
                    (0, Ya.useMemo)(
                        () => ({
                            settings: {
                                step: { type: 'fixed', value: T(d), clampedArrowStepTimeout: 100 },
                                animationConfig: { tension: 120, friction: 40, frequency: 0.6 },
                            },
                        }),
                        [d],
                    ),
                ));
        var d;
        const c = ea(),
            l = ta().model.season.name.get(),
            _ = s.statisticsByDay.get().length,
            u = 22 * _ > e,
            { prevIndex: m, nextIndex: h } = s.computes.otherDayIndexes(r),
            g = s.computes.targetScrollIndex(),
            p = mr(-1 === m, () => t.selectDay(m)),
            f = mr(-1 === h, () => t.selectDay(h));
        (Ee(y.ARROW_LEFT, p), Ee(y.ARROW_RIGHT, f));
        const x = (0, Ya.useCallback)(
                (e) => () => {
                    (t.selectDay(e), ee.click(), ee.sound('comp_7_gui_chart_select'));
                },
                [t],
            ),
            b = (0, Ya.useCallback)(() => {
                (t.selectDay(-1), ee.click());
            }, [t]),
            v = ke((e) => {
                const a = o.wrapperRef.current?.getBoundingClientRect(),
                    s = n.current?.getBoundingClientRect();
                a &&
                    s &&
                    (((e, a) => e.left >= a.left && e.left + e.width <= a.left + a.width)(s, a) ||
                        c.run(() => {
                            n.current && o.applyScroll(n.current.offsetLeft, e);
                        }));
            });
        return (
            Ne(() => {
                u && v();
            }),
            Ne(() => {
                ee.sound('comp_7_gui_chart_bars');
            }),
            (0, Ya.useEffect)(
                () =>
                    $e(() => {
                        u && v();
                    }, 200),
                [u, v, r],
            ),
            w(() => {
                u && v({ immediate: !0, reset: !0 });
            }, [u, v]),
            (0, Ka.jsx)(cr, {
                api: o,
                className: (0, Ga.default)(_r, u && ur, a),
                areaClassNames: hr,
                barClassNames: gr,
                style: { '--selectedBarYOffset': (u ? 10 : 30) + 'rem' },
                children: Fe(_, (a) =>
                    (0, Ka.jsx)(
                        ir,
                        {
                            index: a,
                            mediaSize: i,
                            seasonName: l,
                            selectCallback: x,
                            unSelectCallback: b,
                            isFluidWidth: 22 * _ < e,
                            ref: a === g ? n : void 0,
                        },
                        a,
                    ),
                ),
            })
        );
    }),
    fr = 'Separator_714453d5',
    xr = 'Separator_line_a7ffd056',
    br = 'Separator_venzel_5f6e04a2',
    vr = ({ className: e }) =>
        (0, Ka.jsxs)('div', {
            className: Ke(fr, e),
            children: [(0, Ka.jsx)('div', { className: xr }), (0, Ka.jsx)('div', { className: br })],
        }),
    Sr = [];
function wr(e) {
    const [a, s] = (0, Ya.useState)(!1),
        t = (function (e) {
            const a = (0, Ya.useRef)(e);
            return (
                (0, Ya.useLayoutEffect)(() => {
                    a.current = e;
                }),
                (0, Ya.useCallback)((...e) => (0, a.current)(...e), Sr)
            );
        })(() => {
            (s(!0), e());
        });
    return (
        (0, Ya.useEffect)(
            () =>
                $e(() => {
                    a && s(!1);
                }, 15e3),
            [a],
        ),
        [a, t]
    );
}
var jr = 'LoadingSpinner_13d3cf96',
    Nr = 'LoadingSpinner_base__loading_2e28c0b5',
    Cr = function ({ loading: e, className: a }) {
        return (0, Ka.jsx)('div', { className: Ke(jr, e && Nr, a) });
    },
    Pr = 'ChartHeader_a57c6360',
    kr = 'ChartHeader_heading_44e48769',
    Rr = 'ChartHeader_generalStatistics_5111bfe9',
    Ir = 'ChartHeader_generalStatistics__clickable_c9c7aa1d',
    yr = 'ChartHeader_generalStatisticsText_64eed80c',
    Ar = 'ChartHeader_icon_9956b8a5',
    Br = 'ChartHeader_separator_86596e18',
    Tr = 'ChartHeader_dailyStatistic_cc6b42c9',
    Dr = 'ChartHeader_dailyStatistic__visible_259ce014',
    Lr = 'ChartHeader_update_90744a3e',
    Er = 'ChartHeader_updateText_594e621b',
    zr = 'ChartHeader_infoIcon_84a3a650',
    Mr = 'ChartHeader_infoIcon__daily_f5e8856e',
    Hr = 'ChartHeader_venzelSeparator_3a7df730',
    Wr = 'ChartHeader_spinner_5688475e',
    Ur = 'ChartHeader_button_53d907eb',
    Vr = aa(function () {
        const { model: e, controls: a } = Qt(),
            { statisticsUpdateTimestamp: s, isStatisticsLoading: t } = e.root.get(),
            { mediaSize: r } = U(),
            [i, n] = wr(a.refresh);
        return (0, Ka.jsxs)('div', {
            className: Lr,
            children: [
                (0, Ka.jsx)(Q, {
                    text: R.strings.comp7_ext.progressionPage.chartHeader.update(),
                    binding: {
                        time: (0, Ka.jsx)(K, { datetime: s, format: ie.ShortTime }),
                        info: (0, Ka.jsx)(N, {
                            body: R.strings.comp7_ext.progressionPage.chartHeader.tooltip.update(),
                            children: (0, Ka.jsx)('div', { className: zr }),
                        }),
                    },
                    classMix: Er,
                }),
                (0, Ka.jsx)(se, {
                    size: r >= x.Large ? se.sizes.small : se.sizes.extraSmall,
                    theme: se.themes.secondary,
                    autoAlignContent: !1,
                    onClick: n,
                    disabled: Boolean(i || t),
                    className: Ur,
                    children: (0, Ka.jsx)(Cr, { loading: t, className: Wr }),
                }),
            ],
        });
    }),
    Qr = aa(function ({ className: e }) {
        const { model: a, controls: s } = Qt(),
            { selectedDayIndex: t, currentDayIndex: r } = a.root.get(),
            i = t === r,
            n = -1 !== t;
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(Pr, e),
            children: [
                (0, Ka.jsxs)('div', {
                    className: kr,
                    children: [
                        (0, Ka.jsxs)('div', {
                            className: (0, Ga.default)(Rr, n && Ir),
                            onClick: n ? () => s.selectDay(-1) : void 0,
                            onMouseEnter: n ? ee.highlight : void 0,
                            children: [
                                (0, Ka.jsx)('div', { className: Ar }),
                                (0, Ka.jsx)('div', {
                                    className: yr,
                                    children: String(
                                        R.strings.comp7_ext.progressionPage.chartHeader.$dyn(
                                            n ? 'backToGeneral' : 'general',
                                        ),
                                    ),
                                }),
                            ],
                        }),
                        (0, Ka.jsxs)('div', {
                            className: (0, Ga.default)(Tr, n && Dr),
                            children: [
                                (0, Ka.jsx)('div', { className: Br }),
                                i
                                    ? (0, Ka.jsx)(Q, {
                                          text: R.strings.comp7_ext.progressionPage.chartHeader.todayStatistic(),
                                      })
                                    : (0, Ka.jsx)(Q, {
                                          text: R.strings.comp7_ext.progressionPage.chartHeader.statisticDay(),
                                          binding: { day: t + 1 },
                                      }),
                                (0, Ka.jsx)(N, {
                                    body: i
                                        ? R.strings.comp7_ext.progressionPage.chartHeader.tooltip.todayInfo()
                                        : R.strings.comp7_ext.progressionPage.chartHeader.tooltip.info(),
                                    children: (0, Ka.jsx)('div', { className: (0, Ga.default)(zr, Mr) }),
                                }),
                            ],
                        }),
                        (0, Ka.jsx)(Vr, {}),
                    ],
                }),
                (0, Ka.jsx)(vr, { className: Hr }),
            ],
        });
    }),
    $r = 'LastUpdate_ea4456f',
    qr = 'LastUpdate_dataUpdate_4273867c',
    Or = ({ timestamp: e, className: a, isLastBestUserPointsValueLoading: s = !1 }) =>
        (0, Ka.jsx)('div', {
            className: (0, Ga.default)($r, a),
            children: s
                ? (0, Ka.jsx)(Q, { text: R.strings.comp7_ext.lastUpdateNote.lastBestUserPoints.update(), classMix: qr })
                : (0, Ka.jsx)(Bt, { timestamp: e }),
        }),
    Fr = (e, a) => e > 0 || a,
    Yr = 'RankInfo_d0b952ed',
    Gr = 'RankInfo_highlight_23f2f1b1',
    Xr = 'RankInfo_formattedText_6a63affe',
    Kr = ({ rank: e, from: a, topPercentage: s, className: t, classNames: r }) =>
        (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(Yr, t),
            children: [
                (0, Ka.jsx)('div', { className: Gr }),
                (0, Ka.jsx)(De, {
                    text: String(R.strings.comp7_ext.rankInfo.current.$dyn(ga(e))),
                    binding: { topPercentage: s, fromScore: (0, Ka.jsx)(We, { value: a }) },
                    classMix: (0, Ga.default)(Xr, r?.text),
                }),
            ],
        }),
    Jr = ({ rank: e, division: a, from: s, to: t, className: r, children: i }) =>
        (0, Ka.jsx)(Be, {
            contentId: R.views.comp7.mono.lobby.tooltips.division_tooltip('resId'),
            args: { rank: e, division: a, from: s, to: t },
            children: (0, Ka.jsx)('div', { className: r, children: i }),
        }),
    Zr = 'RankProgressDivisions_db142f88',
    ei = 'RankProgressDivisions_divisionItem_5be72f57',
    ai = 'RankProgressDivisions_divisionItem__current_6ced0f10',
    si = 'RankProgressDivisions_highlightContainer_70c42138',
    ti = 'RankProgressDivisions_radialBack_57eba5b8',
    ri = 'RankProgressDivisions_mainBack_8fe6b2d0',
    ii = 'RankProgressDivisions_bottomLine_60e68b1c',
    ni = 'RankProgressDivisions_bottomLine__first_cd7ca41d',
    oi = 'RankProgressDivisions_bottomLine__second_787c2960',
    di = 'RankProgressDivisions_bottomLine__third_b38a7c3b',
    ci = 'RankProgressDivisions_container_a9b2b1f0',
    li = 'RankProgressDivisions_divisionName_bce75f3f',
    _i = 'RankProgressDivisions_note_5ffe2513',
    ui = aa(({ itemIndex: e, rank: a, from: s, step: t }) => {
        const { model: r } = Qt(),
            i = r.computes.divisions(e);
        return (0, Ka.jsx)('div', {
            className: Zr,
            children: c(i, (e, r) => {
                const i = e.state === Ra.Current;
                return (0, Ka.jsxs)(
                    Jr,
                    {
                        rank: a,
                        division: e.name,
                        from: s + t * r,
                        to: s + t * (r + 1),
                        className: (0, Ga.default)(ei, i && ai),
                        children: [
                            i &&
                                (0, Ka.jsxs)('div', {
                                    className: si,
                                    children: [
                                        (0, Ka.jsx)('div', { className: ti }),
                                        (0, Ka.jsx)('div', { className: ri }),
                                        (0, Ka.jsx)('div', { className: (0, Ga.default)(ii, ni) }),
                                        (0, Ka.jsx)('div', { className: (0, Ga.default)(ii, oi) }),
                                        (0, Ka.jsx)('div', { className: (0, Ga.default)(ii, di) }),
                                    ],
                                }),
                            (0, Ka.jsxs)('div', {
                                className: ci,
                                children: [
                                    i &&
                                        (0, Ka.jsx)('div', {
                                            className: _i,
                                            children: R.strings.comp7_ext.division.note(),
                                        }),
                                    (0, Ka.jsx)('div', { className: li, children: ba(e.name) }),
                                ],
                            }),
                        ],
                    },
                    r,
                );
            }),
        });
    }),
    mi = {
        pointLineWidth: '1rem',
        base: 'RankProgressPoints_d4478c46',
        point: 'RankProgressPoints_point_1b3696e3',
        base__top: 'RankProgressPoints_base__top_aa2f1644',
        base__bottom: 'RankProgressPoints_base__bottom_aa2f1644',
        pointLine: 'RankProgressPoints_pointLine_355cb3a7',
        pointValue: 'RankProgressPoints_pointValue_81b21b0c',
        pointValue__next: 'RankProgressPoints_pointValue__next_2dbef254',
        fadeIn: 'RankProgressPoints_fadeIn_aa2f1644',
        fadeInThreeQuarters: 'RankProgressPoints_fadeInThreeQuarters_aa2f1644',
        fadeInHalf: 'RankProgressPoints_fadeInHalf_aa2f1644',
        fadeOut: 'RankProgressPoints_fadeOut_aa2f1644',
        fadeInWithScale: 'RankProgressPoints_fadeInWithScale_aa2f1644',
        slideUp: 'RankProgressPoints_slideUp_aa2f1644',
        scale: 'RankProgressPoints_scale_aa2f1644',
        raysAppearance: 'RankProgressPoints_raysAppearance_aa2f1644',
        rotate: 'RankProgressPoints_rotate_aa2f1644',
        'reverse-rotate': 'RankProgressPoints_reverse-rotate_aa2f1644',
        glowAppearance: 'RankProgressPoints_glowAppearance_aa2f1644',
        highlightAppearance: 'RankProgressPoints_highlightAppearance_aa2f1644',
        blink: 'RankProgressPoints_blink_aa2f1644',
        slideUpIn: 'RankProgressPoints_slideUpIn_aa2f1644',
    },
    hi = (function (e) {
        return ((e.Top = 'top'), (e.Bottom = 'bottom'), e);
    })({}),
    gi = (e, a) => {
        const s = a > 0 ? (100 / a) * e + '%' : '0%';
        return e === a ? { left: s, transform: `translateX(-${mi.pointLineWidth})` } : { left: s };
    },
    pi = ({ step: e, divisionsCount: a, from: s, currentDivisionIndex: t, direction: r = 'bottom', className: i }) =>
        (0, Ka.jsx)('div', {
            className: (0, Ga.default)(mi.base, mi[`base__${r}`], i),
            children: Fe(a + 1, (r) => {
                const i = void 0 !== t && r === t + 1;
                return (0, Ka.jsxs)(
                    'div',
                    {
                        className: mi.point,
                        style: gi(r, a),
                        children: [
                            (0, Ka.jsx)('div', { className: mi.pointLine }),
                            void 0 !== s &&
                                (0, Ka.jsx)('div', {
                                    className: (0, Ga.default)(mi.pointValue, i && mi.pointValue__next),
                                    children: s + e * r,
                                }),
                        ],
                    },
                    r,
                );
            }),
        }),
    fi = 'RankProgress_ea8c22b5',
    xi = 'RankProgress_linesWithValues_658c3ba6',
    bi = 'RankProgress_progress_80ee363',
    vi = {
        freezed: !0,
        withStack: !1,
        type: J.Simple,
        delta: { duration: 0, delay: 0 },
        line: { duration: 0, delay: 0 },
    },
    Si = aa(({ rank: e, itemIndex: a, from: s, to: t, className: r }) => {
        const { model: i } = Qt(),
            { currentScore: n } = i.root.get(),
            o = i.computes.divisionsConfig(a),
            d = t - s,
            c = Ia(s, t, o.count);
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(fi, r),
            children: [
                (0, Ka.jsx)(ui, { itemIndex: a, rank: e, from: s, step: c }),
                (0, Ka.jsx)(pi, {
                    step: c,
                    divisionsCount: o.count,
                    direction: hi.Top,
                    currentDivisionIndex: o.currentDivisionIndex,
                }),
                (0, Ka.jsx)('div', {
                    className: bi,
                    children: (0, Ka.jsx)(ca, { maxValue: d, value: n - s, animationSettings: vi }),
                }),
                (0, Ka.jsx)(pi, {
                    step: c,
                    divisionsCount: o.count,
                    from: s,
                    currentDivisionIndex: o.currentDivisionIndex,
                    className: xi,
                }),
            ],
        });
    }),
    wi = 'RankStatusDescription_9595d0d5',
    ji = (e) =>
        'number' == typeof e?.pointsCount ? { ...e, pointsCount: (0, Ka.jsx)(We, { value: e.pointsCount }) } : e,
    Ni = ({ text: e, binding: a, className: s }) =>
        (0, Ka.jsx)(De, { text: e, binding: ji(a), classMix: (0, Ga.default)(wi, s) }),
    Ci = (e) => {
        switch (!0) {
            case e >= x.ExtraLarge:
                return pa.x600;
            case e >= x.Medium:
                return pa.x420;
            default:
                return pa.x260;
        }
    },
    Pi = 'CurrentProgressionItem_b8f697f9',
    ki = 'CurrentProgressionItem_base__hasProgressBar_b62d9047',
    Ri = 'CurrentProgressionItem_rankNameContainer_55288ef7',
    Ii = 'CurrentProgressionItem_rankName_1e1b1825',
    yi = 'CurrentProgressionItem_rankEmblem_e2cd2db8',
    Ai = 'CurrentProgressionItem_rankDescription_d49d0f8f',
    Bi = 'CurrentProgressionItem_rankEmblemContainer_8c8f8a5c',
    Ti = 'CurrentProgressionItem_glowContainer_ec20c1aa',
    Di = 'CurrentProgressionItem_scoreContainer_17d6ab11',
    Li = 'CurrentProgressionItem_score_f00041d6',
    Ei = 'CurrentProgressionItem_rankInactivity_57ff2e5b',
    zi = 'CurrentProgressionItem_rankInactivityCount_3cc2bb4',
    Mi = 'CurrentProgressionItem_rankInactivity__red_3f79612b',
    Hi = 'CurrentProgressionItem_rankInactivityIconContainer_74adfe0d',
    Wi = 'CurrentProgressionItem_rankInactivityIcon_ea8a1cf4',
    Ui = 'CurrentProgressionItem_rankInfo_48615e94',
    Vi = 'CurrentProgressionItem_rankProgress_1e9f9625',
    Qi = 'CurrentProgressionItem_status_d3c6050e',
    $i = 'CurrentProgressionItem_centered_88354ddf',
    qi = 'CurrentProgressionItem_lastUpdate_ef85f29f',
    Oi = { glow: 'CurrentProgressionItem_glow_4cf800c7' },
    Fi = aa(() => {
        const { model: e } = Qt(),
            { model: a } = ta(),
            { mediaSize: s } = U(),
            {
                currentItemIndex: t,
                topPercentage: r,
                currentScore: i,
                rankInactivityCount: n,
                lastBestUserPointsValue: o,
                isLastBestUserPointsValueLoading: d,
                leaderboardUpdateTimestamp: c,
            } = e.root.get(),
            l = e.computes.item(t),
            { division: _, hasInfo: u } = e.computes.rankSettings(t),
            m = fa(l.rank);
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(Pi, m && ki),
            children: [
                (0, Ka.jsxs)('div', {
                    className: Ri,
                    children: [
                        (0, Ka.jsx)('div', { className: Ii, children: wa(l.rank, { upperCase: !0 }) }),
                        (0, Ka.jsx)('div', { className: Ai, children: R.strings.comp7_ext.rank.current() }),
                    ],
                }),
                (0, Ka.jsxs)('div', {
                    className: Bi,
                    children: [
                        (0, Ka.jsx)(ya, { className: Ti, classNames: Oi }),
                        (0, Ka.jsx)(Be, {
                            contentId: R.views.comp7.mono.lobby.tooltips.progression_table_tooltip('resId'),
                            ignoreShowDelay: !0,
                            children: (0, Ka.jsx)('div', {
                                children: (0, Ka.jsx)(xa, {
                                    rank: l.rank,
                                    division: _,
                                    size: Ci(s),
                                    seasonName: a.season.name.get(),
                                    className: yi,
                                }),
                            }),
                        }),
                    ],
                }),
                (0, Ka.jsxs)('div', {
                    className: Di,
                    children: [
                        (0, Ka.jsx)('div', { className: Li, children: (0, Ka.jsx)(We, { value: i }) }),
                        l.hasRankInactivity &&
                            (0, Ka.jsx)(Be, {
                                ignoreShowDelay: !0,
                                contentId: R.views.comp7.mono.lobby.tooltips.rank_inactivity_tooltip('resId'),
                                args: { rankInactivityCount: n },
                                children: (0, Ka.jsxs)('div', {
                                    className: (0, Ga.default)(Ei, 0 === n && Mi),
                                    children: [
                                        (0, Ka.jsx)('div', { className: zi, children: n }),
                                        (0, Ka.jsx)('div', {
                                            className: Hi,
                                            children: (0, Ka.jsx)('div', { className: Wi }),
                                        }),
                                    ],
                                }),
                            }),
                    ],
                }),
                u &&
                    (0, Ka.jsx)('div', {
                        className: Ui,
                        children: (0, Ka.jsx)(Kr, {
                            rank: l.rank,
                            from: l.from,
                            topPercentage: r,
                            classNames: { text: $i },
                        }),
                    }),
                m
                    ? (0, Ka.jsx)(Si, { rank: l.rank, itemIndex: t, from: l.from, to: l.to, className: Vi })
                    : (0, Ka.jsxs)('div', {
                          className: Qi,
                          children: [
                              (0, Ka.jsx)(Ni, {
                                  text: Fr(o, d)
                                      ? ja(R.strings.comp7_ext.rankItemStatus.current.extendedDescription, l.rank)
                                      : ja(R.strings.comp7_ext.rankItemStatus.current.description, l.rank),
                                  binding: { topPercentage: r, pointsCount: o },
                                  className: $i,
                              }),
                              (0, Ka.jsx)(Or, { timestamp: c, isLastBestUserPointsValueLoading: d, className: qi }),
                          ],
                      }),
            ],
        });
    }),
    Yi = 'Slide_f0a76533',
    Gi = 'Slide_icon_61f1d96d',
    Xi = 'Slide_progressionLevel_af90939f',
    Ki = 'Slide_description_209de83b',
    Ji = 'Slide_progress_c9912192',
    Zi = 'Slide_progressHeading_760b3b5d',
    en = 'Slide_current_aff8e83c',
    an = { ...he, delta: { delay: 1e3, duration: 500 } },
    sn = { line: 'Slide_line_4b7a6b8d' };
function tn(e) {
    const a = e.split('_')[0];
    return 'inscription' === a
        ? `${R.images.gui.maps.vehicles.decals.inscriptions.special.$dyn(e)}`
        : 'sticker' === a
          ? `${R.images.gui.maps.vehicles.decals.player_stickers.special.$dyn(e)}`
          : void 0;
}
function rn(e) {
    return {
        backgroundImage: `url(${R.images.gui.maps.icons.customization.progression_styles.icons.$dyn(`level_${e}`)})`,
    };
}
var nn = aa(function ({ index: e, style: s }) {
        const { model: t, controls: r } = Qt(),
            {
                iconKey: n,
                description: o,
                currentProgress: d,
                maxProgress: c,
                delta: l,
                customizationId: _,
                progressionLevel: u,
            } = t.computes.getSlideByIndex(e),
            m = (0, Ya.useCallback)((e) => {
                switch (e) {
                    case fe.Grow:
                        return ee.sound('comp_7_progressbar_delta_start');
                    case fe.Shrink:
                        return ee.sound('comp_7_progressbar_delta_stop');
                }
            }, []);
        return (0, Ka.jsxs)(v.div, {
            className: Yi,
            style: s,
            children: [
                (0, Ka.jsx)(i, {
                    args: { tooltipId: 'techCustomizationItem', customizationId: _, progressionLevel: u },
                    children: (0, Ka.jsx)('div', {
                        className: Gi,
                        style: { backgroundImage: `url(${tn(n)})` },
                        children: u > 0 && (0, Ka.jsx)('div', { className: Xi, style: rn(u) }),
                    }),
                }),
                (0, Ka.jsx)(G, { text: o, lines: 3, className: Ki, classNames: sn }),
                c > 1 &&
                    (0, Ka.jsxs)('div', {
                        className: Ji,
                        children: [
                            (0, Ka.jsx)(Q, {
                                text: R.strings.comp7_ext.progressionPage.customization.counter(),
                                binding: {
                                    currentProgress: (0, Ka.jsx)('span', { className: en, children: d }),
                                    maxProgress: c,
                                },
                                classMix: Zi,
                            }),
                            (0, Ka.jsx)(ca, {
                                size: a.Small,
                                value: d,
                                maxValue: c,
                                deltaFrom: d - l,
                                animationSettings: an,
                                onChangeAnimationState: m,
                                onEndAnimation: () => r.customizationProgressShown(_),
                            }),
                        ],
                    }),
            ],
        });
    }),
    on = 'Slider_671b7f6e',
    dn = 'Slider_arrow_cef005fb',
    cn = 'Slider_arrow__left_2541745',
    ln = 'Slider_arrow__right_b3c063d2',
    _n = 'Slider_clippedContainer_2855c48e',
    un = (e, a) => () => {
        e || (a(), ee.sound('arrow'));
    },
    mn = aa(function ({ className: e }) {
        const { model: a, controls: s } = Qt(),
            t = a.previousSlideIndex.get(),
            r = a.currentSlideIndex.get(),
            i = a.customizationTasks.get(),
            n = 0 === r,
            o = r === i.length - 1,
            d = un(n, () => s.setCurrentSlideIndex(r - 1)),
            c = un(o, () => s.setCurrentSlideIndex(r + 1)),
            l = r < t,
            _ = Z(r, {
                initial: { opacity: 0 },
                from: { opacity: 0, transform: l ? 'translateX(-30%)' : 'translateX(30%)' },
                enter: { opacity: 1, transform: 'translateX(0%)' },
                leave: { opacity: 0, transform: l ? 'translateX(30%)' : 'translateX(-30%)' },
                config: { duration: 200, delay: 0, easing: je.easeOutCubic },
                exitBeforeEnter: !0,
            });
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(on, e),
            children: [
                (0, Ka.jsx)(
                    da,
                    {
                        size: 'extraSmall',
                        direction: 'left',
                        disabled: n,
                        className: (0, Ga.default)(dn, cn),
                        onClick: d,
                    },
                    `prev_${r}`,
                ),
                (0, Ka.jsx)(
                    da,
                    {
                        size: 'extraSmall',
                        direction: 'right',
                        disabled: o,
                        className: (0, Ga.default)(dn, ln),
                        onClick: c,
                    },
                    `next_${r}`,
                ),
                _((e, a) => (0, Ka.jsx)('div', { className: _n, children: (0, Ka.jsx)(nn, { index: a, style: e }) })),
            ],
        });
    }),
    hn = 'Customization_b5005863',
    gn = 'Customization_header_d905d185',
    pn = 'Customization_heading_22abf2a8',
    fn = 'Customization_headingText_84ca034d',
    xn = 'Customization_separator_cff8fe1d',
    bn = 'Customization_noTasks_3d376941',
    vn = 'Customization_doneText_5ffca92b',
    Sn = aa(function ({ className: e }) {
        const { model: a, controls: s } = Qt(),
            { mediaSize: t } = U(),
            r = a.customizationTasks.get(),
            i = Ze(r, a.currentSlideIndex.get()),
            n = r.length > 0;
        return (0, Ka.jsxs)('div', {
            className: Ke(hn, e),
            children: [
                (0, Ka.jsxs)('div', {
                    className: gn,
                    children: [
                        (0, Ka.jsx)('div', {
                            className: pn,
                            children: (0, Ka.jsx)(N, {
                                body: R.strings.comp7_ext.progressionPage.customization.headingTooltip(),
                                isEnabled: n,
                                children: (0, Ka.jsx)('div', {
                                    children: (0, Ka.jsx)(Q, {
                                        text: n
                                            ? R.strings.comp7_ext.progressionPage.customization.tasks(r.length)
                                            : R.strings.comp7_ext.progressionPage.customization.tasksDone(),
                                        binding: { taskNumber: r.length },
                                        classMix: fn,
                                    }),
                                }),
                            }),
                        }),
                        (0, Ka.jsx)(se, {
                            size: t >= x.Large ? se.sizes.small : se.sizes.extraSmall,
                            theme: se.themes.secondary,
                            autoAlignContent: !1,
                            onClick: () => s.openCustomization(i?.customizationId ?? 0),
                            children: R.strings.comp7_ext.progressionPage.customization.toStyle(),
                        }),
                    ],
                }),
                (0, Ka.jsx)(vr, { className: xn }),
                n
                    ? (0, Ka.jsx)(mn, {})
                    : (0, Ka.jsxs)('div', {
                          className: bn,
                          children: [
                              (0, Ka.jsx)('div', {
                                  className: vn,
                                  children: R.strings.comp7_ext.progressionPage.customization.completed(),
                              }),
                              (0, Ka.jsx)(Q, {
                                  text: R.strings.comp7_ext.progressionPage.customization.completedDescription(),
                              }),
                          ],
                      }),
            ],
        });
    }),
    wn = aa(function ({ classNames: e }) {
        const { mediaSize: a } = U(),
            { model: s, controls: t } = Qt(),
            { isStatisticsLoading: r } = s.root.get(),
            [i, n] = wr(t.refresh);
        return (0, Ka.jsx)(Ns, {
            children: (0, Ka.jsxs)(se, {
                theme: se.themes.secondary,
                onClick: n,
                size: a >= x.Large ? se.sizes.medium : se.sizes.small,
                disabled: Boolean(i || r),
                className: e?.button,
                children: [
                    (0, Ka.jsx)(Cr, { loading: r, className: e?.spinner }),
                    r
                        ? R.strings.comp7_ext.progressionPage.error.refreshing()
                        : R.strings.comp7_ext.progressionPage.error.refresh(),
                ],
            }),
        });
    }),
    jn = (0, Ya.createContext)(null),
    Nn = () => {
        const e = (0, Ya.useContext)(jn);
        if (null === e)
            throw new Error('useIndicators hook was called in component, which is not wrapped in IndicatorsProvider');
        return e;
    },
    Cn = aa(({ children: e }) => {
        const { mediaSize: a } = U(),
            { model: s } = ta(),
            t = ((e) => (e >= x.Medium ? pa.x64 : pa.x40))(a),
            { model: r } = Qt(),
            { statisticsMode: i, selectedDayIndex: n } = r.root.get(),
            o = s.season.name.get(),
            d = (0, Ya.useMemo)(
                () => ({ isCompact: a < x.Medium, emblemSize: t, statisticsMode: i, seasonName: o }),
                [t, i, a, o],
            );
        return (0, Ka.jsx)(jn.Provider, { value: d, children: e });
    }),
    Pn = 'StatisticsIndicators_b51640da',
    kn = 'StatisticsIndicators_blockContainer_3542f044',
    Rn = 'StatisticsIndicators_blockContainer__rank_c1b1351b',
    In = 'StatisticsIndicators_blockContainer__qualification_7be14031',
    yn = 'StatisticsIndicators_blockContainer__battles_c8cb4e5d',
    An = 'StatisticsIndicators_blockContainer__wins_37236dae',
    Bn = 'StatisticsIndicators_blockContainer__damage_684733ae',
    Tn = 'StatisticsIndicators_noRankDescription_915e6fda',
    Dn = 'StatisticsIndicators_rankEmblem_b39dce8e',
    Ln = 'StatisticsIndicators_blockInfo_2f8fa787',
    En = 'StatisticsIndicators_indicatorValue_c9a4901d',
    zn = 'StatisticsIndicators_indicatorValue__compact_a000cb0a',
    Mn = 'StatisticsIndicators_additionalInfo_417d1755',
    Hn = 'StatisticsIndicators_diffDescription_9e134252',
    Wn = 'StatisticsIndicators_subIndicator_4a61a07c',
    Un = 'StatisticsIndicators_subIndicator__victory_c1b1351b',
    Vn = 'StatisticsIndicators_subIndicatorValue_1431d50a',
    Qn = 'StatisticsIndicators_subIndicator__defeat_c1b1351b',
    $n = 'StatisticsIndicators_subIndicator__draw_c1b1351b',
    qn = 'StatisticsIndicators_icon_cbe85555',
    On = 'StatisticsIndicators_subIndicator__solo_c1b1351b',
    Fn = 'StatisticsIndicators_subIndicator__platoon_c1b1351b',
    Yn = 'StatisticsIndicators_indicatorIcon_b82fc36a',
    Gn = 'StatisticsIndicators_blockContainer__prestigePoints_c1b1351b',
    Xn = 'StatisticsIndicators_link_3a7046ef',
    Kn = 'StatisticsIndicators_linkText_1efae1a9';
function Jn({
    value: e,
    iconSlot: a = (0, Ka.jsx)('div', { className: Yn }),
    tooltipArgs: s,
    className: t,
    children: r,
}) {
    const { isCompact: i } = Nn();
    return (0, Ka.jsx)($, {
        tooltipArgs: s,
        children: (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(kn, t),
            children: [
                !i && a,
                (0, Ka.jsxs)('div', {
                    className: Ln,
                    children: [
                        (0, Ka.jsxs)('div', {
                            className: (0, Ga.default)(En, i && zn),
                            children: [i && a, 'number' == typeof e ? (0, Ka.jsx)(We, { value: e }) : e],
                        }),
                        (0, Ka.jsx)('div', { className: Mn, children: r }),
                    ],
                }),
            ],
        }),
    });
}
function Zn({ value: e, className: a }) {
    return (0, Ka.jsxs)('div', {
        className: (0, Ga.default)(Wn, a),
        children: [
            (0, Ka.jsx)('div', { className: qn }),
            (0, Ka.jsx)('div', { className: Vn, children: (0, Ka.jsx)(Ba, { value: e }) }),
        ],
    });
}
function eo() {
    const { emblemSize: e, seasonName: a } = Nn();
    return (0, Ka.jsxs)('div', {
        className: (0, Ga.default)(kn, In),
        children: [
            (0, Ka.jsx)(Ca, { size: e, seasonName: a, className: Dn }),
            (0, Ka.jsx)('div', { className: Tn, children: R.strings.comp7_ext.rank.qualification() }),
        ],
    });
}
function ao({ rank: e, value: a, tooltipArgs: s, children: t }) {
    const { emblemSize: r, seasonName: i, statisticsMode: n } = Nn(),
        o = (0, Ya.useMemo)(
            () => ({
                contentId: R.views.comp7.mono.lobby.tooltips.rank_indicator_tooltip('resId'),
                args: {
                    statisticsMode: n,
                    seasonName: i,
                    rank: e,
                    division: fa(e) ? s?.division : void 0,
                    ratingPoints: s?.ratingPoints,
                    diff: s?.diff,
                    maxAchievedRatingPoints: s?.maxAchievedRatingPoints,
                    dayOfMaxRatingIndex: s?.dayOfMaxRatingIndex,
                },
                ignoreShowDelay: !0,
            }),
            [s, e, i, n],
        );
    return (0, Ka.jsx)(Jn, {
        className: Rn,
        iconSlot: (0, Ka.jsx)(xa, { rank: e, size: r, seasonName: i, className: Dn }),
        value: a,
        tooltipArgs: o,
        children: t,
    });
}
function so({ soloBattlesCount: e, superPlatoonBattlesCount: a }) {
    const { statisticsMode: s } = Nn(),
        t = (0, Ya.useMemo)(
            () => ({
                contentId: R.views.comp7.mono.lobby.tooltips.battles_indicator_tooltip('resId'),
                args: { soloBattlesCount: e, superPlatoonBattlesCount: a, statisticsMode: s },
                ignoreShowDelay: !0,
            }),
            [e, s, a],
        );
    return (0, Ka.jsxs)(Jn, {
        className: yn,
        value: e + a,
        tooltipArgs: t,
        children: [(0, Ka.jsx)(Zn, { value: e, className: On }), (0, Ka.jsx)(Zn, { value: a, className: Fn })],
    });
}
function to({ value: e, winsCount: a, lossCount: s, drawCount: t }) {
    const { statisticsMode: r } = Nn(),
        i = (0, Ya.useMemo)(
            () => ({
                contentId: R.views.comp7.mono.lobby.tooltips.wins_indicator_tooltip('resId'),
                args: { winRate: e, winsCount: a, lossCount: s, drawCount: t, statisticsMode: r },
                ignoreShowDelay: !0,
            }),
            [t, s, r, e, a],
        ),
        n = 0 === e ? -1 : e;
    return (0, Ka.jsxs)(Jn, {
        className: An,
        value: Ta({ value: n, isPercentage: !0 }),
        tooltipArgs: i,
        children: [
            (0, Ka.jsx)(Zn, { value: a, className: Un }),
            (0, Ka.jsx)(Zn, { value: s, className: Qn }),
            (0, Ka.jsx)(Zn, { value: t, className: $n }),
        ],
    });
}
function ro({ value: e, recordDamageDealt: a, recordDamageDealtVehicleName: s }) {
    const { statisticsMode: t } = Nn(),
        r = (0, Ya.useMemo)(
            () => ({
                contentId: R.views.comp7.mono.lobby.tooltips.damage_indicator_tooltip('resId'),
                args: {
                    statisticsMode: t,
                    averageDamageDealt: e,
                    recordDamageDealt: a,
                    recordDamageDealtVehicleName: s,
                },
                ignoreShowDelay: !0,
            }),
            [a, s, t, e],
        );
    return (0, Ka.jsx)(Jn, {
        className: Bn,
        value: e,
        tooltipArgs: r,
        children: (0, Ka.jsx)(Q, { text: R.strings.comp7_ext.progressionPage.statistic.averageDamage() }),
    });
}
function io({ value: e, recordPrestige: a, recordPrestigeVehicleName: s }) {
    const { statisticsMode: t } = Nn(),
        r = (0, Ya.useMemo)(
            () => ({
                contentId: R.views.comp7.mono.lobby.tooltips.prestige_indicator_tooltip('resId'),
                args: { statisticsMode: t, averagePrestige: e, recordPrestige: a, recordPrestigeVehicleName: s },
                ignoreShowDelay: !0,
            }),
            [a, s, t, e],
        );
    return (0, Ka.jsx)(Jn, {
        className: Gn,
        value: e,
        tooltipArgs: r,
        children: (0, Ka.jsx)(Q, { text: R.strings.comp7_ext.progressionPage.statistic.averagePrestigePoints() }),
    });
}
var no = aa(({ index: e }) => {
        const { model: a } = Qt(),
            {
                isQualification: s,
                ratingPoints: t,
                maxAchievedRatingPoints: r,
                maxAchievedRank: i,
                division: n,
                diff: o,
                soloBattlesCount: d,
                superPlatoonBattlesCount: c,
                winRate: l,
                winsCount: _,
                lossCount: u,
                drawCount: m,
                averageDamageDealt: h,
                averagePrestige: g,
                recordDamageDealt: p,
                recordDamageDealtVehicleName: f,
                recordPrestige: x,
                recordPrestigeVehicleName: b,
            } = a.computes.dayStatistics(e);
        return (0, Ka.jsxs)(Ka.Fragment, {
            children: [
                s
                    ? (0, Ka.jsx)(eo, {})
                    : (0, Ka.jsx)(ao, {
                          rank: i,
                          value: t,
                          tooltipArgs: { maxAchievedRatingPoints: r, division: n, rank: i, diff: o, ratingPoints: t },
                          children: (0, Ka.jsx)(Q, {
                              text: R.strings.comp7_ext.progressionPage.statistic.dayRecordDescription(),
                              binding: { diff: (0, Ka.jsx)(Aa, { value: o }) },
                              classMix: Hn,
                          }),
                      }),
                (0, Ka.jsx)(so, { soloBattlesCount: d, superPlatoonBattlesCount: c }),
                (0, Ka.jsx)(to, { value: l, winsCount: _, lossCount: u, drawCount: m }),
                (0, Ka.jsx)(ro, { value: h, recordDamageDealt: p, recordDamageDealtVehicleName: f }),
                (0, Ka.jsx)(io, { value: g, recordPrestige: x, recordPrestigeVehicleName: b }),
            ],
        });
    }),
    oo = aa(() => {
        const { model: e, controls: a } = Qt(),
            {
                maxAchievedRatingPoints: s,
                maxAchievedRank: t,
                soloBattlesCount: r,
                superPlatoonBattlesCount: i,
                winRate: n,
                winsCount: o,
                lossCount: d,
                drawCount: c,
                averageDamageDealt: l,
                averagePrestige: _,
                dayOfMaxRatingIndex: u,
                recordDamageDealt: m,
                recordDamageDealtVehicleName: h,
                recordPrestige: g,
                recordPrestigeVehicleName: p,
            } = e.seasonStatisticsModel.get();
        return (0, Ka.jsxs)(Ka.Fragment, {
            children: [
                (0, Ka.jsx)(ao, {
                    rank: t,
                    value: s,
                    tooltipArgs: {
                        maxAchievedRatingPoints: s,
                        rank: t,
                        division: e.computes.dayStatistics(u).division,
                        dayOfMaxRatingIndex: u,
                    },
                    children: (0, Ka.jsx)(Q, {
                        text: R.strings.comp7_ext.progressionPage.statistic.seasonRecordDescription(),
                        binding: {
                            seasonRecordDescriptionDay: (0, Ka.jsx)('div', {
                                className: Xn,
                                onClick: () => a.selectDay(u),
                                children: (0, Ka.jsx)(Q, {
                                    text: R.strings.comp7_ext.progressionPage.statistic.seasonRecordDescriptionDay(),
                                    binding: { day: u + 1 },
                                    classMix: Kn,
                                }),
                            }),
                        },
                    }),
                }),
                (0, Ka.jsx)(so, { soloBattlesCount: r, superPlatoonBattlesCount: i }),
                (0, Ka.jsx)(to, { value: n, winsCount: o, lossCount: d, drawCount: c }),
                (0, Ka.jsx)(ro, { value: l, recordDamageDealt: m, recordDamageDealtVehicleName: h }),
                (0, Ka.jsx)(io, { value: _, recordPrestige: g, recordPrestigeVehicleName: p }),
            ],
        });
    }),
    co = ({ className: e }) => {
        const { model: a } = Qt(),
            { statisticsMode: s, selectedDayIndex: t } = a.root.get();
        return (0, Ka.jsx)('div', {
            className: (0, Ga.default)(Pn, e),
            children: s === ma.Day && -1 !== t ? (0, Ka.jsx)(no, { index: t }) : (0, Ka.jsx)(oo, {}),
        });
    },
    lo = ['vehicles', 'battles', 'winSeries', 'damage', 'assist', 'prestigePoints', 'maxFrags', 'destruction'],
    _o = {
        base: 'VehiclesStatistic_ac99ffab',
        base__expanded: 'VehiclesStatistic_base__expanded_df09ab9a',
        header: 'VehiclesStatistic_header_59a87428',
        headerText: 'VehiclesStatistic_headerText_d98bc724',
        table: 'VehiclesStatistic_table_21d93ed0',
        tableHeader: 'VehiclesStatistic_tableHeader_2117af40',
        row: 'VehiclesStatistic_row_9c1a21d8',
        row__highlighted: 'VehiclesStatistic_row__highlighted_9063cb96',
        column: 'VehiclesStatistic_column_e20f82a',
        column__vehicles: 'VehiclesStatistic_column__vehicles_bb42c9a9',
        column__winSeries: 'VehiclesStatistic_column__winSeries_e4e86d0',
        column__prestigePoints: 'VehiclesStatistic_column__prestigePoints_f824eb4b',
        image: 'VehiclesStatistic_image_123ccd8a',
        tableContent: 'VehiclesStatistic_tableContent_c21e80b4',
        fadeIn: 'VehiclesStatistic_fadeIn_e4e86d0',
        fadeInThreeQuarters: 'VehiclesStatistic_fadeInThreeQuarters_e4e86d0',
        fadeInHalf: 'VehiclesStatistic_fadeInHalf_e4e86d0',
        fadeOut: 'VehiclesStatistic_fadeOut_e4e86d0',
        fadeInWithScale: 'VehiclesStatistic_fadeInWithScale_e4e86d0',
        slideUp: 'VehiclesStatistic_slideUp_e4e86d0',
        scale: 'VehiclesStatistic_scale_e4e86d0',
        raysAppearance: 'VehiclesStatistic_raysAppearance_e4e86d0',
        rotate: 'VehiclesStatistic_rotate_e4e86d0',
        'reverse-rotate': 'VehiclesStatistic_reverse-rotate_e4e86d0',
        glowAppearance: 'VehiclesStatistic_glowAppearance_e4e86d0',
        highlightAppearance: 'VehiclesStatistic_highlightAppearance_e4e86d0',
        blink: 'VehiclesStatistic_blink_e4e86d0',
        slideUpIn: 'VehiclesStatistic_slideUpIn_e4e86d0',
    },
    uo = function () {
        return (0, Ka.jsx)('div', {
            className: _o.tableHeader,
            children: lo.map((e) =>
                (0, Ka.jsx)(
                    'div',
                    {
                        className: Ke(_o.column, _o[`column__${e}`]),
                        children: (0, Ka.jsx)(N, {
                            header: `${R.strings.comp7_ext.progressionPage.tooltips.header.$dyn(e)}`,
                            body: `${R.strings.comp7_ext.progressionPage.tooltips.body.$dyn(e)}`,
                            children: (0, Ka.jsx)('div', {
                                className: _o.image,
                                style: {
                                    backgroundImage: `url(${R.images.comp7.gui.maps.icons.statistics.$dyn(`${e}_32x32`)})`,
                                },
                            }),
                        }),
                    },
                    e,
                ),
            ),
        });
    },
    mo = 'VehicleSlot_7c412eb1',
    ho = 'VehicleSlot_vehicleImage_bebb3f54',
    go = 'VehicleSlot_name_b6b086dd',
    po = 'VehicleSlot_text_7419b709',
    fo = function ({ vehicle: e }) {
        const a = e ? e.techName.toLowerCase() : 'vehicle_placeholder';
        return (0, Ka.jsxs)('div', {
            className: mo,
            children: [
                (0, Ka.jsx)('div', {
                    className: ho,
                    style: { backgroundImage: `url(${R.images.gui.maps.icons.vehicle.x120x96.$dyn(`${a}`)})` },
                }),
                e
                    ? (0, Ka.jsx)(Ea, {
                          name: e.name,
                          tier: e.tier,
                          type: e.type,
                          vehicleCD: e.vehicleCD,
                          className: go,
                          tooltipArgs: { vehicleCD: e.vehicleCD, tooltipId: 'shopVehicle' },
                      })
                    : (0, Ka.jsx)('div', { className: po, children: R.strings.comp7_ext.dash() }),
            ],
        });
    },
    xo = (e, a) => (a ? Da(Number(a[e]), 'winSeries' === e, 2) : R.strings.comp7_ext.dash()),
    bo = aa(function () {
        const { model: e } = Qt(),
            a = e.topVehiclesStatistics.get();
        return (0, Ka.jsx)('div', {
            className: _o.tableContent,
            children: Fe(3, (e) => {
                const s = Ze(a, e);
                return (0, Ka.jsx)(
                    'div',
                    {
                        className: Ke(_o.row, 1 !== e && _o.row__highlighted),
                        children: lo.map((e, a) =>
                            (0, Ka.jsx)(
                                'div',
                                {
                                    className: Ke(_o.column, _o[`column__${e}`]),
                                    children: 'vehicles' === e ? (0, Ka.jsx)(fo, { vehicle: s }) : xo(e, s),
                                },
                                a,
                            ),
                        ),
                    },
                    e,
                );
            }),
        });
    }),
    vo = aa(function () {
        const { model: e, controls: a } = Qt(),
            { statisticsMode: s, currentDayIndex: t, selectedDayIndex: r } = e.root.get(),
            { mediaSize: i } = U(),
            n = s !== ma.Season && t !== r,
            o = (0, Ya.useRef)(n);
        return (
            (0, Ya.useEffect)(() => {
                (o.current !== n && ee.sound('comp_7_gui_cust_tasks_slide'), (o.current = n));
            }, [n]),
            (0, Ka.jsxs)('div', {
                className: (0, Ga.default)(_o.base, n && _o.base__expanded),
                children: [
                    (0, Ka.jsxs)('div', {
                        className: _o.header,
                        children: [
                            (0, Ka.jsx)('div', {
                                className: _o.headerText,
                                children: R.strings.comp7_ext.progressionPage.vehicleStatistic(),
                            }),
                            (0, Ka.jsx)(se, {
                                theme: se.themes.secondary,
                                autoAlignContent: !1,
                                size: i >= x.Large ? se.sizes.small : se.sizes.extraSmall,
                                onClick: a.openVehicleStats,
                                children: R.strings.comp7_ext.progressionPage.toAllStatistic(),
                            }),
                        ],
                    }),
                    (0, Ka.jsx)(vr, {}),
                    (0, Ka.jsxs)('div', { className: _o.table, children: [(0, Ka.jsx)(uo, {}), (0, Ka.jsx)(bo, {})] }),
                ],
            })
        );
    });
var So = 'ProgressionLayout_b39a022a',
    wo = 'ProgressionLayout_leftPanel_29b1139',
    jo = 'ProgressionLayout_rightPanel_42d86627',
    No = 'ProgressionLayout_divider_7bed07ed',
    Co = 'ProgressionLayout_topContent_5774ce8',
    Po = 'ProgressionLayout_indicators_a373d8ae',
    ko = 'ProgressionLayout_bottomContent_dafa55d',
    Ro = 'ProgressionLayout_initialSpinner_9430136',
    Io = { button: 'ProgressionLayout_button_1eb45096', spinner: 'ProgressionLayout_spinner_97f4b1d9' },
    yo = aa(() => {
        const { model: e, controls: a } = Qt(),
            { pageState: s, isStatisticsLoading: t } = e.root.get(),
            { mediaSize: r } = U(),
            i = A(ka),
            n = (function (e) {
                return e >= x.ExtraLarge ? 1278 : e >= x.Large ? 990 : e >= x.Medium ? 960 : 740;
            })(r);
        return (0, Ka.jsxs)('div', {
            className: So,
            children: [
                (0, Ka.jsx)(v.div, { className: wo, style: i, children: (0, Ka.jsx)(Fi, {}) }),
                (0, Ka.jsx)('div', { className: No }),
                (0, Ka.jsx)('div', {
                    className: jo,
                    style: { '--chartWidth': `${n}rem` },
                    children: (() => {
                        switch (s) {
                            case Ut.Initial:
                                return t
                                    ? (0, Ka.jsx)(Ge, {
                                          message: R.strings.comp7_ext.waitingSpinner.message(),
                                          className: Ro,
                                      })
                                    : null;
                            case Ut.Success:
                                return (0, Ka.jsxs)(Ka.Fragment, {
                                    children: [
                                        (0, Ka.jsxs)('div', {
                                            className: Co,
                                            children: [
                                                (0, Ka.jsx)(Qr, {}),
                                                (0, Ka.jsx)(pr, { width: n }),
                                                (0, Ka.jsx)(Cn, { children: (0, Ka.jsx)(co, { className: Po }) }),
                                            ],
                                        }),
                                        (0, Ka.jsxs)('div', {
                                            className: ko,
                                            children: [(0, Ka.jsx)(vo, {}), (0, Ka.jsx)(Sn, {})],
                                        }),
                                    ],
                                });
                            case Ut.Error:
                                return (0, Ka.jsx)(wn, { classNames: Io });
                            default:
                                console.error('Unreachable branch: add component for proper state');
                        }
                    })(),
                }),
            ],
        });
    }),
    Ao = { hasHtmlContent: !0 },
    Bo = ({ maxBattlesCount: e, children: a }) =>
        (0, Ka.jsx)(N, {
            header: R.strings.comp7_ext.qualification.conditionTooltip.header(),
            body: H(R.strings.comp7_ext.qualification.conditionTooltip.body(e), { maxBattlesCount: e }),
            args: Ao,
            children: (0, Ka.jsx)('div', { children: a }),
        }),
    To = 'BattlesCounter_5f193124',
    Do = 'BattlesCounter_battlesCount_73d2731e',
    Lo = 'BattlesCounter_battlesDivider_7dbb3a33',
    Eo = ({ battlesCount: e, maxBattlesCount: a, className: s }) =>
        (0, Ka.jsx)(Q, {
            text: R.strings.comp7_ext.qualification.counter(),
            binding: {
                battlesCount: (0, Ka.jsx)('div', { className: Do, children: e }),
                divider: (0, Ka.jsx)('div', { className: Lo, children: '/' }),
                maxBattlesCount: a,
            },
            classMix: (0, Ga.default)(To, s),
        }),
    zo = aa(({ index: e, className: a }) => {
        const { model: s } = Qt(),
            { mediaSize: t } = U();
        return (0, Ka.jsx)(
            za,
            { state: s.computes.qualificationBattle(e).state, className: a, size: t >= x.ExtraLarge ? 'x234' : 'x173' },
            e,
        );
    }),
    Mo = 'BattlesProgression_c0296cbd',
    Ho = 'BattlesProgression_item_e40a305e',
    Wo = aa(({ className: e }) => {
        const { model: a } = Qt();
        return (0, Ka.jsx)('div', {
            className: (0, Ga.default)(Mo, e),
            children: Fe(a.qualificationBattles.get().length, (e) => (0, Ka.jsx)(zo, { index: e, className: Ho }, e)),
        });
    }),
    Uo = (e) => {
        switch (!0) {
            case e >= x.ExtraLarge:
                return pa.x600;
            case e >= x.Large:
                return pa.x420;
            case e >= x.Medium:
                return pa.x260;
            default:
                return pa.x200;
        }
    },
    Vo = 'Qualification_8f910914',
    Qo = 'Qualification_content_8a6d7d92',
    $o = 'Qualification_footer_143b827d',
    qo = 'Qualification_qualificationEmblemContainer_dbf79dc7',
    Oo = 'Qualification_glowContainer_3a05eb3',
    Fo = 'Qualification_glow_8e19a98c',
    Yo = 'Qualification_qualificationEmblem_a7436cbb',
    Go = 'Qualification_battlesProgression_d6ca81d2',
    Xo = 'Qualification_counterDescription_7f2dd37b',
    Ko = 'Qualification_ratingCalculationDescription_7d2ba061',
    Jo = 'Qualification_timerIcon_b77227aa',
    Zo = 'Qualification_conditionContainer_3d81a257',
    ed = 'Qualification_condition_1f31ad6a',
    ad = 'Qualification_rewardsDescription_1d74932c',
    sd = 'Qualification_infoIcon_139d9dc7',
    td = 'Qualification_rewardsButton_7672a5e',
    rd = 'Qualification_buttonContent_9ef49ca6',
    id = 'Qualification_waiting_8e273156';
function nd(e) {
    return e >= x.Large ? se.sizes.small : se.sizes.extraSmall;
}
var od = aa(({ className: e }) => {
        const { model: a, controls: s } = Qt(),
            { model: t } = ta(),
            { mediaSize: r } = U(),
            i = a.qualificationModel.battlesCount.get(),
            n = a.qualificationModel.maxBattlesCount.get(),
            o = a.qualificationModel.isRatingCalculation.get(),
            d = a.isParallaxPreloaded.get(),
            c = A({
                from: { opacity: 0 },
                to: rs() ? { opacity: d ? 1 : 0 } : { opacity: 1 },
                delay: 300,
                config: { duration: 300 },
            });
        return rs() && !d
            ? (0, Ka.jsx)('div', { className: id, children: (0, Ka.jsx)(Ge, {}) })
            : (0, Ka.jsxs)(v.div, {
                  style: c,
                  className: (0, Ga.default)(Vo, e),
                  children: [
                      (0, Ka.jsxs)('div', {
                          className: Qo,
                          children: [
                              (0, Ka.jsxs)('div', {
                                  className: qo,
                                  children: [
                                      (0, Ka.jsx)(ya, { className: Oo, classNames: { glow: Fo } }),
                                      (0, Ka.jsx)(Ca, { size: Uo(r), seasonName: t.season.name.get(), className: Yo }),
                                  ],
                              }),
                              (0, Ka.jsx)(Eo, { battlesCount: i, maxBattlesCount: n }),
                              o
                                  ? (0, Ka.jsx)(N, {
                                        body: R.strings.comp7_ext.qualification.ratingCalculationTooltip(),
                                        children: (0, Ka.jsx)('div', {
                                            children: (0, Ka.jsx)(Q, {
                                                text: R.strings.comp7_ext.qualification.ratingCalculationDescription(),
                                                binding: { timerIcon: (0, Ka.jsx)('div', { className: Jo }) },
                                                classMix: Ko,
                                            }),
                                        }),
                                    })
                                  : (0, Ka.jsx)(De, {
                                        text: R.strings.comp7_ext.qualification.counterWithDescription(),
                                        classMix: Xo,
                                    }),
                              (0, Ka.jsx)(Wo, { className: Go }),
                          ],
                      }),
                      (0, Ka.jsxs)('div', {
                          className: $o,
                          children: [
                              (0, Ka.jsxs)('div', {
                                  className: Zo,
                                  children: [
                                      (0, Ka.jsx)(De, {
                                          text: R.strings.comp7_ext.qualification.condition(n),
                                          classMix: ed,
                                          binding: { maxBattlesCount: n },
                                      }),
                                      (0, Ka.jsx)(Bo, {
                                          maxBattlesCount: n,
                                          children: (0, Ka.jsx)('div', { className: sd }),
                                      }),
                                  ],
                              }),
                              (0, Ka.jsx)(Q, {
                                  text: R.strings.comp7_ext.qualification.rewardsDescription(),
                                  classMix: ad,
                              }),
                              (0, Ka.jsx)(se, {
                                  classNames: { base: td, content: rd },
                                  theme: se.themes.secondary,
                                  onMouseEnter: () => {
                                      (s.setRewardLayerVisible(!0), ee.sound('comp_7_rank_rewards_hover'));
                                  },
                                  onMouseLeave: () => s.setRewardLayerVisible(!1),
                                  size: nd(r),
                                  onClick: s.goToRankRewardsPage,
                                  silent: !0,
                                  children: R.strings.comp7_ext.qualification.rewardsButton(),
                              }),
                          ],
                      }),
                  ],
              });
    }),
    dd = 'ProgressionPage_abde0f3e',
    cd = 'ProgressionPage_scheduleSubheading_f92469b5',
    ld = 'ProgressionPage_parallaxContainer_f5c5fb63',
    _d = 'ProgressionPage_contentWrapper_728d5d97',
    ud = 'ProgressionPage_contentInner_78229ad9',
    md = 'ProgressionPage_content_f7a37594',
    hd = aa(() => {
        const { model: e } = Qt(),
            [a, s] = (0, Ya.useState)(0),
            t = (0, Ya.useRef)(null),
            r = e.qualificationModel.isActive.get(),
            i = (0, Ya.useCallback)(() => {
                if (!t.current) return;
                const e = Qe(Math.round(t.current?.getBoundingClientRect().height));
                s(e % 2 == 0 ? e : e - 1);
            }, [r]);
        return (
            w(() => i(), [i]),
            (0, Ya.useLayoutEffect)(() => {
                i();
            }, [i]),
            (0, Ka.jsxs)('div', {
                className: dd,
                'data-test-id': 'progression-page',
                children: [
                    rs() && r && (0, Ka.jsx)(Zt, { className: ld }),
                    (0, Ka.jsx)(oa, { className: cd }),
                    r
                        ? (0, Ka.jsx)('div', { className: _d, children: (0, Ka.jsx)(od, { className: md }) })
                        : (0, Ka.jsx)('div', {
                              className: _d,
                              ref: t,
                              children: (0, Ka.jsx)('div', {
                                  className: ud,
                                  style: { height: `${a}rem` },
                                  children: (0, Ka.jsx)(yo, {}),
                              }),
                          }),
                ],
            })
        );
    }),
    [gd, pd] = ve()(
        ({ observableModel: e }) => {
            const a = { root: e.object(), qualification: e.primitives(['isActive'], 'qualificationModel') },
                s = e.array('items'),
                t = Re(() => s.get().length),
                r = Re(
                    (e) => {
                        const a = Ze(s.get(), e);
                        if (!a) throw new Error(`rank rewards item with index ${e} was not found`);
                        const { hasRewardsReceived: t, rank: r, from: i, to: n } = a;
                        return { hasRewardsReceived: t, rank: r, from: i, to: n };
                    },
                    { equals: o },
                ),
                i = Re(
                    (e) => {
                        const a = Ze(s.get(), e);
                        if (!a) throw new Error(`rank rewards item with index ${e} was not found`);
                        return c(a.rewards, (e) => ({ ...e }));
                    },
                    { equals: o },
                ),
                n = Re(
                    (e) => {
                        const a = Ze(i(e), 0);
                        if (!a) throw new Error(`rank rewards item with index ${e} has no any main reward at index: 0`);
                        return a;
                    },
                    { equals: o },
                ),
                d = Re((e) => [...Te(i(e), 1)], { equals: o }),
                l = Re((e) => {
                    const a = Ze(s.get(), e);
                    if (!a) throw new Error(`item with index ${e} was not found`);
                    return Wt(c(a.divisions, (e) => ({ ...e })));
                }),
                _ = Re((e) => !a.qualification.isActive.get() && e === a.root.get().currentItemIndex),
                u = Re(
                    () => ({
                        nextNotAchievedItemIndex: Ie(s.get(), (e) => !e.hasRewardsReceived) ?? t(),
                        hasForceScroll: -1 !== a.root.get().initialItemIndex,
                    }),
                    { equals: Xe.shallow },
                ),
                m = Re(
                    () => ye(i(0), (e) => 'customizations' === e.name && 'progressionStyle' === e.icon)?.label ?? '',
                );
            return {
                ...a,
                computes: {
                    rankRewardsItemsLength: t,
                    rankRewardsItem: r,
                    mainReward: n,
                    additionalRewards: d,
                    additionalRewardsCount: Re((e) => d(e).length),
                    divisionsString: l,
                    isCurrentRank: _,
                    scrollingSettings: u,
                    progressionStyleName: m,
                },
            };
        },
        ({ externalModel: e, model: a }) => {
            const s = e.createCallback((e, a) => ({ rank: e, index: a }), 'onPreviewOpen');
            return {
                goToPreview: Je((e, t) => {
                    const r = a.computes.rankRewardsItem(e).rank;
                    s(r, t);
                }),
            };
        },
    ),
    fd = 'ProgressionScroll_21d7f49a',
    xd = 'ProgressionScroll_areaWrapper_c935b531',
    bd = 'ProgressionScroll_areaContent_d2de9b28',
    vd = ({
        stuckIndex: e,
        itemWidth: a,
        itemsOffset: s = 0,
        children: t,
        onStick: r,
        className: i,
        areaClassNames: o,
        barClassNames: d,
        staticContent: c,
    }) => {
        const l = T(a),
            { api: _ } = me(),
            { animationScroll: u, events: m, applyScroll: h } = _,
            g = n(_, _.settings.animationConfig),
            p = (0, Ya.useCallback)(
                (a) => {
                    h(e * l, a);
                },
                [h, l, e],
            ),
            f = (0, Ya.useCallback)(() => {
                r?.(Math.round(u.scrollPosition.goal / l));
            }, [r, u.scrollPosition, l]);
        ((0, Ya.useEffect)(() => (m.on('rest', f), () => m.off('rest', f)), [m, f]),
            (0, Ya.useEffect)(() => {
                const e = () => {
                    p({ immediate: !0, reset: !0 });
                };
                return (
                    m.on('resizeHandled', e),
                    () => {
                        m.off('resizeHandled', e);
                    }
                );
            }, [p, m]),
            (0, Ya.useEffect)(
                () =>
                    Ae(() => {
                        'scrollComplete' === g.type && h(Math.round(u.scrollPosition.goal / l) * l);
                    }),
                [u.scrollPosition, h, g, l, p],
            ));
        const x = (0, Ya.useCallback)(
            (a) => {
                'dragEnd' === a.type && h(e * l);
            },
            [h, l, e],
        );
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(fd, i),
            style: { '--offset': `${s}rem` },
            children: [
                (0, Ka.jsx)(de, {
                    className: o?.base,
                    classNames: { wrapper: (0, Ga.default)(xd, o?.wrapper), content: (0, Ga.default)(bd, o?.content) },
                    children: t,
                }),
                c,
                (0, Ka.jsx)(ue, { onDrag: x, classNames: d }),
            ],
        });
    },
    Sd = (e, a = 100) => ((Qe(s('px').width) * a) / 100 - e) / 2;
function wd({ children: e, api: a, ...s }) {
    return (0, Ka.jsx)(pe, { api: a, children: (0, Ka.jsx)(vd, { ...s, children: e }) });
}
var jd = (e, a) => (e > a ? a - 1 : void 0),
    Nd = 'AdditionalRewards_reward_b14f8cf9',
    Cd = 'AdditionalRewards_vehiclesRentBase_20861c60',
    Pd = 'AdditionalRewards_vehiclesRentLabel_bed51da4',
    kd = W.Small,
    Rd = aa(({ rank: e, itemIndex: a, visibleRewardsCount: s, className: t }) => {
        const { model: r } = pd(),
            i = r.computes.additionalRewards(a),
            n = r.computes.additionalRewardsCount(a);
        return (0, Ka.jsx)(_, {
            data: c(i, (a) => {
                const s = 'vehicles_rent' === a.name;
                return {
                    ...Ha({ reward: a, size: kd, rank: e }),
                    className: (0, Ga.default)(s && Cd),
                    classNames: { info: (0, Ga.default)(s && Pd) },
                };
            }),
            size: kd,
            count: jd(n, s),
            rewardItemClassMix: Nd,
            boxRewardTooltip: {
                contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                args: { fromIndex: s, rank: e },
            },
            classMix: t,
        });
    }),
    Id = (function (e) {
        return (
            (e[(e.NotStarted = 0)] = 'NotStarted'),
            (e[(e.Active = 1)] = 'Active'),
            (e[(e.OffSeason = 3)] = 'OffSeason'),
            (e[(e.Finished = 4)] = 'Finished'),
            e
        );
    })({}),
    yd = {
        base: 'Heading_93b0c1e7',
        rankEmblemContainer: 'Heading_rankEmblemContainer_fe6484a4',
        godRays: 'Heading_godRays_170abada',
        rankEmblem__inactive: 'Heading_rankEmblem__inactive_df04c1d1',
        lock: 'Heading_lock_8c7ecce7',
        description: 'Heading_description_f5763105',
        rankName: 'Heading_rankName_c505c75',
        rankStatus: 'Heading_rankStatus_364e575b',
        fadeIn: 'Heading_fadeIn_da06193d',
        fadeInThreeQuarters: 'Heading_fadeInThreeQuarters_da06193d',
        fadeInHalf: 'Heading_fadeInHalf_da06193d',
        fadeOut: 'Heading_fadeOut_da06193d',
        fadeInWithScale: 'Heading_fadeInWithScale_da06193d',
        slideUp: 'Heading_slideUp_da06193d',
        scale: 'Heading_scale_da06193d',
        raysAppearance: 'Heading_raysAppearance_da06193d',
        rotate: 'Heading_rotate_da06193d',
        'reverse-rotate': 'Heading_reverse-rotate_da06193d',
        glowAppearance: 'Heading_glowAppearance_da06193d',
        highlightAppearance: 'Heading_highlightAppearance_da06193d',
        blink: 'Heading_blink_da06193d',
        slideUpIn: 'Heading_slideUpIn_da06193d',
    },
    Ad = (e) => {
        switch (e) {
            case Id.OffSeason:
            case Id.Finished:
                return R.strings.comp7_ext.rank.achieved();
            case Id.Active:
                return R.strings.comp7_ext.rank.current();
            default:
                return '';
        }
    },
    Bd = aa(({ index: e, rankEmblemSize: a }) => {
        const { model: s } = pd(),
            { model: t } = ta(),
            { topPercentage: r } = s.root.get(),
            { rank: i, from: n, to: o, hasRewardsReceived: d } = s.computes.rankRewardsItem(e),
            c = s.computes.divisionsString(e),
            l = s.computes.isCurrentRank(e);
        return (0, Ka.jsxs)('div', {
            className: yd.base,
            children: [
                (0, Ka.jsxs)(xt, {
                    rank: i,
                    from: n,
                    to: o,
                    topPercentage: r,
                    divisions: c,
                    className: yd.rankEmblemContainer,
                    ignoreShowDelay: !0,
                    children: [
                        l &&
                            (0, Ka.jsx)(f, {
                                className: yd.godRays,
                                src: String(R.videos.comp7.godRaysNew_130x130()),
                                autoplay: !0,
                                loop: !0,
                            }),
                        (0, Ka.jsx)(xa, {
                            seasonName: t.season.name.get(),
                            size: a,
                            rank: i,
                            className: (0, Ga.default)(yd.rankEmblem, !d && yd.rankEmblem__inactive),
                        }),
                        !d && (0, Ka.jsx)('div', { className: yd.lock }),
                    ],
                }),
                (0, Ka.jsxs)('div', {
                    className: yd.description,
                    children: [
                        (0, Ka.jsx)('div', { className: yd.rankName, children: wa(i) }),
                        l && (0, Ka.jsx)('div', { className: yd.rankStatus, children: Ad(t.year.state.get()) }),
                    ],
                }),
            ],
        });
    }),
    Td = (e) => 'styleProgress' === e.name,
    Dd = 'MainReward_de250efb',
    Ld = 'MainReward_imageContainer_20c097c',
    Ed = 'MainReward_glowContainer_570aee25',
    zd = 'MainReward_glow_aa880e51',
    Md = 'MainReward_preview_f2a964a3',
    Hd = 'MainReward_info_dc048bbb',
    Wd = 'MainReward_title_7cbb5d41',
    Ud = 'MainReward_subTitle_247ccde3',
    Vd = aa(({ index: e, rank: a, size: s, hasHighlight: t, onPreviewClick: r, className: i }) => {
        const { model: n } = pd(),
            o = n.computes.mainReward(e),
            d = n.computes.progressionStyleName();
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(Dd, i),
            children: [
                (0, Ka.jsxs)('div', {
                    className: Ld,
                    children: [
                        t && (0, Ka.jsx)(ya, { className: Ed, classNames: { glow: zd } }),
                        (0, Ka.jsx)(F, { ...Ha({ reward: o, size: s, rank: a }) }),
                        Td(o) &&
                            (0, Ka.jsx)('div', {
                                className: Md,
                                children: (0, Ka.jsx)(h, {
                                    type: 'preview',
                                    onClick: r,
                                    children: R.strings.comp7_ext.rewards.preview(),
                                }),
                            }),
                    ],
                }),
                (0, Ka.jsxs)('div', {
                    className: Hd,
                    children: [
                        (0, Ka.jsx)('div', { className: Wd, children: o.label }),
                        (0, Ka.jsx)(Le, {
                            text: String(R.strings.comp7_ext.rewards.subtitle.$dyn(o.name)),
                            params: { vehicleLevel: xe(10), progressionStyleName: d },
                            className: Ud,
                            upgradeLegacy: !0,
                            split: !0,
                        }),
                    ],
                }),
            ],
        });
    }),
    Qd = 'RankRewardsItem_97feb95e',
    $d = 'RankRewardsItem_mainRewardContainer_85d98e1d',
    qd = 'RankRewardsItem_rewardsContainer_aa9fb54',
    Od = 'RankRewardsItem_statusContainer_32c29dc9',
    Fd = 'RankRewardsItem_statusContainer__hidden_1627e91e',
    Yd = 'RankRewardsItem_icon_c6768aea',
    Gd = aa(
        ({
            itemIndex: e,
            itemWidth: a,
            mainRewardSize: s,
            hasHighlight: t,
            visibleRewardsCount: r,
            rankEmblemSize: i,
            onPreviewClick: n,
        }) => {
            const { model: o } = pd(),
                { rank: d, hasRewardsReceived: c } = o.computes.rankRewardsItem(e);
            return (0, Ka.jsxs)('div', {
                className: Qd,
                style: { '--itemWidth': `${a}rem` },
                children: [
                    (0, Ka.jsx)(Bd, { index: e, rankEmblemSize: i }),
                    (0, Ka.jsx)(Vd, { index: e, rank: d, size: s, hasHighlight: t, onPreviewClick: n, className: $d }),
                    (0, Ka.jsx)('div', {
                        className: qd,
                        children: (0, Ka.jsx)(Rd, { itemIndex: e, visibleRewardsCount: r, rank: d }),
                    }),
                    (0, Ka.jsxs)('div', {
                        className: (0, Ga.default)(Od, !c && Fd),
                        children: [
                            (0, Ka.jsx)('div', { className: Yd }),
                            R.strings.comp7_ext.rewards.status.achieved(),
                        ],
                    }),
                ],
            });
        },
    ),
    Xd = (e) => (e >= x.Large ? pa.x110 : e >= x.Medium ? pa.x64 : pa.x48),
    Kd = (e) => (e >= x.ExtraLarge ? W.S600x450 : e >= x.Large ? W.S400x300 : e >= x.Medium ? W.S296x222 : W.S232x174),
    Jd = (e) => (e >= P.Medium ? 5 : 4),
    Zd = 'RankRewardsPage_966eba9d',
    ec = 'RankRewardsPage_content_470e75a1',
    ac = 'RankRewardsPage_scrollContainer_22b6e09b',
    sc = 'RankRewardsPage_areaContainer_ca7d8c25',
    tc = 'RankRewardsPage_areaWrapper_9e0580b',
    rc = 'RankRewardsPage_bar_4df7da7f',
    ic = { duration: 700, easing: (e) => Math.pow(e, 4) },
    nc = aa(() => {
        const { mediaSize: e, mediaWidth: a } = U(),
            { model: s, controls: t } = pd(),
            { initialItemIndex: r } = s.root.get(),
            i = s.computes.rankRewardsItemsLength(),
            { nextNotAchievedItemIndex: n, hasForceScroll: o } = s.computes.scrollingSettings(),
            [d, c] = (0, Ya.useState)(o ? 'idle' : 'initial'),
            [l, _] = (0, Ya.useState)(o ? r : n),
            u = ((e) =>
                e >= x.ExtraLarge ? 600 : e >= x.Large ? 460 : e >= x.Medium ? 400 : e >= x.Small ? 340 : 300)(e),
            m = i * u,
            h = ((e, a = 150, s) => {
                const t = T(e);
                return E(
                    (0, Ya.useMemo)(
                        () => ({
                            settings: {
                                step: { type: 'fixed', value: t, clampedArrowStepTimeout: a },
                                animationConfig: { frequency: 0.8, ...s },
                            },
                        }),
                        [s, t, a],
                    ),
                );
            })(u),
            { scrollPosition: g, clampPosition: p, contentRef: f } = h,
            b = we();
        ((0, Ya.useLayoutEffect)(() => {
            'idle' === d
                ? g.start({ scrollPosition: T(r * u), immediate: !0 })
                : 'initial' === d && g.start({ scrollPosition: T(m), immediate: !0 });
        }, []),
            (0, Ya.useEffect)(
                () =>
                    Ae(() => {
                        const e = f.current;
                        if (e && 'initial' === d) {
                            const a = p(e, T(n * u)),
                                s = p(e, T(m));
                            if (a === s) return void c('idle');
                            g.start({
                                scrollPosition: a,
                                from: { scrollPosition: s },
                                config: ic,
                                onStart: () => {
                                    (c('scrolling'), ee.sound('comp_7_rank_rewards_enter'));
                                },
                                onRest: () => {
                                    b.current || c('idle');
                                },
                            });
                        }
                    }),
                [p, f, b, u, n, d, m, g],
            ));
        const S = (e) => 'idle' === d && e === n,
            w = A(ka);
        return (0, Ka.jsxs)('div', {
            className: Zd,
            'data-test-id': 'rank-rewards-page',
            children: [
                (0, Ka.jsx)(oa, {}),
                (0, Ka.jsx)(v.div, {
                    className: ec,
                    style: w,
                    children: (0, Ka.jsx)(wd, {
                        api: h,
                        stuckIndex: l,
                        itemWidth: u,
                        itemsOffset: Sd(u),
                        onStick: _,
                        className: ac,
                        areaClassNames: { base: sc, wrapper: tc },
                        barClassNames: { base: rc },
                        children: Fe(i, (s) =>
                            (0, Ka.jsx)(
                                Gd,
                                {
                                    itemIndex: s,
                                    visibleRewardsCount: Jd(a),
                                    rankEmblemSize: Xd(e),
                                    mainRewardSize: Kd(e),
                                    itemWidth: u,
                                    hasHighlight: S(s),
                                    onPreviewClick: () => t.goToPreview(s, l),
                                },
                                s,
                            ),
                        ),
                    }),
                }),
            ],
        });
    }),
    oc = (function (e) {
        return ((e[(e.Initial = 0)] = 'Initial'), (e[(e.Success = 1)] = 'Success'), (e[(e.Error = 2)] = 'Error'), e);
    })({}),
    dc = [Wa.Locked, Wa.ReadyToPurchase],
    cc = [Ua.Vehicle, Ua.Style3d],
    [lc, _c] = ve()(
        ({ observableModel: e, mode: a }) => {
            const s = e.array('rankDiscounts'),
                t = e.array('products'),
                r = { root: e.object() },
                i = Re(
                    () =>
                        c(t.get(), (e) => ({
                            ...e,
                            price: { ...e.price },
                            ...('vehicleInfo' in e && { vehicleInfo: { ...e.vehicleInfo } }),
                            ...('reward' in e && { reward: { ...e.reward } }),
                        })),
                    { equals: o },
                ),
                n = Re(
                    (e) => {
                        const a = Ze(i(), e);
                        if (!a) throw new Error(`product with index ${e} is not found`);
                        return a;
                    },
                    { equals: o },
                ),
                d = Re(
                    () => {
                        const e = new Set(),
                            a = Y(
                                i(),
                                (a, s, t) => {
                                    const r = s.rank,
                                        i = a.get(r);
                                    return void 0 === i ? (0 !== t && e.add(t), a.set(r, 1)) : a.set(r, i + 1);
                                },
                                new Map(),
                            );
                        return { recordsArray: Array.from(a.entries()), groupIndexesSet: e };
                    },
                    { equals: o },
                ),
                l = Re(
                    (e) => {
                        const a = n(e);
                        return {
                            hasDiscount: a.state === Wa.ReadyToPurchase && a.price.discountValue > 0,
                            isEnough: !dc.includes(a.state) || a.price.isEnough,
                        };
                    },
                    { equals: Xe.shallow },
                ),
                _ = Re(() => {
                    const e = r.root.get().selectedProductId,
                        a = Ie(i(), (a) => a.id === e);
                    if (void 0 === a) throw new Error(`selectedProductId: ${e} is not found in products array`);
                    return a;
                }),
                u = Re(
                    () => {
                        const e = _(),
                            a = n(e);
                        if (!a) throw new Error(`product with selected index ${e} is not found in products array`);
                        return a;
                    },
                    { equals: o },
                ),
                m = Re(() => r.root.get().shopState === oc.Success && u().type !== Ua.Reward),
                h = Re(() => {
                    const e = u();
                    return e.type === Ua.Vehicle && e.state !== Wa.ReadyToRestore && e.description;
                }),
                g = Re(() => u().type === Ua.Reward),
                p = Re(
                    () => {
                        const e = u(),
                            a = e.type === Ua.Vehicle && e.state !== Wa.Purchased;
                        return {
                            hasControls: cc.includes(e.type),
                            hasAddToCompare: e.type === Ua.Vehicle,
                            hasPreview: a || e.type === Ua.Style3d,
                        };
                    },
                    { equals: Xe.shallow },
                ),
                f = Re(() => c(s.get(), (e) => ({ ...e, divisions: Wt(c(e.divisions, (e) => ({ ...e }))) })), {
                    equals: o,
                }),
                x = Re(
                    (e) => {
                        const a = Ze(f(), e);
                        if (!a) throw new Error(`rank discount with index ${e} is not found`);
                        return a;
                    },
                    { equals: o },
                );
            return {
                ...r,
                computes: {
                    productsLength: Re(() => i().length),
                    rankDiscountsLength: Re(() => f().length),
                    product: n,
                    productsDividersConfig: d,
                    priceConfig: l,
                    selectedProductIndex: _,
                    selectedProduct: u,
                    hasSceneWrapper: m,
                    hasVehicleDescription: h,
                    hasLimitedQuantity: g,
                    controlsConfig: p,
                    rankDiscount: x,
                },
                ...('mocks' === a && { internal: { rankDiscounts: s, computes: { products: i } } }),
            };
        },
        ({ externalModel: e }) => ({
            markProductSeen: e.createCallback((e) => ({ cd: e }), 'onProductSeen'),
            selectProduct: e.createCallback((e) => ({ cd: e }), 'onProductSelect'),
            purchase: e.createCallbackNoArgs('onProductPurchase'),
            restore: e.createCallbackNoArgs('onProductRestore'),
            goToHangar: e.createCallbackNoArgs('onGoToHangar'),
            goToPreview: e.createCallbackNoArgs('onGoToPreview'),
            goToCustomization: e.createCallbackNoArgs('onGoToCustomization'),
            addToVehicleCompare: e.createCallbackNoArgs('onAddToVehicleCompare'),
            mouseOver3dScene: e.createCallback(({ isOver3dScene: e }) => ({ isOver3dScene: e }), 'onMouseOver3dScene'),
            moveSpace: e.createCallback(({ dx: e, dy: a, dz: s }) => ({ dx: e, dy: a, dz: s }), 'onMoveSpace'),
        }),
    ),
    uc = {
        base: 'CarouselScroll_77332728',
        areaWrapper: 'CarouselScroll_areaWrapper_98a35119',
        areaWrapper__hasScroll: 'CarouselScroll_areaWrapper__hasScroll_60e49834',
        areaContent: 'CarouselScroll_areaContent_7b8573',
        arrow: 'CarouselScroll_arrow_ab55ce86',
        arrow__prev: 'CarouselScroll_arrow__prev_ff2dcb3b',
        arrow__next: 'CarouselScroll_arrow__next_6aaebc59',
        arrow__hidden: 'CarouselScroll_arrow__hidden_946c2a1c',
        fadeIn: 'CarouselScroll_fadeIn_57c79593',
        fadeInThreeQuarters: 'CarouselScroll_fadeInThreeQuarters_57c79593',
        fadeInHalf: 'CarouselScroll_fadeInHalf_57c79593',
        fadeOut: 'CarouselScroll_fadeOut_57c79593',
        fadeInWithScale: 'CarouselScroll_fadeInWithScale_57c79593',
        slideUp: 'CarouselScroll_slideUp_57c79593',
        scale: 'CarouselScroll_scale_57c79593',
        raysAppearance: 'CarouselScroll_raysAppearance_57c79593',
        rotate: 'CarouselScroll_rotate_57c79593',
        'reverse-rotate': 'CarouselScroll_reverse-rotate_57c79593',
        glowAppearance: 'CarouselScroll_glowAppearance_57c79593',
        highlightAppearance: 'CarouselScroll_highlightAppearance_57c79593',
        blink: 'CarouselScroll_blink_57c79593',
        slideUpIn: 'CarouselScroll_slideUpIn_57c79593',
    },
    mc = ({ className: e, classNames: a, children: s }) => {
        const { api: t } = me(),
            {
                events: r,
                getBounds: i,
                getWrapperSize: o,
                getContainerSize: d,
                applyStepTo: c,
                animationScroll: { scrollPosition: l },
            } = t,
            _ = (0, Ya.useRef)(null),
            [u, m] = (0, Ya.useState)('visible'),
            h = ea();
        n(t);
        const g = ke(() => {
                h.run(() => {
                    const [e, a] = i(),
                        s = o(),
                        t = d();
                    if (s && t)
                        return t <= s
                            ? m('hidden')
                            : l.goal === e
                              ? m('prevDisabled')
                              : l.goal === a
                                ? m('nextDisabled')
                                : m('visible');
                });
            }),
            [p, f] = oe((e) => c(e), 150, [c]),
            x = (0, Ya.useCallback)(
                (e) => () => {
                    const a = e === Ve.Next && 'prevDisabled' === u,
                        s = e === Ve.Prev && 'nextDisabled' === u;
                    a || s || (ee.click(), p(e));
                },
                [u, p],
            );
        return (
            Ne(() => {
                g();
            }),
            le(() => {
                g();
            }, [g]),
            (0, Ya.useEffect)(() => {
                const e = S(200, g);
                return (r.on('change', e), () => r.off('change', e));
            }, [r, g]),
            (0, Ya.useEffect)(
                () => (
                    document.addEventListener('mouseup', f, !0),
                    () => document.removeEventListener('mouseup', f, !0)
                ),
                [f],
            ),
            (0, Ka.jsxs)('div', {
                className: (0, Ga.default)(uc.base, e),
                ref: _,
                children: [
                    (0, Ka.jsx)(de, {
                        classNames: {
                            wrapper: (0, Ga.default)(
                                uc.areaWrapper,
                                a?.areaWrapper,
                                'hidden' !== u && uc.areaWrapper__hasScroll,
                            ),
                            content: (0, Ga.default)(uc.areaContent, a?.areaContent),
                        },
                        children: s,
                    }),
                    (0, Ka.jsx)(da, {
                        size: 'small',
                        direction: 'left',
                        disabled: 'prevDisabled' === u,
                        className: (0, Ga.default)(uc.arrow, uc.arrow__prev, uc[`arrow__${u}`]),
                        onMouseEnter: 'prevDisabled' === u ? void 0 : ee.highlight,
                        onMouseDown: x(Ve.Next),
                        onMouseUp: f,
                    }),
                    (0, Ka.jsx)(da, {
                        size: 'small',
                        direction: 'right',
                        disabled: 'nextDisabled' === u,
                        className: (0, Ga.default)(uc.arrow, uc.arrow__next, uc[`arrow__${u}`]),
                        onMouseEnter: 'nextDisabled' === u ? void 0 : ee.highlight,
                        onMouseDown: x(Ve.Prev),
                        onMouseUp: f,
                    }),
                ],
            })
        );
    },
    hc = 'ProductCardImage_e1f40b93',
    gc = R.images.comp7.gui.maps.icons.products,
    pc = aa(({ index: e, className: a }) => {
        const { model: s } = _c(),
            t = s.computes.product(e);
        return (0, Ka.jsx)('div', {
            className: (0, Ga.default)(hc, a),
            style: { backgroundImage: `url('${gc.$num(t.id)}')` },
        });
    }),
    fc = 'ProductCardName_ce866ed9',
    xc = 'ProductCardName_vehicleName_a1701a73',
    bc = 'ProductCardName_nation_e06370d7',
    vc = 'ProductCardName_style3dContainer_59247316',
    Sc = 'ProductCardName_overflowedName_8c3f6093',
    wc = 'ProductCardName_style3dDescription_3f9b224',
    jc = aa(({ index: e, className: a }) => {
        const { model: s } = _c(),
            t = s.computes.product(e),
            { mediaSize: r } = U();
        switch (t.type) {
            case Ua.Vehicle: {
                const { name: e, tier: s, type: r, nation: i, isPremium: n } = t.vehicleInfo;
                return (0, Ka.jsxs)('div', {
                    className: (0, Ga.default)(fc, a),
                    children: [
                        (0, Ka.jsx)('div', {
                            className: bc,
                            style: { backgroundImage: `url('${R.images.gui.maps.icons.flags.c_20x12.$dyn(i)}')` },
                        }),
                        (0, Ka.jsx)(Ea, { name: e, tier: s, type: r, isPremium: n, className: xc }),
                    ],
                });
            }
            case Ua.Style3d: {
                const { name: e, vehicleInfo: s } = t,
                    i = H(R.strings.comp7_ext.products.style3d(), {
                        name: H(R.strings.comp7_ext.quotesWrapper(), { name: e }),
                    });
                return (0, Ka.jsxs)('div', {
                    className: (0, Ga.default)(fc, vc, a),
                    children: [
                        (0, Ka.jsx)(D, { classMix: Sc, content: i }, r),
                        (0, Ka.jsx)(Q, {
                            text: R.strings.comp7_ext.forVehicle(),
                            binding: { vehicleName: s.name },
                            classMix: wc,
                        }),
                    ],
                });
            }
            case Ua.Reward:
                return (0, Ka.jsx)(Q, { text: t.reward.label, classMix: (0, Ga.default)(fc, a) });
            default:
                return (console.error(`Provide ProductCardName for ProductType:${t.type}`), null);
        }
    }),
    Nc = {
        base: 'ProductCardPrice_a5fa8e54',
        currencyValue: 'ProductCardPrice_currencyValue_9fe43227',
        discount: 'ProductCardPrice_discount_179b3f2e',
        discount__freeXP: 'ProductCardPrice_discount__freeXP_ddf6bb6',
        discount__credits: 'ProductCardPrice_discount__credits_33607135',
        discount__gold: 'ProductCardPrice_discount__gold_41838016',
        discount__xp: 'ProductCardPrice_discount__xp_fe239aa7',
        discount__crystal: 'ProductCardPrice_discount__crystal_fe239aa7',
        discount__equipCoin: 'ProductCardPrice_discount__equipCoin_a4138771',
        discountLine: 'ProductCardPrice_discountLine_cdca68df',
        fadeIn: 'ProductCardPrice_fadeIn_fe239aa7',
        fadeInThreeQuarters: 'ProductCardPrice_fadeInThreeQuarters_fe239aa7',
        fadeInHalf: 'ProductCardPrice_fadeInHalf_fe239aa7',
        fadeOut: 'ProductCardPrice_fadeOut_fe239aa7',
        fadeInWithScale: 'ProductCardPrice_fadeInWithScale_fe239aa7',
        slideUp: 'ProductCardPrice_slideUp_fe239aa7',
        scale: 'ProductCardPrice_scale_fe239aa7',
        raysAppearance: 'ProductCardPrice_raysAppearance_fe239aa7',
        rotate: 'ProductCardPrice_rotate_fe239aa7',
        'reverse-rotate': 'ProductCardPrice_reverse-rotate_fe239aa7',
        glowAppearance: 'ProductCardPrice_glowAppearance_fe239aa7',
        highlightAppearance: 'ProductCardPrice_highlightAppearance_fe239aa7',
        blink: 'ProductCardPrice_blink_fe239aa7',
        slideUpIn: 'ProductCardPrice_slideUpIn_fe239aa7',
    },
    Cc = { base: Nc.currencyValue },
    Pc = aa(({ index: e, className: a }) => {
        const { model: s } = _c(),
            { price: t } = s.computes.product(e),
            r = s.computes.priceConfig(e).hasDiscount;
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(Nc.base, a),
            children: [
                r &&
                    (0, Ka.jsxs)('div', {
                        className: (0, Ga.default)(Nc.discount, Nc[`discount__${t.name}`]),
                        children: [
                            (0, Ka.jsx)(We, { value: t.value }),
                            (0, Ka.jsx)('div', { className: Nc.discountLine }),
                        ],
                    }),
                (0, Ka.jsx)(be, {
                    type: t.name,
                    reverse: !0,
                    size: be.sizes.extraSmall,
                    classNames: Cc,
                    children: r ? t.discountValue : t.value,
                }),
            ],
        });
    }),
    kc = 'ProductCardPurchased_2961b484',
    Rc = 'ProductCardPurchased_icon_8b2c6156',
    Ic = 'ProductCardPurchased_text_4c3e5e17',
    yc = ({ className: e }) =>
        (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(kc, e),
            children: [
                (0, Ka.jsx)('div', { className: Rc }),
                (0, Ka.jsx)('div', { className: Ic, children: R.strings.comp7_ext.products.purchased() }),
            ],
        }),
    Ac = 'ProductCardReadyToRestore_f4520fe',
    Bc = ({ className: e }) =>
        (0, Ka.jsx)('div', {
            className: (0, Ga.default)(Ac, e),
            children: (0, Ka.jsx)(Q, { text: R.strings.comp7_ext.products.readyToRestore() }),
        }),
    Tc = {
        base: 'ProductCard_eb37a243',
        base__selected: 'ProductCard_base__selected_e3c5e133',
        background: 'ProductCard_background_fb2902bf',
        backgroundGradient: 'ProductCard_backgroundGradient_488a7693',
        imageContainer: 'ProductCard_imageContainer_dac69eb6',
        corners: 'ProductCard_corners_78aef17e',
        discountBackground: 'ProductCard_discountBackground_7dc879db',
        stroke: 'ProductCard_stroke_8347e6e7',
        base__purchased: 'ProductCard_base__purchased_3cd387de',
        corner: 'ProductCard_corner_3804793a',
        corner__top: 'ProductCard_corner__top_cec72d1d',
        corner__bottom: 'ProductCard_corner__bottom_f9f9228e',
        corner__left: 'ProductCard_corner__left_3ca42dc',
        corner__right: 'ProductCard_corner__right_eb810c16',
        container: 'ProductCard_container_403a9cc9',
        name: 'ProductCard_name_52b35520',
        lock: 'ProductCard_lock_4f608a09',
        bottomString: 'ProductCard_bottomString_af3efe18',
        bottomString__withIcon: 'ProductCard_bottomString__withIcon_883bc7c',
        notification: 'ProductCard_notification_cc73b9a0',
        fadeIn: 'ProductCard_fadeIn_3cd387de',
        fadeInThreeQuarters: 'ProductCard_fadeInThreeQuarters_3cd387de',
        fadeInHalf: 'ProductCard_fadeInHalf_3cd387de',
        fadeOut: 'ProductCard_fadeOut_3cd387de',
        fadeInWithScale: 'ProductCard_fadeInWithScale_3cd387de',
        slideUp: 'ProductCard_slideUp_3cd387de',
        scale: 'ProductCard_scale_3cd387de',
        raysAppearance: 'ProductCard_raysAppearance_3cd387de',
        rotate: 'ProductCard_rotate_3cd387de',
        'reverse-rotate': 'ProductCard_reverse-rotate_3cd387de',
        glowAppearance: 'ProductCard_glowAppearance_3cd387de',
        highlightAppearance: 'ProductCard_highlightAppearance_3cd387de',
        blink: 'ProductCard_blink_3cd387de',
        slideUpIn: 'ProductCard_slideUpIn_3cd387de',
    },
    Dc = {
        [Ua.Vehicle]: 'comp_7_shop_carousel_click_tank',
        [Ua.Style3d]: 'comp_7_shop_carousel_click_style',
        [Ua.Reward]: 'comp_7_shop_carousel_click_module',
        [Ua.Base]: '',
    },
    Lc = aa(({ index: e, className: a, classNames: s }) => {
        const { model: t, controls: r } = _c(),
            { id: n, state: o, isNew: c, rank: l, type: _, tooltipId: u } = t.computes.product(e),
            m = t.computes.priceConfig(e).hasDiscount,
            h = e === t.computes.selectedProductIndex();
        return (0, Ka.jsx)(i, {
            args: { id: n, tooltipId: u },
            ignoreShowDelay: !0,
            children: (0, Ka.jsxs)('div', {
                className: (0, Ga.default)(Tc.base, h && Tc.base__selected, Tc[`base__${o}`], a),
                onClick: () => {
                    h || (ee.click(), ee.sound(Dc[_]), r.selectProduct(n), r.markProductSeen(n));
                },
                children: [
                    (0, Ka.jsx)('div', {
                        className: (0, Ga.default)(Tc.background, s?.background),
                        style: {
                            backgroundImage: `url(${ja(R.images.comp7.gui.maps.icons.products.cardsBackgrounds, l)})`,
                        },
                    }),
                    (0, Ka.jsxs)('div', {
                        className: Tc.corners,
                        children: [
                            (0, Ka.jsx)('div', {
                                className: (0, Ga.default)(Tc.corner, Tc.corner__top, Tc.corner__left, s?.corner),
                            }),
                            (0, Ka.jsx)('div', {
                                className: (0, Ga.default)(Tc.corner, Tc.corner__top, Tc.corner__right, s?.corner),
                            }),
                            (0, Ka.jsx)('div', {
                                className: (0, Ga.default)(Tc.corner, Tc.corner__bottom, Tc.corner__left, s?.corner),
                            }),
                            (0, Ka.jsx)('div', {
                                className: (0, Ga.default)(Tc.corner, Tc.corner__bottom, Tc.corner__right, s?.corner),
                            }),
                        ],
                    }),
                    (0, Ka.jsx)('div', { className: (0, Ga.default)(Tc.stroke, s?.stroke) }),
                    (0, Ka.jsx)(pc, { index: e, className: (0, Ga.default)(Tc.imageContainer, s?.imageContainer) }),
                    (0, Ka.jsx)('div', { className: Tc.backgroundGradient }),
                    m && (0, Ka.jsx)('div', { className: Tc.discountBackground }),
                    (0, Ka.jsx)(d.Root, {
                        hidden: !c,
                        className: (0, Ga.default)(Tc.notification, s?.notification),
                        children: (0, Ka.jsx)(d.Value, {
                            size: Ye.small,
                            value: R.strings.comp7_ext.products.newLabel(),
                        }),
                    }),
                    (0, Ka.jsxs)('div', {
                        className: Tc.container,
                        children: [
                            (0, Ka.jsx)(jc, { index: e, className: Tc.name }),
                            (() => {
                                switch (o) {
                                    case Wa.ReadyToRestore:
                                        return (0, Ka.jsx)(Bc, {
                                            className: (0, Ga.default)(Tc.bottomString, Tc.bottomString__withIcon),
                                        });
                                    case Wa.Purchased:
                                        return (0, Ka.jsx)(yc, {
                                            className: (0, Ga.default)(Tc.bottomString, Tc.bottomString__withIcon),
                                        });
                                    default:
                                        return (0, Ka.jsx)(Pc, { index: e, className: Tc.bottomString });
                                }
                            })(),
                        ],
                    }),
                    o === Wa.Locked && (0, Ka.jsx)('div', { className: Tc.lock }),
                ],
            }),
        });
    }),
    Ec = 'RankSection_c990c598',
    zc = 'RankSection_dividerContainer_811b1b79',
    Mc = 'RankSection_dividerContainer__right_551e2893',
    Hc = 'RankSection_verticalDivider_3a6d642f',
    Wc = 'RankSection_centralContainer_755b9082',
    Uc = 'RankSection_rankDescription_fb9e5f48',
    Vc = 'RankSection_rankImage_8c4cf71f',
    Qc = 'RankSection_rankString_514c111b',
    $c = 'RankSection_horizontalDivider_95048bb6',
    qc = 'RankSection_peak_9d148568',
    Oc = 'RankSection_peak__right_551e2893',
    Fc = 'RankSection_line_2a5d3241',
    Yc = ({ rank: e, seasonName: a, className: s }) =>
        (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(Ec, s),
            children: [
                (0, Ka.jsxs)('div', {
                    className: zc,
                    children: [
                        (0, Ka.jsx)('div', { className: Hc }),
                        (0, Ka.jsxs)('div', {
                            className: $c,
                            children: [
                                (0, Ka.jsx)('div', { className: qc }),
                                (0, Ka.jsx)('div', { className: Fc }),
                                (0, Ka.jsx)('div', { className: (0, Ga.default)(qc, Oc) }),
                            ],
                        }),
                    ],
                }),
                (0, Ka.jsxs)('div', {
                    className: Wc,
                    children: [
                        (0, Ka.jsx)(xa, { rank: e, size: pa.x40, seasonName: a, className: Vc }),
                        (0, Ka.jsx)(Q, {
                            classMix: Uc,
                            text: R.strings.comp7_ext.products.rankAccess(),
                            binding: {
                                rank: (0, Ka.jsx)('div', {
                                    className: Qc,
                                    children: H(R.strings.comp7_ext.quotesWrapper(), { name: Sa(e) }),
                                }),
                            },
                        }),
                    ],
                }),
                (0, Ka.jsxs)('div', {
                    className: (0, Ga.default)(zc, Mc),
                    children: [
                        (0, Ka.jsx)('div', { className: Hc }),
                        (0, Ka.jsxs)('div', {
                            className: $c,
                            children: [
                                (0, Ka.jsx)('div', { className: qc }),
                                (0, Ka.jsx)('div', { className: Fc }),
                                (0, Ka.jsx)('div', { className: (0, Ga.default)(qc, Oc) }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    Gc = 'Carousel_dividersSections_1b165bca',
    Xc = 'Carousel_areaContent_38720fd1',
    Kc = 'Carousel_areaWrapper_5e900854',
    Jc = 'Carousel_section_239ec09e',
    Zc = 'Carousel_scrollItem_75645375',
    el = 'Carousel_scrollItem__group_d0111639',
    al = 'Carousel_productCard_bca51e20',
    sl = 'Carousel_selectedGlowContainer_d798cbe',
    tl = 'Carousel_glow_17d85254',
    rl = 'Carousel_selectedGlowContainer__active_bca51e20',
    il = { areaWrapper: Kc, areaContent: Xc },
    nl = { glow: tl },
    ol = aa(({ className: e }) => {
        const { model: a } = _c(),
            { model: s } = ta(),
            { mediaSize: t } = U(),
            r = (0, Ya.useRef)(null),
            i = a.computes.selectedProductIndex(),
            n = a.computes.productsDividersConfig(),
            o = ((e) => (e >= x.Medium ? 180 : e >= x.Small ? 150 : 120))(t),
            d = E(
                (0, Ya.useMemo)(
                    () => ({
                        settings: {
                            step: { type: 'proportional', factor: 8 },
                            animationConfig: { tension: 120, friction: 20, ...c },
                        },
                    }),
                    [c],
                ),
            );
        var c;
        const l = ea(),
            _ = t >= x.Large ? { width: 260, offset: 20 } : { width: 226, offset: 14 },
            u = ke((e) => {
                l.run(() => {
                    if (r && r.current) {
                        const a = r.current.offsetLeft - T(o);
                        d.applyScroll(a, e);
                    }
                });
            });
        return (
            Ne(() => {
                u();
            }),
            w(() => {
                u({ immediate: !0, reset: !0 });
            }, [u]),
            (0, Ka.jsx)('div', {
                style: {
                    '--shopOffset': `${o}rem`,
                    '--itemOffset': `${_.offset}rem`,
                    '--groupOffset': 2 * _.offset + 'rem',
                    '--itemWidth': `${_.width}rem`,
                },
                children: (0, Ka.jsx)(pe, {
                    api: d,
                    children: (0, Ka.jsxs)(mc, {
                        className: e,
                        classNames: il,
                        children: [
                            (0, Ka.jsx)('div', {
                                className: Gc,
                                children: n.recordsArray.map(([e, a]) =>
                                    (0, Ka.jsx)(
                                        'div',
                                        {
                                            className: Jc,
                                            style: { width: _.width * a + _.offset * (a - 1) + 'rem' },
                                            children: (0, Ka.jsx)(Yc, { rank: e, seasonName: s.season.name.get() }),
                                        },
                                        e,
                                    ),
                                ),
                            }),
                            Fe(a.computes.productsLength(), (e) =>
                                (0, Ka.jsxs)(
                                    'div',
                                    {
                                        className: (0, Ga.default)(Zc, n.groupIndexesSet.has(e) && el),
                                        onMouseEnter: i === e ? void 0 : ee.highlight,
                                        ref: i === e ? r : void 0,
                                        children: [
                                            (0, Ka.jsx)(ya, {
                                                className: (0, Ga.default)(sl, e === i && rl),
                                                classNames: nl,
                                            }),
                                            (0, Ka.jsx)(Lc, { index: e, className: al }),
                                        ],
                                    },
                                    e,
                                ),
                            ),
                        ],
                    }),
                }),
            })
        );
    }),
    dl = 'ProductControls_control_9de2450c',
    cl = 'ProductControls_label_f6830376',
    ll = { label: cl },
    _l = aa(() => {
        const { mediaSize: e } = U(),
            { model: a, controls: s } = _c(),
            { isVehiclesCompareEnabled: t, vehicleCompareTooltipId: r } = a.root.get(),
            { hasAddToCompare: n, hasPreview: o } = a.computes.controlsConfig(),
            d = e >= x.Medium ? 'normal' : 'small';
        return (0, Ka.jsxs)(Ka.Fragment, {
            children: [
                n &&
                    (0, Ka.jsx)(i, {
                        args: { tooltipId: r },
                        isEnabled: !t,
                        children: (0, Ka.jsx)('div', {
                            className: dl,
                            children: (0, Ka.jsx)(h, {
                                type: 'compare',
                                disabled: !t,
                                onClick: s.addToVehicleCompare,
                                size: d,
                                classNames: ll,
                                children: R.strings.comp7_ext.controls.compare(),
                            }),
                        }),
                    }),
                o &&
                    (0, Ka.jsx)(h, {
                        type: 'preview',
                        onClick: s.goToPreview,
                        size: d,
                        className: dl,
                        classNames: ll,
                        children: R.strings.comp7_ext.controls.preview(),
                    }),
            ],
        });
    }),
    ul = 'PeaksContainer_ac84c920',
    ml = 'PeaksContainer_venzel_8ceb268e',
    hl = 'PeaksContainer_venzel__right_786d2e11',
    gl = 'PeaksContainer_icon_938427c2',
    pl = 'PeaksContainer_line_c8c429d2',
    fl = 'PeaksContainer_content_fa8f58a4',
    xl = ({ className: e, classNames: a, children: s }) => {
        const t = Ya.Children.toArray(s).length;
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(ul, e),
            children: [
                0 === t &&
                    (0, Ka.jsxs)('div', {
                        className: (0, Ga.default)(ml, a?.venzel),
                        children: [
                            (0, Ka.jsx)('div', { className: (0, Ga.default)(gl, a?.icon) }),
                            (0, Ka.jsx)('div', { className: (0, Ga.default)(pl, a?.line) }),
                        ],
                    }),
                t > 0 && (0, Ka.jsx)('div', { className: (0, Ga.default)(fl, a?.content), children: s }),
                (0, Ka.jsxs)('div', {
                    className: (0, Ga.default)(ml, a?.venzel, hl),
                    children: [
                        (0, Ka.jsx)('div', { className: (0, Ga.default)(gl, a?.icon) }),
                        (0, Ka.jsx)('div', { className: (0, Ga.default)(pl, a?.line) }),
                    ],
                }),
            ],
        });
    },
    bl = 'RankDiscount_9bb75367',
    vl = 'RankDiscount_godRays_4c25e606',
    Sl = 'RankDiscount_rank_5f187f66',
    wl = 'RankDiscount_disabledRankEmblem_47ff911f',
    jl = 'RankDiscount_lock_c41f1a10',
    Nl = 'RankDiscount_footer_6f406c1d',
    Cl = 'RankDiscount_rankAccessString_a1920cc8',
    Pl = 'RankDiscount_footer__maxRank_88b30d74',
    kl = 'RankDiscount_valueContainer_513d8a27',
    Rl = 'RankDiscount_discountBackground_9a06158d',
    Il = aa(({ index: e }) => {
        const { model: a } = _c(),
            { maxAchievedRank: s } = a.root.get(),
            t = a.computes.rankDiscount(e),
            r = a.computes.selectedProduct(),
            i = t.rank === s;
        return t.rank === r.rank
            ? (0, Ka.jsx)('div', {
                  className: (0, Ga.default)(Cl),
                  children: (0, Ka.jsx)(Q, { text: R.strings.comp7_ext.products.productAccess() }),
              })
            : t.value > 0
              ? (0, Ka.jsxs)('div', {
                    className: kl,
                    children: [
                        i && (0, Ka.jsx)('div', { className: Rl }),
                        (0, Ka.jsx)(Q, {
                            text: R.strings.comp7_ext.products.discount(),
                            binding: { discountPercentage: t.value },
                        }),
                    ],
                })
              : null;
    }),
    yl = aa(({ index: e, className: a }) => {
        const { model: s } = _c(),
            { model: t } = ta(),
            { currentRank: r, maxAchievedRank: i } = s.root.get(),
            n = s.computes.rankDiscount(e),
            o = n.rank === i,
            d = !n.wasUnlocked;
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(bl, a),
            children: [
                n.rank === r &&
                    (0, Ka.jsx)(f, {
                        className: vl,
                        src: String(R.videos.comp7.godRaysNew_130x130()),
                        autoplay: !0,
                        loop: !0,
                    }),
                (0, Ka.jsx)(xt, {
                    rank: n.rank,
                    from: n.from,
                    to: n.to,
                    divisions: n.divisions,
                    className: Sl,
                    ignoreShowDelay: !0,
                    children: (0, Ka.jsx)(xa, {
                        seasonName: t.season.name.get(),
                        size: pa.x48,
                        rank: n.rank,
                        className: (0, Ga.default)(d && wl),
                    }),
                }),
                d && (0, Ka.jsx)('div', { className: jl }),
                (0, Ka.jsx)('div', {
                    className: (0, Ga.default)(Nl, o && Pl),
                    children: (0, Ka.jsx)(Il, { index: e }),
                }),
            ],
        });
    }),
    Al = 'DiscountSection_9acad8ef',
    Bl = 'DiscountSection_discounts_c60041bb',
    Tl = 'DiscountSection_rankDiscount_21ec2bb9',
    Dl = 'DiscountSection_discountDescription_20f9cc53',
    Ll = aa(({ className: e }) => {
        const { model: a } = _c();
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(Al, e),
            children: [
                (0, Ka.jsx)(xl, { children: R.strings.comp7_ext.products.discountSectionName() }),
                (0, Ka.jsx)('div', {
                    className: Bl,
                    children: Fe(a.computes.rankDiscountsLength(), (e) =>
                        (0, Ka.jsx)(yl, { index: e, className: Tl }, e),
                    ),
                }),
                (0, Ka.jsx)(De, { text: R.strings.comp7_ext.products.discountDescription(), classMix: Dl }),
            ],
        });
    }),
    El = 'InProgressSection_fefaeb32',
    zl = 'InProgressSection_content_b04c3856',
    Ml = 'InProgressSection_background_a19a49db',
    Hl = 'InProgressSection_highlight_f936c9ac',
    Wl = 'InProgressSection_state_2d79ab7d',
    Ul = 'InProgressSection_inProgressString_9cafd080',
    Vl = 'InProgressSection_inProgressStringIcon_a4a5b2ae',
    Ql = ({ className: e }) =>
        (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(El, e),
            children: [
                (0, Ka.jsx)(xl, {}),
                (0, Ka.jsxs)('div', {
                    className: zl,
                    children: [
                        (0, Ka.jsx)('div', { className: Ml }),
                        (0, Ka.jsx)('div', { className: Hl }),
                        (0, Ka.jsx)('div', {
                            className: Wl,
                            children: (0, Ka.jsxs)('div', {
                                className: Ul,
                                children: [
                                    (0, Ka.jsx)('div', { className: Vl }),
                                    R.strings.comp7_ext.products.inProgress(),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, Ka.jsx)(xl, {}),
            ],
        }),
    $l = 'NationFlag_42e58a02',
    ql = 'NationFlag_nationFlag_2f0a2e52',
    Ol = R.images.gui.maps.icons.eventBoards.flagsOverlay,
    Fl = ({ nation: e, className: a }) =>
        (0, Ka.jsxs)('div', {
            className: (0, Ga.default)($l, a),
            children: [
                (0, Ka.jsx)('div', { className: ql, style: { backgroundImage: `url(${Ol.$dyn(e)})` } }),
                (0, Ka.jsx)('div', { className: ql, style: { backgroundImage: `url(${Ol.$dyn(e)})` } }),
            ],
        }),
    Yl = 'NameSection_be509601',
    Gl = 'NameSection_nationFlag_bc9f5727',
    Xl = 'NameSection_productName_ebab47bb',
    Kl = 'NameSection_style3dSubtitle_f11dae45',
    Jl = 'NameSection_style3dSubtitleVehicleText_6fb3b14',
    Zl = 'NameSection_vehicleDescription_71fefa0',
    e_ = (e) => (e >= x.Medium ? La.x64 : La.x48),
    a_ = (e) => (e >= x.Large ? La.x48 : La.x24),
    s_ = aa(({ className: e }) => {
        const { model: a } = _c(),
            { mediaSize: s } = U(),
            t = a.computes.selectedProduct(),
            r = { id: t.id, tooltipId: t.tooltipId };
        switch (t.type) {
            case Ua.Vehicle: {
                const { tier: i, name: n, type: o, isPremium: d, roleKey: c, nation: l, vehicleCD: _ } = t.vehicleInfo;
                return (0, Ka.jsxs)('div', {
                    className: (0, Ga.default)(Yl, e),
                    children: [
                        (0, Ka.jsx)(Fl, { nation: l, className: Gl }),
                        (0, Ka.jsx)(Ea, {
                            tier: i,
                            name: n,
                            type: o,
                            tooltipArgs: r,
                            isPremium: d,
                            size: e_(s),
                            role: c,
                            vehicleCD: _,
                            className: Xl,
                        }),
                        a.computes.hasVehicleDescription() && (0, Ka.jsx)(Q, { text: t.description, classMix: Zl }),
                    ],
                });
            }
            case Ua.Style3d: {
                const { tier: a, name: n, type: o, isPremium: d } = t.vehicleInfo;
                return (0, Ka.jsxs)('div', {
                    className: (0, Ga.default)(Yl, e),
                    children: [
                        (0, Ka.jsx)(i, {
                            args: r,
                            children: (0, Ka.jsx)('div', {
                                children: (0, Ka.jsx)(Q, {
                                    text: R.strings.comp7_ext.products.style3d(),
                                    binding: { name: (0, Ka.jsx)(Va, { name: t.name }) },
                                    classMix: Xl,
                                }),
                            }),
                        }),
                        (0, Ka.jsx)(Q, {
                            text: R.strings.comp7_ext.forVehicle(),
                            binding: {
                                vehicleName: (0, Ka.jsx)(Ea, {
                                    name: n,
                                    tier: a,
                                    type: o,
                                    isPremium: d,
                                    size: a_(s),
                                    className: Jl,
                                }),
                            },
                            classMix: Kl,
                        }),
                    ],
                });
            }
            case Ua.Reward:
                return (0, Ka.jsx)('div', {
                    className: (0, Ga.default)(Yl, e),
                    children: (0, Ka.jsx)(i, {
                        args: r,
                        children: (0, Ka.jsx)('div', { className: Xl, children: t.reward.label }),
                    }),
                });
            default:
                return (console.error(`Provide NameSection case for ProductTypes:${t.type}`), null);
        }
    }),
    t_ = {
        base: 'PriceSection_d9d9a2a',
        container: 'PriceSection_container_3c5a950d',
        priceContainer: 'PriceSection_priceContainer_32f8a37b',
        price: 'PriceSection_price_7c7f23d6',
        limitString: 'PriceSection_limitString_4cc1ce88',
        count: 'PriceSection_count_ad9afd04',
        separator: 'PriceSection_separator_ab73f43a',
        accessContainer: 'PriceSection_accessContainer_7e38d32c',
        rankBackground: 'PriceSection_rankBackground_b195b973',
        accessBlock: 'PriceSection_accessBlock_c52d6cb4',
        lock: 'PriceSection_lock_f0dfa41c',
        accessString: 'PriceSection_accessString_e229614',
        rankString: 'PriceSection_rankString_103cc1a6',
        currencyValue: 'PriceSection_currencyValue_e28a8198',
        discount: 'PriceSection_discount_ab028597',
        discount__freeXP: 'PriceSection_discount__freeXP_fc01a1a4',
        discount__credits: 'PriceSection_discount__credits_d7b8d0c4',
        discount__gold: 'PriceSection_discount__gold_c0bae272',
        discount__xp: 'PriceSection_discount__xp_6b657bf',
        discount__crystal: 'PriceSection_discount__crystal_6b657bf',
        discount__equipCoin: 'PriceSection_discount__equipCoin_6fde7d66',
        discountLine: 'PriceSection_discountLine_f899c35d',
        buttonContainer: 'PriceSection_buttonContainer_7f4544ab',
        button: 'PriceSection_button_23c25f29',
        fadeIn: 'PriceSection_fadeIn_6b657bf',
        fadeInThreeQuarters: 'PriceSection_fadeInThreeQuarters_6b657bf',
        fadeInHalf: 'PriceSection_fadeInHalf_6b657bf',
        fadeOut: 'PriceSection_fadeOut_6b657bf',
        fadeInWithScale: 'PriceSection_fadeInWithScale_6b657bf',
        slideUp: 'PriceSection_slideUp_6b657bf',
        scale: 'PriceSection_scale_6b657bf',
        raysAppearance: 'PriceSection_raysAppearance_6b657bf',
        rotate: 'PriceSection_rotate_6b657bf',
        'reverse-rotate': 'PriceSection_reverse-rotate_6b657bf',
        glowAppearance: 'PriceSection_glowAppearance_6b657bf',
        highlightAppearance: 'PriceSection_highlightAppearance_6b657bf',
        blink: 'PriceSection_blink_6b657bf',
        slideUpIn: 'PriceSection_slideUpIn_6b657bf',
    },
    r_ = aa(() => {
        const { model: e, controls: a } = _c(),
            { mediaSize: s } = U(),
            t = e.computes.selectedProductIndex(),
            r = e.computes.selectedProduct(),
            { isEnough: i } = e.computes.priceConfig(t),
            n = () => {
                i && (ee.sound(R.sounds.comp_7_shop_purchase_preview()), a.purchase());
            };
        switch (r.state) {
            case Wa.Locked:
                return (0, Ka.jsxs)(Ka.Fragment, {
                    children: [
                        (0, Ka.jsx)('div', { className: t_.separator }),
                        (0, Ka.jsxs)('div', {
                            className: t_.accessContainer,
                            children: [
                                (0, Ka.jsx)('div', {
                                    className: t_.rankBackground,
                                    style: {
                                        backgroundImage: `url(${ja(R.images.comp7.gui.maps.icons.products.accessBackgrounds, r.rank)})`,
                                    },
                                }),
                                (0, Ka.jsxs)('div', {
                                    className: t_.accessBlock,
                                    children: [
                                        (0, Ka.jsx)('div', { className: t_.lock }),
                                        (0, Ka.jsx)(Q, {
                                            text: R.strings.comp7_ext.products.message.rankAccess(),
                                            binding: {
                                                rank: (0, Ka.jsx)('span', {
                                                    className: t_.rankString,
                                                    children: wa(r.rank),
                                                }),
                                            },
                                            classMix: t_.accessString,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            case Wa.ReadyToPurchase:
                return (0, Ka.jsx)(N, {
                    isEnabled: !i,
                    body: R.strings.comp7_ext.products.message.notEnough(),
                    children: (0, Ka.jsx)('div', {
                        className: t_.buttonContainer,
                        children: (0, Ka.jsx)(se, {
                            theme: se.themes.primary,
                            size: ia(s),
                            onClick: n,
                            onMouseEnter: () => {
                                i && ee.highlight();
                            },
                            className: t_.button,
                            disabled: !i,
                            silent: !0,
                            children: R.strings.comp7_ext.products.actions.buy(),
                        }),
                    }),
                });
            default:
                return (
                    console.error(`ActionsContainer in PriceSection was called for unappropriated state ${r.state}`),
                    null
                );
        }
    }),
    i_ = { base: t_.currencyValue },
    n_ = aa(({ className: e }) => {
        const { model: a } = _c(),
            s = a.computes.selectedProduct(),
            t = a.computes.selectedProductIndex(),
            { hasDiscount: r, isEnough: i } = a.computes.priceConfig(t);
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(t_.base, e),
            children: [
                (0, Ka.jsx)(xl, { children: R.strings.comp7_ext.products.priceSectionName() }),
                (0, Ka.jsxs)('div', {
                    className: t_.container,
                    children: [
                        (0, Ka.jsxs)('div', {
                            className: t_.priceContainer,
                            children: [
                                (0, Ka.jsxs)('div', {
                                    className: t_.price,
                                    children: [
                                        r &&
                                            (0, Ka.jsxs)('div', {
                                                className: (0, Ga.default)(
                                                    t_.discount,
                                                    t_[`discount__${s.price.name}`],
                                                ),
                                                children: [
                                                    (0, Ka.jsx)(We, { value: s.price.value }),
                                                    (0, Ka.jsx)('div', { className: t_.discountLine }),
                                                ],
                                            }),
                                        (0, Ka.jsx)(be, {
                                            type: s.price.name,
                                            reverse: !0,
                                            enough: i,
                                            size: be.sizes.large,
                                            classNames: i_,
                                            children: r ? s.price.discountValue : s.price.value,
                                        }),
                                    ],
                                }),
                                a.computes.hasLimitedQuantity() &&
                                    (0, Ka.jsx)('div', {
                                        className: t_.limitString,
                                        children: (0, Ka.jsx)(Q, {
                                            text: R.strings.comp7_ext.products.limitedQuantitySeason(),
                                            binding: {
                                                count: (0, Ka.jsx)('span', {
                                                    className: t_.count,
                                                    children: s.limitedQuantity,
                                                }),
                                            },
                                        }),
                                    }),
                            ],
                        }),
                        (0, Ka.jsx)(r_, {}),
                    ],
                }),
            ],
        });
    }),
    o_ = 'PurchasedSection_6164cf64',
    d_ = 'PurchasedSection_content_d868988b',
    c_ = 'PurchasedSection_state_30f7765d',
    l_ = 'PurchasedSection_purchasedString_f2d4b10a',
    __ = 'PurchasedSection_purchasedStringIcon_396eb88c',
    u_ = 'PurchasedSection_quantityOfferString_9c521da',
    m_ = 'PurchasedSection_background_7dd21da0',
    h_ = 'PurchasedSection_highlight_8cd4f52',
    g_ = 'PurchasedSection_buttonContainer_f3e259c2',
    p_ = 'PurchasedSection_button_c980ad41',
    f_ = aa(() => {
        const { model: e, controls: a } = _c(),
            s = e.computes.selectedProduct(),
            { mediaSize: t } = U();
        switch (s.type) {
            case Ua.Vehicle:
                return s.canGoToHangar
                    ? (0, Ka.jsx)('div', {
                          className: g_,
                          children: (0, Ka.jsx)(se, {
                              theme: se.themes.primary,
                              size: ia(t),
                              onClick: a.goToHangar,
                              className: p_,
                              children: R.strings.comp7_ext.products.actions.toHangar(),
                          }),
                      })
                    : null;
            case Ua.Style3d: {
                const e = !s.canGoToCustomization;
                return (0, Ka.jsx)(N, {
                    isEnabled: e,
                    header: R.strings.comp7_ext.products.customizationUnavailable.title(),
                    body: R.strings.comp7_ext.products.customizationUnavailable.body(),
                    children: (0, Ka.jsx)('div', {
                        className: g_,
                        children: (0, Ka.jsx)(se, {
                            theme: se.themes.primary,
                            size: ia(t),
                            onMouseEnter: () => {
                                e || ee.highlight();
                            },
                            onClick: () => {
                                e || (ee.click(), a.goToCustomization());
                            },
                            silent: !0,
                            className: p_,
                            disabled: e,
                            children: R.strings.comp7_ext.products.actions.toCustomization(),
                        }),
                    }),
                });
            }
            default:
                return null;
        }
    }),
    x_ = aa(({ className: e }) => {
        const { model: a } = _c(),
            s = a.computes.selectedProduct();
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(o_, e),
            children: [
                (0, Ka.jsx)(xl, {}),
                (0, Ka.jsxs)('div', {
                    className: d_,
                    children: [
                        (0, Ka.jsx)('div', { className: m_ }),
                        (0, Ka.jsx)('div', { className: h_ }),
                        (0, Ka.jsxs)('div', {
                            className: c_,
                            children: [
                                (0, Ka.jsxs)('div', {
                                    className: l_,
                                    children: [
                                        (0, Ka.jsx)('div', { className: __ }),
                                        R.strings.comp7_ext.products.purchased(),
                                    ],
                                }),
                                s.type === Ua.Reward &&
                                    (0, Ka.jsx)('div', {
                                        className: u_,
                                        children: H(R.strings.comp7_ext.products.limitedQuantitySeason(), {
                                            count: s.limitedQuantity,
                                        }),
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, Ka.jsx)(xl, {}),
                (0, Ka.jsx)(f_, {}),
            ],
        });
    }),
    b_ = 'ReadyToRestoreSection_2e7dcd59',
    v_ = 'ReadyToRestoreSection_content_65d667a0',
    S_ = 'ReadyToRestoreSection_description_67d7fa6f',
    w_ = 'ReadyToRestoreSection_buttonContainer_37adf442',
    j_ = 'ReadyToRestoreSection_button_8778f905',
    N_ = aa(({ className: e }) => {
        const { controls: a } = _c(),
            { mediaSize: s } = U();
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(b_, e),
            children: [
                (0, Ka.jsx)(xl, {}),
                (0, Ka.jsxs)('div', {
                    className: v_,
                    children: [
                        (0, Ka.jsx)('div', {
                            className: S_,
                            children: (0, Ka.jsx)(Q, {
                                text: R.strings.comp7_ext.products.readyToRestoreDescription(),
                            }),
                        }),
                        (0, Ka.jsx)('div', {
                            className: w_,
                            children: (0, Ka.jsx)(se, {
                                theme: se.themes.primary,
                                size: ia(s),
                                onClick: () => {
                                    (ee.sound(R.sounds.comp_7_shop_purchase_preview()), a.restore());
                                },
                                className: j_,
                                children: R.strings.comp7_ext.products.actions.restore(),
                            }),
                        }),
                    ],
                }),
            ],
        });
    }),
    C_ = 'ProductDetails_8c03fb32',
    P_ = 'ProductDetails_section_dcf92365',
    k_ = [Wa.Locked, Wa.ReadyToPurchase],
    R_ = aa(({ className: e }) => {
        const { model: a } = _c(),
            s = a.computes.selectedProduct();
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(C_, e),
            children: [
                (0, Ka.jsx)(s_, { className: P_ }),
                k_.includes(s.state) && (0, Ka.jsx)(Ll, { className: P_ }),
                (() => {
                    switch (s.state) {
                        case Wa.Purchased:
                            return (0, Ka.jsx)(x_, { className: P_ });
                        case Wa.InProgress:
                            return (0, Ka.jsx)(Ql, { className: P_ });
                        case Wa.ReadyToRestore:
                            return (0, Ka.jsx)(N_, { className: P_ });
                        default:
                            return (0, Ka.jsx)(n_, { className: P_ });
                    }
                })(),
            ],
        });
    }),
    I_ = { from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 300 } },
    y_ = {
        from: { opacity: 0, transform: 'translate(-50%, -50%) scale(0.9)' },
        to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        config: { duration: 100 },
    },
    A_ = 'ShopPage_7caee38d',
    B_ = 'ShopPage_sceneWrapper_d44346fd',
    T_ = 'ShopPage_vignette_823cbd98',
    D_ = 'ShopPage_headersWrapper_3bd5a059',
    L_ = 'ShopPage_activeSeasonState_bb0c25d9',
    E_ = 'ShopPage_contentWrapper_d401697c',
    z_ = 'ShopPage_rewardContainer_99ec190d',
    M_ = 'ShopPage_rewardBase_bb0c25d9',
    H_ = 'ShopPage_rewardHighlight_c5563e7',
    W_ = 'ShopPage_controls_b6cdda75',
    U_ = 'ShopPage_mainContainer_f2e01656',
    V_ = 'ShopPage_details_189bbbd4',
    Q_ = 'ShopPage_carousel_1cf76ba5',
    $_ = (e) => (e >= x.Large ? W.S600x450 : e >= x.Small ? W.S400x300 : W.S296x222),
    q_ = aa(() => {
        const { model: e } = _c(),
            { mediaSize: a } = U(),
            s = A(ka),
            r = e.computes.selectedProduct(),
            { hasControls: i } = e.computes.controlsConfig(),
            [n, o] = A(() => I_),
            [d, c] = A(() => y_);
        return (
            (0, Ya.useLayoutEffect)(() => {
                (c.set(y_.from), o.set(I_.from));
            }, [c, o, r.id, r.state]),
            (0, Ya.useEffect)(() => {
                (c.start({ ...y_, delay: 300 }), o.start({ ...I_, delay: 100 }));
            }, [c, o, r.id, r.state]),
            (0, Ka.jsxs)(Ka.Fragment, {
                children: [
                    r.type === Ua.Reward &&
                        (0, Ka.jsxs)('div', {
                            className: z_,
                            children: [
                                (0, Ka.jsx)('div', { className: H_ }),
                                (0, Ka.jsx)(v.div, {
                                    style: n,
                                    children: (0, Ka.jsx)(F, {
                                        ...Ha({ reward: r.reward, size: $_(a) }),
                                        tooltipArgs: t({ tooltipId: r.tooltipId, id: r.id }),
                                        className: M_,
                                    }),
                                }),
                            ],
                        }),
                    i && (0, Ka.jsx)(v.div, { style: d, className: W_, children: (0, Ka.jsx)(_l, {}, r.id) }),
                    (0, Ka.jsx)(v.div, { style: n, className: U_, children: (0, Ka.jsx)(R_, { className: V_ }) }),
                    (0, Ka.jsx)(v.div, { style: s, children: (0, Ka.jsx)(ol, { className: Q_ }) }),
                ],
            })
        );
    }),
    O_ = { activeSeasonState: L_ },
    F_ = { [oc.Initial]: () => (0, Ka.jsx)('div', {}), [oc.Success]: q_, [oc.Error]: Ns },
    Y_ = aa(() => {
        const e = A(ka),
            { model: a, controls: s } = _c(),
            t = a.root.get().shopState,
            r = a.computes.hasSceneWrapper(),
            i = F_[t];
        return i
            ? (0, Ka.jsxs)('div', {
                  className: A_,
                  'data-test-id': 'shop-page',
                  children: [
                      r &&
                          (0, Ka.jsx)('div', {
                              className: B_,
                              children: (0, Ka.jsx)(te, {
                                  moveSpace: s.moveSpace,
                                  onMouseOver3dScene: s.mouseOver3dScene,
                              }),
                          }),
                      t !== oc.Error && (0, Ka.jsx)('div', { className: T_ }),
                      (0, Ka.jsx)('div', { className: D_, children: (0, Ka.jsx)(oa, { classNames: O_ }) }),
                      (0, Ka.jsx)(v.div, { className: E_, style: e, children: (0, Ka.jsx)(i, {}) }),
                  ],
              })
            : (console.error('Unreachable code: ShopPage.tsx'), null);
    }),
    G_ = (function (e) {
        return (
            (e.LOCKED_BY_NO_X_VEHICLES = 'lockedByNoXVehicles'),
            (e.LOCKED_BY_INACTIVE_SEASON = 'lockedByInactiveSeason'),
            (e.LOCKED_BY_PREVIOUS_QUEST = 'lockedByPreviousQuest'),
            (e.ACTIVE = 'active'),
            (e.COMPLETED = 'completed'),
            e
        );
    })({}),
    X_ = [G_.LOCKED_BY_NO_X_VEHICLES, G_.LOCKED_BY_INACTIVE_SEASON, G_.LOCKED_BY_PREVIOUS_QUEST],
    [K_, J_] = ve()(
        ({ observableModel: e }) => {
            const a = {
                    root: e.object(),
                    questCards: e.array('questCards'),
                    progressPoints: e.array('progressPoints'),
                },
                s = Re(
                    (e) => {
                        const s = 5 * e,
                            t = [...Te(a.questCards.get(), s, s + 5 - 1)];
                        if (5 !== t.length) throw new Error(`Unexpected weekly list length: ${t.length} expected: 5`);
                        return t;
                    },
                    { equals: o },
                ),
                t = Re(
                    (e, a) => {
                        const t = s(e),
                            r = Ze(t, a);
                        if (!r) throw new Error(`Unexpected card index: ${a}`);
                        return { ...r };
                    },
                    { equals: o },
                ),
                r = Re(
                    (e, a, s) => {
                        const r = t(e, a).rewards;
                        return Ma({ rewards: r, size: s });
                    },
                    { equals: o },
                ),
                i = Re((e, a) => X_.includes(t(e, a).state));
            return {
                ...a,
                computes: { questCardsLength: Re((e) => s(e).length), questCard: t, questRewards: r, isQuestLocked: i },
            };
        },
        ({ externalModel: e }) => ({
            animationStart: e.createCallbackNoArgs('onAnimationStart'),
            animationEnd: e.createCallbackNoArgs('onAnimationEnd'),
            goToRewardsSelection: e.createCallbackNoArgs('onGoToRewardsSelection'),
        }),
    ),
    Z_ = 'CountdownStatus_8bd2c608',
    eu = 'CountdownStatus_content_ba867330',
    au = 'CountdownStatus_shine_11fd24ed',
    su = 'CountdownStatus_text_23310da3',
    tu = 'CountdownStatus_countDownWrapper_772ca654',
    ru = 'CountdownStatus_countDownIcon_94b471ff',
    iu = 'CountdownStatus_timer_f5350620',
    nu = aa(({ className: e }) => {
        const { model: a } = J_(),
            { timeToNewQuests: s } = a.root.get();
        return (0, Ka.jsx)('div', {
            className: (0, Ga.default)(Z_, e),
            children: (0, Ka.jsxs)('div', {
                className: eu,
                children: [
                    (0, Ka.jsx)('div', { className: au }),
                    -1 === s
                        ? (0, Ka.jsx)('div', {
                              className: su,
                              children: R.strings.comp7_ext.weeklyQuests.CountdownStatus.done(),
                          })
                        : (0, Ka.jsx)(Q, {
                              text: R.strings.comp7_ext.weeklyQuests.CountdownStatus.active(5),
                              binding: {
                                  value: 5,
                                  countdown: (0, Ka.jsxs)('div', {
                                      className: tu,
                                      children: [
                                          (0, Ka.jsx)('div', { className: ru }),
                                          (0, Ka.jsx)(g, { icon: u.None, duration: s, classNames: { text: iu } }),
                                      ],
                                  }),
                              },
                              classMix: su,
                          }),
                ],
            }),
        });
    }),
    ou = 'Progress_868e8f6f',
    du = 'Progress_counter_28173a36',
    cu = 'Progress_current_89c6d7a7',
    lu = 'Progress_progressBar_8570680b',
    _u = ({ current: e, total: s, isDisabled: t, className: r }) =>
        (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(ou, r),
            children: [
                (0, Ka.jsx)(Q, {
                    classMix: du,
                    text: R.strings.comp7_ext.weeklyQuests.card.progress.counter(),
                    binding: {
                        current: (0, Ka.jsx)('div', { className: cu, children: (0, Ka.jsx)(We, { value: e }) }),
                        total: (0, Ka.jsx)(We, { value: s }),
                    },
                }),
                (0, Ka.jsx)('div', {
                    className: lu,
                    children: (0, Ka.jsx)(ca, { size: a.Small, value: e, maxValue: s, disabled: t }),
                }),
            ],
        }),
    uu = {
        base: 'Status_8705d4b8',
        base__locked: 'Status_base__locked_aa01c207',
        icon: 'Status_icon_40b5503c',
        base__active: 'Status_base__active_35b9a31c',
        base__completed: 'Status_base__completed_35b9a31c',
        text: 'Status_text_b0594007',
        fadeIn: 'Status_fadeIn_35b9a31c',
        fadeInThreeQuarters: 'Status_fadeInThreeQuarters_35b9a31c',
        fadeInHalf: 'Status_fadeInHalf_35b9a31c',
        fadeOut: 'Status_fadeOut_35b9a31c',
        fadeInWithScale: 'Status_fadeInWithScale_35b9a31c',
        slideUp: 'Status_slideUp_35b9a31c',
        scale: 'Status_scale_35b9a31c',
        raysAppearance: 'Status_raysAppearance_35b9a31c',
        rotate: 'Status_rotate_35b9a31c',
        'reverse-rotate': 'Status_reverse-rotate_35b9a31c',
        glowAppearance: 'Status_glowAppearance_35b9a31c',
        highlightAppearance: 'Status_highlightAppearance_35b9a31c',
        blink: 'Status_blink_35b9a31c',
        slideUpIn: 'Status_slideUpIn_35b9a31c',
    },
    mu = aa(({ weeklyIndex: e, index: a, className: s }) => {
        const { model: t } = J_(),
            { state: r } = t.computes.questCard(e, a),
            i = t.computes.isQuestLocked(e, a);
        return (0, Ka.jsx)(N, {
            isEnabled: i,
            header: R.strings.comp7_ext.weeklyQuests.card.statusLockedTooltip.header(),
            body: String(R.strings.comp7_ext.weeklyQuests.card.statusLockedTooltip.body.$dyn(r)),
            children: (0, Ka.jsxs)('div', {
                className: (0, Ga.default)(uu.base, i ? uu.base__locked : uu[`base__${r}`], s),
                children: [
                    (0, Ka.jsx)('div', { className: uu.icon }),
                    (0, Ka.jsx)('div', {
                        className: uu.text,
                        children: String(
                            i
                                ? R.strings.comp7_ext.weeklyQuests.card.status.locked()
                                : R.strings.comp7_ext.weeklyQuests.card.status.$dyn(r),
                        ),
                    }),
                ],
            }),
        });
    }),
    hu = {
        base: 'QuestCard_3e0b323',
        highlightContainer: 'QuestCard_highlightContainer_d9798897',
        highlight: 'QuestCard_highlight_d23503f3',
        glowContainer: 'QuestCard_glowContainer_608d2f65',
        glow: 'QuestCard_glow_432a3cc7',
        glowAppearance: 'QuestCard_glowAppearance_9c76dd70',
        icon: 'QuestCard_icon_179f870b',
        base__completed: 'QuestCard_base__completed_9c76dd70',
        base__locked: 'QuestCard_base__locked_9c76dd70',
        content: 'QuestCard_content_ebb4ebad',
        progress: 'QuestCard_progress_82e4abd1',
        description: 'QuestCard_description_1ca786f2',
        reward: 'QuestCard_reward_154f687d',
        status: 'QuestCard_status_26f52074',
        fadeIn: 'QuestCard_fadeIn_9c76dd70',
        fadeInThreeQuarters: 'QuestCard_fadeInThreeQuarters_9c76dd70',
        fadeInHalf: 'QuestCard_fadeInHalf_9c76dd70',
        fadeOut: 'QuestCard_fadeOut_9c76dd70',
        fadeInWithScale: 'QuestCard_fadeInWithScale_9c76dd70',
        slideUp: 'QuestCard_slideUp_9c76dd70',
        scale: 'QuestCard_scale_9c76dd70',
        raysAppearance: 'QuestCard_raysAppearance_9c76dd70',
        rotate: 'QuestCard_rotate_9c76dd70',
        'reverse-rotate': 'QuestCard_reverse-rotate_9c76dd70',
        highlightAppearance: 'QuestCard_highlightAppearance_9c76dd70',
        blink: 'QuestCard_blink_9c76dd70',
        slideUpIn: 'QuestCard_slideUpIn_9c76dd70',
    },
    gu = (e) => (X_.includes(e) ? 'locked' : e),
    pu = aa(({ weeklyIndex: e, index: a }) => {
        const { model: s } = J_(),
            { state: t, currentProgress: r, totalProgress: i, description: n, iconKey: o } = s.computes.questCard(e, a),
            { mediaSize: d } = U(),
            c = d > x.Large ? W.Big : W.Small;
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(hu.base, hu[`base__${gu(t)}`]),
            children: [
                t === G_.ACTIVE &&
                    (0, Ka.jsxs)(Ka.Fragment, {
                        children: [
                            (0, Ka.jsx)('div', {
                                className: hu.highlightContainer,
                                children: (0, Ka.jsx)('div', { className: hu.highlight }),
                            }),
                            (0, Ka.jsx)(ya, { className: hu.glowContainer, classNames: { glow: hu.glow } }),
                        ],
                    }),
                (0, Ka.jsx)('div', {
                    className: hu.icon,
                    style: { backgroundImage: `url(R.images.comp7.gui.maps.icons.weekly_quests.${o})` },
                }),
                (0, Ka.jsxs)('div', {
                    className: hu.content,
                    children: [
                        (0, Ka.jsx)(_u, { current: r, total: i, isDisabled: t !== G_.ACTIVE, className: hu.progress }),
                        (0, Ka.jsx)('div', { className: hu.description, children: n }),
                        (0, Ka.jsx)(_, {
                            data: s.computes.questRewards(e, a, c),
                            size: c,
                            rewardItemClassMix: hu.reward,
                        }),
                    ],
                }),
                (0, Ka.jsx)(mu, { weeklyIndex: e, index: a, className: hu.status }),
            ],
        });
    }),
    fu = {
        base: 'Separator_a28fd211',
        line: 'Separator_line_d9470d1d',
        line__top: 'Separator_line__top_cc72e6fd',
        line__bottom: 'Separator_line__bottom_e3b65942',
        shine: 'Separator_shine_afbe5b6c',
        shine__sideRight: 'Separator_shine__sideRight_135c602f',
        arrowContainer: 'Separator_arrowContainer_65da755d',
        arrow: 'Separator_arrow_42ab3099',
        base__highlighted: 'Separator_base__highlighted_68dca4b0',
        fadeIn: 'Separator_fadeIn_68dca4b0',
        fadeInThreeQuarters: 'Separator_fadeInThreeQuarters_68dca4b0',
        fadeInHalf: 'Separator_fadeInHalf_68dca4b0',
        fadeOut: 'Separator_fadeOut_68dca4b0',
        fadeInWithScale: 'Separator_fadeInWithScale_68dca4b0',
        slideUp: 'Separator_slideUp_68dca4b0',
        scale: 'Separator_scale_68dca4b0',
        raysAppearance: 'Separator_raysAppearance_68dca4b0',
        rotate: 'Separator_rotate_68dca4b0',
        'reverse-rotate': 'Separator_reverse-rotate_68dca4b0',
        glowAppearance: 'Separator_glowAppearance_68dca4b0',
        highlightAppearance: 'Separator_highlightAppearance_68dca4b0',
        blink: 'Separator_blink_68dca4b0',
        slideUpIn: 'Separator_slideUpIn_68dca4b0',
    },
    xu = (function (e) {
        return (
            (e.Normal = 'normal'),
            (e.Highlighted = 'highlighted'),
            (e.SideLeft = 'sideLeft'),
            (e.SideRight = 'sideRight'),
            e
        );
    })({}),
    bu = ({ type: e }) =>
        'sideLeft' === e || 'sideRight' === e
            ? (0, Ka.jsx)('div', {
                  className: fu.line,
                  children: (0, Ka.jsx)('div', { className: (0, Ga.default)(fu.shine, fu[`shine__${e}`]) }),
              })
            : (0, Ka.jsxs)('div', {
                  className: (0, Ga.default)(fu.base, fu[`base__${e}`]),
                  children: [
                      (0, Ka.jsx)('div', { className: (0, Ga.default)(fu.line, fu.line__top) }),
                      (0, Ka.jsx)('div', {
                          className: fu.arrowContainer,
                          children: (0, Ka.jsx)('div', { className: fu.arrow }),
                      }),
                      (0, Ka.jsx)('div', { className: (0, Ga.default)(fu.line, fu.line__bottom) }),
                  ],
              }),
    vu = 'WeeklyList_6acdc358',
    Su = aa(({ weeklyIndex: e, className: a }) => {
        const { model: s } = J_(),
            { computes: t } = s;
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(vu, a),
            children: [
                (0, Ka.jsx)(bu, { type: xu.SideLeft }),
                Fe(5, (a) =>
                    (0, Ka.jsxs)(
                        Ya.Fragment,
                        {
                            children: [
                                a > 0 && (0, Ka.jsx)(bu, { type: t.isQuestLocked(e, a) ? xu.Normal : xu.Highlighted }),
                                (0, Ka.jsx)(pu, { weeklyIndex: e, index: a }),
                            ],
                        },
                        a,
                    ),
                ),
                (0, Ka.jsx)(bu, { type: xu.SideRight }),
            ],
        });
    }),
    wu = 'QuestsList_d9995b1a',
    ju = 'QuestsList_scrollWrapper_f3107796',
    Nu = 'QuestsList_contentWrapper_71c1145a',
    Cu = 'QuestsList_scrollContent_c8f7fb3d',
    Pu = 'QuestsList_weeklyList_832ee756',
    ku = 'QuestsList_countdownStatus_ea0d6a1d',
    Ru = 'QuestsList_countdownStatus__show_80949577',
    Iu = { wrapper: Nu, content: Cu },
    yu = aa(({ className: e }) => {
        const [a, s] = (0, Ya.useState)(!1),
            { model: t } = J_(),
            r = Math.floor(t.questCards.get().length / 5),
            i = r > 1,
            { api: o } = me();
        return (
            n(o, o.settings.animationConfig),
            (0, Ya.useEffect)(() => {
                const e = () => {
                    const [, e] = o.getBounds();
                    s(e - o.animationScroll.scrollPosition.get() < 20);
                };
                return (
                    o.events.on('change', e),
                    o.events.on('resizeHandled', e),
                    o.events.on('recalculateContent', e),
                    () => {
                        (o.events.off('change', e),
                            o.events.off('resizeHandled', e),
                            o.events.off('recalculateContent', e));
                    }
                );
            }, [o]),
            (0, Ka.jsxs)('div', {
                className: (0, Ga.default)(wu, e),
                children: [
                    (0, Ka.jsx)(de, {
                        className: ju,
                        classNames: Iu,
                        children: Fe(r, (e) => (0, Ka.jsx)(Su, { weeklyIndex: e, className: Pu }, e)),
                    }),
                    (0, Ka.jsx)('div', {
                        className: (0, Ga.default)(ku, (a || !i) && Ru),
                        children: (0, Ka.jsx)(nu, {}),
                    }),
                ],
            })
        );
    }),
    Au = 'ClaimRewardsButton_18e5447e',
    Bu = 'ClaimRewardsButton_light_be50b778',
    Tu = 'ClaimRewardsButton_inner_7b993d26',
    Du = 'ClaimRewardsButton_inner__disabled_d2c4d3fe',
    Lu = 'ClaimRewardsButton_button_878a517b',
    Eu = 'ClaimRewardsButton_button__disabled_47a644a1',
    zu = 'ClaimRewardsButton_buttonBlink_32b5afcb',
    Mu = 'ClaimRewardsButton_buttonText_c765bc66',
    Hu = { from: { opacity: 0 }, to: { opacity: 0.6 }, delay: 500, config: { duration: 300 } },
    Wu = ({ isDisabled: e, onClick: a, children: s, className: t }) => {
        const r = A(Hu);
        return (0, Ka.jsx)(N, {
            isEnabled: e,
            body: R.strings.comp7_ext.claimRewards.rewardsUnavailable(),
            children: (0, Ka.jsxs)('div', {
                className: (0, Ga.default)(Au, t),
                children: [
                    !e && (0, Ka.jsx)(v.div, { className: Bu, style: r }),
                    (0, Ka.jsx)('div', {
                        className: (0, Ga.default)(Tu, e && Du),
                        children: (0, Ka.jsxs)(ne, {
                            type: m.ghost,
                            size: p.small,
                            disabled: e,
                            onClick: a,
                            mixClass: (0, Ga.default)(Lu, e && Eu),
                            children: [
                                !e && (0, Ka.jsx)('div', { className: zu }),
                                (0, Ka.jsx)('div', {
                                    className: Mu,
                                    children: s || R.strings.comp7_ext.claimRewards.button(),
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        });
    },
    Uu = {
        base: 'AnimatedReward_4c41ec42',
        claimRewardsButton: 'AnimatedReward_claimRewardsButton_ce13cc98',
        shine: 'AnimatedReward_shine_8034dda6',
        fadeIn: 'AnimatedReward_fadeIn_acd88dcf',
        fadeInThreeQuarters: 'AnimatedReward_fadeInThreeQuarters_acd88dcf',
        fadeInHalf: 'AnimatedReward_fadeInHalf_acd88dcf',
        fadeOut: 'AnimatedReward_fadeOut_acd88dcf',
        fadeInWithScale: 'AnimatedReward_fadeInWithScale_acd88dcf',
        slideUp: 'AnimatedReward_slideUp_acd88dcf',
        scale: 'AnimatedReward_scale_acd88dcf',
        raysAppearance: 'AnimatedReward_raysAppearance_acd88dcf',
        rotate: 'AnimatedReward_rotate_acd88dcf',
        'reverse-rotate': 'AnimatedReward_reverse-rotate_acd88dcf',
        glowAppearance: 'AnimatedReward_glowAppearance_acd88dcf',
        highlightAppearance: 'AnimatedReward_highlightAppearance_acd88dcf',
        blink: 'AnimatedReward_blink_acd88dcf',
        slideUpIn: 'AnimatedReward_slideUpIn_acd88dcf',
    },
    Vu = {
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 600,
        config: { duration: 300 },
        onStart: () => {
            ee.sound(R.sounds.bp_pick_up_award());
        },
    },
    Qu = ({ reward: e, onClick: a, isDisabled: s, className: t }) => {
        const r = A(Vu);
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(Uu.base, t),
            children: [
                (0, Ka.jsx)(v.div, { className: Uu.shine, style: r }),
                (0, Ka.jsx)('div', {
                    className: Uu.claimRewardsButton,
                    children: (0, Ka.jsx)(Wu, { isDisabled: s, onClick: a }),
                }),
                (0, Ka.jsx)(F, { ...e, className: Uu.reward }),
            ],
        });
    },
    $u = 'FinalRewards_9a8bf88c',
    qu = 'FinalRewards_wrapper_170e19ff',
    Ou = 'FinalRewards_reward_21094ad5',
    Fu = 'FinalRewards_reward__achieved_4f37d4ba',
    Yu = 'FinalRewards_check_e0f8cdc4',
    Gu = aa(({ rewards: e, className: a }) => {
        const { model: s, controls: t } = J_(),
            { choiceRewardState: r } = s.root.get(),
            { model: i } = cs(),
            { isDisabled: n } = i.claimRewardsModel.get();
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)($u, a),
            children: [
                c(e, (e, a) =>
                    (0, Ka.jsx)(
                        'div',
                        {
                            className: qu,
                            children:
                                'deluxe_gift' === e.name && r === Pa.Active
                                    ? (0, Ka.jsx)(Qu, {
                                          reward: e,
                                          onClick: t.goToRewardsSelection,
                                          isDisabled: n,
                                          className: Ou,
                                      })
                                    : (0, Ka.jsx)(F, { ...e, className: (0, Ga.default)(Ou, r === Pa.Claimed && Fu) }),
                        },
                        a,
                    ),
                ),
                r === Pa.Claimed && (0, Ka.jsx)('div', { className: Yu }),
            ],
        });
    }),
    Xu = 'TokenPoint_b2c16526',
    Ku = 'TokenPoint_tokenValue_9a7b3b15',
    Ju = 'TokenPoint_tokenValue__passed_90164b9e',
    Zu = 'TokenPoint_serif_397af316',
    em = 'TokenPoint_rewards_b91973cd',
    am = 'TokenPoint_rewards__passed_f41dfa43',
    sm = 'TokenPoint_reward_a1f93701',
    tm = 'TokenPoint_check_df0c82c9',
    rm = W.Small,
    im = aa(({ tokenValue: e, rewards: a }) => {
        const { model: s } = J_(),
            { questsPassed: t } = s.root.get(),
            r = t > 0 && t >= e;
        return (0, Ka.jsxs)('div', {
            className: Xu,
            children: [
                (0, Ka.jsx)('div', { className: (0, Ga.default)(Ku, r && Ju), children: e }),
                (0, Ka.jsx)('div', { className: Zu }),
                a &&
                    (0, Ka.jsx)(_, {
                        data: Ma({ rewards: a, size: rm }),
                        size: rm,
                        classMix: (0, Ga.default)(em, r && am),
                        rewardItemClassMix: sm,
                    }),
                r && 0 !== e && a && (0, Ka.jsx)('div', { className: tm }),
            ],
        });
    }),
    nm = 'TokenProgress_6a6dc31c',
    om = 'TokenProgress_header_13e02096',
    dm = 'TokenProgress_subheader_aafe2591',
    cm = 'TokenProgress_content_3fb4abff',
    lm = 'TokenProgress_progress_3b86b1ea',
    _m = 'TokenProgress_progressBar_8b59b672',
    um = 'TokenProgress_points_984654f1',
    mm = 'TokenProgress_point_b0b7f70e',
    hm = 'TokenProgress_finalRewards_9e9ca6b',
    gm = (e, a) => ({ left: (100 / e) * a + '%' }),
    pm = W.Big,
    fm = aa(({ className: e }) => {
        const { model: a, controls: s } = J_(),
            { previousQuestsPassed: t, questsPassed: r } = a.root.get(),
            i = a.progressPoints.get(),
            n = Ze(i, i.length - 1),
            o = n?.count ?? 0,
            d = (0, Ya.useRef)(fe.Idle);
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(nm, e),
            children: [
                (0, Ka.jsx)(De, {
                    text: R.strings.comp7_ext.weeklyQuests.TokenProgress.header(),
                    binding: { passed: r, total: o },
                    classMix: om,
                }),
                (0, Ka.jsx)(Q, {
                    text: R.strings.comp7_ext.weeklyQuests.TokenProgress.subheader(5),
                    binding: { value: 5 },
                    classMix: dm,
                }),
                (0, Ka.jsxs)('div', {
                    className: cm,
                    children: [
                        (0, Ka.jsxs)('div', {
                            className: lm,
                            children: [
                                (0, Ka.jsx)('div', {
                                    className: _m,
                                    children: (0, Ka.jsx)(ca, {
                                        value: r,
                                        maxValue: o,
                                        deltaFrom: t,
                                        onChangeAnimationState: (e) => {
                                            ((d.current = e), e === fe.Shrink && s.animationStart());
                                        },
                                        onEndAnimation: s.animationEnd,
                                    }),
                                }),
                                (0, Ka.jsxs)('div', {
                                    className: um,
                                    children: [
                                        (0, Ka.jsx)('div', {
                                            className: mm,
                                            children: (0, Ka.jsx)(im, { tokenValue: 0 }),
                                        }),
                                        c(i, (e, a) =>
                                            (0, Ka.jsx)(
                                                'div',
                                                {
                                                    className: mm,
                                                    style: gm(o, e.count),
                                                    children: (0, Ka.jsx)(im, {
                                                        tokenValue: e.count,
                                                        rewards: a === i.length - 1 ? void 0 : e.rewards,
                                                    }),
                                                },
                                                a,
                                            ),
                                        ),
                                    ],
                                }),
                            ],
                        }),
                        n && (0, Ka.jsx)(Gu, { rewards: Ma({ rewards: n.rewards, size: pm }), className: hm }),
                    ],
                }),
            ],
        });
    }),
    xm = 'WeeklyQuestsPage_e1246e87',
    bm = 'WeeklyQuestsPage_content_968b1834',
    vm = 'WeeklyQuestsPage_questsList_d039410f',
    Sm = 'WeeklyQuestsPage_progression_ad79fcdc',
    wm = () => {
        const e = A(ka),
            a = E();
        return (0, Ka.jsxs)('div', {
            className: xm,
            'data-test-id': 'weekly-quests-page',
            children: [
                (0, Ka.jsx)(oa, {}),
                (0, Ka.jsxs)(v.div, {
                    className: bm,
                    style: e,
                    children: [
                        (0, Ka.jsx)(pe, { api: a, children: (0, Ka.jsx)(yu, { className: vm }) }),
                        (0, Ka.jsx)(fm, { className: Sm }),
                    ],
                }),
            ],
        });
    },
    jm = {
        inactiveProgression: { name: 'inactiveProgression', delay: 600 },
        firstStageSeasonPoints: { name: 'firstStageSeasonPoints', delay: 100 },
        firstStage: { name: 'firstStage', delay: 800 },
        secondStageSeasonPoints: { name: 'secondStageSeasonPoints', delay: 100 },
        secondStage: { name: 'secondStage', delay: 800 },
        thirdStageSeasonPoints: { name: 'thirdStageSeasonPoints', delay: 100 },
        thirdStage: { name: 'thirdStage', delay: 800 },
        fourthStageSeasonPoints: { name: 'fourthStageSeasonPoints', delay: 100 },
        fourthStage: { name: 'fourthStage', delay: 800 },
        fifthStageSeasonPoints: { name: 'fifthStageSeasonPoints', delay: 100 },
        fifthStage: { name: 'fifthStage', delay: 800 },
        sixthStageSeasonPoints: { name: 'sixthStageSeasonPoints', delay: 100 },
        sixthStage: { name: 'sixthStage', delay: 800 },
        showLegend: { name: 'showLegend', delay: 700 },
        transitionToRealData: { name: 'transitionToRealData', delay: 1e3 },
        realData: { name: 'realData', delay: 0 },
    },
    Nm = [jm.firstStage, jm.secondStage, jm.thirdStage, jm.fourthStage, jm.fifthStage, jm.sixthStage],
    Cm = Nm.map((e) => e.name),
    Pm = (0, Ya.createContext)(null),
    km = () => {
        const e = (0, Ya.useContext)(Pm);
        if (null === e)
            throw new Error(
                'useAnimationApi was called in component, which is not wrapped in YearlyRewardsPageAnimationContext',
            );
        return e;
    },
    Rm = Qa({
        steps: [
            jm.inactiveProgression,
            jm.firstStageSeasonPoints,
            jm.firstStage,
            jm.secondStageSeasonPoints,
            jm.secondStage,
            jm.thirdStageSeasonPoints,
            jm.thirdStage,
            jm.fourthStageSeasonPoints,
            jm.fourthStage,
            jm.fifthStageSeasonPoints,
            jm.fifthStage,
            jm.sixthStageSeasonPoints,
            jm.sixthStage,
            jm.showLegend,
            jm.transitionToRealData,
            jm.realData,
        ],
    }),
    Im = ({ children: e }) => {
        const a = Rm();
        return (0, Ka.jsx)(Pm.Provider, { value: a, children: e });
    },
    ym = (function (e) {
        return (
            (e.Guaranteed = 'guaranteed'),
            (e.Possible = 'possible'),
            (e.NotAvailable = 'notAvailable'),
            (e.Claimed = 'claimed'),
            e
        );
    })({}),
    Am = (function (e) {
        return (
            (e.Default = 'default'),
            (e.NotAccruedRewards = 'notAccruedRewards'),
            (e.RewardsSelectionAvailable = 'rewardsSelectionAvailable'),
            (e.RewardsReceived = 'rewardsReceived'),
            e
        );
    })({}),
    Bm = ['customizations', 'modernized_devices_t1_gift', 'modernized_devices_t2_gift', 'modernized_devices_t3_gift'],
    Tm = ['vehicles', 'premiumTank'],
    Dm = ['styleProgressToken'],
    Lm = ['modernized_devices_t1_gift', 'modernized_devices_t2_gift', 'modernized_devices_t3_gift', 'deluxe_gift'];
var Em = (e) => Bm.includes(e.name),
    zm = (e) => Tm.includes(e.name),
    Mm = (e) => Lm.includes(e.name);
function Hm(e) {
    return Y(
        e,
        (e, a, s) => (
            void 0 === e.vehicleIndex && zm(a)
                ? (e.vehicleIndex = s)
                : void 0 === e.style3dIndex && ((e) => Dm.includes(e.name))(a)
                  ? (e.style3dIndex = s)
                  : void 0 === e.claimableRewardIndex && Mm(a) && (e.claimableRewardIndex = s),
            e
        ),
        { vehicleIndex: void 0, style3dIndex: void 0, claimableRewardIndex: void 0 },
    );
}
function Wm({ reward: e, bannerState: a, cardIndex: s, maxAchievedCardIndex: t }) {
    return a === Am.RewardsSelectionAvailable && s <= t && Mm(e) && !e.claimed;
}
var [Um, Vm] = ve()(
        ({ observableModel: e }) => {
            const a = {
                    root: e.object(),
                    cards: e.array('cards'),
                    ranks: e.array('ranks'),
                    hoveredCardIndex: re.box(-1),
                },
                s = Re(
                    (e) => {
                        const s = Ze(a.cards.get(), e);
                        if (!s) throw new Error(`card with index ${e} was not found`);
                        const { rewardsState: t } = s;
                        return { rewardsState: t };
                    },
                    { equals: Xe.shallow },
                ),
                t = Re(
                    (e) => {
                        const s = Ze(a.cards.get(), e);
                        if (!s) throw new Error(`rewards: card with index ${e} was not found`);
                        return c(s.rewards, (e) => ({ ...e }));
                    },
                    { equals: o },
                ),
                i = Re(
                    (e) => {
                        const s = Ze(a.cards.get(), e);
                        if (!s) throw new Error(`card with index ${e} was not found`);
                        return c(s.seasonPoints, (e) => ({ ...e }));
                    },
                    { equals: o },
                ),
                n = Re(
                    (e, a) => {
                        const s = i(e);
                        if (!s) throw new Error(`season points array with card index ${e} was not found`);
                        const t = Ze(s, a);
                        if (!t) throw new Error(`season point with index ${a} in card with index ${e} was not found`);
                        return t;
                    },
                    { equals: o },
                ),
                d = Re((e) => [...Te(a.cards.get(), 0, e)].reduce((e, a) => (e += a.seasonPoints.length), 0)),
                l = Re((e) =>
                    Y(
                        a.cards.get(),
                        (a, s) =>
                            a +
                            (function (e, a) {
                                return He(e, ({ season: e }) => e === a).length;
                            })(s.seasonPoints, e),
                        0,
                    ),
                ),
                _ = Re(
                    () => {
                        const e = a.cards.get();
                        return {
                            possible: Se(e, (e) => e.rewardsState === ym.Possible),
                            guaranteed: Se(e, (e) => e.rewardsState === ym.Guaranteed),
                        };
                    },
                    { equals: Xe.shallow },
                ),
                u = Re(
                    () => {
                        const e = (function (e, a) {
                            for (let s = 0; s < e.length; s++) {
                                const t = O(e, s),
                                    r = ye(t.rewards, a);
                                if (r) return r;
                            }
                        })(a.cards.get(), zm);
                        if (!e) throw new Error('no one card consists vehicle, please change config with rewards');
                        return { ...e };
                    },
                    { equals: o },
                ),
                m = Re(
                    () => {
                        const e = ye(a.cards.get(), (e) => void 0 !== ye(e.rewards, zm));
                        if (!e) throw new Error('no one card consists vehicle, please change config with rewards');
                        return { ...e.vehicle };
                    },
                    { equals: o },
                ),
                h = Re(() => {
                    const { possible: e, guaranteed: s } = _();
                    return (function ({ maxIndex: e, possible: a, guaranteed: s }) {
                        return void 0 !== a ? ce(0, e, a + 1) : void 0 !== s ? ce(0, e, s + 1) : 0;
                    })({ maxIndex: a.cards.get().length - 1, possible: e, guaranteed: s });
                }),
                g = Re(() => {
                    const e = a.cards.get();
                    return Se(e, (e) => !r(e.seasonPoints, (e) => e.state === la.NotAchieved)) ?? -1;
                }),
                p = Re((e) => ye(t(e), Em), { equals: o }),
                f = Re((e) => {
                    const s = p(e);
                    if (!s) return !1;
                    const t = g(),
                        { bannerState: r } = a.root.get();
                    return Wm({ reward: s, bannerState: r, cardIndex: e, maxAchievedCardIndex: t });
                }),
                x = Re((e) => {
                    const s = Ze(a.ranks.get(), e);
                    if (!s) throw new Error(`rank with index ${e} was not found`);
                    return { ...s };
                }),
                b = Re((e) => Wt(c(x(e).divisions, (e) => ({ ...e })))),
                v = Re((e) => {
                    const a = t(e),
                        s = Ie(a, Em);
                    return void 0 === s ? a : He(a, (e, a) => a !== s);
                }),
                S = Re(
                    (e) => {
                        const s = v(e),
                            { vehicleIndex: t, style3dIndex: r, claimableRewardIndex: i } = Hm(s);
                        return {
                            hasStyle3d: void 0 !== r,
                            showClaimableReward:
                                void 0 !== i &&
                                Wm({
                                    reward: s[i],
                                    bannerState: a.root.get().bannerState,
                                    cardIndex: e,
                                    maxAchievedCardIndex: g(),
                                }),
                            showPlus: void 0 !== t && void 0 !== r && r - t === 1 && t % 2 == 0,
                            vehicleIndex: t,
                            style3dIndex: r,
                            claimableRewardIndex: i,
                        };
                    },
                    { equals: Xe.shallow },
                ),
                w = Re(() => {
                    const { bannerState: e } = a.root.get();
                    if (e !== Am.RewardsSelectionAvailable) return !1;
                    const s = g();
                    return r(a.cards.get(), (a, t) =>
                        r(a.rewards, (a) => Wm({ reward: a, bannerState: e, cardIndex: t, maxAchievedCardIndex: s })),
                    );
                }),
                j = Re(() => {
                    const e = a.root.get().currentRank,
                        s = Ie(a.ranks.get(), (a) => a.rank === e);
                    if (void 0 === s)
                        throw new Error(
                            'currentRankIndex computed is not applicable, there is no currentRank among ranks array',
                        );
                    return s;
                }),
                N = Re((e) => !a.root.get().isQualificationActive && e <= j());
            return {
                ...a,
                computes: {
                    card: s,
                    seasonPoint: n,
                    mainReward: p,
                    shouldShowAsClaimableMainReward: f,
                    hasAnyClaimableReward: w,
                    additionalRewards: v,
                    additionalRewardsConfig: S,
                    activeCardIndex: h,
                    maxAchievedCardIndex: g,
                    currentSeasonPointsCount: l,
                    seasonPointsTotalByIndex: d,
                    seasonPointsLength: Re((e) => i(e).length),
                    isActiveLegendItem: N,
                    vehicleReward: u,
                    vehicle: m,
                    rankItem: x,
                    divisions: b,
                },
            };
        },
        ({ externalModel: e, model: a }) => ({
            setHoveredCardIndex: Je((e) => a.hoveredCardIndex.set(e)),
            goToStylePreview: e.createCallback((e) => ({ cardIndex: e }), 'onGoToStylePreview'),
            goToVehiclePreview: e.createCallback((e, a) => ({ cd: e, cardIndex: a }), 'onGoToVehiclePreview'),
            goToRewardsSelection: e.createCallback((e, a) => ({ name: e, cardIndex: a }), 'onGoToRewardsSelection'),
            setIntroViewed: e.createCallbackNoArgs('onIntroViewed'),
        }),
    ),
    Qm = {
        base: 'Background_9694f850',
        overlay: 'Background_overlay_c757854a',
        base__hoveredCardIndex_0: 'Background_base__hoveredCardIndex_0_26effab7',
        overlay__firstStage: 'Background_overlay__firstStage_87b450f5',
        base__hoveredCardIndex_1: 'Background_base__hoveredCardIndex_1_26effab7',
        overlay__secondStage: 'Background_overlay__secondStage_f8c46b40',
        base__hoveredCardIndex_2: 'Background_base__hoveredCardIndex_2_26effab7',
        overlay__thirdStage: 'Background_overlay__thirdStage_79ef4d4a',
        base__hoveredCardIndex_3: 'Background_base__hoveredCardIndex_3_26effab7',
        overlay__fourthStage: 'Background_overlay__fourthStage_74091b76',
        base__hoveredCardIndex_4: 'Background_base__hoveredCardIndex_4_26effab7',
        overlay__fifthStage: 'Background_overlay__fifthStage_e37e33b',
        base__hoveredCardIndex_5: 'Background_base__hoveredCardIndex_5_26effab7',
        overlay__full: 'Background_overlay__full_1c3fbea6',
        'base__hoveredCardIndex_-1': 'Background_base__hoveredCardIndex_-1_26effab7',
        base__finishedYear: 'Background_base__finishedYear_26effab7',
        overlay__achieved: 'Background_overlay__achieved_3063fd89',
        base__withIntro: 'Background_base__withIntro_26effab7',
        fadeIn: 'Background_fadeIn_26effab7',
        fadeInThreeQuarters: 'Background_fadeInThreeQuarters_26effab7',
        fadeInHalf: 'Background_fadeInHalf_26effab7',
        fadeOut: 'Background_fadeOut_26effab7',
        fadeInWithScale: 'Background_fadeInWithScale_26effab7',
        slideUp: 'Background_slideUp_26effab7',
        scale: 'Background_scale_26effab7',
        raysAppearance: 'Background_raysAppearance_26effab7',
        rotate: 'Background_rotate_26effab7',
        'reverse-rotate': 'Background_reverse-rotate_26effab7',
        glowAppearance: 'Background_glowAppearance_26effab7',
        highlightAppearance: 'Background_highlightAppearance_26effab7',
        blink: 'Background_blink_26effab7',
        slideUpIn: 'Background_slideUpIn_26effab7',
    },
    $m = aa(({ className: e }) => {
        const { model: a } = Vm(),
            { model: s } = ta(),
            { withIntro: t } = a.root.get(),
            r = a.hoveredCardIndex.get(),
            i = s.year.state.get() === Id.Finished,
            n = a.computes.maxAchievedCardIndex(),
            o = a.cards.get().length - 1;
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(
                Qm.base,
                t && Qm.base__withIntro,
                Qm[`base__hoveredCardIndex_${r}`],
                i && Qm.base__finishedYear,
                e,
            ),
            children: [
                Fe(o, (e) =>
                    (0, Ka.jsx)(
                        'div',
                        {
                            className: (0, Ga.default)(
                                Qm.overlay,
                                Qm[`overlay__${Cm[e]}`],
                                i && e === n && Qm.overlay__achieved,
                            ),
                        },
                        e,
                    ),
                ),
                (0, Ka.jsx)('div', {
                    className: (0, Ga.default)(Qm.overlay, Qm.overlay__full, i && o === n && Qm.overlay__achieved),
                }),
            ],
        });
    }),
    qm = { from: { opacity: 0 }, to: { opacity: 1 }, delay: 600, config: { duration: 300 } },
    Om = ka.delay + ka.config.duration + 500,
    Fm = 'ActiveCardHighlight_dcbae8f8',
    Ym = 'ActiveCardHighlight_glow_bab58c6d',
    Gm = ({ isAnimated: e, visible: a, hasDelay: s, className: t }) => {
        const r = A({ from: { opacity: 0 }, to: { opacity: a ? 1 : 0 }, delay: s ? Om : 0, config: { duration: 300 } });
        return (0, Ka.jsx)(v.div, {
            className: (0, Ga.default)(Fm, t),
            style: r,
            children: (0, Ka.jsx)(ya, { className: Ym, animated: e }),
        });
    },
    Xm = 'AdditionalRewards_rewardItem_ee31ff1d',
    Km = 'AdditionalRewards_reward_3c5d7930',
    Jm = 'AdditionalRewards_reward__withPlus_309d3136',
    Zm = 'AdditionalRewards_reward__claimable_1ed2adc5',
    eh = 'AdditionalRewards_info_42163f85',
    ah = 'AdditionalRewards_rewardWithPlusImage_275019e0',
    sh = 'AdditionalRewards_claimableReward_c7f66cac',
    th = 'AdditionalRewards_shine_982567ad',
    rh = 'AdditionalRewards_claimRewardsButton_5eb60b4d',
    ih = ({ onClick: e, children: a }) => {
        const s = A(qm);
        return (0, Ka.jsxs)('div', {
            className: sh,
            children: [
                (0, Ka.jsx)(v.div, { className: th, style: s }),
                a,
                (0, Ka.jsx)('div', {
                    className: rh,
                    children: (0, Ka.jsx)(Wu, {
                        isDisabled: !1,
                        onClick: e,
                        children: R.strings.comp7_ext.yearlyRewards.claim(),
                    }),
                }),
            ],
        });
    },
    nh = W.Small,
    oh = Km,
    dh = { info: eh },
    ch = aa(({ cardIndex: e, visibleRewardsCount: a, className: s, rewardItemClassMix: t }) => {
        const { model: r, controls: i } = Vm(),
            n = r.computes.additionalRewards(e),
            o = r.computes.additionalRewardsConfig(e),
            d = (0, Ya.useCallback)((e, a) => () => i.goToRewardsSelection(e, a), [i]);
        return (0, Ka.jsx)(_, {
            data: (0, Ya.useMemo)(
                () =>
                    c(n, (s, t) => {
                        const r = o.showPlus && t === o.vehicleIndex && a >= 3,
                            i = o.showClaimableReward && t === o.claimableRewardIndex;
                        return {
                            ...Ha({ reward: s, size: nh, index: e }),
                            className: (0, Ga.default)(oh, i && Zm, r && Jm),
                            classNames: { ...dh, ...(r && { image: ah }) },
                            ...(i && { RewardWrapper: ih, rewardWrapperProps: { onClick: d(s.name, e) } }),
                        };
                    }),
                [n, o.claimableRewardIndex, o.showClaimableReward, o.showPlus, o.vehicleIndex, e, d, a],
            ),
            size: nh,
            count: jd(n.length, a),
            rewardItemClassMix: (0, Ga.default)(Xm, t),
            boxRewardTooltip: {
                contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                args: { fromIndex: a, index: e },
            },
            classMix: s,
            boxRewardClassName: oh,
            boxRewardClassNames: dh,
        });
    }),
    lh = aa(({ cardIndex: e, pointIndex: a, size: s, className: t, classNames: r }) => {
        const { model: i } = Vm(),
            n = i.computes.seasonPoint(e, a);
        return (0, Ka.jsx)(Be, {
            contentId: R.views.comp7.mono.lobby.tooltips.season_point_tooltip('resId'),
            args: { state: n.state },
            ignoreShowDelay: !0,
            children: (0, Ka.jsx)('div', {
                className: t,
                children: (0, Ka.jsx)(qa, { ...n, className: r?.point, size: s }),
            }),
        });
    }),
    _h = 'CardSeasonPoints_654279b7',
    uh = aa(({ cardIndex: e, size: a, className: s, classNames: t }) => {
        const { model: r } = Vm();
        return (0, Ka.jsx)('div', {
            className: (0, Ga.default)(_h, s),
            children: Fe(r.computes.seasonPointsLength(e), (s) =>
                (0, Ka.jsx)(
                    lh,
                    {
                        cardIndex: e,
                        pointIndex: s,
                        size: a,
                        className: t?.pointWrapper,
                        classNames: { point: t?.point },
                    },
                    s,
                ),
            ),
        });
    }),
    mh = [
        [{ season: _a.First }, { season: _a.First }, { season: _a.First }],
        [{ season: _a.First }, { season: _a.First }, { season: _a.First }],
        [{ season: _a.Second }, { season: _a.Second }, { season: _a.Second }],
        [{ season: _a.Second }, { season: _a.Second }, { season: _a.Second }],
        [{ season: _a.Third }, { season: _a.Third }, { season: _a.Third }],
        [{ season: _a.Third }, { season: _a.Third }, { season: _a.Third }],
    ],
    hh = {
        base: 'FakeCardSeasonPoints_8074e42b',
        notAchievedSeasonPoints: 'FakeCardSeasonPoints_notAchievedSeasonPoints_75ad61b2',
        achievedSeasonPoints: 'FakeCardSeasonPoints_achievedSeasonPoints_9a61143e',
        notAchievedPoint: 'FakeCardSeasonPoints_notAchievedPoint_fb7e8fdb',
        achievedPoint: 'FakeCardSeasonPoints_achievedPoint_8586e27d',
        notAchievedPoint__first: 'FakeCardSeasonPoints_notAchievedPoint__first_afd598a0',
        achievedPoint__first: 'FakeCardSeasonPoints_achievedPoint__first_a86c8a7',
        notAchievedPoint__second: 'FakeCardSeasonPoints_notAchievedPoint__second_afd598a0',
        achievedPoint__second: 'FakeCardSeasonPoints_achievedPoint__second_aea8db2d',
        notAchievedPoint__third: 'FakeCardSeasonPoints_notAchievedPoint__third_afd598a0',
        achievedPoint__third: 'FakeCardSeasonPoints_achievedPoint__third_5189fc14',
        base__firstStage: 'FakeCardSeasonPoints_base__firstStage_afd598a0',
        base__secondStage: 'FakeCardSeasonPoints_base__secondStage_afd598a0',
        base__thirdStage: 'FakeCardSeasonPoints_base__thirdStage_afd598a0',
        base__fourthStage: 'FakeCardSeasonPoints_base__fourthStage_afd598a0',
        base__fifthStage: 'FakeCardSeasonPoints_base__fifthStage_afd598a0',
        base__sixthStage: 'FakeCardSeasonPoints_base__sixthStage_afd598a0',
        fadeIn: 'FakeCardSeasonPoints_fadeIn_afd598a0',
        fadeInThreeQuarters: 'FakeCardSeasonPoints_fadeInThreeQuarters_afd598a0',
        fadeInHalf: 'FakeCardSeasonPoints_fadeInHalf_afd598a0',
        fadeOut: 'FakeCardSeasonPoints_fadeOut_afd598a0',
        fadeInWithScale: 'FakeCardSeasonPoints_fadeInWithScale_afd598a0',
        slideUp: 'FakeCardSeasonPoints_slideUp_afd598a0',
        scale: 'FakeCardSeasonPoints_scale_afd598a0',
        raysAppearance: 'FakeCardSeasonPoints_raysAppearance_afd598a0',
        rotate: 'FakeCardSeasonPoints_rotate_afd598a0',
        'reverse-rotate': 'FakeCardSeasonPoints_reverse-rotate_afd598a0',
        glowAppearance: 'FakeCardSeasonPoints_glowAppearance_afd598a0',
        highlightAppearance: 'FakeCardSeasonPoints_highlightAppearance_afd598a0',
        blink: 'FakeCardSeasonPoints_blink_afd598a0',
        slideUpIn: 'FakeCardSeasonPoints_slideUpIn_afd598a0',
    },
    gh = ['first', 'second', 'third'],
    ph = ({ cardIndex: e, size: a, className: s, classNames: t }) => {
        const r = mh[e];
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(hh.base, hh[`base__${Cm[e]}`], s),
            children: [
                (0, Ka.jsx)('div', {
                    className: hh.notAchievedSeasonPoints,
                    children: r.map(({ season: e }, s) =>
                        (0, Ka.jsx)(
                            'div',
                            {
                                className: t?.pointWrapper,
                                children: (0, Ka.jsx)(qa, {
                                    state: la.NotAchieved,
                                    season: e,
                                    size: a,
                                    className: (0, Ga.default)(
                                        hh.notAchievedPoint,
                                        hh[`notAchievedPoint__${gh[s]}`],
                                        t?.point,
                                    ),
                                }),
                            },
                            s,
                        ),
                    ),
                }),
                (0, Ka.jsx)('div', {
                    className: hh.achievedSeasonPoints,
                    children: r.map(({ season: e }, s) =>
                        (0, Ka.jsx)(
                            'div',
                            {
                                className: t?.pointWrapper,
                                children: (0, Ka.jsx)(qa, {
                                    state: la.Achieved,
                                    season: e,
                                    size: a,
                                    className: (0, Ga.default)(
                                        hh.achievedPoint,
                                        hh[`achievedPoint__${gh[s]}`],
                                        t?.point,
                                    ),
                                }),
                            },
                            s,
                        ),
                    ),
                }),
            ],
        });
    },
    fh = aa(({ cardIndex: e, size: a, className: s, classNames: t }) => {
        const { model: r } = Vm(),
            i = r.computes.mainReward(e);
        if (!i) throw new Error(`no mainReward in card with index ${e}`);
        return (0, Ka.jsx)(F, {
            ...Ha({ reward: i, size: a, index: e }),
            className: s,
            classNames: { rewardIcon: t?.icon, image: t?.iconContainer },
        });
    }),
    xh = {
        base: 'RewardsStatus_5602450b',
        description: 'RewardsStatus_description_386cd981',
        base__guaranteed: 'RewardsStatus_base__guaranteed_d2a6c8c5',
        base__claimed: 'RewardsStatus_base__claimed_d2a6c8c5',
        base__notAvailable: 'RewardsStatus_base__notAvailable_d2a6c8c5',
        base__possible: 'RewardsStatus_base__possible_d2a6c8c5',
        shadow: 'RewardsStatus_shadow_4c33671',
        statusIcon: 'RewardsStatus_statusIcon_9042d7f5',
        fadeIn: 'RewardsStatus_fadeIn_d2a6c8c5',
        fadeInThreeQuarters: 'RewardsStatus_fadeInThreeQuarters_d2a6c8c5',
        fadeInHalf: 'RewardsStatus_fadeInHalf_d2a6c8c5',
        fadeOut: 'RewardsStatus_fadeOut_d2a6c8c5',
        fadeInWithScale: 'RewardsStatus_fadeInWithScale_d2a6c8c5',
        slideUp: 'RewardsStatus_slideUp_d2a6c8c5',
        scale: 'RewardsStatus_scale_d2a6c8c5',
        raysAppearance: 'RewardsStatus_raysAppearance_d2a6c8c5',
        rotate: 'RewardsStatus_rotate_d2a6c8c5',
        'reverse-rotate': 'RewardsStatus_reverse-rotate_d2a6c8c5',
        glowAppearance: 'RewardsStatus_glowAppearance_d2a6c8c5',
        highlightAppearance: 'RewardsStatus_highlightAppearance_d2a6c8c5',
        blink: 'RewardsStatus_blink_d2a6c8c5',
        slideUpIn: 'RewardsStatus_slideUpIn_d2a6c8c5',
    },
    bh = ({ seasonPointsCount: e, rewardsState: a, className: s }) =>
        (0, Ka.jsx)('div', {
            className: (0, Ga.default)(xh.base, xh[`base__${a}`], s),
            children: (0, Ka.jsx)(N, {
                body: `${R.strings.comp7_ext.yearlyRewards.rewardsState.tooltip.$dyn(a)}`,
                isEnabled: a !== ym.Claimed,
                children: (0, Ka.jsxs)('div', {
                    className: xh.description,
                    children: [
                        a === ym.NotAvailable && (0, Ka.jsx)('div', { className: xh.shadow }),
                        (0, Ka.jsx)('div', { className: xh.statusIcon }),
                        H(`${R.strings.comp7_ext.yearlyRewards.rewardsState.$dyn(a)}`, { count: e }),
                    ],
                }),
            }),
        }),
    vh = aa(({ index: e, className: a, classNames: s }) => {
        const { mediaSize: t } = U(),
            { model: r, controls: i } = Vm(),
            n = r.computes.mainReward(e),
            o = r.computes.vehicle(),
            d = t >= x.Large;
        return n && 'customizations' === n.name
            ? (0, Ka.jsx)('div', {
                  className: a,
                  children: (0, Ka.jsx)(h, {
                      type: 'preview',
                      onClick: () => i.goToStylePreview(e),
                      isVisibleLabel: d,
                      className: s?.preview,
                      classNames: { label: s?.label },
                      children: d ? R.strings.comp7_ext.yearlyRewards.preview.style2d() : '',
                  }),
              })
            : r.computes.additionalRewardsConfig(e).hasStyle3d
              ? (0, Ka.jsx)('div', {
                    className: a,
                    children: (0, Ka.jsx)(h, {
                        type: 'preview',
                        onClick: () => i.goToVehiclePreview(o.vehicleCD, e),
                        isVisibleLabel: d,
                        className: s?.preview,
                        classNames: { label: s?.label },
                        children: d ? R.strings.comp7_ext.yearlyRewards.preview.style3d() : '',
                    }),
                })
              : null;
    }),
    Sh = {
        base: 'Column_9f3b4be3',
        claimRewardsButton: 'Column_claimRewardsButton_7e822ee3',
        shine: 'Column_shine_a51e3af6',
        mainRewardOuterContainer: 'Column_mainRewardOuterContainer_8787bb84',
        mainRewardContainer: 'Column_mainRewardContainer_4a2886f5',
        mainRewardContainer__big: 'Column_mainRewardContainer__big_bb0aa1a9',
        mainRewardContainer__s232x174: 'Column_mainRewardContainer__s232x174_6b603fc',
        mainRewardContainer__s296x222: 'Column_mainRewardContainer__s296x222_687719f7',
        mainReward: 'Column_mainReward_b23f0a5',
        mainReward__claimable: 'Column_mainReward__claimable_bf17223b',
        previewContainer: 'Column_previewContainer_9a69f18a',
        preview: 'Column_preview_562a11a7',
        previewLabel: 'Column_previewLabel_544eebfa',
        fakeSeasonPointsContainer: 'Column_fakeSeasonPointsContainer_8d07d355',
        seasonPointsContainer: 'Column_seasonPointsContainer_3a2aab76',
        base__withIntro: 'Column_base__withIntro_c28ef31',
        divider: 'Column_divider_d43a5ad6',
        divider__highlighted: 'Column_divider__highlighted_5a88a0c7',
        seasonPointWrapper: 'Column_seasonPointWrapper_ee4a132',
        rewardsStatus: 'Column_rewardsStatus_c2c0caa9',
        additionalRewards: 'Column_additionalRewards_7349e314',
        description: 'Column_description_445f7b8c',
        description__visible: 'Column_description__visible_ba690dcb',
        glowContainer: 'Column_glowContainer_bcdfc661',
        hoverArea: 'Column_hoverArea_c01adf84',
        hoverArea__last: 'Column_hoverArea__last_3f8bb0f2',
        fadeIn: 'Column_fadeIn_c28ef31',
        fadeInThreeQuarters: 'Column_fadeInThreeQuarters_c28ef31',
        fadeInHalf: 'Column_fadeInHalf_c28ef31',
        fadeOut: 'Column_fadeOut_c28ef31',
        fadeInWithScale: 'Column_fadeInWithScale_c28ef31',
        slideUp: 'Column_slideUp_c28ef31',
        scale: 'Column_scale_c28ef31',
        raysAppearance: 'Column_raysAppearance_c28ef31',
        rotate: 'Column_rotate_c28ef31',
        'reverse-rotate': 'Column_reverse-rotate_c28ef31',
        glowAppearance: 'Column_glowAppearance_c28ef31',
        highlightAppearance: 'Column_highlightAppearance_c28ef31',
        blink: 'Column_blink_c28ef31',
        slideUpIn: 'Column_slideUpIn_c28ef31',
    },
    wh = { preview: Sh.preview, label: Sh.previewLabel },
    jh = { pointWrapper: Sh.seasonPointWrapper },
    Nh = aa(
        ({
            index: e,
            mainRewardSize: a,
            seasonPointSize: s,
            visibleAdditionalRewardsCount: t,
            hasHighlightDelay: r,
            highlightVisible: i,
            className: n,
        }) => {
            const { mediaSize: o } = U(),
                { model: d, controls: c } = Vm(),
                { model: l } = ta(),
                _ = l.year.state.get(),
                { withIntro: u } = d.root.get(),
                { rewardsState: m } = d.computes.card(e),
                h = d.computes.mainReward(e),
                g = d.computes.seasonPointsTotalByIndex(e),
                p = d.computes.activeCardIndex(),
                f = d.computes.maxAchievedCardIndex(),
                b = d.hoveredCardIndex.get(),
                S = d.computes.shouldShowAsClaimableMainReward(e),
                w = A(qm),
                j = e === d.cards.get().length - 1,
                N = (({ index: e, hoveredCardIndex: a, maxAchievedCardIndex: s, withIntro: t, yearState: r }) =>
                    t || -1 !== a ? e > a : r === Id.Finished && e > s)({
                    withIntro: u,
                    hoveredCardIndex: b,
                    maxAchievedCardIndex: f,
                    index: e,
                    yearState: _,
                }),
                C = !u && _ !== Id.Finished && e === p;
            return (
                (0, Ya.useEffect)(() => {
                    e === b && ee.sound('comp_7_annual_reward_column');
                }, [b, e]),
                (0, Ka.jsxs)('div', {
                    className: (0, Ga.default)(Sh.base, N && 'grayscaledColumn', u && Sh.base__withIntro, n),
                    onMouseEnter: () => c.setHoveredCardIndex(e),
                    onMouseLeave: () => c.setHoveredCardIndex(-1),
                    children: [
                        (0, Ka.jsx)('div', { className: (0, Ga.default)(Sh.hoverArea, j && Sh.hoverArea__last) }),
                        (0, Ka.jsxs)('div', {
                            className: Sh.fakeSeasonPointsContainer,
                            children: [
                                (0, Ka.jsx)(ph, { cardIndex: e, size: s, classNames: jh }),
                                !j &&
                                    (0, Ka.jsx)(xl, {
                                        className: (0, Ga.default)(Sh.divider, e <= b && Sh.divider__highlighted),
                                    }),
                            ],
                        }),
                        (0, Ka.jsxs)('div', {
                            className: Sh.seasonPointsContainer,
                            children: [
                                (0, Ka.jsx)(uh, { cardIndex: e, size: s, classNames: jh }),
                                !j &&
                                    (0, Ka.jsx)(xl, {
                                        className: (0, Ga.default)(Sh.divider, e < p && Sh.divider__highlighted),
                                    }),
                            ],
                        }),
                        (0, Ka.jsxs)('div', {
                            className: Sh.mainRewardOuterContainer,
                            children: [
                                S && (0, Ka.jsx)(v.div, { className: Sh.shine, style: w }),
                                (0, Ka.jsx)('div', {
                                    className: (0, Ga.default)(Sh.mainRewardContainer, Sh[`mainRewardContainer__${a}`]),
                                    children:
                                        h &&
                                        (0, Ka.jsx)(fh, {
                                            cardIndex: e,
                                            size: a,
                                            className: (0, Ga.default)(Sh.mainReward, S && Sh.mainReward__claimable),
                                        }),
                                }),
                                h &&
                                    S &&
                                    (0, Ka.jsx)('div', {
                                        className: Sh.claimRewardsButton,
                                        children: (0, Ka.jsx)(Wu, {
                                            isDisabled: !1,
                                            onClick: () => c.goToRewardsSelection(h.name, e),
                                            children:
                                                o >= x.Medium
                                                    ? R.strings.comp7_ext.yearlyRewards.claimReward()
                                                    : R.strings.comp7_ext.yearlyRewards.claim(),
                                        }),
                                    }),
                            ],
                        }),
                        (0, Ka.jsx)(vh, { index: e, className: Sh.previewContainer, classNames: wh }),
                        (0, Ka.jsx)(bh, { seasonPointsCount: g, rewardsState: m, className: Sh.rewardsStatus }),
                        (0, Ka.jsx)(ch, { cardIndex: e, visibleRewardsCount: t, className: Sh.additionalRewards }),
                        (0, Ka.jsxs)('div', {
                            className: (0, Ga.default)(Sh.description, C && Sh.description__visible),
                            children: [
                                (0, Ka.jsx)(Gm, {
                                    hasDelay: r,
                                    visible: i,
                                    isAnimated: C,
                                    className: Sh.glowContainer,
                                }),
                                R.strings.comp7_ext.yearlyRewards.stageDescription.active(),
                            ],
                        }),
                    ],
                })
            );
        },
    ),
    Ch = 'Columns_e3ccf77b',
    Ph = aa(({ className: e }) => {
        const { mediaSize: a } = U(),
            { model: s } = Vm(),
            { model: t } = ta(),
            r = s.computes.hasAnyClaimableReward(),
            { withIntro: i } = s.root.get(),
            n = t.year.state.get(),
            o = km(),
            d = ((e) => (e >= x.Large ? W.S296x222 : e >= x.Small ? W.S232x174 : W.Big))(a),
            c = ((e) => (e >= x.Medium ? 5 : 2))(a),
            l = ((e) => (e >= x.ExtraLarge ? $a.x32 : $a.x24))(a),
            _ = A(ka),
            [u, m] = (({ api: e, withIntro: a, yearState: s }) => {
                const [t, r] = (0, Ya.useState)(!1),
                    i = qe(),
                    n = !a && i;
                return (
                    Ne(() => {
                        if (a && s !== Id.Finished) {
                            const a = () => {
                                r(!0);
                            };
                            return (
                                e.events.on('end', a),
                                () => {
                                    e.events.off('end', a);
                                }
                            );
                        }
                    }),
                    Ne(() => {
                        if (n && s !== Id.Finished)
                            return $e(() => {
                                r(!0);
                            }, Om);
                    }),
                    (0, Ya.useEffect)(() => {
                        t && ee.sound(R.sounds.comp_7_ranks_shine());
                    }, [t]),
                    [n, t]
                );
            })({ api: o, withIntro: i, yearState: n });
        return (
            (0, Ya.useEffect)(() => {
                if (r)
                    return $e(() => {
                        ee.sound(R.sounds.bp_pick_up_award());
                    }, 600);
            }, [r]),
            (0, Ka.jsx)(v.div, {
                className: (0, Ga.default)(Ch, e),
                style: _,
                children: Fe(s.cards.get().length, (e) =>
                    (0, Ka.jsx)(
                        Nh,
                        {
                            index: e,
                            mainRewardSize: d,
                            seasonPointSize: l,
                            hasHighlightDelay: u,
                            highlightVisible: m,
                            visibleAdditionalRewardsCount: c,
                        },
                        e,
                    ),
                ),
            })
        );
    }),
    kh = (e) => (e >= x.Large ? $a.x32 : $a.x24),
    Rh = {
        base: 'Legend_1d8cea3',
        inner: 'Legend_inner_355ec7bd',
        item: 'Legend_item_37466004',
        rankWrapper: 'Legend_rankWrapper_1f69ba8',
        highlight: 'Legend_highlight_83e351af',
        rankWrapper__withIntro: 'Legend_rankWrapper__withIntro_b3134d98',
        rankEmblem: 'Legend_rankEmblem_aadf1d28',
        rankEmblem__active: 'Legend_rankEmblem__active_de67b4ea',
        arrowContainer: 'Legend_arrowContainer_c8b04f43',
        arrow: 'Legend_arrow_e9fde619',
        pointsCount: 'Legend_pointsCount_17907e53',
        countContainer: 'Legend_countContainer_4e95cc4a',
        fakeCount: 'Legend_fakeCount_71dc7639',
        count: 'Legend_count_ad0d3035',
        base__withIntro: 'Legend_base__withIntro_b3134d98',
        seasonPoint: 'Legend_seasonPoint_b0261b6c',
        status: 'Legend_status_89b99fd5',
        rank: 'Legend_rank_752e311',
        verticalSeparator: 'Legend_verticalSeparator_64e3de8a',
        seasonPointIcon: 'Legend_seasonPointIcon_89b57fd8',
        fadeIn: 'Legend_fadeIn_b3134d98',
        fadeInThreeQuarters: 'Legend_fadeInThreeQuarters_b3134d98',
        fadeInHalf: 'Legend_fadeInHalf_b3134d98',
        fadeOut: 'Legend_fadeOut_b3134d98',
        fadeInWithScale: 'Legend_fadeInWithScale_b3134d98',
        slideUp: 'Legend_slideUp_b3134d98',
        scale: 'Legend_scale_b3134d98',
        raysAppearance: 'Legend_raysAppearance_b3134d98',
        rotate: 'Legend_rotate_b3134d98',
        'reverse-rotate': 'Legend_reverse-rotate_b3134d98',
        glowAppearance: 'Legend_glowAppearance_b3134d98',
        highlightAppearance: 'Legend_highlightAppearance_b3134d98',
        blink: 'Legend_blink_b3134d98',
        slideUpIn: 'Legend_slideUpIn_b3134d98',
    },
    Ih = aa(({ index: e, size: a, seasonName: s, className: t }) => {
        const { model: r } = Vm(),
            { currentRank: i, topPercentage: n, withIntro: o } = r.root.get(),
            d = r.computes.isActiveLegendItem(e),
            c = r.computes.rankItem(e);
        return (0, Ka.jsx)(
            'div',
            {
                className: t,
                children: (0, Ka.jsxs)('div', {
                    className: (0, Ga.default)(Rh.rankWrapper, o && Rh.rankWrapper__withIntro),
                    children: [
                        c.rank === i &&
                            (0, Ka.jsx)(f, {
                                className: Rh.highlight,
                                src: String(R.videos.comp7.godRaysNew_130x130()),
                                autoplay: !0,
                                loop: !0,
                            }),
                        (0, Ka.jsx)(xt, {
                            rank: c.rank,
                            from: c.from,
                            to: c.to,
                            topPercentage: n,
                            divisions: r.computes.divisions(e),
                            className: Rh.tooltipArea,
                            ignoreShowDelay: !0,
                            children: (0, Ka.jsx)(xa, {
                                seasonName: s,
                                rank: c.rank,
                                size: a,
                                className: (0, Ga.default)(Rh.rankEmblem, d && Rh.rankEmblem__active),
                            }),
                        }),
                    ],
                }),
            },
            e,
        );
    }),
    yh = 'possible',
    Ah = { state: yh, ignoreState: !0 },
    Bh = aa(({ className: e }) => {
        const { mediaSize: a } = U(),
            { model: s } = Vm(),
            { model: t } = ta(),
            { currentRank: r, isQualificationActive: i, withIntro: n } = s.root.get(),
            o = t.season.name.get(),
            d = t.year.state.get(),
            c = s.computes.currentSeasonPointsCount(t.season.name.get()),
            l = ((e) => {
                switch (e) {
                    case Id.Active:
                        return {
                            rank: R.strings.comp7_ext.yearlyRewards.rank.current(),
                            description: R.strings.comp7_ext.yearlyRewards.description.current(),
                        };
                    case Id.OffSeason:
                    case Id.Finished:
                        return {
                            rank: R.strings.comp7_ext.yearlyRewards.rank.achieved(),
                            description: R.strings.comp7_ext.yearlyRewards.description.achieved(),
                        };
                    default:
                        return (
                            console.error(`Provide text strings for current/achieved rank for YearState: ${e}`),
                            { rank: '', description: '' }
                        );
                }
            })(d),
            _ = ((e) => (e >= x.Large ? pa.x64 : pa.x48))(a);
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(Rh.base, n && Rh.base__withIntro, e),
            children: [
                (0, Ka.jsxs)('div', {
                    className: Rh.status,
                    children: [
                        !i &&
                            (0, Ka.jsxs)(Ka.Fragment, {
                                children: [
                                    (0, Ka.jsx)(Q, {
                                        text: l.rank,
                                        binding: {
                                            rank: (0, Ka.jsx)('div', {
                                                className: Rh.rank,
                                                children: H(R.strings.comp7_ext.quotesWrapper(), { name: Sa(r) }),
                                            }),
                                        },
                                        classMix: Rh.secondaryText,
                                    }),
                                    (0, Ka.jsx)('div', { className: Rh.verticalSeparator }),
                                ],
                            }),
                        (0, Ka.jsx)(Q, {
                            text: l.description,
                            binding: {
                                seasonPointIcon: (0, Ka.jsx)(Be, {
                                    contentId: R.views.comp7.mono.lobby.tooltips.season_point_tooltip('resId'),
                                    args: Ah,
                                    ignoreShowDelay: !0,
                                    children: (0, Ka.jsx)('div', {
                                        children: (0, Ka.jsx)(qa, {
                                            state: yh,
                                            season: o,
                                            size: $a.x16,
                                            className: Rh.seasonPointIcon,
                                        }),
                                    }),
                                }),
                            },
                        }),
                    ],
                }),
                (0, Ka.jsxs)('div', {
                    className: Rh.inner,
                    children: [
                        Fe(s.ranks.get().length, (e) =>
                            (0, Ka.jsx)(Ih, { index: e, size: _, seasonName: o, className: Rh.item }, e),
                        ),
                        (0, Ka.jsx)('div', {
                            className: Rh.arrowContainer,
                            children: (0, Ka.jsx)('div', { className: Rh.arrow }),
                        }),
                        (0, Ka.jsxs)('div', {
                            className: Rh.pointsCount,
                            children: [
                                (0, Ka.jsxs)('div', {
                                    className: Rh.countContainer,
                                    children: [
                                        (0, Ka.jsx)('div', { className: Rh.fakeCount, children: '0' }),
                                        (0, Ka.jsx)('div', { className: Rh.count, children: c }),
                                    ],
                                }),
                                (0, Ka.jsx)('div', {
                                    className: Rh.seasonPoint,
                                    children: (0, Ka.jsx)(Be, {
                                        contentId: R.views.comp7.mono.lobby.tooltips.season_point_tooltip('resId'),
                                        args: Ah,
                                        ignoreShowDelay: !0,
                                        children: (0, Ka.jsx)('div', {
                                            children: (0, Ka.jsx)(qa, { state: yh, season: o, size: kh(a) }),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    Th = 'StatusBanner_38fab065',
    Dh = 'StatusBanner_description_b2b220da',
    Lh = aa(({ className: e }) => {
        const { model: a } = Vm(),
            { bannerState: s } = a.root.get();
        return (0, Ka.jsx)('div', {
            className: (0, Ga.default)(Th, e),
            children: (0, Ka.jsx)('div', {
                className: Dh,
                children: String(R.strings.comp7_ext.yearlyRewards.banner.$dyn(s)),
            }),
        });
    }),
    Eh = {
        base: 'Vehicle_5c9b6999',
        vehicleBg: 'Vehicle_vehicleBg_b060cb9a',
        vehicleBg__inactive: 'Vehicle_vehicleBg__inactive_2034ba44',
        vehicleBg__2: 'Vehicle_vehicleBg__2_b33ff168',
        base__selectedIndex_2: 'Vehicle_base__selectedIndex_2_c03ad304',
        vehicleBg__3: 'Vehicle_vehicleBg__3_629a5bfe',
        base__selectedIndex_3: 'Vehicle_base__selectedIndex_3_c03ad304',
        vehicleBg__4: 'Vehicle_vehicleBg__4_7a979a04',
        base__selectedIndex_4: 'Vehicle_base__selectedIndex_4_c03ad304',
        vehicleBg__5: 'Vehicle_vehicleBg__5_2199df38',
        base__selectedIndex_5: 'Vehicle_base__selectedIndex_5_c03ad304',
        fadeIn: 'Vehicle_fadeIn_c03ad304',
        fadeInThreeQuarters: 'Vehicle_fadeInThreeQuarters_c03ad304',
        fadeInHalf: 'Vehicle_fadeInHalf_c03ad304',
        fadeOut: 'Vehicle_fadeOut_c03ad304',
        fadeInWithScale: 'Vehicle_fadeInWithScale_c03ad304',
        slideUp: 'Vehicle_slideUp_c03ad304',
        scale: 'Vehicle_scale_c03ad304',
        raysAppearance: 'Vehicle_raysAppearance_c03ad304',
        rotate: 'Vehicle_rotate_c03ad304',
        'reverse-rotate': 'Vehicle_reverse-rotate_c03ad304',
        glowAppearance: 'Vehicle_glowAppearance_c03ad304',
        highlightAppearance: 'Vehicle_highlightAppearance_c03ad304',
        blink: 'Vehicle_blink_c03ad304',
        slideUpIn: 'Vehicle_slideUpIn_c03ad304',
    },
    zh = [2, 3, 4, 5],
    Mh = aa(({ className: e }) => {
        const { model: a } = Vm(),
            { model: s } = ta(),
            { withIntro: t } = a.root.get(),
            r = a.hoveredCardIndex.get(),
            i = qe(),
            n = s.year.state.get() === Id.Finished ? a.computes.maxAchievedCardIndex() : a.computes.activeCardIndex(),
            o = !t && zh.includes(n) && -1 === r ? n : r;
        return (
            (0, Ya.useEffect)(() => {
                !i && zh.includes(o) && ee.sound('comp_7_annual_reward_tank_emergence_style');
            }, [i, o, t]),
            (0, Ka.jsxs)('div', {
                className: (0, Ga.default)(Eh.base, Eh[`base__selectedIndex_${o}`], e),
                children: [
                    (0, Ka.jsx)('div', { className: (0, Ga.default)(Eh.vehicleBg, Eh.vehicleBg__inactive) }),
                    zh.map((e) =>
                        (0, Ka.jsx)('div', { className: (0, Ga.default)(Eh.vehicleBg, Eh[`vehicleBg__${e}`]) }, e),
                    ),
                ],
            })
        );
    }),
    Hh = 'VehicleInfo_a6ed28fa',
    Wh = 'VehicleInfo_background_29dc08d2',
    Uh = 'VehicleInfo_content_536b4958',
    Vh = 'VehicleInfo_title_8c67bd16',
    Qh = (e) => (e >= x.Large ? La.x64 : La.x48),
    $h = aa(({ className: e, classNames: a }) => {
        const { mediaSize: s } = U(),
            { model: t } = Vm(),
            r = t.computes.vehicleReward(),
            i = t.computes.vehicle();
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(Hh, e),
            children: [
                (0, Ka.jsx)('div', { className: Wh }),
                (0, Ka.jsx)('div', {
                    className: Uh,
                    children: (0, Ka.jsx)(Q, {
                        text: R.strings.comp7_ext.yearlyRewards.mainYearlyRewardTitle(),
                        binding: {
                            vehicle: (0, Ka.jsx)(Ea, {
                                ...i,
                                size: Qh(s),
                                tooltipArgs: { tooltipId: r.tooltipId },
                                vehicleCD: i.vehicleCD,
                                role: i.roleKey,
                            }),
                        },
                        classMix: (0, Ga.default)(Vh, a?.title),
                    }),
                }),
            ],
        });
    }),
    qh = 'YearlyRewardsPage_b4fabdfc',
    Oh = 'YearlyRewardsPage_bgContainer_badeda9c',
    Fh = 'YearlyRewardsPage_error_481edb10',
    Yh = 'YearlyRewardsPage_contentWrapper_b226b3ee',
    Gh = 'YearlyRewardsPage_vehicle_7cb1ad5e',
    Xh = 'YearlyRewardsPage_columns_432bf53e',
    Kh = 'YearlyRewardsPage_schedule_8841c048',
    Jh = 'YearlyRewardsPage_legend_1c8fdbce',
    Zh = 'YearlyRewardsPage_status_9f92f1db',
    eg = 'YearlyRewardsPage_contentWrapper__withIntro_9c60e274',
    ag = 'YearlyRewardsPage_vehicleInfoContainer_7cb1ad5e',
    sg = 'YearlyRewardsPage_vehicleInfo_5a7993f3',
    tg = (e) => window.setTimeout(() => ee.sound(R.sounds.comp_7_annual_reward_rank_points()), e),
    rg = aa(() => {
        const { model: e, controls: a } = Vm(),
            { hasDataError: s, withIntro: t } = e.root.get(),
            r = A(ka),
            i = km();
        return (
            Ee(y.ESCAPE, () => i.skipAll(), t),
            Ne(() =>
                Me.move(([, e]) => {
                    'outside' !== e || t || a.setHoveredCardIndex(-1);
                }),
            ),
            (0, Ya.useEffect)(() => {
                i.rootRef.current && (i.rootRef.current.style.pointerEvents = t ? 'none' : 'auto');
            }, [i.rootRef, t]),
            (0, Ya.useEffect)(() => {
                if (!t) return;
                const e = [],
                    s = (s) => {
                        switch ((Nm.includes(s) && a.setHoveredCardIndex(Nm.findIndex((e) => e === s)), s)) {
                            case jm.firstStageSeasonPoints:
                            case jm.secondStageSeasonPoints:
                            case jm.thirdStageSeasonPoints:
                            case jm.fourthStageSeasonPoints:
                            case jm.fifthStageSeasonPoints:
                            case jm.sixthStageSeasonPoints:
                                e.push(tg(0), tg(200), tg(400));
                        }
                    };
                return (
                    i.events.on('change', s),
                    () => {
                        (i.events.off('change', s), e.forEach((e) => clearTimeout(e)));
                    }
                );
            }, [i.events, a, t]),
            (0, Ya.useEffect)(() => {
                if (!t) return;
                const e = () => {
                    (a.setHoveredCardIndex(-1), a.setIntroViewed());
                };
                return (
                    i.events.on('end', e),
                    () => {
                        i.events.off('end', e);
                    }
                );
            }, [i.events, i.rootRef, a, t]),
            (0, Ka.jsxs)('div', {
                className: qh,
                ref: i.rootRef,
                'data-test-id': 'yearly-rewards-page',
                children: [
                    (0, Ka.jsx)('div', { className: Oh, children: (0, Ka.jsx)($m, {}) }),
                    !s &&
                        (0, Ka.jsxs)(Ka.Fragment, {
                            children: [(0, Ka.jsx)(Mh, { className: Gh }), (0, Ka.jsx)(Ph, { className: Xh })],
                        }),
                    (0, Ka.jsx)(v.div, {
                        style: r,
                        className: (0, Ga.default)(Yh, t && eg),
                        children: s
                            ? (0, Ka.jsx)(Ns, { className: Fh })
                            : (0, Ka.jsxs)(Ka.Fragment, {
                                  children: [
                                      (0, Ka.jsx)('div', { className: Jh, children: (0, Ka.jsx)(Bh, {}) }),
                                      (0, Ka.jsx)('div', {
                                          className: ag,
                                          children: (0, Ka.jsx)($h, { className: sg }),
                                      }),
                                      (0, Ka.jsx)('div', { className: Zh, children: (0, Ka.jsx)(Lh, {}) }),
                                  ],
                              }),
                    }),
                    (0, Ka.jsx)(oa, { className: Kh }),
                ],
            })
        );
    }),
    ig = [Oa.JustStarted, Oa.Active, Oa.EndSoon],
    [ng, og] = ve()(
        ({ observableModel: e }) => {
            const a = { root: e.object(), seasonCards: e.array('seasonCards') },
                s = Re(
                    (e) => {
                        const s = Ze(a.seasonCards.get(), e);
                        if (!s) throw new Error(`Unexpected card index: ${e}`);
                        return { ...s };
                    },
                    { equals: o },
                ),
                t = Re((e) => s(e).season, { equals: o }),
                r = Re((e) => t(e).state),
                i = Re((e) => r(e) === Oa.NotStarted),
                n = Re((e) => ig.includes(r(e))),
                d = Re((e) => s(e).rank),
                c = Re((e) => s(e).hasRankReceived);
            return {
                ...a,
                computes: {
                    seasonCard: s,
                    seasonState: r,
                    seasonScheduleInfo: t,
                    isSeasonNotStarted: i,
                    isSeasonActive: n,
                    rank: d,
                    hasRankReceived: c,
                },
            };
        },
        ({ externalModel: e }) => ({
            goToSeasonStatistics: e.createCallback((e) => ({ seasonName: e }), 'onGoToSeasonStatistics'),
        }),
    ),
    dg = 'Background_37b3a646',
    cg = aa(({ index: e, className: a }) => {
        const { model: s } = og(),
            { name: t } = s.computes.seasonScheduleInfo(e),
            r = s.computes.hasRankReceived(e),
            i = R.images.comp7.gui.maps.icons.backgrounds.$dyn(t),
            n = r ? Na[s.computes.rank(e)] : 'qualification';
        return (0, Ka.jsx)('div', {
            className: (0, Ga.default)(dg, a),
            style: { backgroundImage: `url(${i.$dyn(n)})` },
        });
    }),
    lg = 'CardFooter_2e091ae9',
    _g = 'CardFooter_statisticsAvailability_cb0a44a8',
    ug = 'CardFooter_generationOfStatistics_47c91b6a',
    mg = 'CardFooter_icon_dca570a2',
    hg = aa(({ index: e, className: a }) => {
        const { model: s, controls: t } = og(),
            { hasStatisticsCalculated: r } = s.computes.seasonCard(e),
            { name: i } = s.computes.seasonScheduleInfo(e);
        return (0, Ka.jsx)('div', {
            className: (0, Ga.default)(lg, a),
            children: r
                ? (0, Ka.jsx)('div', {
                      onClick: () => t.goToSeasonStatistics(i),
                      children: (0, Ka.jsx)(Q, {
                          text: R.strings.comp7_ext.yearlyStatistics.goToSeasonStatistics(),
                          classMix: _g,
                          binding: { icon: (0, Ka.jsx)('div', { className: mg }) },
                      }),
                  })
                : (0, Ka.jsx)(Q, { text: R.strings.comp7_ext.yearlyStatistics.generationOfStatistics(), classMix: ug }),
        });
    }),
    gg = 'RankStatus_481bd341',
    pg = 'RankStatus_rank_b62f7c6',
    fg = 'RankStatus_division_36b5f382',
    xg = aa(({ index: e }) => {
        const { model: a } = og(),
            { hasRankReceived: s, rank: t, division: r } = a.computes.seasonCard(e);
        return (0, Ka.jsx)('div', {
            className: gg,
            children: s
                ? (0, Ka.jsxs)(Ka.Fragment, {
                      children: [
                          (0, Ka.jsx)(Q, {
                              classMix: pg,
                              text: R.strings.comp7_ext.yearlyStatistics.rankStatus.received(),
                              binding: { rank: Sa(t) },
                          }),
                          fa(t) && (0, Ka.jsx)(Q, { classMix: fg, text: va(r) }),
                      ],
                  })
                : (0, Ka.jsx)('div', {
                      className: pg,
                      children: R.strings.comp7_ext.yearlyStatistics.rankStatus.notReceived(),
                  }),
        });
    }),
    bg = 'SeasonStatus_276e8c3f',
    vg = aa(({ index: e }) => {
        const { model: a } = og(),
            { endTimestamp: s, startTimestamp: t, state: r, hasTentativeDates: i } = a.computes.seasonScheduleInfo(e);
        return (0, Ka.jsx)('div', {
            className: (0, Ga.default)(bg),
            children: (() => {
                switch (r) {
                    case Oa.NotStarted:
                        return (0, Ka.jsx)('div', {
                            children: i
                                ? String(R.strings.comp7_ext.yearlyStatistics.seasonDate.$num(e))
                                : (0, Ka.jsx)(Q, { text: R.strings.comp7_ext.season.range(), binding: na(t, s) }),
                        });
                    case Oa.JustStarted:
                    case Oa.EndSoon:
                    case Oa.Active:
                        return (0, Ka.jsx)('div', {
                            children: R.strings.comp7_ext.yearlyStatistics.seasonStatus.active(),
                        });
                    case Oa.End:
                        return (0, Ka.jsx)('div', {
                            children: R.strings.comp7_ext.yearlyStatistics.seasonStatus.end(),
                        });
                    default:
                        return (console.error(`Unreachable season state ${r}`), null);
                }
            })(),
        });
    }),
    Sg = 'Row_4b92d9b1',
    wg = 'Row_base__percentage_dff07ba',
    jg = 'Row_dashes_6f0ebb88',
    Ng = 'Row_value_4ffd89b6',
    Cg = ({ text: e, value: a, className: s, isPercentage: t = !1 }) =>
        (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(Sg, s, t && wg),
            children: [
                e,
                (0, Ka.jsx)('div', { className: jg }),
                (0, Ka.jsx)('div', { className: Ng, children: Ta({ value: a, isPercentage: t }) }),
            ],
        }),
    Pg = 'Table_4aebc05b',
    kg = 'Table_container_8ee049b2',
    Rg = 'Table_row_aa1a4564',
    Ig = aa(({ index: e }) => {
        const { model: a } = og(),
            {
                rating: s,
                singleBattlesCount: t,
                singleBattlesWinRate: r,
                superPlatoonBattlesCount: i,
                superPlatoonBattlesWinRate: n,
            } = a.computes.seasonCard(e);
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(Pg),
            children: [
                (0, Ka.jsx)('div', {
                    className: kg,
                    children: (0, Ka.jsx)(Cg, {
                        text: R.strings.comp7_ext.yearlyStatistics.rating(),
                        value: s,
                        className: Rg,
                    }),
                }),
                (0, Ka.jsxs)('div', {
                    className: kg,
                    children: [
                        (0, Ka.jsx)(Cg, {
                            text: R.strings.comp7_ext.yearlyStatistics.battles(),
                            value: t,
                            className: Rg,
                        }),
                        (0, Ka.jsx)(Cg, {
                            text: R.strings.comp7_ext.yearlyStatistics.wins(),
                            value: r,
                            isPercentage: !0,
                            className: Rg,
                        }),
                    ],
                }),
                (0, Ka.jsxs)('div', {
                    className: kg,
                    children: [
                        (0, Ka.jsx)(Cg, {
                            text: R.strings.comp7_ext.yearlyStatistics.superPlatoonBattles(),
                            value: i,
                            className: Rg,
                        }),
                        (0, Ka.jsx)(Cg, {
                            text: R.strings.comp7_ext.yearlyStatistics.wins(),
                            value: n,
                            isPercentage: !0,
                            className: Rg,
                        }),
                    ],
                }),
            ],
        });
    }),
    yg = (e) => {
        switch (!0) {
            case e >= x.ExtraLarge:
                return pa.x420;
            case e >= x.Large:
                return pa.x260;
            case e >= x.Medium:
                return pa.x200;
            default:
                return pa.x150;
        }
    },
    Ag = 'SeasonCard_fe6ac520',
    Bg = 'SeasonCard_name_f71e7711',
    Tg = 'SeasonCard_rankImage_4800d152',
    Dg = 'SeasonCard_cardFooter_596f8b9d',
    Lg = 'SeasonCard_divider_8113e306',
    Eg = 'SeasonCard_divider__left_455077e5',
    zg = 'SeasonCard_divider__right_a8eb920c',
    Mg = 'SeasonCard_laceBase_b36dec41',
    Hg = 'SeasonCard_laceContainer_2dd0d837',
    Wg = 'SeasonCard_laceContainer__active_af829f8a',
    Ug = aa(({ index: e, className: a }) => {
        const { model: s } = og(),
            { rank: t, division: r, hasRankReceived: i } = s.computes.seasonCard(e),
            { state: n, name: o } = s.computes.seasonScheduleInfo(e),
            d = s.computes.isSeasonActive(e),
            { mediaSize: c } = U();
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(Ag, a),
            children: [
                0 === e && (0, Ka.jsx)('div', { className: (0, Ga.default)(Lg, Eg) }),
                (0, Ka.jsx)('div', {
                    className: Bg,
                    children: String(R.strings.comp7_ext.yearlyStatistics.seasonName.$num(e)),
                }),
                (0, Ka.jsx)(vg, { index: e }),
                i
                    ? (0, Ka.jsx)(xa, { rank: t, size: yg(c), seasonName: o, division: r, className: Tg })
                    : (0, Ka.jsx)(Ca, { size: yg(c), seasonName: o, className: Tg }),
                (0, Ka.jsx)(xg, { index: e }),
                (0, Ka.jsx)(Ig, { index: e }),
                (0, Ka.jsx)(Fa, { className: Mg, classNames: { lace: (0, Ga.default)(Hg, d && Wg) } }),
                n === Oa.End && i && (0, Ka.jsx)(hg, { index: e, className: Dg }),
                (0, Ka.jsx)('div', { className: (0, Ga.default)(Lg, zg) }),
            ],
        });
    }),
    Vg = {
        base: 'YearlyStatisticsPage_61069c0',
        heading: 'YearlyStatisticsPage_heading_f13f5889',
        contentWrapper: 'YearlyStatisticsPage_contentWrapper_98d0619a',
        cardWrapper: 'YearlyStatisticsPage_cardWrapper_904992f5',
        cardWrapper__left: 'YearlyStatisticsPage_cardWrapper__left_3e387385',
        cardWrapper__right: 'YearlyStatisticsPage_cardWrapper__right_54b1ef77',
        bg__disabled: 'YearlyStatisticsPage_bg__disabled_10c00e50',
        seasonCard__disabled: 'YearlyStatisticsPage_seasonCard__disabled_71e253d2',
        seasonCard: 'YearlyStatisticsPage_seasonCard_46eb5e59',
        glow: 'YearlyStatisticsPage_glow_d4c45bad',
        fadeIn: 'YearlyStatisticsPage_fadeIn_10c00e50',
        fadeInThreeQuarters: 'YearlyStatisticsPage_fadeInThreeQuarters_10c00e50',
        fadeInHalf: 'YearlyStatisticsPage_fadeInHalf_10c00e50',
        fadeOut: 'YearlyStatisticsPage_fadeOut_10c00e50',
        fadeInWithScale: 'YearlyStatisticsPage_fadeInWithScale_10c00e50',
        slideUp: 'YearlyStatisticsPage_slideUp_10c00e50',
        scale: 'YearlyStatisticsPage_scale_10c00e50',
        raysAppearance: 'YearlyStatisticsPage_raysAppearance_10c00e50',
        rotate: 'YearlyStatisticsPage_rotate_10c00e50',
        'reverse-rotate': 'YearlyStatisticsPage_reverse-rotate_10c00e50',
        glowAppearance: 'YearlyStatisticsPage_glowAppearance_10c00e50',
        highlightAppearance: 'YearlyStatisticsPage_highlightAppearance_10c00e50',
        blink: 'YearlyStatisticsPage_blink_10c00e50',
        slideUpIn: 'YearlyStatisticsPage_slideUpIn_10c00e50',
    },
    Qg = aa(({ index: e, className: a }) => {
        const { model: s } = og(),
            t = s.computes.isSeasonNotStarted(e),
            r = s.seasonCards.get().length,
            i = s.computes.isSeasonActive(e);
        return (0, Ka.jsxs)(
            'div',
            {
                className: (0, Ga.default)(
                    Vg.cardWrapper,
                    0 === e && Vg.cardWrapper__left,
                    e === r - 1 && Vg.cardWrapper__right,
                ),
                children: [
                    (0, Ka.jsx)(cg, { index: e, className: (0, Ga.default)(Vg.bg, t && Vg.bg__disabled) }),
                    (0, Ka.jsxs)('div', {
                        className: (0, Ga.default)(Vg.seasonCard, t && Vg.seasonCard__disabled),
                        children: [i && (0, Ka.jsx)('div', { className: Vg.glow }), (0, Ka.jsx)(Ug, { index: e })],
                    }),
                ],
            },
            e,
        );
    }),
    $g = aa(() => {
        const { model: e } = og(),
            a = A(ka);
        return (0, Ka.jsxs)('div', {
            className: Vg.base,
            'data-test-id': 'yearly-statistics-page',
            children: [
                (0, Ka.jsx)('div', { className: Vg.heading, children: (0, Ka.jsx)(oa, {}) }),
                (0, Ka.jsx)(v.div, {
                    style: a,
                    className: Vg.contentWrapper,
                    children: Fe(e.seasonCards.get().length, (e) => (0, Ka.jsx)(Qg, { index: e }, e)),
                }),
            ],
        });
    }),
    qg = {
        [ua.Progression]: () => (0, Ka.jsx)(Vt, { options: os.PROGRESSION_PAGE, children: (0, Ka.jsx)(hd, {}) }),
        [ua.RankRewards]: () => (0, Ka.jsx)(gd, { options: os.RANK_REWARDS_PAGE, children: (0, Ka.jsx)(nc, {}) }),
        [ua.WeeklyQuests]: () => (0, Ka.jsx)(K_, { options: os.WEEKLY_QUESTS_PAGE, children: (0, Ka.jsx)(wm, {}) }),
        [ua.Leaderboard]: () => (0, Ka.jsx)(Cs, { options: os.LEADERBOARD_PAGE, children: (0, Ka.jsx)(Ht, {}) }),
        [ua.YearlyRewards]: () =>
            (0, Ka.jsx)(Um, {
                options: os.YEARLY_REWARDS_PAGE,
                children: (0, Ka.jsx)(Im, { children: (0, Ka.jsx)(rg, {}) }),
            }),
        [ua.Shop]: () => (0, Ka.jsx)(lc, { options: os.SHOP_PAGE, children: (0, Ka.jsx)(Y_, {}) }),
        [ua.YearlyStatistics]: () =>
            (0, Ka.jsx)(ng, { options: os.YEARLY_STATISTICS_PAGE, children: (0, Ka.jsx)($g, {}) }),
    },
    Og = ({ pageView: e }) => {
        const a = qg[e];
        return a ? (0, Ka.jsx)(a, {}) : (console.error('Unreachable code: ViewResolver'), null);
    },
    Fg = {
        base: 'App_94d2f69c',
        base__qualification: 'App_base__qualification_48f8ca46',
        base__progression: 'App_base__progression_3ad5bf0f',
        base__leaderboard: 'App_base__leaderboard_0',
        season__first: 'App_season__first_23917983',
        season__second: 'App_season__second_db10f9aa',
        season__third: 'App_season__third_86277c36',
        base__rankRewards: 'App_base__rankRewards_54c8537a',
        base__weeklyQuests: 'App_base__weeklyQuests_ac682f6d',
        base__shop: 'App_base__shop_f5d027a5',
        viewContainer: 'App_viewContainer_4a4552d3',
        sidebar: 'App_sidebar_5608b102',
        sidebar__medium: 'App_sidebar__medium_400586fe',
        choiceAward: 'App_choiceAward_8f89ec08',
        fadeIn: 'App_fadeIn_0',
        fadeInThreeQuarters: 'App_fadeInThreeQuarters_0',
        fadeInHalf: 'App_fadeInHalf_0',
        fadeOut: 'App_fadeOut_0',
        fadeInWithScale: 'App_fadeInWithScale_0',
        slideUp: 'App_slideUp_0',
        scale: 'App_scale_0',
        raysAppearance: 'App_raysAppearance_0',
        rotate: 'App_rotate_0',
        'reverse-rotate': 'App_reverse-rotate_0',
        glowAppearance: 'App_glowAppearance_0',
        highlightAppearance: 'App_highlightAppearance_0',
        blink: 'App_blink_0',
        slideUpIn: 'App_slideUpIn_0',
    },
    Yg = aa(() => {
        const { model: e, controls: a } = cs(),
            { model: s } = ta(),
            t = is(),
            { pageViewId: r } = e.root.get(),
            { isDisabled: i, rewardsCount: n } = e.claimRewardsModel.get(),
            { mediaSize: o } = U();
        Oe(a.close);
        const d = e.computes.isProgressionInQualification();
        return (0, Ka.jsxs)('div', {
            className: (0, Ga.default)(
                Fg.base,
                d && !rs() && Fg.base__qualification,
                !d && Fg[`base__${ns[r]}`],
                Fg[`season__${s.season.name.get()}`],
            ),
            children: [
                (0, Ka.jsx)('div', { className: Fg.viewContainer, children: (0, Ka.jsx)(Og, { pageView: r }) }),
                (0, Ka.jsx)(us, {
                    options: os.TABS,
                    children: (0, Ka.jsx)(xs, {
                        pageView: r,
                        className: (0, Ga.default)(Fg.sidebar, t.isMedium && Fg.sidebar__medium),
                    }),
                }),
                n > 0 &&
                    (0, Ka.jsx)('div', {
                        className: Fg.choiceAward,
                        children: (0, Ka.jsx)(ts, {
                            size: o >= x.Large ? ss.Big : ss.Small,
                            count: n,
                            disabled: i,
                            onClick: a.openRewardsSelectionScreen,
                        }),
                    }),
            ],
        });
    });
Pe(
    (0, Ka.jsx)(j, {
        children: (0, Ka.jsx)(ds, {
            children: (0, Ka.jsx)(ra, { options: os.SCHEDULE, children: (0, Ka.jsx)(Yg, {}) }),
        }),
    }),
    { fullScreen: !0 },
);
