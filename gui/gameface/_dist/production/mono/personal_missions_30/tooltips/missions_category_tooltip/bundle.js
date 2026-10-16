import {
    B as e,
    C as s,
    Et as n,
    Gt as o,
    H as t,
    Q as a,
    S as i,
    en as r,
    o as l,
    on as c,
    q as m,
    w as _,
    x as p,
    xt as d,
} from '../../chunks/lib.js';
import '../../chunks/global.js';
import { a as h } from '../../chunks/vendor.js';
import { t as x } from '../../chunks/enums.js';
import { t as j } from '../../chunks/gradient_decorator.js';
var [u, b] = a()(({ observableModel: e }) => e.primitives(['category', 'operationName', 'minLevel', 'maxLevel']), o),
    v = 'Header_a57509ea',
    y = 'Header_content_84bb0203',
    g = 'Header_category_73a14ab3',
    N = 'Header_title_e89d676b',
    f = 'Header_description_2cc816f6',
    T = d(),
    k = h(function () {
        const { model: s } = b(),
            n = s.category.get();
        return (0, T.jsxs)('div', {
            className: v,
            children: [
                (0, T.jsx)(t, {
                    path: `personal_missions_30.category.c_64x64.${n}`,
                    width: '64rem',
                    height: '64rem',
                    className: g,
                }),
                (0, T.jsxs)('div', {
                    className: y,
                    children: [
                        (0, T.jsx)(e, { className: N, path: `personal_missions_30.common.category.${n}` }),
                        (0, T.jsx)(e, {
                            split: !0,
                            className: f,
                            path: `personal_missions_30.tooltip.missionsCategory.description.${n}`,
                        }),
                    ],
                }),
            ],
        });
    }),
    B = 'roles',
    C = 'vehicleTypes',
    I = { [B]: 'personal_missions_30.common.role', [C]: 'menu.header.vehicleType' },
    $ = {
        base: 'ColumnItem_f772e009',
        base__roles: 'ColumnItem_base__roles_fabefe49',
        icon: 'ColumnItem_icon_876d9b1b',
        text: 'ColumnItem_text_f537f721',
    };
function L({ item: s, contentType: n = 'roles', className: o }) {
    return (0, T.jsxs)('div', {
        className: c($.base, $[`base__${n}`], o),
        children: [
            (0, T.jsx)(t, { path: `personal_missions_30.common.${n}.${r(s)}`, className: $.icon }),
            (0, T.jsx)(e, { className: $.text, path: `${I[n]}.${r(s)}` }),
        ],
    });
}
var S = 'assault',
    w = 'breakthrough',
    R = 'sniper',
    P = 'support',
    H = 'universal',
    E = (e) => {
        switch (e) {
            case x.ASSAULT:
            case x.SNIPER:
                return (0, T.jsxs)(T.Fragment, {
                    children: [
                        (0, T.jsx)(L, { item: i, contentType: 'vehicleTypes' }),
                        (0, T.jsx)(L, { item: _, contentType: 'vehicleTypes' }),
                        (0, T.jsx)(L, { item: p, contentType: 'vehicleTypes' }),
                    ],
                });
            case x.SUPPORT:
                return (0, T.jsxs)(T.Fragment, {
                    children: [
                        (0, T.jsx)(L, { item: s, contentType: 'vehicleTypes' }),
                        (0, T.jsx)(L, { item: 'SPG', contentType: 'vehicleTypes' }),
                    ],
                });
            default:
                throw new Error(`unhandled categoryType ${e}`);
        }
    },
    A = (e) => {
        switch (e) {
            case x.ASSAULT:
                return (0, T.jsxs)(T.Fragment, {
                    children: [(0, T.jsx)(L, { item: w }), (0, T.jsx)(L, { item: S }), (0, T.jsx)(L, { item: H })],
                });
            case x.SNIPER:
                return (0, T.jsxs)(T.Fragment, { children: [(0, T.jsx)(L, { item: R }), (0, T.jsx)(L, { item: P })] });
            case x.SUPPORT:
                return null;
            default:
                throw new Error(`unhandled categoryType ${e}`);
        }
    },
    F = {
        base: 'InnerBlock_4e0a1101',
        description: 'InnerBlock_description_e25909eb',
        base__support: 'InnerBlock_base__support_8a259d83',
        content: 'InnerBlock_content_dd2985b',
        content__noRoles: 'InnerBlock_content__noRoles_b0516207',
        subtitle: 'InnerBlock_subtitle_c3819b5a',
        column: 'InnerBlock_column_9f423fea',
        verticalLine: 'InnerBlock_verticalLine_af25fb85',
    },
    M = h(function () {
        const { model: s } = b(),
            n = s.category.get(),
            o = Boolean(A(n));
        return (0, T.jsxs)('div', {
            className: c(F.base, F[`base__${n}`]),
            children: [
                (0, T.jsx)(e, {
                    split: !0,
                    className: F.description,
                    path: `personal_missions_30.tooltip.missionsCategory.innerBlock.description.${n}`,
                }),
                o
                    ? (0, T.jsxs)('div', {
                          className: F.content,
                          children: [
                              (0, T.jsxs)('div', {
                                  className: F.column,
                                  children: [
                                      (0, T.jsx)(e, {
                                          className: F.subtitle,
                                          path: 'personal_missions_30.tooltip.missionsCategory.innerBlock.vehiclesTypes',
                                      }),
                                      E(n),
                                  ],
                              }),
                              (0, T.jsx)('div', { className: F.verticalLine }),
                              (0, T.jsxs)('div', {
                                  className: F.column,
                                  children: [
                                      (0, T.jsx)(e, {
                                          className: F.subtitle,
                                          path: 'personal_missions_30.tooltip.missionsCategory.innerBlock.withRoles',
                                      }),
                                      A(n),
                                  ],
                              }),
                          ],
                      })
                    : (0, T.jsxs)('div', {
                          className: c(F.content, F.content__noRoles),
                          children: [
                              (0, T.jsx)(e, {
                                  className: F.subtitle,
                                  path: 'personal_missions_30.tooltip.missionsCategory.innerBlock.noRoles',
                              }),
                              (0, T.jsx)('div', { className: F.column, children: E(n) }),
                          ],
                      }),
            ],
        });
    }),
    U = 'MissionsCategoryTooltip_c7151f3b',
    G = 'MissionsCategoryTooltip_footer_e1c7b92d',
    O = h(function () {
        const { model: s } = b();
        return (0, T.jsx)(l, {
            className: U,
            'data-name': 'MissionsCategoryTooltip',
            children: (0, T.jsxs)(l.Decorator, {
                children: [
                    (0, T.jsx)(k, {}),
                    (0, T.jsx)(j, { children: (0, T.jsx)(M, {}) }),
                    (0, T.jsx)(e, {
                        path: 'personal_missions_30.tooltip.missionsCategory.footer',
                        params: {
                            operationName: s.operationName.get(),
                            minLevel: n(s.minLevel.get()),
                            maxLevel: n(s.maxLevel.get()),
                        },
                        split: !0,
                        className: G,
                    }),
                ],
            }),
        });
    });
m((0, T.jsx)(u, { children: (0, T.jsx)(O, {}) }));
