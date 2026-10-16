import { r as e } from '../../chunks/rolldown-runtime.js';
import {
    Bo as a,
    Co as s,
    Cs as t,
    Ho as n,
    Lr as i,
    Mr as r,
    Na as c,
    _i as o,
    fi as l,
    gi as d,
    go as _,
    kr as m,
    mo as p,
    q as b,
    to as v,
    xa as k,
    yo as f,
} from '../../chunks/lib.js';
import '../../chunks/_wg-global-styles.js';
import { a as x, i as h } from '../../chunks/vendor.js';
/* empty css                  */ import { r as u } from '../../chunks/enums.js';
import { i as g, o as I, t as j } from '../../chunks/rank_emblem.js';
import { t as T } from '../../chunks/get_division_name.js';
import { i as y, n as w } from '../../chunks/get_rank_name.js';
import { n as N, t as A } from '../../chunks/get_division_points_step.js';
import { t as B } from '../../chunks/tooltip_decorator.js';
var H = e(h(), 1),
    [U, C] = o('ProgressionTableTooltipModel')(({ observableModel: e }) => {
        const t = { root: e.object(), items: e.array('items') },
            n = d(
                (e) => {
                    const a = f(t.items.get(), e);
                    if (!a) throw new Error(`progression item with index ${e} was not found`);
                    const { hasRankInactivity: s, rank: n, from: i, to: r } = a;
                    return { hasRankInactivity: s, rank: n, from: i, to: r };
                },
                { equals: k.shallow },
            ),
            i = d(
                (e) => {
                    const a = f(t.items.get(), e);
                    if (!a) throw new Error(`progression item with index ${e} was not found`);
                    return s(a.divisions, (e) => ({ ...e }));
                },
                { equals: a },
            ),
            r = d(
                () => {
                    const e = t.root.get().currentItemIndex,
                        a = i(e),
                        s = _(a, (e) => e.state === N.Current);
                    return { name: 'number' == typeof s ? a[s]?.name : void 0, index: s };
                },
                { equals: k.shallow },
            );
        return { ...t, computes: { item: n, divisions: i, currentDivision: r } };
    }, n),
    M = {
        base: 'RankInactivityBlock_d683def8',
        heading: 'RankInactivityBlock_heading_82d158ec',
        description: 'RankInactivityBlock_description_6907b70d',
        daysLeft: 'RankInactivityBlock_daysLeft_5f9e9940',
        fadeIn: 'RankInactivityBlock_fadeIn_4aecaefd',
        fadeInThreeQuarters: 'RankInactivityBlock_fadeInThreeQuarters_4aecaefd',
        fadeInHalf: 'RankInactivityBlock_fadeInHalf_4aecaefd',
        fadeOut: 'RankInactivityBlock_fadeOut_4aecaefd',
        fadeInWithScale: 'RankInactivityBlock_fadeInWithScale_4aecaefd',
        slideUp: 'RankInactivityBlock_slideUp_4aecaefd',
        scale: 'RankInactivityBlock_scale_4aecaefd',
        raysAppearance: 'RankInactivityBlock_raysAppearance_4aecaefd',
        rotate: 'RankInactivityBlock_rotate_4aecaefd',
        'reverse-rotate': 'RankInactivityBlock_reverse-rotate_4aecaefd',
        glowAppearance: 'RankInactivityBlock_glowAppearance_4aecaefd',
        highlightAppearance: 'RankInactivityBlock_highlightAppearance_4aecaefd',
        blink: 'RankInactivityBlock_blink_4aecaefd',
        slideUpIn: 'RankInactivityBlock_slideUpIn_4aecaefd',
    },
    S = e(c(), 1),
    E = x(({ className: e }) => {
        const { model: a } = C(),
            { rankInactivityCount: s, rankInactivityPointsCount: t, currentItemIndex: n } = a.root.get(),
            r = a.computes.item(n).hasRankInactivity;
        return (0, S.jsx)('div', {
            className: (0, H.default)(M.base, r && M.base__active, e),
            children: r
                ? (0, S.jsxs)(S.Fragment, {
                      children: [
                          (0, S.jsx)('div', {
                              className: M.heading,
                              children: R.strings.comp7_ext.progressionTableTooltip.rankInactivity.header.active(),
                          }),
                          (0, S.jsx)(m, {
                              text: R.strings.comp7_ext.progressionTableTooltip.rankInactivity.description.active(t),
                              binding: { count: t },
                              classMix: M.description,
                          }),
                          (0, S.jsx)(m, {
                              text: R.strings.comp7_ext.progressionTableTooltip.rankInactivity.daysLeft(),
                              binding: { rankInactivityCount: s },
                              classMix: M.daysLeft,
                          }),
                      ],
                  })
                : (0, S.jsxs)(S.Fragment, {
                      children: [
                          (0, S.jsx)('div', {
                              className: M.heading,
                              children: R.strings.comp7_ext.progressionTableTooltip.rankInactivity.header.notActive(),
                          }),
                          (0, S.jsx)(m, {
                              text: i(
                                  R.strings.comp7_ext.progressionTableTooltip.rankInactivity.description.notActive(),
                                  {
                                      rankList: p(
                                          a.items.get(),
                                          (e) => e.hasRankInactivity,
                                          (e) => y(e.rank),
                                      ).join(R.strings.comp7_ext.listSeparator()),
                                  },
                              ),
                              classMix: M.description,
                          }),
                      ],
                  }),
        });
    }),
    L = 'TableHeader_35da86a5',
    D = 'TableHeader_container_fb71aa54',
    F = 'TableHeader_cell_56183287',
    $ = 'TableHeader_cell__rank_fb9e8504',
    q = x(({ className: e }) => {
        const { model: a } = C(),
            s = a.computes.divisions(0);
        return (0, S.jsx)('div', {
            className: (0, H.default)(L, e),
            children: (0, S.jsxs)('div', {
                className: D,
                children: [
                    (0, S.jsx)('div', {
                        className: (0, H.default)(F, $),
                        children: R.strings.comp7_ext.progressionTableTooltip.table.heading.rank(),
                    }),
                    v(s.length, (e) => (0, S.jsx)('div', { className: F, children: s[e] ? T(s[e].name) : '' }, e)),
                ],
            }),
        });
    }),
    O =
        (t(),
        {
            base: 'TableRow_42854519',
            base__active: 'TableRow_base__active_48eb2f3',
            container: 'TableRow_container_72f3acca',
            cell: 'TableRow_cell_f6418bbe',
            cell__rank: 'TableRow_cell__rank_84767343',
            cell__range: 'TableRow_cell__range_13cfbcaa',
            cell__united: 'TableRow_cell__united_f174032f',
            rankEmblem: 'TableRow_rankEmblem_bd21e4b',
            rankName: 'TableRow_rankName_9b4a57c7',
            text__active: 'TableRow_text__active_511f27e1',
            divider: 'TableRow_divider_fc41e995',
            fadeIn: 'TableRow_fadeIn_94d4bc08',
            fadeInThreeQuarters: 'TableRow_fadeInThreeQuarters_94d4bc08',
            fadeInHalf: 'TableRow_fadeInHalf_94d4bc08',
            fadeOut: 'TableRow_fadeOut_94d4bc08',
            fadeInWithScale: 'TableRow_fadeInWithScale_94d4bc08',
            slideUp: 'TableRow_slideUp_94d4bc08',
            scale: 'TableRow_scale_94d4bc08',
            raysAppearance: 'TableRow_raysAppearance_94d4bc08',
            rotate: 'TableRow_rotate_94d4bc08',
            'reverse-rotate': 'TableRow_reverse-rotate_94d4bc08',
            glowAppearance: 'TableRow_glowAppearance_94d4bc08',
            highlightAppearance: 'TableRow_highlightAppearance_94d4bc08',
            blink: 'TableRow_blink_94d4bc08',
            slideUpIn: 'TableRow_slideUpIn_94d4bc08',
        }),
    P = x(({ itemIndex: e }) => {
        const { model: a } = C(),
            { topPercentage: s } = a.root.get(),
            { rank: t, from: n, to: i } = a.computes.item(e),
            c = a.computes.divisions(e),
            o = a.computes.currentDivision();
        switch (t) {
            case u.Sixth:
                return (0, S.jsx)('div', {
                    className: (0, H.default)(O.cell, O.cell__united),
                    children: (0, S.jsx)(r, {
                        text: R.strings.comp7_ext.progressionTableTooltip.topRank(),
                        binding: { topPercentage: s },
                    }),
                });
            case u.Fifth:
                return (0, S.jsx)('div', {
                    className: (0, H.default)(O.cell, O.cell__united),
                    children: (0, S.jsx)(r, {
                        text: R.strings.comp7_ext.progressionTableTooltip.pointsFrom(),
                        binding: { from: (0, S.jsx)(b, { value: n }) },
                    }),
                });
            default:
                return (0, S.jsx)(S.Fragment, {
                    children: v(c.length, (e) => {
                        const a = A(n, i, c.length),
                            s = n + a * e;
                        return (0, S.jsx)(
                            'div',
                            {
                                className: (0, H.default)(O.cell, O.cell__range),
                                children: (0, S.jsx)(r, {
                                    text: R.strings.comp7_ext.progressionTableTooltip.pointsRange(),
                                    binding: {
                                        from: (0, S.jsx)(b, { value: s }),
                                        to: (0, S.jsx)(b, { value: s + a - 1 }),
                                    },
                                    classMix: (0, H.default)(O.text, e === o.index && O.text__active),
                                }),
                            },
                            `${e}_${s}`,
                        );
                    }),
                });
        }
    }),
    Q = x(({ itemIndex: e, className: a, hasDivider: s = !0 }) => {
        const { model: t } = C(),
            { seasonName: n, currentItemIndex: i } = t.root.get(),
            { rank: r } = t.computes.item(e);
        return (0, S.jsxs)('div', {
            className: (0, H.default)(O.base, i === e && O.base__active, a),
            children: [
                (0, S.jsxs)('div', {
                    className: O.container,
                    children: [
                        (0, S.jsxs)('div', {
                            className: (0, H.default)(O.cell, O.cell__rank),
                            children: [
                                (0, S.jsx)(j, { rank: r, size: g.x22, seasonName: n, className: O.rankEmblem }),
                                (0, S.jsx)('div', { className: O.rankName, children: y(r) }),
                            ],
                        }),
                        (0, S.jsx)(P, { itemIndex: e }),
                    ],
                }),
                s && (0, S.jsx)('div', { className: O.divider }),
            ],
        });
    }),
    W = 'Table_24abbb5a',
    z = x(({ className: e }) => {
        const { model: a } = C(),
            s = a.items.get().length - 1;
        return (0, S.jsxs)('div', {
            className: (0, H.default)(W, e),
            children: [
                (0, S.jsx)(q, {}),
                v(a.items.get().length, (e) => (0, S.jsx)(Q, { itemIndex: e, hasDivider: e < s }, e)),
            ],
        });
    }),
    G = 'App_98200e88',
    J = 'App_timer_c376641d',
    K = 'App_timer__active_d318a2be',
    V = 'App_container_ec045390',
    X = 'App_left_65fdd847',
    Y = 'App_right_9365ab5f',
    Z = 'App_divider_38d98f1f',
    ee = 'App_rankEmblem_748380a',
    ae = 'App_rankInfo_11560edd',
    se = 'App_score_45b617db',
    te = 'App_rankText_edc4b160',
    ne = 'App_division_aae1175d',
    ie = 'App_table_a2ca34a1',
    re = x(() => {
        const { model: e } = C(),
            { seasonName: a, currentItemIndex: s, currentScore: t, rankInactivityCount: n } = e.root.get(),
            i = e.computes.item(s),
            r = e.computes.currentDivision(),
            c = I(i.rank),
            o = w(i.rank) + (c ? `${R.strings.common.common.dot()} ` : '');
        return (0, S.jsxs)('div', {
            className: G,
            children: [
                (0, S.jsx)('div', { className: (0, H.default)(J, i.hasRankInactivity && n <= 3 && K) }),
                (0, S.jsxs)('div', {
                    className: V,
                    children: [
                        (0, S.jsxs)('div', {
                            className: X,
                            children: [
                                (0, S.jsx)(j, {
                                    rank: i.rank,
                                    size: g.x150,
                                    seasonName: a,
                                    division: r.name,
                                    className: ee,
                                }),
                                (0, S.jsxs)('div', {
                                    className: ae,
                                    children: [
                                        (0, S.jsx)('div', { className: se, children: (0, S.jsx)(b, { value: t }) }),
                                        (0, S.jsxs)('div', {
                                            className: te,
                                            children: [
                                                (0, S.jsx)('div', { children: o }),
                                                c &&
                                                    r.name &&
                                                    (0, S.jsx)('div', { className: ne, children: T(r.name) }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, S.jsx)('div', { className: Z }),
                        (0, S.jsx)('div', { className: Y, children: (0, S.jsx)(E, {}) }),
                    ],
                }),
                (0, S.jsx)(z, { className: ie }),
            ],
        });
    });
l((0, S.jsx)(U, { children: (0, S.jsx)(B, { children: (0, S.jsx)(re, {}) }) }));
