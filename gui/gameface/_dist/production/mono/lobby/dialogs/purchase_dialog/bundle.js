import { r as e } from '../../chunks/rolldown-runtime.js';
import {
    Bo as a,
    C as s,
    Cs as r,
    Da as t,
    Es as n,
    F as c,
    Fa as i,
    Gi as o,
    Ho as l,
    Hr as d,
    Ht as u,
    Ji as _,
    Ka as m,
    M as h,
    Ma as p,
    Mi as x,
    Mr as f,
    Na as y,
    Ni as b,
    O as v,
    Qi as g,
    Qo as C,
    Rr as j,
    T as N,
    Ti as I,
    Zt as w,
    _i as P,
    cr as A,
    fi as H,
    gi as S,
    hi as k,
    ka as E,
    kr as T,
    nn as W,
    q as M,
    tn as V,
    wt as O,
    xs as z,
    y as D,
    yo as B,
} from '../../chunks/lib.js';
import '../../chunks/_wg-global-styles.js';
import { a as U, i as L } from '../../chunks/vendor.js';
/* empty css                  */ import { t as $ } from '../../chunks/get_button_size.js';
import { n as F, t as Q } from '../../chunks/vehicle_name.js';
import { t as q } from '../../chunks/get_comp7_reward.js';
import { r as G, t as K } from '../../chunks/quoted_locale.js';
import { n as X, t as J } from '../../chunks/close_button.js';
var Z = (function (e) {
        return (
            (e[(e.Confirmation = 0)] = 'Confirmation'),
            (e[(e.FlyBy = 1)] = 'FlyBy'),
            (e[(e.Congratulation = 2)] = 'Congratulation'),
            (e[(e.Error = 3)] = 'Error'),
            e
        );
    })({}),
    Y = e(r(), 1),
    ee = [G.Vehicle, G.Style3d],
    ae = [Z.Confirmation, Z.Congratulation],
    [se, re] = P()(
        ({ observableModel: e }) => {
            const s = { root: e.object(), product: e.array('product') },
                r = S(
                    () => {
                        const e = B(s.product.get(), 0);
                        if (!e) throw new Error('product with index 0 is not found');
                        return e;
                    },
                    { equals: a },
                ),
                t = S(() => r().price.discountValue > 0),
                n = S(() => ee.includes(r().type) && ae.includes(s.root.get().pageState)),
                c = S(() => r().type === G.Reward && s.root.get().pageState !== Z.Error),
                i = S(() => (r().type === G.Reward && s.root.get().pageState === Z.Congratulation ? 1300 : 300));
            return {
                ...s,
                computes: {
                    product: r,
                    hasDiscount: t,
                    hasAnimatedReward: c,
                    pageStateTransitionDelay: i,
                    isCameraRotationAvailable: n,
                },
            };
        },
        ({ externalModel: e }) => ({
            close: e.createCallbackNoArgs('onClose'),
            confirm: e.createCallbackNoArgs('onConfirm'),
            mouseOver3dScene: e.createCallback(({ isOver3dScene: e }) => ({ isOver3dScene: e }), 'onMouseOver3dScene'),
            moveSpace: e.createCallback(({ dx: e, dy: a, dz: s }) => ({ dx: e, dy: a, dz: s }), 'onMoveSpace'),
        }),
    ),
    te = e(L(), 1),
    ne = 'Highlight_bae8c620',
    ce = 'Highlight_rays_a61afd52',
    ie = 'Highlight_4b27c1b2',
    oe = e(y(), 1),
    le = ({ className: e }) =>
        (0, oe.jsxs)('div', {
            className: (0, te.default)(ne, e),
            children: [
                (0, oe.jsx)('div', { className: ce }),
                (0, oe.jsx)(c, {
                    className: (0, te.default)(ie),
                    src: String(R.videos.comp7.$dyn('godRaysNew_1600x1600')),
                    autoplay: !0,
                    loop: !0,
                }),
            ],
        }),
    de = 'AnimatedReward_6648a57c',
    ue = 'AnimatedReward_highlight_df228c89',
    _e = 'AnimatedReward_highlight__visible_d238da74',
    me = 'AnimatedReward_reward_57bfc05b',
    he = 'AnimatedReward_reward__success_7efcba6',
    pe = { from: { opacity: 0 }, to: { opacity: 1 }, delay: 300, config: { duration: 300 } },
    xe = U(({ className: e }) => {
        const { model: a } = re(),
            { pageState: s } = a.root.get(),
            r = a.computes.product();
        if (r.type !== G.Reward) throw new Error('unexpected usage of AnimatedReward component');
        const { mediaSize: t } = p(),
            n = t >= i.Medium ? h.S600x450 : h.S400x300,
            c = _(pe),
            l = s === Z.Congratulation;
        return (
            (0, Y.useEffect)(() => {
                s === Z.Congratulation && C.sound(R.sounds.comp_7_shop_purchase_module());
            }, [s, r.type]),
            (0, oe.jsxs)(o.div, {
                style: c,
                className: (0, te.default)(de, e),
                children: [
                    (0, oe.jsx)(le, { className: (0, te.default)(ue, l && _e) }),
                    (0, oe.jsx)(v, { className: (0, te.default)(me, l && he), ...q({ reward: r.reward, size: n }) }),
                ],
            })
        );
    }),
    [fe, ye] = P('WalletModel')(
        ({ observableModel: e }) => {
            const a = { currencies: e.dict('currencies') };
            return {
                ...a,
                list: k.shallow((e) =>
                    Array.from(a.currencies.keys.values()).sort((a, s) => {
                        const r = e.indexOf(a),
                            t = e.indexOf(s),
                            n = e.length;
                        return (-1 === r ? n : r) - (-1 === t ? n : t);
                    }),
                ),
            };
        },
        ({ externalModel: e }) => ({ currencyAction: e.createCallback((e) => ({ type: e }), 'onCurrencyAction') }),
    ),
    be = 'Hint_e53dd99e',
    ve = 'Hint_discountBackground_d56ce0a3',
    ge = 'Hint_discount_94b7b9ff',
    Ce = 'Hint_onlyDiscount_8b648a0a',
    je = 'Hint_discountWithHintText_381cf018',
    Ne = 'Hint_onlyHintText_751386e1',
    Ie = 'Hint_discountValue_b1f389fc',
    we = 'Hint_discountHintTitle_9db2d839',
    Pe = 'Hint_hintText_6f3fa83f',
    Ae = 'Hint_hintTitle_135a3ed',
    Re = 'Hint_discountValue__withHint_e7bbe38f';
function He({ classNames: e }) {
    const a = n.resolve('strings');
    return (0, oe.jsxs)('div', {
        className: z(Ce, e?.onlyDiscount),
        children: [
            (0, oe.jsx)('div', { className: z(ve, e?.discountBackground) }),
            (0, oe.jsx)(s.Root, {
                children: (0, oe.jsx)(s.Value, {
                    value: a.readOrEmpty('common.common.percent'),
                    classNames: { valueContainer: z(ge, e?.discount), value: z(Ie, e?.discountValue) },
                }),
            }),
        ],
    });
}
function Se({ type: e, classNames: a }) {
    const s = n.resolve('intl'),
        r = n.resolve('strings');
    return (0, oe.jsx)('div', {
        className: z(Pe, Ne, a?.hintText, a?.onlyHintText),
        children: (0, oe.jsx)(D, {
            classNames: a?.textGradient,
            children: (0, oe.jsx)('div', {
                className: z(Ae, a?.hintTitle),
                children: s.toUpperCase(r.readOrEmpty(`menu.headerButtons.btnLabel.${e}`)),
            }),
        }),
    });
}
function ke({ classNames: e, type: a }) {
    const r = n.resolve('intl'),
        t = n.resolve('strings');
    return (0, oe.jsxs)('div', {
        className: z(je, e?.discountWithHintText),
        children: [
            (0, oe.jsx)('div', { className: z(ve, e?.discountBackground) }),
            (0, oe.jsx)('div', {
                className: z(we, e?.discountHintTitle),
                children: r.toUpperCase(t.readOrEmpty(`menu.headerButtons.btnLabel.${a}`)),
            }),
            (0, oe.jsx)(s.Root, {
                children: (0, oe.jsx)(s.Value, {
                    value: t.readOrEmpty('common.common.percent'),
                    classNames: { valueContainer: z(ge, e?.discount), value: z(Ie, Re, e?.discountValue) },
                }),
            }),
        ],
    });
}
function Ee({ classNames: e, type: a }) {
    return (0, oe.jsxs)('div', {
        className: z(be, e?.base),
        children: [
            (0, oe.jsx)(He, {
                classNames: {
                    onlyDiscount: e?.onlyDiscount,
                    discountBackground: e?.discountBackground,
                    discount: e?.discount,
                    discountValue: e?.discountValue,
                },
            }),
            (0, oe.jsx)(Se, {
                type: a,
                classNames: { hintText: e?.hintText, textGradient: e?.textGradient, onlyHintText: e?.onlyHintText },
            }),
            (0, oe.jsx)(ke, { classNames: e, type: a }),
        ],
    });
}
var Te = {
        base: 'Currency_92022680',
        hintWrapper: 'Currency_hintWrapper_530465b9',
        base__interactive: 'Currency_base__interactive_52396ddd',
        currencyWrapper: 'Currency_currencyWrapper_b13579ba',
        currencyIcon: 'Currency_currencyIcon_346f8c78',
        value: 'Currency_value_b1cf6531',
        value__unavailable: 'Currency_value__unavailable_3a328d4',
        dash: 'Currency_dash_2806b61e',
        formattedValue: 'Currency_formattedValue_b7cad7e0',
        hint: 'Currency_hint_f9d16bb2',
        base__hidden: 'Currency_base__hidden_271064ec',
        text: 'Currency_text_f4484816',
        text__overlay: 'Currency_text__overlay_64b93131',
        discountWithHintText: 'Currency_discountWithHintText_95e3324b',
        base__discount: 'Currency_base__discount_271064ec',
        onlyHintText: 'Currency_onlyHintText_61ecd7b0',
        onlyDiscount: 'Currency_onlyDiscount_61ecd7b0',
        fadeIn: 'Currency_fadeIn_271064ec',
        fadeInThreeQuarters: 'Currency_fadeInThreeQuarters_271064ec',
        fadeInHalf: 'Currency_fadeInHalf_271064ec',
        fadeOut: 'Currency_fadeOut_271064ec',
        fadeInWithScale: 'Currency_fadeInWithScale_271064ec',
        slideUp: 'Currency_slideUp_271064ec',
        scale: 'Currency_scale_271064ec',
        raysAppearance: 'Currency_raysAppearance_271064ec',
        rotate: 'Currency_rotate_271064ec',
        'reverse-rotate': 'Currency_reverse-rotate_271064ec',
        glowAppearance: 'Currency_glowAppearance_271064ec',
        highlightAppearance: 'Currency_highlightAppearance_271064ec',
        blink: 'Currency_blink_271064ec',
        slideUpIn: 'Currency_slideUpIn_271064ec',
    },
    We = 1e6,
    Me = 1e5;
function Ve({ wgMoneyAvailable: e, value: a, type: s, classNames: r }) {
    const c = (0, Y.useRef)(null),
        i = n.resolve('intl'),
        o = n.resolve('strings'),
        l = t(
            {
                displayValue: () =>
                    a >= We ? { abbreviated: !0, value: m(a, Me, 'floor') / We } : { abbreviated: !1, value: a },
            },
            {
                medium: {
                    displayValue: () =>
                        a >= 1e7 ? { abbreviated: !0, value: m(a, Me, 'floor') / We } : { abbreviated: !1, value: a },
                },
                large: {
                    displayValue: () =>
                        a >= 1e8 ? { abbreviated: !0, value: m(a, Me, 'floor') / We } : { value: a, abbreviated: !1 },
                },
            },
        );
    if (!1 === e)
        return (0, oe.jsxs)('div', {
            className: z(Te.value, Te.value__unavailable, r?.value),
            children: [
                (0, oe.jsx)('div', { className: Te.dash, children: o.readOrEmpty('common.common.semi_dash') }),
                (0, oe.jsx)('div', { className: Te.dash, children: o.readOrEmpty('common.common.semi_dash') }),
            ],
        });
    const d = l.displayValue();
    return (0, oe.jsx)('div', {
        ref: c,
        className: z(Te.value, r?.base),
        children: d.abbreviated
            ? (0, oe.jsx)(A, {
                  path: 'menu.hangar_header.million',
                  params: { value: d.value },
                  brackets: { start: '%(', end: ')s' },
                  className: z(Te.formattedValue, r?.formattedValue),
              })
            : i.formatNumber(s === W.gold ? 'gold' : 'integral', d.value),
    });
}
var Oe = U(function ({ currency: e, type: a, className: s, classNames: r }) {
        const { controls: c } = ye(),
            i = I(),
            o = 'AVAILABLE' === e.status,
            l = (function (e, a, s, r) {
                const t = n.resolve('strings'),
                    c = x({
                        header: t.readOrEmpty(`tooltips.header.buttons.${e}.header`),
                        body: t.readOrEmpty(`tooltips.header.buttons.${e}.body`),
                    }),
                    i = (0, Y.useMemo)(() => ({ disabled: 'string' != typeof s || '' === s }), [s]),
                    o = b(
                        s,
                        (0, Y.useMemo)(() => [r], [r]),
                        i,
                    );
                return !1 === a ? c : o;
            })(a, o, e.tooltipType, e.value),
            d = E(
                t({ size: V.extraSmall }, { large: { size: V.small }, extraLarge: { size: V.medium } }).size,
                V.small,
            );
        return (0, oe.jsxs)('div', {
            ...l,
            className: z(
                Te.base,
                o ? Te.base__interactive : Te.base__nonInteractive,
                e.discount > 0 && Te.base__discount,
                s,
            ),
            onMouseEnter: function (e) {
                (i.play('mouse-enter', { target: 'WalletCurrency', original: e }), l.onMouseEnter(e));
            },
            onClick: function (e) {
                (l?.onClick(), o && (i.play('click', { target: 'WalletCurrency', original: e }), c.currencyAction(a)));
            },
            children: [
                (0, oe.jsx)('div', {
                    className: z(Te.currencyWrapper, r?.currencyWrapper),
                    children: (0, oe.jsx)(w, {
                        reverse: !0,
                        classNames: { ...r?.currency, icon: z(Te.currencyIcon, r?.currency?.icon) },
                        type: a,
                        size: d,
                        'data-test-id': a,
                        children: (0, oe.jsx)(Ve, {
                            wgMoneyAvailable: o,
                            value: e.value,
                            type: a,
                            classNames: r?.currencyValue,
                        }),
                    }),
                }),
                o &&
                    (0, oe.jsx)('div', {
                        className: z(Te.hintWrapper, r?.hintWrapper),
                        children: (0, oe.jsx)(Ee, {
                            type: a,
                            classNames: {
                                ...r?.hint,
                                discountWithHintText: z(Te.discountWithHintText, r?.hint?.discountWithHintText),
                                onlyDiscount: z(Te.onlyDiscount, r?.hint?.onlyDiscount),
                                onlyHintText: z(Te.onlyHintText, r?.hint?.onlyHintText),
                                base: z(Te.hint, r?.hint?.base),
                                textGradient: { text: Te.text, textOverlay: z(Te.text, Te.text__overlay) },
                            },
                        }),
                    }),
            ],
        });
    }),
    ze = U(function (e) {
        const a = ye().model.currencies.get(e.type);
        return a
            ? (0, oe.jsx)(Oe, { ...e, currency: a })
            : (console.error(`Currency with type ${e.type} is not defined`), null);
    }),
    De = 'Wallet_fc600169',
    Be = [W.crystal, W.gold, W.credits],
    Ue = U(function ({ className: e, classNames: a, currenciesOrder: s = Be }) {
        const { model: r } = ye(),
            t = r.list(s);
        return (0, oe.jsx)('div', {
            'data-name': 'Wallet',
            className: z(De, e),
            children: t.map((e) => (0, oe.jsx)(ze, { type: e, classNames: a }, e)),
        });
    }),
    Le = (0, Y.memo)(({ className: e, classNames: a, currenciesOrder: s, ...r }) =>
        (0, oe.jsx)(fe, { ...r, children: (0, oe.jsx)(Ue, { className: e, classNames: a, currenciesOrder: s }) }),
    ),
    $e = 'CurrentBalance_c7674c4d',
    Fe = n.resolve('aliases'),
    Qe = U(({ className: e }) => {
        const a = (0, Y.useMemo)(() => ({ rootId: Fe.read((e) => e.lobby_header.default.Wallet('resId')) }), []);
        return (0, oe.jsx)('div', { className: (0, te.default)($e, e), children: (0, oe.jsx)(Le, { options: a }) });
    }),
    qe = 'Content_subtitle_6f1a94',
    Ge = 'Content_wrapper_a688e273',
    Ke = (e) => (e >= i.Large ? F.x64 : F.x48),
    Xe = U(() => {
        const { model: e } = re(),
            a = e.computes.product(),
            { mediaSize: s } = p();
        switch (a.type) {
            case G.Vehicle:
                return (0, oe.jsx)(Q, {
                    name: a.vehicleInfo.name,
                    type: a.vehicleInfo.type,
                    tier: a.vehicleInfo.tier,
                    isPremium: a.vehicleInfo.isPremium,
                    vehicleCD: a.vehicleInfo.vehicleCD,
                    role: a.vehicleInfo.roleKey,
                    tooltipArgs: { tooltipId: 'shopVehicle', vehicleCD: a.vehicleInfo.vehicleCD },
                    size: Ke(s),
                    className: qe,
                });
            case G.Style3d:
                return (0, oe.jsx)(f, {
                    text: R.strings.comp7_ext.purchase.success.style3d(),
                    binding: { name: (0, oe.jsx)(K, { name: a.name }), vehicleName: a.vehicleInfo.name },
                    classMix: qe,
                });
            case G.Reward:
                return (0, oe.jsx)('div', {
                    className: Ge,
                    children: (0, oe.jsx)('div', { className: qe, children: a.reward.label }),
                });
            default:
                return (console.error(`Unreachable product type ${a.type}`), null);
        }
    }),
    Je = 'Congratulation_d16d6f64',
    Ze = 'Congratulation_heading_94951bd9',
    Ye = 'Congratulation_footer_f519b4d4',
    ea = 'Congratulation_timer_85938cbe',
    aa = 'Congratulation_description_e5fb3e08',
    sa = 'Congratulation_balance_7e36c12f',
    ra = 'Congratulation_separator_8e19ddae',
    ta = 'Congratulation_buttonWrapper_5adec04e',
    na = 'Congratulation_button_e12951cf',
    ca = U(() => {
        const { controls: e } = re(),
            { mediaSize: a } = p();
        return (0, oe.jsxs)('div', {
            className: Je,
            children: [
                (0, oe.jsx)(Qe, { className: sa }),
                (0, oe.jsx)('div', {
                    className: (0, te.default)(X.heading, Ze),
                    children: R.strings.comp7_ext.purchase.success.heading(),
                }),
                (0, oe.jsx)(Xe, {}),
                (0, oe.jsxs)('div', {
                    className: Ye,
                    children: [
                        (0, oe.jsx)(f, {
                            text: R.strings.comp7_ext.purchase.success.receiving(),
                            binding: { icon: (0, oe.jsx)('div', { className: ea }) },
                            classMix: aa,
                        }),
                        (0, oe.jsx)('div', { className: ra }),
                        (0, oe.jsx)('div', {
                            className: ta,
                            children: (0, oe.jsx)(j, {
                                theme: j.themes.primary,
                                size: $(a),
                                onClick: () => {
                                    (C.sound(R.sounds.comp_7_shop_purchase_done()), e.close());
                                },
                                className: na,
                                children: R.strings.comp7_ext.purchase.affirmative(),
                            }),
                        }),
                    ],
                }),
            ],
        });
    }),
    ia = 'Error_7d25edad',
    oa = 'Error_content_5f4a10ec',
    la = 'Error_icon_698631fb',
    da = 'Error_title_4ecb2575',
    ua = 'Error_description_c7261d2',
    _a = 'Error_separator_4410b8aa',
    ma = 'Error_button_58182876',
    ha = U(() => {
        const { controls: e } = re(),
            { mediaSize: a } = p();
        return (0, oe.jsx)('div', {
            className: ia,
            children: (0, oe.jsxs)('div', {
                className: oa,
                children: [
                    (0, oe.jsx)('div', { className: la }),
                    (0, oe.jsx)(f, { text: R.strings.comp7_ext.purchase.error.title(), classMix: da }),
                    (0, oe.jsx)(f, { text: R.strings.comp7_ext.purchase.error.description(), classMix: ua }),
                    (0, oe.jsx)('div', { className: _a }),
                    (0, oe.jsx)('div', {
                        className: ma,
                        children: (0, oe.jsx)(j, {
                            theme: j.themes.secondary,
                            size: $(a),
                            onClick: () => {
                                (C.sound(R.sounds.comp_7_shop_purchase_done()), e.close());
                            },
                            children: R.strings.comp7_ext.purchase.affirmative(),
                        }),
                    }),
                ],
            }),
        });
    }),
    pa = 'Content_title_21cb0a6f',
    xa = 'Content_title__reward_c151c326',
    fa = 'Content_subtitle_8cf5417d',
    ya = 'Content_style3dSubtitle_b8c34c03',
    ba = 'Content_style3dVehicleName_2841a0a6',
    va = U(() => {
        const { model: e } = re(),
            a = e.computes.product();
        switch (a.type) {
            case G.Vehicle:
                return (0, oe.jsxs)(oe.Fragment, {
                    children: [
                        (0, oe.jsx)(f, {
                            text: R.strings.comp7_ext.purchase.title.vehicle(),
                            binding: {
                                name: (0, oe.jsx)(Q, {
                                    name: a.vehicleInfo.name,
                                    type: a.vehicleInfo.type,
                                    tier: a.vehicleInfo.tier,
                                    role: a.vehicleInfo.roleKey,
                                    vehicleCD: a.vehicleInfo.vehicleCD,
                                    tooltipArgs: { tooltipId: 'shopVehicle', vehicleCD: a.vehicleInfo.vehicleCD },
                                    isPremium: a.vehicleInfo.isPremium,
                                    size: F.x64,
                                    className: pa,
                                }),
                            },
                            classMix: pa,
                        }),
                        a.description && (0, oe.jsx)(T, { text: a.description, classMix: fa }),
                    ],
                });
            case G.Style3d:
                return (0, oe.jsxs)(oe.Fragment, {
                    children: [
                        (0, oe.jsx)(f, {
                            text: R.strings.comp7_ext.purchase.title.style3d(),
                            binding: { name: (0, oe.jsx)(K, { name: a.name }) },
                            classMix: pa,
                        }),
                        (0, oe.jsx)(f, {
                            classMix: ya,
                            text: R.strings.comp7_ext.forVehicle(),
                            binding: {
                                vehicleName: (0, oe.jsx)(Q, {
                                    name: a.vehicleInfo.name,
                                    type: a.vehicleInfo.type,
                                    tier: a.vehicleInfo.tier,
                                    isPremium: a.vehicleInfo.isPremium,
                                    size: F.x48,
                                    className: ba,
                                }),
                            },
                        }),
                    ],
                });
            case G.Reward:
                return (0, oe.jsx)('div', { className: (0, te.default)(pa, xa), children: a.reward.label });
            default:
                return (console.error(`Unreachable product type ${a.type}`), null);
        }
    }),
    ga = {
        base: 'PurchaseConfirm_34fadd9c',
        balance: 'PurchaseConfirm_balance_b01c62d8',
        content: 'PurchaseConfirm_content_11a1daef',
        base__reward: 'PurchaseConfirm_base__reward_8bdc2658',
        separator: 'PurchaseConfirm_separator_4bdcba90',
        alert: 'PurchaseConfirm_alert_a180f70e',
        alertIcon: 'PurchaseConfirm_alertIcon_2b74eeac',
        priceContainer: 'PurchaseConfirm_priceContainer_188919e9',
        price: 'PurchaseConfirm_price_40c2612',
        currency: 'PurchaseConfirm_currency_deb1947d',
        discount: 'PurchaseConfirm_discount_2c4a07e6',
        discount__freeXP: 'PurchaseConfirm_discount__freeXP_ceb0446b',
        discount__credits: 'PurchaseConfirm_discount__credits_95cbffd7',
        discount__gold: 'PurchaseConfirm_discount__gold_ac9be8c6',
        discount__xp: 'PurchaseConfirm_discount__xp_8bdc2658',
        discount__crystal: 'PurchaseConfirm_discount__crystal_8bdc2658',
        discount__equipCoin: 'PurchaseConfirm_discount__equipCoin_6f13de01',
        discountLine: 'PurchaseConfirm_discountLine_b61b5a2b',
        buttons: 'PurchaseConfirm_buttons_b4e35304',
        buttonWrapper: 'PurchaseConfirm_buttonWrapper_68c5e204',
        button: 'PurchaseConfirm_button_1987862d',
        fadeIn: 'PurchaseConfirm_fadeIn_8bdc2658',
        fadeInThreeQuarters: 'PurchaseConfirm_fadeInThreeQuarters_8bdc2658',
        fadeInHalf: 'PurchaseConfirm_fadeInHalf_8bdc2658',
        fadeOut: 'PurchaseConfirm_fadeOut_8bdc2658',
        fadeInWithScale: 'PurchaseConfirm_fadeInWithScale_8bdc2658',
        slideUp: 'PurchaseConfirm_slideUp_8bdc2658',
        scale: 'PurchaseConfirm_scale_8bdc2658',
        raysAppearance: 'PurchaseConfirm_raysAppearance_8bdc2658',
        rotate: 'PurchaseConfirm_rotate_8bdc2658',
        'reverse-rotate': 'PurchaseConfirm_reverse-rotate_8bdc2658',
        glowAppearance: 'PurchaseConfirm_glowAppearance_8bdc2658',
        highlightAppearance: 'PurchaseConfirm_highlightAppearance_8bdc2658',
        blink: 'PurchaseConfirm_blink_8bdc2658',
        slideUpIn: 'PurchaseConfirm_slideUpIn_8bdc2658',
    },
    Ca = U(() => {
        const { model: e, controls: a } = re(),
            { mediaSize: s } = p(),
            { hasSuitableVehicle: r } = e.root.get(),
            t = e.computes.product(),
            n = e.computes.hasDiscount(),
            c = $(s);
        return (0, oe.jsxs)('div', {
            className: (0, te.default)(ga.base, t.type === G.Reward && ga.base__reward),
            children: [
                (0, oe.jsx)(Qe, { className: ga.balance }),
                (0, oe.jsxs)('div', {
                    className: ga.content,
                    children: [
                        (0, oe.jsx)(va, {}),
                        (0, oe.jsx)('div', { className: ga.separator }),
                        t.type === G.Style3d &&
                            !r &&
                            (0, oe.jsx)(f, {
                                text: R.strings.comp7_ext.purchase.noSuitableVehicle(),
                                classMix: ga.alert,
                                binding: { alertIcon: (0, oe.jsx)('div', { className: ga.alertIcon }) },
                            }),
                        (0, oe.jsxs)('div', {
                            className: ga.priceContainer,
                            children: [
                                (0, oe.jsx)('div', {
                                    className: ga.price,
                                    children: R.strings.comp7_ext.purchase.price(),
                                }),
                                n &&
                                    (0, oe.jsxs)('div', {
                                        className: (0, te.default)(ga.discount, ga[`discount__${t.price.name}`]),
                                        children: [
                                            (0, oe.jsx)(M, { value: t.price.value }),
                                            (0, oe.jsx)('div', { className: ga.discountLine }),
                                        ],
                                    }),
                                (0, oe.jsx)(w, {
                                    type: t.price.name,
                                    enough: t.price.isEnough,
                                    size: w.sizes.small,
                                    reverse: !0,
                                    classNames: { base: ga.currency },
                                    children: n ? t.price.discountValue : t.price.value,
                                }),
                            ],
                        }),
                        (0, oe.jsxs)('div', {
                            className: ga.buttons,
                            children: [
                                (0, oe.jsx)(u, {
                                    isEnabled: !t.price.isEnough,
                                    body: R.strings.comp7_ext.products.message.notEnough(),
                                    children: (0, oe.jsx)('div', {
                                        className: ga.buttonWrapper,
                                        children: (0, oe.jsx)(j, {
                                            theme: j.themes.primary,
                                            size: c,
                                            onMouseEnter: () => {
                                                t.price.isEnough && C.highlight();
                                            },
                                            onClick: () => {
                                                t.price.isEnough && (C.click(), a.confirm());
                                            },
                                            silent: !0,
                                            disabled: !t.price.isEnough,
                                            className: ga.button,
                                            children: R.strings.comp7_ext.purchase.confirmButton(),
                                        }),
                                    }),
                                }),
                                (0, oe.jsx)('div', {
                                    className: ga.buttonWrapper,
                                    children: (0, oe.jsx)(j, {
                                        theme: j.themes.secondary,
                                        size: c,
                                        onClick: a.close,
                                        className: ga.button,
                                        children: R.strings.comp7_ext.purchase.cancelButton(),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    ja = 'App_386e819',
    Na = 'App_rewardWrapper_0',
    Ia = 'App_sceneWrapper_ebba30ef',
    wa = 'App_content_9b2432aa',
    Pa = 'App_close_3178228e',
    Aa = 'App_waiting_a67312c1',
    Ra = { [Z.Confirmation]: Ca, [Z.FlyBy]: () => (0, oe.jsx)('div', {}), [Z.Congratulation]: ca, [Z.Error]: ha },
    Ha = U(() => {
        const { model: e, controls: a } = re(),
            { pageState: s, isPurchaseProcessing: r } = e.root.get(),
            t = g(s, {
                from: { opacity: 0 },
                enter: { opacity: 1, delay: e.computes.pageStateTransitionDelay() },
                leave: { opacity: 0 },
                config: { duration: 500 },
            });
        return (0, oe.jsxs)('div', {
            className: ja,
            children: [
                e.computes.isCameraRotationAvailable() &&
                    (0, oe.jsx)('div', {
                        className: Ia,
                        children: (0, oe.jsx)(N, { moveSpace: a.moveSpace, onMouseOver3dScene: a.mouseOver3dScene }),
                    }),
                e.computes.hasAnimatedReward() && (0, oe.jsx)(xe, { className: Na }),
                t((e, a) => {
                    const s = Ra[a];
                    return s
                        ? (0, oe.jsx)(o.div, { style: e, className: wa, children: (0, oe.jsx)(s, {}) })
                        : (console.error('Unreachable code: PurchaseDialog/App.tsx'), null);
                }),
                (0, oe.jsx)(J, { onClick: r ? l : a.close, className: Pa }),
                r &&
                    (0, oe.jsx)('div', {
                        className: Aa,
                        children: (0, oe.jsx)(O, { message: R.strings.waiting.wotShopProductPurchase() }),
                    }),
            ],
        });
    });
H((0, oe.jsx)(d, { children: (0, oe.jsx)(se, { children: (0, oe.jsx)(Ha, {}) }) }));
