import { r as e } from '../chunks/rolldown-runtime.js';
import {
    $t as s,
    B as a,
    Gt as t,
    Hn as n,
    Hr as o,
    It as r,
    Kn as i,
    Lt as l,
    Mn as c,
    Mr as d,
    On as u,
    Pn as _,
    Qr as m,
    Ri as y,
    Tn as h,
    V as p,
    Wr as f,
    Xn as b,
    _i as g,
    _n as x,
    bn as j,
    en as v,
    gt as w,
    in as k,
    mi as C,
    mr as N,
    nn as A,
    vr as S,
    yn as I,
} from '../chunks/lib.js';
import '../chunks/_wg-global-styles.js';
import { n as Q, t as D } from '../chunks/vendor.js';
import { n as M, t as E } from '../chunks/spring_wrapper.js';
import { t as B } from '../chunks/sound.js';
import { n as T, r as z, t as $ } from '../chunks/button.js';
import { t as L } from '../chunks/close_button.js';
import { c as V, i as W, o as O, r as P, s as H } from '../chunks/utils.js';
/* empty css           */ import { n as q, r as F, t as K } from '../chunks/video_background.js';
var G = e(y(), 1),
    X = e(D(), 1),
    [J, U] = h()(
        ({ observableModel: e }) => ({
            ...e.primitives([
                'id',
                'name',
                'index',
                'isMuted',
                'isOutroVisible',
                'isOutroDisabled',
                'isTransition',
                'isPreviousArtefactAvailable',
                'isNextArtefactAvailable',
            ]),
            rewards: e.array('rewards'),
            types: e.array('types'),
        }),
        ({ externalModel: e }) => ({
            affirmation: e.createCallbackNoArgs('onAffirmation'),
            muted: e.createCallbackNoArgs('onMuted'),
            outro: e.createCallbackNoArgs('onOutroVideo'),
            onChangeQuest: e.createCallback((e) => ({ index: e }), 'onChangeQuest'),
        }),
    ),
    Y = 'DecryptBackground_background_1e04d389',
    Z = 'DecryptBackground_video_d2a03ca5',
    ee = 'DecryptBackground_vignetteBg_1fb0f89e',
    se = S(),
    ae = Q(function ({ isFinal: e }) {
        const { model: s } = U(),
            a = s.index.get(),
            t = s.types.get(),
            n = o(t, 'video'),
            r = `bg_${e ? 'final' : a}`;
        return (0, se.jsxs)(se.Fragment, {
            children: [
                !n || g.isLow()
                    ? (0, se.jsx)(
                          'div',
                          {
                              className: Y,
                              style: {
                                  backgroundImage: `url('R.images.halloween.gui.maps.icons.backgrounds.decrypt_bg.${r}')`,
                              },
                          },
                          r,
                      )
                    : (0, se.jsx)(
                          K,
                          {
                              onPlay: () => C.sound(`ev_hw_meta_quantum${a}_vid_sync`),
                              className: Z,
                              src: R.videos.halloween.artefacts.$dyn(r),
                          },
                          r,
                      ),
                (0, se.jsx)('div', { className: ee }),
            ],
        });
    }),
    te = 'button',
    ne = 'hint',
    oe = { step: { ...x.step, factor: 9 }, animationConfig: x.animationConfig },
    re = ({ isScrollActive: e, children: s, barClassNames: a }) =>
        e ? (0, se.jsx)(A, { settings: oe, children: (0, se.jsx)(k, { barClassNames: a, children: s }) }) : s,
    ie = 'Story_bd7b4662',
    le = 'Story_scroll_ff20a91a',
    ce = 'Story_text_b2dd62a5',
    de = 'Story_bar_57890684',
    ue = 'Story_textTitle_48af8786',
    _e = 'Story_titleManual_79887e79',
    me = 'Story_textManual_c6683b22',
    ye = 'Story_keyWordWhite_d0b17d35',
    he = 'Story_keyWordRed_5dbfa8d1',
    pe = 'Story_keyWordViolet_dd9475ce',
    fe = G.memo(function ({ artefactId: e, className: a }) {
        const t = (0, G.useRef)(null),
            o = (0, G.useRef)(null),
            [r, i] = (0, G.useState)(!0),
            l = (0, G.useCallback)(() => {
                o.current && t.current && i(t.current.offsetHeight < o.current.offsetHeight);
            }, []);
        return (
            (0, G.useEffect)(() => d(l), [l]),
            n(l, [l, e]),
            (0, se.jsx)('div', {
                className: (0, X.default)(ie, a),
                children: (0, se.jsx)('div', {
                    className: le,
                    ref: t,
                    children: (0, se.jsx)(re, {
                        isScrollActive: r,
                        barClassNames: { base: de },
                        children: (0, se.jsx)('div', {
                            className: ce,
                            ref: o,
                            children: (0, se.jsx)(s, {
                                text: R.strings.halloween_lobby.meta.story.$dyn(e),
                                params: {
                                    titleClass: ue,
                                    titleManual: _e,
                                    textManual: me,
                                    keyWordViolet: pe,
                                    keyWordWhite: ye,
                                    keyWordRed: he,
                                },
                                inline: !0,
                            }),
                        }),
                    }),
                }),
            })
        );
    }),
    be = 'QuestInfo_e2e1ffa0',
    ge = 'QuestInfo_bg_5f6643af',
    xe = 'QuestInfo_name_3ced099f',
    je = 'QuestInfo_index_d3e894a3',
    ve = 'QuestInfo_indexRed_b82a0529',
    we = 'QuestInfo_kingReward_7ceee4c4',
    ke = 'QuestInfo_status_37c776ac',
    Ce = 'QuestInfo_rewards_d5d683c3',
    Ne = 'QuestInfo_reward_8f34da49',
    Ae = 'QuestInfo_voiceover_3898c07e',
    Re = 'QuestInfo_buttons_3d2b7563',
    Se = 'QuestInfo_outroVideo_265f2939',
    Ie = 'QuestInfo_icon_e448285d',
    Qe = 'QuestInfo_description_540522c0',
    De = 1100,
    Me = { from: { opacity: 0, y: -5 } },
    Ee = { opacity: 0 },
    Be = R.strings.halloween_lobby.decrypt.outroVideoTooltip,
    Te = Q(({ className: e, skipAnim: s }) => {
        const { model: n, controls: i } = U(),
            c = n.id.get(),
            d = n.rewards.get(),
            _ = N({ size: l.Small }, { large: { size: l.Big } }),
            m = u(),
            y = n.isOutroDisabled.get(),
            h = n.isNextArtefactAvailable.get(),
            p = o(n.types.get(), 'final') && !h,
            b = (0, G.useCallback)(() => {
                m.play('animation', { target: 'reward' });
            }, [m]);
        return (0, se.jsxs)('div', {
            className: (0, X.default)(be, e),
            children: [
                (0, se.jsx)('div', { className: ge }),
                (0, se.jsx)(M, {
                    ...Me,
                    duration: 800,
                    delay: 500,
                    isCanceled: s,
                    children: (0, se.jsxs)('div', {
                        className: xe,
                        children: [
                            (0, se.jsxs)('div', {
                                className: je,
                                children: [
                                    p ? (0, se.jsx)('div', { className: we }) : H(n.index.get()),
                                    (0, se.jsx)('div', { className: ve }),
                                ],
                            }),
                            n.name.get(),
                        ],
                    }),
                }),
                (0, se.jsx)(M, {
                    ...Me,
                    duration: 800,
                    delay: 700,
                    isCanceled: s,
                    children: (0, se.jsx)('div', {
                        className: ke,
                        children: R.strings.halloween_lobby.decrypt.completed(),
                    }),
                }),
                (0, se.jsx)('div', {
                    className: Ce,
                    children: f(d, (e, a) =>
                        (0, se.jsx)(
                            'div',
                            {
                                className: Ne,
                                children: (0, se.jsx)(M, {
                                    ...Me,
                                    duration: 800,
                                    delay: De + 120 * a,
                                    easingType: E.EaseOutBack,
                                    isCanceled: s,
                                    onStart: b,
                                    children: (0, se.jsx)(w, {
                                        name: e.name,
                                        value: O(e),
                                        size: _.size,
                                        special: e.overlayType,
                                        image: P(e, _.size),
                                        valueType: r(e.name),
                                        tooltipArgs: W(e),
                                    }),
                                }),
                            },
                            `${e.name}${a}`,
                        ),
                    ),
                }),
                (0, se.jsx)(M, {
                    ...Me,
                    duration: 800,
                    delay: De + 120 * d.length,
                    isCanceled: s,
                    children: (0, se.jsxs)('div', {
                        className: Re,
                        children: [
                            o(n.types.get(), 'sound') &&
                                (0, se.jsx)(t, {
                                    asChild: !0,
                                    params: { body: R.strings.halloween_lobby.decrypt.voiceoverTooltip() },
                                    children: (0, se.jsxs)(a, {
                                        className: Ae,
                                        size: a.sizes.small,
                                        activated: !n.isMuted.get(),
                                        onClick: i.muted,
                                        children: [
                                            (0, se.jsx)(v, {
                                                path: 'R.images.halloween.gui.maps.icons.hangar.sound',
                                                className: Ie,
                                            }),
                                            R.strings.halloween_lobby.decrypt.voiceover(),
                                        ],
                                    }),
                                }),
                            p &&
                                n.isOutroVisible.get() &&
                                (0, se.jsx)(t, {
                                    params: { body: y ? Be.disabled() : Be.active() },
                                    children: (0, se.jsxs)(a, {
                                        className: Se,
                                        size: a.sizes.small,
                                        disabled: y,
                                        onClick: () => {
                                            (m.play('click', { target: 'outro' }), i.outro());
                                        },
                                        children: [
                                            (0, se.jsx)(v, {
                                                path: 'R.images.halloween.gui.maps.icons.hangar.outro',
                                                className: Ie,
                                            }),
                                            R.strings.halloween_lobby.decrypt.outroVideo(),
                                        ],
                                    }),
                                }),
                        ],
                    }),
                }),
                (0, se.jsx)(M, {
                    from: Ee,
                    duration: 1600,
                    delay: De + 120 * d.length * 2,
                    isCanceled: s,
                    children: (0, se.jsx)(fe, { className: Qe, artefactId: V(c) }, c),
                }),
            ],
        });
    }),
    ze = 'DecryptContent_questInfo_199c938c',
    $e = 'DecryptContent_buttons_d2d2bec6',
    Le = 'DecryptContent_button_23bca5d0',
    Ve = 'DecryptContent_spaceInfo_86eb7482',
    We = 'DecryptContent_spaceText_4fb1bb98',
    Oe = 'DecryptContent_spaceKey_384fa724',
    Pe = 'DecryptContent_spaceContent_5bd59a6c',
    He = Q(function ({ skipAnim: e }) {
        const { model: s, controls: a } = U(),
            t = s.index.get(),
            n = s.rewards.get().length,
            o = s.isTransition.get(),
            r = (0, G.useMemo)(
                () =>
                    ((e) => {
                        const s = 1100 + 120 * e * 5;
                        return {
                            [te]: { from: { opacity: 0, y: 5 }, delay: s, duration: 800 },
                            [ne]: { from: { opacity: 0 }, to: { opacity: 0.6 }, delay: s, duration: 800 },
                        };
                    })(n),
                [n],
            );
        return (0, se.jsxs)(se.Fragment, {
            children: [
                (0, se.jsx)(Te, { className: ze, skipAnim: e }, t),
                (0, se.jsx)('div', {
                    className: $e,
                    children: (0, se.jsx)(
                        M,
                        {
                            ...r[te],
                            className: Le,
                            onStart: () => C.sound(B),
                            isCanceled: e,
                            children: (0, se.jsx)($, {
                                type: z.Secondary,
                                caption: o
                                    ? R.strings.halloween_lobby.common.btnContinue()
                                    : R.strings.halloween_lobby.common.yes(),
                                size: T.ExtraLarge,
                                onClick: a.affirmation,
                            }),
                        },
                        `btn_${t}`,
                    ),
                }),
                (0, se.jsxs)(
                    M,
                    {
                        ...r[ne],
                        className: Ve,
                        isCanceled: e,
                        children: [
                            (0, se.jsx)(p, {
                                className: Oe,
                                keyCode: m.SPACE,
                                silent: !0,
                                classNames: { content: Pe },
                                children: (0, se.jsx)(p.Code, {}),
                            }),
                            (0, se.jsx)('div', {
                                className: We,
                                children: R.strings.halloween_lobby.decrypt.hideShow(),
                            }),
                        ],
                    },
                    `hint_${t}`,
                ),
            ],
        });
    }),
    qe = Q(function ({ side: e, disabled: s, onClick: a, tooltipHeader: t, tooltipBody: n, className: o }) {
        const r = (0, G.useRef)(null),
            i = _({ header: t, body: n });
        return (
            (0, G.useEffect)(() => {
                s && r.current && i.onMouseEnter(r.current);
            }, [s, i]),
            (0, se.jsx)('div', {
                className: o,
                onMouseEnter: (e) => {
                    s ? i.onMouseEnter(e) : (r.current = e);
                },
                onMouseLeave: () => {
                    ((r.current = null), i.onMouseLeave());
                },
                children: (0, se.jsx)(q, { type: e, disabled: s, onClick: a, showLock: !0 }),
            })
        );
    }),
    Fe = 'DecryptApp_9d6b3505',
    Ke = 'DecryptApp_closeBtn_28267da0',
    Ge = 'DecryptApp_content_df9bd76a',
    Xe = 'DecryptApp_content__hidden_ac59ed0a',
    Je = 'DecryptApp_leftArrow_acaead0f',
    Ue = 'DecryptApp_rightArrow_efc52898',
    Ye = Q(function () {
        const { model: e, controls: s } = U(),
            a = u(),
            t = b(),
            [n, r] = (0, G.useState)(!1),
            [l, c] = (0, G.useState)(!1),
            d = e.index.get(),
            _ = e.isPreviousArtefactAvailable.get(),
            y = e.isNextArtefactAvailable.get(),
            h = o(e.types.get(), 'final') && !y;
        return (
            (0, G.useEffect)(() => {
                r(!1);
            }, [d]),
            (0, G.useEffect)(() => {
                t ||
                    ((e) => {
                        const s = e ? 'hide' : 'show';
                        a.play('ui', { target: s });
                    })(l);
            }, [l]),
            (0, G.useEffect)(() => {
                const e = (e) => {
                    switch (e.keyCode) {
                        case m.ENTER:
                            s.affirmation();
                            break;
                        case m.SPACE:
                            (c((e) => !e), r(!0));
                            break;
                        default:
                            c(!1);
                    }
                };
                return (
                    window.addEventListener('keydown', e),
                    () => {
                        window.removeEventListener('keydown', e);
                    }
                );
            }, [s]),
            i(s.affirmation),
            (0, se.jsxs)('div', {
                className: Fe,
                onClick: () => r(!0),
                children: [
                    !l && (0, se.jsx)(L, { className: Ke, onClose: s.affirmation }),
                    d > 1 &&
                        (0, se.jsx)(qe, {
                            side: F.Left,
                            disabled: !_,
                            onClick: () => s.onChangeQuest(d - 1),
                            tooltipHeader: R.strings.halloween_lobby.decrypt.arrowPrev.disabled.header(),
                            tooltipBody: R.strings.halloween_lobby.decrypt.arrowPrev.disabled.body(),
                            className: Je,
                        }),
                    !h &&
                        (0, se.jsx)(qe, {
                            side: F.Right,
                            disabled: !y,
                            onClick: () => s.onChangeQuest(d + 1),
                            tooltipHeader: R.strings.halloween_lobby.decrypt.arrow.disabled.header(),
                            tooltipBody: R.strings.halloween_lobby.decrypt.arrow.disabled.body(),
                            className: Ue,
                        }),
                    (0, se.jsx)(ae, { isFinal: h }),
                    (0, se.jsx)('div', {
                        className: (0, X.default)(Ge, l && Xe),
                        children: (0, se.jsx)(He, { skipAnim: n }),
                    }),
                ],
            })
        );
    }),
    Ze = c({
        click: { outro: 'ev_hw_meta_narrative_outro' },
        animation: { reward: 'ev_hw_reward_screen_icon' },
        ui: { hide: 'ev_hw_hangar_ui_quantum_toggle_hide', show: 'ev_hw_hangar_ui_quantum_toggle_show' },
    });
j((0, se.jsx)(J, { children: (0, se.jsx)(I, { soundsOverrides: Ze, children: (0, se.jsx)(Ye, {}) }) }));
