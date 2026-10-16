import { r as s } from '../../chunks/rolldown-runtime.js';
import { Ho as o, Mr as i, Na as a, _i as e, fi as r, kr as n, q as t } from '../../chunks/lib.js';
import '../../chunks/_wg-global-styles.js';
import { a as l, i as d } from '../../chunks/vendor.js';
/* empty css                  */ import { n as c, r as m } from '../../chunks/get_rank_name.js';
import { t as j } from '../../chunks/tooltip_decorator.js';
import { t as h } from '../../chunks/tooltips.module.js';
var g = s(d(), 1),
    [u, x] = e()(({ observableModel: s }) => ({ root: s.object() }), o),
    p = s(a(), 1),
    v = l(() => {
        const { model: s } = x(),
            { divisions: o, rank: a, from: e, to: r } = s.root.get();
        return (0, p.jsxs)('div', {
            className: h.base,
            children: [
                (0, p.jsx)('div', { className: h.heading, children: c(a) }),
                (0, p.jsx)('div', {
                    className: (0, g.default)(h.subHeading, h.subHeading__topIndent),
                    children: (0, p.jsx)(i, {
                        text: R.strings.comp7_ext.generalRankTooltip.subheading(),
                        binding: { divisions: (0, p.jsx)('div', { className: h.highlight, children: o }) },
                    }),
                }),
                (0, p.jsx)('div', { className: h.divider }),
                (0, p.jsx)('div', {
                    className: h.description,
                    children: (0, p.jsx)(n, {
                        text: m(R.strings.comp7_ext.generalRankTooltip.body, a),
                        binding: { fromScore: (0, p.jsx)(t, { value: e }), toScore: (0, p.jsx)(t, { value: r }) },
                    }),
                }),
            ],
        });
    });
r((0, p.jsx)(u, { children: (0, p.jsx)(j, { children: (0, p.jsx)(v, {}) }) }));
