import { r as s } from '../../chunks/rolldown-runtime.js';
import { Cs as i, Ho as o, Lr as r, Mr as e, Na as a, _i as n, fi as t, kr as d } from '../../chunks/lib.js';
import '../../chunks/_wg-global-styles.js';
import { a as m, i as c } from '../../chunks/vendor.js';
/* empty css                  */ import { n as l } from '../../chunks/get_division_name.js';
import { n as j } from '../../chunks/get_rank_name.js';
import { t as p } from '../../chunks/tooltip_decorator.js';
import { t as h } from '../../chunks/tooltips.module.js';
i();
var u = s(c(), 1),
    [v, x] = n()(({ observableModel: s }) => ({ root: s.object() }), o),
    g = s(a(), 1),
    k = m(() => {
        const { model: s } = x(),
            { division: i, rank: o, from: a, to: n } = s.root.get();
        return (0, g.jsxs)('div', {
            className: h.base,
            children: [
                (0, g.jsx)('div', {
                    className: h.heading,
                    children: r(R.strings.comp7_ext.divisionTooltip.heading(), { divisionName: l(i) }),
                }),
                (0, g.jsx)('div', {
                    className: (0, u.default)(h.subHeading, h.subHeading__topIndent),
                    children: (0, g.jsx)(e, { text: j(o) }),
                }),
                (0, g.jsx)('div', { className: h.divider }),
                (0, g.jsx)('div', {
                    className: h.description,
                    children: (0, g.jsx)(d, {
                        text: R.strings.comp7_ext.divisionTooltip.description(),
                        binding: { fromScore: a, toScore: n },
                    }),
                }),
            ],
        });
    });
t((0, g.jsx)(v, { children: (0, g.jsx)(p, { children: (0, g.jsx)(k, {}) }) }));
