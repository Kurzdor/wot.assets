'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [824],
    {
        6482: (e, t, a) => {
            a.r(t), a.d(t, { default: () => ct });
            var r = a(6179),
                n = a.n(r),
                s = a(8958),
                i = a(295),
                o = a(8526),
                l = a(5521),
                c = a(5834),
                m = a(3403),
                d = a(7030),
                u = a(3597),
                g = a(198),
                p = a(6328),
                _ = a(9744),
                w = a(9210),
                y = a(6486),
                b = a(4736),
                h = a(3215),
                v = a(4598),
                x = a(9480),
                E = a(9174),
                f = a(3946),
                N = a(3905),
                S = a(9674),
                T = a(1440),
                C = a(7366),
                I = a(7672);
            const R = {
                    images: {
                        iconEmpty: 'entry_point.lootboxEmpty',
                        externalLink: 'common.externalLinkOrange',
                        previewIcon: 'awardViews.previewIcon',
                        compensationIcon: 'awardViews.compensationIcon',
                        glowIcon: 'awardViews.glow',
                        infoIcon: 'common.info',
                        guaranteedGlowIcon: 'awardViews.guaranteedGlow',
                        loader: 'common.waiting',
                    },
                    videos: {
                        compensationGlow: 'awardViews.compensationGlow',
                        rareGlow: 'awardViews.rareGlow',
                        rare: 'awardViews.raritySimpleAnimations.rare',
                        epic: 'awardViews.raritySimpleAnimations.epic',
                    },
                    texts: {
                        closeButton: 'common.closeButton',
                        multiplier: 'common.rewards.multiplier',
                        headerTitle: 'singleRewardView.header.title',
                        headerSubtitle: 'singleRewardView.header.subTitle',
                        guaranteedTitle: 'awardViews.guaranteedTitle.text',
                        guaranteedNextBox: 'awardViews.guaranteedTitle.nextBox',
                        quantityAvailableTitle: 'awardViews.quantityTitle.boxesAvailable',
                        quantityNoBoxesTitle: 'awardViews.quantityTitle.noBoxes',
                        extraRewardText: 'singleRewardView.extraReward.text',
                        uniqueTankmanText: 'singleRewardView.uniqueTankman',
                        footerOpenNextButton: 'singleRewardView.footer.openNextButton',
                        footerBackButton: 'awardViews.footer.backButton',
                        footerPurchaseButtonText: 'awardViews.footer.purchaseButtonText',
                        footerPurchaseButtonTextCn: 'awardViews.footer.purchaseButtonTextCn',
                        checkbox: 'awardViews.footer.checkbox',
                        loader: 'common.loader',
                        rareOverlayButtonContinue: 'rareRewardOverlay.rewardDescription.button.text',
                        rareOverlayTitle: 'rareRewardOverlay.rewardDescription.title.text',
                        rareOverlayStyleTitle: 'rareRewardOverlay.rewardDescription.style.text',
                        rareOverlayStyleDescription: 'rareRewardOverlay.rewardDescription.style.description.text',
                    },
                },
                B = {
                    dynamicVideos: { boxesOpening: 'awardViews.openingBoxVideo' },
                    dynamicTexts: {
                        rewardsPremiumDay: 'infoPage.rewards.premiumDay',
                        boxCategory: 'common.boxCategory.lowerCase',
                    },
                    dynamicImages: { boxesOpening: 'awardViews.openingBox' },
                },
                G = (0, h.q)()(
                    ({ observableModel: e }) => {
                        const t = Object.assign(
                                { root: e.object() },
                                e.primitives(['eventName', 'isAnimationActive', 'isAwaitingResponse', 'isReopen']),
                                {
                                    bonuses: e.array('bonuses.items'),
                                    extraBonuses: e.array('extraBonuses.items'),
                                    activeRareReward: E.LO.box(null),
                                },
                            ),
                            a = (0, f.Om)(() => (0, C.jh)(R, t.root.get().eventName), { equals: v.jv }),
                            r = (0, f.Om)(() => (0, C.kC)(B, t.root.get().eventName), { equals: v.jv }),
                            n = (0, f.Om)(() => (0, T.i)(t.root.get().eventName, N.N7.Rewards), { equals: v.jv }),
                            s = (0, f.Om)(() => x.G(t.bonuses.get(), (e) => (0, I.y)(e)), { equals: v.jv }),
                            i = (0, f.Om)(() => {
                                const e = t.root.get().boxCategory,
                                    a = `${e}_${b.G.Common}`,
                                    n = `${e}_${b.G.Rare}`,
                                    s = r().dynamicVideos.boxesOpening.dynOpt(a, b.G.Common),
                                    i = r().dynamicVideos.boxesOpening.dynOpt(n, b.G.Rare),
                                    o = r().dynamicImages.boxesOpening.dynOpt(a, b.G.Common),
                                    l = r().dynamicImages.boxesOpening.dynOpt(n, b.G.Rare);
                                return {
                                    [y.e.common]: { video: s, image: o, sound: S.Q.open },
                                    [y.e.rare]: { video: i, image: l, sound: S.Q.openRare },
                                };
                            });
                        return Object.assign({}, t, {
                            computes: {
                                resources: a,
                                dynamicResources: r,
                                settings: n,
                                hasRareReward: s,
                                multimediaResource: i,
                            },
                        });
                    },
                    ({ externalModel: e, model: t }) => ({
                        goPreview: e.createCallback((e) => e, 'onPreview'),
                        openNext: e.createCallbackNoArgs('onOpen'),
                        goBack: e.createCallbackNoArgs('onGoBack'),
                        close: e.createCallbackNoArgs('onClose'),
                        buyBoxes: e.createCallbackNoArgs('onBuyBoxes'),
                        toggleAnimationState: e.createCallback(
                            (e) => ({ isAnimationActive: !e }),
                            'onAnimationStateChanged',
                        ),
                        setIsVideoPlaying: e.createCallback((e) => ({ isPlaying: e }), 'onVideoPlaying'),
                        setActiveRareReward: (0, E.aD)((e) => t.activeRareReward.set(e)),
                        clearActiveRareReward: (0, E.aD)(() => t.activeRareReward.set(null)),
                    }),
                ),
                k = G[0],
                A = G[1];
            var z = a(6483),
                O = a.n(z),
                H = a(8844),
                V = a(9766),
                P = a(8089),
                D = a(7522),
                W = a(5959),
                $ = a(5415),
                q = a(8821),
                K = a(9605),
                Z = a(9221),
                J = a(6974),
                j = a(4561),
                Q = a(2369),
                L = a(2862),
                M = a(2056),
                X = a(114);
            const U = 'ExtraRewards_base_9b',
                F = 'ExtraRewards_extraRewardsWrapper_a2',
                Y = 'ExtraRewards_text_f5',
                ee = 'ExtraRewards_extraIcon_2e',
                te = { opacity: 0, filter: 'brightness(2)' },
                ae = { opacity: 1, filter: 'brightness(1)' },
                re = {
                    to: [{ opacity: 1, filter: 'brightness(2)' }, ae],
                    config: { duration: 600, easing: D.Z.easeInOutCubic },
                    onRest: () => {
                        g.Kg.send({ type: g.QK.toPage });
                    },
                },
                ne = (0, m.Pi)(({ className: e }) => {
                    const t = A().model,
                        a = (0, $.GS)().mediaSize,
                        s = (0, i.v)(g.Kg, (e) => e.value),
                        o = t.computes.resources().texts,
                        l = t.extraBonuses.get(),
                        c = (0, d.useSpring)(() => ({ from: te })),
                        m = c[0],
                        u = c[1];
                    return (
                        (0, r.useEffect)(() => {
                            switch (s) {
                                case g.B1.skip:
                                    u.set(ae);
                                    break;
                                case g.B1.preparation:
                                    u.set(te);
                                    break;
                                case g.B1.extra:
                                    u.start(re);
                            }
                        }, [s, u]),
                        n().createElement(
                            d.animated.div,
                            { style: m, className: O()(U, e) },
                            n().createElement('div', { className: Y }, o.extraRewardText),
                            n().createElement(
                                'div',
                                { className: F },
                                x.UI(l, (e, t) =>
                                    n().createElement(
                                        M.u,
                                        {
                                            ignoreShowDelay: !0,
                                            contentId: Number(e.tooltipContentId),
                                            args: { tooltipId: e.tooltipId },
                                            key: t + e.name,
                                        },
                                        n().createElement('div', {
                                            className: ee,
                                            style: {
                                                backgroundImage: `url(${(0, X.r)(e, a >= $.cJ.Medium ? L.h2.Big : L.h2.Small)})`,
                                            },
                                        }),
                                    ),
                                ),
                            ),
                        )
                    );
                });
            var se = a(6366),
                ie = a(514),
                oe = a(3633),
                le = a(6845),
                ce = a(4401),
                me = a(9182),
                de = a(7039),
                ue = a(46),
                ge = a(9108);
            const pe = { opacity: 0, transform: 'scale(0.96)', filter: 'brightness(1.5)', immediate: !0 },
                _e = { opacity: 0, transform: 'scale(0.96)', filter: 'brightness(1.5)' },
                we = { opacity: 1, transform: 'scale(1)', filter: 'brightness(1)' },
                ye = (e, t, a, r = v.ZT) => {
                    t[e].start({
                        to: { opacity: 1, transform: 'scale(1.02)', filter: 'brightness(1.5)' },
                        config: { duration: 200, easing: D.Z.easeOutCubic },
                        onRest: a,
                        onStart: r,
                    });
                },
                be = (e, t, a) => {
                    t[e].start({ to: we, config: { duration: 400, easing: D.Z.easeInOutCubic }, onRest: a });
                },
                he = { display: 'none' },
                ve = { display: 'flex' },
                xe = (e, t) => {
                    t[e].start({ from: { opacity: 0 }, config: { duration: 0 } });
                },
                Ee = { opacity: 0, display: 'flex' },
                fe = {
                    opacity: 1,
                    transform: 'scale(1.06) rotateZ(0deg)',
                    filter: 'brightness(1.5)',
                    visibility: 'hidden',
                },
                Ne = {
                    opacity: 1,
                    transform: 'scale(1) rotateZ(0deg)',
                    filter: 'brightness(1)',
                    visibility: 'visible',
                },
                Se = {
                    extraLarge: {
                        rewardWidth: '600rem',
                        rewardHeight: '450rem',
                        compensationIconWidth: '36rem',
                        compensationIconHeight: '36rem',
                        countHeight: '36rem',
                        nameHeight: '22rem',
                        descriptionHeight: '20rem',
                        glowSize: '780rem',
                        imageSize: L.h2.S600x450,
                        rareGlowSize: '780rem',
                        rareVideoSize: '512rem',
                    },
                    large: {
                        rewardWidth: '400rem',
                        rewardHeight: '300rem',
                        compensationIconWidth: '36rem',
                        compensationIconHeight: '36rem',
                        countHeight: '28rem',
                        nameHeight: '18rem',
                        descriptionHeight: '16rem',
                        glowSize: '520rem',
                        imageSize: L.h2.S600x450,
                        rareGlowSize: '520rem',
                        rareVideoSize: '512rem',
                    },
                    medium: {
                        rewardWidth: '296rem',
                        rewardHeight: '222rem',
                        compensationIconWidth: '36rem',
                        compensationIconHeight: '36rem',
                        countHeight: '24rem',
                        nameHeight: '18rem',
                        descriptionHeight: '16rem',
                        glowSize: '386rem',
                        imageSize: L.h2.S600x450,
                        rareGlowSize: '386rem',
                        rareVideoSize: '440rem',
                    },
                    small: {
                        rewardWidth: '232rem',
                        rewardHeight: '174rem',
                        compensationIconWidth: '24rem',
                        compensationIconHeight: '24rem',
                        countHeight: '22rem',
                        nameHeight: '15rem',
                        descriptionHeight: '14rem',
                        glowSize: '302rem',
                        imageSize: L.h2.S600x450,
                        rareGlowSize: '302rem',
                        rareVideoSize: '384rem',
                    },
                    extraSmall: {
                        rewardWidth: '180rem',
                        rewardHeight: '135rem',
                        compensationIconWidth: '24rem',
                        compensationIconHeight: '24rem',
                        countHeight: '18rem',
                        nameHeight: '15rem',
                        descriptionHeight: '14rem',
                        glowSize: '238rem',
                        imageSize: L.h2.S600x450,
                        rareGlowSize: '238rem',
                        rareVideoSize: '256rem',
                    },
                },
                Te = (e, t) => {
                    switch (!0) {
                        case (e >= 3 && 1 === t) || (e >= 4 && [1, e - 2].includes(t)):
                            return -40;
                        case (5 === e && 2 === t) || (6 === e && [2, e - 3].includes(t)):
                            return -80;
                        default:
                            return 0;
                    }
                },
                Ce = {
                    base: 'CompensationTitle_base_34',
                    name: 'CompensationTitle_name_1a',
                    label: 'CompensationTitle_label_47',
                    base__credits: 'CompensationTitle_base__credits_c8',
                    base__gold: 'CompensationTitle_base__gold_b4',
                    base__premium_plus: 'CompensationTitle_base__premium_plus_b8',
                    base__crystal: 'CompensationTitle_base__crystal_1d',
                    pluralText: 'CompensationTitle_pluralText_cf',
                },
                Ie = ({ reward: e, style: t, className: a = '' }) => {
                    const r = e.name,
                        s = e.label,
                        i = e.value;
                    return n().createElement(
                        'div',
                        { className: O()(Ce.base, Ce[`base__${r}`], a) },
                        n().createElement('div', { className: Ce.name, style: { fontSize: t.nameHeight } }, s),
                        n().createElement(
                            'div',
                            { className: Ce.label, style: { fontSize: t.descriptionHeight } },
                            n().createElement(V.z, { text: (0, ce.QH)(i) }),
                        ),
                    );
                },
                Re = {
                    base: 'Title_base_cc',
                    title: 'Title_title_c6',
                    description: 'Title_description_4e',
                    name: 'Title_name_5d',
                    base__credits: 'Title_base__credits_13',
                    base__gold: 'Title_base__gold_8c',
                    base__premium_plus: 'Title_base__premium_plus_a6',
                    base__freeXP: 'Title_base__freeXP_75',
                    base__crystal: 'Title_base__crystal_07',
                    pluralText: 'Title_pluralText_81',
                    label: 'Title_label_d9',
                    text: 'Title_text_7f',
                },
                Be = (0, m.Pi)(({ reward: e, style: t, className: a }) => {
                    const r = A().model,
                        s = r.computes.dynamicResources().dynamicTexts,
                        i = r.computes.resources().texts,
                        o = e.name,
                        l = e.value,
                        c = e.label,
                        m = e.description,
                        d = o === L.E4.PremiumPlus;
                    return n().createElement(
                        'div',
                        { className: O()(Re.base, Re[`base__${o}`], a) },
                        m &&
                            n().createElement(
                                'div',
                                { className: Re.description },
                                n().createElement(
                                    'div',
                                    { className: Re.label, style: { fontSize: t.descriptionHeight } },
                                    n().createElement(V.z, { text: m }),
                                ),
                            ),
                        n().createElement(
                            'div',
                            {
                                className: O()(l ? Re.label : Re.name),
                                style: { fontSize: l ? t.descriptionHeight : t.nameHeight },
                            },
                            n().createElement(V.z, {
                                text: l && o === L.E4.TmanToken ? i.uniqueTankmanText : c,
                                classMix: Re.text,
                            }),
                        ),
                        l &&
                            n().createElement(
                                'div',
                                { className: Re.title },
                                n().createElement(
                                    'div',
                                    { className: Re.name, style: { fontSize: t.nameHeight } },
                                    n().createElement(V.z, { text: (0, ce.QH)(l && o === L.E4.TmanToken ? c : l) }),
                                ),
                                d &&
                                    n().createElement(
                                        'span',
                                        { className: Re.pluralText, style: { fontSize: t.nameHeight } },
                                        s.rewardsPremiumDay.plural('premiumDay', Number(l.split(' ').at(-1))),
                                    ),
                            ),
                    );
                }),
                Ge = 'Rewards_base_b8',
                ke = 'Rewards_base__small_69',
                Ae = 'Rewards_rewardsWrapper_81',
                ze = 'Rewards_compensationReward_3f',
                Oe = 'Rewards_compensationIcon_39',
                He = 'Rewards_loupe_78',
                Ve = 'Rewards_loupe__ready_ad',
                Pe = 'Rewards_rareVideo_47',
                De = 'Rewards_video_8b',
                We = 'Rewards_rareGlow_bb',
                $e = (e) => e + 1,
                qe = (e, t, a) => (0, r.useMemo)(() => (0, me.Nj)(e, t), [e, t, a]),
                Ke = (0, m.Pi)(({ className: e, resume: t }) => {
                    const a = A(),
                        s = a.model,
                        o = a.controls,
                        l = (0, $.GS)().mediaSize,
                        m = s.eventName.get(),
                        u = s.bonuses.get(),
                        p = u.length,
                        _ = s.computes.resources(),
                        w = _.images,
                        y = _.videos,
                        b = _.texts,
                        h = s.extraBonuses.get().length,
                        v = l === $.cJ.ExtraSmall && p > 4,
                        E = (0, r.useState)(0),
                        f = E[0],
                        N = E[1],
                        T = (0, r.useState)(''),
                        C = T[0],
                        R = T[1],
                        B = (0, r.useState)(-1),
                        G = B[0],
                        k = B[1],
                        z = (0, i.v)(g.Kg, (e) => e.value),
                        H = (0, r.useRef)(0),
                        V = ((e, t) => {
                            switch (!0) {
                                case e === $.cJ.ExtraLarge && t < 4:
                                    return Se.extraLarge;
                                case (e === $.cJ.ExtraLarge && t > 3) ||
                                    (e === $.cJ.Medium && t < 4) ||
                                    (e === $.cJ.Large && t < 5):
                                    return Se.large;
                                case (e === $.cJ.Large && t > 4) ||
                                    (e === $.cJ.Medium && t < 6 && t > 3) ||
                                    ((e === $.cJ.Small || e === $.cJ.ExtraSmall) && t < 4):
                                    return Se.medium;
                                case (e === $.cJ.Medium && 6 === t) ||
                                    (e === $.cJ.Small && t < 6 && t > 3) ||
                                    (e === $.cJ.ExtraSmall && 4 === t):
                                    return Se.small;
                                default:
                                    return Se.extraSmall;
                            }
                        })(l, p),
                        P = qe(p, pe, f),
                        D = qe(p, _e, f),
                        W = qe(p, fe, f),
                        q = qe(p, he, f),
                        Z = qe(p, Ee, f),
                        J = (e) => {
                            if (e < p - 1) F(e + 1);
                            else {
                                const e = h > 0 ? g.QK.toExtra : g.QK.toPage;
                                g.Kg.send({ type: e });
                            }
                        },
                        j = (e) => {
                            xe(e, P),
                                xe(e, D),
                                ((e, t) => {
                                    t[e].start({ from: ve, config: { duration: 0 } });
                                })(e, q),
                                ((e, t, a) => {
                                    t[e].start({
                                        to: [
                                            {
                                                opacity: 1,
                                                transform: 'scale(1.06) rotateZ(0deg)',
                                                filter: 'brightness(1.5)',
                                                visibility: 'visible',
                                            },
                                            Ne,
                                        ],
                                        config: { duration: 500 },
                                        onRest: a,
                                    }),
                                        ie.hY.sound(S.Q.compensationAppear);
                                })(e, W, () => J(e));
                        },
                        Q = (e) => {
                            var t;
                            const a = null == (t = x.U2(u, e)) ? void 0 : t.isCompensation;
                            be(e, P, () => {
                                a
                                    ? ((e) => {
                                          ((e, t, a) => {
                                              t[e].start({
                                                  to: [
                                                      {
                                                          opacity: 1,
                                                          transform: 'scale(1) rotateZ(0.25deg)',
                                                          filter: 'brightness(1.07)',
                                                      },
                                                      {
                                                          opacity: 1,
                                                          transform: 'scale(1.01) rotateZ(-0.5deg)',
                                                          filter: 'brightness(1.14)',
                                                      },
                                                      {
                                                          opacity: 1,
                                                          transform: 'scale(1.02) rotateZ(0.75deg)',
                                                          filter: 'brightness(1.21)',
                                                      },
                                                      {
                                                          opacity: 1,
                                                          transform: 'scale(1.03) rotateZ(-0.75deg)',
                                                          filter: 'brightness(1.28)',
                                                      },
                                                      {
                                                          opacity: 1,
                                                          transform: 'scale(1.04) rotateZ(1deg)',
                                                          filter: 'brightness(1.35)',
                                                      },
                                                      {
                                                          opacity: 1,
                                                          transform: 'scale(1.05) rotateZ(-1deg)',
                                                          filter: 'brightness(1.42)',
                                                      },
                                                      {
                                                          opacity: 1,
                                                          transform: 'scale(1.06) rotateZ(0deg)',
                                                          filter: 'brightness(1.5)',
                                                      },
                                                  ],
                                                  config: { duration: 120 },
                                                  onRest: a,
                                              });
                                          })(e, P, () => j(e)),
                                              ((e, t) => {
                                                  t[e].start({
                                                      to: [
                                                          { opacity: 0.6, display: 'flex' },
                                                          { opacity: 0, display: 'flex' },
                                                          { opacity: 0, display: 'none' },
                                                      ],
                                                      config: { duration: 1e3 },
                                                  });
                                              })(e, Z);
                                      })(e)
                                    : J(e);
                            });
                        },
                        U = (e) => {
                            ye(
                                e,
                                P,
                                () => Q(e),
                                () => ie.hY.sound(S.Q.rewardAppear),
                            );
                        },
                        F = (e) => {
                            if (!p) return void J(e);
                            const t = x.U2(u, e);
                            if (t && (0, I.y)(t))
                                return (
                                    (H.current = e),
                                    void ((0, K.C)(m, t.specialAwardName)
                                        ? (o.setActiveRareReward(t),
                                          P[e].start({ to: we, immediate: !0, delay: 500 }),
                                          D[e].start({ to: we, immediate: !0, delay: 500 }))
                                        : k(e))
                                );
                            U(e),
                                ye(e, D, () => {
                                    be(e, D);
                                });
                        },
                        Y = () => {
                            U(H.current),
                                ye(H.current, D, () => {
                                    be(H.current, D);
                                });
                        };
                    return (
                        (0, r.useEffect)(() => {
                            switch ((0, c.P)(z)) {
                                case g.B1.skip:
                                    x.UI(u, (e, t) => {
                                        e.isCompensation ? (W[t].set(Ne), q[t].set(ve)) : (P[t].set(we), D[t].set(we));
                                    });
                                    break;
                                case g.Az:
                                case g.A_:
                                    N($e), (H.current = 0);
                                    break;
                                case g.B1.rewards:
                                    F(H.current);
                            }
                        }, [z]),
                        (0, r.useEffect)(() => {
                            t.active && (J(H.current), t.reset());
                        }, [t]),
                        n().createElement(
                            'div',
                            { className: O()(Ge, v && ke, e), key: f },
                            x.UI(u, (e, t) => {
                                const a = e.tooltipId,
                                    r = e.tooltipContentId,
                                    s = e.name === L.E4.Vehicles;
                                return n().createElement(
                                    'div',
                                    { key: e.name + t, style: { marginTop: v ? 0 : `${Te(p, t)}rem` }, className: Ae },
                                    n().createElement(
                                        M.u,
                                        {
                                            ignoreShowDelay: !0,
                                            contentId: Number(r),
                                            args: { tooltipId: a, boxCategory: e.icon },
                                            isEnabled: z === g.B1.initial,
                                        },
                                        n().createElement(
                                            'div',
                                            null,
                                            e.isCompensation &&
                                                n().createElement(
                                                    'div',
                                                    {
                                                        className: ze,
                                                        style: { width: V.rewardWidth, height: V.rewardHeight },
                                                    },
                                                    n().createElement(
                                                        d.animated.div,
                                                        { style: Z[t].springs, className: De },
                                                        n().createElement(se.n, {
                                                            style: { width: V.glowSize, height: V.glowSize },
                                                            src: y.compensationGlow,
                                                            autoplay: !0,
                                                            loop: !0,
                                                        }),
                                                    ),
                                                    n().createElement(
                                                        d.animated.div,
                                                        { style: W[t].springs },
                                                        n().createElement(ge._, {
                                                            icon: (0, X.r)(e, L.h2.S600x450, e.isCompensation),
                                                            sizes: { height: V.rewardHeight, width: V.rewardWidth },
                                                        }),
                                                    ),
                                                    n().createElement(
                                                        d.animated.div,
                                                        { style: q[t].springs },
                                                        n().createElement(Ie, { reward: e.compensation, style: V }),
                                                        n().createElement(ge._, {
                                                            className: Oe,
                                                            icon: w.compensationIcon,
                                                            sizes: {
                                                                height: V.compensationIconHeight,
                                                                width: V.compensationIconWidth,
                                                            },
                                                        }),
                                                    ),
                                                ),
                                            (0, I.y)(e) &&
                                                n().createElement(
                                                    d.animated.div,
                                                    {
                                                        style: {
                                                            opacity: P[t].springs.opacity,
                                                            width: V.rareGlowSize,
                                                            height: V.rareGlowSize,
                                                        },
                                                        className: De,
                                                    },
                                                    n().createElement(se.n, {
                                                        className: We,
                                                        src: y.rareGlow,
                                                        autoplay: !0,
                                                        loop: !0,
                                                    }),
                                                ),
                                            n().createElement(
                                                d.animated.div,
                                                { style: P[t].springs },
                                                n().createElement(ue.Q, {
                                                    reward: e,
                                                    sizes: V,
                                                    countText: b.multiplier,
                                                    currentAnimationState: z,
                                                    hover: { state: C, setState: R },
                                                }),
                                            ),
                                            n().createElement(
                                                d.animated.div,
                                                { style: D[t].springs },
                                                s
                                                    ? n().createElement(le.U, { reward: e, style: V })
                                                    : n().createElement(Be, { reward: e, style: V }),
                                            ),
                                            (0, ce.XM)(e) &&
                                                !e.isCompensation &&
                                                n().createElement(
                                                    d.animated.div,
                                                    {
                                                        style: D[t].springs,
                                                        className: O()(He, z === g.B1.initial && Ve),
                                                    },
                                                    n().createElement(oe.k, {
                                                        icon: { img: w.previewIcon },
                                                        onClick: () =>
                                                            o.goPreview({
                                                                bonusType: e.name,
                                                                bonusId: e.id ? e.id : '',
                                                                styleID: e.styleID,
                                                            }),
                                                    }),
                                                ),
                                            (0, I.y)(e) &&
                                                n().createElement(de.s, {
                                                    className: Pe,
                                                    style: { width: V.rareVideoSize, height: V.rareVideoSize },
                                                    rarity: e.rarity,
                                                    src: y[e.rarity],
                                                    show: t === G,
                                                    timer: { remainder: 0.4, next: Y },
                                                    onEnded: () => k(-1),
                                                }),
                                        ),
                                    ),
                                );
                            }),
                        )
                    );
                }),
                Ze = 'Content_base_8b',
                Je = 'Content_rareOverlay_58',
                je = 'Content_headerBlock_97',
                Qe = 'Content_closeButton_77',
                Le = 'Content_header_e9',
                Me = 'Content_rewardsPosition_f3',
                Xe = 'Content_extraRewards_79',
                Ue = 'Content_footer_17',
                Fe = 'Content_checkbox_ca',
                Ye = { opacity: 0, display: 'none' },
                et = { opacity: 1, display: 'flex' },
                tt = {
                    to: et,
                    config: { duration: 500, easing: D.Z.easeOutCubic },
                    onRest: () => {
                        g.Kg.send({ type: g.QK.toInitial });
                    },
                },
                at = (0, m.Pi)(() => {
                    const e = A(),
                        t = e.model,
                        a = e.controls,
                        s = t.root.get(),
                        o = s.boxCategory,
                        l = s.boxesCount,
                        m = s.boxesCountToGuaranteed,
                        u = s.useExternal,
                        p = s.isWindowAccessible,
                        _ = t.isAnimationActive.get(),
                        w = t.computes.settings().accentCount,
                        y = t.computes.resources(),
                        b = y.texts,
                        h = y.images,
                        v = t.computes.dynamicResources().dynamicTexts,
                        x = t.extraBonuses.get().length,
                        E = t.activeRareReward.get(),
                        f = t.eventName.get(),
                        N = (0, r.useState)(!1),
                        S = N[0],
                        T = N[1],
                        C = (0, $.GS)().mediaSize,
                        I = (0, i.v)(g.Kg, (e) => e.value),
                        R = (0, d.useSpring)(() => ({ from: Ye })),
                        B = R[0],
                        G = R[1],
                        k = { boxesToGuaranteed: m, accent: w },
                        z = { title: b.guaranteedTitle, nextBox: b.guaranteedNextBox },
                        D = { glow: h.glowIcon, info: h.infoIcon, strongGlow: h.guaranteedGlowIcon };
                    (0, r.useEffect)(() => {
                        switch ((0, c.P)(I)) {
                            case g.mB:
                                G.set(Ye);
                                break;
                            case g.B1.skip:
                                G.set(et);
                                break;
                            case g.B1.page:
                                G.start(tt);
                        }
                    }, [I]);
                    const L = { active: S, reset: (0, r.useCallback)(() => T(!1), []) },
                        M = (0, r.useCallback)(() => {
                            a.clearActiveRareReward(), T(!0);
                        }, [a]);
                    return n().createElement(
                        'div',
                        { className: Ze },
                        Boolean(E) &&
                            (0, K.C)(f, null == E ? void 0 : E.specialAwardName) &&
                            n().createElement(
                                'div',
                                { className: Je },
                                n().createElement(Q.H, {
                                    res: (0, K.D)(f, null == E ? void 0 : E.specialAwardName),
                                    rareBonus: E,
                                    texts: b,
                                    controls: {
                                        onClose: M,
                                        onPlay: () => a.setIsVideoPlaying(!0),
                                        onEnded: () => a.setIsVideoPlaying(!1),
                                    },
                                    minimized: !p,
                                }),
                            ),
                        n().createElement(
                            d.animated.div,
                            { style: B, className: je },
                            n().createElement(J.h, {
                                title: b.headerTitle,
                                subTitle:
                                    o &&
                                    n().createElement(V.z, {
                                        text: b.headerSubtitle,
                                        binding: { name: v.boxCategory.dynOpt(o) },
                                    }),
                                className: Le,
                            }),
                            n().createElement(
                                'div',
                                { className: Qe },
                                n().createElement(P.A, {
                                    caption: b.closeButton,
                                    type: 'close',
                                    side: 'right',
                                    onClick: a.close,
                                }),
                            ),
                        ),
                        n().createElement(Ke, { resume: L, className: O()(x > 0 && Me) }),
                        x > 0 && n().createElement(ne, { className: Xe }),
                        n().createElement(
                            d.animated.div,
                            { style: B, className: Ue },
                            n().createElement(Z.r, { counts: k, texts: z, icons: D, category: o }),
                            W.graphicsQuality.isHigh() &&
                                n().createElement(q.o, {
                                    isActive: _,
                                    onClick: () => {
                                        a.toggleAnimationState(_);
                                    },
                                    className: Fe,
                                    text: b.checkbox,
                                    size: C >= $.cJ.Medium ? H.yB.extraLarge : H.yB.large,
                                }),
                            n().createElement(j.Z, {
                                texts: b,
                                images: h,
                                actions: Object.assign({}, a, {
                                    openNext: () => {
                                        g.Kg.send({ type: g.QK.toPreparation });
                                    },
                                }),
                                boxesCount: l,
                                useExternal: u,
                            }),
                        ),
                    );
                }),
                rt = 'App_base_ae',
                nt = 'App_background_53',
                st = 'App_loader_e0',
                it = 'App_content_0d',
                ot = 'App_loaderWrapper_34',
                lt = (0, m.Pi)(() => {
                    const e = A(),
                        t = e.model,
                        a = e.controls,
                        s = t.computes.resources(),
                        m = s.images,
                        b = s.texts,
                        h = t.root.get().isWindowAccessible,
                        v = t.isAnimationActive.get(),
                        x = t.isAwaitingResponse.get(),
                        E = t.computes.hasRareReward(),
                        f = t.computes.multimediaResource(),
                        N = t.isReopen.get(),
                        S = (0, i.v)(g.Kg, (e) => e.value);
                    (0, o.gd)(
                        l.n.ESCAPE,
                        () => {
                            S === g.B1.initial && a.close();
                        },
                        !0,
                    ),
                        (0, r.useEffect)(
                            () => (
                                g.Kg.start(),
                                () => {
                                    g.Kg.stop();
                                }
                            ),
                            [],
                        ),
                        (0, r.useEffect)(() => {
                            g.Kg.send({ type: g.QK.setAnimationActive, isAnimationActive: v });
                        }, [v]),
                        (0, w.s)(N, x, S);
                    const T = (0, _.H)(S, a.openNext),
                        C = T.loadingStyle,
                        I = T.contentStyle;
                    return n().createElement(
                        'div',
                        { className: rt },
                        n().createElement(p.F, {
                            activeType: E ? y.e.rare : y.e.common,
                            minimized: !h,
                            res: f,
                            className: nt,
                            onPlay: () => a.setIsVideoPlaying(!0),
                            onEnded: () => a.setIsVideoPlaying(!1),
                        }),
                        (0, c.P)(S) !== g.A_ &&
                            n().createElement(d.animated.div, { style: I, className: it }, n().createElement(at, null)),
                        S === g.B1.waiting &&
                            n().createElement(
                                d.animated.div,
                                { style: C, className: ot },
                                n().createElement(u.a, { text: b.loader, img: m.loader, className: st }),
                            ),
                    );
                }),
                ct = () => n().createElement(k, { options: s.f.SINGLE_REWARD }, n().createElement(lt, null));
        },
        7509: (e, t, a) => {
            a.d(t, { t: () => u });
            var r = a(6483),
                n = a.n(r),
                s = a(6179),
                i = a.n(s);
            const o = 'GuaranteedNumber_base_73',
                l = 'GuaranteedNumber_countBg_cd',
                c = 'GuaranteedNumber_count_e3',
                m = 'GuaranteedNumber_glow_85',
                d = 'GuaranteedNumber_glow__reverse_7b',
                u = ({
                    boxesCountToGuaranteed: e,
                    glowIcon: t,
                    strongGlowIcon: a,
                    accentCount: r,
                    className: s = '',
                }) =>
                    i().createElement(
                        'div',
                        { className: n()(o, s) },
                        i().createElement('div', { className: l, style: { backgroundImage: `url(${a})` } }),
                        e <= r &&
                            i().createElement(
                                i().Fragment,
                                null,
                                i().createElement('div', { className: m, style: { backgroundImage: `url(${t})` } }),
                                i().createElement('div', {
                                    className: n()(m, d),
                                    style: { backgroundImage: `url(${t})` },
                                }),
                            ),
                        i().createElement('div', { className: c }, e),
                    );
        },
        9221: (e, t, a) => {
            a.d(t, { r: () => w });
            var r = a(6483),
                n = a.n(r),
                s = a(9766),
                i = a(2056),
                o = a(6179),
                l = a.n(o),
                c = a(7509);
            const m = 'GuaranteedTitle_base_28',
                d = 'GuaranteedTitle_wrapper_36',
                u = 'GuaranteedTitle_nextGuaranteedBox_31',
                g = 'GuaranteedTitle_countBg_b7',
                p = 'GuaranteedTitle_info_49',
                _ = R.views.lobby.lootbox_system,
                w = ({ counts: e, texts: t, icons: a, category: r, className: o }) =>
                    l().createElement(
                        'div',
                        { className: n()(m, o) },
                        l().createElement(
                            i.u,
                            { contentId: _.tooltips.GuaranteedRewardInfoTooltip('resId'), args: { category: r } },
                            l().createElement(
                                'div',
                                { className: d },
                                e.boxesToGuaranteed > 1
                                    ? l().createElement(s.z, {
                                          text: t.title,
                                          binding: {
                                              count: l().createElement(c.t, {
                                                  boxesCountToGuaranteed: e.boxesToGuaranteed,
                                                  glowIcon: a.glow,
                                                  strongGlowIcon: a.strongGlow,
                                                  accentCount: e.accent,
                                              }),
                                          },
                                      })
                                    : l().createElement(
                                          'div',
                                          { className: u },
                                          l().createElement('div', {
                                              className: g,
                                              style: { backgroundImage: `url(${a.strongGlow})` },
                                          }),
                                          t.nextBox,
                                      ),
                                l().createElement('div', {
                                    className: p,
                                    style: { backgroundImage: `url(${a.info})` },
                                }),
                            ),
                        ),
                    );
        },
        6845: (e, t, a) => {
            a.d(t, { U: () => u });
            var r = a(6483),
                n = a.n(r),
                s = a(5415),
                i = a(9690),
                o = a(6179),
                l = a.n(o),
                c = a(3905);
            const m = { base: 'TankName_base_14', type: 'TankName_type_49' },
                d = (e, t, a) => ({
                    backgroundImage: `url(${`R.images.gui.maps.icons.vehicleTypes.${a ? 'c_48x48' : 'c_24x24'}.${`${e.replace('-', '_')}${t ? '_elite' : ''}`}`})`,
                }),
                u = ({ reward: e, style: t, className: a = '', usagePlace: r }) => {
                    const o = (0, s.GS)().mediaSize,
                        u = e.label,
                        g = e.level,
                        p = e.type,
                        _ = e.isElite,
                        w = e.vehicleShortName;
                    return l().createElement(
                        'div',
                        { className: n()(m.base, a), style: { fontSize: t.nameHeight } },
                        void 0 !== g && l().createElement('div', { className: m.level }, (0, i.HG)(g)),
                        void 0 !== p &&
                            void 0 !== _ &&
                            l().createElement('div', { className: m.type, style: d(p, _, o >= s.cJ.Medium) }),
                        l().createElement('div', null, r === c.qA.InfoPage ? w : u),
                    );
                };
        },
        8043: (e, t, a) => {
            a.d(t, { e: () => r });
            const r = {
                icon: { emptyIconBrightness: 0.3, boxesIconBrightness: 0.3 },
                shine: { opacityCustom: 0.15, opacityCustomNewBox: 0.4, opacityDiff: 0.15, animationDuration: '40s' },
            };
        },
        1717: (e, t, a) => {
            a.d(t, { X: () => r });
            const r = {
                hasIdle: !0,
                vignette: { isEnabled: !0, opacity: 0.4 },
                tabsGuaranteedCount: 10,
                accentCount: 5,
                hoverZone: { width: '38%', height: '39%', horizontalOffset: '30.8%', verticalOffset: '39%' },
                backgroundColor: '#111',
            };
        },
        4201: (e, t, a) => {
            a.d(t, { g: () => o });
            var r = a(8043),
                n = a(1717),
                s = a(5696),
                i = a(5e3);
            const o = { ENTRY_POINT: r.e, HAS_BOXES_VIEW: n.X, INFO_PAGE: s.q, REWARDS: i.O };
        },
        5696: (e, t, a) => {
            a.d(t, { q: () => r });
            const r = { hasDescription: !0 };
        },
        5e3: (e, t, a) => {
            a.d(t, { O: () => r });
            const r = { accentCount: 5 };
        },
        9606: (e, t, a) => {
            a.d(t, { e: () => r });
            const r = { icon: { emptyIconBrightness: 0.2 } };
        },
        2735: (e, t, a) => {
            a.d(t, { X: () => r });
            const r = { hasIdle: !1, tabsGuaranteedCount: 5 };
        },
        5096: (e, t, a) => {
            a.d(t, { j: () => i });
            var r = a(9606),
                n = a(2735),
                s = a(4607);
            const i = { ENTRY_POINT: r.e, HAS_BOXES_VIEW: n.X, INFO_PAGE: s.q };
        },
        4607: (e, t, a) => {
            a.d(t, { q: () => r });
            const r = { hasDescription: !0 };
        },
        3460: (e, t, a) => {
            a.d(t, { v: () => n });
            var r = a(5096);
            const n = { DEFAULT_CONFIG: a(4201).g, anniversaryCN: r.j };
        },
        1440: (e, t, a) => {
            a.d(t, { i: () => i });
            var r = a(3649),
                n = a(3460),
                s = a(4201);
            const i = (e, t) => {
                const a = n.v[(0, r.TD)(e)];
                return a
                    ? ((e, t) => {
                          const a = (e, t) => {
                              const r = Object.assign({}, e);
                              for (const e in r) {
                                  var n, s;
                                  t &&
                                      e in t &&
                                      ('object' == typeof r[e]
                                          ? (r[e] = a(r[e], null != (n = t[e]) ? n : r[e]))
                                          : (r[e] = null != (s = t[e]) ? s : r[e]));
                              }
                              return r;
                          };
                          return a(e, t);
                      })(s.g[t], a[t])
                    : s.g[t];
            };
        },
    },
]);
