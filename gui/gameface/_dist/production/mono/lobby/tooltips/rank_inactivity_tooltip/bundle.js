import { r as t } from '../../chunks/rolldown-runtime.js';
import { Cs as s, Ho as i, Na as o, _i as a, fi as e, kr as n } from '../../chunks/lib.js';
import '../../chunks/_wg-global-styles.js';
import { a as r, i as c } from '../../chunks/vendor.js';
/* empty css                  */ import { t as l } from '../../chunks/tooltip_decorator.js';
import { t as p } from '../../chunks/tooltips.module.js';
s();
var d = t(c(), 1),
    [m, _] = a('RankInactivityTooltipModel')(({ observableModel: t }) => ({ root: t.object() }), i),
    u = 'App_f0b59ee5',
    b = 'App_daysLeft_bc8ac04b',
    j = 'App_timer_c376641d',
    v = 'App_timer__active_d318a2be',
    k = t(o(), 1),
    x = r(() => {
        const { model: t } = _(),
            { rankInactivityCount: s, rankInactivityPointsCount: i } = t.root.get();
        return (0, k.jsxs)('div', {
            className: (0, d.default)(p.base, u),
            children: [
                (0, k.jsx)('div', { className: (0, d.default)(j, s <= 3 && v) }),
                (0, k.jsx)('div', {
                    className: p.heading,
                    children: R.strings.comp7_ext.progressionTableTooltip.rankInactivity.header.active(),
                }),
                (0, k.jsx)(n, {
                    text: R.strings.comp7_ext.progressionTableTooltip.rankInactivity.description.active(i),
                    binding: { count: i },
                    classMix: (0, d.default)(p.description, p.description__topIndent),
                }),
                (0, k.jsx)(n, {
                    text: R.strings.comp7_ext.progressionTableTooltip.rankInactivity.daysLeft(),
                    binding: { rankInactivityCount: s },
                    classMix: (0, d.default)(p.description, p.description__topIndent, b),
                }),
            ],
        });
    });
e((0, k.jsx)(m, { children: (0, k.jsx)(l, { children: (0, k.jsx)(x, {}) }) }));
