import { r as a } from '../../chunks/rolldown-runtime.js';
import { Cs as s, Ho as e, Mr as i, Na as t, _i as l, fi as n, to as o } from '../../chunks/lib.js';
import '../../chunks/_wg-global-styles.js';
import { a as r, i as m } from '../../chunks/vendor.js';
/* empty css                  */ import { r as c } from '../../chunks/enums.js';
import { i as d, t as p } from '../../chunks/rank_emblem.js';
import { i as b } from '../../chunks/get_rank_name.js';
import { t as _ } from '../../chunks/tooltip_decorator.js';
import { t as h } from '../../chunks/tooltips.module.js';
var k = a(s()),
    j = a(m()),
    x = 'RankCompatibilityTable_d1e1f461',
    u = 'RankCompatibilityTable_row_1979ce',
    f = 'RankCompatibilityTable_tableHeading_e798864c',
    g = 'RankCompatibilityTable_heading_fc477f38',
    N = 'RankCompatibilityTable_teammates_e198b34',
    v = 'RankCompatibilityTable_teammates__heading_18846859',
    y = 'RankCompatibilityTable_rank_c960c039',
    C = 'RankCompatibilityTable_emptySlot_7884dfc9',
    T = 'RankCompatibilityTable_divider_e6a19cf8',
    M = a(t()),
    F = [c.First, c.Second, c.Third, c.Fourth, c.Fifth, c.Sixth],
    S = ({ seasonName: a, rankRangeRestriction: s, className: e, classNames: i }) =>
        (0, M.jsxs)('div', {
            className: (0, j.default)(x, e),
            children: [
                (0, M.jsxs)('div', {
                    className: (0, j.default)(u, f, i?.tableHeading),
                    children: [
                        (0, M.jsx)('div', {
                            className: g,
                            children: R.strings.comp7_ext.rankCompatibilityTable.playersRank(),
                        }),
                        (0, M.jsx)('div', {
                            className: (0, j.default)(N, v),
                            children: (0, M.jsx)('div', {
                                className: g,
                                children: R.strings.comp7_ext.rankCompatibilityTable.teammatesRank(),
                            }),
                        }),
                    ],
                }),
                F.map((e, i) =>
                    (0, M.jsxs)(
                        k.Fragment,
                        {
                            children: [
                                (0, M.jsxs)('div', {
                                    className: u,
                                    children: [
                                        (0, M.jsxs)('div', {
                                            className: u,
                                            children: [
                                                (0, M.jsx)(p, { rank: e, size: d.x22, seasonName: a, className: y }),
                                                b(e),
                                            ],
                                        }),
                                        (0, M.jsx)('div', {
                                            className: (0, j.default)(u, N),
                                            children: o(F.length, (e) =>
                                                Math.abs(e - i) <= s
                                                    ? (0, M.jsx)(p, { rank: F[e], size: d.x22, seasonName: a }, e)
                                                    : (0, M.jsx)('div', { className: C }, e),
                                            ),
                                        }),
                                    ],
                                }),
                                i !== F.length - 1 && (0, M.jsx)('div', { className: (0, j.default)(h.divider, T) }),
                            ],
                        },
                        i,
                    ),
                ),
            ],
        }),
    [w, z] = l()(({ observableModel: a }) => ({ root: a.object() }), e),
    A = 'App_bce8e88b',
    H = 'App_description_e694643b',
    q = 'App_table_8784516a',
    B = r(() => {
        const { model: a } = z(),
            { seasonName: s, squadSize: e, rankRangeRestriction: t } = a.root.get();
        return (0, M.jsxs)('div', {
            className: (0, j.default)(A, h.base),
            children: [
                (0, M.jsx)(i, {
                    text: R.strings.comp7_ext.rankCompatibilityTooltip.heading(),
                    binding: { count: e },
                    classMix: h.heading,
                }),
                (0, M.jsx)(i, {
                    text: R.strings.comp7_ext.rankCompatibilityTooltip.description(),
                    classMix: (0, j.default)(h.description, H),
                }),
                (0, M.jsx)(S, { seasonName: s, rankRangeRestriction: t, className: q }),
            ],
        });
    });
n((0, M.jsx)(w, { children: (0, M.jsx)(_, { children: (0, M.jsx)(B, {}) }) }));
