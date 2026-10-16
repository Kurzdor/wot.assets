import { r as e } from './rolldown-runtime.js';
import {
    Bo as a,
    Co as t,
    Cs as s,
    Do as n,
    Dr as r,
    Er as i,
    Fa as o,
    Fr as c,
    Gi as l,
    H as d,
    Ht as m,
    Ir as _,
    Ji as u,
    K as h,
    Lr as p,
    Ma as g,
    Mr as f,
    Na as x,
    Oa as b,
    Pn as v,
    Pr as N,
    Qi as S,
    Rn as j,
    Rr as I,
    So as w,
    Ta as T,
    Ts as O,
    V as M,
    _i as y,
    fn as A,
    fo as C,
    gi as F,
    ho as D,
    is as L,
    jn as z,
    lr as k,
    po as B,
    rt as $,
    to as U,
    vo as W,
    wt as H,
    xs as P,
    zi as Q,
} from './lib.js';
import { a as E, t as G } from './vendor.js';
import { t as q } from './use_server_time_polling.js';
import { n as K, t as V } from './consts.js';
import { t as J } from './divine_glow.js';
import { t as X } from './animated_background.js';
var Y = e(s(), 1),
    Z = (function (e) {
        return ((e.OLS = 'ols'), (e.WCI = 'wci'), (e.NONE = ''), e);
    })({}),
    ee = (0, Y.createContext)({
        mainBgPath: '',
        blurBgPath: '',
        prizeFrameBgPath: '',
        topMatchGlowPath: '',
        winnerGlowPath: '',
        liveBgPath: { small: '', medium: '', large: '', extraLarge: '' },
        shopFramePath: { extraSmall: '', small: '', medium: '', large: '', extraLarge: '' },
        currencySign: '',
        currencyText: '',
        visitShopHeading: '',
        visitShopDescription: '',
        roundRobinText: '',
        tournamentName: '',
        winnerGlowComponent: null,
    }),
    ae = () => {
        const e = (0, Y.useContext)(ee);
        return (
            e || console.error('useDependencies hook was called with data from TournamentViewDIContext.Provider'),
            e
        );
    },
    te = (function (e) {
        return ((e.Schedule = 'schedule'), (e.Live = 'live'), (e.FinalResult = 'finalResult'), (e.Error = 'error'), e);
    })({}),
    se = (function (e) {
        return ((e.Loading = 'loading'), (e.Content = 'content'), e);
    })({}),
    ne = (e) => {
        console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
    };
function re(e = c.NONE, a = ne, t = !1, s = !1) {
    (0, Y.useEffect)(() => {
        if (e !== c.NONE)
            return (
                window.addEventListener('keydown', n, t),
                () => {
                    window.removeEventListener('keydown', n, t);
                }
            );
        function n(n) {
            if (n.keyCode === e) {
                if (!s && _.view.isEventHandled()) return;
                (_.view.setEventHandled(), a(n), t && n.stopPropagation());
            }
        }
    }, [a, e, t, s]);
}
var ie = (function (e) {
        return ((e.NotStarted = 'notStarted'), (e.Completed = 'completed'), (e.Live = 'live'), e);
    })({}),
    oe = (function (e) {
        return (
            (e.RoundRobin = 'roundRobin'),
            (e.UBSemifinals = 'UBSemifinals'),
            (e.UBFinals = 'UBFinals'),
            (e.LBRound1 = 'LBRound1'),
            (e.LBRound2 = 'LBRound2'),
            (e.LBSemifinals = 'LBSemifinals'),
            (e.LBFinals = 'LBFinals'),
            (e.GrandFinals = 'grandFinals'),
            e
        );
    })({});
function ce(e) {
    const a = {};
    for (const t in e)
        if (Object.prototype.hasOwnProperty.call(e, t)) {
            const s = e[t];
            a[t] = G(s);
        }
    return a;
}
var le = 'overview',
    de = 'schedule',
    [me, _e] = y()(
        ({ observableModel: e }) => {
            const t = {
                    ...e.primitives([
                        'overviewState',
                        'prizeFund',
                        'isRefreshing',
                        'streamingWithDrops',
                        'serverTimestamp',
                        'tokenStoreAvailabilityTimestamp',
                        'streamingWithoutDrops',
                        'pageState',
                        'lastPrizePoolUpdate',
                        'isDynamicPrizePool',
                    ]),
                    schedule: e.arrayClone('schedule'),
                    fundDistribution: e.arrayClone('fundDistribution'),
                    currentTab: T.box(le),
                    hasScheduleAnimated: T.box(!1),
                },
                s = F(
                    () => {
                        const e = t.overviewState.get() === te.Live ? 0 : 1,
                            a = 3 + e;
                        return B(t.schedule.get(), (e) => e.matchState === ie.NotStarted).slice(e, a);
                    },
                    { equals: a },
                ),
                r = F(
                    () => {
                        switch (t.overviewState.get()) {
                            case te.Live:
                                return D(t.schedule.get(), (e) => e.matchState === ie.Live);
                            case te.Schedule:
                                return D(t.schedule.get(), (e) => e.matchState === ie.NotStarted);
                            case te.FinalResult:
                                return w(t.schedule.get());
                            default:
                                return null;
                        }
                    },
                    { equals: a },
                ),
                i = F(
                    () => {
                        const e = new Map();
                        return (
                            W(t.schedule.get(), (a) => {
                                const t = new Date(1e3 * a.startOfMatchTimestamp);
                                t.setHours(0, 0, 0, 0);
                                const s = Math.floor(t.getTime() / 1e3);
                                (e.has(s) || e.set(s, []), n(e.get(s), a));
                            }),
                            Array.from(e.entries()).map(([e, a]) => ({
                                dayTimestamp: e,
                                matches: a,
                                isCompleted: C(a, ({ matchState: e }) => e === ie.Completed),
                            }))
                        );
                    },
                    { equals: a },
                );
            return { ...t, computes: { closestMatches: s, scheduleByDate: i, overviewMainMatch: r } };
        },
        ({ model: e, externalModel: a }) => ({
            watchStreamingOne: a.createCallbackNoArgs('onWatchStreamingOne'),
            watchStreamingTwo: a.createCallbackNoArgs('onWatchStreamingTwo'),
            goToShop: a.createCallbackNoArgs('onGoToShop'),
            refresh: a.createCallbackNoArgs('onRefresh'),
            goToTokenStore: a.createCallbackNoArgs('onGoToTokenStore'),
            pollServerTime: a.createCallbackNoArgs('pollServerTime'),
            close: a.createCallbackNoArgs('onClose'),
            ...ce({
                updateCurrentTabId: (a) => {
                    e.currentTab.set(a);
                },
                setScheduleAnimated: () => {
                    e.hasScheduleAnimated.set(!0);
                },
            }),
        }),
    ),
    ue = 'Error_c5522e93',
    he = 'Error_gears_15e3b263',
    pe = 'Error_comeBack_b7a2fb47',
    ge = 'Error_refreshIcon_7f41dcf9',
    fe = 'Error_refreshIcon__refreshing_412c83fa',
    xe = e(x(), 1),
    be = E(function () {
        const { model: e, controls: a } = _e(),
            t = e.isRefreshing.get(),
            { mediaSize: s } = g();
        return (0, xe.jsxs)('div', {
            className: ue,
            children: [
                (0, xe.jsx)('div', { className: he }),
                R.strings.comp7_ext.tournament.error(),
                (0, xe.jsx)('div', { className: pe, children: R.strings.comp7_ext.tournament.comeBack() }),
                (0, xe.jsxs)(I, {
                    theme: I.themes.secondary,
                    onClick: a.refresh,
                    size: s >= o.Large ? I.sizes.medium : I.sizes.small,
                    autoAlignContent: !1,
                    disabled: t,
                    children: [
                        (0, xe.jsx)('div', { className: P(ge, t && fe) }),
                        t ? R.strings.comp7_ext.tournament.refreshing() : R.strings.comp7_ext.tournament.refresh(),
                    ],
                }),
            ],
        });
    }),
    ve = 'Frame_centerBorderCommon_d2f72236',
    Ne = 'Frame_outerBorderCommon_23b37900',
    Se = 'Frame_innerBorderCommon_ffa760cd',
    je = () =>
        (0, xe.jsxs)(xe.Fragment, {
            children: [
                (0, xe.jsx)('div', { className: ve }),
                (0, xe.jsx)('div', { className: Ne }),
                (0, xe.jsx)('div', { className: Se }),
            ],
        }),
    Ie = {
        base: 'TeamLogo_7a8c421c',
        image: 'TeamLogo_image_f5af838f',
        base__x38: 'TeamLogo_base__x38_fa6e10c0',
        base__x48: 'TeamLogo_base__x48_fa6e10c0',
        base__x68: 'TeamLogo_base__x68_fa6e10c0',
        base__x86: 'TeamLogo_base__x86_fa6e10c0',
        base__x128: 'TeamLogo_base__x128_fa6e10c0',
        base__x192: 'TeamLogo_base__x192_fa6e10c0',
        base__x262: 'TeamLogo_base__x262_fa6e10c0',
        base__x366: 'TeamLogo_base__x366_fa6e10c0',
        base__x522: 'TeamLogo_base__x522_fa6e10c0',
        teamName: 'TeamLogo_teamName_89587bec',
        winner: 'TeamLogo_winner_4f446a77',
        fadeIn: 'TeamLogo_fadeIn_fa6e10c0',
        fadeInThreeQuarters: 'TeamLogo_fadeInThreeQuarters_fa6e10c0',
        fadeInHalf: 'TeamLogo_fadeInHalf_fa6e10c0',
        fadeOut: 'TeamLogo_fadeOut_fa6e10c0',
        fadeInWithScale: 'TeamLogo_fadeInWithScale_fa6e10c0',
        slideUp: 'TeamLogo_slideUp_fa6e10c0',
        scale: 'TeamLogo_scale_fa6e10c0',
        raysAppearance: 'TeamLogo_raysAppearance_fa6e10c0',
        rotate: 'TeamLogo_rotate_fa6e10c0',
        'reverse-rotate': 'TeamLogo_reverse-rotate_fa6e10c0',
        glowAppearance: 'TeamLogo_glowAppearance_fa6e10c0',
        highlightAppearance: 'TeamLogo_highlightAppearance_fa6e10c0',
        blink: 'TeamLogo_blink_fa6e10c0',
        slideUpIn: 'TeamLogo_slideUpIn_fa6e10c0',
    },
    we = (function (e) {
        return (
            (e.x28 = 'x28'),
            (e.x38 = 'x38'),
            (e.x48 = 'x48'),
            (e.x68 = 'x68'),
            (e.x86 = 'x86'),
            (e.x128 = 'x128'),
            (e.x192 = 'x192'),
            (e.x262 = 'x262'),
            (e.x366 = 'x366'),
            (e.x522 = 'x522'),
            e
        );
    })({}),
    Te = ({
        teamName: e = '',
        logos: a,
        size: t = 'x38',
        showIsWinner: s = !1,
        showTeamName: n = !0,
        className: r,
        classNames: i,
    }) => {
        const { tournamentName: o } = ae(),
            c = ((e, a, t) => {
                const s = R.images.comp7.gui.maps.icons.tournaments.$dyn(t);
                switch (a) {
                    case 'x28':
                    case 'x38':
                    case 'x48':
                        return e.x48 || s.$dyn('placeholder_x48');
                    case 'x68':
                    case 'x86':
                        return e.x86 || s.$dyn('placeholder_x86');
                    case 'x128':
                    case 'x192':
                    case 'x262':
                        return e.x260;
                    case 'x366':
                    case 'x522':
                        return e.x522;
                }
            })(a, t, o);
        return (0, xe.jsxs)('div', {
            className: P(Ie.base, Ie[`base__${t}`], r),
            children: [
                (0, xe.jsx)('div', { className: Ie.image, style: { backgroundImage: `url(${c})` } }),
                n &&
                    (0, xe.jsx)(f, {
                        text: e || R.strings.comp7_ext.tournament.teamPlaceholder(),
                        classMix: P(Ie.teamName, i?.teamName),
                    }),
                s && (0, xe.jsx)('div', { className: Ie.winner, children: R.strings.comp7_ext.tournament.winner() }),
            ],
        });
    },
    Oe = {
        base: 'FundDistribution_8ba2417b',
        heading: 'FundDistribution_heading_765686bb',
        team: 'FundDistribution_team_d242da75',
        team__position1: 'FundDistribution_team__position1_a51ae262',
        team__position2: 'FundDistribution_team__position2_42cf8fc2',
        team__position3: 'FundDistribution_team__position3_3267b599',
        place: 'FundDistribution_place_4e794bf',
        schedule: 'FundDistribution_schedule_4257e4d6',
        prize: 'FundDistribution_prize_725e894b',
        border: 'FundDistribution_border_46bc667',
        logo: 'FundDistribution_logo_5d5f7edd',
        teamName: 'FundDistribution_teamName_9f67286c',
        text: 'FundDistribution_text_de9a6323',
        gradientText: 'FundDistribution_gradientText_5a984c4d',
        fadeIn: 'FundDistribution_fadeIn_30dbd93f',
        fadeInThreeQuarters: 'FundDistribution_fadeInThreeQuarters_30dbd93f',
        fadeInHalf: 'FundDistribution_fadeInHalf_30dbd93f',
        fadeOut: 'FundDistribution_fadeOut_30dbd93f',
        fadeInWithScale: 'FundDistribution_fadeInWithScale_30dbd93f',
        slideUp: 'FundDistribution_slideUp_30dbd93f',
        scale: 'FundDistribution_scale_30dbd93f',
        raysAppearance: 'FundDistribution_raysAppearance_30dbd93f',
        rotate: 'FundDistribution_rotate_30dbd93f',
        'reverse-rotate': 'FundDistribution_reverse-rotate_30dbd93f',
        glowAppearance: 'FundDistribution_glowAppearance_30dbd93f',
        highlightAppearance: 'FundDistribution_highlightAppearance_30dbd93f',
        blink: 'FundDistribution_blink_30dbd93f',
        slideUpIn: 'FundDistribution_slideUpIn_30dbd93f',
    },
    Me = { teamName: Oe.teamName },
    ye = E(function () {
        const { model: e } = _e(),
            a = e.overviewState.get(),
            s = e.fundDistribution.get(),
            { currencyText: n } = ae(),
            { logoSize: r } = b(
                { logoSize: we.x28 },
                { medium: { logoSize: we.x28 }, large: { logoSize: we.x38 }, extraLarge: { logoSize: we.x48 } },
            );
        return (0, xe.jsxs)('div', {
            className: P(Oe.base, Oe[`base__${a}`]),
            children: [
                (0, xe.jsx)(je, {}),
                (0, xe.jsx)(f, { text: R.strings.comp7_ext.tournament.fundDistribution(), classMix: Oe.heading }),
                (0, xe.jsx)('div', {
                    className: Oe.schedule,
                    children: t(
                        s,
                        ({ teamName: e, logos: a, prize: t, sharedPositionFrom: s, sharedPositionTo: i }, o) => {
                            const c =
                                i > s
                                    ? p(R.strings.comp7_ext.tournament.placement(), { firstPlace: s, secondPlace: i })
                                    : s;
                            return (0, xe.jsxs)(
                                'div',
                                {
                                    className: P(Oe.team, Oe[`team__position${s}`]),
                                    children: [
                                        (0, xe.jsx)('div', { className: Oe.border }),
                                        (0, xe.jsxs)('div', {
                                            className: Oe.place,
                                            children: [
                                                (0, xe.jsx)('div', { className: Oe.text, children: c }),
                                                (0, xe.jsx)('div', { className: Oe.gradientText, children: c }),
                                            ],
                                        }),
                                        (0, xe.jsx)(Te, {
                                            teamName: e,
                                            logos: a,
                                            size: r,
                                            className: Oe.logo,
                                            classNames: Me,
                                        }),
                                        (0, xe.jsx)(f, { text: n, binding: { amount: t }, classMix: Oe.prize }),
                                    ],
                                },
                                o,
                            );
                        },
                    ),
                }),
            ],
        });
    }),
    Ae = {
        base: 'LiveMatchFooter_b8275269',
        base__overview: 'LiveMatchFooter_base__overview_cb95aa8',
        streamingIcon: 'LiveMatchFooter_streamingIcon_27192270',
        button: 'LiveMatchFooter_button_7bbffec4',
        buttonWrapper: 'LiveMatchFooter_buttonWrapper_c285389',
        streamingOne: 'LiveMatchFooter_streamingOne_85755d99',
        streamingOneContainer: 'LiveMatchFooter_streamingOneContainer_604e3447',
        box: 'LiveMatchFooter_box_acffdc1d',
        text: 'LiveMatchFooter_text_c54972e4',
        fadeIn: 'LiveMatchFooter_fadeIn_67aa606f',
        fadeInThreeQuarters: 'LiveMatchFooter_fadeInThreeQuarters_67aa606f',
        fadeInHalf: 'LiveMatchFooter_fadeInHalf_67aa606f',
        fadeOut: 'LiveMatchFooter_fadeOut_67aa606f',
        fadeInWithScale: 'LiveMatchFooter_fadeInWithScale_67aa606f',
        slideUp: 'LiveMatchFooter_slideUp_67aa606f',
        scale: 'LiveMatchFooter_scale_67aa606f',
        raysAppearance: 'LiveMatchFooter_raysAppearance_67aa606f',
        rotate: 'LiveMatchFooter_rotate_67aa606f',
        'reverse-rotate': 'LiveMatchFooter_reverse-rotate_67aa606f',
        glowAppearance: 'LiveMatchFooter_glowAppearance_67aa606f',
        highlightAppearance: 'LiveMatchFooter_highlightAppearance_67aa606f',
        blink: 'LiveMatchFooter_blink_67aa606f',
        slideUpIn: 'LiveMatchFooter_slideUpIn_67aa606f',
    },
    Ce = E(function ({ buttonSize: e = I.sizes.extraSmall, showSeparator: a = !1 }) {
        const { model: t, controls: s } = _e(),
            n = t.streamingWithDrops.get(),
            r = t.streamingWithoutDrops.get(),
            i = t.currentTab.get();
        return (0, xe.jsxs)('div', {
            className: P(Ae.base, Ae[`base__${i}`]),
            children: [
                (0, xe.jsxs)('div', {
                    className: Ae.streamingOneContainer,
                    children: [
                        (0, xe.jsx)('div', {
                            className: Ae.buttonWrapper,
                            children: (0, xe.jsxs)(I, {
                                onClick: s.watchStreamingOne,
                                size: e,
                                autoAlignContent: !1,
                                children: [
                                    (0, xe.jsx)('div', {
                                        className: Ae.streamingIcon,
                                        style: {
                                            backgroundImage: `url(${R.images.comp7.gui.maps.icons.tournaments.$dyn(`${n}`)})`,
                                        },
                                    }),
                                    `${R.strings.comp7_ext.tournament.$dyn(n)}`,
                                ],
                            }),
                        }),
                        (0, xe.jsxs)('div', {
                            className: Ae.streamingOne,
                            children: [
                                (0, xe.jsx)('div', {
                                    className: Ae.box,
                                    style: {
                                        backgroundImage: `url(${R.images.comp7.gui.maps.icons.tournaments.$dyn(`${n}_box`)})`,
                                    },
                                }),
                                (0, xe.jsx)(f, { text: `${R.strings.comp7_ext.tournament.dropsShort.$dyn(n)}` }),
                            ],
                        }),
                    ],
                }),
                a && (0, xe.jsx)('div', { className: Ae.text, children: R.strings.comp7_ext.tournament.separator() }),
                (0, xe.jsxs)(I, {
                    onClick: s.watchStreamingTwo,
                    theme: I.themes.secondary,
                    size: e,
                    autoAlignContent: !1,
                    className: P(!a && Ae.button),
                    children: [
                        (0, xe.jsx)('div', {
                            className: Ae.streamingIcon,
                            style: {
                                backgroundImage: `url(${R.images.comp7.gui.maps.icons.tournaments.$dyn(`${r}`)})`,
                            },
                        }),
                        `${R.strings.comp7_ext.tournament.$dyn(r)}`,
                    ],
                }),
            ],
        });
    }),
    Fe = 'Footer_drops_9f07e1ee',
    De = 'Footer_box_c9efab86',
    Le = 'Footer_finalResult_846f6844',
    ze = 'Footer_separator_85aaf997',
    ke = 'Footer_result_7805495d',
    Re = 'Footer_counter_f418ad46',
    Be = 'Footer_score_e2ed58a4',
    $e = 'Footer_score__winner_fce912eb',
    Ue = 'Footer_teamLogo_4d32a058',
    We = 'Footer_teamLogo__loser_df3967bf',
    He = E(function ({ team1: e, team2: a, bestOf: t }) {
        const { model: s } = _e(),
            n = s.overviewState.get(),
            r = s.streamingWithDrops.get(),
            i = e.score > a.score,
            { size: o } = b(
                { size: I.sizes.small },
                {
                    medium: { size: I.sizes.small },
                    large: { size: I.sizes.medium },
                    extraLarge: { size: I.sizes.large },
                },
            );
        switch (n) {
            case te.Schedule:
                return (0, xe.jsxs)('div', {
                    className: Fe,
                    children: [
                        (0, xe.jsx)('div', {
                            className: De,
                            style: {
                                backgroundImage: `url(${R.images.comp7.gui.maps.icons.tournaments.$dyn(`${r}_box`)})`,
                            },
                        }),
                        (0, xe.jsx)(f, { text: `${R.strings.comp7_ext.tournament.drops.$dyn(r)}` }),
                    ],
                });
            case te.Live:
                return (0, xe.jsx)(Ce, { buttonSize: o, showSeparator: !0 });
            case te.FinalResult:
                return (0, xe.jsxs)('div', {
                    className: Le,
                    children: [
                        (0, xe.jsx)(Te, {
                            logos: e.logos,
                            teamName: e.teamName,
                            size: we.x68,
                            className: P(Ue, !i && We),
                        }),
                        (0, xe.jsxs)('div', {
                            className: ke,
                            children: [
                                (0, xe.jsxs)('div', {
                                    className: Re,
                                    children: [
                                        (0, xe.jsx)('div', { className: P(Be, i && $e), children: e.score }),
                                        (0, xe.jsx)('div', { className: ze }),
                                        (0, xe.jsx)('div', { className: P(Be, !i && $e), children: a.score }),
                                    ],
                                }),
                                (0, xe.jsx)(f, {
                                    text: R.strings.comp7_ext.tournament.bestOf(),
                                    binding: { number: t },
                                    classMix: Be,
                                }),
                            ],
                        }),
                        (0, xe.jsx)(Te, {
                            logos: a.logos,
                            teamName: a.teamName,
                            size: we.x68,
                            className: P(Ue, i && We),
                        }),
                    ],
                });
            default:
                return null;
        }
    }),
    Pe = ({ phase: e, round: a, matchStage: t, className: s }) => {
        const { roundRobinText: n } = ae();
        return (0, xe.jsx)(f, {
            text: t === oe.RoundRobin ? n : `${R.strings.comp7_ext.tournament.$dyn(t)}`,
            binding: { phase: e, round: a },
            classMix: s,
        });
    },
    Qe = {
        base: 'Header_9d5dc26e',
        base__finalResult: 'Header_base__finalResult_b495a828',
        date: 'Header_date_87641df0',
        winner: 'Header_winner_904d1ca6',
        time: 'Header_time_8262ce62',
        live: 'Header_live_3a671f8e',
        fadeIn: 'Header_fadeIn_65f475ba',
        fadeInThreeQuarters: 'Header_fadeInThreeQuarters_65f475ba',
        fadeInHalf: 'Header_fadeInHalf_65f475ba',
        fadeOut: 'Header_fadeOut_65f475ba',
        fadeInWithScale: 'Header_fadeInWithScale_65f475ba',
        slideUp: 'Header_slideUp_65f475ba',
        scale: 'Header_scale_65f475ba',
        raysAppearance: 'Header_raysAppearance_65f475ba',
        rotate: 'Header_rotate_65f475ba',
        'reverse-rotate': 'Header_reverse-rotate_65f475ba',
        glowAppearance: 'Header_glowAppearance_65f475ba',
        highlightAppearance: 'Header_highlightAppearance_65f475ba',
        blink: 'Header_blink_65f475ba',
        slideUpIn: 'Header_slideUpIn_65f475ba',
    },
    Ee = function ({
        team1: e,
        team2: a,
        phase: t,
        round: s,
        startOfMatchTimestamp: n,
        matchStage: r,
        overviewState: i,
        className: o,
    }) {
        const c = e.score > a.score;
        switch (i) {
            case te.Schedule:
                return (0, xe.jsxs)('div', {
                    className: P(Qe.base, o),
                    children: [
                        (0, xe.jsx)(Pe, { matchStage: r, phase: t, round: s, className: Qe.round }),
                        (0, xe.jsxs)('div', {
                            className: Qe.date,
                            children: [
                                (0, xe.jsx)(N, { datetime: n, format: O.DayMonthAbbreviated }),
                                (0, xe.jsx)('div', {
                                    className: Qe.time,
                                    children: (0, xe.jsx)(N, { datetime: n, format: O.ShortTime }),
                                }),
                            ],
                        }),
                    ],
                });
            case te.Live:
                return (0, xe.jsxs)('div', {
                    className: P(Qe.base, o),
                    children: [
                        (0, xe.jsx)(Pe, { matchStage: r, phase: t, round: s, className: Qe.round }),
                        (0, xe.jsx)('div', { className: Qe.live }),
                    ],
                });
            case te.FinalResult:
                return (0, xe.jsxs)('div', {
                    className: P(Qe.base, Qe.base__finalResult, o),
                    children: [
                        (0, xe.jsx)(f, { text: R.strings.comp7_ext.tournament.finalResult(), classMix: Qe.round }),
                        (0, xe.jsx)('div', { className: Qe.winner, children: c ? e.teamName : a.teamName }),
                    ],
                });
            default:
                return null;
        }
    },
    Ge = {
        base: 'Opponents_d0bb1f11',
        winner: 'Opponents_winner_ed3cb552',
        image: 'Opponents_image_b1ec304f',
        textWrapper: 'Opponents_textWrapper_605a8ddd',
        bestOf: 'Opponents_bestOf_711dae3e',
        teamName: 'Opponents_teamName_85f0bdfe',
        fadeIn: 'Opponents_fadeIn_899ffc8c',
        fadeInThreeQuarters: 'Opponents_fadeInThreeQuarters_899ffc8c',
        fadeInHalf: 'Opponents_fadeInHalf_899ffc8c',
        fadeOut: 'Opponents_fadeOut_899ffc8c',
        fadeInWithScale: 'Opponents_fadeInWithScale_899ffc8c',
        slideUp: 'Opponents_slideUp_899ffc8c',
        scale: 'Opponents_scale_899ffc8c',
        raysAppearance: 'Opponents_raysAppearance_899ffc8c',
        rotate: 'Opponents_rotate_899ffc8c',
        'reverse-rotate': 'Opponents_reverse-rotate_899ffc8c',
        glowAppearance: 'Opponents_glowAppearance_899ffc8c',
        highlightAppearance: 'Opponents_highlightAppearance_899ffc8c',
        blink: 'Opponents_blink_899ffc8c',
        slideUpIn: 'Opponents_slideUpIn_899ffc8c',
    },
    qe = E(function ({ team1: e, team2: a, bestOf: t }) {
        const { model: s } = _e(),
            { winnerGlowComponent: n } = ae(),
            r = s.overviewState.get(),
            [i, o] = b(
                { logoSize: [we.x192, we.x262] },
                {
                    medium: { logoSize: [we.x192, we.x366] },
                    large: { logoSize: [we.x366, we.x522] },
                    extraLarge: { logoSize: [we.x522, we.x522] },
                },
            ).logoSize;
        return (0, xe.jsx)('div', {
            className: P(Ge.base, Ge[`base__${r}`]),
            children:
                r === te.FinalResult
                    ? (0, xe.jsxs)('div', {
                          className: Ge.winner,
                          children: [
                              n,
                              (0, xe.jsx)(Te, {
                                  logos: e.score > a.score ? e.logos : a.logos,
                                  size: o,
                                  showTeamName: !1,
                              }),
                          ],
                      })
                    : (0, xe.jsxs)(xe.Fragment, {
                          children: [
                              (0, xe.jsx)(Te, { logos: e.logos, teamName: e.teamName, size: i }),
                              (0, xe.jsx)('div', {
                                  className: Ge.textWrapper,
                                  children: (0, xe.jsx)(f, {
                                      text: R.strings.comp7_ext.tournament.vsBestOf(),
                                      binding: { number: t },
                                      classMix: Ge.bestOf,
                                  }),
                              }),
                              (0, xe.jsx)(Te, { logos: a.logos, teamName: a.teamName, size: i }),
                          ],
                      }),
        });
    }),
    Ke = {
        base: 'MatchDetails_9e0f98f8',
        header: 'MatchDetails_header_89346ded',
        base__live: 'MatchDetails_base__live_bf32d099',
        content: 'MatchDetails_content_b78c981e',
        bg: 'MatchDetails_bg_cb157b5a',
        bg__ols: 'MatchDetails_bg__ols_47a304c',
        base__finalResult: 'MatchDetails_base__finalResult_bf32d099',
        fadeIn: 'MatchDetails_fadeIn_bf32d099',
        fadeInThreeQuarters: 'MatchDetails_fadeInThreeQuarters_bf32d099',
        fadeInHalf: 'MatchDetails_fadeInHalf_bf32d099',
        fadeOut: 'MatchDetails_fadeOut_bf32d099',
        fadeInWithScale: 'MatchDetails_fadeInWithScale_bf32d099',
        slideUp: 'MatchDetails_slideUp_bf32d099',
        scale: 'MatchDetails_scale_bf32d099',
        raysAppearance: 'MatchDetails_raysAppearance_bf32d099',
        rotate: 'MatchDetails_rotate_bf32d099',
        'reverse-rotate': 'MatchDetails_reverse-rotate_bf32d099',
        glowAppearance: 'MatchDetails_glowAppearance_bf32d099',
        highlightAppearance: 'MatchDetails_highlightAppearance_bf32d099',
        blink: 'MatchDetails_blink_bf32d099',
        slideUpIn: 'MatchDetails_slideUpIn_bf32d099',
    },
    Ve = E(function () {
        const { model: e } = _e(),
            a = e.overviewState.get(),
            t = e.computes.overviewMainMatch(),
            { tournamentName: s, mainBgPath: n } = ae();
        if (a === te.Error || !t) return (0, xe.jsx)(be, {});
        const { team1: r, team2: i, bestOf: o } = t;
        return (0, xe.jsxs)('div', {
            className: P(Ke.base, Ke[`base__${a}`]),
            children: [
                (0, xe.jsx)('div', { className: P(Ke.bg, Ke[`bg__${s}`]), style: { backgroundImage: `url('${n}')` } }),
                (0, xe.jsxs)('div', {
                    className: Ke.content,
                    children: [
                        (0, xe.jsx)(Ee, { ...t, overviewState: a, className: Ke.header }),
                        (0, xe.jsx)(qe, { team1: r, team2: i, bestOf: o }),
                        (0, xe.jsx)(He, { team1: r, team2: i, bestOf: o }),
                    ],
                }),
            ],
        });
    }),
    Je = 'NextMatch_761307a6',
    Xe = 'NextMatch_date_324e5a0a',
    Ye = 'NextMatch_time_73b66f84',
    Ze = 'NextMatch_teams_d8219813',
    ea = 'NextMatch_teamName_df96bd91',
    aa = 'NextMatch_textWrapper_6dd0aab3',
    ta = 'NextMatch_bestOf_412f98dd',
    sa = 'NextMatch_matchType_5bb91584',
    na = [oe.GrandFinals, oe.UBFinals, oe.LBFinals],
    ra = { teamName: ea },
    ia = function ({
        startOfMatchTimestamp: e,
        team1: a,
        team2: t,
        bestOf: s,
        matchStage: n,
        phase: r,
        round: i,
        className: o,
    }) {
        const { topMatchGlowPath: c } = ae(),
            { logoSize: l } = b(
                { logoSize: we.x48 },
                { medium: { logoSize: we.x48 }, large: { logoSize: we.x68 }, extraLarge: { logoSize: we.x86 } },
            );
        return (0, xe.jsxs)('div', {
            className: P(Je, o),
            style: { backgroundImage: na.includes(n) ? `url(${c})` : '' },
            children: [
                (0, xe.jsxs)('div', {
                    className: Xe,
                    children: [
                        (0, xe.jsx)(N, { datetime: e, format: O.DayMonthAbbreviated }),
                        (0, xe.jsx)('div', {
                            className: Ye,
                            children: (0, xe.jsx)(N, { datetime: e, format: O.ShortTime }),
                        }),
                    ],
                }),
                (0, xe.jsxs)('div', {
                    className: Ze,
                    children: [
                        (0, xe.jsx)(Te, { teamName: a.teamName, logos: a.logos, size: l, classNames: ra }),
                        (0, xe.jsx)('div', {
                            className: aa,
                            children: (0, xe.jsx)(k, {
                                text: R.strings.comp7_ext.tournament.vsBestOf(),
                                params: { number: s },
                                className: ta,
                                upgradeLegacy: !0,
                            }),
                        }),
                        (0, xe.jsx)(Te, { teamName: t.teamName, logos: t.logos, size: l, classNames: ra }),
                    ],
                }),
                (0, xe.jsx)('div', { children: (0, xe.jsx)(Pe, { matchStage: n, phase: r, round: i, className: sa }) }),
            ],
        });
    },
    oa = {
        base: 'Schedule_95e67fc5',
        heading: 'Schedule_heading_a10ef5e3',
        noMatches: 'Schedule_noMatches_369ed951',
        addition: 'Schedule_addition_2d0c6aac',
        comingSoon: 'Schedule_comingSoon_831fa506',
        matches: 'Schedule_matches_c2756eaa',
        schedule: 'Schedule_b85b482a',
        container: 'Schedule_container_6aaf031b',
        comeBack: 'Schedule_comeBack_9ea73a67',
        match: 'Schedule_match_79271803',
        fadeIn: 'Schedule_fadeIn_79271803',
        fadeInThreeQuarters: 'Schedule_fadeInThreeQuarters_79271803',
        fadeInHalf: 'Schedule_fadeInHalf_79271803',
        fadeOut: 'Schedule_fadeOut_79271803',
        fadeInWithScale: 'Schedule_fadeInWithScale_79271803',
        slideUp: 'Schedule_slideUp_79271803',
        scale: 'Schedule_scale_79271803',
        raysAppearance: 'Schedule_raysAppearance_79271803',
        rotate: 'Schedule_rotate_79271803',
        'reverse-rotate': 'Schedule_reverse-rotate_79271803',
        glowAppearance: 'Schedule_glowAppearance_79271803',
        highlightAppearance: 'Schedule_highlightAppearance_79271803',
        blink: 'Schedule_blink_79271803',
        slideUpIn: 'Schedule_slideUpIn_79271803',
    },
    ca = E(function ({ className: e }) {
        const { model: a, controls: t } = _e(),
            s = a.overviewState.get(),
            n = a.computes.closestMatches(),
            { mediaSize: r } = g();
        return (0, xe.jsxs)('div', {
            className: P(oa.base, oa[`base__${s}`], e),
            children: [
                (0, xe.jsx)(je, {}),
                s === te.Error
                    ? (0, xe.jsx)('div', {
                          className: oa.schedule,
                          children: (0, xe.jsxs)('div', {
                              className: oa.container,
                              children: [
                                  R.strings.comp7_ext.tournament.error(),
                                  (0, xe.jsx)('div', {
                                      className: oa.comeBack,
                                      children: R.strings.comp7_ext.tournament.comeBack(),
                                  }),
                              ],
                          }),
                      })
                    : (0, xe.jsxs)(xe.Fragment, {
                          children: [
                              (0, xe.jsxs)('div', {
                                  className: oa.heading,
                                  children: [
                                      (0, xe.jsx)(f, {
                                          text: R.strings.comp7_ext.tournament.comingSoon(),
                                          classMix: oa.comingSoon,
                                          binding: {
                                              addition:
                                                  n.length > 0 &&
                                                  (0, xe.jsx)(h, {
                                                      content: R.strings.comp7_ext.tournament.comingSoonAddition(),
                                                      className: oa.addition,
                                                  }),
                                          },
                                      }),
                                      (0, xe.jsx)(I, {
                                          theme: I.themes.secondary,
                                          onClick: () => t.updateCurrentTabId(de),
                                          size: r >= o.Large ? I.sizes.medium : I.sizes.small,
                                          autoAlignContent: !1,
                                          children: R.strings.comp7_ext.tournament.viewFull(),
                                      }),
                                  ],
                              }),
                              (0, xe.jsx)('div', {
                                  className: oa.schedule,
                                  children:
                                      n.length > 0
                                          ? (0, xe.jsx)('div', {
                                                className: oa.matches,
                                                children: U(3, (e) => {
                                                    const a = n[e];
                                                    return (
                                                        a &&
                                                        (0, Y.createElement)(ia, {
                                                            ...a,
                                                            className: P(e < 2 && oa.match),
                                                            key: e,
                                                        })
                                                    );
                                                }),
                                            })
                                          : (0, xe.jsx)('div', {
                                                className: oa.noMatches,
                                                children: R.strings.comp7_ext.tournament.noMatches(),
                                            }),
                              }),
                          ],
                      }),
            ],
        });
    }),
    la = 'ShopBlock_8f055a9e',
    da = 'ShopBlock_background_27d8781c',
    ma = 'ShopBlock_content_ec069a9d',
    _a = 'ShopBlock_description_418e92d1',
    ua = 'ShopBlock_buttonWrapper_a5da9ae8',
    ha = E(() => {
        const { controls: e } = _e(),
            { shopFramePath: a, visitShopHeading: t, visitShopDescription: s } = ae(),
            { mediaSize: n } = g(),
            { shopIcon: r } = b(
                { shopIcon: a.extraSmall },
                {
                    small: { shopIcon: a.small },
                    medium: { shopIcon: a.medium },
                    large: { shopIcon: a.large },
                    extraLarge: { shopIcon: a.extraLarge },
                },
            );
        return (0, xe.jsxs)('div', {
            className: la,
            children: [
                (0, xe.jsx)(je, {}),
                (0, xe.jsx)('div', { className: da, style: { backgroundImage: `url('${r}')` } }),
                (0, xe.jsxs)('div', {
                    className: ma,
                    children: [
                        (0, xe.jsxs)('div', {
                            children: [t, n >= o.Large && (0, xe.jsx)(f, { text: s, classMix: _a })],
                        }),
                        (0, xe.jsx)('div', {
                            className: ua,
                            children: (0, xe.jsx)(I, {
                                onClick: e.goToShop,
                                autoAlignContent: !1,
                                size: n >= o.Large ? I.sizes.medium : I.sizes.small,
                                children: R.strings.comp7_ext.tournament.toShop(),
                            }),
                        }),
                    ],
                }),
            ],
        });
    }),
    pa = {
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
            const a = Math.sqrt,
                t = Math.pow;
            return e < 0.5 ? (1 - a(1 - t(2 * e, 2))) / 2 : (a(1 - t(-2 * e + 2, 2)) + 1) / 2;
        },
        easeOutBack: (e) => 1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2),
        bezier: (e, a, t, s) => (n) =>
            (1 - n) * (1 - n) * (1 - n) * e + 3 * (1 - n) * (1 - n) * n * a + 3 * (1 - n) * n * n * t + n * n * n * s,
    },
    ga = 'TokenStore_1ec98ed6',
    fa = 'TokenStore_background_8bf67484',
    xa = 'TokenStore_content_3b0a9561',
    ba = 'TokenStore_unavailable_d6a2e56a',
    va = 'TokenStore_timerIcon_2d23b75b',
    Na = 'TokenStore_time_28b74cad',
    Sa = 'TokenStore_buttonWrapper_a751996c',
    ja = E(({ className: e }) => {
        const { model: a, controls: t } = _e(),
            { mediaSize: s } = g(),
            n = a.serverTimestamp.get(),
            c = a.tokenStoreAvailabilityTimestamp.get(),
            d = c - n,
            m = S(d > 0, {
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
                config: { duration: 300, easing: pa.easeOutCubic },
                exitBeforeEnter: !0,
            });
        return (
            q(n, c, t.pollServerTime),
            (0, xe.jsxs)('div', {
                className: P(ga, e),
                children: [
                    (0, xe.jsx)(je, {}),
                    (0, xe.jsx)('div', { className: fa }),
                    (0, xe.jsxs)('div', {
                        className: xa,
                        children: [
                            R.strings.comp7_ext.tournament.tokenStore.ols(),
                            m((e, a) =>
                                a
                                    ? (0, xe.jsxs)(l.div, {
                                          className: ba,
                                          style: e,
                                          children: [
                                              R.strings.comp7_ext.tournament.tokenStore.unavailable(),
                                              (0, xe.jsx)('div', { className: va }),
                                              (0, xe.jsx)(i, { duration: d, icon: r.None, classNames: { text: Na } }),
                                          ],
                                      })
                                    : (0, xe.jsx)('div', {
                                          className: Sa,
                                          children: (0, xe.jsx)(I, {
                                              onClick: t.goToTokenStore,
                                              autoAlignContent: !1,
                                              theme: I.themes.secondary,
                                              size: s >= o.Large ? I.sizes.medium : I.sizes.small,
                                              children: R.strings.comp7_ext.tournament.tokenStore.button.ols(),
                                          }),
                                      }),
                            ),
                        ],
                    }),
                ],
            })
        );
    }),
    Ia = {
        base: 'OverviewTabContent_b5815562',
        matchDetails: 'OverviewTabContent_matchDetails_a9aecb25',
        eventDetails: 'OverviewTabContent_eventDetails_5ff26e18',
        prizeFrame: 'OverviewTabContent_prizeFrame_d30a6b33',
        frameBg: 'OverviewTabContent_frameBg_59bad249',
        text: 'OverviewTabContent_text_fc865fa4',
        text__overflow: 'OverviewTabContent_text__overflow_bb3a9794',
        addition: 'OverviewTabContent_addition_bb457693',
        schedule: 'OverviewTabContent_schedule_dcf34407',
        container: 'OverviewTabContent_container_6c92dd42',
        tokenStore: 'OverviewTabContent_tokenStore_e4307878',
        prizeAddition: 'OverviewTabContent_prizeAddition_3059821f',
        tooltipIcon: 'OverviewTabContent_tooltipIcon_3a3c6d8a',
        fadeIn: 'OverviewTabContent_fadeIn_77492658',
        fadeInThreeQuarters: 'OverviewTabContent_fadeInThreeQuarters_77492658',
        fadeInHalf: 'OverviewTabContent_fadeInHalf_77492658',
        fadeOut: 'OverviewTabContent_fadeOut_77492658',
        fadeInWithScale: 'OverviewTabContent_fadeInWithScale_77492658',
        slideUp: 'OverviewTabContent_slideUp_77492658',
        scale: 'OverviewTabContent_scale_77492658',
        raysAppearance: 'OverviewTabContent_raysAppearance_77492658',
        rotate: 'OverviewTabContent_rotate_77492658',
        'reverse-rotate': 'OverviewTabContent_reverse-rotate_77492658',
        glowAppearance: 'OverviewTabContent_glowAppearance_77492658',
        highlightAppearance: 'OverviewTabContent_highlightAppearance_77492658',
        blink: 'OverviewTabContent_blink_77492658',
        slideUpIn: 'OverviewTabContent_slideUpIn_77492658',
    },
    wa = E(function () {
        const { model: e } = _e(),
            a = e.overviewState.get(),
            t = e.isDynamicPrizePool.get(),
            s = e.lastPrizePoolUpdate.get(),
            { prizeFrameBgPath: n, tournamentName: r, currencySign: i } = ae();
        return (0, xe.jsxs)('div', {
            className: P(Ia.base, Ia[`base__${a}`]),
            children: [
                (0, xe.jsx)('div', { className: Ia.matchDetails, children: (0, xe.jsx)(Ve, {}) }),
                (0, xe.jsxs)('div', {
                    className: Ia.eventDetails,
                    children: [
                        a !== te.FinalResult &&
                            (0, xe.jsxs)('div', {
                                className: Ia.prizeFrame,
                                children: [
                                    (0, xe.jsx)(je, {}),
                                    (0, xe.jsx)('div', {
                                        className: Ia.frameBg,
                                        style: { backgroundImage: `url('${n}')` },
                                    }),
                                    (0, xe.jsx)(f, {
                                        text: R.strings.comp7_ext.tournament.prize(),
                                        binding: {
                                            addition: (0, xe.jsxs)('div', {
                                                className: Ia.prizeAddition,
                                                children: [
                                                    (0, xe.jsx)(h, {
                                                        content: R.strings.comp7_ext.tournament.prizeAddition(),
                                                        className: Ia.addition,
                                                    }),
                                                    t &&
                                                        (0, xe.jsx)(m, {
                                                            body: $(
                                                                R.strings.comp7_ext.tournament.lastPrizePoolUpdate(),
                                                                { lastPrizePoolUpdate: L(s, O.ShortTime) },
                                                            ),
                                                            children: (0, xe.jsx)('div', { className: Ia.tooltipIcon }),
                                                        }),
                                                ],
                                            }),
                                        },
                                        classMix: P(Ia.text, Ia.text__overflow),
                                    }),
                                    a === te.Error
                                        ? (0, xe.jsx)('div', {
                                              className: Ia.text,
                                              children: R.strings.comp7_ext.dash(),
                                          })
                                        : (0, xe.jsx)(f, {
                                              text: i,
                                              binding: { amount: e.prizeFund.get() },
                                              classMix: Ia.text,
                                          }),
                                ],
                            }),
                        (0, xe.jsxs)('div', {
                            className: Ia.container,
                            children: [
                                (0, xe.jsx)(ha, {}),
                                r === Z.OLS && (0, xe.jsx)(ja, { className: Ia.tokenStore }),
                            ],
                        }),
                        a === te.FinalResult ? (0, xe.jsx)(ye, {}) : (0, xe.jsx)(ca, { className: Ia.schedule }),
                    ],
                }),
            ],
        });
    }),
    Ta = 'Counter_a16c7d25',
    Oa = 'Counter_5b6ef903',
    Ma = 'Counter_score_198f54c8',
    ya = 'Counter_score__winner_fdc5bffa',
    Aa = 'Counter_separator_b7ec0c4a',
    Ca = 'Counter_bestOf_4929e990',
    Fa = E(function ({ isCompleted: e, team1Score: a, team2Score: t, bestOf: s }) {
        const n = a > t;
        return (0, xe.jsxs)('div', {
            className: Ta,
            children: [
                e &&
                    (0, xe.jsxs)('div', {
                        className: Oa,
                        children: [
                            (0, xe.jsx)('div', { className: P(Ma, n && ya), children: a }),
                            (0, xe.jsx)('div', { className: Aa }),
                            (0, xe.jsx)('div', { className: P(Ma, !n && ya), children: t }),
                        ],
                    }),
                (0, xe.jsx)(f, {
                    text: e ? R.strings.comp7_ext.tournament.bestOf() : R.strings.comp7_ext.tournament.vsBestOf(),
                    binding: { number: s },
                    classMix: Ca,
                }),
            ],
        });
    }),
    Da = 'MatchByDate_50709007',
    La = 'MatchByDate_match_967a5c63',
    za = 'MatchByDate_match__topFinals_8944c4ce',
    ka = 'MatchByDate_match__live_33ff8dd0',
    Ra = 'MatchByDate_border_af9334a2',
    Ba = 'MatchByDate_logoWrapper_e52e6a64',
    $a = 'MatchByDate_liveImage_ec9696ea',
    Ua = 'MatchByDate_completed_6500368b',
    Wa = 'MatchByDate_matchType_c1acb88b',
    Ha = 'MatchByDate_teams_6593dcc5',
    Pa = 'MatchByDate_glow_7e4b4988',
    Qa = 'MatchByDate_teamName_233c3b64',
    Ea = 'MatchByDate_time_11f525f2',
    Ga = 'MatchByDate_loser_90c34627',
    qa = [oe.GrandFinals, oe.UBFinals, oe.LBFinals],
    Ka = { teamName: Qa },
    Va = (e, a) => {
        switch (e) {
            case ie.Completed:
                return (0, xe.jsx)('div', { className: Ua, children: R.strings.comp7_ext.tournament.completed() });
            case ie.Live:
                return (0, xe.jsx)('div', { className: $a });
            case ie.NotStarted:
                return (0, xe.jsx)('div', {
                    className: Ea,
                    children: (0, xe.jsx)(N, { datetime: a, format: O.ShortTime }),
                });
            default:
                return null;
        }
    },
    Ja = function ({ match: e }) {
        const {
                startOfMatchTimestamp: a,
                team1: t,
                team2: s,
                bestOf: n,
                matchState: r,
                matchStage: i,
                phase: o,
                round: c,
            } = e,
            l = r === ie.Completed,
            d = t.score > s.score,
            m = r === ie.Live,
            { liveBgPath: _, winnerGlowPath: u, topMatchGlowPath: h } = ae(),
            p = r === ie.NotStarted && qa.includes(i),
            { logoSize: g, liveImage: f } = b(
                { logoSize: m ? we.x68 : we.x48, liveImage: _.small },
                {
                    medium: { logoSize: m ? we.x68 : we.x48, liveImage: _.medium },
                    large: { logoSize: m ? we.x128 : we.x68, liveImage: _.large },
                    extraLarge: { logoSize: m ? we.x128 : we.x86, liveImage: _.extraLarge },
                },
            );
        return (0, xe.jsx)('div', {
            className: Da,
            children: (0, xe.jsxs)('div', {
                className: P(La, p && za, m && ka),
                style: { backgroundImage: (p && `url('${h}')`) || (m && `url('${f}')`) || '' },
                children: [
                    (0, xe.jsx)('div', { className: Ra }),
                    (0, xe.jsxs)('div', {
                        className: Ha,
                        children: [
                            Va(r, a),
                            (0, xe.jsxs)('div', {
                                className: Ba,
                                children: [
                                    d &&
                                        l &&
                                        (0, xe.jsx)('div', { className: Pa, style: { backgroundImage: `url(${u})` } }),
                                    (0, xe.jsx)(Te, {
                                        teamName: t.teamName,
                                        logos: t.logos,
                                        size: g,
                                        showIsWinner: d && l,
                                        className: P(!d && l && Ga),
                                        classNames: Ka,
                                    }),
                                ],
                            }),
                            (0, xe.jsx)(Fa, { bestOf: n, isCompleted: l, team1Score: t.score, team2Score: s.score }),
                            (0, xe.jsxs)('div', {
                                className: Ba,
                                children: [
                                    !d &&
                                        l &&
                                        (0, xe.jsx)('div', { className: Pa, style: { backgroundImage: `url(${u})` } }),
                                    (0, xe.jsx)(Te, {
                                        teamName: s.teamName,
                                        logos: s.logos,
                                        size: g,
                                        showIsWinner: !d && l,
                                        className: P(d && l && Ga),
                                        classNames: Ka,
                                    }),
                                ],
                            }),
                            (0, xe.jsx)(Pe, { matchStage: i, phase: o, round: c, className: Wa }),
                        ],
                    }),
                    m && (0, xe.jsx)(Ce, {}),
                ],
            }),
        });
    },
    Xa = 'DailySchedule_date_a677e43d',
    Ya = 'DailySchedule_arrow_79f2d923',
    Za = function ({
        isCompleted: e,
        dayTimestamp: a,
        matches: s,
        isLastDay: n,
        setNearestMatchRef: r,
        onAnimationEnd: i,
        immediate: o,
    }) {
        const [c, l] = (0, Y.useState)(!e);
        return (0, xe.jsxs)(A, {
            opened: c,
            children: [
                (0, xe.jsxs)(A.Summary, {
                    className: Xa,
                    onClick: () => l(!c),
                    children: [
                        (0, xe.jsx)(A.Arrow, { className: Ya }),
                        (0, xe.jsx)(N, { datetime: a, format: O.FullDate }),
                    ],
                }),
                (0, xe.jsx)(A.AnimatedDetails, {
                    animationSettings: { immediate: o, onRest: i },
                    opened: c,
                    children: t(s, (e, a) => {
                        const t = n && a === s.length - 1;
                        return (0, xe.jsx)(
                            'div',
                            {
                                ref: e.matchState !== ie.Completed || t ? r : null,
                                children: (0, xe.jsx)(Ja, { match: e }),
                            },
                            a,
                        );
                    }),
                }),
            ],
        });
    },
    et = 'ScheduleTabContent_6d083e2e',
    at = 'ScheduleTabContent_base__withMask_fbcb0d72',
    tt = E(function () {
        const { model: e, controls: a } = _e(),
            s = e.overviewState.get(),
            n = e.computes.scheduleByDate(),
            r = e.hasScheduleAnimated.get(),
            i = (0, Y.useRef)(null),
            [o, c] = (0, Y.useState)(s === te.FinalResult),
            d = u(V),
            m = Q(),
            [_, h] = (0, Y.useState)(!0),
            { api: p } = j(),
            g = (0, Y.useCallback)(() => {
                const e = p.getWrapperSize(),
                    a = p.contentRef,
                    t = p.animationScroll.scrollPosition.get(),
                    s = i.current;
                if (!(s && e && a.current)) return;
                const n =
                    (s
                        ? s.getBoundingClientRect().top - a.current.getBoundingClientRect().top + a.current.scrollTop
                        : 0) -
                    e / 2 +
                    s.getBoundingClientRect().height / 2;
                (0 === t && n < 0) || t === n || p.applyScroll(n, { immediate: r });
            }, [p, r]),
            f = (0, Y.useCallback)((e) => {
                e && !i.current && (i.current = e);
            }, []),
            x = (0, Y.useCallback)(() => {
                (p.recalculateContent(), o || (m.run(() => g()), a.setScheduleAnimated(), c(!0)));
            }, [p, a, m, o, g]);
        return (
            (0, Y.useEffect)(() => {
                const e = (e) => {
                    const a = e.value.scrollPosition;
                    if (void 0 !== a) {
                        const [e, t] = p.getBounds();
                        h(a < t - 20);
                    }
                };
                return (
                    p.events.on('change', e),
                    () => {
                        p.events.off('change', e);
                    }
                );
            }, [p]),
            (0, xe.jsx)(l.div, {
                className: P(et, _ && at),
                style: d,
                children: (0, xe.jsx)(v, {
                    children: t(n, ({ dayTimestamp: e, matches: a, isCompleted: t }, s) =>
                        (0, xe.jsx)(
                            Za,
                            {
                                isCompleted: t,
                                dayTimestamp: e,
                                matches: a,
                                isLastDay: s === n.length - 1,
                                setNearestMatchRef: f,
                                onAnimationEnd: x,
                                immediate: !o,
                            },
                            s,
                        ),
                    ),
                }),
            })
        );
    }),
    st = {
        base: 'App_b829de78',
        page: 'App_page_8b428d62',
        slider: 'App_slider_87749c8a',
        buttonWrapper: 'App_buttonWrapper_bc918676',
        button: 'App_button_b6edc495',
        content: 'App_content_135f5b39',
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
    nt = E(function () {
        const { model: e, controls: a } = _e(),
            t = e.currentTab.get(),
            s = e.overviewState.get(),
            n = e.pageState.get(),
            r = u(K),
            { blurBgPath: i } = ae(),
            o = b({ tabSize: d.small }, { large: { tabSize: d.medium } });
        var m;
        return (
            (m = a.close),
            re(c.ESCAPE, m),
            (0, xe.jsx)('div', {
                className: st.base,
                style: { backgroundImage: `url('${i}')` },
                children: (0, xe.jsx)(l.div, {
                    className: P(st.page, st[`base__${s}`]),
                    style: { ...r },
                    children:
                        n === se.Loading
                            ? (0, xe.jsx)(H, { message: R.strings.comp7_ext.waitingSpinner.message() })
                            : (0, xe.jsxs)(M, {
                                  active: t,
                                  theme: 'primary',
                                  size: o.tabSize,
                                  onActiveChange: a.updateCurrentTabId,
                                  children: [
                                      (0, xe.jsxs)(M.Switcher, {
                                          children: [
                                              (0, xe.jsx)(
                                                  M.Tab,
                                                  {
                                                      tabId: le,
                                                      className: st.tab,
                                                      children: `${R.strings.comp7_ext.tournament.tab.$dyn(le)}`,
                                                  },
                                                  `tab_${le}`,
                                              ),
                                              (0, xe.jsx)(
                                                  M.Tab,
                                                  {
                                                      tabId: de,
                                                      className: st.tab,
                                                      children: `${R.strings.comp7_ext.tournament.tab.$dyn(de)}`,
                                                  },
                                                  `tab_${de}`,
                                              ),
                                          ],
                                      }),
                                      (0, xe.jsx)(M.Content, {
                                          children: (e) => {
                                              switch (e) {
                                                  case le:
                                                      return (0, xe.jsx)(wa, {});
                                                  case de:
                                                      return s === te.Error
                                                          ? (0, xe.jsx)(be, {})
                                                          : (0, xe.jsx)(z, { children: (0, xe.jsx)(tt, {}) });
                                                  default:
                                                      return (console.error('Unreachable branch in tabs'), null);
                                              }
                                          },
                                      }),
                                  ],
                              }),
                }),
            })
        );
    }),
    rt = 'WinnerGlow_wciWinnerGlow_7c899fb',
    it = 'WinnerGlow_olsWinnerGlow_9d477dc8',
    ot = () => (0, xe.jsx)(X, { className: rt }),
    ct = () => {
        const e = u(V);
        return (0, xe.jsx)(l.div, { className: it, style: e, children: (0, xe.jsx)(J, {}) });
    };
export { Z as a, me as i, ot as n, ee as o, nt as r, ct as t };
