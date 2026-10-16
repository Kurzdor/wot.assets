import { r as e } from '../../chunks/rolldown-runtime.js';
import { Cs as s, Ho as a, Hr as o, Mr as t, Na as i, _i as n, fi as r } from '../../chunks/lib.js';
import '../../chunks/_wg-global-styles.js';
import { a as c, i as _ } from '../../chunks/vendor.js';
/* empty css                  */ import { o as l } from '../../chunks/enums.js';
import { t as d } from '../../chunks/formatted_statistic_value.js';
import { n as p } from '../../chunks/get_statistic_value.js';
import { t as w } from '../../chunks/tooltip_decorator.js';
s();
var [m, u] = n()(({ observableModel: e }) => ({ root: e.object() }), a),
    f = e(_(), 1),
    h = {
        base: 'Row_94492f2a',
        icon: 'Row_icon_f5399b29',
        icon__victory: 'Row_icon__victory_11e393c5',
        icon__defeat: 'Row_icon__defeat_17f69893',
        icon__draw: 'Row_icon__draw_1b8c5e73',
        value: 'Row_value_a39f65db',
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
    x = e(i(), 1),
    j = {
        victory: R.strings.comp7_ext.winsIndicatorTooltip.wins(),
        defeat: R.strings.comp7_ext.winsIndicatorTooltip.defeats(),
        draw: R.strings.comp7_ext.winsIndicatorTooltip.draws(),
    };
function v({ type: e, value: s, className: a }) {
    return (0, x.jsxs)('div', {
        className: (0, f.default)(h.base, a),
        children: [
            (0, x.jsx)('div', { className: (0, f.default)(h.icon, h[`icon__${e}`]) }),
            (0, x.jsx)(t, {
                text: j[e],
                binding: { count: (0, x.jsx)('div', { className: h.value, children: (0, x.jsx)(d, { value: s }) }) },
            }),
        ],
    });
}
var g = 'App_85ba0ddd',
    b = 'App_heading_ade6eef',
    I = 'App_count_d181c83a',
    y = 'App_description_9be53259',
    A = 'App_list_89b2a732',
    k = 'App_listItem_72a48a31',
    N = c(function () {
        const { model: e } = u(),
            { statisticsMode: s, winRate: a, winsCount: o, lossCount: i, drawCount: n } = e.root.get();
        return (0, x.jsxs)('div', {
            className: g,
            children: [
                (0, x.jsx)(t, {
                    text:
                        s === l.Season
                            ? R.strings.comp7_ext.winsIndicatorTooltip.season.heading()
                            : R.strings.comp7_ext.winsIndicatorTooltip.day.heading(),
                    binding: {
                        winRate: (0, x.jsx)('div', { className: I, children: p({ value: a, isPercentage: !0 }) }),
                    },
                    classMix: b,
                }),
                (0, x.jsx)(t, { text: R.strings.comp7_ext.winsIndicatorTooltip.winRate.description(), classMix: y }),
                (0, x.jsxs)('div', {
                    className: A,
                    children: [
                        (0, x.jsx)(v, { type: 'victory', value: o, className: k }),
                        (0, x.jsx)(v, { type: 'defeat', value: i, className: k }),
                        (0, x.jsx)(v, { type: 'draw', value: n, className: k }),
                    ],
                }),
            ],
        });
    });
r((0, x.jsx)(m, { children: (0, x.jsx)(o, { children: (0, x.jsx)(w, { children: (0, x.jsx)(N, {}) }) }) }));
