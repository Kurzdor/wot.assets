import { r as e } from '../../chunks/rolldown-runtime.js';
import {
    Co as a,
    Cs as s,
    K as t,
    Lr as r,
    Mr as i,
    Na as n,
    _i as c,
    at as d,
    ct as o,
    et as _,
    fi as l,
    gi as u,
    it as p,
    kr as f,
    ot as g,
    to as x,
    tt as w,
    xs as m,
    yo as b,
} from '../../chunks/lib.js';
import '../../chunks/_wg-global-styles.js';
import { a as h, i as v } from '../../chunks/vendor.js';
/* empty css                  */ var [j, A] = c()(({ observableModel: e }) => {
        const a = {
                root: e.object(),
                bonuses: e.array('bonuses'),
                questNumbersToRewards: e.array('questNumbersToRewards'),
            },
            s = u((e) => {
                const s = b(a.questNumbersToRewards.get(), e);
                if (!s) throw new Error(`qualification battle with index ${e} was not found`);
                return s;
            });
        return { ...a, computes: { questRewardsNumber: s } };
    }),
    W = (function (e) {
        return ((e.Active = 'active'), (e.Waiting = 'waiting'), (e.Reward = 'reward'), e);
    })({}),
    Q = (s(), e(v(), 1)),
    N = 'Divider_7a72bfaf',
    I = 'Divider_71fcbede',
    C = e(n(), 1),
    T = ({ className: e }) => (0, C.jsx)('div', { className: m(N, e), children: (0, C.jsx)('div', { className: I }) });
function M({ bonuses: e, size: s, ...t }) {
    const r = a(e, (e) => ({ size: s, name: e.name, image: p(e, s), value: e.value, valueType: d(e.name) }));
    return (0, C.jsx)(w, { ...t, data: r, size: s });
}
var k = {
        header: 'ActiveQuestCard_header_e228dbe8',
        description: 'ActiveQuestCard_description_bad0b037',
        description__dark: 'ActiveQuestCard_description__dark_e8f90930',
        divider: 'ActiveQuestCard_divider_bc8f698f',
        rewardsText: 'ActiveQuestCard_rewardsText_539c9121',
        counter: 'ActiveQuestCard_counter_e00c67cc',
        counter__current: 'ActiveQuestCard_counter__current_5abd8ace',
        fadeIn: 'ActiveQuestCard_fadeIn_cda07208',
        fadeInThreeQuarters: 'ActiveQuestCard_fadeInThreeQuarters_cda07208',
        fadeInHalf: 'ActiveQuestCard_fadeInHalf_cda07208',
        fadeOut: 'ActiveQuestCard_fadeOut_cda07208',
        fadeInWithScale: 'ActiveQuestCard_fadeInWithScale_cda07208',
        slideUp: 'ActiveQuestCard_slideUp_cda07208',
        scale: 'ActiveQuestCard_scale_cda07208',
        raysAppearance: 'ActiveQuestCard_raysAppearance_cda07208',
        rotate: 'ActiveQuestCard_rotate_cda07208',
        'reverse-rotate': 'ActiveQuestCard_reverse-rotate_cda07208',
        glowAppearance: 'ActiveQuestCard_glowAppearance_cda07208',
        highlightAppearance: 'ActiveQuestCard_highlightAppearance_cda07208',
        blink: 'ActiveQuestCard_blink_cda07208',
        slideUpIn: 'ActiveQuestCard_slideUpIn_cda07208',
    },
    y = R.strings.comp7_ext.weeklyQuestWidgetTooltip,
    q = h(() => {
        const { model: e } = A(),
            { description: a, questsPassed: s, totalQuests: t } = e.root.get(),
            r = e.bonuses.get(),
            n = e.questNumbersToRewards.get().length - 1;
        return (0, C.jsxs)('div', {
            className: k.base,
            children: [
                (0, C.jsx)(i, { text: y.header(), classMix: k.header }),
                (0, C.jsx)(i, { text: a, classMix: k.description }),
                (0, C.jsx)(T, { className: k.divider }),
                (0, C.jsx)('div', { className: k.rewardsText, children: y.rewards(r.length) }),
                (0, C.jsx)(M, { bonuses: r, size: g.Small, count: 3 }),
                (0, C.jsx)(T, { className: k.divider }),
                (0, C.jsx)(i, {
                    text: y.missionsCounter(),
                    classMix: (0, Q.default)(k.counter, k.counter__current),
                    binding: {
                        counter: (0, C.jsx)(i, {
                            text: y.counter(),
                            classMix: k.counter,
                            binding: {
                                current: (0, C.jsx)('span', { className: k.counter__current, children: s }),
                                total: t,
                            },
                        }),
                    },
                }),
                (0, C.jsx)(f, {
                    text: y.description(),
                    classMix: (0, Q.default)(k.description, k.description__dark),
                    binding: {
                        questsList: x(n, (a) => e.computes.questRewardsNumber(a)).join(
                            R.strings.comp7_ext.listSeparator(),
                        ),
                        lastQuest: e.computes.questRewardsNumber(n),
                    },
                }),
            ],
        });
    }),
    U = {
        header: 'Reward_header_fe1c875b',
        description: 'Reward_description_901b8d14',
        divider: 'Reward_divider_ea66945c',
        rewardsText: 'Reward_rewardsText_ef59fc7c',
        reward: 'Reward_e744e1e2',
        fadeIn: 'Reward_fadeIn_21f091ec',
        fadeInThreeQuarters: 'Reward_fadeInThreeQuarters_21f091ec',
        fadeInHalf: 'Reward_fadeInHalf_21f091ec',
        fadeOut: 'Reward_fadeOut_21f091ec',
        fadeInWithScale: 'Reward_fadeInWithScale_21f091ec',
        slideUp: 'Reward_slideUp_21f091ec',
        scale: 'Reward_scale_21f091ec',
        raysAppearance: 'Reward_raysAppearance_21f091ec',
        rotate: 'Reward_rotate_21f091ec',
        'reverse-rotate': 'Reward_reverse-rotate_21f091ec',
        glowAppearance: 'Reward_glowAppearance_21f091ec',
        highlightAppearance: 'Reward_highlightAppearance_21f091ec',
        blink: 'Reward_blink_21f091ec',
        slideUpIn: 'Reward_slideUpIn_21f091ec',
    },
    D = R.strings.comp7_ext.weeklyQuestWidgetTooltip,
    S = {
        header: 'Waiting_header_3d83166b',
        counterContainer: 'Waiting_counterContainer_440beb40',
        counter: 'Waiting_counter_da0557a8',
        counter__current: 'Waiting_counter__current_115914f0',
        timerBlock: 'Waiting_timerBlock_df0e9a3f',
        description: 'Waiting_description_cdde7d73',
        divider: 'Waiting_divider_f2e77895',
        newMissionsDescriptionWrapper: 'Waiting_newMissionsDescriptionWrapper_9c86e45a',
        newMissionsDescription: 'Waiting_newMissionsDescription_3b697f7',
        newMissionsTimer: 'Waiting_newMissionsTimer_6bf867a3',
        fadeIn: 'Waiting_fadeIn_b299f9ac',
        fadeInThreeQuarters: 'Waiting_fadeInThreeQuarters_b299f9ac',
        fadeInHalf: 'Waiting_fadeInHalf_b299f9ac',
        fadeOut: 'Waiting_fadeOut_b299f9ac',
        fadeInWithScale: 'Waiting_fadeInWithScale_b299f9ac',
        slideUp: 'Waiting_slideUp_b299f9ac',
        scale: 'Waiting_scale_b299f9ac',
        raysAppearance: 'Waiting_raysAppearance_b299f9ac',
        rotate: 'Waiting_rotate_b299f9ac',
        'reverse-rotate': 'Waiting_reverse-rotate_b299f9ac',
        glowAppearance: 'Waiting_glowAppearance_b299f9ac',
        highlightAppearance: 'Waiting_highlightAppearance_b299f9ac',
        blink: 'Waiting_blink_b299f9ac',
        slideUpIn: 'Waiting_slideUpIn_b299f9ac',
    },
    H = R.strings.comp7_ext.weeklyQuestWidgetTooltip,
    O = h(() => {
        const { model: e } = A(),
            { timeToNewQuests: a, questsPassed: s, totalQuests: n } = e.root.get(),
            c = e.questNumbersToRewards.get().length - 1;
        return (0, C.jsxs)('div', {
            className: S.base,
            children: [
                (0, C.jsx)(i, { text: H.header(), classMix: S.header }),
                (0, C.jsx)(i, {
                    text: H.missionsCounter(),
                    classMix: S.counterContainer,
                    binding: {
                        counter: (0, C.jsx)(i, {
                            text: H.counter(),
                            classMix: S.counter,
                            binding: {
                                current: (0, C.jsx)('span', { className: S.counter__current, children: s }),
                                total: n,
                            },
                        }),
                    },
                }),
                (0, C.jsx)(f, {
                    text: H.description(),
                    classMix: S.description,
                    binding: {
                        questsList: x(c, (a) => e.computes.questRewardsNumber(a)).join(
                            R.strings.comp7_ext.listSeparator(),
                        ),
                        lastQuest: e.computes.questRewardsNumber(c),
                    },
                }),
                (0, C.jsxs)('div', {
                    className: S.timerBlock,
                    children: [
                        (0, C.jsx)(T, { className: S.divider }),
                        (0, C.jsxs)('div', {
                            className: S.newMissionsDescriptionWrapper,
                            children: [
                                (0, C.jsx)(t, {
                                    classMix: S.newMissionsDescription,
                                    content: r(H.newMissions(5), { value: 5 }),
                                }),
                                (0, C.jsx)(o, { start: a, className: S.newMissionsTimer }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    z = 'WeeklyQuestWidgetTooltip_20195207',
    B = {
        [W.Active]: q,
        [W.Waiting]: O,
        [W.Reward]: () =>
            (0, C.jsxs)('div', {
                className: U.base,
                children: [
                    (0, C.jsx)(i, { text: D.completed(), classMix: U.header }),
                    (0, C.jsx)(i, { text: D.completedDescription(), classMix: U.description }),
                    (0, C.jsx)(T, { className: U.divider }),
                    (0, C.jsx)('div', { className: U.rewardsText, children: D.rewards() }),
                    (0, C.jsx)('div', { className: U.reward }),
                ],
            }),
    },
    L = h(() => {
        const { model: e } = A(),
            a = B[e.root.get().state];
        return a
            ? (0, C.jsx)(_, {
                  children: (0, C.jsx)(_.Decorator, {
                      children: (0, C.jsx)('div', { className: z, children: (0, C.jsx)(a, {}) }),
                  }),
              })
            : (console.error('Unreachable code: WeeklyQuestTooltip'), null);
    });
l((0, C.jsx)(j, { children: (0, C.jsx)(L, {}) }));
