import { r as e } from '../chunks/rolldown-runtime.js';
import {
    $ as a,
    B as t,
    G as o,
    Gt as i,
    H as s,
    Ht as r,
    K as n,
    L as c,
    Ot as l,
    Q as p,
    Vt as d,
    X as _,
    Yt as m,
    an as g,
    cn as f,
    ct as u,
    dt as h,
    et as b,
    h as C,
    ln as S,
    lt as v,
    mt as x,
    nt as y,
    on as O,
    pt as N,
    q as I,
    rt as w,
    xt as j,
    yt as T,
    z as k,
    zt as E,
} from '../chunks/lib.js';
import '../chunks/global.js';
import { a as L } from '../chunks/vendor.js';
import { n as H, r as A } from '../chunks/enums.js';
import { a as W, c as R, i as $, l as D, n as V, o as M, r as P, s as B, t as F } from '../chunks/common.js';
var K = e(f(), 1),
    [U, Y] = p()(
        ({ observableModel: e }) => {
            const a = {
                    ...e.primitives(['campaignSelectorViewState', 'blockedByVehicle', 'firstTimeEntrance']),
                    campaigns: e.arrayClone('campaigns'),
                },
                t = _.primitive(() => {
                    const e = a.campaignSelectorViewState.get(),
                        t = a.firstTimeEntrance.get();
                    return e === R.FIRST_TWO || (e === R.THIRD && t) ? R.THIRD : R.FIRST_TWO;
                }),
                o = _.primitive(() => {
                    const e = a.firstTimeEntrance.get(),
                        { first: o, second: s } = i();
                    return e && o.completedWithHonor && s.completedWithHonor ? R.FIRST_TWO : t();
                }),
                i = _.model(() =>
                    d(
                        a.campaigns.get(),
                        (e, { campaignName: a, completedWithHonor: t }, o) => {
                            const i = F[o];
                            return i ? ((e[`${i}`] = { campaignName: a, completedWithHonor: t }), e) : e;
                        },
                        {},
                    ),
                ),
                s = _.model((e) => {
                    const t = a.campaigns.get(),
                        o = E(t, e);
                    if (!o) throw new Error(`There is no campaign with index ${e}`);
                    return 2 === e ? t.slice(2).flatMap(({ operations: e }) => e) : o.operations;
                }),
                r = _.model(() => s(2).find(({ active: e }) => e)?.operationId),
                n = _.primitive((e, t) => {
                    if (a.campaignSelectorViewState.get() !== R.THIRD) return !1;
                    const o = a.firstTimeEntrance.get(),
                        i = a.campaigns.get(),
                        s = i.find((e, a) => 2 === a),
                        r = i.find((e, a) => 3 === a);
                    if (!s?.operations || !r?.operations) return;
                    const n = [...s.operations, ...r.operations];
                    return (
                        !(o || e < 8) &&
                        (11 === e && t === H.AVAILABLE
                            ? n.find(
                                  (e, a) =>
                                      (e.state === H.COMPLETED || e.state === H.COMPLETED_WITH_HONORS) && 10 === a,
                              )
                            : t === H.AVAILABLE && void 0 === n.find((e) => e.state === H.ACTIVE))
                    );
                });
            return {
                ...a,
                computes: {
                    campaignsInfo: i,
                    campaignOperations: s,
                    disabledCampaign: t,
                    activeOperationId: r,
                    isAttention: n,
                    completedCampaign: o,
                },
            };
        },
        ({ externalModel: e }) => ({
            close: e.createCallbackNoArgs('onClose'),
            openOperation: e.createCallback((e) => ({ [D]: e }), 'onOperation'),
            switchCampaign: e.createCallback((e) => ({ [B]: e }), 'switchCampaign'),
        }),
    ),
    G = j(),
    z = [
        { opacity: 0.7, config: { duration: 100 } },
        { opacity: 0, config: { duration: 100 } },
        { opacity: 1, config: { duration: 100 } },
        { opacity: 0.8, config: { duration: 100 }, delay: 700 },
        { opacity: 1, config: { duration: 100 } },
        { opacity: 0.9, config: { duration: 100 } },
        { opacity: 1, config: { duration: 100 } },
        { opacity: 0.8, config: { duration: 100 } },
        { opacity: 1, config: { duration: 100 } },
        { opacity: 0.9, config: { duration: 100 }, delay: 400 },
        { opacity: 1, config: { duration: 100 } },
        { opacity: 0.8, config: { duration: 100 }, delay: 800 },
        { opacity: 1, config: { duration: 100 } },
        { opacity: 0.9, config: { duration: 100 } },
        { opacity: 1, config: { duration: 100 } },
    ],
    q = [
        { opacity: 0, config: { duration: 100 } },
        { opacity: 1, config: { duration: 100 } },
        { opacity: 0, config: { duration: 100 } },
        { opacity: 0.2, config: { duration: 100 }, delay: 700 },
        { opacity: 0, config: { duration: 100 } },
        { opacity: 0.1, config: { duration: 100 } },
        { opacity: 0, config: { duration: 100 } },
        { opacity: 0.2, config: { duration: 100 } },
        { opacity: 0, config: { duration: 100 } },
        { opacity: 0.1, config: { duration: 100 }, delay: 400 },
        { opacity: 0, config: { duration: 100 } },
        { opacity: 0.2, config: { duration: 100 }, delay: 800 },
        { opacity: 0, config: { duration: 100 } },
        { opacity: 0.1, config: { duration: 100 } },
        { opacity: 0, config: { duration: 100 } },
    ],
    Q = (0, K.createContext)(null),
    X = L(function ({ children: e }) {
        const { model: a, controls: t } = Y(),
            o = a.computes.disabledCampaign(),
            i = a.campaignSelectorViewState.get(),
            s = (0, K.useRef)(!1),
            [r, n] = (0, K.useState)('idle'),
            c = b(),
            l = 'fadeIn' !== r && 'idle' !== r,
            p = i === R.LOCKED || i === R.COMPLETED_WITH_HONOR;
        function d(e) {
            n(e);
        }
        function _() {
            (N.stop(), y.stop(), S.stop());
        }
        const [m, f] = v(() => ({
                from: { opacity: 0, transform: 'scale(1)' },
                config: { duration: 300, easing: g.easeInCirc },
            })),
            [u, h] = v(() => ({
                from: { opacity: 0, transform: 'translateY(0rem)', pointerEvents: 'none' },
                config: { duration: 300, easing: g.easeInOutCirc },
            })),
            [C, S] = v(() => ({ from: { opacity: p ? 0 : 1 } })),
            [x, y] = v(() => ({ from: { opacity: p ? 1 : 0 } })),
            [O, N] = v(() => ({ from: { opacity: 0 } })),
            [I, w] = v(() => ({ from: { opacity: 0 }, config: { duration: 300 } }));
        return (
            (0, K.useEffect)(() => {
                f.start({ to: { opacity: 1 }, onRest: () => d('fadeIn') });
            }, [f]),
            (0, K.useEffect)(() => {
                switch (r) {
                    case 'fadeOut':
                        (h.start({ to: { opacity: 0, transform: 'translateY(20rem)', pointerEvents: 'none' } }),
                            S.start({ to: { opacity: 1 }, config: { duration: 100, easing: g.easeInOutCirc } }),
                            y.start({ to: { opacity: 0 }, config: { duration: 100, easing: g.easeInOutCirc } }),
                            N.start({ to: { opacity: 0 }, config: { duration: 100, easing: g.easeInOutCirc } }),
                            w.start({ to: { opacity: 1 }, onRest: () => d('startLoading') }));
                        break;
                    case 'startLoading':
                        (d('endLoading'), t.switchCampaign(o));
                        break;
                    case 'endLoading':
                        w.start({ to: { opacity: 0 }, onRest: () => d('fadeIn'), config: { duration: 300 } });
                        break;
                    case 'fadeIn':
                        if (p)
                            return void h.start({
                                from: { opacity: 0, transform: 'translateY(20rem)' },
                                to: { opacity: 1, transform: 'translateY(0rem)', pointerEvents: 'auto' },
                                onRest: () => d('idle'),
                            });
                        (h.start({
                            from: { opacity: 0, transform: 'translateY(20rem)' },
                            to: { opacity: 1, transform: 'translateY(0rem)', pointerEvents: 'auto' },
                        }),
                            S.start({ from: { opacity: 1 }, to: q, config: { easing: g.easeInOutCirc } }),
                            c.play('lightsOn'),
                            y.start({
                                from: { opacity: 0 },
                                to: z,
                                config: { easing: g.easeInOutCirc },
                                onRest() {
                                    (d('idle'),
                                        N.start({
                                            to: { opacity: 1 },
                                            config: { duration: 2e3, easing: g.easeInCirc },
                                        }));
                                },
                            }));
                }
            }, [y, S, o, f, h, w, p, N, t, c, r]),
            (0, G.jsx)(Q.Provider, {
                value: {
                    currentStep: r,
                    bugsStyle: O,
                    backgroundStyle: x,
                    boardItemStyle: C,
                    contentStyle: m,
                    footerStyle: u,
                    UIBlocked: l,
                    closeRef: s,
                    getAnimationShade: function (e) {
                        return 'idle' !== r && 'fadeIn' !== r && 'openOperation' !== r ? 'dark' : e;
                    },
                    updateStep: d,
                    startAnimation: function () {
                        (_(), n('fadeOut'));
                    },
                    openOperation: function (e) {
                        ((s.current = !0),
                            _(),
                            n('openOperation'),
                            f.start({
                                to: { transform: 'scale(1.1)', opacity: 0 },
                                config: { duration: 300, easing: g.easeInOutCirc },
                                onRest: () => e(),
                            }));
                    },
                },
                children: e,
            })
        );
    }),
    Z = () => {
        const e = (0, K.useContext)(Q);
        if (!e) throw new Error('useAnimation must be used within an AnimationProvider');
        return e;
    },
    J = 'Particles_b7c425ba',
    ee = 'Particles_video_dadccd98',
    ae = 'Particles_video__glow_27caffe2',
    te = 'Particles_video__sparks_390a3794',
    oe = 'Particles_video__newCampaignSparks_b536df1c',
    ie = 'Particles_video__newCampaignGlow_6d8cdfa1',
    se = 'Particles_wrapper_7a6969a2',
    re = 'Particles_wrapper__hidden_efb078a7',
    ne = L(function ({ className: e }) {
        const a = S.resolve('videos'),
            { model: t } = Y(),
            i = t.campaignSelectorViewState.get(),
            s = i === R.COMPLETED_WITH_HONOR,
            r = t.firstTimeEntrance.get() && i !== R.LOCKED;
        return s || r
            ? (0, G.jsxs)('div', {
                  className: O(J, e),
                  children: [
                      s &&
                          (0, G.jsxs)(G.Fragment, {
                              children: [
                                  (0, G.jsx)(o, {
                                      src: a.readOrEmpty('personal_missions_30.campaign_selector.new_campaign_glow'),
                                      className: O(ee, ae),
                                      loop: !0,
                                      autoplay: !0,
                                  }),
                                  (0, G.jsx)(o, {
                                      src: a.readOrEmpty('personal_missions_30.campaign_selector.sparks'),
                                      className: O(ee, te),
                                      loop: !0,
                                      autoplay: !0,
                                  }),
                              ],
                          }),
                      r &&
                          (0, G.jsxs)('div', {
                              className: O(se, t.blockedByVehicle.get() && re),
                              children: [
                                  (0, G.jsx)(o, {
                                      src: a.readOrEmpty('personal_missions_30.campaign_selector.new_campaign_glow'),
                                      className: O(ee, ie),
                                      loop: !0,
                                      autoplay: !0,
                                  }),
                                  (0, G.jsx)(o, {
                                      src: a.readOrEmpty('personal_missions_30.campaign_selector.new_campaign_sparks'),
                                      className: O(ee, oe),
                                      loop: !0,
                                      autoplay: !0,
                                  }),
                              ],
                          }),
                  ],
              })
            : null;
    }),
    ce = {
        base: 'Background_81dbcfb6',
        lightLeft: 'Background_lightLeft_cac88ec4',
        lightRight: 'Background_lightRight_5a3c0254',
        base__locked: 'Background_base__locked_26effab7',
        base__completedWithHonor: 'Background_base__completedWithHonor_26effab7',
        content: 'Background_content_6c5e4ec3',
    },
    le = L(function (e) {
        const { model: a } = Y(),
            t = a.campaignSelectorViewState.get(),
            { backgroundStyle: o } = Z();
        return (0, G.jsxs)('div', {
            className: O(ce.base, ce[`base__${t}`], e.className),
            children: [
                (0, G.jsx)('div', { className: ce.content, children: e.children }),
                (0, G.jsx)(u.div, { style: t === R.FIRST_TWO ? o : void 0, className: ce.lightLeft }),
                (0, G.jsx)(u.div, { style: t === R.THIRD ? o : void 0, className: ce.lightRight }),
            ],
        });
    }),
    pe = { top: 0, left: 0 },
    de = {
        1: {
            extraSmall: { top: -19, left: 216 },
            medium: { top: -26, left: 266 },
            large: { top: -25, left: 317 },
            extraLarge: { top: -37, left: 407 },
        },
        2: {
            extraSmall: { top: 27, left: 63 },
            medium: { top: 31, left: 77 },
            large: { top: 43, left: 93 },
            extraLarge: { top: 51, left: 113 },
        },
        3: {
            extraSmall: { top: 154, left: -8 },
            medium: { top: 184, left: -8 },
            large: { top: 227, left: -10 },
            extraLarge: { top: 292, left: -24 },
        },
        4: {
            extraSmall: { top: 230, left: 120 },
            medium: { top: 278, left: 148 },
            large: { top: 338, left: 176 },
            extraLarge: { top: 441, left: 221 },
        },
        5: {
            extraSmall: { top: 21, left: 120 },
            medium: { top: 24, left: 148 },
            large: { top: 34, left: 175 },
            extraLarge: { top: 41, left: 221 },
        },
        6: {
            extraSmall: { top: 131, left: -2 },
            medium: { top: 158, left: -1 },
            large: { top: 194, left: -2 },
            extraLarge: { top: 251, left: -11 },
        },
        7: {
            extraSmall: { top: 207, left: 125 },
            medium: { top: 250, left: 155 },
            large: { top: 305, left: 184 },
            extraLarge: { top: 397, left: 232 },
        },
        8: {
            extraSmall: { top: 25, left: 37 },
            medium: { top: 25, left: 47 },
            large: { top: 35, left: 60 },
            extraLarge: { top: 41, left: 77 },
        },
        9: {
            extraSmall: { top: 152, left: 226 },
            medium: { top: 185, left: 275 },
            large: { top: 225, left: 332 },
            extraLarge: { top: 291, left: 431 },
        },
        10: {
            extraSmall: { top: 248, left: 35 },
            medium: { top: 301, left: 44 },
            large: { top: 361, left: 55 },
            extraLarge: { top: 470, left: 66 },
        },
        11: {
            extraSmall: { top: 13, left: 302 },
            medium: { top: 11, left: 371 },
            large: { top: 13, left: 451 },
            extraLarge: { top: 12, left: 591 },
        },
    },
    _e = {
        1: {
            extraSmall: { top: 70, left: 189 },
            medium: { top: 83, left: 232 },
            large: { top: 105, left: 277 },
            extraLarge: { top: 133, left: 355 },
        },
        2: {
            extraSmall: { top: 121, left: 31 },
            medium: { top: 145, left: 40 },
            large: { top: 180, left: 47 },
            extraLarge: { top: 232, left: 53 },
        },
        3: {
            extraSmall: { top: 202, left: 116 },
            medium: { top: 243, left: 145 },
            large: { top: 295, left: 171 },
            extraLarge: { top: 384, left: 213 },
        },
        5: {
            extraSmall: { top: 133, left: 100 },
            medium: { top: 161, left: 123 },
            large: { top: 196, left: 149 },
            extraLarge: { top: 254, left: 187 },
        },
        6: {
            extraSmall: { top: 254, left: 84 },
            medium: { top: 309, left: 106 },
            large: { top: 374, left: 123 },
            extraLarge: { top: 487, left: 153 },
        },
    },
    me = {
        9: { extraSmall: { top: 10 }, large: { top: 15 }, extraLarge: { top: 20 } },
        11: {
            extraSmall: { left: 87, top: -12 },
            medium: { left: 108, top: -14 },
            large: { left: 122, top: -16 },
            extraLarge: { left: 164, top: -21 },
        },
    },
    ge = 'Threads_8f7c55a4',
    fe = 'Threads_image_bd974d01',
    ue = {
        medium: { width: 496, height: 477 },
        large: { width: 594, height: 571 },
        extraLarge: { width: 780, height: 750 },
    };
function he({ operationId: e, animationShade: a, className: t }) {
    const { boardItemStyle: o } = Z(),
        i = T(me[e]?.extraSmall ?? pe, me[e]);
    return (0, G.jsxs)('div', {
        className: O(ge, t),
        style: { top: i?.top && m(i.top), left: i?.left && m(i.left) },
        children: [
            (0, G.jsx)(s, {
                path: `personal_missions_30.campaign_selector.threads.threads_${e}_light`,
                width: 404,
                height: 389,
                adaptive: ue,
                className: fe,
            }),
            (0, G.jsx)(u.div, {
                style: 'light' === a ? o : void 0,
                className: fe,
                children: (0, G.jsx)(s, {
                    path: `personal_missions_30.campaign_selector.threads.threads_${e}_dark`,
                    width: 404,
                    height: 389,
                    adaptive: ue,
                }),
            }),
        ],
    });
}
var be = {
        medium: { width: 100, height: 100 },
        large: { width: 120, height: 120 },
        extraLarge: { width: 160, height: 160 },
    },
    Ce = 'completed',
    Se = 'default';
function ve({ completed: e, operationId: a, iconShade: t, className: o }) {
    const i = e ? Ce : Se,
        r = _e[a],
        { top: n, left: c } = T(r?.extraSmall ?? pe, r),
        { boardItemStyle: l, getAnimationShade: p } = Z(),
        d = p(t);
    return (0, G.jsxs)(G.Fragment, {
        children: [
            (0, G.jsx)(s, {
                path: `personal_missions_30.campaign_selector.arrow.${i}_${a}_light`,
                className: o,
                width: '82rem',
                height: '82rem',
                adaptive: be,
                style: { top: m(n), left: m(c) },
            }),
            (0, G.jsx)(u.div, {
                style: 'light' === d ? l : void 0,
                children: (0, G.jsx)(s, {
                    path: `personal_missions_30.campaign_selector.arrow.${i}_${a}_dark`,
                    className: o,
                    width: '82rem',
                    height: '82rem',
                    adaptive: be,
                    style: { top: m(n), left: m(c) },
                }),
            }),
        ],
    });
}
var xe = e(C(), 1),
    ye = {
        base: 'OperationCard_f80d92be',
        background: 'OperationCard_background_82f0a58d',
        base__third: 'OperationCard_base__third_dcb7ac10',
        background__dark: 'OperationCard_background__dark_f4047eec',
        badge: 'OperationCard_badge_f518b903',
        alert: 'OperationCard_alert_dcb7ac10',
        sparks: 'OperationCard_sparks_dcb7ac10',
        glowHover: 'OperationCard_glowHover_bb419c45',
        maskedArea: 'OperationCard_maskedArea_676613e3',
        badge__dark: 'OperationCard_badge__dark_e9065fb1',
        wrapper: 'OperationCard_wrapper_545a72bd',
        name: 'OperationCard_name_28d35292',
        base__light: 'OperationCard_base__light_dcb7ac10',
        base__active: 'OperationCard_base__active_dcb7ac10',
        base__firstTwo: 'OperationCard_base__firstTwo_dcb7ac10',
        hoverArea: 'OperationCard_hoverArea_c18fdca8',
        hoverArea__available: 'OperationCard_hoverArea__available_dcb7ac10',
        glareHover: 'OperationCard_glareHover_ccf115c7',
        glareAttention: 'OperationCard_glareAttention_49917f45',
        base__dark: 'OperationCard_base__dark_dcb7ac10',
    },
    Oe = 'big',
    Ne = 'small',
    Ie = L(function ({
        iconShade: e,
        campaignUnionType: a,
        lastActiveOperationId: t,
        className: o,
        operation: { completed: i, operationIcon: r, operationId: n, operationName: c, state: l },
    }) {
        const p = S.resolve('strings'),
            d = S.resolve('sounds'),
            [_, m] = (0, K.useState)(0),
            { model: g, controls: f } = Y(),
            b = g.computes.isAttention(n, l),
            { boardItemStyle: C, currentStep: O, getAnimationShade: N, openOperation: I } = Z(),
            j = N(e),
            T = W[l],
            k = t === n,
            E = k ? Oe : Ne,
            L = l === H.COMPLETED_WITH_HONORS ? H.COMPLETED_WITH_HONORS : H.COMPLETED,
            R = l === H.LOCKED,
            $ = w(
                'operation',
                (0, K.useMemo)(() => [n], [n]),
            ),
            D = y(
                A.CUSTOM_SIMPLE,
                (0, K.useMemo)(
                    () => ({
                        body: p.readOrEmpty('personal_missions_30.campaignSelector.operation.tooltip.locked'),
                        resId: S.resolve('views').read((e) =>
                            e.mono.personal_missions_30.tooltips.param_tooltip('resId'),
                        ),
                    }),
                    [p],
                ),
            ),
            [V, M] = v(() => ({
                from: { transform: 'translate(10%, -220%) rotate(30deg)' },
                config: { duration: 1e3, easing: h.easeOutCirc },
                loop: !1,
                onRest: () => m((e) => e + 1),
            }));
        return (
            x(() => {
                M.start({ to: { transform: 'translate(-45%, 30%) rotate(30deg)' }, loop: !0, delay: 3e3 });
            }),
            (0, K.useEffect)(() => {
                if ('fadeOut' === O) M.stop();
            }, [M, O]),
            (0, G.jsxs)('div', {
                className: (0, xe.default)(ye.base, ye[`base__${a}`], ye[`base__${e}`], k && ye.base__active, o),
                children: [
                    (0, G.jsx)('div', {
                        className: (0, xe.default)(ye.hoverArea, !R && ye.hoverArea__available),
                        ...(R ? D : $),
                        onClick: function () {
                            R ? D.onClick() : (d.play('yes1'), $.onClick(), I(() => f.openOperation(n)));
                        },
                        onMouseEnter: function (e) {
                            (R ? D.onMouseEnter(e) : $.onMouseEnter(e), R || d.play('gui_hangar_hover'));
                        },
                    }),
                    (0, G.jsx)('div', { className: ye.glowHover }),
                    (0, G.jsx)(s, {
                        path: `personal_missions_30.campaign_selector.card.${a}.${k ? 'active' : T}.${r}_light`,
                        className: ye.background,
                    }),
                    (0, G.jsx)(u.div, {
                        style: 'light' === j ? C : void 0,
                        children: (0, G.jsx)(s, {
                            path: `personal_missions_30.campaign_selector.card.${a}.${k ? 'active' : T}.${r}_dark`,
                            className: (0, xe.default)(ye.background, ye.background__dark),
                        }),
                    }),
                    (0, G.jsxs)('div', {
                        className: ye.maskedArea,
                        children: [
                            (0, G.jsx)('div', { className: ye.glareHover }),
                            _ < 5 && b && (0, G.jsx)(u.div, { style: V, className: ye.glareAttention }),
                        ],
                    }),
                    l === H.LOCKED
                        ? (0, G.jsx)('div', {
                              className: ye.wrapper,
                              children: (0, G.jsx)(s, {
                                  path: 'personal_missions_30.common.card.alert',
                                  width: '48rem',
                                  height: '48rem',
                                  className: ye.alert,
                              }),
                          })
                        : i
                          ? (0, G.jsxs)(G.Fragment, {
                                children: [
                                    (0, G.jsx)(s, {
                                        path: `personal_missions_30.campaign_selector.card.${a}.badge.${L}_light_${E}_${n}`,
                                        className: ye.badge,
                                    }),
                                    (0, G.jsx)(u.div, {
                                        className: (0, xe.default)(ye.badge, ye.badge__dark),
                                        style: 'light' === j ? C : void 0,
                                        children: (0, G.jsx)(s, {
                                            path: `personal_missions_30.campaign_selector.card.${a}.badge.${L}_dark_${E}_${n}`,
                                            width: '100%',
                                            height: '100%',
                                        }),
                                    }),
                                ],
                            })
                          : void 0,
                    (0, G.jsx)('div', { className: ye.name, children: c }),
                ],
            })
        );
    }),
    we = 'Operation_campaignCard_8ac4ca25';
function je({ className: e, ...a }) {
    const t = de[a.operation.operationId],
        { top: o, left: i } = T(t?.extraSmall ?? pe, t);
    return (0, G.jsx)('div', {
        className: e,
        style: { top: m(o), left: m(i) },
        children: (0, G.jsx)(Ie, { ...a, className: we }),
    });
}
var Te = 'Campaign_b9d0bb1c',
    ke = 'Campaign_threads_204a77c9',
    Ee = 'Campaign_arrow_7ed28fa8',
    Le = 'Campaign_operation_5f4543bc';
function He(e, a) {
    switch (e) {
        case R.LOCKED:
        case R.COMPLETED_WITH_HONOR:
        case a:
            return $.light;
        default:
            return $.dark;
    }
}
var Ae = L(function ({ campaignIndex: e, className: a }) {
        const { model: t } = Y(),
            o = t.campaignSelectorViewState.get(),
            i = t.computes.campaignOperations(e),
            s = t.computes.activeOperationId(),
            { getAnimationShade: r } = Z(),
            n = P(e),
            c = He(o, n),
            l = r(c),
            p = F[e],
            d = (function (e, a) {
                return e.reduce(
                    (e, t) => (a === R.FIRST_TWO ? (t.active || t.state === H.AVAILABLE ? t : e) : t.active ? t : e),
                    void 0,
                );
            })(i, n);
        return p
            ? (0, G.jsxs)('div', {
                  className: O(Te, a),
                  children: [
                      i.map((e, a) =>
                          (0, G.jsxs)(
                              K.Fragment,
                              {
                                  children: [
                                      (0, G.jsx)(je, {
                                          iconShade: c,
                                          operation: e,
                                          lastActiveOperationId: d?.operationId,
                                          campaignUnionType: n,
                                          className: Le,
                                      }),
                                      n === R.FIRST_TWO &&
                                          a < i.length - 1 &&
                                          (0, G.jsx)(ve, { ...e, iconShade: c, className: Ee }),
                                  ],
                              },
                              e.operationId,
                          ),
                      ),
                      n === R.THIRD && s && (0, G.jsx)(he, { operationId: s, animationShade: l, className: ke }),
                  ],
              })
            : null;
    }),
    We = {
        base: 'Content_d6e1c064',
        videoWrapper: 'Content_videoWrapper_3b55dd2b',
        base__firstTwo: 'Content_base__firstTwo_da09528a',
        base__third: 'Content_base__third_da09528a',
        base__completedWithHonor: 'Content_base__completedWithHonor_da09528a',
        base__locked: 'Content_base__locked_da09528a',
        video: 'Content_video_112ed3f2',
        campaign: 'Content_campaign_697bf9ad',
        campaign__first: 'Content_campaign__first_6b0c43f0',
        campaign__second: 'Content_campaign__second_d4ebfd7b',
        campaign__third: 'Content_campaign__third_5147ffb6',
    },
    Re = L(function () {
        const e = S.resolve('videos'),
            { model: a } = Y(),
            t = a.campaigns.get(),
            i = a.campaignSelectorViewState.get(),
            { bugsStyle: s } = Z();
        return (0, G.jsxs)('div', {
            className: O(We.base, We[`base__${i}`]),
            children: [
                t
                    .slice(0, 3)
                    .map((e, a) =>
                        (0, G.jsx)(
                            Ae,
                            { campaignIndex: a, className: O(We.campaign, We[`campaign__${F[a]}`]) },
                            e.campaignName,
                        ),
                    ),
                i !== R.FIRST_TWO &&
                    (0, G.jsx)(u.div, {
                        style: s,
                        className: We.videoWrapper,
                        children: (0, G.jsx)(o, {
                            src: e.readOrEmpty('personal_missions_30.campaign_selector.bugs'),
                            className: We.video,
                            loop: !0,
                            autoplay: !0,
                        }),
                    }),
            ],
        });
    }),
    $e = 'Completed_3554cb33',
    De = 'Completed_icon_b7a72552',
    Ve = 'Completed_title_b2013ee0',
    Me = 'Completed_subtitle_446b5d0f';
function Pe({ className: e }) {
    return (0, G.jsxs)('div', {
        className: O($e, e),
        children: [
            (0, G.jsx)(s, {
                path: 'personal_missions_30.campaign_selector.done_160',
                width: '160rem',
                height: '160rem',
                adaptive: {
                    large: { width: 220, height: 220, path: 'personal_missions_30.campaign_selector.done_220' },
                },
                className: De,
            }),
            (0, G.jsx)(t, { className: Ve, path: 'personal_missions_30.campaignSelector.completedAll.title' }),
            (0, G.jsx)(t, { className: Me, path: 'personal_missions_30.campaignSelector.completedAll.subtitle' }),
        ],
    });
}
var Be = 'Locked_33fcc4e0',
    Fe = 'Locked_icon_2a64ac0',
    Ke = 'Locked_subtitle_2b8a289f';
function Ue({ className: e }) {
    return (0, G.jsxs)('div', {
        className: O(Be, e),
        children: [
            (0, G.jsx)(s, {
                path: 'personal_missions_30.campaign_selector.lock_64',
                width: '64rem',
                height: '64rem',
                className: Fe,
            }),
            (0, G.jsx)(t, { className: Ke, path: 'personal_missions_30.campaignSelector.locked' }),
        ],
    });
}
var Ye = 'Congratulations_d8cbc768',
    Ge = 'Congratulations_status_c5e8d951',
    ze = L(function ({ className: e }) {
        const { model: a } = Y(),
            { first: o, second: i, third: r } = a.computes.campaignsInfo(),
            n = a.computes.completedCampaign();
        return (0, G.jsxs)('div', {
            className: O(Ye, e),
            children: [
                (0, G.jsx)(s, { path: 'personal_missions_30.campaign_selector.done', width: '80rem', height: '80rem' }),
                (0, G.jsx)(t, {
                    className: Ge,
                    path: `personal_missions_30.campaignSelector.status.completed.${n}`,
                    params: {
                        firstCampaign: o.campaignName,
                        secondCampaign: i.campaignName,
                        thirdCampaign: r.campaignName,
                    },
                }),
            ],
        });
    }),
    qe = 'Control_9644b6b9',
    Qe = 'Control_status_40fde3b8',
    Xe = 'Control_base__firstTimeEntrance_da09528a',
    Ze = 'Control_base__blocked_da09528a',
    Je = 'Control_wrapper_76264813',
    ea = 'Control_alert_4069240a',
    aa = 'Control_info_a90b2e50',
    ta = 'Control_glareAttention_8e622eb7';
function oa(e, a) {
    return e ? sa.activate : a === R.THIRD ? sa.switchCampaigns : sa.switchCampaign;
}
var ia = { content: 'Control_buttonContent_8e527c3' },
    sa = { switchCampaign: 'switchCampaign', switchCampaigns: 'switchCampaigns', activate: 'activate' },
    ra = L(function () {
        const e = S.resolve('views'),
            a = S.resolve('strings'),
            { model: o, controls: i } = Y(),
            r = o.blockedByVehicle.get(),
            n = o.firstTimeEntrance.get(),
            l = o.campaignSelectorViewState.get(),
            p = o.campaigns.get()[2]?.operations[0]?.state === H.LOCKED,
            { first: d, second: _, third: m } = o.computes.campaignsInfo(),
            g = o.computes.disabledCampaign(),
            f = n && !r,
            b = oa(n, l),
            { UIBlocked: C, startAnimation: x, openOperation: N } = Z();
        const I = y(
                A.CUSTOM_SIMPLE,
                (0, K.useMemo)(
                    () => ({
                        body: a.readOrEmpty('personal_missions_30.campaignSelector.status.button.tooltip'),
                        resId: e.read((e) => e.mono.personal_missions_30.tooltips.param_tooltip('resId')),
                    }),
                    [a, e],
                ),
            ),
            w = y(
                A.CUSTOM_SIMPLE,
                (0, K.useMemo)(
                    () => ({
                        header: a.readOrEmpty('personal_missions_30.campaignSelector.status.tooltip.title'),
                        body: a.readOrEmpty(`personal_missions_30.campaignSelector.status.tooltip.${g}`),
                        resId: e.read((e) => e.mono.personal_missions_30.tooltips.param_tooltip('resId')),
                    }),
                    [g, a, e],
                ),
            ),
            [j, T] = v(() => ({
                from: { transform: 'translate(10%, -220%) rotate(30deg)' },
                to: { transform: 'translate(-60%, 30%) rotate(30deg)' },
                loop: !0,
                delay: 5e3,
                config: { duration: 1e3, easing: h.easeOutCirc },
            }));
        return (0, G.jsxs)('div', {
            className: O(qe, n && Xe, C && Ze),
            children: [
                (0, G.jsx)(t, {
                    className: Qe,
                    path: `personal_missions_30.campaignSelector.status.text.${b}`,
                    params: {
                        firstCampaign: d.campaignName,
                        secondCampaign: _.campaignName,
                        thirdCampaign: m.campaignName,
                        icon: (0, G.jsx)(s, {
                            className: aa,
                            path: 'personal_missions_30.campaign_selector.info',
                            width: '24rem',
                            height: '24rem',
                        }),
                    },
                    ...(!n && w),
                }),
                (0, G.jsxs)('div', {
                    className: Je,
                    ...(r && I),
                    children: [
                        (0, G.jsx)(c, {
                            theme: n ? k.primary : k.secondary,
                            size: 'small',
                            disabled: r || (n && p),
                            classNames: ia,
                            onClick: function () {
                                r || (n ? N(() => i.switchCampaign(g)) : x());
                            },
                            children: a.readOrEmpty(`personal_missions_30.campaignSelector.status.button.${b}`),
                        }),
                        r &&
                            (0, G.jsx)(s, {
                                className: ea,
                                path: 'personal_missions_30.campaign_selector.alert',
                                width: '24rem',
                                height: '24rem',
                            }),
                        f && (0, G.jsx)(u.div, { style: j, className: ta }),
                    ],
                }),
            ],
        });
    }),
    na = {
        base: 'Switcher_b045409e',
        content: 'Switcher_content_b19c6c99',
        content__left: 'Switcher_content__left_bd242217',
        base__firstTwo: 'Switcher_base__firstTwo_9ba1e4f',
        base__firstTimeEntrance: 'Switcher_base__firstTimeEntrance_9ba1e4f',
        content__right: 'Switcher_content__right_52928bd0',
        base__third: 'Switcher_base__third_9ba1e4f',
        content__visible: 'Switcher_content__visible_fb2be705',
    };
var ca = L(function ({ className: e }) {
        const { model: a } = Y(),
            t = a.campaignSelectorViewState.get(),
            o = a.firstTimeEntrance.get(),
            i = (function ({ first: e, second: a, third: t, fourth: o }) {
                return {
                    left: e.completedWithHonor && a.completedWithHonor,
                    right: t.completedWithHonor && o.completedWithHonor,
                };
            })(a.computes.campaignsInfo());
        return (0, G.jsx)('div', {
            className: O(na.base, na[`base__${t}`], o && na.base__firstTimeEntrance, e),
            children: Object.keys(V).map((e) => {
                const a = i[e];
                return (0, G.jsx)(
                    'div',
                    {
                        className: O(na.content, na[`content__${e}`], a && na.content__visible),
                        children: a ? (0, G.jsx)(ze, {}) : (0, G.jsx)(ra, {}),
                    },
                    e,
                );
            }),
        });
    }),
    la = {
        base: 'Footer_d2687e3',
        base__firstTwo: 'Footer_base__firstTwo_4308958a',
        base__default: 'Footer_base__default_4308958a',
        base__third: 'Footer_base__third_6ab8fda8',
        base__locked: 'Footer_base__locked_4308958a',
        base__completedWithHonor: 'Footer_base__completedWithHonor_954c2d1e',
    },
    pa = L(function ({ className: e }) {
        const { model: a } = Y(),
            t = a.campaignSelectorViewState.get(),
            { footerStyle: o } = Z();
        return (0, G.jsx)(u.div, {
            style: o,
            className: O(la.base, la[`base__${t}`], e),
            children: (() => {
                switch (t) {
                    case R.FIRST_TWO:
                    case R.THIRD:
                        return (0, G.jsx)(ca, {});
                    case R.COMPLETED_WITH_HONOR:
                        return (0, G.jsx)(Pe, {});
                    case R.LOCKED:
                        return (0, G.jsx)(Ue, {});
                }
            })(),
        });
    }),
    da = {
        particles: 'CampaignSelector_particles_6921a00e',
        base: 'CampaignSelector_c83ac2ea',
        content: 'CampaignSelector_content_7f268683',
        base__blocked: 'CampaignSelector_base__blocked_39b3c306',
        background: 'CampaignSelector_background_2a460990',
        footer: 'CampaignSelector_footer_b309f959',
        base__firstTwo: 'CampaignSelector_base__firstTwo_39b3c306',
        base__default: 'CampaignSelector_base__default_39b3c306',
        base__third: 'CampaignSelector_base__third_39b3c306',
        base__locked: 'CampaignSelector_base__locked_39b3c306',
        base__completedWithHonor: 'CampaignSelector_base__completedWithHonor_39b3c306',
        video: 'CampaignSelector_video_8f009bf0',
    },
    _a = L(function () {
        const e = S.resolve('videos'),
            { model: a, controls: t } = Y(),
            i = a.campaignSelectorViewState.get(),
            { contentStyle: s, UIBlocked: n, closeRef: c } = Z();
        return (
            N(r.ESCAPE, function () {
                if (c.current) return;
                t.close();
            }),
            (0, G.jsx)('div', {
                className: O(da.base, da[`base__${i}`], n && da.base__blocked),
                children: (0, G.jsxs)(u.div, {
                    style: s,
                    className: da.content,
                    children: [
                        (0, G.jsx)(le, { className: da.background, children: (0, G.jsx)(Re, {}) }),
                        (0, G.jsx)(ne, { className: da.particles }),
                        (0, G.jsx)(o, {
                            src: e.readOrEmpty('personal_missions_30.campaign_selector.smoke'),
                            className: da.video,
                            loop: !0,
                            autoplay: !0,
                        }),
                        (0, G.jsx)(pa, { className: da.footer }),
                    ],
                }),
            })
        );
    }),
    ma = {
        getter: a({
            campaigns: [
                {
                    campaignName: 'The Long-Awaited Backup',
                    completedWithHonor: !1,
                    operations: [
                        {
                            state: H.COMPLETED_WITH_HONORS,
                            operationId: 1,
                            operationName: 'StuG IV',
                            completed: !1,
                            isSelected: !1,
                            operationIcon: 'tile_1_1',
                        },
                        {
                            state: H.AVAILABLE,
                            operationId: 2,
                            operationName: 'T28 HTC',
                            completed: !0,
                            isSelected: !1,
                            operationIcon: 'tile_1_2',
                        },
                        {
                            state: H.ACTIVE,
                            operationId: 3,
                            operationName: 'T 55A',
                            completed: !1,
                            isSelected: !1,
                            operationIcon: 'tile_1_3',
                        },
                        {
                            state: H.LOCKED,
                            operationId: 4,
                            operationName: 'Object 260',
                            completed: !1,
                            isSelected: !1,
                            operationIcon: 'tile_1_4',
                        },
                    ],
                },
                {
                    campaignName: 'Second Front',
                    completedWithHonor: !1,
                    operations: [
                        {
                            state: H.COMPLETED_WITH_HONORS,
                            operationId: 5,
                            operationName: 'Excalibur',
                            completed: !1,
                            isSelected: !1,
                            operationIcon: 'tile_5_1',
                        },
                        {
                            state: H.ACTIVE,
                            operationId: 6,
                            operationName: 'Chimera',
                            completed: !0,
                            isSelected: !1,
                            operationIcon: 'tile_6_1',
                        },
                        {
                            state: H.LOCKED,
                            operationId: 7,
                            operationName: 'Object 279 (e)',
                            completed: !1,
                            isSelected: !1,
                            operationIcon: 'tile_7_1',
                        },
                    ],
                },
                {
                    campaignName: 'Awesome Third Campaign',
                    completedWithHonor: !1,
                    operations: [
                        {
                            state: H.COMPLETED_WITH_HONORS,
                            operationId: 8,
                            operationName: 'Zebra',
                            completed: !1,
                            isSelected: !1,
                            operationIcon: 'tile_8_1',
                        },
                        {
                            state: H.ACTIVE,
                            operationId: 9,
                            operationName: 'Tiger',
                            completed: !0,
                            isSelected: !1,
                            operationIcon: 'tile_9_1',
                        },
                        {
                            state: H.LOCKED,
                            operationId: 10,
                            operationName: 'Crocodile',
                            completed: !1,
                            isSelected: !1,
                            operationIcon: 'tile_10_1',
                        },
                        {
                            state: H.ACTIVE,
                            operationId: 11,
                            operationName: '4 operation',
                            completed: !1,
                            isSelected: !1,
                            operationIcon: 'tile_11_1',
                        },
                    ],
                },
            ],
            blockedByVehicle: !1,
            firstTimeEntrance: !1,
            campaignSelectorViewState: R.THIRD,
        }),
        controls: ({ model: e }) => l({ switchCampaign: (a) => e.campaignSelectorViewState.set(a), openOperation: i }),
    };
I(
    (0, G.jsx)(n, {
        soundsOverrides: M,
        children: (0, G.jsx)(U, { mocks: ma, mode: 'real', children: (0, G.jsx)(X, { children: (0, G.jsx)(_a, {}) }) }),
    }),
    { fullScreen: !0 },
);
