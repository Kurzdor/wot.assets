import { r as a } from '../../chunks/rolldown-runtime.js';
import { Ho as e, Hr as s, Mr as i, Na as o, _i as t, fi as d, q as r } from '../../chunks/lib.js';
import '../../chunks/_wg-global-styles.js';
import { a as c, i as n } from '../../chunks/vendor.js';
/* empty css                  */ import { o as l } from '../../chunks/enums.js';
import { t as m } from '../../chunks/tooltip_decorator.js';
var g = a(n(), 1),
    [p, x] = t()(({ observableModel: a }) => ({ root: a.object() }), e),
    h = 'App_7443fc67',
    j = 'App_section_a3957b62',
    _ = 'App_section__bg_b6da9bb8',
    v = 'App_heading_ade6eef',
    b = 'App_count_d181c83a',
    u = 'App_description_35a8fa7c',
    f = 'App_vehicleName_e27f46e4',
    D = a(o(), 1),
    N = c(() => {
        const { model: a } = x(),
            {
                statisticsMode: e,
                averageDamageDealt: s,
                recordDamageDealt: o,
                recordDamageDealtVehicleName: t,
            } = a.root.get();
        return (0, D.jsxs)('div', {
            className: h,
            children: [
                (0, D.jsxs)('div', {
                    className: j,
                    children: [
                        (0, D.jsx)(i, {
                            text:
                                e === l.Season
                                    ? R.strings.comp7_ext.damageIndicatorTooltip.damage.season.heading()
                                    : R.strings.comp7_ext.damageIndicatorTooltip.damage.day.heading(),
                            binding: {
                                averageDamageDealt: (0, D.jsx)('div', {
                                    className: b,
                                    children: (0, D.jsx)(r, { value: s }),
                                }),
                            },
                            classMix: v,
                        }),
                        (0, D.jsx)(i, {
                            text: R.strings.comp7_ext.damageIndicatorTooltip.damage.description(),
                            classMix: u,
                        }),
                    ],
                }),
                (0, D.jsxs)('div', {
                    className: (0, g.default)(j, _),
                    children: [
                        (0, D.jsx)(i, {
                            text:
                                e === l.Season
                                    ? R.strings.comp7_ext.damageIndicatorTooltip.damageRecord.season.heading()
                                    : R.strings.comp7_ext.damageIndicatorTooltip.damageRecord.day.heading(),
                            binding: {
                                recordDamageDealt: (0, D.jsx)('div', {
                                    className: b,
                                    children: (0, D.jsx)(r, { value: o }),
                                }),
                            },
                            classMix: v,
                        }),
                        (0, D.jsx)(i, {
                            text: R.strings.comp7_ext.damageIndicatorTooltip.damageRecord.description(),
                            binding: { vehicleName: (0, D.jsx)('div', { className: f, children: t }) },
                            classMix: u,
                        }),
                    ],
                }),
            ],
        });
    });
d((0, D.jsx)(p, { children: (0, D.jsx)(s, { children: (0, D.jsx)(m, { children: (0, D.jsx)(N, {}) }) }) }));
