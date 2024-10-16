'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [984],
    {
        3503: (e, t, o) => {
            o.r(t), o.d(t, { default: () => Z });
            var n = o(6179),
                a = o.n(n),
                s = o(8958),
                c = o(8089),
                l = o(8526),
                r = o(3403),
                i = o(4707),
                u = o(3727),
                m = o(3720),
                d = o(3215),
                x = o(3946),
                g = o(3905),
                p = o(9217),
                B = o(1440),
                b = o(7366);
            const _ = {
                    videos: { background: 'noBoxesView.background' },
                    images: {
                        externalLink: 'common.externalLinkWhite',
                        background: 'noBoxesView.background',
                        noBoxes: 'noBoxesView.noBoxesArt',
                        guaranteedGlowIcon: 'awardViews.guaranteedGlow',
                        glowIcon: 'awardViews.glow',
                        slotGlow: 'hasBoxesView.guaranteed.slotGlow',
                        guaranteedIco: 'hasBoxesView.guaranteed.guaranteedIco',
                        statsIcon: 'statistics.stats',
                    },
                    texts: {
                        infoButton: 'common.infoButton',
                        closeButton: 'common.closeButton',
                        statsButton: 'common.statsButton',
                        description: 'noBoxesView.description',
                        descriptionCn: 'noBoxesView.descriptionCn',
                        buyBoxesButtonText: 'noBoxesView.buyBoxesButtonText',
                        buyBoxesButtonTextCn: 'noBoxesView.buyBoxesButtonTextCn',
                        eventName: 'eventName.upperCase',
                    },
                },
                C = {
                    dynamicTexts: {
                        boxName: 'common.boxCategory.upperCase',
                        tabText: 'hasBoxesView.guaranteedTitle.tabText',
                    },
                },
                v = (0, d.q)()(
                    ({ observableModel: e }) => {
                        const t = Object.assign({}, e.primitives(['useExternal', 'eventName', 'useStats']), {
                                boxesInfo: e.array('boxesInfo'),
                            }),
                            o = (0, x.Om)(() => (0, b.jh)(_, t.eventName.get())),
                            n = (0, x.Om)(() => (0, b.kC)(C, t.eventName.get())),
                            a = (0, x.Om)(() => (0, B.i)(t.eventName.get(), g.N7.HasBoxesView)),
                            s = (0, x.Om)(() => {
                                const e = o(),
                                    t = e.images,
                                    n = e.videos;
                                return (0, p.k)(t.background, n.background);
                            });
                        return Object.assign({}, t, {
                            computes: { resources: o, dynamicResources: n, backgroundData: s, settings: a },
                        });
                    },
                    ({ externalModel: e }) => ({
                        openInfoPage: e.createCallbackNoArgs('onInfoOpen'),
                        close: e.createCallbackNoArgs('onClose'),
                        buyBoxes: e.createCallbackNoArgs('onBuyBoxes'),
                    }),
                ),
                E = v[0],
                N = v[1];
            var k = o(9766),
                w = o(514),
                y = o(9480),
                I = o(1579),
                f = o(4037),
                h = o(845),
                T = o(9674),
                A = o(6974),
                V = o(8455);
            const H = 'Content_base_6c',
                G = 'Content_header_81',
                O = 'Content_wrapper_6f',
                L = 'Content_shadow_a1',
                S = 'Content_content_34',
                M = 'Content_noBoxes_b3',
                P = 'Content_tabs_a1',
                Q = 'Content_subTitle_23';
            var j = o(6483),
                D = o.n(j);
            const X = 'NoBoxesAsset_base_9a',
                z = ({ images: e, classNames: t = '' }) =>
                    a().createElement('div', { className: D()(X, t), style: { backgroundImage: `url(${e.noBoxes})` } }),
                R = (0, r.Pi)(() => {
                    const e = N(),
                        t = e.model,
                        o = e.controls,
                        n = t.boxesInfo.get(),
                        s = y.MH(n, 0).boxCategory,
                        c = t.useExternal.get(),
                        l = t.computes.resources(),
                        r = l.images,
                        i = l.texts,
                        u = t.computes.dynamicResources().dynamicTexts,
                        m = t.computes.settings().tabsGuaranteedCount,
                        d = n.length > 1,
                        x = d ? i.eventName : u.boxName.dynOpt(s),
                        g = () => {
                            w.hY.sound(T.Q.purchaseClick), o.buyBoxes();
                        };
                    return a().createElement(
                        'div',
                        { className: H },
                        a().createElement(A.h, { title: x, className: G }),
                        a().createElement(
                            'div',
                            { className: O },
                            a().createElement('div', { className: L }),
                            a().createElement(
                                'div',
                                { className: S },
                                r.noBoxes && a().createElement(z, { images: r, classNames: M }),
                                a().createElement(h.D, {
                                    text: a().createElement(k.z, { text: c ? i.descriptionCn : i.description }),
                                    alignType: h.M.Center,
                                    className: Q,
                                }),
                                c
                                    ? a().createElement(f.n, {
                                          text: i.buyBoxesButtonTextCn,
                                          icon: r.externalLink,
                                          onClick: g,
                                          soundHover: T.Q.purchaseHover,
                                      })
                                    : a().createElement(
                                          'div',
                                          null,
                                          a().createElement(I.X, {
                                              text: i.buyBoxesButtonText,
                                              onClick: g,
                                              soundHover: T.Q.purchaseHover,
                                          }),
                                      ),
                            ),
                            d &&
                                a().createElement(
                                    'div',
                                    { className: P },
                                    a().createElement(V.mQ, {
                                        tabs: n,
                                        texts: u.tabText,
                                        icons: {
                                            slotGlow: r.slotGlow,
                                            numberGlow: r.guaranteedGlowIcon,
                                            glowIcon: r.glowIcon,
                                            guaranteedIco: r.guaranteedIco,
                                        },
                                        tabsGuaranteedCount: m,
                                    }),
                                ),
                        ),
                    );
                }),
                $ = 'App_base_d8',
                q = 'App_layer_5f',
                W = 'App_infoButtons_24',
                Y = 'App_statsButton_91',
                F = 'App_closeButton_80',
                J = 'App_popover_43',
                K = { context: 'model.noBoxes.statistics' },
                U = (0, r.Pi)(() => {
                    const e = (0, n.useState)(!1),
                        t = e[0],
                        o = e[1],
                        s = N(),
                        r = s.model,
                        d = s.controls,
                        x = r.computes.resources(),
                        g = x.texts,
                        p = x.images,
                        B = r.useStats.get(),
                        b = r.computes.backgroundData();
                    return (
                        (0, l.I9)(d.close),
                        a().createElement(
                            'div',
                            { className: $ },
                            a().createElement(i.z, { className: q, layer: b, loop: !0, autoplay: !0 }),
                            a().createElement(
                                'div',
                                { className: W },
                                B &&
                                    a().createElement(u.g, {
                                        onClick: () => o(!0),
                                        className: Y,
                                        label: g.statsButton,
                                        icon: p.statsIcon,
                                    }),
                                a().createElement(c.A, {
                                    caption: g.infoButton,
                                    type: 'info',
                                    side: 'left',
                                    onClick: d.openInfoPage,
                                }),
                            ),
                            a().createElement(
                                'div',
                                { className: F },
                                a().createElement(c.A, {
                                    caption: g.closeButton,
                                    type: 'close',
                                    side: 'right',
                                    onClick: d.close,
                                }),
                            ),
                            a().createElement(R, null),
                            t &&
                                a().createElement(m.g, {
                                    options: K,
                                    onHidden: () => o(!1),
                                    isStatsEnabled: B,
                                    className: J,
                                }),
                        )
                    );
                }),
                Z = () => a().createElement(E, { options: s.f.NO_BOXES }, a().createElement(U, null));
        },
        4037: (e, t, o) => {
            o.d(t, { n: () => u });
            var n = o(3457),
                a = o(2106),
                s = o(6179),
                c = o.n(s);
            const l = 'BigButtonIco_button_a6',
                r = 'BigButtonIco_text_94',
                i = 'BigButtonIco_icon_10',
                u = ({ text: e, icon: t, onClick: o, soundHover: s = null }) =>
                    c().createElement(
                        n.u5,
                        { type: a.L.main, soundHover: s, onClick: o, mixClass: l },
                        c().createElement(
                            'span',
                            { className: r },
                            e,
                            c().createElement('span', { className: i, style: { backgroundImage: `url(${t})` } }),
                        ),
                    );
        },
        1579: (e, t, o) => {
            o.d(t, { X: () => i });
            var n = o(3457),
                a = o(2106),
                s = o(6179),
                c = o.n(s);
            const l = 'BigButton_button_76',
                r = 'BigButton_text_35',
                i = ({ text: e, onClick: t, soundHover: o = null }) =>
                    c().createElement(
                        n.u5,
                        { type: a.L.main, soundHover: o, onClick: t, mixClass: l },
                        c().createElement('span', { className: r }, e),
                    );
        },
    },
]);
