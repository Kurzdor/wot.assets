import { r as s } from '../../chunks/rolldown-runtime.js';
import { Cs as o, Ho as r, Na as t, _i as e, fi as i, kr as n } from '../../chunks/lib.js';
import '../../chunks/_wg-global-styles.js';
import { a, i as c } from '../../chunks/vendor.js';
/* empty css                  */ import { r as m } from '../../chunks/enums.js';
import { n as l } from '../../chunks/get_rank_name.js';
import { t as d } from '../../chunks/tooltip_decorator.js';
import { t as p } from '../../chunks/tooltips.module.js';
o();
var h = s(c(), 1),
    [j, u] = e()(({ observableModel: s }) => ({ root: s.object() }), r),
    k = s(t(), 1),
    x = a(() => {
        const { model: s } = u(),
            { topPercentage: o } = s.root.get();
        return (0, k.jsxs)('div', {
            className: p.base,
            children: [
                (0, k.jsx)('div', { className: p.heading, children: l(m.Sixth) }),
                (0, k.jsx)('div', {
                    className: (0, h.default)(p.description, p.description__topIndent),
                    children: (0, k.jsx)(n, {
                        text: R.strings.comp7_ext.sixthRankTooltip.description(),
                        binding: { topPercentage: o },
                    }),
                }),
            ],
        });
    });
i((0, k.jsx)(j, { children: (0, k.jsx)(d, { children: (0, k.jsx)(x, {}) }) }));
