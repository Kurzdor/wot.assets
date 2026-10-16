import { r as s } from '../../chunks/rolldown-runtime.js';
import { Cs as t, Ho as o, Mr as a, Na as e, Pr as i, Ts as r, _i as l, fi as d } from '../../chunks/lib.js';
import '../../chunks/_wg-global-styles.js';
import { a as m, i as n } from '../../chunks/vendor.js';
/* empty css                  */ import { t as c } from '../../chunks/tooltip_decorator.js';
import { t as p } from '../../chunks/tooltips.module.js';
t();
var j = s(n(), 1),
    [h, x] = l()(({ observableModel: s }) => ({ root: s.object() }), o),
    u = 'App_formattedText_5a12c957',
    b = s(e(), 1),
    f = m(() => {
        const { model: s } = x(),
            { leaderboardUpdateTimestamp: t, description: o } = s.root.get();
        return (0, b.jsxs)('div', {
            className: p.base,
            children: [
                (0, b.jsx)(a, {
                    text: R.strings.comp7_ext.lastUpdateNote.tooltip.info(),
                    binding: {
                        date: (0, b.jsx)('span', {
                            className: p.highlight,
                            children: (0, b.jsx)(i, { datetime: t, format: r.ShortTime }),
                        }),
                    },
                    classMix: (0, j.default)(p.subHeading, u),
                }),
                (0, b.jsx)('div', { className: p.divider }),
                (0, b.jsx)('div', { className: p.description, children: (0, b.jsx)(a, { text: o }) }),
            ],
        });
    });
d((0, b.jsx)(h, { children: (0, b.jsx)(c, { children: (0, b.jsx)(f, {}) }) }));
