'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [248],
    {
        1509: (e, t, a) => {
            a.r(t), a.d(t, { default: () => ze });
            var r = a(6179),
                n = a.n(r),
                o = a(8958),
                i = a(295),
                s = a(8526),
                l = a(5521),
                c = a(5834),
                m = a(3403),
                d = a(7030),
                u = a(3597),
                p = a(198),
                g = a(6328),
                y = a(9744),
                w = a(9210),
                _ = a(6486),
                b = a(4736),
                v = a(3215),
                f = a(4598),
                h = a(9480),
                x = a(9174),
                C = a(3946),
                N = a(9674),
                R = a(7366),
                A = a(7672),
                E = a(514),
                B = a(9605),
                I = a(7522);
            const O = 'row',
                k = 'reward',
                T = 'rareReward',
                P = 'divider',
                S = 'compensation',
                $ = 'rare',
                V = 'twitch',
                D = { opacity: 1 },
                Z = { opacity: 1, transform: 'translateX(0rem)', filter: 'brightness(1)' },
                j = { opacity: 1, transform: 'scale(1)', filter: 'brightness(1)' },
                G = { opacity: 0, transform: 'scale(1) rotateZ(0deg)', filter: 'brightness(1)' },
                L = (e, t, a) => {
                    switch (e) {
                        case O:
                            return `animation_${t}`;
                        case P:
                            return `animation_${t}_${P}`;
                        case k:
                            return `animation_${t}_${a}`;
                        case T:
                            return `animation_${t}_${a}_${T}`;
                        case $:
                            return `animation_${t}_${a}_${$}`;
                        case S:
                            return `animation_${t}_${a}_${S}`;
                        case V:
                            return `animation_${t}_${a}_${V}`;
                        default:
                            return console.warn(`Unsupported type: ${e}`), '';
                    }
                },
                K = (function () {
                    let e = null,
                        t = 0,
                        a = f.ZT;
                    const r = (e, t) => (
                            m().order.push({ index: t, name: e, type: O }),
                            new d.Controller({ id: e, from: { opacity: 0 } })
                        ),
                        n = (e, t) => (
                            m().order.push({ index: t, name: e, type: P }),
                            new d.Controller({ id: e, from: { opacity: 0 } })
                        ),
                        o = (e, t, a, r) => (
                            m().order.push({ index: t, name: e, type: $, pause: !a }),
                            new d.Controller({ id: e, from: { opacity: 0 }, onStart: r })
                        ),
                        i = (e, t, a = !1) => {
                            m().order.push({ index: t, name: e, type: T, pause: a, immediate: a });
                            const r = a ? f.ZT : () => E.hY.sound(N.Q.multiRewardAppear);
                            return new d.Controller({ id: e, from: { opacity: 0 }, onStart: r });
                        },
                        s = (e, t) => (
                            m().order.push({ index: t, name: e, type: k }),
                            new d.Controller({
                                id: e,
                                from: { opacity: 0, transform: 'translateX(-10rem)', filter: 'brightness(1.5)' },
                            })
                        ),
                        l = (e, t) => (
                            m().order.push({ index: t, name: e, type: V }),
                            new d.Controller({
                                id: e,
                                from: { opacity: 1, filter: 'brightness(1)', transform: 'scale(1)' },
                            })
                        ),
                        c = (e, t) => (
                            m().order.push({ index: t, name: e, type: S }),
                            new d.Controller({
                                id: e,
                                from: { opacity: 0, transform: 'scale(1)', filter: 'brightness(1.5)' },
                            })
                        ),
                        m = () => (e || (e = { order: [] }), e),
                        u = () => {
                            a();
                        },
                        p = (a) => {
                            if (!e)
                                return void console.warn("Try call 'next' function, but AnimationController is empty");
                            if (a >= e.order.length - 1) return void u();
                            const r = ((e) => {
                                    const t = e.split('_');
                                    switch (t.length) {
                                        case 2:
                                            return { type: O, rowIndex: Number(t[1]) };
                                        case 3:
                                            return P === t[2]
                                                ? { type: P, rowIndex: Number(t[1]) }
                                                : { type: k, rowIndex: Number(t[1]), rewardIndex: Number(t[2]) };
                                        case 4:
                                            return { type: t[3], rowIndex: Number(t[1]), rewardIndex: Number(t[2]) };
                                        default:
                                            return (
                                                console.warn(`Unsupported animation name: ${e}`),
                                                { type: '', rowIndex: 0 }
                                            );
                                    }
                                })(e.order[a + 1].name),
                                n = r.type,
                                o = r.rowIndex;
                            if (n === O) {
                                g(t === o ? [a + 1, a + 2] : [a + 1, a + 2, a + 3], 0 === o ? 0 : 300);
                            } else g([a + 1]);
                        },
                        g = (e, t) => {
                            const a = m();
                            e.forEach((r, n) => {
                                const o = a.order[r],
                                    i = o.name,
                                    s = o.type,
                                    l = o.immediate,
                                    c = o.pause,
                                    m = y(i);
                                if (m) {
                                    const i = () => {
                                        n !== e.length - 1 || p(r);
                                    };
                                    m.start(
                                        Object.assign(
                                            {},
                                            ((e, t) => {
                                                switch (e) {
                                                    case O:
                                                    case P:
                                                    case $:
                                                        return {
                                                            to: D,
                                                            config: { duration: 200, easing: I.Z.easeOutCubic },
                                                            delay: t,
                                                        };
                                                    case T:
                                                        return {
                                                            to: D,
                                                            config: { duration: 800, easing: I.Z.easeOutCubic },
                                                            delay: t,
                                                        };
                                                    case k:
                                                        let a = !1;
                                                        return {
                                                            to: [
                                                                {
                                                                    opacity: 1,
                                                                    transform: 'translateX(-8rem)',
                                                                    filter: 'brightness(1.5)',
                                                                },
                                                                {
                                                                    opacity: 1,
                                                                    transform: 'translateX(-6rem)',
                                                                    filter: 'brightness(1.5)',
                                                                },
                                                                {
                                                                    opacity: 1,
                                                                    transform: 'translateX(-4rem)',
                                                                    filter: 'brightness(1.3)',
                                                                },
                                                                {
                                                                    opacity: 1,
                                                                    transform: 'translateX(-2rem)',
                                                                    filter: 'brightness(1.1)',
                                                                },
                                                                Z,
                                                            ],
                                                            config: { duration: 30, easing: I.Z.easeOutCubic },
                                                            onStart: () => {
                                                                a || ((a = !0), E.hY.sound(N.Q.multiRewardAppear));
                                                            },
                                                            delay: t,
                                                        };
                                                    case S:
                                                        let r = !1;
                                                        return {
                                                            to: [
                                                                {
                                                                    opacity: 1,
                                                                    transform: 'scale(1.06)',
                                                                    filter: 'brightness(1.5)',
                                                                },
                                                                j,
                                                            ],
                                                            config: { duration: 400, easing: I.Z.easeOutCubic },
                                                            onStart: () => {
                                                                r || ((r = !0), E.hY.sound(N.Q.compensationAppear));
                                                            },
                                                            delay: t,
                                                        };
                                                    case V:
                                                        return {
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
                                                                G,
                                                            ],
                                                            config: { duration: 125, easing: I.Z.easeInOutCubic },
                                                            delay: t,
                                                        };
                                                    default:
                                                        return (
                                                            console.warn(`animation results: Unsupported type: ${e}`),
                                                            {}
                                                        );
                                                }
                                            })(s, l ? 500 : t),
                                            { immediate: l, onRest: c ? f.ZT : i },
                                        ),
                                    ),
                                        (a.currentAnimationInfo = o),
                                        (a.currentIndex = r);
                                }
                            });
                        },
                        y = (e) => {
                            const t = ((e) => {
                                var t;
                                return null == (t = m().animations) ? void 0 : t[e];
                            })(e);
                            return t ? t.springController : null;
                        };
                    return {
                        get: m,
                        init: (e, d, u, p) => {
                            (a = d), (t = e.length - 1);
                            let g = 0;
                            m().animations = h.u4(
                                e,
                                (e, a, m) => {
                                    const d = L(O, m);
                                    if (((e[d] = { springController: r(d, g) }), g++, m < t)) {
                                        const t = L(P, m);
                                        (e[t] = { springController: n(t, g) }), g++;
                                    }
                                    return (
                                        h.UI(a, (t, a) => {
                                            const r = (0, A.y)(t),
                                                n = (0, B.C)(u, t.specialAwardName);
                                            if (r) {
                                                const r = L($, m, a);
                                                (e[r] = { springController: o(r, g, n, () => p(t, n ? '' : r)) }), g++;
                                                const s = L(T, m, a);
                                                (e[s] = { springController: i(s, g, n) }), g++;
                                            } else {
                                                const t = L(k, m, a);
                                                (e[t] = { springController: s(t, g) }), g++;
                                            }
                                            if (t.isCompensation) {
                                                const t = L(V, m, a);
                                                (e[t] = { springController: l(t, g) }), g++;
                                                const r = L(S, m, a);
                                                (e[r] = { springController: c(r, g) }), g++;
                                            }
                                        }),
                                        e
                                    );
                                },
                                {},
                            );
                        },
                        reset: () => {
                            e = { order: [] };
                        },
                        run: () => {
                            m().animations
                                ? p(-1)
                                : console.warn("Try call 'run' function, but AnimationController is empty");
                        },
                        next: p,
                        pause: () => {
                            var e;
                            const t = (null == (e = m().currentAnimationInfo) ? void 0 : e.name) || '',
                                a = y(t);
                            a && a.pause();
                        },
                        resume: () => {
                            const e = m(),
                                t = e.currentIndex ? e.currentIndex : -1;
                            p(t);
                        },
                        skip: () => {
                            m().order.forEach((e) => {
                                const t = y(e.name);
                                null == t ||
                                    t.set(
                                        ((e) => {
                                            switch (e) {
                                                case O:
                                                case P:
                                                case $:
                                                case T:
                                                    return D;
                                                case k:
                                                    return Z;
                                                case S:
                                                    return j;
                                                case V:
                                                    return G;
                                                default:
                                                    return console.warn(`animation skip: Unsupported type: ${e}`), {};
                                            }
                                        })(e.type),
                                    );
                            }),
                                u();
                        },
                        getSpringControllerByName: y,
                    };
                })(),
                W = {
                    images: {
                        iconEmpty: 'entry_point.lootboxEmpty',
                        externalLink: 'common.externalLinkOrange',
                        previewIcon: 'awardViews.previewIcon',
                        compensationIcon: 'awardViews.compensationIcon',
                        loader: 'common.waiting',
                    },
                    videos: {
                        compensationGlow: 'awardViews.compensationGlow',
                        rareGlow: 'awardViews.rareGlow',
                        rare: 'awardViews.raritySimpleAnimations.rare_small',
                        epic: 'awardViews.raritySimpleAnimations.epic_small',
                    },
                    texts: {
                        closeButton: 'common.closeButton',
                        multiplier: 'common.rewards.multiplier',
                        headerTitle: 'multipleRewardView.header.title',
                        headerSubtitle: 'multipleRewardView.header.subTitle',
                        quantityAvailableTitle: 'awardViews.quantityTitle.boxesAvailable',
                        quantityNoBoxesTitle: 'awardViews.quantityTitle.noBoxes',
                        checkbox: 'awardViews.footer.checkbox',
                        footerBackButton: 'awardViews.footer.backButton',
                        footerPurchaseButtonText: 'awardViews.footer.purchaseButtonText',
                        footerPurchaseButtonTextCn: 'awardViews.footer.purchaseButtonTextCn',
                        footerOpenNextButton: 'multipleRewardView.footer.openNextButton',
                        loader: 'common.loader',
                        rareOverlayButtonContinue: 'rareRewardOverlay.rewardDescription.button.text',
                        rareOverlayTitle: 'rareRewardOverlay.rewardDescription.title.text',
                        rareOverlayStyleTitle: 'rareRewardOverlay.rewardDescription.style.text',
                        rareOverlayStyleDescription: 'rareRewardOverlay.rewardDescription.style.description.text',
                    },
                },
                z = {
                    dynamicVideos: { boxesOpening: 'awardViews.openingBoxVideo' },
                    dynamicTexts: {
                        rewardsPremiumDay: 'infoPage.rewards.premiumDay',
                        boxCategory: 'common.boxCategory.lowerCase',
                    },
                    dynamicImages: { boxesOpening: 'awardViews.openingBox' },
                },
                H = (0, v.q)()(
                    ({ observableModel: e }) => {
                        const t = {
                                root: e.object(),
                                bonuses: e.array('bonuses'),
                                info: e.primitives([
                                    'eventName',
                                    'isAnimationActive',
                                    'openingCount',
                                    'boxesCount',
                                    'isAwaitingResponse',
                                    'isReopen',
                                ]),
                                activeRareReward: x.LO.box(null),
                                activeRareAnimationName: x.LO.box(''),
                            },
                            a = (0, C.Om)(() => (0, R.jh)(W, t.info.eventName.get()), { equals: f.jv }),
                            r = (0, C.Om)(() => (0, R.kC)(z, t.info.eventName.get()), { equals: f.jv }),
                            n = (0, C.Om)(() => t.bonuses.get(), { equals: f.jv }),
                            o = (0, C.Om)(() => h.G(n(), (e) => h.G(e, (e) => (0, A.y)(e))), { equals: f.jv }),
                            i = (0, x.aD)((e) => {
                                t.activeRareReward.set(e);
                            }),
                            s = (0, x.aD)((e) => {
                                t.activeRareAnimationName.set(e);
                            }),
                            l = (e, t) => {
                                t ? s(t) : i(e);
                            },
                            c = (0, C.Om)(
                                () => {
                                    const e = n();
                                    return (
                                        K.reset(),
                                        K.init(e, () => p.Kg.send({ type: p.QK.toPage }), t.info.eventName.get(), l),
                                        K
                                    );
                                },
                                { equals: f.jv },
                            ),
                            m = (0, C.Om)(() => h.u4(t.bonuses.get(), (e, t) => (e > t.length ? e : t.length), 0)),
                            d = (0, C.Om)(() => {
                                const e = t.root.get().boxCategory,
                                    a = `${e}_${b.G.Common}`,
                                    n = `${e}_${b.G.Rare}`,
                                    o = r().dynamicImages.boxesOpening.dynOpt(a, b.G.Common),
                                    i = r().dynamicVideos.boxesOpening.dynOpt(a, b.G.Common),
                                    s = r().dynamicImages.boxesOpening.dynOpt(n, b.G.Rare),
                                    l = r().dynamicVideos.boxesOpening.dynOpt(n, b.G.Rare);
                                return {
                                    [_.e.common]: { video: i, image: o, sound: N.Q.open },
                                    [_.e.rare]: { video: l, image: s, sound: N.Q.openRare },
                                };
                            });
                        return Object.assign({}, t, {
                            computes: {
                                rewardsListByBoxes: n,
                                resources: a,
                                dynamicResources: r,
                                maxRewardsInLine: m,
                                rewardAnimationsController: c,
                                hasRareReward: o,
                                multimediaResource: d,
                            },
                        });
                    },
                    ({ externalModel: e, model: t }) => ({
                        goPreview: e.createCallback((e) => e, 'onPreview'),
                        openNext: e.createCallback(() => {
                            const e = t.info,
                                a = e.boxesCount,
                                r = e.openingCount;
                            return { openCount: Math.min(a.get(), r.get()) };
                        }, 'onOpen'),
                        goBack: e.createCallbackNoArgs('onGoBack'),
                        close: e.createCallbackNoArgs('onClose'),
                        buyBoxes: e.createCallbackNoArgs('onBuyBoxes'),
                        toggleAnimationState: e.createCallback(
                            (e) => ({ isAnimationActive: !e }),
                            'onAnimationStateChanged',
                        ),
                        setIsVideoPlaying: e.createCallback((e) => ({ isPlaying: e }), 'onVideoPlaying'),
                        clearActiveRareReward: (0, x.aD)(() => t.activeRareReward.set(null)),
                        clearActiveRareAnimationName: (0, x.aD)(() => t.activeRareAnimationName.set('')),
                    }),
                ),
                Q = H[0],
                q = H[1];
            var X = a(6483),
                U = a.n(X),
                M = a(8844),
                Y = a(9766),
                F = a(8089),
                J = a(5959),
                ee = a(5415),
                te = a(8821),
                ae = a(6974),
                re = a(4561),
                ne = a(2369),
                oe = a(2862),
                ie = a(2056),
                se = a(6366),
                le = a(3633),
                ce = a(4401),
                me = a(5888),
                de = a(7039),
                ue = a(46),
                pe = a(114),
                ge = a(9108);
            const ye = {
                    base: 'RewardTitle_base_e1',
                    base__premium_plus: 'RewardTitle_base__premium_plus_44',
                    value: 'RewardTitle_value_b5',
                    base__credits: 'RewardTitle_base__credits_f6',
                    base__gold: 'RewardTitle_base__gold_19',
                    base__freeXP: 'RewardTitle_base__freeXP_ec',
                    base__crystal: 'RewardTitle_base__crystal_75',
                    pluralText: 'RewardTitle_pluralText_11',
                },
                we = (0, m.Pi)(({ reward: e, isCompensation: t = !1, className: a = '' }) => {
                    const r = q().model,
                        o = ((e, t) => {
                            const a = e.name,
                                r = e.value,
                                n = e.compensation;
                            return t ? { name: n.name, value: n.value } : { name: a, value: r };
                        })(e, t),
                        i = o.name,
                        s = o.value,
                        l = r.computes.dynamicResources().dynamicTexts,
                        c = i === oe.E4.PremiumPlus;
                    return n().createElement(
                        'div',
                        { className: U()(ye.base, ye[`base__${i}`], a) },
                        n().createElement(
                            'div',
                            { className: ye.value },
                            n().createElement(Y.z, { text: (0, ce.QH)(s) }),
                        ),
                        c &&
                            n().createElement(
                                'span',
                                { className: ye.pluralText },
                                l.rewardsPremiumDay.plural('premiumDay', Number(s.split(' ').at(-1))),
                            ),
                    );
                }),
                _e = 'Compensation_base_ca',
                be = 'Compensation_iconWrapper_66',
                ve = 'Compensation_icon_69',
                fe = (0, m.Pi)(({ reward: e, size: t, icon: a, animationName: r, className: o = '' }) => {
                    const i = q().model.computes.rewardAnimationsController(),
                        s = e.isCompensation ? i.getSpringControllerByName(r) : null;
                    return n().createElement(
                        'div',
                        { className: U()(_e, o) },
                        n().createElement(
                            d.animated.div,
                            { style: Object.assign({}, null == s ? void 0 : s.springs) },
                            n().createElement(ge._, {
                                key: 'compensation_image',
                                icon: (0, pe.r)(e, oe.h2.Big, e.isCompensation),
                                sizes: { height: t.rewardHeight, width: t.rewardWidth },
                            }),
                        ),
                        n().createElement(
                            d.animated.div,
                            { style: { opacity: null == s ? void 0 : s.springs.opacity }, className: be },
                            n().createElement(ge._, {
                                key: 'compensation_icon',
                                icon: a,
                                sizes: { height: t.compensationIconHeight, width: t.compensationIconWidth },
                                className: ve,
                            }),
                        ),
                        n().createElement(
                            d.animated.div,
                            { style: { opacity: null == s ? void 0 : s.springs.opacity } },
                            n().createElement(we, { reward: e, isCompensation: e.isCompensation }),
                        ),
                    );
                }),
                he = ({ reward: e, className: t = '' }) => {
                    const a = e.vehicleShortName;
                    return n().createElement('div', { className: U()(ye.base, t) }, a);
                },
                xe = {
                    base: 'AnimatedReward_base_c3',
                    container: 'AnimatedReward_container_c6',
                    reward: 'AnimatedReward_reward_8e',
                    video: 'AnimatedReward_video_3c',
                    glow: 'AnimatedReward_glow_7e',
                    compensation: 'AnimatedReward_compensation_c4',
                    title: 'AnimatedReward_title_3d',
                    vehicleTitle: 'AnimatedReward_vehicleTitle_08',
                    loupeWrapper: 'AnimatedReward_loupeWrapper_a1',
                    loupe: 'AnimatedReward_loupe_22',
                },
                Ce = [oe.E4.Vehicles, oe.E4.TmanToken],
                Ne = {
                    rewardHeight: '80rem',
                    rewardWidth: '80rem',
                    countHeight: '18rem',
                    compensationIconWidth: '24rem',
                    compensationIconHeight: '24rem',
                    nameHeight: '20rem',
                    descriptionHeight: '20rem',
                    imageSize: oe.h2.Big,
                    premDaysHeight: '65rem',
                    premDaysWidth: '65rem',
                },
                Re = { opacity: 0, display: 'none' },
                Ae = { opacity: 1, display: 'flex' },
                Ee = { to: Ae, config: { duration: 500, easing: I.Z.easeOutCubic } },
                Be = (0, m.Pi)(({ reward: e, rewardIndex: t, rowIndex: a, hover: o }) => {
                    const s = q(),
                        l = s.model,
                        c = s.controls,
                        m = l.computes.resources(),
                        u = m.images,
                        g = m.texts,
                        y = m.videos,
                        w = l.info.eventName.get(),
                        _ = l.activeRareAnimationName.get(),
                        b = e.tooltipContentId,
                        v = e.tooltipId,
                        f = (0, i.v)(p.Kg, (e) => e.value),
                        h = (0, d.useSpring)(() => ({ from: Re })),
                        x = h[0],
                        C = h[1],
                        N = (0, r.useRef)(null);
                    (0, me.L)(N),
                        (0, r.useEffect)(() => {
                            switch (f) {
                                case p.B1.skip:
                                    C.set(Ae);
                                    break;
                                case p.B1.preparation:
                                    C.set(Re);
                                    break;
                                case p.B1.page:
                                    C.start(Ee);
                            }
                        }, [f]);
                    const R = l.computes.rewardAnimationsController(),
                        E = (0, A.y)(e) ? T : k,
                        I = R.getSpringControllerByName(L(E, a, t)),
                        O = e.isCompensation ? R.getSpringControllerByName(L(V, a, t)) : null;
                    return n().createElement(
                        ie.u,
                        {
                            ignoreShowDelay: !0,
                            contentId: Number(b),
                            args: { tooltipId: v, boxCategory: e.icon },
                            isEnabled: f === p.B1.initial,
                        },
                        n().createElement(
                            'div',
                            { className: U()(xe.base, xe[`base__${e.name}`]) },
                            n().createElement(
                                d.animated.div,
                                { style: Object.assign({}, null == I ? void 0 : I.springs), className: xe.container },
                                (0, A.y)(e) &&
                                    n().createElement(se.n, {
                                        className: U()(xe.video, xe.glow),
                                        src: y.rareGlow,
                                        autoplay: !0,
                                        loop: !0,
                                        ref: N,
                                    }),
                                n().createElement(
                                    d.animated.div,
                                    { style: Object.assign({}, null == O ? void 0 : O.springs) },
                                    n().createElement(ue.Q, {
                                        reward: e,
                                        countText: g.multiplier,
                                        sizes: Ne,
                                        className: xe.reward,
                                        currentAnimationState: f,
                                        hover: o,
                                    }),
                                ),
                                n().createElement(
                                    d.animated.div,
                                    { style: { opacity: null == O ? void 0 : O.springs.opacity }, className: xe.title },
                                    e.name === oe.E4.Vehicles &&
                                        n().createElement(he, { reward: e, className: xe.vehicleTitle }),
                                    !Ce.includes(e.name) && n().createElement(we, { reward: e }),
                                ),
                                (0, ce.XM)(e) &&
                                    !e.isCompensation &&
                                    n().createElement(
                                        d.animated.div,
                                        { style: x, className: xe.loupeWrapper },
                                        n().createElement(le.k, {
                                            icon: { img: u.previewIcon },
                                            onClick: () =>
                                                c.goPreview({
                                                    bonusType: e.name,
                                                    bonusId: e.id ? e.id : '',
                                                    styleID: e.styleID,
                                                }),
                                            className: xe.loupe,
                                        }),
                                    ),
                                e.isCompensation &&
                                    n().createElement(fe, {
                                        reward: e,
                                        size: Ne,
                                        icon: u.compensationIcon,
                                        animationName: L(S, a, t),
                                        className: xe.compensation,
                                    }),
                            ),
                            (0, A.y)(e) &&
                                !(0, B.C)(w, e.specialAwardName) &&
                                n().createElement(de.s, {
                                    className: xe.video,
                                    rarity: e.rarity,
                                    src: y[e.rarity],
                                    show: _ === L($, a, t),
                                    timer: { remainder: 0.5, next: R.resume },
                                    onEnded: c.clearActiveRareAnimationName,
                                }),
                        ),
                    );
                }),
                Ie = 'RewardsRow_base_72',
                Oe = 'RewardsRow_number_8e',
                ke = 'RewardsRow_divider_36',
                Te = (0, m.Pi)(({ order: e, rewards: t, isLast: a }) => {
                    const o = (0, r.useState)(''),
                        i = o[0],
                        s = o[1],
                        l = q().model,
                        c = l.computes.maxRewardsInLine(),
                        m = l.computes.rewardAnimationsController(),
                        u = m.getSpringControllerByName(L(O, e - 1)),
                        p = a ? null : m.getSpringControllerByName(L(P, e - 1));
                    return n().createElement(
                        'div',
                        { className: Ie, style: { width: ((g = c), 28 + 108 * g) + 'rem' } },
                        n().createElement(
                            d.animated.div,
                            { style: Object.assign({}, null == u ? void 0 : u.springs), className: Oe },
                            e,
                        ),
                        h.UI(t, (t, a) =>
                            n().createElement(Be, {
                                reward: t,
                                key: `reward_${e - 1}_${a}_${(0, A.u)()}`,
                                rewardIndex: a,
                                rowIndex: e - 1,
                                hover: { state: i, setState: (e) => s(e) },
                            }),
                        ),
                        !a &&
                            n().createElement(d.animated.div, {
                                style: Object.assign({}, null == p ? void 0 : p.springs),
                                className: ke,
                            }),
                    );
                    var g;
                }),
                Pe = {
                    base: 'Content_base_48',
                    base__ready: 'Content_base__ready_a2',
                    rareOverlay: 'Content_rareOverlay_2f',
                    fadeIn: 'Content_fadeIn_f4',
                    headerBlock: 'Content_headerBlock_4d',
                    subtitle: 'Content_subtitle_9e',
                    closeButton: 'Content_closeButton_15',
                    boxes: 'Content_boxes_69',
                    footer: 'Content_footer_04',
                    checkbox: 'Content_checkbox_8f',
                },
                Se = { opacity: 0 },
                $e = { opacity: 1 },
                Ve = {
                    to: $e,
                    config: { duration: 500, easing: I.Z.easeOutCubic },
                    onRest: () => {
                        p.Kg.send({ type: p.QK.toInitial });
                    },
                },
                De = (0, m.Pi)(() => {
                    const e = q(),
                        t = e.model,
                        a = e.controls,
                        o = t.root.get(),
                        s = o.boxesCount,
                        l = o.boxCategory,
                        m = o.useExternal,
                        u = o.isWindowAccessible,
                        g = t.info.isAnimationActive.get(),
                        y = t.info.eventName.get(),
                        w = t.info.openingCount.get(),
                        _ = t.activeRareReward.get(),
                        b = t.computes,
                        v = b.resources,
                        f = b.dynamicResources,
                        x = b.rewardsListByBoxes,
                        C = b.rewardAnimationsController,
                        N = v(),
                        R = N.texts,
                        A = N.images,
                        E = f().dynamicTexts,
                        I = x(),
                        O = (0, ee.GS)().mediaSize,
                        k = C(),
                        T = (0, i.v)(p.Kg, (e) => e.value),
                        P = (0, d.useSpring)(() => ({ from: Se })),
                        S = P[0],
                        $ = P[1];
                    (0, r.useEffect)(() => {
                        switch ((0, c.P)(T)) {
                            case p.B1.skip:
                                $.set($e), k.skip();
                                break;
                            case p.B1.preparation:
                                $.set(Se);
                                break;
                            case p.B1.rewards:
                                k.run();
                                break;
                            case p.B1.page:
                                $.start(Ve);
                        }
                    }, [T, k]);
                    return n().createElement(
                        'div',
                        { className: U()(Pe.base, T === p.B1.initial && Pe.base__ready) },
                        Boolean(_ && (0, B.C)(y, null == _ ? void 0 : _.specialAwardName)) &&
                            n().createElement(
                                'div',
                                { className: Pe.rareOverlay },
                                n().createElement(ne.H, {
                                    res: (0, B.D)(y, null == _ ? void 0 : _.specialAwardName),
                                    rareBonus: _,
                                    texts: R,
                                    controls: {
                                        onClose: () => {
                                            a.clearActiveRareReward(), k.resume();
                                        },
                                        onPlay: () => a.setIsVideoPlaying(!0),
                                        onEnded: () => a.setIsVideoPlaying(!1),
                                    },
                                    minimized: !u,
                                }),
                            ),
                        n().createElement(
                            d.animated.div,
                            { style: S, className: Pe.headerBlock },
                            n().createElement(ae.h, {
                                title: R.headerTitle,
                                subTitle: l
                                    ? n().createElement(Y.z, {
                                          text: R.headerSubtitle,
                                          binding: { name: E.boxCategory.dynOpt(l), boxesCount: I.length },
                                          classMix: Pe.subtitle,
                                      })
                                    : '',
                                className: Pe.header,
                            }),
                            n().createElement(
                                'div',
                                { className: Pe.closeButton },
                                n().createElement(F.A, {
                                    caption: R.closeButton,
                                    type: 'close',
                                    side: 'right',
                                    onClick: a.close,
                                }),
                            ),
                        ),
                        n().createElement(
                            'div',
                            { className: Pe.boxes },
                            h.UI(I, (e, t) =>
                                n().createElement(Te, {
                                    key: `rewards_row_${t}`,
                                    order: t + 1,
                                    isLast: t === I.length - 1,
                                    rewards: e,
                                }),
                            ),
                        ),
                        n().createElement(
                            d.animated.div,
                            { style: S, className: Pe.footer },
                            J.graphicsQuality.isHigh() &&
                                n().createElement(te.o, {
                                    isActive: g,
                                    onClick: () => {
                                        a.toggleAnimationState(g);
                                    },
                                    className: Pe.checkbox,
                                    text: R.checkbox,
                                    size: O >= ee.cJ.Medium ? M.yB.extraLarge : M.yB.large,
                                }),
                            n().createElement(re.Z, {
                                texts: R,
                                images: A,
                                actions: Object.assign({}, a, {
                                    openNext: () => {
                                        p.Kg.send({ type: p.QK.toPreparation });
                                    },
                                }),
                                boxesCount: s,
                                useExternal: m,
                                openingCount: w,
                            }),
                        ),
                    );
                }),
                Ze = 'App_base_79',
                je = 'App_background_02',
                Ge = 'App_loader_4a',
                Le = 'App_content_62',
                Ke = 'App_loaderWrapper_e5',
                We = (0, m.Pi)(() => {
                    const e = q(),
                        t = e.model,
                        a = e.controls,
                        o = t.computes.resources(),
                        m = o.images,
                        b = o.texts,
                        v = t.root.get().isWindowAccessible,
                        f = t.info.isAnimationActive.get(),
                        h = t.info.isAwaitingResponse.get(),
                        x = t.computes.hasRareReward(),
                        C = t.info.isReopen.get(),
                        N = t.computes.multimediaResource(),
                        R = (0, i.v)(p.Kg, (e) => e.value);
                    (0, s.gd)(
                        l.n.ESCAPE,
                        () => {
                            R === p.B1.initial && a.close();
                        },
                        !0,
                    ),
                        (0, r.useEffect)(
                            () => (
                                p.Kg.start(),
                                () => {
                                    p.Kg.stop();
                                }
                            ),
                            [],
                        ),
                        (0, r.useEffect)(() => {
                            p.Kg.send({ type: p.QK.setAnimationActive, isAnimationActive: f });
                        }, [f]),
                        (0, w.s)(C, h, R);
                    const A = (0, y.H)(R, a.openNext),
                        E = A.loadingStyle,
                        B = A.contentStyle;
                    return n().createElement(
                        'div',
                        { className: Ze },
                        n().createElement(g.F, {
                            activeType: x ? _.e.rare : _.e.common,
                            minimized: !v,
                            res: N,
                            className: je,
                            onPlay: () => a.setIsVideoPlaying(!0),
                            onEnded: () => a.setIsVideoPlaying(!1),
                        }),
                        (0, c.P)(R) !== p.A_ &&
                            n().createElement(d.animated.div, { style: B, className: Le }, n().createElement(De, null)),
                        R === p.B1.waiting &&
                            n().createElement(
                                d.animated.div,
                                { style: E, className: Ke },
                                n().createElement(u.a, { text: b.loader, img: m.loader, className: Ge }),
                            ),
                    );
                }),
                ze = () => n().createElement(Q, { options: o.f.MULTIPLE_REWARD }, n().createElement(We, null));
        },
    },
]);
