import { j as e, q as a, h as s, r } from '../../../../chunks/vendor.js';
import { i as t, a3 as c, r as i, I as o, F as l, a4 as n, a5 as d, N as m, U as p } from '../../../../chunks/lib.js';
import { B as _, b as h, g as j } from '../../../../chunks/category.js';
const x = (e, a) => ({ alphaTester: e.includes(h), betaTester: e.includes(_), notNewbie: a > 0 }),
    [b, g] = t()(({ observableModel: e }) => ({ root: e.object(), categories: e.array('categories', []) }), c),
    v = 'Description_f28b252f',
    N = 'Description_rank_6de41a4c',
    y = 'Description_segment_7e47fac5',
    f = ({ rank: a, segment: s }) =>
        e.jsxs('div', {
            className: v,
            children: [e.jsx('div', { className: N, children: a }), e.jsx('div', { className: y, children: s })],
        }),
    u = 'Header_382e691a',
    $ = 'Header_medals_bb4461bf',
    T = 'Header_medal_abf5c26',
    k = 'Header_title_59b528cf',
    w = 'Header_formattedTitle_d01fbd5',
    A = 'seniority_awards.tooltip.medalBlock.label',
    O = ({ category: a, years: s }) => {
        const { alphaTester: r, betaTester: t, notNewbie: c } = x(a, s),
            d = i.resolve('intl'),
            m = i.resolve('strings'),
            p = m.readOrEmpty(`${A}.${r ? 'ca' : 'cb'}`);
        return e.jsxs('div', {
            className: u,
            children: [
                e.jsxs('div', {
                    className: $,
                    children: [
                        r && e.jsx(o, { className: T, path: 'achievement.c_80x80.alphaTester' }),
                        t && e.jsx(o, { className: T, path: 'achievement.c_80x80.betaTester' }),
                        c &&
                            e.jsx(o, {
                                className: T,
                                path: `achievement.c_80x80.c_${s < 10 ? '0' : ''}${s}YearsOfService`,
                            }),
                    ],
                }),
                e.jsxs('div', {
                    className: k,
                    children: [
                        c &&
                            (r || t
                                ? e.jsx(l, {
                                      className: w,
                                      upgradeLegacy: !0,
                                      split: !0,
                                      text: m.readOrEmpty(`${A}.and`),
                                      params: {
                                          abLabel: p,
                                          yearsLabel: e.jsx(n, {
                                              path: `${A}.duration`,
                                              count: s,
                                              params: { count: d.formatNumber('integral', s) },
                                          }),
                                      },
                                  })
                                : e.jsx(n, { path: `${A}.duration`, count: s, params: { count: '' } })),
                        !c && (r || t) && p,
                    ],
                }),
            ],
        });
    },
    E = 'App_decorator_5f3651a8',
    H = 'App_content_6e357f20',
    D = 'App_content__headerVisible_d70f2fdc',
    L = 'App_section_cfb8f1aa',
    B = 'App_separator_d4523299',
    F = 'App_subtitle_462cd49b',
    q = a(() => {
        const { model: a } = g(),
            { category: t, maxCategory: c, years: o } = a.root.get(),
            { alphaTester: l, betaTester: n, notNewbie: m } = x(t, o),
            p = l || n || m,
            _ = i.resolve('strings');
        return e.jsx(d, {
            children: e.jsx(d.Decorator, {
                className: E,
                children: e.jsxs('div', {
                    className: s(H, p && D),
                    children: [
                        p && e.jsx(O, { category: t, years: o }),
                        e.jsxs('div', {
                            className: L,
                            children: [
                                e.jsx('div', { className: B }),
                                e.jsx('div', {
                                    className: F,
                                    children: _.readOrEmpty(`seniority_awards.tooltip.congratulation.${j(t, c)}`),
                                }),
                                e.jsx('div', { className: B }),
                            ],
                        }),
                        a.categories.get().map(({ value: a }, s) =>
                            e.jsxs(
                                r.Fragment,
                                {
                                    children: [
                                        s > 0 && e.jsx('div', { className: B }),
                                        e.jsx(f, {
                                            rank: _.readOrEmpty(`seniority_awards.tooltip.rank.${a}`),
                                            segment: _.readOrEmpty(`seniority_awards.tooltip.segment.${a}`),
                                        }),
                                    ],
                                },
                                a,
                            ),
                        ),
                    ],
                }),
            }),
        });
    });
m(e.jsx(b, { children: e.jsx(p, { children: e.jsx(q, {}) }) }));
