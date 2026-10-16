import { r as s } from '../../chunks/rolldown-runtime.js';
import { Ho as e, Hr as i, Mr as r, Na as t, _i as o, fi as a, q as c } from '../../chunks/lib.js';
import '../../chunks/_wg-global-styles.js';
import { a as n, i as d } from '../../chunks/vendor.js';
/* empty css                  */ import { o as p } from '../../chunks/enums.js';
import { t as l } from '../../chunks/tooltip_decorator.js';
var g = s(d(), 1),
    [m, x] = o()(({ observableModel: s }) => ({ root: s.object() }), e),
    h = 'App_7443fc67',
    j = 'App_section_a3957b62',
    _ = 'App_section__bg_b6da9bb8',
    v = 'App_heading_ade6eef',
    b = 'App_count_d181c83a',
    u = 'App_description_35a8fa7c',
    f = 'App_vehicleName_e27f46e4',
    N = s(t(), 1),
    k = n(() => {
        const { model: s } = x(),
            { statisticsMode: e, averagePrestige: i, recordPrestige: t, recordPrestigeVehicleName: o } = s.root.get();
        return (0, N.jsxs)('div', {
            className: h,
            children: [
                (0, N.jsxs)('div', {
                    className: j,
                    children: [
                        (0, N.jsx)(r, {
                            text:
                                e === p.Season
                                    ? R.strings.comp7_ext.prestigeIndicatorTooltip.prestige.season.heading()
                                    : R.strings.comp7_ext.prestigeIndicatorTooltip.prestige.day.heading(),
                            binding: {
                                averagePrestige: (0, N.jsx)('div', {
                                    className: b,
                                    children: (0, N.jsx)(c, { value: i }),
                                }),
                            },
                            classMix: v,
                        }),
                        (0, N.jsx)(r, {
                            text: R.strings.comp7_ext.prestigeIndicatorTooltip.prestige.description(),
                            classMix: u,
                        }),
                    ],
                }),
                (0, N.jsxs)('div', {
                    className: (0, g.default)(j, _),
                    children: [
                        (0, N.jsx)(r, {
                            text:
                                e === p.Season
                                    ? R.strings.comp7_ext.prestigeIndicatorTooltip.prestigeRecord.season.heading()
                                    : R.strings.comp7_ext.prestigeIndicatorTooltip.prestigeRecord.day.heading(),
                            binding: {
                                recordPrestige: (0, N.jsx)('div', {
                                    className: b,
                                    children: (0, N.jsx)(c, { value: t }),
                                }),
                            },
                            classMix: v,
                        }),
                        (0, N.jsx)(r, {
                            text: R.strings.comp7_ext.prestigeIndicatorTooltip.prestigeRecord.description(),
                            binding: { vehicleName: (0, N.jsx)('div', { className: f, children: o }) },
                            classMix: u,
                        }),
                    ],
                }),
            ],
        });
    });
a((0, N.jsx)(m, { children: (0, N.jsx)(i, { children: (0, N.jsx)(l, { children: (0, N.jsx)(k, {}) }) }) }));
